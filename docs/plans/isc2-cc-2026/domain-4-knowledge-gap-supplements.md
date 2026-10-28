# Domain 4 - Bilingual Knowledge Gap Supplements

Task 56 | Verified 2026-10-28 (Asia/Bangkok) | Assistant academic and EN/TH meaning review; independent human sign-off pending.

These are supplementary teaching units for G01-G06 in the [resolution register](domain-4-findings-resolution-register.md). They are not attributed to the original course. The [knowledge base](../../../content/isc2-cc-2026/knowledge/domain-4.md) links them as expanded instruction; the [blueprint](domain-4-question-development-blueprint.md) identifies later assessment decisions. R IDs link to the register's source titles, URLs, observed sections, limitations and verification date. Examples below are teaching situations, not question stems, options or keys. Scope mapping uses the official dated outline; no new objective numbers are invented.

## SUP-D4-01 - Bluetooth security foundations

**Official mapping:** 4.1, wireless example Bluetooth. **Knowledge:** KNOW-D4-009. **Gap:** G01; substantive teaching missing from A:L32/S26.

**English:** Bluetooth connects nearby devices for functions such as peripherals and sensor communication. Discovering a device, establishing pairing keys, encrypting a connection and deciding which service is authorized are related but different operations. Pair only with the intended, approved peer; verify displayed comparison information when the supported method requires it. Enable appropriate authenticated pairing/encryption, limit unnecessary discovery/services, maintain supported software and remove obsolete pairings. Turning the radio off when not needed reduces exposure where operational policy permits.

**ไทย:** Bluetooth ใช้เชื่อมต่ออุปกรณ์ใกล้เคียง เช่น อุปกรณ์ต่อพ่วงและเซนเซอร์ การค้นพบอุปกรณ์ การจับคู่เพื่อสร้างกุญแจ การเข้ารหัสการเชื่อมต่อ และการอนุญาตให้ใช้บริการเป็นคนละหน้าที่กัน ควรจับคู่กับอุปกรณ์ที่ได้รับอนุมัติและเป็นอุปกรณ์ที่ต้องการจริง ตรวจสอบค่าที่แสดงเปรียบเทียบเมื่อวิธีจับคู่รองรับ ใช้การจับคู่ที่ยืนยันตัวตนและการเข้ารหัสอย่างเหมาะสม ลดการเปิดให้ค้นพบหรือบริการที่ไม่จำเป็น อัปเดตซอฟต์แวร์ที่ยังได้รับการสนับสนุน และลบการจับคู่ที่หมดความจำเป็น หากนโยบายและการใช้งานอนุญาต การปิดวิทยุเมื่อไม่ใช้ช่วยลดช่องทางโจมตี

**Technical limits / ข้อจำกัด:** Pairing does not automatically authenticate a human or grant every application permission. In the NIST-described Just Works methods, pairing lacks MITM protection; encrypted does not necessarily mean authenticated pairing. Discovery controls are not encryption and short range is not a guarantee that interception is impossible. Device/version/association capabilities determine available protection. NIST's cited edition covers versions through 4.2; later-version implementation claims require the relevant SIG specification. / การจับคู่ไม่ได้ยืนยันบุคคลหรือให้สิทธิ์ทุกแอปโดยอัตโนมัติ วิธี Just Works ที่ NIST อธิบายไม่มีการป้องกัน MITM ระหว่างการจับคู่ ต้องแยกการเข้ารหัสจากการยืนยันตัวตน และพิจารณารุ่นกับความสามารถของอุปกรณ์

**Practical example / ตัวอย่าง:** An organization approves a scanner for a managed workstation. Staff verify the intended scanner during pairing and retire its pairing when replaced; a familiar device name alone is insufficient identity assurance. / องค์กรอนุมัติเครื่องสแกนสำหรับเครื่องทำงานที่บริหารจัดการ เจ้าหน้าที่ตรวจสอบอุปกรณ์จริงขณะจับคู่และถอนการจับคู่เมื่อเปลี่ยนเครื่อง ชื่ออุปกรณ์ที่คุ้นเคยเพียงอย่างเดียวไม่พอยืนยันตัวตน

