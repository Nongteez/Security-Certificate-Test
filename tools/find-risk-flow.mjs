import fs from 'node:fs';

const content = fs.readFileSync('js/core/diagram-generator.js', 'utf8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('riskTreatmentDecisionFlow:')) {
    console.log(`Line ${i + 1}: ${l.trim()}`);
  }
});

