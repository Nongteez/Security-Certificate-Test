---
id: d1-phase2-exam-language-guide
domain_id: 1
review_status: draft
translation_review_status: needs-human-review
prepared_date: 2026-10-18
source_reference: ISC2-CC-2026-SOURCE-20261018-01
---

# Domain 1 — Exam Language Guide

เอกสารนี้วิเคราะห์ **ภาษาที่พบใน training materials** ไม่ได้ค้นหา/สร้าง official exam wording และไม่มีคำถามจำลอง ข้อสอบจริง หรือ answer keys `[Snn]` ลิงก์ภาพจริง; `[T] T@...` ระบุ block เริ่มต้นใน transcript ตาม [quality report](source-quality-report.md) คำอธิบายไทยเป็น derived translation ที่รอ review

แยกหลักฐานเป็นสามระดับเพื่อไม่ให้คำแนะนำของผู้จัดทำถูกเข้าใจว่า ISC2 ใช้ wording แบบตายตัว:

1. **Explicit source exam tip:** ผู้บรรยาย/slide พูดว่า exam tip หรือกล่าวถึงการเลือกคำตอบโดยตรง แต่ยังเป็นคำแนะนำของผู้สอน ไม่ใช่หลักฐานเกี่ยวกับข้อสอบจริง
2. **Definition language → conceptual clue:** คำปรากฏในนิยามจริง; การใช้ช่วยอ่านเป็น **editorial synthesis** ของผู้จัดทำ ไม่ได้อ้างว่าผู้สอนหรือ ISC2 เรียกทุกคำว่า exam keyword
3. **General project recommendation:** มาจาก authoring documentation/คำแนะนำการอ่าน ไม่ได้ extract จาก lecture และไม่ใช่ ISC2-specific pattern

## 1. Explicit exam-related language ในวัสดุ

### 1.1 Governance terminology tips

| Exact phrase / wording ที่พบ | Source association | คำอธิบายไทยและข้อจำกัด |
| --- | --- | --- |
| “Exam Takeaways” / “Remember These Distinctions” | หัวข้อบน [S46] | ผู้สอนเน้นแยก Law/Regulation, Framework, Guideline, Policy, Standard, Procedure ไม่ใช่ official terminology list |
| “step-by-step instructions” → “procedure” | “Exam Tip” บน [S47]; [T] T@00:56:16 | พิจารณาว่ากำลังพูดถึงวิธีทำ task เป็นลำดับ; อย่าตัดสิน mandatory/optional จาก phrase นี้ |
| “mandatory technical requirement” → “standard” | [S47]; [T] T@00:56:16 | ใน tip นี้หมายถึง specification ที่ใช้ implement policy ไม่แปลว่าทุกสิ่งที่ mandatory ต้องเป็น Standard หรือ government law |
| “management's high-level direction” → “policy” | [S47]; [T] T@00:56:16 | ดูระดับ direction ของ management; แยกจากรายละเอียดวิธีทำ |
| “How do we do it?” | คำอธิบาย Procedure บน [S42] | เป็น explanatory question ที่มีอยู่ใน source ไม่ใช่ exam stem ที่ผู้จัดทำสร้าง และไม่ใช่ ISC2 template |
| “Policy says WHAT must be done” / “required level or specifications” | Policy/Standard distinction บน [S41] | WHAT ของ policy กับ specifications ของ standard ไม่เท่ากับ HOW ของ procedure; ดู [S43] ที่เชื่อมตัวอย่าง password ทั้งสามระดับ |

Concept links: KNOW-D1-029–033 ใน [knowledge map](knowledge-map.md) **SQ-05:** transcript มี “procedure is also optional” แต่ slides ไม่รับรอง จึงไม่เพิ่ม optional เป็น answer clue

### 1.2 Control-type clue table ที่ source ให้โดยตรง

