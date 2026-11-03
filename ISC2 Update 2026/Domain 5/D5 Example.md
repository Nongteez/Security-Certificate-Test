# ISC2 CC 2026 — Domain 5 COMPLETE MASTER STUDY GUIDE (ภาษาไทย)

> **ฉบับรวมเนื้อหาที่เรียน + เนื้อหาเสริมเชิงลึกทุกหัวข้อ**  
> **วิธีใช้:** อ่านส่วน A เพื่อทบทวนบทเรียนเดิมอย่างครบถ้วน แล้วอ่านส่วน B เพื่อเข้าใจรายละเอียดเชิงปฏิบัติและความเชื่อมโยง พร้อมฝึกโจทย์ส่วน C  
> **ป้ายกำกับแหล่งที่มา:** `[บทเรียน]` คือการสรุปสาระที่มีในบทสนทนา/สไลด์ที่ได้อธิบายกัน, `[เสริม]` คือคำอธิบายเชิงวิชาการเพิ่มเติม ไม่ใช่การอ้างว่าอยู่ในสไลด์หรือออกสอบแน่นอน  
> **ข้อจำกัด:** เอกสารนี้ไม่ได้รับรองว่าครอบคลุม Official Exam Outline ทุกข้อหรือเป็นเอกสารทางการของ ISC2; ใช้คู่กับ Outline ฉบับล่าสุด

## สารบัญหลัก
- **ส่วน A:** เนื้อหาครบจากคู่มือที่เรียนก่อนหน้า (บทที่ 1–18)
- **ส่วน B:** ขยายความลึกทุกกลุ่มเรื่อง (บทที่ 19–36)
- **ส่วน C:** แบบฝึกหัดสถานการณ์ 30 ข้อพร้อมเฉลยและเหตุผล (บทที่ 37)
- **ส่วน D:** Glossary, Checklist และแผนทบทวน (บทที่ 38–40)

---

# ส่วน A — เนื้อหาบทเรียนฉบับละเอียดที่จัดทำไว้ก่อนหน้า

# ISC2 Certified in Cybersecurity (CC) 2026 — Domain 5
## Security Operations & Incident Response — คู่มือทบทวนภาษาไทยฉบับขยาย

> **วัตถุประสงค์:** ใช้ทบทวนเนื้อหาที่เรียนจากสไลด์ในบทสนทนา ตั้งแต่ Cryptography, Security Operations, Incident Response, Asset Protection, Configuration/Change Management, Security Testing จนถึง Social Engineering โดยขยายความด้วยตัวอย่าง เหตุผลในการเลือกคำตอบ และข้อควรระวังในการสอบ
>
> **วิธีอ่าน:** หัวข้อ **[จากสไลด์]** สะท้อนคำศัพท์/ลำดับ/ตัวอย่างที่ปรากฏในสไลด์ที่ส่งมา ส่วน **[อธิบายเสริม]** เป็นการขยายความเพื่อช่วยเข้าใจ ไม่ควรถือเป็นคำพูดตรงจากสไลด์หรือข้อกำหนดของ ISC2 ทุกประการ
>
> **หมายเหตุเรื่องแหล่งข้อมูล:** ภาพสไลด์ในบทสนทนาครอบคลุมรายละเอียด Security Operations, Incident Response, Asset Protection และ Security Testing เป็นหลัก ส่วนหัวข้อ Cryptography ที่ปรากฏในสรุปก่อนหน้าในบทสนทนาถูกเก็บไว้เพื่อให้เอกสารต่อเนื่อง แต่ไม่ได้มีสไลด์ต้นฉบับของแต่ละหัวข้ออยู่ในข้อความที่มองเห็นได้ จึงทำเครื่องหมายว่าเป็น **เนื้อหาเสริมสำหรับทบทวน** ไม่ใช่การถอดความจากสไลด์โดยตรง เอกสาร PDF ที่แนบชื่อ *What’s New for Entry-Level Cybersecurity* เป็นบทความเกี่ยวกับการเปลี่ยนแปลงข้อสอบ CC ปี 2026 ไม่ใช่สไลด์เนื้อหา Domain 5

---

# สารบัญ

1. แนวคิดภาพรวมและวิธีคิดในการสอบ
2. Cryptography และ Data Protection (บททบทวนเสริม)
3. Logging, Monitoring, SIEM และ Security Operations
4. Security Events, Triage, Prioritization และ Correlation
5. Threat Actors, CTI, IOCs และ MITRE ATT&CK
6. Incident Response และ Incident Response Plan
7. Incident Response Exercises
8. Asset Protection และ Asset Lifecycle
9. End of Life (EOL) และ Compensating Controls
10. Configuration Management, Baselines และ Patch Management
11. Change Management และการเปรียบเทียบกับ Configuration Management
12. Security Testing, Red/Blue/Purple Team
13. Vulnerability Scanning, SAST, DAST และ Threat Modeling
14. Physical Penetration Testing และ Social Engineering
15. สถานการณ์บูรณาการแบบ SOC / IR
16. ตารางเปรียบเทียบคำศัพท์ออกสอบ
17. คำถามฝึกคิดพร้อมเฉลยอธิบาย
18. Cheat Sheet ทบทวนก่อนสอบ

---

# 1. ภาพรวม Domain 5 และวิธีคิด

Domain 5 เชื่อมความรู้ด้านความปลอดภัยเข้ากับการปฏิบัติงานจริง: ป้องกันระบบ → เก็บหลักฐานเหตุการณ์ → ตรวจจับความผิดปกติ → วิเคราะห์ → ตอบสนอง → ฟื้นฟู → ปรับปรุงมาตรการและทดสอบซ้ำ

- **Protect:** ใช้ Cryptography, DLP, Antivirus, Secure Configuration, Patch Management
- **Observe:** เก็บ Logs, Monitor ระบบ, ตั้ง Alert, เก็บ Archive
- **Analyze:** ทำ Event Triage, Correlation, ตรวจ IOCs และใช้ Threat Intelligence
- **Respond:** ใช้ IRP เพื่อ Contain, Eradicate, Recover
- **Improve:** Lessons Learned, Exercises, Threat Modeling, Security Testing

**วิธีอ่านโจทย์สถานการณ์:** มองหาคำกริยาในคำถามก่อน เช่น *prevent spread* = Containment, *remove root cause* = Eradication, *restore operations* = Recovery, *review source code* = SAST, *running application* = DAST, *discussion-only exercise* = Tabletop

**หลักคิดที่ใช้ได้หลายข้อ:** การตรวจพบ Alert ยังไม่เท่ากับพิสูจน์ว่าถูกโจมตีสำเร็จ; ต้องวิเคราะห์หลักฐาน ผลกระทบ และบริบทก่อนตัดสินใจ

---

# 2. Cryptography และ Data Protection — บททบทวนเสริม

> ส่วนนี้ขยายจากบทสรุปก่อนหน้าเพื่อความต่อเนื่อง ไม่ได้อ้างว่าเป็นเนื้อหาในภาพสไลด์ที่ส่งมาชุดล่าสุด

## 2.1 เป้าหมายของ Cryptography

Cryptography ใช้เทคนิคทางคณิตศาสตร์เพื่อรักษาความลับของข้อมูล ตรวจสอบความถูกต้อง และยืนยันความเป็นเจ้าของหรือแหล่งที่มา ความสัมพันธ์กับหลักความมั่นคงปลอดภัย:

- **Confidentiality:** ไม่ให้ผู้ไม่มีสิทธิ์อ่านข้อมูล — มักใช้ Encryption
- **Integrity:** ตรวจจับการเปลี่ยนแปลงข้อมูล — ใช้ Hash, MAC หรือ Digital Signature ตามกรณี
- **Authentication:** ตรวจสอบตัวตนหรือที่มาของข้อความ — ใช้กลไกยืนยันตัวตน/ลายเซ็น
- **Non-repudiation:** สนับสนุนหลักฐานการลงนามที่ผูกกับผู้ลงนาม — Digital Signature พร้อมกระบวนการจัดการกุญแจและตัวตนที่เหมาะสม

## 2.2 Encryption: Plaintext → Ciphertext

**Encryption** คือการใช้ Algorithm และ Key เปลี่ยน Plaintext เป็น Ciphertext; **Decryption** คือการใช้ Key ที่เหมาะสมถอดกลับ

**ตัวอย่าง:** Laptop ของบริษัทถูกขโมย หาก Storage ถูกเข้ารหัสอย่างถูกต้องและ Key ไม่รั่ว ผู้ขโมยจะเข้าถึงข้อมูลภายในได้ยากขึ้น

**ข้อควรระวัง:** Encryption ไม่ได้แทน Access Control, Backup หรือการตรวจสอบการแก้ไขข้อมูลทุกกรณี

## 2.3 Symmetric Encryption

ใช้ Secret Key ที่แชร์ร่วมกันสำหรับการเข้ารหัสและถอดรหัส ข้อดีคือมีประสิทธิภาพ เหมาะกับไฟล์ขนาดใหญ่และข้อมูลจำนวนมาก ตัวอย่างอัลกอริทึม **AES** ความท้าทายคือการส่งและเก็บ Secret Key ให้ปลอดภัย

**ตัวอย่าง:** Full-Disk Encryption และการเข้ารหัสข้อมูลระหว่าง Session ที่มีการสร้าง Session Key แล้ว

**จำ:** Symmetric = Same Secret Key + Fast for Bulk Data

## 2.4 Asymmetric Cryptography

ใช้ Key Pair คือ **Public Key** และ **Private Key** สำหรับการเข้ารหัสแบบ Public-Key Encryption ผู้ส่งใช้ Public Key ของผู้รับเพื่อเข้ารหัส ผู้รับใช้ Private Key ของตนถอดรหัส แต่ไม่ใช่ทุก Asymmetric Algorithm จะทำงานแบบเข้ารหัสโดยตรง บางชนิดออกแบบเพื่อ Digital Signatures หรือ Key Agreement

**ตัวอย่าง:** RSA สำหรับบางรูปแบบของ Public-Key Encryption/Signatures; ECDH ใช้เพื่อ Key Agreement

**จำ:** Public Key เผยแพร่ได้ แต่ Private Key ต้องป้องกัน

## 2.5 Hashing

Hash Function แปลง Input ให้เป็น Digest ความยาวคงที่ เช่น SHA-256 ให้ 256 บิต โดยไม่ได้ออกแบบให้ถอดข้อมูลต้นฉบับกลับ

คุณสมบัติสำคัญ:

1. **Deterministic:** ข้อมูลเดิมให้ Hash เดิม
2. **Preimage Resistance:** ยากที่จะย้อนหาข้อมูลจาก Hash
3. **Second-Preimage Resistance:** ยากที่จะหาข้อมูลอื่นที่ให้ Hash เดียวกับข้อมูลที่กำหนด
4. **Collision Resistance:** ยากที่จะหาข้อมูลสองชุดที่ Hash ตรงกัน
5. **Avalanche Effect:** เปลี่ยน Input เล็กน้อยทำให้ Output เปลี่ยนมาก

**ตัวอย่าง:** ดาวน์โหลดไฟล์ติดตั้งแล้วเปรียบเทียบ SHA-256 กับค่าอ้างอิงที่เชื่อถือได้ หากต่างกันแสดงว่าไฟล์ไม่ตรงกับไฟล์อ้างอิง

**ข้อควรระวัง:** Hash ที่ไม่มีการยืนยันแหล่งที่มาไม่สามารถยืนยันผู้ส่งได้ด้วยตัวเอง; การเก็บ Password ควรใช้ Password Hashing เฉพาะทาง เช่น Argon2id, bcrypt, PBKDF2 พร้อม Salt ไม่ใช่ SHA-256 ตรง ๆ

## 2.6 Digital Signature

ผู้ลงนามใช้ Private Key ลงนาม และผู้ตรวจสอบใช้ Public Key ที่สัมพันธ์กันเพื่อตรวจสอบลายเซ็น ช่วยยืนยัน Integrity และผู้ลงนามภายใต้เงื่อนไขที่ระบบ Key/Identity น่าเชื่อถือ ไม่ได้ทำให้ข้อมูลเป็นความลับโดยอัตโนมัติ

**ตัวอย่าง:** ตรวจสอบว่า Software Package ถูกลงนามโดย Publisher ที่เชื่อถือได้และไม่ถูกแก้ไขภายหลัง

## 2.7 HSM — Hardware Security Module

HSM คือ Hardware ที่ออกแบบสำหรับปกป้อง Cryptographic Keys และดำเนินการเข้ารหัส/ลงนามในสภาพแวดล้อมที่ควบคุม เช่น ระบบชำระเงิน, PKI, Enterprise Key Management

**โจทย์จำ:** ถ้าถามถึงการเก็บและใช้งาน Private Keys ใน Hardware ที่ป้องกันการแก้ไขหรือเข้าถึงโดยมิชอบ ให้คิดถึง HSM

## 2.8 เปรียบเทียบรวดเร็ว

| ประเด็น | Encryption | Hashing | Digital Signature |
|---|---|---|---|
| เป้าหมายเด่น | Confidentiality | Integrity Check | Integrity + Origin Authentication |
| ย้อนกลับได้หรือไม่ | ได้ด้วย Key ที่ถูกต้อง | ไม่ได้ออกแบบให้ย้อนกลับ | ไม่ใช่การถอดรหัสข้อความ |
| ตัวอย่าง | AES | SHA-256 | RSA-PSS / ECDSA |
| คำใบ้ข้อสอบ | Hide/read protection | Compare digest | Verify signer |

---

# 3. Logging, Monitoring, SIEM และ Security Operations

## 3.1 Logging vs Monitoring

**[จากสไลด์/สรุปการเรียน]** Logging คือการบันทึกเหตุการณ์; Monitoring คือการติดตามและประเมินสถานะหรือพฤติกรรมจากข้อมูลเหล่านั้น

**ตัวอย่าง:** Firewall Log บันทึกว่าการเชื่อมต่อจาก IP หนึ่งถูก Block เวลา 10:15 น. ระบบ Monitoring ตรวจพบว่า IP เดียวกันพยายามเชื่อมต่อหลายพันครั้งภายในนาทีเดียว

**ความแตกต่างสำคัญ:** มี Log ไม่ได้แปลว่ามีคนตรวจจับความผิดปกติ; Monitoring ที่ดีต้องกำหนดสิ่งที่ต้องเฝ้าดูและเงื่อนไขแจ้งเตือน

## 3.2 แหล่ง Log ที่ควรรู้

- **Authentication Log:** Login success/failure, account lockout
- **Operating System Log:** Service start/stop, system errors, user activities
- **Application Log:** Application errors, transaction failures, authorization events
- **Firewall/Network Log:** Source/Destination IP, Port, Protocol, Allow/Deny
- **Endpoint Security Log:** Malware detection, suspicious process, EDR telemetry
- **Cloud Audit Log:** API calls, administrative actions, identity changes

**อธิบายเสริม:** Log ที่ดีควรมี Timestamp, Source, Event Type, User/Host Identity, Result และ Context ที่จำเป็น โดยต้องป้องกันการแก้ไข Log โดยไม่ได้รับอนุญาตและดูแลเวลาให้สอดคล้องกัน

## 3.3 Log Aggregation

การรวบรวม Log จากหลายแหล่งไปยังส่วนกลางเพื่อให้ค้นหาและวิเคราะห์ข้ามระบบได้ เช่น Firewall + Server + Cloud + Endpoint

**สถานการณ์:** พบ Suspicious Login ที่ VPN; เมื่อรวมกับ Endpoint Logs อาจพบว่ามี Process แปลกเริ่มทำงานทันทีหลัง Login

## 3.4 Alerting

แจ้งเตือนเมื่อเงื่อนไขที่กำหนดตรงกับพฤติกรรมที่ต้องติดตาม เช่น Login Failed 20 ครั้งใน 5 นาที หรือการปิด Antivirus โดยไม่คาดคิด

**ข้อจำกัด:** Alert อาจเป็น False Positive; อย่าเท่ากับ Incident โดยอัตโนมัติ

## 3.5 Reporting

จัดทำรายงานแนวโน้มและผลการดำเนินงาน เช่น รายงาน Security Alerts รายสัปดาห์, Incident Metrics, Compliance Reports

- **Scheduled:** สร้างตามกำหนด
- **On-demand:** สร้างเมื่อมีคำขอ
- **Compliance:** แสดงหลักฐานตามข้อกำหนด

## 3.6 Archiving

เก็บ Logs และ Security Records ไว้ตาม Retention Policy เพื่อการตรวจสอบย้อนหลัง Forensics และ Compliance

**ตัวอย่าง:** พบการโจมตีในเดือนนี้ แต่หลักฐานบ่งชี้ว่าเริ่มเมื่อ 3 เดือนก่อน จึงต้องเรียก Archive มาตรวจสอบ

**ข้อควรระวัง:** ระยะเวลาเก็บต้องขึ้นอยู่กับข้อกำหนดและความจำเป็น ไม่ใช่ยิ่งเก็บนานยิ่งดีเสมอ เพราะมีต้นทุนและความเสี่ยงด้าน Privacy

## 3.7 Agent-Based vs Agentless

**Agent-Based:** ติดตั้ง Software บนอุปกรณ์เป้าหมายเพื่อเก็บข้อมูลเชิงลึก เช่น EDR Agent

**Agentless:** ใช้ Interfaces/Protocols ที่อุปกรณ์มีอยู่ เช่น SNMP, Remote APIs หรือ Remote Management โดยไม่ติดตั้ง Agent เฉพาะ

| ประเด็น | Agent-Based | Agentless |
|---|---|---|
| การติดตั้ง | ต้องติดตั้ง Agent | ไม่ต้องติดตั้ง Agent เฉพาะ |
| ข้อมูลเชิงลึก | มักละเอียดกว่า | ขึ้นกับ Protocol/API |
| ภาระดูแล | ต้องอัปเดต Agent | ต้องจัดการสิทธิ์/Connectivity |
| ตัวอย่าง | EDR | SNMP Monitoring |

## 3.8 SIEM

**SIEM = Security Information and Event Management** รวบรวม Logs และ Security Events วิเคราะห์และเชื่อมโยงเหตุการณ์เพื่อช่วยตรวจจับภัยคุกคาม

**ขั้นตอนทั่วไป:** Sources → Collection/Normalization → Correlation/Analytics → Alert → SOC Investigation

**ตัวอย่าง:** Firewall พบ Connection ผิดปกติ, Identity Provider พบ Login ล้มเหลวต่อเนื่อง, Endpoint พบ PowerShell แปลก ๆ; SIEM เชื่อมโยงว่ากิจกรรมเหล่านี้เกี่ยวข้องกับ User/Host เดียวกัน

**ข้อจำกัด:** SIEM ไม่ใช่เครื่องมือป้องกันทุกอย่างโดยอัตโนมัติ คุณภาพขึ้นกับ Log Sources, Rules, Tuning และ Analyst

## 3.9 Antivirus

ป้องกัน ตรวจจับ และจัดการ Malware โดยอาจใช้ Signature, Heuristic หรือ Behavioral Detection; มี Real-time Scan, Update และ Quarantine

**Quarantine:** แยกไฟล์น่าสงสัยเพื่อจำกัดการทำงาน ไม่เท่ากับพิสูจน์ว่าเครื่องทั้งหมดสะอาด

## 3.10 DLP

**Data Loss Prevention** ใช้ตรวจสอบและควบคุมการรั่วไหลของข้อมูล เช่น ข้อมูลลูกค้า เลขบัตรหรือเอกสารลับ

- **Data at Rest:** ข้อมูลที่จัดเก็บ
- **Data in Motion:** ข้อมูลที่ส่งผ่านเครือข่าย
- **Data in Use:** ข้อมูลที่กำลังถูกใช้งาน

**ตัวอย่าง:** ระบบ DLP ตรวจพบการส่ง Spreadsheet ที่มี PII ไปยัง Email ส่วนตัวและบล็อกตาม Policy

## 3.11 SNMP Trap

**Simple Network Management Protocol Trap** คือข้อความแจ้งเหตุการณ์ที่อุปกรณ์ส่งไปยัง Network Management System เช่น Interface Down หรือ Hardware Failure

**จำ:** Trap = Device sends an unsolicited notification; การ Poll = Management System สอบถามสถานะตามรอบ

---

# 4. Security Events, Triage, Prioritization และ Correlation

## 4.1 Event, Alert, Incident ต่างกันอย่างไร

- **Event:** สิ่งที่เกิดขึ้นและบันทึกได้ เช่น User Login
- **Alert:** ระบบส่งสัญญาณว่า Event/Pattern อาจน่าสงสัย
- **Incident:** เหตุการณ์ที่กระทบหรือคุกคามความมั่นคงปลอดภัยและต้องจัดการตามเกณฑ์ขององค์กร

**ตัวอย่าง:** Login สำเร็จ = Event; Login จาก Location ผิดปกติ = Alert; ตรวจพบว่าผู้โจมตีใช้ Credential ที่ขโมยมาเข้าถึงข้อมูล = Incident

## 4.2 Security Event Triage

Triage คือการคัดกรองและจัดลำดับการตรวจสอบ Security Alerts เพื่อให้ทีมงานใช้ทรัพยากรกับเหตุการณ์ที่มีความเสี่ยงมากก่อน

แนวทางคิด:

