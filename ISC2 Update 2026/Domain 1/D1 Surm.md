# ISC2 Certified in Cybersecurity (CC) — Domain 1: Security Principles
## คู่มือทบทวนฉบับขยาย ครบหัวข้อ พร้อมเนื้อหาเสริมและแนวคิดทำข้อสอบ (ภาษาไทย)

> **ขอบเขตและที่มา (อ่านก่อน):** เอกสารนี้รวบรวมแกนความรู้ Domain 1 ที่เคยทบทวนร่วมกัน ได้แก่ CIA, AAA, Risk, Controls, Governance, Ethics, Zero Trust และขยายด้วยความรู้พื้นฐานที่เกี่ยวข้องเพื่อให้ใช้เรียนแบบจบในไฟล์เดียว **เนื้อหาเสริมจะติดป้าย [เสริม]** ไม่อ้างว่าอยู่ในสไลด์เดิมทุกหัวข้อ เอกสาร PDF ของ ISC2 ที่แนบมา (`Inside the Updated ISC2 Certified in Cybersecurity Exam`, 6 สิงหาคม 2026) ยืนยันว่า Exam Outline ใหม่มีผล **1 กันยายน 2026**, Domain 1 มีน้ำหนัก **24%**, มี AAA, Risk Lifecycle, Frameworks และ Ethics ที่ขยายขึ้น ส่วน Governance เป็น Domain 2 แยกต่างหาก จึงควรใช้คู่กับ Exam Outline ฉบับทางการล่าสุด ไม่ใช่ใช้แทนเอกสารทางการ

**รูปแบบการอ่าน:** นิยาม → เหตุผล → ตัวอย่าง → จุดสับสน → Exam Tip  
**คำศัพท์:** รักษาคำอังกฤษสำคัญไว้เพื่อคุ้นกับข้อสอบ ISC2

---

## สารบัญ
1. ภาพรวม Security Principles และ Security Mindset
2. CIA Triad: Confidentiality, Integrity, Availability
3. Identification, Authentication, Authorization, Accounting (IAAA/AAA)
4. Privacy, Non-repudiation และ Accountability
5. Asset, Threat, Vulnerability, Exposure, Exploit และ Risk
6. Risk Management Lifecycle และ Risk Assessment
7. Risk Treatment, Residual Risk, Risk Appetite/Tolerance
8. Security Controls: Categories, Functions และตัวอย่าง
9. Defense in Depth, Zero Trust, Least Privilege และ Security by Design
10. Governance: Policies, Standards, Procedures, Guidelines
11. Frameworks, Standards, Regulations และ Compliance [เสริม]
12. Data Protection: Classification, Encryption, Hashing, Signatures [เสริม]
13. Physical, Human และ Technical Security [เสริม]
14. Security Ethics, Professional Responsibility และ Due Care
15. Security Awareness, Threat Scenarios และการตัดสินใจ [เสริม]
16. ตารางแยกคำศัพท์ที่มักออกสอบ
17. ตัวอย่างข้อสอบสถานการณ์ 20 ข้อพร้อมเฉลย
18. Checklist, Flashcards และแผนทบทวน
19. ขอบเขตเนื้อหาและแหล่งอ้างอิง

---

# 1. ภาพรวม Security Principles และ Security Mindset

**Information Security** คือการปกป้องข้อมูลและระบบที่จัดเก็บ ประมวลผล และส่งข้อมูล ให้บรรลุ Confidentiality, Integrity และ Availability. **Cybersecurity** เน้นปกป้องระบบ เครือข่าย อุปกรณ์ บริการ และข้อมูลในสภาพแวดล้อมดิจิทัลจากภัยคุกคามไซเบอร์ โดยมีส่วนทับซ้อนกับ Information Security สูง

เป้าหมายไม่ใช่ “ป้องกันการโจมตีได้ 100%” แต่คือ **ลดความเสี่ยงให้อยู่ในระดับที่องค์กรยอมรับได้** พร้อมตรวจจับ ตอบสนอง และฟื้นตัวเมื่อมาตรการป้องกันล้มเหลว

### Security Mindset ที่ต้องฝึก
- **Business first:** มาตรการต้องสอดคล้องกับความสำคัญของธุรกิจและผลกระทบต่อผู้มีส่วนได้ส่วนเสีย
- **Risk-based:** ใช้ผลประเมินความเสี่ยงกำหนดลำดับความสำคัญ ไม่ใช่เลือกเทคโนโลยีจากความนิยม
- **Least privilege:** จำกัดสิทธิ์เท่าที่จำเป็น
- **Defense in depth:** ใช้มาตรการหลายชั้น ไม่พึ่งชั้นเดียว
- **Verify and monitor:** ตรวจสอบตัวตน สิทธิ์ การเปลี่ยนแปลง และเหตุผิดปกติอย่างต่อเนื่อง
- **People, Process, Technology:** ความปลอดภัยต้องมีคน กระบวนการ และเทคโนโลยีร่วมกัน

**ตัวอย่าง:** องค์กรติดตั้ง Firewall ราคาแพง แต่พนักงานทุกคนมีสิทธิ์ Admin และไม่มีขั้นตอนเพิกถอนสิทธิ์เมื่อออกจากงาน ถือว่ายังมีความเสี่ยงสูง เพราะความปลอดภัยไม่ใช่แค่เครื่องมือ

**Exam Tip:** คำตอบที่ดีที่สุดมักคำนึงถึงนโยบาย กระบวนการ การประเมินความเสี่ยง และความเหมาะสม ไม่ใช่ “ซื้อเครื่องมือใหม่” เสมอไป

---

# 2. CIA Triad

## 2.1 Confidentiality — ความลับ
**ความหมาย:** ข้อมูลเข้าถึงหรือเปิดเผยได้เฉพาะผู้ที่ได้รับอนุญาต

**ตัวอย่างการละเมิด:** ส่งข้อมูลลูกค้าไปผิดอีเมล, ผู้ไม่มีสิทธิ์อ่านเวชระเบียน, ข้อมูลหลุดจากฐานข้อมูล

**มาตรการสนับสนุน:** Access Control, Encryption, Data Classification, MFA, Need-to-Know, Secure Disposal, DLP [เสริม]

**ข้อควรจำ:** การเข้ารหัสปกป้องความลับได้ แต่ไม่ได้รับประกันว่าระบบจะพร้อมใช้ หรือว่าผู้ใช้ที่มีสิทธิ์จะไม่แก้ไขข้อมูลผิดพลาด

## 2.2 Integrity — ความถูกต้องครบถ้วน
**ความหมาย:** ข้อมูลถูกต้อง ครบถ้วน เชื่อถือได้ และไม่ถูกแก้ไขโดยไม่ได้รับอนุญาต

**ตัวอย่างการละเมิด:** เปลี่ยนยอดเงินในฐานข้อมูล, แก้ไข Log, ปลอมแปลงเอกสาร

**มาตรการสนับสนุน:** Hash, Message Authentication Code (MAC), Digital Signature, Change Control, File Integrity Monitoring, Permissions, Audit Trail

