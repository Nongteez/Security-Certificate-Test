# Phase 3C — Tables & Technical Typography Remediation

**Phase 3C Implemented — Pending Human Visual Acceptance**

All 22 current Markdown tables and all 94 Reading Notes subsections were verified in installed Chrome at seven viewports in both themes. The 15 previously reported word-fragmentation ranges were reproduced after Phase 3B.3 and corrected. GRC padded-cell overflow was separately corrected. Educational source wording, values, formulas, anchors and prior corrections are unchanged. Human acceptance remains pending.

Evidence index: [screenshots and capture manifest](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3c/evidence-manifest.json); [visual review record](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3c/visual-review.json).

## Confirmed root causes and production changes

1. Generic table cells inherited `word-break: break-word` / `overflow-wrap: break-word`. Native auto layout could therefore squeeze English words below their intrinsic width. The Reading-only override now uses normal word boundaries, manual hyphenation and native `table-layout: auto` / `min-width: min-content`.
2. Word integrity alone left some Thai explanation columns too narrow. Comparisons with three or more columns receive a **9rem minimum header width**, with native auto layout allocating the remaining space according to content. This is a readability floor, not equal percentages. Two-column tables retain natural sizing. Existing document-hierarchy column roles remain in force.
3. The GRC special case combined fixed percentages, a 780px minimum and a nowrap keyword. Its keyword could exceed the padded final cell. GRC now participates in content-driven sizing with a 9rem floor and wraps phrases at spaces. “Enterprise IT Governance” remains exactly worded and intact as words.
4. The bilingual English cell span's blanket nowrap rule forced some comparison tables unnecessarily wide. It now permits meaningful word/hyphen boundaries within tables. No global paragraph/cell nowrap, nonbreaking-space substitution, font reduction or terminology rewrite was introduced.
5. Risk-card headers reserved badge width while permitting title-word fragmentation. Scoped header wrapping, a yielding title group and normal title word boundaries fix small-phone “Risk Transfer / Sharing”, “Risk Avoidance” and “Risk Acceptance”. Scenario badges similarly stop shrinking below their word width, with headers wrapping when needed.
6. The renderer preserves native `<table>`, `<thead>`, `<tbody>`, `<th scope="col">`, rows and cells. Each existing scroll wrapper receives `role="region"`, `tabindex="0"` and a name derived from its visible column headers. Markup is stripped from that name and quotes/literal ampersands are escaped. Reading-only focus outlines and normal-size native scrollbars support keyboard discovery. No content model or navigation architecture changed.

Production files: [css/reading.css](D:/_Coding/SEC-CERT-TEST/css/reading.css:3733) and [js/core/markdown-parser.js](D:/_Coding/SEC-CERT-TEST/js/core/markdown-parser.js:485). Parser call-site inspection found only Reading loader callers. CSS changes are confined to `.reading-body` descendants. Existing stylesheet bytes outside the inserted Phase 3C block are preserved.

Existing table body/header type sizes (14.72px / 15.04px), 1.65 body line height, 12px × 16px cell padding, all data and all table shapes remain. No source table was converted into cards or given hidden columns.

## Table coverage and finding reconciliation

The 22-table baseline was confirmed from current source; it was not treated as a defect quota. All 15 P3-TBL-001 ranges still had a reproducible fragmented word in at least one required state. P3-TBL-002 was padded GRC overflow, not failed native keyboard scrolling. Seven tables had no reproduced word fragmentation; they were verified without inventing academic or structural defects. The D3 master matrix, for example, already preserved words but inherited overly restrictive phrase nowrap sizing.

Each row below passed 14/14 final display states. Table indexes are zero-based within the domain; dimensions are columns × body rows. Exact headers/cells and source lines are in [table-inventory.json](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3c/table-inventory.json).

