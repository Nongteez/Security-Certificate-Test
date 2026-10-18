---
id: d1-phase2-source-quality
domain_id: 1
review_status: draft
translation_review_status: needs-human-review
prepared_date: 2026-10-18
source_reference: ISC2-CC-2026-SOURCE-20261018-01
---

# Domain 1 — Source Quality Report

## ขอบเขตและวิธีอ่านหลักฐาน

เอกสารนี้เป็นผล **Phase 2: Knowledge Extraction and Exam Language Analysis** ของ SEC-CERT-TEST ไม่ใช่เอกสารรับรองจาก ISC2 และไม่มีข้อสอบที่สร้างขึ้นใหม่ การตรวจครั้งนี้อ่าน transcript เต็มไฟล์ 293 บรรทัด/98 timestamp blocks และเปิดดู PNG ทั้ง **60 ภาพแยกทีละไฟล์** ที่ขนาดอ่านได้ ไม่ได้ใช้เพียง contact sheet ของ Phase 1

ตรวจโครงสร้างจริงแล้วพบว่า `content/isc2-cc-2026/` แยก `knowledge/`, `questions/`, `templates/` และ `sources/` ไว้อยู่แล้ว ผลครั้งนี้เพิ่มเฉพาะ Markdown ห้าไฟล์ใน `sources/domain-1/extracted-knowledge/` โดยไม่เติม reviewed staging ที่ `knowledge/domain-1.md` ไม่แก้ `.gitkeep` และไม่แก้ tracker ที่มีงานอื่นอยู่

อ่าน [source README](../../README.md), [preparation report](../../preparation-report.md), [file inventory](../../file-inventory.md), [manifest](../../source-manifest.json), [inspection notes](../notes/inspection-notes.md), [knowledge template](../../../templates/knowledge-template.md), [knowledge content plan](../../../../../docs/plans/isc2-cc-2026/knowledge-content-plan.md) และ [authoring guidelines](../../../../../docs/plans/isc2-cc-2026/question-writing-guidelines.md) ก่อนจัดทำไฟล์ ใช้แนวทาง provenance/status ของโครงการ แต่ยึดคำขอครั้งนี้ที่ให้ใช้ English technical terminology กับคำอธิบายภาษาไทย

**Source locator:** `[S01]` ถึง `[S60]` หมายถึง capture position ใน manifest และลิงก์ตรงไปยังภาพจริง ชื่อเต็มของ stable ID คือ `ISC2-CC-2026-D1-CAPTURE-001` ถึง `...-060` ตามลำดับ ไม่ใช่เลขหน้าของ slide deck ส่วน `[T]` คือ `ISC2-CC-2026-D1-TRANSCRIPT-001`, ไฟล์ `Script - DOMAIN 1.txt`; `T@hh:mm:ss` ระบุ **เวลาเริ่มของ block จริง** ให้ค้นหาในไฟล์นั้น ไม่ใช่ตำแหน่งที่จับคู่กับภาพได้แบบ frame-exact

**สถานะเนื้อหา:** `source-supported` = สรุปข้อความที่อ่านพบ ไม่ได้แปลว่าถูกต้องทางเทคนิคแล้ว; `review-required` = มีความขัดแย้ง/เงื่อนไขไม่ครบ; `editorial-inference` = การจัดกลุ่มหรือคำแนะนำของผู้จัดทำ; `mention-only` = พบชื่อ แต่ไม่มีคำอธิบายพอให้ขยายเป็นบทเรียน คำแปลไทยทั้งหมดเป็น derived editorial translation ที่ยังรอ human review ไม่ใช่ข้อความภาษาไทยจากต้นฉบับ

ไม่ได้เพิ่ม web research หรือข้อเท็จจริงจากภายนอกเพื่อปะช่องว่าง ข้อความเกี่ยวกับกฎหมาย มาตรฐาน และรูปแบบสอบด้านล่างเป็น **source claims** สำหรับการตรวจแหล่งข้อมูล ไม่ใช่คำแนะนำทางกฎหมายหรือการยืนยันข้อมูลสอบปัจจุบัน

