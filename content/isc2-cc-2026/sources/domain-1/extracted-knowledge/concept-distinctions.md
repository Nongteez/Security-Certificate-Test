---
id: d1-phase2-concept-distinctions
domain_id: 1
review_status: draft
translation_review_status: needs-human-review
prepared_date: 2026-10-18
source_reference: ISC2-CC-2026-SOURCE-20261018-01
---

# Domain 1 — Concept Distinctions

เอกสารนี้เป็น **editorial comparison** ของ concepts ที่อ้างได้จากวัสดุ ไม่ใช่คำอธิบายข้อสอบจริงหรือรายการ distractors นิยามหลักและ canonical IDs อยู่ใน [knowledge map](knowledge-map.md); `Knnn` ย่อมาจาก `KNOW-D1-nnn` ไม่มีการสร้าง concept ชุดซ้ำเพื่อแต่ละ comparison

`[Snn]` ลิงก์ภาพจริง; `[T] T@...` ระบุเวลาเริ่ม block ใน transcript คำแปลไทยและข้อควรระวังเป็นงานสังเคราะห์ของผู้จัดทำที่ยังรอ human review คอลัมน์ “ความผิดพลาดที่ควรหลีกเลี่ยง” เป็น **ความเสี่ยงในการอ่านที่คาดได้จากข้อความ** ไม่ใช่ผลสถิติว่าผู้สอบ ISC2 มักผิดจริง หัวข้อที่ติด SQ ยังไม่ถูกแก้หรือรับรองด้วยข้อมูลภายนอก

## 1. Security properties, identity and privacy

