import fs from 'node:fs';
import path from 'node:path';

const manifest = JSON.parse(fs.readFileSync('artifacts/qa/reading-notes-diagram-design-audit/forensics-manifest.json', 'utf8'));

// Group by diagram key
const byKey = {};
for (const entry of manifest) {
  if (!byKey[entry.key]) byKey[entry.key] = [];
  byKey[entry.key].push(entry);
}

console.log('=== FORENSIC ANALYSIS OF ALL 28 DIAGRAMS ===\n');

const summaryTable = [];

for (const [key, records] of Object.entries(byKey)) {
  const d1920_dark = records.find(r => r.viewport === 'desktop-1920' && r.theme === 'dark');
  const d1366_dark = records.find(r => r.viewport === 'laptop-1366' && r.theme === 'dark');
  const d1024_dark = records.find(r => r.viewport === 'tablet-1024' && r.theme === 'dark');
  const d390_dark = records.find(r => r.viewport === 'mobile-390' && r.theme === 'dark');

  const domain = d1920_dark?.domain || 'unknown';
  const mode1920 = d1920_dark?.mode;
  const mode1366 = d1366_dark?.mode;
  const mode1024 = d1024_dark?.mode;
  const mode390 = d390_dark?.mode;
  const height1920 = d1920_dark?.elementHeight;

  summaryTable.push({
    domain,
    key,
    mode1920,
    mode1366,
    mode1024,
    mode390,
    height1920
  });
}

// Print summary
console.log('Domain | Diagram Key                | 1920px Mode       | 1366px Mode       | 1024px Mode       | Height @ 1920');
console.log('-------|----------------------------|-------------------|-------------------|-------------------|--------------');
for (const row of summaryTable) {
  console.log(
    `D${row.domain}     | ${row.key.padEnd(26)} | ${row.mode1920.padEnd(17)} | ${row.mode1366.padEnd(17)} | ${row.mode1024.padEnd(17)} | ${String(row.height1920 + 'px').padEnd(12)}`
  );
}

fs.writeFileSync('tools/forensic-summary.json', JSON.stringify(summaryTable, null, 2), 'utf8');

