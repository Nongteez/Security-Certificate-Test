/**
 * Shared quiz engine.
 * Certification-independent quiz business logic (shuffling, session creation, allocation, scoring).
 */

import { state, resetQuizState } from './state.js';
import {
  saveActiveQuizSession,
  clearActiveQuizSession,
  buildSessionSnapshot,
  loadActiveQuizSession,
  resolveSessionVersion,
  validateSessionData
} from './storage.js';
import { getExamVersions, resolveExamVersion } from '../../data/exam-versions.js';
import { questionsMatchVersion } from './question-loader.js';

/**
 * Persists the current active quiz session to local storage.
 */
export function persistCurrentQuizSession() {
  if (!state.quiz || !state.quiz.active) return;
  const snapshot = buildSessionSnapshot(state);
  if (snapshot) {
    saveActiveQuizSession(snapshot);
  }
}

/**
 * Unbiased Fisher-Yates shuffle algorithm. Always returns a new array copy.
 * @template T
 * @param {T[]} array 
 * @returns {T[]} Shuffled copy of the input array
 */
export function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Calculates proportional integer question allocation per domain using the Largest Remainder Method (Hamilton method).
 * @param {Array<{ id: number|string, weight?: number, weightPercentage?: number }>} domains 
 * @param {number} totalQuestions 
 * @returns {Record<number|string, number>} Map of domainId -> allocated question count
 */
export function calculateDomainAllocations(domains, totalQuestions = 125) {
  const allocations = {};
  if (!domains || domains.length === 0) return allocations;

  // Extract or compute normalized weights
  const domainWeights = domains.map((d, index) => {
    let rawWeight = d.weight;
    if (rawWeight === undefined && d.weightPercentage !== undefined) {
      rawWeight = d.weightPercentage / 100;
    }
    if (rawWeight === undefined) {
      rawWeight = 1 / domains.length; // Default equal weight if unconfigured
    }
    return {
      id: d.id,
      index,
      weight: rawWeight
    };
  });

  const totalWeight = domainWeights.reduce((sum, d) => sum + d.weight, 0);

  // Step 1: Compute raw quota and floor allocation
  const quotas = domainWeights.map((d) => {
    const normalizedWeight = totalWeight > 0 ? d.weight / totalWeight : 1 / domainWeights.length;
    const exactQuota = totalQuestions * normalizedWeight;
    const integerAllocation = Math.floor(exactQuota);
    const remainder = exactQuota - integerAllocation;
    return {
      id: d.id,
      index: d.index,
      integerAllocation,
      remainder
    };
  });

  let assignedCount = quotas.reduce((sum, q) => sum + q.integerAllocation, 0);
  let unassignedCount = totalQuestions - assignedCount;

  // Step 2: Distribute remaining seats by largest fractional remainder
  // Secondary sort by original index ensures determinism
  quotas.sort((a, b) => b.remainder - a.remainder || a.index - b.index);

  for (let i = 0; i < unassignedCount && i < quotas.length; i++) {
    quotas[i].integerAllocation += 1;
  }

  // Map back to result object
  quotas.forEach((q) => {
    allocations[q.id] = q.integerAllocation;
  });

  return allocations;
}

/**
 * Builds a Practice Mode question pool based on selected domains and ordering preference.
 * @param {Object} params
 * @param {Record<number|string, Array>} params.questionsByDomain - Map of domainId -> Question[]
 * @param {Array<number|string>|Set<number|string>} params.selectedDomainIds - Selected domains
 * @param {'all'|'random'} [params.order='all'] - 'all' (Sequential) or 'random'
 * @param {number} [params.questionCount] - Desired question count
 * @returns {Array} Selected question array for the practice session
 */
export function createPracticeSession({
  questionsByDomain = {},
  selectedDomainIds = [],
  order = 'all',
  questionCount = 583
}) {
  const domainIdList = Array.from(selectedDomainIds).map(Number).sort((a, b) => a - b);
  let pool = [];

  // Build sequential domain pool (Domain 1 -> Domain 2 -> Domain 3 ...)
  for (const domId of domainIdList) {
    const domQuestions = questionsByDomain[domId] || [];
    pool.push(...domQuestions);
  }

  // Handle Random vs Sequential order
  if (order === 'random') {
    pool = shuffle(pool);
  } else {
    // Preserve source order on copies
    pool = [...pool];
  }

  // Safe clamping of requested question count
  const requested = parseInt(questionCount, 10) || pool.length;
  const validCount = Math.min(Math.max(1, requested), pool.length);

  return pool.slice(0, validCount);
}

