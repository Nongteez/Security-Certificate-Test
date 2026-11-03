# Reading Notes — Final Acceptance Summary

**Phase 3F Complete — Pending Human Acceptance**

Prepared 2 November 2026, Asia/Bangkok. Implementation and engineering QA for Domains 1–4 are ready for human review. The project is **not fully accepted**. Ethics provenance and two historical test suites remain explicit exceptions.

## What changed across Phase 3A–3F

| Original issue | Implemented resolution / evidence |
|---|---|
| P3-VS-001 BC/DR nesting | Distinct coordinated scopes; exact bilingual titles/examples retained (3D). |
| P3-VS-002 measurement hierarchy | Six local study-aid concepts grouped by purpose; no official six-step procedure (3D); readable at 320px (3E/F). |
| P3-TBL-001 fragmented terms | Content-driven columns, intact words, natural cell wrapping and native scroll regions (3C; current 3F). |
| P3-DIA-001 tiny SVG labels | Article-width SVG plus per-diagram reflow thresholds and complete native alternatives (3E; current 3F). |
| P3-TXT-001 weak groups / rhythm | Semantic subheadings, grouped definitions and scoped rhythm across all 94 ranges (3B.1/3B.2). |
| P3-SEM-001 OSI titles | Proper semantic source headings (3B); explicit seven-layer reflow and model correspondence (3D/E). |
| P3-SEM-002 compulsory Mover | Optional/repeatable Mover and continuous governance (3D). |
| P3-SEM-003 control workflow | Five complementary function cards, no mandatory sequence (3D). |
| P3-DIA-002 cloud clipping | Bounded legend, readable sizing/contrast and complete native examples (3E/F). |
| P3-TBL-002 GRC cell spill | Padded-cell/column sizing corrected; current table keyboard checks pass (3C/F). |
| P3-ACC-001 faint labels | Correct DMZ paints (3A.2), table contrast (3C), diagram contrast (3E), remaining instructional labels (3F). |
| P3-ACC-002 wrong inherited language | Thai Reading body / English block metadata (3F); native voice acceptance pending. |
| P3-TXT-002 raw currency escape | Five targeted escapes and literal-note fix, preserved by current fidelity/Math tests (3A.2/F). |
| Additional space-use concern | Wider Reading shell and context-aware prose/definition widths (3B.3). |
| Additional semantics | Ongoing Accounting, qualified DMZ zones, causal threat/control example, GRC coordination and conditional privacy consent (3D). |
| Inherited floating-control occlusion | Existing visible control moved into the outer gutter with keyboard focus/activation preserved (3F). |

The thirteen original root causes have engineering remediations verified in current scope. This table does not close D1-N08 or grant human academic/visual acceptance.

## Final production architecture

The existing Markdown parser renders native headings, lists, Math and accessible tables. Static diagram registry entries retain accurate SVG architectures or selectable semantic HTML. Reading-scoped container queries choose reflow when an SVG would undersize its labels; no responsive observer or new dependency was added. Native table regions retain contained horizontal scrolling. Existing navigation/history and `sec_cert_reading_progress_v1` position/anchor persistence remain intact. A Reading-only DOM metadata pass annotates language without rewriting content.

## Current final QA

| Coverage | Result |
|---|---|
| Subsections | **94/94** (D1 24, D2 29, D3 17, D4 24), **1,316 current states** |
| Diagrams | **24/24**, **336 current states**, minimum instructional labels 14.42px |
| Tables | **22/22**, **308 current states**, scoped headers/keyboard focus/scroll |
| Browser matrix | Seven required viewports × Light/Dark; **6,588 checks pass** |
| Actual navigation | **920 checks pass**, including legacy global-only v1 records |
| Native keyboard control | **168 checks pass** across all 56 cases |
| Occlusion/language reproduction | **24 checks pass**; 11/12 before overlaps become 0/12 |
| Browser total | **7,700 final checks pass**, no final browser-matrix failures |
| Automated sweep | **26/28 suites pass**, **1,456 passing checks in green suites**; two baseline exceptions remain |

Current QA was rerun after implementation; historical phase totals are not substituted for final coverage. Counts overlap in subject matter. Representative PNGs were actually inspected. Browser emulation and automated accessibility checks do not certify every physical device, browser or native screen reader.

## Academic and accessibility status

Original eight notes, prior academic corrections, formulas/numbers, examples, terminology and anchors are preserved. The only master-task academic-wording change is the exact neutral ethics clarification authorized for an unresolved case. All four canons and the mnemonic remain.

