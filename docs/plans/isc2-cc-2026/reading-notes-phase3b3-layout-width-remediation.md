# Phase 3B.3 — Reading layout width, space utilization and visual hierarchy

**Phase 3B.3 Implemented — Pending Human Visual Acceptance**

Date: 2026-11-01. Repository: `D:\_Coding\SEC-CERT-TEST`. Baseline HEAD: `25a896a23fabbc6e3bc7401babcbf25fa4894ccc`. Human acceptance remains pending; Phase 3C has not started.

## Confirmed causes and production changes

The interrupted work was recovered rather than regenerated. No matching task browser/test process or listener on ports 5319/9379 remained. Existing completed D1 baseline evidence was reused. Four concurrent Learning Slides file changes were identified separately and preserved from the resume snapshot.

Chrome confirmed these distinct constraints:

1. The outer `.app` had both `max-width:1320px` and `width:min(100% - 48px,1320px)`. The reader's own 1560px maximum was unreachable. An initial maximum-only fix still rendered the app at 1320px; the explicit width was then corrected and an actual rendered-width assertion added.
2. B2's ordinary prose used 84ch, approximately 768.8px. Its definition containers also used 84ch, evaluated in a different font context at approximately 744.7px, narrowing their 768.8px child paragraphs again. Nearby legacy definitions used the full article width, producing inconsistent reading measures.
3. A 290px sidebar and 48px gutter left only 575px for the article at 1024px. Wider components and short definitions did not share the same usable grid as prose.
4. In D1 1.1.6, the three personal-data roles were independent full-width blocks, with labels at the same heading level as their group caption. Long-clause emphasis and centered icons in multiline captions added visual competition.

`css/reading.css` now opts in only when published Reading Notes contain `reading-structured-objective`. It permits a 1560px Reading shell, overrides the explicit desktop width, uses a 270px desktop sidebar and 32px gutter (28px at constrained desktop widths), and lets the article fill its pane. Global app tokens and other module styles remain unchanged. Mobile outer widths/padding and the 840px navigation breakpoint are retained.

Definition containers and their supporting lists use available width. Ordinary narrative has a single 96ch measure; definition prose has a single 104ch measure. This removes repeated wrapper caps without forcing every kind of content to the same width. Affected paragraphs retain 16px type with 1.85 line height. Existing list indentation is preserved. Tables and diagram parents receive available article width; their internal layout, semantics and SVG geometry were not redesigned.

Only D1 1.1.6 needs local source markup. Privacy has an explicit context section. Its three roles are one group with h6 labels subordinate to the existing h5 caption beneath the Privacy h4. A context-width query uses three equal columns only at 56rem of actual available width, otherwise one column. DOM order remains Subject → Controller → Processor. No new cards, borders, controls or navigation anchors were introduced.

Three long emphasis runs were reduced: the Non-repudiation claim and the Controller/Processor clauses. Full wording remains; Digital Signature, Determines Purpose and Means, Processes on behalf of Controller, PII and other intentional exam terminology retain emphasis. Icon-led headings use a lighter weight and first-line icon alignment, while numbered concept headings remain distinct. No blanket removal of emphasis or educational detail occurred.

## Mandatory before/after measurements

CSS pixels, sidebar open, Light theme. Dark measurements are also saved and agree on geometry. “Role group” is the union across all three definitions; “each role” distinguishes stacked blocks from deliberate comparison columns. “Paragraph unused” is article width minus the introductory paragraph width, not a claim that every blank pixel is a defect.