**Misconceptions / ความเข้าใจผิด:** Nearby means trusted; paired means every service authorized; all Bluetooth versions/methods have identical security. / อยู่ใกล้จึงเชื่อถือได้ จับคู่แล้วจึงใช้ได้ทุกบริการ หรือทุกรุ่นปลอดภัยเหมือนกัน ล้วนเป็นข้อสรุปที่ไม่ถูกต้อง

**Examination relevance:** Differentiate connection/protection/access and select bounded exposure controls at foundational level; do not memorize attack-name catalogs or radio internals. **References:** [R29] section 3.2.2.4 and 4.4; [R30] Security in specifications/security education. **Verification:** High for these bounded principles; later-version details excluded.

## SUP-D4-02 - Wi-Fi authentication, encryption and misleading shortcuts

**Official mapping:** 4.1, wireless example Wi-Fi. **Knowledge:** KNOW-D4-008. **Gap:** G04; F09-F10.

**English:** Wireless protection requires an approved network and supported authentication/encryption, rather than merely a visible or hidden network name. WPA2/WPA3 describe security capabilities and modes, not speed generations. Use a supported strong mode and credentials consistent with organizational policy; keep clients/access points updated. Enterprise identity-based authentication can differ from a shared-password personal network; the label alone does not establish the actual authentication configuration. Validate an intended access point or service through approved configuration rather than trusting an SSID string.

**ไทย:** การป้องกัน Wi-Fi ต้องใช้เครือข่ายที่ได้รับอนุมัติและวิธียืนยันตัวตนกับการเข้ารหัสที่อุปกรณ์รองรับ ไม่ใช่พิจารณาเพียงชื่อเครือข่ายที่มองเห็นหรือซ่อนไว้ WPA2/WPA3 เกี่ยวข้องกับความสามารถและโหมดความปลอดภัย ไม่ใช่รุ่นความเร็ว เลือกโหมดที่ปลอดภัยและรองรับพร้อมข้อมูลยืนยันตัวตนตามนโยบาย อัปเดตเครื่องลูกข่ายและ Access Point การยืนยันตัวตนแบบองค์กรอาจต่างจากเครือข่าย Personal ที่ใช้รหัสผ่านร่วมกัน ชื่อโหมดอย่างเดียวไม่ได้บอกการตั้งค่าจริง และไม่ควรเชื่อถือ Access Point เพียงเพราะใช้ SSID ที่คุ้นเคย

**Technical limits / ข้อจำกัด:** WPA3 is not invulnerability. Transitional configurations may permit older clients with different protection. Hidden SSIDs remain detectable; MAC addresses can be observed/copied, so hiding/filtering is not a replacement for authentication/encryption. Wi-Fi generation and theoretical rate do not prove secure configuration or achieved throughput. / WPA3 ไม่รับประกันว่าถูกโจมตีไม่ได้ โหมดรองรับอุปกรณ์เก่าอาจให้การป้องกันต่างกัน การซ่อน SSID และกรอง MAC ไม่ทดแทนการยืนยันตัวตนหรือการเข้ารหัส และรุ่นความเร็วไม่ใช่หลักฐานความปลอดภัย

**Practical example / ตัวอย่าง:** A legacy approved device cannot use a new wireless mode. The organization reviews supported compatibility or a restricted separate network instead of disabling protection for every workstation. / เมื่ออุปกรณ์เก่าที่อนุมัติไม่รองรับโหมดใหม่ องค์กรพิจารณาความเข้ากันได้หรือเครือข่ายแยกที่จำกัดสิทธิ์ แทนการปิดการป้องกันของทุกเครื่อง

**Misconceptions / ความเข้าใจผิด:** Hidden means private; MAC filtering authenticates a user; Wi-Fi 6 means WPA3 is configured; WPA3 needs no updates. / การซ่อนชื่อไม่ได้ทำให้เครือข่ายเป็นส่วนตัว การกรอง MAC ไม่ได้ยืนยันผู้ใช้ และรุ่น Wi-Fi ไม่ยืนยันว่าเปิด WPA3 หรือไม่ต้องอัปเดต

