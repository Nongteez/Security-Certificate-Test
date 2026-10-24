/**
 * tools/verify-domain2-integration.mjs
 *
 * Automated verification of ISC2 CC 2026 Domain 2 question bank integration & expansion:
 * - Exactly 39 Domain 2 questions integrated (26 base + 13 expansion)
 * - Unique question IDs (Q608 to Q646)
 * - Valid production schema matching Domain 1
 * - Correct answer indices (0-3)
 * - Correct answer/explanation consistency
 * - English and Thai field completeness
 * - Domain 2 mapping (dom: 2)
 * - Question loader compatibility
 * - Preserved D1/D2 subtotal of 63; whole-bank total follows all domain modules
 */

import assert from 'node:assert/strict';
import * as loader from '../js/core/question-loader.js';
import * as appState from '../js/core/state.js';
import * as engine from '../js/core/quiz-engine.js';
import { renderExplanation2026Content } from '../js/ui/components/explanation-2026.js';
import { renderCertStartScreen } from '../js/ui/screen-start.js';
import certifications from '../data/certifications.js';
import { getExamVersions, resolveExamVersion } from '../data/exam-versions.js';

console.log('====================================================');
console.log(' ISC2 CC 2026 Domain 2 Integration Verification Suite');
console.log('====================================================\n');

// 1. Exam Versions Registry & next-bank Config Verification
console.log('[1/8] Verifying Exam Versions Registry & next-bank Config...');
const ccVersions = getExamVersions('isc2-cc');
const nextBankEntry = ccVersions.find(v => v.id === 'next-bank');
const domainModules = await Promise.all([1, 2, 3, 4, 5].map(id => import(`../data/certs/isc2/cc/versions/next-bank/questions/domain-${id}.js`)));
const expectedBankTotal = domainModules.reduce((sum, mod) => sum + mod.default.length, 0);
assert.ok(nextBankEntry, 'next-bank entry must exist in exam-versions.js');
assert.equal(nextBankEntry.status, 'available', 'next-bank status must be available');
assert.equal(nextBankEntry.questionCount, expectedBankTotal, 'next-bank registry count must match all domain modules');

const resolvedEntry = resolveExamVersion('isc2-cc', 'next-bank');
assert.ok(resolvedEntry, 'resolveExamVersion must resolve next-bank');

const config = await loader.loadExamConfig('isc2', 'cc', 'next-bank');
assert.ok(config, 'Exam config must load successfully');
assert.equal(config.version, 'next-bank', 'Config version must be next-bank');
assert.equal(config.totalQuestions, expectedBankTotal, 'Config totalQuestions must match all domain modules');
assert.equal(config.defaultQuestionCount, expectedBankTotal, 'Config defaultQuestionCount must match all domain modules');
assert.equal(config.domains.length, 5, 'Config must have 5 domains');

assert.equal(config.domains[0].id, 1, 'Domain 1 ID');
assert.equal(config.domains[0].questionCount, 24, 'Domain 1 questionCount must be 24');
assert.equal(config.domains[0].available, true, 'Domain 1 must be available');

assert.equal(config.domains[1].id, 2, 'Domain 2 ID');
assert.equal(config.domains[1].questionCount, 39, 'Domain 2 questionCount must be 39');
assert.equal(config.domains[1].questionThCount, 39, 'Domain 2 questionThCount must be 39');
assert.equal(config.domains[1].available, true, 'Domain 2 must be available');
console.log(`  PASS: Registry and next-bank config verified (Total: ${expectedBankTotal}, D1: 24, D2: 39).`);

// 2. Question Loader Compatibility
console.log('\n[2/8] Verifying Question Loader Compatibility...');
const d1Questions = await loader.loadDomainQuestions({ vendorId: 'isc2', certId: 'cc', version: 'next-bank', domainId: 1 });
assert.equal(d1Questions.length, 24, 'loadDomainQuestions must load 24 questions for Domain 1');

