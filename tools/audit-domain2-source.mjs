import fs from 'fs';
import { parseMarkdown } from '../js/core/markdown-parser.js';

const md = fs.readFileSync('content/isc2-cc-2026/reading/domain-2.md', 'utf8');
const lines = md.split('\n');

console.log('=== Domain 2 Full Source Audit ===');
console.log('Total lines:', lines.length);

// 1. Check all HTML comments
const comments = [];
lines.forEach((line, idx) => {
  if (line.includes('<!--') || line.includes('-->')) {
    comments.push({ lineNum: idx + 1, text: line.trim() });
  }
});
console.log('\n[1] HTML Comments found:', comments.length);
comments.forEach(c => console.log('  L' + c.lineNum + ': ' + c.text));

// 2. Check headings
const headings = [];
lines.forEach((line, idx) => {
  const m = line.match(/^(#{1,6})\s+(.+)$/);
  if (m) {
    headings.push({ lineNum: idx + 1, level: m[1].length, text: m[2].trim() });
  }
});
console.log('\n[2] Headings found in markdown:', headings.length);
headings.forEach(h => console.log('  L' + h.lineNum + ' [H' + h.level + ']: ' + h.text));

// Check for HTML headings in markdown as well (<h1, <h2, <h3, <h4, <h5, <h6)
const htmlHeadings = [];
lines.forEach((line, idx) => {
  const m = line.match(/<h([1-6])\b[^>]*>(.*?)<\/h\1>/i);
  if (m) {
    htmlHeadings.push({ lineNum: idx + 1, level: m[1], text: m[2].trim() });
  }
});
console.log('\n[2.1] HTML Headings found in markdown:', htmlHeadings.length);
htmlHeadings.forEach(h => console.log('  L' + h.lineNum + ' <h' + h.level + '>: ' + h.text));

// 3. Check section and div balance
const openSections = (md.match(/<section\b[^>]*>/gi) || []).length;
const closeSections = (md.match(/<\/section>/gi) || []).length;
const openDivs = (md.match(/<div\b[^>]*>/gi) || []).length;
const closeDivs = (md.match(/<\/div>/gi) || []).length;
console.log('\n[3] Tag Balance:');
console.log('  <section>: open=' + openSections + ', close=' + closeSections);
console.log('  <div>: open=' + openDivs + ', close=' + closeDivs);

// 4. Check tables
const tablePipes = lines.filter(l => l.trim().startsWith('|'));
console.log('\n[4] Markdown Table lines:', tablePipes.length);

// 5. Check directives (:::scenario, etc.)
const directives = lines.filter(l => l.trim().startsWith(':::'));
console.log('\n[5] Directives (:::):', directives.length);

// 6. Test parsing through markdown-parser
const rendered = parseMarkdown(md);
console.log('\n[6] Rendered HTML length:', rendered.length);
console.log('  Contains visible "<!--" in rendered:', rendered.includes('<!--'));
console.log('  Contains escaped "&lt;!--":', rendered.includes('&lt;!--'));
console.log('  Contains raw ::: in rendered:', rendered.includes(':::'));

// 7. Check rendered H1s in rendered output
const renderedH1s = rendered.match(/<h1\b[^>]*>(.*?)<\/h1>/gi) || [];
console.log('\n[7] Rendered H1 elements in output:', renderedH1s.length);
renderedH1s.forEach(h1 => console.log('  ' + h1));

// 8. Check any unexpected leaked tokens or delimiters
const rawSeparators = rendered.match(/<p>[=\-–—\s*]{5,}<\/p>/gi) || [];
console.log('\n[8] Leaked separator paragraphs in rendered:', rawSeparators.length);
rawSeparators.forEach(s => console.log('  ' + s));
