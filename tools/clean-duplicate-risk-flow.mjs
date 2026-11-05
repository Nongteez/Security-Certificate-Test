import fs from 'node:fs';

const content = fs.readFileSync('js/core/diagram-generator.js', 'utf8');

// We want to find each occurrence of `riskTreatmentDecisionFlow: \``
// and see which diagram it follows.
// The true home is after `riskLifecycle` in Domain 1 (Objective 1.2.4).

const lines = content.split('\n');
const cleanedLines = [];

let inDuplicateToRemove = false;
let duplicateCount = 0;
let keptCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  if (line.includes('// 1.2.4 Risk Treatment Decision Framework & 4 Responses')) {
    // Check what came before
    // Look back at previous non-empty lines in cleanedLines
    let prevCode = '';
    for (let j = cleanedLines.length - 1; j >= 0; j--) {
      if (cleanedLines[j].trim()) {
        prevCode = cleanedLines[j];
        break;
      }
    }
    
    // Check if previous diagram was riskLifecycle
    // In diagram-generator.js, riskLifecycle ends before 1.2.4
    // Let's check recent cleanedLines for 'riskLifecycle'
    const recent = cleanedLines.slice(-30).join('\n');
    const isAfterRiskLifecycle = recent.includes('riskLifecycle');

    if (!isAfterRiskLifecycle) {
      inDuplicateToRemove = true;
      duplicateCount++;
      continue;
    } else {
      keptCount++;
      cleanedLines.push(line);
      continue;
    }
  }

  if (inDuplicateToRemove) {
    // Check if we reached the end of this duplicate diagram
    // It ends with `},\n` or `}\n` or `},\r\n` or `  // ` of next property
    // Specifically, riskTreatmentDecisionFlow ends with:
    //   </div>\n</div>\n`,
    if (line.trim() === '`,' || line.trim() === '`') {
      inDuplicateToRemove = false;
      // We don't push this end line because it belonged to the duplicate
      continue;
    }
    continue;
  }

  cleanedLines.push(line);
}

console.log(`Kept ${keptCount} occurrence, removed ${duplicateCount} duplicates`);
const newContent = cleanedLines.join('\n');
fs.writeFileSync('js/core/diagram-generator.js', newContent, 'utf8');

// Verify syntax
try {
  new Function(newContent);
  console.log('Syntax check: PASS');
} catch (e) {
  console.error('Syntax check: FAIL', e.message);
}