**Examination relevance:** Judge protections and compatibility under explicit constraints; exact Wi-Fi rates are excluded. **References:** [R17] Security/Hidden network/MAC filtering/updates; [R14] wireless integration and firewall limitations; [R18] publication context only. **Verification:** High for bounded configuration limits. No enterprise EAP/certificate deployment procedure is asserted here.

## SUP-D4-03 - Firewall policy, state and detection interpretation

**Official mapping:** 4.1 firewalls, ports/applications; supports 4.2. **Knowledge:** KNOW-D4-006-007,022. **Gap:** G03.

**English:** A packet filter evaluates fields such as source, destination, transport and ports. A stateful firewall additionally tracks permitted communication; a reply matching established state differs from a new unsolicited initiation. Application-aware inspection can recognize protocol behavior beyond a port label, subject to product capability and visibility. IDS detects/reporting functions differ from an IPS's configured prevention. Neither a permitted flow nor an alert proves that content is benign or malicious. An anomaly identifies deviation from a baseline; planned changes and attacks can both cause deviations.

**ไทย:** Packet Filter ประเมินข้อมูล เช่น ต้นทาง ปลายทาง Transport และ Port ส่วน Stateful Firewall ติดตามสถานะการสื่อสารที่อนุญาตด้วย จึงแยกข้อมูลตอบกลับของการเชื่อมต่อจากการเริ่มเชื่อมต่อใหม่ที่ไม่ได้ร้องขอได้ การตรวจสอบระดับแอปช่วยพิจารณาพฤติกรรมเกินกว่าหมายเลข Port แต่ขึ้นอยู่กับความสามารถและการมองเห็นของอุปกรณ์ IDS เน้นตรวจจับและรายงาน ส่วน IPS อาจป้องกันตามการตั้งค่า ทั้งทราฟฟิกที่อนุญาตและการแจ้งเตือนไม่ได้พิสูจน์ว่าเนื้อหาปลอดภัยหรือเป็นอันตราย ความผิดปกติจากค่าฐานอาจเกิดจากการเปลี่ยนงานที่ถูกต้องหรือการโจมตีก็ได้

**Technical limits / ข้อจำกัด:** TCP state and UDP tracking differ; stateless ACLs may need explicit reverse-flow treatment. Encrypted content can limit inspection without a separately authorized inspection design. Default deny and rule order/priority semantics must be stated when interpreting a particular policy. / การติดตาม UDP ต่างจากสถานะ TCP และ ACL แบบไม่ติดตามสถานะอาจต้องกำหนดทางตอบกลับ การเข้ารหัสอาจจำกัดสิ่งที่ตรวจได้ ต้องระบุนโยบายเริ่มต้นกับลำดับความสำคัญของกฎก่อนตีความ

**Practical example / ตัวอย่าง:** In a stated stateful policy, a client initiates HTTPS to an approved web server; established replies are permitted, while unrelated inbound database initiations remain denied. Opening every inbound high-numbered port is not implied. / ในนโยบาย Stateful ที่ระบุไว้ ลูกข่ายเริ่ม HTTPS ไปยังเว็บเซิร์ฟเวอร์ที่อนุมัติและรับข้อมูลตอบกลับได้ แต่คำขอเริ่มเชื่อมฐานข้อมูลจากภายนอกยังถูกปฏิเสธ ไม่ได้หมายความว่าต้องเปิด Port หมายเลขสูงทั้งหมดขาเข้า

**Misconceptions / ความเข้าใจผิด:** Port 443 proves legitimate HTTPS; a stateful firewall validates all application authorization; an alert proves compromise; every anomaly uses machine learning. / เลข Port ไม่ยืนยันตัวแอป Firewall ไม่ยืนยันสิทธิ์ทุกคำขอของแอป และการแจ้งเตือนหรือ Anomaly ไม่ใช่หลักฐานยืนยันการบุกรุกหรือการใช้ ML เสมอไป

**Examination relevance:** Interpret a small flow/policy/alert using specified state and visibility, and report within authority. **References:** [R14] 2.1.1-2.1.3/4/5.3; [R08] registry warning; [R32] 2.2/2.3. **Verification:** High. No vendor rule syntax, universal rule ordering or incident-response sequence is taught.

