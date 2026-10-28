# Domain 4 - Academic Findings Resolution Register

Task 56 | Research and documentation only | Verification date: **2026-10-28 (Asia/Bangkok)**

Read all four Task 55 reports completely. This register preserves their [source inventory](domain-4-source-inventory.md), [original coverage](domain-4-objective-coverage-matrix.md), [F01-F20 findings](domain-4-academic-content-gap-analysis.md), and [readiness baseline](domain-4-question-bank-readiness.md). Original T/A/B files and screenshots are unchanged. T/A/B and S01-S55 retain the inventory's exact file/line/capture meanings. Selected disputed transcript passages and S11/S17/S33/S34 were re-inspected; conclusions were independently checked against the primary references below.

Companions: [curated knowledge base](../../../content/isc2-cc-2026/knowledge/domain-4.md), [bilingual supplements](domain-4-knowledge-gap-supplements.md), [assessment blueprint](domain-4-question-development-blueprint.md), [coverage/readiness reassessment](domain-4-curation-coverage-readiness.md).

## Classification and resolution rules

**Incorrect** = inaccurate technical assertion. **Needs Qualification** = valid idea with omitted conditions. **Incomplete** = required teaching absent. **Ambiguous** = insufficiently precise or conflicting presentation. **Unverified** = evidence cannot establish the assertion. Classification describes a claim, not the competence or intent of an instructor. A transcription conflict does not establish what was spoken.

Each F ID is retained; lettered subclaims separate unrelated issues within it. The primary classification in the summary is for counting, while each subclaim has its own classification. **Resolved-corrected** replaces an inaccurate claim in curated documentation; **Resolved-qualified** retains a bounded version; **Partially resolved** has named excluded subclaims. **Excluded** means the assertion must not support later assessment. Exclusion resolves dependency, not historical truth. All entries below use the verification date above. Confidence concerns the stated bounded conclusion: **High** = direct standard/provider evidence or visible internal comparison; **Medium** = reasoned synthesis; **Low** = insufficient evidence, explicitly unverified. No human or ISC2 approval is claimed.

## All 20 parent findings accounted for

| Finding | Primary classification | Disposition | Curated knowledge dependency |
| --- | --- | --- | --- |
| F01 | Incorrect | Resolved-corrected | KNOW-D4-002 |
| F02 | Ambiguous | Partially resolved; wording/history excluded | KNOW-D4-001 |
| F03 | Incorrect | Resolved-corrected | KNOW-D4-004 |
| F04 | Incorrect | Resolved-corrected | KNOW-D4-003 |
| F05 | Needs Qualification | Resolved-qualified | KNOW-D4-003, KNOW-D4-004 |
| F06 | Incorrect | Resolved-corrected | KNOW-D4-007 |
| F07 | Incorrect | Resolved-corrected; spoken attribution unknown | KNOW-D4-007 |
| F08 | Needs Qualification | Resolved-qualified | KNOW-D4-007 |
| F09 | Needs Qualification | Resolved-qualified | KNOW-D4-008 |
| F10 | Unverified | Partially resolved; universal port-knocking advice excluded | KNOW-D4-008 |
| F11 | Incorrect | Resolved-corrected | KNOW-D4-013 |
| F12 | Ambiguous | Resolved-qualified | KNOW-D4-012 |
| F13 | Needs Qualification | Resolved-qualified | KNOW-D4-012, KNOW-D4-013, KNOW-D4-016 |
| F14 | Needs Qualification | Resolved-qualified | KNOW-D4-015 |
| F15 | Needs Qualification | Resolved-qualified | KNOW-D4-014 |
| F16 | Needs Qualification | Resolved-qualified | KNOW-D4-020 |
| F17 | Needs Qualification | Resolved-qualified | KNOW-D4-021 |
| F18 | Needs Qualification | Resolved-qualified | KNOW-D4-018, KNOW-D4-019, KNOW-D4-021 |
| F19 | Needs Qualification | Resolved-qualified | KNOW-D4-019 |
| F20 | Needs Qualification | Resolved-qualified | KNOW-D4-017, KNOW-D4-021 |

**Parent totals:** 6 Incorrect, 11 Needs Qualification, 2 Ambiguous, 1 Unverified; 0 primarily Incomplete. Missing teaching is separately recorded as G01-G06 below, not silently forced into an unrelated F ID. **18 parents closed** (6 corrected, 12 qualified); **2 partially resolved**. This is not a claim that every subclaim within the 18 closed parents was false. Spoken attribution remains unavailable even where the technical correction is settled.

## Claim-by-claim adjudication

### F01 - Reliability and security

Verified 2026-10-28. Overall confidence: High.

