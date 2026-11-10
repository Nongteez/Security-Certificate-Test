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
function components(){return [...document.querySelectorAll('.reading-article .reading-diagram-card[data-diagram],.reading-article .reading-figure,.reading-article .reading-example-box,.reading-article .reading-masking-card,.reading-article .reading-mfa-stack,.reading-article .reading-treatment-stack,.reading-article .reading-category-stack,.reading-article .reading-callout')];}
const records=[],overlaps=[];fs.mkdirSync(path.join(OUT,'screenshots','full-components'),{recursive:true});
for(const d of[1,2,3,4,5])for(const[width,height,theme]of[[1920,1080,'light'],[390,844,'dark']]){
 await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});await send('Page.navigate',{url:`http://127.0.0.1:${PORT}/#/reading/domain-${d}`});for(let i=0;i<80;i++){if(await evaluate(`!!document.querySelector('.reading-article[data-domain-id="${d}"] table')`))break;await sleep(100);}await evaluate(`document.documentElement.setAttribute('data-theme','${theme}');document.body.classList.toggle('light-mode','${theme}'==='light');document.fonts.ready`);await evaluate(`Promise.all([...document.querySelectorAll('.reading-article img')].map(i=>{i.loading='eager';return i.decode().catch(()=>{});} ))`);await sleep(550);
 const list=await evaluate(`(${components.toString()})().map((e,i)=>({index:i,type:e.matches('[data-diagram]')?'diagram':e.matches('figure')?'image':'example',id:e.dataset.diagram||e.querySelector('img')?.getAttribute('src')||e.querySelector('.reading-example-title')?.textContent||'example'}))`);
 for(const c of list){
  const rect=await evaluate(`(()=>{const e=(${components.toString()})()[${c.index}];e.scrollIntoView({block:'start',behavior:'instant'});const r=e.getBoundingClientRect();return{x:r.x+scrollX,y:r.y+scrollY,width:r.width,height:r.height};})()`);await sleep(70);
  const im=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:{x:Math.max(0,rect.x),y:Math.max(0,rect.y),width:Math.ceil(rect.width),height:Math.ceil(rect.height),scale:1}}),file=`D${d}-${width}-${theme}-${String(c.index).padStart(2,'0')}-${c.type}.png`;fs.writeFileSync(path.join(OUT,'screenshots','full-components',file),Buffer.from(im.data,'base64'));records.push({...c,domain:d,width,height,theme,clip:rect,screenshot:'screenshots/full-components/'+file});
  if(c.type==='diagram'&&width===1920){const pairs=await evaluate(`(()=>{const e=(${components.toString()})()[${c.index}],texts=[...e.querySelectorAll('svg text')].filter(t=>t.getBoundingClientRect().width>0),out=[];for(let i=0;i<texts.length;i++)for(let j=i+1;j<texts.length;j++){const a=texts[i].getBoundingClientRect(),b=texts[j].getBoundingClientRect(),w=Math.min(a.right,b.right)-Math.max(a.left,b.left),h=Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top);if(w>2&&h>2&&w*h>Math.min(a.width*a.height,b.width*b.height)*.15)out.push({a:texts[i].textContent,b:texts[j].textContent,area:w*h});}return out;})()`);if(pairs.length)overlaps.push({domain:d,id:c.id,pairs});}
 }
 console.log(`Full component capture D${d}-${width}-${theme}: ${list.length}`);
}
fs.writeFileSync(path.join(OUT,'full-component-captures.json'),JSON.stringify({records,overlaps,exceptions,consoleErrors},null,2)+'\n');console.log(JSON.stringify({captures:records.length,overlaps}));

}catch(e){console.error(e);fs.writeFileSync(path.join(OUT,"full-visual-error.txt"),e.stack);process.exitCode=1;}finally{ws?.close();chrome.kill();server.close();}
