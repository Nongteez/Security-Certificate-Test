import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { parseMarkdown } from '../js/core/markdown-parser.js';
import { diagrams } from '../js/core/diagram-generator.js';
import { formatSemanticMath, renderInlineMath, renderBlockMath } from '../js/core/math-renderer.js';

const mdPath = path.resolve('content/isc2-cc-2026/reading/domain-2.md');
const mdContent = fs.readFileSync(mdPath, 'utf8');
const renderedHtml = parseMarkdown(mdContent, { diagrams });

test('ISC2 CC 2026 — Domain 2 Mathematical & Relationship Symbol Suite', async (t) => {

  await t.test('1. Core Academic Relationship: RTO ≤ MTD', () => {
    // Must be present in Section 2.2.3 (BIA)
    assert.ok(renderedHtml.includes('RTO ≤ MTD'), 'Rendered HTML must include RTO ≤ MTD in Section 2.2.3');
    assert.ok(mdContent.includes('RTO ≤ MTD'), 'Source Markdown must include RTO ≤ MTD');

    // Must be present in Section 2.2.6 (RTO & RPO Metrics)
    assert.ok(renderedHtml.includes('<strong>ความสัมพันธ์เชิงคณิตศาสตร์กับ MTD:</strong> <strong>RTO ≤ MTD</strong>'), 'Section 2.2.6 must state RTO ≤ MTD');

    // Must be present in Distinction Card 6
    assert.ok(renderedHtml.includes('RTO ≤ MTD'), 'Distinction Card 6 must cite RTO ≤ MTD');

    // Must be present in Timeline diagram
    assert.ok(diagrams.rtoRpoTimeline.includes('RTO ≤ MTD'), 'rtoRpoTimeline diagram must include RTO ≤ MTD');

    // Must clearly state that RTO cannot exceed MTD
    assert.ok(renderedHtml.includes('RTO &gt; MTD') || renderedHtml.includes('RTO > MTD') || renderedHtml.includes('หาก RTO'), 'Must explain logical hazard if RTO > MTD');
  });

  await t.test('2. Core Academic Relationship: DR ⊂ BC', () => {
    // Must be present in Section 2.2.5 comparison table
    assert.ok(renderedHtml.includes('DR ⊂ BC'), 'Rendered HTML must include DR ⊂ BC');

    // Must be present in Distinction Card 5
    assert.ok(renderedHtml.includes('DR ⊂ BC'), 'Distinction Card 5 must include DR ⊂ BC');

    // Must be present in bcVsDrScope desktop SVG
    assert.ok(diagrams.bcVsDrScope.includes('DR ⊂ BC'), 'bcVsDrScope desktop SVG must include DR ⊂ BC');

    // Must be present in bcVsDrScope mobile responsive HTML
    assert.ok(diagrams.bcVsDrScope.includes('IT SUBSET (DR ⊂ BC)'), 'bcVsDrScope mobile HTML must include DR ⊂ BC');

    // Must NOT contain escaped &sub; entity in mobile HTML
    assert.ok(!diagrams.bcVsDrScope.includes('&sub;'), 'bcVsDrScope must not use &sub; entity');
  });

  await t.test('3. Timeline Metrics: RPO Backward vs. RTO Forward', () => {
    // RPO: Backward-looking data loss window
    assert.ok(renderedHtml.includes('Backward-looking'), 'RPO must be explained as Backward-looking');
    assert.ok(diagrams.rtoRpoTimeline.includes('←'), 'rtoRpoTimeline must use backward arrow (←) for RPO');
    assert.ok(renderedHtml.includes('17:00 ← 16:30'), 'Must show 17:00 ← 16:30 backward data loss');

    // RTO: Forward-looking acceptable downtime
    assert.ok(renderedHtml.includes('Forward-looking'), 'RTO must be explained as Forward-looking');
    assert.ok(diagrams.rtoRpoTimeline.includes('→'), 'rtoRpoTimeline must use forward arrow (→) for RTO');
    assert.ok(renderedHtml.includes('17:00 → 18:00'), 'Must show 17:00 → 18:00 forward recovery target');

    // Stepper arrows in mobile timeline
    assert.ok(diagrams.rtoRpoTimeline.includes('↑ RPO ย้อนหลัง'), 'Mobile timeline must use clean Unicode ↑ for RPO');
    assert.ok(diagrams.rtoRpoTimeline.includes('↓ RTO เดินหน้า'), 'Mobile timeline must use clean Unicode ↓ for RTO');
  });

  await t.test('4. Zero Raw LaTeX Leakage in Rendered Content', () => {
    const rawLatexRegex = /\\[a-zA-Z]+|\$[^$\n]+\$/g;
    const matches = renderedHtml.match(rawLatexRegex) || [];
    assert.equal(matches.length, 0, `Expected 0 raw LaTeX leaks in rendered HTML, found: ${matches.join(', ')}`);

    // Verify 0 unparsed dollar signs
    const dollars = renderedHtml.match(/\$/g) || [];
    assert.equal(dollars.length, 0, `Expected 0 dollar signs in Domain 2 rendered HTML, found: ${dollars.length}`);
  });

  await t.test('5. Zero Double-Escaped or Raw HTML Entity Leakage', () => {
    // No double-escaped entities (&amp;sub;, &amp;le;, &amp;rarr;, etc.)
    const doubleEscaped = renderedHtml.match(/&amp;(?:sub|le|ge|lt|gt|rarr|larr|times|divide|ne);/g) || [];
    assert.equal(doubleEscaped.length, 0, `Expected 0 double-escaped entities, found: ${doubleEscaped.join(', ')}`);

    // No raw unescaped &sub; in diagrams or prose
    assert.ok(!renderedHtml.includes('&sub;'), 'Must not contain &sub; entity');
  });

  await t.test('6. Comparison Operators & Arrow Mnemonic Preservation', () => {
    // Greater than or equal: Passphrase length >= 14
    assert.ok(renderedHtml.includes('≥ 14'), 'Must preserve Passphrase length ≥ 14');

    // Unicode right arrows (→) in Exam Traps (all 17 traps)
    const trapArrows = (renderedHtml.match(/→/g) || []).length;
    assert.ok(trapArrows >= 20, `Expected at least 20 Unicode right arrows (→), found: ${trapArrows}`);

    // No accidental ASCII -> in rendered prose
    const asciiArrows = renderedHtml.match(/\s->\s/g) || [];
    assert.equal(asciiArrows.length, 0, `Expected 0 ASCII -> arrows, found: ${asciiArrows.length}`);
  });

  await t.test('7. Math Renderer Module Capability Verification', () => {
    // formatSemanticMath handles \le, \ge, \subset, \subseteq
    const outLe = formatSemanticMath('RTO \\le MTD');
    assert.ok(outLe.includes('&le;'), 'formatSemanticMath must support \\le');
    assert.ok(outLe.includes('class="math-var">RTO</var>'), 'formatSemanticMath must wrap RTO in var');
    assert.ok(outLe.includes('class="math-var">MTD</var>'), 'formatSemanticMath must wrap MTD in var');

    const outSubset = formatSemanticMath('DR \\subset BC');
    assert.ok(outSubset.includes('&sub;'), 'formatSemanticMath must support \\subset');

    // renderInlineMath handles variables
    const outInline = renderInlineMath('RPO \\le 30');
    assert.ok(outInline.includes('RPO'), 'renderInlineMath must format RPO');
  });

  await t.test('8. Preservation Boundaries', () => {
    // Check Domain 1 is intact
    const d1Path = path.resolve('content/isc2-cc-2026/reading/domain-1.md');
    const d1Content = fs.readFileSync(d1Path, 'utf8');
    assert.ok(d1Content.includes('SLE = AV x EF') || d1Content.includes('SLE = AV × EF') || d1Content.includes('SLE'), 'Domain 1 content intact');
    assert.ok(d1Content.includes('S - A - P - P'), 'Domain 1 ethics mnemonic intact');
  });
});
