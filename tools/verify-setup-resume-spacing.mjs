import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';

const componentsCss = fs.readFileSync(new URL('../css/components.css', import.meta.url), 'utf8');
const screenStartJs = fs.readFileSync(new URL('../js/ui/screen-start.js', import.meta.url), 'utf8');
const screenHomeJs = fs.readFileSync(new URL('../js/ui/screen-home.js', import.meta.url), 'utf8');

test('Exam Setup Page: .start-panel-card contains .start-header-hero and conditionally .resume-session-card', () => {
  // Ensure the DOM structure in screen-start.js matches expectations
  assert.ok(screenStartJs.includes('class="start-panel-card"'), 'start-panel-card must exist in screen-start.js');
  assert.ok(screenStartJs.includes('class="start-header-hero"'), 'start-header-hero must exist in screen-start.js');
  assert.ok(screenStartJs.includes('class="resume-session-card" id="resume-session-banner"'), 'resume-session-card must exist in screen-start.js');
  assert.ok(screenStartJs.includes('class="start-form-divider"'), 'start-form-divider must exist in screen-start.js');
});

test('Desktop Vertical Spacing: .start-panel-card .resume-session-card specifies 20px margin-top (within 16-24px)', () => {
  const match = componentsCss.match(/\.start-panel-card\s+\.resume-session-card\s*\{[^}]*margin-top:\s*(\d+)px;/);
  assert.ok(match, '.start-panel-card .resume-session-card with margin-top must exist in components.css');
  const marginTop = parseInt(match[1], 10);
  assert.ok(marginTop >= 16 && marginTop <= 24, `Desktop margin-top (${marginTop}px) must be between 16px and 24px`);
  assert.equal(marginTop, 20, 'Desktop margin-top should match the 20px vertical rhythm');
});

test('Mobile Responsive Spacing: @media (max-width: 600px) specifies 16px margin-top (within 16-24px)', () => {
  const lastMediaQuery = componentsCss.slice(componentsCss.lastIndexOf('@media (max-width: 600px)'));
  const match = lastMediaQuery.match(/\.start-panel-card\s+\.resume-session-card\s*\{[^}]*margin-top:\s*(\d+)px;/);
  assert.ok(match, 'mobile .start-panel-card .resume-session-card with margin-top must exist in @media (max-width: 600px)');
  const mobileMarginTop = parseInt(match[1], 10);
  assert.ok(mobileMarginTop >= 16 && mobileMarginTop <= 24, `Mobile margin-top (${mobileMarginTop}px) must be between 16px and 24px`);
  assert.equal(mobileMarginTop, 16, 'Mobile margin-top should be 16px for compact mobile viewports');
});

test('Margin Collapsing & Invariant: Consistent layout when Resume Quiz card is absent', () => {
  // Check header-hero margin-bottom
  const headerMatch = componentsCss.match(/\.start-header-hero\s*\{[^}]*margin-bottom:\s*(\d+)px;/);
  assert.ok(headerMatch, '.start-header-hero must have margin-bottom defined');
  const headerMarginBottom = parseInt(headerMatch[1], 10);
  assert.equal(headerMarginBottom, 2, '.start-header-hero margin-bottom is 2px');

  // Check start-form-divider margin
  const dividerMatch = componentsCss.match(/\.start-form-divider\s*\{[^}]*margin:\s*(\d+)px\s+0\s+(\d+)px;/);
  assert.ok(dividerMatch, '.start-form-divider margin must be defined');
  const dividerMarginTop = parseInt(dividerMatch[1], 10);
  assert.equal(dividerMarginTop, 16, '.start-form-divider margin-top is 16px');

  // When resume card is absent: max(2, 16) = 16px
  const absentSpacing = Math.max(headerMarginBottom, dividerMarginTop);
  assert.equal(absentSpacing, 16, 'Spacing to divider when resume card is absent must be exactly 16px');

  // When resume card is present: max(2, 20) = 20px on desktop, max(2, 16) = 16px on mobile
  const presentDesktopSpacing = Math.max(headerMarginBottom, 20);
  const presentMobileSpacing = Math.max(headerMarginBottom, 16);
  assert.equal(presentDesktopSpacing, 20, 'Desktop spacing between header and resume card is exactly 20px');
  assert.equal(presentMobileSpacing, 16, 'Mobile spacing between header and resume card is exactly 16px');
});

test('Badges & Internal Card Invariants: Spacing between badges and card internals untouched', () => {
  // Badges gap
  const badgesMatch = componentsCss.match(/\.start-meta-badges\s*\{[^}]*gap:\s*(\d+)px;/);
  assert.ok(badgesMatch, '.start-meta-badges must have gap defined');
  assert.equal(parseInt(badgesMatch[1], 10), 8, 'Badges gap must remain 8px');

  // Card padding untouched
  const cardPaddingMatch = componentsCss.match(/\.resume-session-card\s*\{[^}]*padding:\s*20px\s+22px;/);
  assert.ok(cardPaddingMatch, '.resume-session-card padding must remain 20px 22px');

  // Card border-radius untouched
  assert.ok(componentsCss.includes('border-radius: var(--radius);'), 'Card border-radius must remain var(--radius)');
});

test('Isolation Invariant: Home screen Resume card is unaffected', () => {
  // In screen-home.js, resume card is inside .resume-section, NOT .start-panel-card
  assert.ok(screenHomeJs.includes('<section class="cert-section resume-section">'), 'Home screen wraps card in .resume-section');
  assert.ok(!screenHomeJs.includes('start-panel-card'), 'Home screen must not use start-panel-card');
  
  // Generic .resume-session-card has NO margin-top defined (only .start-panel-card .resume-session-card does)
  const genericCardCss = componentsCss.match(/\.resume-session-card\s*\{([^}]+)\}/)[1];
  assert.ok(!genericCardCss.includes('margin-top'), 'Generic .resume-session-card must not have margin-top');
});
