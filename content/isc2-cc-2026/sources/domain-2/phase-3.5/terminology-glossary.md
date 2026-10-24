---
id: d2-phase3-5-terminology-glossary
domain_id: 2
domain_name: Security Governance
phase: 3.5
document_role: terminology-glossary-candidate
review_status: completed
translation_review_status: needs-human-review
prepared_date: 2026-10-23
source_reference: "D2-T01, D2-S01..D2-S38, and Phase 3 QA Reports"
total_glossary_records: 73
term_pass_count: 56
term_revalidated_candidate_count: 9
term_blocked_count: 5
term_deferred_count: 3
---

# Domain 2 — Terminology Glossary (Phase 3.5 Candidate)

## 1. Executive Summary & Governance Ledger

This glossary establishes the revalidated candidate terminology baseline across all **73 glossary entries** for **Domain 2: Security Governance (17.3%)**.

### Structural Tiers:
1. **Core Concept Terms (`D2-G001` through `D2-G051`)**: 51 terms tied directly to canonical concepts (`KNOW-D2-001` through `KNOW-D2-053`).
2. **Supporting Acronyms & Labels (`D2-G052` through `D2-G068`)**: 17 terms reflecting roles, technologies, frameworks, and legal instruments cited in course materials.
3. **Supplemental / Boundary Terms (`D2-G069` through `D2-G073`)**: 5 terms addressing modern measurement taxonomy and official 2026 AI context absent from primary course instruction.

---

## 2. Complete Master Terminology Ledger (73 Records)

### A. Core Concept Terms (`D2-G001` – `D2-G051`)

