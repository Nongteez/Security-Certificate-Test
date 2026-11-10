import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import assert from 'node:assert/strict';

const root = path.resolve('.'), out = path.join(root, 'artifacts/qa/practice-exam-minimal-ui');
const port = 5277, debug = 9377;
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
  await send('Page.enable');await send('Runtime.enable');
  await send('Page.navigate',{url:`http://127.0.0.1:${port}/`});
  await waitFor("!!document.querySelector('.cert-card')");
  await evaluate(`(async()=>{
    window.state=(await import('/js/core/state.js')).state;
    window.engine=await import('/js/core/quiz-engine.js');
    window.storage=await import('/js/core/storage.js');
    window.loader=await import('/js/core/question-loader.js');
    window.renderQuiz=(await import('/js/ui/screen-quiz.js')).renderQuizScreen;
    window.appRender=(await import('/js/ui/renderer.js')).renderApp;
    window.cert=(await import('/data/certifications.js')).default.find(c=>c.id==='isc2-cc');
    window.config=await loader.loadExamConfig('isc2','cc','next-bank');
    window.bank=await loader.loadQuestionsForDomains({vendorId:'isc2',certId:'cc',version:'next-bank',domainIds:[1,2,3,4,5]});
    window.questions=Object.values(bank).flat();
    window.fresh=(mode,position=1)=>{
      engine.stopExamCountdown();state.selectedCertification=cert;state.selectedExamVersion='next-bank';
      const first=questions.find(q=>q.correct_idx===position);
      engine.startQuizSession({mode,questions:[first,questions.find(q=>q.id!==first.id)]});
      renderQuiz(document.querySelector('#app'),appRender);scrollTo(0,0);
    };
  })()`);
  const inspect = async stage => evaluate(`(()=>{
    const q=state.quiz.questions[state.quiz.currentIndex], rows=[...document.querySelectorAll('.option-item')];
    const styles=rows.map(e=>getComputedStyle(e));
    const transparent=s=>s.backgroundColor==='rgba(0, 0, 0, 0)'&&s.borderTopColor==='rgba(0, 0, 0, 0)';
    const color=name=>{const e=document.createElement('span');e.style.color='var(--'+name+')';document.body.append(e);const c=getComputedStyle(e).color;e.remove();return c;};
    const correct=rows[q.correct_idx], wrong=rows.find(e=>e.classList.contains('wrong')), selected=rows.find(e=>e.classList.contains('selected'));
    const explanation=document.querySelector('#quiz-explanation-box');
    const expectedDomain=config.domains.find(d=>d.id===q.dom).name.en;
    return {stage:'${stage}',overflow:Math.max(0,document.documentElement.scrollWidth-innerWidth),
      clean:styles.every((s,i)=>rows[i].classList.contains('selected')||rows[i].classList.contains('correct')||rows[i].classList.contains('wrong')||transparent(s)),
      targets:rows.every(e=>e.tagName==='BUTTON'&&e.getBoundingClientRect().height>=52),
      inlineDomain:document.querySelector('.domain-pill').textContent==='Domain '+q.dom+' · '+expectedDomain&&getComputedStyle(document.querySelector('.domain-pill')).whiteSpace==='normal'&&!document.querySelector('.domain-pill br'),
      selectedBlue:!selected||(getComputedStyle(selected).borderTopColor===color('blue')&&getComputedStyle(selected).borderTopWidth==='1px'),
      green:!correct.classList.contains('correct')||getComputedStyle(correct).borderTopColor===color('green'),
      red:!wrong||getComputedStyle(wrong).borderTopColor===color('red'),
      explanationNeutral:!explanation||(getComputedStyle(explanation).borderLeftWidth==='0px'&&getComputedStyle(explanation).backgroundColor==='rgba(0, 0, 0, 0)'),
      feedbackIcons:state.quiz.mode==='exam'||!state.quiz.answers[state.quiz.currentIndex]||!!document.querySelector('.quiz-feedback-mark[role="img"][aria-label]'),
      secret:!document.querySelector('.option-item.correct,.option-item.wrong,.quiz-feedback-mark,#quiz-explanation-box,.exp-2026-container'),
      hasExplanation:!!explanation,selectedCount:rows.filter(e=>e.classList.contains('selected')).length,
      unanswered:state.quiz.answers[state.quiz.currentIndex]===null};
  })()`);
  for(const [width,height] of [[1440,900],[1920,1080],[390,844]]) {
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width===390});
    for(const theme of ['light','dark'])for(const mode of ['practice','exam'])for(const lang of ['en','th','both']) {
      await evaluate(`document.documentElement.dataset.theme='${theme}';state.setup.language='${lang}';fresh('${mode}')`);
      // Move pointer away so default-state checks do not accidentally include hover.
      await send('Input.dispatchMouseEvent',{type:'mouseMoved',x:1,y:1});
      await sleep(200);
      let result=await inspect('default');matrix.push({width,height,theme,mode,lang,...result});
      check(`default ${width} ${theme} ${mode} ${lang}`,result.clean&&result.targets&&result.inlineDomain&&result.secret&&result.unanswered&&result.overflow===0);
      if(lang==='both') {await evaluate('document.fonts.ready');await sleep(350);await capture(`${mode}-default-${width}-${theme}`);}
      const q=await evaluate('state.quiz.questions[0].correct_idx');
      await click(`[data-option-idx="${mode==='exam'?q:(q+1)%4}"]`);await sleep(200);
      result=await inspect(mode==='exam'?'selected':'wrong-feedback');matrix.push({width,height,theme,mode,lang,...result});
      check(`selection/feedback ${width} ${theme} ${mode} ${lang}`,result.clean&&result.targets&&result.inlineDomain&&result.green&&result.red&&result.selectedBlue&&result.feedbackIcons&&result.explanationNeutral&&result.overflow===0&&(mode==='exam'?result.secret&&result.selectedCount===1:result.hasExplanation&&!result.secret));
      await evaluate('document.fonts.ready');await sleep(350);await evaluate('scrollTo(0,0)');
      await capture(`${mode}-${width}x${height}-${theme}-${lang}`);
      if(mode==='practice') {
        await evaluate(`fresh('practice')`);await click(`[data-option-idx="${q}"]`);await sleep(200);
        result=await inspect('correct-feedback');matrix.push({width,height,theme,mode,lang,...result});
        check(`correct feedback ${width} ${theme} ${lang}`,result.green&&result.feedbackIcons&&result.hasExplanation&&result.explanationNeutral&&result.overflow===0);
      }
    }
  }
  // Feedback positions A–D and unchanged scoring using actual bank data.
  for(const width of [1440,1920,390]) {
    await send('Emulation.setDeviceMetricsOverride',{width,height:width===390?844:900,deviceScaleFactor:1,mobile:width===390});
    for(const theme of ['light','dark'])for(const domain of [1,2,3,4,5]) {
      await evaluate(`engine.stopExamCountdown();document.documentElement.dataset.theme='${theme}';state.setup.language='both';state.selectedCertification=cert;state.selectedExamVersion='next-bank';engine.startQuizSession({mode:'practice',questions:[bank[${domain}][0]]});renderQuiz(document.querySelector('#app'),appRender);`);
      check(`domain metadata/wrapping ${width} ${theme} D${domain}`,await evaluate(`document.querySelector('.domain-pill').textContent==='Domain ${domain} · '+config.domains.find(d=>d.id===${domain}).name.en&&document.documentElement.scrollWidth<=innerWidth`));
      if(width===390&&domain===3) {await sleep(350);await capture(`long-domain-mobile-${theme}`);}
    }
  }
  await evaluate(`engine.stopExamCountdown();state.selectedCertification=cert;state.selectedExamVersion='next-bank';engine.startQuizSession({mode:'practice',questions:[questions.find(q=>q.id===628)]});renderQuiz(document.querySelector('#app'),appRender);`);
  check('long scenario question wraps without overflow',await evaluate(`document.documentElement.scrollWidth<=innerWidth&&document.querySelector('.question-en').textContent.endsWith(state.quiz.questions[0].question)`));
  for(const position of [0,1,2,3]) {
    await evaluate(`fresh('practice',${position})`);await click(`[data-option-idx="${position}"]`);
    check(`correct position ${position}`,await evaluate(`state.quiz.correct===1&&state.quiz.wrong===0&&document.querySelector('.option-item.correct').dataset.optionIdx==='${position}'&&document.querySelectorAll('.quiz-feedback-mark').length===1`));
  }
  await send('Emulation.setDeviceMetricsOverride',{width:1440,height:900,deviceScaleFactor:1,mobile:false});
  await evaluate("state.setup.language='en';fresh('practice')");
  const point=await evaluate(`(()=>{const row=document.querySelector('.option-item');row.scrollIntoView({block:'center'});const r=row.getBoundingClientRect();return{x:r.right-20,y:r.top+r.height/2};})()`);
  await send('Input.dispatchMouseEvent',{type:'mouseMoved',...point});await sleep(250);
  check('desktop hover is neutral with no correctness reveal',await evaluate(`(()=>{const r=document.querySelector('.option-item'),s=getComputedStyle(r);return s.backgroundColor!=='rgba(0, 0, 0, 0)'&&s.borderTopColor==='rgba(0, 0, 0, 0)'&&!document.querySelector('.option-item.correct,.option-item.wrong,#quiz-explanation-box');})()`));
  await capture('desktop-neutral-hover');
  await send('Input.dispatchMouseEvent',{type:'mousePressed',button:'left',clickCount:1,...point});
  await send('Input.dispatchMouseEvent',{type:'mouseReleased',button:'left',clickCount:1,...point});
  check('entire answer row is clickable',await evaluate('state.quiz.answers[0]!==null'));
  await evaluate("fresh('exam');document.querySelector('.option-item').focus()");
  await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});
  await send('Input.dispatchKeyEvent',{type:'keyUp',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});
  check('visible keyboard focus on answer button',await evaluate(`document.activeElement.matches('.option-item')&&getComputedStyle(document.activeElement).outlineStyle==='solid'`));
  await sleep(350);await capture('desktop-keyboard-focus');
  await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Enter',code:'Enter',text:'\r',windowsVirtualKeyCode:13});
  await send('Input.dispatchKeyEvent',{type:'keyUp',key:'Enter',code:'Enter',windowsVirtualKeyCode:13});
  check('Enter selects Exam answer without disclosure',await evaluate(`state.quiz.answers[0]!==null&&document.querySelectorAll('.option-item.selected').length===1&&!document.querySelector('.quiz-feedback-mark,.option-item.correct,#quiz-explanation-box')`));
  const recorded=await evaluate('JSON.stringify(state.quiz.answers[0])');
  await click('[data-option-idx="3"]');
  check('subsequent clicks preserve existing first-answer rule',await evaluate(`JSON.stringify(state.quiz.answers[0])===${JSON.stringify(recorded)}`));
  await click('#btn-quiz-next');check('next preserves Exam navigation',await evaluate('state.quiz.currentIndex===1'));
  await click('#btn-quiz-prev');check('previous restores selected answer',await evaluate(`state.quiz.currentIndex===0&&document.querySelectorAll('.option-item.selected').length===1`));
  await click('[data-lang="th"]');check('language control persists selection and switches question',await evaluate(`state.setup.language==='th'&&document.querySelector('.question-th').textContent===state.quiz.questions[0].question_th&&JSON.stringify(state.quiz.answers[0])===${JSON.stringify(recorded)}`));
  const timing=await evaluate(`({expiresAt:state.quiz.expiresAt,startedAt:state.quiz.startedAt,remaining:state.quiz.timeRemainingSeconds})`);
  await sleep(1100);
  check('timer continues without resetting after navigation/language changes',await evaluate(`engine.isExamCountdownRunning()&&state.quiz.expiresAt===${timing.expiresAt}&&state.quiz.startedAt===${timing.startedAt}&&state.quiz.timeRemainingSeconds<${timing.remaining}`));
  await evaluate(`(async()=>{engine.stopExamCountdown();window.saved=storage.loadActiveQuizSession();const pools=await loader.loadQuestionsForSession(saved);(await import('/js/core/state.js')).resetQuizState();const result=engine.resumeQuizSession({storedSession:saved,questionsByDomain:pools,certifications:[cert]});if(!result.success)throw Error('Resume failed '+result.reason);renderQuiz(document.querySelector('#app'),appRender);})()`);
  check('resume restores answer and original deadline',await evaluate(`JSON.stringify(state.quiz.answers[0])===${JSON.stringify(recorded)}&&state.quiz.expiresAt===${timing.expiresAt}`));
  await click('#btn-quiz-finish');await click('#btn-finish-confirm');
  await waitFor("state.screen==='results'&&!!document.querySelector('.results-container')");
  check('completion preserves results screen and stops countdown',await evaluate(`state.quiz.finished&&!engine.isExamCountdownRunning()&&!document.querySelector('.quiz-minimal-2026')`));
  await evaluate(`(async()=>{engine.stopExamCountdown();state.selectedExamVersion='2026';const old=await loader.loadQuestionsForDomains({vendorId:'isc2',certId:'cc',version:'2026',domainIds:[1]});engine.startQuizSession({mode:'practice',questions:old[1].slice(0,2)});renderQuiz(document.querySelector('#app'),appRender);})()`);
  check('legacy keeps original gray option styling',await evaluate(`(()=>{const s=getComputedStyle(document.querySelector('.option-item'));return !document.querySelector('.quiz-minimal-2026')&&s.backgroundColor!=='rgba(0, 0, 0, 0)'&&s.borderTopColor!=='rgba(0, 0, 0, 0)';})()`));
  // Existing Study Answers visual contract remains unchanged.
  await evaluate(`(async()=>{state.selectedExamVersion='next-bank';state.setup.language='both';const study=(await import('/js/core/study-answers.js')).studyAnswers;study.questions=[questions[0]];study.domains=config.domains;study.index=0;const r=await import('/js/ui/screen-study-answers.js');r.renderStudyAnswersScreen(document.querySelector('#app'),appRender);})()`);
  check('Study Answers retains borderless rows, green answer and neutral Explanation',await evaluate(`(()=>{const rows=[...document.querySelectorAll('.study-options li')],correct=document.querySelector('.study-options .correct');return !!correct&&!document.querySelector('.quiz-minimal-2026,.study-correct-label')&&rows.every(e=>e===correct||getComputedStyle(e).borderTopWidth==='0px')&&getComputedStyle(document.querySelector('.explanation-box')).borderLeftWidth==='0px';})()`));
  check('no application errors',exceptions.length===0&&consoleErrors.length===0);
  fs.writeFileSync(path.join(out,'browser-results.json'),JSON.stringify({checks,matrix,exceptions,consoleErrors},null,2));
  console.log(`PASS: ${checks.length} checks, ${matrix.length} viewport/theme/language/state cases; no application errors.`);
} catch(error) {
  fs.writeFileSync(path.join(out,'browser-results.json'),JSON.stringify({checks,matrix,exceptions,consoleErrors,error:String(error.stack)},null,2));
  console.error(error);process.exitCode=1;
} finally {if(ws)ws.close();chrome.kill();server.close();}