| Domain / table | Source anchor | Line | Shape | Baseline word issue | Final |
|---|---|---:|---:|---|---|
| D1 / 0 | topic-1-1-core-concepts | 17 | 3 × 7 | Confirmed | 14/14 pass |
| D1 / 1 | topic-1-1-cia-triad | 134 | 3 × 4 | Confirmed | 14/14 pass |
| D1 / 2 | topic-1-1-authorization-accounting | 232 | 2 × 4 | Confirmed | 14/14 pass |
| D1 / 3 | topic-1-3-document-hierarchy | 675 | 4 × 4 | Not reproduced | 14/14 pass |
| D1 / 4 | topic-1-5-due-care-due-diligence | 930 | 2 × 5 | Not reproduced | 14/14 pass |
| D1 / 5 | topic-1-5-distinctions-scenarios | 1289 | 2 × 23 | Confirmed | 14/14 pass |
| D2 / 0 | topic-2-1-frameworks-standards | 76 | 4 × 3 | Padded GRC overflow | 14/14 pass |
| D2 / 1 | topic-2-1-risk-register | 133 | 3 × 12 | Confirmed | 14/14 pass |
| D2 / 2 | topic-2-2-bc-vs-dr | 220 | 3 × 5 | Confirmed | 14/14 pass |
| D2 / 3 | topic-2-3-social-engineering-techniques | 378 | 3 × 6 | Confirmed | 14/14 pass |
| D2 / 4 | topic-2-4-kpi-vs-kri | 459 | 3 × 4 | Confirmed | 14/14 pass |
| D2 / 5 | topic-2-4-scorecards | 491 | 4 × 4 | Confirmed | 14/14 pass |
| D2 / 6 | topic-2-4-memory-aid | 512 | 4 × 6 | Confirmed | 14/14 pass |
| D3 / 0 | topic-3-1-roles-definition | 78 | 3 × 5 | Confirmed | 14/14 pass |
| D3 / 1 | topic-3-2-polp-vs-sod | 421 | 3 × 4 | Not reproduced | 14/14 pass |
| D3 / 2 | topic-3-2-models-matrix | 605 | 5 × 4 | Not reproduced | 14/14 pass |
| D3 / 3 | topic-3-review-quickref | 787 | 4 × 10 | Not reproduced | 14/14 pass |
| D4 / 0 | topic-4-1-tcp-ip-mapping | 186 | 4 × 4 | Not reproduced | 14/14 pass |
| D4 / 1 | topic-4-1-tcp-vs-udp | 350 | 3 × 6 | Confirmed | 14/14 pass |
| D4 / 2 | topic-4-1-ports-multiplexing | 389 | 4 × 15 | Not reproduced | 14/14 pass |
| D4 / 3 | topic-4-3-hybrid-vs-multicloud | 978 | 3 × 4 | Confirmed | 14/14 pass |
| D4 / 4 | topic-4-review-quickref | 1216 | 4 × 12 | Not reproduced | 14/14 pass |

No English exam keyword, Thai explanation, acronym, punctuation or meaningful hyphen was rewritten. Ordinary breaks at spaces/hyphens are valid; individual unhyphenated words were checked by character-level ranges. Table text was also compared row-by-row against the post-3B.3 baseline in every state.

## Representative before/after measurements

Numbers below are CSS pixels in Light theme; corresponding Dark states also passed. The outer wrapper/article widths are unchanged from Phase 3B.3. Table width may exceed its wrapper intentionally: overflow is contained and the last column is reachable.

### A. Domain 2 — 2.4.8 measurement memory aid

| Viewport width | Wrapper, unchanged | Table before → after | First column before → after | Split English words before → after |
|---:|---:|---:|---:|---:|
| 1920 | 1210.0 | 1208.0 → 1208.0 | 109.6 → 148.3 | 1 → 0 |
| 1366 | 953.0 | 951.0 → 951.0 | 93.5 → 146.6 | 2 → 0 |
| 1024 | 615.0 | 613.0 → 613.0 | 72.4 → 144.2 | 4 → 0 |
| 768 | 704.0 | 702.0 → 702.0 | 78.0 → 144.8 | 4 → 0 |
| 390 | 330.0 | 328.0 → 579.8 | 54.6 → 144.0 | 27 → 0 |
| 375 | 315.0 | 313.0 → 579.8 | 53.7 → 144.0 | 30 → 0 |
| 320 | 260.0 | 258.0 → 579.8 | 50.2 → 144.0 | 48 → 0 |

“Dashboard” and “Scorecard” now stay intact. At phone widths, the table scrolls rather than squeezing four columns into the article. The **01–06 diagram was not edited** or reinterpreted.

Desktop: [before](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3c/before-stable-d2-table6-1366-light-start.png) / [after](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3c/after-stable-d2-table6-1366-light-start.png). Phone: [before](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3c/before-stable-d2-table6-390-dark-start.png) / [after, start](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3c/after-stable-d2-table6-390-dark-start.png) / [after, end](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3c/after-stable-d2-table6-390-dark-end.png).

| Case | Viewport | Table width before → after | Verified outcome |
|---|---:|---:|---|
| GRC frameworks | 1024 | 780.0 → 613.0 | Words intact; all cells fit padded bounds |
| D1 CIA scenario comparison | 390 | 328.0 → 432.0 | Words intact; all cells fit padded bounds |
| D3 access-control master matrix | 1366 | 1004.9 → 951.0 | Words intact; all cells fit padded bounds |
| D3 access-control master matrix | 390 | 1004.9 → 769.6 | Words intact; all cells fit padded bounds |
| D4 TCP/UDP comparison | 390 | 423.0 → 433.1 | Words intact; all cells fit padded bounds |

