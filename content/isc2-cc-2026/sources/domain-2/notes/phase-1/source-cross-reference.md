# Domain 2 - Source cross-reference

Prepared: 2026-10-23 (Asia/Bangkok). Phase 1 only; audit/editorial findings, not approved knowledge or question content.

## Matching method

Compared the complete [transcript][T] with every [capture](slide-analysis.md), using actual content and topic progression. T:L references are physical lines; S references are filename-ordered captures. **No exact video-to-frame alignment is available.** These pairings are content associations, not timestamp matches. CONFIRMED means source-supported and does not mean technically approved.

## Topics shared by transcript and slides

| Topic / objective association | Transcript lines | Images | Finding and coverage limit |
| --- | --- | --- | --- |
| GRC integration and business alignment / 2.1 | 7-13 | S01-S02 | CONFIRMED: components and alignment agree; only one course, not independent corroboration |
| Purpose and importance / 2.1 | 13-19 | S03-S06 | CONFIRMED: coordination, accountability, controls and resilience; repeated purpose captures |
| Frameworks, tools and register / 2.1 | 19-33 | S07-S10 | CONFIRMED: NIST CSF, ISO/IEC 27001, COBIT, GRC capabilities, register fields and ransomware example; caption variants remain explicit |
| BC and planning / 2.2 | 33-43 | S11-S14 | CONFIRMED: critical operations, disruptions, people/suppliers/technology and priorities |
| DR scope, value and compliance claim / 2.2 | 43-53 | S15-S17 | CONFIRMED as source claims; goals and generalized legal statements require academic review |
| RTO/RPO, backups, sites and testing / 2.2 | 53-67 | S18 | PARTIAL: source support exists; backup assumptions and site descriptions are not independently validated |
| BC vs DR and BIA / 2.2 | 67-71 | S19 | CONFIRMED: business breadth, IT recovery and BIA priorities; no full BIA method |
| Awareness, culture and leadership / 2.3 | 73-81 | S21-S23 | CONFIRMED: responsibilities/reporting and management MFA example |
| Social engineering / 2.3 | 81-89 | S24-S26 | CONFIRMED: manipulation, targeting and channel distinctions; slide spelling more reliable than captions |
| Organization credential protection / 2.3 | 91-93 | S27 | CONFIRMED: policy, monitoring and phishing-resistant authentication; no detailed implementation |
| Measurement and metric properties / 2.4 | 93-101 | S28-S31 | CONFIRMED: control/objective measurement and examples; acronyms explicitly visible in slides |
| KRI/KPI / 2.4 | 101-105 | S32-S33 | CONFIRMED: source distinction; indicator interpretation still requires context |
| Dashboards, scorecards and reports / 2.4 | 105-113 | S34-S37 | CONFIRMED general functions; numeric scorecard unit conflict at L111/S36 |
| Exam recap / 2.4 | 113-115 | S38 | CONFIRMED instructor mnemonic, not official exam-answer guidance |

## Transcript-only or materially expanded explanations

| Lines | Additional teaching | Consequence |
| --- | --- | --- |
| 1-7 | Promotional introduction, historical domain comparison and GRC career commentary | Context only; source's career/exam claims not independently verified |
| 9, 13 | Prediction of questions on business alignment | Instructor tip; no claim of actual ISC2 item content |
| 27-31 | 1-4 risk scale, example owners, accept/avoid/transfer/mitigate, risk appetite and no-zero-risk commentary | Preserve as caption claims; do not promote ordinal-as-quantitative or ownership assumptions |
| 39-43 | Work-from-home/alternate site, unavailable manager, supplier continuity and recovery-priority explanations | Adds operational examples beyond BCP bullet list |
| 57-65 | Spoken backup/failure timeline, earthquake failure-domain explanation and recovery-site timing estimates | S18 gives visual seed; transcript supplies detail but not academic validation |
| 89-91 | Employee strong/unique passwords, no sharing/reuse, avoid predictable details, password manager, MFA and compromise reporting | No matching employee-list capture found; use transcript-only citation for this scope |
| 97-99 | Hypothetical detection target below one hour, time units and audience relevance | No incident dataset or formula; not a universal target |

## Slide-only or materially clearer evidence

