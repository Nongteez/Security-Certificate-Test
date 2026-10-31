# Domain 4 Learning Slides — academic audit

2026-10-31. All original material was read: `D4 sum.md`, `Domain 4.md`, `DOMAIN 4.txt`; all 55 PNGs were visually inspected (14 labelled contact sheets in the QA directory). Source IDs S01–S55 follow the existing inventory's sorted image order. S15 is an unrelated meme and is excluded. Summaries are derivative teaching notes, not independent corroboration. Missing original audio/video, lecturer attribution and exact screenshot timestamps remain provenance limits; no claim of reproducing an official ISC2 course.

## Source corrections governing authoring

The detailed Task 55 F01–F20 register in `domain-4-academic-content-gap-analysis.md` was reread. It is preserved. New content applies these boundaries:

| Earlier findings | Required authoring correction |
| --- | --- |
| F01–F02 | OSI is a conceptual reference; TCP/IP mapping is approximate. Encapsulation does not require seven separate headers. TCP reliability differs from UDP and is not confidentiality or application success. |
| F03–F05 | IPv6 is 128 bits, eight 16-bit groups before compression. IPsec support does not automatically encrypt IPv6. Dual stack is one coexistence strategy; protect both families. Classful allocation tables are historical and omitted. |
| F06–F08 | 16-bit ports have 65,536 values, maximum 65,535. Include transport and both endpoints. DNS 53 and RDP 3389 replace transcript recognition errors. Ports are clues, not service/encryption proof. SFTP is not FTPS; mode-dependent FTPS details are not required teaching. |
| F09–F10 | Strong supported wireless authentication/encryption, authorized configuration and maintained devices matter. Hidden SSIDs/MAC filters are not substitutes. No claim that WPA3 is unbreakable or Wi-Fi 6 is latest; omit universal port-knocking advice. |
| F11–F13 | VLAN separation needs enforced routing policy; no 65,535-VLAN claim. DMZ can use one multi-interface firewall or separate devices. Inside does not automatically mean trusted. Segmentation reduces possible spread; it cannot guarantee containment. |
| F14–F15 | Multiple controls do not prove independent failure modes or availability redundancy. Workload granularity is a policy/enforcement property, not a particular vendor product requirement. |
| F16–F17 | Responsibility depends on the named service, component, configuration and agreement. Serverless still uses servers. Custom/container runtime and dependency duties need explicit ownership; no duration-only pricing claim. |
| F18–F20 | NIST distinguishes three service/four deployment models. Hybrid integrates distinct cloud infrastructures; public/private is one example. Multi-cloud is another provider dimension and does not establish failover. Private cloud may be third-party hosted and is not automatically secure or mandated for an entire industry. Metering does not define a universal tariff. |

## Supplemental coverage

Bluetooth pairing/exposure/authorized maintenance fills the missing wireless example without version-specific claims. IDS/IPS and anomaly/AI interpretation explain visibility, false positives, corroboration and authorized response. AI data paths, development/production isolation and cloud duties implement the official separate application guidance, not new numbered objectives. ICS examples prioritize safety, tested changes, maintenance authorization and compensating isolation. No detailed incident-response lesson or Domain 5 content is added.

## Primary references checked 2026-10-31

- [ISC2 CC 2026 outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline), September 2026 PDF printed p.6, Domain 4 and separate AI/application section.
- [RFC 1122](https://www.rfc-editor.org/rfc/rfc1122), Internet host stack; [RFC 768](https://www.rfc-editor.org/rfc/rfc768.html), UDP; [RFC 9293](https://www.rfc-editor.org/rfc/rfc9293.html), TCP.
- [RFC 4291 §2.2](https://www.rfc-editor.org/rfc/rfc4291.html#section-2.2), IPv6 notation; [RFC 8504 §13](https://www.rfc-editor.org/rfc/rfc8504.html#section-13), IPv6 security boundary.
- [IANA ports](https://www.iana.org/assignments/service-names-port-numbers), registry and interpretation limits; [Cisco 802.1Q field explanation](https://www.cisco.com/c/en/us/support/docs/lan-switching/8021q/17056-741-4.html), 12-bit VID (no vendor syntax taught).
- [NIST SP 800-41r1](https://csrc.nist.gov/pubs/sp/800/41/r1/final), firewall policy; [SP 800-94](https://csrc.nist.gov/pubs/sp/800/94/final), foundational IDPS distinctions (2007 final, not the retired draft revision).
- [NIST SP 800-121r2 Update 1](https://csrc.nist.gov/pubs/sp/800/121/r2/upd1/final), foundational Bluetooth guidance through 4.2; no current-version feature claims. [Apple wireless configuration guidance](https://support.apple.com/en-us/102766), practical configuration limitations, not universal corporate policy.
- [NIST SP 800-82r3](https://csrc.nist.gov/pubs/sp/800/82/r3/final), final OT guidance; Revision 4 is a draft as of this audit.
- [NIST SP 800-207](https://csrc.nist.gov/pubs/sp/800/207/final), resource-focused access; [SP 800-145](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf), cloud taxonomy, printed pp.2–3.
- [Microsoft shared responsibility](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility), illustrative component boundaries, not legal allocation; [AWS runtime lifecycle](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html), managed/custom/container distinctions.

Academic and bilingual acceptance remains human-pending. Per-slide source references and final verification evidence are recorded with the implementation, not inferred from schema validation.

## Delivery review result — 2026-10-31

The F01–F20 correction boundaries above have been applied to the nine published lessons / 57 bilingual slides and reviewed against their complete semantic explanations and scenario reasons. The source files and earlier audit register remain unchanged. The final focused gate passes 290/290 checks; all required EN/TH desktop Presentation/Reading/Info and scenario cases were rendered in Chrome and screenshot-inspected. Detailed tests, source limitations, preservation and human acceptance checklist are in `domain-4-completion-report.md`. No unresolved academic conflict blocks this delivery; independent human academic and Thai editorial acceptance is still pending.
