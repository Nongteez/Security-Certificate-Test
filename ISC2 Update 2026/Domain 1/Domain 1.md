# ISC2 CC — Domain 1: Security Principles

> **เอกสารสรุปทบทวนภาษาไทย (ฉบับละเอียด)**  
> จัดทำจากหัวข้อ Domain 1 ที่ปรากฏในประวัติการเรียนของเรา ไม่ใช่การถอดข้อความจากสไลด์ต้นฉบับทุกหน้า  
> **ขอบเขต:** เน้น Security Principles ที่เราเรียน ได้แก่ CIA, AAA, Non-repudiation, Privacy, Risk Management, Security Controls, Governance, Ethics, Zero Trust และ Defense in Depth  
> **ข้อควรทราบ:** ชื่อ Domain และการจัดหมวดในสื่อการเรียนอาจไม่ตรงกับ Exam Outline ISC2 CC ฉบับมีผล 1 กันยายน 2026 ทุกหัวข้อ ควรเทียบ outline ทางการอีกครั้งก่อนใช้เป็น checklist ความครอบคลุมของข้อสอบ

---

## 1. ภาพรวม Security Principles

**Information Security** คือการปกป้องข้อมูลและระบบจากการเข้าถึง การเปิดเผย การแก้ไข การทำลาย หรือการหยุดชะงักโดยไม่ได้รับอนุญาต โดยต้องรักษาสมดุลระหว่างความปลอดภัยกับความต้องการของธุรกิจ

คำศัพท์พื้นฐาน:

| คำ | ความหมาย | ตัวอย่าง |
|---|---|---|
| **Asset** | สิ่งที่มีคุณค่าต่อองค์กร | ฐานข้อมูลลูกค้า ระบบชำระเงิน บุคลากร |
| **Threat** | สิ่งหรือเหตุการณ์ที่อาจก่อความเสียหาย | ผู้โจมตี ไฟไหม้ น้ำท่วม |
| **Threat Actor** | ผู้ก่อหรือพยายามก่อภัยคุกคาม | อาชญากรไซเบอร์ ผู้ใช้ภายใน |
| **Vulnerability** | จุดอ่อนที่อาจถูกใช้ประโยชน์ | ซอฟต์แวร์ไม่อัปเดต การตั้งค่าผิด |
| **Exploit** | วิธีใช้ประโยชน์จากช่องโหว่ | โค้ดโจมตีช่องโหว่ระบบ |
| **Risk** | ความเสี่ยงต่อการสูญเสียหรือผลกระทบ | ข้อมูลรั่วเพราะบัญชีถูกยึด |
| **Control / Safeguard** | มาตรการจัดการความเสี่ยง | MFA, Firewall, Policy |

**ความสัมพันธ์ที่ควรเข้าใจ:** Asset มีคุณค่า → Threat อาจใช้ Vulnerability → เกิดเหตุการณ์ที่สร้าง Impact → องค์กรใช้ Controls เพื่อลด Risk

> **จำสำหรับสอบ:** Threat ไม่ใช่ Vulnerability และ Vulnerability ไม่ได้แปลว่าเกิดการโจมตีแล้ว

---

## 2. CIA Triad — หัวใจของ Information Security

CIA ย่อจาก **Confidentiality, Integrity, Availability**

### 2.1 Confidentiality — การรักษาความลับ

เป้าหมายคือ **ให้เฉพาะผู้ที่ได้รับอนุญาตเข้าถึงข้อมูลได้** ป้องกันการเปิดเผยข้อมูลแก่บุคคลที่ไม่ควรเห็น

**ตัวอย่างมาตรการ:**
- **Encryption:** เข้ารหัสข้อมูลเพื่อป้องกันการอ่านโดยผู้ไม่มีสิทธิ์
- **Access Control:** กำหนดสิทธิ์เข้าถึงข้อมูล
- **Data Classification:** จัดชั้นความลับของข้อมูล
- **Need to Know:** เข้าถึงเฉพาะข้อมูลที่จำเป็นต่อหน้าที่
- **MFA:** ลดโอกาสบัญชีถูกยึดจากรหัสผ่านเพียงอย่างเดียว