[S56] มีประโยค “Exams often use specific words or phrases to hint at the control type.” นี่เป็น **claim ของผู้สอน** เกี่ยวกับ exams ไม่ใช่การยืนยัน exam frequency ของ ISC2 [T] T@01:04:26/T@01:05:10/T@01:05:51 กล่าวถึง clue groups เหล่านี้เช่นกัน

| Source clue phrases (คงศัพท์เดิม) | Type ที่ S56 เชื่อม | คำอธิบายไทยสำหรับอ่านอย่างมีบริบท |
| --- | --- | --- |
| Warning, Sign, Visibility, Perception | Deterrent | ใน tip เน้นสิ่งที่ทำให้ไม่อยากละเมิด; **Signage** ยังอยู่ Directive examples ใน [S54] จึงต้องดูหน้าที่ |
| Access Control, Authentication, Firewall, Encryption | Preventive | Source เชื่อมกับการกัน/หยุด unauthorized activity; ชื่อเทคโนโลยีไม่บอกทุก function ที่กำลังทำ |
| Monitoring, Audit, Logging, Alerts | Detective | อ่านว่าเป็นการค้นพบ/ตรวจจับในบริบทนั้น; Monitoring ยังถูกยกใต้ Compensating examples [S54] |
| Alternative, Backup, Redundancy | Compensating | เก็บเป็น clue ของ source ไม่ขยายเป็นนิยาม complete compensating-control criteria |
| Backup, Restore, Incident Response | Corrective | Backup ปรากฏทั้งแถวนี้และ Compensating บน slide เดียวกัน เป็นหลักฐานว่า keyword เดียวไม่พอ |
| Policy, Procedure, Standard, Guideline | Directive | Source เน้น guide behavior/enforce compliance; Policy ยังถูกยกใน type examples อื่นด้วย |

**ข้อกำกับจาก source เอง:** [S55] บอกว่า control เดียวมีหลาย types ตาม implementation และ risk ดังนั้นใช้ clue table ร่วมกับ definitions [S53] และ context [S55] ไม่ใช้เป็น fixed lookup ดู KNOW-D1-037/039 และ [concept distinctions](concept-distinctions.md); SQ-10 ยังเปิดสำหรับ contentious examples

### 1.3 คำแนะนำที่ต้องแยกเก็บ ไม่ใช้เป็น answer rule

| Source wording / claim | ตำแหน่งหลักฐาน | การจัดการ |
| --- | --- | --- |
| Encryption เป็น “go to answer” เมื่อต้อง ensure confidentiality | [T] T@00:07:28, T@00:08:08; [S05] แสดง encryption ร่วมกับ access controls/passwords | บันทึกว่าผู้สอนพูดเช่นนั้น แต่ไม่รับรอง universal shortcut; ต้องดูโจทย์/เป้าหมาย/ข้อจำกัดจริง (SQ-13) |
| ลำดับคำภายใน canon สำคัญ และควร prefer honor/honesty ใน conflict กับ legally | [T] T@01:08:41, T@01:09:27; [S60] มี list/text | **Hold:** ห้ามใช้ word-order เป็น decision rule; slide list ไม่ได้พิสูจน์ interpretation นี้ (SQ-09) |
| “Best for high-impact or high-likelihood risks…” ใต้ Avoid | [S27], [S28] | “Best” ตรงนี้เป็นคำขยายในบทเรียน ไม่ใช่หลักฐานว่าข้อสอบ ISC2 ใช้ qualifier BEST เป็นรูปแบบบังคับ |

## 2. Definition language ที่ช่วยแยกแนวคิด

ตารางนี้เป็น **editorial synthesis จากข้อความที่ source ให้** ไม่ใช่ explicit exam tips เพิ่มเติม ตัวอย่างเป็นการอ้าง example/definition ของ source เท่านั้น ไม่มี scenario หรือ question stem ใหม่

