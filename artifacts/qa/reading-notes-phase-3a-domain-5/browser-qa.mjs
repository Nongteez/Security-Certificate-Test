import {spawn} from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {fileURLToPath} from 'node:url';
const OUT=path.dirname(fileURLToPath(import.meta.url));
const ROOT=path.resolve(OUT,'../../..');
const PORT=5267, DEBUG=9307;
const chromePath='C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const shots=path.join(OUT,'screenshots');fs.mkdirSync(shots,{recursive:true});
const mime={'.html':'text/html','.js':'text/javascript','.mjs':'text/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.woff2':'font/woff2','.png':'image/png','.jpg':'image/jpeg','.ico':'image/x-icon'};
const server=http.createServer((req,res)=>{
  const url=new URL(req.url,'http://localhost');
  const p=path.resolve(ROOT,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
  if(!p.startsWith(ROOT+path.sep)){res.writeHead(403);res.end();return;}
  if(!fs.existsSync(p)||!fs.statSync(p).isFile()){res.writeHead(404);res.end();return;}
  res.writeHead(200,{'Content-Type':(mime[path.extname(p)]||'application/octet-stream')+'; charset=utf-8'});fs.createReadStream(p).pipe(res);
});
await new Promise((resolve,reject)=>{server.on('error',reject);server.listen(PORT,'127.0.0.1',resolve);});
const profile=fs.mkdtempSync(path.join(os.tmpdir(),'sec-cert-phase3a-'));
const chromeLog=fs.openSync(path.join(OUT,'chrome-launch.txt'),'w');
const chrome=spawn(chromePath,[`--remote-debugging-port=${DEBUG}`,`--user-data-dir=${profile}`,'--headless=new','--no-first-run','--no-default-browser-check','--disable-extensions','--disable-background-networking','about:blank'],{windowsHide:true,stdio:['ignore',chromeLog,chromeLog]});
chrome.on('error',error=>fs.appendFileSync(path.join(OUT,'chrome-launch.txt'),String(error)));
chrome.on('exit',(code,signal)=>fs.appendFileSync(path.join(OUT,'chrome-launch.txt'),`\nExit ${code} ${signal}\n`));
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
let ws,seq=0;const pending=new Map(),exceptions=[],consoleErrors=[],results=[];
let failed;
try{
  let targets;
  for(let i=0;i<50;i++){try{targets=await(await fetch(`http://127.0.0.1:${DEBUG}/json`)).json();if(targets.some(t=>t.type==='page'))break;}catch{}await sleep(200);}
  const target=targets?.find(t=>t.type==='page');if(!target)throw Error('Chrome debugging target unavailable');
  ws=new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve,reject)=>{ws.onopen=resolve;ws.onerror=reject;});
  ws.onmessage=event=>{const msg=JSON.parse(event.data);if(msg.method==='Runtime.exceptionThrown')exceptions.push(msg.params);if(msg.method==='Runtime.consoleAPICalled'&&msg.params.type==='error')consoleErrors.push(msg.params.args.map(a=>a.value||a.description).join(' '));if(msg.id&&pending.has(msg.id)){const {resolve,reject,timer}=pending.get(msg.id);clearTimeout(timer);pending.delete(msg.id);msg.error?reject(Error(msg.error.message)):resolve(msg.result);}};
  const send=(method,params={})=>new Promise((resolve,reject)=>{const id=++seq;const timer=setTimeout(()=>reject(Error('CDP timeout: '+method)),15000);pending.set(id,{resolve,reject,timer});ws.send(JSON.stringify({id,method,params}));});
  const evaluate=async expression=>{const r=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(r.exceptionDetails.exception?.description||'Page evaluation failed');return r.result?.value;};
  for(const method of ['Page.enable','Runtime.enable','DOM.enable'])await send(method);
  const version=await(await fetch(`http://127.0.0.1:${DEBUG}/json/version`)).json();
  const ids=['topic-5-1-hashing-digital-signatures','topic-5-1-tpm-vs-hsm'];
  async function ready(){for(let i=0;i<60;i++){if(await evaluate(`!!document.getElementById('${ids[1]}')`))return;await sleep(100);}throw Error('Domain 5 article did not load');}
  const url=`http://127.0.0.1:${PORT}/#/reading/domain-5`;
  await send('Page.navigate',{url:url+'#'+ids[0]});await ready();
  const matrix=[[1920,1080],[1440,900],[1366,768],[768,1024],[390,844],[360,800]];
  for(const [width,height]of matrix)for(const theme of ['light','dark']){
    const run=`${width}x${height}-${theme}`;
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});
    await evaluate(`document.documentElement.setAttribute('data-theme','${theme}');document.body.classList.toggle('light-mode','${theme}'==='light');`);
    await evaluate(`document.fonts.ready`);await sleep(150);
    const state=await evaluate(`(()=>{
      const article=document.querySelector('.reading-article[data-domain-id="5"]');
      const hsm=document.getElementById('${ids[1]}').closest('section.reading-structure-pilot');
      const signature=[...document.querySelectorAll('h5')].find(h=>h.textContent.startsWith('Digital Signatures')).closest('section');
      const table=hsm.querySelector('table');
      const tableBox=table.getBoundingClientRect();
      const prose=[...signature.querySelectorAll('p,li'),...hsm.querySelectorAll('p,li')];
      const clippedProse=prose.filter(p=>p.scrollWidth>p.clientWidth+2).map(p=>p.textContent.slice(0,80));
      const diagrams=[...article.querySelectorAll('[data-diagram]')].map(d=>{const modes=[...d.querySelectorAll('.reading-diag-desktop,.reading-diag-mobile')].filter(e=>getComputedStyle(e).display!=='none');return {key:d.dataset.diagram,visible:modes.length>0,svg:!!d.querySelector('svg')};});
      return {innerWidth,innerHeight,theme:document.documentElement.dataset.theme,pageOverflow:Math.max(0,document.documentElement.scrollWidth-innerWidth),clippedProse,tableRows:table.rows.length,tableColumnCounts:[...table.rows].map(r=>r.cells.length),tableWidth:tableBox.width,tableContainerWidth:table.parentElement.clientWidth,tableScrollable:table.parentElement.scrollWidth>table.parentElement.clientWidth+2,scenarioCount:article.querySelectorAll('.reading-scenario-card').length,diagrams,thaiFont:getComputedStyle(signature).fontFamily,signatureText:signature.innerText,hsmText:hsm.innerText};})()`);
    state.pass=state.innerWidth===width&&state.innerHeight===height&&state.pageOverflow<=1&&state.clippedProse.length===0&&state.tableColumnCounts.every(n=>n===3)&&state.scenarioCount===12&&state.diagrams.length===4&&state.diagrams.every(d=>d.visible&&d.svg);
    state.screenshots=[];
    for(const part of ['signature','hardware','table']){
      const box=await evaluate(`(()=>{let el;const hsm=document.getElementById('${ids[1]}').closest('section.reading-structure-pilot');if('${part}'==='signature')el=[...document.querySelectorAll('h5')].find(h=>h.textContent.startsWith('Digital Signatures')).closest('section');else el='${part}'==='table'?hsm.querySelector('table').parentElement:hsm;el.scrollIntoView({block:'start',behavior:'instant'});const b=el.getBoundingClientRect();return {x:Math.max(0,b.x),y:Math.max(0,b.y+scrollY),width:Math.ceil(b.width),height:Math.ceil(b.height)};})()`);
      await sleep(80);
      const file=`${run}-${part}.png`;
      const img=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:{...box,scale:1}});
      fs.writeFileSync(path.join(shots,file),Buffer.from(img.data,'base64'));state.screenshots.push('screenshots/'+file);
      if(part==='table'&&state.tableScrollable){
        const scroll=await evaluate(`(()=>{const wrap=document.getElementById('${ids[1]}').closest('section.reading-structure-pilot').querySelector('table').parentElement;wrap.scrollLeft=wrap.scrollWidth;return {scrollLeft:wrap.scrollLeft,max:wrap.scrollWidth-wrap.clientWidth};})()`);
        state.tableRightEdgeReachable=scroll.scrollLeft>=scroll.max-1&&scroll.scrollLeft>0;
        const right=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:{...box,scale:1}});
        const rightFile=`${run}-table-right.png`;fs.writeFileSync(path.join(shots,rightFile),Buffer.from(right.data,'base64'));state.screenshots.push('screenshots/'+rightFile);
        await evaluate(`document.getElementById('${ids[1]}').closest('section.reading-structure-pilot').querySelector('table').parentElement.scrollLeft=0`);
        state.pass&&=state.tableRightEdgeReachable;
      }
    }
    results.push({run,width,height,...state});console.log(run+': '+(state.pass?'PASS':'FAIL')+'; overflow='+state.pageOverflow+'; prose clips='+state.clippedProse.length+'; table scroll='+state.tableScrollable);
  }
  const nav=[];
  await send('Emulation.setDeviceMetricsOverride',{width:1366,height:768,deviceScaleFactor:1,mobile:false});
  for(const id of ids){
    await send('Page.navigate',{url:'about:blank'});
    await send('Page.navigate',{url:url+'#'+id});await ready();await sleep(750);
    const direct=await evaluate(`({hash:location.hash,anchorExists:!!document.getElementById('${id}'),y:document.getElementById('${id}').getBoundingClientRect().top})`);
    await send('Page.reload',{ignoreCache:true});await ready();await sleep(350);
    const reload=await evaluate(`({hash:location.hash,anchorExists:!!document.getElementById('${id}'),y:document.getElementById('${id}').getBoundingClientRect().top})`);
    await evaluate(`document.querySelector('[data-select-domain="4"]').click()`);
    for(let i=0;i<60;i++){if(await evaluate(`!!document.getElementById('topic-4-1-osi-model')`))break;await sleep(100);}
    const otherDomain=await evaluate(`({article:!!document.querySelector('.reading-article[data-domain-id="4"]'),anchor:!!document.getElementById('topic-4-1-osi-model'),hash:location.hash})`);
    await evaluate(`document.querySelector('[data-select-domain="5"]').click()`);await ready();
    await evaluate(`document.querySelector('[data-scroll-to="${id}"]').click()`);await sleep(750);
    const returnToTopic=await evaluate(`({exists:!!document.getElementById('${id}'),hash:location.hash,y:document.getElementById('${id}').getBoundingClientRect().top})`);
    nav.push({id,direct,reload,otherDomain,returnToTopic,pass:direct.anchorExists&&reload.anchorExists&&direct.hash.endsWith('#'+id)&&reload.hash.endsWith('#'+id)&&Math.abs(direct.y)<220&&Math.abs(reload.y)<220&&otherDomain.article&&otherDomain.anchor&&returnToTopic.exists&&Math.abs(returnToTopic.y)<220});
  }
  const report={date:'2026-11-04',browser:version.Browser,executable:chromePath,mode:'Real Google Chrome headless via CDP; isolated temporary profile',url,matrix:results,navigation:nav,exceptions,consoleErrors,status:results.every(r=>r.pass)&&nav.every(r=>r.pass)&&!exceptions.length&&!consoleErrors.length?'PASS':'FAIL'};
  fs.writeFileSync(path.join(OUT,'browser-qa.json'),JSON.stringify(report,null,2)+'\n');
  console.log(JSON.stringify({status:report.status,configurations:results.length,screenshots:results.reduce((n,r)=>n+r.screenshots.length,0),navigation:nav,exceptions:exceptions.length,consoleErrors:consoleErrors.length},null,2));
  if(report.status!=='PASS')process.exitCode=1;
}catch(error){failed=error;fs.writeFileSync(path.join(OUT,'browser-error.txt'),error.stack);console.error(error);process.exitCode=1;}
finally{ws?.close();chrome.kill();server.close();}