## ลำดับภาพและความมั่นใจ

เรียงตาม timestamp ในชื่อเดิมจาก `2026-09-19 21:29:49` ถึง `2026-09-20 00:33:25`; timezone ของชื่อไฟล์ไม่ทราบ Topic progression สอดคล้องกับลำดับใน transcript จึงใช้เป็น **provisional capture order** ได้ แต่ยังยืนยัน original deck order, จำนวนหน้าทั้งหมด, ความต่อเนื่องของ recording หรือภาพที่ขาดไม่ได้ ภาพซ้ำหัวข้อ/คนละ crop ไม่ใช่หลักฐานว่าเป็น slide คนละหน้า

ตารางต่อไปนี้บันทึกการตรวจทีละภาพและ topic-level cross-reference ทุกภาพ เวลาในแถวเป็น block ที่มีเนื้อหาเกี่ยวข้อง ไม่ใช่หลักฐานว่าเวลาบันทึกหน้าจอตรงกับเวลาใน lecture

| Capture / stable ID suffix | Original filename | ผลตรวจภาพทีละไฟล์ | Transcript blocks ที่สัมพันธ์ |
| --- | --- | --- | --- |
| [S01] / 001 | Screenshot 2026-09-19 212949.png | Exam information; ขอบบน/ขวาชิด แต่ค่าหลักอ่านได้ | T@00:01:23, T@00:02:08 |
| [S02] / 002 | Screenshot 2026-09-19 213300.png | Domain weights อ่านได้; เก็บเป็น introduction | T@00:02:08, T@00:02:55 |
| [S03] / 003 | Screenshot 2026-09-19 213632.png | Old/new comparison อ่านได้; total 100% ต่างจากผลรวมตัวเลขย่อย | T@00:03:42, T@00:04:26 |
| [S04] / 004 | Screenshot 2026-09-19 213831.png | CIA diagram อ่านได้ | T@00:05:55 |
| [S05] / 005 | Screenshot 2026-09-19 213951.png | Confidentiality อ่านได้; “altering” ทับขอบเขต Integrity | T@00:06:42, T@00:07:28 |
| [S06] / 006 | Screenshot 2026-09-19 214354.png | Examples อ่านได้ แต่ท้าย NDA ชิด/ถูกตัดขอบล่างบางส่วน | T@00:08:54, T@00:09:35, T@00:10:29, T@00:11:10 |
| [S07] / 007 | Screenshot 2026-09-19 215019.png | Integrity อ่านได้; มี handwritten “hashing” | T@00:11:10, T@00:11:53 |
| [S08] / 008 | Screenshot 2026-09-19 215812.png | Crop เฉพาะ examples; heading หาย ขอบล่างชิด | T@00:12:33, T@00:13:16, T@00:13:58 |
| [S09] / 009 | Screenshot 2026-09-19 215816.png | Wider Integrity examples ช่วยระบุบริบท S08; ล่างชิดแต่ข้อความอ่านได้ | T@00:12:33, T@00:13:16, T@00:13:58 |
| [S10] / 010 | Screenshot 2026-09-19 220631.png | Availability definition/examples of mechanisms อ่านได้ | T@00:13:58, T@00:14:40, T@00:15:23 |
| [S11] / 011 | Screenshot 2026-09-19 223016.png | Availability examples อ่านได้; “Cloud Storage Backups” อธิบาย failover อย่างกว้าง | T@00:16:01, T@00:16:46, T@00:17:26 |
| [S12] / 012 | Screenshot 2026-09-19 223751.png | AAA ทั้งสามส่วนอ่านได้; ใช้ Accounting/Auditing คู่กัน | T@00:18:08, T@00:19:38, T@00:20:20, T@00:20:58 |
| [S13] / 013 | Screenshot 2026-09-19 224441.png | MFA factors อ่านได้; มี categorical strength claims | T@00:21:43, T@00:22:25, T@00:23:02, T@00:23:37 |
| [S14] / 014 | Screenshot 2026-09-19 225627.png | Location และ summary อ่านได้; ขอบล่างชิด | T@00:24:59, T@00:25:37, T@00:26:16, T@00:26:57 |
| [S15] / 015 | Screenshot 2026-09-19 225921.png | Crop เฉพาะ Privacy definition; เนื้อหาอ่านครบ | T@00:27:36 |
| [S16] / 016 | Screenshot 2026-09-19 225926.png | Wider Privacy definition; word-cloud ไม่ใช้เป็นนิยามเพิ่ม | T@00:27:36 |
| [S17] / 017 | Screenshot 2026-09-19 225943.png | Data Subject, Controller, Processor อ่านได้ | T@00:28:22, T@00:29:06 |
| [S18] / 018 | Screenshot 2026-09-19 231044.png | Ownership, inventory, retention อ่านได้; seven-year example ไม่มี jurisdiction | T@00:29:46, T@00:30:34 |
| [S19] / 019 | Screenshot 2026-09-19 231055.png | Right to Be Forgotten อ่านได้ แต่เงื่อนไขประโยคกำกวม | T@00:31:18 |
| [S20] / 020 | Screenshot 2026-09-19 231752.png | Risk lifecycle 5 ส่วนอ่านได้ | T@00:32:07, T@00:32:51 |
| [S21] / 021 | Screenshot 2026-09-19 232732.png | Identification definition อ่านได้; ไม่เห็น examples ที่ S22 มี | T@00:33:37, T@00:34:18 |
| [S22] / 022 | Screenshot 2026-09-19 232740.png | Definition + examples อ่านได้; ล่างชิด | T@00:33:37, T@00:34:18 |
| [S23] / 023 | Screenshot 2026-09-19 232805.png | EF/SLE/ARO และ 0.2 อ่านได้; red annotation ทับบางบริเวณ | T@00:37:13, T@00:37:59, T@00:38:53 |
| [S24] / 024 | Screenshot 2026-09-19 232819.png | ALE formula และ ARO=2 example อ่านได้ | T@00:39:45 |
| [S25] / 025 | Screenshot 2026-09-19 232832.png | Transfer + Accept อ่านได้; responsibility wording ต้องตรวจ | T@00:40:30, T@00:41:19, T@00:41:59 |
| [S26] / 026 | Screenshot 2026-09-19 232901.png | Accept/cost/tolerance อ่านได้ | T@00:41:59, T@00:42:42, T@00:43:30 |
| [S27] / 027 | Screenshot 2026-09-19 232913.png | Avoid เท่านั้นอ่านได้ | T@00:43:30, T@00:44:08 |
| [S28] / 028 | Screenshot 2026-09-19 232929.png | Avoid + Mitigate อ่านได้; เพิ่มเนื้อหาจาก S27 | T@00:44:08 |
| [S29] / 029 | Screenshot 2026-09-19 232948.png | Monitor/review + triggers อ่านได้ | T@00:44:51, T@00:45:32 |
| [S30] / 030 | Screenshot 2026-09-19 232959.png | Communication/reporting อ่านได้ | T@00:45:32, T@00:46:10 |
| [S31] / 031 | Screenshot 2026-09-19 234500.png | **50×36, 374 bytes: ไม่มีข้อความอ่านได้** | ไม่มีหลักฐานพอจับคู่ |
| [S32] / 032 | Screenshot 2026-09-19 234513.png | Risk Reporting ซ้ำสาระ S30; มี playback overlay | T@00:45:32, T@00:46:10 |
| [S33] / 033 | Screenshot 2026-09-19 234554.png | Governance และ direction/oversight อ่านได้ | T@00:46:10, T@00:46:59 |
| [S34] / 034 | Screenshot 2026-09-19 234647.png | Laws/regulations; มี annotation PCI-DSS/EU | T@00:46:59, T@00:47:41 |
| [S35] / 035 | Screenshot 2026-09-19 235021.png | Same topic; เพิ่ม annotation GDPR; อ่านได้ | T@00:46:59, T@00:47:41 |
| [S36] / 036 | Screenshot 2026-09-19 235026.png | **43×22, 615 bytes: ไม่มีข้อความอ่านได้** | ไม่มีหลักฐานพอจับคู่ |
| [S37] / 037 | Screenshot 2026-09-19 235030.png | GDPR, HIPAA, PCI DSS อ่านได้; ต้องแยกชนิดข้อกำหนด | T@00:48:26, T@00:49:10 |
| [S38] / 038 | Screenshot 2026-09-19 235324.png | Framework + NIST CSF/ISO/CIS names อ่านได้ | T@00:49:10, T@00:49:52 |
| [S39] / 039 | Screenshot 2026-09-19 235339.png | Guidelines/general advisory wording อ่านได้ | T@00:49:52, T@00:50:36 |
| [S40] / 040 | Screenshot 2026-09-19 235649.png | Policy definition/examples อ่านได้ | T@00:51:14, T@00:51:53 |
| [S41] / 041 | Screenshot 2026-09-19 235907.png | Standard + WHAT/required level อ่านได้ | T@00:51:53, T@00:52:38 |
| [S42] / 042 | Screenshot 2026-09-19 235938.png | Procedure + “How do we do it?” อ่านได้ | T@00:52:38 |
| [S43] / 043 | Screenshot 2026-09-19 235943.png | Password policy/standard/procedure example อ่านได้ | T@00:53:23 |
| [S44] / 044 | Screenshot 2026-09-20 000914.png | ISO/IEC 27001 และ ISMS อ่านได้; ต่างจาก transcript spelling | T@00:53:23, T@00:54:06 |
| [S45] / 045 | Screenshot 2026-09-20 001051.png | CIS และ CIS Controls อ่านได้ | T@00:54:55 |
| [S46] / 046 | Screenshot 2026-09-20 001103.png | Exam Takeaways 6 terms อ่านได้; ไม่บอกว่า Procedure optional | T@00:55:38, T@00:56:16 |
| [S47] / 047 | Screenshot 2026-09-20 001417.png | Exam Tip 3 phrase associations อ่านได้ | T@00:56:16 |
| [S48] / 048 | Screenshot 2026-09-20 001425.png | Four categories อ่านได้ | T@00:57:04 |
| [S49] / 049 | Screenshot 2026-09-20 001435.png | Six functional types อ่านได้ | T@00:57:04 |
| [S50] / 050 | Screenshot 2026-09-20 001509.png | Category definitions อ่านได้ | T@00:57:54, T@00:58:31 |
| [S51] / 051 | Screenshot 2026-09-20 001709.png | Category examples อ่านได้; training ปรากฏหลาย category | T@00:58:31, T@00:59:08, T@00:59:47 |
| [S52] / 052 | Screenshot 2026-09-20 001717.png | Layer diagram อ่านได้; handwritten Defense in depth | T@00:59:47, T@01:00:36 |
| [S53] / 053 | Screenshot 2026-09-20 001901.png | Six type definitions อ่านได้; Compensating ค่อนข้างกว้าง | T@01:00:36, T@01:01:20 |
| [S54] / 054 | Screenshot 2026-09-20 001921.png | Type examples อ่านได้; มี contentious classifications | T@01:01:56, T@01:02:34, T@01:03:13 |
| [S55] / 055 | Screenshot 2026-09-20 002108.png | Context overlap + camera/ACL examples อ่านได้ | T@01:03:49, T@01:04:26 |
| [S56] / 056 | Screenshot 2026-09-20 002536.png | Keyword table อ่านได้; Backup อยู่สอง type | T@01:04:26, T@01:05:10, T@01:05:51 |
| [S57] / 057 | Screenshot 2026-09-20 002700.png | Professional conduct/values อ่านได้ | T@01:05:51, T@01:06:33 |
| [S58] / 058 | Screenshot 2026-09-20 002816.png | Due Care definition/examples อ่านได้ | T@01:06:33, T@01:07:15 |
| [S59] / 059 | Screenshot 2026-09-20 003207.png | Due Diligence definition/examples อ่านได้; toolbar ในพื้นที่ว่างล่าง | T@01:07:15, T@01:07:59 |
| [S60] / 060 | Screenshot 2026-09-20 003325.png | Four canons อ่านได้; ไม่ยืนยัน precedence ภายในประโยค | T@01:07:59, T@01:08:41, T@01:09:27 |