1. Alert เกิดจากระบบใด และมีข้อมูลครบหรือไม่
2. มีหลักฐานสนับสนุนว่ากิจกรรมผิดปกติจริงหรือไม่
3. User/Host/Asset สำคัญเพียงใด
4. เหตุการณ์มีขอบเขตแค่ไหน
5. ควร Escalate ให้ Incident Response หรือไม่
6. ต้องเก็บหลักฐานใดก่อนดำเนินการ

## 4.3 True/False Positive และ Negative

| สถานะจริง | ระบบแจ้งเตือน | ผล |
|---|---|---|
| มีภัยคุกคาม | แจ้ง | True Positive |
| ไม่มีภัยคุกคาม | แจ้ง | False Positive |
| มีภัยคุกคาม | ไม่แจ้ง | False Negative |
| ไม่มีภัยคุกคาม | ไม่แจ้ง | True Negative |

**โจทย์:** ระบบแจ้ง Malware แต่ตรวจแล้วเป็นไฟล์ปลอดภัย = False Positive; Malware ทำงานแต่ระบบไม่แจ้ง = False Negative

## 4.4 Prioritization

พิจารณา **Severity, Impact, Likelihood, Business Criticality, Asset Exposure, Urgency** และหลักฐานการโจมตีจริง

**[จากสไลด์]** ตัวอย่าง Risk Matrix P1 ถึง P5:

| Urgency / Impact | High | Medium | Low |
|---|---|---|---|
| High | P1 | P2 | P3 |
| Medium | P2 | P3 | P4 |
| Low | P3 | P4 | P5 |

**อธิบายเสริม:** ตารางเป็นตัวอย่างขององค์กร ไม่ใช่มาตรฐานตายตัวของทุกบริษัท

**ตัวอย่าง:** Suspicious Login บน Production Domain Admin อาจเร่งด่วนกว่าการ Scan Port บน Lab Server

## 4.5 Event Correlation

**[จากสไลด์]** Event Correlation = การวิเคราะห์เหตุการณ์หลายรายการที่เกี่ยวข้องกันเพื่อค้นหา Security Incident ที่มีความหมาย

ตัวอย่างจากสไลด์:

1. Multiple Failed Logins
2. Successful Login
3. Privilege Escalation
4. Access to Sensitive Files
5. **Potential Account Compromise**

**วิเคราะห์ทีละขั้น:** Failed Logins อาจเป็น Password Guessing; Successful Login หลังจากนั้นอาจเป็น Credential Compromise; Privilege Escalation และ Sensitive File Access ทำให้ความเสี่ยงสูงขึ้น แต่ต้องตรวจสอบว่าเป็นกิจกรรมที่ได้รับอนุญาตหรือไม่

**คำใบ้:** Multiple related events + pattern = Event Correlation

## 4.6 ตัวอย่าง Use Cases

- Multiple Failed Logins → Possible Brute-force Attempt
- Impossible Travel → Possible Account Misuse (VPN อาจทำให้ False Positive)
- Privilege Escalation → Possible Abuse of Privileges
- Data Exfiltration → Possible Sensitive Data Theft
- Suspicious PowerShell → Possible Malicious Script Activity
- Malware Detection → Potential Endpoint Compromise

---

# 5. Threat Actors, CTI, IOCs และ MITRE ATT&CK

## 5.1 Threat Actor

**[จากสไลด์]** Threat Actor คือบุคคล กลุ่ม หรือองค์กรที่จงใจดำเนินกิจกรรมอันตรายต่อ Systems, Networks หรือ Data

| Threat Actor | แรงจูงใจทั่วไป | ตัวอย่างเชิงแนวคิด |
|---|---|---|
| Cybercriminals | Financial Gain | Ransomware เพื่อเรียกเงิน |
| Nation-State Actors | Espionage, Intelligence, Strategic Advantage | จารกรรมข้อมูลเชิงยุทธศาสตร์ |
| Hacktivists | Political / Social Causes | โจมตีเพื่อส่งสารทางสังคม |
| Insiders | Financial Gain, Revenge, Ideology หรือ Accidental Actions | พนักงานรั่วไหลข้อมูลทั้งตั้งใจ/ไม่ตั้งใจ |
| Script Kiddies | Curiosity, Experimentation, Recognition | ใช้เครื่องมือสำเร็จรูปโดยเข้าใจไม่ลึก |
| Terrorist/Extremist Groups | Disruption, Fear, Ideological Objectives | มุ่งก่อความเสียหาย/ความหวาดกลัว |

**ข้อสังเกต:** Insider Threat ครอบคลุมเหตุไม่ตั้งใจด้วย จึงไม่จำเป็นต้องเป็นผู้มีเจตนาร้ายเสมอ

## 5.2 Cyber Threat Intelligence (CTI)

**[จากสไลด์]** CTI คือข้อมูลเกี่ยวกับ Threats และ Threat Actors ที่ผ่านการรวบรวม วิเคราะห์ และแปลงเป็นความรู้สำหรับ Security Decision-Making

CTI ช่วยตอบคำถาม:

- ใครอาจโจมตีเรา?
- เราเผชิญ Threats อะไร?
- ผู้โจมตีใช้วิธีใด?
- ช่องโหว่ใดถูกมุ่งเป้า?
- ควรเฝ้าดู Indicators ใด?
- ควรปรับ Defense อย่างไร?

**อธิบายเสริม:** รายการ IP อันตรายดิบ ๆ เป็นข้อมูลที่อาจใช้ประกอบ Intelligence แต่ CTI ที่มีคุณค่าควรบอกบริบท ความน่าเชื่อถือ ความเกี่ยวข้องกับองค์กร และการตัดสินใจที่ควรทำ

## 5.3 Indicators of Compromise (IOCs)

**[จากสไลด์]** IOC คือหลักฐานที่อาจบ่งชี้ Security Breach หรือ Malicious Activity

ตัวอย่าง:

- Malicious IP Address
- Suspicious Domain
- Malicious URL
- File Hash
- Unusual Registry Change

**สถานการณ์ตามสไลด์:** Threat Intelligence Feed แจ้ง IP อันตราย → SOC ค้นหา IP ใน Logs → ตรวจว่า Internal Systems เคยติดต่อหรือไม่ → ตรวจสอบบริบทเพิ่มเติม

**ข้อควรระวัง:** IP ที่ปรากฏใน Feed อาจเปลี่ยนเจ้าของหรือถูกใช้ร่วมกันได้ จึงต้องตรวจสอบ Timestamp, Context และ Confidence

## 5.4 Threat Frameworks

Framework ช่วยจัดประเภทและวิเคราะห์ Adversary Behavior เพื่อทำความเข้าใจ Attack Techniques, Identify Gaps, Improve Detection, Organize Intelligence, Support Investigations และ Develop Controls

## 5.5 MITRE ATT&CK

**[จากสไลด์]** Knowledge Base ที่บันทึก Tactics และ Techniques ของผู้โจมตีจากการสังเกตในโลกจริง

**Tactics = Why** (ผู้โจมตีต้องการอะไร)

ตัวอย่างจากสไลด์:

- Initial Access — เข้าสู่ระบบเป้าหมาย
- Execution — ทำให้โค้ดทำงาน
- Persistence — รักษาการเข้าถึงไว้
- Privilege Escalation — เพิ่มสิทธิ์
- Defense Evasion — หลีกเลี่ยงการตรวจจับ/ป้องกัน
- Credential Access — เข้าถึงข้อมูลรับรอง

**Techniques = How** (ใช้วิธีอะไรเพื่อบรรลุเป้าหมาย)

**ตัวอย่างจากสไลด์:** Tactic = Credential Access; Technique = Credential Dumping

**ตัวอย่างเสริม:** หากโจทย์ถาม *attacker's goal* → Tactic; ถ้าถาม *specific method used* → Technique

**ระวัง:** MITRE ATT&CK ไม่ใช่เครื่องมือ SIEM และไม่ได้ทำหน้าที่บล็อกการโจมตีเอง เป็นฐานความรู้สำหรับจัดหมวดหมู่พฤติกรรมและปรับปรุงการตรวจจับ

---

# 6. Incident Response และ Incident Response Plan

## 6.1 Incident Response คืออะไร

**[จากสไลด์]** Incident Response (IR) คือ Structured Approach สำหรับจัดการผลกระทบของ Cybersecurity Incident เช่น Data Breach, Malware Attack และ Unauthorized Access

เป้าหมาย:

1. Identify and Contain Threats Quickly
2. Minimize Damage to Systems, Data, Business Operations
3. Ensure Rapid Recovery
4. Improve Security Posture Through Learning

## 6.2 ทำไม IR สำคัญ

- **Reduce Business Disruptions:** ลด Downtime และ Operational Impact
- **Mitigate Financial Losses:** ลดความเสียหายจากหยุดให้บริการและต้นทุนตอบสนอง
- **Protect Data & IT Infrastructure:** ลดผลกระทบต่อระบบและข้อมูล
- **Enhance Cyber Resilience:** ฟื้นตัวและปรับปรุงการป้องกัน
- **Support Compliance:** สนับสนุนการดำเนินงานตามข้อกำหนดที่เกี่ยวข้อง

**ตัวอย่างจากสไลด์:** Malware Outbreak แพร่ในเครือข่าย → IR แยกเครื่องที่ติดเชื้อและกำจัด Malware

## 6.3 Incident Response Plan (IRP) — 6 ขั้นตอน

### Phase 1: Preparation

เตรียม Policies, Tools, Training และทีม IR ให้พร้อมก่อนเกิดเหตุการณ์

**กิจกรรม:** กำหนด Roles, Escalation Contacts, Communications, Backup, Incident Playbooks, Evidence Handling, Exercises

**โจทย์:** จัดอบรมทีม IR และจัดทำ Incident Playbook → Preparation

### Phase 2: Detection and Analysis

ตรวจพบและประเมินขอบเขตของ Incident: เกิดอะไรขึ้น กระทบระบบใด เริ่มเมื่อใด รุนแรงเท่าใด

**กิจกรรม:** ตรวจ SIEM/EDR Alerts, Correlate Logs, Verify Indicators, Scope Affected Hosts, Preserve Evidence

**โจทย์:** ตรวจสอบว่า Ransomware กระทบ Server กี่เครื่อง → Detection and Analysis

### Phase 3: Containment

จำกัดการแพร่กระจายเพื่อป้องกันความเสียหายเพิ่มเติม

**กิจกรรม:** Isolate Infected Host, Block Malicious IP, Disable Compromised Account, Segment Network

**โจทย์:** ตัดเครื่องที่ติด Malware ออกจากเครือข่าย → Containment

**ระวัง:** ก่อนทำขั้นตอนที่อาจทำลายหลักฐาน ควรพิจารณาความปลอดภัยและการเก็บ Evidence ตามแผน IR

### Phase 4: Eradication

กำจัด Root Cause หรือองค์ประกอบที่ทำให้ Incident ดำเนินต่อ

**กิจกรรม:** Remove Malware, Eliminate Unauthorized Accounts, Patch Exploited Vulnerability, Correct Misconfiguration

**โจทย์:** ลบ Backdoor และปิดช่องโหว่ที่ถูกใช้โจมตี → Eradication

### Phase 5: Recovery

คืนระบบและบริการให้กลับมาทำงานอย่างปลอดภัย

**กิจกรรม:** Restore Clean Backup, Rebuild Host, Re-enable Service, Validate System Health, Monitor for Recurrence

**โจทย์:** Restore Production Database หลังตรวจสอบความสะอาด → Recovery

### Phase 6: Post-Incident Review

วิเคราะห์สิ่งที่เกิดขึ้นเพื่อป้องกันเหตุซ้ำและปรับปรุง IRP

**กิจกรรม:** Root Cause Review, Timeline, Lessons Learned, Update Controls, Improve Detection, Training

**โจทย์:** ประชุมสรุปเหตุการณ์และปรับ Alert Rules → Post-Incident Review

## 6.4 เปรียบเทียบ 3 ขั้นตอนที่ออกสอบง่าย

| คำ | ถามว่าอะไร | ตัวอย่าง |
|---|---|---|
| Containment | หยุดลามอย่างไร | Isolate infected endpoint |
| Eradication | กำจัดสาเหตุอย่างไร | Remove malware / patch entry point |
| Recovery | กลับมาให้บริการอย่างไร | Restore from clean backup |

## 6.5 สถานการณ์ Ransomware แบบครบวงจร

**เหตุการณ์:** พนักงานเปิดไฟล์อันตราย ทำให้ Ransomware เริ่มเข้ารหัสไฟล์บน File Server

1. **Preparation:** องค์กรมี Backup, EDR, IR Contacts และ Playbook
2. **Detection/Analysis:** EDR Alert; ทีมตรวจ Process, File Activity, Hosts และ Accounts ที่ได้รับผลกระทบ
3. **Containment:** แยกเครื่องติดเชื้อและจำกัดการเชื่อมต่อที่จำเป็น
4. **Eradication:** ลบ Malware/Backdoor, ปิดช่องทางเข้าที่พบ และแก้ช่องโหว่
5. **Recovery:** Restore Clean Backup และเฝ้าระวังการกลับมาของภัยคุกคาม
6. **Post-Incident:** วิเคราะห์ Initial Access และปรับ Email Security, Training, Detection

**ประเด็นเพิ่มเติม:** หากเกี่ยวข้องกับข้อมูลส่วนบุคคลหรือการรายงานตามกฎหมาย ต้องประสาน Legal/Privacy ตามข้อกำหนดจริงขององค์กร

---

# 7. Incident Response Exercises

## 7.1 เหตุผลที่ต้องฝึกซ้อม

**[จากสไลด์]** Exercises ตรวจว่าองค์กร Prepared to Respond Effectively ต่อ Incident จริงหรือไม่ และช่วยหา:

- Gaps in IR Plan
- Unclear Responsibilities
- Communication Problems
- Missing Resources
- Ineffective Procedures
- Technical Weaknesses
- Training Requirements

**จำ:** ทดสอบแผนก่อนเกิดเหตุการณ์จริง ไม่ใช่รอให้เกิดเหตุจึงพบว่าขั้นตอนใช้ไม่ได้

## 7.2 Tabletop Exercise

การฝึกแบบ **Discussion-based** โดยผู้เข้าร่วมเดินผ่าน Simulated Incident Scenario แล้วหารือว่าจะทำอะไร ใครรับผิดชอบ ใครต้องรับแจ้ง และต้องเก็บข้อมูลใด

**ตัวอย่างจากสไลด์:** “Ransomware เข้ารหัส Critical Servers หลายเครื่อง จะทำอย่างไร?”

คำถามที่ต้องอภิปราย:

1. What would happen?
2. Who would respond?
3. Who should be notified?
4. What actions should be taken?
5. What systems should be isolated?
6. What information should be collected?

**ผลลัพธ์ที่ควรได้:** รายการช่องว่างของแผน ผู้รับผิดชอบที่ชัดเจน และ Action Items สำหรับแก้ไข

## 7.3 Technical Testing

ทดสอบว่า Technical Controls และ Procedures ทำงานจริง ไม่ใช่แค่เขียนไว้ในเอกสาร

**ตัวอย่างจากสไลด์:** Backup Restoration, Incident Detection, Alerting, Network Isolation, Account Disabling, Malware Containment, Disaster Recovery Procedures

**ตัวอย่าง:** ให้ทีมทดลอง Restore Backup ใน Test Environment และตรวจว่าข้อมูลใช้งานได้จริง

## 7.4 Tabletop vs Technical

| Tabletop | Technical Testing |
|---|---|
| Discussion-Based | Hands-on/Functional Test |
| ตรวจบทบาท/การตัดสินใจ | ตรวจระบบและ Control |
| ไม่ต้องแก้ Production | ทดสอบความสามารถจริงในขอบเขตควบคุม |
| ตัวอย่างประชุม Ransomware | ตัวอย่าง Restore Backup |

---

# 8. Asset Protection และ Asset Lifecycle

## 8.1 Asset Protection

**[จากสไลด์]** การระบุ จัดการ และปกป้อง Assets ขององค์กรตลอด Lifecycle

**Assets ที่ยกในสไลด์:** Hardware, Software, Data, Servers, Applications

**ผลที่ต้องการ:** Properly Identified, Securely Configured, Properly Maintained, Protected from Unauthorized Use, Replaced/Retired Securely

**ตัวอย่าง:** บริษัทต้องรู้ว่ามี Laptop เครื่องใด ใครเป็น Owner ใช้ OS รุ่นใด มี Encryption/EDR หรือไม่ และจะปลดระวางเมื่อไร

## 8.2 Asset Inventory

**[อธิบายเสริม]** รายการทรัพย์สินที่ดีช่วยให้ Patch, Incident Response และ EOL Management ทำได้จริง ข้อมูลที่อาจเก็บ ได้แก่ Asset ID, Owner, Location, System Version, Criticality, Data Classification, Support Status

**เหตุผล:** หากไม่รู้ว่ามี Server ใดบ้าง ก็ไม่รู้ว่าจะ Patch หรือแยกเครื่องใดเมื่อเกิด Incident

## 8.3 Asset Lifecycle Management (ALM)

**[จากสไลด์]** Plan → Acquire → Deploy → Maintain → Monitor → Retire/Dispose

1. **Plan:** กำหนดความต้องการและความปลอดภัยที่ต้องมี
2. **Acquire:** ซื้อหรือจัดหา Asset
3. **Deploy:** ติดตั้ง ตั้งค่าและมอบหมายผู้ใช้งาน
4. **Maintain:** Patch, Update, Repair
5. **Monitor:** ติดตาม Security และ Condition
6. **Retire:** นำออกจากบริการ
7. **Dispose:** Sanitization/Destruction ก่อนกำจัด

**ตัวอย่าง Laptop:** วางแผนสเปก → ซื้อ → ลง OS/EDR → Patch → Monitor → ยกเลิกการใช้ → Securely Wipe/Destroy Storage ตาม Policy

**จุดสำคัญ:** Retire (หยุดใช้) กับ Dispose (กำจัดอย่างปลอดภัย) ไม่จำเป็นต้องเป็นเหตุการณ์เดียวกัน

---

# 9. End of Life (EOL) และ Compensating Controls

## 9.1 EOL คืออะไร

**[จากสไลด์]** End of Life คือจุดที่ Product, Software หรือ Device สิ้นสุด Supported Lifecycle และอาจไม่ได้รับ Security Patches, Bug Fixes, Technical Support หรือ Firmware Updates

**ความเสี่ยง:** ช่องโหว่ใหม่อาจไม่ถูกแก้ ทำให้ระบบเสี่ยงต่อการโจมตีมากขึ้น

**ตัวอย่าง:** ระบบบัญชีทำงานบน OS เก่าที่ Vendor ไม่สนับสนุนแล้ว แม้ระบบยังเปิดได้ก็ไม่ได้หมายความว่าปลอดภัย

## 9.2 แนวทาง Managing EOL Assets

**[จากสไลด์]** Upgrade Software, Replace Device, Migrate to Supported Platform, Isolate System, Apply Compensating Controls, Decommission Asset

**ลำดับคิดเชิงปฏิบัติ:** สำรวจว่า EOL อะไร → ประเมิน Criticality/Exposure → วางแผน Upgrade/Replace/Migrate → หากยังทำไม่ได้ ใช้ Temporary Risk Reduction → ติดตามและปลดระวางตามกำหนด

## 9.3 Compensating Controls

มาตรการทางเลือกเพื่อลดความเสี่ยงเมื่อยังไม่สามารถใช้มาตรการหลักได้

**[จากสไลด์]** Network Segmentation, Restricted Access, Enhanced Monitoring

**ตัวอย่าง:** Legacy Database Server ไม่สามารถ Patch ได้ทันที → จำกัด Network Access เฉพาะ Application Servers ที่จำเป็น, ใช้ Jump Host, เพิ่ม Monitoring และกำหนดแผนย้ายระบบ

**ระวัง:** Compensating Controls ลดความเสี่ยง ไม่ได้ทำให้ EOL กลับมามี Vendor Support หรือทำให้ช่องโหว่หายไป

---

# 10. Configuration Management, Baselines และ Patch Management

## 10.1 Configuration Management

**[จากสไลด์]** กระบวนการรักษาความปลอดภัยและการทำงานของ IT Systems ให้ Configured Correctly and Consistently และลดช่องโหว่จาก Misconfigurations

องค์ประกอบหลัก:

- **Baselines:** Standardized Configurations
- **Updates:** Routine Enhancements/Minor Fixes
- **Patches:** Security Fixes for Vulnerabilities
- **Change Control:** Authorized Changes Only
- **Configuration Auditing:** ตรวจ Deviation from Baseline

**ตัวอย่าง:** ทุก Windows Server ต้องมี Firewall เปิดใช้งาน, ปิดบริการไม่จำเป็น และตั้งค่า Audit Logging ตามมาตรฐาน

## 10.2 Security Baseline

**[จากสไลด์]** Secure Starting Point for System Configurations และลดความเสี่ยงจาก Misconfiguration/Unauthorized Changes

ตัวอย่างแหล่ง Baseline จากสไลด์:

- CIS Benchmarks (Windows, Linux, Cloud)
- NIST SP 800-128 (Configuration Management Guidance)
- Vendor-Recommended Settings (Microsoft, Cisco, AWS)

**อธิบายเสริม:** Baseline ต้องปรับตาม Business Requirements; ไม่ควรใช้ทุก Setting แบบไม่ทดสอบ เพราะอาจกระทบ Availability

## 10.3 Configuration Drift

การตั้งค่าจริงของระบบเบี่ยงเบนจาก Approved Baseline อาจเกิดจาก Authorized Change ที่ไม่ได้อัปเดต Baseline, Unauthorized Change หรือ Human Error

