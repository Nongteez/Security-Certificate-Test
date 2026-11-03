# ISC2 CC 2026 — Domain 5: Security Operations & Incident Response

สรุปเนื้อหาฉบับละเอียด ตั้งแต่ต้นจนจบ สำหรับทบทวนและเตรียมสอบ ISC2 Certified in Cybersecurity (CC)

สรุปนี้จะเรียบเรียงตามเนื้อหาที่เราเรียนร่วมกันจากสไลด์ โดยเน้นทั้ง ความหมาย หลักการทำงาน ตัวอย่างสถานการณ์จริง ความแตกต่างของคำศัพท์ และจุดสำคัญสำหรับข้อสอบ

ผมจะไม่สรุปเพียงแค่คำจำกัดความ แต่จะอธิบายให้เห็นว่าแต่ละหัวข้อเกี่ยวข้องกันอย่างไร เพื่อให้กลับมาอ่านทบทวนภายหลังแล้วยังเข้าใจได้โดยไม่ต้องเปิดสไลด์ใหม่

## ภาพรวม Domain 5

Domain นี้เกี่ยวกับการปฏิบัติงานด้าน Cybersecurity ในชีวิตจริง ตั้งแต่การปกป้องข้อมูล การตรวจจับภัยคุกคาม การตอบสนองต่อเหตุการณ์ ไปจนถึงการดูแลระบบให้ปลอดภัยอย่างต่อเนื่อง

เนื้อหาที่เราเรียนแบ่งเป็น 4 กลุ่มหลัก

| หัวข้อ                                  | สิ่งที่ต้องเข้าใจ                                                                      |
| --------------------------------------- | -------------------------------------------------------------------------------------- |
| 5.1 Cryptography & Security Concepts    | Encryption, Hashing, Digital Signatures, HSM                                           |
| 5.2 Security Operations                 | Logging, Monitoring, SIEM, Threat Intelligence, MITRE ATT&CK                           |
| 5.3 Incident Response                   | IR Plan, Incident Handling, Tabletop Exercise, Technical Testing                       |
| 5.4 Asset Protection & Security Testing | Asset Lifecycle, EOL, Configuration, Change Management, SAST, DAST, Social Engineering |

# Part 1 — Cryptography & Data Protection

## 1. Cryptography คืออะไร?

Cryptography หรือวิทยาการเข้ารหัสลับ คือการใช้หลักการทางคณิตศาสตร์และอัลกอริทึมเพื่อปกป้องข้อมูลจากผู้ที่ไม่มีสิทธิ์เข้าถึง

ในงาน Cybersecurity เราใช้ Cryptography เพื่อสนับสนุนคุณสมบัติสำคัญ เช่น

- Confidentiality: ป้องกันไม่ให้บุคคลที่ไม่มีสิทธิ์อ่านข้อมูล
- Integrity: ช่วยตรวจสอบว่าข้อมูลถูกเปลี่ยนแปลงหรือไม่
- Authentication: ช่วยยืนยันตัวตนหรือแหล่งที่มาของข้อมูล
- Non-repudiation: ช่วยสร้างหลักฐานว่าผู้ลงนามไม่สามารถปฏิเสธการลงนามได้โดยง่าย

สิ่งสำคัญคือ Cryptography ไม่ได้มีเพียง Encryption แต่ยังครอบคลุม Hashing, Digital Signatures และการจัดการ Cryptographic Keys ด้วย

## 2. Encryption — การเข้ารหัสข้อมูล

Encryption คือกระบวนการเปลี่ยนข้อมูลที่อ่านเข้าใจได้ (Plaintext) ให้กลายเป็นข้อมูลที่อ่านไม่เข้าใจ (Ciphertext) โดยใช้อัลกอริทึมและ Key

Plaintext

ข้อมูลต้นฉบับที่อ่านเข้าใจได้

Encryption + Key

Ciphertext

ข้อมูลที่ถูกเข้ารหัสแล้ว

Decryption + Correct Key

Original Plaintext

ข้อมูลที่ถอดรหัสกลับมาได้

ตัวอย่างเช่น บริษัทเก็บข้อมูลลูกค้าไว้ในฐานข้อมูล หากมีการเข้ารหัสข้อมูล แม้ผู้โจมตีจะขโมยไฟล์ฐานข้อมูลไปได้ ก็อาจไม่สามารถอ่านข้อความภายในได้หากไม่มี Key ที่ถูกต้อง

จุดสำคัญ: Encryption เน้นการรักษา Confidentiality และสามารถถอดรหัสกลับได้ด้วย Key ที่เหมาะสม

## 3. Symmetric Encryption

Symmetric Encryption คือการเข้ารหัสแบบใช้ Secret Key เดียวกัน สำหรับทั้ง Encryption และ Decryption

ตัวอย่างอัลกอริทึมที่สำคัญคือ AES (Advanced Encryption Standard)

การใช้งานตามสไลด์ ได้แก่

- เข้ารหัสไฟล์และ Storage เช่น Encrypted Drive
- เข้ารหัสข้อมูลสำคัญใน Database
- ปกป้องการสื่อสาร เช่น VPN และเครือข่าย Wi-Fi

ข้อดีคือทำงานได้รวดเร็ว เหมาะกับการเข้ารหัสข้อมูลปริมาณมาก แต่มีข้อท้าทายคือการแจกจ่ายและเก็บรักษา Secret Key อย่างปลอดภัย

จำสำหรับสอบ: Symmetric = Same Secret Key, Fast, Bulk Data Encryption

## 4. Asymmetric Encryption

Asymmetric Encryption ใช้ Key สองตัวที่มีความสัมพันธ์กัน เรียกว่า Key Pair

- Public Key: สามารถเปิดเผยให้ผู้อื่นใช้ได้
- Private Key: เจ้าของต้องเก็บเป็นความลับ

สำหรับการเข้ารหัสเพื่อรักษาความลับ ผู้ส่งสามารถใช้ Public Key ของผู้รับเข้ารหัส และผู้รับใช้ Private Key ที่สอดคล้องกันถอดรหัส

นอกจากนี้ Asymmetric Cryptography ยังใช้ใน Digital Signatures และกระบวนการสร้างหรือแลกเปลี่ยนกุญแจอย่างปลอดภัย

ตัวอย่างอัลกอริทึมคือ RSA

| Symmetric              | Asymmetric                                        |
| ---------------------- | ------------------------------------------------- |
| ใช้ Secret Key ร่วมกัน | ใช้ Public/Private Key Pair                       |
| เร็วกว่าโดยทั่วไป      | ใช้ทรัพยากรมากกว่าโดยทั่วไป                       |
| เหมาะกับข้อมูลจำนวนมาก | เหมาะกับ Key Establishment และ Digital Signatures |
| ตัวอย่าง AES           | ตัวอย่าง RSA                                      |

ในระบบจริง เช่น TLS มักใช้การเข้ารหัสแบบ Symmetric เพื่อปกป้องข้อมูลระหว่างการสื่อสาร หลังจากสร้าง Session Keys อย่างปลอดภัยแล้ว

## 5. Hashing

Hashing คือการใช้ Hash Function แปลงข้อมูล Input ให้เป็นค่า Hash Output ที่มีความยาวคงที่ตามอัลกอริทึมที่ใช้

ตัวอย่างเช่น SHA-256 ให้ผลลัพธ์ขนาด 256 บิต ไม่ว่าข้อมูลต้นฉบับจะมีขนาดเท่าใด

Hashing แตกต่างจาก Encryption เพราะเป็นกระบวนการทางเดียว (One-way) ไม่ได้ออกแบบให้ถอดรหัสกลับเป็นข้อมูลเดิม

การใช้งานสำคัญ ได้แก่

- ตรวจสอบ Data Integrity
- ตรวจสอบความถูกต้องของไฟล์
- เป็นส่วนประกอบของ Digital Signatures
- ใช้ในระบบจัดเก็บรหัสผ่านอย่างปลอดภัยเมื่อร่วมกับวิธี Password Hashing ที่เหมาะสม

### คุณสมบัติสำคัญของ Cryptographic Hash Function

| คุณสมบัติ            | ความหมาย                                           |
| -------------------- | -------------------------------------------------- |
| Deterministic        | Input เดิมต้องได้ Hash เดิม                        |
| Fast Computation     | คำนวณค่า Hash ได้อย่างมีประสิทธิภาพ                |
| Collision Resistance | ยากมากที่จะหาข้อมูลสองชุดที่ให้ Hash เดียวกัน      |
| Pre-image Resistance | ยากมากที่จะหาข้อมูลต้นฉบับจากค่า Hash              |
| Avalanche Effect     | เปลี่ยน Input เพียงเล็กน้อยทำให้ Hash เปลี่ยนไปมาก |