C — security concepts: [before, phone](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3c/before-stable-d1-table1-390-dark-start.png) / [after, phone](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3c/after-stable-d1-table1-390-dark-start.png) / [after, last columns](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3c/after-stable-d1-table1-390-dark-end.png). Desktop pairs are available for every required width in the capture manifest.

D — access controls: [before, phone](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3c/before-stable-d3-table2-390-dark-start.png) / [after, phone](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3c/after-stable-d3-table2-390-dark-start.png) / [after, last columns](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3c/after-stable-d3-table2-390-dark-end.png). Desktop pairs are available for every required width in the capture manifest.

B — network protocols: [before, phone](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3c/before-stable-d4-table1-390-dark-start.png) / [after, phone](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3c/after-stable-d4-table1-390-dark-start.png) / [after, last columns](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3c/after-stable-d4-table1-390-dark-end.png). Desktop pairs are available for every required width in the capture manifest.


D4 model mapping and service/port tables were also verified. Addressing prose, CIDR/NAT explanations and five native numeric superscripts passed the subsection/Math regression checks; no standalone addressing table was invented. All source values remain byte-identical.

## Chrome, typography and accessibility verification

Chrome executable: `C:\Program Files\Google\Chrome\Application\chrome.exe`; reported Chrome 156.0.0.0. Isolated temporary profiles and a task-local localhost server were used. These are real Chrome browser runs with mobile viewport emulation, not physical-device or cross-browser acceptance.

Viewports: **1920×1080, 1366×768, 1024×768, 768×1024, 390×844, 375×812, 320×568**, each in Light and Dark.

| Domain | Subsections × states | Tables × states | Table checks | Layout/prose checks |
|---|---:|---:|---:|---:|
| 1 | 24 × 14 | 84 | 1048 | 1420 |
| 2 | 29 × 14 | 98 | 1308 | 1686 |
| 3 | 17 × 14 | 56 | 780 | 1014 |
| 4 | 24 × 14 | 70 | 1004 | 1406 |

**9,906 Chrome checks pass**, comprising table checks, full subsection layout/prose checks and **240 actual navigation checks**. No final browser errors were recorded. Full subsection details: [coverage matrix (94 rows)](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3c/coverage-matrix.csv) / [JSON](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3c/coverage-matrix.json).

- All 308 table/display combinations preserve native header scopes, row/column counts, visible cells and logical DOM order. No table-to-card conversion or missing data.
- 16,450 English table-word occurrences measured; zero fragmented words or glyphs beyond padded cell bounds. Thai/English text ranges also remain within cells, without cell-to-cell overlap. Formula rendering reports no errors.
- 126 overflowing table states tested with real Tab/Shift+Tab entry/return, visible focus, native ArrowRight movement and reachable right endpoints. Overflow remains local; no page-level horizontal overflow.
- Computed table text contrast, including bilingual secondary text and GRC emphasis, is at least **4.87:1** across both themes. This is targeted table verification, not a full WCAG or screen-reader certification.
- All 94 subsection heading/width states preserve the Phase 3B.3 shell, article alignment and prose measures. Non-diagram prose word geometry passes. Five D4 numeric superscripts retain native super alignment in all states.
- Real navigation journeys cover every domain, Light/Dark and desktop/mobile: reload location, Resume, explicit deep-link precedence, Back/Forward, v1 progress migration, closed-drawer inertness, Escape and focus return. See [journey results](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3c/navigation-journey-results.json); actual scroll positions are recorded, not only stored state.

Screenshot inspection uses complete passive table captures, both horizontal endpoints where needed, live focus images and fourteen contact sheets covering all 22 tables. Full-sized representative desktop/phone images were inspected in addition to the overview sheets. Human visual acceptance remains pending.

QA method corrections: programmatic focus alone does not establish keyboard modality, so genuine Tab/Shift+Tab input is used. Full-surface capture temporarily suppressed Chrome's desktop scrollbar and reflowed content by 15px, cropping some early export bounds. `capture-probe.json` records that change. The authoritative passive `*-stable-*` captures lock only the body width to its already-measured native width; each context asserts no live-layout change from the QA-only lock and each image verifies unchanged width/height and less than 1px vertical rounding before/after capture (a small border margin protects the complete image). `capture-pinned-probe.json` confirms the export fix. This does not modify production CSS. Earlier exploratory `initial-native-*`, smoke outputs and old focus/capture probes are intermediate evidence. A baseline D4 navigation hit transient `ERR_NETWORK_CHANGED`; only missing states were resumed. Final coverage is complete and the failed attempt remains recorded.

## Automated regressions

**20 suites pass (692 checks)**. The separate historical D1 presentation suite remains **366/370**, with precisely these four pre-existing assertions:

1. Defense in Depth SVG contains Layer 4: Identity & Access.
2. Defense in Depth SVG contains Layer 6: Application & Data.
3. Defense in Depth SVG contains Layer 7: Resilience & Response.
4. Defense in Depth highlights non-chronological complementary defense.

