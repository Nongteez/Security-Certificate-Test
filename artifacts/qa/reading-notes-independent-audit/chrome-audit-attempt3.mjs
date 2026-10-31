import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const ROOT = path.resolve('.');
const PORT = 5247;
const DEBUG_PORT = 9307;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/reading-notes-independent-audit');

fs.mkdirSync(ARTIFACTS_DIR, { recursive: true });

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

function startServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      let reqPath = decodeURIComponent(req.url.split('?')[0]);
      if (reqPath === '/') reqPath = '/index.html';
      const fullPath = path.join(ROOT, reqPath);
      if (!fullPath.startsWith(ROOT)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
      }
      fs.stat(fullPath, (err, stats) => {
        if (err || !stats.isFile()) {
          res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end(`Not Found: ${reqPath}`);
          return;
        }
        const ext = path.extname(fullPath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': contentType, 'Access-Control-Allow-Origin': '*' });
        fs.createReadStream(fullPath).pipe(res);
      });
    });
    server.listen(PORT, '127.0.0.1', () => resolve(server));
    server.on('error', reject);
  });
}

class CDPClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.ws = null;
    this.id = 0;
    this.callbacks = new Map();
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.wsUrl);
      this.ws.onopen = () => resolve();
      this.ws.onerror = err => reject(err);
      this.ws.onmessage = event => {
        const msg = JSON.parse(event.data);
        if (msg.id && this.callbacks.has(msg.id)) {
          const { resolve, reject } = this.callbacks.get(msg.id);
          this.callbacks.delete(msg.id);
          if (msg.error) reject(new Error(msg.error.message));
          else resolve(msg.result);
        }
      };
    });
  }

  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = ++this.id;
      const timeout = setTimeout(() => {
        this.callbacks.delete(id);
        reject(new Error(`CDP timeout: ${method}`));
      }, 25000);
      this.callbacks.set(id, {
        resolve: v => { clearTimeout(timeout); resolve(v); },
        reject: e => { clearTimeout(timeout); reject(e); }
      });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  async eval(expression) {
    const res = await this.send('Runtime.evaluate', {
      expression,
      returnByValue: true,
      awaitPromise: true
    });
    if (res.exceptionDetails) {
      throw new Error(`Eval exception: ${res.exceptionDetails.text} (${res.exceptionDetails.exception?.description || ''})`);
    }
    return res.result?.value;
  }

  async setViewport(width, height, mobile = false) {
    await this.send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile
    });
  }

  async screenshot(filePath, clip = null) {
    const params = { format: 'png' };
    if (clip) params.clip = clip;
    const res = await this.send('Page.captureScreenshot', params);
    fs.writeFileSync(filePath, Buffer.from(res.data, 'base64'));
  }

  close() {
    if (this.ws) this.ws.close();
  }
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

