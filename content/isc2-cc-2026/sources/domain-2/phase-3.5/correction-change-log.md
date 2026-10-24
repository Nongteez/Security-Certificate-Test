---
id: d2-phase3-5-correction-change-log
domain_id: 2
domain_name: Security Governance
phase: 3.5
document_role: correction-audit-change-log
review_status: completed
translation_review_status: needs-human-review
prepared_date: 2026-10-23
source_reference: "Phase 3 QA Reports (content/isc2-cc-2026/sources/domain-2/notes/phase-3/)"
total_knowledge_corrections: 9
total_blocked_quarantines: 2
total_glossary_corrections: 10
total_distinction_corrections: 5
total_language_corrections: 2
---

# Domain 2 — Phase 3.5 Correction Change Log & Audit Ledger

## 1. Executive Overview & Governance Rationale

This document establishes a complete, line-by-line audit ledger of all technical, academic, and bilingual corrections applied during **Phase 3.5: Knowledge Correction, Revalidation & Approval Preparation** for **ISC2 Certified in Cybersecurity (CC) — Domain 2: Security Governance (17.3%)**.

In Phase 3, an exhaustive academic quality assurance review identified:
- **9 Canonical Knowledge entries** requiring technical bounded revision (`KNOW-D2-014`, `015`, `023`, `024`, `025`, `026`, `044`, `045`, `049`).
- **2 Canonical Knowledge entries** containing irreconcilable statutory or data unit conflicts requiring formal quarantine (`KNOW-D2-028`, `KNOW-D2-054`).
- **10 Terminology Glossary entries** requiring definition boundary adjustments or acronym normalization (`D2-G013`, `014`, `022`, `023`, `024`, `025`, `042`, `043`, `047`, and `D2-G064`).
- **5 Concept Distinction comparisons** requiring clarified standard taxonomy (`D2-CD03`, `06`, `10`, `12`, `14`).
- **2 Exam Language Guide entries** requiring mnemonic cautions and scorecard caveats (`D2-EL04`, `06`).

To uphold academic integrity and ensure full audit traceability, **no Phase 2 extracted-knowledge files or Phase 3 QA reports were overwritten or modified**. All corrected entries are recorded herein with exact before-and-after text, supporting evidence citations, QA disposition changes, and remaining human-review flags.

---

## 2. Canonical Knowledge Entries Correction Ledger (9 Revised + 2 Blocked)

### 1. KNOW-D2-014: Residual risk and zero-risk wording
- **Canonical ID:** `KNOW-D2-014`
- **Objective Mapping:** 2.1 (Understand the security governance process)
- **Phase 3 Decision:** `QA_REVISION_REQUIRED`
- **Phase 3.5 Revalidated Decision:** `REVALIDATED_CANDIDATE` (Technical: `ai-revalidated`; Translation: `needs-human-review`)
- **Original Phase 2 Statement:**
  > "Residual risk is the remaining risk considered after treatment. The transcript also says risk cannot be reduced to zero after mitigation or treatment. That absolute wording extends beyond the evidence supplied and is retained for review."
  > *(TH: ความเสี่ยงคงเหลือคือความเสี่ยงที่พิจารณาหลังดำเนินการจัดการแล้ว Transcript ยังกล่าวกว้างว่าความเสี่ยงไม่อาจเป็นศูนย์หลังการจัดการ ข้อความเด็ดขาดนี้เกินขอบเขตหลักฐานที่มีและยังต้องตรวจสอบ)*
- **Corrected Phase 3.5 Statement:**
  > "Residual risk is the risk that remains after security controls and treatment measures are applied. In ongoing operational systems, residual risk is rarely reduced to zero because vulnerabilities and emerging threats persist; however, the lecture's absolute assertion that 'risk can never be zero after any treatment' is technically overbroad: specific, targeted risks CAN be completely eliminated through genuine Risk Avoidance (e.g., completely decommissioning an insecure legacy system or divesting a high-risk service)."
  > *(TH: ความเสี่ยงคงเหลือคือความเสี่ยงที่ยังคงอยู่หลังนำมาตรการจัดการความเสี่ยงไปปฏิบัติ ในระบบที่ดำเนินงานตามปกติ ความเสี่ยงคงเหลือแทบไม่เคยลดลงเป็นศูนย์เนื่องจากช่องโหว่และภัยคุกคามใหม่ๆ ยังคงเกิดขึ้น อย่างไรก็ดี ข้อความเด็ดขาดของผู้สอนที่ว่า 'ความเสี่ยงไม่อาจเป็นศูนย์ได้เลยหลังการจัดการทุกกรณี' ถือว่ากว้างเกินจริงในทางวิชาการ: ความเสี่ยงเฉพาะเจาะจงบางประการสามารถกำจัดให้หมดไปเป็นศูนย์ได้จริงผ่านการหลีกเลี่ยงความเสี่ยง (Risk Avoidance) เช่น การปลดระวางและยกเลิกการใช้งานระบบล้าสมัยที่ไม่ปลอดภัยอย่างสิ้นเชิง หรือการยุติสายบริการที่มีความเสี่ยงสูง)*
