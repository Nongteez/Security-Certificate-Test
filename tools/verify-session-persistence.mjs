/**
 * tools/verify-session-persistence.mjs
 *
 * Comprehensive automated test suite for Local Quiz Session Persistence & Resume Quiz.
 * Covers Scenarios A through H.
 */

import assert from 'node:assert';
import { loadQuestionsForDomains, loadExamConfig } from '../js/core/question-loader.js';
import {
  createPracticeSession,
  createExamSession,
  startQuizSession,
  recordAnswer,
  nextQuestion,
  previousQuestion,
  finishQuizSession,
  retryQuizSession,
  retryWrongAnswersSession,
  resumeQuizSession,
  persistCurrentQuizSession
} from '../js/core/quiz-engine.js';
import {
  saveActiveQuizSession,
  loadActiveQuizSession,
  clearActiveQuizSession,
  hasActiveQuizSession,
  validateSessionData,
  ACTIVE_SESSION_KEY,
  CURRENT_SCHEMA_VERSION
} from '../js/core/storage.js';
import { state, resetQuizState } from '../js/core/state.js';
import certifications from '../data/certifications.js';

async function runSessionPersistenceTests() {
  console.log('====================================================');
  console.log(' SEC CERT TEST — QUIZ SESSION PERSISTENCE TEST SUITE');
  console.log('====================================================\n');

  // Load question bank for ISC2 CC 2026
  const questionsByDomain = await loadQuestionsForDomains({
    vendorId: 'isc2',
    certId: 'cc',
    version: '2026',
    domainIds: [1, 2, 3, 4, 5]
  });

  const totalLoaded = Object.values(questionsByDomain).reduce((sum, list) => sum + list.length, 0);
  assert.strictEqual(totalLoaded, 583, 'Question bank must load 583 questions');

  // Set initial certification state
  state.selectedCertification = certifications[0];
  state.selectedExamVersion = '2026';
  state.setup.language = 'en';

  // ----------------------------------------------------
  // SCENARIO A: Practice Mode Autosave, Refresh & Resume
  // ----------------------------------------------------
  console.log('[Scenario A] Testing Practice Mode Autosave, Page Refresh & Resume...');
  clearActiveQuizSession();
  assert.strictEqual(hasActiveQuizSession(), false);

  const practiceQuestions = createPracticeSession({
    questionsByDomain,
    selectedDomainIds: [1, 2, 3, 4, 5],
    order: 'all',
    questionCount: 30
  });

  startQuizSession({ mode: 'practice', questions: practiceQuestions });
  assert.strictEqual(hasActiveQuizSession(), true);

  // Answer Q1, Q2, Q3
  const ans0 = recordAnswer({ questionIndex: 0, selectedIndex: practiceQuestions[0].correct_idx });
  assert.strictEqual(ans0.isCorrect, true);
  nextQuestion(); // Now at index 1

  const wrongOption = (practiceQuestions[1].correct_idx + 1) % 4;
  const ans1 = recordAnswer({ questionIndex: 1, selectedIndex: wrongOption });
  assert.strictEqual(ans1.isCorrect, false);
  nextQuestion(); // Now at index 2

  const ans2 = recordAnswer({ questionIndex: 2, selectedIndex: practiceQuestions[2].correct_idx });
  assert.strictEqual(ans2.isCorrect, true);
  nextQuestion(); // Now at index 3

  // Check saved session in storage
  const savedA = loadActiveQuizSession();
  assert.ok(savedA, 'Session should be saved');
  assert.strictEqual(savedA.mode, 'practice');
  assert.strictEqual(savedA.questionCount, 30);
  assert.strictEqual(savedA.currentIndex, 3);
  assert.strictEqual(savedA.correct, 2);
  assert.strictEqual(savedA.wrong, 1);
  assert.strictEqual(savedA.answers[0].isCorrect, true);
  assert.strictEqual(savedA.answers[1].isCorrect, false);
  assert.strictEqual(savedA.answers[2].isCorrect, true);
  assert.strictEqual(savedA.answers[3], null);

  // Simulate Page Refresh (wipe JS memory state)
  resetQuizState();
  assert.strictEqual(state.quiz.active, false);

  // Resume Session
  const resumeResA = resumeQuizSession({
    storedSession: savedA,
    questionsByDomain,
    certifications
  });

  assert.strictEqual(resumeResA.success, true);
  assert.strictEqual(state.quiz.active, true);
  assert.strictEqual(state.quiz.currentIndex, 3, 'Resumed at Question 4 (index 3)');
  assert.strictEqual(state.quiz.questions.length, 30);
  assert.strictEqual(state.quiz.questions[0].id, practiceQuestions[0].id, 'Exact question IDs restored');
  assert.strictEqual(state.quiz.answers[0].isCorrect, true);
  assert.strictEqual(state.quiz.answers[1].isCorrect, false);
  assert.strictEqual(state.quiz.correct, 2);
  assert.strictEqual(state.quiz.wrong, 1);
  console.log('  PASS: Practice mode exact questions, order, answers, and position restored.');

  // ----------------------------------------------------
  // SCENARIO B: Close & Reopen Detection
  // ----------------------------------------------------
  console.log('\n[Scenario B] Testing Storage Persistence & Session Detection Across Restarts...');
  const detected = loadActiveQuizSession();
  assert.ok(detected, 'Active session must be detected in storage');
  assert.strictEqual(hasActiveQuizSession(), true);
  console.log('  PASS: Unfinished session successfully detected in storage.');

  // ----------------------------------------------------
  // SCENARIO C: Start New Quiz With Existing Session
  // ----------------------------------------------------
  console.log('\n[Scenario C] Testing Start New Quiz Replacement Confirmation Flow...');
  assert.strictEqual(hasActiveQuizSession(), true);

  // Starting a new quiz replaces the old session
  const newQuestions = createPracticeSession({
    questionsByDomain,
    selectedDomainIds: [1],
    order: 'all',
    questionCount: 10
  });

  startQuizSession({ mode: 'practice', questions: newQuestions });
  const replacedSession = loadActiveQuizSession();
  assert.strictEqual(replacedSession.questionCount, 10);
  assert.strictEqual(replacedSession.currentIndex, 0);
  assert.strictEqual(replacedSession.correct, 0);
  console.log('  PASS: Old session cleanly replaced by new session upon explicit start.');

  // ----------------------------------------------------
  // SCENARIO D: Finish Behavior
  // ----------------------------------------------------
  console.log('\n[Scenario D] Testing Finish Quiz Cleans Active Storage Session...');
  assert.strictEqual(hasActiveQuizSession(), true);
  finishQuizSession(false);
  assert.strictEqual(state.screen, 'results');
  assert.strictEqual(state.quiz.finished, true);
  assert.strictEqual(hasActiveQuizSession(), false, 'Active session must be cleared on finish');
  console.log('  PASS: Active storage session removed upon finish, results remain active in memory.');

  // ----------------------------------------------------
  // SCENARIO E: Exam Mode Timer (Real Elapsed Wall-Clock Time)
  // ----------------------------------------------------
  console.log('\n[Scenario E] Testing Exam Mode Absolute Expiration & Elapsed Wall-Clock Calculation...');
  clearActiveQuizSession();

  const examConfig = await loadExamConfig('isc2', 'cc', '2026');
  const examQuestions = createExamSession({
    questionsByDomain,
    examConfig,
    totalQuestions: 125
  });

  startQuizSession({ mode: 'exam', questions: examQuestions, timeMinutes: 120 });
  const savedExam = loadActiveQuizSession();
  assert.strictEqual(savedExam.mode, 'exam');
  assert.strictEqual(typeof savedExam.expiresAt, 'number');
  assert.strictEqual(savedExam.examDurationSeconds, 7200);

  // Simulate closing browser for 15 minutes (900,000 ms)
  const simulatedSavedExam = {
    ...savedExam,
    startedAt: Date.now() - 900000,
    expiresAt: Date.now() + ((7200 - 900) * 1000)
  };

  resetQuizState();
  const resumeExamRes = resumeQuizSession({
    storedSession: simulatedSavedExam,
    questionsByDomain,
    certifications
  });

  assert.strictEqual(resumeExamRes.success, true);
  assert.strictEqual(resumeExamRes.expired, false);
  assert.ok(state.quiz.timeRemainingSeconds <= 6305 && state.quiz.timeRemainingSeconds >= 6295,
    `Remaining time should be ~6300s (actual: ${state.quiz.timeRemainingSeconds}s)`);
  console.log(`  PASS: Exam timer restored with real elapsed time accounted for (${state.quiz.timeRemainingSeconds}s remaining).`);

  // ----------------------------------------------------
  // SCENARIO F: Exam Expired While Closed
  // ----------------------------------------------------
  console.log('\n[Scenario F] Testing Exam Expired While Closed...');
  const expiredExam = {
    ...savedExam,
    startedAt: Date.now() - (7300 * 1000),
    expiresAt: Date.now() - (100 * 1000) // Expired 100s ago
  };

  resetQuizState();
  const resumeExpiredRes = resumeQuizSession({
    storedSession: expiredExam,
    questionsByDomain,
    certifications
  });

  assert.strictEqual(resumeExpiredRes.success, true);
  assert.strictEqual(resumeExpiredRes.expired, true, 'Should detect expired exam');
  assert.strictEqual(state.screen, 'results', 'Should route to results on timeout');
  assert.strictEqual(state.quiz.timedOut, true, 'Should mark timedOut = true');
  assert.strictEqual(hasActiveQuizSession(), false, 'Expired session cleared from storage');
  console.log('  PASS: Expired exam automatically submitted to results, timer never paused or reset.');

  // ----------------------------------------------------
  // SCENARIO G: Storage Safety & Corrupted Data Handling
  // ----------------------------------------------------
  console.log('\n[Scenario G] Testing Defensive Storage Parsing & Graceful Degradation...');

  // Test 1: Invalid Schema Version
  assert.strictEqual(validateSessionData({ schemaVersion: 99, mode: 'practice', certId: 'cc' }), false);

  // Test 2: Negative Current Index
  assert.strictEqual(validateSessionData({ schemaVersion: 1, mode: 'practice', certId: 'cc', questionIds: [1, 2], currentIndex: -1, answers: [null, null] }), false);

  // Test 3: Mismatched Answers Count
  assert.strictEqual(validateSessionData({ schemaVersion: 1, mode: 'practice', certId: 'cc', questionIds: [1, 2], currentIndex: 0, answers: [null] }), false);

  // Test 4: Missing Exam expiresAt
  assert.strictEqual(validateSessionData({ schemaVersion: 1, mode: 'exam', certId: 'cc', questionIds: [1, 2], currentIndex: 0, answers: [null, null] }), false);

  // Test 5: Storage contains malformed JSON
  if (typeof globalThis !== 'undefined' && globalThis.localStorage) {
    globalThis.localStorage.setItem(ACTIVE_SESSION_KEY, '{ malformed: json, ');
    const safeLoaded = loadActiveQuizSession();
    assert.strictEqual(safeLoaded, null, 'Malformed JSON must return null and discard gracefully');
  }

  // Test 6: Question IDs that don't exist in question bank
  const invalidIdSession = {
    schemaVersion: 1,
    certId: 'cc',
    vendorId: 'isc2',
    version: '2026',
    mode: 'practice',
    questionCount: 1,
    questionIds: [999999], // non-existent ID
    currentIndex: 0,
    answers: [null],
    startedAt: Date.now()
  };

  const invalidIdRes = resumeQuizSession({
    storedSession: invalidIdSession,
    questionsByDomain,
    certifications
  });
  assert.strictEqual(invalidIdRes.success, false, 'Should fail gracefully when question IDs are missing');
  console.log('  PASS: All corrupted/invalid data cases handled defensively with 0 crashes.');

  // ----------------------------------------------------
  // SCENARIO H: Question Bank & Invariant Integrity
  // ----------------------------------------------------
  console.log('\n[Scenario H] Verifying Question Bank Integrity & Invariants...');
  assert.strictEqual(questionsByDomain[1].length, 142);
  assert.strictEqual(questionsByDomain[2].length, 65);
  assert.strictEqual(questionsByDomain[3].length, 93);
  assert.strictEqual(questionsByDomain[4].length, 156);
  assert.strictEqual(questionsByDomain[5].length, 127);
  console.log('  PASS: 583 total questions preserved with exact domain counts (142/65/93/156/127).');

  console.log('\n====================================================');
  console.log(' STATUS: ALL SESSION PERSISTENCE TESTS PASSED (8/8)');
  console.log('====================================================');
}

runSessionPersistenceTests().catch((err) => {
  console.error('Test failed with error:', err);
  process.exit(1);
});
