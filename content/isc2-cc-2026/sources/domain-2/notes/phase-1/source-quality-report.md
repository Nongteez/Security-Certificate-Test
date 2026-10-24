# Domain 2 - Source quality and readiness report

Prepared: 2026-10-23 (Asia/Bangkok). Phase 1 only; audit/editorial findings, not approved knowledge or question content.

## Status meanings and decision

- **CONFIRMED:** directly supported by readable material; not academically approved.
- **PARTIAL:** some evidence exists but coverage, depth or context is incomplete.
- **CONFLICT:** inspected sources disagree; no silent reconciliation.
- **NEEDS_REVIEW:** ambiguity or accuracy/applicability requires verification.
- **MISSING:** identified needed material is absent from the audited batch.
- **UNVERIFIED:** an additional mapping/provenance/completeness statement cannot be established; this is not an invented objective.

**Decision: conditionally suitable for source-linked Phase 2 drafts after user approval; insufficient for a complete academically verified Domain 2 package.** Keep disputed claims on hold, label source-only explanations as drafts, and record AI gaps separately. No Phase 2 work was performed or authorized by this report.

## Quality dimensions

| Dimension | Evidence | Finding |
| --- | --- | --- |
| File access | [Inventory](source-inventory.md), per-file [image review](slide-analysis.md) | CONFIRMED: all 39 files readable/inspectable; no inaccessible file |
| Transcript | [T], all 115 lines | PARTIAL quality: full local text read; no timecodes; significant caption artifacts; recording completeness UNVERIFIED |
| Images | S01-S38 | CONFIRMED visible instructional text for 37 course captures; one unrelated image; crop/overlay regions NEEDS_REVIEW |
| Base objective breadth | [Official mapping](exam-outline-coverage.md) | CONFIRMED support for four numbered objectives; conceptual/numerical depth still PARTIAL |
| Current AI context | Full transcript and all captures vs official Domain 2 guidance | MISSING explicit AI teaching |
| Consistency | T:L111 vs S36 | CONFLICT: critical-vulnerability threshold units; spelling discrepancies additionally need review |
| Source independence | Course transcript and matching annotated captures | PARTIAL: agreement is within one apparent course, not independent technical validation |
| Attribution / original materials | No local course URL, original deck, video or permission record | NEEDS_REVIEW provenance; MISSING originals needed to certify completeness or resolve wording |
| Academic / bilingual approval | No review/sign-off for this new batch | NEEDS_REVIEW; no translated or approved knowledge created |

## Issue register and release requirements

All issues below remain open. A source observation can be CONFIRMED while the claim it describes still needs academic review. 'Hold' refers to reliance on that disputed claim in later extraction/assessment, not a ban on documenting the evidence.

