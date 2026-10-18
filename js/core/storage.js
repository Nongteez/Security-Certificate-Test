/**
 * Local storage abstraction and quiz session persistence module.
 * Provides safe, defensive persistence for unfinished local quiz sessions.
 */

import certifications from '../../data/certifications.js';
import { resolveExamVersion } from '../../data/exam-versions.js';

export const ACTIVE_SESSION_KEY = 'sec_cert_active_session_v1';
export const CURRENT_SCHEMA_VERSION = 1;

// In-memory fallback map for environments where localStorage is unavailable (e.g. tests / private browsing)
const memoryStorage = new Map();

/**
 * Returns the active storage engine (window.localStorage, globalThis.localStorage, or memory fallback).
 * @returns {{ getItem: Function, setItem: Function, removeItem: Function }}
 */
function getStorage() {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      // Test storage availability
      const testKey = '__storage_test__';
      window.localStorage.setItem(testKey, testKey);
      window.localStorage.removeItem(testKey);
      return window.localStorage;
    }
    if (typeof globalThis !== 'undefined' && globalThis.localStorage) {
      return globalThis.localStorage;
    }
  } catch (e) {
    // Storage access blocked or quota exceeded
  }

  return {
    getItem: (key) => memoryStorage.get(key) || null,
    setItem: (key, value) => memoryStorage.set(key, String(value)),
    removeItem: (key) => memoryStorage.delete(key)
  };
}

/**
 * Validates the structure and integrity of a loaded session object.
 * @param {any} data
 * @returns {boolean}
 */
export function validateSessionData(data) {
  if (!data || typeof data !== 'object') return false;
  if (data.schemaVersion !== CURRENT_SCHEMA_VERSION) return false;
  if (typeof data.certId !== 'string' || !data.certId) return false;
  if (!['practice', 'exam'].includes(data.mode)) return false;
  if (!Array.isArray(data.questionIds) || data.questionIds.length === 0) return false;

  // Check valid index bounds
  if (
    typeof data.currentIndex !== 'number' ||
    data.currentIndex < 0 ||
    data.currentIndex >= data.questionIds.length ||
    !Number.isInteger(data.currentIndex)
  ) {
    return false;
  }

  // Check answers array consistency
  if (!Array.isArray(data.answers) || data.answers.length !== data.questionIds.length) {
    return false;
  }

  // Check exam-specific fields
  if (data.mode === 'exam') {
    if (typeof data.expiresAt !== 'number' || isNaN(data.expiresAt)) {
      return false;
    }
  }

  return true;
}

/** Read-only legacy migration. Missing metadata is recognized only for schema-v1 ISC2 CC. */
export function resolveSessionVersion(session) {
  if (!validateSessionData(session)) return null;
  for (const field of ['version', 'versionId']) {
    if (session[field] !== undefined && (typeof session[field] !== 'string' || !session[field])) return null;
  }
  const cert = certifications.find(c => (c.certId === session.certId || c.id === session.certId) &&
    (session.vendorId ? c.vendorId === session.vendorId : c.id === 'isc2-cc'));
  if (!cert) return null;
  if (session.versionId !== undefined && session.version !== undefined && session.versionId !== session.version) return null;
  const id = session.versionId ?? session.version ?? (cert.id === 'isc2-cc' ? '2026' : null);
  return resolveExamVersion(cert.id, id);
}

/**
 * Builds a clean, serializable session object from current application state.
 * @param {Object} state - The global application state object
 * @returns {Object|null}
 */
export function buildSessionSnapshot(state) {
  const quiz = state?.quiz;
  if (!quiz || !quiz.active || !Array.isArray(quiz.questions) || quiz.questions.length === 0) {
    return null;
  }

  const cert = quiz.certification || state.selectedCertification;
  const setup = state.setup;

  const questionIds = quiz.questions.map((q) => q.id);
  const isExam = quiz.mode === 'exam';

  let expiresAt = quiz.expiresAt;
  if (isExam && !expiresAt && quiz.startedAt) {
    const durationSeconds = quiz.examDurationSeconds || (setup?.exam?.timeMinutes ? setup.exam.timeMinutes * 60 : 7200);
    expiresAt = quiz.startedAt + (durationSeconds * 1000);
  }

  const selectedDomains = setup?.practice?.selectedDomains
    ? Array.from(setup.practice.selectedDomains)
    : [1, 2, 3, 4, 5];

  return {
    schemaVersion: CURRENT_SCHEMA_VERSION,
    vendorId: cert?.vendorId || 'isc2',
    certId: cert?.certId || cert?.id || 'cc',
    certName: cert?.name || 'Certified in Cybersecurity',
    version: quiz.versionId || state.selectedExamVersion || '2026',
    versionId: quiz.versionId || state.selectedExamVersion || '2026',
    mode: quiz.mode,
    language: setup?.language || 'en',
    selectedDomains,
    questionCount: quiz.questions.length,
    questionIds,
    currentIndex: quiz.currentIndex || 0,
    answers: quiz.answers || new Array(quiz.questions.length).fill(null),
    correct: quiz.correct || 0,
    wrong: quiz.wrong || 0,
    startedAt: quiz.startedAt || Date.now(),
    expiresAt: isExam ? expiresAt : null,
    examDurationSeconds: quiz.examDurationSeconds || (isExam ? 7200 : null),
    updatedAt: Date.now()
  };
}

/**
 * Saves the active quiz session to localStorage.
 * @param {Object} sessionData - Session payload
 * @returns {boolean} True if successfully saved
 */
export function saveActiveQuizSession(sessionData) {
  if (!sessionData || !validateSessionData(sessionData)) {
    return false;
  }

  try {
    const storage = getStorage();
    storage.setItem(ACTIVE_SESSION_KEY, JSON.stringify(sessionData));
    return true;
  } catch (err) {
    console.warn('Failed to save active quiz session to localStorage:', err);
    return false;
  }
}

/**
 * Loads and defensively validates the active quiz session from localStorage.
 * Leaves corrupted or unsupported sessions untouched so they can be recovered.
 * @returns {Object|null} Validated session object or null
 */
export function loadActiveQuizSession() {
  try {
    const storage = getStorage();
    const raw = storage.getItem(ACTIVE_SESSION_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (!validateSessionData(parsed)) {
      console.warn('Stored quiz session is invalid or incompatible with schema. Keeping saved data.');
      return null;
    }

    return parsed;
  } catch (err) {
    console.warn('Failed to load active quiz session from storage:', err);
    return null;
  }
}

/**
 * Removes the active quiz session from localStorage.
 */
export function clearActiveQuizSession() {
  try {
    const storage = getStorage();
    storage.removeItem(ACTIVE_SESSION_KEY);
  } catch (err) {
    console.warn('Failed to clear active quiz session:', err);
  }
}

/**
 * Checks if a valid active quiz session exists.
 * @returns {boolean}
 */
export function hasActiveQuizSession() {
  return loadActiveQuizSession() !== null;
}

/** Includes unreadable payloads: starting over must not silently overwrite recoverable data. */
export function hasStoredQuizSession() {
  try {
    return getStorage().getItem(ACTIVE_SESSION_KEY) !== null;
  } catch {
    return false;
  }
}
