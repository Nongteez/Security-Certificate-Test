---
id: d2-phase2-concept-distinctions
domain_id: 2
domain_name: Security Governance
review_status: draft
translation_review_status: needs-human-review
prepared_date: 2026-10-23
source_reference: "D2-T01 and D2-Snn; audit-local IDs from Phase 1 inventory"
---

# Domain 2 - Concept Distinctions

**14 comparison groups**, derived from source definitions and explicitly marked external clarification. These views reuse existing KNOW IDs and do not add canonical concepts or questions. All Thai translations need human review. ACCEPTED is a bounded internally consistent draft, never an approved answer rule. A comparison with a held example is NEEDS_REVIEW even where its core distinction is useful.

<a id="d2-cd01"></a>
## D2-CD01 - Governance vs risk vs compliance

**ไทย:** กำกับดูแล vs บริหารความเสี่ยง vs ปฏิบัติตามข้อกำหนด

**Status:** ACCEPTED; technical review draft; translation needs-human-review.

**English distinction:** Governance sets direction/oversight/accountability; risk addresses threats to objectives; compliance addresses applicable obligations.

**คำอธิบายไทย:** การกำกับดูแลกำหนดทิศทางและความรับผิดชอบ การบริหารความเสี่ยงจัดการสิ่งที่อาจกระทบเป้าหมาย ส่วน compliance พิจารณาข้อกำหนดที่ใช้กับองค์กร

**Boundary:** Do not infer that compliance eliminates risk or that an oversight decision implements a control.

**ข้อจำกัด:** ไม่ถือว่าการทำตามข้อกำหนดทำให้ความเสี่ยงหมดไป หรือการกำกับดูแลเท่ากับลงมือติดตั้งมาตรการ

