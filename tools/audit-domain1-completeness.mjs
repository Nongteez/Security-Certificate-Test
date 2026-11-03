import fs from 'node:fs';

const d1Surm = fs.readFileSync('ISC2 Update 2026/Domain 1/D1 Surm.md', 'utf8');
const d1Reading = fs.readFileSync('content/isc2-cc-2026/reading/domain-1.md', 'utf8');
const d1Sum = fs.readFileSync('ISC2 Update 2026/Domain 1/D1 sum.md', 'utf8');
const d1Domain = fs.readFileSync('ISC2 Update 2026/Domain 1/Domain 1.md', 'utf8');

console.log('=== DOMAIN 1 CONTENT ANALYSIS ===');
console.log('D1 Surm length:', d1Surm.length, 'lines:', d1Surm.split('\n').length);
console.log('D1 Reading length:', d1Reading.length, 'lines:', d1Reading.split('\n').length);

// Extract sections from D1 Surm
const surmSections = [];
let currentSec = null;
d1Surm.split('\n').forEach((line, idx) => {
  if (line.startsWith('# ') || line.startsWith('## ') || line.startsWith('### ')) {
    if (currentSec) surmSections.push(currentSec);
    currentSec = { heading: line.trim(), line: idx + 1, content: [] };
  } else if (currentSec) {
    currentSec.content.push(line);
  }
});
if (currentSec) surmSections.push(currentSec);

console.log(`Extracted ${surmSections.length} sections from D1 Surm.md`);
fs.writeFileSync('tools/d1-surm-sections.json', JSON.stringify(surmSections, null, 2), 'utf8');