- **Technical & Academic Rationale:** The transcript's sweeping claim that risk cannot be zero after *any* treatment contradicts standard risk management theory. While residual risk cannot be eliminated across an entire functioning organization, specific isolated risks are eliminated entirely when an organization chooses Risk Avoidance by discontinuing the risk-bearing activity.
- **Supporting Authoritative Evidence:** ISO 31000:2018 Section 6.5.2; NIST SP 800-30 Rev. 1 Section 3.1; ISC2 CC Exam Outline Domain 2.1.
- **Remaining Human-Review Requirements:** Confirm that the distinction between operational baseline risk and targeted risk avoidance is natural and pedagogically sound in Thai.

---

### 2. KNOW-D2-015: Risk rating scales
- **Canonical ID:** `KNOW-D2-015`
- **Objective Mapping:** 2.1 (Understand the security governance process)
- **Phase 3 Decision:** `QA_REVISION_REQUIRED`
- **Phase 3.5 Revalidated Decision:** `REVALIDATED_CANDIDATE` (Technical: `ai-revalidated`; Translation: `needs-human-review`)
- **Original Phase 2 Statement:**
  > "The lecture contrasts low/medium/high ratings with numbers 1-4 and calls the numerical example quantitative. The source does not define numerical units or proportional meaning. That classification is disputed rather than silently corrected."
  > *(TH: ผู้สอนเปรียบเทียบระดับต่ำ กลาง สูง กับคะแนน 1-4 แล้วเรียกตัวอย่างตัวเลขว่า quantitative แต่ไม่ได้กำหนดหน่วยหรือความหมายเชิงสัดส่วน จึงเก็บเป็นประเด็นต้องตรวจสอบ ไม่แก้คำของแหล่งข้อมูลโดยไม่บอก)*
- **Corrected Phase 3.5 Statement:**
  > "Risk rating scales categorize risks based on likelihood and impact. Qualitative scales use descriptive subjective categories (e.g., Low, Medium, High). Ordinal numeric scales (such as assigning 1 to Low and 4 to Critical) are classified academically as **Semi-Quantitative** (or qualitative with numeric representations) per NIST SP 800-30 Rev. 1 Section 3.1, because the numbers denote relative rank order without cardinal mathematical proportions or financial units. True **Quantitative** risk assessment requires mathematical modeling using empirical units, such as monetary loss (Single Loss Expectancy [SLE], Annualized Loss Expectancy [ALE]) or measured failure frequencies (Annualized Rate of Occurrence [ARO])."
  > *(TH: มาตราส่วนระดับความเสี่ยงจัดกลุ่มความเสี่ยงตามโอกาสเกิดและผลกระทบ การประเมินเชิงคุณภาพใช้ระดับบรรยาย (เช่น ต่ำ, ปานกลาง, สูง) ส่วนสเกลตัวเลขตามลำดับ (เช่น กำหนด 1 สำหรับระดับต่ำ และ 4 สำหรับระดับวิกฤต) ตามมาตรฐานวิชาการ NIST SP 800-30 Rev. 1 ข้อ 3.1 จัดเป็น **การประเมินกึ่งเชิงปริมาณ (Semi-Quantitative)** หรือเชิงคุณภาพที่ใช้ตัวเลขแทนระดับ เพราะตัวเลขแสดงเพียงลำดับความสำคัญเปรียบเทียบ โดยไม่มีสัดส่วนทางคณิตศาสตร์หรือหน่วยทางการเงิน การประเมินเชิงปริมาณที่แท้จริง (Quantitative) ต้องใช้การสร้างแบบจำลองทางคณิตศาสตร์ที่มีหน่วยวัดชัดเจน เช่น มูลค่าความเสียหายทางการเงิน (SLE, ALE) หรือความถี่ที่วัดได้จริง (ARO))*
- **Technical & Academic Rationale:** The course lecture asserted that substituting numbers (1–4) for labels converts qualitative analysis into quantitative analysis. In NIST SP 800-30 Rev. 1, numeric bins without mathematical units are defined strictly as semi-quantitative. Failing to correct this would teach students a serious methodological falsehood.
- **Supporting Authoritative Evidence:** NIST SP 800-30 Rev. 1 Section 3.1 and Appendix D; NIST CSRC Terminology.
- **Remaining Human-Review Requirements:** Validate Thai terminology for Semi-Quantitative ("การประเมินกึ่งเชิงปริมาณ").

---

### 3. KNOW-D2-023: Backup strategy and geographic recovery assumptions
- **Canonical ID:** `KNOW-D2-023`
- **Objective Mapping:** 2.2 (Understand business continuity and disaster recovery concepts)
- **Phase 3 Decision:** `QA_REVISION_REQUIRED`
- **Phase 3.5 Revalidated Decision:** `REVALIDATED_CANDIDATE` (Technical: `ai-revalidated`; Translation: `needs-human-review`)
- **Original Phase 2 Statement:**
  > "The course proposes off-site or cloud backups because one disaster may affect both primary systems and same-site backups. It also says cloud/alternate-site copies are safe and easily restored. Those broad guarantees are not supported by the supplied design evidence."
  > *(TH: บทเรียนเสนอการสำรองนอกสถานที่หรือบนคลาวด์ เพราะภัยเดียวอาจกระทบทั้งระบบหลักและสำเนาที่อยู่สถานที่เดียวกัน แต่คำกล่าวว่าปลอดภัยและกู้คืนง่ายยังไม่มีหลักฐานด้านการออกแบบรองรับ จึงต้องตรวจสอบ)*
