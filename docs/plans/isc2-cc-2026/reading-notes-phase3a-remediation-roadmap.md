# Phase 3A — Proposed presentation remediation roadmap

Date: 2026-11-01 (Asia/Bangkok). **Planning only. No implementation is authorized or performed by this document.** Human Review and Human Acceptance are pending.

Preserve educational depth, the 48 reported academic corrections, all 94 subsection identities, examples, worked calculations, comparisons and scenario rationales. Keep the Phase 2 progress/navigation implementation and V1 storage contract intact. Prior academic wording changes are the baseline, not an invitation to reopen them during visual work.

## Priorities and dependencies

P1 instructional legibility and mobile table fragmentation deserve early pilots. Phase labels describe bounded work areas, rather than requiring the whole hierarchy phase to finish before a small legibility correction can be reviewed. Resolve relationships before polishing their final diagram geometry. Check contrast during every pilot, not only at the end.

The [findings register](reading-notes-phase3a-findings-register.md) supplies evidence and qualifications. The [coverage matrix](reading-notes-phase3a-coverage-matrix.md) supplies occurrences. A repeated symptom in twenty diagrams is one shared defect family, not twenty unrelated redesign tickets.

## Phase 3B — Content hierarchy and local rhythm

### 3B-1 — Two-subsection semantic pilot

Scope: Domain 4 / 4.1.1 Network Fundamentals and 4.1.2 OSI. Findings P3-TXT-001 / P3-SEM-001.

Proposed files: `content/isc2-cc-2026/reading/domain-4.md`; only narrowly scoped `css/reading.css` rules if the source pilot demonstrates a spacing need. No shared Markdown parser rewrite is justified by this audit: nested lists are rendering correctly.

1. Establish the before/after text inventory and heading/anchor map. Preserve the existing mnemonic, correct layer numbers, protocols/technologies, responsibilities, examples and PDU detail.
2. Promote Network Scope, Collision & Broadcast Domains and architectural reach to meaningful subsection headings or equivalent semantic definition groups.
3. Promote Layer 7 through Layer 1 to semantic headings. Keep explanatory detail with each layer. Label the exposition direction if useful; do not reverse the already correct Layer 1→7 mnemonic.
4. Adjust proximity by content role: group title, definition, example and next concept. Do not add the same large margin to all list items or hide ordered markers as a substitute for source structure.
5. Verify the heading outline and reading order, preserved educational text, and actual long-section layouts at seven viewports × both themes. Recheck Phase 2 anchors, reload, history and Resume.

Acceptance: a learner can find a conceptual group or OSI layer by heading; no competing ordinal appears as “1. Layer 7”; every original explanation is retained; no unrelated CSS changes. User review of the two pilots precedes wider application.

### 3B-2 — Two further content-type pilots

Scope: Domain 2 / 2.2.7 Backup & Recovery Sites and Domain 3 / 3.1.7 IAM Technology Stack. Findings P3-TXT-001; compare the occurrence ledger before extending scope.

Separate backup strategy from recovery-site types; separate directory services, IdPs and access-management platforms. Keep examples and qualifications. Use the pilot pattern only where it actually fits. An unordered feature collection can remain a list; a genuine worked procedure can retain numbering.

Acceptance: concept boundaries are obvious in the DOM and visually; no loss of explanation, source qualifiers, Thai/English terminology or examples. Short coherent lists do not become an unnecessary card system.

### 3B-3 — Evidence-led rollout

Only after pilot approval, review the remaining mapped group transitions in IPv4/IPv6, ports, wireless, network threats, social-engineering psychology and incident metrics. Inventory occurrences before editing each small domain batch. Do not turn every colon-ended paragraph or bold phrase into a heading. Keep all original anchors stable.

## Phase 3C — Tables and technical typography

### 3C-1 — Generic comparison-table pilot

Scope: Domain 2 / 2.4.8 trigger matrix, plus one social-engineering comparison. Finding P3-TBL-001 (P1 on phone).

