import fs from 'node:fs';

const content = fs.readFileSync('js/core/diagram-generator.js', 'utf8');
const lines = content.split('\n');

for (const lineNum of [300, 570, 1172, 1472, 1637]) {
  console.log(`=== Around Line ${lineNum} ===`);
  const start = Math.max(0, lineNum - 5);
  const end = Math.min(lines.length, lineNum + 10);
  console.log(lines.slice(start, end).join('\n'));
}

