# Domain 2 - Exam-outline coverage audit

Prepared: 2026-10-23 (Asia/Bangkok). Phase 1 only; audit/editorial findings, not approved knowledge or question content.

## Authority and version

**CONFIRMED:** Domain 2 is **Security Governance**, weight **17.3%**, in the outline effective **September 1, 2026**. Verified on 2026-10-23 against the [official ISC2 outline page](https://www.isc2.org/certifications/cc/cc-certification-exam-outline) and its linked [English PDF](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf) (printed p.3 for weight and p.5 for Domain 2). The PDF has eight pages; printed page numbers are one-based. No local PDF was present in the Domain 2 input directory and no PDF was added to the project.

The existing [project mapping](../../../../../../docs/plans/isc2-cc-2026/domain-mapping.md) correctly identifies the four Domain 2 IDs, but adds teaching examples beyond literal outline bullets. Separate official titles/subtopics from those local elaborations. The official web page also retains an old-domain introductory list; use its September 2026 numbered section and linked dated PDF for this mapping. Do not map this batch to the old 10% continuity/incident-response domain.

## Confirmed numbered objectives and supplied-source coverage

Titles below retain official wording. Subtopics are paraphrased scope summaries of the outline bullets; named products, formulas and scenarios in the source column are course examples, not extra official sub-objectives.

| Official objective | Official subtopic scope | Direct supplied evidence | Audit assessment |
| --- | --- | --- | --- |
| **2.1 Plan Governance, Risk, and Compliance (GRC)** | Why GRC exists, its significance, and supporting frameworks/tools | T:L7-L33; S01-S10: alignment, G/R/C roles, purpose/importance, named frameworks, platform capabilities and risk register | CONFIRMED source support for each listed base area. Framework versions and accurate scale taxonomy still require review |
| **2.2 Understand redundancy** | Continuity of business and recovery after disaster | T:L33-L71; S11-S19: BC/BCP, DR/DRP, recovery objectives, backup strategies/sites, testing and BIA comparison | CONFIRMED BC/DR instruction. PARTIAL depth: no dedicated redundancy/failover mechanism lesson; recovery assumptions and legal claims unresolved |
| **2.3 Understand security awareness** | Culture and leadership; recognizing manipulation/phishing and protecting passwords | T:L71-L93; S21-S27: shared responsibility, leadership example, social engineering variants, employee and organizational credential practices | CONFIRMED support for all listed base areas; employee password practices are transcript-only. No AI-enhanced attack examples |
| **2.4 Measure cybersecurity effectiveness** | Metrics and risk indicators; visual summaries, target comparisons and reporting | T:L93-L115; S28-S38: metrics, KRI/KPI, dashboard, scorecard and report | CONFIRMED base instruction. PARTIAL numerical reliability due to S36/T:L111 unit conflict and unspecified metric definitions |

These are **4/4 numbered objectives with readable source support**, not a percentage estimate of exam readiness or a certification of full academic coverage. The supplied files do not demonstrate ability to apply every topic or cover every possible exam scenario. No mapping above is UNVERIFIED; uncertain extra page identities, hidden content and specific future-item alignment remain UNVERIFIED.

## Terminology boundaries

The outline explicitly places BC and DR under 2.2 and awareness/measurement under 2.3/2.4. Source examples such as RTO, RPO, BIA, hot/warm/cold sites, NIST CSF, ISO/IEC 27001, COBIT, EDR, MFA and KPI are useful supporting teaching; their presence in this course does not make them additional numbered objectives or verbatim official bullet requirements. Diagram-only labels (PCI DSS/CMMC/SOX) do not establish substantive coverage.

## Current official AI guidance - a separate coverage gap

The [official ISC2 page's Domain 2 AI guidance](https://www.isc2.org/certifications/cc/cc-certification-exam-outline) describes automated incident identification/reporting and playbook support, AI-enhanced social engineering awareness, backup of AI configurations/data, model drift as a continuity risk, and AI-oriented risk indicators/reporting. These are contextual guidance across existing objectives, **not invented objective IDs 2.5 or AI-only sub-objective numbers**.

| Guidance theme (paraphrase) | Supplied evidence | Coverage |
| --- | --- | --- |
| Automated detection, initial reporting and established response playbooks | General reporting at T:L75-L79; no explicit AI tool or automated-threat playbook teaching | MISSING AI-specific treatment; broad reporting alone is insufficient |
| AI-amplified manipulation/phishing | Traditional techniques T:L81-L89 / S24-S26 only | MISSING |
| AI-service configuration/data recovery and model degradation continuity risk | Traditional backup/recovery T:L53-L67 / S18 only | MISSING |
| AI-focused risk signals and governance reporting | Generic metrics T:L101-L113 / S32-S37 only | MISSING |

No AI lesson was inferred from decorative brain/chip graphics. This AI guidance is present on the current official page but not as extra numbered bullets in the eight-page outline PDF reviewed. Preserve the distinction when planning supplementation.

## Readiness consequence

Base-topic draft extraction can be planned from readable evidence after explicit approval. A complete current Domain 2 knowledge package needs additional authoritative AI references and qualified resolution of the [quality issues](source-quality-report.md). Do not silently fill these gaps from memory, reuse old objective numbers, or label the present course academically approved.


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