| Similar / overlapping concepts | จุดต่างที่ source รองรับ | Contextual example จากวัสดุ | ความผิดพลาดที่ควรหลีกเลี่ยง / canonical references |
| --- | --- | --- | --- |
| Confidentiality vs Integrity vs Availability | Source แยก authorized access, correct/unaltered data และ accessible when needed | Encrypted email/file; bank transfer amount ไม่เปลี่ยน; web servers/load balancer หรือ UPS | อย่าจัดตามคำว่า “security” หรือ “access” เพียงคำเดียว; S05 ใช้ altering ใต้ Confidentiality ทับ Integrity จึงต้อง flag SQ-13 แทนซ่อนความทับซ้อน K001/002/004/006; [S04]–[S11] |
| Security property vs security mechanism | CIA เป็นคุณสมบัติที่ต้องปกป้อง ส่วน encryption/checksum/backup เป็นตัวอย่างวิธีที่ source เชื่อม | Encryption อยู่ใน Confidentiality examples; digital signatures อยู่ Integrity examples; backup อยู่ Availability examples | ไม่ถือว่า mechanism มี property เดียวตลอดทุก implementation และไม่ใช้ encryption เป็น go-to answer อัตโนมัติ K003/005/007; [S06], [S07], [S10]; [T] T@00:08:08 |
| Encryption vs Data Masking vs Integrity verification | Source ให้ encryption เพื่อ authorized recipients อ่านได้, masking ซ่อนบางส่วน, checksum/signature เพื่อ verify alteration | Last four credit-card digits vs encrypted files vs checksum of download | ไม่เรียก masking ว่า encryption หรือตีความ hash match เป็นทุกมิติของ protection; source ไม่สอน algorithm properties ครบ (SQ-15) K003/005; [S06], [S08], [S09] |
| Authentication vs Authorization vs Accounting | ตรวจ identity vs ให้ permission vs track/record activity; source ใช้ usually กับลำดับ authorization หลัง authentication | Login email; อ่าน/ส่ง/ลบตามสิทธิ; logs ของ login/actions | “เข้าระบบได้” ไม่ได้บอกหน้าที่ทั้งหมด และ log ไม่ได้หมายถึง granting permission; ไม่เปลี่ยน usually เป็น always K008–011; [S12]; [T] T@00:18:49, T@00:19:38, T@00:20:58 |
| Accounting vs Governance accountability | Accounting ใน source เป็น activity recording ส่วน Governance “held accountable” เป็น direction/oversight context | Command/login logs เทียบ governance supports business/legal/policy objectives | เป็น contextual distinction ที่ผู้จัดทำสังเคราะห์จากสองส่วน ไม่ได้อ้างว่า lecture นิยาม accountability แยกครบ K011/027; [S12], [S33] |
| Two credentials vs independent-factor MFA | [T] แยก password+PIN ว่ายังอยู่ Knowledge category เดียวกัน และยก password+fingerprint เป็นต่าง category | Password/PIN กับ fingerprint example ที่ผู้สอนให้ | ไม่ใช้จำนวน fields หรือจำนวนขั้นตอนเป็นจำนวน factors; ไม่รับรอง Location เป็น independent factor ตามมาตรฐานใดเพียงจากภาพ (SQ-06) K012; [S13], [S14]; [T] T@00:25:37, T@00:26:16 |
| Knowledge vs Possession vs Inherence vs Location labels | Something You Know/Have/Are/Somewhere You Are ใช้คนละ contextual basis ตาม source | Password/PIN; smartphone/token; fingerprint/iris; IP/GPS/Wi-Fi | ไม่สรุปว่า possession compromise ต้อง physical theft เท่านั้น หรือ biometrics เป็นไปไม่ได้ที่จะ forge; คง Location label แต่รอ taxonomy review K012; [S13], [S14] |
| Privacy vs Confidentiality | Privacy ส่วนนี้รวม collection/storage/use, laws/policies และ individual rights ขณะที่ Confidentiality เน้น authorized access | Data Subject/Controller/Processor, inventory/retention เทียบ confidential files | อย่าแปล Privacy เป็นเพียงการซ่อนข้อมูล หรืออ้างว่ามี encryption แล้วตรงตาม privacy law ทั้งหมด การเปรียบเป็น synthesis จาก source definitions K002/013; [S05], [S15], [S16] |
| Data Subject vs Controller vs Processor vs Ownership | คนที่ข้อมูลเกี่ยวข้อง vs ผู้กำหนด purpose/means vs ผู้ process on behalf; Ownership พูด authority/responsibility พร้อม respect rights | Customer, retail company และ cloud service hosting retailer data | ชื่อบริษัท/คำว่า cloud ไม่ทำให้ role ตายตัว; ไม่ถือว่า owner ยกเลิกสิทธิของ data subject ได้ K014/015; [S17], [S18]; [T] T@00:29:06 |
| Data Inventory vs Retention vs deletion request | รายการ location/type vs เวลาที่เก็บ/ลบ vs การขอ removal ในตัวอย่าง Right to Be Forgotten | Records/email logs/billing list; seven-year tax example; former-user removal request | ไม่ใช้ seven years เป็นกฎทั้งหมด และไม่แก้เงื่อนไขกำกวมใน S19 ให้เป็นสิทธิลบไม่จำกัด; SQ-11 K015/016; [S18], [S19] |
| NDA vs Non-repudiation coverage gap | NDA ถูกสอนเป็น agreement ไม่เปิดเผย; ไม่พบ explicit Non-repudiation lesson | Employee/employer NDA ใน transcript | ไม่สับสนเพราะขึ้นต้น Non- เหมือนกัน; ไม่เติมนิยามของหัวข้อที่ขาดจากความจำ K003 และ gap; [S06]; [T] T@00:11:10 |

## 2. Risk concepts and numerical interpretation

