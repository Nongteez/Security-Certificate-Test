---
id: domain-4-curated-knowledge-base
domain_id: 4
prepared_date: 2026-10-28
academic_verification: primary-source-checked-by-assistant
translation_review: bilingual-meaning-checked-by-assistant
human_signoff: pending
entry_count: 24
---

# Domain 4 - Networking and Cloud Security Concepts

Task 56 curated authoring evidence. Documentation only; this Markdown file is not loaded by the application. It replaces the empty staging scaffold, not original course material. Scope is the ISC2 outline effective September 1, 2026, Domain 4 weight 21.3%; exact objective titles below are verified in [R01], printed p.6.

Companions: [resolution register](../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md), [bilingual supplements](../../../docs/plans/isc2-cc-2026/domain-4-knowledge-gap-supplements.md), [blueprint](../../../docs/plans/isc2-cc-2026/domain-4-question-development-blueprint.md), [coverage/readiness](../../../docs/plans/isc2-cc-2026/domain-4-curation-coverage-readiness.md).

## Evidence and acceptance rules

T/A/B and S01-S55 preserve the exact file/capture IDs in the [Task 55 inventory](../../../docs/plans/isc2-cc-2026/domain-4-source-inventory.md). COURSE retains bounded original teaching; CORRECTION changes a documented F assertion; SUPPLEMENT adds external teaching not established locally. Mixed provenance is explicit. All entries are VERIFIED-BOUNDED: primary-source-supported at foundational CC depth, reviewed 2026-10-28 by the assistant. Confidence is High for the bounded cited principles unless a Medium analytical implication is identified. R references resolve to the register's source titles, URLs, sections and limits. Human academic/bilingual approval remains pending.

These knowledge IDs follow the existing KNOW-D4-nnn convention; they are neither question nor vocabulary entries. Template vocabulary tables are omitted. Educational applications are authored illustrations, not ISC2 questions. No item quota, question ID or production activation is assigned.

Excluded dependencies: intended PRC/RPC wording; universal model chronology/never-implemented claims; generic port-knocking prescriptions; exact Wi-Fi rate rankings. Product settings, contracts, tariffs, law and version-specific behavior need fresh evidence if a later scenario depends on them. These exclusions do not omit a required foundational scope area.

## Verified official scope

| Official objective | Required scope, paraphrased | Curated records |
| --- | --- | --- |
| 4.1 Understand network security | Networking models/addressing/protected connectivity; firewalls with ports/applications; wireless; embedded/industrial and IoT | KNOW-D4-001-011; AI context 022 |
| 4.2 Understand network security architecture | Segmentation with zones, VLANs and workload granularity; layered defense; Zero Trust | KNOW-D4-012-016; AI context 023 |
| 4.3 Understand cloud security | Cloud properties, service/deployment models, shared security roles/responsibilities | KNOW-D4-017-021; AI context 024 |

There are no invented 4.x.y objectives. DMZ, NAT/CIDR, IDS/IPS, example ports, FaaS and multi-cloud are supporting explanations rather than new numbered requirements. R02's AI commentary is separate from the dated PDF bullets.

## 4.1 Understand network security

### KNOW-D4-001 - Models and encapsulation

**Provenance:** COURSE S02-S06/T:L5-L41, A section 3/B:L28-L39 + CORRECTION F02. **References:** [R03] 1.1.3/1.3.3; [R36] 6.1.2/7.7.2; [R33] Introduction.

**EN:** OSI describes physical, data link, network, transport, session, presentation and application functions. The common four-layer Internet model describes link/network access, internet, transport and application. The course reference mapping groups the upper three OSI functions under Internet application and physical/data link under link access; this is a teaching mapping, not a normative one-to-one equivalence. Model numbers differ. Real protocols encapsulate application data in transport/IP/link units; seven separate compulsory headers do not follow. TLS can illustrate a security/representation function without one unique mandatory OSI placement.

**TH:** OSI อธิบายหน้าที่ Physical, Data Link, Network, Transport, Session, Presentation และ Application แบบจำลอง Internet สี่ชั้นจัดเป็น Link/Network Access, Internet, Transport และ Application การเทียบเพื่อเรียนรวมสามชั้นบนของ OSI ไว้ใน Application และสองชั้นล่างไว้ใน Link เลขชั้นจึงต่างกัน Protocol จริงห่อข้อมูลด้วยโครงสร้าง Transport/IP/Link ไม่ได้บังคับเพิ่ม Header เจ็ดชุด และการใช้ TLS อธิบายหน้าที่ความปลอดภัยไม่ได้กำหนดชั้น OSI เดียวที่ต้องตอบเสมอ

**Application / ตัวอย่าง:** Cable disconnection and an application policy fault implicate different functions; the model narrows investigation, not proof of a single root cause. / สายหลุดกับกฎแอปผิดเกี่ยวข้องกับคนละหน้าที่ แบบจำลองช่วยจำกัดการตรวจแต่ไม่พิสูจน์สาเหตุเดียว

**Decision/confusion/limits:** Distinguish models, functions and actual protocols. PRC/RPC intent and model history remain excluded, not silently corrected.

### KNOW-D4-002 - TCP and UDP

**Provenance:** COURSE S03/S05, T:L21,L35, A:L128-L135/B:L39 + CORRECTION F01. **References:** [R04] 2.2; [R05] Introduction; [R33] Introduction.

**EN:** TCP provides an ordered reliable byte stream using sequence/error/loss detection and retransmission. UDP carries datagrams with less transport machinery and no delivery/order promise of its own; applications can add mechanisms. Transport reliability is different from confidentiality, cryptographic authenticity, successful application processing or uninterrupted connectivity. Lower overhead does not guarantee greater application speed.

