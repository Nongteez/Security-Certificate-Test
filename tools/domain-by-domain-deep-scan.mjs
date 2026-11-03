import fs from 'node:fs';

for (let d = 1; d <= 5; d++) {
  const p = `content/isc2-cc-2026/reading/domain-${d}.md`;
  const text = fs.readFileSync(p, 'utf8');
  const lines = text.split('\n');

  console.log(`\n======================================================`);
  console.log(`DOMAIN ${d} DETAILED SUBSECTION AUDIT (${lines.length} lines)`);
  console.log(`======================================================`);

  let currentObj = '';
  let subCount = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    const objMatch = line.match(/^(?:##\s+|<h2[^>]*>)(Objective\s+\d+\.\d+[^<]*)/i);
    if (objMatch) {
      currentObj = objMatch[1].replace(/<[^>]+>/g, '').trim();
      console.log(`\n>>> ${currentObj}`);
      continue;
    }

    const sumMatch = line.match(/^(?:##\s+|<h2[^>]*>)(Domain\s+\d+\s+Summary[^<]*)/i);
    if (sumMatch) {
      currentObj = sumMatch[1].replace(/<[^>]+>/g, '').trim();
      console.log(`\n>>> ${currentObj}`);
      continue;
    }

    const subMatch = line.match(/^(?:###\s+|<h3(?:\s+id="([^"]+)")?[^>]*>)(.*?)(?:<\/h3>)?$/i);
    if (subMatch) {
      subCount++;
      const id = subMatch[1] || '';
      const title = subMatch[2].replace(/<[^>]+>/g, '').trim();
      console.log(`  ${subCount.toString().padStart(2)}. [${id || 'no-id'}] ${title}`);
    }
  }
}