**สถานการณ์:** พนักงานส่งข้อมูลเงินเดือนให้บุคคลภายนอกโดยไม่ได้รับอนุญาต → กระทบ **Confidentiality** แม้ข้อมูลจะไม่ถูกแก้ไข

### 2.2 Integrity — ความถูกต้องและครบถ้วนของข้อมูล

เป้าหมายคือ **ป้องกันการแก้ไขข้อมูลโดยไม่ได้รับอนุญาต และตรวจพบการเปลี่ยนแปลงที่ไม่พึงประสงค์**

**ตัวอย่างมาตรการ:**
- **Hashing:** ใช้ตรวจสอบความเปลี่ยนแปลงของข้อมูลเมื่อเปรียบเทียบค่าแฮชที่เชื่อถือได้
- **Digital Signature:** ช่วยยืนยันผู้ลงนามและตรวจสอบการเปลี่ยนแปลงของข้อมูลที่ลงนาม
- **Access Permissions:** จำกัดผู้แก้ไขข้อมูล
- **Change Management:** ควบคุมและติดตามการเปลี่ยนแปลงระบบ
- **Audit Logs:** มีบันทึกช่วยสืบค้นการแก้ไข

**สถานการณ์:** ผู้โจมตีเปลี่ยนเลขบัญชีในใบแจ้งหนี้ → กระทบ **Integrity**

> **จุดสับสน:** Hashing ไม่ใช่ Encryption — Hash โดยทั่วไปเป็นการคำนวณค่าเพื่อใช้ตรวจสอบ/เปรียบเทียบ ไม่ใช่วิธีถอดกลับเพื่ออ่านข้อความต้นฉบับ

### 2.3 Availability — ความพร้อมใช้งาน

เป้าหมายคือ **ให้ผู้มีสิทธิ์ใช้ข้อมูลหรือบริการได้เมื่อจำเป็น**

**ตัวอย่างมาตรการ:**
- **Redundancy:** มีระบบหรืออุปกรณ์สำรอง
- **Failover:** สลับไปใช้ระบบสำรองเมื่อระบบหลักล้มเหลว
- **Backups:** ช่วยกู้ข้อมูลหลังเหตุขัดข้อง
- **Disaster Recovery:** วางแผนกู้คืนระบบ
- **Capacity Planning / Monitoring:** ป้องกันหรือรับมือระบบทรัพยากรไม่พอ

**สถานการณ์:** เว็บไซต์ธนาคารใช้งานไม่ได้เพราะ DDoS → กระทบ **Availability**

### 2.4 เปรียบเทียบ CIA จากสถานการณ์

| สถานการณ์ | หลักการที่เด่นที่สุด | เหตุผล |
|---|---|---|
| ข้อมูลลูกค้าถูกอ่านโดยผู้ไม่มีสิทธิ์ | Confidentiality | เปิดเผยข้อมูล |
| ยอดเงินในฐานข้อมูลถูกเปลี่ยน | Integrity | ข้อมูลไม่ถูกต้อง |
| ระบบจองตั๋วล่ม | Availability | ผู้ใช้เข้าใช้บริการไม่ได้ |
| Ransomware เข้ารหัสไฟล์จนใช้ไม่ได้ | Availability (และอาจกระทบ Integrity/Confidentiality) | พิจารณาจากผลกระทบที่โจทย์เน้น |

**เทคนิคทำข้อสอบ:** มองหาคำกริยาในโจทย์: *disclosed/read* → C, *altered/tampered* → I, *unavailable/disrupted* → A

---

## 3. AAA และแนวคิดเกี่ยวข้อง

**AAA** ประกอบด้วย Authentication, Authorization และ Accounting โดยมี **Identification** เป็นขั้นตอนสำคัญก่อน Authentication

### 3.1 Identification — การระบุตัวตน

ผู้ใช้ **อ้างว่าตนเป็นใคร** เช่น กรอก Username หรือแสดง Employee ID ยังไม่ใช่การพิสูจน์ว่าคนนั้นเป็นเจ้าของตัวตนจริง