**ข้อควรจำ:** Hash ใช้ตรวจพบการเปลี่ยนแปลง แต่ Hash ธรรมดาเพียงอย่างเดียวไม่พิสูจน์ผู้ส่งหรือป้องกันผู้โจมตีเปลี่ยนทั้งไฟล์และค่า Hash; สำหรับความถูกต้องที่ยืนยันแหล่งที่มาให้พิจารณา HMAC หรือ Digital Signature

## 2.3 Availability — ความพร้อมใช้งาน
**ความหมาย:** ผู้มีสิทธิ์สามารถเข้าถึงข้อมูลหรือบริการได้ในเวลาที่จำเป็น

**ตัวอย่างการละเมิด:** DDoS, ไฟฟ้าดับ, ระบบ Storage เสีย, Ransomware ทำให้ระบบใช้ไม่ได้

**มาตรการสนับสนุน:** Redundancy, Failover, Backup/Restore, UPS, Monitoring, Capacity Planning, Disaster Recovery

**ข้อควรจำ:** Backup ช่วยกู้ข้อมูล แต่ไม่ใช่หลักประกันว่าระบบจะไม่ล่ม; High Availability มุ่งลดการหยุดให้บริการ

### ตารางวิเคราะห์เหตุการณ์
| เหตุการณ์ | CIA ที่เด่น | เหตุผล |
|---|---|---|
| ผู้โจมตีอ่านไฟล์เงินเดือน | Confidentiality | เข้าถึงข้อมูลลับ |
| ผู้โจมตีเปลี่ยนเลขบัญชีปลายทาง | Integrity | ข้อมูลถูกแก้ไข |
| ระบบรับชำระเงินล่ม | Availability | บริการไม่พร้อมใช้ |
| Ransomware เข้ารหัสไฟล์ | Availability (อาจรวม I/C) | ใช้ข้อมูลไม่ได้; อาจแก้ไข/ขโมยข้อมูลด้วย |
| ข้อมูลถูกส่งออกและถูกเปลี่ยน | Confidentiality + Integrity | มากกว่าหนึ่งหลักการได้รับผลกระทบ |

**Exam Tip:** คำถามถาม “PRIMARY impact” ให้เลือกผลกระทบหลักตามสถานการณ์ ไม่จำเป็นว่ามีผลต่อ CIA เพียงข้อเดียว

---

# 3. Identification, Authentication, Authorization, Accounting

## 3.1 Identification — ระบุตัวตน
ผู้ใช้ **อ้างว่าตนเป็นใคร** เช่น ระบุ Username หรือ Employee ID; ยังไม่ได้พิสูจน์ว่าคือบุคคลนั้นจริง

## 3.2 Authentication — พิสูจน์ตัวตน
ระบบตรวจสอบหลักฐานว่าผู้ใช้อ้างตัวถูกต้องหรือไม่ เช่น Password, Hardware Security Key, Biometrics

**Authentication factors:**
- **Something you know:** Password, PIN
- **Something you have:** Security Key, Smart Card, OTP Device
- **Something you are:** Fingerprint, Face Recognition
- [เสริม] **Somewhere you are / Something you do:** ตำแหน่งหรือพฤติกรรมอาจใช้เป็นสัญญาณประกอบตามระบบ แต่ไม่ควรเหมารวมว่าเป็นปัจจัย MFA มาตรฐานเดียวกับสามประเภทหลักในทุกบริบท

**MFA:** ต้องมีอย่างน้อย 2 ปัจจัย **ต่างประเภท** เช่น Password + Security Key; Password + PIN เป็นประเภทเดียวกัน จึงไม่ใช่ MFA

**[เสริม] Authentication vs MFA vs SSO:**
- MFA เพิ่มความมั่นใจในการยืนยันตัวตน
- Single Sign-On (SSO) ช่วยใช้การเข้าสู่ระบบครั้งเดียวเข้าถึงหลายบริการที่เชื่อถือร่วมกัน; SSO ไม่เท่ากับ MFA และอาจใช้ร่วมกันได้

## 3.3 Authorization — อนุญาตการกระทำ
หลังพิสูจน์ตัวตน ระบบตรวจว่าทำอะไรได้ เช่น Read, Write, Delete, Approve

**ตัวอย่าง:** พนักงานเข้าสู่ระบบสำเร็จ แต่เปิดรายงานเงินเดือนไม่ได้เพราะไม่มีสิทธิ์ = Authorization ทำงานตามนโยบาย

**แนวคิดประกอบ:** Least Privilege, Need to Know, Separation of Duties, Access Review, Deny by Default

## 3.4 Accounting — บันทึกกิจกรรม
เก็บหลักฐานว่าใครทำอะไร เมื่อไร ที่ไหน ผลลัพธ์เป็นอย่างไร เช่น Login Log, File Access Log, Admin Change Log

**ข้อควรระวัง:** Log ต้องปกป้องจากการแก้ไขโดยไม่ได้รับอนุญาตและมีการจัดการเวลาที่เหมาะสม มิฉะนั้นความน่าเชื่อถือจะลดลง

### ลำดับจำง่าย
`Identification → Authentication → Authorization → Accounting`

**ตัวอย่างสถานการณ์:**
1. กรอก Username = Identification
2. ยืนยันด้วย Password + Security Key = Authentication
3. เปิดเอกสารได้แต่แก้ไขไม่ได้ = Authorization
4. ระบบบันทึกเวลาและชื่อไฟล์ = Accounting

**Exam Tip:** คำว่า “verify identity” = Authentication; “grant access” = Authorization; “record activities” = Accounting

---

# 4. Privacy, Non-repudiation และ Accountability

## 4.1 Privacy — ความเป็นส่วนตัว
เกี่ยวกับการเก็บ ใช้ เปิดเผย เก็บรักษา และลบข้อมูลส่วนบุคคลอย่างเหมาะสมตามวัตถุประสงค์และข้อกำหนด

**หลักการที่ควรรู้ [เสริม]:** Data Minimization (เก็บเท่าที่จำเป็น), Purpose Limitation (ใช้ตามวัตถุประสงค์), Retention (เก็บตามระยะเวลา), Transparency (แจ้งให้ทราบ), Access Restriction

**ต่างจาก Confidentiality:** Confidentiality คือการไม่เปิดเผยข้อมูลแก่ผู้ไม่มีสิทธิ์; Privacy กว้างกว่า ครอบคลุมความเหมาะสมและสิทธิของเจ้าของข้อมูลด้วย

## 4.2 Non-repudiation — การไม่อาจปฏิเสธการกระทำ
มีหลักฐานที่ช่วยให้ผู้กระทำไม่สามารถปฏิเสธการกระทำที่พิสูจน์ได้อย่างสมเหตุสมผล เช่น Digital Signature ภายใต้ระบบจัดการกุญแจและตัวตนที่เชื่อถือได้

**ไม่ใช่:** Encryption เพียงอย่างเดียวไม่ได้ทำให้เกิด Non-repudiation โดยอัตโนมัติ

## 4.3 Accountability — ความรับผิดชอบตรวจสอบย้อนหลังได้
ผูกกิจกรรมเข้ากับตัวตนหรือหน่วยงานที่รับผิดชอบผ่าน Log, Audit Trail, การกำหนดบทบาท และการทบทวน

