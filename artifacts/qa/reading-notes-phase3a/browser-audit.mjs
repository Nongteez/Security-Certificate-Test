import {spawn} from 'node:child_process';
import fs from 'node:fs';import path from 'node:path';import os from 'node:os';
import {startServer,CDPClient,sleep,CHROME_PATH,ARTIFACTS_DIR,PORT,DEBUG_PORT} from './chrome-support.mjs';
const ledger=JSON.parse(fs.readFileSync(path.join(ARTIFACTS_DIR,'source-ledger.json'),'utf8'));
const out={auditOnly:true,configurations:[],screenshots:[],errors:[]};
const save=()=>fs.writeFileSync(path.join(ARTIFACTS_DIR,'browser-results.json'),JSON.stringify(out,null,2));
const targetAnchors=['topic-2-2-bc-vs-dr','topic-2-4-effectiveness-hierarchy','topic-3-4-jml-lifecycle','topic-4-1-fundamentals-topologies','topic-4-1-osi-model'];
const server=await startServer();const profile=fs.mkdtempSync(path.join(os.tmpdir(),'rn-phase3a-'));
const chrome=spawn(CHROME_PATH,['--headless=new',`--remote-debugging-port=${DEBUG_PORT}`,`--user-data-dir=${profile}`,'--no-first-run','--no-default-browser-check','about:blank'],{windowsHide:true});let cdp;
try{
 for(let i=0;i<100;i++){try{if((await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).ok)break}catch{}await sleep(100)}
 out.chrome=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).json();
 const tab=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new`,{method:'PUT'})).json();cdp=new CDPClient(tab.webSocketDebuggerUrl);await cdp.connect();await cdp.send('Page.enable');await cdp.send('Runtime.enable');
 cdp.ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.method==='Runtime.exceptionThrown')out.errors.push(m.params)});
 const viewports=[[1920,1080],[1366,768],[1024,768],[768,1024],[390,844],[375,812],[320,568]];
 for(const [w,h] of viewports)for(const theme of ['light','dark'])for(const d of [1,2,3,4]){
  const sections=ledger.filter(x=>x.domain===d),meta={domain:d,width:w,height:h,theme};
  await cdp.setViewport(w,h,w<=840);
  await cdp.send('Page.navigate',{url:`http://127.0.0.1:${PORT}/index.html?phase3a=${d}-${w}-${theme}#${sections[0].anchor}`});
  let ready=false;for(let i=0;i<500;i++){await sleep(40);try{ready=await cdp.eval(`document.querySelector('.reading-article')?.dataset.domainId==='${d}'&&!!document.querySelector('.reading-article-markdown h3')`)}catch{}if(ready)break}if(!ready)throw Error('Reader not ready '+JSON.stringify(meta));
  await cdp.eval(`import('./js/core/theme.js').then(m=>m.applyTheme('${theme}'))`);await cdp.eval('document.fonts.ready.then(()=>true)');await sleep(350);
  const measured=await cdp.eval(`(function(spec){
    const article=document.querySelector('.reading-article-markdown');
    const visible=e=>{const r=e.getBoundingClientRect();return r.width>0&&r.height>0&&getComputedStyle(e).visibility!=='hidden'};
    const box=e=>{const r=e.getBoundingClientRect();return {x:r.x,y:r.y+scrollY,width:r.width,height:r.height}};
    const style=e=>{const s=getComputedStyle(e);return {font:s.fontSize,line:s.lineHeight,weight:s.fontWeight,fg:s.color,bg:s.backgroundColor,mt:s.marginTop,mb:s.marginBottom,wordBreak:s.wordBreak,wrap:s.overflowWrap,whiteSpace:s.whiteSpace}};
    const ranges=spec.map((s,i)=>{
      const start=document.getElementById(s.anchor),end=i<spec.length-1?document.getElementById(spec[i+1].anchor):null;
      if(!start)return {anchor:s.anchor,missing:true};
      const nodes=[...article.querySelectorAll('*')].filter(e=>e===start||!!(start.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING)&&(!end||!!(end.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)));
      const tables=nodes.filter(e=>e.matches('table')).map((t,ti)=>{
        const wrap=t.closest('.reading-table-wrapper')||t.parentElement;
        const broken=[];
        for(const cell of t.querySelectorAll('th,td')){
          const walk=document.createTreeWalker(cell,NodeFilter.SHOW_TEXT);let text;
          while(text=walk.nextNode())for(const match of text.textContent.matchAll(/[A-Za-z][A-Za-z-]{4,}/g)){
            const lines=new Set();for(let j=0;j<match[0].length;j++){const r=document.createRange();r.setStart(text,match.index+j);r.setEnd(text,match.index+j+1);for(const b of r.getClientRects())if(b.width)lines.add(Math.round(b.y*2)/2)}
            if(lines.size>1)broken.push({word:match[0],lines:lines.size,column:cell.cellIndex,cellWidth:cell.getBoundingClientRect().width});
          }
        }
        return {index:ti,box:box(t),wrapper:box(wrap),client:wrap.clientWidth,scroll:wrap.scrollWidth,overflow:getComputedStyle(wrap).overflowX,tabIndex:wrap.tabIndex,
          layout:getComputedStyle(t).tableLayout,headers:[...t.querySelectorAll('thead th')].map(e=>({text:e.textContent.trim(),width:e.getBoundingClientRect().width,scope:e.getAttribute('scope')})),
          rows:t.rows.length,caption:!!t.caption,brokenWords:broken,cells:[...t.querySelectorAll('tr:nth-child(2) td')].map(e=>({text:e.textContent.trim().slice(0,100),...style(e)}))};
      });
      const diagrams=nodes.filter(e=>e.matches('.reading-diagram-card')).map(e=>{
        const svg=e.querySelector('.reading-diag-desktop svg');
        const texts=svg?[...svg.querySelectorAll('text')].filter(visible).map(t=>{const r=t.getBoundingClientRect(),ctm=t.getScreenCTM(),v=svg.getBoundingClientRect(),s=getComputedStyle(t);return {text:t.textContent.trim(),font:s.fontSize,effectivePx:parseFloat(s.fontSize)*Math.hypot(ctm.a,ctm.b),fill:s.fill,...box(t),outsideRight:Math.max(0,r.right-v.right),outsideLeft:Math.max(0,v.left-r.left)}}):[];
        return {name:e.dataset.diagram,box:box(e),svg:svg?{...box(svg),visible:visible(svg),viewBox:svg.getAttribute('viewBox'),overflow:getComputedStyle(svg).overflow}:null,wrapperWidth:e.querySelector('.reading-diagram-svg-wrap')?.getBoundingClientRect().width,texts,
          mobileVisible:!!e.querySelector('.reading-diag-mobile')&&visible(e.querySelector('.reading-diag-mobile')),mobileText:e.querySelector('.reading-diag-mobile')?.textContent.trim(),label:e.getAttribute('aria-label'),maxBoxDepth:Math.max(0,...[...e.querySelectorAll('div')].map(n=>{let x=n,c=0;while(x!==e){c++;x=x.parentElement}return c}))};
      });
      return {anchor:s.anchor,title:s.title,box:box(start),height:(end?box(end).y:box(article).y+box(article).height)-box(start).y,
        headings:nodes.filter(e=>e.matches('h1,h2,h3,h4,h5,h6')).map(e=>({tag:e.tagName,text:e.textContent.trim(),...style(e),box:box(e)})),
        pseudoHeadings:nodes.filter(e=>e.matches('p')&&e.textContent.trim().length<160&&/[:：]$/.test(e.textContent.trim())).map(e=>({text:e.textContent.trim(),...style(e),box:box(e)})),
        lists:nodes.filter(e=>e.matches('ol,ul')&&visible(e)).map(e=>({tag:e.tagName,items:e.children.length,depth:[...e.parentElement.closest('li')?[1]:[]].length,first:e.firstElementChild?.textContent.trim().slice(0,150),...style(e)})),
        prose:nodes.filter(e=>e.matches('p,li')&&visible(e)).slice(0,8).map(e=>({tag:e.tagName,text:e.textContent.trim().slice(0,90),...style(e)})),
        tables,diagrams,langParts:nodes.filter(e=>e.hasAttribute('lang')).length,
        scenarios:nodes.filter(e=>e.matches('.reading-scenario-card')).length};
    });
    return {pageWidth:document.documentElement.clientWidth,pageScrollWidth:document.documentElement.scrollWidth,article:box(article),language:document.documentElement.lang,ranges};
  })(${JSON.stringify(sections.map(x=>({anchor:x.anchor,title:x.title})))})`);
  const entry={...meta,...measured};out.configurations.push(entry);save();
  for(const s of sections){
    await cdp.eval(`document.getElementById('${s.anchor}').scrollIntoView({behavior:'instant',block:'start'})`);
    const file=`section-d${d}-${s.anchor}-${w}-${theme}.png`;await cdp.screenshot(path.join(ARTIFACTS_DIR,file));out.screenshots.push({...meta,anchor:s.anchor,kind:'subsection',file});
    const target=/bc-vs-dr|effectiveness|jml|osi-model|fundamentals-topologies/.test(s.anchor);
    if([1366,390].includes(w)||target){
      const features=await cdp.eval(`(()=>{const a=document.getElementById('${s.anchor}'),z=${sections.indexOf(s)<sections.length-1?`document.getElementById('${sections[sections.indexOf(s)+1].anchor}')`:'null'};return [...document.querySelectorAll('.reading-article-markdown .reading-diagram-card,.reading-article-markdown .reading-table-wrapper')].filter(e=>(a.compareDocumentPosition(e)&4)&&(!z||(z.compareDocumentPosition(e)&2))).map(e=>({kind:e.matches('.reading-diagram-card')?'diagram':'table',name:e.dataset.diagram||null,top:e.getBoundingClientRect().top+scrollY}))})()`);
      for(let i=0;i<features.length;i++){const f=features[i];await cdp.eval(`scrollTo({top:${Math.max(0,f.top-35)},behavior:'instant'})`);const file=`feature-d${d}-${s.anchor}-${f.kind}-${i}-${w}-${theme}.png`;await cdp.screenshot(path.join(ARTIFACTS_DIR,file));out.screenshots.push({...meta,anchor:s.anchor,...f,file})}
    }
  }
  save();console.log('CONFIG',JSON.stringify(meta),'ranges',measured.ranges.length,'screenshots',out.screenshots.length);
 }
 save();console.log('COMPLETE',out.configurations.length,out.screenshots.length,'errors',out.errors.length);
}catch(e){out.error=e.stack;save();console.error(e);process.exitCode=1}finally{cdp?.close();chrome.kill();server.close()}
