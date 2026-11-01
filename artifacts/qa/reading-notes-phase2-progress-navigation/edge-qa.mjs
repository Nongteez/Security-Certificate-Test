import {spawn} from 'node:child_process';import fs from 'node:fs';import path from 'node:path';import os from 'node:os';
import {startServer,CDPClient,sleep,CHROME_PATH,ARTIFACTS_DIR,PORT,DEBUG_PORT} from './chrome-support.mjs';
const smoke=process.argv.includes('--smoke');
const out={mode:'edge',checks:[],screenshots:[],errors:[]};
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
 await launch();await cdp.setViewport(1366,768);await nav(`#${anchors[2]}`,2);
 await cdp.eval('scrollBy(0,370)');await sleep(450);let prior=await snap();
 // Seed on the new document so the outgoing pagehide flush cannot overwrite the fixture.
 const legacy=structuredClone(prior.progress);for(const entry of Object.values(legacy.domains))delete entry.lastAnchorOffset;
 legacy.domains[4]={domainId:4,lastTopicId:'topic-4-1-osi-model',lastObjectiveId:'4.1',lastScrollY:1122,updatedAt:'2026-01-01T00:00:00Z'};
 const seed=await cdp.send('Page.addScriptToEvaluateOnNewDocument',{source:`localStorage.setItem('sec_cert_reading_progress_v1',${JSON.stringify(JSON.stringify(legacy))})`});
 await nav('#reading-notes',2);await cdp.send('Page.removeScriptToEvaluateOnNewDocument',{identifier:seed.identifier});let current=await snap();
 record('legacy-v1-rendered-position',Math.abs(current.y-prior.y)<=8&&current.progress.schemaVersion===1&&current.progress.domains[4].lastScrollY===1122,{prior,current});
 // A copied subsection URL is explicit even when its saved context is farther down.
 await nav(`#${anchors[2]}`,2);let top=await cdp.eval(`document.getElementById('${anchors[2]}').getBoundingClientRect().top`);record('copied-saved-subsection-is-explicit',Math.abs(top)<=100,{top});
 await cdp.eval('scrollBy(0,277)');const rapid=await snap();await reload(2);current=await snap();record('reload-flush-before-debounce',Math.abs(current.y-rapid.y)<=8,{rapid,current});
 await cdp.eval('scrollBy(0,173)');prior=await snap();await cdp.eval(`document.getElementById('btn-reading-back').click();document.querySelector('.btn-reading-entry').click()`);await waitReader(2);current=await snap();record('exit-flush-before-debounce',Math.abs(current.y-prior.y)<=8,{prior,current});
 // Two actual reader-created entries with an identical hash still restore independently.
 await cdp.eval('scrollBy(0,123)');await sleep(400);const sameHashBefore=await snap();await clickTopic(anchors[2]);await cdp.eval('scrollBy(0,80)');await sleep(400);const sameHashAfter=await snap();
 await cdp.eval('history.back()');await sleep(500);current=await snap();record('same-hash-history-back',Math.abs(current.y-sameHashBefore.y)<=8,{expected:sameHashBefore,current});
 await cdp.eval('history.forward()');await sleep(500);current=await snap();record('same-hash-history-forward',Math.abs(current.y-sameHashAfter.y)<=8,{expected:sameHashAfter,current});
 // Close Chrome cleanly, then reopen the same isolated profile and generic reading entry.
 prior=await snap();const exited=new Promise(resolve=>chrome.once('exit',resolve));await cdp.send('Browser.close').catch(()=>{});await Promise.race([exited,sleep(2500)]);cdp.close();await launch();await cdp.setViewport(1366,768);await nav('#reading-notes',2);current=await snap();record('browser-close-reopen-resume',Math.abs(current.y-prior.y)<=8&&current.progress.domains[4].lastScrollY===1122,{prior,current});
 // Cancel the pending restore with a trusted wheel gesture while layout readiness is delayed.
 const delayed=await cdp.send('Page.addScriptToEvaluateOnNewDocument',{source:`const pending=new Promise(resolve=>{window.__releaseReadingFonts=resolve});Object.defineProperty(document.fonts,'ready',{get:()=>pending})`});
 await cdp.send('Page.navigate',{url:`http://127.0.0.1:${PORT}/index.html?cancel-restore=${++sequence}#${anchors[4]}`});
 let ready=false;for(let i=0;i<500;i++){try{ready=await cdp.eval(`document.querySelector('.reading-article')?.dataset.domainId==='4'&&!!document.querySelector('.reading-article-markdown h3')`)}catch{}if(ready)break;await sleep(30)}
 if(!ready)throw Error('Delayed-layout article did not render');
 await cdp.send('Input.dispatchMouseEvent',{type:'mouseWheel',x:800,y:350,deltaX:0,deltaY:460});await sleep(100);const interrupted=await snap();await cdp.eval('window.__releaseReadingFonts()');await sleep(500);current=await snap();
 record('user-wheel-cancels-delayed-restoration',interrupted.y>0&&Math.abs(current.y-interrupted.y)<=8,{interrupted,current});await cdp.send('Page.removeScriptToEvaluateOnNewDocument',{identifier:delayed.identifier});
 // Delayed Domain 2 content must not replace a newer Domain 3 navigation.
 let paused=null;const onFetch=e=>{const m=JSON.parse(e.data);if(m.method==='Fetch.requestPaused')paused=m.params.requestId};cdp.ws.addEventListener('message',onFetch);
 await cdp.send('Fetch.enable',{patterns:[{urlPattern:'*domain-2.md',requestStage:'Request'}]});await cdp.send('Page.navigate',{url:`http://127.0.0.1:${PORT}/index.html?stale-request=${++sequence}#${anchors[2]}`});
 for(let i=0;i<500&&!paused;i++)await sleep(30);if(!paused)throw Error('Expected held Domain 2 request');
 await cdp.eval(`document.querySelector('[data-select-domain="3"]').click()`);await waitReader(3);prior=await snap();await cdp.send('Fetch.continueRequest',{requestId:paused});await sleep(400);current=await snap();record('obsolete-content-request-does-not-restore',current.domain===3&&Math.abs(current.y-prior.y)<=8,{prior,current});await cdp.send('Fetch.disable');cdp.ws.removeEventListener('message',onFetch);
 // Modal behavior is intentionally not imposed on a navigation disclosure.
 await cdp.setViewport(390,844,true);await sleep(100);await cdp.eval(`document.getElementById('btn-toggle-sidebar').click()`);
 let ax=await cdp.send('Accessibility.getFullAXTree');const exposed=ax.nodes.some(n=>!n.ignored&&n.name?.value==='Domain Navigation');await cdp.eval(`document.getElementById('btn-sidebar-close-mobile').click()`);ax=await cdp.send('Accessibility.getFullAXTree');fs.writeFileSync(path.join(ARTIFACTS_DIR,'closed-mobile-accessibility-tree.json'),JSON.stringify(ax,null,2));record('closed-sidebar-excluded-from-accessibility-tree',exposed&&!ax.nodes.some(n=>!n.ignored&&n.name?.value==='Domain Navigation'));
 await cdp.send('Page.bringToFront');
 await cdp.eval(`window.__focusTrace=[];for(const type of ['focusin','focusout'])document.addEventListener(type,e=>__focusTrace.push({type,target:e.target.outerHTML?.slice(0,150),related:e.relatedTarget?.outerHTML?.slice(0,150)}),true);document.getElementById('btn-toggle-sidebar').click();[...document.querySelectorAll('#reading-sidebar a,#reading-sidebar button')].filter(e=>e.getClientRects().length&&getComputedStyle(e).visibility!=='hidden'&&!e.disabled).at(-1).focus()`);const beforeTab=await cdp.eval(`({focus:document.activeElement.outerHTML.slice(0,200),hasFocus:document.hasFocus()})`);await key('Tab');await sleep(100);current=await snap();record('nonmodal-tab-exit-closes-overlay',current.sidebar.inert&&!await cdp.eval(`!!document.activeElement.closest('#reading-sidebar')`),{current,beforeTab,trace:await cdp.eval('__focusTrace')});
 await cdp.eval(`document.getElementById('btn-toggle-sidebar').click();document.getElementById('reading-backdrop').click()`);record('backdrop-close-focus-return',(await snap()).focus==='btn-toggle-sidebar');
 await cdp.setViewport(1366,768);await nav(`#${anchors[3]}`,3);const objective=await cdp.eval(`(()=>{const b=document.querySelector('[data-toggle-obj="3.2"]');b.click();const list=document.querySelector('[data-objective-id="3.2"] .reading-nav-topics');list.querySelector('a').focus();return {hidden:list.hidden,display:getComputedStyle(list).display,focused:!!document.activeElement.closest('[hidden]')};})()`);record('collapsed-objective-focus-exclusion',objective.hidden&&objective.display==='none'&&!objective.focused,{objective});
 // No reader handlers should continue writing after a route replaces its root.
 await cdp.eval(`document.getElementById('btn-reading-back').click()`);const offscreenBefore=await cdp.eval(`localStorage.getItem('sec_cert_reading_progress_v1')`);await cdp.eval('scrollBy(0,100);dispatchEvent(new Event("resize"))');await sleep(500);record('disposed-reader-does-not-save-other-screen',await cdp.eval(`localStorage.getItem('sec_cert_reading_progress_v1')`)===offscreenBefore);
 // A newer request within the same loading article must survive the original fetch callback.
 paused=null;cdp.ws.addEventListener('message',onFetch);await cdp.send('Fetch.enable',{patterns:[{urlPattern:'*domain-2.md',requestStage:'Request'}]});await cdp.send('Page.navigate',{url:`http://127.0.0.1:${PORT}/index.html?same-domain-load=${++sequence}#${anchors[2]}`});
 for(let i=0;i<500&&!paused;i++)await sleep(30);if(!paused)throw Error('Expected held same-domain request');await cdp.eval(`document.querySelector('[data-scroll-to="${next[2]}"]').click()`);await sleep(150);await cdp.send('Fetch.continueRequest',{requestId:paused});await cdp.send('Fetch.disable');cdp.ws.removeEventListener('message',onFetch);await waitReader(2);top=await cdp.eval(`document.getElementById('${next[2]}').getBoundingClientRect().top`);current=await snap();record('latest-same-domain-target-after-async-load',Math.abs(top)<=100&&current.hash===`#${next[2]}`,{top,current});
 // performance.navigation.type remains reload after later SPA navigation; a fresh hash is still explicit.
 await nav(`#${anchors[3]}`,3);await cdp.eval('scrollBy(0,360)');await sleep(400);await nav(`#${anchors[2]}`,2);await reload(2);await cdp.eval(`location.hash='${anchors[3]}'`);await waitReader(3);top=await cdp.eval(`document.getElementById('${anchors[3]}').getBoundingClientRect().top`);record('post-reload-fresh-hash-is-explicit',Math.abs(top)<=100,{top,current:await snap()});
 await nav('#obj-2-2',2);top=await cdp.eval(`document.getElementById('obj-2-2').getBoundingClientRect().top`);record('direct-objective-url',Math.abs(top)<=100,{top,current:await snap()});
 await nav('#/reading/domain-4#topic-4-1-ipv6-architecture',4);top=await cdp.eval(`document.getElementById('topic-4-1-ipv6-architecture').getBoundingClientRect().top`);record('path-prefixed-subsection-url',Math.abs(top)<=100,{top,current:await snap()});
 await nav(`#${anchors[3]}`,3);await cdp.eval(`document.querySelector('[data-toggle-obj="3.2"]').click();document.querySelector('[data-toggle-domain="3"]').click();location.hash='${next[3]}'`);await sleep(500);const expanded=await cdp.eval(`({domain:document.querySelector('[data-domain-id="3"] .reading-nav-sub-tree').hidden,objective:document.querySelector('[data-objective-id="3.2"] .reading-nav-topics').hidden,active:document.querySelector('[aria-current="location"]')?.getAttribute('data-scroll-to')})`);record('deep-link-expands-collapsed-ancestors',!expanded.domain&&!expanded.objective&&expanded.active===next[3],{expanded});
 for(const width of [1366,390]){
  await cdp.setViewport(width,width===390?844:768,width===390);await nav('#topic-3-2-models-matrix',3);
  await cdp.eval(`(()=>{const h=document.getElementById('topic-3-2-models-matrix'),hy=h.getBoundingClientRect().top+scrollY;const table=[...document.querySelectorAll('.reading-article-markdown table')].find(e=>e.getBoundingClientRect().top+scrollY>hy);scrollTo({top:scrollY+table.getBoundingClientRect().top+90,behavior:'instant'})})()`);await sleep(450);prior=await snap();await reload(3);current=await snap();record('long-table-mid-position',Math.abs(current.y-prior.y)<=8,{width,prior,current});await shot(`table-reload-${width}`,{width,domain:3});
 }
 console.log('EDGE',JSON.stringify({checks:out.checks.length,failed:out.checks.filter(c=>!c.pass).length,errors:out.errors.length}));save();if(out.checks.some(c=>!c.pass)||out.errors.length)process.exitCode=1;
}catch(e){out.error=e.stack;save();console.error(e);process.exitCode=1}finally{cdp?.close();chrome?.kill();server.close()}