**ตัวอย่าง:** Baseline กำหนดปิด Remote Administration จาก Internet แต่มีการเปิด Rule ชั่วคราวแล้วลืมปิด

**วิธีจัดการ:** Audit → Compare with Baseline → Investigate Cause → Remediate or Approve Baseline Update

## 10.4 Patch Management Process

**[จากสไลด์]** Identify → Assess → Test → Deploy → Verify

1. **Identify:** ติดตาม Vendor Advisories และ Security Bulletins
2. **Assess:** ประเมิน Severity, Exposure, Business Impact และ Priority
3. **Test:** ตรวจ Patch ใน Controlled Environment
4. **Deploy:** นำ Patch ไปใช้ใน Production ตาม Change Procedures
5. **Verify:** ตรวจว่าติดตั้งสำเร็จและระบบยังเสถียร

**ตัวอย่าง:** มี Critical Patch สำหรับ Web Server → ตรวจ Asset Inventory ว่ามี Version ที่ได้รับผลกระทบ → จัดลำดับ Server ที่เปิด Internet → Test → Deploy → Verify

**ข้อควรระวัง:** การอัปเดตโดยไม่ Test/Verify อาจสร้าง Downtime; การไม่อัปเดตก็เสี่ยงถูก Exploit จึงต้องชั่งน้ำหนักความเร่งด่วนกับผลกระทบ

## 10.5 Risks of Poor Configuration Management

**[จากสไลด์]**

- **Unpatched Vulnerabilities:** ช่องโหว่ที่ไม่แก้ถูก Exploit ได้
- **Insecure Configurations:** Open Ports, Default Credentials, Weak Encryption
- **Drift from Baselines:** Unauthorized/Accidental Changes
- **Inconsistent System Behavior:** Compatibility/Performance Issues

## 10.6 Effective Configuration Management

**[จากสไลด์]** Establish Security Baselines, Automate Patch Management, Regularly Audit Configurations, Implement Change Control, Use Configuration Tools เช่น Ansible, SCCM, Puppet, Chef

**อธิบายเสริม:** Automation ลดความผิดพลาดซ้ำ ๆ แต่ต้องมีการทดสอบ การกำหนดสิทธิ์ และการตรวจสอบผลลัพธ์

---

# 11. Change Management

## 11.1 ความหมาย

**[จากสไลด์]** Controlled Process เพื่อ Request, Evaluate, Approve, Implement และ Document Changes ต่อ Systems/Environments

ตัวอย่าง Changes: Installing Software, Updating Firmware, Changing Firewall Rules, Modifying Network Configurations, Upgrading Applications, Changing Security Policies

**เป้าหมาย:** ลด Unexpected Outages, Security Problems และ Configuration Errors

## 11.2 Change Management Process — 7 ขั้นตอน

1. **Request:** ส่งคำขออย่างเป็นทางการ
2. **Assess:** ประเมิน Risks, Impacts, Dependencies
3. **Approve:** ผู้มีอำนาจอนุมัติ
4. **Test:** ทดสอบเมื่อทำได้
5. **Implement:** ติดตั้งหรือปรับเปลี่ยนตามอนุมัติ
6. **Verify:** ตรวจว่าทำงานตามคาด
7. **Document:** บันทึก Change และ Results

**ตัวอย่าง Firewall Rule:** Application Owner ขอเปิด TCP Port → Network/Security ประเมินความจำเป็นและความเสี่ยง → Approve → Test → Implement → Verify Traffic → Document

**อธิบายเสริม:** ในการทำงานจริงมักมี Rollback Plan, Change Window และ Emergency Change Procedure ซึ่งช่วยลดผลกระทบ แต่รายละเอียดเหล่านี้ไม่ได้แสดงครบในสไลด์ที่ส่งมา

## 11.3 Configuration Management vs Change Management

| Configuration Management | Change Management |
|---|---|
| Maintains Desired Configuration | Controls Changes to Systems |
| What Configuration Should Be | How/When Changes Occur |
| Establishes Baselines | Evaluates and Approves Changes |
| Detects Deviations | Controls Implementation |
| Approved Firewall Configuration | Request to Modify Firewall Rule |

**จำ:** Configuration = สถานะที่ควรเป็น; Change = ขั้นตอนควบคุมการเปลี่ยนจากสถานะหนึ่งไปอีกสถานะหนึ่ง

---

# 12. Security Testing และ Red/Blue/Purple Team

## 12.1 Security Testing

**[จากสไลด์]** การประเมิน Systems, Applications, Networks และ Physical Security Controls เพื่อค้นหา Vulnerabilities, Weaknesses และ Gaps

ประโยชน์: Identify Vulnerabilities, Validate Controls, Assess Readiness, Reduce Risk, Improve Incident Detection and Response

## 12.2 Blue Teaming

**[จากสไลด์]** ฝ่ายป้องกันระบบ ตรวจจับและตอบสนองต่อการโจมตี

หน้าที่: Monitor Events, Detect Threats, Respond to Incidents, Improve Controls, Threat Hunting

**ตัวอย่าง:** พบ Suspicious PowerShell Activity ผ่าน SIEM → Investigate Endpoint → Isolate เมื่อจำเป็น → เริ่ม IR

**จำ:** Blue = Defend / Detect / Respond

## 12.3 Red Teaming

**[จากสไลด์]** จำลองการกระทำของผู้โจมตีจริงเพื่อทดสอบ Overall Security Defenses และความสามารถ Detect/Respond

กิจกรรมภายใต้การอนุญาต: Gain Unauthorized Access ในขอบเขตทดสอบ, Exploit Vulnerabilities, Lateral Movement, Obtain Sensitive Information ตามขอบเขต, Bypass Controls

**สำคัญ:** ต้อง Authorized and Controlled

**จำ:** Red = Simulate Attacker

## 12.4 Purple Teaming

**[จากสไลด์]** Red + Blue Collaborate เพื่อ Improve Defenses

1. Simulate Attack
2. Observe Defensive Detection
3. Identify Gaps
4. Improve Security Controls
5. Test Again

**ตัวอย่างจากสไลด์:** Red Team จำลอง Credential Attack → Blue Team ตรวจจับไม่พบ → พบ Logging/Detection Gap → ปรับปรุง Monitoring → ทดสอบซ้ำ

**จำ:** Purple = Collaborative Improvement ไม่ใช่เพียงสีของทีมใหม่

---

# 13. Vulnerability Scanning, SAST, DAST และ Threat Modeling

## 13.1 Vulnerability Scanning

**[จากสไลด์]** Automated หรือ Semi-Automated Process เพื่อค้นหา Known Vulnerabilities และ Weaknesses ใน Systems/Applications

สิ่งที่ตรวจพบได้: Missing Security Patches, Vulnerable Versions, Weak Configurations, Exposed Services, Known Vulnerabilities

**ตัวอย่าง:** Scanner พบ Server ใช้ Software Version ที่มี Critical Vulnerability

**อธิบายเสริม:** Scanner อาจมี False Positives และอาจไม่พบช่องโหว่ใหม่หรือ Business Logic Flaws; ควร Validate Findings และจัดลำดับ Remediation

## 13.2 Vulnerability Scanning vs Penetration Testing

- **Vulnerability Scanning:** เน้นค้นหาช่องโหว่ที่รู้จัก โดยมักใช้ Automation
- **Penetration Testing:** ประเมินความสามารถในการโจมตี/ใช้ประโยชน์จากจุดอ่อนในขอบเขตที่ได้รับอนุญาต

**ข้อสอบ:** “Automated identification of missing patches” → Vulnerability Scanning; “Authorized controlled attack to validate exploitability” → Penetration Testing

## 13.3 SAST — Static Application Security Testing

**[จากสไลด์]** วิเคราะห์ Source Code หรือ Compiled Code โดยไม่ต้อง Execute Application

ตัวอย่าง Issues: Insecure Coding Practices, Hardcoded Credentials, Injection Vulnerabilities, Unsafe Functions, Weak Input Validation

**ตัวอย่าง:** Developer สแกน Code ก่อน Deploy แล้วพบ API Key ถูก Hardcode

**ข้อดี:** ใช้ระหว่าง Development ได้เร็ว; ช่วยชี้ตำแหน่งโค้ดที่ควรแก้

**ข้อจำกัดเสริม:** อาจมี False Positives และไม่เห็น Runtime Behavior ทั้งหมด

## 13.4 DAST — Dynamic Application Security Testing

**[จากสไลด์]** ทดสอบ Application ขณะ Running โดยโต้ตอบกับระบบเพื่อค้นหา Vulnerabilities

ตัวอย่าง Issues: Injection, Authentication Weaknesses, Session Management, Improper Input Validation, Security Misconfigurations

**ตัวอย่าง:** ทดสอบ Web App ที่รันอยู่และพบว่า Session ยังใช้ต่อได้หลัง Logout

**ข้อดี:** เห็นพฤติกรรมที่เกิดจากการทำงานจริงของแอป

**ข้อจำกัดเสริม:** ไม่ได้ตรวจ Source Code โดยตรง และอาจไม่ครอบคลุมทุก Code Path

## 13.5 SAST vs DAST

| SAST | DAST |
|---|---|
| Static | Dynamic |
| Source/Compiled Code | Running Application |
| No Need to Run App | Requires App Running |
| Insecure Coding Practices | Runtime/Application Behavior Issues |
| Often Development | Often Testing/Deployment |

**จำ:** SAST = ดูโค้ด; DAST = ดูแอปทำงาน

## 13.6 Threat Modeling

**[จากสไลด์]** Structured Process เพื่อระบุและประเมิน Potential Threats/Security Risks ในช่วง Design ของ System/Application

ระบุ: Assets, Potential Attackers, Attack Paths, Vulnerabilities, Security Requirements, Appropriate Controls

**ตัวอย่างจากสไลด์:** ก่อนสร้าง Online Banking App ทีมงานพิจารณา Account Takeover, Credential Theft และ Injection Attacks

**วิธีคิดเสริม:**

1. เรากำลังสร้างอะไรและมี Assets อะไร?
2. ใครอาจโจมตี และต้องการอะไร?
3. เส้นทางโจมตีมีอะไรบ้าง?
4. ความเสี่ยงใดสำคัญ?
5. ต้องออกแบบ Controls ใดตั้งแต่ต้น?

**ความต่าง:** Threat Modeling ทำก่อนหรือระหว่าง Design เพื่อคาดการณ์; SAST/DAST ใช้ตรวจสอบ Implementation/Behavior

---

# 14. Physical Penetration Testing และ Social Engineering

## 14.1 Physical Penetration Testing

**[จากสไลด์]** ประเมินว่าผู้โจมตีสามารถเข้าถึง Facilities, Systems หรือ Restricted Areas ทางกายภาพโดยไม่ได้รับอนุญาตได้หรือไม่

Authorized Testing อาจครอบคลุม Enter Restricted Areas, Bypass Physical Controls, Access Unattended Devices, Circumvent Security Procedures

**Physical Controls:** Locks, Security Guards, Access Cards, Biometric Systems

**ตัวอย่าง:** ทีมทดสอบได้รับอนุญาตให้ประเมินว่าบุคคลที่ไม่มี Access Card สามารถเข้า Server Room ได้หรือไม่

## 14.2 Phishing

**[จากสไลด์]** Social Engineering ที่หลอกให้เปิดเผยข้อมูล คลิกลิงก์อันตราย เปิด Attachment หรือทำสิ่งที่ผู้โจมตีต้องการ

**ตัวอย่าง:** Email ปลอมให้ Verify Account; ใน Security Awareness Exercise องค์กรส่ง Email จำลองเพื่อวัดการตอบสนองของพนักงาน

**จำ:** Phishing มุ่งหลอกคน ไม่ใช่โจมตีเฉพาะ Technical Vulnerability

## 14.3 Tailgating

**[จากสไลด์]** ผู้ไม่มีสิทธิ์เดินตามผู้มีสิทธิ์ผ่าน Controlled Entrance ไปยัง Restricted Area

**ตัวอย่าง:** พนักงานเปิดประตูด้วย Access Card → บุคคลภายนอกเดินตามเข้าไปก่อนประตูปิด

**Controls:** Access Cards, Mantraps, Security Guards, Visitor Badges, Awareness Training

**อธิบายเสริม:** Mantrap เป็นพื้นที่ประตูสองชั้นที่ควบคุมการเข้าออกเพื่อลดโอกาสที่คนไม่มีสิทธิ์เดินตามเข้าไป

## 14.4 Impersonation

**[จากสไลด์]** Social Engineering ที่แอบอ้างเป็นคนอื่นเพื่อขอ Access, Information หรือ Assistance

ผู้โจมตีอาจอ้างว่าเป็น Employee, IT Support หรือ Delivery Person

**ตัวอย่างจากสไลด์:** บุคคลอ้างว่าเป็น IT Technician และขอเข้า Restricted Server Room; ทีม Pentest ที่ได้รับอนุญาตอาจจำลองสถานการณ์เพื่อตรวจว่าเจ้าหน้าที่ทำ Identity Verification หรือไม่

## 14.5 เปรียบเทียบ

| เทคนิค | จุดเด่น | ตัวอย่าง |
|---|---|---|
| Phishing | หลอกผ่านข้อความ/การสื่อสาร | Email ปลอมให้กดลิงก์ |
| Tailgating | เดินตามคนมีสิทธิ์ | ตามเข้าประตู Secure Area |
| Impersonation | แอบอ้างตัวตน | อ้างว่าเป็น IT Support |

**หมายเหตุ:** เหตุการณ์หนึ่งอาจใช้หลายเทคนิคร่วมกัน เช่น ปลอมตัวเป็นช่าง IT (Impersonation) แล้วเดินตามเข้าพื้นที่ (Tailgating)

---

# 15. สถานการณ์บูรณาการแบบ SOC / IR

## Scenario A: Account Compromise

**สถานการณ์:** มี Failed Login จำนวนมาก ตามด้วย Successful Login, Privilege Escalation และ Sensitive File Access

**วิเคราะห์:**

1. Authentication Logs เป็นแหล่งหลักฐานเริ่มต้น
2. SIEM ใช้ Event Correlation เชื่อมเหตุการณ์
3. Triage ประเมินบัญชีที่ได้รับผลกระทบและความสำคัญของไฟล์
4. ตรวจ IOC/CTI ประกอบ เช่น Source IP หรือ Domain
5. หากยืนยันเหตุร้าย → IR Containment เช่น Disable Compromised Account/Session
6. Eradication แก้ Root Cause เช่น Credential Reset, MFA/Access Review ตามเหตุ
7. Recovery คืนสิทธิ์และบริการที่ปลอดภัย
8. Review ปรับ Detection Rules และ Controls

**โจทย์ที่เป็นไปได้:** ถ้าถามถึง “วิเคราะห์หลายเหตุการณ์ร่วมกัน” ตอบ Event Correlation; ถ้าถาม “ปิดบัญชีเพื่อหยุดการโจมตี” ตอบ Containment

## Scenario B: EOL Server ถูกพบช่องโหว่

**สถานการณ์:** Server สำคัญใช้ OS ที่ไม่มี Security Patches และยังเปลี่ยนทันทีไม่ได้

**วิเคราะห์:**

1. Asset Inventory ระบุ Owner และ Criticality
2. EOL Management วางแผน Migrate/Replace
3. ระหว่างรอ ใช้ Compensating Controls เช่น Segmentation, Restricted Access, Monitoring
4. Change Management ควบคุมการเปลี่ยนแปลง
5. Verify ว่ามาตรการชั่วคราวทำงานจริง

**ข้อควรจำ:** Isolate/Segment ลด Exposure แต่ไม่ใช่การ Patch ช่องโหว่

## Scenario C: Deployment ทำให้ Firewall เปิด Port ผิด

**สถานการณ์:** มีการเปลี่ยน Rule โดยไม่ผ่านการอนุมัติ ทำให้ Service ที่ไม่ควรเปิดถูกเข้าถึงได้

**วิเคราะห์:**

1. Configuration Baseline ระบุว่า Port นี้ควรปิด
2. Configuration Audit ตรวจพบ Drift
3. Change Management ระบุว่าไม่มี Approved Request
4. ทีมประเมิน Risk/Impact ก่อน Remediate
5. ปรับ Rule และ Verify
6. Document Change และทบทวน Process

**คำถาม:** “อะไรบอกสถานะที่ถูกต้อง?” → Configuration Baseline; “อะไรควบคุมการอนุมัติเปลี่ยน Rule?” → Change Management

## Scenario D: Web Application ก่อน Go-Live

**สถานการณ์:** ทีมพัฒนา Online Banking App

1. Threat Modeling คิดถึง Account Takeover/Injection ตั้งแต่ Design
2. SAST วิเคราะห์ Source Code เพื่อหาจุดอ่อน เช่น Hardcoded Secrets
3. DAST ทดสอบ Running App เพื่อหา Authentication/Session Issues
4. Vulnerability Scanning ตรวจ Known Vulnerabilities/Versions
5. Authorized Penetration Testing ตรวจการใช้ประโยชน์จากจุดอ่อนตามขอบเขต
6. Patch/Change Management ควบคุมการแก้ไข

**จุดจำ:** ไม่ใช่เลือกเพียงวิธีเดียว แต่แต่ละวิธีแก้ปัญหาคนละมุม

## Scenario E: Purple Team ตรวจจับไม่ได้

**สถานการณ์:** Red Team จำลอง Credential Attack แต่ Blue Team ไม่พบ Alert

1. Red Team อธิบาย Attack Sequence
2. Blue Team ตรวจ Logs/Detection Coverage
3. พบว่า Event ไม่ถูกส่งเข้า SIEM หรือ Rule ไม่ครอบคลุม
4. ปรับ Logging/Correlation Rule
5. Red Team ทดสอบซ้ำ
6. Blue Team ยืนยันว่า Detect และ Respond ได้ดีขึ้น

**จำ:** Purple Teaming = Collaboration + Feedback Loop + Retest

---

# 16. ตารางเปรียบเทียบคำศัพท์ออกสอบ

| คำที่สับสน | แตกต่างกันอย่างไร | คำใบ้โจทย์ |
|---|---|---|
| Encryption / Hashing | ปกปิดข้อมูล / ตรวจ Integrity | Hide vs Digest |
| Hash / Digital Signature | Digest / ตรวจลายเซ็นและแหล่งที่มา | Compare Hash vs Verify Signer |
| Logging / Monitoring | บันทึก / เฝ้าติดตาม | Record vs Observe |
| Alert / Incident | สัญญาณเตือน / เหตุที่ต้องจัดการ | Suspicious vs Confirmed/Qualified |
| SIEM / Antivirus | Correlate Events / Detect Malware | Central Logs vs Endpoint Malware |
| DLP / Encryption | ควบคุมการรั่วไหล / ปกปิดเนื้อหา | Block Transfer vs Ciphertext |
| Triage / Correlation | คัดกรองลำดับ / เชื่อมเหตุการณ์ | Prioritize vs Relate |
| IOC / CTI | ร่องรอย / ข้อมูลข่าวกรองที่วิเคราะห์ | Indicator vs Actionable Knowledge |
| Tactic / Technique | Why / How | Objective vs Method |
| Containment / Eradication | จำกัดการลาม / กำจัดสาเหตุ | Isolate vs Remove |
| Eradication / Recovery | ลบภัย / คืนบริการ | Eliminate vs Restore |
| Tabletop / Technical | อภิปราย / ลงมือทดสอบ | Discuss vs Execute |
| Asset Retire / Dispose | หยุดใช้ / กำจัดอย่างปลอดภัย | Out of Service vs Sanitization |
| EOL / Unpatched | หมด Support / ยังไม่ติด Patch | Vendor Support vs Missing Fix |
| Baseline / Drift | ค่ามาตรฐาน / เบี่ยงเบน | Desired vs Deviation |
| Configuration / Change | สถานะที่ควรเป็น / ควบคุมการเปลี่ยน | What vs How/When |
| Vulnerability Scan / Pentest | ค้นหา Known Weaknesses / ทดสอบโจมตีที่อนุญาต | Identify vs Validate Exploitability |
| SAST / DAST | Code ไม่ต้องรัน / App กำลังรัน | Static vs Dynamic |
| Threat Modeling / Testing | คาดการณ์ตั้งแต่ Design / ตรวจระบบ | Design vs Evaluate |
| Red / Blue / Purple | Attack / Defend / Collaborate | Simulate / Detect / Improve |
| Phishing / Tailgating / Impersonation | หลอกข้อความ / เดินตาม / แอบอ้าง | Link / Door / Pretend |

---

# 17. คำถามฝึกคิดพร้อมเฉลยอธิบาย

> คำถามต่อไปนี้สร้างขึ้นเพื่อทบทวน ไม่ใช่ข้อสอบจริงของ ISC2

### Q1
**A security team wants to verify that a downloaded file has not changed. What should they use?**

A. Encryption  B. Hash Comparison  C. DLP  D. SNMP Trap

**ตอบ B — Hash Comparison.** Hash ใช้เปรียบเทียบ Integrity ของไฟล์ โดยต้องเชื่อถือค่า Hash อ้างอิงด้วย

### Q2
**An organization needs to protect cryptographic private keys inside dedicated secure hardware.**

A. SIEM  B. DLP  C. HSM  D. Vulnerability Scanner

**ตอบ C — HSM.** ใช้จัดการและปกป้อง Cryptographic Keys

### Q3
**Logs from firewalls, endpoints and servers are collected and analyzed together.**