| Subclaim / original source location and statement | Classification | Technical explanation and recommended curated wording | Evidence / status |
| --- | --- | --- | --- |
| F01a: S03 and T:L21 include TCP/UDP while saying transport ensures reliable transmission | Incorrect | TCP provides an ordered reliable byte stream using loss/error detection and retransmission; UDP itself provides no delivery/order guarantee. Use protocol-specific behavior. | [R04] section 2.2; [R05] Introduction. Resolved-corrected; High. |
| F01b: T:L35 describes complete delivery without loss or corruption | Needs Qualification | Reliability is a service objective under protocol operation, not guaranteed application success under failure, nor confidentiality or cryptographic authenticity. Use an appropriate secure application/transport mechanism for those goals. | [R04] section 2.2; [R33] Introduction. Resolved-qualified; High. |
| F01c: S05/T:L35 contrast TCP reliability with UDP speed | Needs Qualification | UDP's lower protocol overhead can suit latency-sensitive applications; it does not guarantee a higher application transfer rate or forbid application-layer reliability. | [R05] Introduction, minimal mechanism; conclusion about application choice is analytical synthesis. Resolved-qualified; Medium. |

### F02 - Models, encapsulation and uncertain terminology

Verified 2026-10-28. Confidence varies by subclaim.

| Subclaim / original source location and statement | Classification | Technical explanation and recommended curated wording | Evidence / status |
| --- | --- | --- | --- |
| F02a: S02/T:L13-L17 say every layer adds/removes its own header | Incorrect | Model layers describe functions; real stacks encapsulate according to actual protocols. Teach application data carried in transport/IP/link units and physical signaling, not seven compulsory headers. | [R03] sections 1.1.3/1.3.3; [R36] clauses 6.1.2/7.7.2. Resolved-corrected; High for the bounded example. |
| F02b: S03/T:L21 show PRC; Task 55 proposes RPC as likely intended | Unverified | A probable correction is not proof of intended wording. Omit PRC/RPC from the authoring baseline; do not silently repair the original. This does not block learning session functions. | Direct source conflict; no audio. Excluded, Unverified; Low. |
| F02c: S03 assigns TLS/JPEG to presentation; S04/S05 place TLS among application examples | Ambiguous | OSI is a functional reference model, and Internet layering is a different model. JPEG is a representation format. Explain formatting/security functions without requiring one universal layer assignment for TLS. | [R03] section 1.1.3; [R33] Introduction describes the actual secure channel, not a compulsory OSI layer. Resolved-qualified; High. |
| F02d: T:L5-L7,L27-L29 claim OSI preceded the other model and was not practically implemented | Unverified | Neither Task 55 nor current research establishes that universal historical/deployment assertion. Exclude chronology and never-implemented claims; use models for reasoning and troubleshooting. | [R03] establishes Internet architecture, not this historical claim. Excluded, Unverified; Low. |

### F03 - IPv6 and IPsec

Verified 2026-10-28. Confidence: High.

| Subclaim / original source | Classification | Explanation and recommended correction | Evidence / status |
| --- | --- | --- | --- |
| F03a: S12/T:L65 say IPsec is mandatory for IPv6 | Incorrect | RFC 8504 makes IPsec architecture support a SHOULD, not universal mandatory support or deployment. Standards requirements for an implementation are also distinct from operational use. | [R06] sections 13 and 13.1. Resolved-corrected; High. |
| F03b: S12's built-in-security wording implies IPv6 traffic is inherently protected | Needs Qualification | Address version does not prove authenticated or encrypted traffic. Configure relevant controls and secure both enabled address families. | [R06] section 13; [R33] secure-channel purpose. Resolved-qualified; High. |

### F04 - IPv6 diagram count

Verified 2026-10-28. Confidence: High.

| Original source and issue | Classification | Explanation and recommended correction | Evidence / status |
| --- | --- | --- | --- |
| S11 (`151504.png`) lower caption repeats nine 16-bit labels; its actual address has eight groups. T:L63 self-corrects the count. | Incorrect | Preserve the valid eight-group address concept. A full ordinary hexadecimal representation has eight 16-bit pieces totaling 128 bits; compressed notation can display fewer groups. The caption is inconsistent; the address is not a nine-group address. | Original image re-inspected; [R07] section 2.2. Resolved-corrected; High. |

### F05 - Classes, NAT and transition

Verified 2026-10-28. Confidence: High.

| Subclaim / original source | Classification | Explanation and recommended correction | Evidence / status |
| --- | --- | --- | --- |
| F05a: S08 gives Class A 1-126 but 128 networks excluding 0/127 | Incorrect | The range/table is internally inconsistent: excluding two from 128 leaves 126. Do not use historical counts as current address-allocation rules. | Direct arithmetic and source table; [R09] Abstract and History/Problem Description. Resolved-corrected; High. |
| F05b: S12/T:L65 say no NAT needed | Needs Qualification | Abundant IPv6 space removes the usual IPv4 address-sharing pressure; translation still exists for interoperation. NAT64 is a direct counterexample to a prohibition on translation. NAT alone is not encryption or an access policy. | [R11] Abstract; [R14] section 3.2. Resolved-qualified; High. |
| F05c: S12 says dual stack is needed; T:L67 explains parallel coexistence | Needs Qualification | Dual stack implements both IP versions. It is one transition strategy; tunnels and translation are other mechanisms. An IPv6-only host does not natively communicate with an IPv4-only host merely because both address families exist elsewhere. | [R10] Abstract/section 2; [R11] Abstract. Resolved-qualified; High. |