**TH:** TCP ให้ Byte Stream ที่เรียงลำดับและเชื่อถือได้ผ่านลำดับข้อมูล การตรวจความผิดพลาด/สูญหายและส่งซ้ำ UDP ส่ง Datagram ด้วยกลไก Transport น้อยกว่าและไม่รับประกันการส่งถึงหรือลำดับในตัว แอปอาจเพิ่มกลไกได้ ความเชื่อถือได้ในการส่งต่างจากความลับ การยืนยันข้อมูลแบบเข้ารหัส การประมวลผลสำเร็จ หรือการเชื่อมต่อที่ไม่มีวันขัดข้อง และ Overhead ต่ำไม่รับประกันความเร็วแอปมากกว่า

**Application / ตัวอย่าง:** Ordered data transfer needs appropriate reliability; sensitive content additionally needs a secure channel. / งานส่งข้อมูลที่ต้องเรียงลำดับต้องพิจารณาความเชื่อถือได้ และข้อมูลสำคัญยังต้องมีช่องทางที่ปลอดภัย

**Decision/confusion/limits:** Select behavior by stated requirements; TCP is not encryption, UDP is not inherently malicious, and network failure can still prevent completion.

### KNOW-D4-003 - Addressing and conservation

**Provenance:** COURSE S07-S11/T:L43-L63 + CORRECTION F04/F05. **References:** [R07] 2.2; [R09] Abstract/history; [R14] 3.2.

**EN:** IPv4 has 32 bits, commonly four dotted-decimal octets. IPv6 has 128 bits, with eight 16-bit pieces in the full ordinary hexadecimal representation and permitted zero compression. Total address space includes special/reserved uses. CIDR prefixes supersede historical class boundaries for modern allocation reasoning. IPv4 address sharing conserves public addresses; private addressing/NAT alone is neither encryption nor a least-privilege access policy.

**TH:** IPv4 มี 32 บิตและมักเขียนเป็นเลขฐานสิบสี่ชุดคั่นจุด IPv6 มี 128 บิต แบบฐานสิบหกเต็มมีแปดกลุ่มขนาด 16 บิตและย่อศูนย์ได้ จำนวนที่อยู่รวมมีการใช้พิเศษและค่าที่สงวน CIDR ใช้ Prefix แทนการยึด Class เก่าในการจัดสรรปัจจุบัน การใช้ที่อยู่ร่วมช่วยประหยัด Public Address แต่ Private Address/NAT อย่างเดียวไม่เข้ารหัสหรือบังคับสิทธิ์ขั้นต่ำ

**Application / ตัวอย่าง:** Address sharing conserves addresses; a separate permitted-flow policy protects a server. / การใช้ที่อยู่ร่วมประหยัดที่อยู่ ส่วนการป้องกันเซิร์ฟเวอร์ต้องมีนโยบายการสื่อสารด้วย

**Decision/confusion/limits:** S11's caption has an extra label, not a nine-group address. Classful count memorization and advanced subnet calculations are excluded.

### KNOW-D4-004 - IPv6 protection and coexistence

**Provenance:** COURSE S12/T:L65-L67 + CORRECTION F03/F05; SUPPLEMENT SUP-D4-04. **References:** [R06] 13/13.1; [R10] Abstract/2; [R11] Abstract.

**EN:** IPv6 does not automatically encrypt/authenticate traffic. IPsec support is recommended in the cited node requirements, distinct from mandatory implementation/use or a protected connection. Dual stack implements both IP versions; translation and tunnels are other interoperability mechanisms. Apply policy and monitoring to enabled IPv4/IPv6 paths. SUP-D4-04 gives the full bilingual explanation and example.

**TH:** IPv6 ไม่เข้ารหัสหรือยืนยันทุกทราฟฟิกเอง เอกสารที่อ้างอิงแนะนำการรองรับ IPsec ซึ่งต่างจากการบังคับรองรับ/ใช้งานหรือยืนยันว่าการเชื่อมต่อปลอดภัย Dual Stack มีทั้งสองชุด IP ส่วนการแปลกับ Tunnel เป็นกลไกทำงานร่วมกันอีกแบบ ต้องบังคับนโยบายและติดตามเส้นทาง IPv4/IPv6 ที่เปิด คำอธิบายกับตัวอย่างสองภาษาอยู่ใน SUP-D4-04

**Application / ตัวอย่าง:** Check an enabled IPv6 path when the IPv4 path is restricted but the host remains exposed. / ตรวจเส้นทาง IPv6 ที่เปิดเมื่อจำกัด IPv4 แล้วแต่ Host ยังเข้าถึงได้

**Decision/confusion/limits:** Large space is not a security policy. Dual stack does not translate every packet; NAT64/IPsec/dual stack are not mandatory in every design.

### KNOW-D4-005 - VPN protection boundary

**Provenance:** COURSE S13/T:L69-L75, A:L33/B:L14, externally corroborated. **References:** [R14] VPN technology discussion; [R06] 13.

**EN:** A security VPN establishes protected connectivity across an untrusted network using authentication/encryption appropriate to its design. Remote access connects a user/device; site-to-site connects networks. Identify endpoints and which traffic enters the tunnel. Protection does not repair a compromised endpoint, authorize every resource or necessarily extend beyond tunnel termination.

**TH:** VPN ด้านความปลอดภัยสร้างการเชื่อมต่อที่ป้องกันผ่านเครือข่ายไม่น่าเชื่อถือด้วยการยืนยันตัวตน/เข้ารหัสตามแบบ Remote Access เชื่อมผู้ใช้/อุปกรณ์ ส่วน Site-to-Site เชื่อมเครือข่าย ต้องระบุปลายและทราฟฟิกใน Tunnel การป้องกันไม่แก้เครื่องที่ถูกยึด ไม่ให้สิทธิ์ทุกทรัพยากร และไม่จำเป็นต้องคุ้มครองหลังจุดสิ้นสุด

**Application / ตัวอย่าง:** An approved remote worker gets a protected path and still needs application access rights. / ผู้ทำงานระยะไกลมีช่องทางที่ป้องกันแต่ยังต้องมีสิทธิ์ของแอป