- **Corrected Phase 3.5 Statement:**
  > "Backup strategies protect organizational data by maintaining duplicate copies of critical systems and databases at geographically separated offsite locations or cloud environments, mitigating the risk that a localized physical disaster (such as a fire, flood, or earthquake) destroys both primary production assets and on-site backups simultaneously. However, the lecture's claim that offsite and cloud copies are 'completely safe and easily restored' is an unsupported guarantee: cloud and remote restoration is subject to network bandwidth bottlenecks, transport latency, internet dependencies, and potential backup repository compromise. Geographic separation enhances resilience, but operational recoverability requires periodic, validated restore testing."
  > *(TH: กลยุทธ์การสำรองข้อมูลปกป้องข้อมูลองค์กรโดยจัดเก็บสำเนาของระบบสำคัญและฐานข้อมูลไว้ในสถานที่อื่นที่มีการแยกเชิงภูมิศาสตร์ (Offsite) หรือบนคลาวด์ เพื่อลดความเสี่ยงที่ภัยพิบัติทางกายภาพเฉพาะพื้นที่ (เช่น เพลิงไหม้ อุทกภัย หรือแผ่นดินไหว) จะทำลายทั้งระบบหลักและข้อมูลสำรองในสถานที่พร้อมกัน อย่างไรก็ดี ข้ออ้างในบทเรียนที่ว่าข้อมูลสำรองนอกสถานที่หรือบนคลาวด์ 'ปลอดภัยสมบูรณ์และกู้คืนได้ง่ายดายเสมอ' ถือเป็นหลักประกันที่เกินจริง: การกู้คืนข้อมูลระยะไกลและคลาวด์มีข้อจำกัดด้านแบนด์วิดท์เครือข่าย ความล่าช้าในการรับส่งข้อมูล การพึ่งพาอินเทอร์เน็ต และความเสี่ยงที่แหล่งเก็บข้อมูลสำรองจะถูกบุกรุก การแยกสถานที่ช่วยเพิ่มความพร้อมรับมือ แต่ความสามารถในการกู้คืนจริงต้องผ่านการทดสอบกู้คืน (Restore Testing) อย่างสม่ำเสมอ)*
- **Technical & Academic Rationale:** Strips absolute recovery guarantees and grounds offsite backup strategy in engineering realities (bandwidth, latency, credential attacks, and mandatory restore verification).
- **Supporting Authoritative Evidence:** NIST SP 800-34 Rev. 1 Section 3.2; ISO/IEC 27031:2011 Section 6.3.
- **Remaining Human-Review Requirements:** None. Technical bounds verified.

---

### 4. KNOW-D2-024: Hot recovery site
- **Canonical ID:** `KNOW-D2-024`
- **Objective Mapping:** 2.2 (Understand business continuity and disaster recovery concepts)
- **Phase 3 Decision:** `QA_REVISION_REQUIRED`
- **Phase 3.5 Revalidated Decision:** `REVALIDATED_CANDIDATE` (Technical: `ai-revalidated`; Translation: `needs-human-review`)
- **Original Phase 2 Statement:**
  > "S18 names hot sites; the transcript calls the site 'hard' and describes high readiness with systems/backups available. The spoken minutes-or-hours estimate is illustrative and cannot be accepted as a universal property."
  > *(TH: S18 ระบุ hot site แต่ transcript ใช้คำคลาดเคลื่อนว่า hard และอธิบายความพร้อมของระบบกับข้อมูลสำรองสูง ระยะเวลานาทีหรือชั่วโมงเป็นตัวอย่าง ไม่ใช่คุณสมบัติที่รับรองได้กับทุกสถานที่)*
- **Corrected Phase 3.5 Statement:**
  > "A Hot Site is a fully configured alternate operational processing facility equipped with compatible computer hardware, live environmental systems (power, HVAC), telecommunications connectivity, and current or near-real-time synchronized data replicas. The transcript caption error calling the facility a 'hard site' is formally normalized to 'Hot Site' based on visible slide S18 and standard literature. While designed for rapid operational cutover (typically hours), activation timing represents an operational target rather than an unconditional guarantee, as successful cutover depends on network routing convergence, DNS cutovers, and data integrity verification."
  > *(TH: Hot Site คือสถานที่ประมวลผลสำรองที่มีความพร้อมระดับสูง ติดตั้งฮาร์ดแวร์คอมพิวเตอร์ที่เข้ากันได้ ระบบควบคุมสภาพแวดล้อมที่พร้อมทำงาน (ไฟฟ้า, ระบบปรับอากาศ) การเชื่อมต่อโทรคมนาคม และมีข้อมูลสำเนาที่ซิงโครไนซ์แบบใกล้เคียงเวลาจริง คำบรรยายเสียงที่พิมพ์ผิดว่า 'hard site' ได้รับการแก้ไขให้ถูกต้องเป็น 'Hot Site' ตามสไลด์ S18 และมาตรฐานสากล ทั้งนี้ แม้ Hot Site จะออกแบบมาเพื่อการสลับระบบทำงานอย่างรวดเร็ว (โดยทั่วไปอยู่ในระดับเป็นชั่วโมง) แต่ระยะเวลาดังกล่าวเป็นเพียงเป้าหมายการดำเนินงาน ไม่ใช่หลักประกันแบบไร้เงื่อนไข เนื่องจากการสลับระบบสำเร็จต้องขึ้นอยู่กับการเปลี่ยนเส้นทางเครือข่าย การอัปเดต DNS และการตรวจสอบความสมบูรณ์ของข้อมูล)*
