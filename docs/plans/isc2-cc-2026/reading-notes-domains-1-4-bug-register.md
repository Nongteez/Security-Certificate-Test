# ISC2 CC 2026 Reading Notes (Domains 1–4): Consolidated Master Bug Register

> **Document ID:** `DOC-QA-CC26-RN-BUG-REGISTER-001`  
> **Date:** October 30, 2026  
> **Scope:** Reading Notes / Textbook Feature (Domains 1, 2, 3, 4 & Shared Infrastructure)  
> **Audit Status:** **AUDIT ONLY — REGISTER FOR PRIORITIZED HUMAN REVIEW**  
> **Total Logged Defects:** **19 Findings (0 P0, 3 P1, 9 P2, 7 P3)**  
> **Evidence Directory:** [`artifacts/qa/reading-notes-domains-1-4-audit/`](file:///d:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-domains-1-4-audit/)  

---

## 1. Master Bug Register Summary Table

| Bug ID | Domain | Objective / Section | Severity | Category | Short Description | Suggested Action |
| :--- | :---: | :---: | :---: | :--- | :--- | :--- |
| **`RN-SHARED-001`** | Shared | System-wide | **P1** | Persistence | Reading progress and active domain absent from `localStorage` | **REMEDIATED / VERIFIED (Task 143)** |
| **`RN-SHARED-002`** | Shared | Routing | **P2** | Navigation | Direct hash URL navigation on page load not mounted by router | **REMEDIATED / VERIFIED (Task 143)** |
| **`RN-SHARED-003`** | Shared | UI Component | **P2** | Interaction | Floating scroll button synchronization with window scrolling | Bind window scroll handler with throttle |
| **`RN-SHARED-004`** | Shared | Toolbar | **P3** | Bilingual | Language toggle absent from Reading Notes header | Add language toggle linked to `state.setup.language` |
| **`RN-D1-001`** | Domain 1 | 1.1–1.5 (12 Diagrams) | **P1** | Mobile / SVG | All 12 diagrams lack mobile HTML card stacks (scaled to ~4px) | Add responsive mobile stacks (`.reading-mob-tier-stack`) |
| **`RN-D1-002`** | Domain 1 | 1.1–1.5 (Diagrams) | **P3** | Code Hygiene | 67 inline HTML comments inside SVG diagram templates | Strip comments from SVG templates |
| **`RN-D1-003`** | Domain 1 | 1.2.2 (Quantitative) | **P2** | Markdown | Unstripped literal backslashes before currency numbers (`\$10,000`) | Remove backslashes from raw HTML lines |
| **`RN-D1-004`** | Domain 1 | 1.2.2 (Math A11y) | **P2** | Accessibility | Raw LaTeX syntax (`\times`) in `aria-label` attributes | Replace `\times` with spoken words (`multiplied by`) |
| **`RN-D1-005`** | Domain 1 | 1.1.4 (MFA) | **P3** | Academic Depth | Missing explicit failure modes for hardware tokens and biometrics | Add failure modes (clock drift, FAR/FRR) |
| **`RN-D2-001`** | Domain 2 | 2.1–2.2 (3 Diagrams) | **P1** | Mobile / SVG | 3 diagrams lack mobile HTML card stacks (`grcAlignment`, `bcVsDrScope`, `rtoRpoTimeline`) | Implement mobile card stacks matching `effectivenessHierarchy` |
| **`RN-D2-002`** | Domain 2 | 2.2.8 (DR Testing) | **P2** | Academic Depth | Missing structured 5-tier Disaster Recovery Testing taxonomy | Add structured table (Read-through to Full Interruption) |
| **`RN-D2-003`** | Domain 2 | 2.4.8 & Domain Review | **P3** | Visual Polish | Visual proximity between Section 2.4.8 and Domain Review section | Add distinct section divider and margin rhythm |
| **`RN-D3-001`** | Domain 3 | 3.1.7 (IAM Tools) | **P2** | Academic Depth | Missing explicit exam distinction for SAML vs. OIDC vs. OAuth 2.0 | Add comparative callout on AuthN vs AuthZ roles |
| **`RN-D3-002`** | Domain 3 | 3.2.2 & 3.2.3 (SoD/PoLP)| **P3** | Translation | Dual Thai phrasing "การแบ่งสิทธิ์" used for both SoD and PoLP | Standardize SoD as "การแบ่งแยกหน้าที่", PoLP as "การจำกัดสิทธิ์" |
| **`RN-D4-001`** | Domain 4 | 4.3.3 (Cloud Shared) | **P2** | Academic Nuance | Oversimplifies IAM as "100% Customer" without CSP directory SLA | Differentiate Identity Governance vs Directory Infrastructure |
| **`RN-D4-002`** | Domain 4 | 4.1.9 (Wireless) | **P3** | Forward Scope | Omission of forward notation regarding Wi-Fi 6E/7 | Add forward-looking informational note |
| **`RN-D4-003`** | Domain 4 | 4.1.3 & 4.3.3 (Diagrams)| **P3** | Layout Polish | Narrow desktop diagram subtitle proximity (~8px from top card edge) | Increase top margin padding in narrow viewports |
| **`RN-TEST-001`** | Test Suite | D1 & D2 Tests | **P2** | Test Integrity | Diagram assertions only check string inclusion without font geometry | Add bounding-box geometry checks (`getBBox()`) |
| **`RN-TEST-002`** | Test Suite | Foundation Test 5 | **P2** | Test Integrity | Sidebar accordion test checks attribute `[hidden]` without computed style | Assert `getComputedStyle(el).display === 'none'` |

---

## 2. Detailed Bug Specification & Reproduction Profiles

### Shared Architecture Defects

#### Bug RN-SHARED-001: Absence of Reading Progress Persistence in LocalStorage
- **Bug ID:** `RN-SHARED-001`
- **Domain:** Shared Architecture
- **Objective / Subsection:** System-wide
- **Severity:** **P1 (High)**
- **Category:** Persistence & State Management
- **Exact File & Line:** `js/ui/screen-reading.js:89-105`, `js/core/state.js:13`
- **Reproduction Steps:**
  1. Open SEC CERT TEST in browser and navigate to Reading Notes.
  2. Switch from Domain 1 to Domain 3 (`[data-select-domain="3"]`).
  3. Scroll down to Section 3.2.8.
  4. Press browser Refresh (F5 or Ctrl+R).
- **Expected Behavior:** Application reloads, reads saved reading position from `localStorage`, opens Domain 3, and restores the scroll offset or active topic.
- **Actual Behavior:** Application resets to Home Screen or Domain 1 at `scrollTop = 0`. `localStorage` contains zero keys related to Reading Notes (`localStorage.getItem('sec_cert_reading_progress') === null`).
- **Screenshot / Runtime Evidence:** Verified via Chrome CDP execution in `tools/audit-reading-notes-full.mjs`: `Reading progress in localStorage: exists=false, content=null`.
- **Academic / User Impact:** Severe inconvenience. Students studying long textbook domains lose their position whenever their session is interrupted, battery dies, or page reloads.
- **Historical Defect Reference:** H10 (Progress & Resume).
- **Suggested Fix:**
  - Create `js/core/reading-progress.js` with `saveReadingProgress(domainId, topicId, scrollY)` and `loadReadingProgress()`.
  - Persist under `localStorage.setItem('sec_cert_reading_progress_v1', ...)`.
  - On mount of `screen-reading.js`, initialize `selectedDomainId` from saved state.
- **Regression Risks:** None if default fallback to Domain 1 is retained when storage is empty or corrupt.
- **Verification Status:** **REMEDIATED & VERIFIED in Task 143** (Passed 20/20 unit test scenarios and 33/33 Chrome CDP browser QA checks).

---

#### Bug RN-SHARED-002: Direct Hash Navigation on Page Load Ignored by Router
- **Bug ID:** `RN-SHARED-002`
- **Domain:** Shared Architecture
- **Objective / Subsection:** Top-level Routing
- **Severity:** **P2 (Medium)**
- **Category:** Deep Linking & Navigation
- **Exact File & Line:** `js/app.js:1-85`, `js/ui/screen-reading.js`
- **Reproduction Steps:**
  1. Copy a direct textbook section anchor URL (e.g., `http://127.0.0.1:5199/#topic-2-1-grc-foundations` or `#obj-4-2`).
  2. Paste it into an empty browser tab and press Enter.
- **Expected Behavior:** Router inspects URL hash, detects `#topic-...` or `#obj-...`, sets `state.screen = 'reading-notes'`, sets `state.reading.selectedDomainId` to the matching domain, and scrolls to the anchor.
- **Actual Behavior:** Prior to Task 143, router ignored the hash and mounted the default Home Screen (`state.screen = 'home'`).
- **Screenshot / Runtime Evidence:** Resolved and verified in Task 143 across cold boot, reload, and history navigation.
- **Academic / User Impact:** Enables instructors, bookmarks, and cross-feature links to open specific textbook sections directly.
- **Historical Defect Reference:** H09 / H10.
- **Remediation Implemented:** In `js/app.js`, `handleInitialRoute()` and `setupHashRouting()` parse `window.location.hash` with `parseReadingDeepLink`, resolving Domain 1–4 namespaces and subsection anchors cleanly.
- **Verification Status:** **REMEDIATED & VERIFIED in Task 143** (Passed 20/20 unit test scenarios and 33/33 Chrome CDP browser QA checks).

---

#### Bug RN-SHARED-003: Floating Scroll Navigation Button Desktop Sync Jitter
- **Bug ID:** `RN-SHARED-003`
- **Domain:** Shared Architecture
- **Objective / Subsection:** Floating Scroll Navigation
- **Severity:** **P2 (Medium)**
- **Category:** DOM Event Binding & Viewport Sizing
- **Exact File & Line:** `js/ui/screen-reading.js:550-605`
- **Reproduction Steps:**
  1. Open Domain 1 on a 1920×1080 display.
  2. The window is the scroll container (`pane.scrollHeight === pane.clientHeight`).
  3. Drag scrollbar rapidly down and up.
- **Expected Behavior:** Floating scroll button smoothly updates `is-hidden` class and toggle icon between Top and Bottom without flickering or failing to update.
- **Actual Behavior:** When `targetInfo.isWindow` is true, the scroll listener attached in `initScrollNavigation()` does not register a debounced resize listener for window scroll height changes; switching domains leaves previous scroll calculations stale until user performs an initial wheel scroll.
- **Screenshot / Runtime Evidence:** Tested in Step 8 of `tools/audit-reading-notes-full.mjs`.
- **Academic / User Impact:** Minor UX annoyance on long articles.
- **Historical Defect Reference:** Task 117.
- **Suggested Fix:** Add explicit `window.addEventListener('scroll', updateNav, { passive: true })` inside `initScrollNavigation()` with a 50ms requestAnimationFrame throttle, and call `updateNav()` immediately upon domain switch.
- **Regression Risks:** Low. Ensure listener is cleaned up in `onBack()`.
- **Verification Status:** Confirmed reproducible.

---

#### Bug RN-SHARED-004: Language Toggle Missing in Reading Notes Toolbar
- **Bug ID:** `RN-SHARED-004`
- **Domain:** Shared Architecture
- **Objective / Subsection:** Top Navigation Bar
- **Severity:** **P3 (Low)**
- **Category:** Bilingual UI Consistency
- **Exact File & Line:** `js/ui/screen-reading.js:245-262`
- **Reproduction Steps:**
  1. Inspect the top bar of Reading Notes (`.reading-top-bar`).
  2. Observe the controls present: Back Button, Sidebar Toggle Button, App Badge, and Theme Toggle.
- **Expected Behavior:** Consistent with Learning Slides and Version Selection, the toolbar should provide a language preference toggle (or indicator) allowing users to switch or review language mode.
- **Actual Behavior:** No language controls exist in the Reading Notes header.
- **Screenshot / Runtime Evidence:** `domain-1-1920x1080-dark.png` top toolbar.
- **Academic / User Impact:** Students cannot easily change global language mode without navigating back to the Home screen.
- **Suggested Fix:** Add language toggle pills (TH | EN) to `.reading-top-actions` alongside the theme toggle.
- **Regression Risks:** Zero.
- **Verification Status:** Confirmed reproducible.

---

### Domain 1 Defects

#### Bug RN-D1-001: Mobile Readability Failure — All 12 SVG Diagrams Lack Mobile Card Stacks
- **Bug ID:** `RN-D1-001`
- **Domain:** Domain 1
- **Objective / Subsection:** Objectives 1.1–1.5 (All 12 Diagrams)
- **Severity:** **P1 (High)**
- **Category:** Responsive Design & Mobile Accessibility
- **Exact File & Line:** `js/core/diagram-generator.js:20-800`
- **Reproduction Steps:**
  1. Open Domain 1 on a mobile viewport (e.g., iPhone 14 at 390×844 or iPhone SE at 320×568).
  2. Scroll to any diagram (e.g., `threatChain`, `ciaTriad`, `defenseInDepth`, `controlTimeline`).
- **Expected Behavior:** The desktop SVG is hidden on $\le 768\text{px}$, and a responsive semantic HTML card stack (`.reading-mob-tier-stack`) renders with clean 14px–15px body typography.
- **Actual Behavior:** The desktop SVG (viewBox 680px–860px) is forced to scale down to 320px–360px container width. The SVG text elements scale proportionally down to 4.2px–5.5px, making the diagrams virtually unreadable on mobile phones.
- **Screenshot / Runtime Evidence:** Captured in `artifacts/qa/reading-notes-domains-1-4-audit/domain-1-390x844-dark.png` and `domain-1-320x568-light.png`.
- **Academic / User Impact:** Mobile learners cannot read diagram labels, relationships, or Thai explanations without zooming into the screen.
- **Historical Defect Reference:** D2-Q01 (Task 126), D3-Q02 (Task 132).
- **Suggested Fix:** Upgrade all 12 Domain 1 diagram templates in `diagram-generator.js` with responsive dual-presentation architecture: wrap desktop SVG in `.reading-diagram-desktop-wrap` and add `.reading-mob-tier-stack` cards matching Domain 3 and Domain 4 standards.
- **Regression Risks:** None for desktop. CSS media query `@media (max-width: 768px)` ensures desktop viewports are strictly untouched.
- **Verification Status:** **REMEDIATED & VERIFIED (Task 144)** — All 12 Domain 1 diagrams upgraded with dual-presentation architecture (`.reading-diag-desktop` and `.reading-diag-mobile`). Verified in Chrome CDP across 7 viewports (1920x1080 to 320x568) in dark and light modes. Zero horizontal overflow, minimum mobile font size >= 11.5px, body >= 13px. Evidence: 43 screenshots in `artifacts/qa/reading-notes-task-144/`.

---

#### Bug RN-D1-002: Leaked HTML Comments Inside Inline SVG Templates
- **Bug ID:** `RN-D1-002`
- **Domain:** Domain 1
- **Objective / Subsection:** Objectives 1.1–1.5 (Diagrams)
- **Severity:** **P3 (Low)**
- **Category:** Code Hygiene
- **Exact File & Line:** `js/core/diagram-generator.js:29, 39, 49, 115, 175, 230, etc.`
- **Reproduction Steps:**
  1. Inspect `js/core/diagram-generator.js`.
  2. Count HTML comments (`<!-- ... -->`) inside SVG markup in Domain 1 diagrams.
- **Expected Behavior:** SVG templates are clean of development comments in production code.
- **Actual Behavior:** 67 inline comments exist inside SVG markup across Domain 1's 12 diagrams.
- **Screenshot / Runtime Evidence:** Audited via `scratch/audit-diagrams-code.mjs`: `threatChain` (9), `ciaTriad` (7), `loadBalancer` (7), `aaaLifecycle` (4), `privacyFlow` (5), `defenseInDepth` (3), `riskCalculationFlow` (6), `riskLifecycle` (10), `documentHierarchy` (4), `controlTimeline` (5), `dueCareDiligence` (4), `ethicsCanons` (5).
- **Academic / User Impact:** Zero visual impact; code bloat and potential DOM parser edge cases.
- **Historical Defect Reference:** D2-Q02 (Task 126/128).
- **Suggested Fix:** Strip all HTML comments from Domain 1 diagram templates in `diagram-generator.js`.
- **Regression Risks:** Zero.
- **Verification Status:** **REMEDIATED & VERIFIED (Task 144)** — All 67 development comments stripped from SVG templates in `diagram-generator.js`. Verified 0 comments across all 12 diagrams via automated regex audit.

---

#### Bug RN-D1-003: Unstripped Literal Backslashes in Currency Numbers (`\$10,000`)
- **Bug ID:** `RN-D1-003`
- **Domain:** Domain 1
- **Objective / Subsection:** 1.2.2 Quantitative Risk Analysis & Formulas
- **Severity:** **P2 (Medium)**
- **Category:** Markdown Parser & Text Rendering
- **Exact File & Line:** `content/isc2-cc-2026/reading/domain-1.md` lines 430, 436, 482, 506
- **Reproduction Steps:**
  1. Open Domain 1 and navigate to Section 1.2.2.
  2. Inspect the example text inside `<p>` and `<div>` tags:
     - `มูลค่าเซิร์ฟเวอร์ฐานข้อมูล = \$10,000`
     - `ความเสียหายต่อครั้ง เช่น \$5,000`
     - `หากความเสี่ยงก่อความเสียหายปีละ \$10,000 องค์กรไม่ควรจ่ายเงินซื้ออุปกรณ์ป้องกันปีละ \$25,000`
- **Expected Behavior:** Backslashes are stripped or avoided, displaying clean currency numbers: `$10,000`, `$5,000`, `$25,000`.
- **Actual Behavior:** The browser renders the literal backslash on screen to students: `\$10,000`, `\$5,000`, `\$25,000`.
- **Screenshot / Runtime Evidence:** Verified in `scratch/audit-markdown-rendering.mjs` and inspection in Section 1.2.2.
- **Academic / User Impact:** Unprofessional visual appearance that looks like a coding bug or escaped string artifact.
- **Historical Defect Reference:** Task 109 Finding 1.
- **Suggested Fix:** Replace `\$10,000`, `\$5,000`, and `\$25,000` with `$10,000`, `$5,000`, `$25,000` (or wrap currency inside a dedicated `.reading-currency` span).
- **Regression Risks:** Zero.
- **Verification Status:** Confirmed reproducible.

---

#### Bug RN-D1-004: Raw LaTeX Syntax (`\times`) in Math `aria-label` Attributes
- **Bug ID:** `RN-D1-004`
- **Domain:** Domain 1
- **Objective / Subsection:** 1.2.2 Quantitative Risk Analysis
- **Severity:** **P2 (Medium)**
- **Category:** Accessibility (A11y) & Screen Reader Compatibility
- **Exact File & Line:** `content/isc2-cc-2026/reading/domain-1.md` lines 440, 479, 491
- **Reproduction Steps:**
  1. Inspect the rendered DOM of Section 1.2.2 formulas using Chrome DevTools Accessibility tree.
  2. Inspect `aria-label` attributes:
     - `<span role="math" aria-label="SLE = $10,000 \times 0.50 = $5,000">`
     - `<span role="math" aria-label="→ ALE = $5,000 \times 2 = $10,000">`
- **Expected Behavior:** `aria-label` uses accessible natural language: `aria-label="SLE equals $10,000 multiplied by 0.50 equals $5,000"`.
- **Actual Behavior:** Screen readers pronounce the raw LaTeX macro: *"backslash times"*.
- **Screenshot / Runtime Evidence:** Audited via `scratch/audit-markdown-rendering.mjs`.
- **Academic / User Impact:** Degrades accessibility for visually impaired learners using screen readers.
- **Historical Defect Reference:** Task 109 Finding 3.
- **Suggested Fix:** Update the `aria-label` attributes on quantitative math formulas to use natural spoken English words (`multiplied by`).
- **Regression Risks:** Zero.
- **Verification Status:** Confirmed reproducible.

---

#### Bug RN-D1-005: Missing Explicit Weaknesses for MFA Token & Biometric Factors
- **Bug ID:** `RN-D1-005`
- **Domain:** Domain 1
- **Objective / Subsection:** 1.1.4 Multi-Factor Authentication (MFA)
- **Severity:** **P3 (Low)**
- **Category:** Academic Depth
- **Exact File & Line:** `content/isc2-cc-2026/reading/domain-1.md:150-210`
- **Reproduction Steps:**
  1. Open Section 1.1.4 and read the 4 factor cards.
  2. Observe Factor 2 (Something You Have) and Factor 3 (Something You Are).
- **Expected Behavior:** Hardware tokens list operational vulnerabilities (clock desynchronization, battery exhaustion, physical loss). Biometrics list False Rejection Rate (FRR) vs. False Acceptance Rate (FAR) and Crossover Error Rate (CER).
- **Actual Behavior:** Cards list positive examples and definitions, but omit the standard ISC2 failure modes and trade-offs.
- **Screenshot / Runtime Evidence:** Verified against `D1 sum.md` Part 1 §3.
- **Academic / User Impact:** Minor academic completeness gap on ISC2 CC trick questions.
- **Suggested Fix:** Add a concise bullet under Factor 2 and Factor 3 noting these operational trade-offs.
- **Regression Risks:** Zero.
- **Verification Status:** Confirmed reproducible.

---

### Domain 2 Defects

#### Bug RN-D2-001: Mobile Readability Failure — 3 Diagrams Lack Mobile Card Stacks
- **Bug ID:** `RN-D2-001`
- **Domain:** Domain 2
- **Objective / Subsection:** Objectives 2.1 & 2.2 (`grcAlignment`, `bcVsDrScope`, `rtoRpoTimeline`)
- **Severity:** **P1 (High)**
- **Category:** Responsive Design & Mobile Readability
- **Exact File & Line:** `js/core/diagram-generator.js` (`grcAlignment`, `bcVsDrScope`, `rtoRpoTimeline`)
- **Reproduction Steps:**
  1. Open Domain 2 on a 390px or 320px mobile viewport.
  2. Scroll to Section 2.1.1 (`grcAlignment`), Section 2.2.5 (`bcVsDrScope`), or Section 2.2.6 (`rtoRpoTimeline`).
- **Expected Behavior:** The desktop SVG hides, and a clean mobile HTML card stack renders (as is done for Diagram 4 `effectivenessHierarchy`).
- **Actual Behavior:** Pure desktop SVG (viewBox widths 780px–840px) is scaled down to fit 320px–360px, reducing text height to ~4.5px–5px.
- **Screenshot / Runtime Evidence:** `domain-2-390x844-dark.png` and `domain-2-320x568-light.png`.
- **Academic / User Impact:** Mobile learners cannot read key terms inside GRC pillars, BC vs DR nested scopes, or RTO/RPO timeline nodes.
- **Historical Defect Reference:** D2-Q01 (Task 126).
- **Suggested Fix:** Add mobile HTML card stacks (`.reading-mob-tier-stack`) to `grcAlignment`, `bcVsDrScope`, and `rtoRpoTimeline` in `js/core/diagram-generator.js`.
- **Regression Risks:** None for desktop.
- **Verification Status:** **REMEDIATED & VERIFIED (Task 144)** — Verified and polished responsive dual-presentation architecture for `grcAlignment`, `bcVsDrScope`, `rtoRpoTimeline`, and `effectivenessHierarchy`. Micro-text defects resolved by raising badge typography to 11.5px in `css/reading.css`. Verified across 7 viewports in Chrome CDP. Evidence: screenshots in `artifacts/qa/reading-notes-task-144/`.

---

#### Bug RN-D2-002: Missing Structured 5-Tier Disaster Recovery Testing Taxonomy
- **Bug ID:** `RN-D2-002`
- **Domain:** Domain 2
- **Objective / Subsection:** 2.2.8 DR Testing, Exercises & Drills
- **Severity:** **P2 (Medium)**
- **Category:** Academic Completeness
- **Exact File & Line:** `content/isc2-cc-2026/reading/domain-2.md` Section 2.2.8
- **Reproduction Steps:**
  1. Read Section 2.2.8 in `domain-2.md`.
  2. Observe the DR testing explanation.
- **Expected Behavior:** A structured comparison table or ordered hierarchy defining the 5 standard ISC2 DR test types:
  1. Checklist / Read-Through Review
  2. Tabletop Exercise / Structured Walkthrough
  3. Simulation Test
  4. Parallel Test
  5. Full Interruption / Cutover Test
- **Actual Behavior:** Section 2.2.8 describes general drill objectives, Tabletop, and drills in prose, but does not present the standard 5-step taxonomy with disruption ratings.
- **Screenshot / Runtime Evidence:** Verified against `ISC2 Update 2026/Domain 2/Domain 2.md` §3.5.
- **Academic / User Impact:** Students are underprepared for exam questions asking which test type causes maximum operational interruption vs. zero interruption.
- **Suggested Fix:** Add a concise bilingual comparison table in Section 2.2.8 detailing the 5 test types with Disruption Level, Cost, and Primary Objective.
- **Regression Risks:** Zero.
- **Verification Status:** Confirmed reproducible.

---

#### Bug RN-D2-003: Visual Proximity Between Section 2.4.8 Memory Aid and Domain Review Section
- **Bug ID:** `RN-D2-003`
- **Domain:** Domain 2
- **Objective / Subsection:** Between 2.4.8 and Domain Review
- **Severity:** **P3 (Low)**
- **Category:** Typography & Spacing Rhythm
- **Exact File & Line:** `content/isc2-cc-2026/reading/domain-2.md` lines 700–740
- **Reproduction Steps:**
  1. Scroll to the bottom of Objective 2.4 (Section 2.4.8).
  2. Observe the transition into the Domain 2 Summary & Review section.
- **Expected Behavior:** Clear visual separation distinguishing the end of Objective 2.4 from the domain-wide summary.
- **Actual Behavior:** Minimal vertical spacing creates a slightly abrupt transition.
- **Screenshot / Runtime Evidence:** Inspected in `domain-2-1366x768-light.png`.
- **Academic / User Impact:** Minor visual polish issue.
- **Suggested Fix:** Add `margin-top: var(--space-2xl)` and an explicit section divider above `#domain-2-review`.
- **Regression Risks:** Zero.
- **Verification Status:** Confirmed reproducible.

---

### Domain 3 Defects

#### Bug RN-D3-001: Missing Contextual Contrast Between SAML, OIDC, and OAuth 2.0
- **Bug ID:** `RN-D3-001`
- **Domain:** Domain 3
- **Objective / Subsection:** 3.1.7 IAM Technology Stack & Modern Federation
- **Severity:** **P2 (Medium)**
- **Category:** Academic Depth & Exam Trap Coverage
- **Exact File & Line:** `content/isc2-cc-2026/reading/domain-3.md` Section 3.1.7
- **Reproduction Steps:**
  1. Read Section 3.1.7 in `domain-3.md`.
  2. Check coverage of SAML, OAuth, and OpenID Connect.
- **Expected Behavior:** Explicit bilingual callout or table clarifying:
  - **SAML 2.0:** XML-based enterprise SSO and federation.
  - **OAuth 2.0:** **Authorization** framework issuing access tokens (NOT an authentication protocol).
  - **OpenID Connect (OIDC):** **Authentication** layer built on top of OAuth 2.0 issuing ID tokens (JWT).
- **Actual Behavior:** Protocols are mentioned in prose, but the critical distinction (OAuth = Authorization, OIDC = Authentication) is not highlighted as an exam trap callout.
- **Screenshot / Runtime Evidence:** Verified against `ISC2 Update 2026/Domain 3/Domain 3.md` §2.5.
- **Academic / User Impact:** High-frequency exam trap in ISC2 CC Domain 3.
- **Suggested Fix:** Add a `.reading-exam-trap` or tip callout in Section 3.1.7 contrasting SAML vs. OIDC vs. OAuth 2.0.
- **Regression Risks:** Zero.
- **Verification Status:** Confirmed reproducible.

---

#### Bug RN-D3-002: Dual Thai Phrasing "การแบ่งสิทธิ์" for both SoD and PoLP
- **Bug ID:** `RN-D3-002`
- **Domain:** Domain 3
- **Objective / Subsection:** 3.2.2 & 3.2.3
- **Severity:** **P3 (Low)**
- **Category:** Thai Translation Nuance
- **Exact File & Line:** `content/isc2-cc-2026/reading/domain-3.md` Section 3.2.3
- **Reproduction Steps:**
  1. Read Thai explanations in Section 3.2.3.
  2. Notice the phrase "การแบ่งสิทธิ์" used loosely when discussing Least Privilege.
- **Expected Behavior:** SoD is strictly "การแบ่งแยกหน้าที่" (workflow division), while PoLP is strictly "การจำกัดสิทธิ์เท่าที่จำเป็น" (permission minimization).
- **Actual Behavior:** Informal usage of "การแบ่งสิทธิ์" creates minor semantic ambiguity.
- **Screenshot / Runtime Evidence:** Audited in `scratch/audit-bilingual-phrasing.mjs`.
- **Academic / User Impact:** Minor terminology ambiguity.
- **Suggested Fix:** Standardize phrasing to "การจำกัดสิทธิ์เท่าที่จำเป็น (Least Privilege)" and "การแบ่งแยกหน้าที่ (Separation of Duties)".
- **Regression Risks:** Zero.
- **Verification Status:** Confirmed reproducible.

---

### Domain 4 Defects

#### Bug RN-D4-001: Cloud Shared Responsibility Model IAM Governance vs. Infrastructure Nuance
- **Bug ID:** `RN-D4-001`
- **Domain:** Domain 4
- **Objective / Subsection:** 4.3.3 The Shared Responsibility Model
- **Severity:** **P2 (Medium)**
- **Category:** Academic Accuracy & Nuance
- **Exact File & Line:** `content/isc2-cc-2026/reading/domain-4.md` Section 4.3.3
- **Reproduction Steps:**
  1. Open Section 4.3.3 in `domain-4.md`.
  2. Read the Shared Responsibility table and bullet points regarding IAM.
- **Expected Behavior:** Clarify that while the customer is always responsible for *Identity Governance, Account Management, Role Definition, and Access Permissions*, the CSP is responsible for *Physical Directory Server Security, Directory Service Platform Infrastructure, and Authentication Service SLA/Availability* in SaaS/PaaS models.
- **Actual Behavior:** Text states categorically that "IAM is ALWAYS 100% Customer Responsibility" without qualifying governance vs. platform infrastructure.
- **Screenshot / Runtime Evidence:** Audited in `docs/plans/isc2-cc-2026/domain-4-independent-quality-audit.md` (Finding `D4-A01`).
- **Academic / User Impact:** Can confuse students answering exam questions on who manages the physical security and availability of the underlying identity directory in SaaS.
- **Historical Defect Reference:** Task 139 Finding `D4-A01`.
- **Suggested Fix:** Add a concise qualifying sentence to the IAM row in Table 3 of Section 4.3.3 distinguishing Identity Governance from CSP Directory Infrastructure.
- **Regression Risks:** Zero.
- **Verification Status:** Confirmed reproducible.

---

#### Bug RN-D4-002: Wireless Security Evolution Omission of Forward-Looking Wi-Fi 6E/7 Notation
- **Bug ID:** `RN-D4-002`
- **Domain:** Domain 4
- **Objective / Subsection:** 4.1.9 Wireless Security
- **Severity:** **P3 (Low)**
- **Category:** Academic Scope & Completeness
- **Exact File & Line:** `content/isc2-cc-2026/reading/domain-4.md` Section 4.1.9
- **Reproduction Steps:**
  1. Inspect the Wi-Fi standards table in Section 4.1.9.
- **Expected Behavior:** Table includes a forward-looking note that Wi-Fi 6E (6 GHz) and Wi-Fi 7 (802.11be) represent modern advancements beyond core exam scope.
- **Actual Behavior:** Table concludes at Wi-Fi 6 (802.11ax) without forward notes.
- **Screenshot / Runtime Evidence:** Task 139 Finding `D4-A02`.
- **Academic / User Impact:** Minor informational gap.
- **Suggested Fix:** Add an informational note below Table 4 referencing Wi-Fi 6E and Wi-Fi 7.
- **Regression Risks:** Zero.
- **Verification Status:** Confirmed reproducible.

---

#### Bug RN-D4-003: Narrow Desktop Diagram Subtitle Proximity Observation
- **Bug ID:** `RN-D4-003`
- **Domain:** Domain 4
- **Objective / Subsection:** 4.1.3 & 4.3.3 Diagrams
- **Severity:** **P3 (Low)**
- **Category:** Visual & Spacing Polish
- **Exact File & Line:** `js/core/diagram-generator.js` (`osiVsTcpIpModel`, `cloudSharedResponsibility`)
- **Reproduction Steps:**
  1. View `osiVsTcpIpModel` on a 1024×768 desktop viewport with the sidebar expanded.
- **Expected Behavior:** Subtitle text has >= 14px breathing room from the top container edge.
- **Actual Behavior:** Subtitle text sits at ~8px vertical distance from the top card border.
- **Screenshot / Runtime Evidence:** Task 139 Finding `D4-A03`.
- **Academic / User Impact:** Minor visual tightness on narrow desktop screens.
- **Suggested Fix:** Adjust `y` coordinate of subtitle text from `y="38"` to `y="42"` in `diagram-generator.js`.
- **Regression Risks:** Zero.
- **Verification Status:** Confirmed reproducible.

---

### Test Suite Integrity Defects

#### Bug RN-TEST-001: False PASS Blind Spot — Diagram Assertions Do Not Inspect Rendered Font Geometry
- **Bug ID:** `RN-TEST-001`
- **Domain:** Test Automation Infrastructure
- **Objective / Subsection:** `tools/verify-reading-notes-domain1.mjs`, `tools/verify-reading-notes-domain2.mjs`
- **Severity:** **P2 (Medium)**
- **Category:** Test Suite Rigor & False Pass Protection
- **Exact File & Line:** `tools/verify-reading-notes-domain1.mjs` Test 6; `tools/verify-reading-notes-domain2.mjs` Test 6
- **Reproduction Steps:**
  1. Inspect the assertion logic in `tools/verify-reading-notes-domain1.mjs`:
     ```javascript
     assert(html.includes('data-diagram="threatChain"'));
     ```
  2. If `threatChain` SVG text was squished to 3px tall or overlapping, this test still outputs `✓ PASS`.
- **Expected Behavior:** Test suites verifying diagram quality should validate SVG bounding-box geometry (`width > 0`, `height >= 8px`, pairwise overlap = 0) as is done in `tools/verify-domain3-browser.mjs`.
- **Actual Behavior:** Tests only check substring presence, creating a false sense of visual quality.
- **Screenshot / Runtime Evidence:** Directly observed during Task 134 investigation of Section 3.2.8.
- **Academic / User Impact:** Allows visually broken diagrams to ship without failing automated gates.
- **Historical Defect Reference:** H12 (False PASS Tests).
- **Suggested Fix:** Port the bounding-box geometry audit from `verify-domain3-browser.mjs` into `verify-reading-notes-domain1.mjs` and `domain2.mjs`.
- **Regression Risks:** Low.
- **Verification Status:** Confirmed reproducible.

---

#### Bug RN-TEST-002: False PASS Blind Spot — Accordion Tests Check Attribute Without Computed Visibility
- **Bug ID:** `RN-TEST-002`
- **Domain:** Test Automation Infrastructure
- **Objective / Subsection:** `tools/verify-reading-notes-foundation.mjs` Test 5
- **Severity:** **P2 (Medium)**
- **Category:** Test Suite Rigor & False Pass Protection
- **Exact File & Line:** `tools/verify-reading-notes-foundation.mjs:105`
- **Reproduction Steps:**
  1. Inspect `tools/verify-reading-notes-foundation.mjs` Test 5.
  2. It asserts `subTree.hidden === true`.
  3. If author CSS declares `.reading-nav-topics { display: flex !important; }`, `subTree.hidden` remains `true` in HTML, but the element renders at 202px height on screen!
- **Expected Behavior:** Test asserts computed CSS visibility: `getComputedStyle(subTree).display === 'none'`.
- **Actual Behavior:** Test checks only the DOM attribute.
- **Screenshot / Runtime Evidence:** Documented in Task 127 root cause investigation.
- **Academic / User Impact:** Masks accordion collapse CSS regressions.
- **Historical Defect Reference:** D2-Q12, H12.
- **Suggested Fix:** Update `verify-reading-notes-foundation.mjs` to check computed visibility in a real DOM environment.
- **Regression Risks:** Low.
- **Verification Status:** Confirmed reproducible.