A. SIEM  B. Antivirus  C. Tailgating  D. Tabletop

**ตอบ A — SIEM.** รวมและ Correlate Security Events

### Q4
**A SIEM alerts on harmless administrative activity.**

A. True Positive  B. False Positive  C. False Negative  D. True Negative

**ตอบ B — False Positive.** แจ้งเตือนทั้งที่ไม่ใช่ภัยคุกคามตามที่ระบบระบุ

### Q5
**Multiple failed logins followed by successful login and privilege escalation are analyzed as a sequence.**

A. Event Correlation  B. Archiving  C. Disposal  D. Encryption

**ตอบ A — Event Correlation.** เชื่อมเหตุการณ์ที่สัมพันธ์กัน

### Q6
**Which MITRE ATT&CK concept describes the attacker's objective?**

A. Technique  B. Tactic  C. IOC  D. Baseline

**ตอบ B — Tactic.** Why = Objective

### Q7
**A threat feed provides a suspicious file hash. What is the hash an example of?**

A. IRP  B. IOC  C. HSM  D. Change Request

**ตอบ B — IOC.** เป็นร่องรอยที่อาจบ่งชี้ Compromise

### Q8
**A compromised workstation is disconnected to stop malware spreading.**

A. Recovery  B. Containment  C. Post-Incident Review  D. Preparation

**ตอบ B — Containment.** หยุดการแพร่กระจาย

### Q9
**Malware and a malicious persistence mechanism are removed.**

A. Eradication  B. Triage  C. Recovery  D. Monitoring

**ตอบ A — Eradication.** กำจัดภัยและสาเหตุ

### Q10
**A clean backup is restored and service is returned to users.**

A. Detection  B. Preparation  C. Recovery  D. Event Correlation

**ตอบ C — Recovery.** คืนการทำงานของระบบ

### Q11
**Incident responders discuss a simulated ransomware scenario in a meeting.**

A. Technical Testing  B. Tabletop Exercise  C. DAST  D. SAST

**ตอบ B — Tabletop.** Discussion-Based

### Q12
**The team actually tests whether backup restoration succeeds.**

A. Technical Testing  B. Impersonation  C. Threat Modeling  D. Archiving

**ตอบ A — Technical Testing.** ตรวจว่า Control ทำงานจริง

### Q13
**A server has reached the end of vendor support and cannot immediately be replaced. What is an appropriate interim measure?**

A. Ignore it  B. Disable all monitoring  C. Network Segmentation and Restricted Access  D. Publish credentials

**ตอบ C.** เป็น Compensating Controls ลด Exposure ระหว่างรอเปลี่ยน

### Q14
**A system's actual configuration differs from the approved secure baseline.**

A. Configuration Drift  B. Digital Signature  C. Data at Rest  D. CTI

**ตอบ A — Configuration Drift.** Deviation from Baseline

### Q15
**Which phase of patch management confirms that the patch was installed successfully and the system remains stable?**

A. Identify  B. Assess  C. Deploy  D. Verify

**ตอบ D — Verify.** ตรวจผลหลังติดตั้ง

### Q16
**A firewall rule change must be reviewed and approved before implementation.**

A. Change Management  B. Hashing  C. SNMP  D. Threat Actor Profiling

**ตอบ A — Change Management.** ควบคุมการเปลี่ยนแปลง

### Q17
**A security team analyzes application source code without running the application.**

A. DAST  B. SAST  C. Tailgating  D. Red Teaming

**ตอบ B — SAST.** Static Code Analysis

### Q18
**A security team tests session management on a running web application.**

A. DAST  B. SAST  C. Asset Disposal  D. SNMP Trap

**ตอบ A — DAST.** ทดสอบ Running Application

### Q19
**Before developing a banking application, the team identifies assets, attack paths and likely attackers.**

A. Threat Modeling  B. Recovery  C. Archiving  D. Quarantine

**ตอบ A — Threat Modeling.** วิเคราะห์ภัยคุกคามในช่วง Design

### Q20
**Red and Blue Teams work together to find detection gaps and retest.**

A. Purple Teaming  B. DLP  C. EOL Management  D. Hashing

**ตอบ A — Purple Teaming.** ร่วมมือเพื่อปรับปรุง Detection/Defense

### Q21
**A visitor without authorization follows an employee through a secure door.**

A. Phishing  B. Tailgating  C. Encryption  D. Vulnerability Scanning

**ตอบ B — Tailgating.** เดินตามผู้มีสิทธิ์เข้าพื้นที่

### Q22
**Someone claims to be an IT technician to request server room access.**

A. Impersonation  B. DAST  C. SIEM  D. Patch Management

**ตอบ A — Impersonation.** แอบอ้างตัวตนเพื่อขอ Access

### Q23
**A company wants to stop employees from emailing sensitive customer files to personal accounts.**

A. HSM  B. DLP  C. SNMP Trap  D. Tabletop

**ตอบ B — DLP.** ควบคุมการรั่วไหลของข้อมูล

### Q24
**A network switch automatically notifies a monitoring server when a link goes down.**

A. SNMP Trap  B. Digital Signature  C. SAST  D. IOC

**ตอบ A — SNMP Trap.** อุปกรณ์ส่ง Notification

### Q25
**A team analyzes an incident afterward and updates procedures to prevent recurrence.**

A. Preparation  B. Post-Incident Review  C. Containment  D. DAST

**ตอบ B — Post-Incident Review.** Lessons Learned และ Improvement

---

# 18. Cheat Sheet ทบทวนก่อนสอบ

## 18.1 คำจำแบบหนึ่งบรรทัด

- **Encryption:** Protect Confidentiality
- **Hash:** One-way Integrity Check
- **Digital Signature:** Verify Integrity and Signer
- **HSM:** Secure Hardware for Keys
- **Logging:** Record Events
- **Monitoring:** Observe Events
- **SIEM:** Centralize and Correlate Logs
- **DLP:** Prevent Unauthorized Data Leakage
- **SNMP Trap:** Device-Initiated Alert
- **Triage:** Prioritize Alerts
- **Event Correlation:** Connect Related Events
- **CTI:** Analyzed Threat Knowledge
- **IOC:** Possible Evidence of Compromise
- **MITRE Tactics:** Why
- **MITRE Techniques:** How
- **IR Preparation:** Get Ready
- **Detection/Analysis:** Find and Assess
- **Containment:** Stop the Spread
- **Eradication:** Remove Root Cause
- **Recovery:** Restore Services
- **Post-Incident Review:** Learn and Improve
- **Tabletop:** Discuss a Simulated Scenario
- **Technical Testing:** Verify Controls Actually Work
- **Asset Lifecycle:** Plan to Secure Disposal
- **EOL:** No Longer Supported
- **Compensating Controls:** Reduce Risk When Primary Control Is Unavailable
- **Baseline:** Desired Secure Configuration
- **Drift:** Deviation from Baseline
- **Patch:** Fix Vulnerability/Issue
- **Change Management:** Request → Assess → Approve → Test → Implement → Verify → Document
- **Blue Team:** Defend
- **Red Team:** Simulate Attacks
- **Purple Team:** Collaborate and Improve
- **Vulnerability Scan:** Find Known Weaknesses
- **SAST:** Analyze Code Without Running
- **DAST:** Test Running Application
- **Threat Modeling:** Identify Threats During Design
- **Physical Pentest:** Test Physical Access Controls
- **Phishing:** Deceptive Message
- **Tailgating:** Follow Authorized Person
- **Impersonation:** Pretend to Be Someone Else

## 18.2 ลำดับกระบวนการที่ควรท่อง

**Incident Response:** Preparation → Detection & Analysis → Containment → Eradication → Recovery → Post-Incident Review

**Patch Management:** Identify → Assess → Test → Deploy → Verify

**Change Management:** Request → Assess → Approve → Test → Implement → Verify → Document

**Asset Lifecycle:** Plan → Acquire → Deploy → Maintain → Monitor → Retire/Dispose

**Purple Team:** Simulate → Observe → Identify Gaps → Improve → Retest

## 18.3 10 ข้อที่ควรจำให้แม่นที่สุด

1. SIEM ทำ Event Correlation จาก Logs หลายแหล่ง
2. IOC เป็นร่องรอยที่ *อาจ* บ่งชี้ Compromise ไม่ใช่หลักฐานเด็ดขาดเสมอ
3. MITRE Tactics = Why, Techniques = How
4. Containment = จำกัดการลาม; Eradication = กำจัดสาเหตุ; Recovery = คืนบริการ
5. Tabletop = Discussion; Technical Testing = ทดสอบ Control จริง
6. EOL เพิ่มความเสี่ยงเพราะไม่มี Support/Patches; ใช้ Compensating Controls ระหว่างรอเปลี่ยน
7. Baseline คือ Desired Configuration; Drift คือความเบี่ยงเบน
8. Configuration Management ดูว่าระบบควรเป็นอย่างไร; Change Management ควบคุมการเปลี่ยน
9. SAST = Code without running; DAST = Running App
10. Phishing = หลอกข้อความ; Tailgating = เดินตาม; Impersonation = แอบอ้าง

---

# ข้อสังเกตเกี่ยวกับ ISC2 CC ปี 2026

เอกสารประกอบที่แนบชื่อ **What’s New for Entry-Level Cybersecurity.pdf** ระบุว่ามีการปรับ Exam Outline มีผลตั้งแต่ **1 กันยายน 2026** โดยยังคงโครงสร้าง 5 Domains และเพิ่มความสำคัญของ Threat Intelligence กับ Incident Response ในหลักสูตรใหม่ เอกสารนี้เป็นบทความอธิบายการเปลี่ยนแปลง ไม่ใช่ Full Exam Outline จึงควรใช้ Official Exam Outline ฉบับที่ตรงกับวันสอบเพื่อตรวจสอบขอบเขตและ Weighting อย่างเป็นทางการ

**แหล่งที่ใช้เรียบเรียง:** (1) ภาพสไลด์และเนื้อหาการเรียน Domain 5 ที่ผู้ใช้ส่งในบทสนทนา (2) บทสรุป Domain 5 ที่จัดทำในบทสนทนาก่อนหน้า โดยแยกส่วนเสริมที่ไม่ปรากฏในสไลด์ล่าสุด (3) PDF ที่แนบ *What’s New for Entry-Level Cybersecurity* สำหรับบริบทการปรับหลักสูตรปี 2026 เท่านั้น

---

**จบคู่มือ Domain 5 — ฉบับขยายสำหรับอ่านทบทวนและเตรียมสอบ ISC2 CC 2026**


---

# ส่วน B — ขยายรายละเอียดทุกหัวข้อพร้อมการประยุกต์ใช้

## 19. Cryptography: การเลือกเครื่องมือให้ตรง Security Objective `[เสริม]`

### ภาพรวมและหลักการ
Cryptography ไม่ใช่เครื่องมือเดียวที่แก้ทุกปัญหา: ต้องเริ่มจากเป้าหมายก่อนว่าอยากให้ข้อมูลอ่านไม่ออก, ตรวจพบการแก้ไข, ยืนยันแหล่งที่มา หรือเก็บ Key อย่างปลอดภัย

### องค์ประกอบที่ต้องเข้าใจ

**Confidentiality** — ใช้การเข้ารหัสข้อมูลขณะจัดเก็บและส่งผ่านเครือข่าย เช่น AES ใน Storage และ TLS สำหรับการสื่อสาร

**Integrity** — Hash เปรียบเทียบไฟล์ได้ แต่หากต้องพิสูจน์ว่า Hash มาจากผู้ส่งที่เชื่อถือได้ ให้ใช้ MAC หรือ Digital Signature

**Authentication** — Digital Signature ช่วยยืนยันผู้ลงนามเมื่อเชื่อถือ Public Key ที่ตรวจสอบแล้ว

**Non-repudiation** — ต้องอาศัย Digital Signature ร่วมกับการบริหารตัวตนและ Key ที่เหมาะสม ไม่ใช่รับประกันโดยอัตโนมัติ

**Key lifecycle** — Generate → Store → Distribute/Establish → Use → Rotate → Revoke/Destroy; ความลับของ Key สำคัญพอ ๆ กับ Algorithm

**Password storage** — ใช้ Password Hashing เช่น Argon2id/bcrypt/PBKDF2 พร้อม Salt ไม่ใช่การเข้ารหัสที่ถอดกลับได้

### สถานการณ์จำลองแบบเป็นขั้นตอน
บริษัทส่งไฟล์รายงานทางอีเมล: (1) เข้ารหัสไฟล์เพื่อรักษาความลับ (2) ลงนามดิจิทัลเพื่อยืนยันผู้ส่งและความถูกต้อง (3) จัดเก็บ Private Key อย่างปลอดภัย (4) ตรวจสอบ Certificate/Key ก่อนเชื่อผลลัพธ์

### สิ่งที่มักสับสน
Encryption ต่างจาก Encoding ซึ่งไม่ได้มีเป้าหมายด้านความลับ; Hash ไม่ใช่ Encryption; Digital Signature ไม่ได้ซ่อนเนื้อหา; การมี HTTPS ไม่ได้แปลว่า Endpoint ไม่มี Malware

### วิธีคิดเวลาเจอโจทย์ ISC2 CC
ถามตัวเองก่อนว่าโจทย์ต้องการ Confidentiality, Integrity, Authentication หรือ Key Protection จากนั้นเลือก Encryption, Hash/MAC, Signature หรือ HSM

### ข้อควรระวังและการนำไปใช้
การใช้ Algorithm ที่แข็งแรงแต่เก็บ Key ไว้ใน Source Code อาจทำให้ระบบไม่ปลอดภัย; Hash อย่างเดียวไม่สามารถยืนยันผู้ส่งได้หากผู้โจมตีแก้ทั้งไฟล์และค่า Hash

## 20. PKI, Certificates, TLS และ Key Management `[เสริม]`

### ภาพรวมและหลักการ
Public Key Infrastructure (PKI) คือระบบบริหารความเชื่อถือของ Public Keys ผ่าน Certificates, Certificate Authorities (CA) และกระบวนการออก/เพิกถอนใบรับรอง

### องค์ประกอบที่ต้องเข้าใจ

**Certificate** — ผูก Public Key กับชื่อหรือ Identity โดยมี CA ลงนามรับรอง

**CA** — หน่วยงานที่ออกและลงนามใบรับรอง; ต้องมี Trust Chain ที่ตรวจสอบได้

**Certificate validation** — ตรวจชื่อโดเมน, อายุใบรับรอง, ลายเซ็นและสถานะเพิกถอนตามระบบที่ใช้งาน

**TLS** — ปกป้องการสื่อสารระหว่าง Client กับ Server โดยเจรจา Key และใช้การเข้ารหัสแบบ Symmetric กับข้อมูลจริง

**Key rotation** — เปลี่ยน Key ตามนโยบายหรือเมื่อมีความเสี่ยง เพื่อจำกัดผลกระทบหาก Key รั่ว

**Revocation** — เพิกถอน Certificate หรือ Credentials ที่ไม่ควรเชื่อถืออีกต่อไป

### สถานการณ์จำลองแบบเป็นขั้นตอน
พนักงานเปิดเว็บไซต์ธนาคาร: Browser ตรวจสอบ Certificate และชื่อโดเมน; หากผ่านจึงตั้งช่องทาง TLS เพื่อเข้ารหัสข้อมูลระหว่างทาง; ถ้า Certificate ไม่ตรงชื่อโดเมนต้องไม่กดข้ามคำเตือนโดยไม่ตรวจสอบ

### สิ่งที่มักสับสน
Certificate ไม่ใช่ Password; Public Key เปิดเผยได้แต่ Private Key ต้องเก็บเป็นความลับ; TLS ปกป้องข้อมูลระหว่างทาง ไม่ได้ป้องกันผู้ใช้ถูกหลอกให้เข้าเว็บปลอมที่มี TLS ของตนเอง

### วิธีคิดเวลาเจอโจทย์ ISC2 CC
โจทย์เกี่ยวกับการพิสูจน์ Public Key ให้คิดถึง Certificate/PKI; เกี่ยวกับการเข้ารหัส Web Traffic ให้คิดถึง TLS; Key ถูกขโมยให้คิดถึง Revocation และ Rotation

### ข้อควรระวังและการนำไปใช้
อย่าเชื่อว่าเครื่องหมายกุญแจใน Browser หมายถึงเว็บไซต์ปลอดภัยทุกด้าน; มันแสดงถึงคุณสมบัติของการเชื่อมต่อและการตรวจสอบ Certificate เท่านั้น

## 21. Logging Architecture และ Log Quality `[เสริม]`

### ภาพรวมและหลักการ
Logs เป็นหลักฐานดิจิทัลสำหรับตรวจจับ วิเคราะห์ และสืบสวน; คุณภาพ Log สำคัญพอ ๆ กับปริมาณ

### องค์ประกอบที่ต้องเข้าใจ

**Source coverage** — เก็บจาก Identity Provider, Endpoint, Server, Firewall, DNS, Proxy, Cloud และ Applications ตามความเสี่ยง

**Timestamp** — ใช้การเทียบเวลาอย่างสอดคล้อง เช่น NTP เพื่อเชื่อมโยงเหตุการณ์ต่างระบบ

**Normalization** — ปรับรูปแบบ Field เช่น username, src_ip, event_time ให้ค้นและ Correlate ได้

**Integrity** — ควบคุมการแก้ไขและการลบ Log โดยผู้ไม่มีสิทธิ์

**Retention** — กำหนดเวลาจัดเก็บตามกฎหมาย นโยบาย และความจำเป็นทางสืบสวน

**Privacy** — จำกัดการเก็บและเข้าถึงข้อมูลส่วนบุคคลใน Log ตามความจำเป็น

### สถานการณ์จำลองแบบเป็นขั้นตอน
SOC ตรวจพบ Account Compromise: (1) ดึง Authentication Logs (2) ตรวจ VPN/Proxy (3) เทียบ Timestamp (4) ตรวจ Endpoint Events (5) เชื่อมเหตุการณ์ (6) เก็บหลักฐานโดยจำกัดสิทธิ์การเข้าถึง

### สิ่งที่มักสับสน
Logging = บันทึก; Monitoring = เฝ้าดู; Alerting = แจ้งเตือน; Reporting = สรุป; Archiving = เก็บระยะยาว. การมี Log มากไม่ได้แปลว่าตรวจจับได้ดีหากไม่มีกฎและบริบท

### วิธีคิดเวลาเจอโจทย์ ISC2 CC
โจทย์ถามตรวจสอบย้อนหลังหลายเดือน ให้ตอบ Retention/Archiving; ถามตรวจสอบหลายระบบ ให้ตอบ Aggregation/SIEM; ถามรู้ทันทีเมื่อเกิดเหตุ ให้ตอบ Alerting

### ข้อควรระวังและการนำไปใช้
ระวังการบันทึก Password, Session Token หรือข้อมูลละเอียดอ่อนลง Log โดยไม่จำเป็น และต้องกำหนด Access Control กับ Log Repository

## 22. SIEM, SOAR, EDR, NDR, IDS/IPS และ DLP `[เสริม]`

### ภาพรวมและหลักการ
เครื่องมือ Security Operations แต่ละประเภทมีบทบาทเฉพาะ: บางตัวรวบรวมข้อมูล บางตัวตรวจจับ บางตัวป้องกัน และบางตัวประสานงานตอบสนอง

### องค์ประกอบที่ต้องเข้าใจ

**SIEM** — รวม Log วิเคราะห์ความสัมพันธ์ และสร้าง Alerts

**SOAR** — ช่วยประสาน Workflow และ Automation สำหรับ Incident Response โดยมีการกำกับดูแล

**EDR** — มองเห็นกิจกรรมบน Endpoint และช่วยตรวจสอบ/Contain เครื่อง

**NDR** — วิเคราะห์กิจกรรมเครือข่ายเพื่อหาความผิดปกติหรือการโจมตี

**IDS** — ตรวจจับและแจ้งเตือนกิจกรรมที่น่าสงสัย

**IPS** — ตรวจจับและสามารถบล็อก Traffic ตามนโยบาย

**DLP** — ตรวจสอบ/ควบคุมการเคลื่อนย้ายข้อมูลสำคัญ

### สถานการณ์จำลองแบบเป็นขั้นตอน
ระบบแจ้งเตือนการดาวน์โหลดข้อมูลผิดปกติ: SIEM รวม Events; DLP ระบุข้อมูลสำคัญ; EDR ตรวจเครื่องต้นทาง; Analyst ประเมินก่อนใช้ SOAR ช่วยเปิด Case และประสานงาน

### สิ่งที่มักสับสน
SIEM ไม่ได้แทน EDR; IDS โดยทั่วไปแจ้งเตือน ขณะที่ IPS สามารถป้องกันในเส้นทาง Traffic; DLP เน้น Data Exposure ไม่ใช่ Malware ทุกชนิด

### วิธีคิดเวลาเจอโจทย์ ISC2 CC
หาคำหลัก: correlation = SIEM, endpoint investigation = EDR, automate response = SOAR, prevent sensitive data exfiltration = DLP

### ข้อควรระวังและการนำไปใช้
Automation ต้องมี Approval/Guardrails โดยเฉพาะการปิดบัญชีหรือแยก Server ที่กระทบธุรกิจ; False Positive อาจทำให้เกิด Downtime

## 23. SOC Alert Triage เชิงลึกและ Severity `[เสริม]`

### ภาพรวมและหลักการ
Triage คือการตัดสินใจจากหลักฐานเบื้องต้นว่า Alert ใดควรตรวจต่อก่อน ไม่ใช่การพิสูจน์ทุกอย่างจนจบ

