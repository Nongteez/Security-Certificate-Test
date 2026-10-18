import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import crypto from 'node:crypto';
import info, { informationLabels } from '../data/exam-version-info.js';
import { state } from '../js/core/state.js';
import certifications from '../data/certifications.js';
import { renderExamVersionsScreen } from '../js/ui/screen-versions.js';

function dialog(id, language = 'en') {
  state.setup.language = language;
  const content = { innerHTML: '' };
  const icon = { getAttribute: () => id, addEventListener(type, handler) { this[type] = handler; }, focus() {} };
  const other = { hidden: true, innerHTML: '', addEventListener() {}, focus() {} };
  const root = { innerHTML: '', querySelector: key => key === '#version-info-content' ? content : other,
    querySelectorAll: key => key === '.btn-version-info' ? [icon] : [] };
  renderExamVersionsScreen(root, certifications[0], () => assert.fail('Information selected version'), () => {});
  icon.click({ stopPropagation() {} });
  return content.innerHTML;
}
function plain(html) {
  return html.replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
}

test('old bank has four ordered sections and a count table with unchanged total', () => {
  const html = dialog('2026');
  const headings = ['Version Overview', 'Question Bank Summary', 'Domain Question Counts', 'Version Notes'];
  let position = -1;
  for (const heading of headings) {
    const next = html.indexOf(heading);
    assert.ok(next > position, heading);
    position = next;
  }
  assert.match(html, /<table/);
  assert.match(html, /<caption/);
  assert.match(html, /scope="col"/);
  assert.match(html, /<tfoot>/);
  for (const count of [142, 65, 93, 156, 127, 583]) assert.match(html, new RegExp(`>${count}<`));
  assert.match(plain(html), /not official ISC2 exam domain weights/);
  assert.match(plain(html), /before the September 1, 2026 update/);
});

test('updated outline has six ordered sections, exact rounded weights and explicit unimported bank', () => {
  const html = dialog('next-bank');
  let position = -1;
  for (const heading of ['Version Overview', 'Domain Overview and Weights', 'Detailed Learning Objectives', 'AI Security Across Domains', 'Official Exam Information', 'Source and Disclaimer']) {
    const next = html.indexOf(heading);
    assert.ok(next > position, heading);
    position = next;
  }
  assert.deepEqual(info['next-bank'].domains.map(d => d.weight), ['24%', '17.3%', '20%', '21.3%', '17.3%']);
  assert.equal(info['next-bank'].domains.reduce((sum, d) => sum + Math.round(parseFloat(d.weight) * 10), 0), 999);
  assert.match(plain(html), /Total \(officially stated\) 100%/);
  assert.match(plain(html), /99\.9%/);
  assert.match(plain(html), /has not yet been imported/);
  assert.match(plain(html), /Question Bank Status: Coming Soon/);
  assert.doesNotMatch(plain(html), /\d+ practice questions|\d+ questions/);
});

test('all user-supplied objective names and subtopics render, with no invented Domain 4 numbering', () => {
  const expected = JSON.parse(fs.readFileSync(new URL('./fixtures/exam-dialog-objectives.json', import.meta.url), 'utf8').replace(/^\uFEFF/, ''));
  const text = plain(dialog('next-bank'));
  for (const phrase of expected.learningObjectivePhrases) assert.ok(text.includes(phrase), `Missing supplied topic: ${phrase}`);
  assert.match(text, /Confirmed Topic Coverage/);
  assert.match(text, /Complete official Objective 4\.x numbering has not been verified/);
  assert.doesNotMatch(text, /\b4\.\d/);
});

test('AI table and exam facts stay distinct from practice simulation and make no topic guarantee', () => {
  const html = dialog('next-bank');
  const text = plain(html);
  for (const phrase of ['Model Poisoning', 'Model Drift', 'AI-related GRC and KRI', 'Service Accounts', 'MFA', 'Behavioral Analysis', 'AI-powered Firewalls/IDS', 'AI-assisted SIEM', 'Alert Fatigue', 'Data Leakage', 'AI Security Testing', 'not a separate sixth domain', 'do not guarantee that every topic', 'Computerized Adaptive Testing (CAT)', '2 hours', '100–125', 'Multiple Choice and Advanced Item Types', '700 / 1,000', 'English, Chinese, Japanese, German, Spanish', 'Pearson Testing Center', 'does not reproduce official CAT behavior']) {
    assert.ok(text.includes(phrase), phrase);
  }
  assert.ok((html.match(/<table/g) || []).length >= 3);
});

test('all information metadata is translated and full content renders in each language without duplicate numeric cells', () => {
  function inspect(value, path = '') {
    if (!value || typeof value !== 'object') return;
    if ('en' in value || 'th' in value) {
      assert.equal(typeof value.en, 'string', `${path}.en`);
      assert.equal(typeof value.th, 'string', `${path}.th`);
      assert.ok(value.en.trim() && value.th.trim(), path);
    }
    for (const [key, child] of Object.entries(value)) inspect(child, `${path}.${key}`);
  }
  inspect(info);
  inspect(informationLabels);
  for (const id of ['2026', 'next-bank']) {
    for (const lang of ['en', 'th', 'both']) {
      const html = dialog(id, lang);
      assert.match(html, /<table/);
      if (lang !== 'th') assert.match(html, /lang="en"/);
      if (lang !== 'en') assert.match(html, /lang="th"/);
      if (lang === 'th') assert.doesNotMatch(html, /lang="en"/);
      if (lang === 'en') assert.doesNotMatch(html, /lang="th"/);
    }
  }
  const bilingual = dialog('2026', 'both');
  assert.equal((bilingual.match(/>142</g) || []).length, 1);
  assert.equal((bilingual.match(/>583</g) || []).length, 2); // Summary + table total, each once.
});

test('registry, bank data, core, other screens and unrelated CSS retain their pre-edit hashes', () => {
  const baseline = JSON.parse(fs.readFileSync(new URL('../docs/verification/exam-dialog-complete-before.json', import.meta.url), 'utf8').replace(/^\uFEFF/, ''));
  for (const [path, hash] of Object.entries(baseline.files)) {
    // The vocabulary task intentionally extends this registry. Its test compares both original entries in full.
    if (path === 'data/exam-versions.js') continue;
    assert.equal(crypto.createHash('sha256').update(fs.readFileSync(new URL('../' + path, import.meta.url))).digest('hex').toUpperCase(), hash, path);
  }
});
