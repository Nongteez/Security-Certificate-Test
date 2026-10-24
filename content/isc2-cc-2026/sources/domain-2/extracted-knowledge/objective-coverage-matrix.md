---
id: d2-phase2-objective-coverage-matrix
domain_id: 2
domain_name: Security Governance
review_status: draft
translation_review_status: needs-human-review
prepared_date: 2026-10-23
source_reference: "D2-T01 and D2-Snn; audit-local IDs from Phase 1 inventory"
---

# Domain 2 - Objective Coverage Matrix

## Official authority and scope

**Domain 2: Security Governance - 17.3%.** Confirmed against the [official ISC2 page][R-OUTLINE], effective September 1, 2026, on 2026-10-23. Its numbered section is used together with the dated English PDF linked there and recorded in [Phase 1 coverage](../notes/phase-1/exam-outline-coverage.md). The web page's legacy introductory domain list is not used for mapping.

Exact objective titles appear below. Outline bullet scope is paraphrased: GRC rationale/value/framework support; BC/DR; culture/leadership and social-engineering/password/phishing awareness; metrics/risk indicators and dashboard/scorecard/report communication. Framework products, RTO/RPO, site categories, BIA and KPI in the course are supporting concepts, not invented additional official IDs.

## Entry distribution and curation state

| Objective | Source-derived drafts | ACCEPTED | NEEDS_REVIEW | DEFERRED |
| --- | ---: | ---: | ---: | ---: |
| 2.1 | 15 | 13 | 2 | 0 |
| 2.2 | 13 | 8 | 5 | 0 |
| 2.3 | 13 | 13 | 0 | 0 |
| 2.4 | 13 | 9 | 4 | 0 |
| **Total** | **54** | **43** | **11** | **0** |

All are technical-review drafts and all translations need human review. Six deferred *scopes* and eight gap records are separately counted; they are not canonical entries. All four objective mappings are supported; no extra objective numbering is invented. Certain proposed AI associations are contextual/inferred and labeled as such below.

## Subtopic coverage and source limits

| Objective / paraphrased scope | Canonical IDs | Direct course evidence | Coverage / limitation |
| --- | --- | --- | --- |
| 2.1 - GRC purpose/business coordination | 001,005 | T:L7-L19; S01-S06 | COVERED in readable draft scope; no guarantee of outcomes |
| 2.1 - governance, risk and applicable obligations | 002-004 | T:L11-L19; S02,S06 | COVERED concepts; specific legal mandates held separately |
| 2.1 - supporting frameworks/standards/tools | 006-010 | T:L19-L25; S07-S08 | COVERED high-level roles; implementation/edition depth absent |
| 2.1 - source's register/treatment examples | 011-015 | T:L25-L33; S09-S10 | PARTIAL accuracy: rating/residual wording needs review; supports frameworks/tools area without becoming new numbered scope |
| 2.2 - business continuity | 016-017,020 | T:L35-L43,L71; S12-S14,S19 | COVERED definitions/planning scope; BIA method PARTIAL |
| 2.2 - disaster recovery | 018-019,021-028 | T:L43-L71; S15-S19 | COVERED foundational role; assumptions/site/legal claims PARTIAL or held |
| 2.3 - culture/leadership | 029-031,041 | T:L73-L81; S21-S23 | COVERED purpose, shared responsibilities, management example and reporting |
| 2.3 - manipulation, password protection and phishing | 032-040 | T:L81-L93; S24-S27 | COVERED; employee password practices transcript-only; no invented missing slide |
| 2.4 - metrics and risk indicators | 042-050 | T:L93-L105; S29-S33 | COVERED labels/examples; operational definitions and causal interpretation PARTIAL |
| 2.4 - dashboards, target comparisons and reporting | 051-054 | T:L105-L115; S34-S38 | COVERED functions; one scorecard row unit CONFLICT held |

IDs in this table abbreviate KNOW-D2-nnn. No 'covered' label means academic approval, complete scenario breadth or production readiness. Supporting-topic depth gaps are not automatically official syllabus omissions.

<a id="objective-21"></a>
## Objective 2.1 - Plan Governance, Risk, and Compliance (GRC)

