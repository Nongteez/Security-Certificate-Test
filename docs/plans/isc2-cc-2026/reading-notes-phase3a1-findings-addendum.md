# Phase 3A.1 — Findings addendum and reconciliation

Date: 2026-11-01 (Asia/Bangkok). **Audit only — Pending Human Review.** No remediation is implemented. Source paths are relative to `D:\_Coding\SEC-CERT-TEST`.

## Counting and classification

This addendum has **three confirmed supplemental records**, not three new independent root causes. P3A1-FID-001 extends the existing raw-HTML fidelity family P3-TXT-002; P3A1-DIA-001 isolates the DMZ mechanism within P3-ACC-001 and elevates that family's highest impact to P1. P3A1-SEM-001 is one newly identified topology-communication family.

Consolidated family count: **14**, with P0 0, P1 3, P2 10, P3 1. Existing P1 table fragmentation/SVG scaling remain; contrast now includes a P1 occurrence. Root-cause families, individual records, affected locations and screenshots are different counts.

| Supplemental ID | Priority | Classification | Existing relationship | Origin/confidence |
|---|---|---|---|---|
| P3A1-FID-001 | P3 | Source markup / Markdown rendering contract mismatch | Extends P3-TXT-002 to four currency locations and one emphasis-note location | Previously identified currency + newly discovered emphasis; high for mechanism; AI origin unknown |
| P3A1-DIA-001 | P1 | CSS/SVG paint and accessibility defect | Refines P3-ACC-001; small-label aspect remains P3-DIA-001 | User-reported DMZ risk; newly isolated mechanism; high |
| P3A1-SEM-001 | P2 | SVG design / semantic topology ambiguity | New bounded family; differs from false sequential arrows | User-reported connectivity concern; high for absent connectors, medium for learner impact |

## P3A1-FID-001 — Raw HTML preserves Markdown-only escape/emphasis syntax

**Domain/objective/subsections:** D1 1.2.2 Quantitative Risk Analysis & Formulas; D1 1.5.2 Due Care vs Due Diligence.

**Exact source:** `content/isc2-cc-2026/reading/domain-1.md:424,445,484,508,951`; `js/core/markdown-parser.js:90–91,355–367`; math routing at `js/core/math-renderer.js:25–118`. The first four source locations display five escaped dollar values; the fifth is one literal-asterisk note. Valid escaped amounts in actual math expressions are separate and should remain.

**Visible symptoms:** backslashes precede currency in the AV definition, SLE variable explanation, ALE variable explanation and cost-benefit paragraph. The Due Care table note displays its opening/closing asterisks. The note already has italic CSS styling; visible syntax is still unintended.

**Actual root cause:** authored raw HTML mixes syntax intended for the inline Markdown path with a pass-through branch that does not call `parseInline`. It handles paired math delimiters but neither general emphasis nor standalone currency unescaping. This is a source/renderer contract mismatch; it is not JSON corruption, incorrect arithmetic, a broken math engine or proof of AI conversion. The browser loader uses UTF-8 text directly.

**Evidence:** `artifacts/qa/reading-notes-phase3a1/source-fidelity-inventory.json`, `pipeline-experiments.json`, `browser-results.json` D1/1366/Light and Dark, `note-results.json`; screenshots `risk-1366-light.png`, `risk-1366-dark.png`, `due-care-note-1366-light.png`, `due-care-note-390-dark.png`. All 94 source/DOM rows are in `fidelity-coverage.json`.

**Educational impact:** minor visible artifacts distract from a worked example and a useful qualification. Amounts, assumptions, arithmetic and the qualifier's meaning are intact. Keep P3 rather than inflating this into a mathematical accuracy finding.

**Recommended layer and bounded correction:** prefer a source-fidelity micro-batch for the four raw HTML currency locations and the raw HTML note. Candidate currency representation: `&#36;` within raw HTML; candidate emphasis: `<em>…</em>` or an ordinary Markdown note. Keep the existing Thai/English wording, formulas and all amounts. No change is authorized now.

**Why global removal is unsafe:** a QA-only `<p>` with two unescaped plain dollar values enters the raw-HTML math matcher and consumes text between them. Entity-encoded currency stays outside that matcher. This planning test is not counted as an additional current content defect. If a parser-level solution is chosen instead, it needs explicit rules for currency versus inline/display math and broader regression tests.

**Original-note/provenance check:** `ISC2 Update 2026/Domain 1/D1 sum.md:560–615,647–655` uses plain currency and correct AV/EF/SLE/ALE relationships. It is an editorial reference, not a runtime source. Attribution to a specific author, AI conversion step or JSON transformation cannot be established.

