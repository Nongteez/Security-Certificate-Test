// Stable isolated table images complement the original viewport/focus screenshots.
import fs from 'node:fs';import path from 'node:path';import os from 'node:os';import{spawn}from'node:child_process';
import{startServer,CDPClient,sleep,CHROME_PATH,ARTIFACTS_DIR,PORT,DEBUG_PORT}from'./chrome-support.mjs';
const before=process.argv.includes('--baseline'),phase=before?'before':'after';
const inventory=JSON.parse(fs.readFileSync(path.join(ARTIFACTS_DIR,'table-inventory.json'),'utf8'));
const resultFile=path.join(ARTIFACTS_DIR,`${phase}-stable-captures.json`);
const selected={1:1,2:6,3:2,4:1},out=process.argv.includes('--resume')&&fs.existsSync(resultFile)?JSON.parse(fs.readFileSync(resultFile,'utf8')):{phase,images:[],checks:[]};
if(out.error){out.recoveredCaptureAttempts=[...(out.recoveredCaptureAttempts||[]),{error:out.error,checks:out.checks.filter(c=>!c.pass)}];out.checks=out.checks.filter(c=>c.pass);delete out.error;}
const save=()=>fs.writeFileSync(path.join(ARTIFACTS_DIR,`${phase}-stable-captures.json`),JSON.stringify(out,null,2));
const server=await startServer();let c;
const chrome=spawn(CHROME_PATH,['--headless=new',`--remote-debugging-port=${DEBUG_PORT}`,`--user-data-dir=${fs.mkdtempSync(path.join(os.tmpdir(),'rn-c-capture-'))}`,'--no-first-run','--no-default-browser-check','about:blank'],{windowsHide:true});
try{
 for(let i=0;i<100;i++){try{if((await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).ok)break;}catch{}await sleep(100);}
 const tab=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new`,{method:'PUT'})).json();c=new CDPClient(tab.webSocketDebuggerUrl);await c.connect();await c.send('Page.enable');
 for(const domain of[1,2,3,4])for(const[width,height]of[[1920,1080],[1366,768],[1024,768],[768,1024],[390,844],[375,812],[320,568]])for(const theme of['light','dark']){
  const measurements=JSON.parse(fs.readFileSync(path.join(ARTIFACTS_DIR,`${phase}-d${domain}.json`),'utf8')).contexts.find(c=>c.width===width&&c.theme===theme);
  const relevant=inventory.filter(t=>t.domain===domain&&(!before||t.index===selected[domain]||(domain===2&&t.index===0)));
  const expected=relevant.flatMap(t=>['start',...(measurements.tables[t.index].overflow?['end']:[])].map(edge=>`${phase}-stable-d${domain}-table${t.index}-${width}-${theme}-${edge}.png`));
  if(expected.every(file=>out.images.some(i=>i.file===file)))continue;
  await c.setViewport(width,height,width<=840);const first=inventory.find(t=>t.domain===domain).anchor;
  await c.send('Page.navigate',{url:`http://127.0.0.1:${PORT}/index.html?stable=${phase}-${domain}-${width}-${theme}#${first}`});
  let ready=false;for(let a=0;a<2&&!ready;a++){if(a)await c.send('Page.reload');for(let i=0;i<300;i++){await sleep(50);if(await c.eval(`document.querySelectorAll('.reading-table').length===${inventory.filter(t=>t.domain===domain).length}`)){ready=true;break;}}}
  if(!ready)throw Error('reader not mounted');await c.eval('document.fonts.ready.then(()=>true)');await c.eval(`import('./js/core/theme.js').then(m=>m.applyTheme('${theme}'))`);await sleep(400);
  await c.eval('document.fonts.ready.then(()=>true)');
  // Chrome's full-surface capture suppresses the desktop scrollbar and can
  // reflow the page by 15px. Freeze only the already-measured body width for
  // export, asserting that this QA-only lock changes no live table geometry.
  const pin=await c.eval(`(()=>{const rects=()=>[...document.querySelectorAll('.reading-table-wrapper')].map(e=>{const r=e.getBoundingClientRect();return[r.x,r.y,r.width,r.height]});const before=rects(),width=document.documentElement.clientWidth;document.body.style.width=width+'px';const after=rects();return{width,unchanged:before.every((r,i)=>r.every((v,j)=>Math.abs(v-after[i][j])<.5))}})()`);
  if(!pin.unchanged)throw Error('Capture width lock changed live layout');
  out.checks.push({name:'capture-width-lock-preserves-live-layout',pass:pin.unchanged,domain,width,height,theme,contentWidth:pin.width});
  for(const t of inventory.filter(t=>t.domain===domain&&(!before||t.index===selected[domain]||(domain===2&&t.index===0)))){
   for(const edge of['start','end']){
    const file=`${phase}-stable-d${domain}-table${t.index}-${width}-${theme}-${edge}.png`;
    if(out.images.some(i=>i.file===file))continue;
    const geometry=await c.eval(`(()=>{document.activeElement.blur();scrollTo({top:0,behavior:'instant'});const w=document.querySelectorAll('.reading-table-wrapper')[${t.index}];w.scrollLeft=${edge==='end'?'w.scrollWidth':'0'};const r=w.getBoundingClientRect();return{clip:{x:r.x,y:r.y+scrollY,width:r.width,height:r.height,scale:1},left:w.scrollLeft,max:w.scrollWidth-w.clientWidth}})()`);
    if(edge==='end'&&geometry.max<1)continue;
    let data,post,stable=false;
    const bounds=`(()=>{const r=document.querySelectorAll('.reading-table-wrapper')[${t.index}].getBoundingClientRect();return{x:r.x,y:r.y+scrollY,width:r.width,height:r.height}})()`;
    for(let attempt=0;attempt<3&&!stable;attempt++){
     await sleep(160);geometry.clip={...await c.eval(bounds),scale:1};
     // Two pixels include the border despite subpixel document-position
     // rounding. Width/height must stay fixed; vertical drift must be <1px.
     const exportClip={x:geometry.clip.x-2,y:geometry.clip.y-2,width:geometry.clip.width+4,height:geometry.clip.height+4,scale:1};
     data=await c.send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:exportClip});post=await c.eval(bounds);
     stable=['x','width','height'].every(k=>Math.abs(post[k]-geometry.clip[k])<.5)&&Math.abs(post.y-geometry.clip.y)<1;
     if(!stable)out.recoveredCaptureAttempts=[...(out.recoveredCaptureAttempts||[]),{file,attempt,before:geometry.clip,after:post}];
    }
    fs.writeFileSync(path.join(ARTIFACTS_DIR,file),Buffer.from(data.data,'base64'));
    out.checks.push({name:'capture-preserves-measured-geometry',pass:stable,file,before:geometry.clip,after:post});
    if(!stable)throw Error('Capture reflowed table: '+file);
    out.images.push({file,domain,table:t.index,id:t.anchor,width,height,theme,edge,...geometry});out.checks.push({name:'correct-scroll-end',pass:edge==='start'?geometry.left===0:Math.abs(geometry.left-geometry.max)<1,file});
   }
  }
  save();console.log('CAPTURE',phase,domain,width,theme);
 }
}catch(e){out.error=e.stack;console.error(e);process.exitCode=1;}finally{save();c?.close();chrome.kill();server.close();}
