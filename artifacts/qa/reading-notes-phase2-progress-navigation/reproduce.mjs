import {spawn} from 'node:child_process';
import fs from 'node:fs';import os from 'node:os';import path from 'node:path';
import {startServer,CDPClient,sleep,CHROME_PATH,ARTIFACTS_DIR,PORT,DEBUG_PORT} from './chrome-support.mjs';
const phase=process.argv.includes('--baseline')?'before':'after';
const out={checks:[],errors:[]};const server=await startServer();
const profile=fs.mkdtempSync(path.join(os.tmpdir(),'rn-phase2-before-'));
const chrome=spawn(CHROME_PATH,['--headless=new',`--remote-debugging-port=${DEBUG_PORT}`,`--user-data-dir=${profile}`,'--no-first-run','--no-default-browser-check','about:blank'],{windowsHide:true});let cdp;
try{
 for(let i=0;i<60;i++){try{if((await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).ok)break}catch{}await sleep(100)}
 const tab=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new`,{method:'PUT'})).json();cdp=new CDPClient(tab.webSocketDebuggerUrl);await cdp.connect();await cdp.send('Page.enable');await cdp.send('Runtime.enable');
 cdp.ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.method==='Runtime.exceptionThrown')out.errors.push(m.params)});
 const wait=async()=>{for(let i=0;i<500;i++){await sleep(80);if(await cdp.eval(`!!document.querySelector('.reading-article-markdown h3')`))break}if(!await cdp.eval(`!!document.querySelector('.reading-article-markdown h3')`))throw Error('Reader did not finish loading');await cdp.eval(`document.fonts.ready.then(()=>true)`);await sleep(700)};
 const snap=()=>cdp.eval(`({domain:document.querySelector('.reading-article')?.dataset.domainId,y:scrollY,hash:location.hash,active:[...document.querySelectorAll('.reading-nav-topic-link.active')].map(e=>e.dataset.scrollTo),progress:JSON.parse(localStorage.getItem('sec_cert_reading_progress_v1'))})`);
 const anchors=['topic-1-1-privacy-data-protection','topic-2-2-rto-rpo','topic-3-2-abac','topic-4-3-shared-responsibility'];
 for(let d=1;d<=4;d++){
  await cdp.setViewport(1366,768);await cdp.send('Page.navigate',{url:`http://127.0.0.1:${PORT}/index.html?phase2-before=${d}#${anchors[d-1]}`});await wait();
  await cdp.eval(`scrollBy(0,620)`);await sleep(700);const before=await snap();await cdp.screenshot(path.join(ARTIFACTS_DIR,`${phase}-d${d}-mid.png`));
  await cdp.send('Page.reload');await wait();const after=await snap();await cdp.screenshot(path.join(ARTIFACTS_DIR,`${phase}-d${d}-reload.png`));out.checks.push({name:'reload',d,before,after,errorPx:after.y-before.y});
 }
 await cdp.setViewport(390,844,true);await cdp.send('Page.navigate',{url:`http://127.0.0.1:${PORT}/index.html?phase2-mobile#topic-2-2-rto-rpo`});await wait();
 await cdp.eval(`document.getElementById('btn-toggle-sidebar').focus()`);
 const sequence=[];
 for(let i=0;i<8;i++){await cdp.send('Input.dispatchKeyEvent',{type:'keyDown',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});await cdp.send('Input.dispatchKeyEvent',{type:'keyUp',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});sequence.push(await cdp.eval(`(()=>{const e=document.activeElement,r=e.getBoundingClientRect();return {id:e.id,cls:e.className,text:e.textContent.slice(0,70),inSidebar:!!e.closest('#reading-sidebar'),x:r.x,y:r.y,inert:document.getElementById('reading-sidebar').inert}})()`))}
 out.checks.push({name:'closed-mobile-keyboard',sequence});await cdp.screenshot(path.join(ARTIFACTS_DIR,`${phase}-closed-mobile-focus.png`));
 await cdp.eval(`document.getElementById('btn-toggle-sidebar').click()`);await cdp.send('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});await sleep(250);out.checks.push({name:'mobile-escape',result:await cdp.eval(`({open:document.getElementById('reading-layout').classList.contains('mobile-sidebar-open'),active:document.activeElement.id,expanded:document.getElementById('btn-toggle-sidebar').getAttribute('aria-expanded')})`)});
 // Repeat route remounts and observe inactive-domain mutations, not just a key's existence.
 await cdp.setViewport(1366,768);for(const d of [1,3,2,4]){await cdp.eval(`location.hash='${anchors[d-1]}'`);await wait()}
 const inactiveBefore=await snap();await cdp.eval(`scrollBy(0,333)`);await sleep(750);const inactiveAfter=await snap();out.checks.push({name:'remount-inactive-progress',before:inactiveBefore,after:inactiveAfter});
 console.log(JSON.stringify({reloads:out.checks.filter(c=>c.name==='reload').map(c=>({d:c.d,errorPx:c.errorPx})),hiddenFocus:sequence.filter(x=>x.inSidebar).length,escape:out.checks.find(c=>c.name==='mobile-escape').result}));
}catch(e){out.error=e.stack;console.error(e);process.exitCode=1}finally{fs.writeFileSync(path.join(ARTIFACTS_DIR,`${phase}-reproduction.json`),JSON.stringify(out,null,2));cdp?.close();chrome.kill();server.close()}

