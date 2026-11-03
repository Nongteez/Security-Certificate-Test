# Phase 3B.2 — Cross-domain Reading Notes implementation

**Phase 3B.2 Implemented — Pending Human Visual Acceptance**

Date: 2026-11-01. Repository: `D:\_Coding\SEC-CERT-TEST`. Baseline HEAD: `25a896a23fabbc6e3bc7401babcbf25fa4894ccc`. Human acceptance remains outstanding. Phase 3C has not started.

## Domain status and actual changes

Interrupted work was resumed without regeneration. Domain 2's recovery-site correction was already applied and its complete Chrome rerun passed. Domain 3 was already authored; its MAC fidelity/structure issue was completed before browser verification. Domains 1/4 were preserved, with bounded final refinements checked separately.

| Domain | Evaluated | Source structure changed | Typography coverage | Primary Chrome ranges |
|---|---:|---:|---|---:|
| 1 | 24 | 21 | All 24 | 336 |
| 2 | 29 | 12 | All 29 | 406 |
| 3 | 17 | 15 | All 17 | 238 |
| 4 | 24 | 22 | Remaining 22; two B1 pilots retained | 336 |
| Total | **94** | **70** | **92 updated + 2 retained pilots** | **1,316** |

Changes introduce 158 clean concept sections and 226 additional h4/h5 headings. Valid existing structures are retained, rather than forcing every subsection into the pilot template. No new decorative cards, borders or backgrounds were added.

- D1: semantic group labels; seven peer risk/GRC titles promoted from h5 to h4 to avoid skipped parents. Existing rich components and genuine risk-lifecycle ordering remain.
- D2: grouped GRC pillars, RTO/RPO, MTTD/MTTR, awareness concepts and recovery-site definitions; parallel goals/tactics use unordered lists.
- D3: grouped JML, provisioning, review findings, access models and nested classification/clearance definitions. ABAC attributes are unordered examples. The SoD process retains its real sequence.
- D4: grouped protocols, devices, wireless concepts, zones and cloud definitions. IPv4 separates fundamentals, Network/Host ID, classful/private ranges, APIPA, CIDR/subnet calculations and NAT. Nonsequential review/callout items use proper unordered lists.

## Superscript rendering and bounded safety

Ordinary Markdown passes through `parseInline()`, which previously escaped `<sup>`; raw structural HTML followed a separate passthrough path and already rendered its exponent. Frozen-baseline Chrome reproduces the literal `2<sup>32</sup>` defect and four escaped inline exponent occurrences.

The parser now protects only exact, attribute-free `<sup>` pairs with ASCII numeric content, after code-span protection and before ordinary bracket escaping. Five D4 exponents render natively: 32, 8, 128 and two occurrences of 38. Source values are unchanged. Code examples stay escaped; attribute-bearing and nonnumeric variants remain escaped. This does not expand the general HTML allowlist or admit arbitrary HTML. Existing Markdown/math behavior is covered by regressions.

D3's MAC note previously displayed a literal `>` because a quote marker was interpreted as text within a nested list. Its new grouping renders a real blockquote. Fidelity normalization removes only that exact leaked marker before the specific Exam Core Distinction label. The complete clearance/Need-to-Know qualification remains; comparison operators elsewhere are not normalized away.

## Spacing and bilingual typography

Existing objective/review sections opt in through `reading-structured-objective`. Rules affect Reading Notes prose and concept structures; global application tokens are unchanged. The B2 block sits before the intact B1 block, preserving pilot precedence.

| Relationship | Scoped treatment |
|---|---|
| Major subsection | 40px margin; h3 19px |
| Concept group | 32px separation; h4 17px |
| Independent definition | 24px separation; nested h5 16px |
| Paragraph | 16px separation; affected text 16px / 1.8 |
| Heading/detail and supporting item | 8px gap |
| Nested list | 6px spacing |
| Prose width/wrapping | 84ch maximum; normal word boundaries and fallback for unbroken tokens |

Tables and diagram containers retain their full-width layout. No break-all rule, global font shrinkage, universal margin or card conversion was introduced. Existing callouts, examples and formulas remain distinguishable. The D2 recovery-site heading initially sat 24px from its first nested definition; a specific parent-heading/first-nested-unit rule now yields 8px without reducing independent definition separation. Its full fourteen-state rerun passes.

## Before/after and content fidelity

| Before | After | Preserved |
|---|---|---|
| Literal IPv4 `2<sup>32</sup>` | Native 2³² | 32-bit/4.3-billion explanation and values |
| Numbered peer titles | Semantic h4/h5 groups with supporting details | Definitions, examples, terminology and order |
| Hot/Warm/Cold nested numbered items | Nested h5 definitions | Costs, timing examples and non-guarantee/RTO/RPO qualifications |
| ABAC attributes numbered 1–4 | Unordered examples under their parent heading | Non-fixed-category qualification and every example |
| MAC quote marker leaked as text | Semantic blockquote | Entire exam distinction |

