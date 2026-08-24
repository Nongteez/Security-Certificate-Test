/**
 * Shared quiz engine.
 * Certification-independent quiz business logic (shuffling, session creation, allocation, scoring).
 */

import { state, resetQuizState } from './state.js';

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
  state.quiz = {
    active: true,
    mode,
    questions,
    currentIndex: 0,
    answers: new Array(questions.length).fill(null),
    correct: 0,
    wrong: 0,
    startedAt: Date.now(),
    timeRemainingSeconds: mode === 'exam' ? timeMinutes * 60 : null,
    finished: false
  };

  state.screen = 'quiz';
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
    return true;
  }
  return false;
}

/**
 * Exits the current active quiz session and returns to certification start screen.
 */
export function exitQuizSession() {
  resetQuizState();
  state.screen = 'cert-start';
}