### 3.2 Authentication — การพิสูจน์ตัวตน

ระบบ **ตรวจสอบว่าคำกล่าวอ้างนั้นถูกต้องหรือไม่** เช่น ตรวจ Password, Security Key หรือ Biometric

**Authentication Factors ที่ควรจำ:**
1. **Something You Know:** Password, PIN
2. **Something You Have:** Hardware Security Key, Token
3. **Something You Are:** Fingerprint, Face Recognition

**MFA** ต้องมีอย่างน้อยสองปัจจัย **ต่างประเภท** กัน เช่น Password + Security Key; Password + PIN ยังอยู่ในประเภท Something You Know ทั้งคู่

### 3.3 Authorization — การกำหนดสิทธิ์

หลังพิสูจน์ตัวตน ระบบตัดสินว่า **ผู้ใช้ทำอะไรกับทรัพยากรใดได้บ้าง** เช่น Read, Write, Delete

ตัวอย่าง: เข้าระบบได้แต่เปิดไฟล์ HR ไม่ได้ → Authentication สำเร็จ แต่ Authorization ไม่อนุญาต

### 3.4 Accounting / Auditing — การบันทึกและตรวจสอบ

บันทึกว่า **ใครทำอะไร เมื่อไร และกับระบบใด** เพื่อการติดตาม สืบสวน และตรวจสอบความรับผิดชอบ เช่น Access Logs, Audit Trails

| คำถามในโจทย์ | แนวคิด |
|---|---|
| “Who are you?” | Identification |
| “Prove you are that person.” | Authentication |
| “What are you allowed to do?” | Authorization |
| “What did you do?” | Accounting |

---

## 4. Non-repudiation, Privacy และ Accountability

### 4.1 Non-repudiation — การไม่อาจปฏิเสธการกระทำ

หมายถึงการมีหลักฐานที่ช่วยให้ผู้กระทำ **ไม่สามารถปฏิเสธการกระทำที่ตรวจพิสูจน์ได้อย่างน่าเชื่อถือ** เช่น การใช้ Digital Signature พร้อมการจัดการกุญแจและหลักฐานที่เหมาะสม

**แยกจาก Authentication:** Authentication ยืนยันตัวตน ณ จุดหนึ่ง ส่วน Non-repudiation มุ่งให้มีหลักฐานยืนยันการกระทำภายหลัง

### 4.2 Privacy — ความเป็นส่วนตัว

เน้นการจัดการ **Personal Information / Personal Data** อย่างเหมาะสม ตั้งแต่การเก็บ ใช้ เปิดเผย เก็บรักษา ไปจนถึงการลบข้อมูล

**ตัวอย่าง:** บริษัทควรเก็บข้อมูลลูกค้าเท่าที่จำเป็นต่อวัตถุประสงค์ และจำกัดผู้เข้าถึงข้อมูลนั้น

### 4.3 Accountability — ความรับผิดชอบตรวจสอบย้อนกลับได้

บุคคลหรือระบบต้องสามารถถูกเชื่อมโยงกับการกระทำได้อย่างเหมาะสม โดยอาศัยการระบุตัวตนที่ชัดเจนและบันทึกกิจกรรมที่เชื่อถือได้

> **จำ:** Confidentiality = ใครอ่านได้, Privacy = ข้อมูลส่วนบุคคลถูกจัดการอย่างไร, Non-repudiation = หลักฐานการกระทำ, Accountability = ตรวจสอบว่าใครรับผิดชอบต่อการกระทำ

---

## 5. Risk Management — การบริหารความเสี่ยง

### 5.1 องค์ประกอบของความเสี่ยง

- **Likelihood:** โอกาสที่เหตุการณ์จะเกิด
- **Impact:** ความเสียหายหากเกิดเหตุ
- **Risk Level:** ระดับความเสี่ยงจากการพิจารณา Likelihood และ Impact ร่วมกัน

