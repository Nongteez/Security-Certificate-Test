import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const PORT = 5196;
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/domain-3-comprehensive-audit');

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
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    const ext = path.extname(fullPath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'text/plain' });
    fs.createReadStream(fullPath).pipe(res);
  });
});

server.listen(PORT, '127.0.0.1', async () => {
  console.log(`Test server running at http://127.0.0.1:${PORT}`);
  const chromeProcess = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9456',
    '--disable-gpu',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1500));
  const newTabRes = await fetch(`http://127.0.0.1:9456/json/new?http://127.0.0.1:${PORT}/index.html`, { method: 'PUT' });
  const tabData = await newTabRes.json();
  const ws = new WebSocket(tabData.webSocketDebuggerUrl);

  await new Promise(resolve => { ws.onopen = resolve; });

  let id = 0;
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const curId = ++id;
    const handler = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.id === curId) {
        ws.removeEventListener('message', handler);
        if (msg.error) reject(new Error(msg.error.message));
        else resolve(msg.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });

  const evaluate = async (expr) => {
    const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
    if (r.exceptionDetails) {
      throw new Error(`Eval exception: ${r.exceptionDetails.text} (${r.exceptionDetails.exception?.description || ''})`);
    }
    return r.result?.value;
  };

  await send('Page.enable');
  await send('DOM.enable');
  await new Promise(r => setTimeout(r, 1000));

  // Navigate to Reading Notes
  await evaluate(`(() => {
    const card = document.querySelector('.cert-card-available[data-cert-id="isc2-cc"]') || document.querySelector('.cert-card-available');
    if (card) card.click();
  })()`);
  await new Promise(r => setTimeout(r, 600));

  await evaluate(`(() => {
    const readBtn = document.querySelector('.btn-reading-entry');
    if (readBtn) readBtn.click();
  })()`);
  await new Promise(r => setTimeout(r, 1200));

  // Select Domain 3
  await evaluate(`(() => {
    const d3 = document.querySelector('[data-select-domain="3"]');
    if (d3) d3.click();
  })()`);
  await new Promise(r => setTimeout(r, 1200));

  const targetViewports = [
    { name: '1920x1080', w: 1920, h: 1080, mobile: false },
    { name: '1366x768', w: 1366, h: 768, mobile: false },
    { name: '1024x768', w: 1024, h: 768, mobile: false },
    { name: '768x1024', w: 768, h: 1024, mobile: true },
    { name: '390x844', w: 390, h: 844, mobile: true },
    { name: '375x812', w: 375, h: 812, mobile: true },
    { name: '320x568', w: 320, h: 568, mobile: true }
  ];

  const themes = ['dark', 'light'];
  const results = [];

  for (const vp of targetViewports) {
    for (const theme of themes) {
      console.log(`\nAuditing Viewport: ${vp.name} | Theme: ${theme}`);
      await send('Emulation.setDeviceMetricsOverride', {
        width: vp.w,
        height: vp.h,
        deviceScaleFactor: 1,
        mobile: vp.mobile
      });

      await evaluate(`document.documentElement.setAttribute('data-theme', '${theme}')`);
      await new Promise(r => setTimeout(r, 400));

      const auditData = await evaluate(`(() => {
        const docW = document.documentElement.clientWidth;
        const scrollW = document.documentElement.scrollWidth;
        const bodyScrollW = document.body.scrollWidth;
        const maxScroll = Math.max(scrollW, bodyScrollW);
        const overflow = maxScroll > docW + 1;

        // Check diagrams visibility
        const diags = ['iamLifecycle', 'nistSp80063Framework', 'leastPrivilegeVsSod', 'accessControlModels'];
        const diagStatus = diags.map(name => {
          const card = document.querySelector(\`.reading-diagram-card[data-diagram="\${name}"]\`);
          if (!card) return { name, exists: false };
          const desktop = card.querySelector('.reading-diag-desktop');
          const mobile = card.querySelector('.reading-diag-mobile');
          const dDisp = desktop ? window.getComputedStyle(desktop).display : 'none';
          const mDisp = mobile ? window.getComputedStyle(mobile).display : 'none';
          return {
            name,
            exists: true,
            desktopDisplay: dDisp,
            mobileDisplay: mDisp,
            bothHidden: dDisp === 'none' && mDisp === 'none',
            bothVisible: dDisp !== 'none' && mDisp !== 'none'
          };
        });

        // Check headings count
        const h1s = document.querySelectorAll('h1');
        const h1Count = h1s.length;

        // Check list numbering continuity
        const ols = Array.from(document.querySelectorAll('.reading-article[data-domain-id="3"] ol'));
        const olDetails = ols.map((ol, idx) => {
          const lis = Array.from(ol.children).filter(el => el.tagName === 'LI');
          return {
            index: idx + 1,
            items: lis.length
          };
        });

        // Check tables width
        const tableWrappers = Array.from(document.querySelectorAll('.reading-article[data-domain-id="3"] .reading-table-wrapper'));
        const tableStatus = tableWrappers.map((tw, idx) => {
          const table = tw.querySelector('table');
          const twRect = tw.getBoundingClientRect();
          const tRect = table ? table.getBoundingClientRect() : null;
          return {
            index: idx + 1,
            wrapperWidth: Math.round(twRect.width),
            tableWidth: tRect ? Math.round(tRect.width) : 0,
            overflowsWrapper: tRect ? tRect.width > twRect.width : false
          };
        });

        // Find unclipped elements extending past docW
        function isClipped(el) {
          let cur = el.parentElement;
          while (cur && cur !== document.body && cur !== document.documentElement) {
            const ox = window.getComputedStyle(cur).overflowX;
            if (ox === 'auto' || ox === 'scroll' || ox === 'hidden') return true;
            cur = cur.parentElement;
          }
          return false;
        }
        const els = document.querySelectorAll('*');
        const offenders = [];
        for (const el of els) {
          if (isClipped(el)) continue;
          const rect = el.getBoundingClientRect();
          if (rect.right > docW + 2) {
            offenders.push({
              tag: el.tagName,
              className: el.className,
              id: el.id,
              text: el.textContent?.substring(0, 40),
              right: Math.round(rect.right),
              width: Math.round(rect.width)
            });
          }
        }

        return {
          docW,
          scrollW,
          bodyScrollW,
          overflow,
          h1Count,
          diagStatus,
          olDetails,
          tableStatus,
          offenders: offenders.slice(0, 8)
        };
      })()`);

      results.push({
        viewport: vp.name,
        theme,
        ...auditData
      });

      console.log(`  DocWidth: ${auditData.docW}px, MaxScroll: ${Math.max(auditData.scrollW, auditData.bodyScrollW)}px, Overflow: ${auditData.overflow ? 'FAIL' : 'PASS'}`);
      if (auditData.overflow) {
        console.log(`    Offenders:`, auditData.offenders);
      }
      console.log(`  H1 Count: ${auditData.h1Count} (Expected 1)`);
      console.log(`  Diagrams:`, auditData.diagStatus.map(d => `${d.name}: D=${d.desktopDisplay}, M=${d.mobileDisplay}`).join(' | '));
      const anyDiagGlitch = auditData.diagStatus.some(d => d.bothHidden || d.bothVisible);
      if (anyDiagGlitch) {
        console.error(`  [!] DIAGRAM GLITCH DETECTED (both hidden or both visible):`, auditData.diagStatus);
      }

      // Capture screenshot for key viewports
      if ((vp.name === '320x568' || vp.name === '1024x768' || vp.name === '768x1024' || vp.name === '1920x1080') && theme === 'dark') {
        const shot = await send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync(path.join(ARTIFACTS_DIR, `audit-${vp.name}-${theme}.png`), Buffer.from(shot.data, 'base64'));
      }
    }
  }

  // Breakpoint boundary tests: 600px vs 601px, and 768px vs 769px
  console.log(`\nAuditing Breakpoint Boundaries: 600px vs 601px, 768px vs 769px`);
  const boundaryTests = [600, 601, 768, 769];
  for (const bW of boundaryTests) {
    await send('Emulation.setDeviceMetricsOverride', {
      width: bW,
      height: 800,
      deviceScaleFactor: 1,
      mobile: bW <= 768
    });
    await new Promise(r => setTimeout(r, 300));
    const bData = await evaluate(`(() => {
      const docW = document.documentElement.clientWidth;
      const scrollW = document.documentElement.scrollWidth;
      const bodyScrollW = document.body.scrollWidth;
      const diags = ['iamLifecycle', 'nistSp80063Framework', 'leastPrivilegeVsSod', 'accessControlModels'];
      const statuses = diags.map(name => {
        const card = document.querySelector(\`.reading-diagram-card[data-diagram="\${name}"]\`);
        const d = card?.querySelector('.reading-diag-desktop');
        const m = card?.querySelector('.reading-diag-mobile');
        return {
          name,
          desktop: d ? window.getComputedStyle(d).display : 'none',
          mobile: m ? window.getComputedStyle(m).display : 'none'
        };
      });
      return { docW, maxScroll: Math.max(scrollW, bodyScrollW), statuses };
    })()`);
    console.log(`  Width ${bW}px -> docW: ${bData.docW}px, maxScroll: ${bData.maxScroll}px, overflow: ${bData.maxScroll > bData.docW + 1 ? 'FAIL' : 'PASS'}`);
    console.log(`    Diagrams:`, bData.statuses.map(s => `${s.name}: D=${s.desktop}, M=${s.mobile}`).join(' | '));
  }

  fs.writeFileSync(path.join(ARTIFACTS_DIR, 'comprehensive-audit-results.json'), JSON.stringify(results, null, 2));

  ws.close();
  chromeProcess.kill();
  server.close();
  process.exit(0);
});
