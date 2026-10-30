import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const root = process.cwd();
const mime = {
  '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml',
  '.png': 'image/png'
};

const server = http.createServer((req, res) => {
  try {
    const url = new URL(req.url, 'http://127.0.0.1:4220');
    const p = path.resolve(root, '.' + (url.pathname === '/' ? '/index.html' : url.pathname));
    res.writeHead(200, { 'Content-Type': mime[path.extname(p)] || 'text/plain' });
    fs.createReadStream(p).pipe(res);
  } catch { res.writeHead(404); res.end(); }
});
await new Promise(r => server.listen(4220, '127.0.0.1', r));

const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', [
  '--headless=new', '--remote-debugging-port=9250', 'about:blank'
]);
await new Promise(r => setTimeout(r, 1000));
const targets = await (await fetch('http://127.0.0.1:9250/json/list')).json();
const ws = new WebSocket(targets[0].webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);

let seq = 0;
const send = (method, params = {}) => new Promise((resolve) => {
  const id = ++seq;
  const handler = ({ data }) => {
    const m = JSON.parse(data);
    if (m.id === id) {
      ws.removeEventListener('message', handler);
      resolve(m.result);
    }
  };
  ws.addEventListener('message', handler);
  ws.send(JSON.stringify({ id, method, params }));
});

await send('Page.enable');
await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
await send('Page.navigate', { url: 'http://127.0.0.1:4220/' });
await new Promise(r => setTimeout(r, 1200));

await send('Runtime.evaluate', { expression: `[...document.querySelectorAll('button')].find(b => b.innerText.includes('Open Certification'))?.click()` });
await new Promise(r => setTimeout(r, 300));
await send('Runtime.evaluate', { expression: `[...document.querySelectorAll('button')].find(b => b.innerText.includes('Learning →'))?.click()` });
await new Promise(r => setTimeout(r, 500));

// Click Domain 3
await send('Runtime.evaluate', { expression: `document.querySelector('#learning-domain-3')?.click()` });
await new Promise(r => setTimeout(r, 300));
await send('Runtime.evaluate', { expression: `document.querySelector('#btn-start-learning')?.click()` });
await new Promise(r => setTimeout(r, 800));

const res = await send('Runtime.evaluate', {
  expression: `(()=>{
    const btns = Array.from(document.querySelectorAll('.viewer-toolbar button, .viewer-navigation button, .d3p-option, .d3p-reset'));
    return btns.map(b => {
      const rect = b.getBoundingClientRect();
      return {
        className: b.className,
        id: b.id,
        action: b.getAttribute('data-action'),
        text: b.innerText.trim().substring(0, 20),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
        touchOk: rect.width >= 36 && rect.height >= 36
      };
    });
  })()`,
  returnByValue: true
});

console.log('Mobile buttons detail:', JSON.stringify(res.result.value, null, 2));

ws.close();
server.close();
chrome.kill();
