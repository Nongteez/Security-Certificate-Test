import fs from 'node:fs';
import path from 'node:path';

const mdFiles = [
  'content/isc2-cc-2026/reading/domain-1.md',
  'content/isc2-cc-2026/reading/domain-2.md',
  'content/isc2-cc-2026/reading/domain-3.md',
  'content/isc2-cc-2026/reading/domain-4.md',
  'content/isc2-cc-2026/reading/domain-5.md'
];

for (const f of mdFiles) {
  const content = fs.readFileSync(path.resolve(f), 'utf8');
  const dMatches = [...content.matchAll(/class=["']([^"']*(?:stack|card|grid|hierarchy|timeline|matrix)[^"']*)["']/g)];
  const classes = new Set(dMatches.map(m => m[1]));
  console.log(`\n=== ${f} ===`);
  for (const c of classes) {
    if (!c.includes('reading-article') && !c.includes('scenario') && !c.includes('distinction')) {
      console.log('  ', c);
    }
  }
}