| Term ID | English Term | Acronym / Full Form | Revalidated English Definition & Boundaries | Approved Standard Thai Translation | Revalidated Status | Canonical ID & Evidence |
| :---: | :--- | :--- | :--- | :--- | :---: | :--- |
| `D2-G001` | Integrated GRC | GRC: Governance, Risk, and Compliance | GRC coordinates governance, risk and compliance so cybersecurity decisions support business objectives and applicable obligations. | GRC เชื่อมการกำกับดูแล การบริหารความเสี่ยง และการปฏิบัติตามข้อกำหนด เพื่อให้การตัดสินใจด้านความปลอดภัยสนับสนุนเป้าหมายธุรกิจ | **TERM_PASS** | `KNOW-D2-001`; T:L7-L13; S01, S02 |
| `D2-G002` | Governance | -: Not an acronym | Governance supplies direction, oversight and accountability for security decisions, establishing how security supports organizational goals. | การกำกับดูแลกำหนดทิศทาง กำกับติดตาม และสร้างความรับผิดชอบต่อการตัดสินใจด้านความปลอดภัย | **TERM_PASS** | `KNOW-D2-002`; T:L11-L13; S02 |
| `D2-G003` | Risk management | -: Not an acronym | Identifies and manages risks that could affect organizational objectives or assets, informing security priorities and treatment choices. | การบริหารความเสี่ยงระบุและจัดการความเสี่ยงที่อาจกระทบเป้าหมายหรือทรัพย์สิน เพื่อจัดลำดับความสำคัญและเลือกวิธีจัดการ | **TERM_PASS** | `KNOW-D2-003`; T:L11-L17; S02, S06 |
| `D2-G004` | Compliance | -: Not an acronym | Assesses and adheres to applicable requirements depending on industry, jurisdiction, and contractual relationships. | การปฏิบัติตามข้อกำหนดที่ใช้กับองค์กร ทั้งกฎหมาย กฎระเบียบ มาตรฐาน และสัญญา | **TERM_PASS** | `KNOW-D2-004`; T:L11-L15; S02, S05 |
| `D2-G005` | NIST CSF | CSF: Cybersecurity Framework | Voluntary, risk-based guidance framework for managing cybersecurity risks. Distinct from enterprise GRC software. | กรอบการทำงานความมั่นคงปลอดภัยไซเบอร์ของ NIST (แนวทางตามฐานความเสี่ยงแบบสมัครใจ) | **TERM_PASS** | `KNOW-D2-006`; T:L19-L23; S07 |
| `D2-G006` | ISO/IEC 27001 | Numbered Standard | Internationally recognized certifiable standard specifying requirements for establishing and operating an ISMS. | มาตรฐานข้อกำหนดสากลสำหรับการจัดตั้งและดำเนินงานระบบจัดการความมั่นคงปลอดภัยสารสนเทศ (ISMS) | **TERM_PASS** | `KNOW-D2-007`; T:L19-L23; S07 |
| `D2-G007` | ISMS | Information Security Management System | Systematic management approach comprising policies, processes, and controls to protect sensitive information assets. | ระบบการจัดการความมั่นคงปลอดภัยสารสนเทศ | **TERM_PASS** | `KNOW-D2-008`; T:L21; S07 |
| `D2-G008` | COBIT | Brand Name / Framework | Enterprise IT governance framework aligning IT systems with business goals. Resolves transcript caption error 'coit'. | กรอบการทำงานการกำกับดูแลด้านไอทีระดับองค์กร (แก้ไขคำสะกดจากบทเรียนเสียง) | **TERM_PASS** | `KNOW-D2-009`; T:L21; S07 |
| `D2-G009` | GRC software | -: Not an acronym | Enterprise software platform automating policy tracking, compliance workflows, and audit evidence centralization. | ซอฟต์แวร์หรือแพลตฟอร์ม GRC สำหรับรวมศูนย์ข้อมูลความเสี่ยงและติดตามการปฏิบัติตามข้อกำหนด | **TERM_PASS** | `KNOW-D2-010`; T:L23-L25; S08 |
| `D2-G010` | Risk register | -: Not an acronym | Centralized repository logging identified risks, risk owners, assessment ratings, treatment strategies, and residual risk states. | ทะเบียนความเสี่ยง (เอกสารบันทึกรายการความเสี่ยง ผู้รับผิดชอบ และแผนจัดการ) | **TERM_PASS** | `KNOW-D2-011`; T:L25-L27; S09 |
| `D2-G011` | Risk ownership | -: Not an acronym | Designated business leader or operational role accountable for monitoring, evaluating, and managing a specific risk. | เจ้าของความเสี่ยง (บุคคลหรือบทบาทที่รับผิดชอบการติดตามและจัดการความเสี่ยงเฉพาะ) | **TERM_PASS** | `KNOW-D2-012`; T:L27-L31; S09, S10 |
| `D2-G012` | Risk treatment | -: Not an acronym | The four canonical options for addressing risk: Avoidance, Mitigation (Reduction), Transfer (Sharing), and Acceptance. | ทางเลือกในการจัดการความเสี่ยง (หลีกเลี่ยง, ลด/บรรเทา, ถ่ายโอน, ยอมรับ) | **TERM_PASS** | `KNOW-D2-013`; T:L29-L33; S09, S10 |
| `D2-G013` | Residual risk | -: Not an acronym | Risk remaining after security controls are applied. In operational systems, residual risk is rarely zero; however, targeted avoidance can eliminate specific risks. | ความเสี่ยงคงเหลือ (ความเสี่ยงที่ยังเหลืออยู่หลังจัดการ; ความเสี่ยงเฉพาะเจาะจงหมดไปได้ด้วยการหลีกเลี่ยง) | **REVALIDATED_CANDIDATE** | `KNOW-D2-014`; T:L29-L31; S09 |
| `D2-G014` | Risk rating scales | -: Not an acronym | Qualitative uses descriptive labels (Low/Med/High). Representative numeric scales (1–4) are **Semi-Quantitative** (NIST SP 800-30 Rev. 1), not quantitative. | มาตราส่วนระดับความเสี่ยง (สเกลตัวเลข 1-4 เป็นกึ่งเชิงปริมาณตาม NIST ไม่ใช่เชิงปริมาณ) | **REVALIDATED_CANDIDATE** | `KNOW-D2-015`; T:L27; S09 |
| `D2-G015` | Business Continuity | BC: Business Continuity | Strategic enterprise capability ensuring critical business operations continue during and after disruption. | ความต่อเนื่องทางธุรกิจ (ขีดความสามารถระดับองค์กรให้ธุรกิจดำเนินต่อได้) | **TERM_PASS** | `KNOW-D2-016`; T:L35-L43; S11, S12, S19 |
| `D2-G016` | BCP | Business Continuity Plan | Documented operational playbook detailing staff relocation, manual workarounds, and supplier redundancies. | แผนความต่อเนื่องทางธุรกิจ (คู่มือปฏิบัติการธุรกิจระหว่างเกิดการหยุดชะงัก) | **TERM_PASS** | `KNOW-D2-017`; T:L37-L43; S13, S14, S19 |
| `D2-G017` | Disaster Recovery | DR: Disaster Recovery | Technical discipline and process focused on restoring IT infrastructure, applications, network links, and digital data. | การกู้คืนระบบหลังภัยพิบัติ (การฟื้นฟูโครงสร้างพื้นฐานไอทีและข้อมูล) | **TERM_PASS** | `KNOW-D2-018`; T:L43-L49; S15, S16, S19 |
| `D2-G018` | DRP | Disaster Recovery Plan | Documented technical runbook detailing specific restore steps, backup cutovers, and server recovery procedures. | แผนกู้คืนระบบหลังภัยพิบัติ (คู่มือเทคนิคการกู้คืนระบบไอที) | **TERM_PASS** | `KNOW-D2-019`; T:L53-L71; S18, S19 |
| `D2-G019` | BIA | Business Impact Analysis | Systematic process identifying critical business functions, evaluating disruption impacts, and setting recovery priorities. | การวิเคราะห์ผลกระทบทางธุรกิจ (กระบวนการกำหนดระบบสำคัญและจัดลำดับการกู้คืน) | **TERM_PASS** | `KNOW-D2-020`; T:L71; S19 |
| `D2-G020` | RTO | Recovery Time Objective | Targeted maximum acceptable duration of system unavailability after a disruption. | วัตถุประสงค์ระยะเวลากู้คืน (เป้าหมายระยะเวลาสูงสุดที่ระบบหยุดทำงานได้) | **TERM_PASS** | `KNOW-D2-021`; T:L53-L55; S18, S19 |
| `D2-G021` | RPO | Recovery Point Objective | Targeted maximum acceptable data loss measured in time (point in time to which recovered data must be restored). | วัตถุประสงค์จุดกู้คืนข้อมูล (ปริมาณข้อมูลที่ยอมให้สูญเสียได้สูงสุดในหน่วยเวลา) | **TERM_PASS** | `KNOW-D2-022`; T:L55-L61; S18, S19 |
| `D2-G022` | Backup strategy | -: Not an acronym | Geographically separated or cloud copies mitigate localized disaster loss. Cloud/offsite is not an absolute guarantee; requires restore testing. | กลยุทธ์สำรองข้อมูล (การแยกสถานที่ช่วยลดความเสี่ยงภัยพิบัติ; ต้องทดสอบกู้คืนจริง ไม่ใช่รับรองไร้เงื่อนไข) | **REVALIDATED_CANDIDATE** | `KNOW-D2-023`; T:L61-L63; S18 |
| `D2-G023` | Hot site | -: Not an acronym | Fully configured alternate processing site with compatible hardware, power, cooling, network, and live replicated data (hours). | สถานที่กู้คืนแบบ Hot Site (พร้อมสลับระบบรวดเร็ว มีฮาร์ดแวร์และข้อมูลซิงค์สด) | **REVALIDATED_CANDIDATE** | `KNOW-D2-024`; T:L63-L65; S18 |
| `D2-G024` | Warm site | -: Not an acronym | Partially configured facility with utilities and select hardware; requires restoring recent backups before operations (hours to days). | สถานที่กู้คืนแบบ Warm Site (มีความพร้อมบางส่วน ต้องกู้ข้อมูลจากสำรองล่าสุด) | **REVALIDATED_CANDIDATE** | `KNOW-D2-025`; T:L65; S18 |
| `D2-G025` | Cold site | -: Not an acronym | Facility providing basic building infrastructure (space/power/HVAC/cabling) but **zero pre-installed computing hardware** (days to weeks). | สถานที่กู้คืนแบบ Cold Site (มีอาคาร ไฟฟ้า แอร์ สายสัญญาณ แต่ไม่มีฮาร์ดแวร์ติดตั้ง) | **REVALIDATED_CANDIDATE** | `KNOW-D2-026`; T:L65; S18 |
| `D2-G026` | DR testing | -: Not an acronym | Validating plans through functional walkthroughs and restore tests. Unverified backups provide no recovery assurance. | การทดสอบแผน DR และตรวจสอบการกู้คืน (แผนหรือข้อมูลสำรองที่ไม่ได้ทดสอบไม่มีหลักประกัน) | **TERM_PASS** | `KNOW-D2-027`; T:L65-L67; S18 |
| `D2-G027` | Security awareness | -: Not an acronym | Individual cognitive knowledge and recognition of security policies, social engineering threats, and safe behaviors. | ความตระหนักด้านความมั่นคงปลอดภัย (ความรู้ความเข้าใจของบุคคลต่อนโยบายและภัย) | **TERM_PASS** | `KNOW-D2-029`; T:L73-L75; S21 |
| `D2-G028` | Security culture | -: Not an acronym | Shared organizational values, social norms, and habitual day-to-day security practices embedded across all staff. | วัฒนธรรมด้านความมั่นคงปลอดภัย (ค่านิยมและพฤติกรรมประจำวันขององค์กร) | **TERM_PASS** | `KNOW-D2-030`; T:L75-L77; S22 |
| `D2-G029` | Security leadership | -: Not an acronym | Executive tone at the top, resource commitment, and visible personal modeling of security compliance. | ภาวะผู้นำด้านความมั่นคงปลอดภัย (การสนับสนุนงบประมาณและทำตัวเป็นแบบอย่าง) | **TERM_PASS** | `KNOW-D2-031`; T:L77-L81; S23 |
| `D2-G030` | Social engineering | -: Not an acronym | Psychological manipulation exploiting human cognitive biases (authority, urgency, fear) to trick individuals into disclosing sensitive data. | วิศวกรรมสังคม (การชักจูงหลอกลวงทางจิตวิทยาเพื่อล่อลวงข้อมูลหรือการกระทำที่เป็นอันตราย) | **TERM_PASS** | `KNOW-D2-032`; T:L81-L83; S24 |
| `D2-G031` | Phishing | -: Not an acronym | Broadcast deceptive communications distributed via email/web to large numbers of generic recipients. | ฟิชชิง (การหลอกลวงหว่านกระจายวงกว้างผ่านอีเมลหรือเว็บ) | **TERM_PASS** | `KNOW-D2-033`; T:L83-L87; S25 |
| `D2-G032` | Spear phishing | -: Not an acronym | Targeted, customized social engineering messages tailored to specific individuals or departments using researched context. | ฟิชชิงแบบเจาะจงเป้าหมาย (ใช้ข้อมูลสืบค้นเฉพาะบุคคลหรือกลุ่ม) | **TERM_PASS** | `KNOW-D2-034`; T:L83-L87; S25 |
| `D2-G033` | Whaling | -: Not an acronym | Specialized spear phishing directed exclusively against high-profile executives (CEOs, CFOs, Board Members). | ฟิชชิงที่มุ่งเป้าบุคคลระดับสูง (การเจาะจงผู้บริหารระดับสูง) | **TERM_PASS** | `KNOW-D2-035`; T:L85-L87; S25 |
| `D2-G034` | Vishing | Voice Phishing | Voice/telephone-based social engineering deception. Normalizes phonetic transcription errors. | ฟิชชิงผ่านเสียงหรือโทรศัพท์ (การหลอกลวงผ่านสายโทรศัพท์) | **TERM_PASS** | `KNOW-D2-036`; T:L87; S25 |
| `D2-G035` | Smishing | SMS Phishing | Text message/SMS-based social engineering deception manipulating victims to click malicious links. | ฟิชชิงผ่านข้อความ SMS | **TERM_PASS** | `KNOW-D2-037`; T:L87; S25 |
| `D2-G036` | Pretexting | -: Not an acronym | Fabricating an invented scenario, persona, or narrative mechanism to manipulate a victim into complying. | การสร้างเรื่องอ้างเพื่อหลอกลวง (การสร้างสถานการณ์สมมติหรือสวมรอย) | **TERM_PASS** | `KNOW-D2-038`; T:L89; S26 |
| `D2-G037` | Password hygiene | -: Not an acronym | Personal practices: long unique passwords, enterprise password managers, and adopting MFA. | สุขอนามัยด้านรหัสผ่าน (รหัสผ่านยาว ไม่ซ้ำ ใช้โปรแกรมจัดการรหัสผ่าน และใช้ MFA) | **TERM_PASS** | `KNOW-D2-039`; T:L89-L91; Transcript-only |
| `D2-G038` | Credential protection | -: Not an acronym | Enterprise technical controls protecting identity repositories, enforcing MFA, and monitoring login anomalies. | การปกป้องข้อมูลรับรองขององค์กร (การบังคับใช้ MFA และเฝ้าระวังการเข้าสู่ระบบ) | **TERM_PASS** | `KNOW-D2-040`; T:L91-L93; S27 |
| `D2-G039` | Reporting activity | -: Not an acronym | Employee duty to **recognize and report** suspicious activity immediately through official channels rather than investigate. | การสังเกตและรายงานกิจกรรมน่าสงสัย (หน้าที่พนักงานคือรายงาน ไม่ใช่สืบสวนเอง) | **TERM_PASS** | `KNOW-D2-041`; T:L73-L79; S21-S23 |
| `D2-G040` | Security measurement | -: Not an acronym | Evaluating security program performance and control efficacy against business objectives (NIST SP 800-55 Vol. 1). | การวัดผลความมั่นคงปลอดภัย (การประเมินผลงานตามเป้าหมายธุรกิจ) | **TERM_PASS** | `KNOW-D2-042`; T:L93-L95; S28, S29 |
| `D2-G041` | Security metric | -: Not an acronym | Quantifiable, consistently collectible value evaluating security process, control, or posture performance. | ตัวชี้วัดความปลอดภัย (ค่าที่วัดได้และเก็บซ้ำได้เพื่อประเมินสถานะความปลอดภัย) | **TERM_PASS** | `KNOW-D2-043`; T:L95-L99; S30 |
| `D2-G042` | MTTD | Mean Time to Detect | Average elapsed time from intrusion initiation until formal detection/alert. Requires operational event boundaries. | เวลาเฉลี่ยในการตรวจพบ (ระยะเวลาเฉลี่ยตั้งแต่เริ่มถูกบุกรุกจนถึงการตรวจพบ) | **REVALIDATED_CANDIDATE** | `KNOW-D2-044`; T:L97-L99; S30 |
| `D2-G043` | MTTR (source) | Mean Time to Respond | Local course definition ('Respond'). Standard industry engineering also defines MTTR as Repair/Recover/Remediate. | เวลาเฉลี่ยในการตอบสนองตามบทเรียน (มีหลายความหมายในอุตสาหกรรม ต้องระบุบริบท) | **REVALIDATED_CANDIDATE** | `KNOW-D2-045`; T:L97-L101; S30, S31 |
| `D2-G044` | Remediation metric | -: Not an acronym | Percentage of critical vulnerabilities remediated within an established service-level agreement (e.g., 15 days). | ตัวชี้วัดผลงานการแก้ไขช่องโหว่ (ร้อยละช่องโหว่ร้ายแรงที่แก้ไขตามกำหนดเวลา) | **TERM_PASS** | `KNOW-D2-046`; T:L99-L103; S31, S33 |
| `D2-G045` | Patch compliance | -: Not an acronym | Percentage of enterprise systems meeting patch baseline policies (target 95%, actual 91%). Denominator is total systems. | ตัวชี้วัดความสอดคล้องตามข้อกำหนดแพตช์ (ร้อยละของระบบที่เป็นไปตามนโยบาย) | **TERM_PASS** | `KNOW-D2-047`; T:L99-L109; S31, S36 |
| `D2-G046` | Training completion | -: Not an acronym | Percentage of employees completing awareness training. Measures participation/compliance, not behavioral effectiveness. | ตัวชี้วัดการเรียนรู้ครบตามกำหนด (วัดการเข้าร่วม ไม่ได้รับรองการต้านทานการโจมตี) | **TERM_PASS** | `KNOW-D2-048`; T:L99-L109; S31, S36 |
| `D2-G047` | KRI | Key Risk Indicator | Leading indicator of increasing risk exposure. Increasing phishing reports carries dual-interpretation caveat. | ตัวชี้วัดความเสี่ยงหลัก (สัญญาณเตือนความเสี่ยง; การรายงานฟิชชิงเพิ่มขึ้นตีความได้สองด้าน) | **REVALIDATED_CANDIDATE** | `KNOW-D2-049`; T:L101-L105; S32, S33 |
| `D2-G048` | KPI | Key Performance Indicator | Metric evaluating progress toward operational security objectives and SLA efficiency. | ตัวชี้วัดผลการดำเนินงานหลัก (วัดความก้าวหน้าตามเป้าหมายการดำเนินงาน) | **TERM_PASS** | `KNOW-D2-050`; T:L103-L105; S33 |
| `D2-G049` | Dashboard | -: Not an acronym | Dynamic visual graphical presentation interface for real-time monitoring of metrics, alerts, and operational health. | แดชบอร์ดความปลอดภัย (การแสดงผลภาพแบบเรียลไทม์เพื่อเฝ้าระวังการปฏิบัติงาน) | **TERM_PASS** | `KNOW-D2-051`; T:L105-L107; S34 |
| `D2-G050` | Scorecard | -: Not an acronym | Structured table comparing actual measured values against predetermined targets. Row 4 unit conflict is quarantined (`D2-Q03`). | สกอร์การ์ดความปลอดภัย (ตารางเทียบค่าจริงกับเป้าหมาย; แถวช่องโหว่ถูกระงับเนื่องจากขัดแย้งหน่วย) | **TERM_PASS** | `KNOW-D2-052`; T:L107-L111; S35, S36 |
| `D2-G051` | Cybersecurity report | -: Not an acronym | Formal documented communication presenting risk postures, audit findings, and strategic recommendations to leadership. | รายงานความมั่นคงปลอดภัยไซเบอร์ (เอกสารทางการสื่อสารรายละเอียดเชิงกลยุทธ์) | **TERM_PASS** | `KNOW-D2-053`; T:L111-L115; S37, S38 |