### F06 - Port range and count

Verified 2026-10-28. Confidence: High.

| Subclaim / original source | Classification | Explanation and recommended correction | Evidence / status |
| --- | --- | --- | --- |
| F06a: S17 right graphic ends dynamic range at 65565 | Incorrect | Correct upper value to 65,535. System 0-1023, user 1024-49151, dynamic/private 49152-65535 are registry categories, not proof of actual traffic content. | [R08] Note/ranges. Resolved-corrected; High. |
| F06b: T:L87 equates 2^16 to 65535 | Incorrect | 2^16 is 65,536 possible values; zero-based maximum is 65,535. Port 0 has reserved/special meaning; not all numeric values are ordinary listening services. | Arithmetic; [R08] registry notes and port 0 entry. Resolved-corrected; High. |

### F07 - Defaults, transcript conflicts and HTTP

Verified 2026-10-28. Technical confidence: High; attribution confidence: Low.

| Subclaim / original source | Classification | Explanation and recommended correction | Evidence / status |
| --- | --- | --- | --- |
| F07a: T:L105-L107 renders RDP 89 / DNS 553, versus S21/A/B 3389 / 53 | Incorrect | Use the conventional RDP 3389 and DNS TCP/UDP 53 context. Technical values are settled; the source of the recognition/spoken error is not. | [R08] DNS and 3389 registry queries. Resolved-corrected; High; original spoken attribution Unverified. |
| F07b: T:L93 says HTTP is no longer used | Incorrect | HTTP remains the protocol family; distinguish unprotected http-scheme communication from HTTPS protected channels. Its continued definition in a standard does not quantify real-world adoption. | [R21] Abstract/sections 4.2.1-4.2.2. Resolved-corrected; High. |
| F07c: S18 adds 993/995/587 not in T's short list; a default may be treated as a security guarantee | Needs Qualification | A diagram's extra examples are not contradictory merely because a short spoken list omits them. Port assignments are defaults/registrations; evaluate protocol and configuration rather than trust by number. No extra memorization requirement follows. | [R08] registry warning; S18 direct comparison. Resolved-qualified; High. |

### F08 - Secure transfer and web protection

Verified 2026-10-28. Confidence: High.

| Subclaim / original source | Classification | Explanation and recommended correction | Evidence / status |
| --- | --- | --- | --- |
| F08a: S21/T:L105 group SFTP 22 and FTPS 990 as secure file-transfer examples | Needs Qualification | SFTP runs over SSH transport; FTPS protects FTP with TLS. Port 990 is a registered FTP-TLS control service, not the only secure FTP negotiation. RFC 4217 negotiates on the normal FTP control port using AUTH. | [R19] section 4; [R20] Description; [R08] ftps query. Resolved-qualified; High. |
| F08b: S21's web bullet groups HTTP/HTTPS with secure interaction | Ambiguous | Explain that HTTPS uses a protected/authenticated connection; plain HTTP does not itself provide TLS. A secure connection still does not certify the application's authorization, content or endpoint safety. | [R21] sections 4.2.1-4.2.2; [R33] Introduction. Resolved-qualified; High. |

### F09 - Wireless security shortcuts

Verified 2026-10-28. Confidence: High.

| Subclaim / original source | Classification | Explanation and recommended correction | Evidence / status |
| --- | --- | --- | --- |
| F09a: S16/T:L85 recommend SSID hiding/MAC filtering | Needs Qualification | These are not substitutes for approved authentication/encryption; hiding does not conceal the network from detection, and MAC restrictions do not cryptographically authenticate devices. Prefer strong supported configuration and maintenance. | [R17] Hidden network/MAC address filtering/Security headings. Resolved-qualified; High. |
| F09b: T:L85 portrays WPA3 as almost impossible to break and always preferred | Needs Qualification | WPA3 improves protection but implementation, modes, credentials and compatibility still matter. A compatibility transition mode does not give every client WPA3 protections. No invulnerability claim is accepted. | [R17] Security and automatic updates headings. Resolved-qualified; High. |

### F10 - Historical Wi-Fi table and port knocking

Verified 2026-10-28. Confidence varies.

