import fs from 'node:fs';
import path from 'node:path';
import { parseMarkdown } from '../js/core/markdown-parser.js';
import { diagrams } from '../js/core/diagram-generator.js';

const mdPath = path.resolve('content/isc2-cc-2026/reading/domain-2.md');
const mdContent = fs.readFileSync(mdPath, 'utf8');

// Parse markdown to HTML
const parsedHtml = parseMarkdown(mdContent, { diagrams });

console.log('=== FULL DOMAIN 2 MATHEMATICAL & RELATIONSHIP SYMBOL AUDIT ===\n');

// Specific symbols and operators to find
const auditSymbols = [
  // Arithmetic
  { char: '+', name: 'Plus' },
  { char: '−', name: 'Minus (Unicode U+2212)' },
  { char: '×', name: 'Times / Multiplication (Unicode U+00D7)' },
  { char: '÷', name: 'Division (Unicode U+00F7)' },
  { char: '/', name: 'Slash / Ratio' },
  // Equality
  { char: '=', name: 'Equal' },
  { char: '≠', name: 'Not Equal (Unicode U+2260)' },
  { char: '≈', name: 'Approximately Equal (Unicode U+2248)' },
  // Comparison
  { char: '≤', name: 'Less than or Equal (Unicode U+2264)' },
  { char: '≥', name: 'Greater than or Equal (Unicode U+2265)' },
  { char: '<', name: 'Less than' },
  { char: '>', name: 'Greater than' },
  // Relationships
  { char: '→', name: 'Right Arrow (Unicode U+2192)' },
  { char: '←', name: 'Left Arrow (Unicode U+2190)' },
  { char: '↔', name: 'Left-Right Arrow (Unicode U+2194)' },
  { char: '⊂', name: 'Subset (Unicode U+2282)' },
  { char: '⊆', name: 'Subset or Equal (Unicode U+2286)' },
  { char: '∈', name: 'Element of (Unicode U+2208)' },
  // Other
  { char: '%', name: 'Percent' },
  { char: '±', name: 'Plus-Minus (Unicode U+00B1)' },
  { char: '∞', name: 'Infinity (Unicode U+221E)' },
  // ASCII / LaTeX / Entity artefacts to detect
  { char: '<=', name: 'ASCII Less-Than-Equal' },
  { char: '>=', name: 'ASCII Greater-Than-Equal' },
  { char: '->', name: 'ASCII Arrow' },
  { char: '&sub;', name: 'HTML Entity &sub;' },
  { char: '&le;', name: 'HTML Entity &le;' },
  { char: '&ge;', name: 'HTML Entity &ge;' },
  { char: '&larr;', name: 'HTML Entity &larr;' },
  { char: '&rarr;', name: 'HTML Entity &rarr;' },
  { char: '\\le', name: 'LaTeX \\le' },
  { char: '\\ge', name: 'LaTeX \\ge' },
  { char: '\\subset', name: 'LaTeX \\subset' },
  { char: '\\times', name: 'LaTeX \\times' },
  { char: '$', name: 'Dollar / LaTeX delimiter' }
];

const mdLines = mdContent.split(/\r?\n/);
const findings = [];

mdLines.forEach((line, idx) => {
  const lineNum = idx + 1;
  const trimmed = line.trim();
  // Strip HTML tags for content checking
  const textContent = line.replace(/<[^>]+>/g, ' ');

  auditSymbols.forEach(sym => {
    let hasMatch = false;
    if (sym.char === '<' || sym.char === '>') {
      // Check for standalone < or > not part of HTML tag
      const strippedOfTags = line.replace(/<\/?[a-z0-9_-]+(\s+[^>]*)?>/gi, '');
      if (strippedOfTags.includes(sym.char)) {
        hasMatch = true;
      }
    } else if (sym.char === '/') {
      // Only check ratio/division uses of slash like KPI/KRI, Hot/Warm/Cold, 95/100, etc.
      // Exclude closing HTML tags </
      const noClosingTags = line.replace(/<\/[^>]+>/g, '');
      if (noClosingTags.includes('/')) {
        hasMatch = true;
      }
    } else if (sym.char === '$') {
      if (line.includes('$')) hasMatch = true;
    } else if (sym.char.startsWith('\\')) {
      if (line.includes(sym.char)) hasMatch = true;
    } else if (sym.char.startsWith('&')) {
      if (line.includes(sym.char)) hasMatch = true;
    } else {
      if (textContent.includes(sym.char)) hasMatch = true;
    }

    if (hasMatch) {
      findings.push({
        source: 'domain-2.md',
        lineNum,
        symbol: sym.char,
        name: sym.name,
        context: trimmed
      });
    }
  });
});

// Check Diagram Generator
['grcAlignment', 'bcVsDrScope', 'rtoRpoTimeline', 'effectivenessHierarchy'].forEach(diagKey => {
  const code = diagrams[diagKey] || '';
  const diagLines = code.split(/\r?\n/);
  diagLines.forEach((line, idx) => {
    const lineNum = idx + 1;
    const trimmed = line.trim();
    auditSymbols.forEach(sym => {
      let hasMatch = false;
      if (sym.char === '<' || sym.char === '>') {
        const strippedOfTags = line.replace(/<\/?[a-z0-9_-]+(\s+[^>]*)?>/gi, '');
        if (strippedOfTags.includes(sym.char)) hasMatch = true;
      } else if (sym.char === '$' || sym.char.startsWith('\\') || sym.char.startsWith('&') || sym.char === '<=' || sym.char === '->') {
        if (line.includes(sym.char)) hasMatch = true;
      } else if (sym.char !== '/') {
        // text in SVG text elements or HTML
        const textContent = line.replace(/<[^>]+>/g, ' ');
        if (textContent.includes(sym.char)) hasMatch = true;
      }

      if (hasMatch) {
        findings.push({
          source: `diagrams.${diagKey}`,
          lineNum,
          symbol: sym.char,
          name: sym.name,
          context: trimmed
        });
      }
    });
  });
});

console.log(`Total Mathematical & Relationship Symbol Instances Found: ${findings.length}\n`);

// Group by symbol
const grouped = {};
findings.forEach(f => {
  if (!grouped[f.symbol]) grouped[f.symbol] = [];
  grouped[f.symbol].push(f);
});

Object.keys(grouped).forEach(sym => {
  console.log(`--- Symbol: "${sym}" (${grouped[sym][0].name}) [Count: ${grouped[sym].length}] ---`);
  grouped[sym].slice(0, 10).forEach(item => {
    console.log(`  [${item.source}:L${item.lineNum}] ${item.context.slice(0, 120)}`);
  });
  if (grouped[sym].length > 10) {
    console.log(`  ... and ${grouped[sym].length - 10} more occurrences`);
  }
  console.log('');
});