Collision คือกรณีที่ Input ต่างกันแต่ได้ Hash เดียวกัน ซึ่งในทางคณิตศาสตร์สามารถเกิดขึ้นได้ เพราะ Input มีจำนวนรูปแบบมากกว่า Output ที่มีขนาดจำกัด

สำหรับอัลกอริทึม ควรจำว่า SHA-256 เป็นตัวอย่าง Cryptographic Hash ที่ยังใช้กันอย่างแพร่หลาย ส่วน MD5 ไม่เหมาะกับงานที่ต้องการ Collision Resistance ในปัจจุบัน

การจัดเก็บ Password ควรใช้ Password Hashing โดยเฉพาะ เช่น Argon2id, bcrypt หรือ PBKDF2 ร่วมกับ Salt ไม่ควรใช้ SHA-256 แบบตรง ๆ เพียงอย่างเดียว

## 6. Hashing vs Encryption

| หัวข้อ          | Hashing                    | Encryption                  |
| --------------- | -------------------------- | --------------------------- |
| จุดประสงค์หลัก  | Integrity                  | Confidentiality             |
| กระบวนการ       | One-way                    | Reversible with correct key |
| ใช้ Key หรือไม่ | Hash ปกติไม่ใช้ Secret Key | ใช้ Key                     |
| ผลลัพธ์         | Hash Value                 | Ciphertext                  |
| ตัวอย่าง        | SHA-256                    | AES, RSA                    |

จุดออกสอบ: ถ้าต้องการตรวจสอบว่าไฟล์ถูกเปลี่ยนแปลงหรือไม่ ให้นึกถึง Hashing แต่ถ้าต้องการป้องกันไม่ให้ผู้อื่นอ่านข้อความ ให้นึกถึง Encryption

## 7. Digital Signatures

Digital Signature หรือลายเซ็นดิจิทัล ใช้ Cryptographic Algorithms เพื่อช่วยยืนยันว่าใครเป็นผู้ลงนาม และข้อมูลถูกแก้ไขหลังลงนามหรือไม่

หลักการทั่วไปคือผู้ลงนามใช้ Private Key สร้างลายเซ็น และผู้ตรวจสอบใช้ Public Key ที่สอดคล้องกันตรวจสอบลายเซ็น

Digital Signatures สนับสนุน

- Authentication
- Integrity
- Non-repudiation

ตัวอย่างเช่น บริษัทลงนามดิจิทัลในเอกสารสำคัญ เพื่อให้ผู้รับตรวจสอบความถูกต้องของเอกสารและผู้ลงนามได้

Digital Signature ไม่ได้ทำให้เนื้อหาเอกสารเป็นความลับโดยอัตโนมัติ หากต้องการ Confidentiality ต้องใช้ Encryption เพิ่มเติม

## 8. Hardware Security Module (HSM)

HSM คืออุปกรณ์ Hardware ที่ออกแบบมาเพื่อสร้าง จัดเก็บ และจัดการ Cryptographic Keys อย่างปลอดภัย

หน้าที่สำคัญ ได้แก่

- Secure Key Generation
- Secure Key Storage
- Key Management
- Cryptographic Operations
- Digital Signatures

HSM มักใช้ในระบบ Banking, Government และ Cloud Services โดยมีคุณสมบัติต้านทานการแก้ไขหรือเข้าถึงอุปกรณ์โดยไม่ได้รับอนุญาต (Tamper Resistance)

สไลด์กล่าวถึงมาตรฐาน FIPS 140-2 ซึ่งเกี่ยวข้องกับการประเมินความปลอดภัยของ Cryptographic Modules

จำสำหรับสอบ: HSM = Hardware Protection for Cryptographic Keys

# Part 2 — Security Operations (Objective 5.2)

ส่วนนี้เป็นหัวใจของการทำงาน Security Operations Center (SOC) เพราะเกี่ยวข้องกับการเก็บข้อมูลเหตุการณ์ วิเคราะห์ภัยคุกคาม และตัดสินใจว่าเหตุการณ์ใดจำเป็นต้องได้รับการตรวจสอบหรือแก้ไข

## 9. Logging and Monitoring

Logging คือการบันทึกเหตุการณ์ที่เกิดขึ้นในระบบ ส่วน Monitoring คือการเฝ้าติดตามและวิเคราะห์กิจกรรมเหล่านั้นเพื่อค้นหาความผิดปกติ

ตัวอย่าง Log ที่พบได้ เช่น

- Authentication Logs: การ Login สำเร็จหรือไม่สำเร็จ
- Firewall Logs: การเชื่อมต่อที่ถูกอนุญาตหรือปฏิเสธ
- Application Logs: ข้อผิดพลาดและกิจกรรมในแอป
- System Logs: การเปลี่ยนแปลงหรือข้อผิดพลาดของระบบ

ตัวอย่าง: หากบัญชีหนึ่ง Login ล้มเหลว 50 ครั้งในเวลาไม่กี่นาที ระบบ Monitoring อาจแจ้งเตือนว่าเป็นพฤติกรรมที่น่าสงสัย

### 9.1 Log Aggregation

Log Aggregation คือการรวบรวม Log จากหลายแหล่งมาไว้ที่ศูนย์กลาง เพื่อให้ง่ายต่อการตรวจสอบและวิเคราะห์ความสัมพันธ์ระหว่างเหตุการณ์

ตัวอย่างเครื่องมือจากสไลด์คือ Splunk และ ELK Stack

ข้อดีคือ Security Analyst ไม่จำเป็นต้องเข้าไปตรวจสอบ Log ทีละ Server แต่สามารถค้นหาและวิเคราะห์ข้อมูลจากศูนย์กลางได้

### 9.2 Alerting

Alerting คือกระบวนการแจ้งเตือนเมื่อระบบตรวจพบกิจกรรมผิดปกติหรือภัยคุกคามที่อาจเกิดขึ้น

ตัวอย่างช่องทางแจ้งเตือน ได้แก่ Email, SMS และ Dashboard Notifications

ตัวอย่างเช่น SIEM ตรวจพบการ Login จากประเทศที่ผิดปกติ จึงส่ง Alert ให้ SOC Analyst ตรวจสอบ

ข้อควรจำ: Alert ไม่ได้หมายความว่าเกิด Security Incident จริงเสมอไป ต้องมีการตรวจสอบก่อน

### 9.3 Reporting

Reporting คือการจัดทำรายงานสรุปกิจกรรม การแจ้งเตือน และแนวโน้มต่าง ๆ เพื่อให้ผู้เกี่ยวข้องเข้าใจสถานะด้านความปลอดภัยขององค์กร

ประเภทจากสไลด์ ได้แก่

- Scheduled Reports: รายงานตามกำหนด
- On-demand Reports: รายงานเมื่อมีการร้องขอ
- Compliance Reports: รายงานสำหรับการปฏิบัติตามข้อกำหนด

ตัวอย่าง: รายงานประจำเดือนแสดงจำนวน Malware Detections และ Failed Login Attempts

### 9.4 Archiving

Archiving คือการจัดเก็บ Log และ Alert ไว้เพื่อใช้อ้างอิงในอนาคต โดยเฉพาะสำหรับ Forensic Investigation และ Compliance

ระยะเวลาจัดเก็บอาจเป็นหลายเดือนหรือหลายปี ขึ้นอยู่กับนโยบายและข้อกำหนดที่เกี่ยวข้อง

ตัวอย่างเช่น หากองค์กรพบ Data Breach ในเดือนพฤศจิกายน อาจจำเป็นต้องย้อนดู Log ตั้งแต่เดือนสิงหาคมเพื่อระบุว่าเหตุการณ์เริ่มต้นเมื่อใด

### เปรียบเทียบทั้ง 4 กระบวนการ

| กระบวนการ       | หน้าที่                         |
| --------------- | ------------------------------- |
| Log Aggregation | รวม Log จากหลายแหล่ง            |
| Alerting        | แจ้งเตือนความผิดปกติ            |
| Reporting       | สรุปผลเพื่อวิเคราะห์และตัดสินใจ |
| Archiving       | จัดเก็บหลักฐานสำหรับอนาคต       |

## 10. Tools in Alerting and Monitoring

### 10.1 Agent-Based Monitoring

Agent คือ Software ที่ติดตั้งอยู่บน Endpoint หรือ Server เพื่อเก็บข้อมูลและส่งไปยังระบบ Monitoring

ตัวอย่างเช่น Antivirus Agent หรือ Endpoint Detection Agent

ข้อดีคือสามารถรวบรวมข้อมูลเชิงลึกจากเครื่องได้ แต่ต้องติดตั้งและดูแล Software Agent บนอุปกรณ์

### 10.2 Agentless Monitoring

Agentless คือการตรวจสอบระบบจากระยะไกลโดยไม่ต้องติดตั้ง Agent เฉพาะสำหรับการ Monitoring บนเครื่องเป้าหมาย

