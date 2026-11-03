import {spawn} from 'node:child_process';import fs from 'node:fs';import path from 'node:path';import os from 'node:os';
import {startServer,CDPClient,sleep,CHROME_PATH,ARTIFACTS_DIR,PORT,DEBUG_PORT} from './chrome-support.mjs';
const source=JSON.parse(fs.readFileSync('artifacts/qa/reading-notes-phase3a/source-ledger.json','utf8'));
const out={contexts:[],screenshots:[],errors:[]};const save=()=>fs.writeFileSync(path.join(ARTIFACTS_DIR,'browser-results.json'),JSON.stringify(out,null,2));
const server=await startServer();const chrome=spawn(CHROME_PATH,['--headless=new',`--remote-debugging-port=${DEBUG_PORT}`,`--user-data-dir=${fs.mkdtempSync(path.join(os.tmpdir(),'rn-p3a1-'))}`,'--no-first-run','--no-default-browser-check','about:blank'],{windowsHide:true});let cdp;
try{
 for(let i=0;i<100;i++){try{if((await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).ok)break}catch{}await sleep(100)}
 const tab=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new`,{method:'PUT'})).json();cdp=new CDPClient(tab.webSocketDebuggerUrl);await cdp.connect();await cdp.send('Page.enable');await cdp.send('Runtime.enable');
 cdp.ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.method==='Runtime.exceptionThrown')out.errors.push(m.params)});
 const cases=[];for(const t of ['light','dark'])for(const d of [1,2,3,4])cases.push([1366,768,t,d]);
 for(const [w,h] of [[1024,768],[768,1024],[390,844]])for(const t of ['light','dark'])cases.push([w,h,t,4]);
 for(const [w,h,theme,d] of cases){
  const meta={width:w,height:h,theme,domain:d},rows=source.filter(x=>x.domain===d);await cdp.setViewport(w,h,w<=840);
  await cdp.send('Page.navigate',{url:`http://127.0.0.1:${PORT}/index.html?fidelity#${d===4?'topic-4-2-dmz-architecture':d===1?'topic-1-2-quantitative-risk':rows[0].anchor}`});
  let ready=false;for(let i=0;i<500;i++){await sleep(40);try{ready=await cdp.eval(`document.querySelector('.reading-article')?.dataset.domainId==='${d}'&&!!document.querySelector('.reading-article-markdown h3')`)}catch{}if(ready)break}if(!ready)throw Error('not ready');
  await cdp.eval(`import('./js/core/theme.js').then(m=>m.applyTheme('${theme}'))`);await cdp.eval('document.fonts.ready.then(()=>true)');await sleep(350);
  const measured=await cdp.eval(`(function(spec){
   const article=document.querySelector('.reading-article-markdown');
   const visible=e=>{const r=e.getBoundingClientRect();return r.width>0&&r.height>0&&getComputedStyle(e).visibility!=='hidden'&&!e.closest('.katex-mathml,annotation,script,style')};
   const rgb=s=>s.match(/[0-9.]+/g)?.slice(0,3).map(Number);
   const lum=c=>c.map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4}).reduce((a,v,i)=>a+v*[.2126,.7152,.0722][i],0);
   const ratio=(a,b)=>(Math.max(lum(a),lum(b))+.05)/(Math.min(lum(a),lum(b))+.05);
   const ranges=spec.map((s,i)=>{
    const a=document.getElementById(s.anchor),end=i<spec.length-1?document.getElementById(spec[i+1].anchor):null;
    if(!a)return {anchor:s.anchor,missing:true};const inRange=e=>(e===a||!!(a.compareDocumentPosition(e)&4))&&(!end||!!(end.compareDocumentPosition(e)&2));
    const walk=document.createTreeWalker(article,NodeFilter.SHOW_TEXT);let text;const candidates=[];
    while(text=walk.nextNode())if(inRange(text.parentElement)&&visible(text.parentElement)){
     const value=text.textContent;
     const kinds=[];if(value.includes(String.fromCharCode(92)+'$'))kinds.push('escaped-currency');if(value.includes('**')||/__[a-z]+__/i.test(value))kinds.push('emphasis-markers');if(/^[ ]*#{1,6} /.test(value))kinds.push('heading-markers');if(value.includes(String.fromCharCode(96).repeat(3)))kinds.push('fences');if(['text','frac','times','begin','end','approx','neq','mathbf'].some(cmd=>value.includes(String.fromCharCode(92)+cmd)))kinds.push('latex-commands');
     if(value.split('*').length>=3||value.split('_').length>=3){if(!kinds.includes('emphasis-markers'))kinds.push('emphasis-markers')}if(['*','_','[',']','(',')','#','!','&',':',';','-','.'].some(z=>value.includes(String.fromCharCode(92)+z)))kinds.push('escaped-punctuation');
     if(kinds.length)candidates.push({kinds,text:value.trim(),tag:text.parentElement.tagName,inCode:!!text.parentElement.closest('pre,code'),inMath:!!text.parentElement.closest('.katex,[role="math"]')});
    }
    const elems=[...article.querySelectorAll('*')].filter(inRange);
    return {anchor:s.anchor,candidates,headings:elems.filter(e=>/^H[1-6]$/.test(e.tagName)).map(e=>({tag:e.tagName,text:e.textContent.trim()})),lists:elems.filter(e=>e.matches('ol,ul')&&visible(e)).map(e=>({tag:e.tagName,directItems:e.children.length,nested:!!e.closest('li')})),tables:elems.filter(e=>e.matches('table')).map(e=>({rows:e.rows.length,cols:e.rows[0]?.cells.length,headers:[...e.querySelectorAll('th')].map(t=>({text:t.textContent,scope:t.scope}))})),code:elems.filter(e=>e.matches('pre')).map(e=>e.textContent),mathErrors:elems.filter(e=>e.matches('.katex-error')).map(e=>e.textContent),interactive:elems.filter(e=>e.matches('button,input,select,textarea,details,a[href],[tabindex]')).map(e=>({tag:e.tagName,role:e.getAttribute('role'),text:e.textContent.slice(0,70)}))};
   });
   const defaults=[...article.querySelectorAll('svg rect.diag-box')].filter(e=>visible(e)&&getComputedStyle(e).fill==='rgb(0, 0, 0)').map(e=>({diagram:e.closest('[data-diagram]')?.dataset.diagram,class:e.getAttribute('class'),fillAttribute:e.getAttribute('fill'),computedFill:getComputedStyle(e).fill}));
   const card=article.querySelector('[data-diagram="dmzFirewallArchitecture"]');let dmz=null;
   if(card){const svg=card.querySelector('.reading-diag-desktop svg'),r=svg.getBoundingClientRect();
    const texts=[...svg.querySelectorAll('text')].filter(visible).map(e=>{const b=e.getBoundingClientRect(),m=e.getScreenCTM(),s=getComputedStyle(e);return {text:e.textContent,font:s.fontSize,effectivePx:parseFloat(s.fontSize)*Math.hypot(m.a,m.b),fill:s.fill,width:b.width,height:b.height}});
    const services=[...svg.querySelectorAll('rect')].filter(e=>visible(e)).filter(e=>e.getAttribute('class')==='diag-box').map(e=>{const box=e.getBoundingClientRect(),labels=[...svg.querySelectorAll('text')].filter(t=>{const b=t.getBoundingClientRect();return b.x>=box.x&&b.right<=box.right&&b.y>=box.y&&b.bottom<=box.bottom});return {fill:getComputedStyle(e).fill,fillAttribute:e.getAttribute('fill'),labels:labels.map(t=>({text:t.textContent,fill:getComputedStyle(t).fill,ratio:ratio(rgb(getComputedStyle(t).fill),rgb(getComputedStyle(e).fill))}))}});
    dmz={viewBox:svg.getAttribute('viewBox'),svgWidth:r.width,svgHeight:r.height,wrapperWidth:card.querySelector('.reading-diagram-svg-wrap').getBoundingClientRect().width,cardPadding:getComputedStyle(card).padding,svgVisible:visible(svg),connectors:svg.querySelectorAll('line,path,polyline,polygon').length,texts,services,mobileText:card.querySelector('.reading-diag-mobile').textContent.trim(),mobileVisible:visible(card.querySelector('.reading-diag-mobile')),accessibleName:svg.getAttribute('aria-label')};
   }
   return {ranges,defaultBlackRects:defaults,dmz,katexLoaded:!!window.katex,mathFallback:article.querySelectorAll('[role="math"]').length,lang:document.documentElement.lang};
  })(${JSON.stringify(rows.map(x=>({anchor:x.anchor})))})`);
  out.contexts.push({...meta,...measured});save();
  if(d===4||d===1){const bounds=await cdp.eval(d===4?`(()=>{const e=document.querySelector('[data-diagram="dmzFirewallArchitecture"]'),r=e.getBoundingClientRect();return {x:r.x,y:r.y+scrollY,width:r.width,height:r.height,scale:1}})()`:`(()=>{const a=document.getElementById('topic-1-2-quantitative-risk'),z=document.getElementById('topic-1-2-risk-lifecycle'),r=document.getElementById('reading-content-pane').getBoundingClientRect();return {x:r.x,y:a.getBoundingClientRect().top+scrollY,width:r.width,height:z.getBoundingClientRect().top-a.getBoundingClientRect().top,scale:1}})()`);
   const file=`${d===4?'dmz':'risk'}-${w}-${theme}.png`,shot=await cdp.send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:bounds});fs.writeFileSync(path.join(ARTIFACTS_DIR,file),Buffer.from(shot.data,'base64'));out.screenshots.push({...meta,file,bounds,findingIds:d===4?['P3A1-DIA-001','P3A1-SEM-001','P3-DIA-001']:['P3-TXT-002']});save()}
  console.log('CONTEXT',w,theme,d,'syntax',measured.ranges.reduce((n,r)=>n+r.candidates.length,0));
 }
 console.log('COMPLETE',out.contexts.length,out.screenshots.length,out.errors.length);
}catch(e){out.error=e.stack;save();console.error(e);process.exitCode=1}finally{cdp?.close();chrome.kill();server.close()}
