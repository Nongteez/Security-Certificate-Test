/**
 * Global application state management.
 * Simple Vanilla JS shared state module.
 */

export const state = {
  screen: "home", // "home" | "cert-start" | "quiz" | "results"
  selectedCertification: null,
  selectedExamVersion: null,

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

/**
 * Updates practice-specific setup properties.
 * @param {Partial<typeof state.setup.practice>} updates
 */
export function updatePracticeSetup(updates) {
  Object.assign(state.setup.practice, updates);
}
