import {spawn} from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {fileURLToPath} from 'node:url';
const OUT=path.dirname(fileURLToPath(import.meta.url)),ROOT=path.resolve(OUT,'../../..');
const PORT=5269,DEBUG=9309,chromePath='C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const topic='topic-5-2-mitre-attack-framework';
const protectedIds=['topic-5-1-hashing-digital-signatures','topic-5-1-tpm-vs-hsm','topic-5-1-data-sanitization-destruction','topic-5-3-irp-lifecycle-phases'];
fs.mkdirSync(path.join(OUT,'screenshots'),{recursive:true});
const mime={'.html':'text/html','.js':'text/javascript','.mjs':'text/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.woff2':'font/woff2','.ico':'image/x-icon'};
const server=http.createServer((req,res)=>{const u=new URL(req.url,'http://localhost');const p=path.resolve(ROOT,'.'+decodeURIComponent(u.pathname==='/'?'/index.html':u.pathname));if(!p.startsWith(ROOT+path.sep)){res.writeHead(403);res.end();return;}if(!fs.existsSync(p)||!fs.statSync(p).isFile()){res.writeHead(404);res.end();return;}res.writeHead(200,{'Content-Type':(mime[path.extname(p)]||'application/octet-stream')+'; charset=utf-8'});fs.createReadStream(p).pipe(res);});
await new Promise((resolve,reject)=>{server.on('error',reject);server.listen(PORT,'127.0.0.1',resolve);});
const profile=fs.mkdtempSync(path.join(os.tmpdir(),'sec-cert-semantic-')),log=fs.openSync(path.join(OUT,'chrome-launch.txt'),'w');
const chrome=spawn(chromePath,[`--remote-debugging-port=${DEBUG}`,`--user-data-dir=${profile}`,'--headless=new','--no-first-run','--no-default-browser-check','--disable-extensions','--disable-background-networking','about:blank'],{windowsHide:true,stdio:['ignore',log,log]});
chrome.on('error',e=>fs.appendFileSync(path.join(OUT,'chrome-launch.txt'),String(e)));
const sleep=ms=>new Promise(r=>setTimeout(r,ms));let ws,seq=0;const pending=new Map(),exceptions=[],consoleErrors=[],matrix=[];
try{
  let targets;for(let i=0;i<50;i++){try{targets=await(await fetch(`http://127.0.0.1:${DEBUG}/json`)).json();if(targets.some(t=>t.type==='page'))break;}catch{}await sleep(200);}
  const target=targets?.find(t=>t.type==='page');if(!target)throw Error('Chrome unavailable: no debugging target');
  ws=new WebSocket(target.webSocketDebuggerUrl);await new Promise((resolve,reject)=>{ws.onopen=resolve;ws.onerror=reject;});
  ws.onmessage=event=>{const m=JSON.parse(event.data);if(m.method==='Runtime.exceptionThrown')exceptions.push(m.params);if(m.method==='Runtime.consoleAPICalled'&&m.params.type==='error')consoleErrors.push(m.params.args.map(a=>a.value||a.description).join(' '));if(m.id&&pending.has(m.id)){const p=pending.get(m.id);clearTimeout(p.timer);pending.delete(m.id);m.error?p.reject(Error(m.error.message)):p.resolve(m.result);}};
  const send=(method,params={})=>new Promise((resolve,reject)=>{const id=++seq,timer=setTimeout(()=>reject(Error('CDP timeout: '+method)),20000);pending.set(id,{resolve,reject,timer});ws.send(JSON.stringify({id,method,params}));});
  const evaluate=async expression=>{const r=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(r.exceptionDetails.exception?.description||'Page evaluation failed');return r.result?.value;};
  for(const m of ['Page.enable','Runtime.enable','DOM.enable'])await send(m);
const stage=process.argv[2];if(!['before','after'].includes(stage))throw Error('stage required');
const shotDir=path.join(OUT,'screenshots','matrix-'+stage);fs.mkdirSync(shotDir,{recursive:true});
const version=await(await fetch(`http://127.0.0.1:${DEBUG}/json/version`)).json();
function components(){return [...document.querySelectorAll('.reading-article .reading-diagram-card[data-diagram],.reading-article .reading-figure,.reading-article .reading-example-box')];}
function inspect(){
 const a=document.querySelector('.reading-article'),heads=[...a.querySelectorAll('h3[id],.reading-topic-anchor[id]')],comp=[...a.querySelectorAll('.reading-diagram-card[data-diagram],.reading-figure,.reading-example-box')];
 const visible=e=>{const b=e.getBoundingClientRect();return b.width>0&&b.height>0&&getComputedStyle(e).visibility!=='hidden';};
 function rgba(s){const m=s?.match(/[\d.]+/g);return m&&m.length>=3?[...m.slice(0,3).map(Number),m.length>3?Number(m[3]):1]:null;}
 function over(f,b){return f.slice(0,3).map((v,i)=>v*f[3]+b[i]*(1-f[3]));}
 function rgb(s){return rgba(s)?.slice(0,3);}
 function contrast(x,y){const lum=a=>a.map(v=>v/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((n,v,i)=>n+v*[.2126,.7152,.0722][i],0);const p=lum(x),q=lum(y);return(Math.max(p,q)+.05)/(Math.min(p,q)+.05);}
 function bg(e){const chain=[];for(let p=e;p;p=p.parentElement)chain.unshift(p);let result=[255,255,255];for(const p of chain){const color=rgba(getComputedStyle(p).backgroundColor);if(color)result=over(color,result);}return result;}
 const contrastCandidates=[],tiny=[];
 for(const e of a.querySelectorAll('svg text'))if(visible(e)){
  const st=getComputedStyle(e),svg=e.ownerSVGElement,b=e.getBBox(),matrix=e.getScreenCTM(),px=parseFloat(st.fontSize)*Math.hypot(matrix.a,matrix.b);if(px<10)tiny.push({text:e.textContent.trim(),px,diagram:e.closest('[data-diagram]')?.dataset.diagram});
  let back=bg(svg);const pt=svg.createSVGPoint();pt.x=b.x+b.width/2;pt.y=b.y+b.height/2;const screen=pt.matrixTransform(matrix);
  for(const rect of svg.querySelectorAll('rect')){const r=rect.getBoundingClientRect(),rs=getComputedStyle(rect);if(r.left<=screen.x&&r.right>=screen.x&&r.top<=screen.y&&r.bottom>=screen.y&&rs.fill!=='none'&&(rect.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING)){const c=rgba(rs.fill);if(c){c[3]*=Number(rs.fillOpacity);back=over(c,back);}}}
  const foreground=rgb(st.fill);if(foreground&&back){const ratio=contrast(foreground,back),required=px>=24||(px>=18.66&&Number(st.fontWeight)>=700)?3:4.5;if(ratio<required)contrastCandidates.push({text:e.textContent.trim(),ratio,foreground,background:back,px,required,diagram:e.closest('[data-diagram]')?.dataset.diagram});}
 }
 return{domain:Number(a.dataset.domainId),width:innerWidth,height:innerHeight,theme:document.documentElement.dataset.theme,pageOverflow:Math.max(0,document.documentElement.scrollWidth-innerWidth),h1:a.querySelectorAll('h1').length,headings:heads.map(h=>({id:h.id,text:h.textContent})),tables:a.querySelectorAll('table').length,nested:a.querySelectorAll('.reading-table-wrapper .reading-table-wrapper').length,scenarios:a.querySelectorAll('.reading-scenario-card').length,components:comp.map((e,i)=>{const prev=heads.filter(h=>!!(h.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING)).at(-1),style=getComputedStyle(e);return{index:i,type:e.matches('.reading-diagram-card[data-diagram]')?'diagram':e.matches('figure')?'image':'example',id:e.dataset.diagram||e.querySelector('img')?.getAttribute('src')||e.querySelector('.reading-example-title')?.textContent||'example',anchor:prev?.id,text:e.innerText,display:style.display,images:[...e.querySelectorAll('img')].map(i=>({src:i.getAttribute('src'),alt:i.alt,loaded:i.complete&&i.naturalWidth>0})),desktop:[...e.querySelectorAll('.reading-diag-desktop')].some(visible),mobile:[...e.querySelectorAll('.reading-diag-mobile')].some(visible),overflow:e.scrollWidth>e.clientWidth+2};}),tiny,contrastCandidates,leaks:a.innerText.includes('<!--'),text:a.innerText,buttons:[...document.querySelectorAll('button')].map(b=>({id:b.id,aria:b.getAttribute('aria-label'),text:b.textContent.trim()}))};
}

for(const d of[1,2,3,4,5])for(const[width,height]of[[1920,1080],[1366,768]])for(const theme of['light','dark']){
 await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});await send('Page.navigate',{url:`http://127.0.0.1:${PORT}/#/reading/domain-${d}`});for(let i=0;i<80;i++){if(await evaluate(`!!document.querySelector('.reading-article[data-domain-id="${d}"] table')`))break;await sleep(100);}await evaluate(`document.documentElement.setAttribute('data-theme','${theme}');document.body.classList.toggle('light-mode','${theme}'==='light');document.fonts.ready`);await sleep(550);const r=await evaluate('('+inspect.toString()+')()');matrix.push(r);console.log(JSON.stringify({d,width,theme,overflow:r.pageOverflow,nested:r.nested,tiny:r.tiny,contrast:r.contrastCandidates}));}
fs.writeFileSync(path.join(OUT,'render-probe.json'),JSON.stringify(matrix,null,2)+'\n');
}catch(e){console.error(e);process.exitCode=1;}finally{ws?.close();chrome.kill();server.close();}