**Decision/confusion/limits:** VPN differs from firewall filtering or guaranteed anonymity. Detailed protocol/mode configuration is outside this baseline.

### KNOW-D4-006 - Devices, enforcement and detection

**Provenance:** COURSE S14/S36/T:L75-L79, A section 2/B:L16-L26 + SUPPLEMENT SUP-D4-03. **References:** [R14] 2.1.1-2.1.3; [R32] 2.2/2.3.

**EN:** A basic switch forwards link frames using learned addressing; a router forwards IP between networks; an access point supplies wireless access. Multi-function devices can combine roles. A firewall enforces policy at a host/network boundary; ACL capabilities/statefulness depend on implementation. Packet fields, tracked state and application behavior provide different inspection context. IDS detection/alerting differs from configured IPS prevention. A WAF focuses on web-application traffic. False positives/negatives and visibility limits remain.

**TH:** Switch พื้นฐานส่ง Frame ตามข้อมูลที่อยู่ที่เรียนรู้ Router ส่ง IP ข้ามเครือข่าย และ Access Point ให้การเข้าถึงไร้สาย อุปกรณ์อาจรวมหลายหน้าที่ Firewall บังคับนโยบายที่ Host/ขอบเขตเครือข่าย ส่วน ACL ต้องดูความสามารถกับการติดตามสถานะจริง ข้อมูล Packet สถานะและพฤติกรรมแอปให้บริบทต่างกัน IDS ตรวจจับ/แจ้งเตือน ส่วน IPS อาจป้องกันตามการตั้งค่า WAF เน้น Web Application แต่ยังมีการแจ้งผิด พลาดและข้อจำกัดการมองเห็น

**Application / ตัวอย่าง:** Choose enforcement and visibility at the relevant path, not solely by device name. / เลือกการบังคับใช้กับการมองเห็นตามเส้นทาง ไม่ใช่ชื่ออุปกรณ์อย่างเดียว

**Decision/confusion/limits:** An allowed flow is not proven harmless; an alert is not proof. SUP-D4-03 explains state/replies and interpretation limits.

### KNOW-D4-007 - Ports, services and exposure

**Provenance:** COURSE S17-S21/T:L87-L107, A/B port tables + CORRECTION F06-F08. **References:** [R08] ranges/queries; [R35] dynamic-range heading; [R19] 4; [R20] Description; [R21] 4.2.1-4.2.2.

**EN:** TCP/UDP have 65,536 port values numbered 0-65,535 with reserved/special uses. Registry ranges are system 0-1023, user 1024-49151, dynamic/private 49152-65535; an OS's actual ephemeral range may differ. Source/destination IP, transport and ports distinguish endpoints. Clients often use ephemeral source ports to a service; replies reverse that relationship. Defaults such as DNS 53, SSH/SFTP 22, HTTP 80, HTTPS 443 and conventional RDP 3389 are clues, not service/security proof. SFTP and FTPS differ; FTP-TLS negotiation need not use 990.

**TH:** TCP/UDP มี Port 65,536 ค่า ตั้งแต่ 0-65,535 รวมค่าที่สงวน/พิเศษ ช่วงทะเบียนคือ System 0-1023, User 1024-49151 และ Dynamic/Private 49152-65535 แต่ Ephemeral ที่ OS ใช้จริงอาจต่างกัน IP, Transport กับ Port ต้นทาง/ปลายทางแยกปลายการสื่อสาร ลูกข่ายมักใช้ Source Port ชั่วคราวไปยังบริการและข้อมูลตอบกลับสลับความสัมพันธ์ ค่าเริ่มต้น เช่น DNS 53, SSH/SFTP 22, HTTP 80, HTTPS 443 และ RDP 3389 เป็นเบาะแส ไม่ยืนยันตัวบริการหรือความปลอดภัย SFTP ต่างจาก FTPS และ FTP-TLS ไม่จำเป็นต้องใช้ 990

**Application / ตัวอย่าง:** Restrict unnecessary exposed services while preserving authorized flows. A listening service is distinct from a vulnerability or successful exploit. / จำกัดบริการเปิดที่ไม่จำเป็นโดยรักษางานที่อนุญาต การเปิดบริการต่างจากช่องโหว่หรือการโจมตีสำเร็จ

**Decision/confusion/limits:** HTTP remains a protocol family; plain HTTP alone gives no TLS. HTTPS can use secured transports beyond TCP. State/rule semantics must be specified. Exact port-table quotas and generic port knocking are excluded.

### KNOW-D4-008 - Wi-Fi security

**Provenance:** COURSE S16/T:L79-L85 + CORRECTION F09/F10; SUPPLEMENT SUP-D4-02. **References:** [R17] Security/Hidden network/MAC filtering; [R18] publication context.

**EN:** Protection depends on supported authentication/encryption, approved access and maintenance. Wi-Fi generation describes network capabilities; WPA2/WPA3 modes describe security. Hidden SSIDs/MAC restrictions do not replace authentication/encryption. Compatibility may give different clients different protections. Use strong supported settings under policy without promising invulnerability or throughput; S16 is historical rather than a complete current generation list.

**TH:** การป้องกันขึ้นกับการยืนยันตัวตน/เข้ารหัสที่รองรับ การเข้าถึงที่อนุมัติและการดูแล รุ่น Wi-Fi เกี่ยวข้องกับความสามารถเครือข่าย ส่วน WPA2/WPA3 เกี่ยวกับความปลอดภัย การซ่อน SSID/กรอง MAC ไม่ทดแทนการยืนยันตัวตน/เข้ารหัส การรองรับอุปกรณ์เก่าอาจให้การป้องกันต่างกัน ต้องใช้การตั้งค่าที่ปลอดภัยและรองรับตามนโยบาย ไม่รับประกันว่าถูกโจมตีไม่ได้หรือ Throughput และ S16 ไม่ใช่รายชื่อรุ่นปัจจุบันทั้งหมด