ตัวอย่างจากสไลด์คือการ Monitoring ผ่าน SNMP

| Agent-Based                       | Agentless                                 |
| --------------------------------- | ----------------------------------------- |
| ติดตั้ง Agent                     | ไม่ต้องติดตั้ง Agent เฉพาะ                |
| เก็บข้อมูลเชิงลึกจาก Endpoint ได้ | ใช้ Protocol หรือ Interface ที่ระบบรองรับ |
| ต้องดูแล Agent                    | ลดภาระการติดตั้ง Agent                    |
| ตัวอย่าง EDR Agent                | ตัวอย่าง SNMP Monitoring                  |

## 11. SIEM — Security Information and Event Management

SIEM คือแพลตฟอร์มที่รวบรวม วิเคราะห์ และจัดการ Security Events และ Logs จากหลายระบบไว้ที่ศูนย์กลาง

หน้าที่สำคัญคือ Event Correlation หรือการเชื่อมโยงเหตุการณ์ต่าง ๆ เพื่อช่วยตรวจจับภัยคุกคาม

ตัวอย่างเครื่องมือจากสไลด์ ได้แก่ Splunk, ArcSight และ QRadar

Firewall

Server

Endpoint

SIEM

Collect → Analyze → Correlate

Security Alert → SOC Analyst

ตัวอย่าง: SIEM พบว่าเครื่องหนึ่งมี Failed Login จำนวนมาก ตามด้วย Successful Login และการเปลี่ยนแปลงสิทธิ์บัญชี จึงสร้าง Alert ให้เจ้าหน้าที่ตรวจสอบ

จำสำหรับสอบ: SIEM = Centralized Logging + Correlation + Threat Detection

## 12. Antivirus

Antivirus คือ Software ที่ใช้ตรวจจับ ป้องกัน และจัดการ Malware

คุณสมบัติตามสไลด์ ได้แก่

- Real-time Scanning
- Automatic Updates
- Quarantine

Quarantine คือการแยกไฟล์ที่น่าสงสัยออกจากการใช้งานปกติเพื่อลดความเสี่ยง

Antivirus เป็นมาตรการป้องกัน Endpoint แต่ไม่ได้รับประกันว่าจะตรวจจับ Malware ได้ทุกประเภท

## 13. Data Loss Prevention (DLP)

DLP คือเครื่องมือหรือมาตรการที่ช่วยป้องกันการเข้าถึง ใช้งาน หรือส่งต่อข้อมูลสำคัญโดยไม่ได้รับอนุญาต

ข้อมูลที่ต้องปกป้อง เช่น

- PII (Personally Identifiable Information)
- Intellectual Property
- ข้อมูลลูกค้า
- ข้อมูลทางการเงิน

DLP สามารถตรวจสอบข้อมูลใน 3 สถานะหลัก

| สถานะ          | ความหมาย                       | ตัวอย่าง              |
| -------------- | ------------------------------ | --------------------- |
| Data at Rest   | ข้อมูลที่จัดเก็บอยู่           | ไฟล์ใน Database       |
| Data in Motion | ข้อมูลที่กำลังส่งผ่านเครือข่าย | Email Attachment      |
| Data in Use    | ข้อมูลที่กำลังถูกใช้งาน        | การ Copy ข้อมูลลง USB |

ตัวอย่าง: พนักงานพยายามส่งไฟล์ที่มีข้อมูลบัตรเครดิตออกไปยังอีเมลส่วนตัว ระบบ DLP ตรวจพบและบล็อกการส่งข้อมูล

## 14. SNMP Traps

SNMP ย่อมาจาก Simple Network Management Protocol ใช้สำหรับการจัดการและติดตามสถานะอุปกรณ์เครือข่าย

SNMP Trap คือ Notification ที่อุปกรณ์ส่งไปยัง Management System เมื่อเกิดเหตุการณ์ที่กำหนดไว้

ตัวอย่างจากสไลด์ ได้แก่

- CPU Usage สูงผิดปกติ
- อุปกรณ์ขัดข้อง
- Network Interface มีปัญหา

จุดสำคัญคือ SNMP Trap เป็นการแจ้งเตือนจากอุปกรณ์ โดยไม่จำเป็นต้องรอให้ระบบ Monitoring สอบถามสถานะก่อน

## 15. Security Event Triage

Security Event Triage คือกระบวนการตรวจสอบและจัดลำดับความสำคัญของ Security Events เพื่อพิจารณาว่าเหตุการณ์ใดต้องได้รับการตรวจสอบเพิ่มเติมหรือดำเนินการทันที

SOC อาจได้รับ Alert หลายร้อยหรือหลายพันรายการต่อวัน จึงไม่สามารถปฏิบัติต่อทุก Alert ด้วยความเร่งด่วนเท่ากันได้

สิ่งที่ Analyst ต้องพิจารณา ได้แก่

1. Event นี้เป็นเหตุการณ์จริงหรือไม่
2. เป็น False Positive หรือไม่
3. มีพฤติกรรมน่าสงสัยหรือไม่
4. เป็น Security Incident หรือไม่
5. มีความรุนแรงเท่าใด
6. จำเป็นต้องตอบสนองเร็วเพียงใด

### False Positive vs False Negative

| ประเภท         | ความหมาย                                    |
| -------------- | ------------------------------------------- |
| True Positive  | ระบบแจ้งเตือนและมีภัยคุกคามจริง             |
| False Positive | ระบบแจ้งเตือนแต่ไม่มีภัยคุกคามตามที่ตรวจจับ |
| True Negative  | ระบบไม่แจ้งเตือนและไม่มีภัยคุกคาม           |
| False Negative | มีภัยคุกคามจริงแต่ระบบตรวจไม่พบ             |

False Negative อันตรายเพราะภัยคุกคามอาจดำเนินต่อไปโดยไม่มีการแจ้งเตือน

## 16. Incident Use Cases

Security Use Case คือสถานการณ์หรือรูปแบบพฤติกรรมที่องค์กรต้องการตรวจจับ

ตัวอย่างจากสไลด์

- Multiple Failed Login Attempts
- Privilege Escalation
- Malware Detection
- Suspicious PowerShell Activity
- Unauthorized Administrative Access
- Data Exfiltration
- Impossible-travel Login

Impossible Travel คือกรณีที่บัญชีเดียวกันปรากฏการ Login จากตำแหน่งทางภูมิศาสตร์ที่ห่างกันมากในช่วงเวลาที่ไม่สมเหตุสมผลกับการเดินทางจริง

อย่างไรก็ตาม อาจเกิด False Positive จาก VPN หรือการเปลี่ยน IP ได้ จึงต้องตรวจสอบบริบทเพิ่มเติม

## 17. Security Event Prioritization

การจัดลำดับความสำคัญของเหตุการณ์ใช้ปัจจัยหลายด้าน ได้แก่

- Severity: ระดับความรุนแรง
- Impact: ผลกระทบ
- Likelihood: โอกาสเกิดขึ้น
- Affected Assets: ทรัพย์สินที่ได้รับผลกระทบ
- User or Account Involved: บัญชีที่เกี่ยวข้อง
- Evidence of Active Exploitation: หลักฐานว่ามีการโจมตีจริง
- Business Criticality: ความสำคัญต่อธุรกิจ

ตาม Risk Matrix ในสไลด์ Priority 1 คือความเร่งด่วนสูงสุด ส่วน Priority 5 ต่ำสุด

| Urgency \ Impact | High | Medium | Low |
| ---------------- | ---- | ------ | --- |
| High             | P1   | P2     | P3  |
| Medium           | P2   | P3     | P4  |
| Low              | P3   | P4     | P5  |

ตัวอย่าง: Malware บนเครื่องทดสอบที่ไม่มีข้อมูลสำคัญ อาจมี Priority ต่ำกว่า Ransomware บน Production Database แม้ทั้งคู่จะเป็น Malware Incident

## 18. Event Correlation

Event Correlation คือการนำเหตุการณ์หลายรายการที่เกี่ยวข้องกันมาวิเคราะห์ร่วมกัน เพื่อค้นหารูปแบบการโจมตีที่อาจมองไม่เห็นจาก Event เดี่ยว

ตัวอย่างจากสไลด์

1. Multiple Failed Logins
2. Successful Login
3. Privilege Escalation
4. Access to Sensitive Files

Potential Account Compromise

แต่ละ Event อาจดูไม่รุนแรงเมื่อพิจารณาแยกกัน แต่เมื่อนำมาเชื่อมโยงจะพบรูปแบบที่อาจบ่งชี้ว่าบัญชีถูกยึดครอง

## 19. Threat Actors

Threat Actor คือบุคคล กลุ่ม หรือองค์กรที่ดำเนินกิจกรรมเป็นภัยต่อระบบ เครือข่าย หรือข้อมูล

ประเภทและแรงจูงใจตามสไลด์

