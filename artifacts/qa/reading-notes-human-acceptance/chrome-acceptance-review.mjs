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

const reviewTargets=[
 {d:1,id:'risk-treatment-moved',sel:'[data-diagram="riskTreatmentDecisionFlow"]'},
 {d:1,id:'aaa-ongoing-accounting',sel:'[data-diagram="aaaLifecycle"]'},
 {d:1,id:'ethics-duplicate-removed-four-canons-retained',sel:'.reading-precedence-stack'},
 {d:1,id:'control-functions-coexist',sel:'[data-diagram="controlTimeline"]'},
 {d:2,id:'bc-dr-coordinated-scopes',sel:'[data-diagram="bcVsDrScope"]'},
 {d:2,id:'measurement-peer-groups',sel:'[data-diagram="effectivenessHierarchy"]'},
 {d:2,id:'backup-restore-dependencies',sel:'[data-diagram="backupRestoreChains"]'},
 {d:2,id:'bilingual-table',sel:'table'},
 {d:3,id:'biometrics-moved-with-example',sel:'[data-diagram="biometricSensitivityCurve"]'},
 {d:3,id:'jml-optional-mover',sel:'[data-diagram="iamLifecycle"]'},
 {d:4,id:'dmz-permitted-paths',sel:'[data-diagram="dmzFirewallArchitecture"]'},
 {d:4,id:'segmentation-scenario01',sel:'.reading-scenario-card'},
 {d:4,id:'defense-in-depth-qualified',sel:'[data-diagram="defenseInDepthLayers"]'},
 {d:5,id:'crypto-distinct-operations',sel:'[data-diagram="cryptographyPipelines"]'},
 {d:5,id:'sanitization-photo-context',sel:'.reading-figure'},
 {d:5,id:'local-ir-model',sel:'[data-diagram="irpLifecycle"]'}
];
const records=[],states=[];fs.mkdirSync(path.join(OUT,'screenshots'),{recursive:true});const version=await(await fetch(`http://127.0.0.1:${DEBUG}/json/version`)).json();
for(const d of[1,2,3,4,5])for(const[width,height,mode]of[[1366,768,'desktop'],[390,844,'mobile']])for(const theme of['light','dark']){
 await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});await send('Page.navigate',{url:`http://127.0.0.1:${PORT}/#/reading/domain-${d}`});let mounted=false;for(let i=0;i<150;i++){if(await evaluate(`!!document.querySelector('.reading-article[data-domain-id="${d}"] table')`)){mounted=true;break;}await sleep(100);}if(!mounted)throw Error('Domain did not mount '+d);
 await evaluate(`document.documentElement.setAttribute('data-theme','${theme}');document.body.classList.toggle('light-mode','${theme}'==='light');document.fonts.ready`);await evaluate(`Promise.all([...document.querySelectorAll('.reading-article img')].map(i=>{i.loading='eager';return i.decode().catch(()=>{});} ))`);await sleep(550);
 const state=await evaluate(`(()=>{const a=document.querySelector('.reading-article');return{pageOverflow:Math.max(0,document.documentElement.scrollWidth-innerWidth),h1:a.querySelectorAll('h1').length,nestedTables:a.querySelectorAll('.reading-table-wrap .reading-table-wrap').length,thai:/[ก-๙]/.test(a.innerText),english:/[A-Za-z]{3}/.test(a.innerText),rawLeaks:/<!--|:::scenario|\\\\(?:to|subset)\\b/.test(a.innerText),ethicsDiagrams:a.querySelectorAll('[data-diagram="ethicsCanons"]').length,canonCards:a.querySelectorAll('.reading-precedence-card').length};})()`);
 states.push({domain:d,width,height,theme,...state});
 for(const t of reviewTargets.filter(t=>t.d===d)){
  const selector='.reading-article '+t.sel;
  const info=await evaluate(`(()=>{const e=document.querySelector(${JSON.stringify(selector)});if(!e)throw Error('Missing target');e.scrollIntoView({block:'start',behavior:'instant'});const a=document.querySelector('.reading-article'),r=e.getBoundingClientRect(),ar=a.getBoundingClientRect(),heads=[...a.querySelectorAll('h2,h3,h4')].filter(h=>h.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING),h3=[...a.querySelectorAll('h3,.reading-topic-anchor')].filter(h=>h.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING).at(-1);return{targetText:e.innerText,precedingTopic:h3?.id,precedingHeadings:heads.slice(-3).map(h=>h.textContent),clip:{x:Math.max(0,ar.x),y:Math.max(0,r.y+scrollY-150),width:Math.min(innerWidth-Math.max(0,ar.x),ar.width),height:r.height+290},images:[...e.querySelectorAll('img')].map(i=>({src:i.getAttribute('src'),loaded:i.complete&&i.naturalWidth>0})),diagramIds:[...e.querySelectorAll('[data-diagram]')].map(n=>n.dataset.diagram)};})()`);

  await evaluate(`window.scrollBy({top:-70,behavior:'instant'})`);await sleep(200);
  const frames=[],initialY=await evaluate('scrollY');const frameCount=Math.max(1,Math.ceil((info.clip.height-220)/(height-150)));
  for(let part=0;part<frameCount;part++){
   if(part){await evaluate(`window.scrollTo({top:${initialY+part*(height-150)},behavior:'instant'})`);await sleep(140);}
   const actual=await evaluate(`(()=>{const e=document.querySelector(${JSON.stringify(selector)}),r=e.getBoundingClientRect();return{scrollY,targetTop:r.top,targetBottom:r.bottom};})()`);
   const im=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false}),file=`D${d}--${t.id}--${mode}-${width}x${height}--${theme}--EN-TH${part?'--part'+String(part+1).padStart(2,'0'):''}.png`;fs.writeFileSync(path.join(OUT,'screenshots',file),Buffer.from(im.data,'base64'));frames.push({part:part+1,screenshot:'screenshots/'+file,...actual});
  }
  records.push({domain:d,id:t.id,selector,width,height,theme,languages:'English and Thai simultaneously, original content',screenshot:frames[0].screenshot,frames,...info});

 }
 fs.writeFileSync(path.join(OUT,'capture-checkpoint.json'),JSON.stringify({records,states,exceptions,consoleErrors},null,2)+'\n');
 console.log(`Reviewed D${d} ${mode} ${theme}: ${reviewTargets.filter(t=>t.d===d).length} captures`);
}
const pass=states.every(s=>s.pageOverflow===0&&s.h1===1&&!s.nestedTables&&s.thai&&s.english&&!s.rawLeaks&&(s.domain!==1||s.ethicsDiagrams===0&&s.canonCards===4))&&records.every(r=>r.images.every(i=>i.loaded))&&!exceptions.length&&!consoleErrors.length;
fs.writeFileSync(path.join(OUT,'chrome-acceptance-review.json'),JSON.stringify({browser:version.Browser,states,records,exceptions,consoleErrors,automatedStatus:pass?'PASS':'FAIL',humanAcceptance:'PENDING USER APPROVAL',languageNote:'No separate language mode: all captures preserve simultaneous English/Thai content; no DOM translation or hiding.'},null,2)+'\n');console.log(JSON.stringify({states:states.length,captures:records.reduce((n,r)=>n+r.frames.length,0),sections:records.length,automatedStatus:pass?'PASS':'FAIL'}));if(!pass)process.exitCode=1;
}catch(e){console.error(e);fs.writeFileSync(path.join(OUT,'chrome-error.txt'),e.stack);try{fs.writeFileSync(path.join(OUT,'mount-diagnostic.json'),JSON.stringify({page:await evaluate('({hash:location.hash,text:document.body.innerText.slice(0,800),articles:[...document.querySelectorAll(".reading-article")].map(e=>e.outerHTML.slice(0,200))})'),exceptions,consoleErrors},null,2));}catch{}process.exitCode=1;}finally{ws?.close();chrome.kill();server.close();}
