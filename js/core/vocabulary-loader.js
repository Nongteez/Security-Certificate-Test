/**
 * Vocabulary data loader for ISC2 CC.
 * Loads domain-specific vocabulary databases.
 */

const VOCABULARY_URLS = {
  1: new URL('../../content/isc2-cc-2026/vocabulary/domain-1.json', import.meta.url).href,
  2: new URL('../../content/isc2-cc-2026/vocabulary/domain-2.json', import.meta.url).href,
  3: new URL('../../content/isc2-cc-2026/vocabulary/domain-3.json', import.meta.url).href,
  4: new URL('../../content/isc2-cc-2026/vocabulary/domain-4.json', import.meta.url).href
};

const cache = new Map();

/**
 * Loads vocabulary data for the specified domain or all domains.
 * @param {number|string} [domain=1] - Domain number (1, 2, 3, 4) or 'all'
 * @returns {Promise<Object>} Vocabulary data object
 */
export async function loadVocabularyData(domain = 1) {
  if (domain === 'all') {
    if (cache.has('all')) {
      return cache.get('all');
    }
    const [d1, d2, d3, d4] = await Promise.all([
      loadVocabularyData(1),
      loadVocabularyData(2),
      loadVocabularyData(3),
      loadVocabularyData(4)
    ]);
    const combined = {
      domain_id: 'all',
      domain_name: 'All Domains',
      version: '2026',
      total_entries: (d1.total_entries || d1.entries.length) + (d2.total_entries || d2.entries.length) + (d3.total_entries || d3.entries.length) + (d4.total_entries || d4.entries.length),
      last_updated: d4.last_updated || d3.last_updated || d2.last_updated || d1.last_updated,
      categories_summary: {
        core_term: (d1.categories_summary?.core_term || 0) + (d2.categories_summary?.core_term || 0) + (d3.categories_summary?.core_term || 0) + (d4.categories_summary?.core_term || 0),
        acronym: (d1.categories_summary?.acronym || 0) + (d2.categories_summary?.acronym || 0) + (d3.categories_summary?.acronym || 0) + (d4.categories_summary?.acronym || 0),
        exam_language: (d1.categories_summary?.exam_language || 0) + (d2.categories_summary?.exam_language || 0) + (d3.categories_summary?.exam_language || 0) + (d4.categories_summary?.exam_language || 0),
        scenario_vocabulary: (d1.categories_summary?.scenario_vocabulary || 0) + (d2.categories_summary?.scenario_vocabulary || 0) + (d3.categories_summary?.scenario_vocabulary || 0) + (d4.categories_summary?.scenario_vocabulary || 0),
        confusing_term: (d1.categories_summary?.confusing_term || 0) + (d2.categories_summary?.confusing_term || 0) + (d3.categories_summary?.confusing_term || 0) + (d4.categories_summary?.confusing_term || 0)
      },
      entries: [...d1.entries, ...d2.entries, ...d3.entries, ...d4.entries]
    };
    cache.set('all', combined);
    return combined;
  }

  const domainNum = Number(domain);
  if (cache.has(domainNum)) {
    return cache.get(domainNum);
  }

  const url = VOCABULARY_URLS[domainNum] || `./content/isc2-cc-2026/vocabulary/domain-${domainNum}.json`;
  let data;
  if (typeof window === 'undefined' && typeof process !== 'undefined' && process.versions?.node) {
    const fs = await import('node:fs');
    const { fileURLToPath } = await import('node:url');
    const filePath = url.startsWith('file:') ? fileURLToPath(url) : url;
    const content = fs.readFileSync(filePath, 'utf8');
    data = JSON.parse(content);
  } else {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to load vocabulary data: ${response.status} ${response.statusText}`);
    }
    data = await response.json();
  }
  cache.set(domainNum, data);
  return data;
}

/**
 * Loads all available vocabulary data combined across domains.
 * @returns {Promise<Object>} Combined vocabulary data object
 */
export async function loadAllVocabularyData() {
  return loadVocabularyData('all');
}

/**
 * Clears the vocabulary cache if needed.
 */
export function clearVocabularyCache() {
  cache.clear();
}