/**
 * Builds a 125-question mock Exam Mode session with proportional domain distribution and randomization.
 * @param {Object} params
 * @param {Record<number|string, Array>} params.questionsByDomain - Map of domainId -> Question[]
 * @param {Object} params.examConfig - Exam configuration object containing domains and weights
 * @param {number} [params.totalQuestions=125] - Total exam questions
 * @returns {Array} Shuffled 125-question array with proportional domain representation
 */
export function createExamSession({
  questionsByDomain = {},
  examConfig = {},
  totalQuestions = 125
}) {
  const domains = examConfig.domains || [];
  const allocations = calculateDomainAllocations(domains, totalQuestions);
  const examPool = [];

  for (const domain of domains) {
    const domId = domain.id;
    const allocCount = allocations[domId] || 0;
    const domQuestions = questionsByDomain[domId] || [];

    if (allocCount > 0 && domQuestions.length > 0) {
      // Shuffle domain questions before slicing
      const shuffledDomQuestions = shuffle(domQuestions);
      const selected = shuffledDomQuestions.slice(0, Math.min(allocCount, shuffledDomQuestions.length));
      examPool.push(...selected);
    }
  }

  // Final overall shuffle of the complete 125 questions
  return shuffle(examPool);
}

/**
 * Initializes a new active quiz session in application state.
 * @param {Object} params
 * @param {'practice'|'exam'} params.mode
 * @param {Array} params.questions
 * @param {number} [params.timeMinutes=120]
 */
export function startQuizSession({ mode, questions, timeMinutes = 120 }) {
  const certification = state.selectedCertification;
  const versionId = state.selectedExamVersion;
  if (getExamVersions(certification?.id).length &&
      (!resolveExamVersion(certification.id, versionId) || !questionsMatchVersion(questions, certification.id, versionId))) {
    throw new Error('Questions do not belong to the selected available exam version.');
  }
  const startedAt = Date.now();
  const examDurationSeconds = timeMinutes * 60;
  const expiresAt = mode === 'exam' ? startedAt + (examDurationSeconds * 1000) : null;

  state.quiz = {
    active: true,
    certification: certification ? { ...certification } : null,
    versionId,
    mode,
    questions,
    currentIndex: 0,
    answers: new Array(questions.length).fill(null),
    correct: 0,
    wrong: 0,
    startedAt,
    expiresAt,
    examDurationSeconds: mode === 'exam' ? examDurationSeconds : null,
    timeRemainingSeconds: mode === 'exam' ? examDurationSeconds : null,
    finished: false,
    timedOut: false
  };

  state.screen = 'quiz';
  persistCurrentQuizSession();
}

/**
 * Returns the active question object for current index.
 * @returns {Object|null}
 */
export function getCurrentQuestion() {
  if (!state.quiz.active || !state.quiz.questions || state.quiz.questions.length === 0) {
    return null;
  }
  return state.quiz.questions[state.quiz.currentIndex] || null;
}

/**
 * Records a user's answer for the specified question index.
 * Prevents multiple submissions for the same question.
 * @param {Object} params
 * @param {number} params.questionIndex
 * @param {number} params.selectedIndex
 * @returns {Object|null} Answer evaluation result
 */
export function recordAnswer({ questionIndex, selectedIndex }) {
  if (!state.quiz.active) return null;
  if (questionIndex < 0 || questionIndex >= state.quiz.questions.length) return null;

  // Prevent re-answering already recorded questions in Practice Mode
  if (state.quiz.answers[questionIndex] !== null) {
    return state.quiz.answers[questionIndex];
  }

  const question = state.quiz.questions[questionIndex];
  const isCorrect = selectedIndex === question.correct_idx;

  const record = {
    questionId: question.id,
    selected: selectedIndex,
    correct: question.correct_idx,
    isCorrect
  };

  state.quiz.answers[questionIndex] = record;

  if (isCorrect) {
    state.quiz.correct++;
  } else {
    state.quiz.wrong++;
  }

  persistCurrentQuizSession();
  return record;
}

/**
 * Moves to the next question in the session.
 * @returns {boolean} True if advanced, false if at the last question
 */
export function nextQuestion() {
  if (!state.quiz.active) return false;
  if (state.quiz.currentIndex < state.quiz.questions.length - 1) {
    state.quiz.currentIndex++;
    persistCurrentQuizSession();
    return true;
  }
  return false;
}

/**
 * Moves to the previous question in the session.
 * @returns {boolean} True if moved back, false if at the first question
 */
export function previousQuestion() {
  if (!state.quiz.active) return false;
  if (state.quiz.currentIndex > 0) {
    state.quiz.currentIndex--;
    persistCurrentQuizSession();
    return true;
  }
  return false;
}

/**
 * Formats total seconds into HH:MM:SS string format.
 * @param {number} totalSeconds 
 * @returns {string} e.g. "01:59:59"
 */