## Issue register และ human review

ทุกข้อด้านล่างยังเปิดอยู่ การเลือกข้อความที่อ่านชัดจาก slide มาแสดงเป็น **การระบุหลักฐานที่ใช้** ไม่ใช่การแก้ transcript หรือรับรอง technical correctness

| Issue | หลักฐาน / ความคลาดเคลื่อน | ผลต่อ extraction / สิ่งที่ต้องตรวจ |
| --- | --- | --- |
| SQ-01 — Unreadable | [S31], [S36] ไม่มี readable text | ไม่นำมาสร้าง concept; ขอภาพที่ตั้งใจจับหรือ original recording เมื่อมี ห้ามเติมจากตำแหน่งข้างเคียง |
| SQ-02 — Order/crops | ทุกภาพไม่มี deck numbering; S06 cropped bottom; S08/09, S15/16, S21/22, S27/28, S34/35 เป็น variants; S30/32 มีสาระซ้ำ | ใช้ capture order เท่านั้น; เก็บทุกไฟล์; canonical concept ไม่เพิ่มตามจำนวนภาพ |
| SQ-03 — Transcript artifacts | [T] มี overlapping blocks, “correct and altered” ที่ T@00:11:10 เทียบ “unaltered” [S07], “unpaged” ที่ T@00:34:18 เทียบ “Unpatched server” [S22], “HIPPA” เทียบ HIPAA [S37], “ISO 101” เทียบ ISO/IEC 27001 [S44], “principles” เทียบ “principals” [S60] | ใช้ชื่อจาก slide โดยบอกที่มาอย่างเปิดเผย; ไม่แก้ไฟล์เดิม ไม่ตีความเสียงที่ไม่ได้ฟัง |
| SQ-04 — ARO / ALE | T@00:38:53 พิมพ์ once every five years = “2”; [S23] พิมพ์ 0.2; T@00:39:45 เรียก projected annual loss ว่า annualized rate ก่อนพูดสูตร ขณะที่ [S24] ใช้ ALE | แยก definition/formula ที่อ่านจากภาพกับ transcript variant; ห้ามผสาน ARO=0.2 ของ S23 กับ ARO=2 example ของ S24 เป็นตัวอย่างเดียวกัน ต้อง human review ก่อน blueprint calculation |
| SQ-05 — Procedure optional | T@00:56:16 พูดว่า procedure “is also optional”; [S42]/[S46] ระบุ step-by-step โดยไม่ระบุ optional | เก็บนิยามขั้นตอน; ไม่สรุปว่า Procedure optional หรือ mandatory เสมอ การทำรายการตอบจาก optional ต้องพักไว้ |
| SQ-06 — MFA taxonomy/strength | [S13]/[S14] จัด Location เป็น factor; [S13] บอก possession ต้อง physical theft และ biometrics ยากมากที่จะ forge; T@00:26:16 เปรียบ biometrics กับ iris scan โดยไม่ชัด | เก็บสิ่งที่ source จัดกลุ่ม แต่ไม่รับรอง Location เป็น independent factor ตามมาตรฐานใด ไม่รับรองว่าการขโมยทางกายภาพเป็นช่องทางเดียว และไม่เติมรายละเอียดโจมตีจากภายนอก |
| SQ-07 — Transfer responsibility | [S25], T@00:40:30/T@00:41:19 ระบุ risk shifting และลด direct responsibility โดยไม่แยก financial loss, risk ownership หรือ accountability | เก็บ insurance example; พักข้อสรุปว่า accountability ถูกโอนทั้งหมด ต้องผู้เชี่ยวชาญอธิบายขอบเขตพร้อมหลักฐานใหม่ |
| SQ-08 — Acceptance/avoidance overreach | T@00:41:59 ใช้ “only” low-impact/low-probability เทียบเงื่อนไข tolerance/cost ของ [S26]; T@00:43:30 ยก changing vendor/ไม่ซื้อ application ในบริบท Avoid | ไม่สร้างกฎว่าความเสี่ยงทุกอย่างใน private LAN ต่ำ หรือว่าเปลี่ยน vendor ทุกครั้งคือ Avoid; ต้องระบุ risk/activity ที่เลิกและเงื่อนไขจริง |
| SQ-09 — Ethics precedence | [S60] มี canon text/list; T@01:08:41/T@01:09:27 อ้างลำดับคำใน canon 2 และให้ prefer honor/honesty เมื่อขัดกับ legality | **พักการใช้เป็น decision rule**; ขอ authoritative review ไม่ถ่ายทอดเป็นคำแนะนำให้ละเลยกฎหมาย ความคิดเห็นผู้บรรยายไม่ใช่ข้อยืนยันจาก ISC2 |
| SQ-10 — Control examples | [S54] จัด penetration testing เป็น Preventive, forensic analysis เป็น Corrective, monitoring เป็น Compensating; [S55] ย้ำหลายประเภทตาม context; [S56] มี Backup ทั้ง Compensating/Corrective | คง source classifications พร้อมธง review ไม่ย้าย category เงียบ ๆ และไม่ใช้ device-name lookup เป็น answer key; ต้องระบุ function/context |
| SQ-11 — Privacy/legal scope | [S18] ยก seven-year tax retention โดยไม่มี jurisdiction; [S19] “no longer necessary or legally required to retain” มี scope ของ negation กำกวม; T@00:48:26 อธิบาย GDPR แบบกว้าง | เก็บการมีแนวคิด retention/deletion และขอ review ข้อจำกัด; ไม่สร้างกฎลบข้อมูลเสมอ/retention 7 ปีเสมอ ไม่เพิ่มเติม legal exceptions ที่ไม่มีในวัสดุ |
| SQ-12 — Laws vs standards/frameworks | [S34]/[S35] annotation PCI-DSS ใต้ laws; [S37] บอก PCI DSS “security requirements”; [S38] จัด ISO/IEC 27001 ใน examples ของ framework แต่ [S44] เรียก international standard | glossary แยกคำตามสิ่งที่ source อธิบาย; ไม่เหมาว่าทุกรายการเป็นกฎหมาย/ชนิดเดียวกัน ยังต้องตรวจ taxonomy และ applicability ภายนอกก่อนใช้สร้างข้อสอบ |
| SQ-13 — Confidentiality/Integrity boundary | [S05] รวม “altering” ใต้ unauthorized access; [S07] วาง unauthorized modification ใต้ Integrity; T@00:07:28/T@00:08:08 แนะนำ encryption เป็น go-to answer | อธิบายขอบเขตที่ source เน้น พร้อมแสดง overlap; ห้ามแปลง encryption เป็นคำตอบสากล |
| SQ-14 — Availability assumptions | [S11] ใช้ Cloud Storage Backups กับเข้าถึงได้เมื่อ server ล่ม และ DR sites “ready to take over” โดยไม่ระบุ architecture/recovery times | บันทึกเป็นตัวอย่างจากผู้สอน; ไม่สรุป backup ทุกชนิดทำ failover ทันทีหรือ zero downtime |
| SQ-15 — Hash/checksum examples | [S08]/[S09], T@00:13:16 ยก MD5/SHA และเปรียบ hash เพื่อสรุปไม่ถูกแก้ โดยไม่ระบุ algorithm/version หรือ trust ของ reference value | ไม่เพิ่มข้ออ้างว่า algorithm ทุกชื่อเหมาะกับทุก use case หรือ hash match รับรอง authenticity ทุกกรณี; เก็บเป็น source example รอ technical review |
| SQ-16 — Coverage | ไม่พบ explicit Non-repudiation teaching ใน [T] หรือ readable slide; planning `knowledge/domain-1.md` ระบุหัวข้อนี้ | รายงาน gap เท่านั้น ไม่เติมนิยามจากความจำ; Digital Signatures mention ไม่เพียงพออ้างว่ามีบทเรียน Non-repudiation ครบ ไม่มี justification ให้เพิ่ม AI topics |
| SQ-17 — Exam claims | [S01] ให้ 2 hours/100–125/items/700 out of 1000; [S02]/[S03] weights 24,17.3,20,21.3,17.3 แต่ total [S03] 100% | เก็บเป็น source-reported metadata ไม่ยืนยันปัจจุบัน; ผลรวม 99.9% เป็น arithmetic observation ของผู้จัดทำ ไม่ปรับน้ำหนัก ไม่แปลงคะแนนเป็น raw 70% โดยไม่มีหลักฐาน |
| SQ-18 — Provenance/review | publisher, instructor, URL, publication date, deck title, screenshot timezone และ rights ไม่ได้ยืนยัน; transcript/slide อาจมาจาก lecture เดียวกัน | การเห็นทั้งสองแหล่งตรงกันไม่ใช่ independent corroboration; จัดเป็น user study reference ไม่ใช่ official publication; การแปลไทยยังต้อง bilingual human review |

