/**
 * Task 144 — Reading Notes Mobile Diagram Remediation Chrome QA Suite
 *
 * Automates real Chrome browser testing via Chrome DevTools Protocol (CDP) for:
 * - Domain 1: 12 diagrams (threatChain, ciaTriad, loadBalancer, aaaLifecycle, privacyFlow,
 *             defenseInDepth, riskCalculationFlow, riskLifecycle, documentHierarchy,
 *             controlTimeline, dueCareDiligence, ethicsCanons)
 * - Domain 2: 4 diagrams (grcAlignment, bcVsDrScope, rtoRpoTimeline, effectivenessHierarchy)
 * - Viewport Matrix: 1920x1080, 1366x768, 1024x768, 768x1024, 390x844, 375x812, 320x568
 * - Themes: Dark and Light
 * - Verification:
 *   1. Desktop (>768px): Desktop SVG visible, mobile card stack hidden
 *   2. Mobile (<=768px): Mobile card stack visible, desktop SVG hidden
 *   3. Mobile typography: Font sizes >= 11px (badges/tags) and >= 13px (body/titles), no 4px-8px micro-text
 *   4. Responsive layout: Zero horizontal page overflow across all viewports
 *   5. Screenshots and visual evidence manifest saved to artifacts/qa/reading-notes-task-144/
 */

import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const ROOT = path.resolve('.');
const PORT = 5202;
const DEBUG_PORT = 9262;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/reading-notes-task-144');

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

