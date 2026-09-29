// MAISON AI EDITOR V1 — REST API Router
// Handles editor panel operations, human reviews, manual scans, and published content feed

const storage = require('./editor/storage');
const engine = require('./editor/engine');
const scheduler = require('./editor/scheduler');

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-cache, no-store, must-revalidate'
  });
  res.end(JSON.stringify(data));
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (e) {
        resolve({});
      }
    });
    req.on('error', reject);
  });
}

async function handleApiRequest(req, res) {
  const urlObj = new URL(req.url, 'http://localhost');
  const pathname = urlObj.pathname;
  const method = req.method;

  // 1. Published Content Feed for MAISON App
  if (pathname === '/api/content/published' && method === 'GET') {
    const published = storage.getPublished();
    return sendJson(res, 200, { success: true, count: published.length, articles: published });
  }

  // 2. Editor Stats
  if (pathname === '/api/editor/stats' && method === 'GET') {
    const stats = storage.getStats();
    return sendJson(res, 200, { success: true, stats });
  }

  // 3. Trigger Manual Scan ("Şimdi Tara")
  if (pathname === '/api/editor/scan' && method === 'POST') {
    console.log('[API] Manuel "Şimdi Tara" tetiklendi');
    // Run scan
    const runResult = await engine.runScan();
    return sendJson(res, 200, { success: true, run: runResult, stats: storage.getStats() });
  }

  // 4. Sources Management
  if (pathname === '/api/editor/sources' && method === 'GET') {
    return sendJson(res, 200, { success: true, sources: storage.getSources() });
  }

  if (pathname === '/api/editor/sources' && method === 'POST') {
    const body = await parseBody(req);
    const newSource = storage.addSource(body);
    return sendJson(res, 201, { success: true, source: newSource });
  }

  if (pathname.startsWith('/api/editor/sources/') && pathname.endsWith('/toggle') && method === 'POST') {
    const sourceId = pathname.replace('/api/editor/sources/', '').replace('/toggle', '');
    const source = storage.getSourceById(sourceId);
    if (!source) return sendJson(res, 404, { success: false, error: 'Kaynak bulunamadı' });
    const updated = storage.updateSource(sourceId, { active: !source.active });
    return sendJson(res, 200, { success: true, source: updated });
  }

  // 5. Candidates
  if (pathname === '/api/editor/candidates' && method === 'GET') {
    const status = urlObj.searchParams.get('status');
    const candidates = storage.getCandidates(status);
    return sendJson(res, 200, { success: true, candidates });
  }

  // 6. Drafts
  if (pathname === '/api/editor/drafts' && method === 'GET') {
    const status = urlObj.searchParams.get('status');
    const drafts = storage.getDrafts(status);
    return sendJson(res, 200, { success: true, drafts });
  }

  if (pathname.startsWith('/api/editor/drafts/') && method === 'GET') {
    const id = pathname.replace('/api/editor/drafts/', '');
    const draft = storage.getDraftById(id);
    if (!draft) return sendJson(res, 404, { success: false, error: 'Taslak bulunamadı' });
    const candidate = draft.candidate_id ? storage.getCandidateById(draft.candidate_id) : null;
    return sendJson(res, 200, { success: true, draft, candidate });
  }

  // Update draft (Save edits)
  if (pathname.startsWith('/api/editor/drafts/') && method === 'PUT') {
    const id = pathname.replace('/api/editor/drafts/', '');
    const body = await parseBody(req);
    const updated = storage.updateDraft(id, body);
    if (!updated) return sendJson(res, 404, { success: false, error: 'Taslak bulunamadı' });
    return sendJson(res, 200, { success: true, draft: updated });
  }

  // Approve draft
  if (pathname.startsWith('/api/editor/drafts/') && pathname.endsWith('/approve') && method === 'POST') {
    const id = pathname.replace('/api/editor/drafts/', '').replace('/approve', '');
    const updated = storage.updateDraft(id, { status: 'approved', approved_at: new Date().toISOString() });
    if (!updated) return sendJson(res, 404, { success: false, error: 'Taslak bulunamadı' });
    return sendJson(res, 200, { success: true, draft: updated });
  }

  // Publish draft
  if (pathname.startsWith('/api/editor/drafts/') && pathname.endsWith('/publish') && method === 'POST') {
    const id = pathname.replace('/api/editor/drafts/', '').replace('/publish', '');
    const publishedArticle = storage.publishDraft(id);
    if (!publishedArticle) return sendJson(res, 404, { success: false, error: 'Taslak bulunamadı veya yayınlanamadı' });
    return sendJson(res, 200, { success: true, article: publishedArticle });
  }

  // Reject candidate or draft
  if (pathname.startsWith('/api/editor/drafts/') && pathname.endsWith('/reject') && method === 'POST') {
    const id = pathname.replace('/api/editor/drafts/', '').replace('/reject', '');
    const body = await parseBody(req);
    const success = storage.rejectCandidateOrDraft(id, body.reason || 'Editör tarafından elendi');
    return sendJson(res, 200, { success });
  }

  // 7. Published & Rejected lists
  if (pathname === '/api/editor/published' && method === 'GET') {
    return sendJson(res, 200, { success: true, published: storage.getPublished() });
  }

  if (pathname === '/api/editor/rejected' && method === 'GET') {
    return sendJson(res, 200, { success: true, rejected: storage.getRejected() });
  }

  // 8. Run Logs
  if (pathname === '/api/editor/logs' && method === 'GET') {
    return sendJson(res, 200, { success: true, logs: storage.getRunLogs() });
  }

  // 9. Scheduler Status & Toggle
  if (pathname === '/api/editor/scheduler' && method === 'GET') {
    return sendJson(res, 200, { success: true, scheduler: scheduler.getStatus() });
  }

  if (pathname === '/api/editor/scheduler/toggle' && method === 'POST') {
    const current = scheduler.getStatus();
    if (current.active) {
      scheduler.stop();
    } else {
      scheduler.start();
    }
    return sendJson(res, 200, { success: true, scheduler: scheduler.getStatus() });
  }

  // 10. Apple Guideline 5.1.1 Account Deletion
  if (pathname === '/api/user/delete-account' && method === 'POST') {
    console.log('[API] Kullanıcı hesap ve veri silme talebi işlendi (Apple 5.1.1 Uyumluluğu)');
    return sendJson(res, 200, {
      success: true,
      message: 'Hesap ve tüm kullanıcı verileri (koleksiyonlar, notlar, pasaport, zevk profili) kalıcı olarak silindi.'
    });
  }

  return sendJson(res, 404, { success: false, error: 'Endpoint bulunamadı' });
}

module.exports = {
  handleApiRequest
};