| Similar / overlapping concepts | จุดต่างที่ source รองรับ | Contextual example จากวัสดุ | ความผิดพลาดที่ควรหลีกเลี่ยง / canonical references |
| --- | --- | --- | --- |
| Asset vs Threat vs Vulnerability vs Potential Impact | สิ่งที่ป้องกัน vs สิ่งอาจก่ออันตราย vs weakness vs ผลที่อาจเกิด | Customer Database / Ransomware / Unpatched Server / Data Breach | ไม่จัด database เป็น threat หรือ unpatched condition เป็นผลกระทบ ใช้ Unpatched จาก slide และระบุ transcript “unpaged” ไว้ (SQ-03) K018; [S21], [S22]; [T] T@00:34:18 |
| Identification vs Assessment vs Response | ค้นหา/บันทึก risks vs ประเมิน likelihood/impact vs เลือกวิธี respond | Source lifecycle แล้วแยก Identify, Assess/Analyze, Treat/Respond | อย่าข้ามจากพบ asset ไปถือว่าเลือก treatment แล้ว หรือถือว่าทั้ง lifecycle จบหลังลง controls K017–019/024/025; [S20], [S21], [S29]; [T] T@00:35:02 |
| Qualitative vs Quantitative | Descriptive categories/expert judgment vs numerical values/loss metrics | Low/Medium/High และ brainstorming เทียบ SLE/ALE/ARO | ไม่สร้าง scoring matrix เพิ่ม และไม่ยืนยันตัวเลข estimate ว่าแน่นอน; comparison นี้มี transcript แต่ไม่มี dedicated readable comparison slide K019; [T] T@00:35:02, T@00:35:44; [S23], [S24] |
| EF vs ARO | EF เป็นสัดส่วน asset value ที่สูญเสีย; ARO เป็น estimated occurrences per year | Flood damage 70% เทียบ once every five years = 0.2 บน S23 | ไม่เอา EF ไปแทน frequency หรือ ARO ไปเป็น percentage damage; transcript ให้ 2 ขัดกับภาพ จึง hold ตัวอย่างคำนวณจน review (SQ-04) K020/022; [S23]; [T] T@00:38:53 |
| AV vs SLE vs ALE | AV เป็นค่าตั้งต้นของ asset; SLE เป็นเงินสูญเสียต่อเหตุ; ALE เป็น annual projected loss | S23: $10,000 × 50% = $5,000; S24: $5,000 × ARO 2 = $10,000 | ไม่เรียก annual loss ว่า rate หรือ single-event amount; แยก input ของแต่ละ source example ไม่สร้าง example ใหม่ K020–023; [S23], [S24] |
| ARO=0.2 example vs ARO=2 example | S23 มี once every five years; S24 มี explicit ARO 2 โดยไม่ได้ระบุว่าเป็นตัวอย่างเดียวกัน | Transcript ระหว่าง T@00:38:53 กับ T@00:39:45 ทำให้ดูเหมือนต่อกัน | ห้ามผสานสอง example แล้วคง ALE $10,000 ราวกับ input ไม่เปลี่ยน ห้ามแก้ transcript เงียบ ๆ; SQ-04 K022/023; [S23], [S24]; [T] T@00:38:53, T@00:39:45 |
| Transfer vs Accept vs Avoid vs Mitigate | Shift ไป third party vs acknowledge/no additional action vs discontinue activity vs reduce likelihood/impact with controls | Cyber insurance; tolerable/cost example; ไม่ใช้ vendor/ไม่ซื้อ application; firewall/anti-malware | ไม่ถือว่า Transfer ทำให้ accountability หาย; Accept ไม่ใช่ไม่รู้ risk; changing vendor ไม่เป็น Avoid ทุกครั้ง; Mitigate ไม่ใช่ eliminate เสมอ (SQ-07/08) K024; [S25]–[S28] |
| Accept vs ignore/stop reviewing | Accept ใน source เป็นการ acknowledge; Monitor/Review ยังต้อง review previously accepted risks | S26 no additional action และ S29 review accepted risks | “ไม่เพิ่ม treatment” ไม่ได้แปลว่าไม่ต้อง monitor; เป็น relationship synthesis จากสองส่วน ไม่ใช่เพิ่ม response option ใหม่ K024/025; [S26], [S29] |
| Monitoring/Review vs Communication/Reporting | ติดตาม risks/control effectiveness และ reassess vs ส่งข้อมูล status/mitigation/impacts ให้ stakeholders | New technology/software/threat trigger เทียบ risk reporting เพื่อ decisions/resources | ไม่ถือว่ามีรายงานแล้วแปลว่า controls effective; source สอนคนละหน้าที่ S30/S32 ซ้ำจึงใช้ canonical concept เดียว K025/026; [S29], [S30], [S32] |

## 3. Governance language and organizational artifacts