const d2Questions = await loader.loadDomainQuestions({ vendorId: 'isc2', certId: 'cc', version: 'next-bank', domainId: 2 });
assert.equal(d2Questions.length, 39, 'loadDomainQuestions must load exactly 39 questions for Domain 2');

const multiDomain = await loader.loadQuestionsForDomains({
  vendorId: 'isc2',
  certId: 'cc',
  version: 'next-bank',
  domainIds: [1, 2]
});
assert.equal(multiDomain[1].length, 24, 'Multi-domain loader must return 24 for D1');
assert.equal(multiDomain[2].length, 39, 'Multi-domain loader must return 39 for D2');

const allQuestions = [...multiDomain[1], ...multiDomain[2]];
assert.equal(allQuestions.length, 63, 'Total loaded questions must be exactly 63');
console.log('  PASS: Question loader successfully loads both domains (63 questions total).');

// 3. Question ID Uniqueness & Sequential Allocation
console.log('\n[3/8] Verifying Question ID Sequence and Uniqueness...');
const d1Ids = d1Questions.map(q => q.id);
assert.equal(d1Ids[0], 584, 'Domain 1 start ID must be 584');
assert.equal(d1Ids[23], 607, 'Domain 1 end ID must be 607');

const d2Ids = d2Questions.map(q => q.id);
assert.equal(d2Ids[0], 608, 'Domain 2 start ID must be 608 (continuing immediately after 607)');
assert.equal(d2Ids[38], 646, 'Domain 2 end ID must be 646');

const allIds = allQuestions.map(q => q.id);
assert.equal(new Set(allIds).size, 63, 'All 63 question IDs must be strictly unique');
for (let id = 584; id <= 646; id++) {
  assert.ok(allIds.includes(id), `Question bank must contain sequential ID ${id}`);
}
console.log('  PASS: IDs 608-646 assigned sequentially with 100% uniqueness (range 584-646).');

// 4. Production Schema Parity
console.log('\n[4/8] Verifying Production Schema Parity with Domain 1...');
const REQUIRED_PROD_KEYS = [
  'id',
  'dom',
  'question',
  'options',
  'correct_idx',
  'explanation',
  'short_explanation_en',
  'question_th',
  'options_th',
  'explanation_th',
  'explanation_detail'
];

d2Questions.forEach((q, idx) => {
  assert.equal(q.dom, 2, `Q${q.id} dom property must be 2`);
  assert.equal(q.id, 608 + idx, `Q${q.id} id property must be ${608 + idx}`);
  
  for (const key of REQUIRED_PROD_KEYS) {
    assert.ok(q[key] !== undefined && q[key] !== null, `Q${q.id} must have property '${key}'`);
  }

  assert.equal(Array.isArray(q.options), true, `Q${q.id} options must be an array`);
  assert.equal(q.options.length, 4, `Q${q.id} must have exactly 4 options`);
  assert.equal(Array.isArray(q.options_th), true, `Q${q.id} options_th must be an array`);
  assert.equal(q.options_th.length, 4, `Q${q.id} must have exactly 4 Thai options`);
});
console.log('  PASS: All 39 questions adhere 100% to production schema structure.');