## SUP-D4-04 - IPv6 protection and coexistence

**Official mapping:** 4.1 IPv4/IPv6 concepts. **Knowledge:** KNOW-D4-003-004. **Gap:** G04; F03-F05.

**English:** IPv4 uses 32-bit addresses; IPv6 uses 128-bit addresses. Larger space changes allocation pressure, not the need to protect systems. A device's IPsec support does not establish that a particular connection uses authenticated encryption. Apply authorized filtering/monitoring to enabled IPv4 and IPv6 paths. In a dual-stack system both protocol implementations coexist; IPv6-only and IPv4-only endpoints may need a translation or other designed interoperability path.

**ไทย:** IPv4 ใช้ที่อยู่ขนาด 32 บิต ส่วน IPv6 ใช้ 128 บิต พื้นที่ที่อยู่มากขึ้นช่วยลดแรงกดดันด้านจำนวนที่อยู่ แต่ไม่ได้ทำให้ระบบปลอดภัยเอง การรองรับ IPsec ของอุปกรณ์ไม่ยืนยันว่าการเชื่อมต่อหนึ่งใช้การยืนยันตัวตนและเข้ารหัสจริง ต้องกำหนดการกรองและติดตามเส้นทาง IPv4/IPv6 ที่เปิดใช้งาน ระบบ Dual Stack มีทั้งสองชุด Protocol ส่วนปลายทางที่รองรับเฉพาะคนละรุ่นอาจต้องมีการแปลหรือเส้นทางทำงานร่วมกันที่ออกแบบไว้

**Technical limits / ข้อจำกัด:** Eight 16-bit pieces describe the full ordinary hexadecimal representation; `::` compression can hide zero groups. NAT64 is a coexistence counterexample to a blanket no-translation claim, not a requirement for every IPv6 network. Do not disable an address family or change production routing without design/authority. / การเขียนเต็มมีแปดกลุ่มขนาด 16 บิต แต่การย่ออาจแสดงน้อยกว่า NAT64 เป็นตัวอย่างการทำงานร่วมกัน ไม่ใช่สิ่งที่ทุกเครือข่ายต้องใช้ และการเปลี่ยนระบบจริงต้องผ่านการออกแบบกับอำนาจอนุมัติ

**Practical example / ตัวอย่าง:** A server's IPv4 restrictions are reviewed, but an enabled IPv6 path has different rules. Reviewing both paths closes a policy gap; merely noting a large IPv6 address is not a control. / เซิร์ฟเวอร์มีกฎ IPv4 ที่เข้มงวดแต่เปิด IPv6 ด้วยกฎต่างกัน ต้องทบทวนทั้งสองเส้นทาง ไม่ใช่อาศัยขนาดที่อยู่เป็นมาตรการป้องกัน

**Misconceptions / ความเข้าใจผิด:** IPv6 automatically encrypts traffic; dual stack translates every packet; NAT is encryption. / IPv6 ไม่ได้เข้ารหัสทุกทราฟฟิก Dual Stack ไม่ได้แปลทุก Packet และ NAT ไม่ใช่การเข้ารหัส

**Examination relevance:** Distinguish addressing, coexistence and protection; advanced transition configuration/subnet calculations are excluded. **References:** [R06] 13/13.1; [R07] 2.2; [R10] Abstract/2; [R11] Abstract. **Verification:** High; example policy-gap consequence is a reasoned application.

## SUP-D4-05 - Effective architecture, DMZ and workload boundaries

**Official mapping:** 4.2 segmentation, defense in depth and Zero Trust. **Knowledge:** KNOW-D4-012-016. **Gap:** G05; F11-F15.

**English:** Segmentation groups resources and constrains communication at policy enforcement points. A VLAN separates a Layer 2 broadcast domain; routing can still join VLANs unless access policy restricts it. A DMZ places public-facing services across a controlled boundary from internal resources; either one multi-interface firewall or a design using multiple firewalls can implement boundaries. Micro-segmentation narrows policy toward individual workloads. Zero Trust uses identity/device/resource/context rather than granting access solely by network location. Layered defenses support these goals without proving independent failure or uninterrupted availability.