| Viewport | Article before → after | Paragraph before → after | Role group before → after | Each role before → after | Paragraph unused before → after |
|---|---:|---:|---:|---:|---:|
| 1920×1080 | 934.0 → 1210.0 | 768.8 → 878.6 | 934.0 → 1210.0 | 934.0 → 387.3 | 165.2 → 331.4 |
| 1366×768 | 917.0 → 953.0 | 768.8 → 878.6 | 917.0 → 953.0 | 917.0 → 301.7 | 148.2 → 74.4 |
| 1024×768 | 575.0 → 615.0 | 575.0 → 615.0 | 575.0 → 615.0 | 575.0 → 615.0 | 0.0 → 0.0 |
| 768×1024 | 704.0 → 704.0 | 704.0 → 704.0 | 704.0 → 704.0 | 704.0 → 704.0 | 0.0 → 0.0 |
| 390×844 | 330.0 → 330.0 | 330.0 → 330.0 | 330.0 → 330.0 | 330.0 → 330.0 | 0.0 → 0.0 |
| 375×812 | 315.0 → 315.0 | 315.0 → 315.0 | 315.0 → 315.0 | 315.0 → 315.0 | 0.0 → 0.0 |
| 320×568 | 260.0 → 260.0 | 260.0 → 260.0 | 260.0 → 260.0 | 260.0 → 260.0 | 0.0 → 0.0 |

At 1920px the shell grows 1320→1560px, reducing total outer whitespace from 585→345px. The article grows 934→1210px. The role group fills that width, with three 387.3px columns and two 24px gaps. At 1366px the narrative's unused article space falls from 148.2→74.4px. At 1024px an extra 40px reaches the article without shrinking type. Phone widths remain unchanged, with roles stacked.

The 331.4px remainder beside wide-desktop narrative is intentional: the larger article supports full-width educational components/comparisons while ordinary prose stops at a readable measure. It is not presented as eliminated whitespace. The role comparison uses the right-hand area rather than stretching every sentence across 1210px.

The repeated definition constraint is also corrected outside the reference case. At 1920px, D3 / 3.1.2 definition containers grow 744.7→1210px, while their paragraphs grow 744.7→951.8px under the explicit definition measure. D2 / 2.2.6 supporting lists grow 744.7→1210px. Container width and text line length are deliberately separate policies.

Before/after evidence:

- [Before: 1920 Light reference](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3b3/before-reference-intro-1920-light.png), [after](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3b3/after-reference-intro-1920-light.png).
- [Before: role definitions at 1366 Light](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3b3/before-reference-roles-1366-light.png), [after](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3b3/after-reference-roles-1366-light.png).
- [Before: stacked roles at 390 Light](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3b3/before-reference-roles-390-light.png), [after](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3b3/after-reference-roles-390-light.png).
- [Collapsed sidebar at 1024 Light](D:/_Coding/SEC-CERT-TEST/artifacts/qa/reading-notes-phase3b3/after-collapsed-roles-1024-light.png) demonstrates that columns follow article width rather than viewport width alone.

All fourteen reference before/after geometry records are in `reference-width-comparison.json`; raw shell, ancestor, paragraph and definition styles are in the reference JSON files. Settled-theme captures wait beyond the existing 250ms background transition. A transitional capture and initial incomplete-shell measurements remain marked separately for provenance.

## Cross-domain and browser verification

All 94 subsections were checked for relevant shared constraints; only one subsection's educational source markup changed. All other source ranges remain byte-identical. Shared CSS applies to the established Reading structures where relevant, without converting valid content into columns or cards.

| Domain | Subsections | Before states | Final states | Width checks |
|---|---:|---:|---:|---:|
| 1 | 24 | 336 | 336 | 1,406 pass |
| 2 | 29 | 406 | 406 | 1,672 pass |
| 3 | 17 | 238 | 238 | 1,000 pass |
| 4 | 24 | 336 | 336 | 1,392 pass |
| Total | **94** | **1,316** | **1,316** | **5,470 pass** |

Every subsection has real Chrome measurements at 1920×1080, 1366×768, 1024×768, 768×1024, 390×844, 375×812 and 320×568, in Light and Dark. Accepted final runs have zero console/runtime/log errors, page overflow or heading-box failures. Checks verify rendered shell width, article/pane agreement, definition container fill, unclamped lists, measured prose bounds, and responsive role grouping.

A separate 56-context pass verifies actual plain-text glyph bounds and role-block overlap across all four domains/all fourteen display states. Six wide-desktop collapsed-sidebar states additionally verify article fill and context-responsive columns: **124/124 checks pass**. Formula internals, table-cell wrapping and SVG labels are excluded from that plain-text-bound check and remain in their planned phases.

