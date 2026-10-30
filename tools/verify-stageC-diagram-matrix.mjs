import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const PORT = 5214;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/domain-3-final-acceptance');
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

const server = http.createServer((req, res) => {
  let reqPath = decodeURIComponent(req.url.split('?')[0]);
  if (reqPath === '/') reqPath = '/index.html';
  const fullPath = path.join(ROOT, reqPath);
  fs.stat(fullPath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404); res.end('Not found'); return;
    }
    const ext = path.extname(fullPath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'text/plain' });
    fs.createReadStream(fullPath).pipe(res);
  });
});

server.listen(PORT, '127.0.0.1', async () => {
  const chromeProcess = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9474',
    '--disable-gpu',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1500));
  const newTabRes = await fetch(`http://127.0.0.1:9474/json/new?http://127.0.0.1:${PORT}/index.html`, { method: 'PUT' });
  const tabData = await newTabRes.json();
  const ws = new WebSocket(tabData.webSocketDebuggerUrl);
  await new Promise(resolve => { ws.onopen = resolve; });

  let id = 0;
  const send = (method, params = {}) => new Promise((resolve) => {
    const curId = ++id;
    const handler = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.id === curId) {
        ws.removeEventListener('message', handler);
        resolve(msg.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });

  const evaluate = async (expr) => {
    const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
    return r.result?.value;
  };

  await send('Page.enable');
  await new Promise(r => setTimeout(r, 600));

  // Navigate to Reading Notes
  await evaluate(`(() => {
    const certCard = document.querySelector('.cert-card-available[data-cert-id="isc2-cc"]') || document.querySelector('.cert-card-available');
    if (certCard) certCard.click();
  })()`);
  await new Promise(r => setTimeout(r, 800));

  await evaluate(`(() => {
    const readBtn = document.querySelector('.btn-reading-entry');
    if (readBtn) readBtn.click();
  })()`);
  await new Promise(r => setTimeout(r, 1500));

  await evaluate(`(() => {
    const d3Select = document.querySelector('[data-select-domain="3"]');
    if (d3Select) d3Select.click();
  })()`);
  await new Promise(r => setTimeout(r, 1500));

  const viewports = [
    { name: '1920x1080', w: 1920, h: 1080, mobile: false },
    { name: '1366x768', w: 1366, h: 768, mobile: false },
    { name: '1024x768', w: 1024, h: 768, mobile: false },
    { name: '768x1024', w: 768, h: 1024, mobile: true },
    { name: '390x844', w: 390, h: 844, mobile: true },
    { name: '375x812', w: 375, h: 812, mobile: true },
    { name: '320x568', w: 320, h: 568, mobile: true }
  ];

  const themes = ['dark', 'light'];
  const matrixResults = [];

  for (const vp of viewports) {
    for (const theme of themes) {
      await send('Emulation.setDeviceMetricsOverride', {
        width: vp.w,
        height: vp.h,
        deviceScaleFactor: 1,
        mobile: vp.mobile
      });
      await evaluate(`document.documentElement.setAttribute('data-theme', '${theme}')`);
      await evaluate(`(() => {
        const diag = document.querySelector('.reading-diagram-card[data-diagram="accessControlModels"]');
        if (diag) diag.scrollIntoView({ block: 'center' });
      })()`);
      await new Promise(r => setTimeout(r, 400));

      const check = await evaluate(`(() => {
        const card = document.querySelector('.reading-diagram-card[data-diagram="accessControlModels"]');
        if (!card) return { error: 'Card not found' };
        const desktopWrap = card.querySelector('.reading-diag-desktop');
        const mobileWrap = card.querySelector('.reading-diag-mobile');
        const isMobile = window.innerWidth <= 768;
        const dDisplay = desktopWrap ? window.getComputedStyle(desktopWrap).display : 'none';
        const mDisplay = mobileWrap ? window.getComputedStyle(mobileWrap).display : 'none';

        const svg = card.querySelector('svg');
        const svgTexts = Array.from(card.querySelectorAll('svg text')).map(t => {
          const r = t.getBoundingClientRect();
          return {
            text: t.textContent.trim(),
            width: Math.round(r.width),
            height: Math.round(r.height),
            x: Math.round(r.x),
            y: Math.round(r.y)
          };
        });

        // Check text validity based on active view mode
        let activeOk = true;
        let zeroWidthTexts = [];
        let squishedHeights = [];
        let overlappingTexts = [];

        const mobileCards = Array.from(card.querySelectorAll('.reading-mob-tier-card')).map(mc => {
          const r = mc.getBoundingClientRect();
          return {
            title: mc.querySelector('.reading-mob-tier-name')?.textContent.trim(),
            badge: mc.querySelector('.reading-mob-tier-num')?.textContent.trim(),
            width: Math.round(r.width),
            height: Math.round(r.height)
          };
        });

        if (!isMobile) {
          // Desktop SVG is active: check SVG text elements
          zeroWidthTexts = svgTexts.filter(t => t.width === 0);
          squishedHeights = svgTexts.filter(t => t.height < 10);
          for (let i = 0; i < svgTexts.length; i++) {
            for (let j = i + 1; j < svgTexts.length; j++) {
              const a = svgTexts[i];
              const b = svgTexts[j];
              if (Math.abs(a.y - b.y) < 10) {
                const overlap = (a.x < b.x + b.width) && (a.x + a.width > b.x);
                if (overlap) overlappingTexts.push({ a: a.text, b: b.text });
              }
            }
          }
          activeOk = svgTexts.length >= 24 && zeroWidthTexts.length === 0 && overlappingTexts.length === 0 && dDisplay === 'flex' && mDisplay === 'none';
        } else {
          // Mobile HTML stack is active: check mobile cards
          const allMobileCardsValid = mobileCards.length === 4 && mobileCards.every(mc => mc.width > 0 && mc.height > 0);
          activeOk = allMobileCardsValid && dDisplay === 'none' && mDisplay === 'flex';
        }

        return {
          isMobile,
          dDisplay,
          mDisplay,
          textCount: svgTexts.length,
          zeroWidthCount: zeroWidthTexts.length,
          squishedCount: squishedHeights.length,
          overlappingCount: overlappingTexts.length,
          mobileCardCount: mobileCards.length,
          activeOk
        };
      })()`);

      matrixResults.push({
        viewport: vp.name,
        theme,
        ...check
      });

      console.log(`[${vp.name} ${theme}] isMobile=${check.isMobile} D=${check.dDisplay} M=${check.mDisplay} TextCount=${check.textCount} Overlaps=${check.overlappingCount} ZeroW=${check.zeroWidthCount} MobileCards=${check.mobileCardCount} Result=${check.activeOk ? 'PASS' : 'FAIL'}`);

      // Capture screenshot
      const shot = await send('Page.captureScreenshot', { format: 'png' });
      const fName = `stageC-accessControlModels-${vp.name}-${theme}.png`;
      fs.writeFileSync(path.join(ARTIFACTS_DIR, fName), Buffer.from(shot.data, 'base64'));
    }
  }

  // Breakpoint boundary checks
  console.log('\n--- Testing Breakpoint Boundaries: 600px, 601px, 768px, 769px ---');
  const boundaries = [600, 601, 768, 769];
  for (const bW of boundaries) {
    await send('Emulation.setDeviceMetricsOverride', {
      width: bW,
      height: 800,
      deviceScaleFactor: 1,
      mobile: bW <= 768
    });
    await evaluate(`(() => {
      const diag = document.querySelector('.reading-diagram-card[data-diagram="accessControlModels"]');
      if (diag) diag.scrollIntoView({ block: 'center' });
    })()`);
    await new Promise(r => setTimeout(r, 300));
    const bCheck = await evaluate(`(() => {
      const card = document.querySelector('.reading-diagram-card[data-diagram="accessControlModels"]');
      const d = card.querySelector('.reading-diag-desktop');
      const m = card.querySelector('.reading-diag-mobile');
      return {
        dDisplay: d ? window.getComputedStyle(d).display : 'none',
        mDisplay: m ? window.getComputedStyle(m).display : 'none'
      };
    })()`);
    console.log(`[Boundary ${bW}px] Desktop=${bCheck.dDisplay} Mobile=${bCheck.mDisplay} -> ${bW <= 768 ? (bCheck.dDisplay === 'none' && bCheck.mDisplay === 'flex' ? 'PASS (Mobile Active)' : 'FAIL') : (bCheck.dDisplay === 'flex' && bCheck.mDisplay === 'none' ? 'PASS (Desktop Active)' : 'FAIL')}`);
  }

  fs.writeFileSync(path.join(ARTIFACTS_DIR, 'stageC-diagram-matrix-results.json'), JSON.stringify(matrixResults, null, 2));

  ws.close();
  chromeProcess.kill();
  server.close();
  process.exit(0);
});