**ต่างจาก Accounting:** Accounting คือการบันทึกกิจกรรม; Accountability คือความสามารถในการระบุความรับผิดชอบโดยอาศัยหลักฐานและกระบวนการ

---

# 5. Asset, Threat, Vulnerability, Exposure, Exploit และ Risk

| คำ | ความหมาย | ตัวอย่าง |
|---|---|---|
| Asset | ทรัพย์สินที่มีคุณค่า | ข้อมูลลูกค้า ระบบ ERP บุคลากร |
| Threat | สิ่งที่อาจก่อให้เกิดอันตราย | Hacker, ไฟไหม้, Insider, Malware |
| Threat Actor | ผู้กระทำภัยคุกคาม | Cybercriminal, Insider |
| Vulnerability | จุดอ่อน | ซอฟต์แวร์ไม่ Patch, รหัสผ่านอ่อน |
| Exposure | สภาพที่เปิดรับความเสี่ยง | ฐานข้อมูลเปิดสู่อินเทอร์เน็ต |
| Exploit | วิธีใช้ประโยชน์จากช่องโหว่ | โค้ดโจมตีช่องโหว่ |
| Risk | ความไม่แน่นอนที่อาจส่งผลต่อวัตถุประสงค์ | ข้อมูลรั่วไหลจากช่องโหว่ |
| Impact | ผลกระทบ | สูญเสียรายได้ เสียชื่อเสียง |
| Likelihood | โอกาสเกิด | สูง/กลาง/ต่ำ หรือความน่าจะเป็น |

**เหตุและผล:** Asset + Threat + Vulnerability + Exposure → Risk Scenario → Potential Impact

**ตัวอย่างเต็ม:** บริษัทมีฐานข้อมูลลูกค้า (Asset), ตั้งค่าเปิดอินเทอร์เน็ตโดยไม่จำเป็น (Exposure/Configuration Vulnerability), ผู้โจมตีสแกนหาและเข้าถึง (Threat/Exploit), ข้อมูลรั่วไหล (Risk Event) ส่งผลต่อความลับและกฎหมาย (Impact)

**จุดสับสน:** Threat ไม่ใช่ Vulnerability; ผู้โจมตีเป็น Threat Actor ส่วนช่องโหว่คือจุดอ่อนที่อาจถูกใช้

---

# 6. Risk Management Lifecycle และ Risk Assessment

## 6.1 วงจรบริหารความเสี่ยง
1. **Establish Context / Identify Assets:** เข้าใจธุรกิจ ทรัพย์สิน ผู้เกี่ยวข้อง และขอบเขต
2. **Identify Risks:** ระบุเหตุการณ์ที่อาจเกิด ภัยคุกคาม ช่องโหว่ และผลกระทบ
3. **Analyze Risks:** ประเมิน Likelihood และ Impact รวมถึงมาตรการที่มีอยู่
4. **Evaluate/Prioritize:** เปรียบเทียบกับเกณฑ์ที่ยอมรับได้และจัดลำดับ
5. **Treat Risks:** หลีกเลี่ยง ลด โอน หรือยอมรับ
6. **Monitor/Review/Communicate:** ติดตาม ประเมินใหม่ และรายงานผู้รับผิดชอบ

**หมายเหตุ:** ชื่อขั้นตอนอาจต่างกันตาม Framework แต่ตรรกะหลักใกล้เคียงกัน

## 6.2 Qualitative vs Quantitative Risk Analysis
**Qualitative:** ประเมินเป็น High/Medium/Low, ใช้ Risk Matrix; เข้าใจง่ายแต่ขึ้นกับเกณฑ์และดุลยพินิจ

**Quantitative [เสริม]:** ใช้ตัวเลขและประมาณการทางการเงิน เช่น
- **Asset Value (AV):** มูลค่าทรัพย์สิน
- **Exposure Factor (EF):** สัดส่วนความเสียหายหากเหตุการณ์เกิด
- **Single Loss Expectancy (SLE):** `AV × EF`
- **Annualized Rate of Occurrence (ARO):** ความถี่คาดการณ์ต่อปี
- **Annualized Loss Expectancy (ALE):** `SLE × ARO`

**ตัวอย่าง:** AV = 1,000,000 บาท, EF = 20%, ARO = 0.5 ครั้ง/ปี → SLE = 200,000 บาท → ALE = 100,000 บาท/ปี

**ข้อควรระวัง:** ARO เป็นการประมาณ ไม่ใช่ความแน่นอน และโมเดลนี้เป็นตัวช่วยเชิงแนวคิด ไม่ใช่คำตอบเดียวของการประเมินความเสี่ยงทุกองค์กร

## 6.3 Inherent vs Residual Risk
- **Inherent Risk:** ความเสี่ยงก่อนพิจารณาประสิทธิผลของมาตรการควบคุม
- **Residual Risk:** ความเสี่ยงที่เหลือหลังใช้มาตรการควบคุม

**ตัวอย่าง:** ก่อน MFA บัญชีผู้ใช้เสี่ยงถูกยึดสูง; หลัง MFA ความเสี่ยงลดลง แต่ยังมีความเสี่ยงจาก Phishing/Session Theft เหลืออยู่

---

# 7. Risk Treatment, Risk Appetite และ Risk Tolerance

## 7.1 สี่วิธีจัดการความเสี่ยง
| วิธี | ทำอะไร | ตัวอย่าง | จุดจำ |
|---|---|---|---|
| Avoid | ยุติกิจกรรมเสี่ยง | ไม่เปิดบริการที่ควบคุมไม่ได้ | เลิกกิจกรรม |
| Mitigate/Reduce | ลดโอกาสหรือผลกระทบ | Patch, MFA, Backup | ลดความเสี่ยง |
| Transfer/Share | โอน/แบ่งภาระผลกระทบบางส่วน | Insurance, สัญญาจัดสรรความรับผิด | ไม่ได้ทำให้ความรับผิดทั้งหมดหายไป |
| Accept | ยอมรับโดยผู้มีอำนาจ | ความเสี่ยงต่ำและมีเหตุผล | ต้องรับรู้และติดตาม |

**จุดสับสน:** การซื้อประกันไม่ป้องกันการโจมตี จึงไม่ใช่ Mitigation ในแง่ลดโอกาสเกิดโดยตรง แต่เป็น Transfer ของผลกระทบทางการเงินบางส่วน

## 7.2 Risk Appetite และ Risk Tolerance [เสริม]
- **Risk Appetite:** ระดับ/ประเภทความเสี่ยงที่องค์กรพร้อมยอมรับเพื่อบรรลุเป้าหมาย
- **Risk Tolerance:** ขอบเขตความเบี่ยงเบนจากเป้าหมายหรือเกณฑ์ความเสี่ยงที่ยอมรับได้ในบริบทเฉพาะ

**ตัวอย่าง:** องค์กรมี Appetite ต่ำต่อการรั่วไหลของข้อมูลสุขภาพ และกำหนด Tolerance เข้มงวดต่อการเข้าถึงโดยไม่ได้รับอนุญาต

