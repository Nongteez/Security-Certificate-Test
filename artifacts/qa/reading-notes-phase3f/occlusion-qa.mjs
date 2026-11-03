import fs from'node:fs';import path from'node:path';import os from'node:os';import{spawn}from'node:child_process';
import{startServer,CDPClient,sleep,CHROME_PATH,PORT,DEBUG_PORT,ARTIFACTS_DIR}from'./chrome-support.mjs';
const before=process.argv.includes('--baseline'),out={phase:before?'before':'after',cases:[],checks:[],screenshots:[]};
const server=await startServer();let c;const chrome=spawn(CHROME_PATH,['--headless=new',`--remote-debugging-port=${DEBUG_PORT}`,`--user-data-dir=${fs.mkdtempSync(path.join(os.tmpdir(),'rn-f-occlusion-'))}`,'--no-first-run','about:blank'],{windowsHide:true});
try{
 for(let i=0;i<100;i++){try{if((await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).ok)break}catch{}await sleep(100)}
 const tab=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new`,{method:'PUT'})).json();c=new CDPClient(tab.webSocketDebuggerUrl);await c.connect();await c.send('Page.enable');
 const matrix=JSON.parse(fs.readFileSync('artifacts/qa/reading-notes-phase3b2/implementation-matrix.json','utf8'));
 for(const width of[1366,390,320])for(const domain of[1,2,3,4]){
  await c.setViewport(width,768,width<840);const ids=matrix.filter(x=>x.domain===domain).map(x=>x.id);await c.send('Page.navigate',{url:`http://127.0.0.1:${PORT}/index.html?occlusion#${ids[0]}`});
  for(let i=0;i<400;i++){if(await c.eval(`!!document.getElementById('${ids.at(-1)}')`))break;await sleep(50)}
  await c.eval('document.fonts.ready.then(()=>true)');await c.eval(`import('./js/core/theme.js').then(m=>m.applyTheme('light'))`);await sleep(250);
  const point=await c.eval(`(()=>{scrollTo(0,0);let best=null;for(const p of document.querySelectorAll('.reading-article p')){if(p.closest('.reading-diagram-card'))continue;const range=document.createRange();range.selectNodeContents(p);for(const r of range.getClientRects())if(r.width>100&&r.y>1000&&(!best||r.right>best.right))best={y:r.y+scrollY-(innerHeight-40),right:r.right,text:p.textContent.slice(0,140)};}return best})()`);
  if(!point)throw Error('no candidate reading line');await c.eval(`scrollTo({top:${point.y},behavior:'instant'})`);await sleep(300);
  const result=await c.eval(`(()=>{const b=document.getElementById('btn-reading-scroll-nav'),r=b.getBoundingClientRect(),hits=[];for(const p of document.querySelectorAll('.reading-article p')){if(!p.getBoundingClientRect().width)continue;const rr=document.createRange();rr.selectNodeContents(p);for(const t of rr.getClientRects())if(Math.min(t.right,r.right)>Math.max(t.left,r.left)&&Math.min(t.bottom,r.bottom)>Math.max(t.top,r.top))hits.push(p.textContent.slice(0,120));}const article=document.querySelector('.reading-article'),a=article.getBoundingClientRect();return{button:{x:r.x,y:r.y,width:r.width,height:r.height,label:b.getAttribute('aria-label'),visible:getComputedStyle(b).visibility},article:{left:a.left,right:a.right},hits,language:document.querySelector('.reading-article-markdown').lang,englishHeadings:[...article.querySelectorAll('h3,h4,h5,h6')].filter(e=>/[A-Za-z]/.test(e.textContent)&&!/[\u0e00-\u0e7f]/.test(e.textContent)).every(e=>e.lang==='en')}})()`);
  out.cases.push({domain,width,point,...result});out.checks.push({name:'no-reading-text-occlusion',pass:result.hits.length===0,domain,width},{name:'body-language',pass:result.language==='th'&&result.englishHeadings,domain,width});
  const shot=await c.send('Page.captureScreenshot',{format:'png'}),file=`${out.phase}-occlusion-d${domain}-${width}.png`;fs.writeFileSync(path.join(ARTIFACTS_DIR,file),Buffer.from(shot.data,'base64'));out.screenshots.push(file);
  fs.writeFileSync(path.join(ARTIFACTS_DIR,`${out.phase}-occlusion.json`),JSON.stringify(out,null,2));
  console.log(out.phase,domain,width,'occluded',result.hits.length,'language',result.language);
 }
 fs.writeFileSync(path.join(ARTIFACTS_DIR,`${out.phase}-occlusion.json`),JSON.stringify(out,null,2));if(!before&&out.checks.some(x=>!x.pass))process.exitCode=1;
}finally{c?.close();chrome.kill();server.close();await sleep(500)}
