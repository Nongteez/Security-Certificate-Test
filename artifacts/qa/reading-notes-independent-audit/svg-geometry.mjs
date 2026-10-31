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
let cdp,n=0;const save=()=>fs.writeFileSync(path.join(ARTIFACTS_DIR,'svg-geometry.json'),JSON.stringify(out,null,2));
try{
 for(let i=0;i<50;i++){try{if((await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).ok)break;}catch{}await sleep(150);}
 const t=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new`,{method:'PUT'})).json();cdp=new CDPClient(t.webSocketDebuggerUrl);await cdp.connect();await cdp.send('Page.enable');
 const nav=async(hash,w=1366,h=768)=>{await cdp.setViewport(w,h,w<=768);await cdp.send('Page.navigate',{url:`http://127.0.0.1:${PORT}/index.html?independent-case=${++n}${hash}`});for(let i=0;i<80;i++){await sleep(80);if(await cdp.eval(`!!document.querySelector('.reading-article-markdown h3')`))break;}await cdp.eval(`document.fonts.ready.then(()=>true)`);await sleep(600);};

 for(let d=1;d<=4;d++)for(const w of [1920,1024]){
  await nav(`#/reading/domain-${d}`,w,768);await cdp.eval(`import('./js/core/theme.js').then(m=>m.applyTheme('light'))`);await sleep(400);
  const result=await cdp.eval(`(()=>{return [...document.querySelectorAll('.reading-article-markdown svg')].filter(s=>s.querySelector('text')).map(s=>{const r=s.getBoundingClientRect();return {diagram:s.closest('[data-diagram]')?.dataset.diagram,svgWidth:r.width,overflow:getComputedStyle(s).overflow,clipped:[...s.querySelectorAll('text')].map(t=>{const b=t.getBoundingClientRect();return {text:t.textContent,left:b.left-r.left,right:b.right-r.right,top:b.top-r.top,bottom:b.bottom-r.bottom,fill:getComputedStyle(t).fill}}).filter(t=>t.left < -1 || t.right > 1 || t.top < -1 || t.bottom > 1),whiteOnColor:[...s.querySelectorAll('text')].filter(t=>getComputedStyle(t).fill==='rgb(255, 255, 255)').map(t=>({text:t.textContent,fill:getComputedStyle(t).fill,font:getComputedStyle(t).fontSize,previousRect:t.previousElementSibling?.getAttribute('fill')}))}})})()`);
  out.checks.push({domain:d,width:w,result});
 }
 save();console.log('SVG GEOMETRY DONE',out.checks.length);
}catch(e){out.error=e.stack;save();console.error(e);process.exitCode=1;}finally{cdp?.close();chrome.kill();server.close();}