| ID / priority / status | Evidence and actual finding | Consequence and required evidence before release |
| --- | --- | --- |
| **D2-Q01 / medium / PARTIAL** | T:L1-L115 has 58 paragraphs but no timestamp/speaker labels. Source file ends with course close, which cannot prove no earlier omissions | Use physical line locators. Require original recording/caption file to add timing or certify transcription completeness; do not derive video time from capture clock |
| **D2-Q02 / high / NEEDS_REVIEW** | T:L21 COBIT/ISO corruption; L23 tracking; L29 CESO; L51 HIPPA and 'personal health information'; L63-L65 hard/hot and incomplete warm-site phrase; L83-L89 phishing errors; L95-L107 paged/unpaged | Cite readable S07/S08/S17/S18/S25/S26/S30-S33 as explicit corroboration. Keep raw text unchanged. Confirm PHI expansion and ambiguous speech with authoritative source/recording; a slide spelling does not verify every surrounding claim |
| **D2-Q03 / high / CONFLICT** | T:L111 explicitly uses <10% for critical unpatched vulnerabilities and speaks actual 12 without unit; S36 target is <10 and actual 12, without %; other rows visibly use % | Hold all numerical/percentage interpretation of that row. Require original deck/recording or dated reviewer resolution that identifies correct unit/denominator. Record both variants; do not insert percent signs into slide values |
| **D2-Q04 / high / NEEDS_REVIEW** | T:L49-L53 / S17 generalize GDPR/HIPAA DR-plan requirements, GDPR population scope and PHI terminology | Limited HHS check supports contingency/DR planning for applicable covered entities/business associates and ePHI, not a universal rule for every organization. GDPR statutory page retrieval was blocked by an anti-bot page; no GDPR legal conclusion verified. Require applicable authoritative provisions, scope/date and qualified review before legal claims are approved |
| **D2-Q05 / high / NEEDS_REVIEW** | T:L49-L67 / S15-S18: prevent-loss phrasing, backup interval linked to RPO, hot/warm/cold duration estimates, ambiguous cold/warm-site infrastructure and same-site/cloud assumptions | Hold guarantees and fixed timing/site rules. Need recovery design, completed/restorable backup assumptions, start/end definitions and authoritative continuity reference. Distinguish RTO from overall tolerable disruption; test capability rather than assuming targets are achieved |
| **D2-Q06 / high / NEEDS_REVIEW** | T:L27 labels ordinal values 1-4 quantitative. T:L29-L31 gives manager-owner examples and absolute no-zero-risk commentary; S09 gives field names only | NIST explicitly distinguishes representative-number scales (semi-quantitative) from quantitative values with maintained meaning/proportions. Hold 'numbers alone imply quantitative' rule; verify assessment model, risk acceptance authority and scope of residual-risk statements |
| **D2-Q07 / medium / NEEDS_REVIEW** | T:L95-L113 / S30-S38: MTTR defined locally as response, no formula/timing boundaries; completion used as awareness metric; more phishing reports as risk example; performance/risk mnemonic | Define numerator, denominator, period, baseline, threshold, owner and event boundaries in later verified work. Do not treat completion as demonstrated behavioral improvement, rising reports as automatically higher threat, or KPI/KRI/display functions as disjoint |
| **D2-Q08 / low / NEEDS_REVIEW** | S20 is a readable Thai ESP32 electronics product listing, not course material | CONFIRMED exclusion from instructional coverage. Preserve source file; request/record placement provenance in a future intake update if needed. No learning claim from this image |
| **D2-Q09 / medium / PARTIAL** | S03-S05, S13-S16 have repeated views; S01/S03/S04/S07/S13/S15-S17 include crop/overlay limitations; no original deck numbers or page inventory | Cite visible content and companion files separately. Need full originals before claiming original-page completeness or extracting obscured text. Every PNG inspected does not mean every slide in course exists locally |
| **D2-Q10 / medium / NEEDS_REVIEW** | No authenticated course attribution, publication metadata or permission record in local batch; matching-course video search result not authenticated | Establish exact source URL/creator/date and permitted downstream use before publication. Local inspection and independent paraphrase do not create redistribution permission. This Phase 1 audit is not a legal clearance decision |
| **D2-Q11 / high / MISSING** | No explicit AI teaching anywhere in T/S01-S38; current ISC2 Domain 2 AI context includes recovery, awareness and measurement extensions | Add appropriately attributed authoritative supplemental material in a separately authorized phase; keep supplemental evidence distinct from this course; no invented objectives or claimed lecture coverage |
| **D2-Q12 / medium / NEEDS_REVIEW** | Archive D2 README says awaiting materials; high-ID plans say 1001+; actual next-bank D1 uses 584-607 and 24 questions; old staging record says 26%/166 questions | Historical documentation drift; use observed runtime as architecture evidence and official outline for syllabus. Reconcile policies before future authoring/import; do not copy obsolete IDs/counts or modify schemas in this audit |
| **D2-Q13 / medium / NEEDS_REVIEW** | Isolation suite fails at vocabulary-status assertion (coming-soon expected, available actual); D1 batch/vocab tools have domain-specific assumptions and older thresholds | Existing tests are not general D2 academic approval. Record failure without repairing code. Any future D2 validator adaptation or test maintenance is a separate task; do not claim all suites pass |
| **D2-Q14 / medium / PARTIAL** | T:L33-L71 / S11-S19 teach BC/DR but do not explicitly teach RAID, active/passive failover, redundant power/links or detailed architecture | Source can support BC/DR drafts. Additional redundancy depth may be useful; these mechanisms are not invented mandatory official sub-objectives. Determine needed depth with the curriculum reviewer rather than asserting an official gap list |

