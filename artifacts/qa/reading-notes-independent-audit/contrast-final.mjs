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
let cdp,n=0;const save=()=>fs.writeFileSync(path.join(ARTIFACTS_DIR,'contrast-final.json'),JSON.stringify(out,null,2));
try{
 for(let i=0;i<50;i++){try{if((await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`)).ok)break;}catch{}await sleep(150);}
 const t=await(await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new`,{method:'PUT'})).json();cdp=new CDPClient(t.webSocketDebuggerUrl);await cdp.connect();await cdp.send('Page.enable');
 const nav=async(hash,w=1366,h=768)=>{await cdp.setViewport(w,h,w<=768);await cdp.send('Page.navigate',{url:`http://127.0.0.1:${PORT}/index.html?independent-case=${++n}${hash}`});for(let i=0;i<80;i++){await sleep(80);if(await cdp.eval(`!!document.querySelector('.reading-article-markdown h3')`))break;}await cdp.eval(`document.fonts.ready.then(()=>true)`);await sleep(600);};
 // Probe all text contrast using composited computed backgrounds. Gradients are marked separately.
 for(let d=1;d<=4;d++)for(const theme of ['light','dark']){
  await nav(`#/reading/domain-${d}`,390,844);await cdp.eval(`import('./js/core/theme.js').then(m=>m.applyTheme('${theme}'))`);
  await sleep(500);
  const contrast=await cdp.eval(`(()=>{
   const rgba=s=>{const m=s.match(/[0-9.]+/g);return m?[+m[0],+m[1],+m[2],m[3]===undefined?1:+m[3]]:[0,0,0,0]};
   const blend=(a,b)=>[0,1,2].map(i=>a[i]*a[3]+b[i]*(1-a[3])).concat(1);
   const bg=e=>{const chain=[];for(let p=e;p;p=p.parentElement)chain.push(getComputedStyle(p).backgroundColor);return chain.reverse().reduce((b,c)=>blend(rgba(c),b),[255,255,255,1])};
   const lum=c=>c.slice(0,3).map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4}).reduce((s,v,i)=>s+v*[.2126,.7152,.0722][i],0);
   const a=[...document.querySelectorAll('.reading-article-markdown *')].filter(e=>e.getClientRects().length&&[...e.childNodes].some(n=>n.nodeType===3&&n.textContent.trim())&&!e.closest('.katex'));
   return a.map((e,index)=>{const s=getComputedStyle(e),b=bg(e),c=blend(rgba(s.color),b),ratio=(Math.max(lum(b),lum(c))+.05)/(Math.min(lum(b),lum(c))+.05);return {index,tag:e.tagName,cls:e.getAttribute('class'),text:e.textContent.trim().slice(0,110),font:s.fontSize,weight:s.fontWeight,color:s.color,bg:b,ratio,required:parseFloat(s.fontSize)>=24||(parseFloat(s.fontSize)>=18.66&&parseInt(s.fontWeight)>=700)?3:4.5,gradient:getComputedStyle(e).backgroundImage}}).filter(x=>x.ratio<x.required-.01);
  })()`);out.checks.push({name:'computed-contrast',domain:d,theme,failures:contrast});
 }
 save();console.log('CONTRAST DONE',out.checks.length);
}catch(e){out.error=e.stack;save();console.error(e);process.exitCode=1;}finally{cdp?.close();chrome.kill();server.close();}