**Canonical concepts:** [KNOW-D2-002](knowledge-map.md#know-d2-002), [KNOW-D2-003](knowledge-map.md#know-d2-003), [KNOW-D2-004](knowledge-map.md#know-d2-004).

**Evidence:** [T:L11-L13][T]; [Screenshot 2026-09-20 175642.png][S02]. External checks, when used, are in the [academic register](academic-issues-gap-register.md).

<a id="d2-cd02"></a>
## D2-CD02 - Framework / standard vs GRC platform vs risk register

**ไทย:** กรอบหรือมาตรฐาน vs แพลตฟอร์ม GRC vs ทะเบียนความเสี่ยง

**Status:** ACCEPTED; technical review draft; translation needs-human-review.

**English distinction:** Named frameworks/standards structure activities; platforms support/centralize work; registers record identified risks.

**คำอธิบายไทย:** กรอบและมาตรฐานจัดโครงสร้างแนวทาง แพลตฟอร์มช่วยดำเนินงานและรวมข้อมูล ส่วนทะเบียนบันทึกความเสี่ยงที่ระบุแล้ว

**Boundary:** ISO/IEC 27001 is a requirements standard; the graphic does not make GDPR, PCI DSS and CMMC identical kinds of instrument.

**ข้อจำกัด:** ISO/IEC 27001 เป็นมาตรฐานข้อกำหนด ภาพประกอบไม่ทำให้กฎหมาย มาตรฐาน และโครงการทุกชื่อเป็นประเภทเดียวกัน

**Canonical concepts:** [KNOW-D2-006](knowledge-map.md#know-d2-006), [KNOW-D2-007](knowledge-map.md#know-d2-007), [KNOW-D2-008](knowledge-map.md#know-d2-008), [KNOW-D2-009](knowledge-map.md#know-d2-009), [KNOW-D2-010](knowledge-map.md#know-d2-010), [KNOW-D2-011](knowledge-map.md#know-d2-011).

**Evidence:** [T:L19-L31][T]; [Screenshot 2026-09-20 180209.png][S07]; [Screenshot 2026-09-20 181135.png][S08]; [Screenshot 2026-09-20 181653.png][S09]. External checks, when used, are in the [academic register](academic-issues-gap-register.md).

<a id="d2-cd03"></a>
## D2-CD03 - Qualitative vs semi-quantitative vs quantitative rating

**ไทย:** ระดับเชิงคุณภาพ vs คะแนนแทนระดับ vs ปริมาณเชิงตัวเลข

**Status:** NEEDS_REVIEW; technical review draft; translation needs-human-review.

**English distinction:** The source contrasts categories with 1-4 scores. R-SCALE externally distinguishes representative numbers from quantities with preserved meaning/proportions.

**คำอธิบายไทย:** แหล่งข้อมูลเปรียบเทียบระดับกับคะแนน 1-4 ส่วน R-SCALE ชี้แจงจากภายนอกว่าคะแนนแทนระดับต่างจากปริมาณที่มีความหมายเชิงสัดส่วน

**Boundary:** This is a proposed explicit correction to the course label, not agreement with its quantitative claim; D2-Q06.

**ข้อจำกัด:** เป็นข้อเสนอแก้คำเรียกอย่างเปิดเผย ไม่ใช่การรับรองคำ quantitative ของต้นฉบับ

**Canonical concepts:** [KNOW-D2-015](knowledge-map.md#know-d2-015).

**Evidence:** [T:L27-L27][T]; [Screenshot 2026-09-20 181653.png][S09]. External checks, when used, are in the [academic register](academic-issues-gap-register.md).

<a id="d2-cd04"></a>
## D2-CD04 - BC vs BCP vs DR vs DRP

**ไทย:** ความต่อเนื่องธุรกิจและแผน vs การกู้คืนไอทีและแผน

**Status:** ACCEPTED; technical review draft; translation needs-human-review.

**English distinction:** BC is the broader continuity capability; BCP documents it; DR restores IT; DRP documents recovery arrangements.

**คำอธิบายไทย:** BC คือความสามารถด้านความต่อเนื่องที่กว้างกว่า BCP คือแผนรองรับ DR คือการกู้คืนไอที และ DRP คือเอกสารแผนกู้คืน

**Boundary:** The umbrella relationship does not guarantee all plans are implemented or tested.

**ข้อจำกัด:** ความสัมพันธ์ของแผนไม่ยืนยันว่าได้นำไปใช้หรือทดสอบแล้ว

**Canonical concepts:** [KNOW-D2-016](knowledge-map.md#know-d2-016), [KNOW-D2-017](knowledge-map.md#know-d2-017), [KNOW-D2-018](knowledge-map.md#know-d2-018), [KNOW-D2-019](knowledge-map.md#know-d2-019).

**Evidence:** [T:L35-L71][T]; [Screenshot 2026-09-20 182544.png][S12]; [Screenshot 2026-09-20 182614.png][S14]; [Screenshot 2026-09-20 183111.png][S16]; [Screenshot 2026-09-20 183410.png][S18]; [Screenshot 2026-09-20 183921.png][S19]. External checks, when used, are in the [academic register](academic-issues-gap-register.md).

<a id="d2-cd05"></a>
## D2-CD05 - RTO vs RPO

**ไทย:** ระยะเวลากู้คืน vs จุดข้อมูลที่กู้คืน

**Status:** ACCEPTED; technical review draft; translation needs-human-review.

**English distinction:** RTO addresses system unavailability; RPO addresses recoverable data history/loss tolerance.

**คำอธิบายไทย:** RTO พิจารณาช่วงที่ระบบใช้งานไม่ได้ ส่วน RPO พิจารณาจุดข้อมูลย้อนหลังและการสูญเสียข้อมูลที่ยอมรับได้

**Boundary:** Only definition-level distinction accepted. Schedule sufficiency, successful restoration and the one-hour timeline remain bounded by D2-Q05.

**ข้อจำกัด:** รับเฉพาะการแยกแนวคิด ไม่รับว่าตารางสำรองอย่างเดียวรับประกันผลกู้คืน

**Canonical concepts:** [KNOW-D2-021](knowledge-map.md#know-d2-021), [KNOW-D2-022](knowledge-map.md#know-d2-022).

**Evidence:** [T:L55-L71][T]; [Screenshot 2026-09-20 183410.png][S18]; [Screenshot 2026-09-20 183921.png][S19]. External checks, when used, are in the [academic register](academic-issues-gap-register.md).

<a id="d2-cd06"></a>
## D2-CD06 - Hot vs warm vs cold recovery sites

**ไทย:** สถานที่กู้คืนแบบ Hot vs Warm vs Cold

**Status:** NEEDS_REVIEW; technical review draft; translation needs-human-review.

**English distinction:** The source lists three categories, but warm/cold wording is incomplete or inaccurate. R-DR separates readiness and available equipment/infrastructure.

**คำอธิบายไทย:** แหล่งข้อมูลระบุสามประเภท แต่คำอธิบาย warm/cold ไม่ครบหรือคลาดเคลื่อน R-DR ใช้ระดับความพร้อมและอุปกรณ์หรือโครงสร้างพื้นฐานที่มีเพื่อช่วยแยก

**Boundary:** External distinction is verification material; do not adopt fixed minutes/hours/days or cold=no infrastructure; D2-Q05.

**ข้อจำกัด:** คำอธิบายภายนอกเป็นหลักฐานตรวจสอบ ไม่รับเวลาตายตัวหรือ cold ไม่มีโครงสร้างพื้นฐาน

**Canonical concepts:** [KNOW-D2-024](knowledge-map.md#know-d2-024), [KNOW-D2-025](knowledge-map.md#know-d2-025), [KNOW-D2-026](knowledge-map.md#know-d2-026).

**Evidence:** [T:L63-L65][T]; [Screenshot 2026-09-20 183410.png][S18]. External checks, when used, are in the [academic register](academic-issues-gap-register.md).

<a id="d2-cd07"></a>
## D2-CD07 - Awareness vs culture vs leadership

**ไทย:** ความตระหนัก vs วัฒนธรรม vs ภาวะผู้นำ

**Status:** ACCEPTED; technical review draft; translation needs-human-review.

**English distinction:** Awareness is understanding; culture is shared daily practice; leadership provides support, resources and example.

**คำอธิบายไทย:** ความตระหนักคือความเข้าใจ วัฒนธรรมคือแนวปฏิบัติร่วมในชีวิตประจำวัน ส่วนภาวะผู้นำสนับสนุนทรัพยากรและทำเป็นตัวอย่าง

**Boundary:** These reinforce each other; one completed course or management login does not measure the entire culture.

**ข้อจำกัด:** องค์ประกอบเหล่านี้สนับสนุนกัน แต่การเรียนครบหรือผู้บริหารล็อกอินครั้งหนึ่งไม่วัดวัฒนธรรมทั้งองค์กร

**Canonical concepts:** [KNOW-D2-029](knowledge-map.md#know-d2-029), [KNOW-D2-030](knowledge-map.md#know-d2-030), [KNOW-D2-031](knowledge-map.md#know-d2-031).

**Evidence:** [T:L73-L81][T]; [Screenshot 2026-09-20 220429.png][S21]; [Screenshot 2026-09-20 220716.png][S22]; [Screenshot 2026-09-20 220723.png][S23]. External checks, when used, are in the [academic register](academic-issues-gap-register.md).

<a id="d2-cd08"></a>
## D2-CD08 - Phishing vs spear phishing vs whaling

**ไทย:** ฟิชชิงทั่วไป vs เจาะจงเป้าหมาย vs มุ่งผู้บริหาร

**Status:** ACCEPTED; technical review draft; translation needs-human-review.

**English distinction:** Phishing is the broader deceptive-message technique; spear phishing specifies a target; whaling specifies a high-profile target.

**คำอธิบายไทย:** ฟิชชิงเป็นวิธีหลอกด้วยข้อความ Spear phishing เน้นเลือกเป้าหมาย และ whaling เน้นบุคคลสำคัญหรือผู้บริหาร

**Boundary:** Targeting and channel can overlap; a sender pretending to be CEO does not alone prove whaling.

**ข้อจำกัด:** การเลือกเป้าหมายกับช่องทางทับซ้อนกันได้ ผู้ส่งแอบอ้าง CEO ไม่ทำให้ทุกกรณีเป็น whaling

**Canonical concepts:** [KNOW-D2-033](knowledge-map.md#know-d2-033), [KNOW-D2-034](knowledge-map.md#know-d2-034), [KNOW-D2-035](knowledge-map.md#know-d2-035).

**Evidence:** [T:L83-L87][T]; [Screenshot 2026-09-20 221341.png][S25]. External checks, when used, are in the [academic register](academic-issues-gap-register.md).

<a id="d2-cd09"></a>
## D2-CD09 - Vishing / smishing vs pretexting

**ไทย:** ช่องทางเสียงหรือ SMS vs วิธีสร้างเรื่องอ้าง

**Status:** ACCEPTED; technical review draft; translation needs-human-review.

**English distinction:** Vishing and smishing identify voice and text delivery; pretexting describes the fabricated justification.

**คำอธิบายไทย:** Vishing และ smishing แยกตามเสียงกับข้อความ ส่วน pretexting แยกตามวิธีสร้างเรื่องหรือเหตุอ้างเท็จ

**Boundary:** One interaction can involve both a channel label and a pretext; do not force exclusive categories.

**ข้อจำกัด:** เหตุเดียวอาจมีทั้งป้ายช่องทางและเรื่องอ้าง ไม่จำเป็นต้องเลือกเพียงประเภทเดียว

**Canonical concepts:** [KNOW-D2-036](knowledge-map.md#know-d2-036), [KNOW-D2-037](knowledge-map.md#know-d2-037), [KNOW-D2-038](knowledge-map.md#know-d2-038).

**Evidence:** [T:L87-L89][T]; [Screenshot 2026-09-20 221341.png][S25]; [Screenshot 2026-09-20 221932.png][S26]. External checks, when used, are in the [academic register](academic-issues-gap-register.md).

<a id="d2-cd10"></a>
## D2-CD10 - KPI vs KRI

**ไทย:** ตัวชี้วัดผลงาน vs ตัวชี้วัดความเสี่ยง

**Status:** NEEDS_REVIEW; technical review draft; translation needs-human-review.

**English distinction:** The source contrasts progress toward an objective with signals of risk. Data can support more than one decision purpose.

**คำอธิบายไทย:** ผู้สอนแยกความก้าวหน้าต่อเป้าหมายออกจากสัญญาณความเสี่ยง แต่ข้อมูลชุดเดียวอาจใช้ประกอบการตัดสินใจมากกว่าหนึ่งแบบ

**Boundary:** Basic purpose distinction is supported; rising phishing reports do not determine risk direction on their own; D2-Q07.

**ข้อจำกัด:** หลักการแยกจุดมุ่งหมายมีหลักฐาน แต่จำนวนรายงานฟิชชิงเพิ่มไม่สรุปทิศทางความเสี่ยงได้เอง

**Canonical concepts:** [KNOW-D2-049](knowledge-map.md#know-d2-049), [KNOW-D2-050](knowledge-map.md#know-d2-050).

**Evidence:** [T:L101-L105][T]; [Screenshot 2026-09-20 222928.png][S32]; [Screenshot 2026-09-20 223200.png][S33]. External checks, when used, are in the [academic register](academic-issues-gap-register.md).

<a id="d2-cd11"></a>
## D2-CD11 - Dashboard vs scorecard vs report

**ไทย:** แดชบอร์ด vs สกอร์การ์ด vs รายงาน

**Status:** ACCEPTED; technical review draft; translation needs-human-review.

**English distinction:** Dashboard emphasizes visualization, scorecard target/actual comparison, and report detailed communication.

**คำอธิบายไทย:** แดชบอร์ดเน้นการแสดงภาพ สกอร์การ์ดเน้นเทียบเป้าหมายกับค่าจริง และรายงานเน้นสื่อสารรายละเอียด

**Boundary:** These are functions with overlap; no requirement for mutually exclusive tools or file formats.

**ข้อจำกัด:** เป็นหน้าที่ที่ทับซ้อนกันได้ ไม่ใช่ข้อกำหนดให้แยกเครื่องมือหรือรูปแบบไฟล์ตายตัว

**Canonical concepts:** [KNOW-D2-051](knowledge-map.md#know-d2-051), [KNOW-D2-052](knowledge-map.md#know-d2-052), [KNOW-D2-053](knowledge-map.md#know-d2-053).

**Evidence:** [T:L105-L115][T]; [Screenshot 2026-09-20 223320.png][S34]; [Screenshot 2026-09-20 223458.png][S35]; [Screenshot 2026-09-20 223741.png][S37]; [Screenshot 2026-09-20 223751.png][S38]. External checks, when used, are in the [academic register](academic-issues-gap-register.md).

<a id="d2-cd12"></a>
## D2-CD12 - MTTD vs MTTR

**ไทย:** เวลาเฉลี่ยตรวจพบ vs เวลาเฉลี่ยตอบสนอง

**Status:** NEEDS_REVIEW; technical review draft; translation needs-human-review.

**English distinction:** MTTD is labeled mean time to detect; this course labels MTTR mean time to respond.

**คำอธิบายไทย:** MTTD ในภาพคือเวลาเฉลี่ยตรวจพบ ส่วน MTTR ในบทเรียนนี้คือเวลาเฉลี่ยตอบสนอง

**Boundary:** Meaning labels corroborated; endpoints, inclusion criteria, averaging and alternate MTTR expansions are not resolved; D2-Q07.

**ข้อจำกัด:** ยืนยันชื่อในภาพได้ แต่จุดเริ่มสิ้นสุด เกณฑ์เลือกเหตุ และวิธีเฉลี่ยยังไม่กำหนด

**Canonical concepts:** [KNOW-D2-044](knowledge-map.md#know-d2-044), [KNOW-D2-045](knowledge-map.md#know-d2-045).

**Evidence:** [T:L97-L101][T]; [Screenshot 2026-09-20 222340.png][S30]; [Screenshot 2026-09-20 222628.png][S31]. External checks, when used, are in the [academic register](academic-issues-gap-register.md).

<a id="d2-cd13"></a>
## D2-CD13 - Training completion vs security effectiveness

**ไทย:** การเรียนครบ vs ประสิทธิผลด้านความปลอดภัย

**Status:** ACCEPTED; technical review draft; translation needs-human-review.

**English distinction:** A completion percentage measures participation/implementation. It does not alone demonstrate changed behavior or reduced risk; R-MEAS supplies external measurement taxonomy.

**คำอธิบายไทย:** ร้อยละการเรียนครบวัดการเข้าร่วมหรือการดำเนินการ ไม่พิสูจน์พฤติกรรมดีขึ้นหรือความเสี่ยงลดลงด้วยตัวมันเอง R-MEAS ช่วยยืนยันการแยกประเภทการวัด

**Boundary:** External clarification is separate from the course's metric example; no new behavior-test dataset is invented.

**ข้อจำกัด:** คำชี้แจงภายนอกแยกจากตัวอย่างผู้สอน และไม่มีการสร้างชุดข้อมูลทดสอบพฤติกรรม

**Canonical concepts:** [KNOW-D2-042](knowledge-map.md#know-d2-042), [KNOW-D2-048](knowledge-map.md#know-d2-048).

**Evidence:** [T:L93-L109][T]; [Screenshot 2026-09-20 222320.png][S29]; [Screenshot 2026-09-20 222628.png][S31]; [Screenshot 2026-09-20 223508.png][S36]. External checks, when used, are in the [academic register](academic-issues-gap-register.md).

<a id="d2-cd14"></a>
## D2-CD14 - Count vs percentage vs percentage-point difference

**ไทย:** จำนวน vs ร้อยละ vs ผลต่างหน่วยจุดร้อยละ

**Status:** NEEDS_REVIEW; technical review draft; translation needs-human-review.

**English distinction:** Counts and percentages need different units/denominators. The vulnerability row lacks a verified unit; the other scorecard rows explicitly use percentages.

**คำอธิบายไทย:** จำนวนกับร้อยละต้องใช้หน่วยและฐานคำนวณต่างกัน แถวช่องโหว่ยังไม่ยืนยันหน่วย ส่วนแถวอื่นระบุร้อยละชัดเจน

**Boundary:** Do not reinterpret <10 as <10%, or treat a percentage-point gap as relative percent change; D2-Q03.

**ข้อจำกัด:** ห้ามเปลี่ยนหน่วยเอง และต้องแยกผลต่างจุดร้อยละออกจากการเปลี่ยนแปลงร้อยละเชิงสัมพัทธ์

**Canonical concepts:** [KNOW-D2-047](knowledge-map.md#know-d2-047), [KNOW-D2-048](knowledge-map.md#know-d2-048), [KNOW-D2-054](knowledge-map.md#know-d2-054).

**Evidence:** [T:L109-L111][T]; [Screenshot 2026-09-20 223508.png][S36]. External checks, when used, are in the [academic register](academic-issues-gap-register.md).



## Reference links

[T]: ../../../../../ISC2%20Update%202026/Domain%202/DOMAIN%202.txt
[S01]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20175516.png
[S02]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20175642.png
[S03]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20175700.png
[S04]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20180122.png
[S05]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20180128.png
[S06]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20180141.png
[S07]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20180209.png
[S08]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20181135.png
[S09]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20181653.png
[S10]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20181722.png
[S11]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20182047.png
[S12]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20182544.png
[S13]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20182609.png
[S14]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20182614.png
[S15]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20183108.png
[S16]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20183111.png
[S17]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20183349.png
[S18]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20183410.png
[S19]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20183921.png
[S21]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20220429.png
[S22]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20220716.png
[S23]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20220723.png
[S24]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20220952.png
[S25]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20221341.png
[S26]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20221932.png
[S27]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20221941.png
[S28]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20222037.png
[S29]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20222320.png
[S30]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20222340.png
[S31]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20222628.png
[S32]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20222928.png
[S33]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20223200.png
[S34]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20223320.png
[S35]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20223458.png
[S36]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20223508.png
[S37]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20223741.png
[S38]: ../../../../../ISC2%20Update%202026/Domain%202/Screenshot%202026-09-20%20223751.png
[R-OUTLINE]: https://www.isc2.org/certifications/cc/cc-certification-exam-outline
[R-SCALE]: https://csrc.nist.gov/Projects/measurements-for-information-security/terminology
[R-DR]: https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf
[R-HHS]: https://www.hhs.gov/hipaa/for-professionals/security/guidance/cybersecurity/ransomware-fact-sheet/index.html
[R-PHI]: https://www.hhs.gov/answers/hipaa/what-is-phi/index.html
[R-EDPB]: https://www.edpb.europa.eu/sme/be-compliant/secure-personal-data_en
[R-CSF]: https://www.nist.gov/cyberframework/faqs
[R-ISO]: https://www.iso.org/standard/27001
[R-COBIT]: https://www.isaca.org/resources/cobit
[R-SOCIAL]: https://www.cyber.gc.ca/en/guidance/social-engineering-itsap00166
[R-AUTH]: https://pages.nist.gov/800-63-4/sp800-63b.html
[R-MEAS]: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-55v1.pdf
[R-CISO]: https://csrc.nist.gov/glossary/term/ciso
[R-CFO]: https://www.energy.gov/cfo/articles/ocfo-organization
[R-GDPR]: https://commission.europa.eu/law/law-topic/data-protection/legal-framework-eu-data-protection_en
[R-ERP]: https://www.oracle.com/erp/what-is-erp/