**Acceptance for a future batch:** no U+005C before the five intended displayed currency values; no literal emphasis markers in the note; valid `\times`, escaped dollars inside math, SLE/ARO/ALE calculations and both KaTeX/fallback behavior preserved. Test a line containing two currencies as well as one. Source and production remain unchanged in this audit.

## P3A1-DIA-001 — Unspecified DMZ service fills produce near-invisible Light titles

**Domain/objective/subsection:** D4 4.2.3, `topic-4-2-dmz-architecture`; authored at `content/isc2-cc-2026/reading/domain-4.md:343–357`.

**Exact source:** `js/core/diagram-generator.js:2435–2445`, three service rectangles and their labels; `.diag-box` at `css/reading.css:1376–1380`, title fill at `1389–1394`. SVG root/viewBox at `diagram-generator.js:2405`.

**Visible symptom and actual root cause:** Web Server / WAF, Mail Gateway (SMTP) and Public DNS / Proxy are drawn in generic rectangles with no fill attribute or fill variant. The generic rule supplies a stroke but no fill. The resulting computed black fill is paired with the Light theme's dark title paint. This is a verified SVG/CSS paint mechanism, not an inference from a screenshot or an assumed Dark-mode bug. [SVG fill specification](https://www.w3.org/TR/SVG2/painting.html#SpecifyingFillPaint).

**Measured result:** all three Light titles are **1.2908:1** on black at 1366 and 1024; Dark titles are **18.795:1** on the same black. The Dark title contrast is acceptable; the small labels and muted supporting text have separate issues. Normal instructional text requires appropriate contrast; the [WCAG contrast criterion](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) is the reference, not a claim that all diagram text fails in both themes.

**Educational impact / severity:** P1 because the names of the public-facing services are almost invisible in the available desktop representation. This obscures the DMZ's central teaching point. P3-ACC-001's previous P2 assessment must be refined by this occurrence rather than blindly retained.

**Repeated locations:** three rectangles in one diagram payload, visible in both measured desktop widths; not three independent findings. The scan across all 24 visible desktop diagrams found these three generic black `rect.diag-box` instances; no additional occurrences of this exact omitted-fill mechanism were detected. Mobile/tablet use a different HTML stack.

**Related legibility evidence:** 840×280 viewBox; 760×253.3 px SVG inside an 867 px wrapper at 1366. Minimum instructional text is 8.14 px, falling to 5.62 px at 1024. FW columns are only 55 viewBox units wide. These are occurrences of P3-DIA-001, not additional root counts. Width:100% alone cannot supply adequate label area or solve the missing fill.

**Evidence:** `browser-results.json` D4/1366/1024 in both themes; `dmz-1366-light.png`, `dmz-1366-dark.png`, `dmz-1024-light.png`, `dmz-768-light.png`, `dmz-390-dark.png`. Raw hidden SVG service measurements are excluded; tablet/phone evidence describes the visible HTML alternative.

**Recommended layer:** explicit diagram-specific fill/text pairing, then content-aware SVG/HTML legibility. Start with a narrowly scoped paint correction and test the three labels in both themes. Do not globally set every `.diag-box` to one color. Preserve service names, sample ports, current academic qualifications and Phase 2 behavior. No repair was made.

## P3A1-SEM-001 — DMZ connectivity is implicit despite a topology/flow description

**Domain/objective/subsection:** D4 4.2.3, same source and payload as above.

**Source/DOM evidence:** desktop SVG at `diagram-generator.js:2405–2485` contains zone/service rectangles and labels but **zero** line/path/polyline/polygon connectors. Its accessible name describes external-firewall→DMZ traffic and an internal firewall separating the private network. Mobile offers three zone cards and mentions firewalls in prose rather than explicitly representing connections.

**Confirmed scope and confidence:** the absence of explicit links is confirmed. As a zone overview, spatial adjacency remains a reasonable simplification. As a “Dual-Firewall Perimeter Architecture” topology, it leaves firewall interfaces and allowed/denied exchanges under-explained visually. This is a P2 presentation ambiguity, not a confirmed wrong network topology or proof that learners necessarily choose one erroneous route. Confidence: high for observable structure, medium for the inferred comprehension impact.

**Actual/probable root cause:** the visual has been implemented as a five-column concept inventory, while its title/accessibility description promise connectivity. No traffic direction/permission key explains how adjacency should be interpreted.

