// MAISON AI EDITOR V1 — Scheduler Layer
// Articles 24 & 26: Periodic execution architecture (Daily at 06:00 or configurable timer)

const engine = require('./engine');

class EditorScheduler {
  constructor() {
    this.timer = null;
    this.cronSchedule = '06:00 Daily';
    this.intervalMs = 24 * 60 * 60 * 1000; // 24 hours
    this.lastRun = null;
    this.nextRun = null;
    this.active = false;
  }

  start() {
    if (this.active) return;
    this.active = true;
    console.log('[EditorScheduler] ⏱️ AI Editör zamanlayıcısı başlatıldı (Günde 1 kez / 06:00)');
    
    // Calculate next run for 06:00 AM
    this.scheduleNextMorningRun();
  }

  scheduleNextMorningRun() {
    const now = new Date();
    const next = new Date(now);
    next.setHours(6, 0, 0, 0);
    if (next <= now) {
      next.setDate(next.getDate() + 1);
    }
    const delay = next.getTime() - now.getTime();
    this.nextRun = next.toISOString();

    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(async () => {
      if (!this.active) return;
      console.log('[EditorScheduler] 🔔 Sabah 06:00 editoryal taraması tetiklendi');
      this.lastRun = new Date().toISOString();
      await engine.runScan();
      this.scheduleNextMorningRun();
    }, delay);
  }

  stop() {
    if (this.timer) clearTimeout(this.timer);
    this.active = false;
    console.log('[EditorScheduler] 🛑 AI Editör zamanlayıcısı durduruldu');
  }

  async runNow() {
    this.lastRun = new Date().toISOString();
    return await engine.runScan();
  }

  getStatus() {
    return {
      active: this.active,
      cronSchedule: this.cronSchedule,
      lastRun: this.lastRun,
      nextRun: this.nextRun,
      isEngineRunning: engine.isRunning
    };
  }
}

const scheduler = new EditorScheduler();
module.exports = scheduler;