- **Technical & Academic Rationale:** Formally corrects the transcription typo "hard site" to "Hot Site" and bounds rapid activation (hours) to technical cutover realities per NIST SP 800-34 Rev. 1.
- **Supporting Authoritative Evidence:** Slide S18; NIST SP 800-34 Rev. 1 Section 3.4.3; ISO/IEC 27031.
- **Remaining Human-Review Requirements:** Confirm Thai phonetic rendering and technical clarity.

---

### 5. KNOW-D2-025: Warm recovery site
- **Canonical ID:** `KNOW-D2-025`
- **Objective Mapping:** 2.2 (Understand business continuity and disaster recovery concepts)
- **Phase 3 Decision:** `QA_REVISION_REQUIRED`
- **Phase 3.5 Revalidated Decision:** `REVALIDATED_CANDIDATE` (Technical: `ai-revalidated`; Translation: `needs-human-review`)
- **Original Phase 2 Statement:**
  > "The course names warm sites and suggests partial readiness, but its equipment description is grammatically incomplete. The supplied slide gives the label, not a detailed readiness specification."
  > *(TH: บทเรียนระบุ warm site และสื่อว่ามีความพร้อมบางส่วน แต่คำบรรยายอุปกรณ์ไม่สมบูรณ์ ภาพให้ชื่อประเภทแต่ไม่มีข้อกำหนดความพร้อมอย่างละเอียด)*
- **Corrected Phase 3.5 Statement:**
  > "A Warm Site is an alternate operational processing facility partially equipped with physical space, environmental utilities (power, HVAC), telecommunications connections, and select server hardware, but lacks real-time data synchronization. The grammatically fragmented transcript explanation is completed in accordance with NIST SP 800-34 Rev. 1: before operational activation can occur, recent backup media must be transported or restored across the network, and final software configurations, patching, and system validations must be executed (typical recovery activation spans hours to days)."
  > *(TH: Warm Site คือสถานที่ประมวลผลสำรองที่มีความพร้อมบางส่วน โดยมีพื้นที่ทางกายภาพ ระบบสาธารณูปโภค (ไฟฟ้า, แอร์) การเชื่อมต่อโทรคมนาคม และฮาร์ดแวร์เซิร์ฟเวอร์บางส่วน แต่ไม่มีการซิงโครไนซ์ข้อมูลแบบเรียลไทม์ คำอธิบายใน Transcript ที่มีไวยากรณ์ไม่สมบูรณ์ได้รับการเติมเต็มตามมาตรฐาน NIST SP 800-34 Rev. 1: ก่อนที่จะเริ่มเปิดใช้งานระบบได้ จะต้องนำสำเนาข้อมูลสำรองล่าสุดมากู้คืน ติดตั้งและปรับแต่งซอฟต์แวร์ขั้นสุดท้าย ลงแพตช์ และตรวจสอบระบบก่อนเริ่มให้บริการ (ระยะเวลาเปิดใช้งานทั่วไปอยู่ในช่วงเป็นชั่วโมงถึงหลายวัน))*
- **Technical & Academic Rationale:** Repairs fragmented transcript text by supplying the missing technical criteria from NIST SP 800-34 Rev. 1 (partially equipped facility requiring restoration of recent backups).
- **Supporting Authoritative Evidence:** NIST SP 800-34 Rev. 1 Section 3.4.3; Slide S18.
- **Remaining Human-Review Requirements:** None. Fully aligned with NIST standard.

---

### 6. KNOW-D2-026: Cold recovery site
- **Canonical ID:** `KNOW-D2-026`
- **Objective Mapping:** 2.2 (Understand business continuity and disaster recovery concepts)
- **Phase 3 Decision:** `QA_REVISION_REQUIRED`
- **Phase 3.5 Revalidated Decision:** `REVALIDATED_CANDIDATE` (Technical: `ai-revalidated`; Translation: `needs-human-review`)
- **Original Phase 2 Statement:**
  > "The transcript describes cold sites as having no infrastructure and taking days to weeks. S18 only lists the category. The no-infrastructure assertion conflicts with the basic-facility infrastructure described by NIST."
  > *(TH: Transcript อธิบาย cold site ว่าไม่มีโครงสร้างพื้นฐานและใช้เวลาหลายวันถึงหลายสัปดาห์ ขณะที่ S18 ระบุเพียงชื่อประเภท ข้อกล่าวว่าไม่มีโครงสร้างพื้นฐานขัดกับคำอธิบาย NIST ที่มีโครงสร้างพื้นฐานของสถานที่บางส่วน)*
