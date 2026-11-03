import {spawn} from 'node:child_process';import fs from 'node:fs';import path from 'node:path';import os from 'node:os';
import {startServer,CDPClient,sleep,CHROME_PATH,ARTIFACTS_DIR,PORT,DEBUG_PORT} from './chrome-support.mjs';
const source=JSON.parse(fs.readFileSync('artifacts/qa/reading-notes-phase3a/source-ledger.json','utf8'));
const out={contexts:[],screenshots:[],errors:[]};const save=()=>fs.writeFileSync(path.join(ARTIFACTS_DIR,'note-results.json'),JSON.stringify(out,null,2));
const server=await startServer();const chrome=spawn(CHROME_PATH,['--headless=new',`--remote-debugging-port=${DEBUG_PORT}`,`--user-data-dir=${fs.mkdtempSync(path.join(os.tmpdir(),'rn-p3a1-'))}`,'--no-first-run','--no-default-browser-check','about:blank'],{windowsHide:true});let cdp;
try{
 for(let i=0;i<100;i++){try{if((await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).ok)break}catch{}await sleep(100)}
 const tab=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new`,{method:'PUT'})).json();cdp=new CDPClient(tab.webSocketDebuggerUrl);await cdp.connect();await cdp.send('Page.enable');await cdp.send('Runtime.enable');
 cdp.ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.method==='Runtime.exceptionThrown')out.errors.push(m.params)});

 for(const w of [1366,390])for(const theme of ['light','dark']){
  const h=w===390?844:768;await cdp.setViewport(w,h,w<=840);await cdp.send('Page.navigate',{url:`http://127.0.0.1:${PORT}/index.html?note-fidelity#topic-1-5-due-care-due-diligence`});
  for(let i=0;i<500;i++){await sleep(40);if(await cdp.eval(`!!document.querySelector('.reading-article-markdown .reading-table-note')`))break}
  await cdp.eval(`import('./js/core/theme.js').then(m=>m.applyTheme('${theme}'))`);await cdp.eval('document.fonts.ready.then(()=>true)');await sleep(350);
  const detail=await cdp.eval(`(()=>{const e=document.querySelector('.reading-table-note'),r=e.getBoundingClientRect(),table=e.previousElementSibling,b=table.getBoundingClientRect();return {text:e.textContent,innerHTML:e.innerHTML,fontStyle:getComputedStyle(e).fontStyle,bounds:{x:r.x,y:b.y+scrollY,width:r.width,height:r.bottom-b.y,scale:1},emChildren:e.querySelectorAll('em,i').length}})()`);
  out.contexts.push({width:w,height:h,theme,domain:1,...detail});const file=`due-care-note-${w}-${theme}.png`;const shot=await cdp.send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:detail.bounds});fs.writeFileSync(path.join(ARTIFACTS_DIR,file),Buffer.from(shot.data,'base64'));out.screenshots.push({file,width:w,height:h,theme,domain:1,findingIds:['P3A1-FID-001']});save();
 }
 console.log('COMPLETE',out.contexts.length,out.screenshots.length,out.errors.length);
}catch(e){out.error=e.stack;save();console.error(e);process.exitCode=1}finally{cdp?.close();chrome.kill();server.close()}
