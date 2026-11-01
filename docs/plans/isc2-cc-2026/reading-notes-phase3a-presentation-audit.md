# Phase 3A — Educational presentation and visual semantics audit

**Phase 3A Educational Presentation Audit Complete — Pending Human Review**

Date: 2026-11-01 (Asia/Bangkok). Repository: `D:\_Coding\SEC-CERT-TEST`. This was an audit-only review. No production file, educational content, academic correction, CSS, renderer, navigation/progress code, original learning notes or existing test was edited. Human Review and Human Acceptance remain pending.

## Outcome

**94/94 subsections accounted for and source-structure reviewed; 1,316/1,316 rendered subsection/configuration inspections recorded.** Counts match the current repository: Domain 1 24, Domain 2 29, Domain 3 17, Domain 4 24. These include local review subsections and are not 94 official ISC2 objectives. All fourteen official objective sections remain represented. The user-reported JML location is currently **3.1.1**, not 3.4.1.

The audit confirms **13 deduplicated presentation root causes: P0 0, P1 2, P2 10, P3 1**. These are presentation/visual-semantic findings, not thirteen new factual errors. Two P1 families are severely fragmented narrow tables and instructional SVG labels scaled to approximately 5.6–7 px at 1024 px. Repeated occurrences count once per root cause. Qualified design concerns, acceptable simplifications and unresolved assistive-technology questions are separate.

The textbook's educational depth is valuable. Most explanations, worked examples, meaningful comparisons and scenario rationales should remain. The recommendations improve source grouping, actual legibility and the accuracy of visual relationships. They do not prescribe shorter lessons, a new design system or universal cards.

The [findings register](reading-notes-phase3a-findings-register.md) contains source locations, evidence, origin, severity, confidence, remediation layers, recommendations and qualifications. The [coverage matrix](reading-notes-phase3a-coverage-matrix.md) lists all 94 reviewed ranges and findings. The [roadmap](reading-notes-phase3a-remediation-roadmap.md) proposes small implementation batches without authorizing them.

## Six mandatory cases

| User ID | Current location | Verified disposition |
|---|---|---|
| P3-VS-001 | D2 / 2.2.5, `topic-2-2-bc-vs-dr` | P2: nested BC/DR/example panels and control-like scope labels obscure emphasis. BC/DR containment itself is an acceptable introductory scope model. Preserve the corrected DR translation and technology-recovery relationship; do not infer a universal formal subset claim. |
| P3-VS-002 | D2 / 2.4.8, `topic-2-4-memory-aid` | P2: numbered tiers, 01 at the bottom, reversed mobile order and “6-Part Framework” accessible name compete with corrected non-mandatory prose. Group measures/indicators separately from communication forms. No evidence that current prose expressly claims an official ISC2 six-step framework. |
| P3-TBL-001 | D2 / 2.4.8 trigger matrix | P1 family: Dashboard/Scorecard split even wide; phone columns fragment ordinary terms severely. Same root cause appears in 15 subsection ranges, including social-engineering and domain-review tables. No `break-all` or font-shrink recommendation. |
| P3-DIA-001 | D3 / **3.1.1**, `topic-3-1-jml-lifecycle` | P1 family: JML caps at 760 px in an 867 px wrapper; minimum text 9.95 px at 1366 and 6.88 px at 1024. Governance is small and faint. All 24 diagram payloads show the scaling family at constrained desktop widths. Optional Mover semantics are a separate P2, P3-SEM-002. |
| P3-TXT-001 | D4 / 4.1.1, `topic-4-1-fundamentals-topologies` | P2: Network Scope, collision/broadcast and architectural reach are ordinary paragraphs, with weak group hierarchy and list proximity. Source structure needs a pilot, not a global list-margin change or deletion of definitions. |
| P3-SEM-001 | D4 / 4.1.2, `topic-4-1-osi-model` | P2: “1. Layer 7” through “7. Layer 1” are ordered-list labels, not headings. Preserve nested details and promote layer titles semantically. Layer numbering and mnemonic direction are already correct; the parser is not flattening this list. |

Each case has direct full-component/range captures in Light/Dark at representative desktop 1366 and mobile 390 widths, plus additional 1024 evidence. P3-VS-002 and P3-TBL-001 have separate diagram/table images. Look up their IDs in `focused-results.json` and the screenshot manifest.

## Method and evidence boundaries

