import assert from 'node:assert/strict';
import { test } from 'node:test';
import { state } from '../js/core/state.js';
import certifications from '../data/certifications.js';
import { loadQuestionsForDomains } from '../js/core/question-loader.js';
import { canStudyAnswers, createStudySelection } from '../js/core/study-answers.js';
import { studyAnswers } from '../js/core/study-answers.js';
import { renderStudyAnswersScreen } from '../js/ui/screen-study-answers.js';
import { renderCertStartScreen } from '../js/ui/screen-start.js';
import { loadExamConfig } from '../js/core/question-loader.js';
import { escapeHtml } from '../js/ui/components/explanation-2026.js';

const cert = certifications.find(c => c.id === 'isc2-cc');
test('only updated ISC2 CC outline supports study', () => {
  assert.equal(canStudyAnswers(cert, 'next-bank'), true);
  for (const version of ['2026', 'unknown', null]) assert.equal(canStudyAnswers(cert, version), false);
  assert.equal(canStudyAnswers({ ...cert, id: 'other' }, 'next-bank'), false);
});
test('study reuses ordered domain pool/count without touching quiz, setup, storage or data', async () => {
  const bank = await loadQuestionsForDomains({ vendorId: 'isc2', certId: 'cc', version: 'next-bank', domainIds: [1, 3] });
  const before = JSON.stringify({ quiz: state.quiz, setup: state.setup, bank });
  globalThis.localStorage = { getItem() { return null; }, setItem() { assert.fail('Study must not write storage'); }, removeItem() { assert.fail('Study must not remove storage'); } };
  const preferences = { selectedDomains: new Set([3, 1]), order: 'all', questionCount: 26 };
  const questions = await createStudySelection(cert, 'next-bank', preferences);
  assert.deepEqual(questions, [...bank[1], ...bank[3]].slice(0, 26));
  assert.equal(questions[0], bank[1][0]);
  assert.equal(JSON.stringify({ quiz: state.quiz, setup: state.setup, bank }), before);
  const oldRandom = Math.random;
  try {
    Math.random = () => 0;
    const random = await createStudySelection(cert, 'next-bank', { ...preferences, order: 'random' });
    assert.equal(random.length, 26);
    assert.notDeepEqual(random.map(q => q.id), questions.map(q => q.id));
    assert.ok(random.every(q => q.dom === 1 || q.dom === 3));
    state.setup.studyMode = 'exam';
    assert.deepEqual(await createStudySelection(cert, 'next-bank', preferences), questions);
    state.setup.studyMode = 'practice';
  } finally { Math.random = oldRandom; }
});
test('unsupported versions, empty selections and invalid domains fail safely', async () => {
  await assert.rejects(createStudySelection(cert, '2026', {}));
  await assert.rejects(createStudySelection(cert, 'next-bank', { selectedDomains: new Set() }));
  await assert.rejects(createStudySelection(cert, 'next-bank', { selectedDomains: new Set([99]) }));
  const questions = await createStudySelection(cert, 'next-bank', { selectedDomains: new Set([1]), questionCount: 9999 });
  assert.equal(questions.length, 48);
});

