import fs from 'node:fs';
import path from 'node:path';

const DOMAIN_CONFIGS = [
  {
    domain: 1,
    title: 'Domain 1: Security Principles',
    weight: '26%',
    readingPath: 'content/isc2-cc-2026/reading/domain-1.md',
    surmPath: 'ISC2 Update 2026/Domain 1/D1 Surm.md',
    primaryPath: 'ISC2 Update 2026/Domain 1/Domain 1.md',
    sumPath: 'ISC2 Update 2026/Domain 1/D1 sum.md',
    jsPath: 'js/data/reading/domain-1.js',
    scenariosPath: 'js/data/reading/domain-1-scenarios.js'
  },
  {
    domain: 2,
    title: 'Domain 2: Business Continuity, Disaster Recovery & Incident Response Concepts',
    weight: '10%',
    readingPath: 'content/isc2-cc-2026/reading/domain-2.md',
    surmPath: 'ISC2 Update 2026/Domain 2/D2 surm.md',
    primaryPath: 'ISC2 Update 2026/Domain 2/Domain 2.md',
    sumPath: 'ISC2 Update 2026/Domain 2/D2 sum.md',
    jsPath: 'js/data/reading/domain-2.js',
    scenariosPath: 'js/data/reading/domain-2-scenarios.js'
  },
  {
    domain: 3,
    title: 'Domain 3: Access Controls Concepts',
    weight: '22%',
    readingPath: 'content/isc2-cc-2026/reading/domain-3.md',
    surmPath: 'ISC2 Update 2026/Domain 3/D3 surm.md',
    primaryPath: 'ISC2 Update 2026/Domain 3/Domain 3.md',
    sumPath: 'ISC2 Update 2026/Domain 3/D3 sum.md',
    jsPath: 'js/data/reading/domain-3.js',
    scenariosPath: 'js/data/reading/domain-3-scenarios.js'
  },
  {
    domain: 4,
    title: 'Domain 4: Network Security',
    weight: '24%',
    readingPath: 'content/isc2-cc-2026/reading/domain-4.md',
    surmPath: 'ISC2 Update 2026/Domain 4/D4 surm.md',
    primaryPath: 'ISC2 Update 2026/Domain 4/Domain 4.md',
    sumPath: 'ISC2 Update 2026/Domain 4/D4 sum.md',
    jsPath: 'js/data/reading/domain-4.js',
    scenariosPath: 'js/data/reading/domain-4-scenarios.js'
  },
  {
    domain: 5,
    title: 'Domain 5: Security Operations',
    weight: '18%',
    readingPath: 'content/isc2-cc-2026/reading/domain-5.md',
    surmPath: 'ISC2 Update 2026/Domain 5/D5 surm.md',
    primaryPath: 'ISC2 Update 2026/Domain 5/Domain 5.md',
    sumPath: 'ISC2 Update 2026/Domain 5/D5 sum.md',
    jsPath: 'js/data/reading/domain-5.js',
    scenariosPath: 'js/data/reading/domain-5-scenarios.js'
  }
];

function extractSubsections(content) {
  const lines = content.split('\n');
  const subsections = [];
  let currentObj = null;
  let currentSub = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Objective header
    const objMatch = line.match(/^(?:##\s+|<h2[^>]*>)(Objective\s+\d+\.\d+[^<]*)/i);
    if (objMatch) {
      currentObj = {
        title: objMatch[1].replace(/<[^>]+>/g, '').trim(),
        line: i + 1,
        subsections: []
      };
      continue;
    }

    // Subsection header (H3 or ###)
    const subMatch = line.match(/^(?:###\s+|<h3(?:\s+id="([^"]+)")?[^>]*>)(.*?)(?:<\/h3>)?$/i);
    if (subMatch) {
      const id = subMatch[1] || '';
      const title = subMatch[2].replace(/<[^>]+>/g, '').trim();
      currentSub = {
        id,
        title,
        line: i + 1,
        obj: currentObj ? currentObj.title : 'General / Summary',
        contentLines: []
      };
      subsections.push(currentSub);
      continue;
    }

    if (currentSub) {
      currentSub.contentLines.push(lines[i]);
    }
  }

  return subsections;
}

function extractSurmSections(surmContent) {
  const lines = surmContent.split('\n');
  const items = [];
  let currentItem = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('#')) {
      const level = line.match(/^#+/)[0].length;
      const text = line.replace(/^#+\s*/, '').trim();
      currentItem = {
        level,
        title: text,
        line: i + 1,
        contentLines: []
      };
      items.push(currentItem);
    } else if (currentItem) {
      currentItem.contentLines.push(lines[i]);
    }
  }
  return items;
}

const auditOutput = [];

for (const cfg of DOMAIN_CONFIGS) {
  const reading = fs.readFileSync(cfg.readingPath, 'utf8');
  const surm = fs.readFileSync(cfg.surmPath, 'utf8');
  const primary = fs.existsSync(cfg.primaryPath) ? fs.readFileSync(cfg.primaryPath, 'utf8') : '';
  const sum = fs.existsSync(cfg.sumPath) ? fs.readFileSync(cfg.sumPath, 'utf8') : '';

  const subsections = extractSubsections(reading);
  const surmSections = extractSurmSections(surm);

  // Diagrams in reading
  const diagrams = [...reading.matchAll(/data-diagram=["']([^"']+)["']/g)].map(m => m[1]);

  // Tables in reading
  const mdTables = (reading.match(/\| :?---/g) || []).length;
  const htmlTables = (reading.match(/<table/g) || []).length;

  // Word & line counts
  const readingLines = reading.split('\n').length;
  const surmLines = surm.split('\n').length;

  auditOutput.push({
    domain: cfg.domain,
    title: cfg.title,
    weight: cfg.weight,
    readingStats: {
      lines: readingLines,
      bytes: reading.length,
      subsectionsCount: subsections.length,
      diagramsCount: diagrams.length,
      diagrams,
      tablesCount: mdTables + htmlTables
    },
    surmStats: {
      lines: surmLines,
      bytes: surm.length,
      sectionsCount: surmSections.length
    },
    subsections: subsections.map(s => ({
      id: s.id,
      title: s.title,
      obj: s.obj,
      lineLength: s.contentLines.length,
      hasTable: s.contentLines.some(l => l.includes('| ---') || l.includes('|:---') || l.includes('<table')),
      hasDiagram: s.contentLines.some(l => l.includes('data-diagram')),
      hasScenario: s.contentLines.some(l => l.includes('reading-scenario') || l.includes('สถานการณ์')),
      hasTip: s.contentLines.some(l => l.includes('reading-callout tip') || l.includes('สูตรจำ')),
      hasWarning: s.contentLines.some(l => l.includes('reading-callout warning') || l.includes('ข้อควรระวัง'))
    })),
    surmHeadings: surmSections.map(s => ({
      level: s.level,
      title: s.title,
      lines: s.contentLines.length
    }))
  });
}

fs.writeFileSync('tools/deep-domain-audit-summary.json', JSON.stringify(auditOutput, null, 2), 'utf8');
console.log('Successfully generated tools/deep-domain-audit-summary.json');

for (const a of auditOutput) {
  console.log(`\nDomain ${a.domain}: ${a.title} (${a.weight})`);
  console.log(`  Production Reading: ${a.readingStats.lines} lines, ${a.readingStats.subsectionsCount} subsections, ${a.readingStats.tablesCount} tables, ${a.readingStats.diagramsCount} diagrams`);
  console.log(`  Surm Supplementary: ${a.surmStats.lines} lines, ${a.surmStats.sectionsCount} sections`);
}

