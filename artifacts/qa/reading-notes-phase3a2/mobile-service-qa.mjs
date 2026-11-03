import {spawn} from 'node:child_process';import fs from 'node:fs';import path from 'node:path';import os from 'node:os';
import {startServer,CDPClient,sleep,CHROME_PATH,ARTIFACTS_DIR,PORT,DEBUG_PORT} from './chrome-support.mjs';

const out={contexts:[],screenshots:[],errors:[]};const save=()=>fs.writeFileSync(path.join(ARTIFACTS_DIR,'mobile-service-results.json'),JSON.stringify(out,null,2));
const server=await startServer();const chrome=spawn(CHROME_PATH,['--headless=new',`--remote-debugging-port=${DEBUG_PORT}`,`--user-data-dir=${fs.mkdtempSync(path.join(os.tmpdir(),'rn-p3a1-'))}`,'--no-first-run','--no-default-browser-check','about:blank'],{windowsHide:true});let cdp;
try{
 for(let i=0;i<100;i++){try{if((await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).ok)break}catch{}await sleep(100)}
 const tab=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new`,{method:'PUT'})).json();cdp=new CDPClient(tab.webSocketDebuggerUrl);await cdp.connect();await cdp.send('Page.enable');await cdp.send('Runtime.enable');
 cdp.ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.method==='Runtime.exceptionThrown')out.errors.push(m.params)});

 for(const [w,h] of [[768,1024],[390,844],[375,812],[320,568]])for(const theme of ['light','dark']){
  await cdp.setViewport(w,h,true);await cdp.send('Page.navigate',{url:`http://127.0.0.1:${PORT}/index.html?mobile-service#topic-4-2-dmz-architecture`});
  for(let i=0;i<500;i++){await sleep(40);if(await cdp.eval(`!!document.querySelector('[data-diagram="dmzFirewallArchitecture"] .reading-diag-mobile .reading-mob-tier-desc')`))break}
  await cdp.eval(`import('./js/core/theme.js').then(m=>m.applyTheme('${theme}'))`);await cdp.eval('document.fonts.ready.then(()=>true)');await sleep(350);
  const labels=await cdp.eval(`(()=>{const rgb=s=>s.match(/[0-9.]+/g)?.map(Number),blend=(a,b)=>a.slice(0,3).map((v,i)=>v*(a[3]??1)+b[i]*(1-(a[3]??1))),bg=e=>{if(!e)return [255,255,255];const c=rgb(getComputedStyle(e).backgroundColor);return c?blend(c,bg(e.parentElement)):bg(e.parentElement)},lum=c=>c.map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4}).reduce((a,v,i)=>a+v*[.2126,.7152,.0722][i],0);return [...document.querySelectorAll('[data-diagram="dmzFirewallArchitecture"] .reading-diag-mobile .reading-mob-tier-name,[data-diagram="dmzFirewallArchitecture"] .reading-diag-mobile .reading-mob-tier-desc')].map(e=>{const s=getComputedStyle(e),back=bg(e),front=blend(rgb(s.color),back),r=e.getBoundingClientRect();return {text:e.textContent.trim(),foreground:front,background:back,font:s.fontSize,contrast:(Math.max(lum(front),lum(back))+.05)/(Math.min(lum(front),lum(back))+.05),width:r.width,height:r.height,scrollWidth:e.scrollWidth,clientWidth:e.clientWidth}})})()`);
  const checks=labels.map(e=>({pass:e.contrast>=4.5&&e.width>0&&e.scrollWidth<=e.clientWidth+2,label:e}));out.contexts.push({width:w,height:h,theme,domain:4,labels,checks});save();
 }
 const fails=out.contexts.flatMap(c=>c.checks).filter(x=>!x.pass);if(fails.length){console.log(JSON.stringify(fails));process.exitCode=1}console.log('Mobile primary-label checks',out.contexts.flatMap(c=>c.checks).length,'failed',fails.length,'errors',out.errors.length);
}catch(e){out.error=e.stack;save();console.error(e);process.exitCode=1}finally{cdp?.close();chrome.kill();server.close()}
