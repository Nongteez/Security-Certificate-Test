import {spawn} from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {fileURLToPath} from 'node:url';
const OUT=path.dirname(fileURLToPath(import.meta.url)),ROOT=path.resolve(OUT,'../../..');
const PORT=5268,DEBUG=9308,chromePath='C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ids=['topic-5-1-data-sanitization-destruction','topic-5-3-irp-lifecycle-phases'];
const prior=JSON.parse(fs.readFileSync(path.join(ROOT,'artifacts/qa/reading-notes-phase-3a-domain-5/browser-qa.json'),'utf8'));
fs.mkdirSync(path.join(OUT,'screenshots'),{recursive:true});
const mime={'.html':'text/html','.js':'text/javascript','.mjs':'text/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.woff2':'font/woff2','.ico':'image/x-icon'};
const server=http.createServer((req,res)=>{const url=new URL(req.url,'http://localhost');const p=path.resolve(ROOT,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));if(!p.startsWith(ROOT+path.sep)){res.writeHead(403);res.end();return;}if(!fs.existsSync(p)||!fs.statSync(p).isFile()){res.writeHead(404);res.end();return;}res.writeHead(200,{'Content-Type':(mime[path.extname(p)]||'application/octet-stream')+'; charset=utf-8'});fs.createReadStream(p).pipe(res);});
await new Promise((resolve,reject)=>{server.on('error',reject);server.listen(PORT,'127.0.0.1',resolve);});
const profile=fs.mkdtempSync(path.join(os.tmpdir(),'sec-cert-batch2-'));
const log=fs.openSync(path.join(OUT,'chrome-launch.txt'),'w');
const chrome=spawn(chromePath,[`--remote-debugging-port=${DEBUG}`,`--user-data-dir=${profile}`,'--headless=new','--no-first-run','--no-default-browser-check','--disable-extensions','--disable-background-networking','about:blank'],{windowsHide:true,stdio:['ignore',log,log]});
chrome.on('error',e=>fs.appendFileSync(path.join(OUT,'chrome-launch.txt'),String(e)));
const sleep=ms=>new Promise(r=>setTimeout(r,ms));let ws,seq=0;const pending=new Map(),exceptions=[],consoleErrors=[],results=[];
try{
  let targets;for(let i=0;i<50;i++){try{targets=await(await fetch(`http://127.0.0.1:${DEBUG}/json`)).json();if(targets.some(t=>t.type==='page'))break;}catch{}await sleep(200);}
  const target=targets?.find(t=>t.type==='page');if(!target)throw Error('Chrome debugging target unavailable');
  ws=new WebSocket(target.webSocketDebuggerUrl);await new Promise((resolve,reject)=>{ws.onopen=resolve;ws.onerror=reject;});
  ws.onmessage=event=>{const m=JSON.parse(event.data);if(m.method==='Runtime.exceptionThrown')exceptions.push(m.params);if(m.method==='Runtime.consoleAPICalled'&&m.params.type==='error')consoleErrors.push(m.params.args.map(a=>a.value||a.description).join(' '));if(m.id&&pending.has(m.id)){const p=pending.get(m.id);clearTimeout(p.timer);pending.delete(m.id);m.error?p.reject(Error(m.error.message)):p.resolve(m.result);}};
  const send=(method,params={})=>new Promise((resolve,reject)=>{const id=++seq,timer=setTimeout(()=>reject(Error('CDP timeout: '+method)),20000);pending.set(id,{resolve,reject,timer});ws.send(JSON.stringify({id,method,params}));});
  const evaluate=async expression=>{const r=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(r.exceptionDetails.exception?.description||'Evaluation failed');return r.result?.value;};
  for(const method of ['Page.enable','Runtime.enable','DOM.enable'])await send(method);
  const version=await(await fetch(`http://127.0.0.1:${DEBUG}/json/version`)).json();
  async function ready(){for(let i=0;i<70;i++){if(await evaluate(`!!document.getElementById('${ids[1]}')`))return;await sleep(100);}throw Error('Article did not load');}
  const url=`http://127.0.0.1:${PORT}/#/reading/domain-5`;
  await send('Page.navigate',{url:url+'#'+ids[0]});await ready();
  for(const [width,height]of [[1920,1080],[1440,900],[1366,768],[768,1024],[390,844],[360,800]])for(const theme of ['light','dark']){
    const run=`${width}x${height}-${theme}`;
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});
    await evaluate(`document.documentElement.setAttribute('data-theme','${theme}');document.body.classList.toggle('light-mode','${theme}'==='light');document.fonts.ready`);await sleep(120);
    const state=await evaluate(`(()=>{
      const article=document.querySelector('.reading-article[data-domain-id="5"]');
      const a=document.getElementById('${ids[0]}').closest('section.reading-structure-pilot'),b=document.getElementById('${ids[1]}').closest('section.reading-structure-pilot');
      const tables=[a.querySelector('table'),b.querySelector('table')];
      const clippedProse=[...a.querySelectorAll('p,li'),...b.querySelectorAll('p,li')].filter(p=>p.scrollWidth>p.clientWidth+2).map(p=>p.textContent.slice(0,80));
      const diagrams=[...article.querySelectorAll('[data-diagram]')].map(d=>({key:d.dataset.diagram,svg:!!d.querySelector('svg'),visible:[...d.querySelectorAll('.reading-diag-desktop,.reading-diag-mobile')].some(e=>getComputedStyle(e).display!=='none')}));
      const signature=[...article.querySelectorAll('h5')].find(h=>h.textContent.startsWith('Digital Signatures')).closest('section');
      const hardware=document.getElementById('topic-5-1-tpm-vs-hsm').closest('section.reading-structure-pilot');
      return {width:innerWidth,height:innerHeight,theme:document.documentElement.dataset.theme,pageOverflow:Math.max(0,document.documentElement.scrollWidth-innerWidth),clippedProse,diagrams,tables:tables.map(t=>({rows:t.rows.length,columns:[...t.rows].map(r=>r.cells.length),scrollable:t.parentElement.scrollWidth>t.parentElement.clientWidth+2})),scenarioCount:article.querySelectorAll('.reading-scenario-card').length,signatureText:signature.innerText,hsmText:hardware.innerText,sanitizationText:a.innerText,incidentResponseText:b.innerText};})()`);
    const old=prior.matrix.find(r=>r.run===run);
    state.batch1TextMatches=!!old&&state.signatureText===old.signatureText&&state.hsmText===old.hsmText;
    state.pass=state.width===width&&state.height===height&&state.pageOverflow===0&&!state.clippedProse.length&&state.batch1TextMatches&&state.tables[0].rows===5&&state.tables[1].rows===7&&state.tables.every(t=>t.columns.every(n=>n===4))&&state.scenarioCount===12&&state.diagrams.length===4&&state.diagrams.every(d=>d.visible&&d.svg);
    state.screenshots=[];state.tableEdges=[];
    const parts=['sanitization','incident-response','sanitization-table','incident-response-table','scenario-01','ir-post-review'];
    if(width===1366||width===360)parts.push('protected-signatures','protected-hardware');
    for(const part of parts){
      await evaluate(`(()=>{const a=document.getElementById('${ids[0]}').closest('section.reading-structure-pilot'),b=document.getElementById('${ids[1]}').closest('section.reading-structure-pilot');let el;
        if('${part}'==='sanitization')el=a;else if('${part}'==='incident-response')el=b;else if('${part}'==='sanitization-table')el=a.querySelector('table').parentElement;else if('${part}'==='incident-response-table')el=b.querySelector('table').parentElement;else if('${part}'==='scenario-01')el=document.querySelector('.reading-scenario-card');else if('${part}'==='ir-post-review')el=[...b.querySelectorAll('h5')].find(h=>h.textContent.startsWith('6. Post-Incident'));else if('${part}'==='protected-signatures')el=[...document.querySelectorAll('h5')].find(h=>h.textContent.startsWith('Digital Signatures')).closest('section');else el=document.getElementById('topic-5-1-tpm-vs-hsm').closest('section.reading-structure-pilot');el.scrollIntoView({block:'start',behavior:'instant'});for(let p=el.parentElement;p;p=p.parentElement){if(/auto|scroll/.test(getComputedStyle(p).overflowY)&&p.scrollHeight>p.clientHeight+1)p.scrollTop=Math.max(0,p.scrollTop-96);}window.scrollBy({top:-96,behavior:'instant'});})()`);
      await sleep(250);const file=`${run}-${part}.png`,img=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});fs.writeFileSync(path.join(OUT,'screenshots',file),Buffer.from(img.data,'base64'));state.screenshots.push('screenshots/'+file);
      if(part.endsWith('-table')){
        const which=part==='sanitization-table'?ids[0]:ids[1];
        const edge=await evaluate(`(()=>{const w=document.getElementById('${which}').closest('section.reading-structure-pilot').querySelector('table').parentElement;w.scrollLeft=w.scrollWidth;return {part:'${part}',max:w.scrollWidth-w.clientWidth,reached:w.scrollLeft>=w.scrollWidth-w.clientWidth-1,scrollLeft:w.scrollLeft};})()`);state.tableEdges.push(edge);state.pass&&=edge.reached;
        if(edge.max>1){const image=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});const right=`${run}-${part}-right.png`;fs.writeFileSync(path.join(OUT,'screenshots',right),Buffer.from(image.data,'base64'));state.screenshots.push('screenshots/'+right);}
        await evaluate(`document.getElementById('${which}').closest('section.reading-structure-pilot').querySelector('table').parentElement.scrollLeft=0`);
      }
    }
    results.push({run,...state});console.log(`${run}: ${state.pass?'PASS':'FAIL'}; overflow=${state.pageOverflow}; Batch 1 parity=${state.batch1TextMatches}`);
  }
  await send('Emulation.setDeviceMetricsOverride',{width:1366,height:768,deviceScaleFactor:1,mobile:false});
  const navigation=[];
  for(const id of ids){
    await send('Page.navigate',{url:'about:blank'});await send('Page.navigate',{url:url+'#'+id});await ready();await sleep(700);
    const direct=await evaluate(`({hash:location.hash,y:document.getElementById('${id}').getBoundingClientRect().top})`);
    await send('Page.reload',{ignoreCache:true});await ready();await sleep(500);
    const reload=await evaluate(`({hash:location.hash,y:document.getElementById('${id}').getBoundingClientRect().top})`);
    await evaluate(`document.querySelector('[data-select-domain="4"]').click()`);for(let i=0;i<50;i++){if(await evaluate(`!!document.getElementById('topic-4-1-osi-model')`))break;await sleep(100);}
    const otherDomain=await evaluate(`!!document.getElementById('topic-4-1-osi-model')`);
    await evaluate(`document.querySelector('[data-select-domain="5"]').click()`);await ready();await evaluate(`document.querySelector('[data-scroll-to="${id}"]').click()`);await sleep(700);
    const returned=await evaluate(`({hash:location.hash,y:document.getElementById('${id}').getBoundingClientRect().top})`);
    navigation.push({id,direct,reload,otherDomain,returned,pass:[direct,reload,returned].every(r=>r.hash.endsWith('#'+id)&&Math.abs(r.y)<220)&&otherDomain});
  }
  const report={date:'2026-11-04',browser:version.Browser,executable:chromePath,mode:'Real isolated headless Google Chrome through CDP',captureMethod:'Normal viewport screenshots after settled scrolling; no tall element clips',matrix:results,navigation,exceptions,consoleErrors,status:results.every(r=>r.pass)&&navigation.every(r=>r.pass)&&!exceptions.length&&!consoleErrors.length?'PASS':'FAIL'};
  fs.writeFileSync(path.join(OUT,'browser-qa.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({status:report.status,configurations:results.length,screenshots:results.reduce((n,r)=>n+r.screenshots.length,0),navigation,exceptions:exceptions.length,consoleErrors:consoleErrors.length},null,2));if(report.status!=='PASS')process.exitCode=1;
}catch(error){fs.writeFileSync(path.join(OUT,'browser-error.txt'),error.stack);console.error(error);process.exitCode=1;}
finally{ws?.close();chrome.kill();server.close();}
