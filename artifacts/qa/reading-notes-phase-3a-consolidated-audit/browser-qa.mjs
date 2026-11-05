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

 const version=await(await fetch(`http://127.0.0.1:${DEBUG}/json/version`)).json();
 const topics={1:['topic-1-1-privacy-data-protection','topic-1-4-control-categories','topic-1-5-isc2-ethics'],2:['topic-2-2-rto-rpo','topic-2-4-memory-aid'],3:['topic-3-1-jml-lifecycle','topic-3-1-provisioning','topic-3-1-access-review','topic-3-1-deprovisioning'],4:['topic-4-1-ipv6-architecture','topic-4-1-tcp-vs-udp','topic-4-1-network-threats-iot','topic-4-2-segmentation-blast-radius'],5:['topic-5-1-hashing-digital-signatures','topic-5-1-tpm-vs-hsm','topic-5-1-data-sanitization-destruction','topic-5-3-irp-lifecycle-phases','topic-5-2-mitre-attack-framework']};
 const diag={1:['controlTimeline','aaaLifecycle'],2:['effectivenessHierarchy','bcVsDrScope'],3:['iamLifecycle'],4:['dmzFirewallArchitecture'],5:['mitreAttackTacticTechnique']};
 async function ready(d){for(let i=0;i<90;i++){if(await evaluate(`!!document.querySelector('.reading-article[data-domain-id="${d}"] table')`))return;await sleep(100);}throw Error('Not ready D'+d);}
 for(const d of [1,2,3,4,5])for(const [width,height]of [[1366,768],[360,800]])for(const theme of ['light','dark']){
  const url=`http://127.0.0.1:${PORT}/#/reading/domain-${d}`,run=`D${d}-${width}x${height}-${theme}`;
  await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});await send('Page.navigate',{url:url+'#'+topics[d][0]});await ready(d);await evaluate(`document.documentElement.setAttribute('data-theme','${theme}');document.body.classList.toggle('light-mode','${theme}'==='light');document.fonts.ready`);await sleep(150);
  const r=await evaluate(`(()=>{const a=document.querySelector('.reading-article[data-domain-id="${d}"]');return{domain:${d},width:innerWidth,height:innerHeight,theme:'${theme}',overflow:Math.max(0,document.documentElement.scrollWidth-innerWidth),tables:[...a.querySelectorAll('table')].map(t=>({rows:t.rows.length,columns:t.rows[0].cells.length,text:t.innerText,align:getComputedStyle(t.querySelector('th')).verticalAlign,font:getComputedStyle(t.querySelector('th')).fontFamily,leaked:t.querySelector('thead').innerText.includes('**')})),nested:a.querySelectorAll('.reading-table-wrapper .reading-table-wrapper').length,diagrams:a.querySelectorAll('[data-diagram]').length,scenarios:a.querySelectorAll('.reading-scenario-card').length,text:a.innerText};})()`);
  r.run=run;r.screenshots=[];r.navigation=[];r.captures=[];r.pass=r.overflow===0&&r.nested===0&&r.tables.length===({1:8,2:9,3:5,4:6,5:14}[d])&&r.tables.every(t=>t.align==='bottom'&&t.font.includes('Space Grotesk')&&!t.leaked);
  const captures=topics[d].map(id=>({name:id,selector:`document.getElementById('${id}')`})).concat(diag[d].map(id=>({name:'diagram-'+id,selector:`document.querySelector('.reading-article[data-domain-id="${d}"] [data-diagram="${id}"]')`})));
  captures.push({name:'table',selector:`document.querySelector('.reading-article[data-domain-id="${d}"] table')`});
  if(d===4)captures.push({name:'scenario01',selector:`document.querySelector('.reading-article[data-domain-id="4"] .reading-scenario-card')`});
  for(const c of captures){
   if(!c.name.startsWith('diagram-')&&!['table','scenario01'].includes(c.name)){await evaluate(`document.querySelector('[data-scroll-to="${c.name}"]').click()`);await sleep(160);const n=await evaluate(`({id:'${c.name}',hash:location.hash,top:document.getElementById('${c.name}').getBoundingClientRect().top})`);n.pass=n.hash.endsWith('#'+c.name)&&Math.abs(n.top)<220;r.navigation.push(n);r.pass&&=n.pass;}
   await evaluate(`(()=>{const e=${c.selector};if(!e)throw Error('Missing ${c.name}');e.scrollIntoView({block:'start',behavior:'instant'});for(let p=e.parentElement;p;p=p.parentElement)if(/auto|scroll/.test(getComputedStyle(p).overflowY)&&p.scrollHeight>p.clientHeight+1)p.scrollTop=Math.max(0,p.scrollTop-70);window.scrollBy({top:-70,behavior:'instant'});})()`);await sleep(180);
   r.captures.push(await evaluate(`(()=>{const e=${c.selector};return{name:'${c.name}',top:e.getBoundingClientRect().top,text:e.innerText||e.textContent,html:e.outerHTML};})()`));
   const file=run+'-'+c.name+'.png',im=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});fs.writeFileSync(path.join(OUT,'screenshots',file),Buffer.from(im.data,'base64'));r.screenshots.push('screenshots/'+file);
  }
  await send('Page.navigate',{url:'about:blank'});await send('Page.navigate',{url:url+'#'+topics[d][0]});await ready(d);await sleep(150);const direct=await evaluate(`({hash:location.hash,top:document.getElementById('${topics[d][0]}').getBoundingClientRect().top})`);await send('Page.reload',{ignoreCache:true});await ready(d);await sleep(150);const reload=await evaluate(`({hash:location.hash,top:document.getElementById('${topics[d][0]}').getBoundingClientRect().top})`);r.direct=direct;r.reload=reload;r.pass&&=[direct,reload].every(n=>n.hash.endsWith('#'+topics[d][0])&&Math.abs(n.top)<220);matrix.push(r);console.log(run+': '+(r.pass?'PASS':'FAIL'));
 }
 const report={date:'2026-11-04',browser:version.Browser,executable:chromePath,matrix,exceptions,consoleErrors,status:matrix.every(r=>r.pass)&&!exceptions.length&&!consoleErrors.length?'PASS':'FAIL',scope:'Representative20 states, not exhaustive all viewports or all unit continuations; semantic issues recorded separately from layout pass.'};fs.writeFileSync(path.join(OUT,'browser-qa.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({status:report.status,states:matrix.length,screenshots:matrix.reduce((n,r)=>n+r.screenshots.length,0),exceptions:exceptions.length,consoleErrors:consoleErrors.length}));if(report.status!=='PASS')process.exitCode=1;
}catch(e){fs.writeFileSync(path.join(OUT,'browser-error.txt'),e.stack);console.error(e);process.exitCode=1;}finally{ws?.close();chrome.kill();server.close();}
