# Phase 3E — Diagram Legibility & Space Utilization

**Phase 3E Complete — Phase 3F may begin.** Human visual/academic acceptance remains pending. Verified 2 November 2026, Asia/Bangkok.

## Root causes and implementation

Current Chrome probing reproduced 760–860px SVG caps and viewport-only switching. At 1920px, the old visible labels were roughly 8.14–12.85px; constrained desktop layouts were smaller. The article had available width that the SVG cap did not use. The inherited mobile alternatives already preserve richer explanations but previously appeared only below 768px.

Production CSS now names each diagram an inline-size container, removes the artificial SVG cap, and uses nineteen per-diagram container thresholds computed from actual minimum font size/viewBox width. SVGs retain aspect ratio and appear only when their label budget is met; otherwise the existing semantic HTML alternative reflows. The 14px instructional-label budget is a project readability target, **not an invented WCAG minimum font size**. Native diagram labels are 15–16px. No page-level horizontal scrolling or stretched aspect ratios were introduced.

Cloud legend clipping is fixed by restoring a suitably bounded 10.5-unit legend font; at the wide rendered scale it exceeds 14px. Both legend labels fit their SVG and remain paired with their colors. Blue/green/purple/red white-on-color badges use darker paints; normal SVG support labels use readable theme text. CSS var-blue badges had 3.48:1 contrast in Dark; they now use a stable darker blue. Labels still identify responsibility, so color is supplementary.

Measured spacing defects also corrected: SLE description/formula and AV/EF/ARO lines, five-part risk-cycle captions, RTO/RPO lower captions, and NIST facet footnotes. These are geometry changes only; formulas, numeric examples, genuine cycles and timelines are unchanged. Native recovery labels were enlarged and their columns can wrap safely.

The reflowed OSI view now explicitly contains all seven original layer labels and their original details. NIST reference identifiers, DMZ service/port labels and four cloud model examples/labels were carried from the unmodified SVG into their corresponding native cards. This avoids losing information when the responsive representation changes. `representation-parity.json` records their original source labels. No existing diagram definition was removed.

## Mandatory cases

- A Cloud: legend bounds and white-on-responsibility contrast pass in both themes; native counterparts preserve labels and examples.
- B Measurement at 320px: REPORT/METRIC and all other six categories remain whole and readable. Phase 3D had already removed the old fragmented tier layout; this phase verifies that fix rather than recreating it. The local-study-aid and no-official-procedure qualifications remain.
- C Defense in Depth: wide SVG uses the article width; constrained views use the complete readable seven-group alternative. Five/seven group variants remain examples, never chronological workflows or guarantees.
- D Control functions: five distinct semantic cards, no sequence arrows; original overlap explanation and examples remain.
- E JML: optional/repeatable Mover and continuous governance remain visible on desktop and phone.
- F OSI: all seven original layers are explicit in native reflow, with the four-layer correspondence below; no packet-flow interpretation is introduced.

## Full diagram matrix

Each row has fourteen current Chrome observations: seven required viewports in both themes. The machine-readable matrix retains exact source anchors and semantic classification from Phase 3D.

| D | Diagram | Min label px | Min contrast | SVG / HTML states | Result |
|---|---|---:|---:|---:|---|
| 1 | `threatChain` | 15.00 | 14.43:1 | 2 / 12 | Pass |
| 1 | `ciaTriad` | 15.00 | 14.85:1 | 2 / 12 | Pass |
| 1 | `loadBalancer` | 15.00 | 14.03:1 | 4 / 10 | Pass |
| 1 | `aaaLifecycle` | 15.50 | 16.27:1 | 0 / 14 | Pass |
| 1 | `privacyFlow` | 15.00 | 14.03:1 | 2 / 12 | Pass |
| 1 | `defenseInDepth` | 15.00 | 12.90:1 | 2 / 12 | Pass |
| 1 | `riskCalculationFlow` | 14.42 | 14.03:1 | 4 / 10 | Pass |
| 1 | `riskLifecycle` | 15.00 | 13.98:1 | 2 / 12 | Pass |
| 1 | `documentHierarchy` | 14.84 | 14.85:1 | 2 / 12 | Pass |
| 1 | `controlTimeline` | 15.50 | 5.17:1 | 0 / 14 | Pass |
| 1 | `dueCareDiligence` | 15.00 | 14.03:1 | 2 / 12 | Pass |
| 1 | `ethicsCanons` | 15.00 | 13.63:1 | 2 / 12 | Pass |
| 2 | `grcAlignment` | 15.00 | 6.74:1 | 2 / 12 | Pass |
| 2 | `bcVsDrScope` | 15.50 | 16.27:1 | 0 / 14 | Pass |
| 2 | `rtoRpoTimeline` | 15.00 | 7.58:1 | 2 / 12 | Pass |
| 2 | `effectivenessHierarchy` | 15.50 | 16.27:1 | 0 / 14 | Pass |
| 3 | `iamLifecycle` | 15.50 | 16.27:1 | 0 / 14 | Pass |
| 3 | `nistSp80063Framework` | 14.50 | 6.70:1 | 2 / 12 | Pass |
| 3 | `leastPrivilegeVsSod` | 14.50 | 6.70:1 | 2 / 12 | Pass |
| 3 | `accessControlModels` | 15.00 | 5.48:1 | 2 / 12 | Pass |
| 4 | `osiVsTcpIpModel` | 15.00 | 14.85:1 | 0 / 14 | Pass |
| 4 | `dmzFirewallArchitecture` | 15.00 | 14.85:1 | 0 / 14 | Pass |
| 4 | `defenseInDepthLayers` | 15.00 | 4.76:1 | 2 / 12 | Pass |
| 4 | `cloudSharedResponsibility` | 14.50 | 5.48:1 | 2 / 12 | Pass |

