import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { parseMarkdown } from '../js/core/markdown-parser.js';
import { diagrams } from '../js/core/diagram-generator.js';

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
console.log('Security Control Timeline (1.4.2) Comprehensive Verification');
console.log('============================================================\n');

// -----------------------------------------------------------------------------
// Suite 1: Structural & Academic Integrity
// -----------------------------------------------------------------------------
console.log('Test Suite 1: Structural & Academic Integrity');

const md = fs.readFileSync('content/isc2-cc-2026/reading/domain-1.md', 'utf8');
const renderedHtml = parseMarkdown(md);

assert(renderedHtml.includes('data-diagram="controlTimeline"'), 'Rendered HTML contains controlTimeline diagram');
assert(Boolean(diagrams.controlTimeline), 'diagrams.controlTimeline is exported');

const timelineHtml = diagrams.controlTimeline;
assert(timelineHtml.includes('Security Control Function Matrix'), 'Diagram title/label matches Security Control Function Matrix');
assert(timelineHtml.includes('Functional Matrix: Deterrent, Preventive, Detective, Corrective, Recovery with overlapping roles'), 'Accessibility aria-label preserved');

// Timeline Stages
assert(timelineHtml.includes('>BEFORE<'), 'Contains BEFORE stage badge');
assert(timelineHtml.includes('>DURING<'), 'Contains DURING stage badge');
assert(timelineHtml.includes('>AFTER<'), 'Contains AFTER stage badge');

// Functions
assert(timelineHtml.includes('Deterrent &amp; Preventive'), 'Contains Deterrent & Preventive');
assert(timelineHtml.includes('Detective'), 'Contains Detective');
assert(timelineHtml.includes('Corrective &amp; Recovery'), 'Contains Corrective & Recovery');

// Thai Purposes
assert(timelineHtml.includes('ยับยั้งใจ &amp; สกัดกั้นก่อนเกิดเหตุ'), 'Contains Thai purpose for Before');
assert(timelineHtml.includes('ตรวจจับ &amp; แจ้งเตือนภัยขณะเกิดเหตุ'), 'Contains Thai purpose for During');
assert(timelineHtml.includes('แก้ไขเยียวยา &amp; กู้คืนระบบหลังเกิดเหตุ'), 'Contains Thai purpose for After');

// Thai Examples
assert(timelineHtml.includes('ป้ายเตือน, ล็อคประตู, Firewall, MFA'), 'Contains examples for Before');
assert(timelineHtml.includes('IDS, Security Logs, Motion Sensor'), 'Contains examples for During');
assert(timelineHtml.includes('Patching, Malware Removal, DRP'), 'Contains examples for After');

// Overlap & Multi-Role Caption
assert(timelineHtml.includes('reading-timeline-caption'), 'Contains semantic HTML caption container');
assert(timelineHtml.includes('Key Concept: Overlap &amp; Multi-Role Functions'), 'Contains caption header badge');
assert(timelineHtml.includes('มาตรการความมั่นคงปลอดภัยหนึ่งตัวสามารถทำหน้าที่ได้หลายฟังก์ชันพร้อมกัน'), 'Contains Overlap & Multi-Role academic explanation');
assert(timelineHtml.includes('กล้องวงจรปิด (CCTV)'), 'Contains CCTV multi-role educational example');

// Removal of Cramped Single-Line Banner
assert(!timelineHtml.includes('rect x="20" y="140" width="680" height="34"'), 'Cramped single-line SVG banner is eradicated');
assert(!timelineHtml.includes('class="diag-box diag-box-banner"'), 'diag-box-banner is not used for timeline blocks');

// ViewBox expansion
assert(timelineHtml.includes('viewBox="0 0 850 155"'), 'SVG viewBox expanded to 850 155 for ample breathing room');

// -----------------------------------------------------------------------------
// Suite 2: CSS Architecture & Contrast Rules
// -----------------------------------------------------------------------------
console.log('\nTest Suite 2: CSS Architecture & Contrast Rules');

const css = fs.readFileSync('css/reading.css', 'utf8');

assert(css.includes('.diag-timeline-card'), 'CSS defines .diag-timeline-card');
assert(css.includes('.diag-timeline-badge'), 'CSS defines .diag-timeline-badge');
assert(css.includes('.diag-timeline-badge-text'), 'CSS defines .diag-timeline-badge-text');
assert(css.includes('.diag-timeline-title'), 'CSS defines .diag-timeline-title');
assert(css.includes('.diag-timeline-desc'), 'CSS defines .diag-timeline-desc');
assert(css.includes('.diag-timeline-example'), 'CSS defines .diag-timeline-example');
assert(css.includes('.reading-timeline-caption'), 'CSS defines .reading-timeline-caption');

// Check Light Theme rules
assert(css.includes('[data-theme="light"] .diag-timeline-badge') || css.includes('.light-theme .diag-timeline-badge'), 'CSS has light theme timing badge styling');
assert(css.includes('#dbeafe') && css.includes('#1e40af'), 'Light theme timing badge uses #dbeafe bg and #1e40af text (dark-blue on light-blue)');

// Check Dark Theme rules
assert(css.includes('[data-theme="dark"] .diag-timeline-badge') || css.includes('.dark-theme .diag-timeline-badge'), 'CSS has dark theme timing badge styling');
assert(css.includes('#1e3a8a') && css.includes('#ffffff'), 'Dark theme timing badge uses #1e3a8a bg and #ffffff text (white on dark-blue)');

console.log(`\nAutomated Test Summary: ${passes} Passed, ${failures} Failed`);
if (failures > 0) process.exit(1);

