import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const ROOT = path.resolve('.');
const PORT = 5240;
const DEBUG_PORT = 9298;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/reading-notes-diagram-design-audit');

fs.mkdirSync(ARTIFACTS_DIR, { recursive: true });

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
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
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Not found');
          return;
        }
        const ext = path.extname(fullPath).toLowerCase();
        res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
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
      this.callbacks.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }
}

async function getDebuggerUrl() {
  for (let i = 0; i < 40; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json`);
      if (res.ok) {
        const list = await res.json();
        const page = list.find(t => t.type === 'page');
        if (page?.webSocketDebuggerUrl) return page.webSocketDebuggerUrl;
      }
    } catch {}
    await new Promise(r => setTimeout(r, 250));
  }
  throw new Error('Chrome debug port unreachable');
}

async function evalInPage(cdp, expr) {
  const res = await cdp.send('Runtime.evaluate', {
    expression: expr,
    returnByValue: true,
    awaitPromise: true
  });
  if (res.exceptionDetails) {
    throw new Error(`Eval error: ${res.exceptionDetails.exception?.description || 'Unknown'}`);
  }
  return res.result?.value;
}

const DOMAIN_DIAGRAMS = {
  1: ['threatChain', 'ciaTriad', 'loadBalancer', 'aaaLifecycle', 'privacyFlow', 'defenseInDepth', 'riskCalculationFlow', 'riskLifecycle', 'documentHierarchy', 'controlTimeline', 'dueCareDiligence', 'ethicsCanons'],
  2: ['grcAlignment', 'bcVsDrScope', 'rtoRpoTimeline', 'effectivenessHierarchy'],
  3: ['iamLifecycle', 'nistSp80063Framework', 'leastPrivilegeVsSod', 'accessControlModels'],
  4: ['osiVsTcpIpModel', 'dmzFirewallArchitecture', 'defenseInDepthLayers', 'cloudSharedResponsibility'],
  5: ['mitreAttackTacticTechnique', 'irpLifecycle', 'assetLifecycleAndEol', 'securityTestingMatrix']
};

const VIEWPORTS = [
  { name: 'desktop-1920', width: 1920, height: 1080, dsf: 1, isMobile: false, themes: ['dark', 'light'] },
  { name: 'desktop-1440', width: 1440, height: 900, dsf: 1, isMobile: false, themes: ['dark'] },
  { name: 'laptop-1366', width: 1366, height: 768, dsf: 1, isMobile: false, themes: ['dark', 'light'] },
  { name: 'tablet-1024', width: 1024, height: 768, dsf: 2, isMobile: false, themes: ['dark'] },
  { name: 'mobile-390', width: 390, height: 844, dsf: 3, isMobile: true, themes: ['dark'] }
];

async function main() {
  console.log('=== Starting Diagram Forensic Visual Capture Suite ===');
  const server = await startServer();
  console.log(`✓ Local server running on ${PORT}`);

  const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-diag-forensics-'));
  const chromeProc = spawn(CHROME_PATH, [
    `--remote-debugging-port=${DEBUG_PORT}`,
    `--user-data-dir=${userDataDir}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-extensions',
    '--headless=new',
    'about:blank'
  ]);

  const wsUrl = await getDebuggerUrl();
  console.log('✓ Connected to Chrome via CDP');

  const cdp = new CDPClient(wsUrl);
  await cdp.connect();
  await cdp.send('Page.enable');
  await cdp.send('Runtime.enable');
  await cdp.send('DOM.enable');

  const auditManifest = [];

  for (const [dStr, diagKeys] of Object.entries(DOMAIN_DIAGRAMS)) {
    const dId = parseInt(dStr, 10);
    console.log(`\n========================================`);
    console.log(`AUDITING DOMAIN ${dId} (${diagKeys.length} diagrams)`);
    console.log(`========================================`);

    // Navigate to domain
    await cdp.send('Page.navigate', { url: `http://127.0.0.1:${PORT}/#/reading/domain-${dId}` });

    // Poll until article is ready
    let ready = false;
    for (let i = 0; i < 30; i++) {
      await new Promise(r => setTimeout(r, 200));
      try {
        const found = await evalInPage(cdp, `!!document.querySelector('.reading-article[data-domain-id="${dId}"]')`);
        if (found) { ready = true; break; }
      } catch {}
    }
    console.log(`Domain ${dId} ready: ${ready}`);

    for (const vp of VIEWPORTS) {
      // Set device metrics
      await cdp.send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: vp.dsf,
        mobile: vp.isMobile
      });

      for (const theme of vp.themes) {
        // Set theme
        await evalInPage(cdp, `
          document.documentElement.setAttribute('data-theme', '${theme}');
          if ('${theme}' === 'light') document.body.classList.add('light-mode');
          else document.body.classList.remove('light-mode');
        `);
        await new Promise(r => setTimeout(r, 150));

        for (const key of diagKeys) {
          const runId = `${key}-${vp.name}-${theme}`;

          // Get element metrics
          const info = await evalInPage(cdp, `
            (() => {
              const el = document.querySelector('[data-diagram="${key}"]');
              if (!el) return null;
              const rect = el.getBoundingClientRect();
              const desk = el.querySelector('.reading-diag-desktop');
              const mob = el.querySelector('.reading-diag-mobile');
              const deskStyle = desk ? window.getComputedStyle(desk).display : 'none';
              const mobStyle = mob ? window.getComputedStyle(mob).display : 'none';

              return {
                exists: true,
                rect: {
                  x: Math.max(0, rect.left + window.scrollX),
                  y: Math.max(0, rect.top + window.scrollY),
                  width: rect.width,
                  height: rect.height
                },
                deskVisible: deskStyle !== 'none',
                mobVisible: mobStyle !== 'none',
                mode: (deskStyle !== 'none' && mobStyle === 'none') ? 'desktop-svg' :
                      (deskStyle === 'none' && mobStyle !== 'none') ? 'mobile-html-stack' :
                      (deskStyle !== 'none' && mobStyle !== 'none') ? 'both-visible' : 'none-visible'
              };
            })()
          `);

          if (!info || !info.exists) {
            console.warn(`  [!] Element [data-diagram="${key}"] not found in DOM`);
            continue;
          }

          // Scroll element into view
          await evalInPage(cdp, `
            (() => {
              const el = document.querySelector('[data-diagram="${key}"]');
              if (el) el.scrollIntoView({ block: 'center', inline: 'nearest' });
            })()
          `);
          await new Promise(r => setTimeout(r, 100));

          // Re-measure after scroll
          const scrolledRect = await evalInPage(cdp, `
            (() => {
              const el = document.querySelector('[data-diagram="${key}"]');
              const r = el.getBoundingClientRect();
              return { x: r.left, y: r.top, width: r.width, height: r.height };
            })()
          `);

          // Capture element clip
          let screenshotName = `${runId}.png`;
          const clip = {
            x: Math.max(0, Math.round(scrolledRect.x)),
            y: Math.max(0, Math.round(scrolledRect.y)),
            width: Math.min(vp.width, Math.round(scrolledRect.width)),
            height: Math.min(3000, Math.round(scrolledRect.height)),
            scale: 1
          };

          if (clip.width > 0 && clip.height > 0) {
            try {
              const capture = await cdp.send('Page.captureScreenshot', {
                format: 'png',
                clip: clip,
                captureBeyondViewport: true
              });
              fs.writeFileSync(path.join(ARTIFACTS_DIR, screenshotName), Buffer.from(capture.data, 'base64'));
            } catch (err) {
              console.warn(`  [!] Clip capture failed for ${runId}:`, err.message);
              // Fallback to full page or record
            }
          }

          auditManifest.push({
            domain: dId,
            key,
            viewport: vp.name,
            theme,
            width: vp.width,
            elementWidth: Math.round(scrolledRect.width),
            elementHeight: Math.round(scrolledRect.height),
            mode: info.mode,
            screenshot: screenshotName
          });

          // Log key behavior highlights
          if (vp.name === 'desktop-1920' && theme === 'dark') {
            console.log(`  ${key.padEnd(26)} | 1920px mode: ${info.mode} | W: ${Math.round(scrolledRect.width)}px, H: ${Math.round(scrolledRect.height)}px`);
          } else if (vp.name === 'laptop-1366' && theme === 'dark') {
            console.log(`  ${key.padEnd(26)} | 1366px mode: ${info.mode} | W: ${Math.round(scrolledRect.width)}px`);
          }
        }
      }
    }
  }

  fs.writeFileSync(path.join(ARTIFACTS_DIR, 'forensics-manifest.json'), JSON.stringify(auditManifest, null, 2), 'utf8');
  console.log(`\n✓ Forensics manifest saved with ${auditManifest.length} records`);

  chromeProc.kill();
  server.close();
  console.log('✓ Forensic capture complete!');
  process.exit(0);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});