### องค์ประกอบที่ต้องเข้าใจ

**Validate** — ตรวจว่า Alert มีข้อมูลเพียงพอและสอดคล้องกับบริบทหรือไม่

**Enrich** — เติมข้อมูล Asset Criticality, User Role, IOC Reputation และ Change Window

**Scope** — ดูว่าเกิดกับเครื่อง/บัญชีใดบ้าง

**Prioritize** — พิจารณาความรุนแรง ผลกระทบ และความเร่งด่วน

**Escalate** — ส่งต่อทีมที่เหมาะสมตาม Playbook และ SLA

**Document** — บันทึกเหตุผล หลักฐาน และเวลาตัดสินใจ

### สถานการณ์จำลองแบบเป็นขั้นตอน
พบ Login จากต่างประเทศ: (1) ตรวจว่า User เดินทางหรือใช้ VPN หรือไม่ (2) ตรวจ MFA (3) ดู Device และ IP (4) ค้นหาเหตุการณ์ใกล้เคียง (5) ยกระดับหากพบการเข้าถึงข้อมูลสำคัญ

### สิ่งที่มักสับสน
Severity คือความรุนแรงของเหตุการณ์; Priority คือความเร่งด่วนในการดำเนินการ ซึ่งอาจขึ้นกับธุรกิจและเวลาที่มี; False Positive ไม่ใช่ False Negative

### วิธีคิดเวลาเจอโจทย์ ISC2 CC
ถ้าโจทย์ถาม BEST FIRST ACTION ให้เลือก Validate/Assess ก่อนตัดสินใจปิดระบบ เว้นแต่มีอันตรายชัดเจนและ Playbook ระบุการ Contain ทันที

### ข้อควรระวังและการนำไปใช้
อย่าจัดลำดับด้วย CVSS หรือชื่อ Malware อย่างเดียว ต้องรวม Business Impact และ Evidence ของ Active Exploitation

## 24. Threat Intelligence, IOC, IOA และ TTP `[เสริม]`

### ภาพรวมและหลักการ
Threat Intelligence ช่วยเปลี่ยนข้อมูลดิบเป็นข้อมูลที่ใช้ตัดสินใจ; IOC เป็นร่องรอย ขณะที่ TTP อธิบายพฤติกรรมของผู้โจมตี

### องค์ประกอบที่ต้องเข้าใจ

**IOC** — IP, Domain, Hash, URL หรือ Artifact ที่อาจเกี่ยวข้องกับ Compromise

**IOA** — Indicator of Attack: พฤติกรรมที่ชี้ว่ากำลังมีการโจมตี เช่นลำดับการใช้เครื่องมือผิดปกติ

**TTP** — Tactics, Techniques and Procedures: เป้าหมาย วิธีการ และรูปแบบการลงมือ

**Strategic CTI** — ข้อมูลระดับผู้บริหารเพื่อการตัดสินใจด้านความเสี่ยง

**Operational CTI** — ข้อมูลแคมเปญและการปฏิบัติการของผู้โจมตี

**Tactical/Technical CTI** — รายละเอียด Techniques และ Indicators สำหรับฝ่ายปฏิบัติ

**Intelligence lifecycle** — Define requirements → Collect → Process → Analyze → Disseminate → Feedback

### สถานการณ์จำลองแบบเป็นขั้นตอน
ทีมได้รับ Malicious Domain: (1) ตรวจแหล่งข่าวกรองและความใหม่ (2) ค้น DNS/Proxy Logs (3) ตรวจ Endpoint ที่เชื่อมต่อ (4) ตัดสินใจบล็อกและเฝ้าระวัง (5) ปรับ Detection Rule

### สิ่งที่มักสับสน
IOC อาจเปลี่ยนได้เร็วและมี False Positive; TTP มักช่วยสร้าง Detection ที่ทนต่อการเปลี่ยน IP/Domain มากกว่า แต่ต้องใช้ข้อมูลและการวิเคราะห์มากขึ้น

### วิธีคิดเวลาเจอโจทย์ ISC2 CC
โจทย์ถามหลักฐานเฉพาะให้คิด IOC; ถามรูปแบบพฤติกรรมหรือ Attack Technique ให้คิด TTP/ATT&CK

### ข้อควรระวังและการนำไปใช้
อย่าบล็อก IP ทุกตัวจาก Feed โดยไม่มี Validation เพราะอาจกระทบระบบที่ถูกต้องและข้อมูลอาจล้าสมัย

## 25. MITRE ATT&CK และการทำ Detection Mapping `[เสริม]`

### ภาพรวมและหลักการ
MITRE ATT&CK เป็นฐานความรู้พฤติกรรมฝ่ายโจมตี ไม่ใช่ผลิตภัณฑ์ Antivirus หรือขั้นตอนบังคับที่ทุกการโจมตีต้องเดินครบ

### องค์ประกอบที่ต้องเข้าใจ

**Tactic** — เป้าหมายของฝ่ายโจมตี เช่น Initial Access หรือ Persistence

**Technique** — วิธีที่ใช้บรรลุเป้าหมาย เช่น Phishing

**Sub-technique** — รายละเอียดเฉพาะของ Technique บางรายการ

**Procedure** — วิธีที่ผู้โจมตีรายหนึ่งใช้ Technique ในสถานการณ์จริง

**Detection mapping** — ผูก Log Source และ Detection Rule เข้ากับ Technique

**Coverage gap** — Technique ที่องค์กรยังไม่มีข้อมูลหรือการตรวจจับเพียงพอ

### สถานการณ์จำลองแบบเป็นขั้นตอน
Purple Team เลือก Technique จำลอง: (1) ระบุ Technique (2) กำหนด Expected Telemetry (3) จำลองอย่างปลอดภัย (4) ตรวจว่ามี Log/Alert หรือไม่ (5) ปรับ Detection (6) Retest

### สิ่งที่มักสับสน
Tactic = Why, Technique = How; ATT&CK ไม่ใช่ Kill Chain แบบลำดับเดียวตายตัว และไม่ใช่ Risk Scoring Model

### วิธีคิดเวลาเจอโจทย์ ISC2 CC
หากโจทย์พูดถึงการจัดหมวดหมู่พฤติกรรมผู้โจมตีหรือปรับปรุง Detection Coverage ให้นึกถึง ATT&CK

### ข้อควรระวังและการนำไปใช้
การมี Rule ครบชื่อ Technique ไม่ได้ยืนยันว่าตรวจจับได้จริง ต้องทดสอบด้วย Telemetry และ Scenario ที่เหมาะสม

## 26. Incident Response: Decision Points, Evidence และ Communication `[เสริม]`

### ภาพรวมและหลักการ
Incident Response เป็นทั้งงานเทคนิคและการประสานงาน; ความสำเร็จขึ้นกับการตัดสินใจที่มีเหตุผลและการเก็บหลักฐานอย่างถูกต้อง

### องค์ประกอบที่ต้องเข้าใจ

**Roles** — กำหนด Incident Commander, SOC, IT Ops, Legal, Communications และ Management ตามองค์กร

**Escalation** — ระบุเกณฑ์ส่งต่อและผู้มีอำนาจตัดสินใจ

**Evidence handling** — บันทึกแหล่งที่มา เวลา ผู้เก็บ และการส่งต่อหลักฐาน

**Chain of custody** — รักษาประวัติการครอบครองและการเปลี่ยนมือของหลักฐาน

**Containment trade-off** — การปิดระบบอาจหยุดภัยคุกคามแต่กระทบธุรกิจและทำให้หลักฐานบางส่วนหาย

**Communications** — ใช้ช่องทางสื่อสารที่ปลอดภัยและกำหนดผู้มีสิทธิ์เผยแพร่ข้อมูล

**Lessons learned** — แปลงข้อค้นพบเป็น Owner, Due Date และการทดสอบซ้ำ

### สถานการณ์จำลองแบบเป็นขั้นตอน
พบ Ransomware บน File Server: (1) ยืนยันและประเมินขอบเขต (2) เรียก IR Team (3) Contain ตามแผนโดยคำนึงถึงหลักฐาน (4) กำจัดสาเหตุ (5) Restore จาก Backup ที่ตรวจแล้ว (6) ติดตามและทบทวน

### สิ่งที่มักสับสน
Containment ไม่ใช่ Eradication; Recovery ไม่ใช่เพียงเปิดเครื่อง; การลบ Malware ทันทีโดยไม่ประเมินหลักฐานอาจทำให้สืบสวนยากขึ้น

### วิธีคิดเวลาเจอโจทย์ ISC2 CC
โจทย์ FIRST/NEXT/BEST ต้องดู Phase และเป้าหมาย: stop spread = Containment, remove root cause = Eradication, resume service = Recovery

### ข้อควรระวังและการนำไปใช้
กรณีข้อมูลส่วนบุคคลรั่วอาจมีข้อกำหนดแจ้งหน่วยงานหรือผู้ได้รับผลกระทบตามกฎหมายและบริบท ไม่ควรสรุปเส้นตายโดยไม่มีเขตอำนาจ

## 27. IR Exercises, Tabletop, Functional และ Technical Validation `[เสริม]`

### ภาพรวมและหลักการ
การซ้อมช่วยตรวจสอบทั้ง People, Process และ Technology ก่อนเกิดเหตุจริง โดยระดับความสมจริงและความเสี่ยงแตกต่างกัน

### องค์ประกอบที่ต้องเข้าใจ

**Tabletop** — อภิปรายการตัดสินใจจาก Scenario; เหมาะกับบทบาทและการสื่อสาร

**Walkthrough** — ไล่ขั้นตอนตามเอกสารเพื่อดูว่ามีช่องว่างหรือไม่

**Functional exercise** — ให้ผู้เข้าร่วมปฏิบัติบางขั้นตอนจริงในขอบเขตควบคุม

**Technical test** — ทดสอบ Restore, Alert, Account Disable, Isolation หรือ Failover

**Objectives** — กำหนดสิ่งที่ต้องพิสูจน์และเกณฑ์ผ่านก่อนเริ่ม

**After-action report** — บันทึกสิ่งที่ดี ปัญหา Owner และกำหนดแก้ไข

### สถานการณ์จำลองแบบเป็นขั้นตอน
ทดสอบ Ransomware Readiness: รอบแรก Tabletop ให้ผู้บริหารเลือกวิธีสื่อสาร; รอบสองทดสอบ Restore Backup; รอบสามวัดเวลาที่ EDR ส่ง Alert และแยก Endpoint

### สิ่งที่มักสับสน
การพูดว่า Backup มีอยู่ ไม่เท่ากับพิสูจน์ว่า Restore ได้; Tabletop ไม่จำเป็นต้องรันระบบจริง ส่วน Technical Testing ต้องมีหลักฐานการทำงาน

### วิธีคิดเวลาเจอโจทย์ ISC2 CC
ถาม discussion-based = Tabletop; verify backup can be restored = Technical Testing

### ข้อควรระวังและการนำไปใช้
อย่าทดสอบการ Isolate ระบบสำคัญโดยไม่มี Change Approval และ Rollback Plan

## 28. Asset Inventory, Ownership, Classification และ Disposal `[เสริม]`

### ภาพรวมและหลักการ
การปกป้อง Asset เริ่มจากการรู้ว่ามีอะไร ใครรับผิดชอบ อยู่ที่ไหน มีข้อมูลชนิดใด และยังได้รับการสนับสนุนหรือไม่

### องค์ประกอบที่ต้องเข้าใจ

**Inventory** — เก็บรายการ Hardware, Software, Cloud Assets และข้อมูลที่สำคัญ

**Owner** — กำหนดผู้รับผิดชอบความเสี่ยงและการอนุมัติ

**Classification** — จัดชั้นข้อมูลตามความอ่อนไหวและผลกระทบ

**Dependencies** — ระบุความเชื่อมโยงระหว่าง Application, Server, Database และ Network

**Maintenance** — Patch, Backup, Monitoring และ License Review

**Secure disposal** — ลบข้อมูลอย่างเหมาะสมหรือทำลายสื่อเมื่อปลดระวาง

**Evidence** — เก็บบันทึกการรับมอบ การโอนย้าย และการกำจัด

### สถานการณ์จำลองแบบเป็นขั้นตอน
Laptop พนักงานลาออก: (1) คืนอุปกรณ์ (2) ปิดสิทธิ์ผู้ใช้ (3) ตรวจข้อมูลที่ต้องเก็บ (4) ล้างข้อมูลด้วยวิธีที่เหมาะสม (5) บันทึก Asset Status (6) นำกลับใช้หรือกำจัด

### สิ่งที่มักสับสน
Asset Inventory ไม่ใช่แค่จำนวนเครื่อง; Data Classification ไม่ใช่ Vulnerability Severity; การลบไฟล์ธรรมดาอาจไม่เพียงพอสำหรับ Secure Disposal

### วิธีคิดเวลาเจอโจทย์ ISC2 CC
โจทย์ถามระบบใดต้อง Patch ให้เริ่มที่ Inventory; ถามข้อมูลใดต้องป้องกันมากเป็นพิเศษให้ดู Classification และ Business Impact

### ข้อควรระวังและการนำไปใช้
วิธี Sanitize สื่อขึ้นกับชนิดสื่อ นโยบาย และข้อกำหนด เช่น HDD กับ SSD อาจต้องใช้วิธีต่างกัน

## 29. EOL, EOS, Legacy Systems และ Compensating Controls `[เสริม]`

### ภาพรวมและหลักการ
ระบบที่หมดการสนับสนุนอาจมีช่องโหว่ที่ไม่ได้รับ Patch; องค์กรต้องรู้ความแตกต่างระหว่างการสิ้นสุดการขาย การสนับสนุน และ Security Updates

### องค์ประกอบที่ต้องเข้าใจ

**EOL** — คำที่ผู้ผลิตใช้เกี่ยวกับสิ้นสุดวงจรชีวิตผลิตภัณฑ์; รายละเอียดแตกต่างกันตาม Vendor

**End of Support** — สิ้นสุดบริการสนับสนุนตามเงื่อนไขผู้ผลิต

**Unsupported exposure** — ความเสี่ยงเพิ่มเมื่อไม่มี Security Fix หรือความช่วยเหลือ

**Migration** — ย้ายไป Platform ที่ยังรองรับ

**Isolation** — จำกัดการเชื่อมต่อของระบบ Legacy

**Compensating controls** — ใช้ Segmentation, Allowlisting, Monitoring, Access Restriction ชั่วคราว

**Decommission** — ปลดระบบออกเมื่อย้ายข้อมูลและ Dependencies เสร็จ

### สถานการณ์จำลองแบบเป็นขั้นตอน
เครื่องควบคุมการผลิตใช้ OS เก่า: (1) Inventory และประเมิน Criticality (2) ตรวจ Vendor Support (3) จำกัด Network Access (4) เพิ่ม Monitoring (5) ทำ Migration Plan พร้อม Test (6) ปลดระวางเมื่อพร้อม

### สิ่งที่มักสับสน
Compensating Controls ลดความเสี่ยงแต่ไม่ลบช่องโหว่; EOL ไม่ได้หมายความว่าระบบถูกเจาะแล้ว; การ Upgrade ทันทีอาจทำให้ระบบที่สำคัญหยุดทำงานหากไม่ทดสอบ

### วิธีคิดเวลาเจอโจทย์ ISC2 CC
หากโจทย์ถามทางออกระยะยาวสำหรับ Unsupported System ให้พิจารณา Replace/Migrate; หากยังทำไม่ได้ให้ใช้ Compensating Controls

### ข้อควรระวังและการนำไปใช้
ต้องมี Risk Acceptance ที่อนุมัติโดยผู้มีอำนาจ ไม่ใช่ปล่อยระบบเก่าโดยไม่มีเจ้าของความเสี่ยง

## 30. Secure Configuration, Baselines และ Drift Detection `[เสริม]`

### ภาพรวมและหลักการ
Security Baseline คือ Desired State ที่องค์กรอนุมัติ ใช้เปรียบเทียบกับ Actual State ของระบบ

### องค์ประกอบที่ต้องเข้าใจ

**Hardening** — ปิด Service/Port ที่ไม่จำเป็น, เปลี่ยน Default Credentials และลด Attack Surface

**Least Functionality** — ให้ระบบทำงานเฉพาะสิ่งที่จำเป็น

**Baseline sources** — CIS Benchmarks, Vendor Guidance และนโยบายองค์กร

**Configuration audit** — ตรวจ Actual Settings เทียบ Baseline

**Drift** — การเบี่ยงเบนจากค่าที่ได้รับอนุมัติ

**Infrastructure as Code** — ใช้ Code จัดการ Desired State และตรวจการเปลี่ยนแปลง

**Exception management** — บันทึกข้อยกเว้นพร้อมเหตุผล Owner และวันทบทวน

### สถานการณ์จำลองแบบเป็นขั้นตอน
Firewall กำหนดปิด Telnet: (1) ตั้ง Baseline (2) Deploy ผ่าน Automation (3) Audit พบ Port 23 เปิด (4) ตรวจ Change Record (5) Remediate หรืออนุมัติ Exception (6) Retest

### สิ่งที่มักสับสน
Configuration Management ดูแลสถานะและมาตรฐาน; Change Management ดูแลขั้นตอนการเปลี่ยน; Patch Management จัดการ Updates และ Security Fixes

### วิธีคิดเวลาเจอโจทย์ ISC2 CC
โจทย์ถามค่ามาตรฐาน = Baseline; การเบี่ยงเบน = Drift; การตรวจสอบ = Audit; คำขอเปลี่ยน = Change Control

### ข้อควรระวังและการนำไปใช้
Automation อาจกระจาย Misconfiguration ไปหลายเครื่องอย่างรวดเร็ว จึงต้อง Review และ Test Template ก่อนใช้งาน

## 31. Patch and Vulnerability Management: Risk-based Approach `[เสริม]`

### ภาพรวมและหลักการ
Patch Management เป็นส่วนหนึ่งของการลด Vulnerability Risk แต่ไม่ใช่ทุก Vulnerability จะมี Patch และไม่ใช่ทุก Patch ควรติดตั้งโดยไม่ทดสอบ

### องค์ประกอบที่ต้องเข้าใจ

**Discover** — ค้นหาสินทรัพย์และซอฟต์แวร์ที่ได้รับผลกระทบ

**Validate** — ตรวจว่า Finding จริงและมี Exposure หรือไม่

**Prioritize** — พิจารณา Severity, Exploitability, Asset Criticality และ Compensating Controls

**Test** — ทดสอบ Compatibility และ Rollback

**Deploy** — ติดตั้งตาม Change Window และลำดับความสำคัญ

**Verify** — ตรวจเวอร์ชันและ Re-scan ว่าช่องโหว่ได้รับการแก้ไข

**Exception** — จัดการกรณี Patch ไม่ได้โดยมี Risk Owner และ Review Date

### สถานการณ์จำลองแบบเป็นขั้นตอน
Critical Vulnerability บน Internet-facing Server: (1) ตรวจ Inventory (2) ตรวจว่า Version ได้รับผลกระทบ (3) ประเมิน Exploit Activity (4) เร่ง Test และ Deploy (5) Verify ผ่าน Scan และ Logs

### สิ่งที่มักสับสน
Vulnerability Scan = พบปัญหา; Patch = หนึ่งในวิธีแก้; Remediation อาจเป็น Configuration Change, Mitigation หรือ Replacement

### วิธีคิดเวลาเจอโจทย์ ISC2 CC
หากถามลำดับขั้นตอนให้จำ Identify → Assess → Test → Deploy → Verify; หากถามจัดลำดับให้ดู Business Context

### ข้อควรระวังและการนำไปใช้
อย่าตัดสินว่า CVSS สูงที่สุดต้อง Patch ก่อนเสมอ เพราะระบบที่เปิดสู่ Internet และมี Active Exploitation อาจเร่งด่วนกว่า

## 32. Change Management, CAB, Rollback และ Emergency Change `[เสริม]`

### ภาพรวมและหลักการ
Change Management ต้องทำให้การเปลี่ยนแปลงมีเหตุผล ตรวจสอบย้อนหลังได้ และลดผลกระทบที่ไม่คาดคิด

### องค์ประกอบที่ต้องเข้าใจ

**Change request** — ระบุ What, Why, Owner, Systems, Risk, Window และ Expected Outcome

**Impact assessment** — วิเคราะห์ Dependencies, Downtime, Security และ Business Impact

**Approval** — ผู้มีอำนาจอนุมัติตามระดับความเสี่ยง

**Testing** — ทดสอบใน Environment ที่เหมาะสม

**Rollback** — กำหนดวิธีกลับสู่สถานะเดิมหากเกิดปัญหา

**Verification** — ตรวจผลหลัง Implement และเฝ้าระวัง

**Emergency change** — ใช้ขั้นตอนเร่งด่วนที่ยังต้องมีการอนุมัติ/บันทึกตามนโยบาย

### สถานการณ์จำลองแบบเป็นขั้นตอน
ต้องเปิด Firewall Rule ให้ระบบจ่ายเงิน: (1) ยื่นคำขอ (2) ตรวจ Source/Destination/Port (3) ประเมินผลกระทบ (4) อนุมัติ (5) ทดสอบ (6) เปิด Rule (7) Verify (8) บันทึก

### สิ่งที่มักสับสน
CAB เป็นคณะให้คำปรึกษาหรือพิจารณาการเปลี่ยนแปลงตามนโยบาย ไม่ใช่ทุก Change ต้องผ่าน CAB; Emergency Change ไม่ได้แปลว่าไม่ต้องควบคุม