| Subclaim / original source | Classification | Explanation and recommended correction | Evidence / status |
| --- | --- | --- | --- |
| F10a: T:L81 calls Wi-Fi 6 latest; S16 ends at Wi-Fi 6 | Incorrect | A chart ending at Wi-Fi 6 can be historical and useful; it is not a current complete list. IEEE identifies published 802.11be/Wi-Fi 7, sufficient to refute the latest claim. Do not replace it with an unbounded latest claim or rate table. | [R18] overview, Task Group be. Resolved-corrected; High. |
| F10b: S16 lists nominal/up-to rates; Task 55 warns against treating them as measured throughput | Needs Qualification | No explicit measured-throughput claim was established in the source. Retain the nominal-rate context; do not invent that error. No measured environment or device capabilities are provided, so exclude numeric rate-comparison targets from the foundational baseline. | S16 direct observation; this is a scope decision, not certification of every listed rate. Resolved by bounded exclusion; Medium. |
| F10c: T:L101/S19 recommend implementing port knocking generally | Unverified | No defined protocol, threat model, implementation, failure handling or primary universal recommendation is established. Exclude this recommendation and any claim it is always good or always bad. Use authenticated access and policy-controlled exposure in the curated baseline. | [R14] supports filtering/exposure principles, not a universal port-knocking prescription. Excluded, Unverified; Low. |

### F11 - VLAN identifiers

Verified 2026-10-28. Confidence: High.

| Original source and issue | Classification | Explanation and recommended correction | Evidence / status |
| --- | --- | --- | --- |
| T:L157 permits 50,000/up to 65,535; S34 handwriting gives 1-65535 | Incorrect | IEEE 802.1Q VID is 12 bits. Ordinary IDs are 1-4094; 0 and 4095 have reserved/special meanings. Product/internal reservations further constrain usable IDs. This is not the transport-port namespace. | [R12] VID heading; [R13] VLAN Ranges/Table 26-1. Resolved-corrected; High. |

### F12 - DMZ text and picture

Verified 2026-10-28. Confidence: High.

| Subclaim / original source | Classification | Explanation and recommended correction | Evidence / status |
| --- | --- | --- | --- |
| F12a: S33 text lists external/internal firewalls while the main drawing shows one; A:L257-L275/B:L97-L106 use a two-firewall path | Ambiguous | The representations are different designs, not evidence all DMZs need two devices. State a single multi-interface firewall with separate zones or a design using two firewalls explicitly. | Original picture and T:L147-L149; [R14] section 3.1, Figures 3-1/3-2 and multiple-firewall discussion. Resolved-qualified; High. |
| F12b: T:L149 implies adding another firewall inherently gives more security | Needs Qualification | Distinct policy boundaries may improve containment; effective policy, management and failure dependencies determine the benefit. Device count alone establishes neither independence nor high availability. | [R14] sections 3.1/3.3/5.1. Resolved-qualified; High. |

### F13 - Segmentation purpose and implicit trust

Verified 2026-10-28. Confidence: High.

| Subclaim / original source | Classification | Explanation and recommended correction | Evidence / status |
| --- | --- | --- | --- |
| F13a: T:L135 says purpose is to spread attacks | Incorrect | Surrounding teaching says containment. Curated wording is to limit unnecessary communication and potential lateral spread; original spoken intent remains unknown. | T:L127-L137; [R31] section 6.2.1.3. Resolved-corrected; High. |
| F13b: T:L131-L135/S28/S30 imply spread cannot cross segments | Needs Qualification | Policies may allow some flows, and controls can be misconfigured/compromised. Map and enforce necessary traffic; verify effective restriction. VLAN membership alone does not prove least privilege. | [R31] sections 5 network-segmentation discussion/6.2.1.3; [R14] section 4. Resolved-qualified; High. |
| F13c: S31-S33 call inside trusted | Needs Qualification | This may label a zone in a traditional design; it must not automatically authorize every inside device or user. | [R15] section 2.1. Resolved-qualified; High. |

### F14 - Defense in depth and failure

Verified 2026-10-28. Confidence: High for principle; Medium for dependency analysis.

| Original source and issue | Classification | Explanation and recommended correction | Evidence / status |
| --- | --- | --- | --- |
| S36/T:L171 claim no single point of failure; A:L363/B:L142 soften dependence | Needs Qualification | Layered controls reduce dependence on a defense. Redundant power, links and failover are separate design properties. Shared credentials, policy or administration can create common failure dependencies. Retain layering; reject a guarantee of eliminating every failure point. | [R14] sections 3.1 (HA distinction), 3.3 and 5.1. The shared-dependency consequence is explicit analytical inference. Resolved-qualified. |

### F15 - Granular controls and product labels

Verified 2026-10-28. Confidence: High for implementation alternatives.

