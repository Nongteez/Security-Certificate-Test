/**
 * Reading Notes Content Loader
 *
 * Loads domain reading materials, extracts heading hierarchies,
 * and caches parsed Markdown articles for fast continuous reading.
 */

import { parseMarkdown } from './markdown-parser.js';

const readingCache = new Map();

// In Node.js environment, pre-populate cache synchronously for test suites
if (typeof window === 'undefined' && typeof process !== 'undefined' && process.versions?.node) {
  try {
    const fs = await import('node:fs');
    const path = await import('node:path');
    const { fileURLToPath } = await import('node:url');
    const dir = path.dirname(fileURLToPath(import.meta.url));
    const mdPath = path.resolve(dir, '../../content/isc2-cc-2026/reading/domain-1.md');
    const { domain1Metadata, domain1Objectives } = await import('../../content/isc2-cc-2026/reading/domain-1.js');
    if (fs.existsSync(mdPath)) {
      const rawMarkdown = fs.readFileSync(mdPath, 'utf8');
      const renderedHtml = parseMarkdown(rawMarkdown);
      readingCache.set(1, {
        ...domain1Metadata,
        objectives: domain1Objectives,
        rawMarkdown,
        renderedHtml,
        published: true
      });
    }
  } catch (err) {
    // Graceful fallback to async loader
  }
}

/**
 * Returns synchronously cached reading material if available.
 * @param {number|string} domainId
 * @returns {Object|null}
 */
export function getDomainReadingCached(domainId) {
  return readingCache.get(parseInt(domainId, 10)) || null;
}

/**
 * Loads reading material for the specified domain.
 * @param {number|string} domainId - Domain identifier (1..5)
 * @returns {Promise<Object>} Domain reading data with HTML content and topic hierarchy
 */
export async function loadDomainReading(domainId) {
  const dId = parseInt(domainId, 10);
  if (readingCache.has(dId)) {
    return readingCache.get(dId);
  }

  if (dId === 1) {
    const { domain1Metadata, domain1Objectives, getDomain1Markdown } = await import('../../content/isc2-cc-2026/reading/domain-1.js');
    const rawMarkdown = await getDomain1Markdown();
    const renderedHtml = parseMarkdown(rawMarkdown);

    const data = {
      ...domain1Metadata,
      objectives: domain1Objectives,
      rawMarkdown,
      renderedHtml,
      published: true
    };

    readingCache.set(dId, data);
    return data;
  }

  // Domains 2-5 are unpublished in this phase
  const placeholder = {
    id: dId,
    published: false
  };
  return placeholder;
}

/**
 * Clears the reading cache.
 */
export function clearReadingCache() {
  readingCache.clear();
}
