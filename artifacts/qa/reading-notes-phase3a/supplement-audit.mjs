import {spawn} from 'node:child_process';import fs from 'node:fs';import path from 'node:path';import os from 'node:os';
import {startServer,CDPClient,sleep,CHROME_PATH,ARTIFACTS_DIR,PORT,DEBUG_PORT} from './chrome-support.mjs';
const server=await startServer(),out={checks:[],screenshots:[],errors:[]};let cdp;
const chrome=spawn(CHROME_PATH,['--headless=new',`--remote-debugging-port=${DEBUG_PORT}`,`--user-data-dir=${fs.mkdtempSync(path.join(os.tmpdir(),'rn-p3-focus-'))}`,'--no-first-run','--no-default-browser-check','about:blank'],{windowsHide:true});
const save=()=>fs.writeFileSync(path.join(ARTIFACTS_DIR,'supplement-results.json'),JSON.stringify(out,null,2));
try{
 for(let i=0;i<100;i++){try{if((await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).ok)break}catch{}await sleep(100)}
 const tab=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new`,{method:'PUT'})).json();cdp=new CDPClient(tab.webSocketDebuggerUrl);await cdp.connect();await cdp.send('Page.enable');await cdp.send('Runtime.enable');
 cdp.ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.method==='Runtime.exceptionThrown')out.errors.push(m.params)});

 for(const theme of ['light','dark'])for(const d of [1,2,3,4]){
  const w=683,h=384;await cdp.send('Emulation.setDeviceMetricsOverride',{width:w,height:h,deviceScaleFactor:2,mobile:false});
  await cdp.send('Page.navigate',{url:`http://127.0.0.1:${PORT}/index.html?zoom-equivalent#${d===1?'topic-1-2-quantitative-risk':d===2?'topic-2-4-memory-aid':d===3?'topic-3-1-jml-lifecycle':'topic-4-1-osi-model'}`});
  for(let i=0;i<500;i++){await sleep(40);if(await cdp.eval(`document.querySelector('.reading-article')?.dataset.domainId==='${d}'&&!!document.querySelector('.reading-article-markdown h3')`))break}
  await cdp.eval(`import('./js/core/theme.js').then(m=>m.applyTheme('${theme}'))`);await cdp.eval('document.fonts.ready.then(()=>true)');await sleep(350);
  const data=await cdp.eval(`({width:innerWidth,pageWidth:document.documentElement.scrollWidth,language:document.documentElement.lang,articleLang:document.querySelector('.reading-article-markdown').getAttribute('lang'),math:[...document.querySelectorAll('[role="math"]')].map(e=>({label:e.getAttribute('aria-label'),text:e.textContent})),currency:[...document.querySelectorAll('p')].filter(e=>e.textContent.includes('\\$')).map(e=>e.textContent),tables:[...document.querySelectorAll('.reading-table-wrapper')].map(e=>({client:e.clientWidth,scroll:e.scrollWidth}))})`);
  out.checks.push({domain:d,theme,kind:'200%-equivalent-reflow',cssWidth:w,physicalWidth:1366,...data});
  const file=`zoom-equivalent-d${d}-${theme}.png`;await cdp.screenshot(path.join(ARTIFACTS_DIR,file));out.screenshots.push({file,domain:d,theme,width:w,height:h,deviceScaleFactor:2,kind:'200%-equivalent-reflow'});save();
  if(d===1){
   const bounds=await cdp.eval(`(()=>{const e=document.querySelector('.reading-definitions'),a=document.getElementById('topic-1-2-quantitative-risk'),next=document.getElementById('topic-1-2-risk-lifecycle'),pane=document.getElementById('reading-content-pane'),r=pane.getBoundingClientRect();return {x:r.x,y:a.getBoundingClientRect().top+scrollY,width:r.width,height:next.getBoundingClientRect().top-a.getBoundingClientRect().top,scale:1}})()`);
   const shot=await cdp.send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:bounds});const file=`direct-P3-TXT-002-math-${theme}.png`;fs.writeFileSync(path.join(ARTIFACTS_DIR,file),Buffer.from(shot.data,'base64'));out.screenshots.push({file,domain:d,theme,kind:'currency-and-math',bounds});save();
  }
 }
 console.log('COMPLETE',out.checks.length,out.screenshots.length,out.errors.length);
}catch(e){out.error=e.stack;save();console.error(e);process.exitCode=1}finally{cdp?.close();chrome.kill();server.close()}
