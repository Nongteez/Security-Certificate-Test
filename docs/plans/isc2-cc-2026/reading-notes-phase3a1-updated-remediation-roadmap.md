# Phase 3A.1 — Updated remediation roadmap

Date: 2026-11-01 (Asia/Bangkok). **Proposal only — Pending Human Review.** This plan does not authorize implementation, commit/push or Human Acceptance. Keep all previous A/B academic corrections, eight original notes and Phase 2 intact.

## Delivery order and dependencies

| Order | Bounded batch | Reason / dependency | Acceptance gate |
|---|---|---|---|
| Early independent pilot | **3E-0 — DMZ service paint and readable-label pilot** | P1 invisible Light service titles are actionable without waiting for a content-wide restructure. Keep topology changes separate. | Three service labels have a deliberate fill/text pair in both themes; fonts remain readable at real scale. Review before extending any generic rule. |
| Before or alongside 3B | **F0 — Source fidelity micro-batch** | P3A1-FID-001 is a verified source/renderer-contract mismatch. Correct five raw-HTML currency values and one note's formatting without global escape removal. | Currency and emphasis artifacts gone; numbers, prose, formulas and both math paths unchanged. |
| 1 | **3B — Semantic content structure and vertical rhythm** | Start with Network Fundamentals and OSI. Establish meaning-driven source roles before CSS rollout. | Visual and academic acceptance of the two pilots. |
| 2 | **3C — Tables and technical typography** | Term fragmentation is P1 on phone. Pilot the measurement table and one contrasting comparison; treat GRC padded-cell fit separately. | Words, row/column associations and scrolling remain usable in both themes at all widths. |
| 3 | **3D — Flow and diagram semantics** | Stabilize measurement/JML/control/DMZ relationships before final geometry. | Explicit relationship and scope agreement; no false compulsory workflow. |
| 4 | **3E — Remaining diagram legibility and space** | Scale/layout work follows the chosen semantic model, except urgent 3E-0. Use the 24-diagram classification ledger. | Actual transformed instructional labels, paints, clipping and mobile alternatives checked. |
| 5 | **3F — Integrated academic, visual and accessibility regression** | Verify interactions between accepted batches across all 94 subsections. | Full evidence plus human acceptance, not only passing string assertions. |

F0 and 3E-0 are independent small proposals; neither needs a shared router, new rendering framework or visual redesign of the whole textbook. If a wider parser/component change becomes necessary, explicitly review that dependency before expanding scope.

## F0 — Source fidelity micro-batch

Proposed source scope: `content/isc2-cc-2026/reading/domain-1.md`, lines 424, 445, 484, 508 and 951 in the audited baseline. Locate exact strings again before implementing; do not rely on stale line numbers after other edits.

The first four positions contain **five displayed currency amounts** inside raw HTML. The fifth contains the literal-asterisk Due Care note. Preserve all existing Thai/English text, the advisory qualifier, numbers and mathematical assumptions.

Preferred candidate: use HTML currency entities such as `&#36;` only at those raw-HTML currency positions, and semantic `<em>` or an ordinary Markdown note for the emphasis. This is a proposal, not an applied patch. The current raw-HTML math matcher treats two unescaped dollar signs as math delimiters; simply deleting both escapes in the cost-benefit paragraph is therefore not an acceptable blind fix. Keep valid escaped dollar signs and `\times` inside actual math expressions.

If an explicit parser contract is preferred, specify which inline syntax is supported inside permitted HTML. It must protect currency before matching math, preserve valid HTML/entities, avoid double parsing generated math/links and avoid expanding an unrelated HTML-trust boundary. That has a larger regression scope than the source-only candidate. Do not turn this minor presentation issue into a parser rewrite.

Future acceptance should include:

- One and two currency values in raw HTML, ordinary Markdown currency, inline math and display math.
- AV/EF/SLE/ARO/ALE worked examples and their units; 10,000×0.5=5,000, 5,000×2=10,000, 5,000×0.2=1,000, diagram 100,000×0.4=40,000 and ×0.5=20,000, net benefit −4,000.
- Normal KaTeX and unavailable-KaTeX fallback. Do not remove meaningful commands or claim fallback speech fixed without AT testing.
- Exact visible note wording retained, with no literal marker artifacts.
- No other subsection anchor, table, scenario, directive payload or Phase 2 behavior changed.

