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

    const md2Path = path.resolve(dir, '../../content/isc2-cc-2026/reading/domain-2.md');
    if (fs.existsSync(md2Path)) {
      const { domain2Metadata, domain2Objectives, domain2Review } = await import('../../content/isc2-cc-2026/reading/domain-2.js');
      const rawMarkdown2 = fs.readFileSync(md2Path, 'utf8');
      const renderedHtml2 = parseMarkdown(rawMarkdown2);
      readingCache.set(2, {
        ...domain2Metadata,
        objectives: domain2Objectives,
        review: domain2Review,
        rawMarkdown: rawMarkdown2,
        renderedHtml: renderedHtml2,
        published: true
      });
    }

    const md3Path = path.resolve(dir, '../../content/isc2-cc-2026/reading/domain-3.md');
    if (fs.existsSync(md3Path)) {
      const { domain3Metadata, domain3Objectives, domain3Review } = await import('../../content/isc2-cc-2026/reading/domain-3.js');
      const rawMarkdown3 = fs.readFileSync(md3Path, 'utf8');
      const renderedHtml3 = parseMarkdown(rawMarkdown3);
      readingCache.set(3, {
        ...domain3Metadata,
        objectives: domain3Objectives,
        review: domain3Review,
        rawMarkdown: rawMarkdown3,
        renderedHtml: renderedHtml3,
        published: true
      });
    }

    const md4Path = path.resolve(dir, '../../content/isc2-cc-2026/reading/domain-4.md');
    if (fs.existsSync(md4Path)) {
      const { domain4Metadata, domain4Objectives, domain4Review } = await import('../../content/isc2-cc-2026/reading/domain-4.js');
      const rawMarkdown4 = fs.readFileSync(md4Path, 'utf8');
      const renderedHtml4 = parseMarkdown(rawMarkdown4);
      readingCache.set(4, {
        ...domain4Metadata,
        objectives: domain4Objectives,
        review: domain4Review,
        rawMarkdown: rawMarkdown4,
        renderedHtml: renderedHtml4,
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

  if (dId === 2) {
    const { domain2Metadata, domain2Objectives, domain2Review, getDomain2Markdown } = await import('../../content/isc2-cc-2026/reading/domain-2.js');
    const rawMarkdown = await getDomain2Markdown();
    const renderedHtml = parseMarkdown(rawMarkdown);

    const data = {
      ...domain2Metadata,
      objectives: domain2Objectives,
      review: domain2Review,
      rawMarkdown,
      renderedHtml,
      published: true
    };

    readingCache.set(dId, data);
    return data;
  }

  if (dId === 3) {
    const { domain3Metadata, domain3Objectives, domain3Review, getDomain3Markdown } = await import('../../content/isc2-cc-2026/reading/domain-3.js');
    const rawMarkdown = await getDomain3Markdown();
    const renderedHtml = parseMarkdown(rawMarkdown);

    const data = {
      ...domain3Metadata,
      objectives: domain3Objectives,
      review: domain3Review,
      rawMarkdown,
      renderedHtml,
      published: true
    };

    readingCache.set(dId, data);
    return data;
  }

  if (dId === 4) {
    const { domain4Metadata, domain4Objectives, domain4Review, getDomain4Markdown } = await import('../../content/isc2-cc-2026/reading/domain-4.js');
    const rawMarkdown = await getDomain4Markdown();
    const renderedHtml = parseMarkdown(rawMarkdown);

    const data = {
      ...domain4Metadata,
      objectives: domain4Objectives,
      review: domain4Review,
      rawMarkdown,
      renderedHtml,
      published: true
    };

    readingCache.set(dId, data);
    return data;
  }

  // Domain 5 is unpublished in this phase
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