ในการประเมินแบบง่ายมักใช้แนวคิด **Risk ≈ Likelihood × Impact** แต่ในทางปฏิบัติองค์กรอาจใช้วิธีเชิงคุณภาพหรือเชิงปริมาณต่างกัน

**ตัวอย่าง:** ระบบเก่ามีช่องโหว่ร้ายแรง เปิดรับอินเทอร์เน็ต และเก็บข้อมูลสำคัญ → โอกาสและผลกระทบอาจสูง จึงควรจัดลำดับความสำคัญในการจัดการ

### 5.2 ขั้นตอนบริหารความเสี่ยง

1. **Identify:** ระบุ Assets, Threats, Vulnerabilities และสถานการณ์เสี่ยง
2. **Assess / Analyze:** ประเมิน Likelihood และ Impact
3. **Treat / Respond:** เลือกวิธีจัดการความเสี่ยง
4. **Monitor / Review:** ติดตามผลและทบทวนเมื่อสถานการณ์เปลี่ยน

### 5.3 Risk Treatment 4 วิธี

| วิธี | คำอธิบาย | ตัวอย่าง |
|---|---|---|
| **Avoidance** | หยุด/ไม่ทำกิจกรรมที่ก่อความเสี่ยง | ยกเลิกบริการที่มีความเสี่ยงเกินรับได้ |
| **Mitigation / Reduction** | ใช้มาตรการลดโอกาสหรือผลกระทบ | Patch, MFA, Segmentation |
| **Transfer / Sharing** | โอนหรือแบ่งภาระผลกระทบบางส่วน | Cyber Insurance, ข้อตกลงกับผู้ให้บริการ |
| **Acceptance** | ยอมรับความเสี่ยงภายใต้การตัดสินใจที่เหมาะสม | ผู้มีอำนาจอนุมัติความเสี่ยงระดับต่ำ |

**จุดออกสอบสำคัญ:** การซื้อประกัน **ไม่ได้ทำให้ความเสี่ยงทางเทคนิคหายไป** แต่ช่วยโอน/แบ่งผลกระทบทางการเงินบางส่วน

### 5.4 Inherent Risk และ Residual Risk

- **Inherent Risk:** ความเสี่ยงก่อนนำมาตรการควบคุมมาพิจารณา
- **Residual Risk:** ความเสี่ยงที่ยังเหลือหลังใช้มาตรการควบคุม

**ตัวอย่าง:** ก่อนติดตั้ง MFA ความเสี่ยงจากรหัสผ่านรั่วสูง หลังติดตั้ง MFA ความเสี่ยงลดลงแต่ไม่เป็นศูนย์ → ส่วนที่เหลือคือ Residual Risk

### 5.5 Risk Appetite และ Risk Tolerance

> **ทบทวนเสริมเพื่อแยกศัพท์:** หัวข้อนี้ไม่ได้ยืนยันว่าอยู่ในสไลด์ที่เราเรียนทุกหน้า

- **Risk Appetite:** ระดับ/ประเภทความเสี่ยงที่องค์กรเต็มใจรับเพื่อบรรลุเป้าหมาย
- **Risk Tolerance:** ขอบเขตความเบี่ยงเบนจากระดับความเสี่ยงหรือเป้าหมายที่องค์กรยอมรับได้

---

## 6. Security Controls — มาตรการควบคุมความปลอดภัย

คำว่า **Control** หมายถึงมาตรการที่ใช้ลด จัดการ ตรวจจับ หรือรับมือความเสี่ยง การจัดประเภทควรแยก **ตามลักษณะของมาตรการ** กับ **ตามหน้าที่**

### 6.1 แบ่งตามลักษณะของมาตรการ

| ประเภท | ความหมาย | ตัวอย่าง |
|---|---|---|
| **Administrative / Managerial** | นโยบายและการบริหารจัดการ | Security Policy, Awareness Training, Risk Assessment |
| **Technical / Logical** | ใช้เทคโนโลยีควบคุมระบบ | Firewall, MFA, Encryption, ACL |
| **Physical** | ควบคุมพื้นที่หรืออุปกรณ์ทางกายภาพ | Door Lock, Fence, Security Guard |