QA planning examples are in `pipeline-experiments.json` and `correction-planning-experiments.json`. Their deliberate reproductions do not mean production was remediated.

## 3B — Semantic structure and reusable rhythm

### 3B-1: two Domain 4 pilots

**Network Fundamentals, 4.1.1:** use semantic group headings for Network Scope, Collision & Broadcast Domains and architectural reach. Keep LAN/WAN/WLAN/PAN/VPN definitions and every example. A definition group can place term and explanation together; it does not need a card per definition.

**OSI, 4.1.2:** make Layer 7 through Layer 1 semantic subsection headings; retain responsibilities, protocol/technology examples, PDU detail and all qualifications under the corresponding layer. Retain the correct Layer 1→7 mnemonic direction and clarify that the exposition proceeds 7→1 if needed. Do not hide list markers to simulate a source-semantic correction.

The conceptual pattern Heading → Explanation → Supporting Details → Example → Exam Guidance is a tool, not a mandatory repeated template. Some topics need only a paragraph, some a comparison, some a worked calculation. Preserve the strongest existing D1 structures rather than flattening them to match weaker source patterns elsewhere.

### Limited spacing hierarchy

Use existing Reading spacing tokens where possible, applied to explicit semantic roles. The ranges below are pilot starting points, not new global values or a universal margin prescription.

| Relationship | Proposed starting rule | Verification |
|---|---|---|
| Term → definition, or tightly related label → value | Smallest gap, often 0–8 px; keep clear shared grouping | The term remains visibly attached to its definition. |
| Paragraphs within one explanation | Modest paragraph separation, commonly 12–16 px | Multi-paragraph reasoning reads as one concept rather than disconnected cards. |
| Short genuine list items | Compact rhythm, commonly 4–8 px | Items are distinguishable without inflating short lists. |
| Nested supporting details | Tight gap from the parent with clear indentation; avoid equal visual rank | Parent, explanation and example are not mistaken for separate top-level steps. |
| Distinct definitions/concepts | Larger separation, commonly 24–32 px, or a real subheading | A reader can identify the next idea without relying on bold fragments alone. |
| Subheading → its own explanation | Smaller than the gap above the subheading; often ~8 px below | Proximity connects a heading to the following explanation. |
| Formula → variables → worked example | Tight internal grouping; a clearer boundary before the next formula | Values and units remain associated with the right equation. |
| Diagram/table → explanatory caption | Tight caption association; larger separation from the next unrelated concept | Captions are not visually orphaned or mistaken for the next heading. |
| Example → exam guidance | A modest labelled boundary within the concept | An exam cue does not interrupt or replace the explanation. |
| Major subsection transition | Strongest boundary, often an existing 32–40 px heading interval | Major structure remains apparent after zoom/reflow. |

Current p+list proximity can be sensible for an ordinary introduction but weak for a conceptual group title. Correct the source role first. Do not apply a large margin to every list item, alter the app's global token system or reduce all whitespace indiscriminately. Test Thai-heavy and English-heavy content, short lists, long definitions and long subsection transitions before expanding the pilot.

### 3B-2: cross-domain expansion after acceptance

Use the validated 94-row review ledger to select small follow-up batches: D2 backup strategies versus recovery sites, measurement definitions and social-engineering groups; D3 directory/IdP/platform categories and lifecycle explanations; D4 IPv4/IPv6, wireless, ports and OT/IoT groups. Retain genuine sequences and acceptable enumerations. A six-point audit-finding list is not necessarily a six-stage process.

Three structured directives render data arrays rather than their source bodies. Preserve the active payload and surrounding source; changes to a discarded body alone do not implement a learner-visible improvement. Resolve the authoring contract before broad directive-source refactoring.

## 3C — Tables and technical typography

Start with the D2 measurement trigger matrix, then the social-engineering table and one narrow review comparison. Inventory all **15** validated affected ranges through `table-reconciliation.json`. Distinguish source table conversion from CSS layout: the current 22 table row/column shapes and column headers are structurally correct.