Derived comparisons across the 1,316 final ranges verify unchanged list indentation, term/definition alignment and exact filling of the intended paragraph measure: **3,948/3,948 pass**. Thus absence of overflow is not the only width criterion.

Actual navigation QA passes **240/240** checks across all four domains at 1366/390 in both themes: reload scroll, overview Resume, direct links, Back/Forward, inactive-domain progress, hidden-focus exclusion, Tab/Shift+Tab, Escape/focus return and responsive transitions. Navigation code and schema are unchanged. Total final direct Chrome checks: **5,834 pass**, plus the separately reported derived comparisons.

Fresh after screenshots cover every subsection at 1366 Light and 390 Dark, representative domain content at every display state, all fourteen before/after reference states at three scroll positions, and collapsed-sidebar reference states. `visual-review.json` lists the fourteen representative final screenshots manually inspected across all sizes/themes, plus reference and collapsed comparisons. This is not a claim of manual inspection of every saved image. Computed full-range measurements and plain-text bounds cover all required cases.

An initial detailed QA harness timed out. The accepted harness uses bounded single-DOM snapshots and completes the full matrices. No product change was made to satisfy that harness failure. Initial errors are retained separately and are not treated as passing evidence.

## Regressions and content preservation

All 20 applicable scripts were run against final production content. Nineteen pass, with **687 passing checks**, including nine focused B3 contracts, all 391 B2 contracts, B1, A2, A/B academic, structural/DOM, Markdown/math, persistence/navigation, document hierarchy, layout and alignment checks. The existing D1 presentation script remains **366/370**; its four Defense-in-Depth label/wording failures reproduce identically against the frozen B3 baseline. No existing assertion was changed or suppressed in B3.

`coverage-matrix.json` records full rendered-text fidelity for all 94 subsections and unchanged anchor order. Original words, values, formulas, examples, scenarios and terminology remain. The only source edits are wrappers, role heading levels and the three selected emphasis changes inside 1.1.6. Text before and after that subsection, and all D2–D4 source bytes, remain exact. Both B1 pilot source blocks, B2 structure/numeric superscripts/MAC note, A2 paint/currency fixes and prior academic corrections remain intact. Existing B1/B2 CSS blocks remain byte-identical; the new B3 block is inserted between them.

The initial baseline contains 25,465 files. B3 modifies three existing files: D1 Reading Notes, Reading CSS and the tracker. Four separately recorded concurrent Slides files differ from the initial baseline and remain byte-identical to the resume snapshot. The other **25,458 baseline files are unchanged**, with none missing. Original course notes, question banks, quiz, vocabulary, Domain 5, renderer/parser/navigation JavaScript, diagram generator, prior tests/reports/evidence and unrelated modules were not edited by B3.

## Exact changed-file manifest

- `content/isc2-cc-2026/reading/domain-1.md` — reference-case markup/emphasis only.
- `css/reading.css` — one Reading-only width/hierarchy block.
- `docs/plans/task.md` — P3B3 row only.
- `tools/verify-reading-layout-width.mjs` — new focused tests.
- `docs/plans/isc2-cc-2026/reading-notes-phase3b3-layout-width-remediation.md` — this report.
- `artifacts/qa/reading-notes-phase3b3/` — baseline, snapshots, scripts, results, screenshots and manifests.

`production.patch` shows only this task's production delta against its dirty-tree baseline. `changed-file-manifest.json` gives exact paths/hashes, `preservation.json` separates concurrent work, and `evidence-manifest.json` inventories individual artifacts. No reset/revert/clean/stage/commit/push operation occurred.

## Remaining issues and Phase 3C readiness

No new unresolved defect remains in tested B3 scope. Table content allocation/padded-cell issues remain for 3C. Diagram semantics remain for 3D; internal SVG scaling, small labels and selected contrast/legend bounds remain for 3E. Wider diagram parents do not certify internal legibility or fix their relationships. The pre-existing floating scroll-to-top control can cover a small lower-right text area at some scroll positions and remains a separate shared-overlay concern. The historical four assertions and native Thai/English assistive-technology/human acceptance work remain separately tracked for integrated review.