## 7.3 Risk Owner และการตัดสินใจ
Risk Owner/ผู้บริหารที่ได้รับมอบหมายต้องรับผิดชอบการตัดสินใจเกี่ยวกับความเสี่ยงตาม Governance ขององค์กร ไม่ใช่ให้ผู้ดูแลระบบตัดสินใจยอมรับความเสี่ยงสำคัญเพียงลำพัง

---

# 8. Security Controls: Categories และ Functions

## 8.1 แบ่งตามลักษณะมาตรการ
| Category | ความหมาย | ตัวอย่าง |
|---|---|---|
| Administrative/Managerial | นโยบาย การกำกับดูแล การจัดการคน/กระบวนการ | Policy, Training, Background Check, Risk Assessment |
| Technical/Logical | ใช้เทคโนโลยีบังคับหรือตรวจจับ | Firewall, MFA, Encryption, EDR |
| Physical | ป้องกันการเข้าถึงทางกายภาพ | Locks, Guards, Fences, CCTV |

**หมายเหตุ:** บาง Framework จัดประเภทแตกต่างกันเล็กน้อย และมาตรการเดียวอาจมีหลายหน้าที่

## 8.2 แบ่งตามหน้าที่
| Function | หน้าที่ | ตัวอย่าง |
|---|---|---|
| Preventive | ป้องกันก่อนเกิด | MFA, Door Lock, Firewall Block Rule |
| Detective | ตรวจจับเมื่อเกิด/หลังเกิด | IDS Alert, CCTV Monitoring, Audit Review |
| Corrective | แก้ไขผลกระทบ/ข้อบกพร่อง | Patch, Malware Removal, Correct Misconfiguration |
| Deterrent | ทำให้ไม่อยากลงมือ | Warning Sign, Visible Guard |
| Recovery | กู้คืนความสามารถ | Restore Backup, Failover/Recovery Procedure |
| Compensating | มาตรการทดแทนเมื่อใช้หลักไม่ได้ | เพิ่ม Monitoring และการอนุมัติเมื่อยังใช้ Control หลักไม่ได้ |
| Directive [เสริม] | ชี้นำให้ปฏิบัติ | Policy, Procedure, Instruction |

## 8.3 หนึ่ง Control มีหลายบทบาทได้
- **Security Guard:** Preventive/Deterrent/Detective ขึ้นกับหน้าที่จริง
- **CCTV:** โดยทั่วไป Detective และ Deterrent; ไม่ได้หยุดผู้บุกรุกโดยตัวมันเอง
- **Firewall:** Preventive เมื่อบล็อก; Detective ได้เมื่อบันทึกและแจ้งเตือน
- **Backup:** Recovery Control มากกว่า Preventive ต่อการติด Malware

**Exam Tip:** อ่านคำถามว่า `PRIMARY purpose`, `BEST example`, `FIRST` หรือ `MOST effective` แล้วเลือกตามบริบท ไม่ยึดว่าเครื่องมือหนึ่งทำได้หน้าที่เดียว

---

# 9. Defense in Depth, Zero Trust, Least Privilege และ Security by Design

## 9.1 Defense in Depth
การป้องกันหลายชั้น เช่น
1. Physical: จำกัดการเข้าถึง Data Center
2. Network: Firewall และ Segmentation
3. Identity: MFA และ Least Privilege
4. Endpoint: Patch, EDR
5. Data: Encryption และ Backup
6. Monitoring: Log, Alert, Incident Response

ถ้าชั้นหนึ่งถูกเจาะ ชั้นอื่นยังช่วยลดโอกาสหรือผลกระทบ

## 9.2 Zero Trust
**Never Trust, Always Verify**: ไม่ถือว่าผู้ใช้หรืออุปกรณ์ปลอดภัยเพียงเพราะอยู่ในเครือข่ายภายใน ต้องประเมินตัวตน สิทธิ์ บริบท และความเสี่ยงตามความเหมาะสม

องค์ประกอบ [เสริม]: Explicit Verification, Least-Privilege Access, Assume Breach, Device Posture, Continuous Evaluation, Microsegmentation

**จุดสับสน:** Zero Trust ไม่ใช่ผลิตภัณฑ์หนึ่งชิ้น และไม่ใช่การบังคับให้ทุกคนใส่รหัสผ่านซ้ำทุกครั้งโดยไม่คำนึงถึงบริบท

## 9.3 Least Privilege vs Need to Know vs Separation of Duties
- **Least Privilege:** ให้สิทธิ์ขั้นต่ำเพื่อทำงาน
- **Need to Know:** ให้เข้าถึงข้อมูลเมื่อมีเหตุจำเป็นต้องรู้
- **Separation of Duties:** แยกงานสำคัญเพื่อไม่ให้บุคคลเดียวควบคุมทุกขั้นตอน เช่น คนสร้างผู้ขายไม่ใช่คนอนุมัติจ่ายเงิน
- **Job Rotation/Mandatory Vacation [เสริม]:** ช่วยตรวจพบพฤติกรรมผิดปกติหรือการทุจริตบางรูปแบบ

## 9.4 Security by Design / Secure Defaults [เสริม]
สร้างความปลอดภัยตั้งแต่การออกแบบ ไม่ใช่ค่อยเพิ่มหลังระบบเสร็จ; ปิดสิทธิ์ที่ไม่จำเป็นเป็นค่าเริ่มต้น (Deny by Default), ลด Attack Surface, ใช้การตั้งค่าที่ปลอดภัย และทดสอบก่อนนำขึ้นระบบ

---

# 10. Governance: Policies, Standards, Procedures, Guidelines

**Governance** คือโครงสร้างการกำกับดูแล การกำหนดทิศทาง ความรับผิดชอบ และการตรวจสอบว่า Security Program สนับสนุนเป้าหมายองค์กร

| เอกสาร | คำถามที่ตอบ | ตัวอย่าง |
|---|---|---|
| Policy | ต้องทำอะไร/เพราะอะไร | ต้องปกป้องข้อมูลลูกค้า |
| Standard | ข้อกำหนดที่ต้องทำให้สอดคล้อง | บัญชีสำคัญต้องใช้ MFA |
| Procedure | ทำอย่างไรทีละขั้น | ขั้นตอนออก/ยกเลิกสิทธิ์ |
| Guideline | แนวทางที่แนะนำ | คำแนะนำสร้าง Passphrase |
| Baseline [เสริม] | ค่าควบคุมขั้นต่ำที่กำหนด | Secure Configuration Baseline |

**ความต่างที่ออกสอบ:** Policy ระดับสูงกว่า Procedure; Standard มีลักษณะบังคับภายในองค์กร ส่วน Guideline ยืดหยุ่นกว่า

## 10.1 Roles and Responsibilities [เสริม]
- **Senior Management:** สนับสนุนทรัพยากร กำหนด Risk Appetite และความรับผิดชอบ
- **Security Team:** เสนอและปฏิบัติตามมาตรการ ติดตามความเสี่ยง
- **Data Owner:** รับผิดชอบการจัดประเภทและข้อกำหนดการใช้ข้อมูลตามบริบทองค์กร
- **Data Custodian:** ดูแลระบบและข้อมูลตามนโยบาย
- **Users:** ปฏิบัติตามนโยบายและรายงานเหตุผิดปกติ

