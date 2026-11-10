import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import assert from 'node:assert/strict';

const root = path.resolve('.'), out = path.join(root, 'artifacts/qa/question-language-badges', process.argv[2] || 'after');
const port = 5281, debug = 9381;
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
  await evaluate(`(async()=>{
    window.state=(await import('/js/core/state.js')).state;
    window.engine=await import('/js/core/quiz-engine.js');window.loader=await import('/js/core/question-loader.js');
    window.render=(await import('/js/ui/renderer.js')).renderApp;
    window.cert=(await import('/data/certifications.js')).default.find(c=>c.id==='isc2-cc');
    window.config=await loader.loadExamConfig('isc2','cc','next-bank');
    const bank=await loader.loadQuestionsForDomains({vendorId:'isc2',certId:'cc',version:'next-bank',domainIds:[1,2,3,4,5]});
    window.questions=Object.values(bank).flat();window.q=questions.find(q=>q.id===628);
    window.study=(await import('/js/core/study-answers.js')).studyAnswers;
    window.mount=async(view)=>{
      engine.stopExamCountdown();state.selectedCertification=cert;state.selectedExamVersion='next-bank';state.setup.language='en';
      if(view==='study'){study.questions=[q];study.index=0;study.domains=config.domains;state.screen='study-answers';}
      else engine.startQuizSession({mode:view==='review'?'exam':view,questions:[q]});
      await render();scrollTo(0,0);
    };
  })()`);
  for(const [width,height]of [[1440,900],[1920,1080],[390,844]]) {
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width===390});
    for(const theme of ['light','dark'])for(const view of ['practice','exam','review','study']) {
      await evaluate(`document.documentElement.dataset.theme='${theme}';mount('${view}')`);
      if(view==='review') {
        const wrong=await evaluate('(q.correct_idx+1)%q.options.length');await click(`[data-option-idx="${wrong}"]`);
        check('active Exam review preparation remains secret',await evaluate(`!document.querySelector('.explanation-box,.option-item.correct,.option-item.wrong')`));
        await click('#btn-quiz-finish');await click('#btn-finish-confirm');await waitFor("!!document.querySelector('#btn-results-review')");await click('#btn-results-review');
      }
      for(const language of ['en','th','both']) {
        await click(`[data-lang="${language}"]`);await evaluate('document.fonts.ready');await sleep(350);
        const result=await evaluate(`(()=>{
          const host=document.querySelector('${view==='study'?'#study-question':'.question-text-block'}');
          const nodes=[...host.children],clone=host.cloneNode(true);clone.querySelectorAll('.lang-badge').forEach(e=>e.remove());
          const expected='${language}'==='both'?[q.question,q.question_th||q.question]:['${language}'==='en'?q.question:q.question_th||q.question];
          const typography=nodes.map(e=>{const s=getComputedStyle(e);return {family:s.fontFamily,size:s.fontSize,weight:s.fontWeight,lineHeight:s.lineHeight,letterSpacing:s.letterSpacing};});
          const indents=nodes.map(e=>{const text=[...e.childNodes].find(n=>n.nodeType===3&&n.textContent.trim());if(!text)return null;const r=document.createRange();r.setStart(text,0);r.setEnd(text,1);return Math.abs(r.getBoundingClientRect().left-e.getBoundingClientRect().left);});
          return {badges:host.querySelectorAll('.lang-badge').length,typography,normalizedText:[...clone.children].map(e=>e.textContent),
            content:[...clone.children].every((e,i)=>e.textContent===expected[i])&&clone.children.length===expected.length,
            aligned:nodes.every(e=>Math.abs(e.getBoundingClientRect().left-host.getBoundingClientRect().left)<1),indents,
            selectorLabels:[...document.querySelectorAll('.lang-btn')].map(e=>e.textContent),overflow:Math.max(0,document.documentElement.scrollWidth-innerWidth),
            examSecret:'${view}'!=='exam'||!document.querySelector('.explanation-box,.option-item.correct,.option-item.wrong,.quiz-feedback-mark')};
        })()`);
        matrix.push({width,height,theme,view,language,...result});
        check(`content/controls ${view} ${width} ${theme} ${language}`,result.content&&result.aligned&&result.overflow===0&&result.examSecret&&JSON.stringify(result.selectorLabels)===JSON.stringify(['EN','TH','EN+TH']));
        if(phase==='after')check(`badge-free aligned text ${view} ${width} ${theme} ${language}`,result.badges===0&&result.indents.every(n=>n!==null&&n<1));
        if(language==='both') {await evaluate('scrollTo(0,0)');await capture(`${view}-${width}x${height}-${theme}-${language}`);}
      }
    }
  }
  await evaluate(`(async()=>{engine.stopExamCountdown();state.selectedCertification=cert;state.selectedExamVersion='2026';state.setup.language='both';const old=await loader.loadQuestionsForDomains({vendorId:'isc2',certId:'cc',version:'2026',domainIds:[1]});window.oldQ=old[1][0];engine.startQuizSession({mode:'practice',questions:[oldQ]});await render();})()`);
  check('legacy Practice keeps bilingual question badges',await evaluate(`document.querySelectorAll('.question-text-block .lang-badge').length===2`));
  await click(`[data-option-idx="${await evaluate('(oldQ.correct_idx+1)%oldQ.options.length')}"]`);await click('#btn-quiz-finish');await click('#btn-finish-confirm');await waitFor("!!document.querySelector('#btn-results-review')");await click('#btn-results-review');
  check('legacy completed review keeps question badges',await evaluate(`document.querySelectorAll('.question-text-block .lang-badge').length===2`));
  await evaluate('engine.stopExamCountdown()');
  check('no application errors',exceptions.length===0&&consoleErrors.length===0);
  fs.writeFileSync(path.join(out,'browser-results.json'),JSON.stringify({phase,checks,matrix,exceptions,consoleErrors},null,2));
  console.log(`${phase}: ${checks.length} checks; ${matrix.length} view/language/theme/size states; no application errors.`);
}catch(error){
  fs.writeFileSync(path.join(out,'browser-results.json'),JSON.stringify({checks,matrix,exceptions,consoleErrors,error:String(error.stack)},null,2));
  console.error(error);process.exitCode=1;
}finally{if(ws)ws.close();chrome.kill();server.close();}