## Coverage และ readiness สำหรับ Phase 3 — Question Blueprint

| กลุ่มตาม source label | หลักฐาน | สถานะสำหรับ blueprint ในอนาคต |
| --- | --- | --- |
| 1.1 — Cybersecurity concepts | [S04]–[S19]; CIA, AAA, MFA, Privacy | มีฐานแยก learning targets ได้ แต่ MFA, legal privacy wording, hash claims ต้องติด review; Non-repudiation gap ยังเปิด |
| 1.2 — Risk management | [S20]–[S30], [S32]; Qualitative จาก [T] T@00:35:02/T@00:35:44 | มี lifecycle/response outline; ตัวเลข ARO/ALE และ transfer/accept scope ยังพักไว้ |
| 1.3 — Governance | [S33]–[S47] ยกเว้น S36 | มีฐาน distinction; Procedure optional และ legal/standard taxonomy ยังพักไว้ |
| 1.4 — Controls | [S48]–[S56] | มี definitions และ context-overlap; ไม่ใช้ contentious examples เป็น universal mapping |
| 1.5 — Conduct/ethics | [S57]–[S60] | มี Due Care/Due Diligence; canon precedence ขัดแย้งยังพักไว้ |

**Assessment: พร้อมแบบมีเงื่อนไขสำหรับการร่าง coverage blueprint เมื่อได้รับคำสั่งใหม่ แต่ยังไม่พร้อมรับรองความครบถ้วนหรือใช้สร้าง answer keys ทั้ง Domain 1** การตัดสิน readiness นี้เป็น `editorial-inference` จากหลักฐานและ issue register ไม่ใช่ข้อกำหนด ISC2 ไม่ได้สร้าง blueprint ใน Phase 2 นี้

