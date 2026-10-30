import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { diagrams } from '../js/core/diagram-generator.js';
import { parseMarkdown } from '../js/core/markdown-parser.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const readingCss = fs.readFileSync(path.join(rootDir, 'css', 'reading.css'), 'utf8');
const domain1Md = fs.readFileSync(path.join(rootDir, 'content', 'isc2-cc-2026', 'reading', 'domain-1.md'), 'utf8');
const renderedHtml = parseMarkdown(domain1Md);

test('Document Hierarchy Diagram (1.3.4) Remediation Suite', async (t) => {
  await t.test('1. Diagram SVG geometry and viewBox dimensions', () => {
    assert.ok(diagrams.documentHierarchy, 'diagrams.documentHierarchy must exist');
    const svg = diagrams.documentHierarchy;

    // ViewBox must be 0 0 860 260 (ample width to eliminate text clipping)
    assert.match(svg, /viewBox="0 0 860 260"/, 'viewBox must be expanded to 0 0 860 260');

    // All 4 tiers must be present in SVG
    assert.match(svg, /POLICY/, 'Must contain POLICY tier');
    assert.match(svg, /STANDARD/, 'Must contain STANDARD tier');
    assert.match(svg, /PROCEDURE/, 'Must contain PROCEDURE tier');
    assert.match(svg, /GUIDELINE/, 'Must contain GUIDELINE tier');
  });

  await t.test('2. 4-Tier structured card layout and dedicated base tier', () => {
    const svg = diagrams.documentHierarchy;

    // Must have 4 explanation card rectangles
    const cardMatches = svg.match(/class="diag-doc-card"/g);
    assert.equal(cardMatches?.length, 4, 'Must have exactly 4 explanation cards (.diag-doc-card)');

    // Cards must start at x="425" with width="415" (425 + 415 = 840 <= 860 viewBox)
    assert.match(svg, /<rect x="425" y="21" width="415" height="50"/, 'Policy card must be within viewBox');
    assert.match(svg, /<rect x="425" y="77" width="415" height="50"/, 'Standard card must be within viewBox');
    assert.match(svg, /<rect x="425" y="133" width="415" height="50"/, 'Procedure card must be within viewBox');
    assert.match(svg, /<rect x="425" y="189" width="415" height="50"/, 'Guideline card must be within viewBox');

    // Dashed connector lines connecting pyramid tiers to cards
    const connectorMatches = svg.match(/class="diag-axis-line"\s+stroke-dasharray="4,4"/g);
    assert.equal(connectorMatches?.length, 4, 'Must have 4 connector lines linking tiers to cards');

    // Dedicated cards for each tier with appropriate mandatory/advisory tags
    assert.match(svg, /MANDATORY · ระดับสูงสุด/, 'Policy has mandatory top-level tag');
    assert.match(svg, /MANDATORY · ข้อกำหนดขั้นต่ำ/, 'Standard has mandatory minimum specifications tag');
    assert.match(svg, /MANDATORY · บังคับผู้ปฏิบัติ/, 'Procedure has mandatory operator tag');
    assert.match(svg, /ADVISORY · ไม่บังคับ ยืดหยุ่น/, 'Guideline has advisory discretionary tag');

    // Scope questions
    assert.match(svg, /Answers: WHAT &amp; WHY/, 'Policy answers WHAT & WHY');
    assert.match(svg, /Answers: EXACT SPECIFICATION/, 'Standard answers EXACT SPECIFICATION');
    assert.match(svg, /Answers: HOW \(STEP-BY-STEP\)/, 'Procedure answers HOW (STEP-BY-STEP)');
    assert.match(svg, /Answers: RECOMMENDATION/, 'Guideline answers RECOMMENDATION');
  });

  await t.test('3. CSS Diagram Styling and Theme Support', () => {
    assert.match(
      readingCss,
      /\.reading-diagram-card\[data-diagram="documentHierarchy"\]\s+\.reading-diagram-svg\s*\{[^}]*max-width:\s*860px/,
      'CSS must allow documentHierarchy diagram to expand to max-width: 860px'
    );

    assert.match(readingCss, /\.diag-doc-card\s*\{/, 'CSS must define .diag-doc-card');
    assert.match(readingCss, /\[data-theme="light"\]\s+\.diag-doc-card/, 'Light theme card styling exists');
    assert.match(readingCss, /\[data-theme="dark"\]\s+\.diag-doc-card/, 'Dark theme card styling exists');

    assert.match(readingCss, /\.diag-doc-tag-mandatory\s*\{/, 'CSS must define .diag-doc-tag-mandatory');
    assert.match(readingCss, /\.diag-doc-tag-advisory\s*\{/, 'CSS must define .diag-doc-tag-advisory');
    assert.match(readingCss, /\.diag-doc-scope\s*\{/, 'CSS must define .diag-doc-scope');
    assert.match(readingCss, /\.diag-tier-desc\s*\{/, 'CSS must define .diag-tier-desc');
  });
});

test('Document Hierarchy Table (1.3.4) Remediation Suite', async (t) => {
  await t.test('1. Technical term protection (.reading-term-en)', () => {
    // Assert .reading-bilingual-term .reading-term-en has white-space: nowrap and word-break: normal
    assert.match(
      readingCss,
      /\.reading-bilingual-term\s+\.reading-term-en[^}]*white-space:\s*nowrap/s,
      'English term must have white-space: nowrap'
    );
    assert.match(
      readingCss,
      /\.reading-bilingual-term\s+\.reading-term-en[^}]*word-break:\s*normal/s,
      'English term must have word-break: normal'
    );
  });

  await t.test('2. Table Column Min-Width Rules', () => {
    // Column 1 (Document Type): width: 18%, min-width: 145px
    assert.match(
      readingCss,
      /\.reading-diagram-card\[data-diagram="documentHierarchy"\]\s*\+\s*\.reading-table-wrapper\s+\.reading-table\s+th:nth-child\(1\)[^}]*min-width:\s*145px/s,
      'Col 1 (Document Type) must have min-width: 145px'
    );

    // Column 2 (Role & Purpose): width: 35%, min-width: 220px
    assert.match(
      readingCss,
      /\.reading-diagram-card\[data-diagram="documentHierarchy"\]\s*\+\s*\.reading-table-wrapper\s+\.reading-table\s+th:nth-child\(2\)[^}]*min-width:\s*220px/s,
      'Col 2 (Role & Function) must have min-width: 220px'
    );

    // Column 3 (Enforcement): width: 17%, min-width: 140px
    assert.match(
      readingCss,
      /\.reading-diagram-card\[data-diagram="documentHierarchy"\]\s*\+\s*\.reading-table-wrapper\s+\.reading-table\s+th:nth-child\(3\)[^}]*min-width:\s*140px/s,
      'Col 3 (Enforcement) must have min-width: 140px'
    );

    // Column 4 (Example): width: 30%, min-width: 200px
    assert.match(
      readingCss,
      /\.reading-diagram-card\[data-diagram="documentHierarchy"\]\s*\+\s*\.reading-table-wrapper\s+\.reading-table\s+th:nth-child\(4\)[^}]*min-width:\s*200px/s,
      'Col 4 (Example) must have min-width: 200px'
    );
  });

  await t.test('3. HTML Table Content & Bilingual Term Rendering', () => {
    // Ensure rendered HTML contains the document hierarchy table
    assert.ok(renderedHtml.includes('ประเภทเอกสาร'), 'Must contain Document Type column header');
    assert.ok(renderedHtml.includes('ระดับการบังคับ'), 'Must contain Enforcement column header');

    // Col 1 entries
    assert.ok(renderedHtml.includes('Policy'), 'Must contain Policy term');
    assert.ok(renderedHtml.includes('(นโยบาย)'), 'Must contain Policy Thai translation');
    assert.ok(renderedHtml.includes('Standard'), 'Must contain Standard term');
    assert.ok(renderedHtml.includes('(มาตรฐาน)'), 'Must contain Standard Thai translation');
    assert.ok(renderedHtml.includes('Procedure'), 'Must contain Procedure term');
    assert.ok(renderedHtml.includes('(ขั้นตอนปฏิบัติ)'), 'Must contain Procedure Thai translation');
    assert.ok(renderedHtml.includes('Guideline'), 'Must contain Guideline term');
    assert.ok(renderedHtml.includes('(แนวทางปฏิบัติ)'), 'Must contain Guideline Thai translation');

    // Col 3 entries
    assert.ok(renderedHtml.includes('Mandatory'), 'Must contain Mandatory term');
    assert.ok(renderedHtml.includes('(บังคับทุกคน)'), 'Must contain Mandatory Thai translation');
    assert.ok(renderedHtml.includes('Advisory'), 'Must contain Advisory term');
    assert.ok(renderedHtml.includes('(ไม่บังคับ ยืดหยุ่น)'), 'Must contain Advisory Thai translation');
  });
});
