// MAISON AI EDITOR V1 — Core Editorial Engine
// Executes: Source Discovery -> Ingestion -> Duplicate Check -> AI Fit Analysis -> Draft Generation -> Queue

const storage = require('./storage');
const aiProvider = require('./ai-provider');
const { DuplicateFilter } = require('./duplicate-filter');
const path = require('path');
const fs = require('fs');

class EditorialEngine {
  constructor() {
    this.storage = storage;
    this.aiProvider = aiProvider;
    this.duplicateFilter = new DuplicateFilter(this.storage, this.loadCoreArticles());
    this.isRunning = false;
  }

  loadCoreArticles() {
    try {
      const dataFilePath = path.join(__dirname, '..', '..', 'public', 'maison-data.js');
      if (fs.existsSync(dataFilePath)) {
        const fileContent = fs.readFileSync(dataFilePath, 'utf8');
        // Extract articles array titles and IDs simply
        const matches = fileContent.match(/title:\s*["']([^"']+)["']/g) || [];
        return matches.map(m => {
          const t = m.replace(/title:\s*["']/, '').replace(/["']$/, '');
          return { title: t };
        });
      }
    } catch (e) {
      console.warn('[EditorialEngine] Could not load core articles for duplicate memory:', e.message);
    }
    return [];
  }

  // Trigger manual or scheduled scan
  async runScan() {
    if (this.isRunning) {
      return { status: 'already_running', message: 'Tarama işlemi şu anda devam ediyor.' };
    }

    this.isRunning = true;
    const runId = `run_${Date.now()}`;
    const startTime = Date.now();
    const runLog = {
      run_id: runId,
      started_at: new Date().toISOString(),
      sources_checked: 0,
      items_found: 0,
      duplicates_filtered: 0,
      candidates_created: 0,
      drafts_generated: 0,
      errors: []
    };

    console.log(`[EditorialEngine] 🚀 Tarama başladı (${runId})`);

    try {
      // Refresh core articles in duplicate filter
      this.duplicateFilter.setExistingArticles(this.loadCoreArticles());

      const sources = this.storage.getSources().filter(s => s.active);

      for (const source of sources) {
        runLog.sources_checked++;
        try {
          console.log(`[EditorialEngine] 🔎 Kaynak taranıyor: ${source.name}`);
          
          // Ingest items from source (seed items or simulated live feeds)
          const items = source.seed_items || [];
          runLog.items_found += items.length;

          for (const item of items) {
            const candidatePayload = {
              source_id: source.id,
              source_name: source.name,
              source_url: item.url,
              source_title: item.title,
              source_description: item.summary,
              source_published_at: item.published_at || new Date().toISOString(),
              category: item.category || source.category,
              cover_image: item.cover_image,
              entities: item.entities || [],
              trust_level: source.trust_level
            };

            // 1. Duplicate & Repetition Check (Article 10 & 32)
            const dupResult = this.duplicateFilter.checkDuplicate(candidatePayload);
            if (dupResult.isDuplicate) {
              runLog.duplicates_filtered++;
              console.log(`[EditorialEngine] ⏭️ Yinelenen içerik elendi: "${item.title}" (${dupResult.reason})`);
              continue;
            }

            // 2. Add as Content Candidate
            const savedCandidate = this.storage.addCandidate(candidatePayload);
            runLog.candidates_created++;

            // 3. AI Editorial Fit Analysis
            this.storage.updateCandidate(savedCandidate.id, { status: 'analyzing' });
            const fitAnalysis = await this.aiProvider.analyzeFit(savedCandidate);
            this.storage.updateCandidate(savedCandidate.id, {
              status: fitAnalysis.passed ? 'candidate' : 'rejected',
              fit_analysis: fitAnalysis
            });

            if (!fitAnalysis.passed) {
              console.log(`[EditorialEngine] ⛔ MAISON standardına uymadı (Puan: ${fitAnalysis.overall_fit_score}): "${item.title}"`);
              continue;
            }

            // 4. AI Editorial Draft Generation (NO VERBATIM COPY, ORIGINAL WRITING)
            console.log(`[EditorialEngine] ✍️ Editoryal taslak üretiliyor (Fit Puanı: ${fitAnalysis.overall_fit_score}): "${item.title}"`);
            const draftData = await this.aiProvider.generateEditorialDraft(savedCandidate, fitAnalysis);

            // 5. Place in Editorial Queue
            const savedDraft = this.storage.addDraft(draftData);
            this.storage.updateCandidate(savedCandidate.id, { status: 'drafted' });
            runLog.drafts_generated++;
            console.log(`[EditorialEngine] 📥 Editör kuyruğuna alındı: "${savedDraft.title}" (ID: ${savedDraft.id})`);
          }

          // Mark source success
          this.storage.updateSource(source.id, {
            last_checked_at: new Date().toISOString(),
            consecutive_errors: 0,
            health_status: 'active'
          });

        } catch (sourceErr) {
          console.error(`[EditorialEngine] ⚠️ Kaynak tarama hatası [${source.name}]:`, sourceErr.message);
          const newErrors = (source.consecutive_errors || 0) + 1;
          const healthStatus = newErrors >= 3 ? 'warning' : 'active';
          this.storage.updateSource(source.id, {
            consecutive_errors: newErrors,
            health_status: healthStatus,
            last_error: sourceErr.message
          });
          runLog.errors.push({ source: source.name, error: sourceErr.message });
        }
      }

    } catch (globalErr) {
      console.error('[EditorialEngine] Genel motor hatası:', globalErr.message);
      runLog.errors.push({ source: 'global', error: globalErr.message });
    } finally {
      this.isRunning = false;
      runLog.finished_at = new Date().toISOString();
      runLog.duration_ms = Date.now() - startTime;
      this.storage.addRunLog(runLog);
      console.log(`[EditorialEngine] ✅ Tarama tamamlandı. Bulunan: ${runLog.items_found}, Taslak: ${runLog.drafts_generated}, Yinelenen: ${runLog.duplicates_filtered}`);
    }

    return runLog;
  }
}

const engine = new EditorialEngine();
module.exports = engine;