| Phrases ที่พบใน source | แนวคิดที่สัมพันธ์ | วิธีอ่าน/ข้อควรระวังภาษาไทย |
| --- | --- | --- |
| “authorized people, systems, or processes”; “seeing, stealing, or altering” | Confidentiality [S05] | ใครเห็นข้อมูลได้เป็นจุดเน้น; คำ altering ใน source ทับ Integrity จึงอย่าเลือกจากกริยาคำเดียว (SQ-13) |
| “correct and unaltered”; “modified, deleted, or corrupted”; “tampering” | Integrity [S07] | ดูว่าความถูกต้อง/การเปลี่ยนแปลงเป็นสิ่งที่ต้องรักษาหรือไม่ ใช้ unaltered จาก slide โดยไม่ปิดบัง transcript variant |
| “whenever needed”; “downtime”; “hardware failures, cyberattacks, or maintenance” | Availability [S10] | ดูความพร้อมใช้งานของ authorized users ไม่ใช่เพียงมี permission |
| “verifying the identity” / “credentials” | Authentication [S12] | เน้นการตรวจ identity; คำ access อาจอยู่หลายแนวคิด |
| “permission”; “perform certain actions”; “usually takes place after authentication” | Authorization [S12] | เน้นสิทธิทำอะไร และรักษาคำ usually ไม่เปลี่ยนเป็น always |
| “tracking and recording”; “login and logout logs”; “command execution logs” | Accounting [S12] | เน้นกิจกรรมถูกบันทึก ไม่ใช่การให้สิทธิหรือ governance accountability |
| “at least two independent factors” | MFA [S14] | นับ independent categories ไม่ใช่จำนวน credential fields; [T] T@00:25:37 แยก password+PIN ไว้ชัด |
| “determines the purpose and means” / “on behalf of the controller” | Controller / Processor [S17] | คำกริยาช่วยแยกบทบาท อย่าเลือกจากชื่อบริษัทหรือคำว่า cloud อย่างเดียว |
| “location and type” / “how long…kept and when…deleted” | Data Inventory / Retention [S18] | แยกสิ่งที่มี/อยู่ที่ไหนจากเวลาเก็บ/ลบ ไม่ใช้ seven-year example เป็นกฎทุกกรณี |
| “What needs to be protected?” / “What could cause harm?” / “What weaknesses could be exploited?” | Asset / Threat / Vulnerability [S21] | เป็นคำช่วยอธิบายที่ source มี ไม่ใช่คำถามจำลองที่สร้างขึ้นใหม่; อย่าสับสน weakness กับเหตุ/สิ่งก่ออันตราย |
| “percentage of an asset's value”; “single risk event”; “in a year”; “annual financial loss” | EF / SLE / ARO / ALE [S23], [S24] | ตรวจหน่วยและช่วงเวลา; ต้องอ่าน discrepancy ARO/ALE (SQ-04) ไม่คำนวณต่อจาก transcript ที่กำกวม |
| “acknowledge”; “additional action”; “tolerance”; “cost of treatment” | Accept [S25], [S26] | “no additional action” ไม่ได้แปลว่า risk ไม่ถูกระบุ และไม่แปลว่าไม่ต้อง review อีก [S29] |
| “discontinuing the activity or process” / “minimizing the likelihood or impact” | Avoid / Mitigate [S28] | ดูว่าหยุดกิจกรรมหรือทำต่อด้วย measures; ไม่ใช้ vendor keyword เป็นคำตอบอัตโนมัติ |
| “directed, controlled, and held accountable”; “direction and oversight” | Governance [S33] | คนละบริบทกับ Accounting log หรือ control execution |
| “generally”; “advisory”; “recommended” | Guideline [S39] | รักษา scope ของ generally ไม่เหมารวม legal status ของเอกสารจริง |
| “discourage”; “prevent or stop”; “discover or detect”; “after” | Deterrent / Preventive / Detective / Corrective [S53] | ดู function และช่วงเวลาที่คำอธิบาย source ระบุ ไม่ยึดชื่ออุปกรณ์อย่างเดียว |
| “depending on the context”; “how it's implemented”; “specific risk” | Overlap [S55] | เป็นเงื่อนไขที่ต้องอ่านร่วมกับรายการ examples ทั้งหมด ไม่ใช่ข้อยกเว้นที่ตัดทิ้งได้ |
| “reasonable steps”; “under the circumstances” | Due Care [S58] | เหตุผลเรื่องสิ่งที่ควรทำตาม circumstances ไม่ย่อเป็นกิจกรรมเดียว |
| “investigating, evaluating”; “before and during”; “appropriate and effective” | Due Diligence [S59] | before and during ทำให้จำแบบ “ก่อนเท่านั้น” ไม่ตรง source |