## 10.2 GRC [เสริมเชื่อม Domain 2]
- **Governance:** ใครกำหนดทิศทางและรับผิดชอบ
- **Risk Management:** องค์กรประเมินและจัดการความเสี่ยงอย่างไร
- **Compliance:** ปฏิบัติตามกฎหมาย มาตรฐาน สัญญา และข้อกำหนดหรือไม่

**สำคัญสำหรับ Exam Outline 2026:** ISC2 แยก **Security Governance เป็น Domain 2** จึงควรทบทวนหัวข้อนี้เป็นพื้นฐานเชื่อมโยง ไม่ตีความว่าทุกเรื่อง GRC เป็น Domain 1 ทั้งหมด

---

# 11. Frameworks, Standards, Regulations และ Compliance [เสริม]

## 11.1 Framework vs Standard vs Regulation
- **Framework:** โครงสร้างแนวทางจัดการความเสี่ยงและการควบคุม เช่น NIST Cybersecurity Framework (CSF)
- **Standard:** ชุดข้อกำหนด/แนวปฏิบัติ เช่น ISO/IEC 27001 สำหรับระบบบริหารความมั่นคงปลอดภัยสารสนเทศ
- **Regulation/Law:** กฎที่มีผลทางกฎหมายในเขตอำนาจที่เกี่ยวข้อง
- **Contractual Requirement:** ข้อกำหนดตามสัญญา

## 11.2 ตัวอย่างที่ควรรู้จัก
- **NIST CSF 2.0:** Govern, Identify, Protect, Detect, Respond, Recover (เป็น Functions ไม่ใช่ขั้นตอน Incident Response แบบเรียงตายตัว)
- **ISO/IEC 27001:** Information Security Management System (ISMS)
- **CIS Controls:** ชุดมาตรการความปลอดภัยที่จัดลำดับเพื่อช่วยองค์กรนำไปปฏิบัติ
- **NIST SP 800-53:** แคตตาล็อก Security/Privacy Controls สำหรับบริบทที่เกี่ยวข้อง

**Exam Tip:** รู้วัตถุประสงค์ระดับสูงก่อน ไม่จำเป็นต้องท่องทุก Control ID สำหรับการทบทวนพื้นฐานนี้

## 11.3 Audit และ Compliance
- **Internal Audit:** ประเมินโดยหน่วยงานตรวจสอบภายใน
- **External Audit:** ตรวจโดยหน่วยงานภายนอก
- **Compliance:** การสอดคล้องกับข้อกำหนด
- **Security:** ความสามารถในการลดความเสี่ยงจริง

**Compliance ≠ Security:** ผ่านข้อกำหนดขั้นต่ำไม่ได้แปลว่าปลอดภัยจากภัยทุกชนิด

---

# 12. Data Protection: Classification, Encryption, Hashing, Signatures [เสริม]

## 12.1 Data Classification
แบ่งข้อมูลตามความอ่อนไหว/ผลกระทบ เช่น Public, Internal, Confidential, Restricted (ชื่อชั้นขึ้นกับองค์กร)

**Data Lifecycle:** Create/Collect → Store → Use/Share → Archive → Dispose; ต้องปกป้องตามช่วงอายุข้อมูล

## 12.2 Encryption
เปลี่ยน Plaintext เป็น Ciphertext โดยใช้ Key เพื่อปกป้อง Confidentiality

- **Symmetric Encryption:** กุญแจเดียวกันใช้เข้ารหัส/ถอดรหัส; เร็ว เหมาะกับข้อมูลปริมาณมาก
- **Asymmetric Encryption:** ใช้คู่ Public/Private Key; ใช้กับ Key Exchange, Encryption และ Digital Signature ตามรูปแบบการใช้งาน
- **Data at Rest:** ข้อมูลเก็บใน Disk/Database
- **Data in Transit:** ข้อมูลระหว่างส่ง เช่น TLS

**จุดสับสน:** Hashing ไม่ใช่ Encryption เพราะไม่ได้ออกแบบให้ถอดกลับเป็นข้อมูลเดิม

## 12.3 Hashing และ Integrity
Hash Function รับข้อมูลแล้วให้ Digest; การเปลี่ยนข้อมูลแม้เล็กน้อยโดยทั่วไปทำให้ Digest เปลี่ยนมาก (สำหรับ Cryptographic Hash ที่ดี)

**ใช้ทำอะไร:** ตรวจความเปลี่ยนแปลงไฟล์, ตรวจสอบ Integrity, เป็นส่วนหนึ่งของ Digital Signature และระบบจัดเก็บรหัสผ่านแบบใช้ Password Hashing ที่เหมาะสม

**[เสริม] Password Storage:** ควรใช้ Password Hashing แบบช้าและมี Salt เช่น Argon2id/bcrypt/scrypt ตามบริบท ไม่ใช่ Hash ทั่วไปแบบเร็วเพียงอย่างเดียว

## 12.4 Digital Signature
ใช้ Private Key ลงลายมือชื่อและ Public Key ตรวจสอบ; สนับสนุน Integrity, Authentication of Origin และ Non-repudiation ภายใต้เงื่อนไขการจัดการตัวตน/กุญแจที่เหมาะสม

**Exam Tip:** ถ้าโจทย์ถาม “ป้องกันคนอ่าน” ให้คิด Encryption; “ตรวจว่าไฟล์เปลี่ยนหรือไม่” ให้คิด Hash/Integrity; “พิสูจน์ผู้ลงนามและการไม่ปฏิเสธ” ให้คิด Digital Signature

---

# 13. Physical, Human และ Technical Security [เสริม]

## 13.1 Physical Security
- **Perimeter:** Fence, Gate, Lighting
- **Entry Control:** Locks, Badge, Biometrics, Mantrap
- **Monitoring:** CCTV, Alarm, Security Guard
- **Environmental:** Fire Detection/Suppression, HVAC, UPS, Water Leak Detection

**Mantrap:** พื้นที่ทางเข้าที่ควบคุมประตูเป็นลำดับ ช่วยจำกัดการผ่านเข้าโดยไม่ได้รับอนุญาต

**Tailgating:** ผู้ไม่มีสิทธิ์เดินตามผู้มีสิทธิ์เข้าพื้นที่โดยไม่ผ่านการตรวจสอบตนเอง

## 13.2 Human Security
- Security Awareness Training
- Clear Desk / Clear Screen
- Visitor Escort
- Reporting Suspicious Activities
- Joiner-Mover-Leaver Process

## 13.3 Technical Security
- MFA และ Access Control
- Firewall และ Network Segmentation
- Patch Management และ Secure Configuration
- Endpoint Protection และ Monitoring
- Encryption และ Backup

**จุดสับสน:** Controls เป็นได้ทั้ง Administrative, Technical และ Physical; อย่าจำจากชื่ออุปกรณ์โดยไม่ดูบทบาท

---

# 14. Ethics, Professional Responsibility และ Due Care