1. Read the required task, independent audit/register/roadmap, academic verification and A/B/Phase 2 implementation context; inspect the current Markdown, structural components, parser, diagram registry, related CSS and current reader. `context-review.json` records sources and hashes. Prior “unresolved” labels were leads, not proof.
2. Capture initial HEAD, dirty Git status and SHA-256 values for **21,342 existing files**, including all prior Phase 2 evidence, previous academic work, original notes and protected modules. The current working tree, rather than HEAD's older content, is the implementation baseline.
3. Build exact source ledgers for 94 ranges. Domain 1 uses separate anchors plus Markdown h3 headings; Domains 2–4 use explicit HTML h3 IDs. This distinction was accounted for instead of treating Domain 1 as missing. Review actual nested lists, real heading levels, source group labels, tables and all 24 invoked diagram payloads.
4. Serve the unchanged repository in **real Chrome 156.0.8078.74 on Windows**, headless with native layout/keyboard/accessibility APIs through CDP and an isolated temporary profile. No normal user profile/progress was used.
5. At seven viewports × two themes × four domains, measure every range and every table/diagram in it: text transformation, bounding boxes, column allocation, word line breaks, scroll/client dimensions, heading/list margins, active representation, clipping and language. Capture one real viewport image per range/configuration, plus feature images. Font readiness and settled theme transitions precede measurements.
6. Review all subsection contact sheets at 1366/390 in both themes, additional contact sheets sampling every other viewport, full-size mandatory-case images and selected repeated defects. Source/whole-range DOM/feature inspection covers content below the heading viewport. This is not a claim of manual pixel-by-pixel review of every screenshot or manual rereading of every sentence at fourteen widths.
7. Perform additional full-component captures, actual theme-color/paint contrast calculations, native scroll-container keyboard checks, 200%-equivalent reflow and forced-KaTeX-unavailable metadata inspection. Keep unsupported inferences out of confirmed counts.

The official outline lists curriculum topics, not these locally numbered graphics. Its 2.4 and 3.1 objectives were checked directly. The scope/relationship judgments do not invent a new official measurement or IAM workflow. [Official ISC2 CC outline, effective September 1, 2026](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf).

Programmatic structure was evaluated against the principles of [WCAG information and relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html), theme-specific normal-text ratios against [contrast requirements](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), and long Thai passages against [language-of-parts guidance and its technical-term exceptions](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html). This audit does not claim full WCAG conformance certification.

## Measurements and systemic patterns

| Evidence | Current measured behavior | Interpretation |
|---|---|---|
| Desktop/tablet SVG scaling | At 1024, smallest instructional labels: D1 6.72 px; D2/D3 6.56 px; D4 5.62 px. 24 payloads in 23 ranges. | Component width, viewBox/font proportions and breakpoint matter more than authored font-size alone. |
| JML space | 840×220 viewBox; 760×199 px SVG in an 867 px wrapper at 1366. At 1024, 525×137.5 px. | Available wide space is underused and constrained desktop becomes unreadable. A small maximum-width increase alone cannot solve the narrow case. |
| Measurement table | At 1366, 915 px table with ~91 px first column. At 390, 328 px table with ~55 px first column; at 320, 258 px table with ~50 px first column. | Generic auto layout plus break-word creates fragments rather than readable terms. |
| GRC exception | 780 px table, 791 px scroll width. Last keyword extends 11.08 px beyond the final cell at 1024/390 in both themes. | A nowrap special case still fails padded-cell geometry. |
| Cloud legend | CSP text extends 34.07 px beyond SVG at 1920/1366 and 23.96 px at 1024, with SVG overflow hidden. | No page overflow does not mean no clipped instructional content. |
| Governance contrast | JML strip: 2.89:1 Light, 3.87:1 Dark. Dark Joiner badge: 3.48:1; Light badge passes at 5.17:1. | Fix actual foreground/background pairs, not every theme/color indiscriminately. |
| Scenario answer label | 11.5 px green on white: 2.54:1. Dark counterpart: 7.30:1. | Shared labels need theme-specific treatment; the whole answer explanation is not claimed unreadable. |
| Network group labels | Ordinary prose at 15.5 px / 27.9 px line height, 0 px top and 16 px bottom margins, followed by p+list negative proximity rule. | Meaningful group transitions need semantic structure and selective rhythm. |
| Language | All 94 ranges inherit document `lang=en`, without language-of-parts attributes. | Long Thai instructional passages need Reading-local language metadata. |

Other confirmed patterns include a compulsory-looking JML path; arrows between overlapping control functions; and a visible currency escape in the D1 Asset Value example. These have separate evidence and bounded recommendations in the register.

The all-diagram ledger reviews what each asset teaches and whether its relationship is causal, comparative, hierarchical, temporal, conditional or illustrative. Calculations and recovery timelines have valid dependencies/time direction. Three GRC functions, four access-control models, five cloud characteristics and four ethics canons are not automatically false workflows merely because they are enumerated. Diagrams should remain only where they teach a relationship more clearly than the accompanying text.

## Browser coverage and accessibility outcomes

| Viewport | Domains / themes | Range inspections |
|---|---|---:|
| 1920×1080 | 1–4; Light/Dark | 188 |
| 1366×768 | 1–4; Light/Dark | 188 |
| 1024×768 | 1–4; Light/Dark | 188 |
| 768×1024 | 1–4; Light/Dark | 188 |
| 390×844 | 1–4; Light/Dark | 188 |
| 375×812 | 1–4; Light/Dark | 188 |
| 320×568 | 1–4; Light/Dark | 188 |
| **Total** | **56 domain/theme/viewport configurations** | **1,316** |

The current corpus has **22 rendered tables and 24 diagram payloads** in the audited source ranges. All recorded table headers have `scope="col"`. All 56 configurations have contained document width and no missing range anchors. That does not negate cell fragmentation or clipped SVG contents. Native Chrome focus plus ArrowRight scrolls the GRC wrapper 40 px in both themes; no blanket keyboard-inaccessible-table finding is justified.

