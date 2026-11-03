import fs from 'node:fs';
import path from 'node:path';

const DOMAIN_CONFIGS = [
  {
    domain: 1,
    title: 'Security Principles',
    surm: 'ISC2 Update 2026/Domain 1/D1 Surm.md',
    reading: 'content/isc2-cc-2026/reading/domain-1.md',
    primarySum: 'ISC2 Update 2026/Domain 1/D1 sum.md',
    primaryDoc: 'ISC2 Update 2026/Domain 1/Domain 1.md'
  },
  {
    domain: 2,
    title: 'Security Governance',
    surm: 'ISC2 Update 2026/Domain 2/D2 surm.md',
    reading: 'content/isc2-cc-2026/reading/domain-2.md',
    primarySum: 'ISC2 Update 2026/Domain 2/D2 sum.md',
    primaryDoc: 'ISC2 Update 2026/Domain 2/Domain 2.md'
  },
  {
    domain: 3,
    title: 'Identity and Access Management (IAM)',
    surm: 'ISC2 Update 2026/Domain 3/D3 surm.md',
    reading: 'content/isc2-cc-2026/reading/domain-3.md',
    primarySum: 'ISC2 Update 2026/Domain 3/D3 sum.md',
    primaryDoc: 'ISC2 Update 2026/Domain 3/Domain 3.md'
  },
  {
    domain: 4,
    title: 'Network & Cloud Security',
    surm: 'ISC2 Update 2026/Domain 4/D4 surm.md',
    reading: 'content/isc2-cc-2026/reading/domain-4.md',
    primarySum: 'ISC2 Update 2026/Domain 4/D4 sum.md',
    primaryDoc: 'ISC2 Update 2026/Domain 4/Domain 4.md'
  },
  {
    domain: 5,
    title: 'Security Operations',
    surm: 'ISC2 Update 2026/Domain 5/D5 surm.md',
    reading: 'content/isc2-cc-2026/reading/domain-5.md',
    primarySum: 'ISC2 Update 2026/Domain 5/D5 sum.md',
    primaryDoc: 'ISC2 Update 2026/Domain 5/Domain 5.md'
  }
];

function parseHeadingsAndConcepts(markdown) {
  const lines = markdown.split('\n');
  const items = [];
  let currentHeading = '';
  let currentLevel = 0;
  let textBuffer = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const hMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (hMatch) {
      if (currentHeading) {
        items.push({
          heading: currentHeading,
          level: currentLevel,
          text: textBuffer.join('\n').trim(),
          line: i - textBuffer.length
        });
      }
      currentLevel = hMatch[1].length;
      currentHeading = hMatch[2].trim();
      textBuffer = [];
    } else {
      textBuffer.push(line);
    }
  }
  if (currentHeading) {
    items.push({
      heading: currentHeading,
      level: currentLevel,
      text: textBuffer.join('\n').trim(),
      line: lines.length - textBuffer.length
    });
  }
  return items;
}

const auditOutput = [];

for (const cfg of DOMAIN_CONFIGS) {
  const surmRaw = fs.readFileSync(cfg.surm, 'utf8');
  const readingRaw = fs.readFileSync(cfg.reading, 'utf8');

  const surmItems = parseHeadingsAndConcepts(surmRaw);
  const readingItems = parseHeadingsAndConcepts(readingRaw);

  auditOutput.push({
    domain: cfg.domain,
    title: cfg.title,
    surmStats: {
      lines: surmRaw.split('\n').length,
      bytes: surmRaw.length,
      itemCount: surmItems.length
    },
    readingStats: {
      lines: readingRaw.split('\n').length,
      bytes: readingRaw.length,
      itemCount: readingItems.length
    },
    surmHeadings: surmItems.map(s => ({ level: s.level, heading: s.heading })),
    readingHeadings: readingItems.map(r => ({ level: r.level, heading: r.heading }))
  });
}

fs.writeFileSync('tools/domain-headings-comparison.json', JSON.stringify(auditOutput, null, 2), 'utf8');
console.log('✓ Headings comparison written to tools/domain-headings-comparison.json');