## 14.1 ISC2 Code of Ethics — 4 Canons
โดยสรุปสาระสำคัญ:
1. **Protect society, the common good, necessary public trust and confidence, and the infrastructure** — ปกป้องสังคม ประโยชน์ส่วนรวม ความไว้วางใจ และโครงสร้างพื้นฐาน
2. **Act honorably, honestly, justly, responsibly, and legally** — ปฏิบัติอย่างมีเกียรติ ซื่อสัตย์ ยุติธรรม รับผิดชอบ และถูกกฎหมาย
3. **Provide diligent and competent service to principals** — ให้บริการอย่างรอบคอบและมีความสามารถต่อผู้ว่าจ้าง/ผู้รับบริการ
4. **Advance and protect the profession** — ส่งเสริมและปกป้องวิชาชีพ

**การตัดสินใจเชิงจริยธรรม:** ไม่ใช่เพียงทำตามคำสั่งผู้บังคับบัญชา หากคำสั่งขัดกฎหมายหรือเสี่ยงต่อสาธารณะ ต้องยึดหลักจริยธรรมและกระบวนการรายงานที่เหมาะสม

## 14.2 Due Care vs Due Diligence
- **Due Care:** ลงมือใช้ความระมัดระวังและมาตรการที่เหมาะสมตามหน้าที่ เช่น กำหนดนโยบายและควบคุมความเสี่ยง
- **Due Diligence:** ตรวจสอบ ศึกษา ประเมิน และติดตามอย่างรอบคอบก่อน/ระหว่างการตัดสินใจ เช่น ประเมิน Vendor Risk ก่อนทำสัญญา

**ตัวอย่าง:** ประเมินความเสี่ยงของผู้ให้บริการ = Due Diligence; บังคับใช้มาตรการรักษาความปลอดภัยที่เหมาะสม = Due Care

## 14.3 Professional Conduct
- รักษาความลับของข้อมูลที่ได้รับอนุญาตให้เข้าถึง
- ไม่ใช้สิทธิ์เกินขอบเขตงาน
- รายงานข้อเท็จจริง ไม่ปกปิดเหตุการณ์
- หลีกเลี่ยง Conflict of Interest
- รักษาความสามารถและพัฒนาความรู้ต่อเนื่อง

---

# 15. Security Awareness และ Threat Scenarios [เสริม]

## 15.1 Social Engineering
การใช้จิตวิทยาหลอกให้บุคคลเปิดเผยข้อมูลหรือทำสิ่งที่ไม่ควรทำ

| เทคนิค | ลักษณะ | การป้องกันหลัก |
|---|---|---|
| Phishing | ข้อความหลอกให้กดลิงก์/ส่งข้อมูล | Verify Sender/URL, MFA, Reporting |
| Spear Phishing | เจาะจงบุคคล/องค์กร | Training และตรวจสอบช่องทางอิสระ |
| Vishing | หลอกทางโทรศัพท์ | Call-back ผ่านเบอร์ทางการ |
| Smishing | หลอกผ่าน SMS | ไม่กดลิงก์ไม่ทราบที่มา |
| Pretexting | สร้างเรื่องราวเพื่อขอข้อมูล | Verify Identity and Need |
| Tailgating | เดินตามเข้าพื้นที่ | Badge/Visitor Control |

## 15.2 Malware และผลต่อ CIA
- **Ransomware:** ทำให้ข้อมูล/ระบบใช้ไม่ได้ และอาจขโมยข้อมูล
- **Spyware:** ลอบเก็บข้อมูล กระทบ Confidentiality
- **Worm:** แพร่กระจายได้เองในบางสภาพแวดล้อม
- **Trojan:** แฝงตัวเป็นโปรแกรมดูปกติ

**แนวคิด:** การจัดประเภทภัยช่วยประเมินผลกระทบและเลือก Controls ไม่ใช่ให้จำชื่อมัลแวร์อย่างเดียว

## 15.3 Human Error และ Insider Risk
ไม่ใช่ทุกเหตุเกิดจากผู้โจมตีภายนอก เช่น ส่งอีเมลผิด ลืมลบสิทธิ์ หรือแชร์ไฟล์สาธารณะ ล้วนทำให้เกิด Security Incident ได้

---

# 16. ตารางแยกคำศัพท์ที่มักสับสน

| คู่เปรียบเทียบ | ต่างกันอย่างไร | คำใบ้ในข้อสอบ |
|---|---|---|
| Confidentiality vs Privacy | จำกัดการเปิดเผย vs สิทธิและการใช้ข้อมูลส่วนบุคคล | Disclosure vs Personal Data Use |
| Integrity vs Availability | ข้อมูลไม่ถูกแก้ไข vs ระบบพร้อมใช้ | Tampering vs Outage |
| Identification vs Authentication | อ้างตัวตน vs พิสูจน์ตัวตน | Username vs Password/Key |
| Authentication vs Authorization | พิสูจน์ว่าเป็นใคร vs มีสิทธิ์ทำอะไร | Verify vs Permit |
| Accounting vs Accountability | บันทึกกิจกรรม vs ระบุความรับผิดชอบ | Logs vs Responsibility |
| Threat vs Vulnerability | สิ่งคุกคาม vs จุดอ่อน | Attacker vs Unpatched Software |
| Risk vs Impact | ความไม่แน่นอนที่มีผลต่อเป้าหมาย vs ผลเสียหาย | Scenario vs Consequence |
| Inherent vs Residual Risk | ก่อน vs หลัง Controls | Before vs After |
| Risk Transfer vs Mitigation | แบ่งภาระผลกระทบ vs ลดความเสี่ยง | Insurance vs Patch |
| Preventive vs Detective | ป้องกัน vs ตรวจจับ | Block vs Alert |
| Corrective vs Recovery | แก้สาเหตุ/ผลเสีย vs กู้ความสามารถ | Fix vs Restore |
| Policy vs Procedure | ต้องทำอะไร vs ทำอย่างไร | Rule vs Steps |
| Standard vs Guideline | ข้อกำหนดบังคับ vs คำแนะนำ | Must vs Recommended |
| Due Care vs Due Diligence | ปฏิบัติอย่างระมัดระวัง vs ตรวจสอบอย่างรอบคอบ | Implement vs Investigate |
| Encryption vs Hashing | ปกปิดข้อมูลที่ถอดกลับได้ด้วยกุญแจ vs สร้าง Digest | Confidentiality vs Integrity |
| Hash vs Digital Signature | ตรวจความเปลี่ยนแปลง vs ยืนยันผู้ลงนามและความถูกต้อง | Changed? vs Who signed? |
| Defense in Depth vs Zero Trust | หลายชั้น vs ไม่ให้ความเชื่อถือโดยปริยาย | Layers vs Verify Explicitly |
| Least Privilege vs Need to Know | สิทธิ์ขั้นต่ำ vs ข้อมูลจำเป็นต้องรู้ | Permissions vs Information |
| Compliance vs Security | ตรงข้อกำหนด vs ลดความเสี่ยงจริง | Audit vs Actual Risk |

---

# 17. แบบฝึกหัดสถานการณ์ 20 ข้อ พร้อมเฉลย