export function formatTimeHHMMSS(totalSeconds) {
  if (totalSeconds === null || totalSeconds === undefined) return '';
  const s = Math.max(0, Math.floor(totalSeconds));
  const hours = Math.floor(s / 3600);
  const minutes = Math.floor((s % 3600) / 60);
  const seconds = s % 60;
  const hh = String(hours).padStart(2, '0');
  const mm = String(minutes).padStart(2, '0');
  const ss = String(seconds).padStart(2, '0');
  return `${hh}:${mm}:${ss}`;
}

let timerIntervalId = null;

/**
 * Starts the countdown timer for Exam mode.
 * Updates state.quiz.timeRemainingSeconds every second and calls onTick callback.
 * @param {Function} [onTick] - Callback receiving remaining seconds
 * @param {Function} [onTimeout] - Callback invoked when timer reaches 00:00:00
 */
export function startExamCountdown(onTick, onTimeout) {
  stopExamCountdown();

  if (!state.quiz.active || state.quiz.mode !== 'exam') return;
  if (state.quiz.timeRemainingSeconds === null || state.quiz.timeRemainingSeconds <= 0) return;

  timerIntervalId = setInterval(() => {
    if (!state.quiz.active || state.quiz.mode !== 'exam') {
      stopExamCountdown();
      return;
    }

    state.quiz.timeRemainingSeconds--;

    if (onTick) {
      onTick(state.quiz.timeRemainingSeconds);
    }

    if (state.quiz.timeRemainingSeconds <= 0) {
      stopExamCountdown();
      state.quiz.timeRemainingSeconds = 0;
      if (onTimeout) {
        onTimeout();
      }
    }
  }, 1000);
}

/**
 * Stops any active countdown timer.
 */
export function stopExamCountdown() {
  if (timerIntervalId) {
    clearInterval(timerIntervalId);
    timerIntervalId = null;
  }
}

/**
 * Checks if countdown timer is currently running.
 * @returns {boolean}
 */
export function isExamCountdownRunning() {
  return timerIntervalId !== null;
}

/**
 * Finalizes the active quiz session and routes to the Results screen.
 * @param {boolean} [timedOut=false]
 */
export function finishQuizSession(timedOut = false) {
  stopExamCountdown();
  if (state.quiz) {
    state.quiz.finished = true;
    state.quiz.finishedAt = Date.now();
    state.quiz.timedOut = timedOut;
  }
  clearActiveQuizSession();
  state.screen = 'results';
}

/**
 * Exits the current active quiz session and returns to certification start screen.
 */
export function exitQuizSession() {
  stopExamCountdown();
  if (state.quiz.certification) state.selectedCertification = state.quiz.certification;
  if (state.quiz.versionId) state.selectedExamVersion = state.quiz.versionId;
  resetQuizState();
  state.screen = 'cert-start';
}

/**
 * Returns to the certification setup screen while preserving previous setup parameters.
 */
export function returnToQuizSetup() {
  stopExamCountdown();
  if (state.quiz.certification) state.selectedCertification = state.quiz.certification;
  if (state.quiz.versionId) state.selectedExamVersion = state.quiz.versionId;
  resetQuizState();
  state.screen = 'cert-start';
}

/**
 * Restarts the completed quiz session from Question 1 using the same question selection/config.
 * Resets all answers, score counts, and exam timer.
 */
export function retryQuizSession() {
  if (!state.quiz || !state.quiz.questions || state.quiz.questions.length === 0) return;

  const mode = state.quiz.mode || 'practice';
  const certification = state.quiz.certification || state.selectedCertification;
  const versionId = state.quiz.versionId || state.selectedExamVersion;
  const questions = [...state.quiz.questions];
  const timeMinutes = state.setup.exam?.timeMinutes || 120;
  const startedAt = Date.now();
  const examDurationSeconds = timeMinutes * 60;
  const expiresAt = mode === 'exam' ? startedAt + (examDurationSeconds * 1000) : null;

  stopExamCountdown();

  state.quiz = {
    active: true,
    certification,
    versionId,
    mode,
    questions,
    currentIndex: 0,
    answers: new Array(questions.length).fill(null),
    correct: 0,
    wrong: 0,
    startedAt,
    expiresAt,
    examDurationSeconds: mode === 'exam' ? examDurationSeconds : null,
    timeRemainingSeconds: mode === 'exam' ? examDurationSeconds : null,
    finished: false,
    timedOut: false
  };

  state.screen = 'quiz';
  persistCurrentQuizSession();
}

/**
 * Extracts questions answered incorrectly in the completed session.
 * Excludes correct and unanswered questions.
 * @returns {Array<{ questionIndex: number, question: Object, answer: Object }>}
 */
