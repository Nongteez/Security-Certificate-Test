/**
 * Global application state management.
 * Simple Vanilla JS shared state module.
 */

import { getExamVersions, resolveExamVersion } from '../../data/exam-versions.js';

export const state = {
  screen: "home", // "home" | "exam-versions" | "cert-start" | "quiz" | "results" | "vocabulary" | "reading-notes"
  selectedCertification: null,
  selectedExamVersion: null,
  learning: { domainId: null, objectiveId: null, lessonId: null, slideId: null },
  reading: { selectedDomainId: 1, sidebarCollapsed: false, expandedDomains: [1] },

  // Setup configuration for current certification session
  setup: {
    userName: "Learner",
    language: "en", // "en" | "th" | "both"
    studyMode: "practice", // "practice" | "exam"

    // Practice mode state & user preferences
    practice: {
      order: "all", // "all" (sequential) | "random"
      selectedDomains: new Set([1, 2, 3, 4, 5]),
      questionCount: 583
    },

    // Exam mode fixed outline values
    exam: {
      order: "random",
      domains: [1, 2, 3, 4, 5],
      questionCount: 125,
      timeMinutes: 120
    }
  },

  // Active quiz session state
  quiz: {
    active: false,
    mode: null, // "practice" | "exam"
    questions: [],
    currentIndex: 0,
    answers: [],
    correct: 0,
    wrong: 0,
    startedAt: null,
    timeRemainingSeconds: null,
    finished: false
  }
};

/**
 * Transitions state to the selected certification's start screen.
 * @param {Object} cert - Certification entry from certifications.js
 * @param {string} [version] - Optional exam outline version
 */
export function selectCertification(cert, version) {
  if (getExamVersions(cert?.id).length && version === undefined) {
    state.selectedCertification = cert;
    state.selectedExamVersion = null;
    state.screen = 'exam-versions';
    return;
  }
  if (getExamVersions(cert?.id).length && !resolveExamVersion(cert.id, version)) return false;
  state.selectedCertification = cert;
  state.selectedExamVersion = version || cert?.defaultVersion || "2026";
  state.screen = "cert-start";
  
  // Initialize practice defaults if needed
  if (!state.setup.practice.selectedDomains || state.setup.practice.selectedDomains.size === 0) {
    state.setup.practice.selectedDomains = new Set([1, 2, 3, 4, 5]);
  }
  if (!state.setup.practice.questionCount) {
    state.setup.practice.questionCount = 583;
  }
}

/** Called after the selected version's validated configuration is loaded. */
export function selectExamVersion(versionId, examConfig) {
  const entry = resolveExamVersion(state.selectedCertification?.id, versionId);
  if (!entry || !examConfig || examConfig.version !== entry.id || !examConfig.domains?.length) return false;
  const changed = state.selectedExamVersion !== entry.id;
  state.selectedExamVersion = entry.id;
  if (changed) {
    state.setup.practice.selectedDomains = new Set(examConfig.domains.map(d => d.id));
    state.setup.practice.questionCount = examConfig.totalQuestions;
  }
  state.screen = 'cert-start';
  return true;
}

/**
 * Resets application state back to the central Home screen.
 */
export function resetToHome() {
  state.screen = "home";
  state.selectedCertification = null;
  state.selectedExamVersion = null;
  resetQuizState();
}

/**
 * Resets active quiz state back to initial unstarted state.
 */
export function resetQuizState() {
  state.quiz = {
    active: false,
    mode: null,
    questions: [],
    currentIndex: 0,
    answers: [],
    correct: 0,
    wrong: 0,
    startedAt: null,
    timeRemainingSeconds: null,
    finished: false
  };
}

/**
 * Updates setup root properties.
 * @param {Partial<typeof state.setup>} updates 
 */
export function updateSetup(updates) {
  Object.assign(state.setup, updates);
}

/** Learning navigation never creates, resets or writes an exam session. */
export function selectLearningScreen(screen, selection = {}) {
  if (!['learning-center', 'learning-domain', 'learning-lesson', 'learning-viewer'].includes(screen)) return false;
  for (const key of ['domainId', 'objectiveId', 'lessonId', 'slideId']) if (Object.hasOwn(selection, key)) state.learning[key] = selection[key];
  state.screen = screen; return true;
}

/**
 * Updates practice-specific setup properties.
 * @param {Partial<typeof state.setup.practice>} updates
 */
export function updatePracticeSetup(updates) {
  Object.assign(state.setup.practice, updates);
}
