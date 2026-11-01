# Phase 3A — Findings register

Audit only. Repository: `D:\_Coding\SEC-CERT-TEST`. Date: 2026-11-01 (Asia/Bangkok). Current dirty working tree is the baseline. No remediation or Human Acceptance is performed.

**13 confirmed root-cause findings: P0 0, P1 2, P2 10, P3 1.** Repeated occurrences are not separate defect counts. The six mandatory IDs are retained. Qualified concerns/acceptable patterns below are excluded from these totals.

| ID | Severity | Verified result | Origin | Remediation layers |
|---|---|---|---|---|
| P3-VS-001 | P2 | BC/DR nesting and control-like scope labels obscure the teaching relationship | User-reported | Diagram Content/Data, SVG Layout, Local CSS |
| P3-VS-002 | P2 | Measurement aid retains a numbered hierarchy despite corrected non-mandatory prose | User-reported | Diagram Content/Data, SVG Layout, Accessibility Metadata |
| P3-TBL-001 | P1 | English terminology fragments in compressed comparison tables | User-reported; repeated occurrences newly mapped | Table Layout, Local CSS, Component Renderer |
| P3-DIA-001 | P1 | Scaled SVG instructional text is too small; JML is the mandatory exemplar | User-reported; previously identified system-wide | SVG Layout, Local CSS |
| P3-TXT-001 | P2 | Concept-group labels remain ordinary paragraphs with weak local rhythm | User-reported; similar source patterns newly mapped | Source Content Structure, Markdown Semantics, Local CSS |
| P3-SEM-001 | P2 | OSI layer titles are ordered-list labels rather than semantic subsections | User-reported | Source Content Structure, Markdown Semantics |
| P3-SEM-002 | P2 | JML connectors imply a compulsory Mover stage | Newly discovered visual-semantic distinction within user-reported JML target | Diagram Content/Data, SVG Layout, Accessibility Metadata |
| P3-SEM-003 | P2 | Control function comparison still has workflow arrows | Previously identified; current visual residual | Diagram Content/Data, SVG Layout |
| P3-DIA-002 | P2 | Cloud provider legend clips inside its own SVG | Previously identified | SVG Layout, Diagram Content/Data |
| P3-TBL-002 | P2 | GRC protected keyword exceeds its padded final cell | Previously identified | Table Layout, Local CSS, Component Renderer |
| P3-ACC-001 | P2 | Instructional labels have insufficient contrast in specific settled themes | Previously identified; exact current occurrences measured | Local CSS, SVG Layout, Accessibility Metadata |
| P3-ACC-002 | P2 | Thai instructional passages inherit the English page language | Previously identified | Accessibility Metadata, Source Content Structure, Component Renderer |
| P3-TXT-002 | P3 | Raw currency escape appears in a risk worked example | Previously identified | Source Content Structure, Component Renderer |

## P3-VS-001 — P2 — BC/DR nesting and control-like scope labels obscure the teaching relationship

**Status:** Confirmed presentation defect. **Confidence:** High for structure; medium for perceived affordance. **Origin:** User-reported.

**Source:** `domain-2.md:181–195; diagram-generator.js:1501–1593; reading.css diagram scope/mobile scope rules`. Paths without a directory denote `content/isc2-cc-2026/reading/`, `js/core/`, or `css/` as appropriate.

**Evidence:** [direct-P3-VS-001-1366-light.png](../../../artifacts/qa/reading-notes-phase3a/direct-P3-VS-001-1366-light.png), [direct-P3-VS-001-390-dark.png](../../../artifacts/qa/reading-notes-phase3a/direct-P3-VS-001-390-dark.png); [browser-results.json](../../../artifacts/qa/reading-notes-phase3a/browser-results.json) / [focused-results.json](../../../artifacts/qa/reading-notes-phase3a/focused-results.json).

**Observed impact:** The diagram uses an outer card, BC enclosure, DR enclosure, badges, five pill-shaped labels and a further examples panel. On phone the containment consumes most of the available 328 px reading width. Scope nouns look like controls although they have no interaction. Examples compete with category framing.

**Root cause / layers:** Repeated nested framing and decorative badge/pill styling perform several visual jobs without a clear priority. Diagram Content/Data, SVG Layout, Local CSS.