Proposed primary layer: table layout/local Reading CSS. Consider explicit column-role metadata in the component renderer only if CSS/source semantics cannot express the pattern cleanly; any cross-module architectural dependency needs a separately reviewed scope.

Allocate space according to term, explanation and example needs. Keep whole English words. Prefer word-boundary wrapping and meaningful minimum widths; use contained horizontal scrolling where comparison requires it. Give that region a discoverable scrolling affordance and understandable association with its table heading. Do not reduce fonts to compensate, introduce `word-break:break-all`, or force all tables into cards.

Acceptance: Dashboard, Scorecard, Smishing and Pretexting remain readable at the actual rendered widths; Thai-English text wraps sensibly; column headers and row relationships remain available; keyboard/touch/zoom access works. Inspect all seven viewports, both themes and the end of a horizontally scrolled table. A page-level overflow test alone is insufficient.

### 3C-2 — GRC padded-cell correction

Scope: Domain 2 / 2.1.4 special framework table. Finding P3-TBL-002.

Treat nowrap text width plus padding as the acceptance measurement, not just table width. Fit Enterprise IT Governance inside its last cell, or allow wrapping at word boundaries. Preserve the existing header associations and readable contained scrolling. The current native keyboard-scroll behavior works and must remain.

Acceptance: text-right ≤ cell-right minus required padding after fonts settle, at 1024/768/390/375/320 and wide desktop in both themes. Verify that an unchanged keyword does not escape its cell even when the wrapper scrolls correctly.

### 3C-3 — Apply only to measured occurrences

Use the 15-range occurrence list, excluding ordinary wraps at spaces or hyphens. Recheck the small tables that already work. Document whether each table remains a comparison or becomes an independently meaningful definition group. Preserve every cell's information and column meaning.

## Phase 3D — Diagram semantics

### 3D-1 — Measurement relationships

Scope: `effectivenessHierarchy`, Domain 2 / 2.4.8. Finding P3-VS-002.

Replace a fixed numbered hierarchy with grouping by function. Metric is a measured value; KPI/KRI are selected by performance/risk purpose and can overlap by use. Dashboard, Scorecard and Report are presentation/communication forms that may coexist. Preserve all six definitions and examples, and the corrected non-mandatory prose. Synchronize visible title, mobile reading order and accessible name. Label the result as a local study aid rather than an official six-stage ISC2 framework.

Acceptance: neither representation implies a mandatory 01→06 procedure or a mandatory reporting pipeline. A beginner can distinguish measure, purpose and communication form without guessing the reading direction.

### 3D-2 — JML optional transitions

Scope: `iamLifecycle`, Domain 3 / **3.1.1**. Finding P3-SEM-002.

Show direct offboarding without a Mover event, repeated role changes if applicable, and ongoing review/governance. Preserve the useful join/provision, re-evaluate and revoke examples. Any proposed change to stronger role-first academic wording is a separate academic-owner review lead (P3-Q-006), not an automatic visual-task correction.

Acceptance: a learner understands that Mover is conditional and repeatable, not compulsory before Leaver. Continuous Governance remains meaningful at desktop and phone sizes.

### 3D-3 — BC/DR and control-function simplification

Two independently reviewable assets: `bcVsDrScope` (P3-VS-001) and `controlTimeline` (P3-SEM-003).

BC/DR: pilot a simple labelled scope relationship, non-interactive category labels and adjacent practical examples. Preserve BC breadth and DR technology/system recovery support; avoid asserting a universal formal subset theorem. Do not replace it with another elaborate nested card layout.

Control functions: remove or qualify workflow arrows that compete with the corrected overlap explanation. Keep function/purpose primary, including retrospective detection and multi-role controls. A carefully labelled illustrative timing model may remain if it does not confine functions to exclusive stages.

Acceptance: desktop/mobile and visible/accessibility representations express the same bounded relationship. Correct text remains intact and examples remain readable.

D1/D4 layered-defense geometry is an optional design concern (P3-Q-001), not a confirmed academic defect. A clearer shared asset may be useful, but an onion diagram is not mandatory. Do not automatically redesign all 24 assets.

