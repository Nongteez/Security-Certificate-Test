import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import http from 'node:http';

import { parseMarkdown, parseInline } from '../js/core/markdown-parser.js';
import { getDomainReadingCached, loadDomainReading } from '../js/core/reading-loader.js';

const ROOT = path.resolve('.');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = path.resolve('artifacts/qa/domain-2-rendering-remediation');
fs.mkdirSync(ARTIFACTS_DIR, { recursive: true });

test('ISC2 CC 2026 — Reading Notes Rendering & Content Quality Suite', async (t) => {
  const d1Data = await loadDomainReading(1);
  const d2Data = await loadDomainReading(2);

  await t.test('1. HTML Comments Are Treated As Non-Visible Metadata (Unit Level)', () => {
    // Single-line comment
    const single = parseMarkdown('<!-- This is a comment -->\n\nParagraph text');
    assert.equal(single.includes('&lt;!--'), false, 'Must not escape single-line comment to visible text');
    assert.equal(single.includes('This is a comment'), false, 'Comment text must not be rendered');
    assert.ok(single.includes('<p>Paragraph text</p>'), 'Paragraph after comment must render');

    // Multi-line comment
    const multi = parseMarkdown('<!--\nMulti-line\nComment\n-->\n\nParagraph text');
    assert.equal(multi.includes('&lt;!--'), false, 'Must not escape multi-line comment to visible text');
    assert.equal(multi.includes('Multi-line'), false, 'Multi-line comment text must not be rendered');
    assert.ok(multi.includes('<p>Paragraph text</p>'), 'Paragraph after multi-line comment must render');

    // Separator line comment
    const separator = parseMarkdown('<!-- ======================================================================= -->\n\n## Objective 2.1');
    assert.equal(separator.includes('======='), false, 'Separator symbols must not leak into HTML');
    assert.equal(separator.includes('&lt;!--'), false, 'Separator comment must not be visible');
    assert.ok(separator.includes('<h2>Objective 2.1</h2>'), 'Heading must render normally');

    // Inline comment
    const inline = parseInline('Some text <!-- inline comment --> continued');
    assert.equal(inline.includes('inline comment'), false, 'Inline comment must be removed');
    assert.equal(inline.includes('&lt;!--'), false, 'Inline comment delimiters must not leak');
  });

  await t.test('2. Domain 2 Rendered HTML Zero-Leakage Checks', () => {
    const html = d2Data.renderedHtml;

    // Check for visible or escaped HTML comment delimiters
    assert.equal(html.includes('&lt;!--'), false, 'Rendered HTML must contain 0 escaped comment openers (&lt;!--)');
    assert.equal(html.includes('--&gt;'), false, 'Rendered HTML must contain 0 escaped comment closers (--&gt;)');

    // Check for raw separator strings in paragraph content
    assert.equal(/<p>[=\-–—\s*]{5,}<\/p>/i.test(html), false, 'Rendered HTML must contain 0 leaked separator paragraphs');

    // Check for raw ::: directives
    assert.equal(html.includes(':::'), false, 'Rendered HTML must contain 0 unparsed ::: directives');

    // Check for duplicate Domain H1 in markdown output
    const h1Count = (html.match(/<h1\b[^>]*>/gi) || []).length;
    assert.equal(h1Count, 0, 'Rendered Markdown must contain exactly 0 <h1> elements (shell header provides the single canonical H1)');

    // Check that Objective headings are H2
    const h2Matches = html.match(/<h2\b[^>]*>(.*?)<\/h2>/gi) || [];
    assert.equal(h2Matches.length, 5, 'Must contain exactly 5 H2 headings (4 official objectives + 1 review section)');
    assert.ok(h2Matches[0].includes('Objective 2.1'), 'First H2 must be Objective 2.1');
    assert.ok(h2Matches[1].includes('Objective 2.2'), 'Second H2 must be Objective 2.2');
    assert.ok(h2Matches[2].includes('Objective 2.3'), 'Third H2 must be Objective 2.3');
    assert.ok(h2Matches[3].includes('Objective 2.4'), 'Fourth H2 must be Objective 2.4');
    assert.ok(h2Matches[4].includes('Domain 2 Summary'), 'Fifth H2 must be Domain 2 Review');
  });

  await t.test('3. Domain 1 Parity & Preservation', () => {
    const html1 = d1Data.renderedHtml;

    // Domain 1 must also have 0 H1s in markdown body
    const h1Count1 = (html1.match(/<h1\b[^>]*>/gi) || []).length;
    assert.equal(h1Count1, 0, 'Domain 1 rendered markdown must have 0 H1 elements');

    // Domain 1 must have 0 comment leaks
    assert.equal(html1.includes('&lt;!--'), false, 'Domain 1 must contain 0 escaped comment openers');
    assert.equal(html1.includes('--&gt;'), false, 'Domain 1 must contain 0 escaped comment closers');

    // Both start with .reading-lead
    assert.ok(html1.trim().startsWith('<p class="reading-lead">'), 'Domain 1 must start with .reading-lead');
    assert.ok(d2Data.renderedHtml.trim().startsWith('<p class="reading-lead">'), 'Domain 2 must start with .reading-lead');
  });

  await t.test('4. Academic Integrity & Completeness Preservation', () => {
    assert.equal(d2Data.objectives.length, 4, 'Must have strictly 4 official objectives');
    assert.ok(d2Data.renderedHtml.includes('id="obj-2-1"'), 'obj-2-1 anchor preserved');
    assert.ok(d2Data.renderedHtml.includes('id="obj-2-2"'), 'obj-2-2 anchor preserved');
    assert.ok(d2Data.renderedHtml.includes('id="obj-2-3"'), 'obj-2-3 anchor preserved');
    assert.ok(d2Data.renderedHtml.includes('id="obj-2-4"'), 'obj-2-4 anchor preserved');
    assert.ok(d2Data.renderedHtml.includes('id="domain-2-review"'), 'domain-2-review anchor preserved');

    // Review scenarios and distinction cards
    const scenarios = d2Data.renderedHtml.match(/class="reading-scenario-card"/g) || [];
    assert.equal(scenarios.length, 12, 'Must render all 12 scenario cards');

    const distinctions = d2Data.renderedHtml.match(/class="reading-distinction-card"/g) || [];
    assert.equal(distinctions.length, 12, 'Must render all 12 distinction cards');
  });
});

