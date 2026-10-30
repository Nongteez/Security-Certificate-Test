# ISC2 CC 2026 — Reading Notes (Foundation & UI Shell) Implementation Plan

> **For Antigravity:** REQUIRED WORKFLOW: Use `.agent/workflows/execute-plan.md` to execute this plan in single-flow mode.

**Goal:** Build the foundation and UI shell for the ISC2 CC 2026 Reading Notes feature, including the entry card in row 2, column 2, direct routing, a collapsible left sidebar with Domain 1–5 accordions, and a continuous-reading area with dark/light theme support.

**Architecture:** A lightweight Vanilla JS SPA screen module (`js/ui/screen-reading.js`) mounted into `#app` by `js/ui/renderer.js`. State managed via `js/core/state.js`. A new card in `data/exam-versions.js` rendered via `js/ui/screen-versions.js`. Dedicated styles in `css/reading.css` linked in `index.html`.

**Tech Stack:** Vanilla JavaScript (ES Modules), CSS3 (Flexbox/Grid, CSS custom properties), HTML5, Node.js test harness.

---

### Task 1: Update Exam Versions Registry & Version Selection Card Rendering

**Files:**
- Modify: `data/exam-versions.js`
- Modify: `js/ui/screen-versions.js`

**Details:**
1. In `data/exam-versions.js`, add `isc2-cc-reading-notes` entry right after `isc2-cc-learning-slides`.
2. In `js/ui/screen-versions.js`, support `version.type === 'reading'` so it renders an `Available` badge and active `Read →` button. Wire click to call `onSelectVersion('isc2-cc-reading-notes')`.

---

### Task 2: Update App State and Screen Router

**Files:**
- Modify: `js/core/state.js`
- Modify: `js/ui/renderer.js`

**Details:**
1. In `js/core/state.js`, add initial reading state (`reading: { selectedDomainId: 1, sidebarCollapsed: false, expandedDomains: [1] }`).
2. In `js/ui/renderer.js`, handle `case 'reading-notes':` and version select id `'isc2-cc-reading-notes'` to set screen and render reading screen.

---

### Task 3: Create Reading Notes Screen Module

**Files:**
- Create: `js/ui/screen-reading.js`

**Details:**
1. Render top bar with `← Back to Exam Versions`, sidebar collapse toggle, and theme toggle.
2. Render left sidebar with Domain 1–5 accordions:
   - Each domain has title, number, and chevron toggle.
   - Clicking domain title switches active domain.
   - Clicking chevron toggles expanded/collapsed state of that domain independently.
   - Unexpanded or expanded domains display neutral placeholder for headings until Markdown integration.
3. Render continuous reading area:
   - Domain header with domain title and number.
   - Neutral "Content not yet available" empty state.
   - Foundation container ready for long-form Markdown article typography.

---

### Task 4: Create Reading Notes CSS Styles

**Files:**
- Create: `css/reading.css`
- Modify: `index.html`

**Details:**
1. Style two-column layout (`.reading-shell`, `.reading-sidebar`, `.reading-content`, `.reading-article`).
2. Sticky sidebar on desktop, scrollable independently, collapsible to rail or hidden. Mobile drawer behavior with toggle.
3. Chevron animation and accordion styling with subtle active highlight.
4. Editorial reading typography using existing design tokens for both dark and light modes.
5. Link `css/reading.css` in `index.html`.

---

### Task 5: Automated Verification Suite & Non-Regression

**Files:**
- Create: `tools/verify-reading-notes-foundation.mjs`

**Details:**
1. Verify `data/exam-versions.js` contains `isc2-cc-reading-notes` at position 5 (row 2, column 2).
2. Verify card renders with "Available" and "Read →" button.
3. Verify clicking `Read →` routes to `reading-notes` screen.
4. Verify all 5 domains are present in sidebar accordions.
5. Verify domain switching updates active domain.
6. Verify chevron toggle collapses/expands independently.
7. Verify empty state renders correctly.
8. Verify back navigation returns to `exam-versions`.
9. Verify CSS design tokens, dark/light theme classes, and no AI-slop patterns.
10. Verify existing question banks, vocabulary, and slides remain untouched and intact.