รายการที่ต้อง human review ก่อนเดินหน้าส่วนเสี่ยง: SQ-04/05/06/07/09/10/11/12 และการยืนยัน scope ตาม official outline สำหรับ SQ-16 หากยังแก้ไม่ได้ให้ทำ gap/hold ใน blueprint แทนเติมเนื้อหาเอง การจำกัด scope ดังกล่าวไม่จำเป็นต้องขวางการวางแผนหัวข้อที่อ้างหลักฐานได้ชัด

## Verification และขอบเขตการเปลี่ยนแปลง

Phase 2 baseline บันทึกไฟล์ที่มีอยู่ก่อนเริ่มทั้งหมด **349 ไฟล์** นอก `.git/` ไว้เป็น audit artifact แยกจาก repository ผลตรวจ hashes ทั้งชุดยืนยันว่าต้นฉบับ, manifest, Phase 1 reports, existing questions, schemas, configs, loaders และ unrelated changes คงเดิม มีไฟล์ใหม่เฉพาะ Markdown ห้าไฟล์ที่ร้องขอ ไม่มีการใช้ application tests เพื่ออ้างว่าเนื้อหาถูกต้องทางเทคนิค

| การตรวจจบ Phase 2 | ผลที่ตรวจได้ |
| --- | --- |
| Pre-existing files / SHA-256 | 349/349 ไฟล์คงเดิม |
| New-file scope | 5/5 ไฟล์ อยู่ใน Domain 1 extracted-knowledge เท่านั้น |
| Canonical concept headings | 43 IDs ไม่ซ้ำ และทุก entry มี source citation |
| Individual image review records | 60/60 capture positions มีแถวบันทึกตรวจภาพ |
| Local Markdown link targets | 281 targets ถูก resolve พบไฟล์จริง รวม reference-style definitions |
| Source citation occurrences | 601 จุดอ้าง source aliases ที่มี definitions รองรับ |
| Transcript timestamp locators | 345 จุดอ้าง ตรงกับเวลาเริ่มที่มีจริงใน 98 blocks |
| Existing Git status entries | 224 entries ที่มีอยู่ก่อน Phase 2 ยังอยู่ครบ |