### วิธีคิดเวลาเจอโจทย์ ISC2 CC
โจทย์ถาม BEFORE IMPLEMENTING ให้มองหา Assess/Approve/Test; AFTER IMPLEMENTING ให้มองหา Verify/Document

### ข้อควรระวังและการนำไปใช้
การเปลี่ยนแปลงที่ได้รับอนุมัติแล้วก็ยังอาจล้มเหลว จึงต้องมี Rollback และ Post-change Validation

## 33. Red, Blue, Purple Team และการวัดผล `[เสริม]`

### ภาพรวมและหลักการ
ทั้งสามแนวทางมีเป้าหมายร่วมกันคือทำให้การป้องกันดีขึ้น แต่เน้นบทบาทและวิธีทำงานต่างกัน

### องค์ประกอบที่ต้องเข้าใจ

**Red Team** — จำลอง Attack Objectives อย่างได้รับอนุญาต

**Blue Team** — Monitor, Detect, Investigate, Respond และ Hunt

**Purple Team** — Red/Blue ร่วมทดสอบและปรับ Detection อย่างโปร่งใส

**Rules of Engagement** — กำหนด Scope, Permission, Timing, Safety และ Reporting

**Detection latency** — เวลาจากการกระทำจำลองจนระบบตรวจพบ

**Response effectiveness** — วัดความถูกต้องและความรวดเร็วในการตอบสนอง

**Retest** — ยืนยันว่าการปรับปรุงได้ผล ไม่ใช่แค่เขียน Rule เพิ่ม

### สถานการณ์จำลองแบบเป็นขั้นตอน
Red Team จำลอง Account Misuse ใน Lab; Blue Team ตรวจ Logs แล้วไม่เห็น Alert; ทั้งสองทีมระบุว่าขาด Audit Event จึงเปิด Logging เพิ่ม ทดสอบใหม่และบันทึกผล

### สิ่งที่มักสับสน
Penetration Testing มักโฟกัสการพิสูจน์ช่องโหว่ใน Scope; Red Teaming อาจมุ่งทดสอบ Detection/Response ทั้งองค์กร; Purple Teaming เน้น Collaboration

### วิธีคิดเวลาเจอโจทย์ ISC2 CC
โจทย์มี simulate attacker = Red; defend/monitor = Blue; collaborate/retest = Purple

### ข้อควรระวังและการนำไปใช้
ต้องมีการอนุญาตชัดเจน ไม่ควรทดสอบโจมตีระบบของผู้อื่นโดยไม่มีสิทธิ์

## 34. Application Security: SDLC, SAST, DAST, SCA และ Threat Modeling `[เสริม]`

### ภาพรวมและหลักการ
Application Security ต้องทำต่อเนื่องตั้งแต่ Design, Coding, Testing จนถึง Production ไม่ใช่รอ Pentest ก่อน Go-live เพียงครั้งเดียว

### องค์ประกอบที่ต้องเข้าใจ

**Threat Modeling** — วิเคราะห์ Assets, Attackers, Trust Boundaries และ Abuse Cases ตั้งแต่ Design

**SAST** — ตรวจ Source/Compiled Code โดยไม่รันแอป

**DAST** — ทดสอบ Running Application ผ่าน Interfaces

**SCA** — Software Composition Analysis: ตรวจ Dependencies และ Libraries ที่มีช่องโหว่หรือความเสี่ยง

**Secrets scanning** — ค้นหา Credential/API Key ที่ฝังใน Repository

**Code review** — ผู้พัฒนาหรือผู้ตรวจทานประเมิน Logic และ Security Controls

**Retesting** — หลังแก้ช่องโหว่ต้องทดสอบซ้ำและตรวจ Regression

### สถานการณ์จำลองแบบเป็นขั้นตอน
ทีมสร้าง E-commerce App: (1) Threat Model เรื่อง Account Takeover (2) เขียน Code (3) ใช้ SAST และ Secrets Scan (4) ตรวจ Dependencies ด้วย SCA (5) Deploy Staging (6) ใช้ DAST (7) แก้ไขและ Retest

### สิ่งที่มักสับสน
SAST/DAST อาจพบ Injection ได้ทั้งคู่แต่คนละวิธี; SCA เน้น Third-party Dependencies; Threat Modeling ไม่ต้องรอมีแอปที่รันได้

### วิธีคิดเวลาเจอโจทย์ ISC2 CC
Keywords: source code = SAST; running app = DAST; vulnerable library = SCA; design phase/attack path = Threat Modeling

### ข้อควรระวังและการนำไปใช้
เครื่องมืออัตโนมัติอาจมี False Positives และ Blind Spots; ต้องมี Human Review และการจัดลำดับความเสี่ยง

## 35. Physical Security: Layers, Tailgating, Impersonation และ Phishing `[เสริม]`

### ภาพรวมและหลักการ
Physical Security และ Social Engineering ปกป้องคน พื้นที่ และกระบวนการ เพราะผู้โจมตีอาจข้ามมาตรการเทคนิคผ่านพฤติกรรมมนุษย์

### องค์ประกอบที่ต้องเข้าใจ

**Deterrent** — ป้องปราม เช่น ป้ายเตือนและการมีเจ้าหน้าที่

**Preventive** — ป้องกัน เช่น Locks, Badge Readers และ Mantraps

**Detective** — ตรวจจับ เช่น CCTV และ Door Alarms

**Corrective** — แก้ไขหลังเหตุ เช่นเปลี่ยนกุญแจหรือเพิกถอนบัตร

**Tailgating** — ผู้ไม่มีสิทธิ์เดินตามผู้มีสิทธิ์ผ่านประตู

**Impersonation** — ปลอมตัวเป็นบุคคลหรือบทบาทอื่น

**Phishing** — หลอกผ่านข้อความ/อีเมล/ช่องทางดิจิทัลให้เปิดเผยข้อมูลหรือทำสิ่งที่ผู้โจมตีต้องการ

### สถานการณ์จำลองแบบเป็นขั้นตอน
ผู้มาเยือนอ้างว่าเป็นช่าง IT และเดินตามพนักงานเข้า Server Room: เหตุการณ์นี้อาจรวม Impersonation กับ Tailgating; มาตรการคือยืนยันตัวตน ตรวจใบงาน ใช้ Visitor Badge และไม่ให้เดินตามผ่านประตู

### สิ่งที่มักสับสน
Tailgating คือการตามเข้า; Impersonation คือการแอบอ้างตัวตน; Phishing คือการหลอกผ่านการสื่อสาร; เทคนิคเหล่านี้อาจเกิดร่วมกัน

### วิธีคิดเวลาเจอโจทย์ ISC2 CC
โจทย์ถาม Following = Tailgating; Pretending to be IT = Impersonation; Fake Email Link = Phishing

### ข้อควรระวังและการนำไปใช้
Security Awareness ต้องมีช่องทางรายงานเหตุที่ไม่ลงโทษผู้แจ้งโดยไม่จำเป็น และควรทดสอบพฤติกรรมอย่างมีจริยธรรม

## 36. Integrated Case Study: จาก Detection ถึง Continuous Improvement `[เสริม]`

### ภาพรวมและหลักการ
กรณีศึกษาแบบบูรณาการช่วยให้เห็นว่าหัวข้อ Domain 5 ทำงานเป็นวงจรเดียวกัน ไม่ใช่รายการคำศัพท์แยกส่วน

### องค์ประกอบที่ต้องเข้าใจ

**Protect** — Encryption, Baselines, Patch, MFA, DLP

**Observe** — Logging, SIEM, EDR, Network Telemetry

**Detect** — Alert, IOC, Correlation, ATT&CK Mapping

**Decide** — Triage, Scope, Impact, Priority

**Respond** — Containment, Eradication, Recovery, Evidence

**Improve** — Lessons Learned, Change Management, Purple Team Retest

### สถานการณ์จำลองแบบเป็นขั้นตอน
พนักงานคลิก Phishing Link และบัญชีถูกใช้ Login ผิดปกติ: (1) SIEM พบ Impossible Travel (2) Analyst ตรวจ VPN/MFA/Logs (3) พบ File Download และ DLP Alert (4) ทีม IR ระงับ Session และ Account ตามแผน (5) Reset Credentials ตรวจ Endpoint (6) Restore ความเชื่อถือและเฝ้าระวัง (7) ทบทวนและเพิ่ม Detection

### สิ่งที่มักสับสน
การแก้ Password อย่างเดียวไม่เพียงพอถ้า Session ยังใช้ได้; การบล็อก IP อย่างเดียวไม่แก้ Account Compromise; Incident Response ไม่สิ้นสุดที่ระบบกลับมาออนไลน์

### วิธีคิดเวลาเจอโจทย์ ISC2 CC
ฝึกตอบด้วยกรอบ What happened → Evidence → Impact → Immediate action → Long-term fix; ระวังคำ FIRST, BEST, MOST appropriate

### ข้อควรระวังและการนำไปใช้
ข้อมูลใน Scenario เป็นตัวอย่างสมมติ ไม่ใช่ขั้นตอนตายตัว; การตอบสนองจริงขึ้นกับองค์กรและ Playbook

# ส่วน C — แบบฝึกหัดสถานการณ์ 30 ข้อพร้อมเฉลย `[เสริม]`

> แบบฝึกหัดแต่งขึ้นเพื่อฝึกแยกแนวคิด ไม่ใช่ข้อสอบจริงของ ISC2; ลองปิดบรรทัดเฉลยก่อนทำ

### ข้อ 1: องค์กรต้องการเก็บไฟล์ให้คนที่ไม่มี Key อ่านไม่ได้

A. Encryption  
B. Hashing  
C. Archiving  
D. Event Correlation

**เฉลย: A — Encryption**  
**เหตุผล:** Encryption ปกป้อง Confidentiality; Hashing ไม่ได้ซ่อนข้อมูล  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 2: ผู้ดูแลต้องพิสูจน์ว่าไฟล์ดาวน์โหลดไม่เปลี่ยนจากต้นฉบับ

A. Hash comparison  
B. Firewall rule  
C. Key escrow  
D. SNMP trap

**เฉลย: A — Hash comparison**  
**เหตุผล:** Hash ช่วยตรวจ Integrity เมื่อค่าอ้างอิงเชื่อถือได้  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 3: ต้องการยืนยันผู้ลงนามเอกสารอิเล็กทรอนิกส์

A. Digital signature  
B. Compression  
C. DLP  
D. Network isolation

**เฉลย: A — Digital signature**  
**เหตุผล:** Digital Signature ใช้ Private Key ลงนามและ Public Key ตรวจสอบ  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 4: ระบบต้องเก็บ Private Key ที่มีความสำคัญสูง

A. HSM  
B. IDS  
C. SNMP  
D. DAST

**เฉลย: A — HSM**  
**เหตุผล:** HSM ออกแบบมาเพื่อปกป้องและใช้ Cryptographic Keys  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 5: SOC ต้องการเห็น Log จาก Firewall และ Identity Provider ในที่เดียว

A. Log aggregation  
B. Disk encryption  
C. Patch deployment  
D. Data classification

**เฉลย: A — Log aggregation**  
**เหตุผล:** Aggregation รวม Logs จากหลาย Sources  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 6: ต้องการเชื่อม Failed Logins กับ Privilege Escalation

A. Event correlation  
B. Archiving  
C. Password hashing  
D. Secure disposal

**เฉลย: A — Event correlation**  
**เหตุผล:** Correlation วิเคราะห์ความสัมพันธ์ของ Events  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 7: พบ Alert แต่ยังไม่รู้ว่าจริงหรือ False Positive

A. Triage and validation  
B. Immediate public announcement  
C. Delete logs  
D. Disable all servers

**เฉลย: A — Triage and validation**  
**เหตุผล:** เริ่มจากตรวจสอบความน่าเชื่อถือและบริบทของ Alert  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 8: ระบบแจ้งเตือนทั้งที่ไม่มีการโจมตี

A. False positive  
B. False negative  
C. True positive  
D. True negative

**เฉลย: A — False positive**  
**เหตุผล:** Alert ที่ผิดพลาดทั้งที่ไม่มีภัยคุกคามคือ False Positive  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 9: มีภัยคุกคามจริงแต่ระบบไม่แจ้งเตือน

A. False negative  
B. False positive  
C. True negative  
D. Correlation

**เฉลย: A — False negative**  
**เหตุผล:** False Negative คือภัยคุกคามที่ตรวจไม่พบ  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 10: องค์กรต้องป้องกันการส่ง PII ออกอีเมลส่วนตัว

A. DLP  
B. HSM  
C. SAST  
D. SNMP

**เฉลย: A — DLP**  
**เหตุผล:** DLP มุ่งลดการรั่วไหลของข้อมูลสำคัญ  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 11: Network Device ส่งแจ้งเตือน Interface Down ไปยัง Management System

A. SNMP trap  
B. Digital signature  
C. Threat modeling  
D. DAST

**เฉลย: A — SNMP trap**  
**เหตุผล:** Trap เป็น Notification ที่อุปกรณ์ส่งเอง  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 12: ทีมได้รับ Malicious File Hash จาก Threat Feed

A. IOC  
B. Security baseline  
C. Change request  
D. Recovery point

**เฉลย: A — IOC**  
**เหตุผล:** Hash ที่เกี่ยวกับการโจมตีเป็น IOC  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 13: ใน MITRE ATT&CK คำว่า Credential Access คืออะไร

A. Tactic  
B. Patch  
C. Certificate  
D. Asset

**เฉลย: A — Tactic**  
**เหตุผล:** Tactic เป็นเป้าหมายที่ผู้โจมตีต้องการ  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 14: Incident กำลังแพร่ไปหลาย Endpoint ต้องหยุดการลุกลาม

A. Containment  
B. Recovery  
C. Lessons learned  
D. Reporting

**เฉลย: A — Containment**  
**เหตุผล:** Containment มุ่งจำกัดความเสียหาย  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 15: หลังแยกเครื่องแล้ว ทีมกำจัด Malware และ Persistence

A. Eradication  
B. Detection  
C. Asset acquisition  
D. Tabletop

**เฉลย: A — Eradication**  
**เหตุผล:** Eradication มุ่งกำจัดสาเหตุหรือสิ่งอันตราย  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 16: ต้องนำบริการกลับมาใช้จาก Backup ที่ตรวจสอบแล้ว

A. Recovery  
B. Triage  
C. Tactic mapping  
D. Threat actor profiling

**เฉลย: A — Recovery**  
**เหตุผล:** Recovery คือฟื้นฟูระบบอย่างปลอดภัย  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 17: ผู้บริหารร่วมอภิปรายเหตุการณ์ Ransomware โดยไม่รันระบบจริง

A. Tabletop exercise  
B. DAST  
C. SAST  
D. Patch scan

**เฉลย: A — Tabletop exercise**  
**เหตุผล:** Tabletop เป็น Discussion-based Exercise  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 18: ทีมทดลองกู้ Backup จริงเพื่อดูว่าใช้ได้หรือไม่

A. Technical testing  
B. Tabletop only  
C. Threat intelligence  
D. Impersonation

**เฉลย: A — Technical testing**  
**เหตุผล:** เป็นการพิสูจน์การทำงานทางเทคนิค  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 19: ต้องทราบว่า Server ใดใช้ Software รุ่นที่หมดการสนับสนุน

A. Asset inventory  
B. Digital signature  
C. Purple teaming  
D. DLP

**เฉลย: A — Asset inventory**  
**เหตุผล:** Inventory ช่วยทราบทรัพย์สิน เวอร์ชัน และเจ้าของ  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 20: ยังเปลี่ยน Legacy Server ไม่ได้ ต้องจำกัดความเสี่ยงชั่วคราว

A. Compensating controls  
B. Ignore risk  
C. Disable logging  
D. Use default passwords

**เฉลย: A — Compensating controls**  
**เหตุผล:** Segmentation/Monitoring เป็นมาตรการชดเชย  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 21: ค่าตั้ง Firewall เบี่ยงเบนจาก Approved Baseline

A. Configuration drift  
B. Key rotation  
C. Threat actor  
D. Data at rest

**เฉลย: A — Configuration drift**  
**เหตุผล:** Drift คือการเปลี่ยนไปจาก Desired State  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 22: ก่อนติดตั้ง Patch ใน Production ควรทำอะไร

A. Assess and test  
B. Delete old logs  
C. Disable monitoring  
D. Publicly expose service

**เฉลย: A — Assess and test**  
**เหตุผล:** ประเมินผลกระทบและทดสอบก่อน Deploy เมื่อทำได้  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 23: ต้องการเปิด Firewall Port ใหม่อย่างมีการควบคุม

A. Change management  
B. Hashing  
C. Threat hunting  
D. Data disposal

**เฉลย: A — Change management**  
**เหตุผล:** Change Request, Assessment, Approval และ Verification  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 24: ทีมตรวจจับและตอบสนองต่อ Suspicious PowerShell

A. Blue team  
B. Red team  
C. Certificate authority  
D. Asset vendor

**เฉลย: A — Blue team**  
**เหตุผล:** Blue Team รับหน้าที่ Defense/Detection/Response  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 25: ทีมจำลองการโจมตีโดยได้รับอนุญาตเพื่อวัดการป้องกัน

A. Red team  
B. Blue team  
C. Help desk  
D. Archive team

**เฉลย: A — Red team**  
**เหตุผล:** Red Team จำลอง Attacker Behavior  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 26: ทีมโจมตีและทีมป้องกันร่วมกันแก้ Detection Rule และทดสอบซ้ำ

A. Purple teaming  
B. Tailgating  
C. Cryptographic signing  
D. EOL review

**เฉลย: A — Purple teaming**  
**เหตุผล:** Purple Teaming เน้น Collaboration และ Retest  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 27: เครื่องมือพบ Server Version ที่มี Known Vulnerability

A. Vulnerability scanning  
B. Threat modeling  
C. Digital signing  
D. Tabletop

**เฉลย: A — Vulnerability scanning**  
**เหตุผล:** Scanner ค้นหาช่องโหว่ที่รู้จัก  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 28: ต้องการค้น Hardcoded Password ใน Source Code โดยไม่รันแอป

A. SAST  
B. DAST  
C. SNMP  
D. NDR

**เฉลย: A — SAST**  
**เหตุผล:** SAST วิเคราะห์ Code แบบ Static  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 29: ต้องทดสอบ Authentication ของ Web App ที่กำลังรัน

A. DAST  
B. SAST  
C. Key rotation  
D. Archiving

**เฉลย: A — DAST**  
**เหตุผล:** DAST ทดสอบ Running Application  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

### ข้อ 30: บุคคลแอบอ้างเป็นช่าง IT เพื่อขอเข้า Server Room

A. Impersonation  
B. Hashing  
C. Correlation  
D. Eradication

**เฉลย: A — Impersonation**  
**เหตุผล:** Impersonation คือการปลอมตัวหรือแอบอ้างเป็นผู้อื่น  
**เหตุผลที่ตัวลวงไม่เหมาะ:** ตัวเลือก B–D เป็นแนวคิดคนละหน้าที่กับเป้าหมายหลักของสถานการณ์นี้ ควรพิจารณา Keyword และสิ่งที่โจทย์ถามเป็นอันดับแรก

# ส่วน D — Glossary และแผนทบทวน

## 38. Glossary ภาษาอังกฤษ–ไทย `[เสริม]`

| Term | ความหมาย |
|---|---|
| Confidentiality | การรักษาความลับของข้อมูล |
| Integrity | การรักษาความถูกต้องครบถ้วนของข้อมูล |
| Availability | ความพร้อมใช้งาน |
| Encryption | การเข้ารหัสที่ถอดกลับได้ด้วย Key ที่ถูกต้อง |
| Hash | ค่าที่ได้จากฟังก์ชันแฮช |
| Digital Signature | ลายเซ็นดิจิทัล |
| HSM | ฮาร์ดแวร์ปกป้องกุญแจเข้ารหัส |
| PKI | โครงสร้างพื้นฐานกุญแจสาธารณะ |
| TLS | โปรโตคอลป้องกันการสื่อสาร |
| SIEM | แพลตฟอร์มรวบรวมและวิเคราะห์ Security Events |
| SOAR | การประสานงานและอัตโนมัติด้าน Security Response |
| EDR | ตรวจจับและตอบสนองบน Endpoint |
| NDR | ตรวจจับและตอบสนองบน Network |
| IDS | ระบบตรวจจับการบุกรุก |
| IPS | ระบบป้องกันการบุกรุก |
| DLP | การป้องกันข้อมูลรั่วไหล |
| IOC | ร่องรอยที่อาจบ่งชี้การถูกบุกรุก |
| IOA | สัญญาณพฤติกรรมการโจมตี |
| TTP | เป้าหมาย วิธีการ และกระบวนการของผู้โจมตี |
| Triage | คัดกรองและจัดลำดับ Alert |
| Correlation | เชื่อมโยงเหตุการณ์ |
| Containment | จำกัดการแพร่กระจาย |
| Eradication | กำจัดสาเหตุ |
| Recovery | ฟื้นฟูระบบ |
| Chain of Custody | ประวัติการครอบครองหลักฐาน |
| Tabletop | การฝึกซ้อมแบบอภิปราย |
| Asset Inventory | ทะเบียนทรัพย์สิน |
| EOL | สิ้นสุดวงจรชีวิตผลิตภัณฑ์ตามผู้ผลิต |
| Compensating Control | มาตรการชดเชยความเสี่ยง |
| Security Baseline | ค่าตั้งมาตรฐานความปลอดภัย |
| Configuration Drift | การตั้งค่าเบี่ยงเบนจากมาตรฐาน |
| Change Management | การควบคุมการเปลี่ยนแปลง |
| Patch Management | การจัดการอัปเดตแก้ไขช่องโหว่ |
| Red Team | ทีมจำลองการโจมตี |
| Blue Team | ทีมป้องกัน |
| Purple Team | การทำงานร่วมกันของฝ่ายโจมตีและป้องกัน |
| SAST | ตรวจความปลอดภัยของโค้ดแบบ Static |
| DAST | ทดสอบแอปที่กำลังรัน |
| SCA | ตรวจส่วนประกอบซอฟต์แวร์ภายนอก |
| Threat Modeling | การวิเคราะห์ภัยคุกคามตั้งแต่การออกแบบ |
| Phishing | การหลอกผ่านข้อความหรือช่องทางสื่อสาร |
| Tailgating | การเดินตามผู้มีสิทธิ์เข้าพื้นที่ |
| Impersonation | การแอบอ้างตัวตน |