> **คำถามฝึกแต่งใหม่เพื่อทบทวน** ไม่ใช่ข้อสอบจริงของ ISC2 และไม่คัดลอกจากคลัง `next-bank` ในโปรเจกต์

### Q1
พนักงานที่ไม่มีสิทธิ์ดาวน์โหลดฐานข้อมูลลูกค้าได้สำเร็จ หลัก CIA ใดได้รับผลกระทบหลัก?
A. Integrity  B. Confidentiality  C. Availability  D. Redundancy

**เฉลย: B.** มีการเปิดเผยข้อมูลแก่ผู้ไม่มีสิทธิ์; ไม่ได้ระบุว่าข้อมูลถูกแก้ไขหรือระบบล่ม

### Q2
ผู้โจมตีแก้ไขยอดโอนเงินจาก 5,000 เป็น 50,000 บาท ผลกระทบหลักคือ?
A. Integrity  B. Availability  C. Privacy  D. Deterrence

**เฉลย: A.** ข้อมูลถูกแก้ไขโดยไม่ได้รับอนุญาต

### Q3
องค์กรมี UPS และระบบไฟสำรองเพื่อให้บริการต่อเนื่อง มุ่ง CIA ข้อใด?
A. Confidentiality  B. Integrity  C. Availability  D. Non-repudiation

**เฉลย: C.** ลดผลกระทบจากไฟดับต่อความพร้อมใช้

### Q4
ผู้ใช้กรอก Username แล้ว ระบบถาม Security Key ขั้นตอน Security Key คือ?
A. Identification  B. Authentication  C. Authorization  D. Accounting

**เฉลย: B.** เป็นหลักฐานพิสูจน์ตัวตน

### Q5
ผู้ใช้ล็อกอินสำเร็จ แต่เปิดไฟล์ HR ไม่ได้ เป็นผลของ?
A. Authentication  B. Accounting  C. Authorization  D. Non-repudiation

**เฉลย: C.** ตรวจสิทธิ์หลังยืนยันตัวตน

### Q6
องค์กรบันทึกว่า Admin เปลี่ยน Firewall Rule เวลาใด ตรงกับ AAA ข้อใด?
A. Authentication  B. Authorization  C. Accounting  D. Availability

**เฉลย: C.** เป็นการบันทึกกิจกรรมตรวจสอบย้อนหลัง

### Q7
Password + PIN ถือเป็น MFA หรือไม่?
A. ใช่ เพราะมีสองข้อมูล  B. ไม่ เพราะเป็นปัจจัยประเภทเดียวกัน  C. ใช่เฉพาะบนมือถือ  D. ขึ้นกับความยาว PIN

**เฉลย: B.** ทั้งคู่เป็น Something You Know

### Q8
ระบบไม่ติด Patch เป็นเวลานาน คำที่ตรงที่สุดคือ?
A. Threat Actor  B. Vulnerability  C. Risk Transfer  D. Asset Value

**เฉลย: B.** เป็นจุดอ่อนที่อาจถูกใช้ประโยชน์

### Q9
บริษัทซื้อ Cyber Insurance เพื่อรับภาระค่าใช้จ่ายบางส่วน เป็นวิธีใด?
A. Avoid  B. Mitigate  C. Transfer  D. Eliminate

**เฉลย: C.** โอน/แบ่งผลกระทบทางการเงินบางส่วน ความเสี่ยงไม่ได้หายไป

### Q10
หลังเปิด MFA ยังเหลือความเสี่ยงจาก Session Hijacking เรียกว่า?
A. Inherent Risk  B. Residual Risk  C. Zero Risk  D. Avoided Risk

**เฉลย: B.** ความเสี่ยงที่เหลือหลังใช้ Controls

### Q11
CCTV ที่ใช้ตรวจสอบภาพย้อนหลังทำหน้าที่หลักเป็น Control ใด?
A. Detective  B. Preventive  C. Recovery  D. Corrective

**เฉลย: A.** ใช้ตรวจจับ/สืบค้นเหตุการณ์ ไม่ได้กีดขวางโดยตัวมันเอง

### Q12
การล็อกประตูห้อง Server เป็น Control ประเภทใดตามลักษณะ?
A. Administrative  B. Physical  C. Technical  D. Compensating

**เฉลย: B.** เป็นการควบคุมทางกายภาพ

### Q13
องค์กรกำหนดว่า “ทุกบัญชี Privileged ต้องใช้ MFA” ข้อกำหนดเฉพาะที่ต้องปฏิบัติตามนี้ใกล้เคียงกับเอกสารใดที่สุด?
A. Guideline  B. Standard  C. Incident Log  D. Risk Register

**เฉลย: B.** เป็นข้อกำหนดบังคับเฉพาะด้าน

### Q14
เอกสารที่อธิบายทีละขั้นตอนในการเพิกถอนบัญชีผู้ลาออก คือ?
A. Procedure  B. Policy  C. Regulation  D. Risk Appetite

**เฉลย: A.** อธิบายขั้นตอนการทำงาน

### Q15
การตรวจประวัติความปลอดภัยของ Vendor ก่อนทำสัญญา สะท้อนหลักใด?
A. Due Diligence  B. Non-repudiation  C. Availability  D. Encryption

**เฉลย: A.** ศึกษาและประเมินความเสี่ยงอย่างรอบคอบ

### Q16
เจ้าหน้าที่ต้องการเปิดข้อมูลเฉพาะส่วนที่จำเป็นต่อการทำงาน เป็นหลักใด?
A. Need to Know  B. Risk Transfer  C. Accounting  D. Redundancy

**เฉลย: A.** จำกัดการรับรู้ข้อมูลตามความจำเป็น

### Q17
ระบบแยกคนสร้างรายการจ่ายเงินกับคนอนุมัติ เป็นหลักใด?
A. Single Sign-On  B. Separation of Duties  C. Availability  D. Compensating Control

**เฉลย: B.** ป้องกันคนเดียวควบคุมทุกขั้นตอน

### Q18
บริษัทใช้ Firewall, MFA, EDR และ Monitoring ร่วมกัน สะท้อนหลักใด?
A. Defense in Depth  B. Risk Acceptance  C. Data Retention  D. Non-repudiation

**เฉลย: A.** ใช้การป้องกันหลายชั้น

### Q19
องค์กรถือว่าอุปกรณ์ในสำนักงานไม่ควรได้รับสิทธิ์โดยอัตโนมัติ ต้องตรวจสอบตัวตนและบริบท เป็นแนวคิดใด?
A. Zero Trust  B. Open Access  C. Risk Avoidance  D. Data Minimization

**เฉลย: A.** ไม่ให้ความเชื่อถือโดยปริยาย

### Q20
ต้องการหลักฐานว่าผู้ลงนามอนุมัติเอกสารจริง และตรวจได้ว่าเอกสารถูกเปลี่ยนหรือไม่ ควรพิจารณาอะไร?
A. Compression  B. Digital Signature  C. Plaintext Storage  D. UPS

**เฉลย: B.** สนับสนุน Integrity, การยืนยันผู้ลงนาม และ Non-repudiation ภายใต้เงื่อนไขที่เหมาะสม

