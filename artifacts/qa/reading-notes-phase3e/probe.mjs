import fs from'node:fs';import path from'node:path';import os from'node:os';import{spawn}from'node:child_process';
import{startServer,CDPClient,sleep,CHROME_PATH,PORT,DEBUG_PORT,ARTIFACTS_DIR}from'./chrome-support.mjs';
const server=await startServer(),out=[];let c;
const chrome=spawn(CHROME_PATH,['--headless=new',`--remote-debugging-port=${DEBUG_PORT}`,`--user-data-dir=${fs.mkdtempSync(path.join(os.tmpdir(),'rn-e-probe-'))}`,'--no-first-run','about:blank'],{windowsHide:true});
try{
 for(let i=0;i<100;i++){try{if((await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).ok)break}catch{}await sleep(100)}
 const tab=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new`,{method:'PUT'})).json();c=new CDPClient(tab.webSocketDebuggerUrl);await c.connect();await c.send('Page.enable');
 const anchors=JSON.parse(fs.readFileSync('artifacts/qa/reading-notes-phase3b2/implementation-matrix.json','utf8'));
 for(const width of[1920,1366,1024,320])for(const domain of[1,2,3,4]){
  await c.setViewport(width,900,width<840);await c.send('Page.navigate',{url:`http://127.0.0.1:${PORT}/index.html?probe#${anchors.find(a=>a.domain===domain).id}`});
  const last=anchors.filter(a=>a.domain===domain).at(-1).id;
  for(let i=0;i<400;i++){if(await c.eval(`!!document.getElementById('${last}')`))break;await sleep(50)}
  await c.eval(`import('./js/core/theme.js').then(m=>m.applyTheme('light'))`);await sleep(200);await c.eval('document.fonts.ready.then(()=>true)');
  const data=await c.eval(`(()=>[...document.querySelectorAll('.reading-diagram-card')].map(e=>{const s=e.querySelector('svg.reading-diagram-svg'),texts=s?[...s.querySelectorAll('text')]:[],v=s?.viewBox.baseVal,w=s?.getBoundingClientRect().width;return{id:e.dataset.diagram,cardWidth:e.clientWidth,svgWidth:w,viewBoxWidth:v?.width,minFont:texts.length?Math.min(...texts.map(t=>parseFloat(getComputedStyle(t).fontSize))):null,minRenderedFont:w?Math.min(...texts.map(t=>parseFloat(getComputedStyle(t).fontSize)*w/v.width)):null,overflow:w?texts.filter(t=>{const b=t.getBBox();return b.x<0||b.x+b.width>v.width}).map(t=>t.textContent):[],nativeVisible:e.querySelector('.reading-diag-mobile')?.getBoundingClientRect().width>0}}))()`);
  out.push({width,domain,data});console.log('PROBE',width,domain);
 }
 fs.writeFileSync(path.join(ARTIFACTS_DIR,'before-probe.json'),JSON.stringify(out,null,2));
 console.log(out.filter(x=>x.width===1920).flatMap(x=>x.data).map(x=>({id:x.id,font:x.minRenderedFont,sourceMin:x.minFont,box:x.viewBoxWidth,overflow:x.overflow})));
}finally{c?.close();chrome.kill();server.close()}
