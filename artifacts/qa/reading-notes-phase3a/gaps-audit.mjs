import {spawn} from 'node:child_process';import fs from 'node:fs';import path from 'node:path';import os from 'node:os';
import {startServer,CDPClient,sleep,CHROME_PATH,ARTIFACTS_DIR,PORT,DEBUG_PORT} from './chrome-support.mjs';
const server=await startServer(),out={checks:[],screenshots:[],errors:[]};let cdp;
const chrome=spawn(CHROME_PATH,['--headless=new',`--remote-debugging-port=${DEBUG_PORT}`,`--user-data-dir=${fs.mkdtempSync(path.join(os.tmpdir(),'rn-p3-focus-'))}`,'--no-first-run','--no-default-browser-check','about:blank'],{windowsHide:true});
const save=()=>fs.writeFileSync(path.join(ARTIFACTS_DIR,'gaps-results.json'),JSON.stringify(out,null,2));
try{
 for(let i=0;i<100;i++){try{if((await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).ok)break}catch{}await sleep(100)}
 const tab=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new`,{method:'PUT'})).json();cdp=new CDPClient(tab.webSocketDebuggerUrl);await cdp.connect();await cdp.send('Page.enable');await cdp.send('Runtime.enable');
 cdp.ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.method==='Runtime.exceptionThrown')out.errors.push(m.params)});

 for(const w of [1024,390])for(const theme of ['light','dark']){
  await cdp.setViewport(w,768,w<840);await cdp.send('Page.navigate',{url:`http://127.0.0.1:${PORT}/index.html?grc-bounds#topic-2-1-frameworks-standards`});
  for(let i=0;i<500;i++){await sleep(40);if(await cdp.eval(`document.querySelector('.reading-article')?.dataset.domainId==='2'&&!!document.querySelector('.reading-article-markdown h3')`))break}
  await cdp.eval(`import('./js/core/theme.js').then(m=>m.applyTheme('${theme}'))`);await cdp.eval('document.fonts.ready.then(()=>true)');await sleep(350);
  const measured=await cdp.eval(`(()=>{const a=document.getElementById('topic-2-1-frameworks-standards'),wrap=[...document.querySelectorAll('.reading-table-wrapper')].find(e=>a.compareDocumentPosition(e)&4),t=wrap.querySelector('table');wrap.scrollIntoView({behavior:'instant'});return {tableWidth:t.getBoundingClientRect().width,client:wrap.clientWidth,scroll:wrap.scrollWidth,cells:[...t.querySelectorAll('tr>*:last-child')].map(e=>{const r=e.getBoundingClientRect(),range=document.createRange();range.selectNodeContents(e);return {text:e.textContent,cellRight:r.right,textRight:Math.max(...[...range.getClientRects()].map(r=>r.right)),padding:getComputedStyle(e).padding,white:getComputedStyle(e).whiteSpace}})}})()`);
  out.checks.push({width:w,theme,...measured});await cdp.eval(`(()=>{const a=document.getElementById('topic-2-1-frameworks-standards'),wrap=[...document.querySelectorAll('.reading-table-wrapper')].find(e=>a.compareDocumentPosition(e)&4);wrap.scrollLeft=wrap.scrollWidth})()`);const file=`grc-scroll-end-${w}-${theme}.png`;await cdp.screenshot(path.join(ARTIFACTS_DIR,file));out.screenshots.push({file,width:w,theme});save();
 }
 await cdp.send('Page.addScriptToEvaluateOnNewDocument',{source:`Object.defineProperty(window,'katex',{get:()=>undefined,set:()=>{},configurable:true})`});
 await cdp.send('Page.navigate',{url:`http://127.0.0.1:${PORT}/index.html?math-fallback#topic-1-2-quantitative-risk`});
 for(let i=0;i<500;i++){await sleep(40);if(await cdp.eval(`document.querySelector('.reading-article')?.dataset.domainId==='1'&&!!document.querySelector('.reading-article-markdown h3')`))break}
 out.checks.push({name:'forced-katex-unavailable',labels:await cdp.eval(`[...document.querySelectorAll('[role="math"]')].map(e=>({label:e.getAttribute('aria-label'),text:e.textContent}))`)});save();console.log('COMPLETE',out.checks.length,out.screenshots.length,out.errors.length);
}catch(e){out.error=e.stack;save();console.error(e);process.exitCode=1}finally{cdp?.close();chrome.kill();server.close()}
