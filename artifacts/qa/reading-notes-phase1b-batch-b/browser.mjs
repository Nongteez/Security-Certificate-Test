import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const ROOT = path.resolve('.');
const PORT = 5267;
const DEBUG_PORT = 9327;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/reading-notes-phase1b-batch-b');

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

const phase=process.argv[2]||'after';
const out={phase,checks:[],screenshots:[],errors:[]};
const server=await startServer();
const profile=fs.mkdtempSync(path.join(os.tmpdir(),'rn-batch-b-'));
const chrome=spawn(CHROME_PATH,['--headless=new',`--remote-debugging-port=${DEBUG_PORT}`,`--user-data-dir=${profile}`,'--no-first-run','--no-default-browser-check','about:blank'],{windowsHide:true});
let cdp,n=0;
try{
 for(let i=0;i<60;i++){try{if((await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).ok)break}catch{}await sleep(150)}
 out.chrome=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).json();
 const tab=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new`,{method:'PUT'})).json();cdp=new CDPClient(tab.webSocketDebuggerUrl);await cdp.connect();await cdp.send('Page.enable');await cdp.send('Runtime.enable');await cdp.send('Log.enable');
 cdp.ws.addEventListener('message',event=>{const m=JSON.parse(event.data);if(m.method==='Runtime.exceptionThrown'||m.method==='Runtime.consoleAPICalled'&&m.params.type==='error'||m.method==='Log.entryAdded'&&m.params.entry.level==='error')out.errors.push(m)});
 const targets={1:['topic-1-1-mfa','topic-1-2-quantitative-risk','topic-1-4-control-types','topic-1-5-isc2-ethics'],2:['topic-2-2-rto-rpo','topic-2-2-drp-sites','topic-2-3-password-protection','topic-2-4-mttd-mttr'],3:['topic-3-1-provisioning','topic-3-1-deprovisioning','topic-3-2-abac'],4:['topic-4-1-fundamentals-topologies','topic-4-3-shared-responsibility','topic-4-3-cloud-network-controls','topic-4-3-deployment-models']};
 if(phase==='after'){
  targets[1].push('topic-1-1-cia-triad','topic-1-1-authorization-accounting','topic-1-1-zero-trust-defense-in-depth','topic-1-2-risk-components','topic-1-2-inherent-residual-risk','topic-1-2-risk-lifecycle','topic-1-3-document-hierarchy','topic-1-5-due-care-due-diligence');
  targets[2].push('topic-2-2-bia','topic-2-2-dr-testing','topic-2-3-social-engineering-techniques');
  targets[3].push('topic-3-1-roles-definition','topic-3-1-iam-frameworks');
  targets[4].push('topic-4-2-dmz-architecture','topic-4-2-defense-in-depth','topic-4-3-service-models','topic-4-3-hybrid-vs-multicloud');
 }
 for(const [w,h] of [[1920,1080],[1366,768],[390,844],[320,568]])for(const theme of ['light','dark'])for(const d of [1,2,3,4]){
  await cdp.setViewport(w,h,w<768);await cdp.send('Page.navigate',{url:`http://127.0.0.1:${PORT}/index.html?batch-b=${phase}-${++n}#/reading/domain-${d}`});
  for(let i=0;i<100;i++){await sleep(70);if(await cdp.eval(`document.querySelector('.reading-article')?.dataset.domainId==='${d}'&&!!document.querySelector('.reading-article-markdown h3')`))break}
  await cdp.eval(`document.fonts.ready.then(()=>true)`);await cdp.eval(`import('./js/core/theme.js').then(m=>m.applyTheme('${theme}'))`);await sleep(250);
  const structure=await cdp.eval(`(()=>{const a=document.querySelector('.reading-article-markdown');return {domain:document.querySelector('.reading-article').dataset.domainId,h1:document.querySelector('.reading-article h1').textContent,h3:a.querySelectorAll('h3').length,ids:[...a.querySelectorAll('[id]')].map(e=>e.id),tables:a.querySelectorAll('table').length,diagrams:a.querySelectorAll('.reading-diagram-card').length,scenarios:a.querySelectorAll('.reading-scenario-card').length,raw:/:::scenario|\\[object Object\\]|\uFFFD/.test(a.textContent),svg:[...a.querySelectorAll('svg text')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0}).map(e=>{const r=e.getBoundingClientRect(),s=e.ownerSVGElement.getBoundingClientRect();return {text:e.textContent,outside:r.left<s.left-1||r.right>s.right+1}}).filter(e=>e.outside)}})()`);
  out.checks.push({w,h,theme,...structure});
  for(const anchor of targets[d]){
   const exists=await cdp.eval(`!!document.getElementById('${anchor}')`);
   if(!exists){out.checks.push({missingAnchor:anchor,d});continue}
   await cdp.eval(`document.getElementById('${anchor}').scrollIntoView({behavior:'instant',block:'start'})`);await sleep(70);
   const file=`${phase}-d${d}-${anchor}-${theme}-${w}.png`;await cdp.screenshot(path.join(ARTIFACTS_DIR,file));out.screenshots.push({file,d,anchor,theme,w,h});
  }
 }
 console.log(JSON.stringify({phase,screenshots:out.screenshots.length,errors:out.errors.length,missing:out.checks.filter(c=>c.missingAnchor)}));
}catch(e){out.error=e.stack;console.error(e);process.exitCode=1}finally{fs.writeFileSync(path.join(ARTIFACTS_DIR,`${phase}-browser.json`),JSON.stringify(out,null,2));cdp?.close();chrome.kill();server.close()}

