import {spawn} from 'node:child_process';import fs from 'node:fs';import path from 'node:path';import os from 'node:os';
import {startServer,CDPClient,sleep,CHROME_PATH,ARTIFACTS_DIR,PORT,DEBUG_PORT} from './chrome-support.mjs';
const smoke=process.argv.includes('--smoke');
const out={mode:'settled-drawers',checks:[],screenshots:[],errors:[]};
const file=path.join(ARTIFACTS_DIR,`${out.mode}-results.json`);
const save=()=>fs.writeFileSync(file,JSON.stringify(out,null,2));
const record=(name,pass,detail={})=>{out.checks.push({name,pass,...detail});if(!pass)console.log('FAIL',name,JSON.stringify(detail));save()};
const server=await startServer();const profile=fs.mkdtempSync(path.join(os.tmpdir(),'rn-phase2-qa-'));
let chrome,cdp,sequence=0;
const anchors={1:'topic-1-1-privacy-data-protection',2:'topic-2-2-rto-rpo',3:'topic-3-2-abac',4:'topic-4-3-shared-responsibility'};
const next={1:'topic-1-2-risk-lifecycle',2:'topic-2-4-kpi-vs-kri',3:'topic-3-2-mac',4:'topic-4-1-ipv6-architecture'};
async function launch(){
 chrome=spawn(CHROME_PATH,['--headless=new',`--remote-debugging-port=${DEBUG_PORT}`,`--user-data-dir=${profile}`,'--no-first-run','--no-default-browser-check','about:blank'],{windowsHide:true});
 for(let i=0;i<100;i++){try{if((await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).ok)break}catch{}await sleep(100)}
 const tab=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new`,{method:'PUT'})).json();cdp=new CDPClient(tab.webSocketDebuggerUrl);await cdp.connect();await cdp.send('Page.enable');await cdp.send('Runtime.enable');await cdp.send('Log.enable');
 cdp.ws.addEventListener('message',event=>{const m=JSON.parse(event.data);if(m.method==='Runtime.exceptionThrown'||m.method==='Runtime.consoleAPICalled'&&m.params.type==='error'||m.method==='Log.entryAdded'&&m.params.entry.level==='error')out.errors.push(m)});
}
async function waitReader(d,origin=null){
 let ready=false;
 for(let i=0;i<500;i++){
  try{ready=await cdp.eval(`document.querySelector('.reading-article')?.dataset.domainId==='${d}'&&!!document.querySelector('.reading-article-markdown h3')${origin?`&&performance.timeOrigin!==${origin}`:''}`)}catch{}
  if(ready)break;await sleep(70);
 }
 if(!ready)throw Error(`Domain ${d} did not load`);
 await cdp.eval(`Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,2000))]).then(()=>true)`);await sleep(300);
}
async function nav(hash,d){const origin=await cdp.eval('performance.timeOrigin');await cdp.send('Page.navigate',{url:`http://127.0.0.1:${PORT}/index.html?phase2-case=${++sequence}${hash}`});await waitReader(d,origin)}
async function reload(d){const origin=await cdp.eval('performance.timeOrigin');await cdp.send('Page.reload');await waitReader(d,origin)}
const snap=()=>cdp.eval(`(()=>{const pane=document.querySelector('#reading-content-pane'),side=document.getElementById('reading-sidebar'),r=side?.getBoundingClientRect(),p=JSON.parse(localStorage.getItem('sec_cert_reading_progress_v1'));return {domain:Number(document.querySelector('.reading-article')?.dataset.domainId),y:scrollY,paneY:pane?.scrollTop,hash:location.hash,active:[...document.querySelectorAll('[aria-current="location"]')].map(e=>e.dataset.scrollTo),progress:p,history:history.state?.readingNotes,sidebar:{top:r?.top,bottom:r?.bottom,visible:side?getComputedStyle(side).visibility:null,inert:side?.inert,hidden:side?.getAttribute('aria-hidden')},focus:document.activeElement?.id}})()`);
async function key(key,code=key,modifiers=0){const virtual={Tab:9,Escape:27,Enter:13}[key];await cdp.send('Input.dispatchKeyEvent',{type:'keyDown',key,code,modifiers,windowsVirtualKeyCode:virtual});await cdp.send('Input.dispatchKeyEvent',{type:'keyUp',key,code,modifiers,windowsVirtualKeyCode:virtual})}
async function shot(name,meta){const file=`${out.mode}-${name}.png`;await cdp.screenshot(path.join(ARTIFACTS_DIR,file));out.screenshots.push({file,...meta});save()}
async function clickTopic(anchor){await cdp.eval(`(()=>{const link=document.querySelector('[data-scroll-to="${anchor}"]');if(!link)throw Error('Missing navigation target');link.click()})()`);await sleep(450)}
try{
 await launch();
 for(const [w,h] of [[768,1024],[390,844],[375,812],[320,568]])for(const theme of ['light','dark'])for(const d of [1,2,3,4]){
  const meta={d,w,h,theme};await cdp.setViewport(w,h,true);await nav(`#${anchors[d]}`,d);
  await cdp.eval(`import('./js/core/theme.js').then(m=>m.applyTheme('${theme}'))`);
  await cdp.eval(`document.getElementById('btn-toggle-sidebar').click()`);await sleep(400);
  const panel=await cdp.eval(`(()=>{const e=document.getElementById('reading-sidebar'),r=e.getBoundingClientRect();return {left:r.left,right:r.right,visible:getComputedStyle(e).visibility,inert:e.inert,focus:document.activeElement.id}})()`);
  record('settled-open-panel',Math.abs(panel.left)<1&&panel.right<=w+1&&panel.visible==='visible'&&!panel.inert&&panel.focus==='btn-sidebar-close-mobile',{...meta,panel});
  await shot(`d${d}-${w}-${theme}`,meta);await key('Escape');
  record('settled-escape-focus-return',await cdp.eval(`document.getElementById('reading-sidebar').inert&&document.activeElement.id==='btn-toggle-sidebar'`),meta);
 }
 save();console.log(JSON.stringify({checks:out.checks.length,failed:out.checks.filter(c=>!c.pass).length,screenshots:out.screenshots.length,errors:out.errors.length}));
 if(out.checks.some(c=>!c.pass)||out.errors.length)process.exitCode=1;
}catch(e){out.error=e.stack;save();console.error(e);process.exitCode=1}finally{cdp?.close();chrome?.kill();server.close()}