## Limited independent checks

These checks challenge source claims; they do not create approved knowledge entries or approve the course.

1. **Outline:** current official title/weight and objective numbering were confirmed independently; see [outline report](exam-outline-coverage.md). AI context is explicitly separated from numbered PDF bullets.
2. **Risk-scale taxonomy:** [NIST measurement terminology](https://csrc.nist.gov/Projects/measurements-for-information-security/terminology), assessment definitions, accessed 2026-10-23, distinguishes quantitative assessment from representative-number scales. This is evidence for D2-Q06, not a fully resolved editorial correction to the lecture.
3. **HIPAA scope:** [HHS ransomware/HIPAA guidance](https://www.hhs.gov/hipaa/for-professionals/security/guidance/cybersecurity/ransomware-fact-sheet/index.html), question 3, accessed 2026-10-23, supports contingency planning including backups/DR, restore testing and application/data criticality for covered entities/business associates. This narrows rather than certifies the lecture's universal wording. It does not resolve GDPR or all PHI terminology.
4. **GDPR access limitation:** [EUR-Lex regulation endpoint](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng) returned a JavaScript/robot-check page. No legal text was accepted from that response; D2-Q04 remains unresolved.

No comprehensive external verification was performed for every definition, framework version, site timing, password recommendation, metric formula, legal implication or instructor exam prediction. Sources are suitable for audit, not yet academic approval.

## Existing QA tools and observed results

| Tool / check | Scope and result in this audit |
| --- | --- |
| `node tools/verify-complete-isolation.mjs` | Executed before report creation and reproduced: **exit 1**, invariants 1-8 pass; fails invariant 9 at line 139, expecting vocabulary coming-soon when registry is available; invariant 10 not reached. Confirms 583 legacy + 24 next-bank unique questions before failure, not a full suite pass |
| `node --test tools/verify-vocabulary-extraction.mjs` | Executed: **5 tests passed, 0 failed**, exit 0. Existing Domain 1 structural/coverage/supplemental checks; not D2 or bilingual semantic review |
| `tools/validate-domain1-batch.mjs` | Inspected only: hardcoded dom=1, startId=584 default, O19/O20 hold rules, bilingual structural checks and metadata fields; legacy similarity >0.65 error/>0.50 warning, within-batch >0.60 error. Not generic D2 QA or proof of academic accuracy |
| `sources/verify-sources.ps1` | Inspected only: historical 61-file manifest/baseline verifier; not a verifier for the new original D2 batch. Do not change old manifest or expected counts here |
| `tools/final-verification-audit.mjs` | Inspected for side effects; writes results JSON, so not executed under reports-only restriction despite old documentation calling it read-only |
| Older activation/next-bank planning | Activation script expects historical 607 combined questions; planned verify-next-bank-* scripts were not found by filename search. Tool names in plans do not establish installed/current coverage |

Mechanical checks cannot verify conceptual correctness, natural EN/TH parity, exact statutory applicability or authenticity of reported source attribution. Future review needs qualified cybersecurity and bilingual reviewers; no named reviewer/signature is fabricated here.

## Material needed and Phase 2 boundaries

Required before claiming a complete approved Domain 2 package: authoritative AI coverage; resolution of numeric conflict; precise recovery/metric assumptions; legal/terminology review; attribution and source-rights record for intended use; technical/bilingual sign-off. Original deck/recording would resolve source completeness and captions; if unavailable, retain those limits explicitly and omit unsupported claims.

After approval, a bounded extraction may use unambiguous source-supported passages as drafts with physical line/capture citations and issue links. Do not approve numeric units, legal mandates, fixed site times, loss guarantees or source-missing AI content on the basis of this audit. Question, vocabulary and runtime authoring remain separate authorization steps.


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

