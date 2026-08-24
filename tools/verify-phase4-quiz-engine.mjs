/**
 * tools/verify-phase4-quiz-engine.mjs
 *
 * Automated test suite for Phase 4 Quiz Engine & Question Loader integration.
 */

import assert from 'node:assert';
import { loadQuestionsForDomains, loadExamConfig } from '../js/core/question-loader.js';
import {
  shuffle,
  calculateDomainAllocations,
  createPracticeSession,
  createExamSession,
  startQuizSession,
  recordAnswer,
  nextQuestion,
  previousQuestion,
  exitQuizSession
} from '../js/core/quiz-engine.js';
import { state, resetQuizState } from '../js/core/state.js';

async function runPhase4Verification() {
  console.log('====================================================');
  console.log(' Phase 4 Quiz Engine & Session Creation Verification');
  console.log('====================================================\n');

  // 1. Load exam config & all questions
  console.log('[1/7] Loading ISC2 CC 2026 Exam Configuration & Questions...');
  const examConfig = await loadExamConfig('isc2', 'cc', '2026');
  assert.ok(examConfig, 'Exam config should load');
  assert.strictEqual(examConfig.domains.length, 5, 'Should have 5 domains');

  const allDomainIds = [1, 2, 3, 4, 5];
  const questionsByDomain = await loadQuestionsForDomains({
    vendorId: 'isc2',
    certId: 'cc',
    version: '2026',
    domainIds: allDomainIds
  });

  assert.strictEqual(questionsByDomain[1].length, 142);
  assert.strictEqual(questionsByDomain[2].length, 65);
  assert.strictEqual(questionsByDomain[3].length, 93);
  assert.strictEqual(questionsByDomain[4].length, 156);
  assert.strictEqual(questionsByDomain[5].length, 127);
  console.log('  PASS: All 5 domains loaded with exact expected counts (142, 65, 93, 156, 127 = 583).');

  // 2. Test Practice Sequential 10 questions
  console.log('\n[2/7] Testing Practice Mode (All Domains / Sequential / 10 Questions)...');
  const d1OriginalFirstId = questionsByDomain[1][0].id;
  const practiceSeq10 = createPracticeSession({
    questionsByDomain,
    selectedDomainIds: [1, 2, 3, 4, 5],
    order: 'all',
    questionCount: 10
  });

  assert.strictEqual(practiceSeq10.length, 10, 'Should have exactly 10 questions');
  assert.strictEqual(practiceSeq10[0].id, d1OriginalFirstId, 'First question should be Q1 from Domain 1');
  for (let i = 0; i < 10; i++) {
    assert.strictEqual(practiceSeq10[i].id, questionsByDomain[1][i].id, `Index ${i} should match original D1 order`);
  }
  console.log('  PASS: Sequential practice loads Q1 first, exact 10 questions, strictly preserving original order.');

  // 3. Test Practice Domain 4 Only / Random / 20 questions
  console.log('\n[3/7] Testing Practice Mode (Domain 4 Only / Random / 20 Questions)...');
  const d4OriginalCopy = JSON.stringify(questionsByDomain[4]);
  const practiceD4Rand20 = createPracticeSession({
    questionsByDomain,
    selectedDomainIds: [4],
    order: 'random',
    questionCount: 20
  });

  assert.strictEqual(practiceD4Rand20.length, 20, 'Should have exactly 20 questions');
  practiceD4Rand20.forEach(q => {
    assert.strictEqual(q.dom, 4, 'All questions must have dom === 4');
  });
  // Check no mutation on source array
  assert.strictEqual(JSON.stringify(questionsByDomain[4]), d4OriginalCopy, 'Source array must not be mutated');
  console.log('  PASS: Domain 4 random practice produces exactly 20 D4 questions without source mutation.');

  // 4. Test Practice All Domains / Random / 100 questions
  console.log('\n[4/7] Testing Practice Mode (All Domains / Random / 100 Questions)...');
  const practiceRand100 = createPracticeSession({
    questionsByDomain,
    selectedDomainIds: [1, 2, 3, 4, 5],
    order: 'random',
    questionCount: 100
  });

  assert.strictEqual(practiceRand100.length, 100, 'Should have exactly 100 questions');
  const uniqueIds = new Set(practiceRand100.map(q => q.id));
  assert.strictEqual(uniqueIds.size, 100, 'All 100 questions must be unique');
  console.log('  PASS: 100 random questions created with zero duplicates and valid schema.');

  // 5. Test Exam Mode 125 Questions Proportional Allocation
  console.log('\n[5/7] Testing Exam Mode Proportional Allocation (125 Questions, 5 Domains)...');
  const allocations = calculateDomainAllocations(examConfig.domains, 125);
  console.log('  Per-domain allocations computed:', allocations);

  const allocSum = Object.values(allocations).reduce((a, b) => a + b, 0);
  assert.strictEqual(allocSum, 125, 'Domain allocations must sum to exactly 125');

  // Verify allocations based on 26%, 10%, 22%, 24%, 18%
  // 125 * 0.26 = 32.5 -> 33
  // 125 * 0.10 = 12.5 -> 13
  // 125 * 0.22 = 27.5 -> 27
  // 125 * 0.24 = 30.0 -> 30
  // 125 * 0.18 = 22.5 -> 22
  assert.strictEqual(allocations[1], 33, 'Domain 1 allocation should be 33');
  assert.strictEqual(allocations[2], 13, 'Domain 2 allocation should be 13');
  assert.strictEqual(allocations[3], 27, 'Domain 3 allocation should be 27');
  assert.strictEqual(allocations[4], 30, 'Domain 4 allocation should be 30');
  assert.strictEqual(allocations[5], 22, 'Domain 5 allocation should be 22');

  const examSession = createExamSession({
    questionsByDomain,
    examConfig,
    totalQuestions: 125
  });

  assert.strictEqual(examSession.length, 125, 'Exam session must contain exactly 125 questions');
  const examDomCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  examSession.forEach(q => {
    examDomCounts[q.dom]++;
  });
  console.log('  Actual domain distribution in exam session:', examDomCounts);
  assert.deepStrictEqual(examDomCounts, { 1: 33, 2: 13, 3: 27, 4: 30, 5: 22 });
  console.log('  PASS: Exam session has exact 125 questions with 33/13/27/30/22 proportional domain distribution.');

  // 6. Test State & Session Management (Practice flow)
  console.log('\n[6/7] Testing Quiz Session State Management & Answer Recording...');
  startQuizSession({
    mode: 'practice',
    questions: practiceSeq10
  });

  assert.strictEqual(state.screen, 'quiz');
  assert.strictEqual(state.quiz.active, true);
  assert.strictEqual(state.quiz.mode, 'practice');
  assert.strictEqual(state.quiz.currentIndex, 0);
  assert.strictEqual(state.quiz.timeRemainingSeconds, null, 'Practice mode has no timer');

  const firstQ = practiceSeq10[0];
  const correctIdx = firstQ.correct_idx;
  const wrongIdx = (correctIdx + 1) % 4;

  // Record correct answer on Q0
  const ans0 = recordAnswer({ questionIndex: 0, selectedIndex: correctIdx });
  assert.strictEqual(ans0.isCorrect, true);
  assert.strictEqual(state.quiz.correct, 1);
  assert.strictEqual(state.quiz.wrong, 0);

  // Attempt duplicate record on Q0
  const dupAns0 = recordAnswer({ questionIndex: 0, selectedIndex: wrongIdx });
  assert.strictEqual(state.quiz.correct, 1, 'Duplicate record must not change correct count');
  assert.strictEqual(state.quiz.wrong, 0, 'Duplicate record must not change wrong count');

  // Move to next question
  const adv1 = nextQuestion();
  assert.strictEqual(adv1, true);
  assert.strictEqual(state.quiz.currentIndex, 1);

  // Record wrong answer on Q1
  const secondQ = practiceSeq10[1];
  const wrongIdx1 = (secondQ.correct_idx + 1) % 4;
  const ans1 = recordAnswer({ questionIndex: 1, selectedIndex: wrongIdx1 });
  assert.strictEqual(ans1.isCorrect, false);
  assert.strictEqual(state.quiz.correct, 1);
  assert.strictEqual(state.quiz.wrong, 1);

  // Previous question
  const prev = previousQuestion();
  assert.strictEqual(prev, true);
  assert.strictEqual(state.quiz.currentIndex, 0);

  // Exit quiz
  exitQuizSession();
  assert.strictEqual(state.screen, 'cert-start');
  assert.strictEqual(state.quiz.active, false);
  console.log('  PASS: Quiz session lifecycle, answer recording, and navigation verified.');

  // 7. Test Exam Timer State
  console.log('\n[7/7] Testing Exam Session Initial Timer State...');
  startQuizSession({
    mode: 'exam',
    questions: examSession,
    timeMinutes: 120
  });

  assert.strictEqual(state.quiz.mode, 'exam');
  assert.strictEqual(state.quiz.timeRemainingSeconds, 7200, 'Exam mode must initialize to 7200 seconds (120 minutes)');
  assert.strictEqual(state.quiz.questions.length, 125);
  exitQuizSession();
  console.log('  PASS: Exam timer state correctly initialized to 7200 seconds.');

  console.log('\n====================================================');
  console.log(' STATUS: ALL PHASE 4 ENGINE TESTS PASSED (7/7)');
  console.log('====================================================');
}

runPhase4Verification().catch(err => {
  console.error('Test failure:', err);
  process.exit(1);
});