**Application / ตัวอย่าง:** Review or isolate a legacy compatibility need rather than disable protection for all clients; see SUP-D4-02. / ทบทวนหรือแยกความต้องการอุปกรณ์เก่า แทนปิดการป้องกันของทุกเครื่อง

**Decision/confusion/limits:** Familiar SSID is not authenticated network identity. Exact rate ranking and always-use-one-mode claims are excluded.

### KNOW-D4-009 - Bluetooth security

**Provenance:** SUPPLEMENT SUP-D4-01; no substantive local security lesson. **References:** [R29] scope/3.2.2.4/4.4; [R30] security options.

**EN:** Discovery, pairing, encrypted communication and service authorization are distinct. Use approved peers, supported authenticated pairing/encryption, exposure reduction and lifecycle maintenance. SUP-D4-01 supplies the detailed bilingual explanation, scanner example and misconceptions. Its Just Works limitation is tied to NIST-described methods, not every later implementation/version.

**TH:** การค้นพบ การจับคู่ การเข้ารหัสและการให้สิทธิ์ใช้บริการต่างกัน ต้องเลือกอุปกรณ์ที่อนุมัติ วิธีจับคู่/เข้ารหัสที่รองรับ ลดการเปิดเผยและดูแลตลอดอายุ คำอธิบาย ตัวอย่างเครื่องสแกนและความเข้าใจผิดสองภาษาอยู่ใน SUP-D4-01 ข้อจำกัด Just Works ผูกกับวิธีที่ NIST อธิบาย ไม่เหมารวมทุกรุ่นภายหลัง

**Application / ตัวอย่าง:** Confirm the intended peer and retire obsolete pairings; a familiar advertised name is insufficient. / ตรวจอุปกรณ์ปลายทางและถอนการจับคู่เก่า ชื่อที่ประกาศอย่างเดียวไม่พอ

**Decision/confusion/limits:** Paired does not mean all services permitted. No fixed safe radio distance or later-version algorithm claim is accepted.

### KNOW-D4-010 - Embedded and industrial constraints

**Provenance:** COURSE S22-S25/T:L107-L121 + SUPPLEMENT SUP-D4-06. **References:** [R31] 5.2.5.2/6.2.1.3.

**EN:** Embedded systems serve dedicated functions and may have constrained resources, long life, legacy code and difficult updates. Some are not network connected. ICS monitors/controls physical processes, so incidents or unsuitable changes can harm safety and operation beyond data loss. Consider authorization, vendor compatibility, testing, maintenance and recovery. Isolation/monitoring can reduce exposure while approved remediation is arranged.

**TH:** Embedded System ทำหน้าที่เฉพาะและอาจมีทรัพยากรจำกัด อายุยาว Code เก่าและอัปเดตยาก บางระบบไม่เชื่อมเครือข่าย ICS ตรวจ/ควบคุมกระบวนการกายภาพ เหตุการณ์หรือการเปลี่ยนที่ไม่เหมาะสมจึงกระทบความปลอดภัยและการทำงานมากกว่าข้อมูลสูญหาย ต้องพิจารณาอำนาจอนุมัติ ความเข้ากันได้กับผู้ผลิต การทดสอบ บำรุงรักษาและกู้คืน การแยก/ติดตามช่วยลดการเปิดเผยระหว่างเตรียมแก้ไขที่อนุมัติ

**Application / ตัวอย่าง:** SUP-D4-06's water-treatment controller illustrates safe update planning. / ตัวควบคุมบำบัดน้ำใน SUP-D4-06 แสดงการวางแผนอัปเดตที่ปลอดภัย

**Decision/confusion/limits:** Neither immediate patching regardless of safety nor never patching is universal. Isolation does not repair firmware; no plant-specific operating procedure is asserted.

### KNOW-D4-011 - IoT lifecycle and communications

**Provenance:** COURSE S26-S27/S37, T:L121-L125,L173, A sections 12-13/B section 7 + SUPPLEMENT SUP-D4-06. **References:** [R31] segmentation/isolation; [R34] section 2/Table 1 independently corroborates device capabilities; course supplies practice examples.

**EN:** IoT includes physical networked devices exchanging data, such as cameras/sensors. Manage default credentials, supported firmware, suitable authentication/communications, inventory, unnecessary services and unsupported-device replacement. Restrict communication to business need and monitor relevant paths. IoT, embedded and industrial describe overlapping properties, not identical categories or maintenance procedures.

**TH:** IoT รวมอุปกรณ์กายภาพที่เชื่อมเครือข่ายแลกเปลี่ยนข้อมูล เช่น กล้อง/เซนเซอร์ ต้องจัดการรหัสเริ่มต้น Firmware ที่ยังสนับสนุน การยืนยันตัวตน/การสื่อสาร บัญชีทรัพย์สิน บริการที่ไม่จำเป็นและการเปลี่ยนอุปกรณ์หมดการสนับสนุน จำกัดการสื่อสารตามงานและติดตามเส้นทาง IoT, Embedded และ Industrial ซ้อนทับกันได้แต่ไม่ใช่ประเภทหรือขั้นตอนบำรุงรักษาเดียวกันทั้งหมด

**Application / ตัวอย่าง:** A camera may need recording/time/update services without finance-database access in the stated design. / กล้องอาจต้องใช้ระบบบันทึก เวลาและอัปเดต แต่ไม่ต้องเข้าฐานข้อมูลการเงินในแบบที่ระบุ

**Decision/confusion/limits:** Policy enforcement supplies isolation. Removing all connectivity may break legitimate functions; safety/availability can constrain changes.

## 4.2 Understand network security architecture

### KNOW-D4-012 - Segmentation, zones and DMZ

