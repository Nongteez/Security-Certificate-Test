import fs from 'node:fs';

for (let d = 1; d <= 5; d++) {
  const p = `content/isc2-cc-2026/reading/domain-${d}.md`;
  const text = fs.readFileSync(p, 'utf8');
  const anchors = [...text.matchAll(/id="(topic-[^"]+)"/g)].map(m => m[1]);
  console.log(`Domain ${d}: ${anchors.length} topic anchors found:`);
  console.log('  ' + anchors.slice(0, 5).join(', ') + ' ... ' + anchors.slice(-2).join(', '));
}

