import {spawn} from 'node:child_process';import fs from 'node:fs';import path from 'node:path';import os from 'node:os';
import {startServer,CDPClient,sleep,CHROME_PATH,ARTIFACTS_DIR,PORT,DEBUG_PORT} from './chrome-support.mjs';
const smoke=false;
const out=process.argv.includes('--resume')&&fs.existsSync(path.join(ARTIFACTS_DIR,'navigation-journey-results.json'))?JSON.parse(fs.readFileSync(path.join(ARTIFACTS_DIR,'navigation-journey-results.json'),'utf8')):{mode:'matrix',checks:[],screenshots:[],errors:[],completed:[]};if(out.error){out.recoveredError=out.error;delete out.error;}
const file=path.join(ARTIFACTS_DIR,`navigation-journey-results.json`);
const save=()=>fs.writeFileSync(file,JSON.stringify(out,null,2));
const record=(name,pass,detail={})=>{out.checks.push({name,pass,...detail});if(!pass)console.log('FAIL',name,JSON.stringify(detail));save()};
const server=await startServer();const profile=fs.mkdtempSync(path.join(os.tmpdir(),'rn-p3d-navigation-'));
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
async function nav(hash,d){const origin=await cdp.eval('performance.timeOrigin');await cdp.send('Page.navigate',{url:`http://127.0.0.1:${PORT}/index.html?phase3b3-navigation=${++sequence}${hash}`});await waitReader(d,origin)}
async function reload(d){const origin=await cdp.eval('performance.timeOrigin');await cdp.send('Page.reload');await waitReader(d,origin)}
const snap=()=>cdp.eval(`(()=>{const pane=document.querySelector('#reading-content-pane'),side=document.getElementById('reading-sidebar'),r=side?.getBoundingClientRect(),p=JSON.parse(localStorage.getItem('sec_cert_reading_progress_v1'));return {domain:Number(document.querySelector('.reading-article')?.dataset.domainId),y:scrollY,paneY:pane?.scrollTop,hash:location.hash,active:[...document.querySelectorAll('[aria-current="location"]')].map(e=>e.dataset.scrollTo),progress:p,history:history.state?.readingNotes,sidebar:{top:r?.top,bottom:r?.bottom,visible:side?getComputedStyle(side).visibility:null,inert:side?.inert,hidden:side?.getAttribute('aria-hidden')},focus:document.activeElement?.id}})()`);
async function key(key,code=key,modifiers=0){const virtual={Tab:9,Escape:27,Enter:13}[key];await cdp.send('Input.dispatchKeyEvent',{type:'keyDown',key,code,modifiers,windowsVirtualKeyCode:virtual,...(key==='Enter'?{text:'\r',unmodifiedText:'\r'}:{})});await cdp.send('Input.dispatchKeyEvent',{type:'keyUp',key,code,modifiers,windowsVirtualKeyCode:virtual})}
async function shot(name,meta){const file=`${out.mode}-${name}.png`;await cdp.screenshot(path.join(ARTIFACTS_DIR,file));out.screenshots.push({file,...meta});save()}
async function clickTopic(anchor){await cdp.eval(`(()=>{const link=document.querySelector('[data-scroll-to="${anchor}"]');if(!link)throw Error('Missing navigation target');link.click()})()`);await sleep(450)}
try{
 await launch();out.chrome=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).json();
 const viewports=[[1920,1080],[1366,768],[1024,768],[768,1024],[390,844],[375,812],[320,568]];
 for(const [w,h] of viewports)for(const theme of smoke?['light']:['light','dark'])for(const d of smoke&&w===390?[2]:[1,2,3,4]){
  const label=`d${d}-${w}-${theme}`,meta={d,w,h,theme};
  if(out.completed.includes(label))continue;for(const k of ['checks','screenshots'])out[k]=out[k].filter(x=>!(x.d===d&&x.w===w&&x.theme===theme));
  await cdp.setViewport(w,h,w<=840);await nav(`#${anchors[d]}`,d);await cdp.eval(`import('./js/core/theme.js').then(m=>m.applyTheme('${theme}'))`);await sleep(250);
  const deep=await cdp.eval(`({top:document.getElementById('${anchors[d]}').getBoundingClientRect().top,hash:location.hash,domain:document.querySelector('.reading-article').dataset.domainId})`);
  record('explicit-deep-link',Math.abs(deep.top)<=100&&deep.hash===`#${anchors[d]}`,{...meta,deep});
  const legacyY=await cdp.eval(`document.getElementById('${anchors[d]}').getBoundingClientRect().top+scrollY+123`);
  const legacy={schemaVersion:1,lastDomainId:d,lastTopicId:anchors[d],lastScrollY:legacyY,updatedAt:'2026-10-31T00:00:00Z'};
  const seed=await cdp.send('Page.addScriptToEvaluateOnNewDocument',{source:`localStorage.setItem('sec_cert_reading_progress_v1',JSON.stringify(${JSON.stringify(legacy)}))`});
  await nav('#reading-notes',d);await cdp.send('Page.removeScriptToEvaluateOnNewDocument',{identifier:seed.identifier});const legacyAfter=await snap();record('legacy-global-only-v1-actual-scroll-resume',legacyAfter.domain===d&&Math.abs(legacyAfter.y-legacyY)<=8,{...meta,legacy,legacyAfter,errorPx:legacyAfter.y-legacyY});
  await nav(`#${anchors[d]}`,d);
  await cdp.eval(`scrollTo({top:scrollY+350,behavior:'instant'})`);await sleep(500);const before=await snap();await shot(`${label}-mid`,meta);
  await reload(d);const after=await snap();record('reload-position',Math.abs(before.y-after.y)<=8&&before.domain===after.domain&&before.hash===after.hash,{...meta,before,after,errorPx:after.y-before.y});await shot(`${label}-reload`,meta);
  record('subsection-and-objective-state',after.active.includes(after.progress?.domains[d]?.lastTopicId)&&await cdp.eval(`(()=>{const a=document.querySelector('[aria-current="location"]');return !!a&&!a.closest('[hidden]')})()`),{...meta,active:after.active});
  if(w>840)record('desktop-sidebar-visible-at-reading-position',after.sidebar.top>=0&&after.sidebar.bottom>0,{...meta,sidebar:after.sidebar});
  await clickTopic(next[d]);const target=await snap();const targetTop=await cdp.eval(`document.getElementById('${next[d]}').getBoundingClientRect().top`);
  record('new-subsection-start',Math.abs(targetTop)<=100&&target.hash===`#${next[d]}`,{...meta,targetTop,target});
  await cdp.eval('history.back()');await sleep(600);const back=await snap();record('history-back-position',Math.abs(back.y-before.y)<=8&&back.hash===before.hash,{...meta,errorPx:back.y-before.y,back});
  await cdp.eval('history.forward()');await sleep(600);const forward=await snap();record('history-forward-position',Math.abs(forward.y-target.y)<=8&&forward.hash===target.hash,{...meta,errorPx:forward.y-target.y,forward});
  await cdp.eval(`scrollBy(0,177)`);await sleep(400);const resumeBefore=await snap();await cdp.eval(`document.getElementById('btn-reading-back').click()`);await sleep(100);
  const elsewhere=await cdp.eval(`({reader:!!document.querySelector('.reading-screen'),native:history.scrollRestoration,entry:!!document.querySelector('.btn-reading-entry')})`);
  record('reader-disposed-on-exit',!elsewhere.reader&&elsewhere.native==='auto'&&elsewhere.entry,{...meta,elsewhere});
  await cdp.eval(`document.querySelector('.btn-reading-entry').click()`);await waitReader(d);const resumed=await snap();record('overview-read-entry-resume',Math.abs(resumed.y-resumeBefore.y)<=8&&resumed.domain===d,{...meta,errorPx:resumed.y-resumeBefore.y,resumed});
  // Switching away and scrolling must not mutate the inactive domain's saved record.
  const other=d===4?1:d+1;
  await cdp.eval(`document.querySelector('[data-scroll-to="${anchors[other]}"]').click()`);await waitReader(other);
  const inactiveBefore=(await snap()).progress.domains[d];
  await cdp.eval('scrollBy(0,100)');await sleep(400);
  const cross=await snap();record('inactive-domain-progress-preserved',JSON.stringify(cross.progress.domains[d])===JSON.stringify(inactiveBefore)&&Math.abs(inactiveBefore.lastScrollY-resumed.y)<=8&&cross.domain===other,{...meta,other,inactiveBefore,inactiveAfter:cross.progress.domains[d]});
  await cdp.eval('history.back()');await waitReader(d);const crossBack=await snap();record('cross-domain-back',crossBack.domain===d&&Math.abs(crossBack.y-resumed.y)<=8,{...meta,errorPx:crossBack.y-resumed.y,crossBack});
  if(w<=840){
   const closed=await snap();record('closed-mobile-inert',closed.sidebar.inert&&closed.sidebar.hidden==='true'&&closed.sidebar.visible==='hidden',{...meta,closed});
   await cdp.eval(`document.getElementById('btn-toggle-sidebar').focus({preventScroll:true})`);const hiddenTargets=[];
   for(let i=0;i<7;i++){await key('Tab');if(await cdp.eval(`!!document.activeElement.closest('#reading-sidebar')`))hiddenTargets.push(await cdp.eval('document.activeElement.outerHTML'))}
   record('closed-mobile-tab-exclusion',hiddenTargets.length===0,{...meta,hiddenTargets});
   await cdp.eval(`document.getElementById('btn-toggle-sidebar').click()`);await sleep(50);const opened=await snap();
   record('open-mobile-focus-entry',!opened.sidebar.inert&&opened.focus==='btn-sidebar-close-mobile'&&await cdp.eval(`document.getElementById('btn-toggle-sidebar').getAttribute('aria-expanded')==='true'`),{...meta,opened});await shot(`${label}-drawer-open`,meta);
   await key('Tab');const tabIn=await cdp.eval(`!!document.activeElement.closest('#reading-sidebar')`);await key('Tab','Tab',8);const shiftBack=await cdp.eval(`document.activeElement.id==='btn-sidebar-close-mobile'`);record('mobile-tab-and-shift-tab',tabIn&&shiftBack,meta);
   await key('Escape');const escaped=await snap();record('escape-closes-and-returns-focus',escaped.sidebar.inert&&escaped.focus==='btn-toggle-sidebar'&&await cdp.eval(`document.getElementById('btn-toggle-sidebar').getAttribute('aria-expanded')==='false'`),{...meta,escaped});
   await cdp.eval(`document.querySelector('#reading-sidebar button').focus()`);record('hidden-programmatic-focus-excluded',!await cdp.eval(`!!document.activeElement.closest('#reading-sidebar')`),meta);
   await cdp.eval(`document.getElementById('btn-toggle-sidebar').click()`);await clickTopic(anchors[d]);record('selecting-topic-closes-drawer',await cdp.eval(`document.getElementById('reading-sidebar').inert&&!document.activeElement.closest('#reading-sidebar')`),meta);
  }
  // Collapse on desktop, open on mobile, then return: desktop preference is retained.
  await cdp.setViewport(1366,768);await sleep(80);await cdp.eval(`(()=>{const s=document.getElementById('reading-sidebar');if(!s.inert)document.getElementById('btn-toggle-sidebar').click()})()`);
  await cdp.setViewport(390,844,true);await sleep(80);await cdp.eval(`document.getElementById('btn-toggle-sidebar').click()`);await sleep(50);
  const mobileOpen=await cdp.eval(`(()=>{const s=document.getElementById('reading-sidebar');return !s.inert&&getComputedStyle(s).display!=='none'&&getComputedStyle(s).visibility==='visible'})()`);
  await cdp.setViewport(1366,768);await sleep(80);const desktopCollapsed=await cdp.eval(`document.getElementById('reading-sidebar').inert`);
  await cdp.eval(`document.getElementById('btn-toggle-sidebar').click()`);await cdp.setViewport(390,844,true);await sleep(80);const mobileClosed=await cdp.eval(`document.getElementById('reading-sidebar').inert`);
  record('responsive-collapse-and-drawer',mobileOpen&&desktopCollapsed&&mobileClosed,{...meta,mobileOpen,desktopCollapsed,mobileClosed});
  out.completed.push(label);save();
  console.log('CASE',label,'checks',out.checks.length,'failed',out.checks.filter(c=>!c.pass).length);
 }
 save();console.log('QA',JSON.stringify({checks:out.checks.length,failed:out.checks.filter(c=>!c.pass).length,screenshots:out.screenshots.length,errors:out.errors.length}));
 if(out.checks.some(c=>!c.pass)||out.errors.length)process.exitCode=1;
}catch(e){out.error=e.stack;save();console.error(e);process.exitCode=1}finally{cdp?.close();chrome?.kill();server.close();await sleep(500)}