## 39. Checklist ตรวจความพร้อมก่อนสอบ `[เสริม]`

- [ ] อธิบาย Encryption, Hashing และ Digital Signature โดยไม่สับสนกัน
- [ ] บอกความแตกต่างของ Symmetric และ Asymmetric Cryptography
- [ ] อธิบาย HSM และการปกป้อง Private Key
- [ ] แยก Logging, Aggregation, Alerting, Reporting และ Archiving
- [ ] อธิบาย SIEM Correlation และความหมายของ False Positive/Negative
- [ ] แยก SIEM, EDR, DLP, IDS/IPS และ SOAR ได้
- [ ] แยก IOC, CTI และ MITRE Tactic/Technique ได้
- [ ] ท่อง IR 6 ขั้นตอนพร้อมยกตัวอย่างของแต่ละขั้นตอน
- [ ] แยก Containment, Eradication และ Recovery ได้
- [ ] แยก Tabletop Exercise และ Technical Testing ได้
- [ ] อธิบาย Asset Lifecycle, EOL และ Compensating Controls
- [ ] แยก Configuration Baseline, Drift, Patch และ Change Management
- [ ] อธิบาย Red, Blue และ Purple Team ได้
- [ ] แยก Vulnerability Scan, SAST, DAST และ Threat Modeling
- [ ] แยก Phishing, Tailgating และ Impersonation ได้
- [ ] ทำโจทย์สถานการณ์และอธิบายเหตุผลที่เลือกคำตอบได้

## 40. แผนทบทวน 7 วัน `[เสริม]`

| วัน | หัวข้อ | สิ่งที่ควรทำ |
|---|---|---|
| 1 | Cryptography | วาดแผนภาพ Encryption/Hash/Signature และทบทวน Key Management |
| 2 | Monitoring & SIEM | ฝึกแยก Logging, SIEM, DLP, EDR และ Triage |
| 3 | CTI & ATT&CK | ทบทวน IOC, TTP, Tactic/Technique และ Correlation |
| 4 | Incident Response | ท่อง 6 Phases และฝึก Scenario Ransomware |
| 5 | Asset & Configuration | ทบทวน Lifecycle, EOL, Patch, Baseline, Change |
| 6 | Security Testing | ทบทวน Red/Blue/Purple, SAST/DAST, Threat Modeling |
| 7 | Full Review | ทำโจทย์ 30 ข้อและกลับไปอ่านหัวข้อที่ตอบผิด |

### หลักการตอบโจทย์แบบสถานการณ์

1. อ่านว่าคำถามถาม **FIRST**, **BEST**, **MOST appropriate** หรือถามคำนิยาม
2. ระบุ Asset และเป้าหมาย Security ที่เกี่ยวข้อง
3. แยกว่าปัญหาอยู่ใน **Protect / Detect / Respond / Recover / Improve**
4. พิจารณา **Business Impact**, **Approval**, **Evidence** และ **Safety**
5. ตัดตัวเลือกที่แก้คนละปัญหา หรือข้ามขั้นตอนสำคัญ
6. อย่าคิดว่าทุกสถานการณ์มีคำตอบเดียวกันเสมอ; ขึ้นกับข้อเท็จจริงและนโยบาย

---

## หมายเหตุท้ายเล่ม

เอกสารนี้ขยายจากคู่มือเดิมที่อ้างอิงเนื้อหาบทเรียนในบทสนทนา ส่วนที่ติดป้าย `[เสริม]` เป็นความรู้พื้นฐาน/แนวปฏิบัติที่ช่วยให้เข้าใจหัวข้อ แต่ไม่ได้หมายความว่าทุกหัวข้อเป็นข้อสอบ ISC2 CC 2026 หรือปรากฏในสไลด์ต้นฉบับทั้งหมด ควรใช้ Official Exam Outline และเอกสาร ISC2 ล่าสุดตรวจสอบขอบเขตสอบอีกครั้ง


---

# ส่วน E — ตัวอย่างเห็นภาพทุกหัวข้อ (ฉบับเพิ่มใหม่)

> **วิธีใช้:** ทุกตัวอย่างเป็นข้อมูลสมมติสำหรับการเรียน ไม่ใช่ Log จริงหรือข้อมูลลูกค้าจริง ข้อความ `[เสริม]` คือความรู้เพิ่มเพื่ออธิบาย ไม่ได้ยืนยันว่าอยู่ในสไลด์หรือออกสอบแน่นอน

> **หมายเหตุ:** Data Masking, Redaction, Tokenization และตัวอย่างเครื่องมือเสริมบางหัวข้อเป็นการขยายความตามคำขอ ไม่ใช่การอ้างว่าปรากฏในสไลด์ Domain 5 ที่เรียน

เนื้อหาส่วนนี้มี **77 ตัวอย่าง** ครอบคลุมแนวคิดและขั้นตอนหลักของ Domain 5 พร้อมภาพ Before/After หรือเหตุการณ์จริงจำลอง


## E.01 Data Masking [เสริม]

**ตัวอย่างให้เห็นภาพ:** เลขบัตร `4111 2222 3333 9999` → `**** **** **** 9999`; โทรศัพท์ `081-234-5678` → `08*-***-5678`

**ใช้เมื่อใด / สถานการณ์:** ผู้ใช้บริการเห็นแค่ 4 หลักท้าย ขณะที่ระบบหลังบ้านอาจเก็บค่าจริงตามสิทธิ์

**ข้อควรจำ / จุดที่สับสน:** Masking ซ่อนการแสดงผล ไม่เท่ากับ Encryption และไม่ได้รับประกันว่าข้อมูลต้นฉบับถูกลบ


## E.02 Redaction [เสริม]

**ตัวอย่างให้เห็นภาพ:** เอกสาร `เลขบัญชี 123-456-789` → `เลขบัญชี [REDACTED]`

**ใช้เมื่อใด / สถานการณ์:** เผยแพร่รายงานสาธารณะโดยลบข้อมูลลับออกจากสำเนาที่ส่งออก

**ข้อควรจำ / จุดที่สับสน:** Redaction มุ่งเอาข้อมูลออกจากผลลัพธ์ ไม่ใช่แค่แสดงดอกจันบนหน้าจอ


## E.03 Tokenization [เสริม]

**ตัวอย่างให้เห็นภาพ:** หมายเลขบัตร `4111...9999` → `tok_cust_8F2A`

**ใช้เมื่อใด / สถานการณ์:** ระบบร้านค้าใช้ Token อ้างอิงแทนเลขบัตรจริง

**ข้อควรจำ / จุดที่สับสน:** Token ไม่ใช่ ciphertext โดยตัวมันเอง; ระบบ Mapping ต้องถูกป้องกัน


## E.04 Data Classification [เสริม]

**ตัวอย่างให้เห็นภาพ:** ไฟล์ `public_menu.pdf` = Public; `payroll_2026.xlsx` = Confidential

**ใช้เมื่อใด / สถานการณ์:** ติดป้ายระดับข้อมูลเพื่อกำหนดสิทธิ์และ DLP Policy

**ข้อควรจำ / จุดที่สับสน:** Classification คือการจัดประเภท ไม่ใช่การเข้ารหัส


## E.05 Encryption

**ตัวอย่างให้เห็นภาพ:** `HELLO` → `8fA$...` (ciphertext สมมติ)

**ใช้เมื่อใด / สถานการณ์:** ไฟล์สำรองข้อมูลถูกเข้ารหัสก่อนส่งไป Cloud

**ข้อควรจำ / จุดที่สับสน:** ต้องมี Key จึงถอดกลับได้; ciphertext ในตัวอย่างไม่ใช่ผลจากอัลกอริทึมจริง


## E.06 Symmetric Encryption

**ตัวอย่างให้เห็นภาพ:** AES ใช้ Secret Key K เข้ารหัสและถอดรหัสไฟล์ 2 GB

**ใช้เมื่อใด / สถานการณ์:** Full-disk Encryption ของ Laptop บริษัท

**ข้อควรจำ / จุดที่สับสน:** Key เดียวกันสำหรับเข้ารหัสและถอดรหัส ไม่ใช่ Public/Private Key


## E.07 Asymmetric Encryption

**ตัวอย่างให้เห็นภาพ:** Alice ใช้ Public Key ของ Bob เข้ารหัสข้อความ; Bob ใช้ Private Key ถอด

**ใช้เมื่อใด / สถานการณ์:** ส่ง Secret ขนาดเล็กหรือใช้ Key Establishment ตามโปรโตคอล

**ข้อควรจำ / จุดที่สับสน:** Public Key ที่ใช้เข้ารหัสเพื่อความลับเป็นของผู้รับ


## E.08 Hashing

**ตัวอย่างให้เห็นภาพ:** ไฟล์ `report.pdf` ได้ SHA-256 `H1`; เปลี่ยน 1 byte ได้ `H2` ต่างจากเดิม

**ใช้เมื่อใด / สถานการณ์:** ตรวจความถูกต้องของไฟล์ที่ดาวน์โหลด

**ข้อควรจำ / จุดที่สับสน:** Hash ไม่ใช่การซ่อนข้อความ และไม่ถอดกลับด้วย Key


## E.09 Password Hashing + Salt [เสริม]

**ตัวอย่างให้เห็นภาพ:** `password123` + Salt สุ่ม → Password Hash ที่เก็บในฐานข้อมูล

**ใช้เมื่อใด / สถานการณ์:** เมื่อ Login ระบบคำนวณ/ตรวจสอบ Password Hash แทนเก็บรหัสผ่านตรง ๆ

**ข้อควรจำ / จุดที่สับสน:** ใช้ Argon2id/bcrypt/PBKDF2 ไม่ใช้ SHA-256 ตรง ๆ เป็นตัวเลือกหลัก


## E.10 Digital Signature

**ตัวอย่างให้เห็นภาพ:** เจ้าของใช้ Private Key ลงนามไฟล์; ผู้รับตรวจด้วย Public Key

**ใช้เมื่อใด / สถานการณ์:** ตรวจว่าซอฟต์แวร์อัปเดตมาจากผู้ลงนามที่เชื่อถือได้และไม่ถูกแก้ไข

**ข้อควรจำ / จุดที่สับสน:** Signature ไม่ได้เข้ารหัสเนื้อหาให้ลับ


## E.11 HSM

**ตัวอย่างให้เห็นภาพ:** Private Key สำหรับ Certificate Signing อยู่ใน HSM และไม่ส่งออกแบบ plaintext

**ใช้เมื่อใด / สถานการณ์:** ธนาคารให้ HSM ทำงานด้าน Cryptographic Keys

**ข้อควรจำ / จุดที่สับสน:** HSM ปกป้อง Keys ไม่ใช่เครื่องมือสแกน Malware


## E.12 PKI / Certificate [เสริม]

**ตัวอย่างให้เห็นภาพ:** Browser ตรวจ Certificate ของ `portal.example` และ Chain of Trust

**ใช้เมื่อใด / สถานการณ์:** ผู้ใช้เชื่อมต่อเว็บไซต์ผ่าน TLS

**ข้อควรจำ / จุดที่สับสน:** Certificate ผูก Public Key กับตัวตนภายใต้การตรวจสอบความเชื่อถือ


## E.13 TLS [เสริม]

**ตัวอย่างให้เห็นภาพ:** `https://` ปกป้องข้อมูลระหว่าง Browser กับ Server

**ใช้เมื่อใด / สถานการณ์:** พนักงานส่งข้อมูล Login ไปยัง Web App

**ข้อควรจำ / จุดที่สับสน:** TLS ช่วยป้องกันข้อมูลระหว่างทาง แต่ไม่รับประกันว่าเว็บไซต์นั้นไม่เป็นอันตราย


## E.14 Logging

**ตัวอย่างให้เห็นภาพ:** `2026-11-03 09:01 login_failed user=ann src=10.0.0.8`

**ใช้เมื่อใด / สถานการณ์:** Server บันทึกความพยายาม Login

**ข้อควรจำ / จุดที่สับสน:** Log คือหลักฐานเหตุการณ์ ไม่ใช่การวิเคราะห์ด้วยตัวเอง


## E.15 Monitoring

**ตัวอย่างให้เห็นภาพ:** ระบบตรวจ Failed Login ทุก 5 นาทีและเปรียบเทียบ Threshold

**ใช้เมื่อใด / สถานการณ์:** SOC Dashboard เฝ้าติดตาม Authentication Activity

**ข้อควรจำ / จุดที่สับสน:** Monitoring ใช้ข้อมูลเพื่อตรวจสภาวะหรือความผิดปกติ


## E.16 Log Aggregation

**ตัวอย่างให้เห็นภาพ:** Firewall + Windows + VPN Logs → Central Log Platform

**ใช้เมื่อใด / สถานการณ์:** Analyst ค้นหาเหตุการณ์เดียวกันจากหลายระบบ

**ข้อควรจำ / จุดที่สับสน:** Aggregation คือรวบรวม; Correlation คือเชื่อมความหมาย


## E.17 Alerting

**ตัวอย่างให้เห็นภาพ:** ถ้า Failed Login > 20 ครั้ง/5 นาที → ส่ง Alert

**ใช้เมื่อใด / สถานการณ์:** SIEM แจ้งเตือน SOC Analyst

**ข้อควรจำ / จุดที่สับสน:** Alert ยังไม่เท่ากับ Incident


## E.18 Reporting

**ตัวอย่างให้เห็นภาพ:** `Weekly Report: 35 alerts, 3 confirmed incidents`

**ใช้เมื่อใด / สถานการณ์:** หัวหน้าทีมดูแนวโน้มความปลอดภัยประจำสัปดาห์

**ข้อควรจำ / จุดที่สับสน:** Report เป็นสรุป ไม่ใช่ Notification ทันที


## E.19 Archiving

**ตัวอย่างให้เห็นภาพ:** ย้าย Log เก่า 12 เดือนไป Storage ที่มี Retention Policy

**ใช้เมื่อใด / สถานการณ์:** ใช้ Log ย้อนหลังสำหรับ Investigation

**ข้อควรจำ / จุดที่สับสน:** ต้องคำนึงถึงความสมบูรณ์ของหลักฐานและสิทธิ์เข้าถึง


## E.20 Agent-Based Monitoring

**ตัวอย่างให้เห็นภาพ:** EDR Agent บน Laptop ส่ง Process Creation Logs

**ใช้เมื่อใด / สถานการณ์:** ตรวจ Process ที่เรียก PowerShell

**ข้อควรจำ / จุดที่สับสน:** Agent ต้องติดตั้งและดูแลบน Endpoint


## E.21 Agentless Monitoring

**ตัวอย่างให้เห็นภาพ:** Monitoring Server สอบถามอุปกรณ์ผ่าน SNMP

**ใช้เมื่อใด / สถานการณ์:** ตรวจ Interface Status ของ Switch

**ข้อควรจำ / จุดที่สับสน:** ไม่ต้องลง Agent เฉพาะบนอุปกรณ์เป้าหมาย


## E.22 SIEM

**ตัวอย่างให้เห็นภาพ:** VPN Login → Windows Login → Privilege Change ถูกเชื่อมใน Alert เดียว

**ใช้เมื่อใด / สถานการณ์:** ตรวจจับ Account Compromise

**ข้อควรจำ / จุดที่สับสน:** SIEM ทำ Log Correlation ไม่ใช่ Antivirus โดยตรง


## E.23 Antivirus

**ตัวอย่างให้เห็นภาพ:** ตรวจไฟล์ `invoice.exe` ว่าเป็น Malware แล้ว Quarantine

**ใช้เมื่อใด / สถานการณ์:** ป้องกัน Malware บนเครื่องพนักงาน

**ข้อควรจำ / จุดที่สับสน:** Quarantine คือแยกไฟล์ต้องสงสัย ไม่ใช่ลบทุกกรณี


## E.24 DLP — Data at Rest

**ตัวอย่างให้เห็นภาพ:** พบไฟล์ `customers.csv` มี PII ใน Shared Folder ที่เปิดกว้าง

**ใช้เมื่อใด / สถานการณ์:** ตรวจข้อมูลสำคัญที่เก็บใน Storage

**ข้อควรจำ / จุดที่สับสน:** At Rest = ข้อมูลที่จัดเก็บ


## E.25 DLP — Data in Motion

**ตัวอย่างให้เห็นภาพ:** พนักงานส่งอีเมลแนบ `salary.xlsx` ออกนอกบริษัท → Block

**ใช้เมื่อใด / สถานการณ์:** ป้องกันข้อมูลรั่วผ่าน Email

**ข้อควรจำ / จุดที่สับสน:** In Motion = ข้อมูลกำลังเคลื่อนย้าย


## E.26 DLP — Data in Use

**ตัวอย่างให้เห็นภาพ:** Copy รายชื่อลูกค้าไป USB → Policy แจ้งเตือน/บล็อก

**ใช้เมื่อใด / สถานการณ์:** ควบคุมการใช้งานข้อมูลบน Endpoint

**ข้อควรจำ / จุดที่สับสน:** In Use = ข้อมูลขณะใช้งาน


## E.27 SNMP Trap

**ตัวอย่างให้เห็นภาพ:** Switch ส่ง `linkDown` Trap ไป Network Management

**ใช้เมื่อใด / สถานการณ์:** แจ้งเมื่อพอร์ตเครือข่ายล่ม

**ข้อควรจำ / จุดที่สับสน:** Trap เป็นการแจ้งจากอุปกรณ์ ไม่ต้องรอ Poll


## E.28 Event / Alert / Incident

**ตัวอย่างให้เห็นภาพ:** Event: login_failed; Alert: ล้มเหลว 100 ครั้ง; Incident: ยืนยันบัญชีถูกโจมตี

**ใช้เมื่อใด / สถานการณ์:** SOC แยกขั้นตอนการตรวจสอบ

**ข้อควรจำ / จุดที่สับสน:** Alert ไม่ใช่ Incident เสมอไป


## E.29 Triage

**ตัวอย่างให้เห็นภาพ:** Alert A เป็นการทดสอบที่อนุมัติ; Alert B เป็น Admin Login แปลก → ตรวจ B ก่อน

**ใช้เมื่อใด / สถานการณ์:** จัดคิวตรวจสอบ Alert

**ข้อควรจำ / จุดที่สับสน:** Triage คือคัดกรองและจัดลำดับ


## E.30 True Positive

**ตัวอย่างให้เห็นภาพ:** EDR แจ้ง Malware และพบ Malware จริง

**ใช้เมื่อใด / สถานการณ์:** ตรวจสอบความแม่นยำของ Detection

**ข้อควรจำ / จุดที่สับสน:** แจ้งเตือนถูกต้อง


## E.31 False Positive

**ตัวอย่างให้เห็นภาพ:** SIEM แจ้ง Brute Force แต่เป็น Security Test ที่ได้รับอนุญาต

**ใช้เมื่อใด / สถานการณ์:** ลด Alert Noise ด้วย Tuning

**ข้อควรจำ / จุดที่สับสน:** มี Alert แต่ไม่มีภัยตามที่ระบบกล่าวอ้าง


## E.32 False Negative

**ตัวอย่างให้เห็นภาพ:** ผู้โจมตีขโมยข้อมูล แต่ DLP ไม่แจ้งเตือน

**ใช้เมื่อใด / สถานการณ์:** ค้นหา Detection Gap

**ข้อควรจำ / จุดที่สับสน:** มีภัยจริงแต่ไม่ตรวจพบ


## E.33 True Negative

**ตัวอย่างให้เห็นภาพ:** ไม่มีการโจมตีและระบบไม่แจ้งเตือน

**ใช้เมื่อใด / สถานการณ์:** ผลการตรวจสอบปกติ

**ข้อควรจำ / จุดที่สับสน:** ไม่มีภัยและไม่แจ้ง


## E.34 Prioritization

**ตัวอย่างให้เห็นภาพ:** Ransomware บน Production DB = P1; Login Fail 1 ครั้ง = ต่ำกว่า

**ใช้เมื่อใด / สถานการณ์:** จัดลำดับตาม Impact/Urgency

**ข้อควรจำ / จุดที่สับสน:** Priority ไม่ได้ขึ้นกับจำนวน Alert อย่างเดียว


## E.35 Event Correlation

**ตัวอย่างให้เห็นภาพ:** Failed Login → Success → Add Admin Role → Download Files

**ใช้เมื่อใด / สถานการณ์:** เชื่อม Events ให้เห็น Attack Chain

