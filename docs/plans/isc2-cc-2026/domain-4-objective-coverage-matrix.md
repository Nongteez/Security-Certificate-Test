# Domain 4 - Official Objective Coverage Matrix

Task 55 | Analysis only | Reviewed 2026-10-28 (Asia/Bangkok)

Companion reports: [source inventory](domain-4-source-inventory.md), [academic findings](domain-4-academic-content-gap-analysis.md), [question-bank readiness](domain-4-question-bank-readiness.md).

## Scope authority and provenance

The repository contains references to the official outline, but **no local outline PDF was found** in the recursive document search. The exact official PDF URL is already recorded in [learning-slides-content-guidelines.md](learning-slides-content-guidelines.md) and [Domain 2's outline audit](../../../content/isc2-cc-2026/sources/domain-2/notes/phase-1/exam-outline-coverage.md). That linked [ISC2 English PDF, v01/2026][OUTLINE] was retrieved and checked for this analysis: effective September 1, 2026; Domain 4 on **printed page 6**, weight **21.3%** on printed page 3. No PDF was added to the repository.

The dated PDF governs numbering. The [ISC2 outline webpage][ISC2] corroborates it; the webpage's introductory domain list still contains older domain names. Its separate AI commentary is contextual guidance, not additional numbered objectives. The old [domain-mapping.md](domain-mapping.md) section marking D4 numbering pending is historical and is superseded for this analysis by the verified evidence here. No official objective IDs 4.A-4.F, 4.4, or 4.x.y are inferred.

Evidence notation: **T** = `ISC2 Update 2026/Domain 4/DOMAIN 3.txt` (225 lines); **A** = `D3 sum.md` (883 lines); **B** = `Domain 4.md` (330 lines). **S01-S55** identify exact screenshots in the inventory. `T:L5-L41` means file lines, not timestamps. Source line ranges and slide/topic matches do not establish frame synchronization. Required-knowledge descriptions below are analytical paraphrases of scope, not a new official syllabus.

## Status rules

- **Covered:** sufficient foundational explanation and applied support for the stated area, with no unresolved material contradiction affecting that judgment. This does not certify all possible exam scenarios.
- **Partial:** substantive teaching exists, but a required area, reasoning depth, or material accuracy qualification remains unresolved.
- **Missing:** no substantive teaching found in the inspected batch. A word, title, or decorative icon alone is insufficient.
- **Unverified:** the evidence needed to decide a specific claim or source relationship is unavailable.

Coverage is assessed **before** the recommended corrections or supplementary research are incorporated. External sources used to diagnose errors do not silently upgrade the course's coverage.

## Objective-level matrix

| Official ID | Official objective title | Required knowledge areas (scope paraphrase) | Supporting source files | Relevant slides | Status | Identified gaps / limitations | Recommended follow-up |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1 | Understand network security | Layered networking and addressing, protected connectivity, firewall behavior with ports/applications, wireless, embedded/industrial and IoT security | T:L5-L125; A sections 1-5, 12-13; B 4.1 and section 7 | S02-S14, S16-S27 | **Partial** | Bluetooth is only a PAN example in A:L32; no security teaching. IPv6 IPsec, transport reliability, port diagrams and Wi-Fi recommendations need correction. Summaries omit most original 4.1 depth. Firewall application/connection-state behavior is listed but barely demonstrated. | Curate the full 4.1 transcript/slides, add Bluetooth security foundations, correct register F01-F10, supplement firewall rule interpretation at CC depth. |
| 4.2 | Understand network security architecture | Segmentation and zone/workload boundaries, layered controls, resource access without automatic network trust | T:L127-L177; A sections 6-14, 19-22; B sections 1-8 | S28-S39 | **Partial** | All three scope areas have substantive support. However, VLAN identifier teaching is wrong, the DMZ text and drawing differ, and layered controls are said to eliminate all single points of failure. No worked allow/deny interpretation or verification of effective isolation. | Resolve F11-F15; retain B's useful ACL and trust caveats; add simple traffic-path/policy interpretation and verify the boundaries of each control. |
| 4.3 | Understand cloud security | Cloud properties, service/deployment distinctions, division of provider/customer security duties | T:L177-L225; A sections 15-21; B sections 9-12 | S41-S55 | **Partial** | All four scope areas are taught. Hybrid is narrowed to private/public, shared responsibility graphics overgeneralize, and billing/security/control claims require conditions. FaaS and multi-cloud need clear taxonomy labels. | Resolve F16-F20; use NIST cloud definitions and service-specific responsibility guidance; validate security decisions against stated workload requirements. |

**Result:** 0 Covered / 3 Partial / 0 Missing / 0 Unverified at the whole-objective level. Numbering is verified; the original lesson's completeness is not. Broad topic presence in 4.2/4.3 is stronger than the readiness for unqualified answer rationales.

## Subtopic evidence and decision depth

Rows below retain their parent official ID; row labels are descriptive and are **not** official numbered sub-objectives.

| Parent ID / area | Source evidence | Status | What is supported; remaining condition / research |
| --- | --- | --- | --- |
| 4.1 / OSI and TCP/IP | T:L5-L41; A:L64-L151; B:L28-L52; S02-S06 | Partial | Seven/four layer mapping, protocol/device examples and encapsulation diagrams exist. A's TCP/IP heading supplies mainly TCP/UDP and ports, not the four-layer model. Correct the claim that every layer adds a header and that transport universally guarantees reliability. Use RFC 1122 model context and RFC 768 before applied interpretation. |
| 4.1 / IPv4 and IPv6 | T:L43-L67; S07-S12; little substantive A/B treatment | Partial | Address sizes, notation, exhaustion, NAT/CIDR, DHCPv6/SLAAC and dual stack are taught. Correct IPsec and numerical/diagram issues. Distinguish address conservation from security and coexistence from automatic interoperability; see F03-F05. |
| 4.1 / VPN | T:L69-L75; A:L33; B:L14; S13 | Covered | Purpose, encryption/authentication and remote-user/site connectivity are explicit. Endpoint or post-tunnel protection is not established. Detailed IPsec/TLS selection, split tunneling and protocol configuration need supplementation if later chosen; they are not separately numbered outline requirements. |
| 4.1 / firewalls, ports and applications | T:L75-L107; A:L37-L62,L137-L151,L673-L682; B:L16-L52; S14,S17-S21 | Partial | Host/network placement, rule inputs, source/destination ports and common services are shown. Numeric diagram and transcript errors, service-versus-port assumptions, and FTP/FTPS distinctions need correction. Stateful versus application-aware decisions lack worked examples. NIST SP 800-41 and IANA are follow-up authorities. |
| 4.1 / Wi-Fi | T:L79-L85; A:L31; B:L12; S16 | Partial | Standards/frequencies and protection labels are present. SSID hiding/MAC filtering and near-invulnerability claims are unsafe teaching shortcuts. Add authentication/encryption limitations, compatibility, untrusted-access-point context and approved configuration rationale; avoid memorizing advertised rates. |
| 4.1 / Bluetooth | A:L32 PAN example; decorative Bluetooth icon in S26 | Missing | No substantive explanation of pairing, authentication, exposure, or mitigations; no corresponding transcript lesson. Research NIST SP 800-121 Rev.2 Update 1, noting its version scope, then current Bluetooth SIG guidance for any version-specific additions. |
| 4.1 / embedded systems and ICS | T:L107-L121; S22-S25; B:L144-L153 and A section 13 provide mainly segmentation | Covered | Specific-purpose/resource/lifecycle constraints and physical safety, reliability, availability and patching limitations are explicit. Supplement NIST SP 800-82 Rev.3 for procedural decisions. Do not turn ordinary IoT patch advice into an immediate live-ICS reboot requirement. |
| 4.1 / IoT | T:L121-L125,L173; A sections 12-13,22; B section 7; S26-S27,S37 | Covered | Default credentials, firmware, communications, inventory, unsupported devices and isolation have practical controls. Device capabilities and authorized maintenance constrain implementation; a network connection is not required for every embedded system. |
| 4.2 / segmentation and firewall zones | T:L127-L149; A sections 6-8; B sections 1-3; S28-S33 | Partial | Purpose, blast radius, management/public/internal zones and DMZ placement are explicit. Resolve the one-firewall diagram versus two-firewall text; treat trust labels as policy groupings and allowed flows as conditional, not guaranteed isolation. |
| 4.2 / VLAN and micro-segmentation | T:L151-L163; A sections 9-10; B sections 4-5; S34-S35 | Partial | Logical/broadcast separation, inter-VLAN routing (A/B) and granular workload controls are supported. Correct VLAN range and avoid claiming these capabilities require NGFW/SDN exclusively. A/B add a useful three-tier example absent from the source slide. |
| 4.2 / defense in depth | T:L165-L171; A section 11,21; B section 6; S36 | Partial | Concrete perimeter, network, endpoint, application and data controls are given. Multiple layers reduce reliance on one defense; independence, common failures and availability redundancy are not guaranteed. Resolve F14. |
| 4.2 / Zero Trust | T:L175-L177; A section 14,20; B section 8; S38-S39 | Covered | Location alone grants no access; identity, device posture, application/resource/context are explicit. Segmentation supports this approach but is insufficient by itself. Use NIST SP 800-207 for finer session/policy assertions. |
| 4.3 / characteristics | T:L177-L183; A section 15; B section 9; S41-S42 | Covered | All five properties have explanations and concrete examples. S42 qualifies metering as often used for billing; prefer this to T's absolute billing statement. Access is network based and still policy constrained. |
| 4.3 / service models | T:L185-L193; A section 16; B section 10; S43-S44 | Covered | IaaS/PaaS/SaaS distinctions and retained customer duties are sufficient for foundational comparisons. FaaS is additional course depth, not a fourth NIST SP 800-145 model. Qualify custom/runtime and billing details before vendor-specific items. |
| 4.3 / deployment models | T:L207-L225; A section 18; B section 12; S50-S55 | Partial | Public/private/community and multi-provider use have examples. NIST hybrid includes integrated combinations of distinct cloud infrastructures beyond public/private. No model automatically provides compliance, resilience or superior security. |
| 4.3 / shared security | T:L193-L205; A section 17; B section 11; S45-S49 | Partial | Provider infrastructure versus customer-controlled code/data/access is well supported. Shared-column and stack graphics differ in granularity and cannot assign all networking/data protection exclusively. Clarify provider, service, configuration and runtime maintenance scope before responsibility decisions. |

## Separate 2026 AI context

The [ISC2 webpage's Domain 4 AI commentary][ISC2] applies network foundations to AI traffic, anomaly monitoring and AI-aware defenses, separates development from production, and applies cloud responsibility to AI workloads. This commentary is **not another numbered objective**. None of the local materials substantively teaches these applications: an AI provider example at T:L225 / A:L607 / B:L268 is not security instruction. Status: **Missing** for this context. Research foundational alert limitations and human reporting, appropriate isolation, and retained customer duties without promising that AI proves malicious intent or replaces analysts. No detailed ML algorithms or product configuration are implied.

## Source and scope limitations

The official PDF is the verified scope reference, not evidence of how deeply each topic will be examined. The local lesson has no original media, instructor/course URL, timestamps or editable deck. Completeness against the original course remains **Unverified**. IDS/IPS, DMZ, NAT/CIDR, specific port numbers, FaaS and multi-cloud are supporting material; the PDF does not assign them separate numbered objectives or a memorization quota. Advanced subnet calculations, exact wireless rates and vendor command syntax are not justified as mandatory requirements by this batch.

[OUTLINE]: https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf
[ISC2]: https://www.isc2.org/certifications/cc/cc-certification-exam-outline