Phase 3C is ready for its own scoped review after human visual acceptance of these changes. It has not started. Physical-device and native screen-reader acceptance are not claimed.

## Subsection coverage

Every row has fourteen final Chrome states, source-text/anchor preservation and applicable width/alignment checks. Local source markup is changed only for the mandatory reference; all other rows use shared layout rules with source retained.

| Domain | Anchor | Local source edit | Fidelity | Chrome |
|---|---|---|---|---|
| 1 | topic-1-1-core-concepts | No | Pass | 14/14 |
| 1 | topic-1-1-cia-triad | No | Pass | 14/14 |
| 1 | topic-1-1-identification-authentication | No | Pass | 14/14 |
| 1 | topic-1-1-mfa | No | Pass | 14/14 |
| 1 | topic-1-1-authorization-accounting | No | Pass | 14/14 |
| 1 | topic-1-1-privacy-data-protection | Yes | Pass | 14/14 |
| 1 | topic-1-1-zero-trust-defense-in-depth | No | Pass | 14/14 |
| 1 | topic-1-2-risk-components | No | Pass | 14/14 |
| 1 | topic-1-2-quantitative-risk | No | Pass | 14/14 |
| 1 | topic-1-2-risk-lifecycle | No | Pass | 14/14 |
| 1 | topic-1-2-risk-treatment | No | Pass | 14/14 |
| 1 | topic-1-2-inherent-residual-risk | No | Pass | 14/14 |
| 1 | topic-1-3-governance-fundamentals | No | Pass | 14/14 |
| 1 | topic-1-3-laws-regulations | No | Pass | 14/14 |
| 1 | topic-1-3-security-frameworks | No | Pass | 14/14 |
| 1 | topic-1-3-document-hierarchy | No | Pass | 14/14 |
| 1 | topic-1-3-grc | No | Pass | 14/14 |
| 1 | topic-1-4-control-categories | No | Pass | 14/14 |
| 1 | topic-1-4-control-types | No | Pass | 14/14 |
| 1 | topic-1-4-overlapping-controls | No | Pass | 14/14 |
| 1 | topic-1-5-code-of-conduct | No | Pass | 14/14 |
| 1 | topic-1-5-due-care-due-diligence | No | Pass | 14/14 |
| 1 | topic-1-5-isc2-ethics | No | Pass | 14/14 |
| 1 | topic-1-5-distinctions-scenarios | No | Pass | 14/14 |
| 2 | topic-2-1-grc-foundations | No | Pass | 14/14 |
| 2 | topic-2-1-purpose-of-grc | No | Pass | 14/14 |
| 2 | topic-2-1-importance-of-grc | No | Pass | 14/14 |
| 2 | topic-2-1-frameworks-standards | No | Pass | 14/14 |
| 2 | topic-2-1-grc-tools | No | Pass | 14/14 |
| 2 | topic-2-1-risk-register | No | Pass | 14/14 |
| 2 | topic-2-2-bc-foundations | No | Pass | 14/14 |
| 2 | topic-2-2-bcp-components | No | Pass | 14/14 |
| 2 | topic-2-2-bia | No | Pass | 14/14 |
| 2 | topic-2-2-dr-it-scope | No | Pass | 14/14 |
| 2 | topic-2-2-bc-vs-dr | No | Pass | 14/14 |
| 2 | topic-2-2-rto-rpo | No | Pass | 14/14 |
| 2 | topic-2-2-drp-sites | No | Pass | 14/14 |
| 2 | topic-2-2-dr-testing | No | Pass | 14/14 |
| 2 | topic-2-3-security-culture | No | Pass | 14/14 |
| 2 | topic-2-3-security-leadership | No | Pass | 14/14 |
| 2 | topic-2-3-awareness-programs | No | Pass | 14/14 |
| 2 | topic-2-3-social-engineering-psychology | No | Pass | 14/14 |
| 2 | topic-2-3-social-engineering-techniques | No | Pass | 14/14 |
| 2 | topic-2-3-password-protection | No | Pass | 14/14 |
| 2 | topic-2-4-measurement-rationale | No | Pass | 14/14 |
| 2 | topic-2-4-metrics-characteristics | No | Pass | 14/14 |
| 2 | topic-2-4-mttd-mttr | No | Pass | 14/14 |
| 2 | topic-2-4-kpi-vs-kri | No | Pass | 14/14 |
| 2 | topic-2-4-dashboards | No | Pass | 14/14 |
| 2 | topic-2-4-scorecards | No | Pass | 14/14 |
| 2 | topic-2-4-reports | No | Pass | 14/14 |
| 2 | topic-2-4-memory-aid | No | Pass | 14/14 |
| 2 | topic-2-review-scenarios | No | Pass | 14/14 |
| 3 | topic-3-1-jml-lifecycle | No | Pass | 14/14 |
| 3 | topic-3-1-roles-definition | No | Pass | 14/14 |
| 3 | topic-3-1-provisioning | No | Pass | 14/14 |
| 3 | topic-3-1-access-review | No | Pass | 14/14 |
| 3 | topic-3-1-deprovisioning | No | Pass | 14/14 |
| 3 | topic-3-1-iam-frameworks | No | Pass | 14/14 |
| 3 | topic-3-1-iam-tools | No | Pass | 14/14 |
| 3 | topic-3-1-least-privilege | No | Pass | 14/14 |
| 3 | topic-3-2-logical-controls | No | Pass | 14/14 |
| 3 | topic-3-2-sod | No | Pass | 14/14 |
| 3 | topic-3-2-polp-vs-sod | No | Pass | 14/14 |
| 3 | topic-3-2-dac | No | Pass | 14/14 |
| 3 | topic-3-2-mac | No | Pass | 14/14 |
| 3 | topic-3-2-rbac | No | Pass | 14/14 |
| 3 | topic-3-2-abac | No | Pass | 14/14 |
| 3 | topic-3-2-models-matrix | No | Pass | 14/14 |
| 3 | topic-3-review-scenarios | No | Pass | 14/14 |
| 4 | topic-4-1-fundamentals-topologies | No | Pass | 14/14 |
| 4 | topic-4-1-osi-model | No | Pass | 14/14 |
| 4 | topic-4-1-tcp-ip-mapping | No | Pass | 14/14 |
| 4 | topic-4-1-ipv4-cidr-nat | No | Pass | 14/14 |
| 4 | topic-4-1-ipv6-architecture | No | Pass | 14/14 |
| 4 | topic-4-1-tcp-vs-udp | No | Pass | 14/14 |
| 4 | topic-4-1-ports-multiplexing | No | Pass | 14/14 |
| 4 | topic-4-1-network-devices | No | Pass | 14/14 |
| 4 | topic-4-1-wireless-security | No | Pass | 14/14 |
| 4 | topic-4-1-network-threats-iot | No | Pass | 14/14 |
| 4 | topic-4-2-segmentation-blast-radius | No | Pass | 14/14 |
| 4 | topic-4-2-firewall-zones | No | Pass | 14/14 |
| 4 | topic-4-2-dmz-architecture | No | Pass | 14/14 |
| 4 | topic-4-2-vlans-routing | No | Pass | 14/14 |
| 4 | topic-4-2-microsegmentation | No | Pass | 14/14 |
| 4 | topic-4-2-defense-in-depth | No | Pass | 14/14 |
| 4 | topic-4-2-zero-trust | No | Pass | 14/14 |
| 4 | topic-4-3-cloud-characteristics | No | Pass | 14/14 |
| 4 | topic-4-3-service-models | No | Pass | 14/14 |
| 4 | topic-4-3-shared-responsibility | No | Pass | 14/14 |
| 4 | topic-4-3-deployment-models | No | Pass | 14/14 |
| 4 | topic-4-3-hybrid-vs-multicloud | No | Pass | 14/14 |
| 4 | topic-4-3-cloud-network-controls | No | Pass | 14/14 |
| 4 | topic-4-review-scenarios | No | Pass | 14/14 |
