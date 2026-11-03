import fs from 'node:fs';

const configs = [
  { domain: 1, surm: 'ISC2 Update 2026/Domain 1/D1 Surm.md', reading: 'content/isc2-cc-2026/reading/domain-1.md' },
  { domain: 2, surm: 'ISC2 Update 2026/Domain 2/D2 surm.md', reading: 'content/isc2-cc-2026/reading/domain-2.md' },
  { domain: 3, surm: 'ISC2 Update 2026/Domain 3/D3 surm.md', reading: 'content/isc2-cc-2026/reading/domain-3.md' },
  { domain: 4, surm: 'ISC2 Update 2026/Domain 4/D4 surm.md', reading: 'content/isc2-cc-2026/reading/domain-4.md' },
  { domain: 5, surm: 'ISC2 Update 2026/Domain 5/D5 surm.md', reading: 'content/isc2-cc-2026/reading/domain-5.md' }
];

for (const c of configs) {
  console.log(`\n======================================================`);
  console.log(`DOMAIN ${c.domain}`);
  console.log(`======================================================`);

  const surm = fs.readFileSync(c.surm, 'utf8');
  const reading = fs.readFileSync(c.reading, 'utf8');

  // Extract all lines that look like key terms or subheadings (##, ###, bold terms, list items)
  const surmBlocks = surm.split('\n\n');
  const keyTerms = [];

  for (const block of surmBlocks) {
    const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
    if (!lines.length) continue;
    const firstLine = lines[0];
    if (firstLine.startsWith('#')) {
      keyTerms.push({
        title: firstLine.replace(/^#+\s*/, ''),
        sample: lines.slice(1, 4).join(' ')
      });
    }
  }

  console.log(`Found ${keyTerms.length} major blocks/topics in Surm.md`);
  // Check presence of keywords in reading
  let coveredCount = 0;
  let missingCount = 0;
  const missing = [];

  for (const kt of keyTerms) {
    // extract key english or thai terms from title
    const englishWords = kt.title.match(/[a-zA-Z0-9-]{3,}/g) || [];
    let found = false;
    if (englishWords.length > 0) {
      // test if at least main english word is in reading
      found = englishWords.some(w => reading.toLowerCase().includes(w.toLowerCase()));
    } else {
      // test first 8 chars of thai title
      const thaiPrefix = kt.title.slice(0, 8);
      found = reading.includes(thaiPrefix);
    }

    if (found) {
      coveredCount++;
    } else {
      missingCount++;
      missing.push(kt.title);
    }
  }

  console.log(`Covered by keyword match: ${coveredCount}, Not found by exact match: ${missingCount}`);
  if (missing.length > 0) {
    console.log('Sample not-immediately-found topics:');
    missing.slice(0, 10).forEach(m => console.log('  -', m));
  }
}

