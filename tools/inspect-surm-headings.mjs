import fs from 'node:fs';

const surmFiles = [
  { domain: 1, path: 'ISC2 Update 2026/Domain 1/D1 Surm.md' },
  { domain: 2, path: 'ISC2 Update 2026/Domain 2/D2 surm.md' },
  { domain: 3, path: 'ISC2 Update 2026/Domain 3/D3 surm.md' },
  { domain: 4, path: 'ISC2 Update 2026/Domain 4/D4 surm.md' },
  { domain: 5, path: 'ISC2 Update 2026/Domain 5/D5 surm.md' }
];

for (const sf of surmFiles) {
  console.log(`\n======================================================`);
  console.log(`DOMAIN ${sf.domain}: ${sf.path}`);
  console.log(`======================================================`);
  const content = fs.readFileSync(sf.path, 'utf8');
  const lines = content.split('\n');
  const headings = lines.filter(l => l.startsWith('#'));
  console.log(`Total lines: ${lines.length}, Headings: ${headings.length}`);
  console.log('Sample Headings (first 20):');
  headings.slice(0, 20).forEach(h => console.log('  ', h.trim()));
}