| Subclaim / original source | Classification | Explanation and recommended correction | Evidence / status |
| --- | --- | --- | --- |
| F15a: T:L163 says traditional firewalls lacked per-device granularity; S35 lists SDN/NGFW | Needs Qualification | SDN/NGFW are examples, not exclusive prerequisites. NIST explicitly describes endpoint agents and host firewalls for micro-segmentation. Do not claim a universal historical capability boundary. | [R15] section 3.1.2. Resolved-qualified; High. |
| F15b: Per-IP filtering is equated with complete workload identity control | Incomplete | An IP selector can restrict traffic, but the rule's identity assurance, permitted application/resource and enforcement location still matter. Teach granularity separately from identity and Zero Trust. | [R15] sections 2.1/3.1.2. Resolved by supplementation; High. |

### F16 - Shared duties and encryption defaults

Verified 2026-10-28. Confidence: High.

| Subclaim / original source | Classification | Explanation and recommended correction | Evidence / status |
| --- | --- | --- | --- |
| F16a: S45/S49 shared column versus S47/S48 colored ownership blocks | Ambiguous | Both simplify different components. Physical networking, tenant rules, data, keys and identities must be distinguished. Neither equal division nor one universal table follows. | [R22] customer duties; [R23] Responsibility matrix; [R24] Defined by workloads. Resolved-qualified; High. |
| F16b: T:L195 says provider handles hardware in all models | Needs Qualification | In the public-cloud service examples this is appropriate. A private cloud may be owned/operated by the organization, a third party or a combination. A service model does not alone determine legal ownership or every maintenance contract. | [R16] section 2 deployment definitions; [R23] Division of responsibility. Resolved-qualified; High. |
| F16c: T:L199 assumes customer must enable storage encryption | Incorrect | Defaults vary. S3 automatically encrypts new uploads under its documented default, directly refuting the universal enablement requirement; older object treatment differs. Customers still assess access, classification, configuration and key requirements. | [R25] opening/default encryption and existing-object FAQ; [R22]. Resolved-corrected; High. |

### F17 - FaaS runtime and billing

Verified 2026-10-28. Confidence: High.

| Subclaim / original source | Classification | Explanation and recommended correction | Evidence / status |
| --- | --- | --- | --- |
| F17a: S44/T:L191-L193 say customers pay only execution time | Incorrect | Lambda documents request and compute charges plus optional charge dimensions. Azure Functions hosting choice affects billing. This refutes a universal duration-only rule without teaching a transient tariff. | [R27] Pricing/examples; [R28] Billing. Resolved-corrected; High. |
| F17b: S46/S49 assign runtime management wholly to CSP | Needs Qualification | Supported managed runtimes, custom runtimes and container images have different update duties. Lambda container users rebuild/redeploy images; customer code/dependencies remain customer duties. Provider patching does not remove supported-version obligations. | [R26] Shared responsibility model. Resolved-qualified; High. |

### F18 - Cloud taxonomy

Verified 2026-10-28. Confidence: High.

| Subclaim / original source | Classification | Explanation and recommended correction | Evidence / status |
| --- | --- | --- | --- |
| F18a: S53/A:L585/B:L252 define hybrid exclusively as public plus private | Needs Qualification | That is a common example. NIST's hybrid composition may combine distinct private, community or public infrastructures linked for portability/interoperation. Mere unrelated use of two services is insufficient. | [R16] section 2 hybrid definition. Resolved-qualified; High. |
| F18b: S50/S55 list multi-cloud alongside deployment categories | Needs Qualification | Multi-provider usage is useful industry context; it is not a fifth deployment model in NIST SP 800-145. It can coexist with hybrid. | [R16] section 2; local T:L223-L225. Resolved-qualified; High. |
| F18c: S44 teaches FaaS alongside IaaS/PaaS/SaaS | Needs Qualification | Valid additional service terminology, not an error merely because NIST's older three-model taxonomy does not list it separately. Provider docs may group it under PaaS or describe it separately. | [R16] section 2; [R23] PaaS examples; [R24] Defined by workloads/FaaS row. Resolved-qualified; High. |

### F19 - Deployment security, compliance and cost

Verified 2026-10-28. Confidence: High for definitions; Medium for comparative claims.

| Subclaim / original source | Classification | Explanation and recommended correction | Evidence / status |
| --- | --- | --- | --- |
| F19a: S51-S53/T:L211-L217 imply private is intrinsically more secure and regulated workloads cannot use public cloud | Needs Qualification | Exclusive use/control does not establish compliant configuration. Public deployment does not mean publicly readable data. Applicable rules, location, contract, control evidence and workload requirements decide suitability; no universal legal prohibition is established here. | [R16] section 2; [R24] Defined by industry and regulatory framework. Resolved-qualified; High. |
| F19b: T:L215 says higher cost compared to private, while S52 compares public; it also assumes organizational ownership of all hardware | Ambiguous | The transcript/slide comparison differs. Omit a universal cost ranking; private may be externally hosted. Do not infer ownership or TCO from a deployment name. | S52/T:L215 comparison; [R16] private definition. Resolved-qualified; High for definition, Medium for rejecting an unsupported general comparison. |

