# Domain 4 - Curated Coverage and Readiness Reassessment

Task 56 | 2026-10-28 (Asia/Bangkok) | Documentation and verification only

Deliverables: [resolution register](domain-4-findings-resolution-register.md), [bilingual supplements](domain-4-knowledge-gap-supplements.md), [curated knowledge base](../../../content/isc2-cc-2026/knowledge/domain-4.md), [assessment blueprint](domain-4-question-development-blueprint.md), and this reassessment. The [Task 55 matrix](domain-4-objective-coverage-matrix.md) and other Task 55 reports remain unchanged as the original-source baseline.

## Result and scope of readiness

All **20 findings** are accounted for, with unrelated subclaims kept distinct: **6 parent findings corrected, 12 qualified, 2 partially resolved with explicitly excluded unverified subclaims**. The six required-teaching gap groups are supplemented. The curated authoring package has **24 bilingual knowledge records, 8 expanded supplements and 21 assessment targets**, with a catalog of **36 primary references**. These numbers describe authored evidence, not a question quota or question count.

**All three curated objectives have Covered foundational scope with bounded technical verification.** This is not an automatic conversion of the original statuses: each scope area below has specific knowledge, added teaching and exclusion reasoning. Original source coverage remains **Partial / Partial / Partial**. Coverage, technical verification, bilingual review, human authorization and future item quality are separate judgments.

The package is ready for **human academic/bilingual review and approval of a later bounded question-authoring task**. No unresolved required foundational bullet blocks that review. Unverified extras are excluded safely. Question generation has not begun and still requires explicit approval; neither readiness nor a blueprint grants it.

## Verified official scope and source authority

