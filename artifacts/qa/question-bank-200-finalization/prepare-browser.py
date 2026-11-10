"""Reuse the established installed-Chrome test harness without touching historical evidence."""
import pathlib
OUT=pathlib.Path(__file__).resolve().parent;ROOT=OUT.parents[2]
s=(ROOT/'artifacts/qa/question-bank-academic-repair/verify-browser.mjs').read_text(encoding='utf-8')
s=s.replace("'artifacts/qa/question-bank-academic-repair', process.argv[2] || 'after'","'artifacts/qa/question-bank-200-finalization', 'chrome'")
s=s.replace('const port = 5287, debug = 9387;','const port = 5337, debug = 9437;')
s=s.replace('for(const targetId of [588,591,611,1018])','for(const targetId of [1044,1051,1065,1071,1080,1083])')
s=s.replace('[[1440,900],[390,844]]','[[1440,900],[1920,1080],[390,844]]')
s=s.replace("all 157 bank explanations and option reasons intact in all languages',allContent===471","all 200 bank explanations and option reasons intact in all languages',allContent===600")
s=s.replace("if(phase==='after'){await evaluate(`window.targetId=588`);await openView('study');check('Q588 rendered explanation is about knowledge factors, not Accounting',await evaluate(`/knowledge factors/.test(document.querySelector('.explanation-box').textContent)&&!/Accounting \\(and auditing\\)/.test(document.querySelector('.explanation-box').textContent)`));}",'')
marker="  async function openView(view,fallback=false) {"
insert=r'''
  const browserVersion=await send('Browser.getVersion');
  check('installed Chrome reports a genuine browser version',/Chrome/.test(browserVersion.product));
  check('real loader bank200 and domain totals',await evaluate(`questions.length===200&&JSON.stringify(Object.values(bank).map(q=>q.length))==='[48,40,31,41,40]'`));
  async function setup(mode='practice') {
    await evaluate(`(async()=>{engine.stopExamCountdown();(await import('/js/core/storage.js')).clearActiveQuizSession();state.quiz.active=false;state.selectedCertification=cert;state.selectedExamVersion='next-bank';state.setup.language='en';state.setup.studyMode='${mode}';state.setup.practice.selectedDomains=new Set([1,2,3,4,5]);state.setup.practice.questionCount=200;history.replaceState({studyAnswers:'config'},'','#isc2-cc-next-bank-config');state.screen='cert-start';await render();})()`);
    await waitFor("!!document.querySelector('#btn-start-quiz')");
  }
  for(const [width,height]of [[1440,900],[1920,1080],[390,844]])for(const theme of ['light','dark']){
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width===390});
    await evaluate(`document.documentElement.dataset.theme='${theme}'`);await setup();
    check(`configuration200 ${width} ${theme}`,await evaluate(`(()=>{const q=document.querySelector('#question-count-input');return q?.max==='200'&&q.value==='200'&&/200/.test(document.querySelector('.pool-count-info').textContent)&&JSON.stringify([...document.querySelectorAll('.dcount-badge')].map(n=>+n.textContent))==='[48,40,31,41,40]'&&document.documentElement.scrollWidth<=innerWidth;})()`));
    if((width===1440&&theme==='light')||(width===390&&theme==='dark'))await capture(`configuration-${width}-${theme}`);
  }
  await setup();await click('#btn-study-answers');await waitFor("!!document.querySelector('#study-question')");
  check('Study Answers actual configuration action selects200',await evaluate('study.questions.length===200'));
  const studyNewCases=await evaluate(`(async()=>{let n=0;for(const q of questions.filter(q=>q.id>=1041))for(const lang of ['en','th','both']){
    study.index=study.questions.findIndex(x=>x.id===q.id);state.setup.language=lang;await render();const card=document.querySelector('#study-question'),exp=document.querySelector('.explanation-box');
    if(!contentIntact(exp,q,lang)||document.querySelectorAll('.study-options .option-item').length!==4||!card.textContent.includes(lang==='th'?q.question_th:q.question))throw Error('New Study content '+q.id+' '+lang);n++;
  }return n;})()`);
  check('all43 new Study questions in3 languages via actual DOM',studyNewCases===129);
  await send('Page.reload');await waitFor("!!document.querySelector('#btn-start-quiz')");
  check('Study cold reload follows existing configuration fallback with200',await evaluate("document.querySelector('#question-count-input').max==='200'&&!document.querySelector('.explanation-box')"));
  // Reload removes JavaScript globals; restore helpers by rerunning the original bootstrap.
  await bootstrap();
  const activeExamMatrix=[];
  for(const id of [1044,1051,1065,1071,1080,1083])for(const [width,height]of [[1440,900],[1920,1080],[390,844]])for(const theme of ['light','dark']){
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width===390});
    await evaluate(`window.targetId=${id};document.documentElement.dataset.theme='${theme}';mount('review')`);
    await click(`[data-option-idx="${await evaluate('(currentQuestion.correct_idx+1)%4')}"]`);
    for(const lang of ['en','th','both']){
      await click(`[data-lang="${lang}"]`);
      const hidden=await evaluate("!document.querySelector('.explanation-box,.option-item.correct,.option-item.wrong,.quiz-feedback-mark')&&document.documentElement.scrollWidth<=innerWidth");
      activeExamMatrix.push({id,width,height,theme,lang,hidden});check(`active Exam secrecy ${id} ${width} ${theme} ${lang}`,hidden);
    }
  }
'''
# Wrap the established bootstrap for reuse after real page reloads.
start=s.index('  await evaluate(`(async()=>{\n    window.state=')
end=s.index(marker)
boot=s[start:end]
s=s[:start]+"  const bootstrap=async()=>{\n"+boot+"  };\n  await bootstrap();\n"+insert+s[end:]
assert 'const bootstrap' in s
extra=r'''
  // Full-size Practice UI start, answer/navigation, actual reload and resume.
  await setup();await click('#btn-start-quiz');await waitFor("!!document.querySelector('#btn-quiz-next')");
  check('Practice UI starts full200',await evaluate('state.quiz.questions.length===200'));
  await evaluate(`state.quiz.currentIndex=state.quiz.questions.findIndex(q=>q.id===1041);state.setup.language='both';render();`);
  await click(`[data-option-idx="${await evaluate('state.quiz.questions[state.quiz.currentIndex].correct_idx')}"]`);
  await click('#btn-quiz-next');await click(`[data-option-idx="${await evaluate('(state.quiz.questions[state.quiz.currentIndex].correct_idx+1)%4')}"]`);
  const practiceSaved=await evaluate(`(()=>{engine.persistCurrentQuizSession();return {index:state.quiz.currentIndex,ids:state.quiz.questions.map(q=>q.id),answers:state.quiz.answers,correct:state.quiz.correct,wrong:state.quiz.wrong};})()`);
  await send('Page.reload');await waitFor("!!document.querySelector('#btn-resume-quiz-banner')");await bootstrap();await click('#btn-resume-quiz-banner');await waitFor("!!document.querySelector('#btn-quiz-next')");
  const practiceResumed=await evaluate(`({index:state.quiz.currentIndex,ids:state.quiz.questions.map(q=>q.id),answers:state.quiz.answers,correct:state.quiz.correct,wrong:state.quiz.wrong})`);
  check('Practice200 reload preserves new IDs answers progress and score',JSON.stringify(practiceSaved)===JSON.stringify(practiceResumed));
  check('Practice resume retains bilingual explanation',await evaluate("state.setup.language==='both'&&!!document.querySelector('.exp-2026-both')"));
  await click('#btn-quiz-prev');check('Practice Previous restores new-question feedback',await evaluate('state.quiz.questions[state.quiz.currentIndex].id===1041&&!!document.querySelector(".explanation-box")'));
  await setup('exam');
  check('Exam configuration remains125 questions120min',await evaluate("state.setup.exam.questionCount===125&&state.setup.exam.timeMinutes===120&&/125/.test(document.querySelector('.exam-settings-cards').textContent)&&/120/.test(document.querySelector('.exam-settings-cards').textContent)"));
  await capture('exam-configuration-125-120');
  await click('#btn-start-quiz');await waitFor("!!document.querySelector('#btn-quiz-next')");
  check('Exam UI starts125 and7200-second duration',await evaluate('state.quiz.questions.length===125&&state.quiz.examDurationSeconds===7200'));
  await click(`[data-option-idx="${await evaluate('(state.quiz.questions[0].correct_idx+1)%4')}"]`);await click('#btn-quiz-next');
  const examSaved=await evaluate(`(()=>{engine.persistCurrentQuizSession();return {ids:state.quiz.questions.map(q=>q.id),index:state.quiz.currentIndex,answers:state.quiz.answers,expiresAt:state.quiz.expiresAt};})()`);
  await capture('active-exam-125-no-answers');
  await send('Page.reload');await waitFor("!!document.querySelector('#btn-resume-quiz-banner')");await bootstrap();await click('#btn-resume-quiz-banner');await waitFor("!!document.querySelector('#btn-quiz-next')");
  const examResumed=await evaluate(`({ids:state.quiz.questions.map(q=>q.id),index:state.quiz.currentIndex,answers:state.quiz.answers,expiresAt:state.quiz.expiresAt})`);
  check('Exam reload preserves125 ordering answers index and original absolute deadline',JSON.stringify(examSaved)===JSON.stringify(examResumed));
  check('resumed Exam stays secret and has bounded running timer',await evaluate("!document.querySelector('.explanation-box,.option-item.correct,.option-item.wrong')&&state.quiz.timeRemainingSeconds>0&&state.quiz.timeRemainingSeconds<=7200"));
  await click('#btn-quiz-finish');await click('#btn-finish-confirm');await waitFor("!!document.querySelector('#btn-results-review')");await click('#btn-results-review');await waitFor("!!document.querySelector('.explanation-box')");
  check('full completed Exam permits review explanations',await evaluate("!!document.querySelector('.explanation-box')"));
'''
s=s.replace("  check('no application errors'",extra+"  check('no application errors'",1)
s=s.replace('JSON.stringify({checks,matrix,allContent,exceptions,consoleErrors}', 'JSON.stringify({browserVersion,checks,matrix,activeExamMatrix,studyNewCases,allContent,practiceSaved,practiceResumed,examSaved,examResumed,exceptions,consoleErrors}')
(OUT/'verify-browser.mjs').write_text(s,encoding='utf-8')
print('Prepared separate Chrome QA:324 feedback/study/review states +108 active Exam states, all129 new Study render cases, full200/125 reload flows')