### F20 - Properties and multi-provider benefits

Verified 2026-10-28. Confidence: High for definitions; Medium for design implications.

| Subclaim / original source | Classification | Explanation and recommended correction | Evidence / status |
| --- | --- | --- | --- |
| F20a: T:L179-L183 suggests anywhere/anytime/unlimited resources | Needs Qualification | Broad network access describes mechanisms/client access, not public authorization or unlimited entitlement. Elasticity can appear unlimited to a consumer; capacity, policy and service limits still apply. | [R16] section 2; [R23] customer configurations/identities. Resolved-qualified; High. |
| F20b: T:L183 equates measured service with exact use-only billing; S42 says often used for billing | Needs Qualification | Metering supports visibility/control. Pricing can include other dimensions or commitments; S42 is appropriately bounded. | [R16] measured-service definition/footnote; [R27]/[R28] counterexamples. Resolved-qualified; High. |
| F20c: Task 55 flags a possible inference that pooling guarantees tenant security; S42 describes shared resources and logical isolation | Needs Qualification | No explicit invulnerability promise was established in S42. Preserve the description, while explaining that resource sharing/logical separation does not prove access configuration or all isolation controls are safe. | [R16] resource-pooling definition; [R22]-[R24] retained duties. Resolved-qualified; High. |
| F20d: S55/T:L223 imply multi-cloud automatically prevents lock-in and improves redundancy/performance | Needs Qualification | Multiple providers may support these goals. Portability, copies, tested recovery, identity/DNS/network dependencies and operational capability determine whether they are achieved. No complete failover design is supplied. | Local S55/T plus [R16] distinction between deployment and portability. Dependency consequence is analytical design reasoning, not a provider performance guarantee. Resolved-qualified; Medium. |

## Required teaching gaps beyond the 20 findings

These are **Incomplete** teaching areas identified in Task 55, not additional original F findings. Supplements close foundational needs; their broader implementation limits remain explicit.

| Gap | Original evidence | Completion / objective mapping |
| --- | --- | --- |
| G01 Bluetooth security | A:L32 PAN example and S26 decorative icon only | SUP-D4-01 / KNOW-D4-009 / 4.1 |
| G02 AI networking/cloud applications | Only provider examples at T:L225, A:L607, B:L268 | SUP-D4-08 / KNOW-D4-022-024 / existing 4.1-4.3 context |
| G03 Firewall/application/detection interpretation | S14,S17-S21 list inputs/services, little worked reasoning | SUP-D4-03 / KNOW-D4-006-007,022 / 4.1 |
| G04 IPv6/wireless security limits | S12/S16 and F03/F09/F10 omissions | SUP-D4-02,04 / KNOW-D4-004,008 / 4.1 |
| G05 Effective architecture and OT changes | S24-S39; no validated flow or maintenance decision example | SUP-D4-05,06 / KNOW-D4-010-016 / 4.1-4.2 |
| G06 Cloud duties/configuration/taxonomy limits | S45-S55 generic charts | SUP-D4-07 / KNOW-D4-018-021,024 / 4.3 |

## Residual exclusions and implications

F02b/F02d and F10c remain unverified and excluded. Exact Wi-Fi rate adjudication in F10b is also outside the accepted assessment baseline. No question may depend on the intended PRC/RPC term, universal network-model history, port-knocking prescription or exact advertised-rate ordering. Original audio, course completeness and speaker attribution remain unknown. These exclusions are **nonblocking for the verified foundational scope** because those facts are not required by the numbered objectives. Legal deployment conclusions, actual tariffs and current product defaults require workload-specific verification if later introduced.

## Primary evidence catalog

All sources accessed **2026-10-28**. Section labels below were observed in the fetched material; web headings are used where no stable numbered section exists. References prove their bounded claims, not all possible implementations. Standards with updates are used for the specific cited concept, not as complete current implementation checklists. No failed fetch is treated as evidence; the initially unavailable OT PDF was successfully retrieved on retry. IEEE overview evidence was retrieved through search; a later homepage fetch failed, so only the observed publication fact is used.