The [ISC2 English outline v01/2026](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf), printed p.6, defines the exact titles below; effective September 1, 2026, Domain 4 weight 21.3% on p.3. The [official webpage](https://www.isc2.org/certifications/cc/cc-certification-exam-outline) adds separate Domain 4 AI commentary. Neither creates numbered 4.x.y sub-objectives, a fourth objective or an advanced ML syllabus. Supporting scope descriptions here are paraphrases. No local PDF was supplied; repository-linked official references were retrieved rather than objective definitions being inferred from old scaffolds.

| Official objective | Original source status | Curated package status | Academic/bilingual status | Question-development readiness |
| --- | --- | --- | --- | --- |
| 4.1 Understand network security | Partial: major 4.1 T/S depth, absent Bluetooth/security interpretation, numerical and protection overstatements | Covered at foundational depth through KNOW-D4-001-011,022 and SUP-D4-01-04,06,08 | Bounded claims primary-checked; English/Thai meaning checked by assistant; historical/exact-rate extras excluded | Evidence baseline ready; human review/explicit drafting approval pending |
| 4.2 Understand network security architecture | Partial: all core areas taught, inaccurate VLAN/DMZ/layered-failure wording and limited flow interpretation | Covered through KNOW-D4-012-016,023 and SUP-D4-05,08 | Corrected definitions, alternative architectures and stated policy example verified; no guarantee of deployment effectiveness | Evidence baseline ready under stated policy/context; human approval pending |
| 4.3 Understand cloud security | Partial: all headings taught, generic duty charts/hybrid/billing/security claims insufficiently bounded | Covered through KNOW-D4-017-021,024 and SUP-D4-07-08 | Cloud taxonomy and component duties verified, including AWS/Azure/Google examples; legal/tariff/product universals excluded | Evidence baseline ready for model/duty decisions; human approval pending |

## Subtopic reassessment

Descriptive rows retain official parent IDs; none is a newly numbered sub-objective. **Covered** means enough accurate explanation, application and limitations for foundational authoring, not every exam fact or implementation. **Original status** is copied from Task 55 rather than retrospectively changed. R references/sections and exact sources resolve through the register/knowledge records.

| Parent / required or supporting area | Original coverage / evidence | Supplementary or corrected evidence | Curated coverage and academic status | Remaining gap / authoring condition |
| --- | --- | --- | --- | --- |
| 4.1 / OSI-TCP/IP | Partial; T:L5-L41/S02-S06/A3/B OSI | KNOW-D4-001, F02, R03/R33 | Covered functional/mapping explanation | PRC/RPC and chronology/never-implemented assertions excluded; no rigid TLS-layer key |
| 4.1 / transport behavior | Within partial model area; S03/S05/A TCP-UDP distinction | KNOW-D4-002, F01, R04-R05 | Covered ordered/reliable versus datagram behavior and security distinction | Application requirements must be explicit; no guaranteed speed/completion |
| 4.1 / IPv4/IPv6 | Partial; T:L43-L67/S07-S12 | KNOW-D4-003-004, F03-F05, SUP-D4-04/R06-R11 | Covered notation, size, conservation, protection and coexistence principles | Classful count/rate trivia and advanced transition configuration excluded |
| 4.1 / VPN | Covered purpose; T:L69-L75/S13 | KNOW-D4-005/R14 with tunnel/endpoint/access boundary | Covered with operational limits | A detailed vendor/protocol configuration scenario would need extra evidence |
| 4.1 / firewall ports/applications | Partial; S14/S17-S21/T:L75-L107 | KNOW-D4-006-007, F06-F08, SUP-D4-03/R08/R14/R19-R21/R32 | Covered packet/state/application context and simple flow interpretation | State, default policy, direction and inspection visibility must be stated |
| 4.1 / Wi-Fi | Partial; S16/T:L79-L85 | KNOW-D4-008, F09-F10, SUP-D4-02/R17 | Covered foundational authentication/encryption/exposure decisions | No exact generation rate, universal mode or corporate EAP procedure claim |
| 4.1 / Bluetooth | Missing substantive teaching; A:L32/S26 icon | KNOW-D4-009, SUP-D4-01/R29-R30 | Covered pairing/protection/access distinctions with example | NIST version scope is explicit; later-version configuration needs current specification |
| 4.1 / embedded and ICS | Covered basic constraints; S22-S25/T:L107-L121 | KNOW-D4-010, SUP-D4-06/R31 | Covered safety/availability-aware decisions | No plant-specific patch/reboot procedure or universal remediation clock |
| 4.1 / IoT | Covered risk/practices; S26-S27/S37/A12-13 | KNOW-D4-011, SUP-D4-06/R31 | Covered lifecycle and scoped communications | Device capabilities and operational needs constrain changes |
| 4.2 / segmentation, zones and DMZ | Partial; S28-S33/T:L127-L149 | KNOW-D4-012, F12-F13, SUP-D4-05/R14/R31 | Covered purpose, alternative designs and worked permitted paths | Actual enforcement/administration still must be verified in real deployment |
| 4.2 / VLAN and micro-segmentation | Partial; S34-S35/T:L151-L163/A9-10 | KNOW-D4-013-014, F11/F13/F15, SUP-D4-05/R12-R15 | Covered ID distinction, routing/enforcement and workload granularity | A product label or IP selector alone cannot establish identity assurance |
| 4.2 / defense in depth | Partial; S36/T:L165-L171 | KNOW-D4-015, F14/R14 | Covered complementary control purpose and common-dependency limits | Design inference is marked; no availability/independent-failure guarantee |
| 4.2 / Zero Trust | Covered foundational context; S38-S39/T:L175-L177 | KNOW-D4-016/R15; SUP-D4-05 | Covered resource/session/context distinction | Avoid duplicating IAM/ABAC targets or implying human authentication per packet |
| 4.3 / characteristics | Covered basic definitions; S41-S42/T:L177-L183 | KNOW-D4-017, F20/R16 | Covered distinctions, examples and authorization/metering limits | No unlimited-entitlement or exact-tariff inference |
| 4.3 / service models | Covered core models; S43-S44/T:L185-L193 | KNOW-D4-018,021; F17-F18/R16/R23-R24/R26-R28 | Covered IaaS/PaaS/SaaS and bounded FaaS context | FaaS is industry extension; exact pricing is outside assessment baseline |
| 4.3 / deployment models | Partial; S50-S55/T:L207-L225 | KNOW-D4-019,021; F18-F20/R16/R24 | Covered exclusivity/community/hybrid integration and multi-provider distinction | No legal prohibition, universal cost/security ranking or guaranteed failover |
| 4.3 / shared security | Partial; S45-S49/T:L193-L205 | KNOW-D4-020-021; F16-F17/SUP-D4-07/R22-R26 | Covered component/control/configuration allocation with provider counterexamples | Real service/contract/defaults need refresh if relied on in a specific scenario |
| Existing 4.1-4.3 / official AI context | Missing security teaching; provider-use examples only | KNOW-D4-022-024, SUP-D4-08/R02/R15/R32/R22-R24 | Covered network monitoring, wireless/embedded relevance, development isolation and cloud duties | No advanced algorithms, model attacks, GPU or autonomous-agent implementation requirements added |

## Corrections and additions that changed readiness

Corrections distinguish TCP reliability from UDP/security, implementation support from IPv6 protection, eight-piece notation from an inconsistent caption, port counts/ranges from VLAN identifiers, conventional defaults from service identity, and FTPS from SFTP. Qualifications preserve valid Wi-Fi/DMZ/segmentation/layered-control ideas without guarantees; micro-segmentation is not tied to one product category. Cloud curation separates deployment/use from service abstraction, broadens hybrid to the authoritative definition, and allocates duties by component/service rather than chart color. Provider evidence refutes universal enable-encryption, provider-patches-every-runtime and execution-duration-only billing claims.

New bilingual teaching closes Bluetooth and the official AI application gaps; expands firewall/state/application/alert interpretation; shows an explicit permitted-flow policy; adds safe OT maintenance reasoning; and develops component-specific cloud configuration decisions. Supplements distinguish authored examples from original course diagrams. Task 55 was also re-examined: its possible inference risks are not recast as explicit errors where the source never made the stronger assertion (F10b/F20c).

## Remaining uncertainties and blockers

| Uncertainty / excluded claim | Status and consequence | Blocks foundational drafting after approval? |
| --- | --- | --- |
| F02b PRC/RPC intended word; F02d chronology/never implemented | Unverified; excluded from knowledge/targets | No; model functions are independently taught |
| F10c generic port-knocking recommendation; exact S16 rate comparison | Universal advice unverified; numeric rates outside accepted scope | No; exposure control/Wi-Fi security are independently taught |
| Original spoken attribution, course URL/instructor/full deck completeness | Unknown; exact batch remains source evidence, not proof of all original lessons | No, with disclosed provenance; do not invent missing media |
| Bluetooth later-version specifics, vendor rule syntax/defaults, tariffs | Not generalized; research again if an item depends on them | Yes for that added specific claim; no for accepted bounded principles |
| Plant-specific actions and regulatory/legal suitability | No universal procedure/prohibition asserted | Yes for unsupported specific decisions; no for stated safety/requirement reasoning |
| Human academic and natural-Thai sign-off | Pending; assistant performed primary-source and meaning checks; independent human review is recommended | Explicit human approval is required by this task before question generation |

Technical closure and permission are distinct: none of the excluded extras is necessary to cover a numbered foundational bullet. Later authoring should use only the accepted record boundaries and reject/hold any new dependency not supported there. A Covered label is not an assertion of complete exam coverage, no ambiguity in every future item, or psychometric validity.

## Validation and preservation

Static and preservation verification passed on 2026-10-28. The checks accounted for all 20 parent findings and their dispositions; 36 reference-catalog anchors; 24 sequential bilingual knowledge records with required teaching/provenance fields; 8 objective-mapped bilingual supplements; and 21 assessment targets linked to existing knowledge records. All 84 local links/reference targets and 32 Markdown tables checked passed. Whitespace, fence and prohibited-content-pattern checks passed; `git diff --check` passed for both modified tracked documents. The pattern checks support, but do not replace, direct review that the blueprint contains assessment decisions rather than actual question stems, options or keys.

SHA-256 comparison against the pre-edit snapshot of 2,839 existing tracked/nonignored files found **2,837 unchanged, exactly 2 intended existing Markdown files changed, no missing files and exactly 4 new planning documents**. The two changed files are the curated knowledge scaffold and planning README; removing only the Task 56 index note reproduces the saved README. All **58 original Domain 4 files** and all four Task 55 reports match the baseline. Existing 583 legacy questions, updated D1-D3 banks, vocabulary, UI/runtime code and unrelated uncommitted work remain unchanged from the start of this task. No browser automation, question/vocabulary generation, production integration or commit was performed.

These results establish structural consistency, traceability and preservation, **not academic correctness**. Academic verification consists separately of the claim-level primary-source comparisons, dated confidence/limitations in the register and assistant EN/TH meaning review. Independent human academic and natural-Thai sign-off remains pending.

## Recommended next task

Human review should inspect the F adjudications, representative primary sections, Bluetooth/AI scope and Thai meaning. After explicit approval, begin original Domain 4 question development from distinct blueprint targets with no arbitrary quota: independently solve candidate items, inspect every distractor/rationale, compare against the legacy 583 and updated D1-D3, localize/review Thai and maintain a source-to-item audit trail. Recheck actual IDs/conventions then; this task reserves none. Vocabulary follows separately. Stop Task 56 at documentation/verification.
