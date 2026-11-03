import fs from 'node:fs';
import path from 'node:path';

const manifest = JSON.parse(fs.readFileSync('artifacts/qa/reading-notes-diagram-design-audit/forensics-manifest.json', 'utf8'));

// Unique diagrams
const uniqueKeys = [...new Set(manifest.map(m => m.key))];
console.log(`Total unique diagram keys in manifest: ${uniqueKeys.length}`);

// For each diagram, check file size of 1920-dark, 1366-dark, 390-dark
const auditTable = [];
for (const key of uniqueKeys) {
  const records = manifest.filter(m => m.key === key);
  const r1920 = records.find(r => r.viewport === 'desktop-1920' && r.theme === 'dark');
  const r1366 = records.find(r => r.viewport === 'laptop-1366' && r.theme === 'dark');
  const r390 = records.find(r => r.viewport === 'mobile-390' && r.theme === 'dark');

  const file1920 = r1920 ? path.join('artifacts/qa/reading-notes-diagram-design-audit', r1920.screenshot) : null;
  const file1366 = r1366 ? path.join('artifacts/qa/reading-notes-diagram-design-audit', r1366.screenshot) : null;
  const file390 = r390 ? path.join('artifacts/qa/reading-notes-diagram-design-audit', r390.screenshot) : null;

  const size1920 = file1920 && fs.existsSync(file1920) ? fs.statSync(file1920).size : 0;
  const size1366 = file1366 && fs.existsSync(file1366) ? fs.statSync(file1366).size : 0;
  const size390 = file390 && fs.existsSync(file390) ? fs.statSync(file390).size : 0;

  auditTable.push({
    domain: r1920.domain,
    key,
    mode1920: r1920.mode,
    mode1366: r1366.mode,
    mode390: r390.mode,
    h1920: r1920.elementHeight,
    h1366: r1366.elementHeight,
    h390: r390.elementHeight,
    size1920,
    size1366,
    size390
  });
}

console.log(JSON.stringify(auditTable.slice(0, 5), null, 2));

