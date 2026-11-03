import fs from 'node:fs';
import path from 'node:path';
import {CDPClient,sleep,ARTIFACTS_DIR,DEBUG_PORT,PORT} from './chrome-support.mjs';
const tabs=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/list`)).json();
const tab=tabs.find(t=>t.type==='page'&&t.url.includes(`:${PORT}/`));
if(!tab)throw Error('Isolated review tab missing');
const c=new CDPClient(tab.webSocketDebuggerUrl);await c.connect();await c.send('Page.enable');await c.send('Runtime.enable');await c.send('Accessibility.enable');
const inventory=JSON.parse(fs.readFileSync('artifacts/qa/reading-notes-phase3f/diagram-matrix.json','utf8'));
const requested=['ciaTriad','defenseInDepth','controlTimeline','privacyFlow','ethicsCanons','riskCalculationFlow','bcVsDrScope','effectivenessHierarchy','iamLifecycle','leastPrivilegeVsSod','accessControlModels','osiVsTcpIpModel','cloudSharedResponsibility','dmzFirewallArchitecture'];
const cases=inventory.filter(x=>requested.includes(x.id)).map(x=>({domain:x.domain,id:x.id,anchor:x.anchor,diagram:true}));
cases.push({domain:2,id:'dashboards',anchor:'topic-2-4-dashboards'},{domain:2,id:'scorecards',anchor:'topic-2-4-scorecards'});
const out={method:'Targeted headed installed Chrome/CDP; screenshots require model visual review; no full matrix rerun',chrome:await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).json(),cases,screenshots:[],observations:[],errors:[]};
const save=()=>fs.writeFileSync(path.join(ARTIFACTS_DIR,'representative-results.json'),JSON.stringify(out,null,2));
let sequence=0;
async function nav(anchor,d){await c.send('Page.navigate',{url:`http://127.0.0.1:${PORT}/index.html?human-review=${++sequence}#${anchor}`});for(let i=0;i<150;i++){if(await c.eval(`document.querySelector('.reading-article')?.dataset.domainId==='${d}'&&!!document.getElementById('${anchor}')`))break;await sleep(80)}await c.eval('document.fonts.ready.then(()=>true)');await sleep(200)}
try{
for(const [width,height]of [[1920,1080],[1366,768],[390,844],[320,568]])for(const theme of ['light','dark'])for(let d=1;d<=4;d++){
 await c.setViewport(width,height,width<840);const group=cases.filter(x=>x.domain===d);await nav(group[0].anchor,d);
 await c.eval(`import('./js/core/theme.js').then(m=>m.applyTheme('${theme}'))`);await sleep(100);
 const ax=await c.send('Accessibility.getFullAXTree');
 const observation=await c.eval(`(()=>{const a=document.querySelector('.reading-article-markdown'),hs=[...a.querySelectorAll('h1,h2,h3,h4,h5,h6')].filter(e=>e.getBoundingClientRect().width);let last=1;const skips=[];for(const h of hs){const n=+h.tagName[1];if(n>last+1)skips.push(h.textContent);last=n}return{overflow:document.documentElement.scrollWidth>innerWidth+1,bodyLang:a.lang,headingSkips:skips,mathErrors:document.querySelectorAll('.katex-error').length,tableRegions:[...a.querySelectorAll('.reading-table-wrapper')].map(w=>({role:w.getAttribute('role'),name:w.getAttribute('aria-label'),tabindex:w.tabIndex,headers:[...w.querySelectorAll('th')].map(h=>h.scope)})),diagrams:[...a.querySelectorAll('[data-diagram]')].map(e=>({id:e.dataset.diagram,role:e.getAttribute('role'),label:e.getAttribute('aria-label'),svgLabel:e.querySelector('svg')?.getAttribute('aria-label'),text:e.textContent.replace(/\\s+/g,' ').trim()}))}})()`);
 out.observations.push({domain:d,width,height,theme,...observation,axHeadings:ax.nodes.filter(n=>!n.ignored&&n.role?.value==='heading').map(n=>({name:n.name?.value,level:n.properties?.find(p=>p.name==='level')?.value?.value})),axImages:ax.nodes.filter(n=>!n.ignored&&n.role?.value==='image').map(n=>n.name?.value)});
 for(const [index,item]of group.entries()){
  await c.eval(`document.getElementById('${item.anchor}').scrollIntoView({behavior:'instant'});scrollBy(0,-20)`);await sleep(80);
  if(index===0){const file=`viewport-d${d}-${width}-${theme}.png`;await c.screenshot(path.join(ARTIFACTS_DIR,file));out.screenshots.push({file,domain:d,width,height,theme,anchor:item.anchor,type:'viewport'})}
  const g=await c.eval(`(()=>{document.body.style.width=document.documentElement.clientWidth+'px';const heading=document.getElementById('${item.anchor}'),e=${item.diagram?`document.querySelector('[data-diagram="${item.id}"]')`:'heading'};if(!e)throw Error('Missing actual case');const r=e.getBoundingClientRect();let h=r.height;if(e===heading){let next=heading.nextElementSibling;while(next&&!next.matches('h3')){const b=next.getBoundingClientRect();h=Math.max(h,b.bottom-r.top);next=next.nextElementSibling}}return{x:Math.max(0,r.x-2),y:Math.max(0,r.y+scrollY-2),width:r.width+4,height:Math.min(2400,h+4),actualHeight:h}})()`);
  const file=`target-${item.id}-${width}-${theme}.png`;const image=await c.send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:{x:g.x,y:g.y,width:g.width,height:g.height,scale:1}});fs.writeFileSync(path.join(ARTIFACTS_DIR,file),Buffer.from(image.data,'base64'));
  out.screenshots.push({file,...item,width,height,theme,type:'target',geometry:g,truncated:g.actualHeight>2400});await c.eval(`document.body.style.width=''`);
 }
 save();console.log('REVIEW',d,width,theme,group.length,'target cases');
}
await c.setViewport(1366,768);await nav('topic-1-1-privacy-data-protection',1);
out.finished=true;save();console.log('SAVED',out.observations.length,'contexts',out.screenshots.length,'screenshots');
}catch(e){out.error=e.stack;save();console.error(e);process.exitCode=1}finally{c.close()}
