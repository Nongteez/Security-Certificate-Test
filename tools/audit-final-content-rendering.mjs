/**
 * Comprehensive Audit Script for Task C:
 * Final Content Integrity, Markdown Rendering, Semantic Structure & Browser QA
 * Across ISC2 CC 2026 Domains 1–5 Reading Notes.
 */

import fs from 'fs';
import path from 'path';
import { parseMarkdown, parseInline } from '../js/core/markdown-parser.js';
import { diagrams } from '../js/core/diagram-generator.js';
import { parseScenarioBlock } from '../js/core/scenario-component.js';

const DOMAIN_FILES = [
  { id: 'domain-1', num: 1, js: 'domain-1.js', md: 'domain-1.md' },
  { id: 'domain-2', num: 2, js: 'domain-2.js', md: 'domain-2.md' },
  { id: 'domain-3', num: 3, js: 'domain-3.js', md: 'domain-3.md' },
  { id: 'domain-4', num: 4, js: 'domain-4.js', md: 'domain-4.md' },
  { id: 'domain-5', num: 5, js: 'domain-5.js', md: 'domain-5.md' }
];

const OUTPUT_DIR = path.resolve('artifacts/qa/reading-notes-final-content-rendering');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function runAudit() {
  console.log('===============================================================');
  console.log('ISC2 CC 2026 Reading Notes — Task C Final Audit across Domains 1–5');
  console.log('===============================================================\n');

  const fullSubsectionInventory = [];
  const rawMarkdownArtifacts = [];
  const latexArtifacts = [];
  const tableAuditFindings = [];
  const diagramAuditFindings = [];
  const semanticStructureFindings = [];
  const typographyFindings = [];
  const defectRegister = [];

  let totalSectionsAudited = 0;
  let totalTablesAudited = 0;
  let totalDiagramsAudited = 0;
  let totalScenariosAudited = 0;

  for (const dom of DOMAIN_FILES) {
    const jsPath = path.resolve('content/isc2-cc-2026/reading', dom.js);
    const mdPath = path.resolve('content/isc2-cc-2026/reading', dom.md);

    if (!fs.existsSync(mdPath) || !fs.existsSync(jsPath)) {
      console.error(`Missing file for ${dom.id}: js=${fs.existsSync(jsPath)}, md=${fs.existsSync(mdPath)}`);
      continue;
    }

    const jsModule = await import(`../content/isc2-cc-2026/reading/${dom.js}`);
    const rawMarkdown = fs.readFileSync(mdPath, 'utf8');
    const mdLines = rawMarkdown.split('\n');
    const renderedHtml = parseMarkdown(rawMarkdown);

    // Get metadata and objectives from JS module
    const metaKey = Object.keys(jsModule).find(k => k.endsWith('Metadata'));
    const objKey = Object.keys(jsModule).find(k => k.endsWith('Objectives'));
    const revKey = Object.keys(jsModule).find(k => k.toLowerCase().includes('review'));

    const metadata = jsModule[metaKey] || {};
    const objectives = jsModule[objKey] || [];
    const review = jsModule[revKey] || null;

    console.log(`Auditing Domain ${dom.num}: ${metadata.title || dom.id}`);
    console.log(`  Source Lines: ${mdLines.length}, Rendered HTML Size: ${renderedHtml.length} chars`);

    // 1. Build Subsection Inventory for this domain
    const allObjectives = [...objectives];
    if (review) {
      allObjectives.push({
        id: review.id || `domain-${dom.num}-review`,
        title: review.title || 'Review & Exam Preparation',
        topics: review.topics || []
      });
    }

    for (const obj of allObjectives) {
      for (const topic of obj.topics || []) {
        totalSectionsAudited++;
        const topicId = topic.id;
        const topicTitle = topic.title;

        // Locate in Markdown source
        let startLine = -1;
        let endLine = -1;

        for (let l = 0; l < mdLines.length; l++) {
          const line = mdLines[l];
          if (line.includes(`{#${topicId}}`) || line.includes(`id="${topicId}"`)) {
            startLine = l + 1;
            break;
          }
        }

        if (startLine === -1) {
          for (let l = 0; l < mdLines.length; l++) {
            if (mdLines[l].includes(topicTitle)) {
              startLine = l + 1;
              break;
            }
          }
        }

        let subMd = '';
        let tableCount = 0;
        let diagramCount = 0;
        let scenarioCount = 0;
        let mathCount = 0;

        if (startLine > 0) {
          let curr = startLine;
          const subLines = [];
          while (curr < mdLines.length) {
            const lText = mdLines[curr];
            if (curr > startLine && (/^(##\s|###\s)/.test(lText) && (lText.includes('{#') || lText.includes('<section') || lText.includes('id=')))) {
              endLine = curr;
              break;
            }
            if (curr > startLine && lText.startsWith('</section>')) {
              endLine = curr + 1;
              break;
            }
            subLines.push(lText);
            curr++;
          }
          if (endLine === -1) endLine = mdLines.length;
          subMd = subLines.join('\n');

          tableCount = (subMd.match(/\n\|[^\n]+\|(?=\n\|)/g) || []).length;
          diagramCount = (subMd.match(/data-diagram="([^"]+)"/g) || []).length;
          scenarioCount = (subMd.match(/:::scenario/g) || []).length;
          mathCount = (subMd.match(/\$\$|\$[^$]+\$/g) || []).length;
        }

        totalTablesAudited += tableCount;
        totalDiagramsAudited += diagramCount;
        totalScenariosAudited += scenarioCount;

        const renderedHasAnchor = renderedHtml.includes(`id="${topicId}"`);

        fullSubsectionInventory.push({
          domain: dom.num,
          domainId: dom.id,
          objectiveId: obj.id,
          objectiveTitle: obj.title,
          subsectionId: topicId,
          heading: topicTitle,
          sourceStartLine: startLine,
          sourceEndLine: endLine,
          renderedAnchorPresent: renderedHasAnchor,
          tablesPresent: tableCount,
          diagramsPresent: diagramCount,
          scenariosPresent: scenarioCount,
          equationsPresent: mathCount,
          validationStatus: renderedHasAnchor && startLine > 0 ? 'VALIDATED' : 'WARNING'
        });
      }
    }

    // 2. Raw Markdown Artifact Detection
    // Strip <pre>...</pre> and <code>...</code>
    const proseHtml = renderedHtml
      .replace(/<pre[\s\S]*?<\/pre>/gi, '')
      .replace(/<code[\s\S]*?<\/code>/gi, '');

    // Visible text only (strip all HTML tags & attributes)
    const textOnly = proseHtml.replace(/<[^>]+>/g, ' ');

    // 2.1 Bold/Italic asterisks leakage in visible text
    const literalBoldMatches = textOnly.match(/\*\*[^*<>\n]+\*\*/g) || [];
    for (const match of literalBoldMatches) {
      rawMarkdownArtifacts.push({
        domain: dom.num,
        type: 'UNRENDERED_BOLD_ASTERISKS',
        artifact: match,
        severity: 'P1'
      });
    }

    // Double underscore in visible text
    const literalDoubleUnderscore = textOnly.match(/__[a-zA-Z0-9\u0E00-\u0E7F]+__/g) || [];
    for (const match of literalDoubleUnderscore) {
      rawMarkdownArtifacts.push({
        domain: dom.num,
        type: 'UNRENDERED_DOUBLE_UNDERSCORE',
        artifact: match,
        severity: 'P2'
      });
    }

    // 2.2 Unrendered Headings in paragraphs
    const headingLeaks = proseHtml.match(/<p>[^<]*#{1,4}\s+[^<]*<\/p>/g) || [];
    for (const match of headingLeaks) {
      rawMarkdownArtifacts.push({
        domain: dom.num,
        type: 'LITERAL_HEADING_IN_PARAGRAPH',
        artifact: match,
        severity: 'P1'
      });
    }

    // 2.3 Unrendered Code Fences in visible text
    const rawFences = textOnly.match(/```/g) || [];
    if (rawFences.length > 0) {
      rawMarkdownArtifacts.push({
        domain: dom.num,
        type: 'LITERAL_CODE_FENCE',
        count: rawFences.length,
        severity: 'P1'
      });
    }

    // 2.4 Leaked HTML comments in rendered output
    const leakedComments = renderedHtml.match(/<!--[\s\S]*?-->/g) || [];
    for (const comment of leakedComments) {
      rawMarkdownArtifacts.push({
        domain: dom.num,
        type: 'LEAKED_HTML_COMMENT',
        artifact: comment.slice(0, 50),
        severity: 'P1'
      });
    }

    // 2.5 Escaped HTML tags visible in text
    const escapedTagLeaks = textOnly.match(/&lt;(?:section|div|p|h[1-6]|span|strong|em|br|hr|ul|ol|li|table|tr|td|th)\b[^&]*&gt;/gi) || [];
    for (const match of escapedTagLeaks) {
      rawMarkdownArtifacts.push({
        domain: dom.num,
        type: 'ESCAPED_HTML_TAG_LEAK',
        artifact: match,
        severity: 'P1'
      });
    }

    // 3. Mathematical and Technical Notation Audit (Visible text only)
    const latexMatchesInText = textOnly.match(/\\(times|to|rightarrow|mathbf|frac|text|ge|le|neq|approx)\b/g) || [];
    for (const match of latexMatchesInText) {
      latexArtifacts.push({
        domain: dom.num,
        type: 'LITERAL_LATEX_COMMAND_IN_TEXT',
        command: match,
        severity: 'P1'
      });
    }

    // Check for unrendered \( or \) in visible text
    const parenMathMatches = textOnly.match(/\\\(|\\\)/g) || [];
    for (const match of parenMathMatches) {
      latexArtifacts.push({
        domain: dom.num,
        type: 'UNRENDERED_PARENTHETICAL_MATH',
        delimiter: match,
        severity: 'P1'
      });
    }

    // Check raw $$ in visible text
    const rawMathDelimiters = textOnly.match(/\$\$/g) || [];
    for (const match of rawMathDelimiters) {
      latexArtifacts.push({
        domain: dom.num,
        type: 'UNRENDERED_MATH_BLOCK_DELIMITER',
        delimiter: match,
        severity: 'P1'
      });
    }

    // Domain 2 specific rule: Zero prose dollar signs in raw markdown
    if (dom.num === 2) {
      if (rawMarkdown.includes('$')) {
        latexArtifacts.push({
          domain: 2,
          type: 'DOMAIN2_PROSE_DOLLAR_LEAK',
          count: (rawMarkdown.match(/\$/g) || []).length,
          severity: 'P1'
        });
      }
    }

    // 4. Tables and Structured Comparisons Audit
    const tableRegex = /<table\b[^>]*>([\s\S]*?)<\/table>/gi;
    let tMatch;
    let tableIndex = 0;
    while ((tMatch = tableRegex.exec(renderedHtml)) !== null) {
      tableIndex++;
      const tableInner = tMatch[1];
      const headerCells = (tableInner.match(/<th\b[^>]*>([\s\S]*?)<\/th>/gi) || []).length;
      const rows = tableInner.match(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi) || [];
      
      let rowColMismatches = 0;
      let emptyCells = 0;

      rows.forEach((r, rIdx) => {
        const cells = r.match(/<td\b[^>]*>([\s\S]*?)<\/td>/gi) || [];
        if (cells.length > 0) {
          if (cells.length !== headerCells) {
            rowColMismatches++;
          }
          cells.forEach(c => {
            const text = c.replace(/<[^>]*>/g, '').trim();
            if (text.length === 0) emptyCells++;
          });
        }
      });

      tableAuditFindings.push({
        domain: dom.num,
        tableIndex,
        headerColumnCount: headerCells,
        totalRows: rows.length,
        rowColMismatches,
        emptyCells,
        status: rowColMismatches === 0 ? 'PASS' : 'COLUMN_MISMATCH'
      });
    }

    // 5. Diagrams Audit
    const diagMountRegex = /<div\s+class="reading-semantic-diagram"\s+data-diagram="([^"]+)"[^>]*><\/div>/gi;
    let dMatch;
    while ((dMatch = diagMountRegex.exec(rawMarkdown)) !== null) {
      const diagKey = dMatch[1];
      const existsInGen = !!diagrams[diagKey];
      const renderedInHtml = renderedHtml.includes(`data-diagram="${diagKey}"`);

      diagramAuditFindings.push({
        domain: dom.num,
        diagramKey: diagKey,
        definedInGenerator: existsInGen,
        renderedInOutput: renderedInHtml,
        status: existsInGen && renderedInHtml ? 'PASS' : 'MISSING_TEMPLATE'
      });
    }

    // 6. Semantic Grouping & Scenarios Audit
    const scenarioBlocks = rawMarkdown.match(/:::scenario[\s\S]*?:::/g) || [];
    scenarioBlocks.forEach((sc, scIdx) => {
      const lines = sc.split('\n').slice(1, -1);
      const parsed = parseScenarioBlock(lines);

      if (!parsed.situation || !parsed.question || !parsed.answer) {
        semanticStructureFindings.push({
          domain: dom.num,
          scenarioIndex: scIdx + 1,
          parsed,
          status: 'MALFORMED_SCENARIO'
        });
      }
    });

    // 7. Typography & Editorial Check
    // Check for broken acronym expansions like '()' or empty headers
    const emptyHeaders = renderedHtml.match(/<h[1-6][^>]*>\s*<\/h[1-6]>/gi) || [];
    if (emptyHeaders.length > 0) {
      typographyFindings.push({
        domain: dom.num,
        type: 'EMPTY_HEADER',
        count: emptyHeaders.length
      });
    }
  }

  console.log('\n--- AUDIT SUMMARY METRICS ---');
  console.log(`Total Subsections Audited: ${fullSubsectionInventory.length} / 128`);
  console.log(`Raw Markdown Artifacts Found: ${rawMarkdownArtifacts.length}`);
  console.log(`LaTeX / Math Artifacts in Visible Text: ${latexArtifacts.length}`);
  console.log(`Tables Audited: ${tableAuditFindings.length}`);
  console.log(`Diagrams Audited: ${diagramAuditFindings.length}`);
  console.log(`Scenario Structure Issues: ${semanticStructureFindings.length}`);
  console.log(`Typography Issues: ${typographyFindings.length}`);

  let defectIdCounter = 1;
  const registerDefect = (domain, severity, observed, rootCause, proposedFix) => {
    const id = `DEFECT-C-${String(defectIdCounter++).padStart(3, '0')}`;
    defectRegister.push({
      id,
      domain,
      severity,
      observed,
      rootCause,
      proposedFix,
      status: 'OPEN'
    });
  };

  rawMarkdownArtifacts.forEach(art => {
    registerDefect(art.domain, art.severity, `Raw markdown artifact: ${art.type} (${art.artifact || art.count})`, 'Markdown syntax not fully parsed or malformed in source', 'Correct source syntax or parser regex');
  });

  latexArtifacts.forEach(art => {
    registerDefect(art.domain, art.severity, `Unrendered LaTeX artifact in text: ${art.type} (${art.command || art.delimiter})`, 'LaTeX notation escaped or unparsed in visible text', 'Convert to Unicode / HTML entities or proper KaTeX delimiters');
  });

  tableAuditFindings.filter(t => t.status !== 'PASS').forEach(t => {
    registerDefect(t.domain, 'P1', `Table ${t.tableIndex} column mismatch (${t.rowColMismatches} rows)`, 'Mismatched pipe count in markdown table row', 'Align pipe count with header');
  });

  diagramAuditFindings.filter(d => d.status !== 'PASS').forEach(d => {
    registerDefect(d.domain, 'P0', `Diagram template missing for key: ${d.diagramKey}`, 'Diagram referenced in markdown but missing in diagram-generator.js', 'Define diagram template or remove reference');
  });

  semanticStructureFindings.forEach(s => {
    registerDefect(s.domain, 'P1', `Malformed scenario block index ${s.scenarioIndex}`, 'Missing mandatory fields in :::scenario directive', 'Repair scenario fields');
  });

  // Save audit evidence artifacts
  fs.writeFileSync(path.join(OUTPUT_DIR, 'subsection-inventory.json'), JSON.stringify(fullSubsectionInventory, null, 2), 'utf8');
  fs.writeFileSync(path.join(OUTPUT_DIR, 'raw-markdown-artifacts.json'), JSON.stringify(rawMarkdownArtifacts, null, 2), 'utf8');
  fs.writeFileSync(path.join(OUTPUT_DIR, 'latex-artifacts.json'), JSON.stringify(latexArtifacts, null, 2), 'utf8');
  fs.writeFileSync(path.join(OUTPUT_DIR, 'table-audit-results.json'), JSON.stringify(tableAuditFindings, null, 2), 'utf8');
  fs.writeFileSync(path.join(OUTPUT_DIR, 'diagram-audit-results.json'), JSON.stringify(diagramAuditFindings, null, 2), 'utf8');
  fs.writeFileSync(path.join(OUTPUT_DIR, 'defect-register.json'), JSON.stringify(defectRegister, null, 2), 'utf8');

  console.log(`\nArtifacts written to: ${OUTPUT_DIR}`);
  console.log(`Defect Register: ${defectRegister.length} active defects.`);
}

runAudit().catch(err => {
  console.error('Audit failed with error:', err);
  process.exit(1);
});
