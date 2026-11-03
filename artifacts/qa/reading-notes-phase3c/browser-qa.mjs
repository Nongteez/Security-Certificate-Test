import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {spawn} from 'node:child_process';
import {startServer,CDPClient,sleep,CHROME_PATH,ARTIFACTS_DIR,PORT,DEBUG_PORT} from './chrome-support.mjs';
const baseline=process.argv.includes('--baseline'), phase=baseline?'before':'after';
const domain=Number(process.argv.find(x=>x.startsWith('--domain='))?.split('=')[1]||2);
const smoke=process.argv.includes('--smoke');
const matrix=JSON.parse(fs.readFileSync('artifacts/qa/reading-notes-phase3b2/implementation-matrix.json','utf8')).filter(r=>r.domain===domain);
const ids=matrix.map(r=>r.id), resultPath=path.join(ARTIFACTS_DIR,`${phase}-d${domain}${smoke?'-smoke':''}.json`);
const out=process.argv.includes('--resume')&&fs.existsSync(resultPath)?JSON.parse(fs.readFileSync(resultPath,'utf8')):{phase,domain,contexts:[],checks:[],screenshots:[],errors:[]};
if(out.error){out.recoveredAttempts=[...(out.recoveredAttempts||[]),out.error];delete out.error;}
const save=()=>fs.writeFileSync(path.join(ARTIFACTS_DIR,`${phase}-d${domain}${smoke?'-smoke':''}.json`),JSON.stringify(out,null,2));
const check=(name,pass,meta,details={})=>{out.checks.push({name,pass,...meta,...details});if(!pass)console.log('FAIL',name,JSON.stringify(meta));};
function measure(ids){
 const article=document.querySelector('.reading-article-markdown');
 const anchors=ids.map(id=>document.getElementById(id));
 const owner=e=>{let id=ids[0];for(let i=0;i<anchors.length;i++)if(anchors[i]===e||anchors[i].compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING)id=ids[i];return id;};
 const box=e=>{const r=e.getBoundingClientRect();return{x:r.x,y:r.y+scrollY,width:r.width,height:r.height};};
 function words(root){
  const splits=[],outside=[];let count=0;
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  while(walker.nextNode()){
   const n=walker.currentNode,p=n.parentElement;if(p.closest('svg,.katex,code,pre,script,style'))continue;
   const cell=p.closest('td,th');
   for(const match of n.textContent.matchAll(/[A-Za-z]{3,}/g)){
    count++;let first=null,bad=false;
    for(let k=0;k<match[0].length;k++){
     const r=document.createRange();r.setStart(n,match.index+k);r.setEnd(n,match.index+k+1);const b=r.getBoundingClientRect();
     if(!b.width||!b.height)continue;
     if(first===null)first=b.y;else if(Math.abs(b.y-first)>2)bad=true;
     if(cell){const cb=cell.getBoundingClientRect(),s=getComputedStyle(cell);if(b.left<cb.left+parseFloat(s.paddingLeft)-1||b.right>cb.right-parseFloat(s.paddingRight)+1)outside.push({word:match[0],cell:cell.cellIndex});}
    }
    if(bad)splits.push({word:match[0],text:p.textContent.slice(0,100)});
   }
  }
  return{count,splits,outside};
 }
 const tables=[...article.querySelectorAll('.reading-table')].map((t,index)=>{
  const w=t.parentElement,s=getComputedStyle(w),ts=getComputedStyle(t);
  const palette=new Map(),textBounds=[];
  for(const e of t.querySelectorAll('th,td,th *,td *')){
   if(!e.textContent.trim())continue;const st=getComputedStyle(e);let parent=e,bg='';
   while(parent){bg=getComputedStyle(parent).backgroundColor;if(!bg.endsWith(', 0)')&&bg!=='transparent')break;parent=parent.parentElement;}
   const color={fg:st.color,bg,font:parseFloat(st.fontSize),weight:st.fontWeight};palette.set(JSON.stringify(color),color);
  }
  for(const cell of t.querySelectorAll('th,td')){
   const cb=cell.getBoundingClientRect(),cs=getComputedStyle(cell),walker=document.createTreeWalker(cell,NodeFilter.SHOW_TEXT);
   while(walker.nextNode()){
    const n=walker.currentNode,trim=n.textContent.trim();if(!trim||n.parentElement.closest('.katex,svg'))continue;
    const r=document.createRange(),start=n.textContent.indexOf(trim);r.setStart(n,start);r.setEnd(n,start+trim.length);
    for(const b of r.getClientRects())if(b.width>0&&(b.left<cb.left+parseFloat(cs.paddingLeft)-1||b.right>cb.right-parseFloat(cs.paddingRight)+1||b.top<cb.top-1||b.bottom>cb.bottom+1))textBounds.push({text:trim.slice(0,80),cell:cell.cellIndex});
   }
  }
  return{index,id:owner(t),box:box(w),tableBox:box(t),client:w.clientWidth,scroll:w.scrollWidth,overflow:w.scrollWidth>w.clientWidth+1,
   label:w.getAttribute('aria-label'),role:w.getAttribute('role'),tabIndex:w.tabIndex,overflowX:s.overflowX,
   headers:[...t.querySelectorAll('thead th')].map(h=>({text:h.textContent,scope:h.scope,box:box(h)})),
   rows:[...t.rows].map(r=>[...r.cells].map(c=>({text:c.textContent,box:box(c),display:getComputedStyle(c).display}))),
   font:parseFloat(ts.fontSize),words:words(t),textBounds,palette:[...palette.values()],
   mathErrors:t.querySelectorAll('.katex-error').length};
 });
 const ranges=ids.map((id,i)=>{
  const a=anchors[i],next=anchors[i+1],h=a.tagName==='H3'?a:a.nextElementSibling;
  const nodes=[h,...article.querySelectorAll('h3,h4,h5,h6,p,li')].filter(e=>e===h||(a.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING)&&(!next||e.compareDocumentPosition(next)&Node.DOCUMENT_POSITION_FOLLOWING));
  return{id,heading:box(h),missing:!h.textContent.trim(),badHeadings:nodes.filter(e=>/^H[3456]$/.test(e.tagName)).filter(e=>{const b=e.getBoundingClientRect(),r=document.createRange();r.selectNodeContents(e);return[...r.getClientRects()].some(q=>q.width>0&&(q.left<b.left-1||q.right>b.right+1));}).map(e=>e.textContent),mathErrors:nodes.filter(e=>e.closest('.katex-error')).length};
 });
 return{tables,ranges,clientWidth:document.documentElement.clientWidth,pageOverflow:document.documentElement.scrollWidth>innerWidth+1,article:box(article),app:box(document.querySelector('.app')),mathErrors:article.querySelectorAll('.katex-error').length,sup:[...article.querySelectorAll('sup')].map(e=>({text:e.textContent,align:getComputedStyle(e).verticalAlign}))};
}
const server=await startServer();let c;
const chrome=spawn(CHROME_PATH,['--headless=new',`--remote-debugging-port=${DEBUG_PORT}`,`--user-data-dir=${fs.mkdtempSync(path.join(os.tmpdir(),'rn-phase3c-'))}`,'--no-first-run','--no-default-browser-check','about:blank'],{windowsHide:true});
try{
 for(let i=0;i<100;i++){try{if((await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).ok)break;}catch{}await sleep(100);}
 out.chrome=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).json();
 const tab=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new`,{method:'PUT'})).json();c=new CDPClient(tab.webSocketDebuggerUrl);await c.connect();await c.send('Page.enable');await c.send('Runtime.enable');await c.send('Log.enable');
 c.ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.method==='Runtime.exceptionThrown'||m.method==='Log.entryAdded'&&m.params.entry.level==='error')out.errors.push(m);});
 const views=smoke?[[1366,768],[390,844]]:[[1920,1080],[1366,768],[1024,768],[768,1024],[390,844],[375,812],[320,568]];
 for(const[width,height]of views)for(const theme of['light','dark']){
  if(out.contexts.some(s=>s.width===width&&s.theme===theme))continue;
  const meta={width,height,theme};await c.setViewport(width,height,width<=840);
  await c.send('Page.navigate',{url:`http://127.0.0.1:${PORT}/index.html?phase3c=${phase}-${domain}-${width}-${theme}#${ids[0]}`});
  let ready=false;
  for(let attempt=0;attempt<2&&!ready;attempt++){
   if(attempt)await c.send('Page.reload');
   for(let i=0;i<300;i++){await sleep(50);if(await c.eval(`!!document.getElementById('${ids.at(-1)}')&&!!document.querySelector('.reading-article-markdown')`)){ready=true;break;}}
  }
  if(!ready)throw new Error(`Reader did not mount: D${domain} ${width} ${theme}`);
  await c.eval('document.fonts.ready.then(()=>true)');await c.eval(`import('./js/core/theme.js').then(m=>m.applyTheme('${theme}'))`);await sleep(350);
  const state=await c.eval(`(${measure.toString()})(${JSON.stringify(ids)})`);out.contexts.push({...meta,...state});
  check('no-page-overflow',!state.pageOverflow,meta);check('no-math-errors',!state.mathErrors,meta);
  if(width>840)check('phase3b3-shell-width',Math.abs(state.app.width-Math.min(state.clientWidth-48,1560))<2,meta);
  for(const r of state.ranges)check('subsection-heading-geometry',!r.missing&&!r.badHeadings.length&&!r.mathErrors,{...meta,id:r.id},{bad:r.badHeadings});
  if(domain===4)check('five-native-superscripts',state.sup.length===5&&state.sup.every(s=>s.align==='super'),meta);
  for(const t of state.tables){
   const m={...meta,id:t.id,table:t.index};
   check('english-words-intact',!t.words.splits.length,m,{splits:t.words.splits});check('text-inside-padded-cells',!t.words.outside.length,m,{outside:t.words.outside});
   check('all-bilingual-text-within-cells',!t.textBounds.length,m,{outside:t.textBounds});
   check('native-table-relationships',t.headers.every(h=>h.scope==='col')&&t.rows.every(r=>r.length===t.headers.length&&r.every(c=>c.display==='table-cell'&&c.box.height>0)),m);
   check('readable-body-font',t.font>=14.5,m,{font:t.font});
   if(!baseline&&t.headers.length>=3)check('readable-comparison-column-floor',t.headers.every(h=>h.box.width>=139),m,{widths:t.headers.map(h=>h.box.width)});
   if(!baseline)check('contextual-scroll-region',t.tabIndex===0&&t.role==='region'&&!!t.label,m);
   // Enter genuine keyboard modality before checking :focus-visible.
   await c.send('Input.dispatchKeyEvent',{type:'keyDown',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});
   await c.send('Input.dispatchKeyEvent',{type:'keyUp',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});
   await c.eval(`(()=>{const w=document.querySelectorAll('.reading-table-wrapper')[${t.index}];w.scrollLeft=0;w.scrollIntoView({behavior:'instant',block:'start'});scrollBy({top:-24,behavior:'instant'});w.focus({preventScroll:true})})()`);
   if(!baseline){
    for(const modifiers of[8,0]){
     await c.send('Input.dispatchKeyEvent',{type:'keyDown',key:'Tab',code:'Tab',windowsVirtualKeyCode:9,modifiers});
     await c.send('Input.dispatchKeyEvent',{type:'keyUp',key:'Tab',code:'Tab',windowsVirtualKeyCode:9,modifiers});
    }
    await c.eval(`(()=>{const w=document.querySelectorAll('.reading-table-wrapper')[${t.index}];w.scrollIntoView({behavior:'instant',block:'start'});scrollBy({top:-24,behavior:'instant'})})()`);
   }
   const focus=await c.eval(`(()=>{const w=document.querySelectorAll('.reading-table-wrapper')[${t.index}],s=getComputedStyle(w);return{focused:document.activeElement===w,outline:s.outlineStyle,outlineWidth:s.outlineWidth,outlineColor:s.outlineColor}})()`);
   if(!baseline)check('visible-keyboard-focus',focus.focused&&focus.outline!=='none'&&parseFloat(focus.outlineWidth)>=2,m,{focus});
   if(!baseline&&t.index===0){const file=`after-focus-d${domain}-${width}-${theme}.png`;await c.screenshot(path.join(ARTIFACTS_DIR,file));out.screenshots.push({file,...m,focus:true});}
   // Full-surface capture can reposition a focused scroll region. Separate the
   // live focus proof above from stable, complete cell/header images below.
   await c.eval(`document.activeElement.blur();scrollTo({top:0,behavior:'instant'})`);await sleep(50);
   const file=`${phase}-d${domain}-table${t.index}-${width}-${theme}.png`;
   const clip=await c.eval(`(()=>{const b=document.querySelectorAll('.reading-table-wrapper')[${t.index}].getBoundingClientRect();return{x:Math.max(0,b.x-4),y:Math.max(0,b.y+scrollY-4),width:b.width+8,height:b.height+8,scale:1}})()`);
   const shot=await c.send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip});fs.writeFileSync(path.join(ARTIFACTS_DIR,file),Buffer.from(shot.data,'base64'));out.screenshots.push({file,...m,edge:'start'});
   if(t.overflow){
    await c.eval(`(()=>{const w=document.querySelectorAll('.reading-table-wrapper')[${t.index}];w.scrollIntoView({behavior:'instant',block:'start'});w.focus({preventScroll:true})})()`);
    await c.send('Input.dispatchKeyEvent',{type:'keyDown',key:'ArrowRight',code:'ArrowRight',windowsVirtualKeyCode:39});await c.send('Input.dispatchKeyEvent',{type:'keyUp',key:'ArrowRight',code:'ArrowRight',windowsVirtualKeyCode:39});await sleep(180);
    const movement=await c.eval(`document.querySelectorAll('.reading-table-wrapper')[${t.index}].scrollLeft`);check('native-keyboard-scroll',movement>0,m,{movement});
    const edge=await c.eval(`(()=>{const w=document.querySelectorAll('.reading-table-wrapper')[${t.index}];w.scrollLeft=w.scrollWidth;const b=w.getBoundingClientRect(),r=w.querySelector('tr').lastElementChild.getBoundingClientRect();return{left:w.scrollLeft,max:w.scrollWidth-w.clientWidth,lastRight:r.right,containerRight:b.right,page:document.documentElement.scrollWidth<=innerWidth+1}})()`);check('right-edge-reachable-and-contained',edge.left>=edge.max-1&&edge.lastRight<=edge.containerRight+1&&edge.page,m,{edge});
    await c.eval(`document.activeElement.blur();scrollTo({top:0,behavior:'instant'})`);await sleep(50);
    const end=file.replace('.png','-end.png'), shotEnd=await c.send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip});fs.writeFileSync(path.join(ARTIFACTS_DIR,end),Buffer.from(shotEnd.data,'base64'));out.screenshots.push({file:end,...m,edge:'end'});
   }
  }
  if(!baseline)for(const r of state.ranges){if((width===1366&&theme==='light')||(width===390&&theme==='dark')){await c.eval(`document.getElementById('${r.id}').scrollIntoView({behavior:'instant'});scrollBy({top:-24,behavior:'instant'})`);const file=`after-d${domain}-${r.id}-${width}-${theme}.png`;await c.screenshot(path.join(ARTIFACTS_DIR,file));out.screenshots.push({file,...meta,id:r.id,range:true});}}
  save();console.log('CASE',phase,domain,width,theme,'tables',state.tables.length,'failures',out.checks.filter(x=>!x.pass).length);
 }
 save();console.log('RESULT',JSON.stringify({checks:out.checks.length,failed:out.checks.filter(x=>!x.pass).length,screenshots:out.screenshots.length,errors:out.errors.length}));if(!baseline&&(out.checks.some(x=>!x.pass)||out.errors.length))process.exitCode=1;
}catch(e){out.error=e.stack;save();console.error(e);process.exitCode=1;}finally{c?.close();chrome.kill();server.close();}