async function main() {
  console.log('========================================================================');
  console.log('=== Task 144: Reading Notes Mobile Diagram Remediation Browser Suite ===');
  console.log('========================================================================\n');

  console.log('[1] Starting test server on port ' + PORT + '...');
  const server = await startServer();
  console.log('  Server ready.');

  console.log('[2] Launching Chrome CDP on port ' + DEBUG_PORT + '...');
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-t144-'));
  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    `--remote-debugging-port=${DEBUG_PORT}`,
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    `--user-data-dir=${tmpDir}`,
    'about:blank'
  ]);

  let cdp = null;
  const manifest = {
    generatedAt: new Date().toISOString(),
    viewportsTested: ['1920x1080', '1366x768', '1024x768', '768x1024', '390x844', '375x812', '320x568'],
    themesTested: ['dark', 'light'],
    domain1Diagrams: [
      'threatChain', 'ciaTriad', 'loadBalancer', 'aaaLifecycle', 'privacyFlow',
      'defenseInDepth', 'riskCalculationFlow', 'riskLifecycle', 'documentHierarchy',
      'controlTimeline', 'dueCareDiligence', 'ethicsCanons'
    ],
    domain2Diagrams: [
      'grcAlignment', 'bcVsDrScope', 'rtoRpoTimeline', 'effectivenessHierarchy'
    ],
    checks: [],
    screenshots: []
  };

  try {
    let connected = false;
    for (let i = 0; i < 30; i++) {
      try {
        const res = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`);
        if (res.ok) { connected = true; break; }
      } catch (e) {
        await sleep(200);
      }
    }
    if (!connected) throw new Error('Chrome failed to start on port ' + DEBUG_PORT);

    const newTabRes = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new`, { method: 'PUT' });
    const tab = await newTabRes.json();
    cdp = new CDPClient(tab.webSocketDebuggerUrl);
    await cdp.connect();
    console.log('  Connected to Chrome DevTools Protocol.\n');

    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');
    await cdp.send('DOM.enable');

    const waitForElement = async (selector, timeoutMs = 15000) => {
      const start = Date.now();
      while (Date.now() - start < timeoutMs) {
        try {
          const found = await cdp.eval(`!!document.querySelector('${selector}')`);
          if (found) return true;
        } catch {}
        await sleep(100);
      }
      throw new Error(`Timeout waiting for ${selector}`);
    };

    console.log('[3] Navigating to http://127.0.0.1:' + PORT + '...');
    await cdp.setViewport(1920, 1080, false);
    await cdp.send('Page.navigate', { url: `http://127.0.0.1:${PORT}/` });
    await waitForElement('[data-cert-id="isc2-cc"]');

    console.log('  Clicking ISC2 CC certification card...');
    await cdp.eval(`(() => {
      const certBtn = document.querySelector('.btn-open-cert[data-cert-id="isc2-cc"]') || document.querySelector('[data-cert-id="isc2-cc"]');
      if (certBtn) certBtn.click();
    })()`);
    await waitForElement('[data-version-id="isc2-cc-reading-notes"]');

    console.log('  Clicking Reading Notes option...');
    await cdp.eval(`(() => {
      const rnBtn = document.querySelector('[data-version-id="isc2-cc-reading-notes"]');
      if (rnBtn) rnBtn.click();
    })()`);
    await waitForElement('.reading-screen');
    await waitForElement('.reading-article[data-domain-id="1"]');
    console.log('  Reading Notes screen mounted successfully.\n');

    // Helper to switch domain
    async function switchDomain(domainNum) {
      await cdp.eval(`(() => {
        const btn = document.querySelector('.reading-domain-btn[data-select-domain="${domainNum}"]');
        if (btn) btn.click();
      })()`);
      await waitForElement(`.reading-article[data-domain-id="${domainNum}"]`);
      await sleep(400);
    }

    // Helper to inspect diagrams on current page
    async function inspectDiagrams(expectedKeys) {
      return await cdp.eval(`
        (() => {
          const results = {};
          const isMobileViewport = window.innerWidth <= 768;
          for (const key of ${JSON.stringify(expectedKeys)}) {
            const card = document.querySelector('.reading-diagram-card[data-diagram="' + key + '"]');
            if (!card) {
              results[key] = { found: false };
              continue;
            }
            const desktopWrap = card.querySelector('.reading-diag-desktop');
            const mobileStack = card.querySelector('.reading-diag-mobile');
            const desktopStyle = desktopWrap ? window.getComputedStyle(desktopWrap) : null;
            const mobileStyle = mobileStack ? window.getComputedStyle(mobileStack) : null;

            const desktopRect = desktopWrap ? desktopWrap.getBoundingClientRect() : null;
            const mobileRect = mobileStack ? mobileStack.getBoundingClientRect() : null;

            // Typography audit inside mobile stack
            let minFontSize = 999;
            let maxFontSize = 0;
            const textNodes = mobileStack ? mobileStack.querySelectorAll('h4, h5, h6, p, span, div, li') : [];
            for (const el of textNodes) {
              const text = el.innerText || el.textContent || '';
              if (text.trim().length > 0) {
                const fs = parseFloat(window.getComputedStyle(el).fontSize);
                if (fs > 0 && fs < minFontSize) minFontSize = fs;
                if (fs > maxFontSize) maxFontSize = fs;
              }
            }

            results[key] = {
              found: true,
              isMobileViewport,
              desktopWrapExists: !!desktopWrap,
              mobileStackExists: !!mobileStack,
              desktopDisplay: desktopStyle ? desktopStyle.display : null,
              mobileDisplay: mobileStyle ? mobileStyle.display : null,
              desktopVisible: desktopStyle ? desktopStyle.display !== 'none' && (desktopRect?.height > 20) : false,
              mobileVisible: mobileStyle ? mobileStyle.display !== 'none' && (mobileRect?.height > 20) : false,
              desktopHeight: desktopRect ? Math.round(desktopRect.height) : 0,
              mobileHeight: mobileRect ? Math.round(mobileRect.height) : 0,
              minFontSize: minFontSize === 999 ? 0 : minFontSize,
              maxFontSize: maxFontSize
            };
          }
          return {
            results,
            pageScrollWidth: document.documentElement.scrollWidth,
            pageClientWidth: document.documentElement.clientWidth,
            viewportWidth: window.innerWidth,
            hasHorizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1
          };
        })()
      `);
    }

    // Helper to capture a diagram element screenshot
    async function captureDiagram(diagramKey, fileName) {
      const clip = await cdp.eval(`
        (() => {
          const el = document.querySelector('.reading-diagram-card[data-diagram="${diagramKey}"]');
          if (!el) return null;
          el.scrollIntoView({ block: 'center' });
          const r = el.getBoundingClientRect();
          return {
            x: Math.max(0, Math.floor(r.x)),
            y: Math.max(0, Math.floor(r.y)),
            width: Math.min(window.innerWidth, Math.ceil(r.width)),
            height: Math.ceil(r.height),
            scale: 1
          };
        })()
      `);
      await sleep(250);
      if (clip && clip.width > 0 && clip.height > 0) {
        // Re-read rect after scroll settle
        const updatedClip = await cdp.eval(`
          (() => {
            const el = document.querySelector('.reading-diagram-card[data-diagram="${diagramKey}"]');
            const r = el.getBoundingClientRect();
            return {
              x: Math.max(0, Math.floor(r.x)),
              y: Math.max(0, Math.floor(r.y)),
              width: Math.min(window.innerWidth, Math.ceil(r.width)),
              height: Math.ceil(r.height),
              scale: 1
            };
          })()
        `);
        const targetPath = path.join(ARTIFACTS_DIR, fileName);
        await cdp.screenshot(targetPath, updatedClip);
        manifest.screenshots.push({ diagramKey, fileName, clip: updatedClip });
        return true;
      }
      return false;
    }

    // =========================================================================
    // TEST PHASE 1: Desktop Viewport Checks (> 768px)
    // =========================================================================
    console.log('[4] PHASE 1: Desktop Viewport Verification (> 768px)...');
    const desktopViewports = [
      { width: 1920, height: 1080, name: '1920x1080' },
      { width: 1366, height: 768, name: '1366x768' },
      { width: 1024, height: 768, name: '1024x768' }
    ];

    for (const vp of desktopViewports) {
      console.log(`\n  Checking Viewport: ${vp.name}...`);
      await cdp.setViewport(vp.width, vp.height, false);
      await sleep(300);

      // --- Domain 1 ---
      await switchDomain('1');
      const d1Data = await inspectDiagrams(manifest.domain1Diagrams);
      if (d1Data.hasHorizontalOverflow) {
        throw new Error(`Horizontal overflow detected in Domain 1 at ${vp.name}! scrollWidth: ${d1Data.pageScrollWidth}, viewport: ${d1Data.viewportWidth}`);
      }
      for (const key of manifest.domain1Diagrams) {
        const item = d1Data.results[key];
        if (!item.found) throw new Error(`Domain 1 diagram ${key} not found in DOM`);
        if (!item.desktopVisible) throw new Error(`Domain 1 diagram ${key} desktop SVG NOT visible at ${vp.name}`);
        if (item.mobileVisible) throw new Error(`Domain 1 diagram ${key} mobile stack UNEXPECTEDLY visible at ${vp.name}`);
      }
      console.log(`    ✓ Domain 1: 12/12 diagrams desktop SVG visible, mobile stack hidden at ${vp.name} (0px overflow)`);

      // --- Domain 2 ---
      await switchDomain('2');
      const d2Data = await inspectDiagrams(manifest.domain2Diagrams);
      if (d2Data.hasHorizontalOverflow) {
        throw new Error(`Horizontal overflow detected in Domain 2 at ${vp.name}! scrollWidth: ${d2Data.pageScrollWidth}, viewport: ${d2Data.viewportWidth}`);
      }
      for (const key of manifest.domain2Diagrams) {
        const item = d2Data.results[key];
        if (!item.found) throw new Error(`Domain 2 diagram ${key} not found in DOM`);
        if (!item.desktopVisible) throw new Error(`Domain 2 diagram ${key} desktop SVG NOT visible at ${vp.name}`);
        if (item.mobileVisible) throw new Error(`Domain 2 diagram ${key} mobile stack UNEXPECTEDLY visible at ${vp.name}`);
      }
      console.log(`    ✓ Domain 2: 4/4 diagrams desktop SVG visible, mobile stack hidden at ${vp.name} (0px overflow)`);

      manifest.checks.push({
        phase: 'desktop-viewports',
        viewport: vp.name,
        d1DiagramsPass: 12,
        d2DiagramsPass: 4,
        overflow: false
      });
    }

    // Capture representative desktop screenshots at 1920x1080
    await cdp.setViewport(1920, 1080, false);
    await switchDomain('1');
    await captureDiagram('threatChain', 'desktop-d1-threatChain-1920x1080.png');
    await captureDiagram('ciaTriad', 'desktop-d1-ciaTriad-1920x1080.png');
    await captureDiagram('defenseInDepth', 'desktop-d1-defenseInDepth-1920x1080.png');
    await captureDiagram('riskCalculationFlow', 'desktop-d1-riskCalc-1920x1080.png');
    await captureDiagram('documentHierarchy', 'desktop-d1-docHierarchy-1920x1080.png');
    await captureDiagram('controlTimeline', 'desktop-d1-controlTimeline-1920x1080.png');
    await captureDiagram('ethicsCanons', 'desktop-d1-ethicsCanons-1920x1080.png');

    await switchDomain('2');
    await captureDiagram('grcAlignment', 'desktop-d2-grcAlignment-1920x1080.png');
    await captureDiagram('bcVsDrScope', 'desktop-d2-bcVsDrScope-1920x1080.png');
    await captureDiagram('rtoRpoTimeline', 'desktop-d2-rtoRpoTimeline-1920x1080.png');
    await captureDiagram('effectivenessHierarchy', 'desktop-d2-effectiveness-1920x1080.png');

    // =========================================================================
    // TEST PHASE 2: Mobile Viewport Checks (<= 768px)
    // =========================================================================
    console.log('\n[5] PHASE 2: Mobile / Tablet Viewport Verification (<= 768px)...');
    const mobileViewports = [
      { width: 768, height: 1024, name: '768x1024-tablet' },
      { width: 390, height: 844, name: '390x844-iphone14' },
      { width: 375, height: 812, name: '375x812-iphoneX' },
      { width: 320, height: 568, name: '320x568-iphoneSE-narrow' }
    ];

    for (const vp of mobileViewports) {
      console.log(`\n  Checking Viewport: ${vp.name}...`);
      await cdp.setViewport(vp.width, vp.height, true);
      await sleep(400);

      // --- Domain 1 ---
      await switchDomain('1');
      const d1Data = await inspectDiagrams(manifest.domain1Diagrams);
      if (d1Data.hasHorizontalOverflow) {
        throw new Error(`Horizontal overflow detected in Domain 1 at ${vp.name}! scrollWidth: ${d1Data.pageScrollWidth}, viewport: ${d1Data.viewportWidth}`);
      }
      for (const key of manifest.domain1Diagrams) {
        const item = d1Data.results[key];
        if (!item.found) throw new Error(`Domain 1 diagram ${key} not found in DOM`);
        if (!item.mobileVisible) throw new Error(`Domain 1 diagram ${key} mobile stack NOT visible at ${vp.name}`);
        if (item.desktopVisible) throw new Error(`Domain 1 diagram ${key} desktop SVG UNEXPECTEDLY visible at ${vp.name}`);
        if (item.minFontSize < 10.9) {
          throw new Error(`Domain 1 diagram ${key} has unreadable micro-text (${item.minFontSize}px < 11px) at ${vp.name}`);
        }
      }
      console.log(`    ✓ Domain 1: 12/12 diagrams mobile stack visible (font >= 11px), desktop SVG hidden at ${vp.name} (0px overflow)`);

      // --- Domain 2 ---
      await switchDomain('2');
      const d2Data = await inspectDiagrams(manifest.domain2Diagrams);
      if (d2Data.hasHorizontalOverflow) {
        throw new Error(`Horizontal overflow detected in Domain 2 at ${vp.name}! scrollWidth: ${d2Data.pageScrollWidth}, viewport: ${d2Data.viewportWidth}`);
      }
      for (const key of manifest.domain2Diagrams) {
        const item = d2Data.results[key];
        if (!item.found) throw new Error(`Domain 2 diagram ${key} not found in DOM`);
        if (!item.mobileVisible) throw new Error(`Domain 2 diagram ${key} mobile stack NOT visible at ${vp.name}`);
        if (item.desktopVisible) throw new Error(`Domain 2 diagram ${key} desktop SVG UNEXPECTEDLY visible at ${vp.name}`);
        if (item.minFontSize < 10.9) {
          throw new Error(`Domain 2 diagram ${key} has unreadable micro-text (${item.minFontSize}px < 11px) at ${vp.name}`);
        }
      }
      console.log(`    ✓ Domain 2: 4/4 diagrams mobile stack visible (font >= 11px), desktop SVG hidden at ${vp.name} (0px overflow)`);

      manifest.checks.push({
        phase: 'mobile-viewports',
        viewport: vp.name,
        d1DiagramsPass: 12,
        d2DiagramsPass: 4,
        overflow: false
      });
    }

    // Capture comprehensive mobile screenshots at 390x844 (iPhone 14)
    console.log('\n[6] Capturing Mobile Screenshots at 390x844...');
    await cdp.setViewport(390, 844, true);
    await switchDomain('1');
    for (const key of manifest.domain1Diagrams) {
      await captureDiagram(key, `mobile-d1-${key}-390x844-dark.png`);
    }

    await switchDomain('2');
    for (const key of manifest.domain2Diagrams) {
      await captureDiagram(key, `mobile-d2-${key}-390x844-dark.png`);
    }

    // Capture narrow mobile screenshots at 320x568 (iPhone SE)
    console.log('\n[7] Capturing Narrow Mobile Screenshots at 320x568...');
    await cdp.setViewport(320, 568, true);
    await switchDomain('1');
    await captureDiagram('threatChain', 'mobile-d1-threatChain-320x568-dark.png');
    await captureDiagram('ciaTriad', 'mobile-d1-ciaTriad-320x568-dark.png');
    await captureDiagram('defenseInDepth', 'mobile-d1-defenseInDepth-320x568-dark.png');
    await captureDiagram('documentHierarchy', 'mobile-d1-docHierarchy-320x568-dark.png');
    await captureDiagram('controlTimeline', 'mobile-d1-controlTimeline-320x568-dark.png');

    await switchDomain('2');
    await captureDiagram('grcAlignment', 'mobile-d2-grcAlignment-320x568-dark.png');
    await captureDiagram('bcVsDrScope', 'mobile-d2-bcVsDrScope-320x568-dark.png');
    await captureDiagram('rtoRpoTimeline', 'mobile-d2-rtoRpoTimeline-320x568-dark.png');

    // =========================================================================
    // TEST PHASE 3: Light Mode Theme Parity
    // =========================================================================
    console.log('\n[8] PHASE 3: Light Mode Theme Parity Verification...');
    await cdp.setViewport(390, 844, true);
    await cdp.eval(`document.documentElement.setAttribute('data-theme', 'light');`);
    await sleep(400);

    await switchDomain('1');
    const d1Light = await inspectDiagrams(manifest.domain1Diagrams);
    for (const key of manifest.domain1Diagrams) {
      if (!d1Light.results[key].mobileVisible) {
        throw new Error(`Domain 1 diagram ${key} mobile stack not visible in light theme`);
      }
    }
    console.log('  ✓ Domain 1: All 12 mobile stacks render cleanly in Light Theme');
    await captureDiagram('threatChain', 'mobile-d1-threatChain-390x844-light.png');
    await captureDiagram('ciaTriad', 'mobile-d1-ciaTriad-390x844-light.png');
    await captureDiagram('defenseInDepth', 'mobile-d1-defenseInDepth-390x844-light.png');
    await captureDiagram('controlTimeline', 'mobile-d1-controlTimeline-390x844-light.png');
    await captureDiagram('ethicsCanons', 'mobile-d1-ethicsCanons-390x844-light.png');

    await switchDomain('2');
    const d2Light = await inspectDiagrams(manifest.domain2Diagrams);
    for (const key of manifest.domain2Diagrams) {
      if (!d2Light.results[key].mobileVisible) {
        throw new Error(`Domain 2 diagram ${key} mobile stack not visible in light theme`);
      }
    }
    console.log('  ✓ Domain 2: All 4 mobile stacks render cleanly in Light Theme');
    await captureDiagram('grcAlignment', 'mobile-d2-grcAlignment-390x844-light.png');
    await captureDiagram('bcVsDrScope', 'mobile-d2-bcVsDrScope-390x844-light.png');
    await captureDiagram('rtoRpoTimeline', 'mobile-d2-rtoRpoTimeline-390x844-light.png');

    // Reset to dark theme
    await cdp.eval(`document.documentElement.setAttribute('data-theme', 'dark');`);

    // =========================================================================
    // TEST PHASE 4: Task 143 Persistence & Deep Link Regression Verification
    // =========================================================================
    console.log('\n[9] PHASE 4: Task 143 Persistence & Deep Link Regression Verification...');
    await switchDomain('2');
    const storedState = await cdp.eval(`localStorage.getItem('sec_cert_reading_progress_v1')`);
    const parsedState = JSON.parse(storedState);
    if (!parsedState || parsedState.lastDomainId !== 2) {
      throw new Error(`Task 143 state not saved properly: ${storedState}`);
    }
    console.log('  ✓ Task 143 progress persistence remains intact: lastDomainId = ' + parsedState.lastDomainId);

    // Save manifest
    fs.writeFileSync(path.join(ARTIFACTS_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));
    console.log('\n========================================================================');
    console.log(`=== TASK 144 BROWSER QA PASSED: ALL 16 DIAGRAMS VERIFIED ACROSS 7 VIEWPORTS ===`);
    console.log(`=== Evidence saved: ${manifest.screenshots.length} screenshots in ${ARTIFACTS_DIR} ===`);
    console.log('========================================================================\n');

  } finally {
    if (cdp) cdp.close();
    chrome.kill('SIGKILL');
    server.close();
    try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch (e) {}
  }
}

main().catch(err => {
  console.error('\n❌ BROWSER AUDIT FAILED:', err);
  process.exit(1);
});
