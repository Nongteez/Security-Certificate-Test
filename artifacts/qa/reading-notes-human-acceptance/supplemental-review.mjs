import fs from 'node:fs';import path from 'node:path';
import {CDPClient,sleep,ARTIFACTS_DIR,DEBUG_PORT,PORT} from './chrome-support.mjs';
const c=new CDPClient((await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/list`)).json()).find(t=>t.type==='page').webSocketDebuggerUrl);await c.connect();await c.send('Page.enable');await c.send('Accessibility.enable');
const out={screenshots:[],controls:[],axUnnamedSamples:[],method:'Missing full-height captures; bounded smooth-scroll settling and targeted accessible-tree inspection'};
const main=JSON.parse(fs.readFileSync(path.join(ARTIFACTS_DIR,'representative-results.json'),'utf8'));
async function nav(a,d,w,h,theme){await c.setViewport(w,h,w<840);await c.send('Page.navigate',{url:`http://127.0.0.1:${PORT}/index.html?supplement=${Date.now()}#${a}`});for(let i=0;i<120;i++){if(await c.eval(`document.querySelector('.reading-article')?.dataset.domainId==='${d}'`))break;await sleep(80)}await c.eval(`document.fonts.ready.then(()=>import('./js/core/theme.js')).then(m=>m.applyTheme('${theme}'))`);await sleep(250)}
async function capture(file,selector){const g=await c.eval(`(()=>{document.body.style.width=document.documentElement.clientWidth+'px';const r=document.querySelector(${JSON.stringify(selector)}).getBoundingClientRect();return{x:Math.max(0,r.x-2),y:Math.max(0,r.y+scrollY-2),width:r.width+4,height:r.height+4,scale:1}})()`);const p=await c.send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:g});fs.writeFileSync(path.join(ARTIFACTS_DIR,file),Buffer.from(p.data,'base64'));await c.eval(`document.body.style.width=''`);out.screenshots.push({file,selector,geometry:g})}
try{
for(const s of main.screenshots.filter(x=>x.truncated)){await nav(s.anchor,s.domain,s.width,s.height,s.theme);await capture('full-'+s.file,`[data-diagram="${s.id}"]`)}
for(const [w,h,t]of [[1366,768,'light'],[320,568,'dark']]){await nav('topic-1-1-privacy-data-protection',1,w,h,t);await capture(`privacy-prose-roles-${w}-${t}.png`,'.reading-privacy-context');await nav('topic-3-1-iam-frameworks',3,w,h,t);await capture(`nist-reference-${w}-${t}.png`,'[data-diagram="nistSp80063Framework"]')}
await nav('topic-1-1-cia-triad',1,1366,768,'light');const ax=await c.send('Accessibility.getFullAXTree');
for(const n of ax.nodes.filter(n=>!n.ignored&&n.role?.value==='image'&&!n.name?.value).slice(0,8)){const d=await c.send('DOM.describeNode',{backendNodeId:n.backendDOMNodeId});out.axUnnamedSamples.push({role:n.role,name:n.name,backendNodeId:n.backendDOMNodeId,node:d.node})}
for(const w of [1366,320]){
await nav('topic-3-2-abac',3,w,w===1366?768:568,'dark');await c.eval(`scrollTo({top:0,behavior:'instant'});document.getElementById('btn-reading-scroll-nav').focus({preventScroll:true})`);
for(const [key,destination]of [['Enter','bottom'],[' ','top']]){
 const start=Date.now();await c.send('Input.dispatchKeyEvent',{type:'keyDown',key,code:key==='Enter'?'Enter':'Space',windowsVirtualKeyCode:key==='Enter'?13:32,text:key==='Enter'?'\r':' ',unmodifiedText:key==='Enter'?'\r':' '});await c.send('Input.dispatchKeyEvent',{type:'keyUp',key,code:key==='Enter'?'Enter':'Space',windowsVirtualKeyCode:key==='Enter'?13:32});let state;
 for(let i=0;i<80;i++){state=await c.eval(`({y:scrollY,max:document.documentElement.scrollHeight-innerHeight,focus:document.activeElement.id,visible:document.activeElement.matches(':focus-visible')})`);if((destination==='top'?state.y:Math.abs(state.max-state.y))<=2)break;await sleep(50)}
 const pass=(destination==='top'?state.y:Math.abs(state.max-state.y))<=2&&state.focus==='btn-reading-scroll-nav'&&state.visible;out.controls.push({w,key,destination,pass,elapsedMs:Date.now()-start,...state});const name=`smooth-control-${w}-${destination}.png`;await c.screenshot(path.join(ARTIFACTS_DIR,name));out.screenshots.push({file:name});console.log('CONTROL',w,destination,pass,out.controls.at(-1).elapsedMs)
}}
out.finished=true;
}catch(e){out.error=e.stack;console.error(e);process.exitCode=1}finally{fs.writeFileSync(path.join(ARTIFACTS_DIR,'supplemental-results.json'),JSON.stringify(out,null,2));c.close()}