---

### B. Supporting Acronyms & Operational Labels (`D2-G052` – `D2-G068`)

| Term ID | Acronym / Label | Full Form Expansion | Revalidated Scope & Academic Notes | Approved Standard Thai Translation | Revalidated Status | Canonical Evidence |
| :---: | :--- | :--- | :--- | :--- | :---: | :--- |
| `D2-G052` | NIST | National Institute of Standards and Technology | US federal standards agency publishing CSF, SP 800-30, SP 800-34, SP 800-55. | สถาบันมาตรฐานและเทคโนโลยีแห่งชาติสหรัฐฯ | **TERM_PASS** | Slide S07 |
| `D2-G053` | EDR | Endpoint Detection and Response | Advanced host security software cited in ransomware mitigation example. | ระบบตรวจจับและตอบสนองภัยคุกคามที่อุปกรณ์ปลายทาง | **TERM_PASS** | Slide S09, S10 |
| `D2-G054` | MFA | Multifactor Authentication | Authentication requiring 2+ distinct factors (knowledge, possession, inherence). | การยืนยันตัวตนแบบหลายปัจจัย | **TERM_PASS** | Slide S10, S36 |
| `D2-G055` | SMS | Short Message Service | Cellular text messaging protocol underpinning smishing attacks. | บริการส่งข้อความสั้นทางโทรศัพท์มือถือ | **TERM_PASS** | Slide S25 |
| `D2-G056` | CEO | Chief Executive Officer | Senior executive role cited in leadership modeling and whaling targets. | ประธานเจ้าหน้าที่บริหาร | **TERM_PASS** | Slide S23, S25 |
| `D2-G057` | CFO | Chief Financial Officer | Senior finance executive cited in financial authorization and whaling targets. | ประธานเจ้าหน้าที่ฝ่ายการเงิน | **TERM_PASS** | Slide S25 |
| `D2-G058` | CISO | Chief Information Security Officer | Executive accountable for security program. Resolves transcript typo 'CESO'. | ประธานเจ้าหน้าที่ฝ่ายความมั่นคงปลอดภัยสารสนเทศ | **TERM_PASS** | Slide S25 |
| `D2-G059` | ERP | Enterprise Resource Planning | Enterprise software suite cited in illustrative 1-hour RTO scenario. | ระบบวางแผนทรัพยากรองค์กร | **TERM_PASS** | Slide S18 |
| `D2-G060` | DB | Database | Shorthand in handwritten recovery timeline (Slide S18). | ฐานข้อมูล | **TERM_PASS** | Slide S18 |
| `D2-G061` | GDPR | General Data Protection Regulation | European Union data privacy regulation (Regulation (EU) 2016/679). | กฎหมายคุ้มครองข้อมูลส่วนบุคคลของสหภาพยุโรป | **TERM_PASS** | Slide S05, S17 |
| `D2-G062` | HIPAA | Health Insurance Portability and Accountability Act | US healthcare privacy and security law (Pub.L. 104-191). Resolves typo 'HIPPA'. | กฎหมายการส่งผ่านและความรับผิดชอบด้านการประกันสุขภาพของสหรัฐฯ | **TERM_PASS** | Slide S05, S17 |
| `D2-G063` | PII | Personally Identifiable Information | Any information that can be used to distinguish or trace an individual's identity. | ข้อมูลระบุตัวตนบุคคล | **TERM_PASS** | Slide S17 |
| `D2-G064` | PHI | **Protected Health Information** | Statutory HIPAA term (45 CFR § 160.103). Corrects transcript 'personal health info'. | ข้อมูลสุขภาพที่ได้รับความคุ้มครอง (ตามกฎหมาย HIPAA) | **TERM_PASS** | Slide S17 |
| `D2-G065` | PCI DSS | Payment Card Industry Data Security Standard | Diagram-only logo in Slide S07; no instruction provided in intake batch. | มาตรฐานความปลอดภัยข้อมูลอุตสาหกรรมบัตรชำระเงิน | **TERM_DEFERRED** | Slide S07 diagram |
| `D2-G066` | CMMC | Cybersecurity Maturity Model Certification | Diagram-only logo in Slide S07; no instruction provided in intake batch. | การรับรองวุฒิภาวะความมั่นคงปลอดภัยไซเบอร์ (กลาโหมสหรัฐฯ) | **TERM_DEFERRED** | Slide S07 diagram |
| `D2-G067` | SOX | Sarbanes-Oxley Act | Left-clipped diagram label in Slide S07; no instruction provided in intake batch. | กฎหมายความรับผิดชอบของบริษัทมหาชนสหรัฐฯ | **TERM_DEFERRED** | Slide S07 diagram |
| `D2-G068` | Risk appetite | -: Not an acronym | Amount and type of risk an organization is willing to pursue, retain, or accept. | ระดับความเสี่ยงที่องค์กรยอมรับได้ | **TERM_PASS** | T:L31-L33; S10 |

