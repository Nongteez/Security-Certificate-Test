import fs from 'node:fs';
import path from 'node:path';
import { parseMarkdown } from '../js/core/markdown-parser.js';
import { diagrams } from '../js/core/diagram-generator.js';

const mdPath = path.resolve('content/isc2-cc-2026/reading/domain-2.md');
const mdContent = fs.readFileSync(mdPath, 'utf8');

// Parse markdown to HTML
const parsedHtml = parseMarkdown(mdContent, { diagrams });

console.log('=== Domain 2 Source & Diagram Mathematical Symbols Audit ===\n');

// 1. Check for raw LaTeX syntax
const latexRegex = /\\[a-zA-Z]+|\$[^$\n]+\$/g;
const latexMatchesInMd = mdContent.match(latexRegex) || [];
const latexMatchesInHtml = parsedHtml.match(latexRegex) || [];

console.log('1. Raw LaTeX Search:');
console.log(`   Matches in Source Markdown: ${latexMatchesInMd.length}`, latexMatchesInMd);
console.log(`   Matches in Rendered HTML: ${latexMatchesInHtml.length}`, latexMatchesInHtml);

// 2. Check for dollar signs
const dollarRegex = /\$/g;
const dollarsInMd = mdContent.match(dollarRegex) || [];
const dollarsInHtml = parsedHtml.match(dollarRegex) || [];
console.log('\n2. Dollar Signs ($):');
console.log(`   In Source MD: ${dollarsInMd.length}`);
console.log(`   In Rendered HTML: ${dollarsInHtml.length}`);

// 3. Check for specific relations: RTO, MTD, DR, BC, <=, <=, subset
const searchTerms = [
  'MTD',
  'RTO',
  'RPO',
  'DR ⊂ BC',
  'DR &sub; BC',
  'DR ⊆ BC',
  '⊂',
  '⊆',
  '≤',
  '≥',
  '<',
  '>',
  '≠',
  '≈',
  '→',
  '->',
  '<-',
  '←',
  '↔',
  '&le;',
  '&ge;',
  '&sub;',
  '&amp;sub;',
  '&amp;le;',
  '&amp;ge;',
  '&lt;',
  '&gt;'
];

console.log('\n3. Keyword & Symbol Occurrences in Source Markdown:');
const lines = mdContent.split(/\r?\n/);
lines.forEach((line, idx) => {
  searchTerms.forEach(term => {
    if (line.includes(term)) {
      console.log(`   Line ${idx + 1} [${term}]: ${line.trim()}`);
    }
  });
});

console.log('\n4. Keyword & Symbol Occurrences in Diagram Definitions:');
['grcAlignment', 'bcVsDrScope', 'rtoRpoTimeline', 'effectivenessHierarchy'].forEach(diagName => {
  const diagHtml = diagrams[diagName] || '';
  const diagLines = diagHtml.split(/\r?\n/);
  diagLines.forEach((line, idx) => {
    searchTerms.forEach(term => {
      if (line.includes(term)) {
        console.log(`   Diagram [${diagName}] L${idx + 1} [${term}]: ${line.trim()}`);
      }
    });
  });
});

// 5. Escaped Entity Leakage Check in Rendered HTML
console.log('\n5. Escaped Entity Leakage in Rendered HTML:');
const escapedEntities = parsedHtml.match(/&amp;(sub|le|ge|lt|gt|times|divide|ne);/g) || [];
console.log(`   Double-escaped entities (&amp;...;): ${escapedEntities.length}`, escapedEntities);

const literalEntities = parsedHtml.match(/&(sub|le|ge|lt|gt|times|ne|approx|isin|cap|cup);/g) || [];
console.log(`   Single HTML entities: ${literalEntities.length}`, [...new Set(literalEntities)]);