- **Corrected Phase 3.5 Statement:**
  > "A Cold Site is an alternate recovery facility that provides essential physical infrastructure—including building space, electrical power, heating/ventilation/air conditioning (HVAC), physical security, and telecommunications cabling/wiring—but possesses **zero pre-installed computing hardware, servers, or active data**. The transcript statement that a cold site has 'no infrastructure' is factually false and formally rejected: per NIST SP 800-34 Rev. 1 Section 3.4.3, a cold site provides complete facility infrastructure, but lacks computing and telecommunications hardware. Activation requires acquiring, shipping, installing, and cabling equipment, configuring operating systems and applications, and restoring data from backups (activation spans days to weeks)."
  > *(TH: Cold Site คือสถานที่กู้คืนสำรองที่มีโครงสร้างพื้นฐานทางกายภาพขั้นพื้นฐานครบถ้วน—ได้แก่ พื้นที่อาคาร ระบบไฟฟ้า ระบบปรับอากาศและระบายอากาศ (HVAC) ระบบความปลอดภัยทางกายภาพ และสายสัญญาณโทรคมนาคม—แต่**ไม่มีฮาร์ดแวร์คอมพิวเตอร์ เซิร์ฟเวอร์ หรือข้อมูลติดตั้งไว้ล่วงหน้าเลย** คำกล่าวใน Transcript ที่ว่า Cold Site 'ไม่มีโครงสร้างพื้นฐาน (no infrastructure)' เป็นความเข้าใจผิดและถูกตัดออกอย่างเป็นทางการ: ตามมาตรฐาน NIST SP 800-34 Rev. 1 ข้อ 3.4.3 Cold Site มีโครงสร้างพื้นฐานด้านอาคารสถานที่ครบถ้วน แต่ขาดเพียงอุปกรณ์ประมวลผล การเปิดใช้งานจำเป็นต้องจัดซื้อ ขนส่ง ติดตั้ง เดินสายอุปกรณ์ กำหนดค่าระบบปฏิบัติการและแอปพลิเคชัน และกู้คืนข้อมูลจากสำรอง (ระยะเวลาเปิดใช้งานใช้เวลาหลายวันถึงหลายสัปดาห์))*
- **Technical & Academic Rationale:** Directly eliminates the dangerous misconception that cold sites have "no infrastructure", replacing it with the authoritative NIST definition separating facility infrastructure from computing equipment.
- **Supporting Authoritative Evidence:** NIST SP 800-34 Rev. 1 Section 3.4.3; Slide S18.
- **Remaining Human-Review Requirements:** Confirm Thai phrasing regarding facility infrastructure ("โครงสร้างพื้นฐานด้านอาคารสถานที่").

---

### 7. KNOW-D2-044: Mean Time to Detect
- **Canonical ID:** `KNOW-D2-044`
- **Objective Mapping:** 2.4 (Understand the purpose of security measurement and reporting)
- **Phase 3 Decision:** `QA_REVISION_REQUIRED`
- **Phase 3.5 Revalidated Decision:** `REVALIDATED_CANDIDATE` (Technical: `ai-revalidated`; Translation: `needs-human-review`)
- **Original Phase 2 Statement:**
  > "S30 names MTTD and the transcript discusses a hypothetical mean detection target below an hour. The course does not specify detection start/end events, which incidents are counted, or an averaging method."
  > *(TH: S30 ระบุ MTTD และคำบรรยายยกเป้าหมายเวลาเฉลี่ยตรวจพบต่ำกว่าหนึ่งชั่วโมง แต่ไม่ได้กำหนดจุดเริ่ม จุดสิ้นสุด กลุ่มเหตุที่นำมาคำนวณ หรือวิธีหาค่าเฉลี่ย)*
- **Corrected Phase 3.5 Statement:**
  > "Mean Time to Detect (MTTD) is a security operations performance metric measuring the average elapsed time from the moment an unauthorized security compromise or incident begins within an environment until the moment it is formally recognized and identified by security detection tools, automated alerts, or monitoring personnel (NIST SP 800-55 Vol. 1, NIST SP 800-61 Rev. 2). While the lecture cites a hypothetical organizational target of less than one hour, this represents an illustrative example rather than an industry standard. Operational calculation requires defining precise boundary milestones: start milestone = initial incident intrusion timestamp; end milestone = detection alert generation or analyst acknowledgement timestamp."
  > *(TH: Mean Time to Detect (MTTD) หรือเวลาเฉลี่ยในการตรวจพบ คือตัวชี้วัดผลการดำเนินงานด้านความปลอดภัยที่วัดระยะเวลาเฉลี่ยตั้งแต่เริ่มเกิดการบุกรุกหรือเหตุการณ์ละเมิดความมั่นคงปลอดภัยในระบบ จนถึงช่วงเวลาที่เครื่องมือตรวจจับ การแจ้งเตือนอัตโนมัติ หรือเจ้าหน้าที่เฝ้าระวังตรวจพบและรับทราบเหตุการณ์อย่างเป็นทางการ (NIST SP 800-55 Vol. 1, NIST SP 800-61 Rev. 2) แม้บทเรียนจะยกเป้าหมายสมมติว่าน้อยกว่า 1 ชั่วโมง แต่เป็นเพียงตัวอย่างเป้าหมายขององค์กร ไม่ใช่มาตรฐานอุตสาหกรรมสากล การคำนวณจริงจำเป็นต้องกำหนดจุดหมุดหมายให้ชัดเจน: จุดเริ่มต้น = เวลาที่เริ่มเกิดการบุกรุก; จุดสิ้นสุด = เวลาที่เกิดการแจ้งเตือนหรือผู้ดูแลรับทราบ)*