## Phase 3E — Diagram legibility, contrast and space

### 3E-1 — Component-width legibility pilot

Scope: JML plus one dense D4 asset, such as DMZ or model mapping. Finding P3-DIA-001.

Use available width/height and a stated actual on-screen instructional-text budget. Choose representation at a useful component width, not only viewport 768 px. Preserve semantic relationships through any HTML alternative. Enlarging a capped diagram slightly will not solve 5.6–7 px labels in a narrow rail-constrained pane; use a readable alternative when the geometry demands it.

Acceptance: measure computed font size multiplied by the screen transformation, not only authored SVG `font-size`; check all labels and Governance, not just titles. Demonstrate desktop, 1024 px, tablet and phone with both sidebar states and themes. Agree the legibility target with the user; do not misstate a product target as a WCAG minimum font size.

### 3E-2 — Specific contrast pairs

Scope: P3-ACC-001 support labels, JML strip/badges and scenario answer labels. Proposed layers: local Reading tokens/styles and only relevant SVG text/fill choices.

Acceptance: instructional normal text meets 4.5:1 against its actual painted/composited background after theme transitions settle; color names do not substitute for measurement. Keep the current passing Light Joiner badge and Dark scenario label behavior. Do not impose new global theme changes on Slides/Quiz/Vocabulary.

### 3E-3 — Cloud legend bounds

Scope: `cloudSharedResponsibility`. Finding P3-DIA-002.

Wrap/reposition the legend or use adjacent semantic HTML. Preserve all corrected responsibility wording. Acceptance: label bounds stay inside the SVG/HTML region in each visible representation; no clipping at 1920/1366/1024. A document-width assertion is not enough.

Rollout to the remaining small-label assets follows the pilot and diagram-review ledger. Keep the meaningful calculation timeline/causal/comparison representations rather than rebuilding every diagram for novelty.

## Phase 3F — Integrated accessibility, academic and browser regression

1. Add Reading-local language-of-parts markup (P3-ACC-002) in a separate bounded batch covering authored/generated content. Respect exceptions for borrowed technical terms and names; manually test Thai/English pronunciation with a native screen reader.
2. Verify heading navigation, table-header associations, diagram alternatives and reading order. Existing tables have column headers; do not “repair” a nonexistent blanket missing-header problem. Confirm that named SVGs plus nearby prose still convey the relationship when a visual is unavailable.
3. Address the minor currency escape (P3-TXT-002) separately from formulas. Test raw HTML and inline Markdown without changing valid values or breaking KaTeX. Evaluate fallback math speech (P3-Q-002) before choosing a metadata change.
4. Run all relevant Reading Notes, academic A/B and Phase 2 regressions. Preserve every subsection anchor and scenario. Record the four known historical diagram-string failures separately; do not weaken tests to hide new failures or change correct academic strings merely to restore stale assertions.
5. Repeat all 94 subsection ranges × seven viewports × both themes. Include long-section lower content, full table scroll extent, actual transformed SVG text, zoom/reflow and user keyboard journeys. Use fresh isolated browser profiles; do not write test progress to the user's normal profile.
6. Rehash protected files, list exact changes, review before/after educational meaning, and obtain human acceptance for each bounded batch before broad rollout. A screenshot count or unit-string match alone is not acceptance.

## Review gates and exclusions

Recommended first approved implementation scope: **3B-1 only**, the two Domain 4 semantic pilots, with a separate early review of the P1 table/diagram legibility pilots if desired. No approval is inferred from this roadmap.

Each batch needs a small diff, explicit preserved-text/anchor inventory, current before/after evidence, appropriate tests and a report with residual risks. Protect concurrent work and stop on same-file conflicts. No deletion of correct explanations, font shrinkage, universal margins, universal card conversion, new architecture, navigation/progress replacement, original-note changes, Domain 5 work or unrelated module edits. No commit/push action or Human Acceptance approval is included.
