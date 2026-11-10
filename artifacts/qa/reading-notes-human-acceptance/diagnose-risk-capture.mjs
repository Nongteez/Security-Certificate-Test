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
const profile=fs.mkdtempSync(path.join(os.tmpdir(),'sec-cert-acceptance-')),log=fs.openSync(path.join(OUT,'chrome-launch.txt'),'w');
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


await send('Emulation.setDeviceMetricsOverride',{width:1366,height:768,deviceScaleFactor:1,mobile:false});await send('Page.navigate',{url:`http://127.0.0.1:${PORT}/#/reading/domain-1`});await sleep(2200);await evaluate(`document.documentElement.setAttribute('data-theme','light');document.body.classList.add('light-mode');Promise.all([...document.querySelectorAll('.reading-article img')].map(i=>{i.loading='eager';return i.decode().catch(()=>{});} ))`);await sleep(600);
const sel='.reading-article .reading-diagram-card[data-diagram="riskTreatmentDecisionFlow"]';await evaluate(`document.querySelector('${sel}').scrollIntoView({block:'start',behavior:'instant'})`);await sleep(400);
const info=await evaluate(`(()=>{const e=document.querySelector('${sel}'),r=e.getBoundingClientRect();return{y:scrollY,rect:{x:r.x,y:r.y,width:r.width,height:r.height},html:e.outerHTML.slice(0,300),matches:document.querySelectorAll('[data-diagram="riskTreatmentDecisionFlow"]').length};})()`);console.log(JSON.stringify(info));const viewport=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(path.join(OUT,'risk-viewport-diagnostic.png'),Buffer.from(viewport.data,'base64'));const im=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:{x:info.rect.x,y:info.rect.y+info.y,width:Math.ceil(info.rect.width),height:Math.ceil(info.rect.height),scale:1}});fs.writeFileSync(path.join(OUT,'risk-component-diagnostic.png'),Buffer.from(im.data,'base64'));
}catch(e){console.error(e);process.exitCode=1;}finally{ws?.close();chrome.kill();server.close();}
