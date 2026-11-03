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
