import fs from 'node:fs';

const files = [
  { domain: 1, path: 'ISC2 Update 2026/Domain 1/D1 Surm.md' },
  { domain: 2, path: 'ISC2 Update 2026/Domain 2/D2 surm.md' },
  { domain: 3, path: 'ISC2 Update 2026/Domain 3/D3 surm.md' },
  { domain: 4, path: 'ISC2 Update 2026/Domain 4/D4 surm.md' },
  { domain: 5, path: 'ISC2 Update 2026/Domain 5/D5 surm.md' },
];

for (const f of files) {
  const content = fs.readFileSync(f.path, 'utf8');
  const lines = content.split('\n');
  const headings = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('#')) {
      headings.push({ lineNum: i + 1, text: line });
    }
  }
  console.log(`\n======================================================`);
  console.log(`Domain ${f.domain}: ${f.path} (${lines.length} lines, ${headings.length} headings)`);
  console.log(`======================================================`);
  headings.forEach(h => {
    // print level 1, 2, 3
    const match = h.text.match(/^(#{1,3})\s+(.*)/);
    if (match) {
      const indent = '  '.repeat(match[1].length - 1);
      console.log(`${indent}${match[1]} (L${h.lineNum}) ${match[2]}`);
    }
  });
}

