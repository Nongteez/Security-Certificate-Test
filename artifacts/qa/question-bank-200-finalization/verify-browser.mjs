import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import assert from 'node:assert/strict';

const root = path.resolve('.'), out = path.join(root, 'artifacts/qa/question-bank-200-finalization', 'chrome');
const port = 5337, debug = 9437;
fs.mkdirSync(out, { recursive: true });
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg' };
const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const file = path.resolve(root, '.' + (url.pathname === '/' ? '/index.html' : decodeURIComponent(url.pathname)));
  if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { 'Content-Type': (mime[path.extname(file)] || 'application/octet-stream') + '; charset=utf-8' });
  fs.createReadStream(file).pipe(res);
});
await new Promise(resolve => server.listen(port, '127.0.0.1', resolve));
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'study-answers-chrome-'));
const launchLog = fs.openSync(path.join(out, 'chrome-launch.txt'), 'w');
const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new', '--no-first-run', '--no-default-browser-check', '--disable-background-networking',
  `--remote-debugging-port=${debug}`, `--user-data-dir=${profile}`, 'about:blank'
], { windowsHide: true, stdio: ['ignore', launchLog, launchLog] });
chrome.on('error', error => fs.appendFileSync(path.join(out, 'chrome-launch.txt'), String(error)));
let ws, id = 0;
const pending = new Map(), exceptions = [], consoleErrors = [], checks = [], matrix = [];
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const check = (name, result) => { checks.push({ name, passed: !!result }); assert.ok(result, name); };
try {
  let target;
  for (let i = 0; i < 60; i++) {
    try { target = (await (await fetch(`http://127.0.0.1:${debug}/json`)).json()).find(t => t.type === 'page'); } catch {}
    if (target) break;
    await sleep(100);
  }
  assert.ok(target, 'Chrome debugging target');
  ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => { ws.onopen = resolve; ws.onerror = reject; });
  ws.onmessage = event => {
    const message = JSON.parse(event.data);
    if (message.method === 'Runtime.exceptionThrown') exceptions.push(message.params);
    if (message.method === 'Runtime.consoleAPICalled' && message.params.type === 'error') consoleErrors.push(message.params.args.map(a => a.value || a.description).join(' '));
    if (message.id && pending.has(message.id)) {
      const p = pending.get(message.id); pending.delete(message.id); clearTimeout(p.timer);
      message.error ? p.reject(Error(message.error.message)) : p.resolve(message.result);
    }
  };
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const next = ++id, timer = setTimeout(() => reject(Error('CDP timeout: ' + method)), 20000);
    pending.set(next, { resolve, reject, timer }); ws.send(JSON.stringify({ id: next, method, params }));
  });
  const evaluate = async expression => {
    const result = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
    if (result.exceptionDetails) throw Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
    return result.result.value;
  };
  const waitFor = async expression => {
    for (let i = 0; i < 100; i++) { if (await evaluate(expression)) return; await sleep(50); }
    throw Error('Mount timeout: ' + expression);
  };
  const click = async selector => { await evaluate(`document.querySelector(${JSON.stringify(selector)}).click()`); };
  const capture = async name => {
    const shot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true });
    fs.writeFileSync(path.join(out, name + '.png'), Buffer.from(shot.data, 'base64'));
  };
  const phase=process.argv[2]||'after';
  await send('Page.enable');await send('Runtime.enable');
  await send('Page.navigate',{url:`http://127.0.0.1:${port}/`});
  await waitFor("!!document.querySelector('.cert-card')");
  const bootstrap=async()=>{
  await evaluate(`(async()=>{
    window.state=(await import('/js/core/state.js')).state;
    window.engine=await import('/js/core/quiz-engine.js');window.loader=await import('/js/core/question-loader.js');
    window.render=(await import('/js/ui/renderer.js')).renderApp;
    window.cert=(await import('/data/certifications.js')).default.find(c=>c.id==='isc2-cc');
    window.config=await loader.loadExamConfig('isc2','cc','next-bank');
    window.bank=await loader.loadQuestionsForDomains({vendorId:'isc2',certId:'cc',version:'next-bank',domainIds:[1,2,3,4,5]});
    window.questions=Object.values(bank).flat();
    window.study=(await import('/js/core/study-answers.js')).studyAnswers;
    window.shared=await import('/js/ui/components/explanation-2026.js');
    window.mount=async(view,fallback=false)=>{
      engine.stopExamCountdown();state.selectedCertification=cert;state.selectedExamVersion='next-bank';state.setup.language='en';
      window.currentQuestion=fallback?questions.find(q=>!q.explanation_detail):questions.find(q=>q.id===(window.targetId||588));
      if(!currentQuestion)throw Error('Missing bank representative');
      if(view==='study'){study.questions=[currentQuestion];study.domains=config.domains;study.index=0;state.screen='study-answers';await render();}
      else {engine.startQuizSession({mode:view==='review'?'exam':'practice',questions:[currentQuestion]});await render();}
    };
    window.contentIntact=(element,q,lang)=>{
      const languages=lang==='both'?['en','th']:[lang];
      return languages.every(code=>{
        const isTh=code==='th';const detail=q.explanation_detail;
        const texts=detail?.correct?[isTh?(detail.correct.th||detail.correct.en):detail.correct.en,
          ...(detail.incorrect||[]).map(i=>isTh?(i.text_th||i.text_en):i.text_en),
          ...['example','exam_tip'].filter(k=>detail[k]).map(k=>isTh?(detail[k].th||detail[k].en):detail[k].en)]
          :(isTh?(q.explanation_th||q.explanation):q.explanation).split('\\n').map(s=>s.trim().replace(/^[-•] /,'')).filter(Boolean);
        return texts.filter(Boolean).every(text=>element.textContent.includes(text));
      });
    };
  })()`);
  };
  await bootstrap();

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
  async function openView(view,fallback=false) {
    await evaluate(`mount('${view}',${fallback})`);
    if(view!=='study') {
      check(`${view} initially has no explanation`,await evaluate(`!document.querySelector('.explanation-box')`));
      const wrong=await evaluate('(currentQuestion.correct_idx+1)%currentQuestion.options.length');
      await click(`[data-option-idx="${wrong}"]`);
      if(view==='review') {
        check('active Exam does not disclose answers or explanations',await evaluate(`!document.querySelector('.explanation-box,.option-item.correct,.option-item.wrong,.quiz-feedback-mark')`));
        await click('#btn-quiz-finish');await click('#btn-finish-confirm');
        await waitFor("!!document.querySelector('#btn-results-review')");
        await click('#btn-results-review');
      }
    }
    await waitFor("!!document.querySelector('.explanation-box')");
  }
  const inspect=async lang=>evaluate(`(()=>{
    const exp=document.querySelector('.explanation-box'),head=exp.querySelector('.explanation-header'),card=document.querySelector('.question-card');
    const er=exp.getBoundingClientRect(),cr=card.getBoundingClientRect(),style=getComputedStyle(exp);
    const expected=document.createElement('div');expected.innerHTML=shared.renderExplanation2026Content(currentQuestion,'${lang}');
    const groups=exp.querySelector('.exp-2026-both');
    return {sibling:card.nextElementSibling===exp&&card.parentElement===exp.parentElement,nested:card.contains(exp),section:exp.tagName==='SECTION',aligned:Math.abs(er.x-cr.x)<1&&Math.abs(er.width-cr.width)<1,gap:er.top-cr.bottom,neutral:style.borderLeftWidth==='0px'&&style.backgroundColor==='rgba(0, 0, 0, 0)',noLabels:!exp.querySelector('.lang-badge,.exp-lang-label')&&!/English Explanation|คำอธิบายภาษาไทย/i.test(exp.textContent),
      mainHeading:!!head&&/Explanation|คำอธิบาย/i.test(head.textContent),
      exactSharedContent:exp.textContent.trim().endsWith(expected.textContent.trim()),
      completeReasoning:contentIntact(exp,currentQuestion,'${lang}'),
      bilingualOrder:'${lang}'!=='both'||(groups.children.length===2&&groups.children[0].matches('.exp-lang-en,.explanation-en')&&groups.children[1].matches('.exp-lang-th,.explanation-th')),
      spaced:'${lang}'!=='both'||parseFloat(getComputedStyle(groups).rowGap)>=24,
      selector:document.querySelectorAll('.lang-btn').length===3,
      overflow:Math.max(0,document.documentElement.scrollWidth-innerWidth)};
  })()`);
  for(const targetId of [1044,1051,1065,1071,1080,1083]) {
    await evaluate(`window.targetId=${targetId}`);
    for(const [width,height]of [[1440,900],[1920,1080],[390,844]]) {
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width===390});
    for(const theme of ['light','dark'])for(const view of ['study','practice','review']) {
      await evaluate(`document.documentElement.dataset.theme='${theme}'`);await openView(view);
      for(const language of ['en','th','both']) {
        await click(`[data-lang="${language}"]`);await sleep(80);
        const result=await inspect(language);matrix.push({targetId,width,height,theme,view,language,...result});
        check(`${view} ${width} ${theme} ${language}`,result.noLabels&&result.mainHeading&&result.exactSharedContent&&result.completeReasoning&&result.bilingualOrder&&result.spaced&&result.selector&&result.overflow===0);
        if(phase==='after')check(`separated ${view} ${width} ${theme} ${language}`,result.sibling&&!result.nested&&result.section&&result.aligned&&result.gap>=12&&result.gap<=40&&result.neutral);
        if(language==='both'&&((width===1440&&theme==='light')||(width===390&&theme==='dark'))) {
          await evaluate('document.fonts.ready');await sleep(350);await evaluate("document.querySelector('.explanation-box').scrollIntoView()");
          await capture(`q${targetId}-${view}-${width}x${height}-${theme}-both`);
        }
      }
    }
  }
  }
  // Every current bank question is structured; exercise fallback on a detached clone.
  for(const language of ['en','th','both']) {
    const fallback=await evaluate(`(()=>{const q={...questions[0],explanation_detail:undefined},node=document.createElement('div');node.innerHTML=shared.renderExplanation2026Content(q,'${language}');return !node.querySelector('.lang-badge,.exp-lang-label')&&contentIntact(node,q,'${language}');})()`);
    check(`general explanation fallback ${language}`,fallback);
  }
  const allContent=await evaluate(`(()=>{let count=0;for(const q of questions)for(const lang of ['en','th','both']){
    const node=document.createElement('div');node.innerHTML=shared.renderExplanation2026Content(q,lang);
    if(node.querySelector('.lang-badge,.exp-lang-label')||!contentIntact(node,q,lang))throw Error('Incomplete or labeled question '+q.id+' '+lang);
    count++;
  }return count;})()`);
  check('all 200 bank explanations and option reasons intact in all languages',allContent===600);
  
  // Legacy explanations retain their own language badges and existing layout.
  await evaluate(`(async()=>{engine.stopExamCountdown();state.selectedCertification=cert;state.selectedExamVersion='2026';state.setup.language='both';const old=await loader.loadQuestionsForDomains({vendorId:'isc2',certId:'cc',version:'2026',domainIds:[1]});engine.startQuizSession({mode:'practice',questions:[old[1][0]]});await render();})()`);
  await click('[data-option-idx="0"]');
  check('legacy Practice preserves nesting and explanation language badges',await evaluate(`document.querySelectorAll('.explanation-box .lang-badge').length===2&&!!document.querySelector('.question-card .explanation-box')&&!document.querySelector('.explanation-box .exp-2026-container')`));
  await click('#btn-quiz-finish');await click('#btn-finish-confirm');await waitFor("!!document.querySelector('#btn-results-review')");
  await click('#btn-results-review');
  check('legacy completed review retains nested decorated explanation',await evaluate(`(()=>{const e=document.querySelector('.question-card .explanation-box');return !!e&&e.tagName==='DIV'&&parseFloat(getComputedStyle(e).borderLeftWidth)>0&&!document.querySelector('.quiz-explanation-separated');})()`));
  // Exercise real navigation with feedback becoming available question by question.
  await evaluate(`engine.stopExamCountdown();state.selectedCertification=cert;state.selectedExamVersion='next-bank';state.setup.language='en';engine.startQuizSession({mode:'practice',questions:questions.slice(0,2)});render();`);
  await waitFor("!!document.querySelector('#btn-quiz-next')");
  await click(`[data-option-idx="${await evaluate('(questions[0].correct_idx+1)%4')}"]`);
  check('first Practice question feedback is available',await evaluate(`!!document.querySelector('#quiz-explanation-box')&&state.quiz.wrong===1`));
  await click('#btn-quiz-next');
  check('next unanswered Practice question has no explanation',await evaluate(`state.quiz.currentIndex===1&&!document.querySelector('.explanation-box')`));
  await click(`[data-option-idx="${await evaluate('questions[1].correct_idx')}"]`);await click('#btn-quiz-prev');
  check('previous restores feedback with unchanged score',await evaluate(`state.quiz.currentIndex===0&&!!document.querySelector('#quiz-explanation-box')&&state.quiz.correct===1&&state.quiz.wrong===1`));
  await evaluate(`engine.stopExamCountdown();engine.startQuizSession({mode:'exam',questions:questions.slice(0,2)});render();`);
  await click(`[data-option-idx="${await evaluate('(questions[0].correct_idx+1)%4')}"]`);await click('#btn-quiz-next');
  await click(`[data-option-idx="${await evaluate('(questions[1].correct_idx+1)%4')}"]`);
  check('active Exam navigation never displays explanation',await evaluate(`!document.querySelector('.explanation-box,.option-item.correct,.option-item.wrong')`));
  await click('#btn-quiz-finish');await click('#btn-finish-confirm');await waitFor("!!document.querySelector('#btn-results-review')");await click('#btn-results-review');
  await click('#btn-review-next');
  check('completed review Next displays second question explanation',await evaluate(`document.querySelector('.question-en').textContent===questions[1].question&&!!document.querySelector('.explanation-box')`));
  await click('#btn-review-prev');
  check('completed review Previous restores first explanation',await evaluate(`document.querySelector('.question-en').textContent===questions[0].question&&!!document.querySelector('.explanation-box')`));
  await evaluate(`engine.stopExamCountdown()`);

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
  check('no application errors',exceptions.length===0&&consoleErrors.length===0);
  fs.writeFileSync(path.join(out,'browser-results.json'),JSON.stringify({browserVersion,checks,matrix,activeExamMatrix,studyNewCases,allContent,practiceSaved,practiceResumed,examSaved,examResumed,exceptions,consoleErrors},null,2));
  console.log(`PASS: ${checks.length} checks, ${matrix.length} view/size/theme/language states, ${allContent} bank/language cases.`);
}catch(error){
  fs.writeFileSync(path.join(out,'browser-results.json'),JSON.stringify({checks,matrix,exceptions,consoleErrors,error:String(error.stack)},null,2));
  console.error(error);process.exitCode=1;
}finally{if(ws)ws.close();chrome.kill();server.close();}