### 6.2 แบ่งตามหน้าที่

| หน้าที่ | ความหมาย | ตัวอย่าง |
|---|---|---|
| **Preventive** | ป้องกันก่อนเกิดเหตุ | MFA, Access Control, Door Lock |
| **Detective** | ตรวจจับเหตุการณ์หรือการละเมิด | IDS, CCTV ที่ใช้เฝ้าดู, Log Monitoring |
| **Corrective** | แก้ไขปัญหาหลังเกิดเหตุ | Patch/แก้การตั้งค่าหลังพบปัญหา |
| **Deterrent** | ยับยั้ง/ทำให้ไม่กล้ากระทำ | Warning Sign, Visible Guard |
| **Recovery** | ฟื้นฟูการทำงานหลังเหตุ | Restore from Backup, Recovery Procedure |
| **Compensating** | ใช้ทดแทนมาตรการหลักที่ทำไม่ได้ | เพิ่ม Monitoring และข้อจำกัดอื่นเมื่อใช้ Control มาตรฐานไม่ได้ |

**หนึ่งมาตรการอาจมีมากกว่าหนึ่งหน้าที่ตามบริบท** เช่น Security Guard อาจทำหน้าที่ Preventive, Detective และ Deterrent ขึ้นกับโจทย์

### 6.3 วิธีวิเคราะห์โจทย์เรื่อง Controls

1. โจทย์ถาม **ประเภท** หรือ **หน้าที่**?
2. มาตรการทำงาน **ก่อน ระหว่าง หรือหลัง** เหตุการณ์?
3. สิ่งที่โจทย์เน้นคือ **ป้องกัน ตรวจจับ ยับยั้ง แก้ไข หรือกู้คืน**?

**ตัวอย่าง:** ระบบแจ้งเตือนเมื่อมีการ Login ผิดปกติ → **Detective Control**; ระบบบล็อกการ Login เมื่อไม่ผ่าน MFA → **Preventive Control**

---

## 7. Security Governance และเอกสารนโยบาย

**Security Governance** คือแนวทางกำกับดูแลให้ความปลอดภัยสนับสนุนเป้าหมายองค์กร มีผู้รับผิดชอบ มีการกำหนดความเสี่ยงที่ยอมรับได้ และมีการติดตามผล

### 7.1 Policy, Standard, Procedure, Guideline

| เอกสาร | คำถามที่ตอบ | ตัวอย่าง |
|---|---|---|
| **Policy** | องค์กรกำหนดหลักการ/สิ่งที่ต้องทำอะไร | ผู้ใช้ต้องปกป้องข้อมูลลูกค้า |
| **Standard** | ต้องปฏิบัติตามข้อกำหนดขั้นต่ำใด | บัญชีผู้ดูแลระบบต้องใช้ MFA |
| **Procedure** | ทำอย่างไรทีละขั้นตอน | ขั้นตอนสร้างบัญชีพนักงานใหม่ |
| **Guideline** | มีคำแนะนำหรือแนวปฏิบัติใด | คำแนะนำสร้าง Passphrase |

**จำง่าย:** Policy = What/Why, Standard = Required Specification, Procedure = How, Guideline = Recommended Practice

### 7.2 Governance, Risk, Compliance (GRC)

- **Governance:** การกำกับทิศทางและความรับผิดชอบ
- **Risk Management:** การระบุ ประเมิน และจัดการความเสี่ยง
- **Compliance:** การปฏิบัติตามกฎหมาย ระเบียบ ข้อกำหนด และสัญญาที่เกี่ยวข้อง

**ข้อควรจำ:** Compliance ไม่ได้หมายความว่าปลอดภัยอย่างสมบูรณ์ องค์กรยังต้องประเมินความเสี่ยงจริง

### 7.3 Due Care และ Due Diligence

- **Due Care:** การใช้ความระมัดระวังและมาตรการที่สมเหตุสมผล
- **Due Diligence:** การตรวจสอบ ประเมิน และติดตามอย่างรอบคอบเพื่อให้รู้สถานะและความเสี่ยง