| Threat Actor                 | Typical Motivation                                        |
| ---------------------------- | --------------------------------------------------------- |
| Cybercriminals               | Financial Gain                                            |
| Nation-State Actors          | Espionage, Intelligence, Strategic Advantage              |
| Hacktivists                  | Political or Social Causes                                |
| Insider Threats              | Financial Gain, Revenge, Ideology หรือ Accidental Actions |
| Script Kiddies               | Curiosity, Experimentation, Recognition                   |
| Terrorist / Extremist Groups | Disruption, Fear, Ideological Objectives                  |

สิ่งสำคัญคือ Threat Actor แต่ละประเภทมีแรงจูงใจและความสามารถต่างกัน จึงส่งผลต่อวิธีการโจมตีและมาตรการป้องกันที่องค์กรควรเลือกใช้

Insider Threat ไม่จำเป็นต้องเกิดจากความตั้งใจร้ายเสมอไป เพราะพนักงานอาจทำข้อมูลรั่วไหลโดยไม่ตั้งใจได้เช่นกัน

## 20. Cyber Threat Intelligence (CTI)

CTI คือข้อมูลเกี่ยวกับภัยคุกคามและ Threat Actors ที่ผ่านการรวบรวม วิเคราะห์ และแปลงเป็นความรู้ที่สามารถนำไปใช้ตัดสินใจด้านความปลอดภัยได้

CTI ช่วยให้องค์กรเข้าใจว่า

- ใครอาจโจมตีองค์กร
- องค์กรกำลังเผชิญภัยคุกคามอะไร
- ผู้โจมตีใช้วิธีใด
- ช่องโหว่ใดกำลังถูกใช้โจมตี
- ควรตรวจสอบ Indicators ใด
- ควรปรับปรุงมาตรการป้องกันอย่างไร

จุดสำคัญ: Threat Intelligence ไม่ใช่เพียงข้อมูลดิบ แต่ต้องผ่านการวิเคราะห์เพื่อให้สามารถนำไปใช้ได้จริง

## 21. Indicators of Compromise (IOCs)

IOC คือหลักฐานหรือร่องรอยที่อาจบ่งชี้ว่ามีการบุกรุกระบบหรือกิจกรรมอันตรายเกิดขึ้น

ตัวอย่างจากสไลด์ ได้แก่

- Malicious IP Addresses
- Suspicious Domains
- Malicious URLs
- File Hashes
- Unusual Registry Changes

ตัวอย่าง: CTI Feed แจ้งว่ามี IP Address หนึ่งเกี่ยวข้องกับ Malware ทีม SOC จึงค้นหา IP ดังกล่าวใน Firewall Logs เพื่อดูว่ามีเครื่องภายในติดต่อกับ IP นี้หรือไม่

การพบ IOC ไม่ได้พิสูจน์ว่าระบบถูกโจมตีสำเร็จเสมอไป ต้องพิจารณาหลักฐานและบริบทอื่นประกอบ

## 22. Threat Frameworks

Threat Framework คือกรอบการทำงานที่ช่วยจัดระเบียบและวิเคราะห์พฤติกรรมของผู้โจมตี

ประโยชน์ ได้แก่

- เข้าใจ Attack Techniques
- ระบุ Security Gaps
- ปรับปรุง Detection
- จัดระเบียบ Threat Intelligence
- สนับสนุน Incident Investigation
- พัฒนา Security Controls

### MITRE ATT&CK

MITRE ATT&CK คือ Knowledge Base ที่รวบรวม Tactics และ Techniques ของผู้โจมตีจากพฤติกรรมที่พบในโลกจริง

ต้องแยกคำสำคัญสองคำนี้ให้ชัดเจน

Tactics = Why — เป้าหมายที่ผู้โจมตีต้องการบรรลุ

Techniques = How — วิธีการที่ผู้โจมตีใช้เพื่อบรรลุเป้าหมาย

ตัวอย่าง Tactics จากสไลด์ ได้แก่ Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion และ Credential Access

ตัวอย่างการเชื่อมโยง

| องค์ประกอบ | ตัวอย่าง                               |
| ---------- | -------------------------------------- |
| Tactic     | Credential Access                      |
| Technique  | Credential Dumping                     |
| เป้าหมาย   | เข้าถึงข้อมูลรับรองของผู้ใช้           |
| วิธีการ    | ดึงข้อมูลรับรองจากระบบหรือแหล่งจัดเก็บ |

จำสำหรับสอบ: ATT&CK Tactics = Why, ATT&CK Techniques = How

# Part 3 — Incident Response (Objective 5.3)

## 23. Incident Response (IR) คืออะไร?

Incident Response คือกระบวนการที่มีโครงสร้างสำหรับจัดการและตอบสนองต่อเหตุการณ์ด้าน Cybersecurity เช่น

- Data Breach
- Malware Attack
- Ransomware
- Unauthorized Access
- Account Compromise

เป้าหมายหลักของ Incident Response คือ ตรวจพบภัยคุกคามอย่างรวดเร็ว จำกัดความเสียหาย กำจัดสาเหตุ ฟื้นฟูระบบ และเรียนรู้จากเหตุการณ์

### ความสำคัญของ Incident Response

1. Reduce Business Disruptions: ลดการหยุดชะงักของธุรกิจ
2. Mitigate Financial Losses: ลดความเสียหายทางการเงิน
3. Protect Data & IT Infrastructure: ปกป้องข้อมูลและระบบ IT
4. Enhance Cyber Resilience: เพิ่มความสามารถในการรับมือและฟื้นตัว
5. Ensure Compliance: สนับสนุนการปฏิบัติตามข้อกำหนด

ตัวอย่าง: หาก Malware แพร่กระจายในเครือข่าย ทีม IR ต้องรีบตรวจสอบและแยกเครื่องที่ติดเชื้อ เพื่อป้องกันไม่ให้ Malware แพร่ไปยังระบบอื่น

## 24. Incident Response Plan (IRP)

Incident Response Plan คือแผนที่กำหนดว่าหากเกิด Security Incident องค์กรจะต้องดำเนินการอย่างไร ใครเป็นผู้รับผิดชอบ และจะประสานงานกันอย่างไร

จากสไลด์ IRP ประกอบด้วย 6 ขั้นตอนหลัก

1. Preparation

   เตรียมทีม นโยบาย เครื่องมือ และการฝึกอบรม
2. Detection & Analysis

   ตรวจพบ วิเคราะห์ และประเมินขอบเขตของ Incident
3. Containment

   จำกัดการแพร่กระจายและลดความเสียหาย
4. Eradication

   กำจัด Malware หรือสาเหตุของ Incident
5. Recovery

   ฟื้นฟูระบบและบริการให้กลับมาทำงาน
6. Post-Incident Review

   ทบทวนเหตุการณ์และปรับปรุงการป้องกัน

### 24.1 Preparation

เป็นขั้นตอนเตรียมความพร้อมก่อนเกิดเหตุการณ์จริง

กิจกรรมที่สำคัญ เช่น จัดทำ IR Policy, กำหนดบทบาททีมงาน, เตรียมเครื่องมือ Monitoring, สำรองข้อมูล และฝึกอบรมเจ้าหน้าที่

ตัวอย่าง: องค์กรจัดทำขั้นตอนรับมือ Ransomware และกำหนดว่าใครมีอำนาจอนุมัติให้ตัดการเชื่อมต่อ Server

### 24.2 Detection and Analysis

ตรวจสอบว่าเกิดอะไรขึ้น มีระบบใดได้รับผลกระทบ และเหตุการณ์มีความรุนแรงมากเพียงใด

ตัวอย่าง: SIEM แจ้งเตือนว่ามีการเข้ารหัสไฟล์จำนวนมากผิดปกติ ทีม SOC ตรวจสอบ Process, Logs และ Endpoint เพื่อประเมินว่าอาจเป็น Ransomware หรือไม่

### 24.3 Containment

Containment คือการจำกัดขอบเขตของเหตุการณ์เพื่อป้องกันความเสียหายเพิ่มเติม

ตัวอย่างกิจกรรม ได้แก่

- แยกเครื่องที่ติด Malware ออกจากเครือข่าย
- ปิดบัญชีที่ถูกยึดครองชั่วคราว
- บล็อก Malicious IP Address
- จำกัดการเชื่อมต่อกับระบบที่ได้รับผลกระทบ

จุดสำคัญ: Containment ไม่ได้หมายถึงการกำจัด Malware ทั้งหมด แต่เน้นการหยุดการแพร่กระจายหรือผลกระทบก่อน

### 24.4 Eradication

Eradication คือการกำจัดสาเหตุของ Incident ออกจากระบบ

ตัวอย่าง เช่น ลบ Malware, ปิดช่องโหว่ที่ถูกใช้โจมตี, ลบ Unauthorized Accounts หรือแก้ไขการตั้งค่าที่ไม่ปลอดภัย

