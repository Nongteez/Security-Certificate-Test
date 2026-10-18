/**
 * tools/verify-domain1-activation.mjs
 *
 * Comprehensive automated verification for Phase 4 & 5:
 * ISC2 CC 2026 Domain 1 Question Generation, Validation & Local Activation.
 */

import assert from 'node:assert';
import { loadQuestionsForDomains, loadExamConfig } from '../js/core/question-loader.js';
import { createPracticeSession, createExamSession } from '../js/core/quiz-engine.js';
import { domain1NewQuestions } from './draft-domain-1-questions.mjs';

async function main() {
  console.log('====================================================');
  console.log(' Domain 1 2026 Question Bank Activation Verification');
  console.log('====================================================\n');

  // 1. Config verification
  console.log('[1/6] Verifying 2026 Exam Configuration...');
  const examConfig = await loadExamConfig('isc2', 'cc', '2026');
  assert.strictEqual(examConfig.totalQuestions, 607, 'totalQuestions must be 607');
  assert.strictEqual(examConfig.domains[0].questionCount, 166, 'Domain 1 questionCount must be 166');
  assert.strictEqual(examConfig.domains[0].questionThCount, 166, 'Domain 1 questionThCount must be 166');
  console.log('  PASS: Config has totalQuestions = 607 and Domain 1 = 166.');

  // 2. Load all questions
  console.log('\n[2/6] Loading Questions via Question Loader...');
  const questionsByDomain = await loadQuestionsForDomains({
    vendorId: 'isc2',
    certId: 'cc',
    version: '2026',
    domainIds: [1, 2, 3, 4, 5]
  });

  assert.strictEqual(questionsByDomain[1].length, 166, 'Domain 1 must contain 166 questions');
  assert.strictEqual(questionsByDomain[2].length, 65, 'Domain 2 must contain 65 questions');
  assert.strictEqual(questionsByDomain[3].length, 93, 'Domain 3 must contain 93 questions');
  assert.strictEqual(questionsByDomain[4].length, 156, 'Domain 4 must contain 156 questions');
  assert.strictEqual(questionsByDomain[5].length, 127, 'Domain 5 must contain 127 questions');

  const allQuestions = Object.values(questionsByDomain).flat();
  assert.strictEqual(allQuestions.length, 607, 'Total questions must be 607');

  const idSet = new Set(allQuestions.map(q => q.id));
  assert.strictEqual(idSet.size, 607, 'All 607 question IDs must be strictly unique');
  console.log('  PASS: 607 total questions loaded with 100% unique IDs.');

  // 3. Verify newly activated questions
  console.log('\n[3/6] Verifying Newly Activated Domain 1 Questions (Q584 - Q607)...');
  const d1Questions = questionsByDomain[1];
  const newQuestions = d1Questions.slice(142);
  assert.strictEqual(newQuestions.length, 24, 'Exactly 24 newly activated questions must exist in D1');

  newQuestions.forEach((q, i) => {
    const expected = domain1NewQuestions[i];
    assert.strictEqual(q.id, 584 + i, `Question ${i} id must be ${584 + i}`);
    assert.strictEqual(q.dom, 1, `Question ${q.id} dom must be 1`);
    assert.strictEqual(q.question, expected.question, `Question ${q.id} English stem must match`);
    assert.strictEqual(q.question_th, expected.question_th, `Question ${q.id} Thai stem must match`);
    assert.strictEqual(q.correct_idx, expected.correct_idx, `Question ${q.id} correct_idx must match`);
    assert.strictEqual(q.options.length, 4, `Question ${q.id} must have 4 English options`);
    assert.strictEqual(q.options_th.length, 4, `Question ${q.id} must have 4 Thai options`);
    assert.ok(q.explanation.length > 50, `Question ${q.id} must have comprehensive English explanation`);
    assert.ok(q.short_explanation_en.length > 15, `Question ${q.id} must have short explanation`);
    assert.ok(q.explanation_th.length > 50, `Question ${q.id} must have comprehensive Thai explanation`);
    // Ensure Thai explanation contains distractor breakdown
    assert.ok(q.explanation_th.includes('ข้อ') || q.explanation_th.includes('ตัวเลือก'),
      `Question ${q.id} Thai explanation must contain distractor analysis`);
  });
  console.log('  PASS: All 24 new questions verified for schema, bilingual content, and distractor rationales.');

  // 4. Verify Practice Mode with Domain 1
  console.log('\n[4/6] Testing Practice Mode Session Generation with Activated Questions...');
  const practiceAllD1 = createPracticeSession({
    questionsByDomain,
    selectedDomainIds: [1],
    order: 'all',
    questionCount: 166
  });
  assert.strictEqual(practiceAllD1.length, 166, 'Practice session for D1 must contain all 166 questions');
  const d1IdsInPractice = new Set(practiceAllD1.map(q => q.id));
  for (let id = 584; id <= 607; id++) {
    assert.ok(d1IdsInPractice.has(id), `Practice session must include newly activated Q${id}`);
  }
  console.log('  PASS: Practice mode generates full 166-question D1 session containing all new questions.');

  // 5. Verify Exam Mode Allocation
  console.log('\n[5/6] Testing Exam Mode 125-Question Proportional Session...');
  const examSession = createExamSession({
    questionsByDomain,
    examConfig,
    totalQuestions: 125
  });
  assert.strictEqual(examSession.length, 125, 'Exam session must contain 125 questions');
  const d1InExam = examSession.filter(q => q.dom === 1);
  assert.strictEqual(d1InExam.length, 33, 'Exam session must allocate exactly 33 questions from Domain 1');
  console.log('  PASS: Exam mode correctly allocates 33 Domain 1 questions from 166 pool.');

  // 6. Verify Subtopic & Opportunity Distribution
  console.log('\n[6/6] Verifying Opportunity & Subtopic Traceability...');
  const oppCounts = {};
  const objCounts = {};
  domain1NewQuestions.forEach(q => {
    oppCounts[q._meta.opportunity] = (oppCounts[q._meta.opportunity] || 0) + 1;
    objCounts[q._meta.objective] = (objCounts[q._meta.objective] || 0) + 1;
  });

  console.log('  Opportunity distribution (O01 - O18):', oppCounts);
  console.log('  Subtopic objective distribution (1.1 - 1.5):', objCounts);

  // All 18 plannable opportunities must have at least 1 question
  for (let o = 1; o <= 18; o++) {
    const oppKey = `O${String(o).padStart(2, '0')}`;
    assert.ok(oppCounts[oppKey] >= 1, `Opportunity ${oppKey} must be represented`);
  }
  // Zero hold opportunities
  assert.strictEqual(oppCounts['O19'], undefined, 'O19 must NOT be used');
  assert.strictEqual(oppCounts['O20'], undefined, 'O20 must NOT be used');

  assert.strictEqual(objCounts['1.1'], 7, 'Objective 1.1 should have 7 questions');
  assert.strictEqual(objCounts['1.2'], 6, 'Objective 1.2 should have 6 questions');
  assert.strictEqual(objCounts['1.3'], 4, 'Objective 1.3 should have 4 questions');
  assert.strictEqual(objCounts['1.4'], 5, 'Objective 1.4 should have 5 questions');
  assert.strictEqual(objCounts['1.5'], 2, 'Objective 1.5 should have 2 questions');

  console.log('  PASS: All 18 plannable opportunities covered with 0 hold/deferred items.');

  console.log('\n====================================================');
  console.log(' STATUS: ALL DOMAIN 1 ACTIVATION CHECKS PASSED (6/6)');
  console.log('====================================================');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