**ข้อควรจำ / จุดที่สับสน:** เหตุการณ์เดี่ยวอาจไม่ชัด แต่หลายเหตุการณ์สัมพันธ์กัน


## E.36 Threat Actor — Cybercriminal

**ตัวอย่างให้เห็นภาพ:** กลุ่มโจมตีเรียกค่าไถ่จากบริษัท

**ใช้เมื่อใด / สถานการณ์:** วิเคราะห์แรงจูงใจด้านเงิน

**ข้อควรจำ / จุดที่สับสน:** Motivation ไม่ได้พิสูจน์ตัวตนผู้โจมตี


## E.37 Threat Actor — Insider

**ตัวอย่างให้เห็นภาพ:** พนักงานดาวน์โหลดไฟล์ลูกค้าก่อนลาออก

**ใช้เมื่อใด / สถานการณ์:** ตรวจ Insider Risk

**ข้อควรจำ / จุดที่สับสน:** Insider อาจตั้งใจหรือไม่ตั้งใจ


## E.38 Threat Actor — Nation State

**ตัวอย่างให้เห็นภาพ:** กลุ่มมีทรัพยากรสูงมุ่งขโมยข้อมูลยุทธศาสตร์

**ใช้เมื่อใด / สถานการณ์:** Threat Modeling สำหรับหน่วยงานสำคัญ

**ข้อควรจำ / จุดที่สับสน:** การระบุ Attribution ต้องมีหลักฐาน


## E.39 CTI

**ตัวอย่างให้เห็นภาพ:** ข่าวกรองระบุ Campaign ใช้ Phishing Domain รูปแบบใหม่

**ใช้เมื่อใด / สถานการณ์:** ปรับ Email Filtering Rules

**ข้อควรจำ / จุดที่สับสน:** CTI เป็นข้อมูลที่วิเคราะห์แล้วนำไปใช้ตัดสินใจ


## E.40 IOC — IP / Domain

**ตัวอย่างให้เห็นภาพ:** พบการติดต่อ `bad.example` (ชื่อสมมติ) ใน DNS Logs

**ใช้เมื่อใด / สถานการณ์:** Threat Hunting ตรวจเครื่องที่เชื่อมต่อ

**ข้อควรจำ / จุดที่สับสน:** IOC เป็นเบาะแส ไม่ใช่ข้อสรุปว่าถูกโจมตีสำเร็จ


## E.41 IOC — File Hash

**ตัวอย่างให้เห็นภาพ:** Malware Sample มี SHA-256 ตรงกับ Known Malicious Hash

**ใช้เมื่อใด / สถานการณ์:** ค้นหาไฟล์เดียวกันใน Endpoint Fleet

**ข้อควรจำ / จุดที่สับสน:** Hash ของไฟล์คือ Indicator ไม่ใช่ Password Hash


## E.42 MITRE ATT&CK — Tactic

**ตัวอย่างให้เห็นภาพ:** Credential Access = เป้าหมายเข้าถึงข้อมูลรับรอง

**ใช้เมื่อใด / สถานการณ์:** จัดหมวดพฤติกรรมผู้โจมตี

**ข้อควรจำ / จุดที่สับสน:** Tactic = Why


## E.43 MITRE ATT&CK — Technique

**ตัวอย่างให้เห็นภาพ:** Credential Dumping = วิธีนำข้อมูลรับรองออกจากระบบ

**ใช้เมื่อใด / สถานการณ์:** สร้าง Detection Rule

**ข้อควรจำ / จุดที่สับสน:** Technique = How


## E.44 IR Preparation

**ตัวอย่างให้เห็นภาพ:** จัด IR Contact List, Playbook, Backup, Tabletop Schedule

**ใช้เมื่อใด / สถานการณ์:** เตรียมก่อนเหตุการณ์

**ข้อควรจำ / จุดที่สับสน:** Preparation ต้องทำก่อนเกิด Incident


## E.45 IR Detection & Analysis

**ตัวอย่างให้เห็นภาพ:** EDR แจ้ง Process เข้ารหัสไฟล์จำนวนมาก → ตรวจ Logs

**ใช้เมื่อใด / สถานการณ์:** ยืนยัน Scope และ Severity

**ข้อควรจำ / จุดที่สับสน:** อย่าเพิ่งสรุปว่าเป็น Ransomware โดยไม่มีหลักฐาน


## E.46 IR Containment

**ตัวอย่างให้เห็นภาพ:** Isolate Laptop ที่ติด Malware จาก Network

**ใช้เมื่อใด / สถานการณ์:** หยุดการแพร่กระจาย

**ข้อควรจำ / จุดที่สับสน:** Containment ไม่ใช่ Eradication


## E.47 IR Eradication

**ตัวอย่างให้เห็นภาพ:** ลบ Persistence Mechanism และแก้ Exploited Vulnerability

**ใช้เมื่อใด / สถานการณ์:** กำจัด Root Cause

**ข้อควรจำ / จุดที่สับสน:** การ Disconnect เครื่องอย่างเดียวไม่ใช่การกำจัดสาเหตุ


## E.48 IR Recovery

**ตัวอย่างให้เห็นภาพ:** Restore Clean Backup แล้ว Monitor ก่อนเปิด Production

**ใช้เมื่อใด / สถานการณ์:** นำบริการกลับมาอย่างปลอดภัย

**ข้อควรจำ / จุดที่สับสน:** ต้องตรวจสอบก่อนคืนระบบ


## E.49 IR Post-Incident Review

**ตัวอย่างให้เห็นภาพ:** พบว่า Alert ถูกละเลย → ปรับ Runbook และ Escalation

**ใช้เมื่อใด / สถานการณ์:** Lessons Learned หลังเหตุการณ์

**ข้อควรจำ / จุดที่สับสน:** เน้นปรับปรุงระบบและกระบวนการ


## E.50 Tabletop Exercise

**ตัวอย่างให้เห็นภาพ:** ทีมประชุม: “ถ้า DB ถูก Ransomware จะโทรหาใครก่อน?”

**ใช้เมื่อใด / สถานการณ์:** ทดสอบบทบาท/การสื่อสาร

**ข้อควรจำ / จุดที่สับสน:** Discussion-based ไม่ใช่การลงมือโจมตีจริง


## E.51 Technical Testing

**ตัวอย่างให้เห็นภาพ:** Restore Backup ไป Test Environment และตรวจ Integrity

**ใช้เมื่อใด / สถานการณ์:** ทดสอบว่าระบบกู้คืนได้จริง

**ข้อควรจำ / จุดที่สับสน:** ลงมือทดสอบ Controls


## E.52 Asset Inventory

**ตัวอย่างให้เห็นภาพ:** `LT-023 | owner=IT | OS=Windows | status=Active`

**ใช้เมื่อใด / สถานการณ์:** ติดตามเครื่องและผู้รับผิดชอบ

**ข้อควรจำ / จุดที่สับสน:** ไม่รู้ว่ามี Asset อะไรจะป้องกันได้ยาก


## E.53 Asset Lifecycle — Plan/Acquire

**ตัวอย่างให้เห็นภาพ:** กำหนดว่า Laptop ต้องรองรับ TPM ก่อนจัดซื้อ

**ใช้เมื่อใด / สถานการณ์:** วางมาตรฐานก่อนนำอุปกรณ์เข้าระบบ

**ข้อควรจำ / จุดที่สับสน:** เริ่ม Security ตั้งแต่การจัดหา


## E.54 Asset Lifecycle — Deploy/Maintain

**ตัวอย่างให้เห็นภาพ:** ติดตั้ง EDR, Disk Encryption, Patch OS

**ใช้เมื่อใด / สถานการณ์:** รักษาเครื่องให้อยู่ในสภาพปลอดภัย

**ข้อควรจำ / จุดที่สับสน:** Deployment และ Maintenance เป็นคนละช่วง


## E.55 Asset Lifecycle — Retire/Dispose

**ตัวอย่างให้เห็นภาพ:** Laptop เก่าถูกลบข้อมูลด้วยวิธี Sanitization ก่อนขายต่อ

**ใช้เมื่อใด / สถานการณ์:** ป้องกันข้อมูลค้างใน Storage

**ข้อควรจำ / จุดที่สับสน:** ลบไฟล์ธรรมดาอาจไม่เพียงพอ


## E.56 EOL

**ตัวอย่างให้เห็นภาพ:** Server OS ไม่ได้รับ Security Patches อีกต่อไป

**ใช้เมื่อใด / สถานการณ์:** ประเมินความเสี่ยงระบบ Legacy

**ข้อควรจำ / จุดที่สับสน:** EOL เพิ่มความเสี่ยงเพราะไม่มี Support


## E.57 Compensating Controls

**ตัวอย่างให้เห็นภาพ:** ยังอัปเกรด Legacy Server ไม่ได้ → แยก VLAN + จำกัด Access + Monitor

**ใช้เมื่อใด / สถานการณ์:** ลดความเสี่ยงชั่วคราว

**ข้อควรจำ / จุดที่สับสน:** ไม่ใช่การแก้ช่องโหว่โดยตรง


## E.58 Configuration Baseline

**ตัวอย่างให้เห็นภาพ:** `Firewall=ON; RDP Internet=OFF; MFA=ON`

**ใช้เมื่อใด / สถานการณ์:** ใช้เป็นมาตรฐานตรวจ Server ทุกเครื่อง

**ข้อควรจำ / จุดที่สับสน:** Baseline คือ Approved Secure State


## E.59 Configuration Drift

**ตัวอย่างให้เห็นภาพ:** Baseline `RDP=OFF` แต่เครื่องหนึ่งกลายเป็น `RDP=ON`

**ใช้เมื่อใด / สถานการณ์:** Audit พบความคลาดเคลื่อน

**ข้อควรจำ / จุดที่สับสน:** Drift คือความเบี่ยงเบนจาก Baseline


## E.60 Patch Management

**ตัวอย่างให้เห็นภาพ:** Identify CVE → Assess Criticality → Test → Deploy → Verify

**ใช้เมื่อใด / สถานการณ์:** จัดการ Patch สำหรับ Production

**ข้อควรจำ / จุดที่สับสน:** อย่าลืม Test และ Verify


## E.61 Change Management

**ตัวอย่างให้เห็นภาพ:** Request เปิด TCP 443 → Risk Assessment → Approval → Test → Implement → Verify → Document

**ใช้เมื่อใด / สถานการณ์:** เปลี่ยน Firewall Rule อย่างควบคุม

**ข้อควรจำ / จุดที่สับสน:** Change Control เน้นอนุมัติและติดตามการเปลี่ยนแปลง


## E.62 Blue Team

**ตัวอย่างให้เห็นภาพ:** SOC ตรวจ Alert และ Isolate Endpoint

**ใช้เมื่อใด / สถานการณ์:** ฝ่ายป้องกัน

**ข้อควรจำ / จุดที่สับสน:** Blue = Defend/Detect/Respond


## E.63 Red Team

**ตัวอย่างให้เห็นภาพ:** ทีมที่ได้รับอนุญาตจำลองโจมตี Web App

**ใช้เมื่อใด / สถานการณ์:** วัดความพร้อมการป้องกัน

**ข้อควรจำ / จุดที่สับสน:** Red = Authorized Adversary Simulation


## E.64 Purple Team

**ตัวอย่างให้เห็นภาพ:** Red จำลอง Phishing; Blue ตรวจไม่พบ; ร่วมกันแก้ Detection

**ใช้เมื่อใด / สถานการณ์:** ปรับปรุง Security Controls

**ข้อควรจำ / จุดที่สับสน:** Purple = Collaboration


## E.65 Vulnerability Scanning

**ตัวอย่างให้เห็นภาพ:** Scanner พบ `OpenSSL version X` มี Known CVE

**ใช้เมื่อใด / สถานการณ์:** ทำรายการช่องโหว่เพื่อจัดลำดับแก้ไข

**ข้อควรจำ / จุดที่สับสน:** Scanner อาจมี False Positive ต้อง Validate


## E.66 Penetration Testing

**ตัวอย่างให้เห็นภาพ:** Tester ที่ได้รับอนุญาตพิสูจน์ว่า Weak Access Control ใช้เข้าถึงข้อมูลทดสอบได้

**ใช้เมื่อใด / สถานการณ์:** ตรวจผลกระทบจริงใน Scope ที่อนุมัติ

**ข้อควรจำ / จุดที่สับสน:** ต่างจากแค่รายการช่องโหว่


## E.67 SAST

**ตัวอย่างให้เห็นภาพ:** โค้ดมี `DB_PASSWORD="demo123"` → Tool Flag Hardcoded Secret

**ใช้เมื่อใด / สถานการณ์:** ตรวจระหว่าง Development

**ข้อควรจำ / จุดที่สับสน:** SAST ตรวจ Code โดยไม่ต้องรันแอป


## E.68 DAST

**ตัวอย่างให้เห็นภาพ:** Web App ที่รันอยู่ไม่ยกเลิก Session หลัง Logout → Tool/Test พบ

**ใช้เมื่อใด / สถานการณ์:** ตรวจ Runtime Behavior

**ข้อควรจำ / จุดที่สับสน:** DAST ทดสอบแอปที่กำลังทำงาน


## E.69 Threat Modeling

**ตัวอย่างให้เห็นภาพ:** วาด Data Flow ของ Payment App แล้วถาม “จุดใดเสี่ยง Credential Theft?”

**ใช้เมื่อใด / สถานการณ์:** ออกแบบ Security Controls ตั้งแต่ต้น

**ข้อควรจำ / จุดที่สับสน:** Threat Modeling = วิเคราะห์ล่วงหน้า


## E.70 Physical Penetration Testing

**ตัวอย่างให้เห็นภาพ:** Tester ที่ได้รับอนุญาตตรวจว่าประตู Server Room เปิดค้างหรือไม่

**ใช้เมื่อใด / สถานการณ์:** ทดสอบ Physical Controls

**ข้อควรจำ / จุดที่สับสน:** ต้องอยู่ใน Scope และได้รับอนุญาต


## E.71 Phishing

**ตัวอย่างให้เห็นภาพ:** Email ปลอม “รีเซ็ตรหัสผ่านทันที” พร้อมลิงก์เว็บเลียนแบบ

**ใช้เมื่อใด / สถานการณ์:** ฝึก Security Awareness

**ข้อควรจำ / จุดที่สับสน:** Phishing หลอกผ่านข้อความ/ช่องทางสื่อสาร


## E.72 Tailgating

**ตัวอย่างให้เห็นภาพ:** ผู้ไม่มีบัตรเดินตามพนักงานผ่านประตูที่ต้องแตะบัตร

**ใช้เมื่อใด / สถานการณ์:** ตรวจ Physical Access Policy

**ข้อควรจำ / จุดที่สับสน:** Tailgating = Follow Authorized Person


## E.73 Impersonation

**ตัวอย่างให้เห็นภาพ:** ผู้โจมตีแต่งตัวเป็นช่าง IT และขอเข้าห้อง Server

**ใช้เมื่อใด / สถานการณ์:** ทดสอบ Identity Verification

**ข้อควรจำ / จุดที่สับสน:** Impersonation = Pretend to be Someone Else


## E.74 SOAR [เสริม]

**ตัวอย่างให้เห็นภาพ:** Alert จาก SIEM → Playbook สร้าง Ticket และขออนุมัติ Block IP

**ใช้เมื่อใด / สถานการณ์:** ช่วยประสานและทำงานตอบสนองอัตโนมัติ

**ข้อควรจำ / จุดที่สับสน:** SOAR ไม่เหมือน SIEM แม้อาจทำงานร่วมกัน


## E.75 EDR [เสริม]

**ตัวอย่างให้เห็นภาพ:** Endpoint ตรวจ Suspicious Process Tree และ Isolate Host

**ใช้เมื่อใด / สถานการณ์:** Endpoint Detection and Response

**ข้อควรจำ / จุดที่สับสน:** EDR ให้ Telemetry และ Response เชิงลึกกว่า AV แบบพื้นฐาน


## E.76 IDS vs IPS [เสริม]

**ตัวอย่างให้เห็นภาพ:** IDS แจ้งเตือน Packet Pattern; IPS อยู่ในเส้นทางและบล็อกได้

**ใช้เมื่อใด / สถานการณ์:** ตรวจ/ป้องกัน Network Attack

**ข้อควรจำ / จุดที่สับสน:** IDS = Detect; IPS = Prevent


## E.77 Backup 3-2-1 [เสริม]

**ตัวอย่างให้เห็นภาพ:** ข้อมูล 3 ชุด, 2 ประเภทสื่อ, 1 ชุดอยู่นอกสถานที่

**ใช้เมื่อใด / สถานการณ์:** เสริมความพร้อม Recovery

**ข้อควรจำ / จุดที่สับสน:** ต้องทดสอบ Restore และปกป้อง Backup จาก Ransomware


## E.ภาคปฏิบัติ — 6 สถานการณ์แบบต้นทาง → ปลายทาง

### Case 1: Data Masking vs Encryption vs Hashing
ข้อมูลลูกค้าเดิม: `Name=Somchai; Phone=0812345678; Card=4111222233339999`

| วิธี | ผลลัพธ์ที่เห็น | จุดประสงค์ |
|---|---|---|
| Masking | `Phone=08******78; Card=************9999` | ซ่อนบางส่วนตอนแสดงผล |
| Encryption | `Card=<ciphertext>` | ทำให้ข้อมูลอ่านไม่ได้หากไม่มี Key |
| Hashing | `SHA256(Card)=<hash>` | สร้าง Fingerprint แบบทางเดียว (ไม่ใช่วิธีเก็บบัตรเพื่อใช้ชำระเงิน) |
| Tokenization | `Card=tok_8F2A` | แทนค่าจริงด้วย Token |
| Redaction | `Card=[REDACTED]` | เอาค่าออกจากสำเนาที่เผยแพร่ |

**ข้อควรระวัง:** Masking แบบ `****9999` บนหน้าจอไม่ได้ยืนยันว่าข้อมูลที่จัดเก็บถูกเข้ารหัสหรือถูกลบ; Hash ของข้อมูลที่เดาได้ง่ายอาจถูกเดาย้อนด้วยการลองค่าได้

### Case 2: SOC Alert ตั้งแต่ Log ถึง Incident
1. `09:00 user=alice login_failed` 20 ครั้ง → **Log/Event**
2. SIEM Rule `>15 failures/5min` → **Alert**
3. Analyst ตรวจ IP, Account, Geo, MFA → **Triage**
4. พบ Successful Login + Download ข้อมูล → **Correlation**
5. ยืนยันว่าบัญชีถูกยึด → **Incident**
6. Disable Session/Reset Credentials → **Containment**
7. ลบ Persistence และแก้ช่องทางเข้าถึง → **Eradication**
8. Restore/Verify Service → **Recovery**
9. เพิ่ม Detection Rule → **Post-Incident Review**

### Case 3: DLP และข้อมูล 3 สถานะ
- At Rest: `customers.csv` อยู่ใน Shared Drive ที่สิทธิ์เปิดกว้าง → ตรวจหาและจำกัดสิทธิ์
- In Motion: ส่ง `customers.csv` ออกผ่าน Email → DLP Block/Quarantine ตาม Policy
- In Use: Copy ข้อมูลจากแอปไป USB → Endpoint DLP บล็อกตาม Policy

### Case 4: Patch vs Change vs Configuration
- **Patch:** Vendor ออก Security Update ให้ Web Server
- **Change:** ทีมขออนุมัติ Deploy Patch ใน Maintenance Window พร้อม Rollback Plan
- **Configuration:** ตรวจว่า Firewall/Services ยังตรง Approved Baseline หลัง Deploy
- **Verification:** ตรวจ Patch Version และ Application Health

### Case 5: Red, Blue, Purple
- Red Team จำลอง Login Attack ภายใต้ Rules of Engagement
- Blue Team ตรวจ Log และตอบสนอง
- Purple Team ทบทวนร่วมกันว่ากฎ SIEM พลาดตรงไหน แล้วทดสอบซ้ำ

### Case 6: SAST vs DAST vs Threat Modeling
- Threat Modeling: ก่อนเขียนแอป ระบุความเสี่ยง Account Takeover และออกแบบ MFA
- SAST: ระหว่างเขียนโค้ด พบ Hardcoded Secret
- DAST: เมื่อแอปทำงาน พบ Session ยังใช้ได้หลัง Logout
- Vulnerability Scan: พบ Library Version ที่มี Known CVE
- Penetration Test: ผู้ทดสอบที่ได้รับอนุญาตตรวจยืนยันผลกระทบภายใต้ Scope

## E.เช็กลิสต์ทบทวนด้วยตัวเอง
- [ ] อธิบายความต่าง Masking / Encryption / Hashing / Tokenization / Redaction ได้
- [ ] อ่าน Log แล้วแยก Event, Alert, Incident ได้
- [ ] ยกตัวอย่าง SIEM Correlation ได้ 1 Attack Chain
- [ ] แยก DLP At Rest / In Motion / In Use ได้
- [ ] อธิบาย IR 6 Phases ด้วย Ransomware Example ได้
- [ ] แยก EOL, Compensating Controls, Baseline, Drift ได้
- [ ] อธิบาย Patch vs Change vs Configuration Management ได้
- [ ] แยก SAST, DAST, Vulnerability Scan, Pen Test, Threat Modeling ได้
- [ ] แยก Phishing, Tailgating, Impersonation ได้

---
**จบ Domain 5 Master Guide พร้อมตัวอย่างเพิ่มเติม**