**ตัวอย่างเพื่อแยก:** กำหนดให้มี Security Policy และ Controls ที่เหมาะสม → Due Care; ตรวจประเมินว่ามาตรการถูกใช้จริงและยังมีประสิทธิภาพหรือไม่ → Due Diligence

---

## 8. ISC2 Code of Ethics — จริยธรรมวิชาชีพ

หัวข้อจริยธรรมสำคัญเพราะข้อสอบอาจใช้สถานการณ์ที่มีความขัดแย้งระหว่างผลประโยชน์ส่วนตัว องค์กร และความปลอดภัยของสาธารณะ

**หลักการ 4 ข้อ (สรุปความภาษาไทย):**
1. **Protect society, the common good, necessary public trust and confidence, and the infrastructure.** — ปกป้องสังคม ประโยชน์ส่วนรวม ความเชื่อมั่นของสาธารณะ และโครงสร้างพื้นฐาน
2. **Act honorably, honestly, justly, responsibly, and legally.** — ประพฤติอย่างมีเกียรติ ซื่อสัตย์ ยุติธรรม รับผิดชอบ และถูกกฎหมาย
3. **Provide diligent and competent service to principals.** — ให้บริการแก่ผู้ว่าจ้าง/ผู้มีส่วนได้เสียที่รับผิดชอบอย่างรอบคอบและมีความสามารถ
4. **Advance and protect the profession.** — ส่งเสริมและปกป้องวิชาชีพ

**แนวคิดสำหรับสถานการณ์:** ไม่ปกปิดเหตุร้ายแรงเพื่อประโยชน์ส่วนตัว ไม่ละเมิดสิทธิ์โดยไม่มีอำนาจ และให้ความสำคัญกับความปลอดภัยและผลประโยชน์ส่วนรวม

> หมายเหตุ: ข้อความภาษาอังกฤษข้างต้นเป็นหลักการที่รู้จักทั่วไปของ ISC2 Code of Ethics; ควรตรวจข้อความล่าสุดจาก ISC2 หากต้องการอ้างอิงอย่างเป็นทางการ

---

## 9. Zero Trust และ Defense in Depth

### 9.1 Zero Trust

หลักคิดที่มักสรุปว่า **“Never Trust, Always Verify”** ไม่ให้สิทธิ์หรือความเชื่อถือโดยอัตโนมัติเพียงเพราะผู้ใช้อยู่ภายในเครือข่ายองค์กร

แนวปฏิบัติที่เกี่ยวข้อง:
- ตรวจสอบ Identity และสิทธิ์ตามบริบท
- ใช้ **Least Privilege**
- จำกัดการเข้าถึงตามความจำเป็น
- ติดตามและประเมินสถานะอย่างต่อเนื่องตามความเหมาะสม

**ตัวอย่าง:** พนักงานเชื่อมต่อ Wi-Fi บริษัทแล้ว ยังต้องผ่าน Authentication และ Authorization ก่อนเข้าถึงข้อมูลสำคัญ

### 9.2 Defense in Depth

การใช้ **มาตรการหลายชั้น** เพื่อไม่ให้การล้มเหลวของ Control เดียวเปิดทางให้ผู้โจมตีเข้าถึงทุกอย่าง

ตัวอย่างชั้นป้องกัน: Security Awareness → MFA → Firewall → Endpoint Protection → Access Control → Monitoring → Backup/Recovery

**แยกกันให้ได้:**
- **Zero Trust** เน้นการไม่ให้ความเชื่อถือโดยปริยายและตรวจสอบการเข้าถึง
- **Defense in Depth** เน้นหลายชั้นของมาตรการป้องกันและตอบสนอง

---

## 10. Concept Distinctions — คู่คำที่มักสับสน