Those assertions were not edited. No newly introduced regression remains. One different Domain 1 parser assertion intentionally changed from an exact bare wrapper tag to requiring the **same wrapper plus named keyboard-region semantics**; native table and all other assertions remain. The new focused suite checks all 22 data structures, native counts/scopes, accessible names, attribute-injection safety and Reading-only CSS scope. Its initial run failed against the missing region attributes before implementation.

| Suite | Passed checks | Exit |
|---|---:|---:|
| verify-reading-critical-readability | 13 | 0 |
| verify-reading-cross-domain-structure | 391 | 0 |
| verify-reading-lead-width | 25 | 0 |
| verify-reading-navigation | 15 | 0 |
| verify-reading-notes-dom-integrity | 36 | 0 |
| verify-reading-notes-domain1-presentation | 366 | 1 |
| verify-reading-notes-domain1 | 10 | 0 |
| verify-reading-notes-domain2 | 9 | 0 |
| verify-reading-notes-domain3 | 10 | 0 |
| verify-reading-notes-domain4 | 10 | 0 |
| verify-reading-notes-fluid-layout-and-dividers | 25 | 0 |
| verify-reading-notes-foundation | 9 | 0 |
| verify-reading-notes-rendering-quality | 5 | 0 |
| verify-reading-persistence | 20 | 0 |
| verify-reading-structure-pilot | 13 | 0 |
| verify-text-alignment-and-reading-width | 23 | 0 |
| verify-document-hierarchy-remediation | 8 | 0 |
| reading-notes-phase1b-batch-a | 23 | 0 |
| reading-notes-phase1b-batch-b | 33 | 0 |
| verify-reading-layout-width | 9 | 0 |
| verify-reading-tables-typography | 5 | 0 |


Full logs: [regression-results.json](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3c/regression-results.json). This includes Phase 3B.2's 391 checks, Phase 3B.1 pilots, Phase 3B.3 widths, Phase 3A.2 readability, Markdown/Math/DOM, navigation/persistence and both academic batches (23 + 33 tests).

## Preservation and exact changed files

The starting tree was dirty. Preservation is measured against the **Phase 3C starting filesystem**, not attributed from the overall Git diff. Of 26,004 baseline files, 26,000 are byte-identical; the four deliberate existing-file changes are:

| File | Phase 3C delta |
|---|---|
| css/reading.css | One inserted Reading-only table/technical-typography block; existing bytes retained |
| js/core/markdown-parser.js | Scroll-wrapper region name/focus attributes; no cell data or other parse behavior changed |
| tools/verify-reading-notes-domain1.mjs | One strengthened wrapper assertion for the intended semantics |
| docs/plans/task.md | One appended Phase 3C row; earlier tracker bytes retained |

New deliverables: this report, `tools/verify-reading-tables-typography.mjs`, and the exact file inventory under `artifacts/qa/reading-notes-phase3c/`. [Changed-file manifest](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3c/changed-files.json) lists every added QA file; [implementation delta](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3c/implementation-delta.patch) isolates this phase from prior dirty-tree work. [Preservation results](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3c/preservation.json) and [starting hashes](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3c/baseline-hashes.json) provide the evidence.

All four current Reading Markdown files are **byte-identical** to phase start, preserving educational wording, table data, formulas, numbers, anchors, bilingual terminology and academic Batch A/B corrections. All eight original course-note files, diagram generator, Phase 3B.1/3B.2 source and CSS, Phase 3B.3 width/privacy grouping, Learning Slides (including the four concurrent GRC files), Quiz, Question Banks, Vocabulary, Domain 5 and unrelated UI/routing/test work are preserved. No baseline file was deleted. No stage, commit, push, reset, revert or clean was run.

## Remaining Phase 3D–3F work and limitations

- **3D:** diagram conceptual relationships, numbered measurement hierarchy, arrows and control/containment semantics remain separate work. No 01–06 reinterpretation was implemented.
- **3E:** the measurement diagram's mobile HTML fallback still fragments REPORT / METRIC and associated action words at 320px in both themes (12 recorded occurrences). These are inside the explicitly deferred diagram, not table or prose failures; see `derived-verification.json` / `initial-d2-prose-failures.json`. Diagram scale, internal label placement, contrast and whitespace remain future work.
- **3F:** human visual/academic acceptance, physical-device/cross-browser and assistive-technology acceptance remain pending. The pre-existing floating scroll control can occlude a lower-right viewport corner; this inherited UI concern remains separately tracked rather than changing unrelated navigation UI here.
- The four historical D1 diagram assertions remain open. This phase makes no claim that those diagram issues or overall course acceptance are complete.

No Phase 3D implementation was started. There are no unresolved newly introduced **in-scope** table/technical-typography defects from this phase.
