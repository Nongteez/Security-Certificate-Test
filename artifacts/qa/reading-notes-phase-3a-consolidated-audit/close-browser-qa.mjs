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
const profile=fs.mkdtempSync(path.join(os.tmpdir(),'sec-cert-consolidated-')),log=fs.openSync(path.join(OUT,'chrome-launch.txt'),'w');
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


 const cases=[{d:1,name:'privacy-table',selector:`[...document.querySelectorAll('table')].find(e=>e.innerText.includes('Lawful Basis'))`},{d:2,name:'bc-dr-subset',selector:`document.querySelector('.reading-mob-pill-accent')`},{d:3,name:'provision-observed',selector:`[...document.querySelectorAll('p')].find(e=>e.innerText.includes('Approved vs observed'))`},{d:4,name:'scenario01-reasoning',selector:`[...document.querySelectorAll('.reading-scenario-card p')].find(e=>e.innerText.includes('ป้องกันไม่ให้ผู้โจมตี'))`},{d:5,name:'signature-caveat',selector:`[...document.querySelectorAll('section.reading-definition-unit')].find(e=>e.querySelector('h5')?.textContent.startsWith('Digital Signatures'))`}];
 for(const c of cases)for(const [width,height]of [[1366,768],[360,800]])for(const theme of ['light','dark']){
  await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});await send('Page.navigate',{url:`http://127.0.0.1:${PORT}/#/reading/domain-${c.d}`});for(let i=0;i<80;i++){if(await evaluate(`!!document.querySelector('.reading-article[data-domain-id="${c.d}"] table')`))break;await sleep(100);}
  await evaluate(`document.documentElement.setAttribute('data-theme','${theme}');document.body.classList.toggle('light-mode','${theme}'==='light');document.fonts.ready`);await sleep(150);
  if(c.d===2&&width>500)c.selector=`document.querySelector('[data-diagram="bcVsDrScope"]')`;
  if(c.d===2&&width<500)c.selector=`document.querySelector('.reading-mob-pill-accent')`;
  const r=await evaluate(`(()=>{const e=${c.selector};if(!e)throw Error('Missing ${c.name}');e.scrollIntoView({block:'center',behavior:'instant'});return{text:e.innerText||e.textContent,html:e.outerHTML};})()`);await sleep(180);const file=`close-D${c.d}-${width}x${height}-${theme}-${c.name}.png`,im=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});fs.writeFileSync(path.join(OUT,'screenshots',file),Buffer.from(im.data,'base64'));matrix.push({domain:c.d,name:c.name,width,height,theme,...r,screenshots:['screenshots/'+file]});
 }
 fs.writeFileSync(path.join(OUT,'close-browser-qa.json'),JSON.stringify({matrix,exceptions,consoleErrors,status:matrix.length===20&&!exceptions.length&&!consoleErrors.length?'PASS':'FAIL'},null,2)+'\n');console.log('Close captures: '+matrix.length);
}catch(e){console.error(e);fs.writeFileSync(path.join(OUT,'close-browser-error.txt'),e.stack);process.exitCode=1;}finally{ws?.close();chrome.kill();server.close();}