**Recommendation (proposal only):** Pilot one simple BC scope boundary with a clearly labelled technology-recovery contribution and examples as ordinary adjacent text. Show People, Processes, Facilities, Suppliers and Technology as non-interactive scope labels. Preserve every example and the existing correct DR translation. Suggested relationship caption: “DR supports business continuity through technology and system recovery / DR สนับสนุนความต่อเนื่องทางธุรกิจด้วยการกู้คืนเทคโนโลยีและระบบ”.

**Qualifications:** Containment is an acceptable introductory scope model, not a newly confirmed academic error or a universal set-theory claim about all DR practices. Button-like appearance is an affordance assessment, not a claim that users clicked these controls in usability testing.

**Prior-state comparison:** Academic D2-06 translation is already corrected; this is a separate presentation issue.

**Primary references:** [reference 1](https://csrc.nist.gov/topics/security-and-privacy/security-programs-and-operations/contingency-planning), [reference 2](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf).

**Occurrence tracing:** 1 subsection ranges. See the coverage matrix, `subsection-review.json`, raw measurements and `findings.json` for exact anchor associations. This is not a new defect count per occurrence.

## P3-VS-002 — P2 — Measurement aid retains a numbered hierarchy despite corrected non-mandatory prose

**Status:** Confirmed presentation defect. **Confidence:** High. **Origin:** User-reported.

**Source:** `domain-2.md:433–450; diagram-generator.js:1697–1874`. Paths without a directory denote `content/isc2-cc-2026/reading/`, `js/core/`, or `css/` as appropriate.

**Evidence:** [direct-P3-VS-002-1366-light.png](../../../artifacts/qa/reading-notes-phase3a/direct-P3-VS-002-1366-light.png), [direct-P3-VS-002-390-dark.png](../../../artifacts/qa/reading-notes-phase3a/direct-P3-VS-002-390-dark.png); [browser-results.json](../../../artifacts/qa/reading-notes-phase3a/browser-results.json) / [focused-results.json](../../../artifacts/qa/reading-notes-phase3a/focused-results.json).

**Observed impact:** Desktop puts 06 Report at the top, 04/05 in the next row, 02/03 below and 01 Metric at the bottom, linked by a dashed vertical spine. Mobile presents 06 down to 01. The region name still says “6-Part Framework”. Numbering, reading order and architecture framing imply more order/officialness than the correct explanatory paragraph warrants.

**Root cause / layers:** A local memory aid is encoded as a tiered numbered architecture rather than a relationship between kinds of measures and communication forms. Diagram Content/Data, SVG Layout, Accessibility Metadata.

**Recommendation (proposal only):** Group by function: “Measurement and indicators / การวัดและตัวชี้วัด” (Metric, with purpose-selected KPI and KRI) and “Presentation and communication / การนำเสนอและสื่อสาร” (Dashboard, Scorecard, Report). Remove step ordinals and workflow connectors unless attached to an explicitly optional worked example. Label it as a local study aid in visible and accessible text. Preserve all six definitions and examples.

**Qualifications:** Batch A already corrected Metric as including KPI/KRI, and current Thai prose expressly rejects a mandatory sequence. Do not re-open that academic correction or claim the current prose explicitly attributes six steps to ISC2. The outline lists topics, not this architecture; provenance as AI-generated is not established.

**Prior-state comparison:** Residual visual issue related to D2-04, not a recurrence of its corrected raw-data-only definition.

**Primary references:** [reference 1](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf), [reference 2](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html).

**Occurrence tracing:** 1 subsection ranges. See the coverage matrix, `subsection-review.json`, raw measurements and `findings.json` for exact anchor associations. This is not a new defect count per occurrence.

## P3-TBL-001 — P1 — English terminology fragments in compressed comparison tables

**Status:** Confirmed presentation defect. **Confidence:** High. **Origin:** User-reported; repeated occurrences newly mapped.

**Source:** `domain-2.md:441–448; reading.css:2828–2853; markdown-parser.js table renderer:459–493; additional occurrences in coverage matrix`. Paths without a directory denote `content/isc2-cc-2026/reading/`, `js/core/`, or `css/` as appropriate.

**Evidence:** [direct-P3-TBL-001-1366-light.png](../../../artifacts/qa/reading-notes-phase3a/direct-P3-TBL-001-1366-light.png), [direct-P3-TBL-001-390-dark.png](../../../artifacts/qa/reading-notes-phase3a/direct-P3-TBL-001-390-dark.png); [browser-results.json](../../../artifacts/qa/reading-notes-phase3a/browser-results.json) / [focused-results.json](../../../artifacts/qa/reading-notes-phase3a/focused-results.json).

**Observed impact:** At 1366 px, the memory-aid table is 915 px wide but its first column is only 91 px: Dashboard and Scorecard break mid-word. At 390 px, four columns squeeze into 328 px; the first is about 55 px. At 320 px they squeeze into 258 px, with a roughly 50 px first column. Even Metric/KPI and ordinary trigger phrases fragment. The sweep finds unhyphenated mid-word breaks in 15 subsection ranges across all four domains.

**Root cause / layers:** Generic table auto sizing plus width:100% and word-break/overflow-wrap:break-word permits columns to shrink below technical-term needs. Most affected tables do not adopt the GRC table’s contained minimum-width behavior. Table Layout, Local CSS, Component Renderer.

**Recommendation (proposal only):** Pilot meaningful term/description/example column roles, preserve whole English words and mixed-language phrase boundaries, allocate sufficient keyword width, and use a labelled contained scrolling comparison where needed. Retain row/column relationships and current font sizes. Consider a narrow definition presentation only if it preserves comparison tasks; do not universally convert tables to cards.

**Qualifications:** Severity P1 describes severe phone fragmentation in this root-cause family; desktop two-line wrapping is P2 in isolation. Normal wrapping at spaces or intentional hyphens is excluded from the affected-range count. Horizontal scrolling itself is not a defect and WCAG permits necessary two-dimensional tables.

**Prior-state comparison:** Related RN-I-014; the specific Dashboard/Scorecard and broader 15-range mapping are fresh current evidence.

**Primary references:** [reference 1](https://www.w3.org/WAI/WCAG21/Understanding/reflow), [reference 2](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html).

**Occurrence tracing:** 15 subsection ranges. See the coverage matrix, `subsection-review.json`, raw measurements and `findings.json` for exact anchor associations. This is not a new defect count per occurrence.

## P3-DIA-001 — P1 — Scaled SVG instructional text is too small; JML is the mandatory exemplar

**Status:** Confirmed presentation defect. **Confidence:** High. **Origin:** User-reported; previously identified system-wide.

**Source:** `domain-3.md:9–38 (3.1.1, not reported 3.4.1); diagram-generator.js:1877–1982; reading.css:1184–1210,1880–1897`. Paths without a directory denote `content/isc2-cc-2026/reading/`, `js/core/`, or `css/` as appropriate.

**Evidence:** [direct-P3-DIA-001-1366-dark.png](../../../artifacts/qa/reading-notes-phase3a/direct-P3-DIA-001-1366-dark.png), [direct-P3-DIA-001-1024-light.png](../../../artifacts/qa/reading-notes-phase3a/direct-P3-DIA-001-1024-light.png), [feature-d4-topic-4-2-dmz-architecture-diagram-0-1366-light.png](../../../artifacts/qa/reading-notes-phase3a/feature-d4-topic-4-2-dmz-architecture-diagram-0-1366-light.png); [browser-results.json](../../../artifacts/qa/reading-notes-phase3a/browser-results.json) / [focused-results.json](../../../artifacts/qa/reading-notes-phase3a/focused-results.json).

**Observed impact:** JML uses an 840×220 viewBox. At 1366 px the wrapper has 867 px but the SVG caps at 760×199 px; minimum instructional text is 9.95 px. At 1024 px it renders at 525×137.5 px, with 6.88 px minimum text. All 24 diagram payloads in 23 subsection ranges have small labels at that width: D1 minimum 6.72, D2/D3 6.56, D4 5.62 px. Continuous Governance is a short, visually weak strip.

**Root cause / layers:** Authored 10–12 px SVG labels are scaled by broad fixed viewBoxes, maximum-width caps and a viewport-only 768 px representation breakpoint. The desktop rail reduces the actual component width well before that breakpoint. SVG Layout, Local CSS.

**Recommendation (proposal only):** Pilot JML and a dense D4 diagram with a component-width-driven representation and a legibility budget for actual transformed instructional text. Use available width/height, enlarge/wrap labels and reduce unused space. Keep governance legible and explicit. Allow diagrams with different information density to adapt differently. Validate full-width and sidebar-open/collapsed cases without changing Phase 2 navigation.

**Qualifications:** Phone/tablet ≤768 px use a separate HTML representation; do not report the hidden desktop SVG as tiny visible phone text. A readable font-size budget is a product acceptance target, not a fabricated WCAG minimum-font-size rule. Contrast is separately counted under ACC-001.

**Prior-state comparison:** RN-I-001 remains confirmed; JML is an occurrence, not a second global defect.

**Primary references:** [reference 1](https://www.w3.org/WAI/WCAG21/Understanding/reflow).

**Occurrence tracing:** 23 subsection ranges. See the coverage matrix, `subsection-review.json`, raw measurements and `findings.json` for exact anchor associations. This is not a new defect count per occurrence.

## P3-TXT-001 — P2 — Concept-group labels remain ordinary paragraphs with weak local rhythm

**Status:** Confirmed presentation defect. **Confidence:** High. **Origin:** User-reported; similar source patterns newly mapped.

**Source:** `domain-4.md:9–27,96–149,178–208,243–313; reading.css:591–597,660–694; additional ranges in coverage matrix`. Paths without a directory denote `content/isc2-cc-2026/reading/`, `js/core/`, or `css/` as appropriate.

**Evidence:** [direct-P3-TXT-001-390-light.png](../../../artifacts/qa/reading-notes-phase3a/direct-P3-TXT-001-390-light.png), [direct-P3-TXT-001-1366-dark.png](../../../artifacts/qa/reading-notes-phase3a/direct-P3-TXT-001-1366-dark.png); [browser-results.json](../../../artifacts/qa/reading-notes-phase3a/browser-results.json) / [focused-results.json](../../../artifacts/qa/reading-notes-phase3a/focused-results.json).

**Observed impact:** Network Scope, Collision & Broadcast Domains and architectural reach are plain paragraph labels, not navigable subheadings. They inherit normal 15.5 px / 27.9 px prose with 0 px top and 16 px bottom margins. The following list gets negative top spacing from p+ul. Three different classifications read as a continuous list/paragraph stream. Similar group transitions occur in address planning, wireless, recovery sites and IAM tools.

**Root cause / layers:** Source encodes meaningful conceptual transitions as colon-ended paragraphs or bold list text; generic proximity rules cannot distinguish a group title from an ordinary list introduction. Source Content Structure, Markdown Semantics, Local CSS.

**Recommendation (proposal only):** Promote meaningful concept-group labels to semantic h4 subheadings, or a definition-group structure where that is more appropriate. Keep definition, explanation and example together. Pilot content-sensitive group spacing on Network Fundamentals and DRP sites; preserve LAN/WAN/WLAN/PAN/VPN and every explanation. Avoid a global li-margin increase.

**Qualifications:** The content is not wrong because it is long. Some colon-ended introductory sentences correctly remain paragraphs. The ten mapped ranges are reviewed candidate occurrences of this structure problem, not a rule that every colon becomes a heading.

**Prior-state comparison:** Related RN-I-013/014 and Batch B presentation deferrals.

**Primary references:** [reference 1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html).

**Occurrence tracing:** 10 subsection ranges. See the coverage matrix, `subsection-review.json`, raw measurements and `findings.json` for exact anchor associations. This is not a new defect count per occurrence.

## P3-SEM-001 — P2 — OSI layer titles are ordered-list labels rather than semantic subsections

**Status:** Confirmed presentation defect. **Confidence:** High. **Origin:** User-reported.

**Source:** `domain-4.md:29–77; source starts seven numbered layer groups at line 40`. Paths without a directory denote `content/isc2-cc-2026/reading/`, `js/core/`, or `css/` as appropriate.

**Evidence:** [direct-P3-SEM-001-1366-light.png](../../../artifacts/qa/reading-notes-phase3a/direct-P3-SEM-001-1366-light.png), [direct-P3-SEM-001-390-dark.png](../../../artifacts/qa/reading-notes-phase3a/direct-P3-SEM-001-390-dark.png); [browser-results.json](../../../artifacts/qa/reading-notes-phase3a/browser-results.json) / [focused-results.json](../../../artifacts/qa/reading-notes-phase3a/focused-results.json).

**Observed impact:** The DOM correctly nests bullet details under seven ol items, but exposes “1. Layer 7” through “7. Layer 1”. Those ordinal markers compete with actual layer numbers. None of the seven layer names is a heading, despite each introducing multiple responsibilities, protocol/technology examples and PDU details.

**Root cause / layers:** Semantic teaching sections are authored as a numbered outer list. This is a source-structure choice; the current list parser is not shown to have flattened these nested details. Source Content Structure, Markdown Semantics.

**Recommendation (proposal only):** Promote Layer 7 through Layer 1 to h4 headings with their existing English/Thai names. Group the existing responsibility, technology/protocol, example and PDU detail under each. Preserve all explanations, including the corrected sockets qualification. Retain the existing Layer 1→Layer 7 mnemonic direction; optionally label the following exposition as Layer 7→Layer 1.

**Qualifications:** Layer numbering and the current mnemonic direction are already accurate. Do not hide list markers with CSS, reverse the mnemonic, or treat all numbered concept collections as false workflows.

**Primary references:** [reference 1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html), [reference 2](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf).

**Occurrence tracing:** 1 subsection ranges. See the coverage matrix, `subsection-review.json`, raw measurements and `findings.json` for exact anchor associations. This is not a new defect count per occurrence.

## P3-SEM-002 — P2 — JML connectors imply a compulsory Mover stage

**Status:** Confirmed presentation defect. **Confidence:** High. **Origin:** Newly discovered visual-semantic distinction within user-reported JML target.

**Source:** `domain-3.md:9–38; diagram-generator.js:1877–1982 desktop arrows and mobile down-arrows`. Paths without a directory denote `content/isc2-cc-2026/reading/`, `js/core/`, or `css/` as appropriate.

**Evidence:** [direct-P3-DIA-001-1366-light.png](../../../artifacts/qa/reading-notes-phase3a/direct-P3-DIA-001-1366-light.png), [direct-P3-DIA-001-390-light.png](../../../artifacts/qa/reading-notes-phase3a/direct-P3-DIA-001-390-light.png); [browser-results.json](../../../artifacts/qa/reading-notes-phase3a/browser-results.json) / [focused-results.json](../../../artifacts/qa/reading-notes-phase3a/focused-results.json).

**Observed impact:** 01 Joiner → 02 Mover → 03 Leaver is shown as a single path in both representations. A learner may infer every account must pass through a role-change event before offboarding, or that Mover happens only once.

**Root cause / layers:** A possible employee journey is drawn as an unconditional lifecycle state machine without optional/repeated transitions. Diagram Content/Data, SVG Layout, Accessibility Metadata.

**Recommendation (proposal only):** Show join/provision, an active-access period with ongoing review, optional repeated role-change/re-evaluation, and offboarding reachable without a role change. Keep Continuous Governance spanning relevant account activity. Alternatively label the current path explicitly as one possible example and show the direct Joiner-to-Leaver alternative.

**Qualifications:** This confirms a visual ambiguity, not a claim that the prose literally forbids direct departure. The official outline 3.1 lists provisioning/review/deprovisioning activities; it does not prescribe the pictured J→M→L sequence.

**Primary references:** [reference 1](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf), [reference 2](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html).

**Occurrence tracing:** 1 subsection ranges. See the coverage matrix, `subsection-review.json`, raw measurements and `findings.json` for exact anchor associations. This is not a new defect count per occurrence.

## P3-SEM-003 — P2 — Control function comparison still has workflow arrows

**Status:** Confirmed presentation defect. **Confidence:** High. **Origin:** Previously identified; current visual residual.

**Source:** `domain-1.md:770–840; diagram-generator.js:1042–1183`. Paths without a directory denote `content/isc2-cc-2026/reading/`, `js/core/`, or `css/` as appropriate.

**Evidence:** [feature-d1-topic-1-4-control-types-diagram-0-1366-light.png](../../../artifacts/qa/reading-notes-phase3a/feature-d1-topic-1-4-control-types-diagram-0-1366-light.png), [feature-d1-topic-1-4-control-types-diagram-0-390-dark.png](../../../artifacts/qa/reading-notes-phase3a/feature-d1-topic-1-4-control-types-diagram-0-390-dark.png); [browser-results.json](../../../artifacts/qa/reading-notes-phase3a/browser-results.json) / [focused-results.json](../../../artifacts/qa/reading-notes-phase3a/focused-results.json).

**Observed impact:** Before/Detect/Correct panels remain linked by right arrows, with downward connectors in the narrow representation, although the corrected title and caption describe overlapping functions. This can compete with the lesson that one control can serve multiple functions and retrospective detection is valid.

**Root cause / layers:** An old timing metaphor remains in the geometry after its academic wording was qualified. Diagram Content/Data, SVG Layout.

**Recommendation (proposal only):** Use an unconnected function comparison or explicitly illustrative timing band with overlap. Keep purpose/function primary, retain CCTV and other multi-role examples, and preserve the current corrected timing explanation.

**Qualifications:** Current Detective text expressly allows retrospective detection. Do not reclassify the old “during-only” statement as still present. The remaining issue is the competing visual cue.

**Prior-state comparison:** D1-N02 / Batch B corrected wording; geometry deferred.

**Primary references:** [reference 1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html).

**Occurrence tracing:** 1 subsection ranges. See the coverage matrix, `subsection-review.json`, raw measurements and `findings.json` for exact anchor associations. This is not a new defect count per occurrence.

## P3-DIA-002 — P2 — Cloud provider legend clips inside its own SVG

**Status:** Confirmed presentation defect. **Confidence:** High. **Origin:** Previously identified.

**Source:** `domain-4.md:453–473; diagram-generator.js:2626 onward; cloudSharedResponsibility legend`. Paths without a directory denote `content/isc2-cc-2026/reading/`, `js/core/`, or `css/` as appropriate.

**Evidence:** [direct-P3-DIA-002-1366-light.png](../../../artifacts/qa/reading-notes-phase3a/direct-P3-DIA-002-1366-light.png), [direct-P3-DIA-002-1024-dark.png](../../../artifacts/qa/reading-notes-phase3a/direct-P3-DIA-002-1024-dark.png); [browser-results.json](../../../artifacts/qa/reading-notes-phase3a/browser-results.json) / [focused-results.json](../../../artifacts/qa/reading-notes-phase3a/focused-results.json).

**Observed impact:** The CSP Responsibility label extends beyond the right SVG edge while SVG overflow is hidden. Document width remains contained, so a page-overflow-only check misses the truncation. The legend identifies responsibility and is instructional content.

**Root cause / layers:** A long bilingual label has insufficient viewBox space; width scaling does not make its logical bounds fit. SVG Layout, Diagram Content/Data.

**Recommendation (proposal only):** Wrap or reposition the full legend, or make it adjacent semantic HTML. Retain the academically corrected distinction between customer governance/configuration and provider-operated controls. Check text bounds against the SVG viewport after fonts settle.

**Qualifications:** No new shared-responsibility academic error is inferred. The mobile HTML alternative is a different representation and not automatically affected by this SVG clipping.

**Prior-state comparison:** RN-I-018 remains confirmed.

**Primary references:** [reference 1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html).

**Occurrence tracing:** 1 subsection ranges. See the coverage matrix, `subsection-review.json`, raw measurements and `findings.json` for exact anchor associations. This is not a new defect count per occurrence.

## P3-TBL-002 — P2 — GRC protected keyword exceeds its padded final cell

**Status:** Confirmed presentation defect. **Confidence:** High. **Origin:** Previously identified.

**Source:** `domain-2.md:61–79; reading.css:2965–3008; markdown-parser.js:459–493`. Paths without a directory denote `content/isc2-cc-2026/reading/`, `js/core/`, or `css/` as appropriate.

**Evidence:** [direct-P3-TBL-002-1024-light.png](../../../artifacts/qa/reading-notes-phase3a/direct-P3-TBL-002-1024-light.png), [grc-scroll-end-390-dark.png](../../../artifacts/qa/reading-notes-phase3a/grc-scroll-end-390-dark.png); [browser-results.json](../../../artifacts/qa/reading-notes-phase3a/browser-results.json) / [focused-results.json](../../../artifacts/qa/reading-notes-phase3a/focused-results.json).

**Observed impact:** At 1024/390 px, the special table is 780 px wide and its wrapper has 791 px scroll width. “Enterprise IT Governance” extends 11.08 px beyond the final cell’s right border in both themes. Preserving nowrap avoids fragments but does not guarantee padded cell fit.

**Root cause / layers:** The fixed percentage/minimum-width special case does not account for the actual keyword width plus horizontal padding. Recognition also depends on exact table-header content. Table Layout, Local CSS, Component Renderer.

**Recommendation (proposal only):** Treat this separately from generic table compression: size the keyword column for measured text plus padding, or allow wrapping at word boundaries. Preserve readable body type, explicit column headers and contained scrolling. Replace content-sniffing only if a narrowly reviewed semantic hook is needed.

**Qualifications:** Native Chrome scrolling worked: focus on the scroll wrapper plus ArrowRight moved it 40 px in both themes. Do not call the wrapper keyboard-inaccessible or all horizontal scrolling broken. The measured problem is cell fit, not merely the existence of overflow.

**Prior-state comparison:** RN-I-009 remains confirmed.

**Primary references:** [reference 1](https://www.w3.org/WAI/WCAG21/Understanding/reflow).

**Occurrence tracing:** 1 subsection ranges. See the coverage matrix, `subsection-review.json`, raw measurements and `findings.json` for exact anchor associations. This is not a new defect count per occurrence.

## P3-ACC-001 — P2 — Instructional labels have insufficient contrast in specific settled themes

**Status:** Confirmed presentation defect. **Confidence:** High. **Origin:** Previously identified; exact current occurrences measured.

**Source:** `reading.css .diag-text-sub and diagram support tokens; diagram-generator.js iamLifecycle governance strip/badges; scenario answer label reading.css:2767`. Paths without a directory denote `content/isc2-cc-2026/reading/`, `js/core/`, or `css/` as appropriate.

**Evidence:** [direct-P3-DIA-001-1366-dark.png](../../../artifacts/qa/reading-notes-phase3a/direct-P3-DIA-001-1366-dark.png), [feature-d1-topic-1-1-zero-trust-defense-in-depth-diagram-0-1366-light.png](../../../artifacts/qa/reading-notes-phase3a/feature-d1-topic-1-1-zero-trust-defense-in-depth-diagram-0-1366-light.png); [browser-results.json](../../../artifacts/qa/reading-notes-phase3a/browser-results.json) / [focused-results.json](../../../artifacts/qa/reading-notes-phase3a/focused-results.json).

**Observed impact:** JML governance text is 2.89:1 on white in Light and 3.87:1 on the dark panel in Dark. The Dark Joiner badge is 3.48:1 white-on-blue; the Light badge is 5.17:1 and should not be called a failure. Scenario answer labels are 11.5 px green with 2.54:1 on white; the same label is 7.30:1 in Dark. Other SVG muted sublabels have similar theme-specific failures.

**Root cause / layers:** Support-text and colored-label tokens are reused for small instructional text; theme palettes and real painted backgrounds are not consistently paired for normal-text contrast. Local CSS, SVG Layout, Accessibility Metadata.

**Recommendation (proposal only):** Adjust only the relevant foreground/background token pairs and badge text choices; target ≥4.5:1 for normal instructional text. Keep labels so color is not the sole meaning carrier. Recheck effective text sizes, composited backgrounds and both themes after transitions settle.

**Qualifications:** Ratios are computed using actual rendered fills; SVG backgrounds are inferred from the last preceding containing rect and manually checked on the named samples. Do not certify every complex overlapping/gradient paint from that heuristic. No blanket color-only failure is asserted.

**Prior-state comparison:** RN-I-008 remains confirmed.

**Primary references:** [reference 1](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

**Occurrence tracing:** 22 subsection ranges. See the coverage matrix, `subsection-review.json`, raw measurements and `findings.json` for exact anchor associations. This is not a new defect count per occurrence.

## P3-ACC-002 — P2 — Thai instructional passages inherit the English page language

**Status:** Confirmed presentation defect. **Confidence:** High. **Origin:** Previously identified.

**Source:** `index.html document lang=en; Reading article/source passages; browser-results.json language/langParts`. Paths without a directory denote `content/isc2-cc-2026/reading/`, `js/core/`, or `css/` as appropriate.

**Evidence:** [browser-results.json](../../../artifacts/qa/reading-notes-phase3a/browser-results.json), [supplement-results.json](../../../artifacts/qa/reading-notes-phase3a/supplement-results.json); [browser-results.json](../../../artifacts/qa/reading-notes-phase3a/browser-results.json) / [focused-results.json](../../../artifacts/qa/reading-notes-phase3a/focused-results.json).

**Observed impact:** All 94 ranges inherit the English document language; no language-of-parts attributes were found in these ranges. Long Thai explanatory passages therefore lack a programmatically determined Thai language.

**Root cause / layers:** The bilingual corpus is rendered as unannotated mixed-language content under a monolingual page declaration. Accessibility Metadata, Source Content Structure, Component Renderer.

**Recommendation (proposal only):** Plan a Reading-local Thai language scope with appropriate explicit English passage annotations where meaningful. Apply consistently to authored source, scenarios and generated instructional components, without changing the global app language or text content.

**Qualifications:** WCAG language-of-parts has exceptions for technical terms, proper names and vernacular words. It does not require annotating every borrowed English cybersecurity word. Native screen-reader voice switching was not manually tested; the missing language metadata itself is confirmed.

**Prior-state comparison:** RN-I-007 remains confirmed.

**Primary references:** [reference 1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html).

**Occurrence tracing:** 94 subsection ranges. See the coverage matrix, `subsection-review.json`, raw measurements and `findings.json` for exact anchor associations. This is not a new defect count per occurrence.

## P3-TXT-002 — P3 — Raw currency escape appears in a risk worked example

**Status:** Confirmed presentation defect. **Confidence:** High. **Origin:** Previously identified.

**Source:** `domain-1.md:416 onward, Asset Value definition; markdown-parser.js HTML passthrough/currency path`. Paths without a directory denote `content/isc2-cc-2026/reading/`, `js/core/`, or `css/` as appropriate.

**Evidence:** [direct-P3-TXT-002-math-light.png](../../../artifacts/qa/reading-notes-phase3a/direct-P3-TXT-002-math-light.png), [supplement-results.json](../../../artifacts/qa/reading-notes-phase3a/supplement-results.json); [browser-results.json](../../../artifacts/qa/reading-notes-phase3a/browser-results.json) / [focused-results.json](../../../artifacts/qa/reading-notes-phase3a/focused-results.json).

**Observed impact:** The Asset Value example visibly shows a backslash before $10,000. Other worked dollar amounts render normally. The artifact is a representation inconsistency, not a wrong amount or formula.

**Root cause / layers:** Literal currency escaping is handled differently in raw authored HTML and normal inline Markdown. Source Content Structure, Component Renderer.

**Recommendation (proposal only):** In a later narrow task, define one currency-escaping policy and verify raw HTML and inline Markdown paths while preserving KaTeX/math behavior, calculations and all example values.

**Qualifications:** Do not remove meaningful dollar notation or globally replace math escapes. The screenshot and DOM text establish this occurrence; its severity is minor polish.

**Prior-state comparison:** RN-I-010 remains confirmed.

**Occurrence tracing:** 1 subsection ranges. See the coverage matrix, `subsection-review.json`, raw measurements and `findings.json` for exact anchor associations. This is not a new defect count per occurrence.

## Qualified concerns, acceptable simplifications and non-findings

| Review ID | Disposition | Evidence and interpretation | Next step |
|---|---|---|---|
| P3-Q-001 | Design concern; not a confirmed academic error | D1 defense-in-depth has an isolated CORE DATA circle and seven example groups; D4 has five example groups. Both now explicitly teach complementary examples. A common-asset connection could help, but a concentric onion is not mandatory. | Optional academic/design pilot; preserve corrected captions and avoid declaring these examples factually wrong. |
| P3-Q-002 | Confirmed raw fallback metadata; AT impact requires evidence | In an isolated run with KaTeX unavailable, role=math aria-label contains raw LaTeX while visible text is readable. Normal connected browser loads used KaTeX; this is not a universal visible math rendering failure. | Test actual screen-reader pronunciation/MathML fallback before approving metadata replacement; see gaps-results.json. |
| P3-Q-003 | Acceptable enumeration / true process | Four ethics canons, five named cloud characteristics, lists of threats/benefits and numbered exam tips are not automatically workflows. Worked calculation, recovery timeline and explicitly illustrative provisioning steps can have valid order. | Preserve real order and enumerations; do not convert every ol to headings. |
| P3-Q-004 | Maintainability risk; no demonstrated unrelated UI failure | Some h4 sibling CSS is unscoped and special GRC behavior recognizes exact header strings. | When an approved batch touches these paths, assess semantic hooks and Reading scoping; no shared CSS rewrite authorized here. |
| P3-Q-005 | Claims not substantiated | No evidence that the current prose says ISC2 mandates six measurement steps, that the BC scope pills are actual buttons, that every table lacks headers, or that all colored diagrams use color alone. | Preserve these qualifications in any implementation brief. |
| P3-Q-006 | Separate academic review lead | JML main numbered prose still gives a stronger role-first sentence than its qualified callout/mobile wording. The earlier academic batch scoped its exact replacements. | Refer to academic owner if wording is changed; do not silently add an academic correction to a visual implementation. |

No P0 was established. Priority is educational/accessibility impact, not permission to redesign. All recommendations retain correct educational depth.