**Provenance:** COURSE S28-S33/T:L127-L149, A sections 6-8/B sections 1-3 + CORRECTION F12/F13; SUPPLEMENT SUP-D4-05. **References:** [R14] 3.1/3.3/4; [R31] 6.2.1.3.

**EN:** Segmentation creates controlled communication boundaries to reduce exposure and potential lateral movement. Zones group systems/interfaces/traffic for policy. A DMZ separates public-facing services from internal resources with defined enforcement. One multi-interface firewall or multiple-firewall designs can implement boundaries; the main S33 picture does not establish two devices. Permit needed service paths and constrain management/other traffic. Allowed paths can still carry attacks, so containment is conditional.

**TH:** Segmentation สร้างขอบเขตควบคุมการสื่อสารเพื่อลดการเปิดเผยและโอกาสเคลื่อนโจมตี Zone รวมระบบ/Interface/ทราฟฟิกเพื่อใช้นโยบาย DMZ แยกบริการสาธารณะจากระบบภายในด้วยการบังคับใช้ที่กำหนด อาจใช้ Firewall หลาย Interface ตัวเดียวหรือหลายตัว ภาพหลัก S33 ไม่ยืนยันว่ามีสองอุปกรณ์ ต้องอนุญาตเฉพาะเส้นทางจำเป็นและจำกัดงานบริหาร/ทราฟฟิกอื่น เส้นทางที่อนุญาตยังส่งการโจมตีได้จึงไม่รับประกันการสกัดทั้งหมด

**Application / ตัวอย่าง:** SUP-D4-05 permits public HTTPS to an approved DMZ service but denies new direct Internet-to-database connections. / ตัวอย่างอนุญาต HTTPS ถึงบริการ DMZ แต่ปฏิเสธการเริ่มเชื่อมตรงจาก Internet สู่ฐานข้อมูล

**Decision/confusion/limits:** DMZ placement is not unlimited internal access. Inside/trusted naming alone is not authorization. Effective paths need verification after approved changes.

### KNOW-D4-013 - VLAN and effective isolation

**Provenance:** COURSE S34/T:L151-L157, A section 9/B section 4 + CORRECTION F11/F13. **References:** [R12] VID; [R13] ranges; [R31] 6.2.1.3.

**EN:** VLANs logically separate Layer 2 broadcast domains on capable infrastructure. Inter-VLAN communication normally needs Layer 3 forwarding; policy determines allowed traffic. Different VLAN assignment alone does not prove secure access. The 802.1Q VID is 12 bits, with ordinary IDs 1-4094 and reserved/internal/platform restrictions. It is not a 16-bit transport-port namespace.

**TH:** VLAN แยก Broadcast Domain ระดับ Layer 2 เชิง Logical บนอุปกรณ์ที่รองรับ การติดต่อข้าม VLAN โดยทั่วไปต้อง Forward ระดับ Layer 3 แล้วนโยบายกำหนดสิ่งที่ผ่านได้ การใช้คนละ VLAN จึงไม่พิสูจน์สิทธิ์ที่ปลอดภัย VID ของ 802.1Q มี 12 บิต เลขทั่วไปคือ 1-4094 และมีค่าที่สงวน/ข้อจำกัด Platform ไม่ใช่ Port 16 บิต

**Application / ตัวอย่าง:** Guest/server VLANs still need routing restrictions and verification of allowed/denied paths. / Guest กับ Server VLAN ยังต้องจำกัด Routing และตรวจเส้นทางที่ควรผ่าน/ไม่ผ่าน

**Decision/confusion/limits:** Broadcast separation, subnetting and least-privilege policy differ. VLANs are neither encryption nor a complete Zero Trust implementation.

### KNOW-D4-014 - Micro-segmentation

**Provenance:** COURSE S35/T:L157-L163, A section 10/B section 5 + CORRECTION/SUPPLEMENT F15/SUP-D4-05. **References:** [R15] 3.1.2/2.1.

**EN:** Micro-segmentation applies granular policy around workloads or small groups. Endpoint agents/firewalls, gateways and software-defined mechanisms are implementation options. Desired granularity and identity assurance matter more than product labels. Permit a web workload's required application call and an application's database transaction rather than broad peer reachability.

**TH:** Micro-segmentation ใช้นโยบายละเอียดรอบ Workload หรือกลุ่มเล็ก อาจใช้ Agent/Firewall ที่ Endpoint, Gateway หรือกลไก Software-defined ต้องพิจารณาความละเอียดกับความเชื่อมั่นตัวตนมากกว่าชื่อสินค้า เช่น อนุญาต Web ไปยังบริการ Application และ Application ไปฐานข้อมูลเฉพาะที่จำเป็น แทนเปิดให้ Peer ติดต่อกว้างๆ

**Application / ตัวอย่าง:** Restrict an unnecessary server-to-server path inside a larger network. / จำกัดเส้นทางระหว่างเซิร์ฟเวอร์ที่ไม่จำเป็นในเครือข่ายใหญ่

**Decision/confusion/limits:** A per-IP rule is not automatically workload identity assurance. Buying an NGFW does not complete policy. Universal historical capability claims are excluded.

### KNOW-D4-015 - Defense in depth and dependencies

**Provenance:** COURSE S36/T:L165-L171, A section 11/B section 6 + CORRECTION F14. **References:** [R14] 3.1/3.3/5.1. Dependency consequence is Medium-confidence design synthesis.

**EN:** Combine complementary traffic, endpoint, application, data and monitoring controls. If one fails, another can constrain consequences. Layering reduces dependence on one defense but does not prove redundancy, independent administration, elimination of every failure point or uninterrupted availability. Examine common dependencies and permitted paths rather than count defenses.

**TH:** ใช้มาตรการทราฟฟิก Endpoint แอป ข้อมูลและการติดตามที่เสริมกัน หากชั้นหนึ่งล้มเหลว อีกชั้นอาจจำกัดผลกระทบ การมีหลายชั้นลดการพึ่งมาตรการเดียวแต่ไม่พิสูจน์ว่ามีระบบสำรอง การบริหารอิสระ ไม่มีจุดล้มเหลว หรือพร้อมใช้ต่อเนื่อง ต้องตรวจความพึ่งพาร่วมกับเส้นทาง ไม่ใช่นับจำนวนมาตรการ