function container() {
  return { innerHTML: '', querySelector: () => ({ addEventListener() {}, focus() {} }), querySelectorAll: () => [] };
}
test('configuration exposes study only below the updated-outline primary action', async () => {
  const root = container();
  for (const mode of ['practice', 'exam']) {
    state.setup.studyMode = mode;
    for (const version of ['2026', 'next-bank']) {
      renderCertStartScreen(root, cert, version, () => {}, await loadExamConfig('isc2', 'cc', version), () => {});
      assert.ok(root.innerHTML.includes('id="btn-start-quiz"'));
      assert.equal(root.innerHTML.includes('id="btn-study-answers"'), version === 'next-bank');
      if (version === 'next-bank') assert.ok(root.innerHTML.indexOf('id="btn-study-answers"') > root.innerHTML.indexOf('id="btn-start-quiz"'));
    }
  }
  state.setup.studyMode = 'practice';
});
test('all bank answers/explanations render immediately in every language without quiz mutation', async () => {
  const bank = await loadQuestionsForDomains({ vendorId: 'isc2', certId: 'cc', version: 'next-bank', domainIds: [1,2,3,4,5] });
  const root = container(), before = JSON.stringify({ bank, quiz: state.quiz });
  state.selectedCertification = cert; state.selectedExamVersion = 'next-bank';
  studyAnswers.questions = Object.values(bank).flat();
  for (let i = 0; i < studyAnswers.questions.length; i++) {
    studyAnswers.index = i;
    const q = studyAnswers.questions[i];
    for (const language of ['en','th','both']) {
      state.setup.language = language;
      renderStudyAnswersScreen(root, () => assert.fail('Unexpected redirect'));
      const correct = escapeHtml(language === 'th' ? q.options_th?.[q.correct_idx] || q.options[q.correct_idx] : q.options[q.correct_idx]);
      assert.ok(root.innerHTML.includes(correct));
      assert.ok(!root.innerHTML.includes('✓ Correct answer'));
      assert.ok(!root.innerHTML.includes('study-correct-label'));
      const reason = q.explanation_detail?.correct?.[language === 'th' ? 'th' : 'en'] || (language === 'th' ? q.explanation_th || q.explanation : q.explanation);
      assert.ok(root.innerHTML.includes(escapeHtml(reason)));
      assert.equal((root.innerHTML.match(/class="option-item correct"/g) || []).length, 1);
      assert.ok(!root.innerHTML.includes('data-option-idx'));
    }
  }
  assert.equal(JSON.stringify({ bank, quiz: state.quiz }), before);
});
test('missing Thai question/choice still use English fallback, but explanations omit the absent translation', () => {
  studyAnswers.questions = [{ id: 'test', dom: 1, question: '<script>question</script>', options: ['<b>answer</b>'], correct_idx: 0, explanation: '<em>reason</em>' }];
  studyAnswers.index = 0;state.setup.language = 'th';
  const root = container();renderStudyAnswersScreen(root, () => {});
  assert.ok(root.innerHTML.includes('&lt;script&gt;question&lt;/script&gt;'));
  assert.ok(root.innerHTML.includes('&lt;b&gt;answer&lt;/b&gt;'));
  assert.ok(!root.innerHTML.includes('&lt;em&gt;reason&lt;/em&gt;'));
  assert.ok(!root.innerHTML.includes('Why Other Options Are Incorrect'));
  state.setup.language = 'en';
});
test('direct view guards reject legacy and missing selection without changing attempts', () => {
  const before = JSON.stringify(state.quiz);let redirects = 0;
  state.selectedExamVersion = '2026';
  renderStudyAnswersScreen(container(), () => redirects++);
  assert.equal(redirects, 1);assert.equal(state.screen, 'cert-start');
  state.selectedExamVersion = 'next-bank';studyAnswers.questions = [];
  renderStudyAnswersScreen(container(), () => redirects++);
  assert.equal(redirects, 2);assert.equal(JSON.stringify(state.quiz), before);
});

test('only study question spans reuse the existing responsive quiz typography classes', async () => {
  state.selectedCertification=cert;state.selectedExamVersion='next-bank';
  studyAnswers.questions=await createStudySelection(cert,'next-bank',{selectedDomains:new Set([1]),questionCount:1});
  studyAnswers.index=0;const root=container();
  for(const language of ['en','th','both']) {
    state.setup.language=language;renderStudyAnswersScreen(root,()=>{});
    const heading=root.innerHTML.match(/<h2[^>]*id="study-question"[^>]*>([\s\S]*?)<\/h2>/)[1];
    assert.equal(heading.includes('question-en'),language!=='th');
    assert.equal(heading.includes('question-th'),language!=='en');
    const options=root.innerHTML.match(/<ol[\s\S]*?<\/ol>/)[0];
    assert.doesNotMatch(options,/question-en|question-th/);
  }
  state.setup.language='en';
});

