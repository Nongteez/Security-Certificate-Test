# Independent source review: Domains 3 and 4 Reading Notes

Review date: 2026-10-31. Scope: source content and educational/Thai-English semantics only. No browser rendering was reviewed by this reviewer. No production file, test, existing artifact, or git state was changed. Historical audit reports were not used as evidence.

## Coverage and method

Reviewed all **41/41 subsections: Domain 3 = 17/17 (16 objective topics + review); Domain 4 = 24/24 (23 objective topics + review)**. This includes every line of `content/isc2-cc-2026/reading/domain-3.md` (596 lines) and `domain-4.md` (853 lines), both metadata modules, all 12 + 12 scenario entries and their Markdown counterparts, and all eight diagram templates referenced by these two domains in `js/core/diagram-generator.js` (1877–2794). Source observations below are independent of historical acceptance/completion reports.

Severity: P0 critical/blocking; P1 major misconception with substantial harm; P2 factual or internally inconsistent teaching that should be corrected; P3 terminology, qualification, pedagogy, or scope recommendation. “No defect found” means no substantive defect was identified in this bounded source review; it is not a proof of completeness or a browser pass.

## Verified findings

### D34-01 — P2 — CSF 1.1 identifier is taught alongside CSF 2.0

- Location: `content/isc2-cc-2026/reading/domain-3.md:129`.
- Exact excerpt: `Govern ใน CSF 2.0) โดยมีหัวข้อการควบคุมการเข้าถึง (PR.AC)`.
- Finding: PR.AC is the older CSF identifier; CSF 2.0 uses PR.AA (Identity Management, Authentication, and Access Control). The same sentence explicitly invokes CSF 2.0, so the version mixture is a concrete factual defect.
- Correction: label PR.AC as CSF 1.1, or use PR.AA when teaching CSF 2.0.
- Confidence: high. Verified primary reference: [NIST CSF FAQs](https://www.nist.gov/cyberframework/faqs), which explicitly records PR.AC moving to PR.AA.

### D34-02 — P2 — ABAC core taxonomy omits the requested action and disagrees with its own matrix/scenario

- Locations: `content/isc2-cc-2026/reading/domain-3.md:257–262`, `:283`, `:380`, `:563`; `js/core/diagram-generator.js:2206`, `:2255`; `content/isc2-cc-2026/reading/domain-3-scenarios.js:90`.
- Exact excerpts: `หมวดหมู่คุณลักษณะหลัก 4 ด้าน:` followed by Subject, Object, Environmental, Device; versus `Multiple Attributes (Subject, Object, Action, Environment)` in the comparison matrix. Desktop diagram says `Subject, Object &amp; Environment`, while mobile includes `การกระทำ`.
- Finding: device posture is a valid policy input, but replacing the action/operation with Device as the supposedly canonical four categories hides that read, write, delete, or execute can produce different authorization results. The inconsistency is especially confusing for a bilingual novice memorizing the list.
- Correction: consistently teach subject, object/resource, requested operation/action, and environment; introduce device posture as another relevant subject/environment/context attribute rather than a replacement for action. Add a read-versus-delete example. RBAC’s user→role→permission relation is otherwise accurately described, and the ABAC scenario is a valid contextual policy.
- Confidence: high. Verified primary reference: [NIST SP 800-162](https://csrc.nist.gov/pubs/sp/800/162/upd2/final) and [NIST ABAC project](https://csrc.nist.gov/projects/attribute-based-access-control).

### D34-03 — P2 — ARP is placed in the TCP/IP Internet layer

- Location: `content/isc2-cc-2026/reading/domain-4.md:90`.
- Exact excerpt: `Internet Layer (L2) ... IPv4, IPv6, ICMP, IPsec, ARP`.
- Finding: in the four-layer Internet architecture used here, RFC 1122 treats ARP in its Link Layer section (2.3.2). The diagram does not repeat ARP, so text and diagram also differ.
- Correction: move ARP to the Link/Network Access row; optionally explain its local IPv4-to-link-address resolution role.
- Confidence: high. Verified primary reference: [RFC 1122, section 2.3.2](https://www.rfc-editor.org/rfc/rfc1122.html#section-2.3.2).

### D34-04 — P2 — SLAAC is presented as necessarily combining a prefix and MAC address

- Location: `content/isc2-cc-2026/reading/domain-4.md:138`.
- Exact excerpt: `นำ Prefix ที่ได้มารวมกับ MAC Address ของตนเอง`.
- Finding: SLAAC uses a prefix and interface identifier; that identifier need not be MAC-derived. RFC 8064 recommends stable identifiers that do not embed a stable link-layer address by default. The current wording teaches the older EUI-64 method as the general mechanism.
- Correction: use “advertised prefix + interface identifier,” explain MAC-derived EUI-64 as one historical method, and mention stable/private identifiers. Router advertisements can also arrive unsolicited; a solicitation is not a universal prerequisite.
- Confidence: high. Verified primary reference: [RFC 8064](https://www.rfc-editor.org/rfc/rfc8064.html).

### D34-05 — P2 — Cloud customer accountability is confused with exclusive operational responsibility

- Locations: `content/isc2-cc-2026/reading/domain-4.md:458–462`, `:697`, `:724`, `:809–810`; `content/isc2-cc-2026/reading/domain-4-scenarios.js:81–82`; diagram `js/core/diagram-generator.js:2647–2650`, `:2673–2676`, `:2699–2702`, `:2725–2728`.
- Exact excerpts: `ลูกค้า (Customer) ต้องเป็นผู้รับผิดชอบเสมอ 100%`; `ผู้ให้บริการคลาวด์ไม่สามารถรับผิดชอบแทนได้`.
- Finding: the customer retains responsibility for data classification, access decisions, and configurations under its control. That does not mean the CSP bears zero responsibility for protecting hosted data or operating a managed identity service. IAM itself is a cloud service with provider security duties; the shared-responsibility boundary depends on the service. The public-folder scenario correctly points to the customer’s misconfiguration, but its rationale overgeneralizes from that case to all data/IAM controls.
- Correction: distinguish retained customer governance/accountability and tenant configuration from provider operation/security of managed IAM and storage. Label matrix cells as customer-controlled classification/access decisions instead of all of Data/IAM. Retain the customer answer for the public-sharing scenario, with a bounded explanation.
- Confidence: high. Verified primary references: [Azure shared responsibility](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility), [AWS security in IAM and STS](https://docs.aws.amazon.com/IAM/latest/UserGuide/security.html), [AWS IAM data protection](https://docs.aws.amazon.com/IAM/latest/UserGuide/data-protection.html). This is a technical teaching observation, not a legal allocation opinion.

### D34-06 — P2 — AWS network-control behavior is presented as a universal cloud model

- Locations: `content/isc2-cc-2026/reading/domain-4.md:502–508`, `:680–689`, `:729`.
- Exact excerpts: `VPC / VNet`; `Security Group ... Instance / Virtual Machine (Host Level) ... กำหนดได้เฉพาะกฎ Allow`; `Network ACL ... Subnet ... Stateless`.
- Finding: the SG/NACL comparison is a useful AWS VPC example, but the surrounding unqualified VPC/VNet phrasing makes it appear provider-neutral. Azure NSGs are stateful, have allow and deny rules, and can apply to subnets as well as NICs. The source must state its provider context.
- Correction: explicitly title this part “AWS VPC example”; add a short Azure NSG distinction if retaining VNet terminology. In `:507` and `:729`, specify that statefulness allows **response traffic for an allowed flow**, not all unrelated outbound connections.
- Confidence: high. Verified primary references: [Amazon VPC FAQs](https://aws.amazon.com/vpc/faqs/), [Azure NSGs](https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview).

### D34-07 — P2 — Private-subnet outbound access is said to require a NAT Gateway exclusively

- Location: `content/isc2-cc-2026/reading/domain-4.md:505`.
- Exact excerpt: `หากต้องการออกไปดาวน์โหลดแพตช์ภายนอก ต้องผ่าน NAT Gateway เท่านั้น`.
- Finding: “only” is false even within AWS: a NAT instance can provide IPv4 egress, and IPv6 egress can use an egress-only Internet Gateway. Proxies/central egress are other architectural possibilities. The NAT Gateway is a common option, not an exclusive requirement.
- Correction: give NAT Gateway as one IPv4 egress pattern and qualify by addressing family/provider. Keep the useful distinction that a private subnet lacks a direct Internet Gateway route.
- Confidence: high. Verified primary reference: [Amazon VPC FAQs](https://aws.amazon.com/vpc/faqs/).

### D34-08 — P3 — Official 2026 domain titles are stale in the metadata and lead

- Locations: `content/isc2-cc-2026/reading/domain-3.js:13–14`, `domain-3.md:1`; `content/isc2-cc-2026/reading/domain-4.js:13–14`, `domain-4.md:1` (also scenario module headers).
- Exact excerpts: `Domain 3: Access Controls`; `Domain 4: Network Security`.
- Finding: the 2026 outline’s detailed domains are Identity and Access Management (IAM) Concepts and Networking and Cloud Security Concepts. Objective IDs, objective titles, and displayed weights 20%/21.3% align; the module comment claiming “Authoritative” official metadata makes old titles more misleading.
- Correction: adopt current official names, retaining shorter labels only as explicitly abbreviated navigation text.
- Confidence: high. Verified primary reference: [ISC2 CC exam outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline), current detailed domain section. The displayed top-level page can contain legacy introductory labels; use its detailed 2026 domains and linked 2026 outline.

## Per-subsection review record (41/41)

Rows refer to Markdown line spans. F = numbered finding; Q = qualification/recommendation resolved in the final verification addendum below. Thai text and English terminology were read together for meaning, not merely string matching.

| # | Subsection / lines | Independent educational and semantic observation |
|---|---|---|
| D3-01 | 3.1.1 IAM / JML, 9–39 | JML, mover creep, and prompt leaver revocation are accurate. “Always first = define roles” is a teaching shortcut, not a universal operational sequence; see Q1. Diagram correctly includes both granting new and revoking obsolete permissions. |
| D3-02 | 3.1.2 Roles, 40–57 | Clear distinctions among role, permission, and access; finance self-approval restriction makes SoD concrete. Sample analyst read-only access is an example, not a universal role requirement. No substantive defect found. |
| D3-03 | 3.1.3 Provisioning, 58–72 | Six activities are plausible, but the claim `ตามลำดับมาตรฐาน` (“standard order”) lacks a named normative source and omits approval/identity verification context; Q1. |
| D3-04 | 3.1.4 Access review, 73–93 | Good differentiation of dormant, excessive, inappropriate, orphaned, and accumulated access. 90 days is explicitly an example. Review detects privilege creep; direct removal/event-based mover controls are the remediation, so avoid implying periodic review alone fixes access. |
| D3-05 | 3.1.5 Deprovisioning, 94–119 | Triggers and revoke/disable/retain rationale sound. “Disable = Lock” can confuse administrative disabling with temporary failed-login lockout; Q2. Retention/deletion is policy/system-dependent, not a universal audit-log dependency. |
| D3-06 | 3.1.6 Frameworks, 120–132 | IAL/AAL/FAL distinction is useful and diagram expressly avoids a rigid pipeline. F01: CSF identifier error. Modern SP 800-63-4 version and biometric qualification would help; Q3. |
| D3-07 | 3.1.7 Tools, 133–156 | AuthN/AuthZ Thai meanings match English intent. LDAP is a protocol rather than a directory-service product; Q4. IdP/directory/access-platform functions can overlap. OAuth/OIDC is absent, not misstated. |
| D3-08 | 3.1.8 Least privilege, 157–173 | Accurate minimum-necessary scope includes users, service accounts, programs. Correctly warns against privileged accounts for routine work; no substantive defect found. |
| D3-09 | 3.2.1 Logical/physical, 182–188 | Digital-resource versus facility focus is clear; examples broadly appropriate. Physical badge technology can contain logical components, but the target distinction is correct. |
| D3-10 | 3.2.2 SoD, 189–205 | Clear maker/approver/reconciler example. Three persons is an illustration, not a mandated universal three-step model. Collusion remains a residual risk; optional nuance. |
| D3-11 | 3.2.3 PoLP vs SoD, 206–218 | Sound comparison of individual permissions and conflicting workflow duties. Diagram’s vertical/horizontal axes are a mnemonic, not formal standardized axes. |
| D3-12 | 3.2.4 DAC, 219–228 | Resource-owner discretion and ACL example correct. Absolute owner power should be bounded by organizational/platform policy. Trojan risk described as a DAC limitation is reasonable in context. |
| D3-13 | 3.2.5 MAC, 229–241 | Good explicit Need-to-Know safeguard at 237. “Highest security” and “absolutely prevents leakage” are unjustified guarantees; Q5. Military-clearance explanation is an example, not all MAC systems. |
| D3-14 | 3.2.6 RBAC, 242–251 | Correct user–role–permission assignments and role-explosion limitation. Predefined role is the decision basis rather than a literal decision-making actor; P3 wording nuance. |
| D3-15 | 3.2.7 ABAC, 252–270 | Valid contextual example and useful processing/policy complexity caveat. F02: action missing from purported four categories. Avoid implying RBAC and ABAC cannot coexist. |
| D3-16 | 3.2.8 Comparison, 272–284 | Core DAC/MAC/RBAC/ABAC distinctions useful. F02 repeats cross-section inconsistency; diagram desktop omits action while mobile includes it. Roles versus policy engine are unlike kinds of “decision maker.” |
| D3-17 | Domain review, 293–596 | All ten distinction cards, 14 traps, matrix, 12 scenarios read. Outcomes are mostly correctly keyed; provision/review/deprovision and RBAC/ABAC cases are coherent. MAC scenario’s clearance explanation should repeat Need-to-Know rather than leave it only in main prose; Q5. Repeats role-first and disable/delete absolutes (Q1/Q2). |
| D4-01 | 4.1.1 Fundamentals, 9–28 | Scopes and intranet/extranet broadly suitable. Broadcast `x.x.x.255` is overgeneralized without a subnet mask; Q6. Collision discussion should identify legacy half-duplex Ethernet. VPN is an overlay/access arrangement, not a geographic scale. |
| D4-02 | 4.1.2 OSI, 29–77 | Layers/PDU/encapsulation sequence useful. Sockets is an API abstraction rather than a Session-layer protocol; TLS-to-OSI mapping should be illustrative. Q7. UDP datagram naming is correctly distinguished earlier. |
| D4-03 | 4.1.3 TCP/IP, 78–92 | Four-layer mapping and diagram are internally sensible apart from F03 (ARP in Internet row). Layer numbers here are local TCP/IP numbering, not OSI numbers; labels make that explicit. |
| D4-04 | 4.1.4 IPv4, 93–128 | Correct bit width, RFC1918 blocks, /24 arithmetic, PAT, NAT-not-encryption caveat. Classful ranges should be marked historical; APIPA is link-local rather than RFC1918 private; Q6/Q8. NAT need not use only one/two public addresses. |
| D4-05 | 4.1.5 IPv6, 130–144 | Correct 128-bit size and no-broadcast statement. F04: SLAAC identifier error. IPsec support must not imply automatic encryption; transition examples include 6to4 without qualifying the deprecated anycast mode; Q9. |
| D4-06 | 4.1.6 TCP/UDP, 145–170 | Correct basic handshake/retransmission and UDP best effort; speed comparisons are workload-dependent. Reliable transport is not an unconditional promise of delivery or cryptographic integrity. Modern HTTP/3/QUIC is a useful counterexample to “web=TCP”; Q10. |
| D4-07 | 4.1.7 Ports, 172–203 | Numeric ranges and principal service ports generally accurate. 443 TCP omits HTTP/3 UDP; TCP DNS is not only zone transfer; FTPS 990 is implicit TLS (explicit commonly 21); SSL wording needs deprecation context; Q10. |
| D4-08 | 4.1.8 Devices, 204–235 | Strong device/function scaffold. IDS/IPS contrast is a useful passive/inline simplification but not all IDPS deployment modes. Stateful replies still depend on policy/state validity. “MAC flooding makes switch a hub” is implementation-dependent. |
| D4-09 | 4.1.9 Wireless/VPN, 237–282 | WEP/TKIP risks, WPA2/3 and SAE, Bluetooth attack distinctions, AH vs ESP are useful. Hidden SSID’s name is not thereby inserted into beacon SSID fields when connected; Q11. Frequency/channel claims require channel width/regulatory qualification. |
| D4-10 | 4.1.10 Threats/IoT/OT, 284–301 | Practical segmentation plus filtering advice sound; Thai threat meanings clear. DDoS need not require botnet/millions; IT does not universally prioritize confidentiality. OT availability/safety emphasis reasonable. These are qualifications, not wrong scenario answer keys. |
| D4-11 | 4.2.1 Segmentation, 310–322 | Correctly includes enforcement controls rather than VLAN naming alone. “Will be contained” and “cannot move” are idealized outcomes; state risk reduction, conditional on allowed flows/control strength. PCI scope is not reduced automatically merely by naming a segment. |
| D4-12 | 4.2.2 Zones, 324–335 | Coherent conventional zone model. Inside trusted label must remain a conventional topology label, not an assurance that all inside hosts deserve trust; following ZT section corrects this. High→low is explicitly according to policy. |
| D4-13 | 4.2.3 DMZ, 337–349 | Sound buffer-zone and one/dual-firewall distinction. DMZ compromise is not guaranteed containment; diagram illustrates internal controls. Different vendors is a tradeoff, not universally best. Diagram labels FW1 ports 80/443 but also hosts SMTP/DNS; Q12. |
| D4-14 | 4.2.4 VLANs, 351–358 | Accurate layer, broadcast separation, trunk tags, 12-bit IDs and inter-VLAN routing. Opening definition should allow multiple physical switches, since VLANs are not confined to one switch. No major defect found. |
| D4-15 | 4.2.5 Microsegmentation, 360–371 | Correct workload-level/East-West concept and sensible three-tier example. SDN/host firewall are mechanisms, not simultaneous prerequisites. Same-tier deny is an example policy, not inherent in every microsegmentation design. |
| D4-16 | 4.2.6 Defense in depth, 373–384 | Definition accurately explains compensating layers. Five-tier diagram is an illustrative taxonomy, not an ISC2 mandated count; cross-cutting MFA/PoLP can sit in several tiers. Exact five-layer graphic semantics match prose/mobile; no source claim that data encryption alone suffices. |
| D4-17 | 4.2.7 Zero Trust, 386–397 | Core no-implicit-trust, contextual verification and least privilege align with NIST. “Verify every time” should mean access decisions/ongoing evaluation, not mandatory user MFA prompts on every request. Perimeter controls can coexist with ZT; optional qualification. |
| D4-18 | 4.3.1 Characteristics, 407–420 | All five NIST characteristics present and translated meaningfully. Measured service need not force a particular billing tariff, and resource pooling permits selecting a broad geographic location. Nuance only. |
| D4-19 | 4.3.2 Service models, 422–443 | Useful IaaS/PaaS/SaaS separation. NIST defines three service models; label FaaS explicitly as a modern PaaS subset rather than suggesting a fourth NIST type. Beanstalk patching and scale-to-zero statements require service/plan qualifiers; Q13. |
| D4-20 | 4.3.3 Shared responsibility, 445–463 | OF/IN distinction useful but F05’s 100% exclusivity undermines the shared model; diagram reinforces broad data/IAM cells without qualifiers. |
| D4-21 | 4.3.4 Deployments, 465–480 | Four named NIST deployment models covered. Private cloud does not automatically offer “highest security”; on-premises is not inherently a private cloud; Q14. Public clouds need not be owned only by commercial CSPs under NIST. |
| D4-22 | 4.3.5 Hybrid/multicloud, 482–496 | Good distinction between integrated environments and multiple providers. These sets can overlap; multicloud does not itself guarantee resilience or avoid lock-in. On-premises+public is common vendor usage, but wider than strict NIST hybrid-cloud wording; Q14. |
| D4-23 | 4.3.6 Cloud network controls, 498–508 | F06/F07: unlabeled AWS semantics generalized to VNet and exclusive NAT Gateway route. Return-traffic statefulness wording needs precision. |
| D4-24 | Domain review, 518–853 | All 12 distinction cards, 16 traps, matrix, 12 scenarios read. Segmentation, DMZ, microsegmentation, layered defense, ZT, IaaS guest patching, PaaS source-code duty, community cloud and multicloud answer keys fit the stated cases. F05 repeats in scenario 8; F06 in SG/NACL cards; other qualifications repeat from main topics. |

## Focused checks requested by the parent

- **OAuth 2.0 vs OIDC:** neither OAuth nor OpenID Connect appears in the assigned Domain 3/4 Markdown, metadata, scenario sources, or eight referenced templates. No OAuth-as-authentication defect was found in this scope. Their absence is not automatically an outline-coverage failure: the outline says frameworks/tools, not mandatory enumeration of those protocols. If adding detail later: OAuth 2.0 delegated authorization; OIDC authentication/identity on OAuth 2.0. This boundary was not used to infer a defect from absent material.
- **MFA:** no assigned text teaches password+PIN as two factors. MFA mentions are appropriate examples, but Domain 3 does not itself teach distinct factor categories. A short recap/cross-link is a recommendation, not an incorrect definition. Generic AAA diagram elsewhere in the shared generator is not one of the eight diagrams referenced by these domains and is outside this review’s claimed coverage.
- **RBAC vs ABAC:** valid examples; action-taxonomy inconsistency is F02. Device context is valid and is not itself a defect. Role can be an ABAC attribute; RBAC and ABAC may be combined.
- **Thai semantics:** the repeated words `เสมอ` (always), `เท่านั้น` (only), `100%`, `สูงสุด` (highest), and `เด็ดขาด` (absolute) create the main overstatements. No major Thai-English inversion was found in the core PoLP, SoD, provisioning, or threat definitions. See specific findings rather than treating mixed English terms as translation errors.
- **Diagrams:** all eight referenced templates reviewed in both desktop SVG text and mobile text. No browser geometry/accessibility conclusion is made. Defense-in-depth taxonomy is acceptable as an example; DMZ’s port list and the cloud matrix’s broad labels need qualification (Q12/F05).

## Final verification addendum

### D34-09 — P2 — IPv4 broadcast example is mask-dependent

- Location: `content/isc2-cc-2026/reading/domain-4.md:22`.
- Exact excerpt: `Broadcast (FF:FF:FF:FF:FF:FF หรือ x.x.x.255)`.
- Finding: the Ethernet all-ones destination is a valid link broadcast example, but a final IPv4 octet of 255 is not a general broadcast test. Directed-broadcast addressing depends on all host bits, which depend on the subnet mask. For example, 192.168.1.127 is the broadcast for 192.168.1.0/25, while 192.168.1.255 can be a host in 192.168.0.0/16.
- Correction: give an explicit /24 example and explain all-host-bits-one; keep Ethernet and IPv4 addressing distinct.
- Confidence: high. Verified primary reference: [RFC 919, IP broadcast addressing](https://www.rfc-editor.org/rfc/rfc919.html#section-7), with the mask-dependent examples above being reviewer calculations.

### D34-10 — P2 — APIPA conflates RFC1918 private addressing and IPv4 link-local selection

- Locations: `content/isc2-cc-2026/reading/domain-4.md:109–114`.
- Exact excerpts: heading `ช่วงหมายเลขไอพีส่วนตัวตามมาตรฐาน RFC 1918`; subordinate bullet `APIPA ... 169.254.0.0 – 169.254.255.255`.
- Finding: 169.254/16 is IPv4 link-local, not a fourth RFC1918 range. Hosts using the RFC3927 dynamic mechanism select 169.254.1.0–169.254.254.255; the first/last /24 are excluded. The /16 is correctly the reserved prefix but is not the full selectable host range. Unlike RFC1918 space, link-local packets must not be routed off-link.
- Correction: separate a “Link-local/APIPA” heading and distinguish reserved prefix from selectable addresses. Preserve the common Windows DHCP-failure example as an example.
- Confidence: high. Verified primary reference: [RFC 3927, sections 2.1 and 2.7](https://www.rfc-editor.org/rfc/rfc3927.html#section-2.1).

### D34-11 — P2 — MAC is presented as an absolute security guarantee

- Locations: `content/isc2-cc-2026/reading/domain-3.md:231`, `:238`, `:470`, `:543`; `js/core/diagram-generator.js:2180`, `:2233`; `content/isc2-cc-2026/reading/domain-3-scenarios.js:74`.
- Exact excerpt: `ความมั่นคงปลอดภัยระดับสูงสุด ป้องกันข้อมูลรั่วไหลได้อย่างเด็ดขาด`; diagram `Highest Security`.
- Finding: MAC centralizes and enforces mandatory policy; the model does not rank every implementation above every RBAC/ABAC deployment or guarantee no leakage. The claim overstates a model’s benefit as an outcome guarantee. The main prose’s Need-to-Know caveat at 237 is good and should be repeated in the review explanation. The scenario at 540 identifies MAC correctly; its clearance-only description is an incomplete military-policy example rather than a different answer key.
- Correction: say strong central enforcement/limits unauthorized information flow, subject to correct policy/implementation and other controls. Explain clearance plus Need-to-Know and applicable policy, without implying every nonmilitary MAC system uses human background checks.
- Confidence: high for the overstatement; medium for severity of the review scenario’s omission because “only if” can express a necessary rather than sufficient condition. Verified primary references: [NIST MAC glossary](https://csrc.nist.gov/glossary/term/mandatory_access_control), [NIST Need-to-Know glossary](https://csrc.nist.gov/glossary/term/need_to_know). The absence of an absolute security guarantee follows from the model’s bounded definition and is a reviewer assessment, not a NIST comparative ranking.

### D34-12 — P2 — Correct hidden-SSID conclusion uses an incorrect beacon explanation

- Location: `content/isc2-cc-2026/reading/domain-4.md:268`.
- Exact excerpt: `ชื่อเครือข่ายยังคงถูกส่งออกไปใน Probe Requests และ Beacon Frames เมื่อมีเครื่องเชื่อมต่อ`.
- Finding: hiding the SSID provides no robust authentication/confidentiality protection, but a hidden network’s beacon omits/nulls the SSID name; a client connection does not generally make the AP put the name into those beacon SSID fields. The source confuses continued beacon transmission with transmission of the SSID name in the beacon.
- Correction: explain that the AP still sends beacons and the name can be learned through directed discovery/association traffic. Do not teach “hidden SSID means no beacons” either.
- Confidence: high. Verified primary reference: [Cisco Meraki Air Marshal](https://documentation.meraki.com/Wireless/Operate_and_Maintain/User_Guides/Monitoring_and_Reporting/Air_Marshal), note explaining a hidden SSID name is not included in beacons for its BSSID.

### D34-13 — P2 — Scale-to-zero is treated as a universal property of FaaS

- Location: `content/isc2-cc-2026/reading/domain-4.md:442–443`.
- Exact excerpt: `สเกลขนาดเป็นศูนย์เมื่อไม่มีการใช้งาน`; examples include `Azure Functions`.
- Finding: event-driven execution and provider-managed infrastructure are useful FaaS characteristics; automatic zero instances when idle is plan/configuration-dependent. Azure Functions Premium has at least one active instance, and other plans have always-ready options. A listed example directly contradicts the unconditional definition.
- Correction: say FaaS commonly supports scale-to-zero depending on provider/plan, with cold-start and minimum-instance tradeoffs.
- Confidence: high. Verified primary reference: [Azure Functions event-driven scaling](https://learn.microsoft.com/en-us/azure/azure-functions/event-driven-scaling).

### D34-14 — P2 — Qualified service-specific concern: PaaS hides customer platform-maintenance duties in a named example

- Locations: `content/isc2-cc-2026/reading/domain-4.md:432–434`, `:699`; `js/core/diagram-generator.js:2682`, `:2690`, `:2767`.
- Exact excerpts: `ผู้ให้บริการคลาวด์ดูแล ... ระบบปฏิบัติการ ... ให้ทั้งหมด`; `AWS Elastic Beanstalk`; `PaaS หรือ SaaS ... Cloud Service Provider`.
- Finding: the high-level abstract PaaS responsibility pattern is legitimate, but the absolute “all” plus the named Beanstalk example can teach that the customer need not maintain a supported platform/configure or apply relevant updates. Beanstalk managed updates can be disabled, do not cross major platform branches, and retired branches stop receiving security updates. AWS publishes/manages platforms while the customer must select and maintain an appropriate supported version.
- Correction: retain the general OS/runtime provider-management distinction but state that customer platform-version selection, configuration, dependencies, and supported upgrade cadence remain service-specific. The PaaS SQL-injection scenario’s customer-code answer is still correct.
- Confidence: high in service documentation; medium that the abstract text will be read as eliminating these customer duties. Status: **qualified concern**, rather than a claim that the abstract PaaS provider-OS pattern or its scenario answer is false. Verified primary references: [AWS Beanstalk managed platform updates](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-platform-update-managed.html), [AWS platform support policy](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/platforms-support-policy.html).

### D34-15 — P3 — LDAP is listed as a directory-service product example

- Location: `content/isc2-cc-2026/reading/domain-3.md:139`.
- Exact excerpt: `ตัวอย่าง: Microsoft Active Directory (AD), Lightweight Directory Access Protocol (LDAP)`.
- Finding: LDAP is a protocol for accessing directory services, not itself a directory database/product equivalent to AD. This is a small but concrete taxonomy problem in a tool-stack lesson.
- Correction: use AD/OpenLDAP as implementations and explicitly say LDAP is a directory access protocol.
- Confidence: high. Verified primary reference: [RFC 4511](https://www.rfc-editor.org/rfc/rfc4511.html).

### D34-16 — P3 — Sockets are labeled as a Session-layer protocol

- Locations: `content/isc2-cc-2026/reading/domain-4.md:50`; `js/core/diagram-generator.js:2284`.
- Exact excerpt: `โพรโทคอลสำคัญ: RPC (Remote Procedure Call), NetBIOS, Sockets`.
- Finding: socket is a programming interface/endpoint abstraction used with transport providers (including TCP/UDP), not a Session-layer protocol. Pedagogic mappings of real TCP/IP functions to OSI are approximate; distinguish interfaces from wire protocols.
- Correction: remove Sockets from the protocol list or explicitly identify the API abstraction separately. Label TLS-at-Presentation and RPC-at-Session as illustrative conceptual mappings.
- Confidence: high. Verified primary reference: [Microsoft socket function](https://learn.microsoft.com/en-us/windows/win32/api/winsock2/nf-winsock2-socket).

## Final disposition of qualifications and recommendations

The following are **not additional counted factual findings**. P3 here denotes recommendation priority; some would become defects only if readers interpret the examples as universal requirements.

| Initial concern | Final assessment and evidence |
|---|---|
| Q1 — provisioning standard/role-first | P3 educational recommendation, high confidence. `domain-3.md:64` claims six steps in a “standard order,” but the ISC2 objective lists provision/review/deprovision and does not prescribe this sequence. `:37`, `:444`, and scenario 1 overtrain a keyword response to “first” without a bounded decision context. Call it an illustrative workflow and include approved access/identity context. [ISC2 outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline); [NIST SP 800-53](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final), AC-2 organizes account management around organization-defined approvals, policy, and criteria. This review did not establish that a six-activity provisioning example is wrong; only its claim to a universal standard is unsupported. |
| Q2 — lock/disable; retention | P3 terminology recommendation, high confidence. At `domain-3.md:107`, replace `(Lock Account)` with disabling/blocking sign-in; failed-login lockout may be temporary and is not an adequate synonym for administrative deprovisioning. Audit-log retention must be independent of account deletion policy; `:117`, `:432–436`, `:570–573` should describe system/policy-dependent impacts rather than inevitable history loss. [Microsoft AD user-account management](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage-user-accounts-in-windows-server) distinguishes unlocking, disabling, and deleting procedures. No recommendation to delete leaver accounts immediately is intended. |
| Q3 — NIST version and biometrics/MFA | P3 precision recommendation, high confidence. In `domain-3.md:124–127` and diagram `:2056`, cite the SP800-63-4 family if presenting current guidance. Biometrics are valid authentication factors, but NIST’s remote-authentication requirements allow them with a physical authenticator as MFA, not as standalone secrets/authenticators. The source does not expressly claim standalone biometric NIST compliance, so no separate factual finding. Add a two-distinct-factor recap and phishing-resistant example/cross-link. [SP 800-63B-4](https://pages.nist.gov/800-63-4/sp800-63b.html), sections 2 and 3.2.3. |
| Q4 / Q7 | Promoted to factual taxonomy findings F15 / F16. |
| Q5 / Q6 / Q8 | Promoted to F11 (MAC guarantees), F09 (broadcast mask), F10 (link-local). Mark classful addressing in `domain-4.md:101–107` as historical context and modern allocation/routing as CIDR. This historical-label recommendation is separate from the calculated /24 example, which is correct. |
| Q9 — IPv6 IPsec and transition | P3 qualification, high confidence. `domain-4.md:136`, `:563` say IPsec is supported, not that IPv6 packets are automatically encrypted, so **do not count an “IPv6 always encrypted” factual defect**. Explicitly disarm that possible misconception. RFC8504 recommends (SHOULD) IPsec support. RFC7526 deprecates the anycast 6to4 mechanism; it explicitly does **not** deprecate basic unicast 6to4. Thus the generic `:142` 6to4 example deserves context, not a blanket claim that all 6to4 is deprecated. [RFC 8504 section 13](https://www.rfc-editor.org/rfc/rfc8504.html#section-13); [RFC 7526 section 4](https://www.rfc-editor.org/rfc/rfc7526.html#section-4). |
| Q10 — protocol table | P3 common-case qualification, high confidence. `domain-4.md:192` does not explicitly say TCP is **only** for zone transfer, but adding ordinary DNS TCP use avoids a common misconception. At `:197`, label TCP/443 as HTTP/1.1 or HTTP/2 and mention HTTP/3 over QUIC/UDP. These omissions do not invalidate the listed conventional examples. `:198` should say implicit FTPS/990; explicit TLS can use FTP control port 21. `TLS/SSL` should distinguish obsolete SSL from modern TLS. [RFC 7766 section 5](https://www.rfc-editor.org/rfc/rfc7766.html#section-5); [RFC 9114](https://www.rfc-editor.org/rfc/rfc9114.html). FTPS and SSL points remain reviewer recommendations without separate final primary-reference validation and are not counted findings. |
| Q11 | Promoted to F12; the security conclusion remains correct. |
| Q12 — diagrams | P3 semantic/teaching recommendation, high confidence. `diagram-generator.js:2426` labels external FW only `Port 80/443`, yet the same DMZ includes SMTP25 (`:2441`) and DNS53 (`:2445`). Add “example web rule” or show required per-service allowed flows; do not infer that the whole firewall permits only 80/443 from a label lacking “only.” Source comparison is sufficient evidence. Defense in depth (`:2519–2560`) uses five parallel bars despite “concentric” title: the layer sequence and mobile descriptions match and are academically acceptable as an illustrative five-tier model. Add “example layers”; no arbitrary mandatory five-layer ISC2 taxonomy should be implied. People/process/physical controls in the scenario correctly broaden the strategy beyond this technical picture. [NIST defense-in-depth definition](https://csrc.nist.gov/glossary/term/defense_in_depth) is background; the exact glossary page was not separately opened in final verification, so this recommendation is not counted as reference-verified. |
| Q13 | Promoted to F13 (scale-to-zero) and F14 (named-platform maintenance nuance). NIST800-145 defines three service models; the source explicitly calls FaaS a PaaS subtype at `domain-4.md:442`, so its inclusion as a fourth practical heading is not by itself a factual defect. [NIST SP 800-145](https://csrc.nist.gov/pubs/sp/800/145/final). |
| Q14 — deployments | P3 definition/qualification recommendation, high confidence. NIST hybrid is multiple distinct **cloud infrastructures** with portability, not merely any local datacenter connected to public cloud. The source’s on-prem+public usage is common vendor language; qualify the NIST attribution at `domain-4.md:467`, distinguish an ordinary datacenter from private cloud, and note hybrid and multicloud can overlap. `:470` narrows public-cloud ownership to commercial CSPs although NIST permits academic/government ownership too. `:474` “highest security” is an unjustified deployment guarantee; security depends on implemented controls. [NIST SP 800-145](https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-145.pdf); [NIST hybrid-cloud glossary](https://csrc.nist.gov/glossary/term/Hybrid_cloud). |

## Reference validation and final status

- Official ISC2 page was independently fetched and explicitly states **effective September 1, 2026**. The current detailed objectives match the assigned 3.1/3.2 and 4.1/4.2/4.3 structure. Its current page domain names substantiate F08; historical project reports were not used. The page’s linked English PDF click returned a tool-resolution error, so the PDF was not independently inspected in this subreview. The official HTML/search-indexed detailed outline was verified; no PDF-view claim is made.
- OAuth/OIDC boundaries were checked against [RFC6749](https://www.rfc-editor.org/rfc/rfc6749.html) and [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html). Both official specifications were opened; no source finding was invented for absent content.
- NIST, RFC Editor/IETF, and AWS/Microsoft/Cisco documentation above were consulted directly or through their primary-domain retrieved excerpts. All 16 numbered findings have a verified supporting primary reference. Recommendations explicitly distinguish source inconsistency, bounded simplification, and reference-unverified minor extensions.
- **Final numbered observations: 16 = 15 confirmed findings + 1 qualified service-specific concern (F14). Priorities: P0 0, P1 0, P2 13 (including F14), P3 3.** Numbered P3 findings are F08, F15, F16. Additional recommendations are separate and not inflated into this count. The companion JSON contains these 16 rows plus 14 Q-status rows; promoted Q entries reference their numbered issue and must not be counted twice.
- **Coverage completed: 41/41 subsections, 24/24 scenarios in both source forms, 8/8 referenced diagrams (desktop and mobile semantic text).** No production edits or git mutations. Browser behavior/visual geometry remain outside this reviewer’s scope and are not a pass.