**Application / ตัวอย่าง:** A shared administrator credential can affect several defenses, so common dependency still needs treatment. / Credential ผู้ดูแลที่ใช้ร่วมอาจกระทบหลายมาตรการ จึงยังต้องจัดการความพึ่งพานั้น

**Decision/confusion/limits:** Layered security and high availability are different properties. Later targets must avoid reproducing D1 Q605's existing rationale.

### KNOW-D4-016 - Zero Trust resource decisions

**Provenance:** COURSE S38-S39/T:L175-L177, A section 14/B section 8 + qualification F13; SUP-D4-05. **References:** [R15] 2.1/3.1.2.

**EN:** Network location or asset ownership alone should not grant implicit trust. Evaluate subject/device/resource/context under policy, authenticate/authorize the relevant access and constrain it to need. Segmentation supplies boundaries without replacing resource authorization. The principle does not require a human to enter credentials on every packet or demand removal of all firewalls.

**TH:** ตำแหน่งเครือข่ายหรือการเป็นอุปกรณ์องค์กรเพียงอย่างเดียวไม่ควรให้ความเชื่อถืออัตโนมัติ ต้องประเมินผู้ร้องขอ อุปกรณ์ ทรัพยากรและบริบทตามนโยบาย ยืนยันตัวตน/สิทธิ์ของการเข้าถึงที่เกี่ยวข้องและจำกัดตามจำเป็น Segmentation ช่วยสร้างขอบเขตแต่ไม่แทน Authorization และหลักการนี้ไม่ได้ให้คนกรอกรหัสทุก Packet หรือถอด Firewall ทั้งหมด

**Application / ตัวอย่าง:** A valid office user on an unsuitable device may lack access to a sensitive resource under policy. / ผู้ใช้สำนักงานที่ถูกต้องอาจเข้าไม่ได้หากอุปกรณ์ไม่ผ่านเงื่อนไขทรัพยากรนั้น

**Decision/confusion/limits:** Internal reachability, authenticated identity and authorized resource access are distinct. This baseline does not prescribe a complete product architecture.

## 4.3 Understand cloud security

### KNOW-D4-017 - Cloud properties

**Provenance:** COURSE S41-S42/T:L177-L183, A section 15/B section 9 + qualification F20. **References:** [R16] section 2.

**EN:** On-demand self-service concerns consumer provisioning without manual handling of each request; broad network access uses standard network/client mechanisms; resource pooling allocates shared resources among consumers; rapid elasticity releases/adds capacity with demand; measured service monitors, controls and reports use. These are different dimensions. Network access still needs authorization, supply has limits and metering is not one exact tariff or proof of secure tenant settings.

**TH:** On-demand Self-service คือจัดเตรียมทรัพยากรโดยไม่ต้องมีคนดำเนินการทุกคำขอ Broad Network Access ใช้กลไกเครือข่าย/ลูกข่ายมาตรฐาน Resource Pooling จัดสรรทรัพยากรร่วม Rapid Elasticity เพิ่ม/คืนความจุตามงาน และ Measured Service วัด ควบคุมและรายงานการใช้ ทั้งห้าเป็นคนละมิติ การเข้าผ่านเครือข่ายยังต้องมีสิทธิ์ ทรัพยากรมีข้อจำกัด และการวัดไม่รับประกันสูตรค่าใช้จ่ายเดียวหรือการตั้งค่า Tenant ที่ปลอดภัย

**Application / ตัวอย่าง:** Creating a VM through a portal, adding servers during a spike and reading usage reports illustrate different properties. / สร้าง VM ผ่าน Portal เพิ่มเซิร์ฟเวอร์เมื่อโหลดสูง และอ่านรายงานการใช้ แสดงคนละคุณลักษณะ

**Decision/confusion/limits:** Pooling is not public-data authorization; elasticity is not backup/recovery. Tariffs/limits need service-specific evidence.

### KNOW-D4-018 - IaaS, PaaS and SaaS

**Provenance:** COURSE S43-S44/T:L185-L193, A section 16/B section 10 + qualification F18. **References:** [R16] section 2; [R22]-[R24] model examples.

**EN:** IaaS supplies fundamental infrastructure so the customer runs guest OS/software. PaaS supplies an application platform, transferring more underlying management while retaining customer application/data duties. SaaS supplies an application for consumption with permitted tenant/user settings. These describe abstraction/control, not a hierarchy transferring all risk. Real services combine capabilities; identify the component/agreement before assigning a duty.

**TH:** IaaS ให้ Infrastructure พื้นฐานเพื่อให้ลูกค้ารัน Guest OS/ซอฟต์แวร์ PaaS ให้ Platform แอปและโอนงานบริหารพื้นฐานมากขึ้นแต่ลูกค้ายังดูแลแอป/ข้อมูล ส่วน SaaS ให้แอปพร้อมใช้กับการตั้งค่า Tenant/ผู้ใช้ที่เปิดให้ ทั้งสามอธิบายขอบเขตควบคุม ไม่ใช่ลำดับโอนความเสี่ยงทั้งหมด บริการจริงอาจผสมความสามารถ ต้องระบุส่วนประกอบ/ข้อตกลงก่อนแบ่งหน้าที่

**Application / ตัวอย่าง:** Guest-OS maintenance in an ordinary IaaS VM differs from fixing customer code on a managed platform. / การดูแล Guest OS ใน IaaS VM ต่างจากแก้ Code ลูกค้าบน Platform ที่จัดการให้

**Decision/confusion/limits:** Browser access or vendor name alone does not establish the model. NIST lists three; FaaS context is in 021.

