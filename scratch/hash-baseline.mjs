import fs from 'node:fs';
import crypto from 'node:crypto';

const files = [
  'content/isc2-cc-2026/reading/domain-1.md',
  'content/isc2-cc-2026/reading/domain-1.js',
  'content/isc2-cc-2026/reading/domain-1-scenarios.js',
  'content/isc2-cc-2026/reading/domain-2.md',
  'content/isc2-cc-2026/reading/domain-2.js',
  'content/isc2-cc-2026/reading/domain-2-scenarios.js',
  'content/isc2-cc-2026/reading/domain-3.md',
  'content/isc2-cc-2026/reading/domain-3.js',
  'content/isc2-cc-2026/reading/domain-3-scenarios.js',
  'content/isc2-cc-2026/reading/domain-4.md',
  'content/isc2-cc-2026/reading/domain-4.js',
  'content/isc2-cc-2026/reading/domain-4-scenarios.js',
  'css/reading.css',
  'js/core/diagram-generator.js',
  'js/core/markdown-parser.js',
  'js/core/reading-loader.js',
  'js/ui/screen-reading.js',
  // Source files
  'ISC2 Update 2026/Domain 1/D1 sum.md',
  'ISC2 Update 2026/Domain 1/Domain 1.md',
  'ISC2 Update 2026/Domain 2/D2 sum.md',
  'ISC2 Update 2026/Domain 2/Domain 2.md',
  'ISC2 Update 2026/Domain 3/D3 sum.md',
  'ISC2 Update 2026/Domain 3/Domain 3.md',
  'ISC2 Update 2026/Domain 4/D4 sum.md',
  'ISC2 Update 2026/Domain 4/Domain 4.md',
  'ISC2 Update 2026/Domain 4/DOMAIN 4.txt'
];

console.log('=== READING NOTES & SOURCES HASH INVENTORY ===\n');
for (const f of files) {
  if (fs.existsSync(f)) {
    const data = fs.readFileSync(f);
    const hash = crypto.createHash('sha256').update(data).digest('hex');
    console.log(`${hash}  ${data.length.toString().padStart(8)} B  ${f}`);
  } else {
    console.log(`MISSING: ${f}`);
  }
}