### 24.5 Recovery

Recovery คือการฟื้นฟูระบบให้กลับมาทำงานได้ตามปกติอย่างปลอดภัย

ตัวอย่าง เช่น Restore ข้อมูลจาก Backup, นำ Server กลับมาออนไลน์ และตรวจสอบว่าไม่มี Malware หลงเหลืออยู่

### 24.6 Post-Incident Review

เป็นการทบทวนสิ่งที่เกิดขึ้นหลังเหตุการณ์ เพื่อป้องกันไม่ให้ปัญหาเดิมเกิดซ้ำ

ตัวอย่างคำถามที่ทีม IR ควรถาม ได้แก่

- เหตุการณ์เกิดขึ้นได้อย่างไร
- ทำไมระบบจึงตรวจพบช้า
- ขั้นตอนใดทำงานได้ดี
- ขั้นตอนใดต้องปรับปรุง
- ควรเพิ่ม Security Controls อะไร

### ตัวอย่างกระบวนการ IR ทั้งหมด

สมมติองค์กรถูก Ransomware โจมตี

| Phase       | การดำเนินการ                      |
| ----------- | --------------------------------- |
| Preparation | มี Backup และ IR Plan             |
| Detection   | EDR พบการเข้ารหัสไฟล์ผิดปกติ      |
| Containment | แยกเครื่องที่ติดเชื้อ             |
| Eradication | กำจัด Malware และแก้ไขช่องโหว่    |
| Recovery    | Restore ข้อมูลจาก Clean Backup    |
| Review      | วิเคราะห์สาเหตุและปรับปรุงมาตรการ |

จุดที่ต้องจำสำหรับสอบ: Containment = Stop the Spread, Eradication = Remove the Cause, Recovery = Restore Operations

## 25. Incident Response Exercises

Incident Response Exercise คือการฝึกซ้อมเพื่อทดสอบว่าองค์กรพร้อมรับมือเหตุการณ์จริงหรือไม่

การฝึกซ้อมช่วยค้นหาปัญหา เช่น

- ช่องว่างใน IR Plan
- ความรับผิดชอบไม่ชัดเจน
- ปัญหาการสื่อสาร
- ทรัพยากรไม่เพียงพอ
- ขั้นตอนที่ไม่มีประสิทธิภาพ
- จุดอ่อนทางเทคนิค
- ความจำเป็นในการฝึกอบรมเพิ่มเติม

หลักการสำคัญคือ ควรทดสอบ IR Plan ก่อนเกิด Incident จริง

## 26. Tabletop Exercise

Tabletop Exercise คือการฝึกซ้อมแบบอภิปรายสถานการณ์จำลอง (Discussion-based Exercise)

ผู้เข้าร่วมประชุมและพูดคุยว่าหากเกิดเหตุการณ์ขึ้นจริงจะต้องทำอะไรบ้าง โดยไม่จำเป็นต้องลงมือเปลี่ยนแปลงระบบ Production

ตัวอย่างสถานการณ์จากสไลด์:

> Ransomware เข้ารหัส Critical Servers หลายเครื่อง องค์กรควรดำเนินการอย่างไร?

ทีมงานต้องร่วมกันตอบคำถาม เช่น ใครต้องรับผิดชอบ ใครต้องได้รับแจ้ง ควรแยกระบบใด และต้องเก็บหลักฐานอะไร

จำสำหรับสอบ: Tabletop = Discussion-based Simulation

## 27. Technical Testing

Technical Testing คือการทดสอบว่า Technical Controls และ Procedures สามารถทำงานได้จริงหรือไม่

ตัวอย่างจากสไลด์ ได้แก่

- Backup Restoration Testing
- Incident Detection Testing
- Alerting Mechanism Testing
- Network Isolation Testing
- Account Disabling Testing
- Malware Containment Testing
- Disaster Recovery Testing

ตัวอย่าง: แทนที่จะประชุมพูดคุยว่าระบบ Backup ใช้งานได้หรือไม่ ทีมงานทดลอง Restore ข้อมูลจริงในสภาพแวดล้อมทดสอบ

| Tabletop Exercise                    | Technical Testing                |
| ------------------------------------ | -------------------------------- |
| เน้นการอภิปราย                       | เน้นการลงมือทดสอบ                |
| ตรวจสอบบทบาทและขั้นตอน               | ตรวจสอบระบบและ Controls          |
| ไม่จำเป็นต้องรันระบบจริง             | ต้องทดสอบการทำงานทางเทคนิค       |
| ตัวอย่าง Discuss Ransomware Response | ตัวอย่าง Test Backup Restoration |

# Part 4 — Asset Protection (Objective 5.4)

## 28. Asset Protection

Asset Protection คือกระบวนการระบุ จัดการ และปกป้องทรัพย์สินขององค์กรตลอดวงจรชีวิต

Asset อาจประกอบด้วย

- Hardware
- Software
- Data
- Servers
- Applications

เป้าหมายคือให้ Asset ทุกชิ้นได้รับการระบุอย่างถูกต้อง มีการตั้งค่าที่ปลอดภัย ได้รับการบำรุงรักษา และถูกปลดระวางอย่างเหมาะสมเมื่อหมดอายุการใช้งาน

ตัวอย่าง: องค์กรต้องทราบว่ามี Laptop กี่เครื่อง ใครเป็นผู้ใช้งาน เครื่องใดไม่ได้รับ Security Updates และเครื่องใดควรปลดระวาง

## 29. Asset Lifecycle Management (ALM)

Asset Lifecycle Management คือการจัดการ Asset ตั้งแต่การวางแผนจัดหาจนถึงการปลดระวางหรือกำจัด

ลำดับตามสไลด์คือ

1. Plan — วางแผนความต้องการ
2. Acquire — จัดซื้อหรือจัดหา
3. Deploy — ติดตั้ง ตั้งค่า และมอบหมายผู้ใช้งาน
4. Maintain — บำรุงรักษาและอัปเดต
5. Monitor — ตรวจสอบสถานะและความปลอดภัย
6. Retire / Dispose — ปลดระวางและกำจัดอย่างปลอดภัย

ตัวอย่าง Laptop ของบริษัท

| Phase    | ตัวอย่าง                             |
| -------- | ------------------------------------ |
| Plan     | กำหนดสเปก Laptop                     |
| Acquire  | ซื้อเครื่อง                          |
| Deploy   | ติดตั้ง OS, EDR และมอบหมายให้พนักงาน |
| Maintain | ติดตั้ง Security Patches             |
| Monitor  | ตรวจสอบสถานะและ Security Alerts      |
| Retire   | นำเครื่องออกจากการใช้งาน             |
| Dispose  | ลบหรือทำลายข้อมูลอย่างปลอดภัย        |

จุดสำคัญ: การกำจัด Asset ต้องคำนึงถึงข้อมูลที่อาจหลงเหลืออยู่ใน Storage ด้วย

## 30. End of Life (EOL)

End of Life คือช่วงที่ผลิตภัณฑ์ Software หรือ Hardware สิ้นสุดวงจรการสนับสนุนตามที่ผู้ผลิตกำหนด

ผลิตภัณฑ์ที่เป็น EOL อาจไม่ได้รับ

- Security Patches
- Bug Fixes
- Technical Support
- Firmware Updates

ความเสี่ยงสำคัญคือช่องโหว่ใหม่อาจไม่ได้รับการแก้ไข ทำให้ผู้โจมตีสามารถใช้ช่องโหว่เหล่านั้นโจมตีระบบได้

ตัวอย่าง: บริษัทใช้งาน Operating System ที่สิ้นสุดการสนับสนุนแล้ว หากพบช่องโหว่ร้ายแรง ผู้ผลิตอาจไม่มี Patch ให้ติดตั้ง

## 31. Managing EOL Assets

องค์กรควรตรวจสอบและวางแผนจัดการ EOL Assets โดยใช้แนวทางจากสไลด์ ได้แก่

1. Upgrade Software
2. Replace Device
3. Migrate to Supported Platform
4. Isolate System
5. Apply Compensating Controls
6. Decommission Asset

### Compensating Controls คืออะไร?

Compensating Controls คือมาตรการทางเลือกที่ใช้ลดความเสี่ยง เมื่อยังไม่สามารถใช้มาตรการหลักที่ต้องการได้

ตัวอย่าง: ระบบ Legacy Server ยังไม่สามารถอัปเกรดได้ เพราะ Application สำคัญไม่รองรับ OS รุ่นใหม่

องค์กรจึงใช้

- Network Segmentation
- Restricted Access
- Enhanced Monitoring

มาตรการเหล่านี้ช่วยลดความเสี่ยงระหว่างรอเปลี่ยนระบบ แต่ไม่ได้ทำให้ช่องโหว่ใน EOL System หายไป