**ไทย:** Segmentation จัดกลุ่มทรัพยากรและจำกัดการสื่อสารผ่านจุดบังคับใช้นโยบาย VLAN แยก Broadcast Domain ระดับ Layer 2 แต่ Routing ยังเชื่อมข้าม VLAN ได้หากไม่มีนโยบายจำกัด DMZ วางบริการสาธารณะแยกจากทรัพยากรภายในด้วยขอบเขตควบคุม อาจใช้ Firewall หลาย Interface ตัวเดียวหรือหลายตัวตามแบบ Micro-segmentation จำกัดละเอียดถึง Workload ส่วน Zero Trust พิจารณาตัวตน อุปกรณ์ ทรัพยากรและบริบท ไม่ให้สิทธิ์เพียงเพราะอยู่ภายใน การป้องกันหลายชั้นช่วยลดความเสี่ยงแต่ไม่รับประกันความเป็นอิสระจากความล้มเหลวหรือการให้บริการต่อเนื่อง

**Worked teaching policy:** The following is an authored illustration, not a captured course topology. The example explicitly uses stateful enforcement, permits established replies, denies other new flows and does not imply a database port number is universally fixed.

| Initiating source → destination | Permitted purpose | Example policy |
| --- | --- | --- |
| Internet → DMZ web service | Public HTTPS | Permit the approved web endpoint only |
| Internet → internal database | None | Deny new direct connections |
| DMZ web workload → application workload | Approved application call | Permit only the required service |
| Application workload → database | Required database transaction | Permit only the approved database service |
| Guest or camera segment → database | None in this example | Deny |
| Authorized management path → managed hosts | Approved administration | Permit scoped identity/device/service; log and review |

**ไทยสำหรับตัวอย่าง:** ตารางเป็นสถานการณ์ที่เรียบเรียงใหม่เพื่อสอน โดยระบุว่าเป็น Stateful อนุญาตข้อมูลตอบกลับของการเชื่อมต่อที่มีอยู่ และปฏิเสธการเริ่มเชื่อมต่ออื่น ผู้ใช้ภายนอกเข้าถึงเฉพาะเว็บใน DMZ ไม่เชื่อมฐานข้อมูลโดยตรง Web ติดต่อ Application และ Application ติดต่อฐานข้อมูลได้เฉพาะบริการที่จำเป็น Guest/กล้องไม่มีสิทธิ์ฐานข้อมูลในตัวอย่าง ส่วนการบริหารต้องผ่านเส้นทาง ตัวตน อุปกรณ์และบริการที่อนุมัติ

**Technical limits / ข้อจำกัด:** An allowed application path can still carry malicious requests; identity compromise or an overbroad rule can bypass intended containment. Test allowed and denied paths after approved changes. Ordinary VLAN IDs are 1-4094 with additional platform limits. / เส้นทางที่อนุญาตยังอาจมีคำขออันตราย ต้องตรวจทั้งการติดต่อที่ควรได้และควรถูกปฏิเสธหลังเปลี่ยนแปลงตามขั้นตอน และแยกเลข VLAN จากเลข Port

**Misconceptions:** New VLAN alone enforces least privilege; a DMZ needs exactly two appliances; inside means trusted; three defenses equal high availability. / การมี VLAN หรืออุปกรณ์หลายตัวอย่างเดียวไม่ยืนยันสิทธิ์ขั้นต่ำ ความเชื่อถือ หรือความพร้อมใช้งาน

**Examination relevance:** Interpret boundaries and choose enforcement according to the required flow, rather than count devices. **References:** [R12]/[R13]; [R14] 3.1/3.3/4/5.3; [R15] 2.1/3.1.2; [R31] 6.2.1.3. **Verification:** High for principles; table is a bounded educational application, not a universal design.

## SUP-D4-06 - ICS/IoT maintenance and compensating protection

**Official mapping:** 4.1 embedded/ICS/IoT; 4.2 applied segmentation. **Knowledge:** KNOW-D4-010-011. **Gap:** G05.

