import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const PORT = 5198;
const DEBUG_PORT = 9255;
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
      }, 15000);
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

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  console.log('=== Starting Task 141 Browser QA Suite ===\n');

  console.log('[1] Starting local server...');
  const server = await startServer();
  console.log(`Server listening on http://127.0.0.1:${PORT}`);

  console.log('[2] Launching headless Chrome...');
  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    `--remote-debugging-port=${DEBUG_PORT}`,
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--no-sandbox',
    'about:blank'
  ]);

  let cdp = null;

  try {
    let versionData = null;
    for (let i = 0; i < 30; i++) {
      try {
        const res = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/version`);
        if (res.ok) {
          versionData = await res.json();
          break;
        }
      } catch {}
      await sleep(200);
    }

    if (!versionData) {
      throw new Error(`Failed to connect to Chrome debug port ${DEBUG_PORT}`);
    }

    const newTabRes = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/new?http://127.0.0.1:${PORT}/index.html`, { method: 'PUT' });
    const tabData = await newTabRes.json();
    cdp = new CDPClient(tabData.webSocketDebuggerUrl);
    await cdp.connect();
    console.log('[3] Connected to Chrome CDP target.');

    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');
    await sleep(1500);

    const viewports = [
      { name: '1920x1080', width: 1920, height: 1080 },
      { name: '1366x768', width: 1366, height: 768 }
    ];

    const lessons = [
      {
        code: 'L1',
        id: 'lesson-d2-01-grc-foundations',
        title: 'GRC Foundations',
        slideCount: 6,
        hasScenario: true,
        scenarioChoices: 4,
        checkPurposesStrip: true
      },
      {
        code: 'L2',
        id: 'lesson-d2-02-grc-tools-risk-register',
        title: 'GRC Tools & Risk Register',
        slideCount: 7,
        hasScenario: true,
        scenarioChoices: 4,
        checkPurposesStrip: false
      }
    ];

    const results = [];
    const findings = [];

    // Helper to mount a lesson directly in the app
    async function mountLesson(lessonId, lang, slideId) {
      return await cdp.eval(`(async () => {
        try {
          const stateModule = await import('./js/core/state.js');
          const rendererModule = await import('./js/ui/renderer.js');
          stateModule.updateSetup({ language: '${lang}' });
          stateModule.selectLearningScreen('learning-viewer', {
            lessonId: '${lessonId}',
            domainId: '2',
            objectiveId: '2.1',
            slideId: ${slideId ? `'${slideId}'` : 'null'}
          });
          await rendererModule.renderApp();
          return { success: true };
        } catch (e) {
          return { success: false, error: e.message };
        }
      })()`);
    }

    for (const vp of viewports) {
      console.log(`\n========================================`);
      console.log(`=== Testing Viewport: ${vp.name} (${vp.width}x${vp.height}) ===`);
      console.log(`========================================\n`);

      await cdp.setViewport(vp.width, vp.height);

      for (const les of lessons) {
        for (const lang of ['en', 'th']) {
          console.log(`\n--- ${les.code} (${les.title}) | Language: ${lang.toUpperCase()} | Viewport: ${vp.name} ---`);

          // Mount the lesson
          const mountRes = await mountLesson(les.id, lang);
          if (!mountRes.success) {
            throw new Error(`Failed to mount lesson ${les.id}: ${mountRes.error}`);
          }
          await sleep(600);

          // Verify viewer is active
          const viewerActive = await cdp.eval(`(() => {
            const v = document.querySelector('.learning-viewer');
            const h = document.querySelector('.viewer-lesson-heading');
            return {
              isMounted: !!v,
              title: h ? h.textContent.trim() : null
            };
          })()`);
          console.log(`Viewer mounted: ${viewerActive.isMounted}, Title: "${viewerActive.title}"`);

          // Navigate slide by slide
          for (let sIdx = 1; sIdx <= les.slideCount; sIdx++) {
            // Go to slide
            await cdp.eval(`(() => {
              // Click previous until first slide, then click next sIdx - 1 times
              const prev = document.querySelector('[data-action="previous"]');
              while (prev && !prev.disabled) prev.click();
              const next = document.querySelector('[data-action="next"]');
              for (let i = 1; i < ${sIdx}; i++) {
                if (next && !next.disabled) next.click();
              }
            })()`);
            await sleep(350);

            // Collect geometry & metrics
            const metrics = await cdp.eval(`(() => {
              const docEl = document.documentElement;
              const body = document.body;
              const slide = document.querySelector('.learning-slide');
              const scene = document.querySelector('.grf-scene, .grt-scene');
              const overflow = (docEl.scrollWidth > window.innerWidth + 1) || (body.scrollWidth > window.innerWidth + 1);
              const slideId = slide ? slide.getAttribute('data-slide-id') : null;
              const titleEl = document.querySelector('.learning-slide-title, .grf-title, .grt-title');
              const titleText = titleEl ? titleEl.textContent.trim() : null;
              
              // Purpose pills check (L1 S02)
              const pills = [...document.querySelectorAll('.grf-purpose-pill')].map(p => p.textContent.trim());
              
              // Scenario choices
              const choices = [...document.querySelectorAll('[data-grc-scenario-choice], [data-grt-scenario-choice]')].map(b => ({
                id: b.getAttribute('data-grc-scenario-choice') || b.getAttribute('data-grt-scenario-choice'),
                text: b.textContent.trim(),
                isSelected: b.classList.contains('selected') || b.getAttribute('aria-pressed') === 'true'
              }));

              // Center canvas check
              let sceneWidth = 0;
              let sceneMarginLeft = 0;
              let sceneMarginRight = 0;
              if (scene) {
                const rect = scene.getBoundingClientRect();
                sceneWidth = rect.width;
                const style = window.getComputedStyle(scene);
                sceneMarginLeft = parseFloat(style.marginLeft) || 0;
                sceneMarginRight = parseFloat(style.marginRight) || 0;
              }

              return {
                slideId,
                titleText,
                hasSlide: !!slide,
                hasScene: !!scene,
                sceneWidth,
                sceneMarginLeft,
                sceneMarginRight,
                docScrollW: docEl.scrollWidth,
                winInnerW: window.innerWidth,
                hasOverflow: overflow,
                pillsCount: pills.length,
                pills,
                choiceCount: choices.length,
                choices
              };
            })()`);

            const shotName = `${les.code}-S0${sIdx}-${lang}-${vp.name}.png`;
            const shotPath = path.join(ARTIFACTS_DIR, shotName);
            await cdp.screenshot(shotPath);

            const passOverflow = !metrics.hasOverflow;
            if (!passOverflow) {
              findings.push(`[OVERFLOW] ${les.code} S0${sIdx} (${lang}, ${vp.name}): scrollWidth ${metrics.docScrollW} > innerWidth ${metrics.winInnerW}`);
            }

            console.log(`  Slide ${sIdx}/${les.slideCount} (${metrics.slideId || 'no-id'}): Overflow: ${metrics.hasOverflow ? 'FAIL' : 'PASS'} | SceneWidth: ${Math.round(metrics.sceneWidth)}px | Title: "${metrics.titleText?.substring(0, 30)}..."`);

            if (les.code === 'L1' && sIdx === 2) {
              console.log(`    -> Slide 2 Purpose Pills: ${metrics.pillsCount} pills found. (Labels: ${metrics.pills.slice(0, 3).join(', ')}...)`);
              if (metrics.pillsCount !== 7) {
                findings.push(`[L1-S02] Expected 7 purpose pills, found ${metrics.pillsCount}`);
              }
            }

            results.push({
              lesson: les.code,
              slide: sIdx,
              slideId: metrics.slideId,
              lang,
              viewport: vp.name,
              metrics,
              pass: passOverflow && metrics.hasSlide,
              screenshot: shotName
            });

            // If scenario slide, test interactions
            if (sIdx === les.slideCount && les.hasScenario) {
              console.log(`  [Scenario Interaction Testing for ${les.code} S0${sIdx}]`);

              // Test distractor B (index 1)
              await cdp.eval(`(() => {
                const b = document.querySelector('[data-grc-scenario-choice="1"], [data-grt-scenario-choice="1"]');
                if (b) b.click();
              })()`);
              await sleep(200);
              const shotDistractorB = `${les.code}-scenario-distractorB-${lang}-${vp.name}.png`;
              await cdp.screenshot(path.join(ARTIFACTS_DIR, shotDistractorB));

              const feedbackB = await cdp.eval(`(() => {
                const fb = document.querySelector('.grf-scenario-feedback, .grt-scenario-feedback');
                return fb ? fb.textContent.trim() : null;
              })()`);
              console.log(`    Choice 1 (Distractor B) feedback: "${feedbackB?.substring(0, 60)}..."`);

              // Test distractor D (index 3)
              await cdp.eval(`(() => {
                const b = document.querySelector('[data-grc-scenario-choice="3"], [data-grt-scenario-choice="3"]');
                if (b) b.click();
              })()`);
              await sleep(200);
              const shotDistractorD = `${les.code}-scenario-distractorD-${lang}-${vp.name}.png`;
              await cdp.screenshot(path.join(ARTIFACTS_DIR, shotDistractorD));

              const feedbackD = await cdp.eval(`(() => {
                const fb = document.querySelector('.grf-scenario-feedback, .grt-scenario-feedback');
                return fb ? fb.textContent.trim() : null;
              })()`);
              console.log(`    Choice 3 (Distractor D) feedback: "${feedbackD?.substring(0, 60)}..."`);

              // Test recommended Option C (index 2)
              await cdp.eval(`(() => {
                const b = document.querySelector('[data-grc-scenario-choice="2"], [data-grt-scenario-choice="2"]');
                if (b) b.click();
              })()`);
              await sleep(200);
              const shotRecC = `${les.code}-scenario-recommendedC-${lang}-${vp.name}.png`;
              await cdp.screenshot(path.join(ARTIFACTS_DIR, shotRecC));

              const feedbackC = await cdp.eval(`(() => {
                const fb = document.querySelector('.grf-scenario-feedback, .grt-scenario-feedback');
                return fb ? fb.textContent.trim() : null;
              })()`);
              console.log(`    Choice 2 (Recommended C) feedback: "${feedbackC?.substring(0, 60)}..."`);
            }
          }

          // Test Reading Mode on this lesson
          console.log(`  [Testing Reading Mode Toggle for ${les.code} ${lang} ${vp.name}]`);
          const readingToggleRes = await cdp.eval(`(() => {
            const toggle = document.querySelector('[data-action="reading"]');
            if (toggle) {
              toggle.click();
              return true;
            }
            return false;
          })()`);
          await sleep(300);

          if (readingToggleRes) {
            const readingShot = `${les.code}-reading-mode-${lang}-${vp.name}.png`;
            await cdp.screenshot(path.join(ARTIFACTS_DIR, readingShot));
            const readingOverflow = await cdp.eval(`document.documentElement.scrollWidth > window.innerWidth + 1`);
            console.log(`    Reading Mode active. Overflow: ${readingOverflow ? 'FAIL' : 'PASS'}`);

            // Toggle back to presentation
            await cdp.eval(`(() => {
              const toggle = document.querySelector('[data-action="reading"]');
              if (toggle) toggle.click();
            })()`);
            await sleep(200);
          }

          // Test Lesson Info modal
          console.log(`  [Testing Lesson Info Modal for ${les.code} ${lang} ${vp.name}]`);
          const infoRes = await cdp.eval(`(() => {
            const infoBtn = document.querySelector('[data-action="lesson-info"]');
            if (infoBtn) {
              infoBtn.click();
              return true;
            }
            return false;
          })()`);
          await sleep(350);

          if (infoRes) {
            const infoShot = `${les.code}-info-modal-${lang}-${vp.name}.png`;
            await cdp.screenshot(path.join(ARTIFACTS_DIR, infoShot));
            console.log(`    Info modal opened and screenshot captured.`);

            // Close info modal
            await cdp.eval(`(() => {
              const closeBtn = document.querySelector('.lesson-info-close, [data-action="close"], .modal-close');
              if (closeBtn) closeBtn.click();
              else {
                // Click backdrop or press escape
                const modal = document.querySelector('.lesson-info-modal, .modal-backdrop');
                if (modal) modal.click();
              }
            })()`);
            await sleep(200);
          }
        }
      }
    }

    // Verify localStorage persistence
    console.log('\n--- Verifying LocalStorage Progress Persistence ---');
    const storageData = await cdp.eval(`(() => {
      const raw = localStorage.getItem('sec_cert_learning_progress_v1');
      return {
        exists: !!raw,
        content: raw ? JSON.parse(raw) : null
      };
    })()`);
    console.log('Progress storage exists:', storageData.exists);
    if (storageData.exists) {
      console.log('Saved lessons in storage:', Object.keys(storageData.content?.lessons || {}));
    }

    console.log('\n========================================');
    console.log('=== Task 141 Browser QA Complete ===');
    console.log('========================================\n');

    const total = results.length;
    const passed = results.filter(r => r.pass).length;
    console.log(`Total Slide Checks: ${total}`);
    console.log(`Passed: ${passed} / ${total} (${Math.round((passed / total) * 100)}%)`);
    console.log(`Findings: ${findings.length}`);
    if (findings.length > 0) {
      findings.forEach(f => console.log(' - ' + f));
    }

    // Save full audit manifest
    const manifest = {
      timestamp: new Date().toISOString(),
      task: 'Task 141 — Domain 2 Objective 2.1 Production Redesign',
      lessonsTested: ['lesson-d2-01-grc-foundations', 'lesson-d2-02-grc-tools-risk-register'],
      totalSlideChecks: total,
      passedSlideChecks: passed,
      findings,
      results
    };

    fs.writeFileSync(path.join(ARTIFACTS_DIR, 'task-141-manifest.json'), JSON.stringify(manifest, null, 2));
    console.log(`Manifest written to: ${path.join(ARTIFACTS_DIR, 'task-141-manifest.json')}`);

  } finally {
    if (cdp) cdp.close();
    chrome.kill();
    server.close();
  }
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});