จำสำหรับสอบ: EOL = Unsupported + Unpatched Vulnerabilities + Increased Risk

## 32. Configuration Management

Configuration Management คือกระบวนการรักษาการตั้งค่าของระบบให้ถูกต้อง ปลอดภัย และสอดคล้องกับมาตรฐานที่องค์กรกำหนด

ตัวอย่าง: องค์กรกำหนดว่า Windows Servers ทุกเครื่องต้องเปิด Firewall ปิดบริการที่ไม่จำเป็น และใช้ Password Policy ตามมาตรฐาน

องค์ประกอบหลักจากสไลด์ ได้แก่

| Component              | ความหมาย                            |
| ---------------------- | ----------------------------------- |
| Baselines              | การตั้งค่ามาตรฐาน                   |
| Updates                | การปรับปรุงหรือแก้ไขทั่วไป          |
| Patches                | การแก้ไขช่องโหว่หรือปัญหา           |
| Change Control         | การควบคุมการเปลี่ยนแปลง             |
| Configuration Auditing | การตรวจสอบความเบี่ยงเบนจาก Baseline |

## 33. Security Baselines

Security Baseline คือชุดการตั้งค่ามาตรฐานที่องค์กรใช้เป็นจุดเริ่มต้นสำหรับการตั้งค่าระบบอย่างปลอดภัย

ตัวอย่าง Security Baselines จากสไลด์ ได้แก่

- CIS Benchmarks
- NIST SP 800-128
- Vendor-recommended Settings เช่น Microsoft, Cisco และ AWS

Baseline ช่วยลดความเสี่ยงจาก Misconfiguration และ Unauthorized Changes

### Configuration Drift

Configuration Drift คือการที่การตั้งค่าของระบบค่อย ๆ เบี่ยงเบนไปจาก Baseline ที่ได้รับอนุมัติ

ตัวอย่าง: Baseline กำหนดให้ปิด Remote Desktop จาก Internet แต่มีผู้ดูแลระบบเปิดใช้งานโดยไม่ได้ผ่าน Change Control

กรณีนี้เกิด Configuration Drift และอาจเพิ่มความเสี่ยงด้าน Security

## 34. Patch Management

Patch Management คือกระบวนการจัดการ Security Patches และ Software Updates เพื่อแก้ไขช่องโหว่หรือปัญหาของระบบ

ตามสไลด์มี 5 ขั้นตอน

1. Identify — ตรวจสอบ Vendor Advisories และ Security Bulletins
2. Assess — ประเมินความรุนแรงและลำดับความสำคัญ
3. Test — ทดสอบ Patch ในสภาพแวดล้อมควบคุม
4. Deploy — ติดตั้ง Patch ใน Production
5. Verify — ตรวจสอบว่า Patch ทำงานและระบบยังเสถียร

ตัวอย่าง: Microsoft ประกาศ Security Patch สำหรับ Windows Server

ทีม IT ตรวจสอบว่าระบบใดได้รับผลกระทบ ประเมินความเร่งด่วน ทดสอบ Patch ก่อนนำไปติดตั้งจริง และตรวจสอบหลังติดตั้งว่า Server ยังทำงานปกติ

จุดสำคัญ: การ Deploy Patch ไม่ใช่ขั้นตอนสุดท้าย ต้อง Verify ผลลัพธ์ด้วย

## 35. Risks of Poor Configuration Management

หากองค์กรจัดการ Configuration ไม่ดี อาจเกิดความเสี่ยงดังต่อไปนี้

| ความเสี่ยง                   | ตัวอย่าง                                             |
| ---------------------------- | ---------------------------------------------------- |
| Unpatched Vulnerabilities    | ไม่ติดตั้ง Security Patch                            |
| Insecure Configurations      | เปิด Port ที่ไม่จำเป็นหรือใช้ Default Credentials    |
| Configuration Drift          | การตั้งค่าเบี่ยงเบนจาก Baseline                      |
| Inconsistent System Behavior | ระบบทำงานไม่สอดคล้องกันหรือมีปัญหาด้าน Compatibility |

แนวทางปรับปรุงจากสไลด์ ได้แก่ กำหนด Security Baselines, Automate Patch Management, ตรวจสอบ Configuration สม่ำเสมอ และใช้ Change Control

เครื่องมือที่สไลด์ยกตัวอย่าง ได้แก่ Ansible, SCCM, Puppet และ Chef

## 36. Change Management

Change Management คือกระบวนการควบคุมการเปลี่ยนแปลงระบบอย่างเป็นทางการ ตั้งแต่การร้องขอจนถึงการบันทึกผลลัพธ์

ตัวอย่างการเปลี่ยนแปลง เช่น

- ติดตั้ง Software
- อัปเดต Firmware
- เปลี่ยน Firewall Rules
- แก้ไข Network Configuration
- Upgrade Applications
- เปลี่ยน Security Policies

เป้าหมายคือการลด Unexpected Outages, Security Problems และ Configuration Errors

### Change Management Process

ลำดับตามสไลด์มี 7 ขั้นตอน

1. Request: ยื่นคำขอเปลี่ยนแปลง
2. Assess: ประเมินความเสี่ยง ผลกระทบ และ Dependencies
3. Approve: ผู้มีอำนาจอนุมัติ
4. Test: ทดสอบการเปลี่ยนแปลง
5. Implement: นำการเปลี่ยนแปลงไปใช้งาน
6. Verify: ตรวจสอบผลลัพธ์
7. Document: บันทึกการเปลี่ยนแปลง

ตัวอย่าง: ผู้ดูแลระบบต้องการเปิด Firewall Port ใหม่ให้ Application

ควรมีการยื่นคำขอ ประเมินความเสี่ยง ขออนุมัติ ทดสอบ และตรวจสอบผลหลังการเปลี่ยนแปลง ไม่ควรเปิด Port โดยไม่มีการควบคุม

## 37. Configuration Management vs Change Management

หัวข้อนี้มีโอกาสสับสนสูง เพราะทั้งสองกระบวนการทำงานเกี่ยวข้องกัน

| Configuration Management                 | Change Management                           |
| ---------------------------------------- | ------------------------------------------- |
| รักษาการตั้งค่าที่ต้องการ                | ควบคุมการเปลี่ยนแปลง                        |
| เน้นว่าระบบควรตั้งค่าอย่างไร             | เน้นการเปลี่ยนแปลงเกิดขึ้นอย่างไรและเมื่อใด |
| Establish Baselines                      | Evaluate and Approve Changes                |
| Detect Configuration Drift               | Control Change Implementation               |
| ตัวอย่าง Approved Firewall Configuration | ตัวอย่าง Request to Modify Firewall Rule    |

จำง่าย ๆ: Configuration Management = What the configuration should be ส่วน Change Management = How changes are controlled

# Part 5 — Security Testing

## 38. Security Testing คืออะไร?

Security Testing คือกระบวนการประเมินระบบ แอปพลิเคชัน เครือข่าย และ Physical Security Controls เพื่อค้นหา Vulnerabilities, Weaknesses และ Security Gaps

วัตถุประสงค์หลัก ได้แก่

- Identify Vulnerabilities
- Validate Security Controls
- Assess Security Readiness
- Reduce Security Risks
- Improve Incident Detection and Response

ประเภทที่เราเรียนจากสไลด์ ได้แก่ Security Readiness Testing, Application Security Testing, Penetration Testing และ Physical Security Testing

## 39. Security Readiness Testing

Security Readiness Testing คือการทดสอบความพร้อมด้านความปลอดภัยขององค์กร โดยในสไลด์แบ่งการทำงานเป็น Blue Team, Red Team และ Purple Team

### 39.1 Blue Teaming

Blue Team คือทีมฝ่ายป้องกัน มีหน้าที่ตรวจจับและตอบสนองต่อการโจมตี

กิจกรรมหลัก ได้แก่

- Monitor Security Events
- Detect Threats
- Respond to Incidents
- Improve Security Controls
- Perform Threat Hunting

ตัวอย่าง: Blue Team ตรวจพบ Suspicious PowerShell Activity ผ่าน SIEM จากนั้นตรวจสอบ Endpoint และเริ่ม Incident Response

จำ: Blue Team = Defend, Detect, Respond

### 39.2 Red Teaming

Red Team คือทีมที่จำลองพฤติกรรมของผู้โจมตีจริง เพื่อทดสอบว่ามาตรการป้องกันขององค์กรมีประสิทธิภาพเพียงใด

กิจกรรมอาจประกอบด้วย

- Gain Unauthorized Access ในขอบเขตการทดสอบที่ได้รับอนุญาต
- Exploit Vulnerabilities
- Move Laterally
- Obtain Sensitive Information ตามขอบเขตที่กำหนด
- Bypass Security Controls

Red Team Exercise ต้องได้รับอนุญาตและมีขอบเขตควบคุมชัดเจน