---

# 18. Checklist, Flashcards และแผนทบทวน

## 18.1 Checklist ว่าพร้อมหรือยัง
- [ ] อธิบาย CIA ได้ พร้อมยกตัวอย่างการละเมิดแต่ละข้อ
- [ ] แยก Identification / Authentication / Authorization / Accounting ได้
- [ ] บอกได้ว่า Password + PIN ไม่ใช่ MFA
- [ ] แยก Privacy / Confidentiality / Non-repudiation ได้
- [ ] แยก Asset / Threat / Vulnerability / Risk / Impact ได้
- [ ] อธิบาย Risk Lifecycle และ Inherent/Residual Risk ได้
- [ ] เลือก Avoid / Mitigate / Transfer / Accept จากสถานการณ์ได้
- [ ] แยก Administrative / Technical / Physical Controls ได้
- [ ] แยก Preventive / Detective / Corrective / Recovery ได้
- [ ] อธิบาย Defense in Depth, Zero Trust, Least Privilege ได้
- [ ] แยก Policy / Standard / Procedure / Guideline ได้
- [ ] เข้าใจความต่าง Framework / Standard / Regulation
- [ ] แยก Encryption / Hashing / Digital Signature ได้
- [ ] อธิบาย ISC2 Code of Ethics และ Due Care/Due Diligence ได้
- [ ] ทำโจทย์สถานการณ์และอธิบายได้ว่าทำไมตัวเลือกอื่นผิด

## 18.2 Flashcards (คำถาม → คำตอบ)
1. **CIA ย่อมาจาก?** → Confidentiality, Integrity, Availability
2. **ตรวจสอบตัวตนคือ?** → Authentication
3. **ตรวจสิทธิ์คือ?** → Authorization
4. **เก็บ Log คือ AAA ข้อใด?** → Accounting
5. **Password + PIN เป็น MFA หรือไม่?** → ไม่
6. **ภัยคุกคามกับช่องโหว่ต่างกัน?** → สิ่งอาจก่ออันตราย vs จุดอ่อน
7. **ความเสี่ยงหลัง Controls?** → Residual Risk
8. **ประกันภัยไซเบอร์คือ Treatment ใด?** → Transfer/Share
9. **CCTV ที่ใช้เฝ้าระวังคือ?** → Detective
10. **Policy vs Procedure?** → สิ่งที่ต้องทำ vs ขั้นตอนทำ
11. **Hash vs Encryption?** → Digest เพื่อตรวจการเปลี่ยนแปลง vs เข้ารหัสเพื่อปกปิด
12. **Zero Trust?** → Never Trust, Always Verify
13. **Least Privilege?** → สิทธิ์ขั้นต่ำที่จำเป็น
14. **Due Diligence?** → ตรวจสอบ/ประเมินอย่างรอบคอบ
15. **Non-repudiation?** → หลักฐานช่วยป้องกันการปฏิเสธการกระทำ

## 18.3 แผนทบทวน 5 วัน
- **วัน 1:** CIA, AAA, Privacy, Non-repudiation; ฝึกจำแนกเหตุการณ์
- **วัน 2:** Threat/Vulnerability/Risk, Risk Lifecycle, Treatment; ทำโจทย์ความเสี่ยง
- **วัน 3:** Security Controls, Defense in Depth, Zero Trust; ฝึกแยกประเภท/หน้าที่
- **วัน 4:** Governance, Frameworks, Ethics; ทบทวนคำศัพท์ที่สับสน
- **วัน 5:** ทำข้อสอบ 20 ข้อแบบไม่ดูเฉลย อธิบายเหตุผลทุกตัวเลือก และทบทวนเฉพาะข้อผิด

### วิธีคิดเมื่อเจอโจทย์ ISC2 แบบสถานการณ์
1. หา **คำถามจริง**: FIRST, BEST, MOST, PRIMARY, LEAST
2. ระบุ **Asset และเป้าหมาย** ที่ต้องปกป้อง
3. แยก **สิ่งที่เกิดขึ้น** กับ **ผลกระทบ**
4. พิจารณา **Policy / Risk / Control / Ethics** ตามบริบท
5. ตัดตัวเลือกที่ไม่ตอบโจทย์หรือเกินขอบเขต
6. เลือกคำตอบที่ **เหมาะสมที่สุดในสถานการณ์** ไม่ใช่แค่ “ถูกได้”

---

# 19. ขอบเขตเนื้อหาและแหล่งอ้างอิง

## 19.1 แหล่งที่มาจากบทเรียนร่วมกัน
- หัวข้อที่เคยทบทวน: Security Principles, CIA Triad, AAA, Risk, Security Controls, Governance/Policy, Ethics, Defense in Depth, Zero Trust
- สรุปและประเด็นเปรียบเทียบคำศัพท์จากการสนทนาที่มีอยู่ในโปรเจกต์
- **ข้อจำกัด:** ไม่ได้มี Transcript และ Slide Domain 1 ต้นฉบับครบชุดให้ตรวจเทียบในรอบการจัดทำไฟล์นี้ จึงไม่อ้างว่าเนื้อหาทุกหัวข้ออยู่ในสไลด์ที่เรียนจริง

## 19.2 เอกสารประกอบที่ผู้ใช้อัปโหลด
- ISC2, **Inside the Updated ISC2 Certified in Cybersecurity Exam**, ลงวันที่ 6 สิงหาคม 2026, PDF `What’s New for Entry-Level Cybersecurity.pdf` (ไฟล์หน้าเว็บ 8 หน้า)
- เอกสารนี้ระบุว่า Outline ใหม่มีผล 1 กันยายน 2026; Domain 1 Security Principles มีน้ำหนัก 24%; เนื้อหา Domain 1 เพิ่ม AAA, Risk Management Concepts/Lifecycle, Frameworks และ Ethics; Domain 2 เป็น Security Governance
- URL ที่แสดงใน PDF: https://www.isc2.org/Insights/2026/08/inside-the-updated-isc2-cc-exam

## 19.3 แหล่งความรู้เสริม (เพื่อศึกษาต่อ ไม่ใช่ยืนยันว่าปรากฏในสไลด์)
- ISC2 CC Official Exam Outline — ใช้เป็นหลักในการตรวจสอบขอบเขตและน้ำหนัก Domain ล่าสุด
- NIST Cybersecurity Framework (CSF) 2.0 — https://www.nist.gov/cyberframework
- NIST Risk Management Framework — https://csrc.nist.gov/projects/risk-management
- ISC2 Code of Ethics — https://www.isc2.org/ethics
- ISO/IEC 27001 — มาตรฐาน ISMS (ตรวจฉบับที่ใช้กับบริบทขององค์กร)

**หมายเหตุสำคัญ:** เอกสารนี้เป็น Study Guide ฉบับขยายเพื่อความเข้าใจ ไม่ใช่ข้อสอบจริง ไม่รับประกันว่าทุกหัวข้อเสริมจะออกสอบ และไม่ควรใช้แทน Official Exam Outline/Training ของ ISC2

---

**จบคู่มือ Domain 1 — Security Principles (ฉบับขยาย)**
