import assert from 'node:assert/strict';
import { test } from 'node:test';
import { state } from '../js/core/state.js';
import { renderQuizScreen } from '../js/ui/screen-quiz.js';
import { loadQuestionsForDomains } from '../js/core/question-loader.js';
import { startQuizSession, recordAnswer, stopExamCountdown, finishQuizSession } from '../js/core/quiz-engine.js';
import { renderReviewWrongScreen } from '../js/ui/screen-results.js';
import certifications from '../data/certifications.js';
import config from '../data/certs/isc2/cc/versions/next-bank/exam.config.js';

const cert = certifications.find(c => c.id === 'isc2-cc');
const bank = await loadQuestionsForDomains({ vendorId:'isc2', certId:'cc', version:'next-bank', domainIds:[1,2,3,4,5] });
const questions = Object.values(bank).flat();
const root = { innerHTML:'', querySelector:()=>null, querySelectorAll:()=>[] };
function start(mode, version='next-bank') {
  stopExamCountdown();state.selectedCertification=cert;state.selectedExamVersion=version;
  startQuizSession({mode,questions});
}
test('updated CC has scoped markup and authoritative inline domain name', () => {
  start('practice');state.quiz.questions=[bank[2][0]];state.quiz.answers=[null];
  renderQuizScreen(root,()=>{});
  assert.match(root.innerHTML,/class="quiz-container quiz-minimal-2026\b/);
  assert.ok(root.innerHTML.includes(`Domain 2 · ${config.domains.find(d=>d.id===2).name.en}`));
});
test('practice remains secret until click; feedback contains non-color cues only after record', () => {
  start('practice');renderQuizScreen(root,()=>{});
  assert.doesNotMatch(root.innerHTML,/class="option-item (correct|wrong)"|quiz-feedback-mark|id="quiz-explanation-box"/);
  const q=questions[0];recordAnswer({questionIndex:0,selectedIndex:(q.correct_idx+1)%q.options.length});
  renderQuizScreen(root,()=>{});
  assert.match(root.innerHTML,/class="option-item correct"/);
  assert.match(root.innerHTML,/class="option-item wrong"/);
  assert.match(root.innerHTML,/class="quiz-feedback-mark"/);
  assert.match(root.innerHTML,/id="quiz-explanation-box"/);
  const before=JSON.stringify(state.quiz);recordAnswer({questionIndex:0,selectedIndex:q.correct_idx});
  assert.equal(JSON.stringify(state.quiz),before);
});
test('active Exam reveals selected state only in all languages, preserving first answer', () => {
  start('exam');
  try {
    recordAnswer({questionIndex:0,selectedIndex:0});
    for(const language of ['en','th','both']) {
      state.setup.language=language;renderQuizScreen(root,()=>{});
      assert.match(root.innerHTML,/class="option-item selected"/);
      assert.doesNotMatch(root.innerHTML,/class="option-item (correct|wrong)"|quiz-feedback-mark|id="quiz-explanation-box"|exp-correct-section/);
    }
    const before=JSON.stringify(state.quiz);recordAnswer({questionIndex:0,selectedIndex:1});
    assert.equal(JSON.stringify(state.quiz),before);
    assert.equal(state.quiz.timeRemainingSeconds,7200);
  } finally {stopExamCountdown();}
});
test('legacy and other certification attempts do not receive scoped styles or glyphs', async () => {
  const legacy=await loadQuestionsForDomains({vendorId:'isc2',certId:'cc',version:'2026',domainIds:[2]});
  state.selectedExamVersion='2026';startQuizSession({mode:'practice',questions:legacy[2].slice(0,2)});
  recordAnswer({questionIndex:0,selectedIndex:0});renderQuizScreen(root,()=>{});
  assert.doesNotMatch(root.innerHTML,/quiz-minimal-2026|quiz-feedback-mark/);
  assert.match(root.innerHTML,/BC \/ DR \/ Incident Response/);
  state.quiz.certification={id:'other'};state.quiz.versionId='next-bank';renderQuizScreen(root,()=>{});
  assert.doesNotMatch(root.innerHTML,/quiz-minimal-2026|quiz-feedback-mark/);
});

test('permitted updated CC explanations use independent sections; review guards keep legacy shells', () => {
  start('practice');
  recordAnswer({questionIndex:0,selectedIndex:(questions[0].correct_idx+1)%4});
  renderQuizScreen(root,()=>{});
  assert.match(root.innerHTML,/<section class="explanation-box" id="quiz-explanation-box"/);
  finishQuizSession();renderReviewWrongScreen(root,()=>{});
  assert.match(root.innerHTML,/<section class="explanation-box"/);
  assert.match(root.innerHTML,/review-screen-container quiz-explanation-separated/);
  state.quiz.versionId='2026';renderReviewWrongScreen(root,()=>{});
  assert.doesNotMatch(root.innerHTML,/<section class="explanation-box"|quiz-explanation-separated/);
  state.quiz.versionId='next-bank';state.quiz.certification={id:'other'};renderReviewWrongScreen(root,()=>{});
  assert.doesNotMatch(root.innerHTML,/<section class="explanation-box"|quiz-explanation-separated/);
});

test('updated question badges are removed without stripping literal EN/TH content or legacy badges', async () => {
  state.setup.language='both';
  for(const mode of ['practice','exam']) {
    start(mode);
    try {
      state.quiz.questions=state.quiz.questions.map((q,i)=>i===0?{...q,question:'Literal EN and TH text must remain.'}:q);
      renderQuizScreen(root,()=>{});
      assert.doesNotMatch(root.innerHTML,/class="lang-badge"/);
      assert.ok(root.innerHTML.includes('Literal EN and TH text must remain.'));
      recordAnswer({questionIndex:0,selectedIndex:(questions[0].correct_idx+1)%4});
      finishQuizSession();renderReviewWrongScreen(root,()=>{});
      assert.doesNotMatch(root.innerHTML,/class="lang-badge"/);
    } finally {stopExamCountdown();}
  }
  state.quiz.certification={id:'other'};renderReviewWrongScreen(root,()=>{});
  assert.match(root.innerHTML,/class="lang-badge"/);
  const legacy=await loadQuestionsForDomains({vendorId:'isc2',certId:'cc',version:'2026',domainIds:[1]});
  state.selectedCertification=cert;state.selectedExamVersion='2026';startQuizSession({mode:'practice',questions:legacy[1].slice(0,2)});
  renderQuizScreen(root,()=>{});assert.match(root.innerHTML,/class="lang-badge"/);
  state.setup.language='en';
});
