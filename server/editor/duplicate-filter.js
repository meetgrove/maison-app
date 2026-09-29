// MAISON AI EDITOR V1 — Duplicate & Editorial Memory Filter
// Articles 10, 32: URL normalization, title similarity, entity checks & editorial memory

function normalizeUrl(url) {
  if (!url) return '';
  try {
    const parsed = new URL(url);
    // Strip tracking parameters
    const cleanParams = new URLSearchParams();
    parsed.searchParams.forEach((val, key) => {
      if (!key.startsWith('utm_') && !['ref', 'source', 'fbclid', 'gclid'].includes(key)) {
        cleanParams.append(key, val);
      }
    });
    parsed.search = cleanParams.toString() ? `?${cleanParams.toString()}` : '';
    parsed.hash = '';
    return parsed.toString().toLowerCase().replace(/\/+$/, '');
  } catch (e) {
    return url.trim().toLowerCase().replace(/\/+$/, '');
  }
}

function tokenize(text) {
  if (!text) return new Set();
  const cleaned = text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2);
  return new Set(cleaned);
}

function calculateJaccardSimilarity(textA, textB) {
  const setA = tokenize(textA);
  const setB = tokenize(textB);
  if (setA.size === 0 || setB.size === 0) return 0;

  let intersectionCount = 0;
  setA.forEach(item => {
    if (setB.has(item)) intersectionCount++;
  });

  const unionSize = new Set([...setA, ...setB]).size;
  return unionSize === 0 ? 0 : intersectionCount / unionSize;
}

function levenshteinDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
  const costs = [];
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) {
        costs[j] = j;
      } else if (j > 0) {
        let newValue = costs[j - 1];
        if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
          newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
        }
        costs[j - 1] = lastValue;
        lastValue = newValue;
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}

class DuplicateFilter {
  constructor(storage, existingArticles = []) {
    this.storage = storage;
    this.existingArticles = existingArticles;
  }

  setExistingArticles(articles) {
    this.existingArticles = articles || [];
  }

  checkDuplicate(candidate) {
    const normUrl = normalizeUrl(candidate.source_url || candidate.url);
    const candidateTitle = candidate.source_title || candidate.title || '';

    // 1. Direct URL check against existing candidates & published
    const allCandidates = this.storage.getCandidates();
    const urlMatchCand = allCandidates.find(c => c.id !== candidate.id && normalizeUrl(c.source_url) === normUrl);
    if (urlMatchCand) {
      return {
        isDuplicate: true,
        reason: 'duplicate_url',
        message: `Aynı URL zaten adaylar arasında kayıtlı: "${urlMatchCand.source_title}"`,
        matchedId: urlMatchCand.id
      };
    }

    const allPublished = this.storage.getPublished();
    const urlMatchPub = allPublished.find(p => normalizeUrl(p.sourceUrl) === normUrl);
    if (urlMatchPub) {
      return {
        isDuplicate: true,
        reason: 'duplicate_url_published',
        message: `Bu URL daha önce MAISON'da yayınlandı: "${urlMatchPub.title}"`,
        matchedId: urlMatchPub.id
      };
    }

    // 2. Title similarity check against candidates and drafts
    const allDrafts = this.storage.getDrafts();
    for (const draft of allDrafts) {
      if (draft.candidate_id === candidate.id) continue;
      const sim = calculateJaccardSimilarity(candidateTitle, draft.title);
      if (sim > 0.65) {
        return {
          isDuplicate: true,
          reason: 'duplicate_draft_title',
          message: `Benzer başlıkta bir taslak mevcut (%${Math.round(sim * 100)} benzerlik): "${draft.title}"`,
          matchedId: draft.id
        };
      }
    }

    // 3. Editorial Memory check against core MAISON articles
    const coreArticles = this.existingArticles || [];
    for (const art of coreArticles) {
      const sim = calculateJaccardSimilarity(candidateTitle, art.title);
      if (sim > 0.60) {
        return {
          isDuplicate: true,
          reason: 'editorial_memory_repetition',
          message: `MAISON arşivinde çok benzer bir konu mevcut (%${Math.round(sim * 100)}): "${art.title}"`,
          matchedId: art.id
        };
      }
    }

    return {
      isDuplicate: false,
      reason: null
    };
  }
}

module.exports = {
  DuplicateFilter,
  normalizeUrl,
  calculateJaccardSimilarity
};