**English:** Industrial control systems affect physical processes, so safety, predictable operation and availability influence security changes. An update that is routine for a laptop may require vendor validation, testing, a maintenance window and recovery planning in OT. A constrained device still needs managed risk: inventory, approved access paths, monitoring and replacement planning. Where patching cannot safely occur immediately, authorized compensating measures can restrict exposure while the vulnerability remains tracked.

**ไทย:** ICS ควบคุมกระบวนการทางกายภาพ การเปลี่ยนด้านความปลอดภัยจึงต้องคำนึงถึงความปลอดภัยของคน การทำงานที่คาดการณ์ได้ และ Availability การอัปเดตที่ทำได้ตามปกติบน Laptop อาจต้องตรวจความเข้ากันได้กับผู้ผลิต ทดสอบ นัดช่วงบำรุงรักษา และเตรียมกู้คืนใน OT อุปกรณ์ที่มีข้อจำกัดยังต้องจัดการความเสี่ยงผ่านบัญชีทรัพย์สิน เส้นทางเข้าถึงที่อนุมัติ การติดตาม และแผนเปลี่ยนทดแทน หากยัง Patch อย่างปลอดภัยไม่ได้ อาจใช้มาตรการชดเชยที่อนุมัติเพื่อลดการเปิดเผยพร้อมติดตามช่องโหว่ต่อไป

**Technical limits / ข้อจำกัด:** Isolation reduces exposure but does not repair vulnerable firmware. A temporary exception needs ownership and review; this material does not prescribe a universal delay or emergency action sequence. Embedded does not necessarily mean networked; IoT and ICS overlap without being synonyms. / การแยกเครือข่ายไม่ได้แก้ Firmware ที่มีช่องโหว่ ข้อยกเว้นชั่วคราวต้องมีเจ้าของและทบทวน ไม่มีระยะเลื่อนหรือขั้นตอนฉุกเฉินเดียวที่ใช้ได้ทุกระบบ

**Practical example / ตัวอย่าง:** A water-treatment controller cannot restart during an active critical process. Approved maintenance planning and a restricted management gateway reduce risk while testing and a safe update window are arranged. / ตัวควบคุมบำบัดน้ำไม่สามารถ Restart ระหว่างกระบวนการสำคัญ จึงวางแผนบำรุงรักษาที่อนุมัติและจำกัด Gateway สำหรับบริหารระหว่างเตรียมการทดสอบกับช่วงอัปเดตที่ปลอดภัย

**Misconceptions:** Patch every device immediately regardless of safety; never patch ICS; a VLAN removes the underlying vulnerability. / การ Patch ทันทีทุกกรณี การไม่ Patch ICS เลย และการมองว่า VLAN ลบช่องโหว่ เป็นข้อสรุปที่ไม่เหมาะสม

**Examination relevance:** Select risk reduction consistent with authority, safety and operational limits. **References:** [R31] 5.2.5.2/6.2.1.3; [R34] section 2/Table 1 for IoT capabilities; original T:L107-L125/S22-S27. **Verification:** High; no plant-specific engineering procedure is asserted.

## SUP-D4-07 - Cloud responsibility and secure configuration

**Official mapping:** 4.3 service/deployment/shared security models. **Knowledge:** KNOW-D4-018-021,024. **Gap:** G06; F16-F20.

**English:** Identify the service, the component at risk, who can configure it and the applicable agreement before allocating security duties. In ordinary IaaS VM use, the customer manages the guest OS and deployed applications; PaaS transfers more platform management while retaining customer code/data/access duties; SaaS supplies the application while customer identities, sharing and tenant configuration still matter. Provider mechanisms, customer settings and shared workflows can coexist. A provider-managed physical layer does not make data publicly safe to share, and default encryption does not grant appropriate authorization.

