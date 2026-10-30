# ISC2 CC 2026 Reading Notes (Domains 1–4): Prioritized Remediation Backlog

> **Document ID:** `DOC-QA-CC26-RN-BACKLOG-001`  
> **Date:** October 30, 2026  
> **Scope:** Reading Notes / Textbook Feature (Domains 1–4 Remediation Planning)  
> **Planning Mode:** **PLANNING ONLY — ZERO CODE MODIFICATIONS IN THIS TASK**  
> **Target Bugs Covered:** 19 Confirmed Findings from [`reading-notes-domains-1-4-bug-register.md`](file:///d:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/reading-notes-domains-1-4-bug-register.md)  

---

## 1. Executive Summary & Remediation Strategy

This backlog synthesizes all 19 findings identified during the Task 142 audit into an ordered, phased engineering roadmap. Work is structured into **6 logical remediation workstreams** designed for sequential, single-flow implementation without regressions to existing question banks, vocabulary, learning slides, or other domains.

```
┌────────────────────────────────────────────────────────────────────────┐
│               RECOMMENDED REMEDIATION EXECUTION PHASES                 │
├─────────┬──────────────────────────────────────────────────────────────┤
│ Phase 1 │ Shared Core Architecture, Persistence & Deep Linking         │
│         │ (RN-SHARED-001, RN-SHARED-002, RN-SHARED-003, RN-SHARED-004) │
├─────────┼──────────────────────────────────────────────────────────────┤
│ Phase 2 │ Domain 1 & Domain 2 Mobile Diagram Responsive Overhaul       │
│         │ (RN-D1-001, RN-D2-001)                                       │
├─────────┼──────────────────────────────────────────────────────────────┤
│ Phase 3 │ Academic Precision & Exam Trap Enhancements                  │
│         │ (RN-D4-001, RN-D2-002, RN-D3-001, RN-D1-005)                 │
├─────────┼──────────────────────────────────────────────────────────────┤
│ Phase 4 │ Content Escaping, Accessibility & Math Formatting            │
│         │ (RN-D1-003, RN-D1-004, RN-D3-002)                            │
├─────────┼──────────────────────────────────────────────────────────────┤
│ Phase 5 │ Automated Test Suite Rigor & False PASS Eradication          │
│         │ (RN-TEST-001, RN-TEST-002)                                   │
├─────────┼──────────────────────────────────────────────────────────────┤
│ Phase 6 │ Visual Layout Polish & Code Hygiene                          │
│         │ (RN-D1-002, RN-D2-003, RN-D4-002, RN-D4-003)                 │
└─────────┴──────────────────────────────────────────────────────────────┘
```

---

## 2. Workstream 1: Shared Critical Rendering & Navigation Architecture

### Item REM-SHARED-01: Reading Progress Persistence & Resume in LocalStorage
- **Related Bug IDs:** `RN-SHARED-001`
- **Scope:** Cross-domain reading state management
- **Priority:** **P1 (High)**
- **Complexity:** **M (Medium — ~2 to 3 hours)**
- **Execution Order:** **Phase 1, Item 1 (Foundational Dependency)**
- **Suggested Fix Strategy:**
  1. Author pure module `js/core/reading-progress.js` with functions `loadReadingProgress()`, `saveReadingProgress(domainId, topicId, scrollY)`, and `clearReadingProgress()`.
  2. Storage key: `sec_cert_reading_progress_v1`.
  3. Wire auto-save triggers in `js/ui/screen-reading.js`: on domain select, on topic click, and debounced (1.5s) on window/pane scrolling.
  4. On mount of `renderReadingScreen()`, read saved state and initialize `selectedDomainId` and scroll position.
- **Files Likely Affected:**
  - `js/core/reading-progress.js` (New file)
  - `js/ui/screen-reading.js`
  - `js/core/state.js`
- **Dependencies:** None.
- **Regression Risk:** Low. Wrap `localStorage` calls in try/catch to protect private browsing or disabled storage.
- **Acceptance Criteria:**
  - Navigating to Domain 3, scrolling to Section 3.2.4, and refreshing the browser restores Domain 3 at Section 3.2.4.
  - Progress between Domains 1, 2, 3, and 4 is tracked independently.
  - 100% unit tests pass with storage mocks.

---

### Item REM-SHARED-02: URL Hash Deep Linking & Initial Router Mount
- **Related Bug IDs:** `RN-SHARED-002`
- **Scope:** Application bootstrap & deep-link routing
- **Priority:** **P2 (Medium)**
- **Complexity:** **S (Small — ~1 hour)**
- **Execution Order:** **Phase 1, Item 2**
- **Suggested Fix Strategy:**
  1. In `js/app.js`, parse `window.location.hash` during DOMContentLoaded bootstrap.
  2. If hash starts with `#topic-`, `#obj-`, or `#domain-`, determine the target domain ID (e.g., `#topic-4-1-...` -> Domain 4).
  3. Transition `state.screen = 'reading-notes'` and set `state.reading.selectedDomainId`.
  4. In `screen-reading.js`, add `targetEl.scrollIntoView({ behavior: 'auto' })` after initial DOM paint.
- **Files Likely Affected:**
  - `js/app.js`
  - `js/ui/renderer.js`
  - `js/ui/screen-reading.js`
- **Dependencies:** `REM-SHARED-01`.
- **Regression Risk:** Low. Ensure hash parser ignores quiz state hashes (`#quiz`) and learning viewer hashes (`#viewer`).
- **Acceptance Criteria:**
  - Opening `http://127.0.0.1:5199/#topic-2-1-grc-foundations` in a fresh browser tab directly renders Reading Notes on Domain 2 scrolled to Section 2.1.1.

---

### Item REM-SHARED-03: Floating Scroll Nav Window Listener Synchronization
- **Related Bug IDs:** `RN-SHARED-003`
- **Scope:** Floating UI component event binding
- **Priority:** **P2 (Medium)**
- **Complexity:** **S (Small — ~45 minutes)**
- **Execution Order:** **Phase 1, Item 3**
- **Suggested Fix Strategy:**
  1. In `initScrollNavigation()` in `js/ui/screen-reading.js`, bind an explicit `window.addEventListener('scroll', throttledUpdateNav, { passive: true })`.
  2. Throttle calls using `requestAnimationFrame`.
  3. Ensure `updateNav()` is executed synchronously whenever `updateContentOnly()` or `renderFullView()` runs.
  4. Clean up window scroll listener in `bindEvents()` onBack callback.
- **Files Likely Affected:**
  - `js/ui/screen-reading.js`
- **Dependencies:** None.
- **Regression Risk:** Zero.
- **Acceptance Criteria:**
  - Rapid window scrolling smoothly transitions button from "Go to bottom" to "Back to top".
  - Switching between Domain 1 and Domain 5 properly updates button visibility without listener leaks.

---

### Item REM-SHARED-04: Header Language Selector Integration
- **Related Bug IDs:** `RN-SHARED-004`
- **Scope:** Reading Notes top bar toolbar
- **Priority:** **P3 (Low)**
- **Complexity:** **S (Small — ~30 minutes)**
- **Execution Order:** **Phase 1, Item 4**
- **Suggested Fix Strategy:**
  1. Add a compact bilingual mode toggle (TH | EN) inside `.reading-top-actions` in `renderFullView()` in `js/ui/screen-reading.js`.
  2. Connect it to `state.setup.language` and trigger re-render of dynamic language-aware elements.
- **Files Likely Affected:**
  - `js/ui/screen-reading.js`
  - `css/reading.css`
- **Dependencies:** None.
- **Regression Risk:** Zero.
- **Acceptance Criteria:**
  - Header displays theme toggle and language selector pills consistently with Learning Slides.

---

## 3. Workstream 2: Diagram Mobile Responsive Overhaul

### Item REM-DIAG-01: Domain 2 Mobile Card Stacks for Diagrams 1, 2, 3
- **Related Bug IDs:** `RN-D2-001`
- **Scope:** Responsive diagram templates in Domain 2
- **Priority:** **P1 (High)**
- **Complexity:** **M (Medium — ~2 hours)**
- **Execution Order:** **Phase 2, Item 1**
- **Suggested Fix Strategy:**
  1. In `js/core/diagram-generator.js`, wrap desktop SVG templates for `grcAlignment`, `bcVsDrScope`, and `rtoRpoTimeline` in `<div class="reading-diagram-desktop-wrap">`.
  2. Author high-contrast mobile HTML card stacks (`<div class="reading-mob-tier-stack">`):
     - `grcAlignment`: 3 cards for Governance, Risk, and Compliance with key objectives and formulas.
     - `bcVsDrScope`: Concentric visual card stack showing Business Continuity as the parent organizational envelope and Disaster Recovery as the IT/data subset (`DR ⊂ BC`).
     - `rtoRpoTimeline`: Linear time-series card cards showing Disaster Event, RPO (Data Loss tolerance), and RTO (Downtime tolerance $\le$ MTD).
  3. In `css/reading.css`, ensure `@media (max-width: 768px)` hides `.reading-diagram-desktop-wrap` and displays `.reading-mob-tier-stack`.
- **Files Likely Affected:**
  - `js/core/diagram-generator.js`
  - `css/reading.css`
- **Dependencies:** None.
- **Regression Risk:** None for desktop.
- **Acceptance Criteria:**
  - On 390px and 320px screens, `grcAlignment`, `bcVsDrScope`, and `rtoRpoTimeline` display crisp, legible mobile card stacks with 14px text and zero scaled SVGs.

---

### Item REM-DIAG-02: Domain 1 Mobile Card Stacks for All 12 Diagrams
- **Related Bug IDs:** `RN-D1-001`
- **Scope:** Responsive diagram templates in Domain 1
- **Priority:** **P1 (High)**
- **Complexity:** **L (Large — ~4 to 5 hours)**
- **Execution Order:** **Phase 2, Item 2**
- **Suggested Fix Strategy:**
  1. In `js/core/diagram-generator.js`, author mobile semantic card stacks for all 12 Domain 1 diagrams:
     - `threatChain`: Pipeline cards (Asset -> Vulnerability -> Threat Actor -> Impact -> Safeguard).
     - `ciaTriad`: 3 pillar cards (Confidentiality, Integrity, Availability).
     - `loadBalancer`: High-availability cluster flow card stack.
     - `aaaLifecycle`: 4 step cards (Identification, Authentication, Authorization, Accounting).
     - `privacyFlow`: 3 role cards (Data Subject, Data Controller, Data Processor).
     - `defenseInDepth`: 7 concentric layer cards (Data outward to Policies/Physical).
     - `riskCalculationFlow`: 3 formula step cards (Asset Value -> SLE -> ALE).
     - `riskLifecycle`: 4 lifecycle cards (Identify -> Assess -> Treat -> Monitor).
     - `documentHierarchy`: 4 tier cards (Policy, Standard, Procedure, Guideline).
     - `controlTimeline`: 3 chronological cards (Before / Preventive, During / Detective, After / Corrective).
     - `dueCareDiligence`: Dual-column operational loop card stack.
     - `ethicsCanons`: 4 numbered canon cards (Society, Act honorably, Principals, Profession).
  2. Verify dual-presentation CSS in `css/reading.css`.
- **Files Likely Affected:**
  - `js/core/diagram-generator.js`
  - `css/reading.css`
- **Dependencies:** `REM-DIAG-01`.
- **Regression Risk:** None for desktop.
- **Acceptance Criteria:**
  - Real Chrome CDP on 390px and 320px viewports renders mobile card stacks across all 12 Domain 1 diagrams with zero illegible SVG downscaling.

---

## 4. Workstream 3: Academic Precision & Syllabus Enhancements

### Item REM-ACAD-01: Cloud Shared Responsibility Model IAM Governance vs. Infrastructure Nuance
- **Related Bug IDs:** `RN-D4-001`
- **Scope:** Domain 4 Section 4.3.3
- **Priority:** **P2 (Medium)**
- **Complexity:** **S (Small — ~30 minutes)**
- **Execution Order:** **Phase 3, Item 1**
- **Suggested Fix Strategy:**
  1. In `content/isc2-cc-2026/reading/domain-4.md` Section 4.3.3, update the IAM explanation:
     - Replace: *"IAM is ALWAYS 100% Customer Responsibility"*
     - With: *"ลูกค้ารับผิดชอบการบริหารจัดการตัวตนและการกำหนดสิทธิ์ (Identity Governance, User Lifecycle & Access Configuration) เสมอในทุกโมเดล ขณะที่ผู้ให้บริการคลาวด์รับผิดชอบความพร้อมใช้งานและความปลอดภัยของระบบยืนยันตัวตนพื้นฐาน (Directory Platform Infrastructure & Authentication SLA) ในโมเดล PaaS และ SaaS"*
  2. Update Table 3 IAM row to reflect this dual-responsibility distinction.
- **Files Likely Affected:**
  - `content/isc2-cc-2026/reading/domain-4.md`
- **Dependencies:** None.
- **Regression Risk:** Zero.
- **Acceptance Criteria:**
  - Text accurately represents both customer governance duties and CSP directory infrastructure obligations.

---

### Item REM-ACAD-02: Structured 5-Tier Disaster Recovery Testing Taxonomy
- **Related Bug IDs:** `RN-D2-002`
- **Scope:** Domain 2 Section 2.2.8
- **Priority:** **P2 (Medium)**
- **Complexity:** **S (Small — ~45 minutes)**
- **Execution Order:** **Phase 3, Item 2**
- **Suggested Fix Strategy:**
  1. In `content/isc2-cc-2026/reading/domain-2.md` Section 2.2.8, add a structured comparison table outlining the 5 standard ISC2 DR test types:
     - Checklist / Read-Through Review (Disruption: None, Cost: Lowest)
     - Tabletop Exercise / Structured Walkthrough (Disruption: None, Cost: Low)
     - Simulation Test (Disruption: Low/None, Cost: Moderate)
     - Parallel Test (Disruption: Low/Moderate, Cost: High)
     - Full Interruption / Cutover Test (Disruption: Critical/High, Cost: Highest)
  2. Highlight the exam trap: Full Interruption is the most realistic but highest risk test; Tabletop is discussion-only with zero operational impact.
- **Files Likely Affected:**
  - `content/isc2-cc-2026/reading/domain-2.md`
- **Dependencies:** None.
- **Regression Risk:** Zero.
- **Acceptance Criteria:**
  - Section 2.2.8 features the complete 5-tier testing table with clear bilingual descriptions.

---

### Item REM-ACAD-03: Modern Identity Federation Protocol Boundary Callout (SAML vs. OIDC vs. OAuth)
- **Related Bug IDs:** `RN-D3-001`
- **Scope:** Domain 3 Section 3.1.7
- **Priority:** **P2 (Medium)**
- **Complexity:** **S (Small — ~45 minutes)**
- **Execution Order:** **Phase 3, Item 3**
- **Suggested Fix Strategy:**
  1. In `content/isc2-cc-2026/reading/domain-3.md` Section 3.1.7, insert a high-contrast `.reading-callout tip` detailing the protocol roles:
     - **SAML 2.0:** XML-based enterprise SSO and identity federation.
     - **OAuth 2.0:** Token-based **Authorization** framework (grants access, NOT an authentication protocol).
     - **OpenID Connect (OIDC):** **Authentication** identity layer built on top of OAuth 2.0 (issues ID tokens).
  2. Include explicit exam warning: *"OAuth ยืนยันสิทธิ์ (Authorization) แต่ OIDC ยืนยันตัวตน (Authentication)"*.
- **Files Likely Affected:**
  - `content/isc2-cc-2026/reading/domain-3.md`
- **Dependencies:** None.
- **Regression Risk:** Zero.
- **Acceptance Criteria:**
  - Callout clearly differentiates OAuth 2.0 authorization from OIDC authentication.

---

### Item REM-ACAD-04: MFA Hardware Token & Biometric Failure Modes
- **Related Bug IDs:** `RN-D1-005`
- **Scope:** Domain 1 Section 1.1.4
- **Priority:** **P3 (Low)**
- **Complexity:** **S (Small — ~30 minutes)**
- **Execution Order:** **Phase 3, Item 4**
- **Suggested Fix Strategy:**
  1. In `content/isc2-cc-2026/reading/domain-1.md` Section 1.1.4, update Factor 2 and Factor 3 cards with operational trade-offs (hardware token battery/drift, biometric FAR/FRR/CER).
- **Files Likely Affected:**
  - `content/isc2-cc-2026/reading/domain-1.md`
- **Dependencies:** None.
- **Regression Risk:** Zero.
- **Acceptance Criteria:**
  - Factor 2 and 3 list practical failure modes aligned with `D1 sum.md`.

---

## 5. Workstream 4: Content Escaping, Accessibility & Formatting

### Item REM-A11Y-01: Remove Literal Backslash Escaped Dollar Signs
- **Related Bug IDs:** `RN-D1-003`
- **Scope:** Domain 1 Section 1.2.2
- **Priority:** **P2 (Medium)**
- **Complexity:** **S (Small — ~20 minutes)**
- **Execution Order:** **Phase 4, Item 1**
- **Suggested Fix Strategy:**
  1. In `content/isc2-cc-2026/reading/domain-1.md` lines 430–510, replace all occurrences of `\$10,000`, `\$5,000`, and `\$25,000` with `$10,000`, `$5,000`, and `$25,000`.
  2. Verify that markdown parser does not hijack plain currency numbers into KaTeX math blocks.
- **Files Likely Affected:**
  - `content/isc2-cc-2026/reading/domain-1.md`
- **Dependencies:** None.
- **Regression Risk:** Zero.
- **Acceptance Criteria:**
  - Rendered HTML displays `$10,000` without visible backslash characters.

---

### Item REM-A11Y-02: Accessible Math `aria-label` Formatting
- **Related Bug IDs:** `RN-D1-004`
- **Scope:** Domain 1 Section 1.2.2 Math Spans
- **Priority:** **P2 (Medium)**
- **Complexity:** **S (Small — ~20 minutes)**
- **Execution Order:** **Phase 4, Item 2**
- **Suggested Fix Strategy:**
  1. In `content/isc2-cc-2026/reading/domain-1.md`, update `aria-label` attributes on quantitative formula spans to replace LaTeX `\times` with spoken words (`multiplied by`).
- **Files Likely Affected:**
  - `content/isc2-cc-2026/reading/domain-1.md`
- **Dependencies:** None.
- **Regression Risk:** Zero.
- **Acceptance Criteria:**
  - Screen reader `aria-label` verbalizes "multiplied by" instead of "backslash times".

---

### Item REM-A11Y-03: Standardize Thai Terminology for SoD and PoLP
- **Related Bug IDs:** `RN-D3-002`
- **Scope:** Domain 3 Section 3.2.3
- **Priority:** **P3 (Low)**
- **Complexity:** **S (Small — ~20 minutes)**
- **Execution Order:** **Phase 4, Item 3**
- **Suggested Fix Strategy:**
  1. In `content/isc2-cc-2026/reading/domain-3.md` Section 3.2.3, replace informal occurrences of "การแบ่งสิทธิ์" with "การจำกัดสิทธิ์เท่าที่จำเป็น (Least Privilege)".
- **Files Likely Affected:**
  - `content/isc2-cc-2026/reading/domain-3.md`
- **Dependencies:** None.
- **Regression Risk:** Zero.
- **Acceptance Criteria:**
  - Terminology for Least Privilege and Separation of Duties is 100% consistent across Domain 3.

---

## 6. Workstream 5: Automated Test Suite Rigor & Integrity

### Item REM-TEST-01: Geometry-Aware Test Assertions for Diagrams
- **Related Bug IDs:** `RN-TEST-001`
- **Scope:** Test automation suites in `tools/`
- **Priority:** **P2 (Medium)**
- **Complexity:** **M (Medium — ~1.5 hours)**
- **Execution Order:** **Phase 5, Item 1**
- **Suggested Fix Strategy:**
  1. Author a shared test helper `tools/helpers/diagram-geometry-assert.mjs` that runs headless Chrome via CDP.
  2. For each diagram in Domain 1 and Domain 2, query all `<text>` elements and assert:
     - `bb.width > 0`
     - `bb.height >= 8`
     - Pairwise horizontal overlap on same Y line `< 10px`.
  3. Integrate into `verify-reading-notes-domain1.mjs` and `verify-reading-notes-domain2.mjs`.
- **Files Likely Affected:**
  - `tools/helpers/diagram-geometry-assert.mjs` (New file)
  - `tools/verify-reading-notes-domain1.mjs`
  - `tools/verify-reading-notes-domain2.mjs`
- **Dependencies:** `REM-DIAG-01`, `REM-DIAG-02`.
- **Regression Risk:** None.
- **Acceptance Criteria:**
  - Test suites fail if a diagram contains squished text (< 8px) or illegal HTML breakout tags.

---

### Item REM-TEST-02: Computed Visibility Assertions for Sidebar Accordion
- **Related Bug IDs:** `RN-TEST-002`
- **Scope:** Foundation verification suite
- **Priority:** **P2 (Medium)**
- **Complexity:** **S (Small — ~30 minutes)**
- **Execution Order:** **Phase 5, Item 2**
- **Suggested Fix Strategy:**
  1. In `tools/verify-reading-notes-foundation.mjs` Test 5, update the assertion to evaluate computed style in a DOM environment:
     ```javascript
     assert.equal(window.getComputedStyle(subTree).display, 'none');
     ```
- **Files Likely Affected:**
  - `tools/verify-reading-notes-foundation.mjs`
- **Dependencies:** None.
- **Regression Risk:** Zero.
- **Acceptance Criteria:**
  - Test accurately detects CSS display override regressions.

---

## 7. Workstream 6: Visual Layout Polish & Code Hygiene

### Item REM-POLISH-01: Strip Comments from Domain 1 Diagram Templates
- **Related Bug IDs:** `RN-D1-002`
- **Scope:** Domain 1 diagram templates
- **Priority:** **P3 (Low)**
- **Complexity:** **S (Small — ~30 minutes)**
- **Execution Order:** **Phase 6, Item 1**
- **Suggested Fix Strategy:**
  1. Strip all 67 HTML comments from Domain 1 SVG templates in `js/core/diagram-generator.js`.
- **Files Likely Affected:**
  - `js/core/diagram-generator.js`
- **Dependencies:** None.
- **Regression Risk:** Zero.
- **Acceptance Criteria:**
  - 0 comments exist inside Domain 1 SVG templates.

---

### Item REM-POLISH-02: Domain 2 Review Section Spacing Rhythm
- **Related Bug IDs:** `RN-D2-003`
- **Scope:** Domain 2 Section 2.4.8 transition
- **Priority:** **P3 (Low)**
- **Complexity:** **S (Small — ~20 minutes)**
- **Execution Order:** **Phase 6, Item 2**
- **Suggested Fix Strategy:**
  1. Add `class="reading-section-divider"` and `margin-top: var(--space-2xl)` before `#domain-2-review` in `content/isc2-cc-2026/reading/domain-2.md`.
- **Files Likely Affected:**
  - `content/isc2-cc-2026/reading/domain-2.md`
- **Dependencies:** None.
- **Regression Risk:** Zero.
- **Acceptance Criteria:**
  - Clean visual breathing room between Section 2.4.8 and Domain Review.

---

### Item REM-POLISH-03: Wi-Fi 6E/7 Forward Notation
- **Related Bug IDs:** `RN-D4-002`
- **Scope:** Domain 4 Section 4.1.9
- **Priority:** **P3 (Low)**
- **Complexity:** **S (Small — ~15 minutes)**
- **Execution Order:** **Phase 6, Item 3**
- **Suggested Fix Strategy:**
  1. Add a forward-looking informational note below Table 4 in Section 4.1.9 noting Wi-Fi 6E (6 GHz band) and Wi-Fi 7 (802.11be).
- **Files Likely Affected:**
  - `content/isc2-cc-2026/reading/domain-4.md`
- **Dependencies:** None.
- **Regression Risk:** Zero.
- **Acceptance Criteria:**
  - Forward-looking note present without expanding core exam scope.

---

### Item REM-POLISH-04: Narrow Desktop Diagram Subtitle Proximity Adjustment
- **Related Bug IDs:** `RN-D4-003`
- **Scope:** Domain 4 diagrams in `js/core/diagram-generator.js`
- **Priority:** **P3 (Low)**
- **Complexity:** **S (Small — ~15 minutes)**
- **Execution Order:** **Phase 6, Item 4**
- **Suggested Fix Strategy:**
  1. Adjust subtitle `y` coordinate from `y="38"` to `y="42"` in `osiVsTcpIpModel` and `cloudSharedResponsibility`.
- **Files Likely Affected:**
  - `js/core/diagram-generator.js`
- **Dependencies:** None.
- **Regression Risk:** Zero.
- **Acceptance Criteria:**
  - Subtitle has >= 14px breathing room in 1024px desktop viewports.