`content-fidelity.json` verifies all 94 subsections against frozen pre-B2 source through the real parser, entity handling and whitespace normalization. Complete educational text is equal in order, with the single documented quote-marker exception. No educational wording was replaced, shortened or removed. Generated list ordinals are formatting; values inside definitions, ranges, worked examples and formulas remain unchanged. All original anchors, scenarios and active structured-component content are preserved.

Original text is in `baseline-runtime.json` and `tools/fixtures/reading-cross-domain-fidelity.json`; final snapshots are `source-after-domain-*.md`. `verify-content.mjs` reproduces the comparison. Both B1 pilot source blocks are byte-identical to their pre-B2 versions, and their CSS is intact. A/B academic corrections, A2 currency/note/DMZ fixes and Phase 2 logic remain protected.

## Real Chrome verification

Primary coverage: all 94 subsections × seven viewports × Light/Dark. Fresh head screenshots cover every combination; fresh tail screenshots additionally cover every subsection at 1366/390 in both themes. Measurements inspect full ranges beyond the heading viewport.

| Viewport | Light | Dark |
|---|---|---|
| 1920×1080 | All 94 pass | All 94 pass |
| 1366×768 | All 94 pass | All 94 pass |
| 1024×768 | All 94 pass | All 94 pass |
| 768×1024 | All 94 pass | All 94 pass |
| 390×844 | All 94 pass | All 94 pass |
| 375×812 | All 94 pass | All 94 pass |
| 320×568 | All 94 pass | All 94 pass |

Primary passing checks: D4 2,388; D1 2,374; D2 2,864; D3 1,688. Targeted final reruns add 788 checks across 98 affected subsection/view states: D1 parent levels, D2 parallel lists, D3 ABAC and D4 callout lists. **10,102 content-browser checks pass**, with zero console/runtime/log errors.

Checks cover native headings/reviewed titles, heading bounds, readable affected prose, definition proximity, new page overflow/raw prose artifacts, list nesting, formulas and all five superscripts. No new prose overlap or clipped heading was found. Deferred table/SVG defects are not certified fixed by these checks.

D1's initial heading probe compared rendered KaTeX with raw TeX. Expected heading text now uses the same renderer, and its full rerun passes. Original probe failures and recovery-site spacing failures remain in first-run JSON/logs rather than being discarded.

Final navigation QA passes **240 checks across 16 states**: all four domains, 1366/390, both themes. Actual UI actions verify reload scroll, overview Resume, explicit deep links, Back/Forward, inactive-domain progress, hidden-focus exclusion, Tab/Shift+Tab, Escape/focus return and responsive transitions. Content matrices additionally exercise reload/mobile focus at all seven sizes. Progress schema and navigation code were not changed.

Screenshots: 1,316 primary heads, 376 primary tails, 126 targeted images, 40 navigation images and eight frozen-baseline defect images. One additional image preserves the initial spacing issue. Individual files/hashes are in `evidence-manifest.json`.

`visual-review.json` identifies fourteen manually inspected representative final states across all seven sizes/both themes, plus defect/lower-content images. **This is not a claim that every screenshot was manually inspected.** Automated real-Chrome range/layout QA covers every required combination; representative visual inspection supplements it. Physical-device, native Thai/English speech and human acceptance remain unclaimed.

## Automated regressions and assertion changes

All 19 applicable scripts were run on final content. Eighteen pass; the historical D1 presentation script retains four failures.

- Cross-domain semantics/fidelity/safety: **391/391**.
- B1 pilot: 13/13; A2 readability: 13/13; persistence: 20/20; navigation: 15/15; DOM integrity: 36/36.
- Foundation and Domains 1–4 pass. Academic A/B pass 23/23 and 33/33.
- Lead width, fluid layout/dividers, rendering quality, text alignment/width and document hierarchy all pass.
- Total outside historical presentation: **678 passing checks**. Historical presentation: **366/370**, with the same four failures reproduced through the frozen-baseline filesystem hook.

Historical failures concern Defense-in-Depth Layer 4/6/7 labels and complementary/non-chronological wording. That test was not edited. Two D4 expectations intentionally changed: exactly 16 unordered review items must exist in source and rendered HTML; nonsequential D4 content must not emit ordered lists. Full wording is independently checked by fidelity. These replace obsolete formatting assumptions, not content/runtime failures. Commands, exit codes, counts and full logs are in `regression-results.json`.

## Exact changes and preservation

Production: the four `content/isc2-cc-2026/reading/domain-*.md` files, `css/reading.css`, and `js/core/markdown-parser.js`.