| ID | Supporting source title / URL | Relevant section or heading and use |
| --- | --- | --- |
| <a id="r01"></a>R01 | [ISC2 CC English Exam Outline, v01/2026][R01] | Printed p.6 objectives 4.1-4.3; p.3 weight; effective 2026-09-01. Scope authority. |
| <a id="r02"></a>R02 | [ISC2 CC outline webpage][R02] | Domain 4 numbered section; separate How is AI Security Incorporated / Domain 4 commentary. Context, not new objective IDs. |
| <a id="r03"></a>R03 | [RFC 1122, Requirements for Internet Hosts - Communication Layers][R03] | Section 1.1.3 Internet Protocol Suite; 1.3.3 terminology. Layering and encapsulation framework; TCP requirements now use R04. |
| <a id="r04"></a>R04 | [RFC 9293, Transmission Control Protocol][R04] | Section 2.2 Key TCP Concepts; TCP reliable ordered service and retransmission. |
| <a id="r05"></a>R05 | [RFC 768, User Datagram Protocol][R05] | Introduction; minimal mechanism and absent delivery/duplicate guarantee. |
| <a id="r06"></a>R06 | [RFC 8504, IPv6 Node Requirements][R06] | Sections 13/13.1; IPsec recommendation and alternatives, not automatic encrypted traffic. |
| <a id="r07"></a>R07 | [RFC 4291, IP Version 6 Addressing Architecture][R07] | Section 2.2 text representation; eight pieces and compression. |
| <a id="r08"></a>R08 | [IANA Service Name and Transport Protocol Port Number Registry][R08] | Note/ranges/port 0; [DNS query](https://www.iana.org/assignments/service-names-port-numbers?search=domain), [3389 query](https://www.iana.org/assignments/service-names-port-numbers?search=3389), [FTPS query](https://www.iana.org/assignments/service-names-port-numbers?search=ftps). Registered service is not actual-traffic proof. |
| <a id="r09"></a>R09 | [RFC 4632, Classless Inter-domain Routing][R09] | Abstract and History and Problem Description. Address conservation/classless allocation context. |
| <a id="r10"></a>R10 | [RFC 4213, Basic Transition Mechanisms for IPv6 Hosts and Routers][R10] | Abstract and section 2 dual-IP operation; dual stack and tunneling examples. Not a recommendation for every historical transition technique. |
| <a id="r11"></a>R11 | [RFC 6146, Stateful NAT64][R11] | Abstract; IPv6-client/IPv4-server translation, refutes no-translation interpretation. |
| <a id="r12"></a>R12 | [Cisco, Inter-Switch Link and IEEE 802.1Q Frame Format][R12] | VID - VLAN Identifier; 12-bit field. Authoritative implementation documentation where IEEE full text was not consulted. |
| <a id="r13"></a>R13 | [Cisco Catalyst VLANs configuration guide][R13] | VLAN Ranges/Table 26-1; reserved 0/4095 and platform limits. |
| <a id="r14"></a>R14 | [NIST SP 800-41 Rev.1, Guidelines on Firewalls and Firewall Policy][R14] | 2.1.1-2.1.3 packet/state/application filtering; 2.1.6 VPN; 2.1.9 WAF; 3.1/3.3 architectures; 4 policy; 5.1 planning; 5.3 testing. |
| <a id="r15"></a>R15 | [NIST SP 800-207, Zero Trust Architecture][R15] | 2.1 tenets; 3.1.2 micro-segmentation including endpoint agents/firewalls. |
| <a id="r16"></a>R16 | [NIST SP 800-145, The NIST Definition of Cloud Computing][R16] | Section 2, printed pp.2-3; characteristics, three service models, four deployment models. |
| <a id="r17"></a>R17 | [Apple, Recommended settings for Wi-Fi routers and access points][R17] | Security; Hidden network; MAC address filtering; Automatic firmware updates. Product-oriented example, not universal enterprise policy. |
| <a id="r18"></a>R18 | [IEEE 802.11 Working Group overview][R18] | Task Group be: publication of 802.11be-2024/Wi-Fi 7, 22 July 2025. No exact rate-table certification. |
| <a id="r19"></a>R19 | [RFC 4217, Securing FTP with TLS][R19] | Section 4 Session Negotiation on the Control Port; protocol distinction, not permission to use obsolete TLS versions named by this older RFC. |
| <a id="r20"></a>R20 | [OpenBSD/OpenSSH sftp manual][R20] | Description: file transfer over encrypted SSH transport; behavior/options are implementation specific. |
| <a id="r21"></a>R21 | [RFC 9110, HTTP Semantics][R21] | Abstract; 4.2.1 http and 4.2.2 https schemes, including defaults and secured connections beyond TCP. |
| <a id="r22"></a>R22 | [AWS Shared Responsibility Model][R22] | AWS/Customer responsibility; Applying the model in practice. EC2 guest OS and security-group configuration. |
| <a id="r23"></a>R23 | [Microsoft, Shared responsibility in the cloud][R23] | Division of responsibility/Responsibility matrix. Guidance is illustrative and service dependent. |
| <a id="r24"></a>R24 | [Google Cloud, Shared responsibilities and shared fate][R24] | Defined by workloads; industry/regulatory framework; inherited controls. Product taxonomy illustrates variation, not an extra ISC2 category. |
| <a id="r25"></a>R25 | [AWS S3 Default encryption FAQ][R25] | Default new-upload encryption and existing-object question; scope includes the new/old object distinction. |
| <a id="r26"></a>R26 | [AWS Lambda runtimes][R26] | Shared responsibility model and container/runtime lifecycle; code and dependency duties. |
| <a id="r27"></a>R27 | [AWS Lambda Pricing][R27] | Pricing examples and request/compute dimensions; only refutes duration-only billing, no rate quotation or cost recommendation. |
| <a id="r28"></a>R28 | [Azure Functions hosting options][R28] | Overview of plans and Billing; hosting choice affects cost. |
| <a id="r29"></a>R29 | [NIST SP 800-121 Rev.2 Update 1, Guide to Bluetooth Security][R29] | Scope through Bluetooth 4.2; 3.2.2.4 Just Works; 4.4 security checklist. No projection of every old-version detail onto later versions. |
| <a id="r30"></a>R30 | [Bluetooth SIG, Bluetooth security][R30] | Security in specifications; security education. Features/options must be selected for the product/application. |
| <a id="r31"></a>R31 | [NIST SP 800-82 Rev.3, Guide to OT Security][R31] | 5.2.5.2 Patching; 6.2.1.3 Network Segmentation and Isolation. Use final Rev.3, not the later draft. |
| <a id="r32"></a>R32 | [NIST SP 800-94, Guide to IDPS][R32] | 2.2 uses/limits; 2.3.1 signature and 2.3.2 anomaly detection. Foundational principles, not proof all anomaly detection uses ML. |
| <a id="r33"></a>R33 | [RFC 8446, TLS 1.3][R33] | Introduction and secure-channel goals; no claim of a single mandatory OSI placement or complete application safety. |
| <a id="r34"></a>R34 | [NISTIR 8259A, IoT Device Cybersecurity Capability Core Baseline][R34] | Section 2/Table 1: device identification/configuration, data protection, logical interface access, software update and state awareness. Baseline capabilities are tailored, not a guarantee every device implements them. |
| <a id="r35"></a>R35 | [Microsoft, Troubleshoot port exhaustion issues][R35] | Default dynamic port range for TCP/IP; implementation/default ranges have changed across Windows versions. No universal OS range assumption. |
| <a id="r36"></a>R36 | [ITU-T X.200 (1994), equivalent OSI basic reference model][R36] | Clause 6.1.2 seven layers; 7.7.2 physical function and bit transmission. Supports layer functions, not the unverified historical claims in F02d. |

[R01]: https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf
[R02]: https://www.isc2.org/certifications/cc/cc-certification-exam-outline
[R03]: https://www.rfc-editor.org/rfc/rfc1122.html
[R04]: https://www.rfc-editor.org/rfc/rfc9293.html
[R05]: https://www.rfc-editor.org/rfc/rfc768.html
[R06]: https://www.rfc-editor.org/rfc/rfc8504.html#section-13
[R07]: https://www.rfc-editor.org/rfc/rfc4291.html#section-2.2
[R08]: https://www.iana.org/assignments/service-names-port-numbers
[R09]: https://www.rfc-editor.org/rfc/rfc4632.html
[R10]: https://www.rfc-editor.org/rfc/rfc4213.html
[R11]: https://www.rfc-editor.org/rfc/rfc6146.html
[R12]: https://www.cisco.com/c/en/us/support/docs/lan-switching/8021q/17056-741-4.html
[R13]: https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst6500/ios/15-4SY/config_guide/sup2T/15_2_sy_swcg_2T/vlans.html
[R14]: https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-41r1.pdf
[R15]: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-207.pdf
[R16]: https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf
[R17]: https://support.apple.com/en-us/102766
[R18]: https://ieee802.org/11/overview.html
[R19]: https://www.rfc-editor.org/rfc/rfc4217.html
[R20]: https://man.openbsd.org/sftp.1
[R21]: https://www.rfc-editor.org/rfc/rfc9110.html
[R22]: https://aws.amazon.com/compliance/shared-responsibility-model/
[R23]: https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility
[R24]: https://docs.cloud.google.com/architecture/framework/security/shared-responsibility-shared-fate
[R25]: https://docs.aws.amazon.com/AmazonS3/latest/userguide/default-encryption-faq.html
[R26]: https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html
[R27]: https://aws.amazon.com/lambda/pricing/
[R28]: https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale
[R29]: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-121r2-upd1.pdf
[R30]: https://www.bluetooth.com/learn-about-bluetooth/key-attributes/bluetooth-security/
[R31]: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-82r3.pdf
[R32]: https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-94.pdf
[R33]: https://www.rfc-editor.org/rfc/rfc8446.html
[R34]: https://nvlpubs.nist.gov/nistpubs/ir/2020/NIST.IR.8259A.pdf
[R35]: https://learn.microsoft.com/en-us/troubleshoot/windows-client/networking/tcp-ip-port-exhaustion-troubleshooting
[R36]: https://www.itu.int/rec/dologin_pub.asp?id=T-REC-X.200-199407-I!!PDF-E&lang=e&type=items