| Similar / overlapping concepts | จุดต่างที่ source รองรับ | Contextual example จากวัสดุ | ความผิดพลาดที่ควรหลีกเลี่ยง / canonical references |
| --- | --- | --- | --- |
| Governance vs controls/day-to-day operations | Direction/oversight, business/legal/policy alignment vs mechanisms/activities ที่ป้องกัน assets | Governance page เทียบ Operational controls executed by people | ไม่ยุบ “held accountable” เป็น activity logs หรือเรียก governance ว่าการตั้ง firewall อย่างเดียว; synthesis จาก definitions K027/036; [S33], [S50] |
| Law/Regulation vs Standard vs Guideline | Government/regulatory enforceable requirements vs specific mandatory implementation requirements vs generally advisory practices | Source ยก GDPR/HIPAA/PCI DSS ในหน้ารวม และ standard/guideline แยก definitions | ไม่สรุปว่า mandatory = law หรือทุกสิ่งใต้ heading Laws คือ law; applicability/taxonomy ยัง SQ-11/12 K028/030/032; [S34], [S37], [S39], [S41] |
| Policy vs Standard vs Procedure | High-level management direction vs required specifications vs detailed HOW/steps | Password Policy: strong password; Standard: length/complexity/MFA; Procedure: portal/account/reset/verify/document | ไม่เติม minimum password length ที่ไม่มีใน source และไม่ใช้ “optional Procedure” เป็นข้อสรุปที่ approved (SQ-05) K031–033; [S40]–[S43], [S47]; [T] T@00:56:16 |
| Framework vs Guideline vs Procedure | Structured approach/program vs recommended practices vs steps ของ task | Build security program/identify gaps; password/configuration guidance; password-reset steps | ไม่ใช้ทุกคำที่เป็น “guidance” รวมเป็น Guideline เพราะต้องดูระดับและหน้าที่; comparison เป็น editorial synthesis K029/030/033; [S38], [S39], [S43] |
| ISO vs ISO/IEC 27001 vs ISMS | Organization ที่พัฒนา standards vs standard ที่ source ระบุ vs management system ที่ standard เกี่ยวข้อง | Establish/implement/maintain/improve ISMS ผ่าน risk/controls/policy/processes | ไม่ใช้ “ISO” เป็นชื่อ product หรือเท่ากับ standard ทุกฉบับ; source ไม่ให้ edition/certification mechanics K034; [S44] |
| CIS vs CIS Controls vs framework examples | Organization vs prioritized safeguards resource vs ตัวอย่างใน framework slide | CIS พัฒนา best practices; CIS Controls ใช้ prioritize activities | ไม่เหมาว่ารายชื่อใน S38 มีประเภทเหมือนกันทั้งหมด; ไม่เติม catalog count/version ที่ไม่มีใน source (SQ-12) K029/035; [S38], [S45] |

## 4. Control categories, functions and overlap

### สองมุมของ classification

การใช้คำว่า “รูปแบบ/วิธีดำเนินการ” เพื่ออ่าน **Category** และ “หน้าที่ต่อเหตุการณ์” เพื่ออ่าน **Type** เป็น editorial aid ที่สังเคราะห์จาก [S50]/[S53] ไม่ใช่ claim ว่า ISC2 กำหนด wording สองมุมนี้อย่างเป็นทางการ

| Comparison | ความต่างและ contextual example จาก source | สิ่งที่ต้องไม่สรุปจาก keyword เดียว |
| --- | --- | --- |
| Category vs Type | Camera อยู่ใน Physical examples [S51] และมี Deterrent/Detective functions [S55] | Physical กับ Detective ไม่ใช่ choices ที่ตัดกันโดยนิยาม และ control อาจมีมากกว่าหนึ่ง function K036/037/039 |
| Managerial vs Operational | Source เน้น policy/planning/assessment vs day-to-day execution; S51 มี Security Training ใน Managerial และ Awareness Training ใน Operational | ไม่บังคับว่ามีคำ training แล้วต้องอยู่ category เดียว ทั้งสองรายการสะท้อน source ไม่ใช่ข้อผิดพลาดที่ผู้จัดทำย้ายเอง K036; [S50], [S51] |
| Deterrent vs Preventive | Discourage vs prevent/stop ตาม S53; source ยก guards/cameras/visibility และ fences/firewalls ใน examples | Visibility ของ camera ไม่ได้แปลว่ากล้อง stop entry ทางกายภาพ; ชื่ออุปกรณ์ไม่ยืนยัน function ในทุกสถานการณ์ K037; [S53], [S54], [S56] |
| Detective vs Corrective | Discover/detect vs fix vulnerabilities/mitigate damage after incident ตาม source | การพบเหตุไม่เหมือนการกู้คืน; forensic analysis ใต้ Corrective ใน S54 ยังต้องดู context/SQ-10 ไม่ย้ายเงียบ ๆ K037; [S53], [S54] |
| Compensating vs Corrective | Source นิยาม Compensating ค่อนข้างกว้างเป็น options to other controls; Corrective เน้นแก้/ลดความเสียหายหลัง incident | S56 มี **Backup** ในทั้งสองแถวจึงใช้คำเดียวแยกไม่ได้; ต้องทราบบทบาท alternative หรือ recovery ที่ระบุจริง และ review definition เพิ่ม K037/039; [S53], [S56] |
| Directive vs Deterrent | Source ให้ Directive guide behavior/compliance; Deterrent discourage | Physical signage อยู่ Directive list S54 แต่ Sign อยู่ Deterrent clue S56 จึงต้องอ่านผลที่มาตรการตั้งใจให้เกิด K037/039; [S53], [S54], [S56] |
| Camera Deterrent vs Camera Detective | Source บอก deter unwanted entry เทียบ record potential incident for later review | ตัวอย่างกล้องรองรับ **ทั้งสอง** พร้อมกัน ไม่ต้องเลือกให้เหลือ type เดียวเสมอ K039; [S55]; [T] T@01:03:49 |
| ACL Preventive vs ACL Detective | Source แยก block unauthorized access กับ mainly log access for investigation | ต้องดู implementation; คำว่า ACL ไม่เพียงพอจะสรุปว่าทุก ACL log หรือ block ในรูปแบบเดียวกัน (SQ-10) K039; [S55]; [T] T@01:04:26 |
| Defense in Depth vs exclusive classification | Source แสดงหลาย layers รอบ Assets และบอก controls ทำงานร่วม/overlap | Diagram ไม่ใช่ลำดับติดตั้งที่ต้องทำตามทุกองค์กร และหลาย layer ไม่ทำให้หนึ่ง control มี function เดียว K038/039; [S52], [S55] |

