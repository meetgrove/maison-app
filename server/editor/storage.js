// MAISON AI EDITOR V1 — Persistent Storage Layer
// Stores content_sources, content_candidates, drafts, published articles, and run logs

const fs = require('fs');
const path = require('path');
const { DEFAULT_SOURCES } = require('./sources');

const DATA_DIR = path.join(__dirname, '..', '..', 'data');
const STORAGE_FILE = path.join(DATA_DIR, 'editor_storage.json');

class EditorStorage {
  constructor() {
    this.ensureDataDirectory();
    this.data = this.load();
  }

  ensureDataDirectory() {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
  }

  load() {
    try {
      if (fs.existsSync(STORAGE_FILE)) {
        const raw = fs.readFileSync(STORAGE_FILE, 'utf8');
        const parsed = JSON.parse(raw);
        // Ensure default sources are present
        if (!parsed.sources || parsed.sources.length === 0) {
          parsed.sources = JSON.parse(JSON.stringify(DEFAULT_SOURCES));
        }
        if (!parsed.candidates) parsed.candidates = [];
        if (!parsed.drafts) parsed.drafts = [];
        if (!parsed.published) parsed.published = [];
        if (!parsed.rejected) parsed.rejected = [];
        if (!parsed.runs) parsed.runs = [];
        return parsed;
      }
    } catch (e) {
      console.error('[EditorStorage] Error loading storage file, reinitializing:', e.message);
    }

    const initial = {
      version: '1.0.0',
      last_updated: new Date().toISOString(),
      sources: JSON.parse(JSON.stringify(DEFAULT_SOURCES)),
      candidates: [],
      drafts: [],
      published: [],
      rejected: [],
      runs: []
    };
    this.save(initial);
    return initial;
  }

  save(data = this.data) {
    try {
      this.ensureDataDirectory();
      data.last_updated = new Date().toISOString();
      const tmpFile = STORAGE_FILE + '.tmp';
      fs.writeFileSync(tmpFile, JSON.stringify(data, null, 2), 'utf8');
      fs.renameSync(tmpFile, STORAGE_FILE);
      this.data = data;
    } catch (e) {
      console.error('[EditorStorage] Error saving storage file:', e.message);
    }
  }

  // --- Sources ---
  getSources() {
    return this.data.sources;
  }

  getSourceById(sourceId) {
    return this.data.sources.find(s => s.id === sourceId);
  }

  updateSource(sourceId, updates) {
    const idx = this.data.sources.findIndex(s => s.id === sourceId);
    if (idx !== -1) {
      this.data.sources[idx] = { ...this.data.sources[idx], ...updates };
      this.save();
      return this.data.sources[idx];
    }
    return null;
  }

  addSource(sourceData) {
    const newSource = {
      id: sourceData.id || `src_${Date.now()}`,
      name: sourceData.name || 'Yeni Kaynak',
      url: sourceData.url || '',
      feedUrl: sourceData.feedUrl || '',
      type: sourceData.type || 'rss',
      category: sourceData.category || 'KÜLTÜR',
      language: sourceData.language || 'tr',
      country: sourceData.country || 'TR',
      active: sourceData.active !== undefined ? sourceData.active : true,
      trust_level: sourceData.trust_level || 'medium',
      health_status: 'active',
      consecutive_errors: 0,
      last_checked_at: null,
      created_at: new Date().toISOString(),
      seed_items: []
    };
    this.data.sources.push(newSource);
    this.save();
    return newSource;
  }

  // --- Candidates ---
  getCandidates(filterStatus = null) {
    if (!filterStatus) return this.data.candidates;
    return this.data.candidates.filter(c => c.status === filterStatus);
  }

  getCandidateById(id) {
    return this.data.candidates.find(c => c.id === id);
  }