| Capture | Additional/clearer evidence | Consequence |
| --- | --- | --- |
| S01 | GRC wheel | Visual grouping only; no mandatory process order |
| S07 | Diagram names PCI DSS, CMMC and a left-clipped SOX label; GDPR/HIPAA also visible | Named context only; do not infer independent lessons or common taxonomy |
| S07-S08 | Correct visible COBIT, ISO/IEC 27001 and compliance tracking wording | Explicit corroboration for suspected caption errors, not edits to raw text |
| S17 | HIPAA spelling and PII/PHI annotations | Does not resolve PHI expansion, legal scope or statutory wording |
| S18 | Hot-site spelling and handwritten ERP/DB timeline | Does not substantiate fixed recovery durations; handwriting not all unambiguous |
| S25-S26 | Phishing, spear phishing, whaling, vishing, smishing and pretexting labels | Avoid producing caption-misspelled terminology as canonical knowledge |
| S30-S31 | MTTD/MTTR acronym forms | Retain source's 'respond' expansion; no inferred formula/alternate meaning |
| S36 | Complete scorecard table with unitless critical-vulnerability row | Distinct traceable evidence; preserve unit conflict |
| S20 | Thai ESP32 product listing | CONFIRMED unrelated; no transcript match; excluded from learning coverage |

## Conflicts and ambiguities - no silent reconciliation

| Issue | Exact evidence | Status / disposition |
| --- | --- | --- |
| D2-Q03: scorecard units | T:L111 uses a less-than-10% threshold for unpatched critical vulnerabilities; actual value spoken as 12, without unit. S36 shows target <10 and actual 12, without percent signs. Neighboring rows explicitly use percentages. | CONFLICT: threshold units disagree and actual unit is unspecified. Neither add a % to the slide nor remove % from the transcript. Hold numerical claims until recording/deck or reviewer resolution |
| D2-Q02: terminology | Caption 'hard site' (L63/L65) vs S18 hot sites; 'coit' (L21) vs S07 COBIT; 'HIPPA' (L51) vs S17 HIPAA; phishing variants L83-L87 vs S25 | NEEDS_REVIEW: strong evidence of caption artifacts; not proof that the instructor verbally misspoke. Record source variants explicitly |
| D2-Q04/Q05: shared overstatements | T:L49-L65 and S15-S18 share broad recovery/legal assertions | NEEDS_REVIEW: agreement within one course is not independent confirmation; academic concerns persist even when slides/transcript agree |

No other clear mutually incompatible conceptual explanation was found. That observation does not establish correctness of every shared statement.

## Repetition, sequence and missing-source limits

- S03/S04/S05: same GRC purpose view, two additional captures.
- S13/S14: same BCP view, one additional capture.
- S15/S16: same DR view, one additional capture; S16 exposes text obscured in S15.
- All 39 hashes are distinct. These are content repeats, not byte duplicates. No files were removed.
- S35/S36 are definition vs worked table; S37/S38 are report definition vs mnemonic. They are distinct source content despite repeated titles.
- A 2.3 divider and employee-practice screenshot are not captured. Missing original pages are **UNVERIFIED**, because no original page list exists. Filename gaps, including between S19/S21, are not proof of missing lecture content.
- Base topic sequence progresses through all four objectives and closes normally. Complete recording/deck coverage remains **PARTIAL**: no audio/video, original deck or independent course syllabus to compare.
- AI-related Domain 2 teaching in current official guidance is **MISSING** from the inspected batch; see [outline coverage](exam-outline-coverage.md). Detailed incident-response instruction is not assumed to belong in new Domain 2 merely because it belonged to an older domain arrangement.


## Source links

[T]: ../../../../../../ISC2%20Update%202026/Domain%202/DOMAIN%202.txt
[S01]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20175516.png
[S02]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20175642.png
[S03]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20175700.png
[S04]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20180122.png
[S05]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20180128.png
[S06]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20180141.png
[S07]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20180209.png
[S08]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20181135.png
[S09]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20181653.png
[S10]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20181722.png
[S11]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20182047.png
[S12]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20182544.png
[S13]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20182609.png
[S14]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20182614.png
[S15]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20183108.png
[S16]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20183111.png
[S17]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20183349.png
[S18]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20183410.png
[S19]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20183921.png
[S20]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20201852.png
[S21]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20220429.png
[S22]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20220716.png
[S23]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20220723.png
[S24]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20220952.png
[S25]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20221341.png
[S26]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20221932.png
[S27]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20221941.png
[S28]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20222037.png
[S29]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20222320.png
[S30]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20222340.png
[S31]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20222628.png
[S32]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20222928.png
[S33]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20223200.png
[S34]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20223320.png
[S35]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20223458.png
[S36]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20223508.png
[S37]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20223741.png
[S38]: ../../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20223751.png