export function getWrongQuestions() {
  if (!state.quiz || !state.quiz.questions || !state.quiz.answers) return [];
  const wrongList = [];

  state.quiz.questions.forEach((question, index) => {
    const answer = state.quiz.answers[index];
    if (answer !== null && answer.isCorrect === false) {
      wrongList.push({
        questionIndex: index,
        question,
        answer
      });
    }
  });

  return wrongList;
}

/**
 * Starts a new untimed Practice-style quiz session containing only the questions
 * answered incorrectly in the completed attempt.
 */
export function retryWrongAnswersSession() {
  const wrongItems = getWrongQuestions();
  if (wrongItems.length === 0) return;

  const wrongQuestions = wrongItems.map((item) => item.question);
  const certification = state.quiz.certification || state.selectedCertification;
  const versionId = state.quiz.versionId || state.selectedExamVersion;

  stopExamCountdown();

  state.quiz = {
    active: true,
    certification,
    versionId,
    mode: 'practice', // Always Practice mode for remediation
    questions: wrongQuestions,
    currentIndex: 0,
    answers: new Array(wrongQuestions.length).fill(null),
    correct: 0,
    wrong: 0,
    startedAt: Date.now(),
    timeRemainingSeconds: null, // Always untimed
    finished: false,
    timedOut: false
  };

  state.screen = 'quiz';
  persistCurrentQuizSession();
}

/**
 * Resumes an existing unfinished quiz session from stored payload.
 * @param {Object} params
 * @param {Object} params.storedSession - Loaded and validated session payload
 * @param {Record<number|string, Array>} params.questionsByDomain - Map of domainId -> Question[]
 * @param {Array} [params.certifications=[]] - Available certification definitions
 * @returns {{ success: boolean, expired?: boolean, reason?: string }}
 */
export function resumeQuizSession({ storedSession, questionsByDomain, certifications = [] }) {
  if (!storedSession || !storedSession.questionIds || storedSession.questionIds.length === 0) {
    return { success: false, reason: 'empty_session' };
  }
  const entry = resolveSessionVersion(storedSession);
  if (!validateSessionData(storedSession) || !entry) return { success: false, reason: 'invalid_version_or_session' };

  // Build question lookup map
  const questionMap = new Map();
  Object.values(questionsByDomain).flat().forEach((q) => questionMap.set(q.id, q));

  // Reconstruct exact ordered questions
  const questions = storedSession.questionIds.map((id) => questionMap.get(id));
  if (questions.some((q) => !q)) {
    console.warn('One or more saved question IDs could not be resolved. Keeping saved data.');
    return { success: false, reason: 'unresolved_questions' };
  }
  if (!questionsMatchVersion(questions, entry.certificationId, entry.id)) {
    return { success: false, reason: 'question_bank_mismatch' };
  }

  // Match certification in state if available
  const matchedCert = certifications.find((c) => c.id === entry.certificationId) || {
    id: entry.certificationId,
    vendorId: storedSession.vendorId || 'isc2',
    certId: storedSession.certId || 'cc',
    name: storedSession.certName || 'Certified in Cybersecurity'
  };
  state.selectedCertification = matchedCert;
  state.selectedExamVersion = entry.id;
  state.setup.language = storedSession.language || 'en';
  state.setup.studyMode = storedSession.mode || 'practice';

  if (storedSession.selectedDomains && Array.isArray(storedSession.selectedDomains)) {
    state.setup.practice.selectedDomains = new Set(storedSession.selectedDomains);
  }

  const isExam = storedSession.mode === 'exam';
  const now = Date.now();
  let isExpired = false;
  let timeRemainingSeconds = null;

  if (isExam) {
    if (storedSession.expiresAt && now >= storedSession.expiresAt) {
      isExpired = true;
      timeRemainingSeconds = 0;
    } else if (storedSession.expiresAt) {
      timeRemainingSeconds = Math.max(0, Math.floor((storedSession.expiresAt - now) / 1000));
    } else {
      timeRemainingSeconds = storedSession.examDurationSeconds || 7200;
    }
  }

  state.quiz = {
    active: true,
    certification: { ...matchedCert },
    versionId: entry.id,
    mode: storedSession.mode,
    questions,
    currentIndex: Math.min(storedSession.currentIndex || 0, questions.length - 1),
    answers: storedSession.answers || new Array(questions.length).fill(null),
    correct: storedSession.correct || 0,
    wrong: storedSession.wrong || 0,
    startedAt: storedSession.startedAt || now,
    expiresAt: storedSession.expiresAt || null,
    examDurationSeconds: storedSession.examDurationSeconds || (isExam ? 7200 : null),
    timeRemainingSeconds,
    finished: false,
    timedOut: false
  };

  if (isExpired) {
    finishQuizSession(true);
    return { success: true, expired: true };
  }

  state.screen = 'quiz';
  persistCurrentQuizSession();
  return { success: true, expired: false };
}

