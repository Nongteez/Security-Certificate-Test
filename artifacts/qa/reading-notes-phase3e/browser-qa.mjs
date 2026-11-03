import fs from'node:fs';import path from'node:path';import os from'node:os';import{spawn}from'node:child_process';
import{startServer,CDPClient,sleep,CHROME_PATH,ARTIFACTS_DIR,PORT,DEBUG_PORT}from'./chrome-support.mjs';
const d=Number(process.argv.find(x=>x.startsWith('--domain='))?.split('=')[1]||1),before=process.argv.includes('--baseline'),phase=before?'before':'after';
const only=process.argv.find(x=>x.startsWith('--only='))?.split('=')[1]?.split(',');
const inventory=JSON.parse(fs.readFileSync(path.join(ARTIFACTS_DIR,'diagram-matrix.json'),'utf8')).filter(r=>r.domain===d&&(!only||only.includes(r.id)));
const sourceMatrix=JSON.parse(fs.readFileSync('artifacts/qa/reading-notes-phase3b2/implementation-matrix.json','utf8')).filter(r=>r.domain===d),ids=sourceMatrix.map(r=>r.id);
const ledger=JSON.parse(fs.readFileSync(path.join(ARTIFACTS_DIR,'content-ledger.json'),'utf8')).filter(r=>inventory.some(i=>i.id===r.diagram));
const file=path.join(ARTIFACTS_DIR,`${phase}-d${d}${only?'-targeted':''}.json`),out=(process.argv.includes('--resume')||process.argv.includes('--retry-failures'))&&fs.existsSync(file)?JSON.parse(fs.readFileSync(file,'utf8')):{domain:d,phase,contexts:[],checks:[],screenshots:[],errors:[]};
if(process.argv.includes('--retry-failures')){const bad=new Set(out.checks.filter(x=>!x.pass).map(x=>x.width+'-'+x.theme));fs.writeFileSync(file.replace('.json','-previous.json'),JSON.stringify(out,null,2));for(const k of ['contexts','checks','screenshots'])out[k]=out[k].filter(x=>!bad.has(x.width+'-'+x.theme));}
if(out.error){out.recoveredAttempts=[...(out.recoveredAttempts||[]),out.error];delete out.error;}
const save=()=>fs.writeFileSync(file,JSON.stringify(out,null,2)),check=(name,pass,meta,detail={})=>{out.checks.push({name,pass,...meta,...detail});if(!pass)console.log('FAIL',name,JSON.stringify(meta));};
function measure(inventory,ids,ledger){
 const box=e=>{const b=e.getBoundingClientRect();return{x:b.x,y:b.y+scrollY,width:b.width,height:b.height};};
 const plain=s=>new DOMParser().parseFromString(s,'text/html').body.textContent.replace(/\s+/g,' ').trim();
 const words=root=>{const splits=[],outside=[];let count=0;const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);while(w.nextNode()){const n=w.currentNode,p=n.parentElement;if(p.closest('svg,.katex,code')||!p.getBoundingClientRect().width)continue;for(const m of n.textContent.matchAll(/[A-Za-z]{3,}/g)){count++;const r=document.createRange();r.setStart(n,m.index);r.setEnd(n,m.index+m[0].length);const rects=[...r.getClientRects()].filter(b=>b.width&&b.height);if(rects.some(b=>Math.abs(b.y-rects[0].y)>2))splits.push(m[0]);const cell=p.closest('td,th');if(cell){const cb=cell.getBoundingClientRect(),s=getComputedStyle(cell);if(rects.some(b=>b.left<cb.left+parseFloat(s.paddingLeft)-1||b.right>cb.right-parseFloat(s.paddingRight)+1))outside.push(m[0]);}}}return{count,splits,outside};};

 const inspect=e=>{
  const shown=n=>n.getBoundingClientRect().width>0&&getComputedStyle(n).visibility!=='hidden';
  const norm=s=>s.replace(/\s+/g,' ').trim();
  const canvas=document.createElement('canvas');canvas.width=canvas.height=1;const ctx=canvas.getContext('2d',{willReadFrequently:true}),cache={};
  const rgba=s=>{if(cache[s])return cache[s];ctx.clearRect(0,0,1,1);ctx.fillStyle=s;ctx.fillRect(0,0,1,1);const p=ctx.getImageData(0,0,1,1).data;return cache[s]=[p[0],p[1],p[2],p[3]/255]};
  const blend=(a,b)=>[0,1,2].map(i=>a[i]*a[3]+b[i]*(1-a[3])).concat(1);
  const lum=a=>a.slice(0,3).map(v=>v/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((n,v,i)=>n+v*[.2126,.7152,.0722][i],0);
  const background=n=>{const chain=[];for(let p=n;p;p=p.parentElement)chain.unshift(p);let bg=[255,255,255,1];for(const p of chain){const c=rgba(getComputedStyle(p).backgroundColor);bg=blend(c,bg)}return bg};
  const labels=[],overlaps=[],clipping=[];const svg=e.querySelector('svg.reading-diagram-svg');
  if(svg&&shown(svg)){
   const v=svg.viewBox.baseVal,scale=svg.getBoundingClientRect().width/v.width,texts=[...svg.querySelectorAll('text')],shapes=[...svg.querySelectorAll('rect,circle,ellipse')];
   for(const t of texts){const b=t.getBBox(),style=getComputedStyle(t);let bg=background(svg);
    for(const shape of shapes){const r=shape.getBBox(),st=getComputedStyle(shape);if(!(shape.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING)||st.fill==='none')continue;if(b.x+b.width/2>=r.x&&b.x+b.width/2<=r.x+r.width&&b.y+b.height/2>=r.y&&b.y+b.height/2<=r.y+r.height){const color=rgba(st.fill).slice();color[3]*=parseFloat(st.fillOpacity)*parseFloat(st.opacity);bg=blend(color,bg)}}
    const fg=blend(rgba(style.fill),bg),a=lum(fg),z=lum(bg);labels.push({text:norm(t.textContent),px:parseFloat(style.fontSize)*scale,contrast:(Math.max(a,z)+.05)/(Math.min(a,z)+.05)});
    if(b.x<-.5||b.y<-.5||b.x+b.width>v.width+.5||b.y+b.height>v.height+.5)clipping.push(norm(t.textContent));
   }
   for(let i=0;i<texts.length;i++)for(let j=i+1;j<texts.length;j++){const a=texts[i].getBoundingClientRect(),b=texts[j].getBoundingClientRect();if(Math.min(a.x+a.width,b.x+b.width)-Math.max(a.x,b.x)>1&&Math.min(a.y+a.height,b.y+b.height)-Math.max(a.y,b.y)>2)overlaps.push([norm(texts[i].textContent),norm(texts[j].textContent)])}
  }
  const walker=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);
  while(walker.nextNode()){const n=walker.currentNode,p=n.parentElement;if(!norm(n.textContent)||!shown(p)||p.closest('svg,.reading-diagram-tag'))continue;const style=getComputedStyle(p),bg=background(p),fg=blend(rgba(style.color),bg),a=lum(fg),b=lum(bg);labels.push({text:norm(n.textContent).slice(0,100),px:parseFloat(style.fontSize),contrast:(Math.max(a,b)+.05)/(Math.min(a,b)+.05)})}
  return{id:e.dataset.diagram,representation:svg&&shown(svg)?'svg':'html',cardWidth:e.clientWidth,minPx:Math.min(...labels.map(t=>t.px)),minContrast:Math.min(...labels.map(t=>t.contrast)),lowContrast:labels.filter(t=>t.contrast<4.49),tiny:labels.filter(t=>t.px<13.99),overlaps,clipping,labels};
 };
 const diagrams=inventory.map(i=>{const e=document.querySelector(`.reading-article [data-diagram="${i.id}"]`),r=e.getBoundingClientRect();
  const svg=[...e.querySelectorAll('svg.reading-diagram-svg')].filter(s=>s.getBoundingClientRect().width>0).map(s=>{const v=s.viewBox.baseVal;return{label:s.getAttribute('aria-label'),overflow:[...s.querySelectorAll('text')].filter(t=>{const b=t.getBBox();return b.x<-.5||b.y<-.5||b.x+b.width>v.width+.5||b.y+b.height>v.height+.5;}).map(t=>t.textContent)}});
  const native=true;const text=e.textContent.replace(/\s+/g,' ').trim();
  const bad=native?[...e.querySelectorAll('h4,h5,h6,p,li')].filter(n=>{const b=n.getBoundingClientRect(),rr=document.createRange();rr.selectNodeContents(n);return [...rr.getClientRects()].some(c=>c.width>0&&(c.left<r.left-1||c.right>r.right+1));}).map(n=>n.textContent.slice(0,100)):[];
  return{...i,box:box(e),label:e.getAttribute('aria-label'),role:e.getAttribute('role'),relationship:e.dataset.relationship||null,text,svg,concepts:[...e.querySelectorAll('[data-concept]')].map(n=>n.dataset.concept),stages:[...e.querySelectorAll('[data-stage]')].map(n=>({id:n.dataset.stage,optional:n.dataset.optional,repeatable:n.dataset.repeatable})),mobileArrows:e.querySelector('.reading-diag-mobile')?.querySelectorAll('.reading-mob-arrow-down,.reading-mob-step-connector').length||0,mobileNumbers:e.querySelector('.reading-diag-mobile')?.querySelectorAll('.reading-mob-tier-num,.reading-mob-num-badge').length||0,groups:[...e.querySelectorAll('[data-group]')].map(n=>n.dataset.group),badBounds:bad,wordIntegrity:native?words(e):null,ledger:ledger.filter(l=>l.diagram===i.id).map(l=>({purpose:l.purpose,retained:text.includes(plain(l.after))})),raw: /```|\\(?:begin|end)\{|<\/?(?:div|span)>/.test(text)};});
 const tables=[...document.querySelectorAll('.reading-article .reading-table')].map((t,index)=>({index,box:box(t.parentElement),client:t.parentElement.clientWidth,scroll:t.parentElement.scrollWidth,label:t.parentElement.getAttribute('aria-label'),role:t.parentElement.getAttribute('role'),tabIndex:t.parentElement.tabIndex,headers:[...t.querySelectorAll('th')].map(h=>({text:h.textContent,scope:h.scope})),rows:[...t.rows].map(r=>[...r.cells].map(c=>c.textContent)),words:words(t)}));
 return{legibility:[...document.querySelectorAll('.reading-diagram-card')].map(inspect),diagrams,tables,anchors:ids.filter(id=>!!document.getElementById(id)),pageOverflow:document.documentElement.scrollWidth>innerWidth+1,mathErrors:document.querySelectorAll('.katex-error').length,app:box(document.querySelector('.app')),clientWidth:document.documentElement.clientWidth};
}
const server=await startServer();let c;const chrome=spawn(CHROME_PATH,['--headless=new',`--remote-debugging-port=${DEBUG_PORT}`,`--user-data-dir=${fs.mkdtempSync(path.join(os.tmpdir(),'rn-d-semantic-'))}`,'--no-first-run','--no-default-browser-check','about:blank'],{windowsHide:true});
try{
 for(let i=0;i<100;i++){try{if((await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).ok)break;}catch{}await sleep(100);}
 out.chrome=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).json();const tab=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new`,{method:'PUT'})).json();c=new CDPClient(tab.webSocketDebuggerUrl);await c.connect();await c.send('Page.enable');await c.send('Runtime.enable');await c.send('Log.enable');
 c.ws.addEventListener('message',event=>{const m=JSON.parse(event.data);if(m.method==='Runtime.exceptionThrown'||m.method==='Log.entryAdded'&&m.params.entry.level==='error')out.errors.push(m);});
 for(const[width,height]of[[1920,1080],[1366,768],[1024,768],[768,1024],[390,844],[375,812],[320,568]])for(const theme of['light','dark']){
  if(out.contexts.some(m=>m.width===width&&m.theme===theme))continue;const meta={width,height,theme};await c.setViewport(width,height,width<=840);await c.send('Page.navigate',{url:`http://127.0.0.1:${PORT}/index.html?phase3e=${phase}-${d}-${width}-${theme}#${ids[0]}`});
  let ready=false;for(let attempt=0;attempt<2&&!ready;attempt++){if(attempt)await c.send('Page.reload');for(let i=0;i<300;i++){await sleep(50);if(await c.eval(`!!document.getElementById('${ids.at(-1)}')`)){ready=true;break;}}}if(!ready)throw Error('reader not mounted');
  await c.eval(`import('./js/core/theme.js').then(m=>m.applyTheme('${theme}'))`);await sleep(350);await c.eval('document.fonts.ready.then(()=>true)');
  const state=await c.eval(`(${measure.toString()})(${JSON.stringify(inventory)},${JSON.stringify(ids)},${JSON.stringify(ledger)})`);out.contexts.push({...meta,...state});
  if(!before)for(const l of state.legibility){const m={...meta,id:l.id};check('legible-label-size',!l.tiny.length,m,l);check('text-contrast-4.5',!l.lowContrast.length,m,{low:l.lowContrast,min:l.minContrast});check('no-svg-label-overlap',!l.overlaps.length,m,{overlaps:l.overlaps});check('no-svg-clipping',!l.clipping.length,m,{clipping:l.clipping});}
  check('all-subsection-anchors',state.anchors.length===ids.length,meta);check('no-page-overflow',!state.pageOverflow,meta);check('no-math-errors',!state.mathErrors,meta);if(width>840)check('phase3b3-width',Math.abs(state.app.width-Math.min(state.clientWidth-48,1560))<2,meta);
  for(const diagram of state.diagrams){const m={...meta,id:diagram.id};check('named-native-diagram-region',!!diagram.label&&diagram.role==='region',m);check('diagram-present-without-raw-markup',diagram.box.width>0&&diagram.box.height>0&&!diagram.raw,m);
   if(!before){check('all-original-paragraph-dispositions-visible',diagram.ledger.every(l=>l.retained),m,{ledger:diagram.ledger});if(diagram.wordIntegrity){check('new-html-text-not-clipped',!diagram.badBounds.length,m,{bad:diagram.badBounds});check('new-html-words-intact',!diagram.wordIntegrity.splits.length,m,{words:diagram.wordIntegrity});}
    if(diagram.id==='threatChain')check('causal-entities-not-five-steps',!diagram.text.includes('ความสัมพันธ์ 5 ขั้นตอน')&&diagram.text.includes('not a final stage after impact')&&diagram.mobileNumbers===0,m);
    if(diagram.id==='grcAlignment')check('coordinated-grc-not-mobile-stages',diagram.mobileArrows===0&&diagram.mobileNumbers===0&&diagram.text.includes('not mandatory stages'),m);
    if(diagram.id==='privacyFlow')check('scoped-role-instructions-and-consent',diagram.relationship==='roles-and-instructions'&&diagram.mobileNumbers===0&&diagram.text.includes('Consent เมื่อใช้ฐานความยินยอม'),m);
    if(diagram.id==='controlTimeline')check('five-coexisting-functions',diagram.relationship==='coexisting-functions'&&diagram.concepts.length===5&&diagram.text.includes('not a mandatory sequence'),m);
    if(diagram.id==='effectivenessHierarchy')check('six-unordered-concepts-in-two-groups',diagram.concepts.length===6&&diagram.groups.join(',')==='measures,communication'&&diagram.text.includes('local study aid'),m);
    if(diagram.id==='iamLifecycle')check('optional-repeatable-mover',diagram.stages.length===3&&diagram.stages[1].optional==='true'&&diagram.stages[1].repeatable==='true'&&diagram.text.includes('without a Mover'),m);
    if(diagram.id==='defenseInDepth')check('actual-entity-decoded-layer-labels', ['Layer 4: Identity & Access','Layer 6: Application & Data','Layer 7: Resilience & Response'].every(x=>diagram.text.includes(x))&&diagram.text.includes('not a fixed number or chronological sequence'),m);
    if(diagram.id==='bcVsDrScope')check('supporting-scopes-without-subset',diagram.relationship==='supporting-scopes'&&!diagram.text.includes('DR ⊂ BC'),m);
    if(diagram.id==='osiVsTcpIpModel')check('reference-model-not-packet-flow',diagram.text.includes('model correspondence, not packet flow'),m);
    if(diagram.id==='aaaLifecycle')check('accounting-ongoing',diagram.text.includes('throughout the access example'),m);
    if(diagram.id==='dmzFirewallArchitecture')check('qualified-zone-overview',diagram.text.includes('zone overview, not a universal packet route')&&diagram.text.includes('does not guarantee'),m);
   }
  }
  for(const t of state.tables){check('phase3c-table-semantics',t.tabIndex===0&&t.role==='region'&&!!t.label&&t.headers.every(h=>h.scope==='col'),{...meta,table:t.index});check('phase3c-whole-words-and-padded-cells',!t.words.splits.length&&!t.words.outside.length,{...meta,table:t.index},t.words);}
  // Preserve native measured width during full-surface export (Chrome scrollbar suppression).
  const pin=await c.eval(`(()=>{const get=()=>[...document.querySelectorAll('.reading-diagram-card')].map(e=>e.getBoundingClientRect().width),a=get();document.activeElement.blur();scrollTo({top:0,behavior:'instant'});document.body.style.width=document.documentElement.clientWidth+'px';return a.every((v,i)=>Math.abs(v-get()[i])<.5)})()`);check('capture-lock-preserves-live-width',pin,meta);
  for(const diagram of state.diagrams.filter(x=>((width===1366&&theme==='light')||(width===390&&theme==='dark')||(width===1920&&theme==='light')||(width===320&&theme==='dark')))){
   let data,geometry,post,stable=false;for(let attempt=0;attempt<3&&!stable;attempt++){await sleep(160);geometry=await c.eval(`(()=>{const r=document.querySelector('.reading-article [data-diagram="${diagram.id}"]').getBoundingClientRect();return{x:r.x,y:r.y+scrollY,width:r.width,height:r.height}})()`);data=await c.send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:{x:geometry.x-2,y:geometry.y-2,width:geometry.width+4,height:geometry.height+4,scale:1}});post=await c.eval(`(()=>{const r=document.querySelector('.reading-article [data-diagram="${diagram.id}"]').getBoundingClientRect();return{x:r.x,y:r.y+scrollY,width:r.width,height:r.height}})()`);stable=['x','width','height'].every(k=>Math.abs(post[k]-geometry[k])<.5)&&Math.abs(post.y-geometry.y)<1;}
   const fileName=`${phase}-d${d}-${diagram.id}-${width}-${theme}.png`;fs.writeFileSync(path.join(ARTIFACTS_DIR,fileName),Buffer.from(data.data,'base64'));out.screenshots.push({file:fileName,...meta,id:diagram.id,geometry,post,stable});check('stable-complete-capture',stable,{...meta,id:diagram.id});
  }
  save();console.log('CASE',phase,d,width,theme,'diagrams',state.diagrams.length,'failed',out.checks.filter(c=>!c.pass).length);
 }
 save();console.log('RESULT',JSON.stringify({contexts:out.contexts.length,diagramStates:out.contexts.reduce((n,c)=>n+c.diagrams.length,0),checks:out.checks.length,failed:out.checks.filter(c=>!c.pass).length,errors:out.errors.length}));if(!before&&(out.checks.some(c=>!c.pass)||out.errors.length))process.exitCode=1;
}catch(e){out.error=e.stack;save();console.error(e);process.exitCode=1;}finally{c?.close();chrome.kill();server.close();await sleep(500);}
