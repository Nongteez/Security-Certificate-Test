/**
 * tools/verify-vocabulary-flashcard-font-size.mjs
 * Verification test suite for Flashcard Back Content Font Size refinement.
 */

import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';

const cssPath = 'css/vocabulary.css';

test('1. Desktop font size increased slightly for definition and translation body text only', () => {
  const css = fs.readFileSync(cssPath, 'utf8');

  // Desktop .flashcard-back-def-val
  const defValMatch = css.match(/\.flashcard-back-def-val\s*\{([^}]+)\}/);
  assert.ok(defValMatch, '.flashcard-back-def-val rule exists');
  const defValBody = defValMatch[1];
  assert.ok(defValBody.includes('font-size: 15.5px'), 'Desktop def text increased to 15.5px (from 14px)');
  assert.ok(defValBody.includes('line-height: 1.55'), 'Desktop def text has comfortable line-height');

  // Desktop .flashcard-back-def-th
  const defThMatch = css.match(/\.flashcard-back-def-th\s*\{([^}]+)\}/);
  assert.ok(defThMatch, '.flashcard-back-def-th rule exists');
  const defThBody = defThMatch[1];
  assert.ok(defThBody.includes('font-size: 15px'), 'Desktop Thai translation text increased to 15px (from 13.5px)');
  assert.ok(defThBody.includes('line-height: 1.6'), 'Desktop Thai translation text has comfortable line-height');
});

test('2. Section headings, Thai meaning, and 35px gap are completely unchanged', () => {
  const css = fs.readFileSync(cssPath, 'utf8');

  // Headings .flashcard-section-label unchanged
  const headingMatch = css.match(/\.flashcard-section-label\s*\{([^}]+)\}/);
  assert.ok(headingMatch, '.flashcard-section-label rule exists');
  assert.ok(headingMatch[1].includes('font-size: 11px'), 'Headings remain 11px');

  // Thai meaning .flashcard-back-thai-val unchanged
  const thaiValMatch = css.match(/\.flashcard-back-thai-val\s*\{([^}]+)\}/);
  assert.ok(thaiValMatch, '.flashcard-back-thai-val rule exists');
  assert.ok(thaiValMatch[1].includes('font-size: 18px'), 'Thai meaning remains 18px');

  // 35px gap in .flashcard-back-body preserved
  const bodyMatch = css.match(/\.flashcard-back-body\s*\{([^}]+)\}/);
  assert.ok(bodyMatch, '.flashcard-back-body rule exists');
  assert.ok(bodyMatch[1].includes('gap: 35px;'), 'gap: 35px preserved in flashcard body');
});

test('3. Mobile and tablet layouts preserve original font sizes', () => {
  const css = fs.readFileSync(cssPath, 'utf8');

  const media768Index = css.indexOf('@media (max-width: 768px)');
  assert.ok(media768Index !== -1, '@media (max-width: 768px) exists');
  const media768Block = css.slice(media768Index, css.indexOf('@media (max-width: 480px)', media768Index));

  // Verify responsive reset locks 14px and 13.5px for tablet/mobile
  assert.ok(media768Block.includes('.flashcard-back-def-val'), '.flashcard-back-def-val overridden in @media (max-width: 768px)');
  assert.ok(media768Block.includes('font-size: 14px'), 'Tablet/mobile retains original 14px for def val');
  assert.ok(media768Block.includes('.flashcard-back-def-th'), '.flashcard-back-def-th overridden in @media (max-width: 768px)');
  assert.ok(media768Block.includes('font-size: 13.5px'), 'Tablet/mobile retains original 13.5px for Thai translation');
});