  addCandidate(candidate) {
    const existing = this.data.candidates.find(c => c.id === candidate.id || c.source_url === candidate.source_url);
    if (existing) return existing;

    const cand = {
      id: candidate.id || `cand_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
      source_id: candidate.source_id,
      source_name: candidate.source_name,
      source_url: candidate.source_url,
      source_title: candidate.source_title,
      source_description: candidate.source_description || '',
      source_published_at: candidate.source_published_at || new Date().toISOString(),
      discovered_at: new Date().toISOString(),
      raw_content_reference: candidate.raw_content_reference || '',
      category: candidate.category || 'KÜLTÜR',
      cover_image: candidate.cover_image || '/images/editorial/sculpture_terrace_view.jpg',
      image_attribution: candidate.image_attribution || candidate.source_name,
      entities: candidate.entities || [],
      status: candidate.status || 'discovered',
      fit_analysis: candidate.fit_analysis || null
    };

    this.data.candidates.unshift(cand);
    this.save();
    return cand;
  }

  updateCandidate(id, updates) {
    const idx = this.data.candidates.findIndex(c => c.id === id);
    if (idx !== -1) {
      this.data.candidates[idx] = { ...this.data.candidates[idx], ...updates };
      this.save();
      return this.data.candidates[idx];
    }
    return null;
  }

  // --- Drafts ---
  getDrafts(filterStatus = null) {
    if (!filterStatus) return this.data.drafts;
    return this.data.drafts.filter(d => d.status === filterStatus);
  }

  getDraftById(id) {
    return this.data.drafts.find(d => d.id === id);
  }

  addDraft(draft) {
    const existingIdx = this.data.drafts.findIndex(d => d.id === draft.id || d.candidate_id === draft.candidate_id);
    if (existingIdx !== -1) {
      this.data.drafts[existingIdx] = { ...this.data.drafts[existingIdx], ...draft, updated_at: new Date().toISOString() };
      this.save();
      return this.data.drafts[existingIdx];
    }

    const newDraft = {
      id: draft.id || `draft_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
      candidate_id: draft.candidate_id,
      title: draft.title,
      subtitle: draft.subtitle,
      curation_tag: draft.curation_tag || 'MAISON Editoryal Seçki',
      category: draft.category || 'KÜLTÜR & SANAT',
      sub_category: draft.sub_category || 'Denemeler',
      read_time: draft.read_time || '5 dk okuma',
      why_it_matters: draft.why_it_matters || '',
      quote: draft.quote || '',
      excerpt: draft.excerpt || '',
      body: Array.isArray(draft.body) ? draft.body : [draft.body || ''],
      maison_perspective: draft.maison_perspective || '',
      author_name: draft.author_name || 'MAISON Küratör Masası',
      author_role: draft.author_role || 'Editoryal Seçki',
      author_avatar: draft.author_avatar || '/images/editorial/author_deniz.jpg',
      cover_image: draft.cover_image || '/images/editorial/sculpture_terrace_view.jpg',
      source_name: draft.source_name,
      source_url: draft.source_url,
      tags: draft.tags || [],
      needs_verification: draft.needs_verification || false,
      verification_notes: draft.verification_notes || '',
      fit_score: draft.fit_score || 85,
      fit_analysis: draft.fit_analysis || {},
      status: 'pending_review', // pending_review | approved | rejected | published
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    this.data.drafts.unshift(newDraft);
    this.save();
    return newDraft;
  }

  updateDraft(id, updates) {
    const idx = this.data.drafts.findIndex(d => d.id === id);
    if (idx !== -1) {
      this.data.drafts[idx] = { ...this.data.drafts[idx], ...updates, updated_at: new Date().toISOString() };
      this.save();
      return this.data.drafts[idx];
    }
    return null;
  }

  // --- Publish ---
  publishDraft(draftId) {
    const draft = this.getDraftById(draftId);
    if (!draft) return null;

    // Convert draft to MAISON Article schema
    const publishedArticle = {
      id: `ai_${draft.id}`,
      originalDraftId: draft.id,
      candidateId: draft.candidate_id,
      title: draft.title,
      subtitle: draft.subtitle,
      pillar: "OKU",
      type: "Editoryal Keşif",
      curationTag: draft.curation_tag,
      authorId: "maison_editorial",
      authorName: draft.author_name,
      authorRole: draft.author_role,
      authorAvatar: draft.author_avatar,
      date: new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date()),
      readTime: draft.read_time,
      hasAudio: false,
      audioDuration: "",
      category: draft.category,
      subCategory: draft.sub_category,
      whyItMatters: draft.why_it_matters,
      heroImage: draft.cover_image,
      quote: draft.quote,
      excerpt: draft.excerpt,
      body: draft.body,
      maisonPerspective: draft.maison_perspective,
      sourceName: draft.source_name,
      sourceUrl: draft.source_url,
      tags: draft.tags,
      publishedAt: new Date().toISOString(),
      isAiCurated: true
    };

    // Update draft status
    this.updateDraft(draftId, { status: 'published', published_at: new Date().toISOString() });
    
    // Update candidate status
    if (draft.candidate_id) {
      this.updateCandidate(draft.candidate_id, { status: 'published' });
    }

    // Add to published collection
    const existingPubIdx = this.data.published.findIndex(p => p.id === publishedArticle.id);
    if (existingPubIdx !== -1) {
      this.data.published[existingPubIdx] = publishedArticle;
    } else {
      this.data.published.unshift(publishedArticle);
    }

    this.save();
    return publishedArticle;
  }