- **Technical & Academic Rationale:** Defines the operational calculation boundaries (intrusion timestamp to alert timestamp) missing from the lecture, anchoring the metric to NIST SP 800-55 and NIST SP 800-61 Rev. 2.
- **Supporting Authoritative Evidence:** NIST SP 800-55 Vol. 1 Section 3.3.1; NIST SP 800-61 Rev. 2 Section 3.4; Slide S30.
- **Remaining Human-Review Requirements:** None. Technical milestones verified.

---

### 8. KNOW-D2-045: Mean Time to Respond - source-specific MTTR
- **Canonical ID:** `KNOW-D2-045`
- **Objective Mapping:** 2.4 (Understand the purpose of security measurement and reporting)
- **Phase 3 Decision:** `QA_REVISION_REQUIRED`
- **Phase 3.5 Revalidated Decision:** `REVALIDATED_CANDIDATE` (Technical: `ai-revalidated`; Translation: `needs-human-review`)
- **Original Phase 2 Statement:**
  > "S30/S31 expand MTTR as Mean Time to Respond and describe time to respond to incidents. The source leaves the timing endpoints and response milestone unspecified; no repair, recovery or resolution meaning is silently substituted."
  > *(TH: S30/S31 ใช้ MTTR ว่า Mean Time to Respond และอธิบายเวลาตอบสนองเหตุ แต่ไม่ระบุจุดเริ่ม สิ้นสุด หรือเหตุการณ์ที่ถือว่าตอบสนองแล้ว จึงไม่เปลี่ยนเป็นความหมาย repair, recovery หรือ resolution โดยไม่บอก)*
- **Corrected Phase 3.5 Statement:**
  > "In the primary course materials (Slides S30, S31), MTTR is explicitly expanded and defined as **Mean Time to Respond**, measuring the average elapsed time from incident detection until the initiation of active response measures. However, in broader IT operations, reliability engineering, and academic literature, MTTR is an ambiguous acronym that commonly denotes: (1) Mean Time to Repair (hardware/systems), (2) Mean Time to Recover (restoring services), or (3) Mean Time to Remediate (eradicating the root cause). In exam question development, practice questions must explicitly establish whether MTTR denotes initial response/triage, containment, or complete recovery, and define the specific response milestone."
  > *(TH: ในบทเรียนหลัก (สไลด์ S30, S31) ได้กำหนดตัวย่อ MTTR ไว้อย่างชัดเจนว่าหมายถึง **Mean Time to Respond (เวลาเฉลี่ยในการตอบสนอง)** ซึ่งวัดระยะเวลาเฉลี่ยตั้งแต่ตรวจพบเหตุการณ์จนถึงการเริ่มมาตรการตอบสนอง อย่างไรก็ดี ในแวดวงวิศวกรรมไอทีและความมั่นคงปลอดภัยไซเบอร์สากล ตัวย่อ MTTR มีหลายความหมาย เช่น (1) Mean Time to Repair (เวลาเฉลี่ยในการซ่อมแซม), (2) Mean Time to Recover (เวลาเฉลี่ยในการฟื้นฟูระบบ), หรือ (3) Mean Time to Remediate (เวลาเฉลี่ยในการขจัดช่องโหว่/ปัญหา) ในการพัฒนาข้อสอบ จึงจำเป็นต้องระบุบริบทของคำศัพท์ให้ชัดเจนว่าหมายถึงการตอบสนองขั้นต้น การกักกัน หรือการฟื้นฟูระบบ พร้อมระบุจุดหมุดหมายของการวัดผลให้แน่ชัด)*
- **Technical & Academic Rationale:** Documents the course's chosen definition while highlighting industry variants, preventing exam questions from penalizing students familiar with standard engineering definitions of MTTR.
- **Supporting Authoritative Evidence:** Slides S30, S31; NIST SP 800-55 Vol. 1 Section 3.3.1; ISO/IEC 27035:2023.
- **Remaining Human-Review Requirements:** None.

---

### 9. KNOW-D2-049: Key Risk Indicators and interpretation
- **Canonical ID:** `KNOW-D2-049`
- **Objective Mapping:** 2.4 (Understand the purpose of security measurement and reporting)
- **Phase 3 Decision:** `QA_REVISION_REQUIRED`
- **Phase 3.5 Revalidated Decision:** `REVALIDATED_CANDIDATE` (Technical: `ai-revalidated`; Translation: `needs-human-review`)
- **Original Phase 2 Statement:**
  > "KRIs indicate changes in risk. Examples include critical unpatched vulnerabilities, privileged accounts without MFA, failed controls, unsupported systems and untested backups. The lecture also lists increased phishing reports, whose direction is ambiguous without context."
  > *(TH: KRI ใช้แสดงการเปลี่ยนแปลงความเสี่ยง ตัวอย่างคือช่องโหว่ร้ายแรงที่ยังไม่แพตช์ บัญชีสิทธิสูงไม่มี MFA มาตรการล้มเหลว ระบบหมดการสนับสนุน และข้อมูลสำรองที่ยังไม่ทดสอบ จำนวนรายงานฟิชชิงที่เพิ่มขึ้นต้องพิจารณาบริบทก่อนสรุป)*