const inventory=JSON.parse(fs.readFileSync(path.join(ARTIFACTS_DIR,'inventory.json'),'utf8'));
const out={started:new Date().toISOString(),configurations:[],screenshots:[],journeys:[],errors:[]};
const vp=[[1920,1080],[1366,768],[1024,768],[768,1024],[390,844],[375,812],[320,568]];
const server=await startServer();
const tmpDir=fs.mkdtempSync(path.join(os.tmpdir(),'chrome-independent-rn-'));
const chrome=spawn(CHROME_PATH,['--headless=new',`--remote-debugging-port=${DEBUG_PORT}`,'--disable-gpu','--no-first-run','--no-default-browser-check',`--user-data-dir=${tmpDir}`,'about:blank'],{windowsHide:true});
chrome.stderr.on('data',d=>process.stderr.write(d));
chrome.on('error',e=>console.error('CHROME SPAWN',e));
chrome.on('exit',(c,s)=>console.log('CHROME EXIT',c,s));
let cdp;
const save=()=>fs.writeFileSync(path.join(ARTIFACTS_DIR,'browser-results-attempt3.json'),JSON.stringify(out,null,2));
try {
 let ver;
 for(let i=0;i<50;i++){try{ver=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).json();break;}catch{}await sleep(200);}
 if(!ver)throw Error('Chrome CDP unavailable');out.browser=ver.Browser;
 const tab=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new`,{method:'PUT'})).json();
 cdp=new CDPClient(tab.webSocketDebuggerUrl);await cdp.connect();await cdp.send('Page.enable');await cdp.send('Runtime.enable');
 const nav=async hash=>{await cdp.send('Page.navigate',{url:`http://127.0.0.1:${PORT}/index.html${hash}`});for(let i=0;i<100;i++){await sleep(80);if(await cdp.eval(`!!document.querySelector('.reading-article-markdown h3')`))break;}await cdp.eval(`document.fonts.ready.then(()=>true)`);await sleep(350);};
 const shot=async(file,domain,subsection,width,height,theme,findingId)=>{await cdp.screenshot(path.join(ARTIFACTS_DIR,file));out.screenshots.push({file,domain,subsection,viewport:`${width}x${height}`,theme,findingId});};
 for(const [width,height] of vp)for(const theme of ['dark','light'])for(let domain=1;domain<=4;domain++){
  await cdp.setViewport(width,height,width<=768);await nav(`#/reading/domain-${domain}`);
  await cdp.eval(`import('./js/core/theme.js').then(m=>m.applyTheme('${theme}'))`);await sleep(120);
  const records=inventory.filter(x=>x.domain===domain);
  const result=await cdp.eval(`(()=>{
   const visible=e=>!!e.getClientRects().length&&getComputedStyle(e).visibility!=='hidden'&&getComputedStyle(e).display!=='none';
   const article=document.querySelector('.reading-article-markdown');
   const headings=[...article.querySelectorAll('h3')];
   const all=[...article.querySelectorAll('*')];
   const rect=e=>{const r=e.getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height}};
   const sections=${JSON.stringify(records)}.map((rec,i)=>{
    const h=headings.find(x=>x.textContent.trim()===rec.title)||headings[i];
    const next=headings[headings.indexOf(h)+1];
    const els=all.filter(e=>h&&(h===e||!!(h.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING))&&(!next||!!(e.compareDocumentPosition(next)&Node.DOCUMENT_POSITION_FOLLOWING)));
    const shown=els.filter(visible);
    return {...rec,headingMatched:!!h&&h.textContent.trim()===rec.title,anchorExists:!!document.getElementById(rec.anchor),elements:els.length,
     visibleTextChars:shown.filter(e=>e.childElementCount===0).map(e=>e.textContent).join('').length,
     h3:h?rect(h):null,paragraphs:els.filter(e=>e.tagName==='P').length,lists:els.filter(e=>/^[OU]L$/.test(e.tagName)).length,
     tables:els.filter(e=>e.tagName==='TABLE').map(t=>({text:t.innerText.slice(0,250),...rect(t),wrapperClient:t.parentElement.clientWidth,wrapperScroll:t.parentElement.scrollWidth,headers:t.querySelectorAll('th').length,scopeMissing:[...t.querySelectorAll('th')].filter(th=>!th.hasAttribute('scope')).length,tabindex:t.parentElement.getAttribute('tabindex')})),
     tinySvg:shown.filter(e=>e.tagName.toLowerCase()==='text').map(t=>{const c=t.getScreenCTM();return {text:t.textContent,font:parseFloat(getComputedStyle(t).fontSize)*(c?Math.hypot(c.a,c.b):1)}}).filter(x=>x.font<11),
     clippingCandidates:shown.filter(e=>e.clientWidth>0&&e.scrollWidth>e.clientWidth+2&&!e.closest('.reading-table-wrapper')&&['hidden','clip'].includes(getComputedStyle(e).overflowX)).slice(0,12).map(e=>({tag:e.tagName,cls:e.className,text:e.textContent.slice(0,90),client:e.clientWidth,scroll:e.scrollWidth})),
     mathLabels:els.filter(e=>e.getAttribute('role')==='math').map(e=>e.getAttribute('aria-label'))};
   });
   const p=article.querySelector('p:not(.reading-intro-label)'),ps=p?getComputedStyle(p):null;
   return {domain:${domain},viewport:'${width}x${height}',theme:'${theme}',pageOverflow:document.documentElement.scrollWidth-innerWidth,sections,
    typography:p?{...rect(p),font:ps.fontFamily,size:ps.fontSize,lineHeight:ps.lineHeight,weight:ps.fontWeight,color:ps.color}:null,
    fonts:[...document.fonts].map(f=>({family:f.family,status:f.status})),katex:!!window.katex,language:document.documentElement.lang,languageTags:article.querySelectorAll('[lang]').length,
    headings:[...article.querySelectorAll('h1,h2,h3,h4,h5,h6')].map(e=>({tag:e.tagName,text:e.textContent.slice(0,100)})),
    svgs:[...article.querySelectorAll('svg')].filter(s=>s.querySelector('text')).map(s=>({role:s.getAttribute('role'),label:s.getAttribute('aria-label'),labelledby:s.getAttribute('aria-labelledby'),title:!!s.querySelector('title'),visible:visible(s)})),
    rawLeaks:[String.fromCharCode(92)+'$',String.fromCharCode(92)+'times',String.fromCharCode(92)+'subset','**'].filter(x=>article.innerText.includes(x)),
    duplicateIds:[...document.querySelectorAll('[id]')].map(e=>e.id).filter((id,i,a)=>a.indexOf(id)!==i)};
  })()`);
  out.configurations.push(result);
  const target=domain===1?'topic-1-1-zero-trust-defense-in-depth':domain===2?'topic-2-1-frameworks-standards':domain===3?'topic-3-2-models-matrix':'topic-4-1-osi-model';
  await cdp.eval(`document.getElementById('${target}')?.scrollIntoView({behavior:'instant'});window.scrollBy(0,-20)`);await sleep(150);
  await shot(`d${domain}-${width}x${height}-${theme}.png`,domain,target,width,height,theme,domain===2?'RN-I-009':null);
  if(width===1920||width===390){
   const diagrams=await cdp.eval(`(()=>{const a=[...document.querySelectorAll('.reading-article-markdown svg')].filter(s=>s.querySelector('text'));return a.map((s,i)=>({i,title:s.closest('.reading-diagram-card')?.querySelector('.reading-diagram-title')?.textContent||s.getAttribute('aria-label')||'diagram-'+i}));})()`);
   for(const dg of diagrams){
    await cdp.eval(`(()=>{const s=[...document.querySelectorAll('.reading-article-markdown svg')].filter(s=>s.querySelector('text'))[${dg.i}];const el=s.closest('.reading-diagram-card')||s.parentElement;el.scrollIntoView({behavior:'instant'});window.scrollBy(0,-20);})()`);
    await shot(`diagram-d${domain}-${dg.i}-${width}-${theme}.png`,domain,dg.title,width,height,theme,null);
   }
  }
  console.log('CONFIG',domain,width,height,theme,'sections',result.sections.length,'overflow',result.pageOverflow);save();
 }
 // Runtime source dump and accessibility/contrast detail for each domain.
 for(let domain=1;domain<=4;domain++){
  await cdp.setViewport(1366,768,false);await nav(`#/reading/domain-${domain}`);
  fs.writeFileSync(path.join(ARTIFACTS_DIR,`domain-${domain}-rendered.html`),await cdp.eval(`document.querySelector('.reading-article-markdown').outerHTML`));
 }
 // Per-domain anchor/reload/resume journeys use a mid-subsection position, not merely nonzero scroll.
 for(let domain=1;domain<=4;domain++){
  const rec=inventory.filter(x=>x.domain===domain)[5];await nav('#'+rec.anchor);
  const before=await cdp.eval(`(()=>{const h=document.getElementById('${rec.anchor}');h.scrollIntoView({behavior:'instant'});window.scrollBy(0,420);return {y:scrollY,hash:location.hash,focus:document.activeElement.tagName}})()`);await sleep(700);
  const saved=await cdp.eval(`JSON.parse(localStorage.getItem('sec_cert_reading_progress_v1'))`);
  await cdp.send('Page.reload');await sleep(650);
  const after=await cdp.eval(`({domain:document.querySelector('.reading-article')?.dataset.domainId,y:scrollY,hash:location.hash,active:document.querySelector('.reading-nav-topic-link.active,.reading-nav-objective-link.active')?.textContent,focus:document.activeElement.tagName})`);
  out.journeys.push({name:'anchor-scroll-reload',domain,anchor:rec.anchor,before,saved,after});
 }
 await cdp.setViewport(390,844,true);await nav('#topic-2-1-frameworks-standards');
 await cdp.eval(`document.getElementById('btn-toggle-sidebar').click()`);await sleep(350);
 out.journeys.push({name:'mobile-open',result:await cdp.eval(`({open:document.querySelector('.reading-layout').classList.contains('mobile-sidebar-open'),focus:document.activeElement.id,expanded:document.getElementById('btn-toggle-sidebar').getAttribute('aria-expanded'),bodyOverflow:getComputedStyle(document.body).overflow,sidebarRole:document.getElementById('reading-sidebar').getAttribute('role')})`)});
 await shot('mobile-sidebar-open.png',2,'sidebar',390,844,'light','RN-I-006');
 await cdp.send('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});await cdp.send('Input.dispatchKeyEvent',{type:'keyUp',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});
 out.journeys.push({name:'mobile-Escape',open:await cdp.eval(`document.querySelector('.reading-layout').classList.contains('mobile-sidebar-open')`)});
 await cdp.eval(`document.getElementById('btn-sidebar-close-mobile').click()`);await sleep(300);
 const tabs=[];await cdp.eval(`document.activeElement.blur()`);
 for(let i=0;i<14;i++){await cdp.send('Input.dispatchKeyEvent',{type:'keyDown',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});await cdp.send('Input.dispatchKeyEvent',{type:'keyUp',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});tabs.push(await cdp.eval(`(()=>{const e=document.activeElement,r=e.getBoundingClientRect();return {id:e.id,text:e.textContent.slice(0,60),x:r.x,y:r.y,width:r.width,height:r.height}})()`));}
 out.journeys.push({name:'mobile-closed-Tab-sequence',tabs});
 // GRC scroll extremes and keyword measurements.
 for(const theme of ['light','dark'])for(const [width,height] of vp){
  await cdp.setViewport(width,height,width<=768);await nav('#topic-2-1-frameworks-standards');await cdp.eval(`import('./js/core/theme.js').then(m=>m.applyTheme('${theme}'))`);
  out.journeys.push({name:'GRC-details',theme,viewport:`${width}x${height}`,result:await cdp.eval(`(()=>{const t=document.querySelector('.reading-table-grc-frameworks'),w=t.parentElement;return {wrapper:{width:w.clientWidth,scroll:w.scrollWidth,tabindex:w.getAttribute('tabindex'),role:w.getAttribute('role'),label:w.getAttribute('aria-label')},columns:[...t.rows[0].cells].map(c=>c.getBoundingClientRect().width),keywords:[...t.querySelectorAll('td:nth-child(4) strong')].map(e=>({text:e.textContent,whiteSpace:getComputedStyle(e).whiteSpace,font:getComputedStyle(e).fontSize,color:getComputedStyle(e).color,width:e.getBoundingClientRect().width})),pageOverflow:document.documentElement.scrollWidth-innerWidth}})()`)});
  if(width<=390){await cdp.eval(`document.querySelector('.reading-table-grc-frameworks').parentElement.scrollLeft=9999`);await shot(`grc-right-${width}-${theme}.png`,2,'2.1.4 keywords',width,height,theme,'RN-I-009');}
 }
 out.finished=new Date().toISOString();save();console.log('DONE',out.configurations.length,'configs',out.screenshots.length,'screenshots',out.journeys.length,'journeys');
}catch(e){out.errors.push(e.stack);save();console.error(e);process.exitCode=1;}finally{cdp?.close();chrome.kill();server.close();}