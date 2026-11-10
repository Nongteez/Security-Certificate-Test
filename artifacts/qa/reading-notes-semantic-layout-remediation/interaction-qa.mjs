import {spawn} from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {fileURLToPath} from 'node:url';
const OUT=path.dirname(fileURLToPath(import.meta.url)),ROOT=path.resolve(OUT,'../../..');
const PORT=5269,DEBUG=9309,chromePath='C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const topic='topic-5-2-mitre-attack-framework';
const protectedIds=['topic-5-1-hashing-digital-signatures','topic-5-1-tpm-vs-hsm','topic-5-1-data-sanitization-destruction','topic-5-3-irp-lifecycle-phases'];
fs.mkdirSync(path.join(OUT,'screenshots'),{recursive:true});
const mime={'.html':'text/html','.js':'text/javascript','.mjs':'text/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.woff2':'font/woff2','.ico':'image/x-icon'};
const server=http.createServer((req,res)=>{const u=new URL(req.url,'http://localhost');const p=path.resolve(ROOT,'.'+decodeURIComponent(u.pathname==='/'?'/index.html':u.pathname));if(!p.startsWith(ROOT+path.sep)){res.writeHead(403);res.end();return;}if(!fs.existsSync(p)||!fs.statSync(p).isFile()){res.writeHead(404);res.end();return;}res.writeHead(200,{'Content-Type':(mime[path.extname(p)]||'application/octet-stream')+'; charset=utf-8'});fs.createReadStream(p).pipe(res);});
await new Promise((resolve,reject)=>{server.on('error',reject);server.listen(PORT,'127.0.0.1',resolve);});
const profile=fs.mkdtempSync(path.join(os.tmpdir(),'sec-cert-semantic-')),log=fs.openSync(path.join(OUT,'chrome-launch.txt'),'w');
const chrome=spawn(chromePath,[`--remote-debugging-port=${DEBUG}`,`--user-data-dir=${profile}`,'--headless=new','--no-first-run','--no-default-browser-check','--disable-extensions','--disable-background-networking','about:blank'],{windowsHide:true,stdio:['ignore',log,log]});
chrome.on('error',e=>fs.appendFileSync(path.join(OUT,'chrome-launch.txt'),String(e)));
const sleep=ms=>new Promise(r=>setTimeout(r,ms));let ws,seq=0;const pending=new Map(),exceptions=[],consoleErrors=[],matrix=[];
try{
  let targets;for(let i=0;i<50;i++){try{targets=await(await fetch(`http://127.0.0.1:${DEBUG}/json`)).json();if(targets.some(t=>t.type==='page'))break;}catch{}await sleep(200);}
  const target=targets?.find(t=>t.type==='page');if(!target)throw Error('Chrome unavailable: no debugging target');
  ws=new WebSocket(target.webSocketDebuggerUrl);await new Promise((resolve,reject)=>{ws.onopen=resolve;ws.onerror=reject;});
  ws.onmessage=event=>{const m=JSON.parse(event.data);if(m.method==='Runtime.exceptionThrown')exceptions.push(m.params);if(m.method==='Runtime.consoleAPICalled'&&m.params.type==='error')consoleErrors.push(m.params.args.map(a=>a.value||a.description).join(' '));if(m.id&&pending.has(m.id)){const p=pending.get(m.id);clearTimeout(p.timer);pending.delete(m.id);m.error?p.reject(Error(m.error.message)):p.resolve(m.result);}};
  const send=(method,params={})=>new Promise((resolve,reject)=>{const id=++seq,timer=setTimeout(()=>reject(Error('CDP timeout: '+method)),20000);pending.set(id,{resolve,reject,timer});ws.send(JSON.stringify({id,method,params}));});
  const evaluate=async expression=>{const r=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(r.exceptionDetails.exception?.description||'Page evaluation failed');return r.result?.value;};
  for(const m of ['Page.enable','Runtime.enable','DOM.enable'])await send(m);
const tests=[];function check(name,pass,detail){tests.push({name,pass:!!pass,detail});if(!pass)console.log('FAIL '+name+' '+JSON.stringify(detail));}
async function ready(d){for(let i=0;i<80;i++){if(await evaluate(`!!document.querySelector('.reading-article[data-domain-id="${d}"] table')`))return;await sleep(100);}throw Error('Not ready D'+d);}
async function key(key,code,n){await send('Input.dispatchKeyEvent',{type:'keyDown',key,code,windowsVirtualKeyCode:n,nativeVirtualKeyCode:n,...(key==='Enter'?{text:'\r',unmodifiedText:'\r'}:key===' '?{text:' ',unmodifiedText:' '}:{} )});await send('Input.dispatchKeyEvent',{type:'keyUp',key,code,windowsVirtualKeyCode:n,nativeVirtualKeyCode:n});await sleep(110);}
for(const d of[1,2,3,4,5])for(const[width,height]of[[1366,768],[390,844]]){
 const run=`D${d}-${width}`;await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});await send('Page.navigate',{url:`http://127.0.0.1:${PORT}/#/reading/domain-${d}`});await ready(d);await sleep(450);
 const ids=await evaluate(`[...document.querySelector('.reading-nav-group[data-domain-id="${d}"]').querySelectorAll('[data-scroll-to^="topic-"]')].map(b=>b.dataset.scrollTo)`);
 if(width<500){await evaluate(`document.getElementById('btn-toggle-sidebar').focus()`);await key('Enter','Enter',13);check(run+' keyboard opens drawer',await evaluate(`document.getElementById('btn-toggle-sidebar').getAttribute('aria-expanded')==='true'&&!document.getElementById('reading-sidebar').inert`));}
 const objective=await evaluate(`document.querySelector('.reading-nav-group[data-domain-id="${d}"] [data-toggle-obj]').dataset.toggleObj`);
 await evaluate(`(()=>{const b=document.querySelector('[data-toggle-obj="${objective}"]');if(b.getAttribute('aria-expanded')==='false')b.click();b.focus();})()`);await key(' ','Space',32);
 const collapsed=await evaluate(`(()=>{const b=document.querySelector('[data-toggle-obj="${objective}"]'),l=b.closest('li').querySelector('.reading-nav-topics');return{aria:b.getAttribute('aria-expanded'),hidden:l.hidden,display:getComputedStyle(l).display,height:l.getBoundingClientRect().height};})()`);check(run+' Space collapses objective',collapsed.aria==='false'&&collapsed.hidden&&collapsed.display==='none'&&collapsed.height===0,collapsed);
 await key('Tab','Tab',9);check(run+' Tab skips hidden topics',await evaluate(`!document.activeElement.closest('.reading-nav-topics[hidden]')`));
 await evaluate(`document.querySelector('[data-toggle-obj="${objective}"]').focus()`);await key('Enter','Enter',13);check(run+' Enter expands objective',await evaluate(`document.querySelector('[data-toggle-obj="${objective}"]').getAttribute('aria-expanded')==='true'`));
 if(width<500){await key('Escape','Escape',27);check(run+' Escape closes drawer and returns focus',await evaluate(`document.getElementById('btn-toggle-sidebar').getAttribute('aria-expanded')==='false'&&document.activeElement.id==='btn-toggle-sidebar'`));}
 const theme=await evaluate(`document.documentElement.dataset.theme`);await evaluate(`document.querySelector('.reading-screen .theme-toggle').click()`);await sleep(450);check(run+' real theme control changes theme',await evaluate(`document.documentElement.dataset.theme!=='${theme}'`));await evaluate(`document.querySelector('.reading-screen .theme-toggle').click()`);await sleep(450);check(run+' real theme control restores theme',await evaluate(`document.documentElement.dataset.theme==='${theme}'`));
 check(run+' simultaneous bilingual content and metadata',await evaluate(`(()=>{const a=document.querySelector('.reading-article-markdown');return a.lang==='th'&&/[A-Za-z]/.test(a.innerText)&&/[\u0e00-\u0e7f]/.test(a.innerText)&&a.querySelector('[lang="en"]');})()`));
 const target=ids[Math.min(3,ids.length-1)];await send('Page.navigate',{url:`http://127.0.0.1:${PORT}/#${target}`});await ready(d);await sleep(650);let direct=await evaluate(`document.getElementById('${target}').getBoundingClientRect().top`);check(run+' cold topic link overrides prior progress',Math.abs(direct)<120,direct);
 await evaluate(`window.scrollBy({top:330,behavior:'instant'})`);await sleep(400);const before=await evaluate(`({y:scrollY,store:JSON.parse(localStorage.getItem('sec_cert_reading_progress_v1'))})`);await send('Page.reload',{ignoreCache:true});await ready(d);await sleep(650);const after=await evaluate(`({y:scrollY,store:JSON.parse(localStorage.getItem('sec_cert_reading_progress_v1'))})`);check(run+' reload preserves reading position',Math.abs(before.y-after.y)<5,{before:before.y,after:after.y});check(run+' progress schema remains version1',after.store?.schemaVersion===1,after.store?.schemaVersion);
 const im=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false}),file=`interactions-${run}.png`;fs.mkdirSync(path.join(OUT,'screenshots','interactions'),{recursive:true});fs.writeFileSync(path.join(OUT,'screenshots','interactions',file),Buffer.from(im.data,'base64'));
}
const languageControl=await evaluate(`[...document.querySelectorAll('.reading-screen button')].filter(b=>/language|ภาษา|english|thai/i.test(b.getAttribute('aria-label')||b.textContent)).map(b=>b.id)`);
const report={date:'2026-11-05',tests,passed:tests.filter(t=>t.pass).length,total:tests.length,status:tests.every(t=>t.pass)&&!exceptions.length&&!consoleErrors.length?'PASS':'FAIL',exceptions,consoleErrors,languageControl,languageBoundary:'Reading Notes display both languages simultaneously; there is no Reading language-switch control to test. No new translation/toggle feature was invented.'};fs.writeFileSync(path.join(OUT,'interaction-qa.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({status:report.status,passed:report.passed,total:report.total,failures:tests.filter(t=>!t.pass)}));if(report.status!=='PASS')process.exitCode=1;

}catch(e){console.error(e);fs.writeFileSync(path.join(OUT,"interaction-error.txt"),e.stack);process.exitCode=1;}finally{ws?.close();chrome.kill();server.close();}
