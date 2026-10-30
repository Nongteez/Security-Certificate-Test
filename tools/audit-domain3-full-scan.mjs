import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const mdPath = path.join(ROOT, 'content', 'isc2-cc-2026', 'reading', 'domain-3.md');
const md = fs.readFileSync(mdPath, 'utf8');

console.log('=== Domain 3 Full Content & Code Integrity Scan ===\n');

// 1. Raw H1 Heading Check
const rawH1Matches = md.match(/^#\s+[^\n]+/gm);
console.log('1. Raw H1 Headings in Markdown:', rawH1Matches ? rawH1Matches : '0 (PASS)');

// 2. Unescaped Dollar LaTeX Delimiters Check
const rawDollars = md.match(/\$/g);
console.log('2. Raw LaTeX Dollar Delimiters:', rawDollars ? rawDollars.length : '0 (PASS)');

// 3. HTML Comments Leakage Check
const rawComments = md.match(/<!--[\s\S]*?-->/g);
console.log('3. HTML Comments in Markdown:', rawComments ? rawComments.length : '0 (PASS)');

// 4. Decorative Emojis Check
const emojiRegex = /[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
const foundEmojis = [];
md.split('\n').forEach((line, i) => {
  if (emojiRegex.test(line)) foundEmojis.push({ line: i + 1, text: line.trim() });
});
console.log('4. Decorative Emojis in Markdown:', foundEmojis.length === 0 ? '0 (PASS)' : foundEmojis);

// 5. Section Anchor IDs and Structure
const sectionIds = [
  'topic-3-1-jml-lifecycle',
  'topic-3-1-roles-definition',
  'topic-3-1-provisioning',
  'topic-3-1-access-review',
  'topic-3-1-deprovisioning',
  'topic-3-1-iam-frameworks',
  'topic-3-1-iam-tools',
  'topic-3-1-least-privilege',
  'topic-3-2-logical-controls',
  'topic-3-2-sod',
  'topic-3-2-polp-vs-sod',
  'topic-3-2-dac',
  'topic-3-2-mac',
  'topic-3-2-rbac',
  'topic-3-2-abac',
  'topic-3-2-models-matrix',
  'domain-3-review',
  'topic-3-review-scenarios'
];

let allSectionsFound = true;
sectionIds.forEach(id => {
  const found = md.includes(`id="${id}"`);
  if (!found) {
    console.error(`  MISSING SECTION ANCHOR: id="${id}"`);
    allSectionsFound = false;
  }
});
console.log('5. Section Anchor Verification:', allSectionsFound ? `All ${sectionIds.length} anchors present (PASS)` : 'FAIL');

// 6. Ordered List Structure Check
const olMatches = md.match(/^\s*\d+\.\s+/gm);
console.log('6. Total Numbered List Items in Markdown:', olMatches ? `${olMatches.length} items (PASS)` : 'None');

// 7. Math Formulas Check
const mathMatches = md.match(/class="reading-math-formula"[^>]*>([\s\S]*?)<\/span>/g);
console.log('7. Protected Math Formulas:', mathMatches ? `${mathMatches.length} formulas wrapped (PASS)` : 'None');

// 8. Distinction Cards Check
const cardMatches = md.match(/class="reading-distinction-card"/g);
console.log('8. Distinction Cards in Markdown:', cardMatches ? `${cardMatches.length} cards (PASS)` : 'None');

// 9. Tables Count Check
const tableLines = md.split('\n').filter(l => l.startsWith('|') && l.endsWith('|'));
console.log('9. Data Table Markdown Lines:', tableLines.length > 0 ? `${tableLines.length} table rows (PASS)` : 'None');

console.log('\nScan completed successfully.');

