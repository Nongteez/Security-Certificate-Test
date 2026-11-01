import {spawn} from 'node:child_process';import fs from 'node:fs';import path from 'node:path';import os from 'node:os';
import {startServer,CDPClient,sleep,CHROME_PATH,ARTIFACTS_DIR,PORT,DEBUG_PORT} from './chrome-support.mjs';
const server=await startServer(),out={checks:[],screenshots:[],errors:[]};let cdp;
const chrome=spawn(CHROME_PATH,['--headless=new',`--remote-debugging-port=${DEBUG_PORT}`,`--user-data-dir=${fs.mkdtempSync(path.join(os.tmpdir(),'rn-p3-focus-'))}`,'--no-first-run','--no-default-browser-check','about:blank'],{windowsHide:true});
const save=()=>fs.writeFileSync(path.join(ARTIFACTS_DIR,'focused-results.json'),JSON.stringify(out,null,2));
try{
 for(let i=0;i<100;i++){try{if((await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).ok)break}catch{}await sleep(100)}
 const tab=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new`,{method:'PUT'})).json();cdp=new CDPClient(tab.webSocketDebuggerUrl);await cdp.connect();await cdp.send('Page.enable');await cdp.send('Runtime.enable');
 cdp.ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.method==='Runtime.exceptionThrown')out.errors.push(m.params)});
 const ledger=JSON.parse(fs.readFileSync(path.join(ARTIFACTS_DIR,'source-ledger.json'),'utf8'));
 for(const w of [1366,390,1024])for(const theme of ['light','dark'])for(const d of [1,2,3,4]){
  const h=w===390?844:768,meta={domain:d,width:w,height:h,theme};await cdp.setViewport(w,h,w<=840);
  await cdp.send('Page.navigate',{url:`http://127.0.0.1:${PORT}/index.html?focused-p3a#${ledger.find(x=>x.domain===d).anchor}`});
  let ready=false;for(let i=0;i<500;i++){await sleep(40);try{ready=await cdp.eval(`document.querySelector('.reading-article')?.dataset.domainId==='${d}'&&!!document.querySelector('.reading-article-markdown h3')`)}catch{}if(ready)break}if(!ready)throw Error('reader not ready');
  await cdp.eval(`import('./js/core/theme.js').then(m=>m.applyTheme('${theme}'))`);await cdp.eval('document.fonts.ready.then(()=>true)');await sleep(350);
  const measurements=await cdp.eval(`(()=>{
   const rgb=s=>{const n=s.match(/[0-9.]+/g)?.map(Number);return n&&n.length>=3?n:null};
   const blend=(a,b,opacity=1)=>{const alpha=(a[3]??1)*opacity;return a.slice(0,3).map((v,i)=>v*alpha+b[i]*(1-alpha))};
   const bg=e=>{if(!e)return [255,255,255];const c=rgb(getComputedStyle(e).backgroundColor);return c?blend(c,bg(e.parentElement)):bg(e.parentElement)};
   const lum=c=>c.map(x=>{x/=255;return x<=.04045?x/12.92:((x+.055)/1.055)**2.4}).reduce((s,x,i)=>s+x*[.2126,.7152,.0722][i],0);
   const ratio=(a,b)=>(Math.max(lum(a),lum(b))+.05)/(Math.min(lum(a),lum(b))+.05);
   const svgContrast=[];
   for(const svg of document.querySelectorAll('.reading-diag-desktop svg')){
    if(!svg.getBoundingClientRect().width)continue;
    for(const t of svg.querySelectorAll('text')){
     const tr=t.getBoundingClientRect(),tx=tr.x+tr.width/2,ty=tr.y+tr.height/2,front=rgb(getComputedStyle(t).fill);if(!front)continue;
     let back=bg(svg.parentElement),rectLabel=null;
     for(const r of svg.querySelectorAll('rect')){
      if(!(r.compareDocumentPosition(t)&4))continue;const rr=r.getBoundingClientRect();
      if(rr.x<=tx&&tx<=rr.right&&rr.y<=ty&&ty<=rr.bottom){const s=getComputedStyle(r),c=rgb(s.fill);if(c){back=blend(c,back,Number(s.fillOpacity)*Number(s.opacity));rectLabel=r.getAttribute('class')||r.getAttribute('fill')}}
     }
     svgContrast.push({diagram:svg.closest('[data-diagram]')?.dataset.diagram,text:t.textContent.trim(),foreground:front,background:back,ratio:ratio(front,back),backgroundRect:rectLabel,method:'last preceding painted rect containing text centre, composited over HTML background'});
    }
   }
   const labels=[...document.querySelectorAll('.reading-scenario-answer-label,.reading-diagram-tag')].filter(e=>e.getBoundingClientRect().width).map(e=>{const c=rgb(getComputedStyle(e).color),back=bg(e);return {class:e.className,text:e.textContent.trim(),font:getComputedStyle(e).fontSize,foreground:c,background:back,ratio:ratio(c,back)}});
   const grc=document.querySelector('.reading-table--grc-frameworks')||document.querySelector('[data-table="grc-frameworks"]');
   return {svgContrast,labels,documentLang:document.documentElement.lang,articleLang:document.querySelector('.reading-article').getAttribute('lang'),grcClass:grc?.className};
  })()`);
  out.checks.push({...meta,...measurements});save();
  const targets=d===2?[['P3-VS-001','[data-diagram="bcVsDrScope"]'],['P3-VS-002','[data-diagram="effectivenessHierarchy"]'],['P3-TBL-001','table-memory']]:d===3?[['P3-DIA-001','[data-diagram="iamLifecycle"]']]:d===4?[['P3-TXT-001','range-topic-4-1-fundamentals-topologies'],['P3-SEM-001','range-topic-4-1-osi-model'],['P3-DIA-002','[data-diagram="cloudSharedResponsibility"]']]:[];
  if(w===1024&&d===2)targets.push(['P3-TBL-002','table-grc']);
  for(const [id,selector] of targets){
   const bounds=await cdp.eval(`(()=>{let e,end;if('${selector}'.startsWith('range-')){e=document.getElementById('${selector}'.slice(6));end=[...document.querySelectorAll('.reading-article-markdown h3')].find(x=>e.compareDocumentPosition(x)&4)}else if('${selector}'==='table-memory'){e=document.getElementById('topic-2-4-memory-aid');e=[...document.querySelectorAll('.reading-table-wrapper')].find(x=>e.compareDocumentPosition(x)&4)}else if('${selector}'==='table-grc'){e=document.querySelector('.reading-table-grc-frameworks')?.closest('.reading-table-wrapper')||document.querySelector('[data-table="grc-frameworks"]')?.closest('.reading-table-wrapper');if(!e){const a=document.getElementById('topic-2-1-frameworks-standards');e=[...document.querySelectorAll('.reading-table-wrapper')].find(x=>a.compareDocumentPosition(x)&4)}}else e=document.querySelector('${selector}');if(!e)return null;const r=e.getBoundingClientRect();return {x:r.x,y:r.y+scrollY,width:r.width,height:end?end.getBoundingClientRect().top+scrollY-(r.y+scrollY):r.height,scale:1}})()`);
   if(!bounds)throw Error('missing target '+selector);const file=`direct-${id}-${w}-${theme}.png`;
   const result=await cdp.send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:bounds});fs.writeFileSync(path.join(ARTIFACTS_DIR,file),Buffer.from(result.data,'base64'));out.screenshots.push({...meta,findingId:id,file,bounds});save();
  }
  if(w===390&&d===2){
   const before=await cdp.eval(`(()=>{const a=document.getElementById('topic-2-1-frameworks-standards'),w=[...document.querySelectorAll('.reading-table-wrapper')].find(x=>a.compareDocumentPosition(x)&4);w.scrollIntoView({behavior:'instant'});w.focus();return {focus:document.activeElement===w,scroll:w.scrollLeft,width:w.clientWidth,max:w.scrollWidth-w.clientWidth}})()`);
   await cdp.send('Input.dispatchKeyEvent',{type:'keyDown',key:'ArrowRight',code:'ArrowRight',windowsVirtualKeyCode:39});await cdp.send('Input.dispatchKeyEvent',{type:'keyUp',key:'ArrowRight',code:'ArrowRight',windowsVirtualKeyCode:39});await sleep(200);
   out.checks.push({...meta,name:'native-scroll-wrapper-keyboard',before,after:await cdp.eval(`(()=>{const a=document.getElementById('topic-2-1-frameworks-standards'),w=[...document.querySelectorAll('.reading-table-wrapper')].find(x=>a.compareDocumentPosition(x)&4);return {scroll:w.scrollLeft,focus:document.activeElement===w}})()`)});save();
  }
  console.log('FOCUS',d,w,theme);
 }
 console.log('COMPLETE',out.checks.length,out.screenshots.length,out.errors.length);
}catch(e){out.error=e.stack;save();console.error(e);process.exitCode=1}finally{cdp?.close();chrome.kill();server.close()}
