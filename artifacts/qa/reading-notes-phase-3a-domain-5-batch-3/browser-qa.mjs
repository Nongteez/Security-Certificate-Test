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
const profile=fs.mkdtempSync(path.join(os.tmpdir(),'sec-cert-batch3-')),log=fs.openSync(path.join(OUT,'chrome-launch.txt'),'w');
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
  const version=await(await fetch(`http://127.0.0.1:${DEBUG}/json/version`)).json(),url=`http://127.0.0.1:${PORT}/#/reading/domain-5`;
  async function ready(){for(let i=0;i<60;i++){if(await evaluate(`!!document.getElementById('${topic}')`))return;await sleep(100);}throw Error('Domain 5 target did not load');}
  await send('Page.navigate',{url:url+'#'+topic});await ready();
  for(const [width,height]of [[1920,1080],[1440,900],[1366,768],[768,1024],[390,844],[360,800]])for(const theme of ['light','dark']){
    const run=`${width}x${height}-${theme}`;
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});
    await evaluate(`document.documentElement.setAttribute('data-theme','${theme}');document.body.classList.toggle('light-mode','${theme}'==='light');document.fonts.ready`);await sleep(120);
    const state=await evaluate(`(()=>{const article=document.querySelector('.reading-article[data-domain-id="5"]'),unit=document.getElementById('${topic}').closest('section.reading-structure-pilot'),diagram=unit.querySelector('[data-diagram="mitreAttackTacticTechnique"]'),svg=diagram.querySelector('svg');
      const desktopVisible=getComputedStyle(diagram.querySelector('.reading-diag-desktop')).display!=='none',mobileVisible=getComputedStyle(diagram.querySelector('.reading-diag-mobile')).display!=='none';
      const labels=desktopVisible?[...svg.querySelectorAll('text')].filter(t=>(t.getAttribute('x')==='40'&&t.getAttribute('y')==='238')||(t.getAttribute('x')==='335'&&['126','170'].includes(t.getAttribute('y')))).map(t=>{const b=t.getBBox(),p=t.parentElement.querySelector('rect').getBBox();return{text:t.textContent,x:b.x,right:b.x+b.width,panelLeft:p.x,panelRight:p.x+p.width,withinPanel:b.x>=p.x&&b.x+b.width<=p.x+p.width};}):[];
      const tables=[...article.querySelectorAll('table')];return{width:innerWidth,height:innerHeight,theme:document.documentElement.dataset.theme,pageOverflow:Math.max(0,document.documentElement.scrollWidth-innerWidth),clippedProse:[...unit.querySelectorAll('p,li')].filter(p=>p.scrollWidth>p.clientWidth+2).map(p=>p.textContent.slice(0,80)),desktopVisible,mobileVisible,labels,tableCount:tables.length,nestedTableWrappers:article.querySelectorAll('.reading-table-wrapper .reading-table-wrapper').length,tableHeaderStyles:tables.map(t=>({verticalAlign:getComputedStyle(t.querySelector('th')).verticalAlign,fontFamily:getComputedStyle(t.querySelector('th')).fontFamily})),scenarioCount:article.querySelectorAll('.reading-scenario-card').length,protectedUnits:${JSON.stringify(protectedIds)}.map(id=>({id,present:!!document.getElementById(id)})),diagramCount:article.querySelectorAll('[data-diagram]').length,targetText:unit.innerText};})()`);
    state.pass=state.width===width&&state.height===height&&state.pageOverflow===0&&!state.clippedProse.length&&(state.desktopVisible||state.mobileVisible)&&(!state.desktopVisible||(state.labels.length===3&&state.labels.every(l=>l.withinPanel)))&&state.tableCount===14&&state.nestedTableWrappers===0&&state.tableHeaderStyles.every(s=>s.verticalAlign==='bottom'&&s.fontFamily.includes('Space Grotesk'))&&state.scenarioCount===12&&state.protectedUnits.every(p=>p.present)&&state.diagramCount===4;
    state.screenshots=[];
    const parts=['section','diagram','techniques','id-note','table'];
    if(width===1366||width===360)parts.push(...protectedIds);
    for(const part of parts){
      await evaluate(`(()=>{const unit=document.getElementById('${topic}').closest('section.reading-structure-pilot');let el;if('${part}'==='section')el=unit;else if('${part}'==='diagram')el=unit.querySelector('[data-diagram]');else if('${part}'==='techniques')el=[...unit.querySelectorAll('h5')].find(h=>h.textContent.startsWith('2. Techniques'));else if('${part}'==='id-note')el=[...unit.querySelectorAll('p')].find(p=>p.textContent.includes('Names and IDs'));else if('${part}'==='table')el=document.querySelectorAll('.reading-article table')[7].parentElement;else el=document.getElementById('${part}');if(!el)throw Error('Screenshot target missing: ${part}');el.scrollIntoView({block:'start',behavior:'instant'});for(let p=el.parentElement;p;p=p.parentElement)if(/auto|scroll/.test(getComputedStyle(p).overflowY)&&p.scrollHeight>p.clientHeight+1)p.scrollTop=Math.max(0,p.scrollTop-96);window.scrollBy({top:-96,behavior:'instant'});})()`);
      await sleep(220);const file=`${run}-${part}.png`,img=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});fs.writeFileSync(path.join(OUT,'screenshots',file),Buffer.from(img.data,'base64'));state.screenshots.push('screenshots/'+file);
      if(part==='table'){
        const edge=await evaluate(`(()=>{const w=document.querySelectorAll('.reading-article table')[7].parentElement;w.scrollLeft=w.scrollWidth;return{max:w.scrollWidth-w.clientWidth,reached:w.scrollLeft>=w.scrollWidth-w.clientWidth-1};})()`);state.tableEdge=edge;state.pass&&=edge.reached;
        if(edge.max>1){const img=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false}),right=`${run}-table-right.png`;fs.writeFileSync(path.join(OUT,'screenshots',right),Buffer.from(img.data,'base64'));state.screenshots.push('screenshots/'+right);}
        await evaluate(`document.querySelectorAll('.reading-article table')[7].parentElement.scrollLeft=0`);
      }
    }
    matrix.push({run,...state});console.log(`${run}: ${state.pass?'PASS':'FAIL'}; overflow=${state.pageOverflow}; nested tables=${state.nestedTableWrappers}; labels fit=${state.labels.every(l=>l.withinPanel)}`);
  }
  await send('Emulation.setDeviceMetricsOverride',{width:1366,height:768,deviceScaleFactor:1,mobile:false});
  await send('Page.navigate',{url:'about:blank'});await send('Page.navigate',{url:url+'#'+topic});await ready();await sleep(700);
  const direct=await evaluate(`({hash:location.hash,y:document.getElementById('${topic}').getBoundingClientRect().top})`);
  await send('Page.reload',{ignoreCache:true});await ready();await sleep(500);
  const reload=await evaluate(`({hash:location.hash,y:document.getElementById('${topic}').getBoundingClientRect().top})`);
  await evaluate(`document.querySelector('[data-select-domain="4"]').click()`);for(let i=0;i<50;i++){if(await evaluate(`!!document.getElementById('topic-4-1-osi-model')`))break;await sleep(100);}
  const otherDomain=await evaluate(`!!document.getElementById('topic-4-1-osi-model')`);
  await evaluate(`document.querySelector('[data-select-domain="5"]').click()`);await ready();await evaluate(`document.querySelector('[data-scroll-to="${topic}"]').click()`);await sleep(700);
  const returned=await evaluate(`({hash:location.hash,y:document.getElementById('${topic}').getBoundingClientRect().top})`),navigation={direct,reload,otherDomain,returned,pass:[direct,reload,returned].every(r=>r.hash.endsWith('#'+topic)&&Math.abs(r.y)<220)&&otherDomain};
  const report={date:'2026-11-04',browser:version.Browser,executable:chromePath,mode:'Real headless Google Chrome via CDP; isolated temporary profile',captureMethod:'Normal viewport screenshots after settled scrolling',matrix,navigation,exceptions,consoleErrors,status:matrix.every(r=>r.pass)&&navigation.pass&&!exceptions.length&&!consoleErrors.length?'PASS':'FAIL'};
  fs.writeFileSync(path.join(OUT,'browser-qa.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({status:report.status,configurations:matrix.length,screenshots:matrix.reduce((n,r)=>n+r.screenshots.length,0),navigation,exceptions:exceptions.length,consoleErrors:consoleErrors.length},null,2));if(report.status!=='PASS')process.exitCode=1;
}catch(error){fs.writeFileSync(path.join(OUT,'browser-error.txt'),error.stack);console.error(error);process.exitCode=1;}
finally{ws?.close();chrome.kill();server.close();}
