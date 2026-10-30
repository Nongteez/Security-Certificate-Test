import fs from 'fs';

const data = JSON.parse(fs.readFileSync('content/isc2-cc-2026/learning/published/lessons/lesson-d3-01-roles-provisioning.json', 'utf8'));
console.log('Total slides:', data.slides.length);
data.slides.forEach((s, i) => {
  console.log(`\n============================================================`);
  console.log(`Slide ${i+1}: ${s.id}`);
  console.log(`Title EN: ${s.title.en}`);
  console.log(`Title TH: ${s.title.th}`);
  console.log(`Reference IDs:`, s.referenceIds);
  s.blocks.forEach((b, bi) => {
    console.log(`\n  --- Block ${bi+1} (${b.kind}) ---`);
    if (b.text) {
      console.log(`  [EN]: ${b.text.en}`);
      console.log(`  [TH]: ${b.text.th}`);
    } else if (b.rows) {
      console.log(`  Caption EN: ${b.caption?.en} | TH: ${b.caption?.th}`);
      console.log(`  Columns: ${b.columns.map(c => c.en).join(' | ')}`);
      b.rows.forEach((r, ri) => {
        console.log(`  Row ${ri+1} EN: ${r.map(c => c.en).join(' || ')}`);
        console.log(`  Row ${ri+1} TH: ${r.map(c => c.th).join(' || ')}`);
      });
    } else if (b.items) {
      b.items.forEach((it, ii) => {
        console.log(`  Item ${ii+1} EN: ${it.en}`);
        console.log(`  Item ${ii+1} TH: ${it.th}`);
      });
    }
  });
});