- **Corrected Phase 3.5 Statement:**
  > "Key Risk Indicators (KRIs) are forward-looking or operational metrics that signal an increase in organizational risk exposure or vulnerability thresholds before security incidents occur. Standard KRIs include rising numbers of unpatched critical vulnerabilities, end-of-support legacy systems, privileged accounts lacking MFA, and failed security control tests. However, the lecture's example of 'an increase in reported phishing attempts' carries an inherent **dual interpretation**: (1) from an external threat perspective, it may signal an active or aggressive attack campaign targeting the enterprise (increased risk); (2) from a security culture and awareness perspective, it may demonstrate that employee awareness training was effective, resulting in employees vigilantly reporting suspicious emails that previously went unflagged (improved security posture). Practice questions must provide scenario context to resolve this ambiguity."
  > *(TH: Key Risk Indicators (KRIs) หรือตัวชี้วัดความเสี่ยงหลัก คือตัวชี้วัดเชิงพยากรณ์หรือตัวชี้วัดการดำเนินงานที่ส่งสัญญาณเตือนว่าระดับความเสี่ยงหรือความเปราะบางขององค์กรกำลังเพิ่มสูงขึ้นก่อนที่จะเกิดความเสียหายจริง ตัวอย่าง KRI มาตรฐาน เช่น จำนวนช่องโหว่ร้ายแรงที่ยังไม่แพตช์เพิ่มขึ้น ระบบที่หมดอายุการสนับสนุน บัญชีสิทธิสูงที่ไม่มี MFA หรือการทดสอบมาตรการควบคุมที่ล้มเหลว อย่างไรก็ดี ตัวอย่างในบทเรียนที่ระบุว่า 'จำนวนการรายงานฟิชชิงที่เพิ่มขึ้น' มี**การตีความได้สองด้าน (Dual Interpretation)**: (1) ในมุมมองภัยคุกคามภายนอก อาจหมายถึงองค์กรกำลังตกเป็นเป้าหมายของการโจมตีที่รุนแรงขึ้น (ความเสี่ยงเพิ่มขึ้น); (2) ในมุมมองของวัฒนธรรมความปลอดภัย อาจแสดงว่าการอบรมความตระหนักรู้ได้ผล พนักงานจึงช่วยกันรายงานอีเมลต้องสงสัยที่เดิมเคยถูกละเลย (ความปลอดภัยดีขึ้น) ข้อสอบต้องให้บริบทสถานการณ์เพื่อขจัดความคลุมเครือนี้)*
- **Technical & Academic Rationale:** Formally documents the causal ambiguity in phishing report trends, establishing clear guidelines for Phase 4 question authoring.
- **Supporting Authoritative Evidence:** ISACA COBIT 2019; NIST SP 800-55 Vol. 1 Section 3.2; Slides S32, S33.
- **Remaining Human-Review Requirements:** Validate Thai translation of dual interpretation ("การตีความได้สองด้าน").

---

### 10. KNOW-D2-028: Regulatory recovery claims and protected information (QUARANTINED)
- **Canonical ID:** `KNOW-D2-028`
- **Objective Mapping:** 2.2 (Understand business continuity and disaster recovery concepts)
- **Phase 3 Decision:** `QA_BLOCKED`
- **Phase 3.5 Revalidated Decision:** `QA_BLOCKED_QUARANTINE` (Quarantined from Question Authoring)
- **Status Statement:** Entry remains **STRICTLY QUARANTINED**. Acronym expansion is formally updated to "Protected Health Information" (45 CFR § 160.103), but universal statutory DRP claims remain blocked.
- **Unblocking Requirements:**
  1. Restrict HIPAA contingency mandates strictly to Covered Entities and Business Associates creating, receiving, maintaining, or transmitting ePHI under 45 CFR § 164.308(a)(7).
  2. Restrict GDPR recovery measures to Article 32 risk-appropriate organizational and technical measures for Data Controllers and Processors handling EU personal data.
  3. Formal human academic/legal review sign-off.
  4. Universal DRP legal mandates remain strictly prohibited from general CC exam questions.

---

### 11. KNOW-D2-054: Worked scorecard and unresolved vulnerability units (QUARANTINED)
- **Canonical ID:** `KNOW-D2-054`
- **Objective Mapping:** 2.4 (Understand the purpose of security measurement and reporting)
- **Phase 3 Decision:** `QA_BLOCKED`
- **Phase 3.5 Revalidated Decision:** `QA_BLOCKED_QUARANTINE` (Quarantined from Question Authoring)
- **Status Statement:** Entry remains **STRICTLY QUARANTINED**. The unit conflict between Slide S36 (`Target: < 10` [unitless], `Actual: 12`) and Transcript T:L111 (`< 10%`, `12` [unitless]) cannot be resolved without primary publisher evidence.
- **Unblocking Requirements:**
  1. Verification from original author deck or video recording confirming whether `< 10` is an absolute count or percentage.
  2. Documented human reviewer determination establishing a convention for worked examples.
  3. Until resolved, this specific vulnerability row is strictly prohibited from any mathematical calculation or scorecard evaluation item in Phase 4. Practice questions must utilize clean percentage rows (e.g., patch compliance 95% vs 91%, MFA 100% vs 97%).