// 5. English & Thai Field Completeness
console.log('\n[5/8] Verifying Bilingual Field Completeness & Quality...');
d2Questions.forEach(q => {
  assert.ok(typeof q.question === 'string' && q.question.trim().length > 30, `Q${q.id} question stem English`);
  assert.ok(typeof q.question_th === 'string' && q.question_th.trim().length > 30, `Q${q.id} question stem Thai`);
  
  q.options.forEach((opt, oIdx) => {
    assert.ok(typeof opt === 'string' && opt.trim().length > 3, `Q${q.id} option[${oIdx}] English`);
  });
  q.options_th.forEach((optTh, oIdx) => {
    assert.ok(typeof optTh === 'string' && optTh.trim().length > 3, `Q${q.id} option_th[${oIdx}] Thai`);
  });

  assert.ok(typeof q.explanation === 'string' && q.explanation.trim().length > 50, `Q${q.id} explanation English`);
  assert.ok(typeof q.explanation_th === 'string' && q.explanation_th.trim().length > 50, `Q${q.id} explanation Thai`);
  assert.ok(typeof q.short_explanation_en === 'string' && q.short_explanation_en.trim().length > 15, `Q${q.id} short explanation`);

  // Explanation detail completeness
  const ed = q.explanation_detail;
  assert.ok(ed.correct && typeof ed.correct.en === 'string' && ed.correct.en.length > 20, `Q${q.id} detail.correct.en`);
  assert.ok(ed.correct && typeof ed.correct.th === 'string' && ed.correct.th.length > 20, `Q${q.id} detail.correct.th`);
  assert.equal(ed.incorrect.length, 3, `Q${q.id} detail.incorrect must contain 3 items`);
  ed.incorrect.forEach(inc => {
    assert.ok(inc.text_en && inc.text_en.length > 10, `Q${q.id} incorrect ${inc.letter} text_en`);
    assert.ok(inc.text_th && inc.text_th.length > 10, `Q${q.id} incorrect ${inc.letter} text_th`);
  });
  if (ed.example) {
    assert.ok(ed.example.en && ed.example.th, `Q${q.id} example en/th`);
  }
  if (ed.exam_tip) {
    assert.ok(ed.exam_tip.en && ed.exam_tip.th, `Q${q.id} exam_tip en/th`);
  }
});
console.log('  PASS: All 39 questions verified for 100% bilingual completeness.');

// 6. Correct Answer Indices & Explanation Mapping Consistency
console.log('\n[6/8] Verifying Answer Indices and Explanation Alignment...');
const LETTERS = ['A', 'B', 'C', 'D'];
const keyDist = { 0: 0, 1: 0, 2: 0, 3: 0 };

d2Questions.forEach(q => {
  assert.ok([0, 1, 2, 3].includes(q.correct_idx), `Q${q.id} correct_idx must be in [0, 1, 2, 3]`);
  keyDist[q.correct_idx]++;

  const correctLetter = LETTERS[q.correct_idx];
  assert.ok(q.explanation.startsWith(`Option ${correctLetter} is correct`),
    `Q${q.id} explanation must start with 'Option ${correctLetter} is correct'`);
  assert.ok(q.explanation_th.startsWith(`ข้อ ${correctLetter} ถูกต้อง`),
    `Q${q.id} explanation_th must start with 'ข้อ ${correctLetter} ถูกต้อง'`);

  const otherLetters = LETTERS.filter(l => l !== correctLetter).sort();
  const incLetters = q.explanation_detail.incorrect.map(i => i.letter).sort();
  assert.deepEqual(incLetters, otherLetters, `Q${q.id} incorrect letters must be exactly ${otherLetters}`);
});

console.log('  Answer Key Distribution in Domain 2 (39 questions):', {
  'A (0)': keyDist[0],
  'B (1)': keyDist[1],
  'C (2)': keyDist[2],
  'D (3)': keyDist[3]
});
assert.equal(keyDist[0], 10, 'A count must be 10');
assert.equal(keyDist[1], 10, 'B count must be 10');
assert.equal(keyDist[2], 10, 'C count must be 10');
assert.equal(keyDist[3], 9, 'D count must be 9');
console.log('  PASS: Highly balanced answer key distribution (10-10-10-9) and 100% explanation alignment verified.');

