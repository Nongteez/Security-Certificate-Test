import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import { renderExamVersionsScreen } from '../js/ui/screen-versions.js';
import certifications from '../data/certifications.js';
import information from '../data/exam-version-info.js';
import { state } from '../js/core/state.js';

const versionsCss = fs.readFileSync(new URL('../css/versions.css', import.meta.url), 'utf8');
const componentsCss = fs.readFileSync(new URL('../css/components.css', import.meta.url), 'utf8');
const screenStartJs = fs.readFileSync(new URL('../js/ui/screen-start.js', import.meta.url), 'utf8');
const screenQuizJs = fs.readFileSync(new URL('../js/ui/screen-quiz.js', import.meta.url), 'utf8');

test('Desktop responsive modal sizing: 880px max-width, full-width fluid up to max, and centered', () => {
  assert.match(versionsCss, /\.exam-versions-screen\s+\.version-info-dialog\s*\{[^}]*max-width:\s*880px;/);
  assert.match(versionsCss, /\.exam-versions-screen\s+\.version-info-dialog\s*\{[^}]*width:\s*100%;/);
  
  // Backdrop flex centering & margin: auto on content from components.css
  assert.match(componentsCss, /\.setup-modal-backdrop[^{]*\{[^}]*display:\s*flex;[^}]*align-items:\s*center;[^}]*justify-content:\s*center;/);
  assert.match(componentsCss, /\.setup-modal-content\s*\{[^}]*margin:\s*auto;/);
});

test('Tablet responsive sizing: exactly 90vw width and max-width in 768-1023px media query', () => {
  const tabletMatch = versionsCss.match(/@media\s*\(\s*min-width:\s*768px\s*\)\s*and\s*\(\s*max-width:\s*1023px\s*\)\s*\{([^}]+)\}/);
  assert.ok(tabletMatch, 'Tablet media query @media (min-width: 768px) and (max-width: 1023px) must exist');
  assert.match(tabletMatch[1], /width:\s*90vw;/);
  assert.match(tabletMatch[1], /max-width:\s*90vw;/);
});

test('Mobile responsive constraints: safe 16px margins, contained table scrolling, 520px min-width table', () => {
  assert.match(versionsCss, /\.exam-versions-screen\s+\.version-info-backdrop\s*\{[^}]*padding:\s*16px;/);
  assert.match(versionsCss, /\.exam-versions-screen\s+\.version-info-backdrop\s*\{[^}]*overflow:\s*hidden;/);
  
  assert.match(versionsCss, /\.exam-versions-screen\s+\.version-info-table-scroll\s*\{[^}]*max-width:\s*100%;/);
  assert.match(versionsCss, /\.exam-versions-screen\s+\.version-info-table-scroll\s*\{[^}]*overflow-x:\s*auto;/);
  assert.match(versionsCss, /\.exam-versions-screen\s+\.version-info-table-scroll\s*\{[^}]*overscroll-behavior-x:\s*contain;/);
  
  assert.match(versionsCss, /\.exam-versions-screen\s+\.version-info-table\s*\{[^}]*min-width:\s*520px;/);
  assert.match(versionsCss, /\.exam-versions-screen\s+\.version-info-dialog\s*\{[^}]*overflow:\s*hidden;/);
});

test('Modal height and internal scroll: 90vh/90dvh bounds, fixed header/close, scrollable body', () => {
  assert.match(versionsCss, /max-height:\s*min\(90vh,\s*calc\(100vh - 32px\)\);/);
  assert.match(versionsCss, /max-height:\s*min\(90dvh,\s*calc\(100dvh - 32px\)\);/);
  
  assert.match(versionsCss, /\.exam-versions-screen\s+\.version-info-dialog\s*\{[^}]*display:\s*flex;[^}]*flex-direction:\s*column;/);
  
  const headerCloseMatch = versionsCss.match(/\.version-info-dialog\s*>\s*\.modal-title,\s*\.exam-versions-screen\s+\.version-info-dialog\s*>\s*\.modal-close-btn\s*\{([^}]+)\}/);
  assert.ok(headerCloseMatch, 'Header and Close button flex-shrink rules must exist');
  assert.match(headerCloseMatch[1], /flex-shrink:\s*0;/);
  
  assert.match(versionsCss, /\.exam-versions-screen\s+\.version-info-dialog\s*>\s*#version-info-content\s*\{[^}]*overflow-y:\s*auto;/);
  assert.match(versionsCss, /\.exam-versions-screen\s+\.version-info-dialog\s*>\s*#version-info-content\s*\{[^}]*flex:\s*1\s+1\s+auto;/);
  assert.match(versionsCss, /\.exam-versions-screen\s+\.version-info-dialog\s*>\s*#version-info-content\s*\{[^}]*min-height:\s*0;/);
});

test('Table typography and wrapping: natural word wrap, compact first column, compact tabular numbers', () => {
  assert.match(versionsCss, /\.exam-versions-screen\s+\.version-info-table\s+th,\s*\.exam-versions-screen\s+\.version-info-table\s+td\s*\{[^}]*overflow-wrap:\s*normal;/);
  assert.match(versionsCss, /\.exam-versions-screen\s+\.version-info-table\s+th,\s*\.exam-versions-screen\s+\.version-info-table\s+td\s*\{[^}]*word-break:\s*normal;/);
  assert.match(versionsCss, /\.exam-versions-screen\s+\.version-info-table\s+th,\s*\.exam-versions-screen\s+\.version-info-table\s+td\s*\{[^}]*padding:\s*10px\s+12px;/);
  
  assert.match(versionsCss, /\.exam-versions-screen\s+\.version-info-table\s+th:first-child\s*\{[^}]*width:\s*1%;[^}]*white-space:\s*nowrap;/);
  assert.match(versionsCss, /\.exam-versions-screen\s+\.version-info-table\s+\.version-info-number\s*\{[^}]*font-variant-numeric:\s*tabular-nums;/);
  assert.match(versionsCss, /\.exam-versions-screen\s+\.version-info-table\s+\.version-info-number\s*\{[^}]*white-space:\s*nowrap;/);
});

