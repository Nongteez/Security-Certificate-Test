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

const out={checks:[],screenshots:[]};const server=await startServer();
const tmpDir=fs.mkdtempSync(path.join(os.tmpdir(),'rn-focused-'));
const chrome=spawn(CHROME_PATH,['--headless=new',`--remote-debugging-port=${DEBUG_PORT}`,`--user-data-dir=${tmpDir}`,'--no-first-run','--no-default-browser-check','about:blank'],{windowsHide:true});
let cdp,n=0;const save=()=>fs.writeFileSync(path.join(ARTIFACTS_DIR,'final-browser-checks.json'),JSON.stringify(out,null,2));
try{
 for(let i=0;i<50;i++){try{if((await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).ok)break;}catch{}await sleep(150);}
 const t=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new`,{method:'PUT'})).json();cdp=new CDPClient(t.webSocketDebuggerUrl);await cdp.connect();await cdp.send('Page.enable');
 const nav=async(hash,w=1366,h=768)=>{await cdp.setViewport(w,h,w<=768);await cdp.send('Page.navigate',{url:`http://127.0.0.1:${PORT}/index.html?independent-case=${++n}${hash}`});for(let i=0;i<80;i++){await sleep(80);if(await cdp.eval(`!!document.querySelector('.reading-article-markdown h3')`))break;}await cdp.eval(`document.fonts.ready.then(()=>true)`);await sleep(600);};
 const take=async(file,domain,subsection,width,height,theme,findingId,clip=null)=>{await cdp.screenshot(path.join(ARTIFACTS_DIR,file),clip);out.screenshots.push({file,domain,subsection,viewport:`${width}x${height}`,theme,findingId})};
 // DevTools listener inventory verifies lifecycle without changing app sources.
 await nav('#topic-2-1-grc-foundations');
 const listeners=async()=>{const r=await cdp.send('Runtime.evaluate',{expression:`({scroll:getEventListeners(window).scroll?.length||0,resize:getEventListeners(window).resize?.length||0})`,includeCommandLineAPI:true,returnByValue:true});return r.result.value;};
 const l1=await listeners();await cdp.eval(`location.hash='#topic-3-1-jml-lifecycle'`);await sleep(800);const l2=await listeners();await cdp.eval(`location.hash='#topic-4-1-fundamentals-topologies'`);await sleep(800);const l3=await listeners();
 out.checks.push({name:'reader-route-listeners',counts:[l1,l2,l3]});
 await cdp.eval(`history.back()`);await sleep(800);const back=await cdp.eval(`({domain:document.querySelector('.reading-article')?.dataset.domainId,hash:location.hash})`);await cdp.eval(`history.forward()`);await sleep(800);const forward=await cdp.eval(`({domain:document.querySelector('.reading-article')?.dataset.domainId,hash:location.hash})`);out.checks.push({name:'browser-history',back,forward});
 for(const [domain,anchor,selector] of [[1,'topic-1-1-core-concepts','.reading-table-wrapper'],[1,'topic-1-2-quantitative-risk','.reading-calculation-box'],[2,'topic-2-1-frameworks-standards','.reading-table-grc-frameworks-wrapper'],[3,'topic-3-2-models-matrix','.reading-table-wrapper'],[4,'topic-4-1-tcp-ip-mapping','.reading-table-wrapper']]){
  await nav('#'+anchor,320,568);await cdp.eval(`import('./js/core/theme.js').then(m=>m.applyTheme('light'))`);await sleep(400);
  await cdp.eval(`(()=>{const h=document.getElementById('${anchor}');let e=h;while(e&&!e.matches('${selector}'))e=e.nextElementSibling;if(e){e.scrollIntoView({behavior:'instant'});window.scrollBy(0,-20);window.__auditTarget=e;}})()`);
  const bounds=await cdp.eval(`(()=>{let e=window.__auditTarget||document.querySelector('${selector}');if(!e)return null;let r=e.getBoundingClientRect();return {x:r.x+scrollX,y:r.y+scrollY,width:r.width,height:r.height,scale:1}})()`);
  if(bounds)await take(`full-component-d${domain}-${anchor}-320-light.png`,domain,anchor,320,568,'light',domain===2?['RN-I-009']:['RN-I-014'],bounds);
 }
 // Full scenario and MFA contrast evidence after settled theme.
 for(const theme of ['light','dark']){
  await nav('#topic-1-5-distinctions-scenarios',390,844);await cdp.eval(`import('./js/core/theme.js').then(m=>m.applyTheme('${theme}'))`);await sleep(500);
  await cdp.eval(`document.querySelector('.reading-scenario-card').scrollIntoView({behavior:'instant'});window.scrollBy(0,-20)`);await take(`scenario-settled-${theme}.png`,1,'1.5.4',390,844,theme,['RN-I-008']);
 }
 await nav('#topic-1-1-mfa',390,844);await cdp.eval(`import('./js/core/theme.js').then(m=>m.applyTheme('dark'))`);await sleep(500);await cdp.eval(`document.querySelector('.reading-mfa-stack').scrollIntoView({behavior:'instant'})`);await take('mfa-settled-dark.png',1,'1.1.4',390,844,'dark',['RN-I-008']);
 // Visible keyboard focus at top; closed drawer target is then reached with Tab.
 await nav('#topic-2-1-grc-foundations',390,844);await cdp.eval(`window.scrollTo(0,0);document.getElementById('btn-toggle-sidebar').focus()`);await take('keyboard-focus-sidebar-toggle.png',2,'sidebar',390,844,'dark',['RN-I-006']);
 const focus=await cdp.eval(`(()=>{const e=document.activeElement,s=getComputedStyle(e);return {id:e.id,outline:s.outline,boxShadow:s.boxShadow}})()`);out.checks.push({name:'visible-focus-style',focus});
 await cdp.eval(`document.getElementById('reading-theme-toggle').focus()`);await cdp.send('Input.dispatchKeyEvent',{type:'keyDown',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});await cdp.send('Input.dispatchKeyEvent',{type:'keyUp',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});out.checks.push({name:'closed-drawer-focus',result:await cdp.eval(`(()=>{const e=document.activeElement,r=e.getBoundingClientRect();return {id:e.id,x:r.x,y:r.y,drawerOpen:document.querySelector('.mobile-sidebar-open')!==null}})()`)});
 // Browser's page/pinch zoom; 320px matrix separately covers narrow reflow.
 await cdp.send('Emulation.setPageScaleFactor',{pageScaleFactor:2});await take('page-zoom-200.png',2,'2.1.1',390,844,'dark',[]);out.checks.push({name:'page-zoom-200',result:await cdp.eval(`({scale:visualViewport.scale,visualWidth:visualViewport.width,layoutWidth:innerWidth})`)});await cdp.send('Emulation.setPageScaleFactor',{pageScaleFactor:1});
 // Table keyboard focus works natively in this Chrome, despite no explicit tabindex.
 // Parser trust boundary probe is a string-only evaluation; no payload is inserted into the DOM.
 const parser=await cdp.eval(`import('./js/core/markdown-parser.js').then(m=>({inline:m.parseInline('<span onclick="auditProbe()">sample</span>'),raw:m.parseMarkdown('<div onclick="auditProbe()">sample</div>')}))`);out.checks.push({name:'parser-attribute-preservation-string-only',parser});
 out.checks.push({name:'source-dom-counts',result:await cdp.eval(`({lang:document.documentElement.lang,languageParts:document.querySelector('.reading-article-markdown').querySelectorAll('[lang]').length,thai:document.querySelector('.reading-article-markdown').innerText.length})`)});
 save();console.log('FINAL BROWSER CHECKS DONE',out.checks.length,out.screenshots.length);
}catch(e){out.error=e.stack;save();console.error(e);process.exitCode=1;}finally{cdp?.close();chrome.kill();server.close();}