จำ: Red Team = Simulate Attacks

### 39.3 Purple Teaming

Purple Team คือแนวทางที่นำความสามารถของ Red Team และ Blue Team มาทำงานร่วมกันเพื่อปรับปรุง Security Defenses

ลำดับการทำงานจากสไลด์

1. Red Team จำลองการโจมตี
2. Blue Team ตรวจสอบว่าตรวจจับได้หรือไม่
3. ทั้งสองทีมร่วมกันระบุ Detection Gaps
4. ปรับปรุง Security Controls
5. ทดสอบซ้ำเพื่อยืนยันผล

ตัวอย่างจากสไลด์: Red Team จำลอง Credential Attack แต่ Blue Team ตรวจจับไม่พบ ทีมงานจึงค้นพบว่า Logging ยังไม่ครอบคลุม และปรับปรุง Monitoring Rules

### เปรียบเทียบทีมทั้งหมด

| Team        | หน้าที่หลัก                         |
| ----------- | ----------------------------------- |
| Red Team    | จำลองการโจมตี                       |
| Blue Team   | ป้องกัน ตรวจจับ และตอบสนอง          |
| Purple Team | ทำงานร่วมกันเพื่อปรับปรุงการป้องกัน |

## 40. Vulnerability Scanning

Vulnerability Scanning คือกระบวนการใช้เครื่องมือแบบ Automated หรือ Semi-automated เพื่อค้นหาช่องโหว่และจุดอ่อนที่รู้จักแล้วในระบบหรือแอปพลิเคชัน

Scanner อาจตรวจพบ

- Missing Security Patches
- Vulnerable Software Versions
- Weak Configurations
- Exposed Services
- Known Vulnerabilities

ตัวอย่าง: Vulnerability Scanner ตรวจพบว่า Web Server ใช้ Software Version ที่มี Critical Vulnerability

จุดสำคัญ: Vulnerability Scanning เน้นการค้นหาและระบุช่องโหว่ ส่วน Penetration Testing อาจทดสอบการใช้ประโยชน์จากช่องโหว่ภายใต้ขอบเขตที่ได้รับอนุญาต

## 41. Static Application Security Testing (SAST)

SAST คือการวิเคราะห์ Source Code หรือ Compiled Code โดยไม่จำเป็นต้องรันแอปพลิเคชัน

ใช้ตรวจสอบปัญหา เช่น

- Insecure Coding Practices
- Hardcoded Credentials
- Injection Vulnerabilities
- Unsafe Functions
- Weak Input Validation

ตัวอย่าง: Developer ใช้ SAST ตรวจ Source Code ก่อน Deploy และพบว่ามี Database Password ถูกฝังไว้ในโค้ด

จำ: SAST = Static + Source Code + Without Running

## 42. Dynamic Application Security Testing (DAST)

DAST คือการทดสอบแอปพลิเคชันขณะที่กำลังทำงาน เพื่อค้นหาช่องโหว่จากพฤติกรรมของระบบ

ปัญหาที่อาจตรวจพบ ได้แก่

- Injection Vulnerabilities
- Authentication Weaknesses
- Session Management Issues
- Improper Input Validation
- Security Misconfigurations

ตัวอย่าง: Security Tester ทดสอบ Web Application ที่กำลังทำงาน และพบว่าระบบยังยอมรับ Session Token ที่ควรถูกยกเลิกหลัง Logout

จำ: DAST = Dynamic + Running Application

### SAST vs DAST

| หัวข้อ         | SAST                   | DAST                     |
| -------------- | ---------------------- | ------------------------ |
| สิ่งที่ตรวจ    | Source / Compiled Code | Running Application      |
| ต้องรันแอป     | ไม่จำเป็น              | จำเป็น                   |
| จุดเด่น        | ตรวจ Code Weaknesses   | ตรวจ Runtime Behavior    |
| ช่วงที่ใช้บ่อย | Development            | Testing / Deployment     |
| ตัวอย่าง       | Hardcoded Credentials  | Session Management Issue |

ทั้งสองวิธีใช้ร่วมกันได้ และไม่ได้หมายความว่าช่องโหว่แต่ละประเภทจะตรวจพบได้ด้วยวิธีใดวิธีหนึ่งเท่านั้น

## 43. Threat Modeling

Threat Modeling คือกระบวนการที่มีโครงสร้างสำหรับระบุและประเมินภัยคุกคามและ Security Risks ตั้งแต่ช่วงออกแบบระบบหรือแอปพลิเคชัน

Threat Modeling ช่วยระบุ

1. Assets ที่ต้องปกป้อง
2. Potential Attackers
3. Attack Paths
4. Vulnerabilities
5. Security Requirements
6. Appropriate Security Controls

ตัวอย่างจากสไลด์: ก่อนพัฒนา Online Banking Application ทีม Security วิเคราะห์ความเสี่ยง เช่น Account Takeover, Credential Theft และ Injection Attacks

จากนั้นจึงกำหนด Security Requirements และมาตรการป้องกัน เช่น MFA, Input Validation และ Secure Authentication

จำ: Threat Modeling = Identify Potential Threats During Design

### Threat Modeling vs SAST vs DAST

| วิธีการ         | จุดเน้น                          |
| --------------- | -------------------------------- |
| Threat Modeling | วิเคราะห์ภัยคุกคามระหว่าง Design |
| SAST            | วิเคราะห์ Code                   |
| DAST            | ทดสอบ Running Application        |

## 44. Physical Penetration Testing

Physical Penetration Testing คือการทดสอบว่า ผู้โจมตีสามารถเข้าถึงสถานที่ ระบบ หรือพื้นที่หวงห้ามทางกายภาพโดยไม่ได้รับอนุญาตได้หรือไม่

การทดสอบที่ได้รับอนุญาตอาจประกอบด้วย

- Enter Restricted Areas
- Bypass Physical Controls
- Access Unattended Devices
- Circumvent Security Procedures

Physical Security Controls จากสไลด์ ได้แก่

- Locks
- Security Guards
- Access Cards
- Biometric Systems

ตัวอย่าง: องค์กรให้ทีมทดสอบประเมินว่า Server Room มีการควบคุมการเข้าออกเพียงพอหรือไม่ และมีโอกาสที่บุคคลภายนอกจะเข้าถึงอุปกรณ์สำคัญได้หรือไม่

จำ: Physical Penetration Testing = Test Physical Access Security

# Part 6 — Social Engineering & Physical Security Threats

## 45. Phishing

Phishing คือการโจมตีแบบ Social Engineering ที่ผู้โจมตีใช้การหลอกลวงเพื่อให้เหยื่อเปิดเผยข้อมูล คลิกลิงก์อันตราย เปิดไฟล์แนบ หรือดำเนินการที่ผู้โจมตีต้องการ

ตัวอย่าง: พนักงานได้รับอีเมลปลอมให้ยืนยันบัญชีผ่านลิงก์ที่นำไปยังเว็บไซต์ปลอม

ในสไลด์ยังกล่าวถึงการส่ง Simulated Phishing Email เพื่อประเมินว่า พนักงานสามารถรับมือกับการหลอกลวงได้ดีเพียงใด

จำ: Phishing = Deception + Malicious Link / Credential Theft

## 46. Tailgating

Tailgating คือการที่บุคคลไม่มีสิทธิ์แอบเดินตามบุคคลที่มีสิทธิ์ผ่านทางเข้าที่มีการควบคุม เพื่อเข้าไปยัง Restricted Area

ตัวอย่าง: พนักงานใช้ Access Card เปิดประตู และบุคคลภายนอกรีบเดินตามเข้าไปก่อนประตูปิด

Security Controls ที่ช่วยป้องกัน ได้แก่

- Access Cards
- Mantraps
- Security Guards
- Visitor Badges
- Security Awareness Training

Mantrap คือพื้นที่ควบคุมการเข้าออกที่มีประตูสองชั้น ใช้จำกัดและตรวจสอบบุคคลก่อนเข้าสู่พื้นที่ถัดไป

จำ: Tailgating = Following an Authorized Person

## 47. Impersonation

Impersonation คือการโจมตีแบบ Social Engineering ที่ผู้โจมตีแอบอ้างหรือปลอมตัวเป็นบุคคลอื่นเพื่อให้ได้รับ Access, Information หรือ Assistance

ผู้โจมตีอาจแอบอ้างเป็น

- Employee
- IT Support Staff
- Delivery Person

ตัวอย่าง: ผู้โจมตีแอบอ้างว่าเป็นช่าง IT และขอให้พนักงานอนุญาตให้เข้า Server Room

ในการทำ Authorized Penetration Testing ทีมทดสอบอาจจำลองสถานการณ์นี้เพื่อตรวจสอบว่าพนักงานทำตาม Identity Verification Procedures หรือไม่

