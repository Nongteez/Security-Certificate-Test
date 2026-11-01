import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const ROOT = path.resolve('.');
const PORT = 5257;
const DEBUG_PORT = 9317;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/reading-notes-phase1b-batch-a');

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

const out={checks:[],screenshots:[],errors:[]};
const server=await startServer();
const tmpDir=fs.mkdtempSync(path.join(os.tmpdir(),'rn-batch-a-'));
const chrome=spawn(CHROME_PATH,['--headless=new',`--remote-debugging-port=${DEBUG_PORT}`,`--user-data-dir=${tmpDir}`,'--no-first-run','--no-default-browser-check','about:blank'],{windowsHide:true});
let cdp,caseNo=0;
const save=()=>fs.writeFileSync(path.join(ARTIFACTS_DIR,'browser-results.json'),JSON.stringify(out,null,2));
try {
 for(let i=0;i<60;i++){try{if((await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).ok)break;}catch{}await sleep(150)}
 out.chrome=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).json();
 const tab=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new`,{method:'PUT'})).json();
 cdp=new CDPClient(tab.webSocketDebuggerUrl);await cdp.connect();await cdp.send('Page.enable');await cdp.send('Runtime.enable');await cdp.send('Log.enable');
 cdp.ws.addEventListener('message',event=>{let m=JSON.parse(event.data);if(m.method==='Runtime.exceptionThrown'||m.method==='Runtime.consoleAPICalled'&&m.params.type==='error'||m.method==='Log.entryAdded'&&m.params.entry.level==='error')out.errors.push(m)});
 const nav=async(anchor,w,h,theme)=>{
  await cdp.setViewport(w,h,w<768);await cdp.send('Page.navigate',{url:`http://127.0.0.1:${PORT}/index.html?batch-a=${++caseNo}#${anchor}`});
  for(let i=0;i<100;i++){await sleep(80);if(await cdp.eval(`!!document.querySelector('.reading-article-markdown h3')`))break}
  await cdp.eval(`document.fonts.ready.then(()=>true)`);await cdp.eval(`import('./js/core/theme.js').then(m=>m.applyTheme('${theme}'))`);await sleep(500);
 };
 const cases=[
 [1,'topic-1-1-core-concepts',null],
 [1,'topic-1-1-privacy-data-protection','privacyFlow'],
 [1,'topic-1-3-laws-regulations',null],
 [1,'topic-1-4-control-types',null],
 [2,'topic-2-2-bia',null],
 [2,'topic-2-2-bc-vs-dr','bcVsDr'],
 [2,'topic-2-4-memory-aid','effectivenessHierarchy'],
 [3,'topic-3-1-iam-frameworks',null],
 [3,'topic-3-2-mac','accessControlModels'],
 [4,'topic-4-1-osi-model','osiModel'],
 [4,'topic-4-1-tcp-ip-mapping',null],
 [4,'topic-4-1-ipv4-cidr-nat',null],
 [4,'topic-4-1-ipv6-architecture',null],
 [4,'topic-4-1-wireless-security',null],
 [4,'topic-4-3-service-models',null],
 [4,'topic-4-3-cloud-network-controls',null]
 ];
 // Resolve every subsection by its actual source heading rather than silently accepting a fallback.
 for(const d of [1,2,3,4]){
  await nav(`topic-${d}-1-${d===1?'core-concepts':d===2?'grc-foundations':d===3?'iam-overview':'fundamentals-topologies'}`,1366,768,'light');
  const shape=await cdp.eval(`({domain:document.querySelector('.reading-article').dataset.domainId,h1:document.querySelector('.reading-article h1').textContent,headings:[...document.querySelectorAll('.reading-article-markdown h3')].map(e=>({id:e.id,text:e.textContent})),tables:document.querySelectorAll('.reading-article-markdown table').length,diagrams:document.querySelectorAll('.reading-diagram-card').length,raw:/:::scenario|\\[object Object\\]|\uFFFD/.test(document.querySelector('.reading-article-markdown').textContent)})`);
  out.checks.push({name:'domain-load-and-structure',...shape});
 }
 for(const [d,requested,diagram] of cases)for(const theme of ['light','dark'])for(const w of [1366,390]){
  const anchor=requested;
  await nav(anchor,w,w===390?844:768,theme);
  if(!await cdp.eval(`!!document.getElementById('${anchor}')`)){out.checks.push({name:'missing-requested-anchor',d,requested});continue}
  const result=await cdp.eval(`(()=>{const h=document.getElementById('${anchor}');h.scrollIntoView({behavior:'instant',block:'start'});return {domain:document.querySelector('.reading-article').dataset.domainId,anchor:h.id,theme:document.documentElement.dataset.theme||document.documentElement.getAttribute('data-theme'),hash:location.hash}})()`);
  await sleep(150);
  const file=`d${d}-${anchor}-${theme}-${w}.png`;await cdp.screenshot(path.join(ARTIFACTS_DIR,file));out.screenshots.push({file,d,anchor,theme,viewport:`${w}x${w===390?844:768}`});
  const svg=await cdp.eval(`(()=>{const a=[...document.querySelectorAll('.reading-diag-desktop svg text')].filter(e=>/ค่าที่วัดได้|Central Policy|RPC, NetBIOS|DISASTER RECOVERY/.test(e.textContent));return a.map(e=>{const r=e.getBoundingClientRect(),s=e.ownerSVGElement.getBoundingClientRect();return {text:e.textContent,visible:!!r.width,insideSVG:r.left>=s.left-1&&r.right<=s.right+1}})})()`);
  out.checks.push({name:'affected-section',d,requested,w,theme,result,svg});
 }
 save();console.log(JSON.stringify({checks:out.checks.length,screenshots:out.screenshots.length,errors:out.errors.length,missing:out.checks.filter(c=>c.name==='missing-requested-anchor')}));
}catch(e){out.error=e.stack;save();console.error(e);process.exitCode=1}finally{cdp?.close();chrome.kill();server.close()}

