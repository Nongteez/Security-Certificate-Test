import fs from 'node:fs';

const content = fs.readFileSync('js/core/diagram-generator.js', 'utf8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('riskTreatmentDecisionFlow:')) {
    const prevLines = lines.slice(Math.max(0, i - 8), i).join('\n');
    console.log(`=== Occurrence at line ${i + 1} ===\nPreceding lines:\n${prevLines}\n`);
  }
});

