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


const rows=[];
for(const d of[1,2,3,4,5]){
 await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});await send('Page.navigate',{url:`http://127.0.0.1:${PORT}/#/reading/domain-${d}`});for(let i=0;i<150;i++){if(await evaluate(`!!document.querySelector('.reading-article[data-domain-id="${d}"] table')`))break;await sleep(100);}await sleep(500);const data=await evaluate(`(()=>{const a=document.querySelector('.reading-article');return{tables:a.querySelectorAll('table').length,wrappers:a.querySelectorAll('.reading-table-wrapper').length,nested:a.querySelectorAll('.reading-table-wrapper .reading-table-wrapper').length};})()`);rows.push({domain:d,...data});
 if(d===2)for(const theme of['light','dark']){
  await evaluate(`(()=>{document.documentElement.setAttribute('data-theme','${theme}');document.body.classList.toggle('light-mode','${theme}'==='light');const t=document.querySelector('.reading-article table');t.scrollIntoView({block:'start',behavior:'instant'});window.scrollBy({top:-70,behavior:'instant'});t.closest('.reading-table-wrapper').scrollLeft=0;})()`);await sleep(550);
  const rect=await evaluate(`(()=>{const r=document.querySelector('.reading-article table').closest('.reading-table-wrapper').getBoundingClientRect();return{x:r.x,y:r.y,width:r.width,height:r.height};})()`);await send('Input.dispatchMouseEvent',{type:'mouseWheel',x:Math.min(300,rect.x+rect.width/2),y:Math.min(500,rect.y+Math.min(200,rect.height/2)),deltaX:800,deltaY:0});await sleep(250);const table=await evaluate(`(()=>{const e=document.querySelector('.reading-article table').closest('.reading-table-wrapper');return{scrollLeft:e.scrollLeft,clientWidth:e.clientWidth,scrollWidth:e.scrollWidth,pageOverflow:document.documentElement.scrollWidth-innerWidth};})()`);const im=await send('Page.captureScreenshot',{format:'png'});const file=`screenshots/D2--bilingual-table--mobile-390x844--${theme}--EN-TH--right-columns.png`;fs.writeFileSync(path.join(OUT,file),Buffer.from(im.data,'base64'));rows.push({domain:d,theme,horizontalNativeWheel:table,screenshot:file});
 }
}
fs.writeFileSync(path.join(OUT,'table-containment-review.json'),JSON.stringify({rows,exceptions,consoleErrors,pass:rows.every(r=>r.nested===undefined||r.nested===0)&&rows.filter(r=>r.horizontalNativeWheel).every(r=>r.horizontalNativeWheel.scrollLeft>0&&r.horizontalNativeWheel.pageOverflow===0)},null,2)+'\n');console.log(JSON.stringify(rows));
}catch(e){console.error(e);process.exitCode=1;}finally{ws?.close();chrome.kill();server.close();}
