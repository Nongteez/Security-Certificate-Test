/**
 * Reading Notes State Persistence & Deep Linking Module
 *
 * Implements deterministic persistence for reading progress under:
 * 'sec_cert_reading_progress_v1'
 *
 * Supports:
 * - Last active Reading Notes domain
 * - Last active subsection / topic anchor
 * - Last meaningful scroll position
 * - Per-domain independent location memory
 * - Deep-link hash parsing and validation
 * - Defensive JSON parsing with memory fallback
 */

export const READING_PROGRESS_KEY = 'sec_cert_reading_progress_v1';
export const READING_SCHEMA_VERSION = 1;
export const VALID_DOMAIN_IDS = Object.freeze([1, 2, 3, 4]);

// In-memory fallback storage when localStorage is unavailable, disabled, or throws quota errors
const memoryStorage = new Map();

/**
 * Returns the storage engine: provided storage, window.localStorage, or memory fallback.
 * @param {Storage} [provided]
 * @returns {{ getItem: Function, setItem: Function, removeItem: Function }}
 */
function resolveStorage(provided) {
  if (provided && typeof provided.getItem === 'function') {
    return provided;
  }
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const test = '__rn_storage_test__';
      window.localStorage.setItem(test, test);
      window.localStorage.removeItem(test);
      return window.localStorage;
    }
    if (typeof globalThis !== 'undefined' && globalThis.localStorage) {
      return globalThis.localStorage;
    }
  } catch (e) {
    // Storage blocked or quota exceeded
  }
  return {
    getItem: key => memoryStorage.get(key) || null,
    setItem: (key, val) => memoryStorage.set(key, String(val)),
    removeItem: key => memoryStorage.delete(key)
  };
}

/**
 * Validates domain ID (strictly published domains 1..4).
 * Domain 5 is unpublished and cannot be a resume destination.
 * @param {any} id
 * @returns {number|null}
 */
export function sanitizeDomainId(id) {
  const num = parseInt(id, 10);
  return VALID_DOMAIN_IDS.includes(num) ? num : null;
}

/**
 * Validates topic/anchor identifier.
 * Accepts recognized subsection anchors (topic-*, obj-*, domain-*-review).
 * @param {any} anchor
 * @param {number} [domainId]
 * @returns {string|null}
 */
export function sanitizeAnchorId(anchor, domainId = null) {
  if (typeof anchor !== 'string' || !anchor.trim()) return null;
  const clean = anchor.trim();
  // Safe format checks: alphanumeric and dashes only
  if (!/^[a-z0-9-]+$/i.test(clean)) return null;

  // If domainId provided, ensure anchor matches domain namespace
  if (domainId) {
    const m = clean.match(/^(?:topic|obj|domain)-(\d+)(?:-|$)/);
    if (m) {
      if (parseInt(m[1], 10) !== domainId) return null;
    }
  }
  return clean;
}

/**
 * Validates scroll Y offset.
 * @param {any} y
 * @returns {number}
 */
export function sanitizeScrollY(y) {
  const num = Number(y);
  return Number.isFinite(num) && num >= 0 ? Math.round(num) : 0;
}

/**
 * Validates and normalizes persisted progress object.
 * Returns null if data is unrecoverably invalid or has unsupported schema version.
 * @param {any} data
 * @returns {Object|null}
 */
export function validateProgressData(data) {
  if (!data || typeof data !== 'object' || Array.isArray(data)) return null;
  if (data.schemaVersion !== READING_SCHEMA_VERSION) return null;

  const lastDomainId = sanitizeDomainId(data.lastDomainId) || 1;
  const lastTopicId = sanitizeAnchorId(data.lastTopicId, lastDomainId);
  const lastScrollY = sanitizeScrollY(data.lastScrollY);
  const updatedAt = typeof data.updatedAt === 'string' ? data.updatedAt : new Date().toISOString();

  const domains = {};
  if (data.domains && typeof data.domains === 'object' && !Array.isArray(data.domains)) {
    for (const dId of VALID_DOMAIN_IDS) {
      const entry = data.domains[dId] || data.domains[String(dId)];
      if (entry && typeof entry === 'object') {
        const topicId = sanitizeAnchorId(entry.lastTopicId, dId);
        const objId = typeof entry.lastObjectiveId === 'string' && entry.lastObjectiveId.trim()
          ? entry.lastObjectiveId.trim()
          : null;
        domains[dId] = {
          domainId: dId,
          lastTopicId: topicId,
          lastObjectiveId: objId,
          lastScrollY: sanitizeScrollY(entry.lastScrollY),
          updatedAt: typeof entry.updatedAt === 'string' ? entry.updatedAt : updatedAt
        };
      }
    }
  }

  return {
    schemaVersion: READING_SCHEMA_VERSION,
    lastDomainId,
    lastTopicId,
    lastScrollY,
    updatedAt,
    domains
  };
}