**Original-note comparison:** `ISC2 Update 2026/Domain 4/Domain 4.md:92–108` includes illustrative HTTPS-to-DMZ and denied-direct-database policies, separate firewall roles and a conceptual path. It qualifies the two-firewall form as one example. This supports making topology/boundaries explicit, without claiming that each packet must follow the entire path.

**Recommended layer:** Diagram Content/Data, SVG Layout and Accessibility Metadata. Choose either a clearly labelled zone/boundary overview with an adjacent explanation of exchanges, or a small topology with explicit firewall-mediated links and an illustrative policy legend. If arrows are used, distinguish permitted example flows, responses and blocked direct Internet→internal access. Public service requests can terminate in the DMZ; an internal-dependent service may use a separately allowed connection through FW2. Do not force every packet through every service or portray all traffic as one mandatory serial workflow. [NIST DMZ definitions](https://csrc.nist.gov/glossary/term/demilitarized_zone).

**Evidence:** the same eight DMZ states and `diagram-classification.json`; this issue is independent of text size/contrast. It is the one newly identified root family in the supplemental count.

## All-94 source-fidelity dispositions

`fidelity-coverage.json` records every subsection and its source line. Exactly two subsection ranges had unintended visible syntax candidates after contextual review: 1.2.2 currency and 1.5.2 emphasis. All other 92 ranges had no further visible-syntax candidates in the current fresh desktop/theme scan. This is not a blanket presentation PASS: their prior semantic, layout, language and contrast findings still apply.

All 22 Markdown table shapes match the DOM; no incorrect row/column conversion found. No active textbook code fences or preformatted ASCII diagrams were found, so no code-block defect is manufactured from examples in the original course notes. No fresh `.katex-error` nodes were detected. Existing nested lists retain parent/detail relationships. The 44 scenarios preserve context/question/answer grouping; they are not a list-flattening failure.

The three structured directives deliberately render external data arrays, and 24 diagram placeholders deliberately render registry payloads. Their bodies/placeholders are not independent authoritative rendered text. Future source editing must preserve surrounding prose and active data. This maintenance risk is recorded as **P3A1-Q-001**, linked to earlier P3-Q-004 / RN-I-016; no additional current omission is confirmed and it is excluded from defect counts.

## Existing Phase 3A issues reconciled

| Existing family | Supplemental disposition |
|---|---|
| P3-VS-001 — BC/DR | Confirmed nesting/affordance remains; containment is an acceptable bounded teaching model, not a universal mathematical theorem. |
| P3-VS-002 — measurement | Correct prose remains; numbered tiers and framework naming still conflict visually. Group metrics/indicators separately from communication formats. |
| P3-TBL-001 — terminology | All 15 ranges remain supported by valid prior measurements; current source/CSS/renderer hashes and table shapes match. No additional generic table-root count. |
| P3-DIA-001 — diagram scaling | All 24 payloads reclassified by intended relationship; original size/viewBox data remains valid. Fresh DMZ reproduces the severe small-label case. |
| P3-TXT-001 / SEM-001 | Network Fundamentals requires meaningful group headings; OSI requires semantic layer headings. Do not conceal list numbers with CSS or remove explanatory text. |
| P3-SEM-002 / SEM-003 | Optional/repeatable JML Mover and overlapping control functions still need appropriate visual relationships. Genuine arithmetic/temporal order is retained elsewhere. |
| P3-DIA-002 / TBL-002 | Cloud legend clipping and GRC padded-cell overflow remain supported; no source/CSS change resolves them. |
| P3-ACC-001 | Highest family priority escalated to P1 for newly isolated DMZ service-label visibility; other occurrences retain their individual measured priority. |
| P3-ACC-002 | Thai passages still lack appropriate language-of-parts metadata; borrowed technical-term exceptions remain important. |
| P3-TXT-002 | Expanded and technically explained under P3A1-FID-001; same fidelity family, not an additional currency finding. |

The 15 terminology ranges are listed exactly in prior `findings.json` under P3-TBL-001 and copied to `table-reconciliation.json`: D1 core concepts, CIA, authorization/accounting and distinctions/scenarios; D2 risk register, BC/DR, social-engineering techniques, KPI/KRI, scorecards and memory aid; D3 roles and review scenarios; D4 TCP/UDP, hybrid/multi-cloud and review scenarios. Normal word-boundary/hyphen wrapping is excluded from the fragmentation count.

Additional **qualified** concerns remain separate: native speech of raw fallback math labels; precedence/course provenance; DMZ mobile absolute-sounding security wording; and semantic interpretation of declarative zone names. These require their appropriate academic/AT review before wording changes. The current audit does not silently authorize correcting academic statements or certify security guarantees.