  // --- Reject ---
  rejectCandidateOrDraft(id, reason = 'Not suitable for MAISON') {
    // Check if draft
    const draft = this.getDraftById(id);
    if (draft) {
      this.updateDraft(id, { status: 'rejected', reject_reason: reason });
      if (draft.candidate_id) {
        this.updateCandidate(draft.candidate_id, { status: 'rejected', reject_reason: reason });
      }
      this.data.rejected.unshift({
        id,
        type: 'draft',
        title: draft.title,
        source: draft.source_name,
        reason,
        rejected_at: new Date().toISOString()
      });
      this.save();
      return true;
    }

    // Check if candidate
    const cand = this.getCandidateById(id);
    if (cand) {
      this.updateCandidate(id, { status: 'rejected', reject_reason: reason });
      this.data.rejected.unshift({
        id,
        type: 'candidate',
        title: cand.source_title,
        source: cand.source_name,
        reason,
        rejected_at: new Date().toISOString()
      });
      this.save();
      return true;
    }

    return false;
  }

  getPublished() {
    return this.data.published;
  }

  getRejected() {
    return this.data.rejected;
  }

  // --- Run Logs ---
  addRunLog(runLog) {
    const entry = {
      run_id: runLog.run_id || `run_${Date.now()}`,
      started_at: runLog.started_at || new Date().toISOString(),
      finished_at: runLog.finished_at || new Date().toISOString(),
      duration_ms: runLog.duration_ms || 0,
      sources_checked: runLog.sources_checked || 0,
      items_found: runLog.items_found || 0,
      duplicates_filtered: runLog.duplicates_filtered || 0,
      candidates_created: runLog.candidates_created || 0,
      drafts_generated: runLog.drafts_generated || 0,
      errors: runLog.errors || []
    };
    this.data.runs.unshift(entry);
    // Keep max 50 runs
    if (this.data.runs.length > 50) {
      this.data.runs = this.data.runs.slice(0, 50);
    }
    this.save();
    return entry;
  }

  getRunLogs() {
    return this.data.runs;
  }

  // Summary statistics for Editor Header
  getStats() {
    const today = new Date().toISOString().slice(0, 10);
    const todayFound = this.data.candidates.filter(c => c.discovered_at && c.discovered_at.startsWith(today)).length;
    const pendingReview = this.data.drafts.filter(d => d.status === 'pending_review').length;
    const totalPublished = this.data.published.length;
    const totalSources = this.data.sources.filter(s => s.active).length;
    const totalDrafts = this.data.drafts.length;
    const totalRejected = this.data.rejected.length;

    return {
      todayFound,
      pendingReview,
      totalPublished,
      totalSources,
      totalDrafts,
      totalRejected
    };
  }
}

const storage = new EditorStorage();
module.exports = storage;