Supporting: `tools/verify-reading-notes-domain4.mjs`; new `tools/verify-reading-cross-domain-structure.mjs`; new `tools/fixtures/reading-cross-domain-fidelity.json`; the appended P3B2 tracker row; this report. QA files are confined to `artifacts/qa/reading-notes-phase3b2/`. Exact individual paths/hashes are in `changed-file-manifest.json`; all QA files are in `evidence-manifest.json`.

Baseline: 23,493 existing files. Only eight differ: six production files, D4 test and tracker. **23,485 other files remain byte-identical; none is missing.** Prior dirty A2/B1 work was the baseline and remains preserved. The eight original course notes, Slides, Quiz/Exam Engine, Question Banks, Vocabulary, Domain 5, scenario data, diagram generator and existing DOM-integrity test were not changed by B2. No Git stage/commit/push/reset/revert/clean operation occurred.

## Remaining scope for 3C–3F

3C: comparison-table fragmentation and padded-cell bounds. 3D: existing BC/DR, measurement, JML, control-function and DMZ relationships. 3E: component-width diagram legibility, selected contrast pairs and cloud legend bounds. 3F: integrated accessibility/language-of-parts, native assistive-technology and human acceptance. Existing diagram/table designs and their known defects remain unchanged by this prose/semantic batch.

The existing floating scroll-to-top control can cover a small lower-right text area at some narrow-screen positions; baseline images show the same behavior. This is separate from new prose-container overlap. No new blocker remains in tested B2 scope. Phase 3C has not started.

## Subsection matrix

S = source structure and scoped typography; T = valid structure retained with scoped typography; P = B1 pilot retained exactly. All rows pass fidelity and fourteen Chrome states. Current source lines and detailed counts are in `implementation-matrix.json`.