test('Study Answers pairs reasons by option identity in display order and renders optional sections once', () => {
  state.selectedCertification = cert;
  state.selectedExamVersion = 'next-bank';
  studyAnswers.index = 0;
  studyAnswers.questions = [{
    id: 'pairing', dom: 1, question: 'Question', correct_idx: 2,
    options: ['Choice A', 'Choice B', 'Data Processor', 'Choice D'],
    options_th: ['ตัวเลือก A', 'ตัวเลือก B', 'ผู้ประมวลผลข้อมูล', 'ตัวเลือก D'],
    explanation_detail: {
      correct: { en: 'Correct EN reasoning', th: 'เหตุผลที่ถูกต้อง' },
      incorrect: [
        { letter: 'D', text_en: 'Reason D EN', text_th: 'เหตุผล D' },
        { letter: 'A', text_en: 'Reason A EN', text_th: 'เหตุผล A' },
        { idx: 1, text_en: 'Reason B EN' }
      ],
      example: { en: 'Example EN', th: 'ตัวอย่าง' },
      exam_tip: { th: 'เคล็ดลับ' }
    }
  }];
  const root = container();
  function explanation(language) {
    state.setup.language = language;
    renderStudyAnswersScreen(root, () => assert.fail('Unexpected redirect'));
    return root.innerHTML.slice(root.innerHTML.indexOf('id="study-explanation-title"'));
  }
  const both = explanation('both');
  assert.match(both, /<span>Correct Answer<\/span>\s*<\/h3>\s*<div class="study-explanation-options">\s*<div class="study-explanation-row study-explanation-correct-row">\s*<span class="option-letter">C<\/span>/);
  for (const heading of ['Correct Answer', 'Why Other Options Are Incorrect', 'Real-World Example', 'Exam Tip']) {
    assert.equal(both.split(heading).length - 1, 1, heading);
  }
  const ordered = ['Correct Answer', '>C</span>', 'Data Processor', 'ผู้ประมวลผลข้อมูล', 'Correct EN reasoning', 'เหตุผลที่ถูกต้อง',
    'Why Other Options Are Incorrect', 'Choice A', 'ตัวเลือก A', 'Reason A EN', 'เหตุผล A',
    'Choice B', 'ตัวเลือก B', 'Reason B EN', 'Choice D', 'ตัวเลือก D', 'Reason D EN', 'เหตุผล D', 'Example EN', 'ตัวอย่าง', 'เคล็ดลับ'];
  let cursor = 0;
  for (const part of ordered) {
    const at = both.indexOf(part, cursor);
    assert.ok(at >= cursor, 'Out of order or missing: ' + part);
    cursor = at + part.length;
  }
  assert.doesNotMatch(both, /exp-lang-block/);
  assert.equal(both.split('Reason B EN').length - 1, 1);
  const en = explanation('en');
  assert.match(en, /Reason A EN/);
  assert.doesNotMatch(en, /เหตุผล|ตัวอย่าง|เคล็ดลับ|Exam Tip/);
  const th = explanation('th');
  assert.match(th, /เหตุผล A/);
  assert.doesNotMatch(th, /Correct EN reasoning|Reason [ABD] EN|Example EN|Data Processor/);
  state.setup.language = 'en';
});

test('Study Answers omits empty optional explanation fields and escapes an unstructured explanation', () => {
  state.selectedCertification = cert;
  state.selectedExamVersion = 'next-bank';
  state.setup.language = 'both';
  studyAnswers.index = 0;
  const question = { id: 'optional', dom: 2, question: 'Question', options: ['A'], correct_idx: 0 };
  const root = container();
  studyAnswers.questions = [{ ...question, explanation_detail: { correct: { en: 'Only English' }, example: {}, exam_tip: { en: ' ' } } }];
  renderStudyAnswersScreen(root, () => assert.fail('Unexpected redirect'));
  assert.match(root.innerHTML, /Only English/);
  assert.doesNotMatch(root.innerHTML, /Why Other Options Are Incorrect|Real-World Example|Exam Tip/);
  studyAnswers.questions = [{ ...question, explanation: '<script>reason</script>' }];
  renderStudyAnswersScreen(root, () => assert.fail('Unexpected redirect'));
  assert.ok(root.innerHTML.includes('&lt;script&gt;reason&lt;/script&gt;'));
  assert.equal(root.innerHTML.split('&lt;script&gt;reason&lt;/script&gt;').length - 1, 1);
  state.setup.language = 'en';
});