Plan term/description/example column roles, whole English-word preservation, sensible widths and contained scrolling where a real comparison needs two dimensions. Test header alignment, mixed Thai-English text, the rightmost scrolled edge and scroll discoverability. Do not use break-all, shrink fonts to squeeze columns or universally convert comparisons into cards.

Keep the GRC special case as an independent padded-cell task. “Enterprise IT Governance” must fit its cell with padding, or wrap at real word boundaries. Native focus plus ArrowRight already scrolls the current container; preserve that working behavior. A passing page-overflow test or matching row count does not prove cell fit/readability.

## 3D — Relationship-led visuals

- **Measurement:** group measures/purpose-selected KPI/KRI separately from dashboard/scorecard/report communication forms. Remove compulsory 01–06 hierarchy cues and synchronize visible/mobile/accessibility names. Preserve corrected definitions and local-aid qualification.
- **JML:** show optional/repeated Mover events and direct offboarding without Mover; keep ongoing review/governance. Do not silently bundle unrelated role-first wording changes into a diagram patch.
- **Control functions:** keep purpose/overlap primary and eliminate or qualify the competing timing workflow. Preserve retrospective detection and multi-role examples.
- **BC/DR:** simplify framing and non-interactive scope labels, put practical examples where they can be read, and preserve a bounded technology-recovery contribution to BC. No universal formal subset assertion or replacement elaborate card system.
- **DMZ:** choose an explicit zone/boundary overview or a small labelled topology. Firewall-mediated links must communicate illustrative permissions and limits. Public service requests need not continue internally; every packet does not visit every service. Synchronize visible relationships and accessible description.

Use `diagram-classification.json` for all 24 assets. Keep valid calculation dependencies, recovery timelines, conditional provisioning examples, comparisons and enumerated named concepts. Do not commission a new diagram for every paragraph or presume that all arrows/numbers are wrong.

## 3E — Legibility, paint and space utilization

**3E-0 priority:** explicitly pair paint and text for the three DMZ service rectangles, then validate actual rendered contrast in Light/Dark. The current Light service titles are 1.29:1 on default black; Dark title contrast is already high. Avoid indiscriminate global fill changes or a new Dark-theme defect.

For the broader P1 small-label family, pick DMZ and JML as geometry pilots. Measure screen-transformed text, real container width/padding and label bounds, rather than just source font attributes. At 1024, 5.62 px DMZ labels need a content-aware layout/representation decision. Filling an extra ~107 px of wide-desktop wrapper space alone cannot solve the constrained pane. Make firewall labels and governance important enough to read, and reserve whitespace according to meaning.

After semantic models stabilize, adapt the remaining diagrams in small batches. Recheck SVG clipping, source-specific overlaps, actual text/background pairs and visible mobile alternatives. Repair the cloud legend bounds separately. No invented WCAG minimum font-size rule, excessive font shrinkage, universal SVG-width fix or global theme rewrite.

## 3F — Integrated regression and human acceptance

Run accepted F0/B/C/D/E changes through all 94 subsections, seven viewports and both themes. Review lower long-section content as well as headings; inspect every table/diagram type, math modes, worked arithmetic, language-of-parts, heading navigation, table associations, text alternatives and actual keyboard access. Native Thai/English speech and diagram-description equivalence require human AT review.

Preserve all source anchors and 44 scenarios. Verify source/active structured-data/registry ownership rather than treating the textbook as one lossless Markdown stream. Use focused tests that reproduce the actual issue. Keep the four historical diagram-string failures distinct from new regressions and do not weaken tests to force green.

Recheck Phase 2 reload, Resume, direct-link/history precedence, hidden-focus exclusion, Escape/return and responsive state after changes affecting layout or headings. Preserve `sec_cert_reading_progress_v1`. Rehash protected content, original notes and unrelated modules, and stop on concurrent same-file conflicts.

Approval of the audit is not approval of any implementation batch. Each future batch should have a concrete scope, preserved-content inventory, current before/after evidence, relevant regression results and human acceptance. No Phase 3B was started by this supplemental audit.