**ตัวอย่างที่ต้อง human review เป็นพิเศษ:** S54 ใส่ penetration testing ใต้ Preventive, forensic analysis ใต้ Corrective และ monitoring ใต้ Compensating; S56 ใช้ monitoring เป็น Detective clue ไม่เปลี่ยนป้ายของ source เพื่อให้เข้าความจำ และไม่ใช้รายการนั้นเป็น one-to-one answer key จนกว่าจะมี context/หลักฐานตรวจสอบเพิ่ม (SQ-10)

## 5. Professional and ethical language

| Comparison | Source-supported distinction / example | ความผิดพลาดในการตีความที่ควรหลีกเลี่ยง |
| --- | --- | --- |
| Due Care vs Due Diligence | Reasonable steps เพื่อปกป้อง/reduce risk เช่น controls/patching/training เทียบ investigating/evaluating/maintaining risk awareness เช่น assessments/reviews/monitoring | ไม่ทำ mnemonic “Care=หลัง, Diligence=ก่อน” เพราะ S59 ระบุ **before and during**; การป้องกันกับการประเมินอาจทำต่อเนื่องร่วมกัน K041/042; [S58], [S59] |
| Integrity ของข้อมูล vs Integrity ใน professional conduct | S07 พูด correct/unaltered data ขณะที่ S57 วาง Integrity ในมาตรฐานพฤติกรรมวิชาชีพ | ผู้จัดทำใช้ context เพื่อแยกความหมาย ไม่ใช่เพิ่มนิยาม ethics ที่ source ไม่ให้; ไม่บอกว่า ethics Integrity คือ checksum K004/040; [S07], [S57] |
| Professional Code of Conduct vs ISC2 Code of Ethics example | S57 อธิบาย principles/expectations ทั่วไปของ profession ส่วน S60 นำรายการ canons ที่ course เรียก ISC2 Code of Ethics มาแสดง | แยกชื่อชุดกับการตีความของผู้สอน; ไม่อ้างว่า material เป็น official publication K040/043; [S57], [S60] |
| Canon list/order vs precedence rule | S60 มีรายการสี่ข้อและคำใน canon; T@01:08:41/T@01:09:27 เพิ่มคำอธิบาย precedence เมื่อ honesty/honor ขัดกับ legality | **ไม่รับรอง precedence rule** จาก word order; เก็บเป็น high-priority review SQ-09 และไม่ใช้ให้ผู้เรียนตัดสินละเลยกฎหมาย K043; [S60]; [T] T@01:08:41, T@01:09:27 |
| Principals vs Principles | Slide ใช้ service to **principals** แต่ transcript ให้ “principles” ในประโยคใกล้กัน | ชื่อที่ extract อิง slide โดยเปิดเผย ไม่แก้ original text; คำไทยใน glossary เป็น contextual translation ยังต้อง review K043; [S60]; [T] T@01:08:41 |

