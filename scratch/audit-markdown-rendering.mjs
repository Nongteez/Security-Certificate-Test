import fs from 'node:fs';
import path from 'node:path';
import { parseMarkdown } from '../js/core/markdown-parser.js';

const domains = [1, 2, 3, 4];
console.log('=== AUDITING MARKDOWN RENDERING ACROSS DOMAINS 1–4 ===\n');

for (const dId of domains) {
  const mdPath = path.resolve(`content/isc2-cc-2026/reading/domain-${dId}.md`);
  const rawMd = fs.readFileSync(mdPath, 'utf8');
  const renderedHtml = parseMarkdown(rawMd);

  console.log(`--- Domain ${dId} Rendering Quality ---`);

  // 1. Raw markdown leakage (e.g., unmatched ** or ## or ```)
  const unparsedBold = (renderedHtml.match(/\*\*[^*]+\*\*/g) || []);
  const unparsedHeadings = (renderedHtml.match(/^(#{1,6}\s+.+)$/gm) || []);
  const unparsedFences = (renderedHtml.match(/```/g) || []);

  console.log(`  Unparsed ** bold: ${unparsedBold.length} found`);
  if (unparsedBold.length > 0) console.log(`     Sample: ${unparsedBold.slice(0, 3).join(', ')}`);

  console.log(`  Unparsed # headings: ${unparsedHeadings.length} found`);
  if (unparsedHeadings.length > 0) console.log(`     Sample: ${unparsedHeadings.slice(0, 3).join(', ')}`);

  console.log(`  Unparsed code fences (\`\`\`): ${unparsedFences.length} found`);

  // 2. Unparsed LaTeX (isolated dollar signs like $...$)
  // Check text nodes outside <span class="katex"> or <script>
  const unparsedDollars = (renderedHtml.match(/(\$[A-Za-z0-9_\\^{}\s+\-*\/=<>≤≥]+\$)/g) || []);
  // Note: Some might be valid KaTeX spans or math formulas. Let's inspect raw $ in renderedHtml outside math tags
  const rawDollarSigns = (renderedHtml.match(/[^\\]\$/g) || []).length;
  console.log(`  Raw dollar signs in rendered HTML: ${rawDollarSigns}`);

  // 3. Malformed ordered lists (<ol> starting with 1, then another <ol> starting with 1)
  const olMatches = [...renderedHtml.matchAll(/<ol[^>]*>([\s\S]*?)<\/ol>/gi)];
  console.log(`  <ol> blocks: ${olMatches.length}`);
  let looseSplitLists = 0;
  for (let i = 0; i < olMatches.length - 1; i++) {
    // Check if consecutive <ol> blocks are separated by just whitespace or <p>
    const nextStart = renderedHtml.indexOf(olMatches[i+1][0]);
    const currentEnd = renderedHtml.indexOf(olMatches[i][0]) + olMatches[i][0].length;
    const inBetween = renderedHtml.substring(currentEnd, nextStart).trim();
    if (inBetween.length < 200 && (inBetween.startsWith('<p>') || inBetween.length === 0)) {
      looseSplitLists++;
    }
  }
  console.log(`  Suspicious split <ol> blocks: ${looseSplitLists}`);

  // 4. Broken tables
  const tableRows = [...renderedHtml.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)];
  let mismatchedCells = 0;
  for (const tr of tableRows) {
    const cells = (tr[1].match(/<(th|td)/g) || []).length;
    if (cells === 0) mismatchedCells++;
  }
  console.log(`  Empty or broken <tr> rows: ${mismatchedCells}`);

  // 5. Escaped HTML entities where tags should be
  const leakedLtGt = (renderedHtml.match(/&lt;(div|span|p|h1|h2|h3|table|tr|td|th|ul|ol|li)[^&]*&gt;/gi) || []);
  console.log(`  Escaped HTML tags (&lt;tag&gt;): ${leakedLtGt.length}`);
  if (leakedLtGt.length > 0) console.log(`     Sample: ${leakedLtGt.slice(0, 3).join(', ')}`);

  // 6. Duplicate Heading IDs
  const idMatches = [...renderedHtml.matchAll(/id="([^"]+)"/g)].map(m => m[1]);
  const idCounts = new Map();
  const dupIds = [];
  for (const id of idMatches) {
    idCounts.set(id, (idCounts.get(id) || 0) + 1);
    if (idCounts.get(id) === 2) dupIds.push(id);
  }
  console.log(`  Duplicate element IDs: ${dupIds.length} found`);
  if (dupIds.length > 0) console.log(`     Duplicate IDs: ${dupIds.join(', ')}`);

  console.log('');
}

