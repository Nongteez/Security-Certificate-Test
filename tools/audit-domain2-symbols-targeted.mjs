import fs from 'node:fs';
import path from 'node:path';
import { parseMarkdown } from '../js/core/markdown-parser.js';
import { diagrams } from '../js/core/diagram-generator.js';

const mdPath = path.resolve('content/isc2-cc-2026/reading/domain-2.md');
const mdContent = fs.readFileSync(mdPath, 'utf8');

// Strip out HTML tags to analyze text content only
function stripTags(text) {
  return text.replace(/<[^>]+>/g, ' ');
}

const symbolsOfInterest = [
  { symbol: '≤', label: 'Less than or equal (Unicode)', regex: /≤/g },
  { symbol: '≥', label: 'Greater than or equal (Unicode)', regex: /≥/g },
  { symbol: '⊂', label: 'Subset (Unicode)', regex: /⊂/g },
  { symbol: '⊆', label: 'Subset or equal (Unicode)', regex: /⊆/g },
  { symbol: '≠', label: 'Not equal (Unicode)', regex: /≠/g },
  { symbol: '≈', label: 'Approximately equal (Unicode)', regex: /≈/g },
  { symbol: '→', label: 'Right arrow (Unicode)', regex: /→/g },
  { symbol: '←', label: 'Left arrow (Unicode)', regex: /←/g },
  { symbol: '↔', label: 'Bidirectional arrow (Unicode)', regex: /↔/g },
  { symbol: '×', label: 'Multiplication sign (Unicode)', regex: /×/g },
  { symbol: '÷', label: 'Division sign (Unicode)', regex: /÷/g },
  { symbol: '±', label: 'Plus-minus (Unicode)', regex: /±/g },
  { symbol: '−', label: 'Minus sign (Unicode U+2212)', regex: /\u2212/g },
  { symbol: '&sub;', label: 'HTML Entity &sub;', regex: /&sub;/g },
  { symbol: '&le;', label: 'HTML Entity &le;', regex: /&le;/g },
  { symbol: '&ge;', label: 'HTML Entity &ge;', regex: /&ge;/g },
  { symbol: '->', label: 'ASCII arrow ->', regex: /->/g },
  { symbol: '<=', label: 'ASCII comparison <=', regex: /<=/g },
  { symbol: '>=', label: 'ASCII comparison >=', regex: />=/g },
  { symbol: '\\le', label: 'LaTeX \\le', regex: /\\le\b/g },
  { symbol: '\\leq', label: 'LaTeX \\leq', regex: /\\leq\b/g },
  { symbol: '\\ge', label: 'LaTeX \\ge', regex: /\\ge\b/g },
  { symbol: '\\geq', label: 'LaTeX \\geq', regex: /\\geq\b/g },
  { symbol: '\\subset', label: 'LaTeX \\subset', regex: /\\subset\b/g },
  { symbol: '\\times', label: 'LaTeX \\times', regex: /\\times\b/g },
  { symbol: '\\rightarrow', label: 'LaTeX \\rightarrow', regex: /\\rightarrow\b/g },
  { symbol: '%', label: 'Percent %', regex: /%/g },
  { symbol: '=', label: 'Equal =', regex: /=/g }
];

console.log('=== TARGETED SYMBOL INVENTORY IN DOMAIN 2 SOURCE (domain-2.md) ===\n');

const lines = mdContent.split(/\r?\n/);
const mdInventory = [];

lines.forEach((line, idx) => {
  const lineNum = idx + 1;
  const stripped = stripTags(line);
  symbolsOfInterest.forEach(item => {
    if (item.regex.test(stripped)) {
      mdInventory.push({ lineNum, symbol: item.symbol, label: item.label, raw: line.trim() });
    }
  });
});

console.log(`Found ${mdInventory.length} symbol occurrences in domain-2.md:`);
mdInventory.forEach(item => {
  console.log(`[L${item.lineNum}] [${item.symbol}] (${item.label}): ${item.raw}`);
});

console.log('\n=== TARGETED SYMBOL INVENTORY IN DIAGRAM GENERATOR (Domain 2 Diagrams) ===\n');

const diagInventory = [];
['grcAlignment', 'bcVsDrScope', 'rtoRpoTimeline', 'effectivenessHierarchy'].forEach(diagName => {
  const diagHtml = diagrams[diagName] || '';
  const diagLines = diagHtml.split(/\r?\n/);
  diagLines.forEach((line, idx) => {
    const lineNum = idx + 1;
    // For SVG/HTML, check inner text or text attributes
    symbolsOfInterest.forEach(item => {
      // test against line
      if (item.regex.test(line)) {
        diagInventory.push({ diagName, lineNum, symbol: item.symbol, label: item.label, raw: line.trim() });
      }
    });
  });
});

console.log(`Found ${diagInventory.length} symbol occurrences in Domain 2 diagrams:`);
diagInventory.forEach(item => {
  console.log(`[${item.diagName}:L${item.lineNum}] [${item.symbol}] (${item.label}): ${item.raw}`);
});

