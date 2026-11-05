import fs from 'node:fs';
import path from 'node:path';
import { parseMarkdown } from '../js/core/markdown-parser.js';

const domains = [1, 2, 3, 4, 5];
const inventory = [];

for (const d of domains) {
  const filePath = `content/isc2-cc-2026/reading/domain-${d}.md`;
  if (!fs.existsSync(filePath)) continue;
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  let currentObjective = '';
  let currentSection = '';
  let currentAnchor = '';

  let i = 0;
  let tableIndex = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith('## Objective')) {
      currentObjective = trimmed.replace(/^##\s*/, '');
    } else if (trimmed.startsWith('### ')) {
      currentSection = trimmed.replace(/^###\s*/, '');
    } else if (trimmed.startsWith('<h3 id="') || trimmed.startsWith('<div id="topic-') || trimmed.startsWith('<section id="')) {
      const match = trimmed.match(/id="([^"]+)"/);
      if (match) currentAnchor = match[1];
      const headingMatch = trimmed.match(/<h3[^>]*>(.*?)<\/h3>/);
      if (headingMatch) currentSection = headingMatch[1].replace(/&amp;/g, '&');
    }

    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const startLine = i + 1;
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith('|') && lines[i].trim().endsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }

      if (tableLines.length >= 2) {
        tableIndex++;
        const headers = tableLines[0].slice(1, -1).split('|').map(s => s.trim());
        const rowCount = tableLines.length - 2; // exclude header and separator
        const id = `table-d${d}-${String(tableIndex).padStart(2, '0')}`;

        // Check if there's a preceding manual wrapper in markdown
        const prevLine = lines[startLine - 2] ? lines[startLine - 2].trim() : '';
        const prevPrevLine = lines[startLine - 3] ? lines[startLine - 3].trim() : '';
        const hasManualWrapper = prevLine.includes('reading-table-wrapper') || prevPrevLine.includes('reading-table-wrapper');

        inventory.push({
          id,
          domain: d,
          tableIndex,
          startLine,
          objective: currentObjective,
          section: currentSection,
          anchor: currentAnchor,
          headers,
          columnCount: headers.length,
          rowCount,
          hasManualWrapper,
          firstRowPreview: tableLines[2] ? tableLines[2].slice(0, 80) : ''
        });
      }
    } else {
      i++;
    }
  }
}

console.log(`Found ${inventory.length} tables across Domains 1–5:`);
domains.forEach(d => {
  const count = inventory.filter(t => t.domain === d).length;
  console.log(`Domain ${d}: ${count} tables`);
});

fs.writeFileSync(
  'artifacts/qa/reading-notes-tables-inventory.json',
  JSON.stringify(inventory, null, 2)
);
console.log('Saved inventory to artifacts/qa/reading-notes-tables-inventory.json');