## Browser, screenshots and accessibility

Installed real Chrome 156.0.8078.74/CDP: **4,138 checks, zero failures/errors**, all **336 diagram states**, **1,316 subsection anchors**, **308 table states**. Viewports: 1920×1080, 1366×768, 1024×768, 768×1024, 390×844, 375×812, 320×568; Light and Dark. Minimum instructional font: **14.42px**; minimum measured label contrast: **4.76:1**. Current bounds, native word integrity, model relationships, table headers/words and Reading width pass. Visible SVG text intersection checks use transformed screen coordinates, not untransformed `getBBox` when CSS translations apply.

**96 final component PNGs** cover all 24 diagrams at representative wide, desktop and narrow configurations. Four full-inventory contact sheets were actually inspected, supplemented by native-resolution Cloud, measurement 320, DMZ, OSI, JML and defense images. Before images reuse Phase 3D final PNGs only after baseline SHA equality was verified; fresh current baseline size/clipping observations are in `before-probe.json`. `before-evidence.json` links the original captures without overwriting them. Contact thumbnails support structure, not reading tiny glyphs; native samples and font/word measurements supply that check. Screenshot export preserves measured native width and checks stable capture geometry.

Native sections/headings/lists and selectable text remain. SVGs keep image names; reflow alternatives keep meaningful content order and descriptions. Mover is indicated in words as well as border style. No new interaction or tab stops. This is scoped browser accessibility verification, not a screen-reader application certification. [W3C contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) supports the 4.5:1 normal-text threshold; [W3C reflow guidance](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) supports preserving information and functionality in narrow layouts. No full WCAG conformance claim is made.

## Regressions and preservation

**23 suites / 1,082 checks pass.** Six focused legibility checks include a witnessed failing initial run and a separate failing representation-parity check before its fix. No old regression was suppressed. Three regressions exposed production issues: an unnecessary HTML comment and appending new CSS after marker-bounded prior-phase blocks. The comment was removed and Phase 3E CSS inserted before the prior Phase 3B.2 block; existing tests were unchanged and passed.

One existing Phase 3D byte-preservation assertion was deliberately refined only for NIST/cloud: remove the explicit additive source-label paragraphs before comparing all original markup bytes. The new focused suite similarly proves all 24 old payloads equal their old strings after removing only documented additions. This is an additive accessibility representation change, not permission to alter old definitions, arrows or qualifiers. The four historical Domain 1 assertion resolutions remain unchanged and pass.

Baseline: **28,280 files**, **28,276 byte-preserved**, four authorized existing-file changes, no deletion/unexpected edit. All Reading Markdown, eight original notes, parser/navigation code, Learning Slides, Quiz, Vocabulary, question banks and earlier evidence remain unchanged. Removing only the marked Phase 3E CSS block reproduces the exact starting CSS bytes. No Git mutations.

Existing files changed: `css/reading.css`, `js/core/diagram-generator.js`, `tools/verify-reading-diagram-semantics.mjs`, own appended `docs/plans/task.md` row. New test: `tools/verify-reading-diagram-legibility.mjs`; this report and task QA files are new. See `changed-files.json` for exact paths/hashes and `implementation-delta.patch` for the phase delta.

## Phase 3E exit gate

All 24 reviewed; known clipping resolved; 320px labels verified; no semantic regression; current browser matrix passes; automated suites pass; preservation and evidence/report saved. Phase 3F is authorized to begin.

Remaining Phase 3F work: full current 94-subsection QA; inherited floating-control occlusion; language metadata/keyboard/accessibility integration; ethics-precedence provenance and neutral exception wording if unresolved; current navigation/progress journeys; final regression/preservation and human acceptance package. These are not Phase 3E success claims.

## Evidence

- [coverage-matrix.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3e/coverage-matrix.json>)
- [summary.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3e/summary.json>)
- [before-probe.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3e/before-probe.json>)
- [before-evidence.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3e/before-evidence.json>)
- [label-budgets.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3e/label-budgets.json>)
- [representation-parity.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3e/representation-parity.json>)
- [regression-results.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3e/regression-results.json>)
- [preservation.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3e/preservation.json>)
- [changed-files.json](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3e/changed-files.json>)
- [implementation-delta.patch](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3e/implementation-delta.patch>)
- [Chrome Domain 1](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3e/after-d1.json>)
- [Chrome Domain 2](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3e/after-d2.json>)
- [Chrome Domain 3](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3e/after-d3.json>)
- [Chrome Domain 4](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3e/after-d4.json>)