---

## 3. Supporting Materials Correction Ledger

### A. Terminology Glossary Changes (10 Records)

| Term ID | English Term | Correction Applied | Academic & Normalization Rationale |
| :---: | :--- | :--- | :--- |
| `D2-G013` | Residual risk | Qualified "never zero" claim; bound avoidance. | Aligned with `KNOW-D2-014` and ISO 31000. |
| `D2-G014` | Risk rating scales | Reclassified 1–4 scale as semi-quantitative / ordinal. | Aligned with `KNOW-D2-015` and NIST SP 800-30 Rev. 1. |
| `D2-G022` | Backup strategy | Removed "safe and easily restored" absolute claims. | Aligned with `KNOW-D2-023` and NIST SP 800-34 Rev. 1. |
| `D2-G023` | Hot site | Normalized caption typo "hard site" -> "Hot Site". | Aligned with `KNOW-D2-024` and Slide S18. |
| `D2-G024` | Warm site | Completed definition per NIST SP 800-34 Rev. 1. | Aligned with `KNOW-D2-025`. |
| `D2-G025` | Cold site | Struck "no infrastructure"; defined facility facilities. | Aligned with `KNOW-D2-026` and NIST SP 800-34 Rev. 1. |
| `D2-G042` | MTTD | Defined operational intrusion-to-alert boundaries. | Aligned with `KNOW-D2-044` and NIST SP 800-55 / 800-61. |
| `D2-G043` | MTTR | Documented local "Respond" vs industry Repair variants. | Aligned with `KNOW-D2-045` and ISO/IEC 27035. |
| `D2-G047` | KRI | Added dual-interpretation note on phishing report trends. | Aligned with `KNOW-D2-049`. |
| `D2-G064` | PHI | Corrected expansion to **Protected Health Information**. | Aligned with HIPAA 45 CFR § 160.103. |

*Note on Status Integrity:*
- 5 supplemental records (`D2-G069`–`D2-G073`) remain marked `TERM_BLOCKED` from the course-derived bank.
- 3 diagram-only records (`D2-G065` PCI DSS, `D2-G066` CMMC, `D2-G067` SOX) remain marked `TERM_DEFERRED`.

---

### B. Concept Distinctions Changes (5 Records)

| Distinction ID | Comparison Topic | Correction Applied | Academic Rationale |
| :---: | :--- | :--- | :--- |
| `D2-CD03` | Qualitative vs Semi-Quantitative vs Quantitative | Added NIST SP 800-30 Rev. 1 semi-quantitative definition for numeric scales (1–4). | Resolves lecture error calling 1–4 quantitative. |
| `D2-CD06` | Hot vs Warm vs Cold Recovery Sites | Overwrote cold site "no infrastructure" text; highlighted facility infrastructure. | Aligns with NIST SP 800-34 Rev. 1 Section 3.4.3. |
| `D2-CD10` | KPI vs KRI | Added dual-interpretation note for phishing report metrics. | Prevents simplistic, misleading distractor logic. |
| `D2-CD12` | MTTD vs MTTR | Added event boundary definitions and highlighted multiple industry meanings of MTTR. | Eliminates calculation and milestone ambiguity. |
| `D2-CD14` | Count vs Percentage vs Percentage Points | Explicitly cited hold on ambiguous scorecard vulnerability row (`D2-Q03`). | Prevents mathematically corrupted distractors. |

---

### C. Exam Language Guide Changes (2 Records)

| Record ID | Phrase / Clue | Correction Applied | Pedagogical Rationale |
| :---: | :--- | :--- | :--- |
| `D2-EL04` | KRI -> risk | Added warning that increasing phishing reports can reflect improved reporting culture. | Protects candidates from treating mnemonics as blind algorithms. |
| `D2-EL06` | Scorecard -> compare against targets | Reemphasized strict hold on disputed vulnerability row in worked examples. | Prevents question authoring on corrupted units. |

---

## 4. Audit Verification Summary

| Metric | Phase 3 Finding | Phase 3.5 Action | Revalidated Baseline Count |
| :--- | :---: | :---: | :---: |
| Canonical Knowledge Entries | 54 | 9 Revised, 2 Quarantined, 43 Passed | 54 (43 PASS, 9 REVALIDATED_CANDIDATE, 2 QUARANTINED) |
| Terminology Glossary Records | 73 | 10 Corrected, 5 Blocked, 3 Deferred | 73 (56 PASS, 9 REVALIDATED_CANDIDATE, 5 BLOCKED, 3 DEFERRED) |
| Concept Distinctions | 14 | 5 Corrected, 9 Passed | 14 (9 PASS, 5 REVALIDATED_CANDIDATE) |
| Exam Language Records | 20 | 2 Corrected, 18 Passed | 20 (18 PASS, 2 REVALIDATED_CANDIDATE) |
| Academic Issues Tracked | 14 | 2 Resolved, 7 Partially Resolved, 5 Unresolved | 14 (Preserved in Register) |
| Curricular Gaps Tracked | 8 | 8 Preserved as external supplemental gaps | 8 (Preserved in Register) |