test('Theme compatibility: only uses design system tokens, thin scrollbars in light/dark', () => {
  // Ensure no hardcoded color values in dialog rules
  const dialogRules = versionsCss.slice(versionsCss.indexOf('.exam-versions-screen .version-info-dialog'));
  const hardcodedColors = dialogRules.match(/#([0-9a-fA-F]{3,8})\b|rgb\([^)]+\)|rgba\([^)]+\)/g);
  assert.equal(hardcodedColors, null, 'No hardcoded colors allowed; must use var(--token)');
  
  assert.match(versionsCss, /scrollbar-width:\s*thin;/);
  assert.match(versionsCss, /scrollbar-color:\s*var\(--line-hover\)\s+var\(--panel\);/);
});

test('Shared confirmation dialogs remain strictly protected and unaffected', () => {
  // Confirmation dialogs in screen-start.js and screen-quiz.js must use .setup-modal-content without .exam-versions-screen
  assert.match(screenStartJs, /class="setup-modal-content"/);
  assert.doesNotMatch(screenStartJs, /class="[^"]*version-info-dialog/);
  
  assert.match(screenQuizJs, /class="setup-modal-content"/);
  assert.doesNotMatch(screenQuizJs, /class="[^"]*version-info-dialog/);
  
  // components.css retains unchanged max-width 440px for default and min(100%, 360px) for mobile
  assert.match(componentsCss, /\.setup-modal-content\s*\{[^}]*max-width:\s*440px;/);
  assert.match(componentsCss, /\.setup-modal-content\s*\{[^}]*max-width:\s*min\(100%,\s*360px\);/);
});

test('All three dialogs (Pre-2026, 2026 Outline, Vocabulary) use the shared responsive structure and reset scroll to top', () => {
  const element = (attrs = {}) => ({
    innerHTML: '', textContent: '', hidden: true, inert: false, handlers: {}, focusCount: 0, scrollTop: 999,
    getAttribute: k => attrs[k], addEventListener(t, h) { this.handlers[t] = h; }, focus() { this.focusCount++; }
  });

  for (const versionId of ['2026', 'next-bank', 'isc2-cc-vocabulary']) {
    state.setup.language = 'en';
    const icon = element({ 'data-info-version-id': versionId });
    const overlay = element();
    const title = element();
    const content = element();
    const close = element();
    const bg = element();
    const selectors = {
      '#version-info-modal': overlay,
      '#version-info-title': title,
      '#version-info-content': content,
      '#btn-version-info-close': close,
      '#version-selection-content': bg
    };
    const root = {
      innerHTML: '',
      querySelector: k => selectors[k] || null,
      querySelectorAll: k => k === '.btn-version-info' ? [icon] : []
    };

    renderExamVersionsScreen(root, certifications[0], () => assert.fail(), () => {});
    
    // Simulate opening the modal after scroll was dirty
    content.scrollTop = 350;
    icon.handlers.click({ stopPropagation() {} });
    
    assert.equal(overlay.hidden, false, `${versionId} overlay should open`);
    assert.equal(content.scrollTop, 0, `${versionId} content.scrollTop must reset to 0 upon opening`);
    assert.ok(content.innerHTML.length > 50, `${versionId} should render content`);
    assert.match(root.innerHTML, /class="setup-modal-content version-info-dialog"/);
  }
});
