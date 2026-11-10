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
test('missing Thai question/choice and general explanation follow English fallback; HTML escaped', () => {
  studyAnswers.questions = [{ id: 'test', dom: 1, question: '<script>question</script>', options: ['<b>answer</b>'], correct_idx: 0, explanation: '<em>reason</em>' }];
  studyAnswers.index = 0;state.setup.language = 'th';
  const root = container();renderStudyAnswersScreen(root, () => {});
  assert.ok(root.innerHTML.includes('&lt;script&gt;question&lt;/script&gt;'));
  assert.ok(root.innerHTML.includes('&lt;b&gt;answer&lt;/b&gt;'));
  assert.ok(root.innerHTML.includes('&lt;em&gt;reason&lt;/em&gt;'));
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