**ไทย:** ก่อนแบ่งหน้าที่ให้ระบุบริการ ส่วนประกอบที่เสี่ยง ผู้ที่ควบคุมการตั้งค่า และข้อตกลงที่เกี่ยวข้อง การใช้ VM แบบ IaaS โดยทั่วไปลูกค้าดูแล Guest OS และแอปที่ติดตั้ง PaaS ให้ผู้ให้บริการดูแล Platform มากขึ้น แต่ลูกค้ายังดูแล Code ข้อมูลและสิทธิ์ SaaS ให้แอปพร้อมใช้ แต่ตัวตน การแชร์และการตั้งค่า Tenant ยังสำคัญ กลไกของผู้ให้บริการกับการตั้งค่าลูกค้าและงานร่วมกันอาจอยู่พร้อมกันได้ การดูแล Hardware หรือเข้ารหัสโดยปริยายไม่ทำให้การแชร์ข้อมูลเป็นสาธารณะเหมาะสมโดยอัตโนมัติ

**Technical limits / ข้อจำกัด:** Generic charts cannot determine all network, key-management or runtime duties. AWS's documented S3 new-upload encryption and Lambda container update obligations are counterexamples to universal enable-encryption/provider-patches-every-runtime assumptions. They are provider examples, not duties of every cloud. Private-cloud ownership and contracts can differ. / ตารางทั่วไปตัดสินหน้าที่ทุกส่วนไม่ได้ ตัวอย่าง S3 และ Lambda ใช้หักล้างข้อสรุปเหมารวม ไม่ใช่กฎของทุก Cloud และ Private Cloud อาจมีผู้ดูแลตามข้อตกลงต่างกัน

**Practical example / ตัวอย่าง:** A managed application exposes a customer-configured storage dataset through an overly broad role. The organization corrects the role and reviews effective access; reclassifying the deployment as private does not by itself fix the permission. / แอปแบบจัดการสำเร็จเปิดข้อมูลผ่านบทบาทที่ลูกค้ากำหนดกว้างเกินไป องค์กรต้องแก้บทบาทและตรวจสิทธิ์จริง การเรียก Deployment ว่า Private ไม่ได้แก้สิทธิ์นั้นเอง

**Misconceptions:** SaaS transfers all security; public cloud means public-readable data; private cloud guarantees compliance; provider encryption removes key/access decisions. / SaaS ไม่ได้โอนทุกหน้าที่ Public ไม่ได้แปลว่าข้อมูลเปิดให้อ่าน และ Private หรือการเข้ารหัสไม่รับประกันการปฏิบัติตามข้อกำหนด

**Examination relevance:** Allocate an explicit control duty and distinguish service abstraction from deployment/exclusivity. **References:** [R16] section 2; [R22]-[R26] cited catalog headings. **Verification:** High at the bounded conceptual level; service/contract details must be refreshed for implementation-specific scenarios.

## SUP-D4-08 - Official AI networking and cloud context

**Official mapping:** Existing 4.1-4.3 through the ISC2 webpage's separate Domain 4 AI commentary. **Knowledge:** KNOW-D4-022-024. **Gap:** G02. **No new numbered objective or mandatory ML engineering syllabus.**

**English:** Apply familiar network concepts to the paths carrying AI-related data. The official commentary discusses AI-aware monitoring/defenses, unusual traffic in wireless/embedded settings, separation of AI development from sensitive production resources, layered controls/Zero Trust, and cloud characteristics/models/responsibilities. Foundational staff recognize and report suspicious network behavior within their role. Learning-based detection can complement signatures; an anomaly is a reason to assess context, not proof of an attack. Segmentation restricts permitted development-to-production paths, while resource authorization still protects the data itself.

**ไทย:** ใช้แนวคิดเครือข่ายเดิมกับเส้นทางรับส่งข้อมูลที่เกี่ยวข้องกับ AI คำอธิบายทางการกล่าวถึงการติดตามและป้องกันที่ใช้ AI พฤติกรรมทราฟฟิกผิดปกติใน Wireless/Embedded การแยกสภาพแวดล้อมพัฒนา AI ออกจากระบบ Production ที่มีข้อมูลสำคัญ การป้องกันหลายชั้นและ Zero Trust รวมถึงคุณลักษณะ รูปแบบและหน้าที่ด้าน Cloud บุคลากรระดับพื้นฐานควรสังเกตและรายงานตามบทบาท การตรวจแบบเรียนรู้ช่วยเสริม Signature แต่ความผิดปกติเป็นเหตุให้ตรวจบริบท ไม่ใช่หลักฐานยืนยันการโจมตี Segmentation จำกัดเส้นทางที่อนุญาต และยังต้องมีสิทธิ์เข้าถึงข้อมูลที่เหมาะสม