| Domain | Anchor | Work | Fidelity | Chrome |
|---|---|---|---|---|
| 1 | topic-1-1-core-concepts | S | Pass | 14/14 |
| 1 | topic-1-1-cia-triad | S | Pass | 14/14 |
| 1 | topic-1-1-identification-authentication | T | Pass | 14/14 |
| 1 | topic-1-1-mfa | S | Pass | 14/14 |
| 1 | topic-1-1-authorization-accounting | S | Pass | 14/14 |
| 1 | topic-1-1-privacy-data-protection | S | Pass | 14/14 |
| 1 | topic-1-1-zero-trust-defense-in-depth | S | Pass | 14/14 |
| 1 | topic-1-2-risk-components | S | Pass | 14/14 |
| 1 | topic-1-2-quantitative-risk | S | Pass | 14/14 |
| 1 | topic-1-2-risk-lifecycle | T | Pass | 14/14 |
| 1 | topic-1-2-risk-treatment | S | Pass | 14/14 |
| 1 | topic-1-2-inherent-residual-risk | S | Pass | 14/14 |
| 1 | topic-1-3-governance-fundamentals | S | Pass | 14/14 |
| 1 | topic-1-3-laws-regulations | S | Pass | 14/14 |
| 1 | topic-1-3-security-frameworks | S | Pass | 14/14 |
| 1 | topic-1-3-document-hierarchy | S | Pass | 14/14 |
| 1 | topic-1-3-grc | S | Pass | 14/14 |
| 1 | topic-1-4-control-categories | S | Pass | 14/14 |
| 1 | topic-1-4-control-types | S | Pass | 14/14 |
| 1 | topic-1-4-overlapping-controls | S | Pass | 14/14 |
| 1 | topic-1-5-code-of-conduct | S | Pass | 14/14 |
| 1 | topic-1-5-due-care-due-diligence | S | Pass | 14/14 |
| 1 | topic-1-5-isc2-ethics | S | Pass | 14/14 |
| 1 | topic-1-5-distinctions-scenarios | T | Pass | 14/14 |
| 2 | topic-2-1-grc-foundations | S | Pass | 14/14 |
| 2 | topic-2-1-purpose-of-grc | S | Pass | 14/14 |
| 2 | topic-2-1-importance-of-grc | T | Pass | 14/14 |
| 2 | topic-2-1-frameworks-standards | T | Pass | 14/14 |
| 2 | topic-2-1-grc-tools | S | Pass | 14/14 |
| 2 | topic-2-1-risk-register | T | Pass | 14/14 |
| 2 | topic-2-2-bc-foundations | S | Pass | 14/14 |
| 2 | topic-2-2-bcp-components | T | Pass | 14/14 |
| 2 | topic-2-2-bia | T | Pass | 14/14 |
| 2 | topic-2-2-dr-it-scope | S | Pass | 14/14 |
| 2 | topic-2-2-bc-vs-dr | T | Pass | 14/14 |
| 2 | topic-2-2-rto-rpo | S | Pass | 14/14 |
| 2 | topic-2-2-drp-sites | S | Pass | 14/14 |
| 2 | topic-2-2-dr-testing | T | Pass | 14/14 |
| 2 | topic-2-3-security-culture | T | Pass | 14/14 |
| 2 | topic-2-3-security-leadership | T | Pass | 14/14 |
| 2 | topic-2-3-awareness-programs | S | Pass | 14/14 |
| 2 | topic-2-3-social-engineering-psychology | S | Pass | 14/14 |
| 2 | topic-2-3-social-engineering-techniques | T | Pass | 14/14 |
| 2 | topic-2-3-password-protection | T | Pass | 14/14 |
| 2 | topic-2-4-measurement-rationale | S | Pass | 14/14 |
| 2 | topic-2-4-metrics-characteristics | T | Pass | 14/14 |
| 2 | topic-2-4-mttd-mttr | S | Pass | 14/14 |
| 2 | topic-2-4-kpi-vs-kri | T | Pass | 14/14 |
| 2 | topic-2-4-dashboards | T | Pass | 14/14 |
| 2 | topic-2-4-scorecards | T | Pass | 14/14 |
| 2 | topic-2-4-reports | T | Pass | 14/14 |
| 2 | topic-2-4-memory-aid | T | Pass | 14/14 |
| 2 | topic-2-review-scenarios | S | Pass | 14/14 |
| 3 | topic-3-1-jml-lifecycle | S | Pass | 14/14 |
| 3 | topic-3-1-roles-definition | S | Pass | 14/14 |
| 3 | topic-3-1-provisioning | S | Pass | 14/14 |
| 3 | topic-3-1-access-review | S | Pass | 14/14 |
| 3 | topic-3-1-deprovisioning | S | Pass | 14/14 |
| 3 | topic-3-1-iam-frameworks | S | Pass | 14/14 |
| 3 | topic-3-1-iam-tools | S | Pass | 14/14 |
| 3 | topic-3-1-least-privilege | S | Pass | 14/14 |
| 3 | topic-3-2-logical-controls | S | Pass | 14/14 |
| 3 | topic-3-2-sod | S | Pass | 14/14 |
| 3 | topic-3-2-polp-vs-sod | T | Pass | 14/14 |
| 3 | topic-3-2-dac | S | Pass | 14/14 |
| 3 | topic-3-2-mac | S | Pass | 14/14 |
| 3 | topic-3-2-rbac | S | Pass | 14/14 |
| 3 | topic-3-2-abac | S | Pass | 14/14 |
| 3 | topic-3-2-models-matrix | T | Pass | 14/14 |
| 3 | topic-3-review-scenarios | S | Pass | 14/14 |
| 4 | topic-4-1-fundamentals-topologies | P | Pass | 14/14 |
| 4 | topic-4-1-osi-model | P | Pass | 14/14 |
| 4 | topic-4-1-tcp-ip-mapping | S | Pass | 14/14 |
| 4 | topic-4-1-ipv4-cidr-nat | S | Pass | 14/14 |
| 4 | topic-4-1-ipv6-architecture | S | Pass | 14/14 |
| 4 | topic-4-1-tcp-vs-udp | S | Pass | 14/14 |
| 4 | topic-4-1-ports-multiplexing | S | Pass | 14/14 |
| 4 | topic-4-1-network-devices | S | Pass | 14/14 |
| 4 | topic-4-1-wireless-security | S | Pass | 14/14 |
| 4 | topic-4-1-network-threats-iot | S | Pass | 14/14 |
| 4 | topic-4-2-segmentation-blast-radius | S | Pass | 14/14 |
| 4 | topic-4-2-firewall-zones | S | Pass | 14/14 |
| 4 | topic-4-2-dmz-architecture | S | Pass | 14/14 |
| 4 | topic-4-2-vlans-routing | S | Pass | 14/14 |
| 4 | topic-4-2-microsegmentation | S | Pass | 14/14 |
| 4 | topic-4-2-defense-in-depth | S | Pass | 14/14 |
| 4 | topic-4-2-zero-trust | S | Pass | 14/14 |
| 4 | topic-4-3-cloud-characteristics | S | Pass | 14/14 |
| 4 | topic-4-3-service-models | S | Pass | 14/14 |
| 4 | topic-4-3-shared-responsibility | S | Pass | 14/14 |
| 4 | topic-4-3-deployment-models | S | Pass | 14/14 |
| 4 | topic-4-3-hybrid-vs-multicloud | S | Pass | 14/14 |
| 4 | topic-4-3-cloud-network-controls | S | Pass | 14/14 |
| 4 | topic-4-review-scenarios | S | Pass | 14/14 |