### KNOW-D4-019 - Cloud deployment

**Provenance:** COURSE S50-S54/T:L207-L223, A section 18/B section 12 + CORRECTION/qualification F18-F19. **References:** [R16] section 2; [R24] regulatory/workload context.

**EN:** Public cloud is provisioned for open public use, not public reading of every customer's data. Private cloud is for exclusive organizational use, on/off premises and organization/third-party operated. Community cloud serves organizations with shared concerns under a specific community arrangement. Hybrid combines distinct cloud infrastructures, such as private/community/public, with integration enabling data/application portability while retaining distinct environments. Public plus private is a common case, not the only definition. A deployment or industry label does not prove security/compliance.

**TH:** Public Cloud เปิดบริการให้ประชาชนทั่วไปใช้ ไม่ได้เปิดข้อมูลลูกค้าทุกราย Private Cloud ให้ใช้งานเฉพาะองค์กร อยู่ภายใน/ภายนอกและดูแลโดยองค์กร/บุคคลที่สามได้ Community Cloud ให้กลุ่มองค์กรที่มีประเด็นร่วมตามขอบเขตชุมชน Hybrid รวม Cloud ที่ต่างกัน เช่น Private/Community/Public โดยเชื่อมให้ข้อมูล/แอปเคลื่อนย้ายได้และยังคงแต่ละสภาพแวดล้อม Public กับ Private เป็นกรณีที่พบบ่อย ไม่ใช่นิยามเดียว ชื่อ Deployment หรืออุตสาหกรรมไม่ยืนยันความปลอดภัย/การปฏิบัติตามข้อกำหนด

**Application / ตัวอย่าง:** Exclusive use, shared community governance and integrated portability are different selection requirements. / การใช้เฉพาะองค์กร การกำกับร่วมในชุมชน และการย้ายงานร่วมกัน เป็นความต้องการเลือกที่ต่างกัน

**Decision/confusion/limits:** Hosted virtualization is not necessarily cloud without its properties. Logos do not prove classification; no universal cost ranking/legal prohibition is taught.

### KNOW-D4-020 - Shared security and configuration

**Provenance:** COURSE S45-S49/T:L193-L205, A section 17/B section 11 + CORRECTION/qualification F16; SUP-D4-07. **References:** [R22]-[R26].

**EN:** Identify service/component, control owner, settings and agreement. Public-cloud providers operate underlying infrastructure; customers retain duties for controlled data, identities, access and configuration. Guest OS, application/platform duties vary. Shared workflows combine mechanisms and policy without necessarily equal effort. Default encryption may already apply, but cannot fix inappropriate sharing. Supported managed runtime maintenance differs from customer code/dependencies and container rebuild obligations.

**TH:** ระบุบริการ/ส่วนประกอบ ผู้รับผิดชอบ การตั้งค่าและข้อตกลง ผู้ให้บริการ Public Cloud ดูแล Infrastructure พื้นฐาน ลูกค้ายังมีหน้าที่ต่อข้อมูล ตัวตน สิทธิ์และการตั้งค่าที่ตนควบคุม หน้าที่ Guest OS แอป/Platform ต่างกัน งานร่วมผสมกลไกกับนโยบายโดยไม่จำเป็นต้องแบ่งเท่ากัน การเข้ารหัสอาจเปิดโดยปริยายแต่ไม่แก้การแชร์ผิด การดูแล Managed Runtime ที่รองรับต่างจาก Code/Dependency และการสร้าง Container ใหม่ของลูกค้า

**Application / ตัวอย่าง:** Correct customer-controlled public sharing rather than assume provider-managed storage secures every access; see SUP-D4-07. / แก้กฎแชร์ที่ลูกค้าควบคุม ไม่สรุปว่า Storage ที่ผู้ให้บริการดูแลทำให้สิทธิ์ทั้งหมดปลอดภัย

**Decision/confusion/limits:** Generic charts are not contracts. Do not generalize provider defaults to every service/old object or equate governance duty with a legal liability conclusion.

### KNOW-D4-021 - FaaS and multi-cloud context

**Provenance:** COURSE S44/S46/S49/S55, T:L191-L203,L223-L225 + qualification F17-F18/F20. **References:** [R24] workloads/FaaS; [R26]-[R28]; [R16] taxonomy.

**EN:** FaaS runs event-triggered functions with server management abstracted; customer code, dependencies, access and some runtime lifecycle duties remain. Billing depends on service/plan, not universally execution duration. Multi-cloud means multiple providers in this course's usage; it can overlap hybrid and is not NIST's fifth deployment model. Resilience/portability benefits need designed dependencies, data handling and tested recovery, not provider count alone.

**TH:** FaaS รัน Function ตาม Event โดยซ่อนงานบริหาร Server แต่ลูกค้ายังดูแล Code, Dependency, สิทธิ์และงาน Runtime บางส่วน ค่าใช้จ่ายขึ้นกับบริการ/Plan ไม่ใช่เวลารันอย่างเดียว Multi-cloud ในบทเรียนคือใช้หลายผู้ให้บริการ ซ้อนกับ Hybrid ได้และไม่ใช่ Deployment แบบที่ห้าของ NIST ประโยชน์ด้านความทนทาน/เคลื่อนย้ายต้องออกแบบความพึ่งพา ข้อมูลและทดสอบกู้คืน ไม่ใช่นับผู้ให้บริการ

**Application / ตัวอย่าง:** A broad function data role remains a risk; two unrelated providers do not establish failover. / บทบาทข้อมูลกว้างของ Function ยังเป็นความเสี่ยง และสองผู้ให้บริการที่ไม่เชื่อมกันไม่ยืนยัน Failover

**Decision/confusion/limits:** Serverless is not no server/no duty. Tariffs, product choice and advanced multi-cloud architecture are outside accepted assessment dependencies.

## Separate official AI context for existing 4.1-4.3

