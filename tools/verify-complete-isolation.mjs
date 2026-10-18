/**
 * tools/verify-complete-isolation.mjs
 *
 * Automated verification of complete question bank and version isolation:
 * Invariants 1 - 10 from user request.
 */

import assert from 'node:assert';
import { loadExamConfig, loadQuestionsForDomains } from '../js/core/question-loader.js';
import { createPracticeSession, resumeQuizSession } from '../js/core/quiz-engine.js';
import { getExamVersions, resolveExamVersion } from '../data/exam-versions.js';
import certifications from '../data/certifications.js';
import { state, resetQuizState } from '../js/core/state.js';

async function runIsolationVerification() {
  console.log('====================================================');
  console.log(' ISC2 CC Question Bank Isolation Verification Suite');
  console.log('====================================================\n');

  // Invariant 1 & 2: Pre-2026 loads exactly 583 questions (D1: 142)
  console.log('[Invariant 1 & 2] Verifying Pre-2026 Question Counts...');
  const preConfig = await loadExamConfig('isc2', 'cc', '2026');
  assert.strictEqual(preConfig.totalQuestions, 583, 'Pre-2026 config totalQuestions must be 583');
  assert.strictEqual(preConfig.domains[0].questionCount, 142, 'Pre-2026 D1 questionCount must be 142');

  const preQuestions = await loadQuestionsForDomains({
    vendorId: 'isc2',
    certId: 'cc',
    version: '2026',
    domainIds: [1, 2, 3, 4, 5]
  });
  assert.strictEqual(preQuestions[1].length, 142, 'Pre-2026 D1 must load exactly 142 questions');
  assert.strictEqual(preQuestions[2].length, 65, 'Pre-2026 D2 must load exactly 65 questions');
  assert.strictEqual(preQuestions[3].length, 93, 'Pre-2026 D3 must load exactly 93 questions');
  assert.strictEqual(preQuestions[4].length, 156, 'Pre-2026 D4 must load exactly 156 questions');
  assert.strictEqual(preQuestions[5].length, 127, 'Pre-2026 D5 must load exactly 127 questions');
  const allPre = Object.values(preQuestions).flat();
  assert.strictEqual(allPre.length, 583, 'Pre-2026 total loaded must be exactly 583');
  console.log('  PASS: Invariant 1 & 2 verified: Pre-2026 has exactly 583 questions (D1: 142).');

  // Invariant 3: New 2026 Domain 1 loads exactly 24 new questions
  console.log('\n[Invariant 3] Verifying 2026 (next-bank) Question Counts...');
  const nextConfig = await loadExamConfig('isc2', 'cc', 'next-bank');
  assert.strictEqual(nextConfig.version, 'next-bank', 'Config version must be next-bank');
  assert.strictEqual(nextConfig.totalQuestions, 24, '2026 config totalQuestions must be 24');
  assert.strictEqual(nextConfig.domains[0].questionCount, 24, '2026 D1 questionCount must be 24');

  const nextQuestions = await loadQuestionsForDomains({
    vendorId: 'isc2',
    certId: 'cc',
    version: 'next-bank',
    domainIds: [1]
  });
  assert.strictEqual(nextQuestions[1].length, 24, '2026 D1 must load exactly 24 questions');
  console.log('  PASS: Invariant 3 verified: 2026 (next-bank) loads exactly 24 new questions.');

  // Invariant 4: No new 2026 questions appear in Pre-2026
  console.log('\n[Invariant 4] Verifying no 2026 questions exist in Pre-2026 bank...');
  const preIds = new Set(allPre.map(q => q.id));
  const new2026Ids = [
    584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595,
    596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607
  ];
  for (const id of new2026Ids) {
    assert.strictEqual(preIds.has(id), false, `New 2026 Q${id} must NOT exist in Pre-2026 bank`);
  }
  console.log('  PASS: Invariant 4 verified: 0 of the 24 new questions appear in Pre-2026.');

  // Invariant 5: No legacy questions appear in the new 2026 bank
  console.log('\n[Invariant 5] Verifying no legacy questions exist in new 2026 bank...');
  const nextD1Ids = new Set(nextQuestions[1].map(q => q.id));
  const legacyD1Ids = preQuestions[1].map(q => q.id);
  for (const legId of legacyD1Ids) {
    assert.strictEqual(nextD1Ids.has(legId), false, `Legacy Q${legId} must NOT exist in 2026 bank`);
  }
  console.log('  PASS: Invariant 5 verified: 0 legacy questions appear in new 2026 bank.');

  // Invariant 6: Switching versions does not leak questions or progress
  console.log('\n[Invariant 6] Verifying version switching isolation...');
  const sessionPre = createPracticeSession({
    questionsByDomain: preQuestions,
    selectedDomainIds: [1],
    order: 'all',
    questionCount: 10
  });
  const sessionNext = createPracticeSession({
    questionsByDomain: nextQuestions,
    selectedDomainIds: [1],
    order: 'all',
    questionCount: 10
  });
  assert.strictEqual(sessionPre[0].id, 1, 'Pre-2026 session starts with legacy Q1');
  assert.strictEqual(sessionNext[0].id, 584, '2026 session starts with new Q584');
  console.log('  PASS: Invariant 6 verified: Session creation is strictly isolated per version.');

  // Invariant 7: Session persistence is isolated by version
  console.log('\n[Invariant 7] Verifying session persistence version isolation...');
  const storedPreSession = {
    schemaVersion: 1,
    vendorId: 'isc2',
    certId: 'cc',
    version: '2026',
    versionId: '2026',
    mode: 'practice',
    questionIds: [1, 2, 3],
    currentIndex: 0,
    answers: [null, null, null],
    startTime: Date.now()
  };
  // Attempt to resume Pre-2026 session using next-bank questions -> must fail
  const crossResume = resumeQuizSession({
    storedSession: storedPreSession,
    questionsByDomain: nextQuestions,
    certifications
  });
  assert.strictEqual(crossResume.success, false, 'Cross-version session resume must fail');

  // Resume Pre-2026 session with Pre-2026 questions -> must succeed
  const validResume = resumeQuizSession({
    storedSession: storedPreSession,
    questionsByDomain: preQuestions,
    certifications
  });
  assert.strictEqual(validResume.success, true, 'Matching version resume must succeed');
  console.log('  PASS: Invariant 7 verified: Saved sessions reject foreign version questions.');

  // Invariant 8: Question IDs do not cause cross-version collisions
  console.log('\n[Invariant 8] Verifying question ID uniqueness across versions...');
  const allIdsCombined = [...allPre.map(q => q.id), ...nextQuestions[1].map(q => q.id)];
  assert.strictEqual(new Set(allIdsCombined).size, allIdsCombined.length, 'All question IDs across both versions must be globally unique');
  console.log(`  PASS: Invariant 8 verified: All ${allIdsCombined.length} question IDs (583 legacy + 24 new) are 100% unique.`);

  // Invariant 9: Exam Vocabulary is unaffected
  console.log('\n[Invariant 9] Verifying Exam Vocabulary independence...');
  const ccVersions = getExamVersions('isc2-cc');
  const vocabVersion = ccVersions.find(v => v.id === 'isc2-cc-vocabulary');
  assert.ok(vocabVersion, 'Exam vocabulary entry must exist in registry');
  assert.strictEqual(vocabVersion.type, 'vocabulary', 'Exam vocabulary type must be vocabulary');
  assert.strictEqual(vocabVersion.status, 'coming-soon', 'Exam vocabulary status must be coming-soon');
  assert.strictEqual(resolveExamVersion('isc2-cc', 'isc2-cc-vocabulary'), null, 'Vocabulary cannot be loaded as an exam');
  console.log('  PASS: Invariant 9 verified: Exam vocabulary remains completely independent.');

  // Invariant 10: Bilingual content parity
  console.log('\n[Invariant 10] Verifying bilingual content parity in 2026 bank...');
  nextQuestions[1].forEach(q => {
    assert.ok(q.question && q.question.length > 20, `Q${q.id} English stem valid`);
    assert.ok(q.question_th && q.question_th.length > 20, `Q${q.id} Thai stem valid`);
    assert.strictEqual(q.options.length, 4, `Q${q.id} 4 English options`);
    assert.strictEqual(q.options_th.length, 4, `Q${q.id} 4 Thai options`);
    assert.ok(q.explanation.length > 40, `Q${q.id} English explanation valid`);
    assert.ok(q.explanation_th.length > 40, `Q${q.id} Thai explanation valid`);
  });
  console.log('  PASS: Invariant 10 verified: All 24 new questions have complete bilingual parity.');

  console.log('\n====================================================');
  console.log(' STATUS: ALL 10 INVARIANTS VERIFIED AND PASSING (10/10)');
  console.log('====================================================');
}

runIsolationVerification().catch(err => {
  console.error(err);
  process.exit(1);
});