---

### C. Supplemental / Gap Records (`D2-G069` – `D2-G073`)

| Term ID | English Term | Expansion / Role | Revalidated Scope & Quarantine Notes | Approved Standard Thai Translation | Revalidated Status | Mapping & Gap Reference |
| :---: | :--- | :--- | :--- | :--- | :---: | :--- |
| `D2-G069` | Semi-quantitative assessment | Representative-number scoring | Ordinal scale scoring (NIST SP 800-30 Rev. 1). Preserved as external taxonomy note; blocked from course bank. | การประเมินกึ่งเชิงปริมาณ (สเกลคะแนนแทนระดับ) | **TERM_BLOCKED** | `D2-Q06`; NIST SP 800-30 |
| `D2-G070` | MTD | Maximum Tolerable Downtime | Overarching outage limit before irreparable business harm (NIST SP 800-34). Blocked from course bank. | ระยะเวลาการหยุดทำงานสูงสุดที่ทนได้ | **TERM_BLOCKED** | `D2-Q05`; NIST SP 800-34 |
| `D2-G071` | AI | Artificial Intelligence | Official 2026 outline context; course lacks instruction; blocked from primary course bank. | ปัญญาประดิษฐ์ (ขอบเขต 2026; ไม่มีในบทเรียน) | **TERM_BLOCKED** | `D2-GAP01`–`05`; 2026 Outline |
| `D2-G072` | Model drift | Degradation of AI predictive ability | Official 2026 AI continuity risk; absent from course; blocked from primary course bank. | การเบี่ยงเบนของโมเดลเอไอ (ความเสี่ยงความต่อเนื่อง) | **TERM_BLOCKED** | `D2-GAP03`; 2026 Outline |
| `D2-G073` | AI-specific KRI | Leading indicator for AI model risk | Official 2026 AI measurement; absent from course; blocked from primary course bank. | ตัวชี้วัดความเสี่ยงหลักสำหรับเอไอ | **TERM_BLOCKED** | `D2-GAP04`; 2026 Outline |
