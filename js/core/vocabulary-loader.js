/**
 * Vocabulary data loader for ISC2 CC.
 * Loads domain-specific vocabulary databases.
 */

const VOCABULARY_URLS = {
  1: new URL('../../content/isc2-cc-2026/vocabulary/domain-1.json', import.meta.url).href
};

const cache = new Map();

/**
 * Loads vocabulary data for the specified domain.
 * @param {number} [domain=1] - Domain number
 * @returns {Promise<Object>} Vocabulary data object
 */
export async function loadVocabularyData(domain = 1) {
  if (cache.has(domain)) {
    return cache.get(domain);
  }

  const url = VOCABULARY_URLS[domain] || `./content/isc2-cc-2026/vocabulary/domain-${domain}.json`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load vocabulary data: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  cache.set(domain, data);
  return data;
}

/**
 * Clears the vocabulary cache if needed.
 */
export function clearVocabularyCache() {
  cache.clear();
}