| คู่คำ | ความต่างที่ต้องจำ |
|---|---|
| **Threat vs Vulnerability** | สิ่งที่อาจก่ออันตราย vs จุดอ่อนที่ถูกใช้ได้ |
| **Risk vs Impact** | ความเสี่ยงของเหตุการณ์ vs ผลเสียเมื่อเกิดเหตุ |
| **Authentication vs Authorization** | พิสูจน์ว่าเป็นใคร vs อนุญาตให้ทำอะไร |
| **Confidentiality vs Privacy** | ป้องกันการเปิดเผยโดยไม่ได้รับอนุญาต vs การจัดการข้อมูลส่วนบุคคลอย่างเหมาะสม |
| **Integrity vs Availability** | ข้อมูลถูกต้องครบถ้วน vs ระบบพร้อมใช้งาน |
| **Hashing vs Encryption** | ตรวจสอบ/แทนค่าข้อมูล vs เข้ารหัสเพื่อรักษาความลับและถอดรหัสได้เมื่อมีกุญแจที่เหมาะสม |
| **Preventive vs Detective** | ป้องกันเหตุ vs ตรวจพบเหตุ |
| **Corrective vs Recovery** | แก้ไขปัญหา vs ฟื้นฟูบริการหรือระบบ |
| **Risk Transfer vs Risk Mitigation** | แบ่ง/โอนภาระผลกระทบบางส่วน vs ลดโอกาสหรือผลกระทบด้วยมาตรการ |
| **Policy vs Procedure** | กำหนดหลักการ vs ระบุขั้นตอนปฏิบัติ |
| **Due Care vs Due Diligence** | ระมัดระวังและลงมือใช้มาตรการ vs ตรวจสอบประเมินอย่างรอบคอบ |
| **Zero Trust vs Defense in Depth** | ตรวจสอบทุกการเข้าถึงตามบริบท vs ป้องกันหลายชั้น |

---

## 11. ตัวอย่างโจทย์สถานการณ์สำหรับทบทวน (แต่งขึ้นใหม่ ไม่ใช่ข้อสอบจริง)

> ตัวอย่างเหล่านี้เป็น **แบบฝึกทบทวนเสริม** จากแนวคิดที่เรียน ไม่ใช่ข้อความจากสไลด์หรือคลังข้อสอบ 24 ข้อ

**ข้อ 1:** ผู้โจมตีเปลี่ยนจำนวนเงินในระบบบัญชีโดยไม่ได้รับอนุญาต กระทบหลักการใดมากที่สุด?  
**ตอบ:** Integrity — เพราะข้อมูลถูกแก้ไขจนไม่ถูกต้อง

**ข้อ 2:** พนักงานผ่าน Password แล้ว แต่เปิดรายงานเงินเดือนไม่ได้ ปัญหานี้เกี่ยวข้องกับขั้นตอนใด?  
**ตอบ:** Authorization — การยืนยันตัวตนสำเร็จแล้ว แต่ไม่มีสิทธิ์เข้าถึง

**ข้อ 3:** องค์กรซื้อ Cyber Insurance เพื่อรับมือค่าใช้จ่ายจากเหตุข้อมูลรั่วไหล เป็นวิธีจัดการ Risk แบบใด?  
**ตอบ:** Risk Transfer / Sharing — แบ่งภาระผลกระทบทางการเงิน ไม่ใช่ลบความเสี่ยงทางเทคนิค

**ข้อ 4:** ระบบส่ง Alert เมื่อมีความพยายามเข้าระบบผิดปกติ เป็น Control หน้าที่ใด?  
**ตอบ:** Detective — ตรวจพบและแจ้งเตือน

**ข้อ 5:** ผู้บริหารอนุมัติยอมรับความเสี่ยงที่เหลือหลังติดตั้ง MFA ความเสี่ยงที่เหลือเรียกว่าอะไร?  
**ตอบ:** Residual Risk

**ข้อ 6:** เจ้าหน้าที่รักษาความปลอดภัยมองเห็นคนพยายามปีนรั้ว และเข้าห้ามทันที เป็น Control แบบใด?  
**ตอบ:** ขึ้นกับหน้าที่ที่โจทย์ถาม อาจเป็น Detective/Preventive/Deterrent — อ่านคำที่โจทย์เน้นให้ชัด