| Canonical entry | Title | Curation status |
| --- | --- | --- |
| [KNOW-D2-001](knowledge-map.md#know-d2-001) | Integrated GRC and business alignment | ACCEPTED |
| [KNOW-D2-002](knowledge-map.md#know-d2-002) | Governance direction and accountability | ACCEPTED |
| [KNOW-D2-003](knowledge-map.md#know-d2-003) | Risk management within GRC | ACCEPTED |
| [KNOW-D2-004](knowledge-map.md#know-d2-004) | Compliance and applicable obligations | ACCEPTED |
| [KNOW-D2-005](knowledge-map.md#know-d2-005) | Purpose and organizational value of GRC | ACCEPTED |
| [KNOW-D2-006](knowledge-map.md#know-d2-006) | NIST Cybersecurity Framework | ACCEPTED |
| [KNOW-D2-007](knowledge-map.md#know-d2-007) | ISO/IEC 27001 requirements standard | ACCEPTED |
| [KNOW-D2-008](knowledge-map.md#know-d2-008) | Information Security Management System | ACCEPTED |
| [KNOW-D2-009](knowledge-map.md#know-d2-009) | COBIT | ACCEPTED |
| [KNOW-D2-010](knowledge-map.md#know-d2-010) | GRC software capabilities | ACCEPTED |
| [KNOW-D2-011](knowledge-map.md#know-d2-011) | Risk register and risk record | ACCEPTED |
| [KNOW-D2-012](knowledge-map.md#know-d2-012) | Risk ownership | ACCEPTED |
| [KNOW-D2-013](knowledge-map.md#know-d2-013) | Risk treatment choices | ACCEPTED |
| [KNOW-D2-014](knowledge-map.md#know-d2-014) | Residual risk and zero-risk wording | NEEDS_REVIEW |
| [KNOW-D2-015](knowledge-map.md#know-d2-015) | Risk rating scales | NEEDS_REVIEW |

<a id="objective-22"></a>
## Objective 2.2 - Understand redundancy

| Canonical entry | Title | Curation status |
| --- | --- | --- |
| [KNOW-D2-016](knowledge-map.md#know-d2-016) | Business Continuity | ACCEPTED |
| [KNOW-D2-017](knowledge-map.md#know-d2-017) | Business Continuity Plan | ACCEPTED |
| [KNOW-D2-018](knowledge-map.md#know-d2-018) | Disaster Recovery | ACCEPTED |
| [KNOW-D2-019](knowledge-map.md#know-d2-019) | Disaster Recovery Plan | ACCEPTED |
| [KNOW-D2-020](knowledge-map.md#know-d2-020) | Business Impact Analysis and recovery priorities | ACCEPTED |
| [KNOW-D2-021](knowledge-map.md#know-d2-021) | Recovery Time Objective - bounded definition | ACCEPTED |
| [KNOW-D2-022](knowledge-map.md#know-d2-022) | Recovery Point Objective - bounded definition | ACCEPTED |
| [KNOW-D2-023](knowledge-map.md#know-d2-023) | Backup strategy and geographic recovery assumptions | NEEDS_REVIEW |
| [KNOW-D2-024](knowledge-map.md#know-d2-024) | Hot recovery site | NEEDS_REVIEW |
| [KNOW-D2-025](knowledge-map.md#know-d2-025) | Warm recovery site | NEEDS_REVIEW |
| [KNOW-D2-026](knowledge-map.md#know-d2-026) | Cold recovery site | NEEDS_REVIEW |
| [KNOW-D2-027](knowledge-map.md#know-d2-027) | DR testing and restore verification | ACCEPTED |
| [KNOW-D2-028](knowledge-map.md#know-d2-028) | Regulatory recovery claims and protected information | NEEDS_REVIEW |

<a id="objective-23"></a>
## Objective 2.3 - Understand security awareness

| Canonical entry | Title | Curation status |
| --- | --- | --- |
| [KNOW-D2-029](knowledge-map.md#know-d2-029) | Security awareness | ACCEPTED |
| [KNOW-D2-030](knowledge-map.md#know-d2-030) | Security culture | ACCEPTED |
| [KNOW-D2-031](knowledge-map.md#know-d2-031) | Security leadership | ACCEPTED |
| [KNOW-D2-032](knowledge-map.md#know-d2-032) | Social engineering and manipulation | ACCEPTED |
| [KNOW-D2-033](knowledge-map.md#know-d2-033) | Phishing | ACCEPTED |
| [KNOW-D2-034](knowledge-map.md#know-d2-034) | Spear phishing | ACCEPTED |
| [KNOW-D2-035](knowledge-map.md#know-d2-035) | Whaling | ACCEPTED |
| [KNOW-D2-036](knowledge-map.md#know-d2-036) | Vishing | ACCEPTED |
| [KNOW-D2-037](knowledge-map.md#know-d2-037) | Smishing | ACCEPTED |
| [KNOW-D2-038](knowledge-map.md#know-d2-038) | Pretexting | ACCEPTED |
| [KNOW-D2-039](knowledge-map.md#know-d2-039) | Employee password protection | ACCEPTED |
| [KNOW-D2-040](knowledge-map.md#know-d2-040) | Organizational credential protection | ACCEPTED |
| [KNOW-D2-041](knowledge-map.md#know-d2-041) | Recognizing and reporting suspicious activity | ACCEPTED |

<a id="objective-24"></a>
## Objective 2.4 - Measure cybersecurity effectiveness

| Canonical entry | Title | Curation status |
| --- | --- | --- |
| [KNOW-D2-042](knowledge-map.md#know-d2-042) | Measuring cybersecurity objectives | ACCEPTED |
| [KNOW-D2-043](knowledge-map.md#know-d2-043) | Security metrics and useful measurement properties | ACCEPTED |
| [KNOW-D2-044](knowledge-map.md#know-d2-044) | Mean Time to Detect | NEEDS_REVIEW |
| [KNOW-D2-045](knowledge-map.md#know-d2-045) | Mean Time to Respond - source-specific MTTR | NEEDS_REVIEW |
| [KNOW-D2-046](knowledge-map.md#know-d2-046) | Vulnerability remediation performance metric | ACCEPTED |
| [KNOW-D2-047](knowledge-map.md#know-d2-047) | Patch compliance metric | ACCEPTED |
| [KNOW-D2-048](knowledge-map.md#know-d2-048) | Security-awareness training completion metric | ACCEPTED |
| [KNOW-D2-049](knowledge-map.md#know-d2-049) | Key Risk Indicators and interpretation | NEEDS_REVIEW |
| [KNOW-D2-050](knowledge-map.md#know-d2-050) | Key Performance Indicators | ACCEPTED |
| [KNOW-D2-051](knowledge-map.md#know-d2-051) | Security dashboards | ACCEPTED |
| [KNOW-D2-052](knowledge-map.md#know-d2-052) | Security scorecards | ACCEPTED |
| [KNOW-D2-053](knowledge-map.md#know-d2-053) | Cybersecurity reports | ACCEPTED |
| [KNOW-D2-054](knowledge-map.md#know-d2-054) | Worked scorecard and unresolved vulnerability units | NEEDS_REVIEW |

## AI context and other gaps

Current [official Domain 2 AI guidance][R-OUTLINE] extends existing objectives with AI-related awareness, continuity and governance measurement. These are contextual associations, not a separate objective or newly numbered sub-objectives. Course-derived AI coverage is MISSING across all inspected materials. [Gap records](academic-issues-gap-register.md#supplemental-gap-register) keep external additions separate.

| Gap record | Course coverage | External scope / inferred association |
| --- | --- | --- |
| D2-GAP01 | No AI-specific awareness example | AI-enhanced manipulation; associated with awareness (2.3) |
| D2-GAP02 | No AI-configuration/dataset recovery | Associated with BC/DR (2.2) |
| D2-GAP03 | No model-drift continuity lesson | Associated with continuity (2.2); operational treatment remains incomplete |
| D2-GAP04 | No AI-specific metric/KRI lesson | Associated with GRC planning/effectiveness (2.1/2.4) |
| D2-GAP05 | No AI-assisted detection/playbook instruction | Reporting support in Domain 2 contextual guidance overlaps formal Domain 5 IR content; do not invent a 2.x IR objective |
| D2-GAP06-D2-GAP07 | Limited redundancy/BIA depth | Review curriculum need; no additional official mandatory mechanism list asserted |
| D2-GAP08 | No human approval | Technical/legal/bilingual QA required across all objectives |

## Unsuitable source claims for future assessment

Hold the disputed S36 vulnerability units, universal site time guarantees, cold-site no-infrastructure wording, cloud/backup loss-prevention guarantees, numerical-equals-quantitative rule, unscoped legal mandates, undefined time-metric calculations, simplistic reporting-volume causality, diagram-only definitions and real-exam frequency claims. The [curation](knowledge-curation-register.md) and [issue](academic-issues-gap-register.md) registers give exact release boundaries. Future question generation requires separate authorization after QA.

## Phase 2 source-review ledger

Read T:L1-L115 in full. Re-opened every relevant course image listed below during Phase 2, including repeated captures. S20 was excluded using the established Phase 1 unrelated-image finding; it was not treated as instructional evidence. This is a review ledger, not original deck numbering or new manifest registration.

| Capture ID | Exact original filename | Result |
| --- | --- | --- |
| S01 | [Screenshot 2026-09-20 175516.png][S01] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S02 | [Screenshot 2026-09-20 175642.png][S02] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S03 | [Screenshot 2026-09-20 175700.png][S03] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S04 | [Screenshot 2026-09-20 180122.png][S04] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S05 | [Screenshot 2026-09-20 180128.png][S05] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S06 | [Screenshot 2026-09-20 180141.png][S06] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S07 | [Screenshot 2026-09-20 180209.png][S07] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S08 | [Screenshot 2026-09-20 181135.png][S08] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S09 | [Screenshot 2026-09-20 181653.png][S09] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S10 | [Screenshot 2026-09-20 181722.png][S10] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S11 | [Screenshot 2026-09-20 182047.png][S11] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S12 | [Screenshot 2026-09-20 182544.png][S12] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S13 | [Screenshot 2026-09-20 182609.png][S13] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S14 | [Screenshot 2026-09-20 182614.png][S14] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S15 | [Screenshot 2026-09-20 183108.png][S15] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S16 | [Screenshot 2026-09-20 183111.png][S16] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S17 | [Screenshot 2026-09-20 183349.png][S17] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S18 | [Screenshot 2026-09-20 183410.png][S18] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S19 | [Screenshot 2026-09-20 183921.png][S19] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S21 | [Screenshot 2026-09-20 220429.png][S21] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S22 | [Screenshot 2026-09-20 220716.png][S22] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S23 | [Screenshot 2026-09-20 220723.png][S23] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S24 | [Screenshot 2026-09-20 220952.png][S24] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S25 | [Screenshot 2026-09-20 221341.png][S25] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S26 | [Screenshot 2026-09-20 221932.png][S26] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S27 | [Screenshot 2026-09-20 221941.png][S27] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S28 | [Screenshot 2026-09-20 222037.png][S28] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S29 | [Screenshot 2026-09-20 222320.png][S29] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S30 | [Screenshot 2026-09-20 222340.png][S30] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S31 | [Screenshot 2026-09-20 222628.png][S31] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S32 | [Screenshot 2026-09-20 222928.png][S32] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S33 | [Screenshot 2026-09-20 223200.png][S33] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S34 | [Screenshot 2026-09-20 223320.png][S34] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S35 | [Screenshot 2026-09-20 223458.png][S35] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S36 | [Screenshot 2026-09-20 223508.png][S36] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S37 | [Screenshot 2026-09-20 223741.png][S37] | Visually re-inspected; visible content only; crop/overlay limitations retained |
| S38 | [Screenshot 2026-09-20 223751.png][S38] | Visually re-inspected; visible content only; crop/overlay limitations retained |


## Reference links

[T]: ../../../../../ISC2%20Update%202026/Domain%202/DOMAIN%202.txt
[S01]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20175516.png
[S02]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20175642.png
[S03]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20175700.png
[S04]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20180122.png
[S05]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20180128.png
[S06]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20180141.png
[S07]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20180209.png
[S08]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20181135.png
[S09]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20181653.png
[S10]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20181722.png
[S11]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20182047.png
[S12]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20182544.png
[S13]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20182609.png
[S14]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20182614.png
[S15]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20183108.png
[S16]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20183111.png
[S17]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20183349.png
[S18]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20183410.png
[S19]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20183921.png
[S21]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20220429.png
[S22]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20220716.png
[S23]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20220723.png
[S24]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20220952.png
[S25]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20221341.png
[S26]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20221932.png
[S27]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20221941.png
[S28]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20222037.png
[S29]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20222320.png
[S30]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20222340.png
[S31]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20222628.png
[S32]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20222928.png
[S33]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20223200.png
[S34]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20223320.png
[S35]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20223458.png
[S36]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20223508.png
[S37]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20223741.png
[S38]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20223751.png
[R-OUTLINE]: https://www.isc2.org/certifications/cc/cc-certification-exam-outline
[R-SCALE]: https://csrc.nist.gov/Projects/measurements-for-information-security/terminology
[R-DR]: https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf
[R-HHS]: https://www.hhs.gov/hipaa/for-professionals/security/guidance/cybersecurity/ransomware-fact-sheet/index.html
[R-PHI]: https://www.hhs.gov/answers/hipaa/what-is-phi/index.html
[R-EDPB]: https://www.edpb.europa.eu/sme/be-compliant/secure-personal-data_en
[R-CSF]: https://www.nist.gov/cyberframework/faqs
[R-ISO]: https://www.iso.org/standard/27001
[R-COBIT]: https://www.isaca.org/resources/cobit
[R-SOCIAL]: https://www.cyber.gc.ca/en/guidance/social-engineering-itsap00166
[R-AUTH]: https://pages.nist.gov/800-63-4/sp800-63b.html
[R-MEAS]: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-55v1.pdf
[R-CISO]: https://csrc.nist.gov/glossary/term/ciso
[R-CFO]: https://www.energy.gov/cfo/articles/ocfo-organization
[R-GDPR]: https://commission.europa.eu/law/law-topic/data-protection/legal-framework-eu-data-protection_en
[R-ERP]: https://www.oracle.com/erp/what-is-erp/

