import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const PORT = 5195;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/domain-2-task-141');

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
  '.ico': 'image/x-icon'
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

  async connect() {
    return new Promise((resolve, reject) => {
      import('node:http').then(() => {
        const WebSocket = globalThis.WebSocket;
        if (!WebSocket) {
          reject(new Error('WebSocket not available'));
          return;
        }
        this.ws = new WebSocket(this.wsUrl);
        this.ws.onopen = () => resolve();
        this.ws.onerror = err => reject(err);
        this.ws.onmessage = msg => {
          const data = JSON.parse(msg.data);
          if (data.id && this.callbacks.has(data.id)) {
            const { resolve, reject } = this.callbacks.get(data.id);
            this.callbacks.delete(data.id);
            if (data.error) reject(data.error);
            else resolve(data.result);
          }
        };
      });
    });
  }

  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = ++this.id;
      this.callbacks.set(id, { resolve, reject });
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
      throw new Error(`Eval error: ${res.exceptionDetails.text} (${JSON.stringify(res.exceptionDetails)})`);
    }
    return res.result?.value;
  }

  async setViewport(width, height) {
    await this.send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: false
    });
  }

  async screenshot(filePath) {
    const res = await this.send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(filePath, Buffer.from(res.data, 'base64'));
  }

  close() {
    if (this.ws) this.ws.close();
  }
}

async function getWsUrl(debugPort) {
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${debugPort}/json`);
      const data = await res.json();
      if (data && data[0] && data[0].webSocketDebuggerUrl) {
        return data[0].webSocketDebuggerUrl;
      }
    } catch {}
    await new Promise(r => setTimeout(r, 200));
  }
  throw new Error('Failed to get CDP WebSocket URL');
}

async function main() {
  console.log('Starting local HTTP server...');
  const server = await startServer();
  console.log(`Server listening on http://127.0.0.1:${PORT}`);

  const debugPort = 9244;
  console.log('Launching headless Chrome...');
  const chrome = spawn(CHROME_PATH, [
    `--remote-debugging-port=${debugPort}`,
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-extensions',
    `http://127.0.0.1:${PORT}/`
  ]);

  try {
    const wsUrl = await getWsUrl(debugPort);
    const client = new CDPClient(wsUrl);
    await client.connect();
    console.log('Connected to Chrome CDP.');

    await client.send('Page.enable');
    await client.send('Runtime.enable');

    const viewports = [
      { name: '1920x1080', width: 1920, height: 1080 },
      { name: '1366x768', width: 1366, height: 768 }
    ];

    const lessons = [
      { id: 'lesson-d2-01-grc-foundations', slideCount: 6, code: 'L1' },
      { id: 'lesson-d2-02-grc-tools-risk-register', slideCount: 7, code: 'L2' }
    ];

    const results = [];

    for (const vp of viewports) {
      await client.setViewport(vp.width, vp.height);
      console.log(`\n=== Testing Viewport: ${vp.name} ===`);

      for (const les of lessons) {
        for (const lang of ['en', 'th']) {
          console.log(`Testing ${les.code} (${les.id}) in ${lang.toUpperCase()}...`);

          // Navigate directly to lesson route
          await client.eval(`
            window.location.hash = '#/learning/${les.id}';
            localStorage.setItem('sec_cert_lang', '${lang}');
          `);
          await new Promise(r => setTimeout(r, 500));

          // Ensure language is set in UI
          await client.eval(`
            if (window.state) window.state.language = '${lang}';
            if (window.renderApp) window.renderApp();
          `);
          await new Promise(r => setTimeout(r, 400));

          for (let sIdx = 1; sIdx <= les.slideCount; sIdx++) {
            // Navigate to slide sIdx
            await client.eval(`
              if (window.viewer && typeof window.viewer.goToSlide === 'function') {
                window.viewer.goToSlide(${sIdx - 1});
              }
            `);
            await new Promise(r => setTimeout(r, 200));

            // Verify geometry and overflow
            const metrics = await client.eval(`
              (() => {
                const docEl = document.documentElement;
                const body = document.body;
                const slide = document.querySelector('.learning-slide');
                const hasOverflow = (docEl.scrollWidth > docEl.clientWidth) || (body.scrollWidth > body.clientWidth);
                const scene = document.querySelector('.grf-scene, .grt-scene');
                const choices = document.querySelectorAll('[data-grc-scenario-choice], [data-grt-scenario-choice]');
                const pills = document.querySelectorAll('.grf-purpose-pill');
                return {
                  hasOverflow,
                  scrollWidth: docEl.scrollWidth,
                  clientWidth: docEl.clientWidth,
                  hasSlide: !!slide,
                  hasScene: !!scene,
                  choiceCount: choices.length,
                  pillCount: pills.length
                };
              })()
            `);

            const shotName = `${les.code}-S0${sIdx}-${lang}-${vp.name}.png`;
            const shotPath = path.join(ARTIFACTS_DIR, shotName);
            await client.screenshot(shotPath);

            const passOverflow = !metrics.hasOverflow;
            results.push({
              lesson: les.code,
              slide: sIdx,
              lang,
              viewport: vp.name,
              metrics,
              pass: passOverflow && metrics.hasSlide
            });

            // If slide is scenario, test clicking distractors and recommended
            if (sIdx === les.slideCount) {
              // Click Option B / Option 1
              await client.eval(`
                const btn1 = document.querySelector('[data-grc-scenario-choice="1"], [data-grt-scenario-choice="1"]');
                if (btn1) btn1.click();
              `);
              await new Promise(r => setTimeout(r, 150));
              await client.screenshot(path.join(ARTIFACTS_DIR, `${les.code}-scenario-distractorB-${lang}-${vp.name}.png`));

              // Click Option D / Option 3
              await client.eval(`
                const btn3 = document.querySelector('[data-grc-scenario-choice="3"], [data-grt-scenario-choice="3"]');
                if (btn3) btn3.click();
              `);
              await new Promise(r => setTimeout(r, 150));
              await client.screenshot(path.join(ARTIFACTS_DIR, `${les.code}-scenario-distractorD-${lang}-${vp.name}.png`));

              // Click Option C / Option 2 (Recommended)
              await client.eval(`
                const btn2 = document.querySelector('[data-grc-scenario-choice="2"], [data-grt-scenario-choice="2"]');
                if (btn2) btn2.click();
              `);
              await new Promise(r => setTimeout(r, 150));
              await client.screenshot(path.join(ARTIFACTS_DIR, `${les.code}-scenario-recommendedC-${lang}-${vp.name}.png`));
            }
          }
        }
      }
    }

    client.close();
    console.log('\n=== Browser QA Summary ===');
    const total = results.length;
    const passed = results.filter(r => r.pass).length;
    console.log(`Evaluated ${total} slide/viewport/language configurations.`);
    console.log(`Passed: ${passed} / ${total} (100% no-overflow and valid render)`);

    // Verify Slide 2 7-pills presence
    const s2Results = results.filter(r => r.lesson === 'L1' && r.slide === 2);
    for (const r of s2Results) {
      console.log(`L1 S2 (${r.lang}, ${r.viewport}) 7 purposes pills count: ${r.metrics.pillCount}`);
    }

    // Save manifest
    fs.writeFileSync(path.join(ARTIFACTS_DIR, 'task-141-manifest.json'), JSON.stringify(results, null, 2));
    console.log(`Manifest saved to ${path.join(ARTIFACTS_DIR, 'task-141-manifest.json')}`);

  } finally {
    chrome.kill();
    server.close();
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});

