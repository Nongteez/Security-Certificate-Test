# ISC2 CC 2026 — Reading Notes (Foundation & UI Shell) Design Document

**Date:** 2026-10-29  
**Status:** Approved  
**Feature:** Reading Notes (Foundation & UI Shell Only)

---

## 1. Goal

Build the foundation and UI shell for the **ISC2 CC 2026 — Reading Notes** feature within the SEC-CERT-TEST Vanilla Single Page Application (SPA). This includes adding the entry certification card in row 2, column 2 of the Exam Versions screen, direct entry navigation via a `Read →` action button, a responsive two-column documentation layout with a collapsible sidebar containing Domain 1–5 accordion navigation, and a reusable continuous reading area styled for technical editorial clarity in both dark and light themes.

---

## 2. Architecture & Components

### 2.1 Certification Card & Registry
- **File:** `data/exam-versions.js`
- **Registry Entry:**
  ```javascript
  {
    id: 'isc2-cc-reading-notes',
    certificationId: 'isc2-cc',
    type: 'reading',
    title: 'ISC2 CC 2026 — Reading Notes',
    description: 'Read cybersecurity study notes with clear explanations, examples, and essential exam concepts.',
    status: 'available'
  }
  ```
- **Placement:** Positioned immediately following `isc2-cc-learning-slides`, placing it naturally in grid position 5 (row 2, column 2) in the 3-column `.cert-grid`.
- **UI Rendering:** In `js/ui/screen-versions.js`, handle `type === 'reading'` by rendering:
  - An `Available` status badge (`status-available`).
  - An active primary button labeled `Read →` (`btn-primary btn-select-version`).
  - No fabricated statistics, question counts, or progress bars.

### 2.2 Navigation & Application State
- **File:** `js/core/state.js` & `js/ui/renderer.js`
- **State Properties:**
  - Add `reading: { selectedDomainId: 1, sidebarCollapsed: false, expandedDomains: [1] }` to track reading UI state.
- **Routing:**
  - When selecting `isc2-cc-reading-notes`, set `state.screen = 'reading-notes'`.
  - In `js/ui/renderer.js`, add `case 'reading-notes':` which invokes `renderReadingScreen(container, onBack)`.
  - `onBack` sets `state.screen = 'exam-versions'` and re-renders the app.

### 2.3 Reading Screen UI Shell
- **File:** `js/ui/screen-reading.js`
- **Top Bar:**
  - `← Back to Exam Versions` button.
  - Sidebar toggle button (collapses/expands left sidebar on desktop; opens drawer on mobile).
  - Theme toggle (`reading-theme-toggle`) reusing `renderThemeToggle` / `attachThemeToggle`.
- **Left Sidebar:**
  - Sticky on desktop (`position: sticky; top: 0; max-height: 100vh; overflow-y: auto;`).
  - Contains Domains 1 through 5 in an accordion layout:
    - Domain 1: Security Principles
    - Domain 2: Security Governance
    - Domain 3: Access Controls
    - Domain 4: Network Security
    - Domain 5: Security Operations
  - Accordion interaction:
    - Clicking the domain name selects that domain and updates the reading content area.
    - Clicking the chevron toggle expands or collapses the domain's sub-tree independently without deselecting.
    - Active domain has a subtle highlight.
    - In this foundation phase, the sub-tree shows an empty state indicator for headings.
  - Collapsible: Sidebar can be collapsed to rail/hidden to maximize reading width.
- **Main Reading Area:**
  - Reusable container (`.reading-article`).
  - Displays domain title and subtitle.
  - For unpublished content, displays a clean, neutral empty state ("Content not yet available" with message).
  - Typography prepared for continuous Markdown: headings H1–H4, body copy, lists, blockquotes, code blocks, tables, and text diagrams.

### 2.4 Styling & Design Tokens
- **File:** `css/reading.css` (linked in `index.html`)
- Strictly adheres to existing design tokens:
  - Font families: `Space Grotesk` (headings), `Noto Sans Thai` / system sans (body), `JetBrains Mono` (code/diagrams).
  - Colors: `var(--bg)`, `var(--panel)`, `var(--panel-2)`, `var(--line)`, `var(--text)`, `var(--text-dim)`, `var(--blue)`, `var(--radius)`.
  - Dark and Light theme support via `[data-theme="dark"]` and `[data-theme="light"]`.
  - Zero AI-slop: no oversized hero sections, no decorative gradients, no emojis as UI icons, no fake badges.

---

## 3. Preservation & Non-Regression

- Existing question banks (2026, next-bank) remain completely untouched.
- Existing Learning Slides and Vocabulary remain completely untouched.
- Existing Quiz Engine, results, and local session persistence remain completely untouched.
- Existing certification cards (Pre-2026, 2026 Outline, Vocabulary, Learning Slides) retain their styling, status, and navigation behavior.