**ข้อ 7:** บริษัทกำหนดว่าบัญชี Admin ทุกบัญชีต้องใช้ MFA ข้อกำหนดเฉพาะนี้มักจัดเป็นเอกสารใด?  
**ตอบ:** Standard — ข้อกำหนดที่ต้องปฏิบัติตาม

**ข้อ 8:** องค์กรไม่ให้สิทธิ์เข้าระบบสำคัญอัตโนมัติเพียงเพราะผู้ใช้อยู่ในเครือข่ายภายใน สอดคล้องแนวคิดใด?  
**ตอบ:** Zero Trust

---

## 12. Cheat Sheet ก่อนสอบ

| Keyword ในโจทย์ | นึกถึง |
|---|---|
| Unauthorized disclosure | Confidentiality |
| Unauthorized modification / Tampering | Integrity |
| Downtime / Unavailable | Availability |
| Prove identity | Authentication |
| Permission / Allowed action | Authorization |
| Logs / Trace activity | Accounting / Auditing |
| Evidence of action / Cannot deny | Non-repudiation |
| Threat exploits weakness | Vulnerability / Risk |
| Stop risky activity | Risk Avoidance |
| Patch / MFA to reduce risk | Risk Mitigation |
| Insurance | Risk Transfer |
| Formally tolerate risk | Risk Acceptance |
| Remaining risk after controls | Residual Risk |
| Detect suspicious activity | Detective Control |
| Block unauthorized access | Preventive Control |
| Mandatory minimum specification | Standard |
| Step-by-step instructions | Procedure |
| Verify access regardless of network location | Zero Trust |
| Multiple protective layers | Defense in Depth |

---

## 13. เช็กลิสต์ความเข้าใจของตัวเอง

- [ ] อธิบาย CIA ทั้งสามข้อด้วยสถานการณ์จริงได้
- [ ] แยก Identification, Authentication, Authorization และ Accounting ได้
- [ ] อธิบาย MFA และแยกปัจจัยต่างประเภทได้
- [ ] แยก Threat, Vulnerability, Risk, Impact และ Control ได้
- [ ] เลือก Risk Treatment 4 วิธีจากสถานการณ์ได้
- [ ] อธิบาย Inherent Risk และ Residual Risk ได้
- [ ] แยก Security Controls ตามประเภทและหน้าที่ได้
- [ ] แยก Policy, Standard, Procedure, Guideline ได้
- [ ] อธิบาย Due Care และ Due Diligence ได้
- [ ] เข้าใจ Non-repudiation, Privacy และ Accountability
- [ ] อธิบายหลักจริยธรรม ISC2 ได้
- [ ] แยก Zero Trust และ Defense in Depth ได้

---

## 14. ขอบเขตและความน่าเชื่อถือของเอกสาร

**เนื้อหาที่มีหลักฐานจากประวัติการเรียน:** CIA Triad, AAA, Non-repudiation, Privacy, Threat/Vulnerability/Risk, Risk Management และ 4 Responses, Residual Risk, Security Controls, Governance/Policy Hierarchy, Due Care/Due Diligence, Ethics, Zero Trust, Defense in Depth

**ส่วนที่เพิ่มเพื่อช่วยทำความเข้าใจ (ไม่ยืนยันว่าสไลด์สอนโดยตรง):** Risk Appetite/Tolerance, คำอธิบายประกอบเชิงลึกบางส่วน, ตัวอย่างสถานการณ์ที่แต่งขึ้นใหม่ และ Cheat Sheet

**ยังไม่ได้ตรวจเทียบ:** สไลด์ Domain 1 ทุกหน้า, Transcript ต้นฉบับ, รายการหัวข้อทางการของ Exam Outline 2026 และความครอบคลุมของคลังข้อสอบ 24 ข้อ

**คำแนะนำ:** ใช้ไฟล์นี้เพื่อทบทวนความรู้ที่เรียนแล้วก่อน หากต้องการฉบับตรงสไลด์แบบ 100% ให้นำสไลด์/Transcript Domain 1 มาเทียบทีละหัวข้อ แล้วระบุ Source Reference ของแต่ละส่วน
