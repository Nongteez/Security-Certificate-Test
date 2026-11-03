import fs from 'node:fs';

for (let d = 1; d <= 5; d++) {
  const p = `content/isc2-cc-2026/reading/domain-${d}.md`;
  const c = fs.readFileSync(p, 'utf8');
  const lines = c.split('\n');
  const h2 = lines.filter(l => l.startsWith('## ')).map(l => l.replace('## ', '').trim());
  const h3 = lines.filter(l => l.startsWith('### ')).map(l => l.replace('### ', '').trim());
  const tables = (c.match(/\| :?---/g) || []).length;
  const diagrams = (c.match(/class="reading-diagram-container"/g) || c.match(/class='reading-diagram-container'/g) || []).length;
  const scenarios = (c.match(/<div class="reading-scenario"/g) || []).length;
  console.log(`Domain ${d}: ${lines.length} lines, ${(c.length/1024).toFixed(1)} KB | Objectives (H2): ${h2.length}, Subsections (H3): ${h3.length}, Tables: ${tables}, Diagrams: ${diagrams}, Scenarios: ${scenarios}`);
}