จำนวนจุดอ้างอิงนับได้มากกว่าแหล่งข้อมูลเพราะใช้ source เดียวกันหลายมุม ไม่ถือเป็น independent corroboration การตรวจ locator/link/hash พิสูจน์โครงสร้างและความคงเดิม ไม่แทน technical review หรือการรับรองคุณภาพคำแปล

ตรวจ source archive ซ้ำด้วยคำสั่ง read-only จาก project root:

```powershell
& './content/isc2-cc-2026/sources/verify-sources.ps1' -CheckOriginals -CheckPreparationBaseline -AsJson
```

ผล source verifier: `passed: true`, copies 61, retained originals 61, Phase 1 historical baseline 258, capture positions 60, failures 0 ส่วนการตรวจ baseline ของ **Phase 2 ทั้ง 349 ไฟล์** และห้าเอกสารเป็น audit เพิ่มแยกต่างหาก ไม่ได้แก้ verifier เดิม

เอกสารที่ส่งมอบ: [knowledge map](knowledge-map.md), [terminology glossary](terminology-glossary.md), [exam language guide](exam-language-guide.md), [concept distinctions](concept-distinctions.md) และรายงานนี้ ทั้งหมดเป็น draft สำหรับ review ไม่มีข้อสอบ/ตัวเลือก/answer keys และหยุดหลัง Phase 2