R02 applies existing foundations; it does not add a fourth numbered objective. SUP-D4-08 is the expanded bilingual teaching unit. The three records below support network, architecture and cloud traceability without adding advanced AI engineering.

### KNOW-D4-022 - AI-aware network monitoring

**Official mapping:** 4.1 context. **Provenance:** SUPPLEMENT; local course only names provider-use examples. **References:** [R02] Domain 4 AI commentary; [R32] 2.2/2.3; SUP-D4-03/08.

**EN:** Learning-assisted defenses can identify unusual behavior beyond known signatures, including relevant wireless/embedded traffic. Staff assess observed paths, expected activity and visibility, then monitor/report under procedure. False positives/negatives remain. An anomaly is not a confirmed attack, and not all anomaly detection uses ML.

**TH:** การป้องกันที่ใช้การเรียนรู้อาจตรวจพฤติกรรมผิดปกติเกิน Signature ที่รู้จัก รวมถึงทราฟฟิก Wireless/Embedded ที่เกี่ยวข้อง เจ้าหน้าที่ต้องพิจารณาเส้นทาง งานที่คาดหมายกับการมองเห็น แล้วติดตาม/รายงานตามขั้นตอน ยังแจ้งผิดหรือพลาดได้ Anomaly ไม่ยืนยันการโจมตี และไม่ใช่ทุกการตรวจ Anomaly ใช้ ML

**Application / ตัวอย่าง:** Report an unusual development transfer with observed context; no automatic destructive response follows. / รายงานการส่งข้อมูลของงานพัฒนาที่ผิดปกติพร้อมบริบท ไม่สรุปว่าต้องตอบโต้แบบทำลายทันที

**Decision/confusion/limits:** AI does not replace authorization or prove every advertised capability. Training algorithms and advanced model threats are excluded.

### KNOW-D4-023 - AI development and production boundaries

**Official mapping:** 4.2 context. **Provenance:** SUPPLEMENT. **References:** [R02] Domain 4 AI commentary; [R15] 2.1/3.1.2; SUP-D4-05/08.

**EN:** Apply zone/workload controls to separate development from sensitive production resources and protect valuable data paths. Permit approved communication and resource access with identity/device checks, enforcement and monitoring. A valid development identity does not confer unrestricted production entitlement.

**TH:** ใช้มาตรการ Zone/Workload แยกงานพัฒนาจากทรัพยากร Production สำคัญและปกป้องเส้นทางข้อมูล อนุญาตเฉพาะการสื่อสาร/ทรัพยากรที่อนุมัติพร้อมตรวจตัวตน/อุปกรณ์ บังคับใช้และติดตาม ตัวตนฝั่งพัฒนาที่ถูกต้องไม่ได้มีสิทธิ์ Production ทุกอย่าง

**Application / ตัวอย่าง:** Scope a training/development job to approved input/destinations, not the entire production network. / จำกัดงาน Training/พัฒนาให้ใช้ข้อมูลต้นทางและปลายทางที่อนุมัติ ไม่เปิดทั้งเครือข่าย Production

**Decision/confusion/limits:** This applies ordinary containment/authorization; no specialized training-pipeline design is required.

### KNOW-D4-024 - AI cloud workload duties

**Official mapping:** 4.3 context. **Provenance:** SUPPLEMENT. **References:** [R02] Domain 4 AI commentary; [R16]; [R22]-[R24]; SUP-D4-07/08.

**EN:** Scaling/pooled AI resources use foundational cloud properties and service/deployment distinctions. Allocate duties for the actual service and customer-controlled data, identity, code/configuration and resource access. A managed AI feature does not transfer all security duties; deployment labels do not establish appropriate access.

**TH:** ทรัพยากร AI ที่ขยายกำลัง/ใช้ร่วมยังใช้คุณลักษณะและรูปแบบ Cloud พื้นฐาน ต้องแบ่งหน้าที่ตามบริการจริงกับข้อมูล ตัวตน Code/การตั้งค่าและสิทธิ์ที่ลูกค้าควบคุม การมี AI แบบ Managed ไม่โอนทุกหน้าที่ และชื่อ Deployment ไม่ยืนยันว่าสิทธิ์เหมาะสม

**Application / ตัวอย่าง:** A managed development service still requires approved dataset access/sharing. / บริการพัฒนาแบบ Managed ยังต้องกำหนดสิทธิ์ชุดข้อมูลและการแชร์ที่อนุมัติ

**Decision/confusion/limits:** No broad generative-AI threat syllabus, agent engineering, GPU/cloud design or vendor AI ownership matrix is added.

## Remaining uncertainties and review boundary

Every numbered scope area and bounded official AI application has teachable records; the reassessment explains why each was accepted. Original source coverage remains Partial. F02/F10 exclusions, speaker attribution and original-media completeness remain unresolved. Version-specific product behavior, legal suitability and exact cost/performance claims are outside accepted dependencies and require separate research if introduced later.

The assistant compared English/Thai actors, obligations, conditions, negation and limitations; retained acronyms reduce ambiguity. This is not independent human sign-off. Subsequent questions require a separate authorized task, independent solution/distractor/duplicate review and bilingual approval. No question exists merely because a knowledge entry is usable.

[R01]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r01
[R02]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r02
[R03]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r03
[R04]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r04
[R05]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r05
[R06]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r06
[R07]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r07
[R08]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r08
[R09]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r09
[R10]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r10
[R11]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r11
[R12]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r12
[R13]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r13
[R14]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r14
[R15]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r15
[R16]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r16
[R17]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r17
[R18]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r18
[R19]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r19
[R20]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r20
[R21]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r21
[R22]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r22
[R23]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r23
[R24]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r24
[R25]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r25
[R26]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r26
[R27]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r27
[R28]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r28
[R29]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r29
[R30]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r30
[R31]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r31
[R32]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r32
[R33]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r33

[R34]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r34
[R35]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r35
[R36]: ../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md#r36