/**
 * Creates a default empty progress state.
 * @returns {Object}
 */
export function createDefaultProgressState() {
  return {
    schemaVersion: READING_SCHEMA_VERSION,
    lastDomainId: 1,
    lastTopicId: null,
    lastScrollY: 0,
    updatedAt: new Date().toISOString(),
    domains: {
      1: { domainId: 1, lastTopicId: null, lastObjectiveId: '1.1', lastScrollY: 0, updatedAt: new Date().toISOString() }
    }
  };
}

/**
 * Parses URL hash into Reading Notes route/deep link information.
 * Supports backward-compatible anchor formats:
 * - #topic-2-1-grc-foundations
 * - #obj-3-1
 * - #domain-2-review
 * - #/reading/domain-2
 * - #/reading/domain-2#topic-2-1-grc-foundations
 * - #/reading/topic-2-1-grc-foundations
 * - #/reading/4
 * - #reading-notes
 *
 * @param {string} hash - window.location.hash or anchor string
 * @returns {{ isReadingRoute: boolean, domainId: number|null, anchorId: string|null }}
 */
export function parseReadingDeepLink(hash) {
  if (typeof hash !== 'string' || !hash.trim()) {
    return { isReadingRoute: false, domainId: null, anchorId: null };
  }

  let raw = hash.trim();
  // Strip leading #
  if (raw.startsWith('#')) raw = raw.slice(1);
  if (raw.startsWith('/')) raw = raw.slice(1);

  // If hash belongs to Learning Slides (e.g. learning/lesson-...) or quiz, it's not a reading route
  if (raw.startsWith('learning/') || raw === 'quiz' || raw.startsWith('quiz/') || raw === 'vocabulary') {
    return { isReadingRoute: false, domainId: null, anchorId: null };
  }

  // Case 1: Generic reading entry (#reading-notes or #reading)
  if (raw === 'reading-notes' || raw === 'reading') {
    return { isReadingRoute: true, domainId: null, anchorId: null };
  }

  // Case 2: Deep link with path prefix #/reading/domain-X or #/reading/X
  const pathPrefixMatch = raw.match(/^reading\/(?:domain-)?(\d+)(?:[#\/](.+))?$/i);
  if (pathPrefixMatch) {
    const dId = parseInt(pathPrefixMatch[1], 10);
    const subAnchor = pathPrefixMatch[2] ? pathPrefixMatch[2].replace(/^#/, '') : null;
    return {
      isReadingRoute: true,
      domainId: sanitizeDomainId(dId),
      anchorId: subAnchor ? sanitizeAnchorId(subAnchor, dId) : null
    };
  }

  // Case 3: #/reading/topic-X-Y-Z
  const pathTopicMatch = raw.match(/^reading\/(topic-\d+-[a-z0-9-]+)$/i);
  if (pathTopicMatch) {
    const anchor = pathTopicMatch[1];
    const dMatch = anchor.match(/^topic-(\d+)-/);
    const dId = dMatch ? parseInt(dMatch[1], 10) : null;
    return {
      isReadingRoute: true,
      domainId: sanitizeDomainId(dId),
      anchorId: sanitizeAnchorId(anchor, dId)
    };
  }

  // Case 4: Direct anchor #topic-X-...
  const topicMatch = raw.match(/^topic-(\d+)-[a-z0-9-]+$/i);
  if (topicMatch) {
    const dId = parseInt(topicMatch[1], 10);
    return {
      isReadingRoute: true,
      domainId: sanitizeDomainId(dId),
      anchorId: sanitizeAnchorId(raw, dId)
    };
  }

  // Case 5: Direct objective anchor #obj-X-...
  const objMatch = raw.match(/^obj-(\d+)(?:-[a-z0-9-]+)?$/i);
  if (objMatch) {
    const dId = parseInt(objMatch[1], 10);
    return {
      isReadingRoute: true,
      domainId: sanitizeDomainId(dId),
      anchorId: sanitizeAnchorId(raw, dId)
    };
  }

  // Case 6: Review section #domain-X-review
  const reviewMatch = raw.match(/^domain-(\d+)-review$/i);
  if (reviewMatch) {
    const dId = parseInt(reviewMatch[1], 10);
    return {
      isReadingRoute: true,
      domainId: sanitizeDomainId(dId),
      anchorId: sanitizeAnchorId(raw, dId)
    };
  }

  return { isReadingRoute: false, domainId: null, anchorId: null };
}

/**
 * Factory creating a Reading Progress Store instance.
 * @param {Storage} [providedStorage]
 */
export function createReadingProgressStore(providedStorage = null) {
  const storage = resolveStorage(providedStorage);
  let cachedData = null;
  let isWritable = true;

  function loadFromStorage() {
    try {
      const raw = storage.getItem(READING_PROGRESS_KEY);
      if (!raw) {
        return createDefaultProgressState();
      }
      // Defensive length guard (prevent huge payload DoS)
      if (raw.length > 500000) {
        isWritable = false;
        return createDefaultProgressState();
      }
      const parsed = JSON.parse(raw);
      const validated = validateProgressData(parsed);
      if (!validated) {
        // Corrupted or unsupported schema: return fresh default state
        return createDefaultProgressState();
      }
      return validated;
    } catch (e) {
      // JSON parse error or storage access denied
      return createDefaultProgressState();
    }
  }

  // Initialize in-memory cache
  cachedData = loadFromStorage();

  return {
    /**
     * Returns full progress state.
     * @returns {Object}
     */
    getProgress() {
      if (!cachedData) cachedData = loadFromStorage();
      return JSON.parse(JSON.stringify(cachedData));
    },

    /**
     * Returns progress for a specific domain.
     * @param {number|string} domainId
     * @returns {Object|null}
     */
    getDomainProgress(domainId) {
      const dId = sanitizeDomainId(domainId);
      if (!dId) return null;
      const state = this.getProgress();
      return state.domains[dId] || null;
    },

    /**
     * Saves reading location for a domain and persists to storage.
     * @param {Object} location
     * @param {number|string} location.domainId - Must be 1..4
     * @param {string} [location.topicId] - Active section or topic anchor
     * @param {string} [location.objectiveId] - Active objective code (e.g. '1.1')
     * @param {number} [location.scrollY] - Content scroll offset
     * @returns {{ persisted: boolean, data: Object }}
     */
    saveLocation({ domainId, topicId = null, objectiveId = null, scrollY = 0 }) {
      const dId = sanitizeDomainId(domainId);
      if (!dId) {
        return { persisted: false, error: 'Invalid domain ID' };
      }

      if (!cachedData) cachedData = loadFromStorage();

      const now = new Date().toISOString();
      const cleanTopic = sanitizeAnchorId(topicId, dId);
      const cleanScroll = sanitizeScrollY(scrollY);

      // Update per-domain entry
      const existingDomain = cachedData.domains[dId] || { domainId: dId };
      cachedData.domains[dId] = {
        domainId: dId,
        lastTopicId: cleanTopic !== null ? cleanTopic : (existingDomain.lastTopicId || null),
        lastObjectiveId: objectiveId || existingDomain.lastObjectiveId || null,
        lastScrollY: cleanScroll,
        updatedAt: now
      };

      // Update global last-read location
      cachedData.lastDomainId = dId;
      if (cleanTopic !== null) {
        cachedData.lastTopicId = cleanTopic;
      }
      cachedData.lastScrollY = cleanScroll;
      cachedData.updatedAt = now;

      // Persist to storage
      let persisted = false;
      try {
        if (isWritable) {
          storage.setItem(READING_PROGRESS_KEY, JSON.stringify(cachedData));
          persisted = true;
        }
      } catch (err) {
        persisted = false;
      }

      return { persisted, data: JSON.parse(JSON.stringify(cachedData)) };
    },

    /**
     * Clears progress from storage and resets in-memory cache.
     */
    clearProgress() {
      try {
        storage.removeItem(READING_PROGRESS_KEY);
      } catch (e) {}
      cachedData = createDefaultProgressState();
    },

    /**
     * Returns true if storage is available and writable.
     */
    isStorageWritable() {
      return isWritable;
    }
  };
}

// Global default singleton store
let defaultStore = null;

export function getReadingProgressStore() {
  if (!defaultStore) {
    defaultStore = createReadingProgressStore();
  }
  return defaultStore;
}

export function loadReadingProgress() {
  return getReadingProgressStore().getProgress();
}

export function saveReadingLocation(location) {
  return getReadingProgressStore().saveLocation(location);
}

export function clearReadingProgress() {
  return getReadingProgressStore().clearProgress();
}