## 3. General project recommendations — ไม่ใช่ lecture extraction

หัวข้อนี้อ้าง [existing question-writing guidelines](../../../../../docs/plans/isc2-cc-2026/question-writing-guidelines.md) ส่วน qualifier table และเป็นคำแนะนำ editorial ทั่วไป ไม่ใช่หลักฐานว่า lecture สอนครบหรือ ISC2 ใช้ templates ดังกล่าวเสมอ

| Qualifier ใน project documentation | คำอธิบายไทยสำหรับการอ่าน | ขอบเขตหลักฐาน |
| --- | --- | --- |
| BEST / MOST Appropriate | ต้องพิจารณาความเหมาะสมภายใต้ context/constraints ที่ให้ ไม่ใช่สิ่งที่ถูกโดยลำพัง | ไม่ได้ extract เป็น ISC2-specific pattern จาก source batch นี้ |
| FIRST | อ่านว่าสนใจลำดับขั้นใด และมีข้อมูลเพียงพอจะจัดลำดับหรือไม่ | “Step 1” ใน risk lecture เป็น teaching sequence ไม่ใช่หลักฐานว่าทุกคำถามเริ่มด้วย FIRST |
| PRIMARY | อ่านว่าเน้นหน้าที่/วัตถุประสงค์หลักในบริบทใด | Source มี “primarily preventive” ใน ACL example [S55] แต่ไม่พิสูจน์ PRIMARY stem convention |
| LEAST | คงความหมายด้านน้อยที่สุด/เหมาะสมน้อยที่สุดในการแปล | ไม่มีหลักฐานใน batch ว่าเป็นข้อกำหนดภาษาสอบ ISC2 |
| EXCEPT / NOT | ตรวจ scope ของการปฏิเสธ/ข้อยกเว้น ไม่แปลกลับขั้ว | คำปฏิเสธในนิยามไม่ใช่หลักฐาน official exam-item pattern |

**General reading recommendations ของผู้จัดทำ:** อ่าน subject/action/object, เป้าหมาย security property, ช่วงเวลา, role และเงื่อนไขก่อนใช้ clue; เก็บคำว่า only/usually/generally/at least/before and during ให้ครบในการแปล; หาก source ขัดแย้งอย่าใช้เป็น answer rule การแนะนำนี้มีไว้รักษา source meaning และป้องกัน keyword-only selection ไม่ใช่ claim ว่ามีข้อสอบจริงแบบใด

## 4. Exam-format vocabulary ที่พบ แต่ไม่ได้ validate ใหม่

[S01] ระบุ **Length of exam: 2 hours; Number of items: 100–125; Item format: Multiple choice and advanced item types; Passing grade: 700 out of 1000 points; Exam availability: English, Chinese, Japanese, German, Spanish; Testing center: Pearson VUE Testing Center** [T] T@00:01:23/T@00:02:08 มี transcription ขาด/คลาดเคลื่อนในตัวเลข จึงระบุชัดว่าอ่านรายการนี้จาก S01

