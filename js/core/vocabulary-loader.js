/**
 * Vocabulary data loader for ISC2 CC.
 * Loads domain-specific vocabulary databases.
 */

const VOCABULARY_URLS = {
  1: new URL('../../content/isc2-cc-2026/vocabulary/domain-1.json', import.meta.url).href,
  2: new URL('../../content/isc2-cc-2026/vocabulary/domain-2.json', import.meta.url).href,
  3: new URL('../../content/isc2-cc-2026/vocabulary/domain-3.json', import.meta.url).href,
  4: new URL('../../content/isc2-cc-2026/vocabulary/domain-4.json', import.meta.url).href,
  5: new URL('../../content/isc2-cc-2026/vocabulary/domain-5.json', import.meta.url).href
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
    const domains = await Promise.all(Object.keys(VOCABULARY_URLS).map(loadVocabularyData));
    const combined = {
      domain_id: 'all',
      domain_name: 'All Domains',
      version: '2026',
      total_entries: domains.reduce((sum,d)=>sum+d.entries.length,0),
      last_updated: domains.map(d=>d.last_updated).filter(Boolean).sort().at(-1),
      categories_summary: domains.flatMap(d=>d.entries).reduce((counts,e)=>(counts[e.category]=(counts[e.category]||0)+1,counts),{}),
      entries: domains.flatMap(d=>d.entries)
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

