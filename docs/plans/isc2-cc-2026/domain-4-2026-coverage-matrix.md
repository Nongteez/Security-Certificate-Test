# Domain 4 — 2026 Learning Slides coverage matrix

2026-10-31. Official scope: Networking and Cloud Security Concepts, weight 21.3%, three objectives and eleven requirement bullets. Lesson numbering is local curriculum organization. The outline's examples and separate AI applications are not additional numbered objectives.

| Official requirement, paraphrased | Implemented lesson / slide positions | Teaching evidence |
| --- | --- | --- |
| 4.1 Network concepts and reference models | L01 S01–07; L02 S01–06 | OSI seven functions, TCP/IP mapping, IPv4/IPv6, VPN and limits |
| 4.1 Firewall traffic/application control | L03 S01–04; L05 S02–03 | Named allowed/denied flows, endpoints, application/state visibility |
| 4.1 Wireless networking | L04 S01–02,S06–07 | Wi-Fi and substantive Bluetooth security |
| 4.1 Embedded/networked physical systems | L04 S03–07 | Embedded/IoT/ICS overlap, safety and lifecycle controls |
| 4.2 Segmented architecture | L05 S01–07 | Zones, DMZ, VLAN, micro-segmentation and enforced paths |
| 4.2 Layered defenses | L06 S01–02,S04–05 | Different control purposes and residual dependencies |
| 4.2 Resource-focused trust decisions | L06 S03–05 | Identity/device/resource/context, not automatic internal trust |
| 4.3 Cloud characteristics | L07 S01–06 | All five properties with distinct mechanisms and limits |
| 4.3 Cloud service models | L08 S01–05,S07 | IaaS/PaaS/SaaS; FaaS explicitly supplemental |
| 4.3 Deployment models | L09 S01–06 | Public/private/community/hybrid; multi-cloud explicitly supplemental |
| 4.3 Shared security duties | L08 S01–07 | Named tasks, component control, service/agreement qualifications |
| Separate AI/application guidance: data paths | L01 S01; L02 S05–06 | Network/VPN pathway to AI service, authorization retained |
| Separate AI/application guidance: monitoring | L03 S04–06; L04 S06 | ML/anomalies beyond signatures, wired/wireless/embedded visibility, dashboards/reporting, uncertainty |
| Separate AI/application guidance: architecture | L05 S06; L06 S03–04 | Separate development from sensitive production, training data defenses |
| Separate AI/application guidance: cloud | L07 S03–04; L08 S06; L09 S06 | Scale/usage, hosting boundaries and deployment decisions |

Status: implemented and technically verified, 2026-10-31. All eleven official requirement bullets and the four separate AI/application teaching clusters above have meaningful bilingual coverage in nine published lessons / 57 slides. The exact storyboard, source traceability and academic qualifications are retained below. The final Chrome matrix passed 228 viewport/language cases in Presentation, Reading and Info (684 mode cases), plus all 144 scenario feedback states. See `domain-4-completion-report.md` for results, evidence and regression exceptions. This matrix does not claim an exhaustive exam question bank or human acceptance.

## Per-slide academic traceability

All rows below identify the teaching source or explicitly authored supplement. New scenarios are original, not copied bank items. Technical references are linked in the academic audit and lesson Info. S15 contributes no teaching.

