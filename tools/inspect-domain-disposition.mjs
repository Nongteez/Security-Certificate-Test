import fs from 'node:fs';

const disp = JSON.parse(fs.readFileSync('artifacts/qa/reading-notes-content-depth-audit/supplementary-disposition-register.json', 'utf8'));

for (let d = 1; d <= 5; d++) {
  const dItems = disp.filter(i => i.domain === d);
  console.log(`\n========================================================`);
  console.log(`DOMAIN ${d} SUPPLEMENTARY TOPICS SUMMARY`);
  console.log(`========================================================`);

  const missing = dItems.filter(i => i.disposition === 'MISSING');
  const shallow = dItems.filter(i => i.disposition === 'COVERED BUT SHALLOW');
  const enrichment = dItems.filter(i => i.disposition === 'USEFUL ENRICHMENT');
  const partially = dItems.filter(i => i.disposition === 'PARTIALLY COVERED');
  const well = dItems.filter(i => i.disposition === 'ALREADY COVERED WELL');

  console.log(`Well: ${well.length}, Partial: ${partially.length}, Shallow: ${shallow.length}, Missing: ${missing.length}, Useful Enrichment: ${enrichment.length}`);

  console.log(`\n--- Top Missing Topics (Total: ${missing.length}) ---`);
  missing.slice(0, 15).forEach(m => console.log(`  [L${m.lineStart}] ${m.title}`));

  console.log(`\n--- Top Shallow Topics (Total: ${shallow.length}) ---`);
  shallow.slice(0, 10).forEach(m => console.log(`  [L${m.lineStart}] ${m.title} -> target: ${m.targetSubsection}`));
}