**Technical limits / ข้อจำกัด:** Not every anomaly detector uses ML, and not every AI product offers every claimed feature. False positives/negatives and limited visibility remain. Use provider-specific responsibility for an AI workload's data, identities, code/configuration and service components. No training algorithms, GPU architecture, model attacks, autonomous response requirement or universal product capability is added. / ไม่ใช่ทุก Anomaly Detector ใช้ ML และยังมีการแจ้งผิดหรือพลาด ต้องระบุหน้าที่ตามบริการจริง โดยไม่เพิ่มการเรียนอัลกอริทึม Training หรือข้อกำหนดให้ระบบตอบโต้เอง

**Practical example / ตัวอย่าง:** A development job produces an unusual transfer toward a production dataset. Staff preserve/report the observed flow and check authorized paths under procedure; a valid development identity does not imply unrestricted production access. The provider's infrastructure protection does not set that customer's data-access policy. / งานพัฒนาส่งข้อมูลผิดปกติไปยังชุดข้อมูล Production เจ้าหน้าที่เก็บและรายงานสิ่งที่พบตามขั้นตอน พร้อมตรวจเส้นทางที่อนุญาต ตัวตนฝั่งพัฒนาที่ถูกต้องไม่ได้มีสิทธิ์ Production ทุกอย่าง และการป้องกัน Infrastructure ของผู้ให้บริการไม่ได้กำหนดนโยบายข้อมูลแทนลูกค้า

**Misconceptions:** AI alert equals confirmed compromise; segmentation makes authorization unnecessary; an AI service transfers all security duties. / การแจ้งเตือน AI ไม่ยืนยันการบุกรุก Segmentation ไม่ทดแทน Authorization และการใช้บริการ AI ไม่ได้โอนหน้าที่ทั้งหมด

**Examination relevance:** Apply network monitoring, isolation and cloud-duty principles to the official AI context without testing advanced engineering. **References:** [R02] Domain 4 AI commentary; [R32] 2.2/2.3; [R15] 2.1/3.1.2; [R22]-[R24]. **Verification:** High for the stated scope and foundational limits; example is an authored application, not an ISC2 exam item.

## Review and authoring boundary

English/Thai passages were compared for actors, obligations, negation, conditional language and limitations. Technical acronyms are retained to reduce translation ambiguity. This assistant review is distinct from independent human academic/bilingual approval. No version-specific Bluetooth implementation, provider tariff, exact radio rate or unresolved F02/F10 claim is an accepted assessment dependency. All supplements are documentation-only and generate neither practice questions nor vocabulary entries.

[R02]: domain-4-findings-resolution-register.md#r02
[R06]: domain-4-findings-resolution-register.md#r06
[R07]: domain-4-findings-resolution-register.md#r07
[R08]: domain-4-findings-resolution-register.md#r08
[R10]: domain-4-findings-resolution-register.md#r10
[R11]: domain-4-findings-resolution-register.md#r11
[R12]: domain-4-findings-resolution-register.md#r12
[R13]: domain-4-findings-resolution-register.md#r13
[R14]: domain-4-findings-resolution-register.md#r14
[R15]: domain-4-findings-resolution-register.md#r15
[R16]: domain-4-findings-resolution-register.md#r16
[R17]: domain-4-findings-resolution-register.md#r17
[R18]: domain-4-findings-resolution-register.md#r18
[R22]: domain-4-findings-resolution-register.md#r22
[R23]: domain-4-findings-resolution-register.md#r23
[R24]: domain-4-findings-resolution-register.md#r24
[R25]: domain-4-findings-resolution-register.md#r25
[R26]: domain-4-findings-resolution-register.md#r26
[R29]: domain-4-findings-resolution-register.md#r29
[R30]: domain-4-findings-resolution-register.md#r30
[R31]: domain-4-findings-resolution-register.md#r31
[R32]: domain-4-findings-resolution-register.md#r32

[R34]: domain-4-findings-resolution-register.md#r34