| Stable slide ID | Source / correction boundary |
| --- | --- |
| slide-d4-01-01-request-path | Summary networking/devices; official AI data-path application |
| slide-d4-01-02-osi-upper | S02–S03; transcript OSI discussion |
| slide-d4-01-03-osi-lower | S03; summary OSI functions |
| slide-d4-01-04-tcpip-map | S04–S06; transcript TCP/IP model |
| slide-d4-01-05-encapsulation | S02; RFC 1122 encapsulation correction |
| slide-d4-01-06-tcp-udp | S05; RFC 768 and RFC 9293 |
| slide-d4-01-07-delivery-decision | Original scenario applying source/model boundaries |
| slide-d4-02-01-address-notation | S07,S11; RFC 4291 notation correction |
| slide-d4-02-02-private-public | S09–S10; summary addressing |
| slide-d4-02-03-nat-boundary | S10; NIST firewall translation distinction |
| slide-d4-02-04-dual-stack | S12; RFC 8504 correction |
| slide-d4-02-05-vpn-scope | S13; official AI data path application |
| slide-d4-02-06-tunnel-decision | Original VPN/data-permission scenario |
| slide-d4-03-01-transport-endpoints | S17–S18; IANA ranges and endpoints |
| slide-d4-03-02-service-clues | S20–S21; IANA and HTTP/3 qualification |
| slide-d4-03-03-firewall-policy | S14; NIST firewall policy |
| slide-d4-03-04-detection-prevention | S36; summary IDS/IPS; NIST SP 800-94 supplement |
| slide-d4-03-05-ai-monitoring | Official AI monitoring application; IDPS uncertainty supplement |
| slide-d4-03-06-alert-decision | Original anomaly/response evidence scenario |
| slide-d4-04-01-wifi-controls | S16; Apple supported configuration and limits |
| slide-d4-04-02-bluetooth-pairing | NIST Bluetooth supplement; missing local teaching explicitly filled |
| slide-d4-04-03-device-overlap | S22–S26; original embedded/ICS/IoT material |
| slide-d4-04-04-ot-change-safety | S24–S25; NIST final OT safe-change supplement |
| slide-d4-04-05-iot-lifecycle | S23,S26–S27,S37; original lifecycle risks |
| slide-d4-04-06-wireless-signals | Official AI wireless/embedded monitoring application |
| slide-d4-04-07-device-decision | Original controller safety scenario |
| slide-d4-05-01-blast-radius | S28,S30; summary segmentation qualifications |
| slide-d4-05-02-firewall-zones | S31–S32; zone-policy distinctions |
| slide-d4-05-03-dmz-path | S33; single/multiple-firewall DMZ correction |
| slide-d4-05-04-vlan-routing | S34; 802.1Q identifier/routing correction |
| slide-d4-05-05-workload-policy | S35; workload policy example |
| slide-d4-05-06-ai-environment-boundary | S37–S39; official AI development/production application |
| slide-d4-05-07-path-decision | Original camera/recorder path scenario |
| slide-d4-06-01-independent-defenses | S36; summary layered controls and AI training-data application |
| slide-d4-06-02-residual-dependencies | S36; independence/availability overclaim correction |
| slide-d4-06-03-resource-decision | S38–S39; NIST Zero Trust resource policy |
| slide-d4-06-04-complementary-controls | S35–S39; original combined architecture synthesis |
| slide-d4-06-05-access-decision | Original internal-device/resource-policy scenario |
| slide-d4-07-01-cloud-model | S41–S42; summary cloud overview |
| slide-d4-07-02-self-service | S42; self-service governance explanation |
| slide-d4-07-03-elasticity | S42; official AI scalability application |
| slide-d4-07-04-measured-service | S42; metering/billing qualification |
| slide-d4-07-05-pooling-network-access | S42; pooling/network access distinction |
| slide-d4-07-06-capacity-decision | Original elasticity/measurement scenario |
| slide-d4-08-01-iaas-stack | S43,S45,S47–S49; service boundary qualification |
| slide-d4-08-02-paas-stack | S43,S45,S47–S49; application/platform distinction |
| slide-d4-08-03-saas-boundary | S44,S46–S49; SaaS data/access duties |
| slide-d4-08-04-faas-code | S44,S46,S49; AWS runtime supplement |
| slide-d4-08-05-named-responsibilities | S45–S49; Microsoft component responsibility supplement |
| slide-d4-08-06-ai-hosting | Official AI cloud duty application; model/service-specific controls |
| slide-d4-08-07-duty-decision | Original customer-controlled sharing scenario |
| slide-d4-09-01-public-access-boundary | S50–S51; public service versus public data |
| slide-d4-09-02-private-ownership | S52; NIST ownership/location qualification |
| slide-d4-09-03-community-governance | S54; community governance |
| slide-d4-09-04-hybrid-composition | S53; NIST inclusive hybrid correction |
| slide-d4-09-05-multicloud-dependencies | S55; multi-provider continuity/portability qualification |
| slide-d4-09-06-deployment-decision | Original AI/analytics deployment evidence scenario |