At ≤768 px, HTML diagram alternatives are visible instead of desktop SVGs. These were inspected separately for numbered flows, wording, grouping and reflow. Primary categories generally also have textual labels; no universal color-alone failure is established. SVGs have accessible names and adjacent explanatory prose; a full alternative-equivalence/AT reading test remains a human review item, not a blanket assertion that every diagram lacks alternatives.

Additional reflow evidence uses a 683×384 CSS viewport at scale 2 to represent the available layout of a 1366×768 viewport at 200% zoom. All four domains/both themes remain document-contained. This is emulation of effective layout width, not native browser-menu zoom or a complete resize-text conformance test. The required 320 px cases also exercise narrow reflow; necessary two-dimensional table scrolling is permitted by [WCAG reflow guidance](https://www.w3.org/WAI/WCAG21/Understanding/reflow).

Audit scripts recorded zero runtime exceptions in the completed main/focused/supplement/gap runs. A QA color-parser escape was corrected before the focused results were accepted; that was a test-script issue, not a product defect. The initial Python contact-sheet attempt required unavailable Pillow; the completed PowerShell/System.Drawing path generated all 56 sheets. Neither workaround changed production files.

## Earlier work and false-positive control

Phase 1A's classifications and the A/B corrections remain the baseline. Metric/KPI/KRI definitions, DR translation, cloud accountability/operation qualifications, sockets and other corrected academic details were not declared unfixed simply because their diagrams still have presentation issues. Old navigation findings RN-I-003/004/005/006 were addressed by Phase 2 and are not reintroduced here. No new navigation/progress implementation was performed or recommended as part of Phase 3A.

P3-Q records separately retain: optional shared-asset/layer visualization improvements; raw LaTeX in forced fallback accessible names whose spoken impact needs AT testing; acceptable numbered enumerations and genuine procedures; shared-selector/content-sniffing maintenance risks without proof of unrelated UI failure; unsupported overbroad claims; and a bounded academic wording lead. These are excluded from the thirteen confirmed-root counts.

## Regression and preservation

Read-only regression commands saved in `test-results.json`: academic Batch A **23/23**, Batch B **33/33**, navigation **15/15** pass. Historical presentation suite **366/370** passes with the same four known diagram-string assertions already documented in Phase 2. Thus **437 passed, four pre-existing failures** across these runs; the entire test set is not claimed green. No tests were edited or weakened.

The final protected-file check rehashes all 21,342 baseline files. **Zero baseline files changed.** This includes all eight original learning notes, academic content/diagrams/component strings and prior reports/evidence, Phase 2 runtime/tests/evidence, Learning Slides, Quiz/Question Banks, Vocabulary, Domain 5, unrelated CSS, router/state/UI and shared Markdown code. HEAD is unchanged and the staged diff remains empty. The final Git status adds only the four reports and Phase 3A QA directory. No concurrent same-file conflict or unrelated new edit was detected. See `preservation.json` for exact checks and hashes.

## Deliverables and evidence manifest

Exactly four new report files under `docs/plans/isc2-cc-2026/`:

1. `reading-notes-phase3a-presentation-audit.md` — this synthesis and scope/limitations.
2. `reading-notes-phase3a-findings-register.md` — thirteen confirmed findings, six mandatory IDs and separate qualified concerns.
3. `reading-notes-phase3a-remediation-roadmap.md` — proposed independent Phase 3B–F batches and acceptance criteria.
4. `reading-notes-phase3a-coverage-matrix.md` — all 94 source/range reviews and exact configurations.

All other created files are under `artifacts/qa/reading-notes-phase3a/`: baseline/context/source ledgers, four rendered-source snapshots, audit-only scripts, completed browser/focused/reflow/GRC/fallback results, screenshots/contact sheets, findings/relationship/occurrence JSON, read-only test logs, preservation records and manifest. `evidence-manifest.json` lists **every** QA file by path, size and SHA-256 and separately hashes the four reports. The manifest excludes itself. This is the exhaustive audit-only created-file inventory; no production changed-file manifest is needed because that set is empty.

## Limits and next approval scope

No mandatory subsection/theme/viewport configuration is missing. The audit combines source, full-range rendered DOM measurements and visual sampling; it is not learner usability testing, human reading of every screenshot pixel, native screen-reader certification, every OS/browser/device, exhaustive paint-stack analysis or every zoom setting. SVG contrast uses computed paints and the last preceding containing rectangle as a background heuristic; named sample backgrounds were checked visually. Complex gradients/overlap need individual verification before future acceptance. A minimum font size is not invented as a WCAG requirement.

Recommended next approved scope is **Phase 3B-1: Domain 4 Network Fundamentals and OSI semantic-heading pilots**, preserving all educational text. P1 table and diagram legibility pilots should also receive early review as separately bounded batches. Review the roadmap before authorizing broader changes. No Phase 3B implementation, staging, commit, push, reset, clean or Human Acceptance approval occurred.