## สิ่งที่เอกสารนี้ไม่ตัดสินแทน reviewer

การเห็นสอง source formats ตรงกันไม่ได้เป็น independent verification เพราะอาจมาจาก lecture เดียวกัน ไม่เลือกคำตอบให้กับ hypothetical scenarios ไม่แก้ law/standard scope, MFA factor taxonomy, ARO discrepancy, disputed control examples หรือ ethical precedence จากความจำ ใช้ [quality report](source-quality-report.md) เป็นรายการ holds และใช้ [exam language guide](exam-language-guide.md) แยก explicit tips ออกจาก general editorial recommendations ก่อน Phase 3 ที่ต้องได้รับคำสั่งใหม่

<!-- Source reference definitions: aliases map to original manifest records. -->
[S04]: ../slides/Screenshot%202026-09-19%20213831.png
[S05]: ../slides/Screenshot%202026-09-19%20213951.png
[S06]: ../slides/Screenshot%202026-09-19%20214354.png
[S07]: ../slides/Screenshot%202026-09-19%20215019.png
[S08]: ../slides/Screenshot%202026-09-19%20215812.png
[S09]: ../slides/Screenshot%202026-09-19%20215816.png
[S10]: ../slides/Screenshot%202026-09-19%20220631.png
[S11]: ../slides/Screenshot%202026-09-19%20223016.png
[S12]: ../slides/Screenshot%202026-09-19%20223751.png
[S13]: ../slides/Screenshot%202026-09-19%20224441.png
[S14]: ../slides/Screenshot%202026-09-19%20225627.png
[S15]: ../slides/Screenshot%202026-09-19%20225921.png
[S16]: ../slides/Screenshot%202026-09-19%20225926.png
[S17]: ../slides/Screenshot%202026-09-19%20225943.png
[S18]: ../slides/Screenshot%202026-09-19%20231044.png
[S19]: ../slides/Screenshot%202026-09-19%20231055.png
[S20]: ../slides/Screenshot%202026-09-19%20231752.png
[S21]: ../slides/Screenshot%202026-09-19%20232732.png
[S22]: ../slides/Screenshot%202026-09-19%20232740.png
[S23]: ../slides/Screenshot%202026-09-19%20232805.png
[S24]: ../slides/Screenshot%202026-09-19%20232819.png
[S25]: ../slides/Screenshot%202026-09-19%20232832.png
[S26]: ../slides/Screenshot%202026-09-19%20232901.png
[S28]: ../slides/Screenshot%202026-09-19%20232929.png
[S29]: ../slides/Screenshot%202026-09-19%20232948.png
[S30]: ../slides/Screenshot%202026-09-19%20232959.png
[S32]: ../slides/Screenshot%202026-09-19%20234513.png
[S33]: ../slides/Screenshot%202026-09-19%20234554.png
[S34]: ../slides/Screenshot%202026-09-19%20234647.png
[S37]: ../slides/Screenshot%202026-09-19%20235030.png
[S38]: ../slides/Screenshot%202026-09-19%20235324.png
[S39]: ../slides/Screenshot%202026-09-19%20235339.png
[S40]: ../slides/Screenshot%202026-09-19%20235649.png
[S41]: ../slides/Screenshot%202026-09-19%20235907.png
[S43]: ../slides/Screenshot%202026-09-19%20235943.png
[S44]: ../slides/Screenshot%202026-09-20%20000914.png
[S45]: ../slides/Screenshot%202026-09-20%20001051.png
[S47]: ../slides/Screenshot%202026-09-20%20001417.png
[S50]: ../slides/Screenshot%202026-09-20%20001509.png
[S51]: ../slides/Screenshot%202026-09-20%20001709.png
[S52]: ../slides/Screenshot%202026-09-20%20001717.png
[S53]: ../slides/Screenshot%202026-09-20%20001901.png
[S54]: ../slides/Screenshot%202026-09-20%20001921.png
[S55]: ../slides/Screenshot%202026-09-20%20002108.png
[S56]: ../slides/Screenshot%202026-09-20%20002536.png
[S57]: ../slides/Screenshot%202026-09-20%20002700.png
[S58]: ../slides/Screenshot%202026-09-20%20002816.png
[S59]: ../slides/Screenshot%202026-09-20%20003207.png
[S60]: ../slides/Screenshot%202026-09-20%20003325.png
[T]: ../transcripts/Script%20-%20DOMAIN%201.txt
