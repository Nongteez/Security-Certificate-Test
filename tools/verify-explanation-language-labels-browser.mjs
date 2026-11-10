import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import assert from 'node:assert/strict';

const root = path.resolve('.'), out = path.join(root, 'artifacts/qa/explanation-language-labels');
const port = 5278, debug = 9378;
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
      window.currentQuestion=fallback?questions.find(q=>!q.explanation_detail):questions[0];
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
    const exp=document.querySelector('.explanation-box'),head=exp.querySelector('.explanation-header');
    const expected=document.createElement('div');expected.innerHTML=shared.renderExplanation2026Content(currentQuestion,'${lang}');
    const groups=exp.querySelector('.exp-2026-both');
    return {noLabels:!exp.querySelector('.lang-badge,.exp-lang-label')&&!/English Explanation|คำอธิบายภาษาไทย/i.test(exp.textContent),
      mainHeading:!!head&&/Explanation|คำอธิบาย/i.test(head.textContent),
      exactSharedContent:exp.textContent.trim().endsWith(expected.textContent.trim()),
      completeReasoning:contentIntact(exp,currentQuestion,'${lang}'),
      bilingualOrder:'${lang}'!=='both'||(groups.children.length===2&&groups.children[0].matches('.exp-lang-en,.explanation-en')&&groups.children[1].matches('.exp-lang-th,.explanation-th')),
      spaced:'${lang}'!=='both'||parseFloat(getComputedStyle(groups).rowGap)>=24,
      selector:document.querySelectorAll('.lang-btn').length===3,
      overflow:Math.max(0,document.documentElement.scrollWidth-innerWidth)};
  })()`);
  for(const [width,height]of [[1440,900],[1920,1080],[390,844]]) {
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width===390});
    for(const theme of ['light','dark'])for(const view of ['study','practice','review']) {
      await evaluate(`document.documentElement.dataset.theme='${theme}'`);await openView(view);
      for(const language of ['en','th','both']) {
        await click(`[data-lang="${language}"]`);await sleep(80);
        const result=await inspect(language);matrix.push({width,height,theme,view,language,...result});
        check(`${view} ${width} ${theme} ${language}`,result.noLabels&&result.mainHeading&&result.exactSharedContent&&result.completeReasoning&&result.bilingualOrder&&result.spaced&&result.selector&&result.overflow===0);
        if(language==='both') {
          await evaluate('document.fonts.ready');await sleep(350);await evaluate("document.querySelector('.explanation-box').scrollIntoView()");
          await capture(`${view}-${width}x${height}-${theme}-both`);
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
  check('all 157 bank explanations and option reasons intact in all languages',allContent===471);
  // Legacy explanations retain their own language badges and existing layout.
  await evaluate(`(async()=>{engine.stopExamCountdown();state.selectedCertification=cert;state.selectedExamVersion='2026';state.setup.language='both';const old=await loader.loadQuestionsForDomains({vendorId:'isc2',certId:'cc',version:'2026',domainIds:[1]});engine.startQuizSession({mode:'practice',questions:[old[1][0]]});await render();})()`);
  await click('[data-option-idx="0"]');
  check('legacy Practice preserves explanation language badges',await evaluate(`document.querySelectorAll('.explanation-box .lang-badge').length===2&&!document.querySelector('.explanation-box .exp-2026-container')`));
  await evaluate(`engine.stopExamCountdown()`);
  check('no application errors',exceptions.length===0&&consoleErrors.length===0);
  fs.writeFileSync(path.join(out,'browser-results.json'),JSON.stringify({checks,matrix,allContent,exceptions,consoleErrors},null,2));
  console.log(`PASS: ${checks.length} checks, ${matrix.length} view/size/theme/language states, ${allContent} bank/language cases.`);
}catch(error){
  fs.writeFileSync(path.join(out,'browser-results.json'),JSON.stringify({checks,matrix,exceptions,consoleErrors,error:String(error.stack)},null,2));
  console.error(error);process.exitCode=1;
}finally{if(ws)ws.close();chrome.kill();server.close();}
