import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import assert from 'node:assert/strict';

const root = path.resolve('.'), out = path.join(root, 'artifacts/qa/study-question-typography', process.argv[2] || 'after');
const port = 5279, debug = 9379;
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
    window.questions=Object.values(bank).flat();window.question=questions.find(q=>q.id===628);
    window.study=(await import('/js/core/study-answers.js')).studyAnswers;
    window.mount=async(view,lang)=>{
      engine.stopExamCountdown();state.selectedCertification=cert;state.selectedExamVersion='next-bank';state.setup.language=lang;
      if(view==='study'){study.questions=[question];study.index=0;study.domains=config.domains;state.screen='study-answers';}
      else engine.startQuizSession({mode:view,questions:[question]});
      await render();scrollTo(0,0);await document.fonts.ready;
    };
    window.typography=selector=>[...document.querySelectorAll(selector)].map(e=>{
      const s=getComputedStyle(e);return {fontFamily:s.fontFamily,fontSize:s.fontSize,fontWeight:s.fontWeight,lineHeight:s.lineHeight,letterSpacing:s.letterSpacing};
    });
    window.nonQuestion=()=>({options:typography('.option-content > *'),metadata:typography('.study-metadata'),explanation:typography('.explanation-box .exp-section-body')});
  })()`);
  for(const [width,height]of [[1440,900],[1920,1080],[390,844]]) {
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width===390});
    for(const theme of ['light','dark'])for(const language of ['en','th','both']) {
      await evaluate(`document.documentElement.dataset.theme='${theme}';mount('study','${language}')`);await sleep(350);
      const study=await evaluate(`({styles:typography('#study-question > .study-language'),other:nonQuestion(),overflow:Math.max(0,document.documentElement.scrollWidth-innerWidth),text:document.querySelector('#study-question').textContent})`);
      await capture(`study-${width}x${height}-${theme}-${language}`);
      const references={};
      for(const mode of ['practice','exam']) {
        await evaluate(`mount('${mode}','${language}')`);await sleep(80);
        references[mode]=await evaluate(`typography('.question-text-block > .question-en,.question-text-block > .question-th')`);
        if(language==='both') {await sleep(350);await capture(`${mode}-${width}x${height}-${theme}-${language}`);}
      }
      const matches=JSON.stringify(study.styles)===JSON.stringify(references.practice)&&JSON.stringify(study.styles)===JSON.stringify(references.exam);
      matrix.push({width,height,theme,language,study,...references,matches});
      check(`long Thai/English scenario wraps ${width} ${theme} ${language}`,study.overflow===0);
      if(phase==='after')check(`Study matches Practice and Exam ${width} ${theme} ${language}`,matches);
    }
  }
  await evaluate('engine.stopExamCountdown()');
  check('no application errors',exceptions.length===0&&consoleErrors.length===0);
  fs.writeFileSync(path.join(out,'browser-results.json'),JSON.stringify({phase,checks,matrix,exceptions,consoleErrors},null,2));
  console.log(`${phase}: ${checks.length} checks; ${matrix.filter(x=>x.matches).length}/${matrix.length} typography matches; zero application errors.`);
}catch(error){
  fs.writeFileSync(path.join(out,'browser-results.json'),JSON.stringify({checks,matrix,exceptions,consoleErrors,error:String(error.stack)},null,2));
  console.error(error);process.exitCode=1;
}finally{if(ws)ws.close();chrome.kill();server.close();}