จำ: Impersonation = Pretending to Be Someone Else

### เปรียบเทียบ Social Engineering ที่เรียน

| หัวข้อ        | วิธีการ                                     |
| ------------- | ------------------------------------------- |
| Phishing      | หลอกให้คลิกลิงก์ เปิดไฟล์ หรือเปิดเผยข้อมูล |
| Tailgating    | แอบเดินตามผู้มีสิทธิ์เข้าพื้นที่            |
| Impersonation | ปลอมตัวหรือแอบอ้างเป็นบุคคลอื่น             |

ทั้งสามวิธีมีจุดร่วมคือใช้ประโยชน์จากพฤติกรรมมนุษย์ แทนที่จะอาศัยช่องโหว่ทางเทคนิคเพียงอย่างเดียว

# Part 7 — Final Review: สรุปเชื่อมโยง Domain 5 ทั้งหมด

## 48. ภาพรวมการทำงานด้าน Security Operations

ลองจินตนาการว่าเราเป็น Security Analyst ในองค์กรหนึ่ง

องค์กรมีข้อมูลลูกค้า ระบบ Server, Network, Applications และพนักงานจำนวนมาก เราต้องดูแลความปลอดภัยทั้งหมดโดยใช้ความรู้จาก Domain 5

1\. Protect

ใช้ Encryption, Hashing, HSM, Access Controls และ Secure Configuration เพื่อปกป้องข้อมูลและระบบ

2\. Monitor

เก็บ Logs, ใช้ SIEM, Antivirus, DLP และ Monitoring Tools เพื่อติดตามกิจกรรม

3\. Detect & Analyze

ทำ Event Triage, Event Correlation และใช้ CTI, IOCs, MITRE ATT&CK เพื่อวิเคราะห์ภัยคุกคาม

4\. Respond & Recover

ดำเนินการตาม Incident Response Plan เพื่อ Contain, Eradicate และ Recover

5\. Improve

ใช้ Lessons Learned, Patch Management, Security Testing และ Configuration Management เพื่อป้องกันเหตุการณ์ซ้ำ

จะเห็นว่าทุกหัวข้อใน Domain 5 เชื่อมโยงกัน ไม่ใช่ความรู้ที่แยกจากกันโดยสิ้นเชิง

## 49. ตารางรวมคำศัพท์ที่ควรจำก่อนสอบ

| Keyword                      | ความหมายที่ต้องจำ                          |
| ---------------------------- | ------------------------------------------ |
| Encryption                   | Protect Confidentiality                    |
| Symmetric Encryption         | Same Secret Key                            |
| Asymmetric Cryptography      | Public / Private Key Pair                  |
| Hashing                      | One-way, Integrity                         |
| Digital Signature            | Authentication, Integrity, Non-repudiation |
| HSM                          | Secure Cryptographic Key Management        |
| Log Aggregation              | Centralize Logs                            |
| SIEM                         | Correlate Security Events                  |
| DLP                          | Prevent Unauthorized Data Loss             |
| SNMP Trap                    | Device-generated Notification              |
| Triage                       | Evaluate and Prioritize Alerts             |
| Event Correlation            | Connect Related Events                     |
| IOC                          | Evidence of Possible Compromise            |
| CTI                          | Analyzed Threat Information                |
| MITRE Tactics                | Why                                        |
| MITRE Techniques             | How                                        |
| Containment                  | Stop the Spread                            |
| Eradication                  | Remove the Cause                           |
| Recovery                     | Restore Operations                         |
| Tabletop Exercise            | Discussion-based Exercise                  |
| Technical Testing            | Test Actual Controls                       |
| Asset Lifecycle              | Plan to Disposal                           |
| EOL                          | End of Supported Lifecycle                 |
| Security Baseline            | Standard Secure Configuration              |
| Configuration Drift          | Deviation from Baseline                    |
| Patch Management             | Identify, Assess, Test, Deploy, Verify     |
| Change Management            | Controlled Changes                         |
| Blue Team                    | Defend                                     |
| Red Team                     | Simulate Attacks                           |
| Purple Team                  | Collaborate to Improve Defenses            |
| Vulnerability Scanning       | Identify Known Weaknesses                  |
| SAST                         | Analyze Code Without Running               |
| DAST                         | Test Running Application                   |
| Threat Modeling              | Identify Threats During Design             |
| Physical Penetration Testing | Test Physical Access Security              |
| Phishing                     | Deceptive Messages                         |
| Tailgating                   | Follow an Authorized Person                |
| Impersonation                | Pretend to Be Someone Else                 |

## 50. หัวข้อที่ต้องแยกให้ออก

เวลาทำข้อสอบ ISC2 CC โจทย์มักให้สถานการณ์แล้วถามว่าควรใช้กระบวนการหรือมาตรการใด จึงควรแยกคำที่คล้ายกันให้ได้

| คู่ที่อาจสับสน                                | วิธีแยก                                                 |
| --------------------------------------------- | ------------------------------------------------------- |
| Encryption vs Hashing                         | อ่านข้อมูลกลับได้ด้วย Key vs One-way                    |
| SIEM vs Antivirus                             | วิเคราะห์ Events จากหลายระบบ vs ป้องกัน Malware         |
| Alerting vs Reporting                         | แจ้งเตือนเหตุการณ์ vs จัดทำรายงาน                       |
| Triage vs Correlation                         | จัดลำดับความสำคัญ vs เชื่อมโยงเหตุการณ์                 |
| IOC vs CTI                                    | ร่องรอยการโจมตี vs ข่าวกรองภัยคุกคามที่ผ่านการวิเคราะห์ |
| Containment vs Eradication                    | จำกัดการแพร่กระจาย vs กำจัดสาเหตุ                       |
| Eradication vs Recovery                       | กำจัดภัยคุกคาม vs ฟื้นฟูบริการ                          |
| Tabletop vs Technical Testing                 | อภิปรายสถานการณ์ vs ลงมือทดสอบ                          |
| Configuration vs Change Management            | รักษาการตั้งค่า vs ควบคุมการเปลี่ยนแปลง                 |
| Vulnerability Scanning vs Penetration Testing | ค้นหาช่องโหว่ vs ทดสอบการโจมตีที่ได้รับอนุญาต           |
| SAST vs DAST                                  | ตรวจโค้ด vs ตรวจแอปที่รันอยู่                           |
| Threat Modeling vs Penetration Testing        | วิเคราะห์ภัยคุกคามล่วงหน้า vs ทดสอบการป้องกัน           |
| Red vs Blue vs Purple                         | Attack Simulation vs Defense vs Collaboration           |
| Tailgating vs Impersonation                   | แอบเดินตาม vs แอบอ้างตัวตน                              |

## 51. แบบทดสอบทบทวน Domain 5

ผมเตรียมคำถาม 10 ข้อจากหัวข้อสำคัญที่เราเรียน เพื่อใช้ตรวจสอบความเข้าใจก่อนเริ่มทำข้อสอบจำลองเต็มชุด

Question 1 / 10

ISC2 CC Review

Which security mechanism is primarily used to verify data integrity?

A. Encryption

B. Hashing

C. Firewall

D. Network Segmentation

PreviousNext&#x20;

## สรุปท้าย Domain 5

จากเนื้อหาที่เรียนทั้งหมด ผมอยากให้เข้าใจหลักการใหญ่ 5 เรื่องนี้ให้แม่น

1. Protect: ใช้ Cryptography, Security Controls และ Configuration ที่ปลอดภัย เพื่อปกป้องข้อมูลและระบบ
2. Detect: ใช้ Logging, Monitoring, SIEM และ Threat Intelligence เพื่อค้นหาภัยคุกคาม
3. Respond: ใช้ Incident Response Plan เพื่อจำกัดความเสียหาย กำจัดภัยคุกคาม และฟื้นฟูระบบ
4. Maintain: จัดการ Asset Lifecycle, EOL, Patches และ Changes เพื่อรักษาความปลอดภัยอย่างต่อเนื่อง
5. Test & Improve: ใช้ Security Testing, Threat Modeling และ Security Exercises เพื่อค้นหาจุดอ่อนก่อนถูกโจมตีจริง

สรุปฉบับนี้ครอบคลุมหัวข้อจากสไลด์ที่เราศึกษาร่วมกันในบทสนทนา รวมถึงคำอธิบายเสริมเพื่อเชื่อมโยงเนื้อหา ไม่ได้หมายความว่าทุกหัวข้อเป็นข้อกำหนดสอบที่มีน้ำหนักเท่ากัน

ตอนนี้เราเรียนครบ Domain 5 แล้วครับ และเมื่อรวมกับ Domain 1–4 ที่เรียนก่อนหน้า ก็สามารถเข้าสู่ช่วงทบทวนทั้งหลักสูตรและฝึกทำข้อสอบจำลอง ISC2 CC 2026 ได้แล้ว