<!-- Source reference definitions: aliases map to original manifest records. -->
[S01]: ../slides/Screenshot%202026-09-19%20212949.png
[S02]: ../slides/Screenshot%202026-09-19%20213300.png
[S03]: ../slides/Screenshot%202026-09-19%20213632.png
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
[S27]: ../slides/Screenshot%202026-09-19%20232913.png
[S28]: ../slides/Screenshot%202026-09-19%20232929.png
[S29]: ../slides/Screenshot%202026-09-19%20232948.png
[S30]: ../slides/Screenshot%202026-09-19%20232959.png
[S31]: ../slides/Screenshot%202026-09-19%20234500.png
[S32]: ../slides/Screenshot%202026-09-19%20234513.png
[S33]: ../slides/Screenshot%202026-09-19%20234554.png
[S34]: ../slides/Screenshot%202026-09-19%20234647.png
[S35]: ../slides/Screenshot%202026-09-19%20235021.png
[S36]: ../slides/Screenshot%202026-09-19%20235026.png
[S37]: ../slides/Screenshot%202026-09-19%20235030.png
[S38]: ../slides/Screenshot%202026-09-19%20235324.png
[S39]: ../slides/Screenshot%202026-09-19%20235339.png
[S40]: ../slides/Screenshot%202026-09-19%20235649.png
[S41]: ../slides/Screenshot%202026-09-19%20235907.png
[S42]: ../slides/Screenshot%202026-09-19%20235938.png
[S43]: ../slides/Screenshot%202026-09-19%20235943.png
[S44]: ../slides/Screenshot%202026-09-20%20000914.png
[S45]: ../slides/Screenshot%202026-09-20%20001051.png
[S46]: ../slides/Screenshot%202026-09-20%20001103.png
[S47]: ../slides/Screenshot%202026-09-20%20001417.png
[S48]: ../slides/Screenshot%202026-09-20%20001425.png
[S49]: ../slides/Screenshot%202026-09-20%20001435.png
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