// 7. Explanation Component UI Rendering Compatibility
console.log('\n[7/8] Verifying UI Explanation Renderer Across Languages (en/th/both)...');
d2Questions.forEach(q => {
  const correctLetter = LETTERS[q.correct_idx];
  ['en', 'th', 'both'].forEach(lang => {
    const html = renderExplanation2026Content(q, lang);
    assert.ok(html.includes('exp-correct-section'), `Q${q.id} HTML correct section in ${lang}`);
    assert.ok(html.includes(`Correct Answer: Option ${correctLetter}`), `Q${q.id} HTML letter in ${lang}`);
    assert.ok(html.includes('Why Other Options Are Incorrect'), `Q${q.id} HTML incorrect section in ${lang}`);
    if (q.explanation_detail.example) {
      assert.ok(html.includes('Real-World Example'), `Q${q.id} HTML example section in ${lang}`);
    }
    if (q.explanation_detail.exam_tip) {
      assert.ok(html.includes('Exam Tip'), `Q${q.id} HTML tip section in ${lang}`);
    }
  });
});
console.log('  PASS: UI Explanation renderer functions cleanly across EN, TH, and Bilingual modes.');

// 8. Quiz Engine & UI Selection Flow Integration
console.log('\n[8/8] Verifying Quiz Engine & UI Selection Flow...');
// Practice session with D2 only
const practiceD2 = engine.createPracticeSession({
  questionsByDomain: multiDomain,
  selectedDomainIds: [2],
  order: 'all',
  questionCount: 39
});
assert.equal(practiceD2.length, 39, 'D2-only practice session must contain 39 questions');
assert.ok(practiceD2.every(q => q.dom === 2), 'All questions in D2 practice session must belong to dom 2');

// Practice session with both D1 and D2
const practiceBoth = engine.createPracticeSession({
  questionsByDomain: multiDomain,
  selectedDomainIds: [1, 2],
  order: 'all',
  questionCount: 63
});
assert.equal(practiceBoth.length, 63, 'Combined practice session must contain 63 questions');

// Proportional allocation in exam session across available domains in 2026 outline
const examSession = engine.createExamSession({
  questionsByDomain: multiDomain,
  examConfig: config,
  totalQuestions: 63
});
// 63 * 0.24 = 15.12 -> 15 for D1; 63 * 0.173 = 10.899 -> 11 for D2 (total 26 from current 2 available domains)
assert.equal(examSession.length, 26, 'Exam session allocates proportional questions from available domains (15 D1 + 11 D2 = 26)');
const d1ExamCount = examSession.filter(q => q.dom === 1).length;
const d2ExamCount = examSession.filter(q => q.dom === 2).length;
assert.equal(d1ExamCount, 15, 'D1 gets 15 questions (24% of 63, floored with remainder)');
assert.equal(d2ExamCount, 11, 'D2 gets 11 questions (17.3% of 63, floored with remainder)');

// Verify Start Screen UI markup
const makeMockEl = () => ({
  addEventListener: () => {},
  querySelector: () => makeMockEl(),
  querySelectorAll: () => [],
  setAttribute: () => {},
  getAttribute: () => '',
  classList: { add: () => {}, remove: () => {} }
});
const dummyContainer = {
  _html: '',
  set innerHTML(val) { this._html = val; },
  get innerHTML() { return this._html; },
  querySelector: () => makeMockEl(),
  querySelectorAll: () => []
};

const ccCert = certifications[0];
renderCertStartScreen(dummyContainer, ccCert, 'next-bank', () => {}, config, () => {});
const startHtml = dummyContainer.innerHTML;

assert.ok(startHtml.includes('Security Governance'), 'Start screen renders Domain 2');
assert.ok(startHtml.includes('dcount-badge">39</div>'), 'Start screen renders Domain 2 question count 39');
assert.ok(!startHtml.includes('data-domain-id="2" role="presentation" aria-checked="false" aria-disabled="true"'),
  'Domain 2 must be interactive (not disabled)');
console.log('  PASS: Quiz Engine sessions and Start Screen UI flow verified for Domain 2 (39 questions).');

console.log('\n====================================================');
console.log(' ALL 8 VERIFICATION CHECKS PASSED (100% SUCCESS)');
console.log('====================================================\n');