[S02] มี heading **“CC CAT Examination Weights”** และ Domain 1 **24%**; [S03] เปรียบเทียบ outlines แต่ total row 100% ขณะที่ผลรวมค่าที่แสดงได้ 99.9% (arithmetic observation ของผู้จัดทำ) คำ CAT ไม่ได้ถูกขยาย/สอน mechanics ในวัสดุนี้ และคำว่า advanced item types ไม่ได้ให้รูปแบบตัวอย่างที่ใช้สร้างข้อสอบใหม่

ทั้งหมดเป็น **source-reported exam metadata** ไม่ใช่การรับรองข้อกำหนดปัจจุบัน ไม่แปลง 700/1000 เป็น raw percent-correct threshold ไม่ปรับน้ำหนัก config และไม่อ้างว่าระบบฝึกของโครงการจำลอง CAT อย่างเป็นทางการ (SQ-17)

## 5. ขอบเขตที่จะส่งต่อ Phase 3

ส่งต่อ phrase inventory และ source locators เพื่อช่วยกำหนด learning targets ในอนาคตได้เมื่อได้รับคำสั่ง ไม่ส่งต่อ keyword mappings เป็น answer keys และไม่ส่งต่อ disputed ethics/MFA/ARO/procedure interpretations เป็น approved rules ใช้ [quality report](source-quality-report.md) ระบุ holds และ [concept distinctions](concept-distinctions.md) ป้องกันการยุบหลาย concept ให้เหลือ keyword เดียว

<!-- Source reference definitions: aliases map to original manifest records. -->
[S01]: ../slides/Screenshot%202026-09-19%20212949.png
[S02]: ../slides/Screenshot%202026-09-19%20213300.png
[S03]: ../slides/Screenshot%202026-09-19%20213632.png
[S05]: ../slides/Screenshot%202026-09-19%20213951.png
[S07]: ../slides/Screenshot%202026-09-19%20215019.png
[S10]: ../slides/Screenshot%202026-09-19%20220631.png
[S12]: ../slides/Screenshot%202026-09-19%20223751.png
[S14]: ../slides/Screenshot%202026-09-19%20225627.png
[S17]: ../slides/Screenshot%202026-09-19%20225943.png
[S18]: ../slides/Screenshot%202026-09-19%20231044.png
[S21]: ../slides/Screenshot%202026-09-19%20232732.png
[S23]: ../slides/Screenshot%202026-09-19%20232805.png
[S24]: ../slides/Screenshot%202026-09-19%20232819.png
[S25]: ../slides/Screenshot%202026-09-19%20232832.png
[S26]: ../slides/Screenshot%202026-09-19%20232901.png
[S27]: ../slides/Screenshot%202026-09-19%20232913.png
[S28]: ../slides/Screenshot%202026-09-19%20232929.png
[S29]: ../slides/Screenshot%202026-09-19%20232948.png
[S33]: ../slides/Screenshot%202026-09-19%20234554.png
[S39]: ../slides/Screenshot%202026-09-19%20235339.png
[S41]: ../slides/Screenshot%202026-09-19%20235907.png
[S42]: ../slides/Screenshot%202026-09-19%20235938.png
[S43]: ../slides/Screenshot%202026-09-19%20235943.png
[S46]: ../slides/Screenshot%202026-09-20%20001103.png
[S47]: ../slides/Screenshot%202026-09-20%20001417.png
[S53]: ../slides/Screenshot%202026-09-20%20001901.png
[S54]: ../slides/Screenshot%202026-09-20%20001921.png
[S55]: ../slides/Screenshot%202026-09-20%20002108.png
[S56]: ../slides/Screenshot%202026-09-20%20002536.png
[S58]: ../slides/Screenshot%202026-09-20%20002816.png
[S59]: ../slides/Screenshot%202026-09-20%20003207.png
[S60]: ../slides/Screenshot%202026-09-20%20003325.png
[T]: ../transcripts/Script%20-%20DOMAIN%201.txt
