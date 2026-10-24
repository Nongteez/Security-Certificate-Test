---
id: d2-phase2-knowledge-curation-register
domain_id: 2
domain_name: Security Governance
review_status: draft
translation_review_status: needs-human-review
prepared_date: 2026-10-23
source_reference: "D2-T01 and D2-Snn; audit-local IDs from Phase 1 inventory"
---

# Domain 2 - Knowledge Curation Register

## Decision rules and totals

The canonical [knowledge map](knowledge-map.md) is the primary draft record; this register is its selection/index view. A row is not a question opportunity, stem or key. Every future question-use state is **NOT_AUTHORIZED**; Phase 3 Academic QA must precede any later authoring approval.

- ACCEPTED: source-supported, internally consistent bounded draft; not academically approved.
- NEEDS_REVIEW: conflicted, underspecified or academically unresolved; disputed portions blocked.
- DEFERRED: insufficient or excluded scope; no course-derived definition manufactured.

**Canonical totals: 54 = 43 ACCEPTED + 11 NEEDS_REVIEW + 0 DEFERRED.** Six deferred scopes below are separate selection decisions, not empty canonical entries or part of that total. No target count was imposed; boundaries follow distinct concepts, not number of captures. All Thai remains needs-human-review.

| Canonical ID / concept | Objective | Curation status | Selection rationale and boundary | Source / holds |
| --- | --- | --- | --- | --- |
| [KNOW-D2-001](knowledge-map.md#know-d2-001) - Integrated GRC and business alignment | 2.1 | ACCEPTED | Integration joins three functions; it does not make them interchangeable. | T:L7-L13; S01, S02; no specific contradiction |
| [KNOW-D2-002](knowledge-map.md#know-d2-002) - Governance direction and accountability | 2.1 | ACCEPTED | Oversight is a different decision function from applying an individual technical control. | T:L11-L13; S02; no specific contradiction |
| [KNOW-D2-003](knowledge-map.md#know-d2-003) - Risk management within GRC | 2.1 | ACCEPTED | Risk assessment informs choices; a compliance requirement alone does not describe every relevant risk. | T:L11-L17; S02, S06; no specific contradiction |
| [KNOW-D2-004](knowledge-map.md#know-d2-004) - Compliance and applicable obligations | 2.1 | ACCEPTED | The umbrella includes different authorities; naming a standard does not turn it into legislation. | T:L11-L15; S02, S05; D2-Q04 |
| [KNOW-D2-005](knowledge-map.md#know-d2-005) - Purpose and organizational value of GRC | 2.1 | ACCEPTED | Purpose/benefit is not proof that every control works or every penalty will be avoided. | T:L13-L19; S03, S04, S05, S06; no specific contradiction |
| [KNOW-D2-006](knowledge-map.md#know-d2-006) - NIST Cybersecurity Framework | 2.1 | ACCEPTED | Framework guidance is distinct from a software GRC platform. No CSF version or mandatory function order is attributed to the lecture. | T:L19-L21; S07; D2-Q02 |
| [KNOW-D2-007](knowledge-map.md#know-d2-007) - ISO/IEC 27001 requirements standard | 2.1 | ACCEPTED | A requirements standard is not the management system itself; course does not specify an edition or teach certification clauses. | T:L21-L21; S07; D2-Q02 |
| [KNOW-D2-008](knowledge-map.md#know-d2-008) - Information Security Management System | 2.1 | ACCEPTED | ISMS is broader than an individual firewall or a spreadsheet. The source provides no architecture or implementation checklist. | T:L21-L21; S07; no specific contradiction |
| [KNOW-D2-009](knowledge-map.md#know-d2-009) - COBIT | 2.1 | ACCEPTED | It is not a GRC software product and no detailed COBIT objectives are taught here. | T:L21-L23; S07; D2-Q02 |
| [KNOW-D2-010](knowledge-map.md#know-d2-010) - GRC software capabilities | 2.1 | ACCEPTED | A platform supports activities; a framework organizes guidance and a register records risks. | T:L23-L25; S08; D2-Q02 |
| [KNOW-D2-011](knowledge-map.md#know-d2-011) - Risk register and risk record | 2.1 | ACCEPTED | Threat, weakness and affected asset are separate fields; a register is not itself mitigation. | T:L25-L33; S09, S10; no specific contradiction |
| [KNOW-D2-012](knowledge-map.md#know-d2-012) - Risk ownership | 2.1 | ACCEPTED | Owner is a context-specific assignment; the lecture does not establish legal accountability or risk-acceptance authority. | T:L27-L31; S09, S10; D2-Q06 |
| [KNOW-D2-013](knowledge-map.md#know-d2-013) - Risk treatment choices | 2.1 | ACCEPTED | Naming a treatment does not establish what accountability transfers or how approval works. | T:L29-L33; S09, S10; D2-Q06 |
| [KNOW-D2-014](knowledge-map.md#know-d2-014) - Residual risk and zero-risk wording | 2.1 | NEEDS_REVIEW | Accept the existence of a residual-risk field as source evidence; hold universal claims across mitigation, avoidance and all possible scopes. | T:L29-L31; S09; D2-Q06 |
| [KNOW-D2-015](knowledge-map.md#know-d2-015) - Risk rating scales | 2.1 | NEEDS_REVIEW | External clarification R-SCALE distinguishes representative-number scales from quantitative values; this does not certify the lecture's original label. | T:L27-L27; S09; D2-Q06 |
| [KNOW-D2-016](knowledge-map.md#know-d2-016) - Business Continuity | 2.2 | ACCEPTED | BC is the organizational capability/concept; BCP documents arrangements. DR focuses on recovery of IT. | T:L35-L43; S11, S12, S19; no specific contradiction |
| [KNOW-D2-017](knowledge-map.md#know-d2-017) - Business Continuity Plan | 2.2 | ACCEPTED | BCP is the plan; BC is the capability it supports. DRP covers the related IT recovery arrangements. | T:L37-L43; S13, S14, S19; no specific contradiction |
| [KNOW-D2-018](knowledge-map.md#know-d2-018) - Disaster Recovery | 2.2 | ACCEPTED | DR is the recovery discipline/activity; DRP is its documented plan. IT restoration alone does not establish full business continuity. | T:L43-L49; S15, S16, S19; D2-Q05 |
| [KNOW-D2-019](knowledge-map.md#know-d2-019) - Disaster Recovery Plan | 2.2 | ACCEPTED | A component list is not proof that the plan is tested, feasible or compliant. | T:L53-L71; S18, S19; D2-Q05 |
| [KNOW-D2-020](knowledge-map.md#know-d2-020) - Business Impact Analysis and recovery priorities | 2.2 | ACCEPTED | BIA informs BC/DR plans; it is not another recovery site or a synonym for RTO. | T:L71-L71; S19; no specific contradiction |
| [KNOW-D2-021](knowledge-map.md#know-d2-021) - Recovery Time Objective - bounded definition | 2.2 | ACCEPTED | Time to restore service differs from the historical point of data recovery (RPO). Broader business outage tolerances require separate scope. | T:L53-L55; S18, S19; D2-Q05 |
| [KNOW-D2-022](knowledge-map.md#know-d2-022) - Recovery Point Objective - bounded definition | 2.2 | ACCEPTED | RPO is not time to restart the system. A backup schedule alone does not demonstrate achievable recovery. | T:L55-L61; S18, S19; D2-Q05 |
| [KNOW-D2-023](knowledge-map.md#know-d2-023) - Backup strategy and geographic recovery assumptions | 2.2 | NEEDS_REVIEW | External verification supports considering shared hazards, accessibility and testing; location alone is not a recoverability guarantee. | T:L61-L63; S18; D2-Q05 |
| [KNOW-D2-024](knowledge-map.md#know-d2-024) - Hot recovery site | 2.2 | NEEDS_REVIEW | High readiness does not imply a mirrored site, zero data loss or guaranteed instant activation. R-DR supplies a separate scoped clarification. | T:L63-L65; S18; D2-Q02, D2-Q05 |
| [KNOW-D2-025](knowledge-map.md#know-d2-025) - Warm recovery site | 2.2 | NEEDS_REVIEW | R-DR describes partial equipment/infrastructure; that clarification is external, not a repaired transcript. Fixed hours/days remain unverified. | T:L65-L65; S18; D2-Q02, D2-Q05 |
| [KNOW-D2-026](knowledge-map.md#know-d2-026) - Cold recovery site | 2.2 | NEEDS_REVIEW | Facility infrastructure differs from installed recovery computing equipment. Neither an empty shell nor fixed recovery days is approved here. | T:L65-L65; S18; D2-Q05 |
| [KNOW-D2-027](knowledge-map.md#know-d2-027) - DR testing and restore verification | 2.2 | ACCEPTED | No fixed test interval, specific exercise method or proven recovery result is supplied. | T:L65-L67; S18; no specific contradiction |
| [KNOW-D2-028](knowledge-map.md#know-d2-028) - Regulatory recovery claims and protected information | 2.2 | NEEDS_REVIEW | R-PHI verifies Protected Health Information; R-HHS gives bounded contingency duties; R-EDPB supports risk-based data security, not a universal identically named DRP mandate. | T:L49-L53; S17; D2-Q02, D2-Q04 |
| [KNOW-D2-029](knowledge-map.md#know-d2-029) - Security awareness | 2.3 | ACCEPTED | Individual understanding is distinct from organization-wide culture and from merely finishing a course. | T:L73-L75; S21; no specific contradiction |
| [KNOW-D2-030](knowledge-map.md#know-d2-030) - Security culture | 2.3 | ACCEPTED | Culture concerns shared practice; awareness concerns understanding. One good action illustrates culture without measuring the whole organization. | T:L75-L77; S22; no specific contradiction |
| [KNOW-D2-031](knowledge-map.md#know-d2-031) - Security leadership | 2.3 | ACCEPTED | Visible leadership support is not evidence that every employee follows policy. | T:L77-L81; S23; no specific contradiction |
| [KNOW-D2-032](knowledge-map.md#know-d2-032) - Social engineering and manipulation | 2.3 | ACCEPTED | A persuasive request can use apparent authority without proving real authority or possession of an executive account. | T:L81-L83; S24; no specific contradiction |
| [KNOW-D2-033](knowledge-map.md#know-d2-033) - Phishing | 2.3 | ACCEPTED | Phishing is the broad technique; spear phishing and whaling specify targeting, and vishing/smishing specify channels. | T:L83-L85; S25; D2-Q02 |
| [KNOW-D2-034](knowledge-map.md#know-d2-034) - Spear phishing | 2.3 | ACCEPTED | A targeted attack remains phishing; do not assume every targeted message is directed at an executive. | T:L85-L85; S25; D2-Q02 |
| [KNOW-D2-035](knowledge-map.md#know-d2-035) - Whaling | 2.3 | ACCEPTED | Target status distinguishes whaling; it is not automatically every message claiming to come from a CEO. | T:L85-L87; S25; D2-Q02 |
| [KNOW-D2-036](knowledge-map.md#know-d2-036) - Vishing | 2.3 | ACCEPTED | Channel is the distinction; the same incident may also use a pretext or target an executive. | T:L87-L87; S25; D2-Q02 |
| [KNOW-D2-037](knowledge-map.md#know-d2-037) - Smishing | 2.3 | ACCEPTED | SMS is the medium, not proof that a received text is malicious. | T:L87-L89; S26; D2-Q02 |
| [KNOW-D2-038](knowledge-map.md#know-d2-038) - Pretexting | 2.3 | ACCEPTED | A pretext describes the deception mechanism; vishing/smishing describe delivery channels. | T:L89-L89; S26; no specific contradiction |
| [KNOW-D2-039](knowledge-map.md#know-d2-039) - Employee password protection | 2.3 | ACCEPTED | The source gives no minimum length, rotation schedule or required complexity formula. Do not add them as course teaching. | T:L89-L91; transcript-only; no specific contradiction |
| [KNOW-D2-040](knowledge-map.md#know-d2-040) - Organizational credential protection | 2.3 | ACCEPTED | MFA is not automatically phishing-resistant. R-AUTH separately verifies that boundary; no protocol implementation is attributed to the lecture. | T:L91-L93; S27; no specific contradiction |
| [KNOW-D2-041](knowledge-map.md#know-d2-041) - Recognizing and reporting suspicious activity | 2.3 | ACCEPTED | Employee reporting differs from investigating, containing or resolving an incident; do not infer a complete IR sequence. | T:L73-L79; S21, S22, S23; no specific contradiction |
| [KNOW-D2-042](knowledge-map.md#know-d2-042) - Measuring cybersecurity objectives | 2.4 | ACCEPTED | Collecting a number is not proof of effectiveness. The measured outcome must relate to the stated objective. | T:L93-L95; S28, S29; no specific contradiction |
| [KNOW-D2-043](knowledge-map.md#know-d2-043) - Security metrics and useful measurement properties | 2.4 | ACCEPTED | A raw count, percentage and average have different units and interpretation; source does not supply every operational definition. | T:L95-L99; S30; D2-Q07 |
| [KNOW-D2-044](knowledge-map.md#know-d2-044) - Mean Time to Detect | 2.4 | NEEDS_REVIEW | Accepted spelling is not a validated formula. An hour is an example, not a universal benchmark or RTO. | T:L97-L99; S30; D2-Q07 |
| [KNOW-D2-045](knowledge-map.md#know-d2-045) - Mean Time to Respond - source-specific MTTR | 2.4 | NEEDS_REVIEW | The abbreviation is context-sensitive. Define the event boundaries before comparing values or constructing calculations. | T:L97-L101; S30, S31; D2-Q07 |
| [KNOW-D2-046](knowledge-map.md#know-d2-046) - Vulnerability remediation performance metric | 2.4 | ACCEPTED | A timely-remediation percentage differs from the current count of outstanding vulnerabilities. Populations/periods must be specified before calculation. | T:L99-L103; S31, S33; D2-Q07 |
| [KNOW-D2-047](knowledge-map.md#know-d2-047) - Patch compliance metric | 2.4 | ACCEPTED | System compliance is a different denominator from number of vulnerabilities remediated. Do not combine the two measures. | T:L99-L109; S31, S36; D2-Q07 |
| [KNOW-D2-048](knowledge-map.md#know-d2-048) - Security-awareness training completion metric | 2.4 | ACCEPTED | Participation/implementation differs from behavioral effectiveness; R-MEAS provides separate verification of that measurement distinction. | T:L99-L109; S31, S36; D2-Q07 |
| [KNOW-D2-049](knowledge-map.md#know-d2-049) - Key Risk Indicators and interpretation | 2.4 | NEEDS_REVIEW | More reports can reflect more attacks or better reporting. The definition is source-supported; that example's causal interpretation remains held. | T:L101-L105; S32, S33; D2-Q07 |
| [KNOW-D2-050](knowledge-map.md#know-d2-050) - Key Performance Indicators | 2.4 | ACCEPTED | KPI/KRI classify purpose; the mnemonic does not prove a measure can have only one decision use. | T:L103-L105; S33; D2-Q07 |
| [KNOW-D2-051](knowledge-map.md#know-d2-051) - Security dashboards | 2.4 | ACCEPTED | Visualization is a presentation function and can include scorecard comparisons; do not require separate products. | T:L105-L107; S34; no specific contradiction |
| [KNOW-D2-052](knowledge-map.md#know-d2-052) - Security scorecards | 2.4 | ACCEPTED | Target comparison can appear on a dashboard or in a report. Do not treat these as mutually exclusive containers. | T:L107-L111; S35, S36; D2-Q03, D2-Q07 |
| [KNOW-D2-053](knowledge-map.md#know-d2-053) - Cybersecurity reports | 2.4 | ACCEPTED | A report may contain charts/scorecards. The source supplies no fixed audience, frequency or mandatory report format. | T:L111-L115; S37, S38; no specific contradiction |
| [KNOW-D2-054](knowledge-map.md#know-d2-054) - Worked scorecard and unresolved vulnerability units | 2.4 | NEEDS_REVIEW | Preserve all original values. Do not insert a percent sign or assume a count; original recording/deck or documented reviewer resolution is required. | T:L109-L111; S36; D2-Q03 |

## Deferred scopes - not canonical entries

| Scope ID / status | Scope and evidence | Reason / release requirement |
| --- | --- | --- |
| D2-DS01 / DEFERRED | PCI DSS, CMMC, left-clipped SOX in S07 diagram | Names without taught definitions/taxonomy; external name expansions or full lessons must be separately sourced |
| D2-DS02 / DEFERRED | Detailed NIST CSF, ISO/IEC 27001 and COBIT implementation (T:L19-L23/S07) | Named roles taught, not complete frameworks, clauses or editions; do not infer them from the slide |
| D2-DS03 / DEFERRED | Full incident-response sequence/playbooks | Generic reporting exists at T:L73-L79, but a complete sequence is absent; do not re-import old Domain 2 assumptions |
| D2-DS04 / DEFERRED | AI content as if taught by this course | Absent from full T and all relevant captures; [separate supplemental gaps](academic-issues-gap-register.md#supplemental-gap-register) must not acquire course provenance |
| D2-DS05 / DEFERRED | Promotions, career-entry assertions and exam-frequency predictions (T:L1-L9) | Not verified subject knowledge or evidence of real ISC2 questions; no assessment value assumed |
| D2-DS06 / DEFERRED | Hidden crop text, original deck-page identities and exact video timing | Not supplied; readable companions support only their own visible content. No reconstruction from filenames |

## Hold handling

A concept may be ACCEPTED for a definition while an adjacent source guarantee or worked example remains held. Examples: KNOW-D2-022 accepts RPO's data-loss/recovery-point distinction but not a universally sufficient one-hour schedule; KNOW-D2-052 accepts scorecard purpose but not disputed row units (KNOW-D2-054). Independent authoritative clarification does not retroactively change raw captions or close an entire multi-part issue. Source-derived and external-only propositions must retain separate provenance during Phase 3.


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