**D1-N08 is still unresolved:** primary public material and original notes do not verify a universal current-course conflict algorithm; their silence does not prove historical precedence teaching false. The protected Question Bank still teaches highest/strict priority. Human academic review must reconcile that interpretation using authorized evidence. Neither the Question Bank nor original notes were modified.

The two historical red suites are `verify-domain2-math-symbols.mjs` (three obsolete wording/relationship expectations) and `verify-bilingual-table-cells.mjs` (25 expected versus 27 existing cells). Same failures were reproduced against the saved baseline. They were not edited or hidden. No new regression remains.

Current headings/AX names, language metadata, text contrast, keyboard focus/exit, table scroll, mobile inertness/Escape and non-obscuring controls pass targeted checks. Human visual preference, narrow gutter touch comfort and native assistive-technology acceptance remain pending. No full WCAG conformance claim is made.

## Exact production inventory and preservation

This master task changed **four production files**:

- [css/reading.css](<D:/_Coding/SEC-CERT-TEST/css/reading.css>): Marked E/F Reading-only diagram legibility, contrast, gutter, focus and safe bottom spacing blocks.
- [js/core/diagram-generator.js](<D:/_Coding/SEC-CERT-TEST/js/core/diagram-generator.js>): Additive OSI/NIST/DMZ/cloud native labels; bounded neutral ethics clarification. Existing diagram keys and other relationships retained.
- [js/ui/screen-reading.js](<D:/_Coding/SEC-CERT-TEST/js/ui/screen-reading.js>): Published-Reading language metadata function and call only; no storage/history/router change.
- [content/isc2-cc-2026/reading/domain-1.md](<D:/_Coding/SEC-CERT-TEST/content/isc2-cc-2026/reading/domain-1.md>): Only neutral ethics subsection wording/badges; original four canon duties and mnemonic retained.

The cumulative current uncommitted Reading production set across the earlier phases also includes `content/isc2-cc-2026/reading/domain-2.md`, `domain-3.md`, `domain-4.md` and `js/core/markdown-parser.js` — **eight Reading production paths in total**. Those earlier changes were preserved, not reimplemented. Concurrent Learning Slides files in the wider dirty tree are not attributed to this task. Exact phase-start/current hashes and the isolated master delta are in the manifest.

Master baseline **28,280 files**: **28,271 byte-preserved**, 9 intentional existing-file changes including tests/tracker, no missing or unexpected changes. All original course notes and unrelated/concurrent modules are preserved. No Git mutations or deployment.

## Human acceptance checklist

- [ ] Open the current application; review both themes at 1920, 1366, 1024, 768, 390, 375 and 320 widths.
- [ ] Compare the cloud legend, measurement at 320, optional Mover, DiD groups, control functions, seven OSI layers, and DMZ service labels with the evidence.
- [ ] Use Tab/Shift+Tab, Escape and table ArrowRight; test reload, Resume, Back/Forward and the gutter's top/bottom actions.
- [ ] Review and accept/request changes to the neutral ethics wording; separately settle authorized-course precedence and Question Bank consistency.
- [ ] Acknowledge the two unchanged historical test exceptions and decide on follow-up assertion maintenance.
- [ ] Complete native voice/physical-device review as required; explicitly record visual and academic acceptance. No checkbox is approved by this package.

## Reports and evidence

- [3A audit](<D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/reading-notes-phase3a-presentation-audit.md>)
- [3A.1 source fidelity](<D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/reading-notes-phase3a1-source-fidelity-and-visual-audit.md>)
- [3A.2 fixes](<D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/reading-notes-phase3a2-critical-readability-fixes.md>)
- [3B.1 pilot](<D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/reading-notes-phase3b1-semantic-structure-pilot.md>)
- [3B.2 cross-domain structure](<D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/reading-notes-phase3b2-cross-domain-implementation.md>)
- [3B.3 widths](<D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/reading-notes-phase3b3-layout-width-remediation.md>)
- [3C tables](<D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/reading-notes-phase3c-tables-typography-remediation.md>)
- [3D semantics](<D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/reading-notes-phase3d-diagram-semantics-remediation.md>)
- [3E legibility](<D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/reading-notes-phase3e-diagram-legibility-remediation.md>)
- [3F current final QA](<D:/_Coding/SEC-CERT-TEST/docs/plans/isc2-cc-2026/reading-notes-phase3f-final-regression-and-acceptance.md>)
- [Final browser evidence](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/evidence-manifest.json>)
- [Complete 94-subsection matrix](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/subsection-coverage.json>)
- [Exact changed-file hashes](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/changed-files.json>)
- [Preservation proof](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/preservation.json>)
- [Open academic exception](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/academic-exception.json>)
- [Baseline test exceptions](<D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3f/historical-regressions.json>)
