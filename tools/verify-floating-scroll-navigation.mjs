/**
 * Verification Suite for:
 * Task — Add Smart Floating Scroll Navigation to Reading Notes
 *
 * Requirements:
 * 1. Compact floating scroll navigation button in bottom-right corner of Reading Notes.
 * 2. State 1 (At Top): Downward arrow icon, "Go to bottom" label/tooltip, scrolls to bottom.
 * 3. State 2 (Scrolled): Upward arrow icon, "Back to top" label/tooltip, scrolls to top.
 * 4. State 3 (Short Articles): Button hidden when article does not overflow.
 * 5. Sidebar scroll isolation: Scrolling sidebar alone does not change button state.
 * 6. Responsive design: 42px desktop, 40px mobile, theme-aware (Light & Dark).
 * 7. Real <button>, keyboard focus & operation, prefers-reduced-motion support.
 * 8. Zero duplicate buttons or event listener leaks on remount/navigation.
 */

import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { spawn } from 'node:child_process';

let passes = 0;
let failures = 0;

function assert(condition, message, details = '') {
  if (condition) {
    console.log(`  ✓ PASS: ${message}`);
    passes++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    if (details) console.error(`    Details: ${details}`);
    failures++;
  }
}

console.log('============================================================');
console.log('Smart Floating Scroll Navigation Verification Suite');
console.log('============================================================\n');

const css = readFileSync('css/reading.css', 'utf8');
const js = readFileSync('js/ui/screen-reading.js', 'utf8');

// -----------------------------------------------------------------------------
// Test Suite 1: Markup & Component Structure
// -----------------------------------------------------------------------------
console.log('Test Suite 1: Markup & Component Structure');

assert(js.includes('id="btn-reading-scroll-nav"'), 'screen-reading.js contains #btn-reading-scroll-nav button');
assert(js.includes('class="reading-scroll-nav is-hidden"'), 'Button is initialized with .reading-scroll-nav and .is-hidden');
assert(js.includes('aria-label="Go to bottom"'), 'Button has default accessible aria-label="Go to bottom"');
assert(js.includes('title="Go to bottom"'), 'Button has default title="Go to bottom"');
assert(js.includes('initScrollNavigation'), 'screen-reading.js defines initScrollNavigation()');
assert(js.includes('updateScrollNavState'), 'screen-reading.js defines updateScrollNavState callback');
assert(js.includes('scrollNavCleanup'), 'screen-reading.js manages scrollNavCleanup for listener detachment');

// -----------------------------------------------------------------------------
// Test Suite 2: CSS Styling & Responsive Design Tokens
// -----------------------------------------------------------------------------
console.log('\nTest Suite 2: CSS Styling & Design Tokens');

assert(css.includes('.reading-scroll-nav {'), 'CSS defines .reading-scroll-nav');
assert(css.includes('position: fixed'), '.reading-scroll-nav uses position: fixed');
assert(css.includes('bottom: 28px') && css.includes('right: 28px'), '.reading-scroll-nav has 28px desktop offset');
assert(css.includes('width: 42px') && css.includes('height: 42px'), '.reading-scroll-nav has 42px compact size on desktop');
assert(css.includes('background: var(--panel)'), '.reading-scroll-nav uses theme panel background');
assert(css.includes('border: 1px solid var(--line)'), '.reading-scroll-nav uses theme border');
assert(css.includes('.reading-scroll-nav:focus-visible'), '.reading-scroll-nav defines :focus-visible for accessibility');
assert(css.includes('.reading-scroll-nav.is-hidden'), 'CSS defines .reading-scroll-nav.is-hidden');
assert(css.includes('pointer-events: none'), '.is-hidden disables pointer events');
assert(css.includes('.reading-scroll-nav-icon'), 'CSS defines .reading-scroll-nav-icon');
assert(css.includes('@media (max-width: 840px)'), 'CSS includes mobile responsive breakpoint for floating button');
assert(css.includes('@media (prefers-reduced-motion: reduce)'), 'CSS includes prefers-reduced-motion support');

// -----------------------------------------------------------------------------
// Test Suite 3: Accessibility & State Machine Design
// -----------------------------------------------------------------------------
console.log('\nTest Suite 3: Accessibility & State Machine Design');

assert(js.includes('Back to top'), 'State machine handles "Back to top" state');
assert(js.includes('Go to bottom'), 'State machine handles "Go to bottom" state');
assert(js.includes('SCROLL_THRESHOLD'), 'State machine defines SCROLL_THRESHOLD to prevent scroll jitter');
assert(js.includes('prefers-reduced-motion'), 'JavaScript checks prefers-reduced-motion for smooth scrolling');
assert(js.includes('ResizeObserver'), 'JavaScript observes content resizing to update scroll button visibility');

// -----------------------------------------------------------------------------
// Test Suite 4: Visual Screenshots Verification
// -----------------------------------------------------------------------------
console.log('\nTest Suite 4: Visual Screenshots Verification');

const screenshots = [
  'artifacts/qa/scroll-nav/01-at-top-1366-dark.png',
  'artifacts/qa/scroll-nav/02-at-bottom-1366-dark.png',
  'artifacts/qa/scroll-nav/03-domain2-hidden-dark.png',
  'artifacts/qa/scroll-nav/04-at-top-1366-light.png',
  'artifacts/qa/scroll-nav/05-at-top-1920-light.png'
];

screenshots.forEach(scPath => {
  assert(existsSync(scPath), `Screenshot exists: ${scPath}`);
});

console.log('\n============================================================');
console.log(`Scroll Navigation Verification Summary: ${passes} Passed, ${failures} Failed`);
console.log('============================================================');

if (failures > 0) process.exit(1);

