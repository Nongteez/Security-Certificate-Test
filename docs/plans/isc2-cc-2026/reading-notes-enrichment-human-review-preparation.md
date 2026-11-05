# Reading Notes enrichment — human review preparation

Review date: 2026-11-03. Active workspace: `D:\_Coding\SEC-CERT-TEST`. HEAD at entry: `d5d5f369d293716a43a072d11692f26b3618716c`.

## A. Executive Review Summary

**75 recommendations reviewed: 10 APPROVE; 44 APPROVE WITH REVISION; 10 REJECT; 11 HOLD. These are reviewer dispositions, not implementation authorization.**

Counting: 56 canonical backlog packages + six distinct older media/tool proposals + thirteen finer legacy detail groups. Repeated IDs and subsection observations are cross-referenced, not counted again. The four proposed image assets belong to three packages: simulated-message candidate, HSM network/USB pair, firewall photo. The five diagram candidates are VIS-01, VIS-02, D2-A01, D4-M01 and D5-M16. D2-A02 is now recommended as original HTML, not an acquired bitmap.

All 11 reported correction groups contain an actionable error, overstatement or attribution inconsistency, but not every underlying concept is false. Eight need revised scope. TCP remains a reliable ordered byte stream; the existing RTO/RPO example is largely correct; six IR teaching activities may remain. IPv6 is a clarification, ethics a bounded unsupported-certainty correction, and the scorecard row stays unresolved.

The strongest improvements correct sign/verify, module-dependent HSM/TPM claims, sanitization outcomes, recovery tolerance, task-scoped mover access and segmentation certainty. Add small evaluated examples rather than new chapters. Prefer three compact new relationship diagrams and an accessible authored message; defer interaction and unresolved external photos.

### Evidence boundary and method

The complete prior audit, retained domain appendices, historical implementation report, inventories/manifests, archived research and progress/handoff were inspected. Actual targeted Reading passages and relevant published lesson JSON/renderer source were compared. See `phase-2/current-target-excerpts.json`, `legacy-target-excerpts.json` and `supporting-evidence-inspection.json`. Existing CIA/JML/OSI/reporting diagrams are preservation/reuse sources, not replacement targets. Source-keyword matches or slide titles were not sufficient proof of visual coverage.

The reported source inventory remains 277 files (29 text, 248 PNG); 128 anchors, 570 nested headings and 28 diagram placements. This phase reused the earlier contact-sheet inspection and selected native-image findings instead of claiming a second full image audit. The old Settapon absolute path is unavailable; the matching repository-local `ISC2 Update 2026/` is the accessible source. No media was downloaded, generated or integrated. Current primary references were reopened for the highest-priority claims. Historical captures/blank search terms alone are not verification.

Primary scope reference: [ISC2 CC exam outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline), effective 1 September 2026. This supports concept coverage, not predictions about exact exam frequency or memorization requirements.

## B. Academic Correction Decisions

The quoted claims below are exact captured text or an explicitly identified renderer label. Section ranges and full current context are retained in the structured evidence. Reviewer conclusions distinguish local defects from sound surrounding material.

### ACC-D1-01 — APPROVE WITH REVISION

Domain 1; objective 1.1; severity P1. Target: `content/isc2-cc-2026/reading/domain-1.md:251` — `topic-1-1-privacy-data-protection`.

**Current coverage:** Privacy table contrasts encryption with consent and transparency; line 320 implies absent consent is enough to establish a violation.

**Gap / judgment:** The lawful basis is unspecified; transparency and consent are different questions. The EDPB directly supports the scope correction; it does not establish Thai retention periods or resolve every PDPA example.

**Smallest useful change:** Replace the blanket consent inference with an applicable-law/basis qualifier; retain the privacy-versus-confidentiality distinction.

**Constraints:** Do not say all personal-data processing requires consent or that no-consent processing is automatically unlawful. **Preserve:** Keep the existing roles, inventory and qualified erasure explanation.

**Evidence:** [General information](https://www.edpb.europa.eu/topics/key-gdpr-concepts/legal-basis_en); Domain 1 privacy screenshots 225943/231044; original treatment is broad, not a universal legal rule; [Legal basis: six possible GDPR grounds](https://www.edpb.europa.eu/topics/key-gdpr-concepts/legal-basis_en)

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

**Exact current claim** (`content/isc2-cc-2026/reading/domain-1.md:320`):

```text
| **จุดลวงในข้อสอบ** | การเข้ารหัสข้อมูล (Encryption) ตอบสนอง Confidentiality แต่ *ไม่ได้แปลว่าปฏิบัติตาม Privacy ครบถ้วน* หากเก็บข้อมูลโดยไม่ได้รับความยินยอม! | ข้อสอบมักถามว่า "การเก็บข้อมูลลูกค้าโดยเข้ารหัสอย่างดีแต่ไม่แจ้งวัตถุประสงค์ ผิดหลักการใด?" คำตอบคือ **Privacy Violation** |
```

### ACC-D2-01 — APPROVE WITH REVISION

Domain 2; objective 2.2; severity P1. Target: `content/isc2-cc-2026/reading/domain-2.md:227` — `topic-2-2-rto-rpo`.

**Current coverage:** RTO/RPO prose and the 17:00 example correctly separate targets; line 259 nevertheless equates exceeding the planning bound with inability to survive.

**Gap / judgment:** One categorical conclusion contradicts the earlier business-impact definition. The backup label may be a hypothetical observation rather than an error. NIST 800-34 section 3.2.1 supports impact/tolerance terminology. Preserve the correct 16:30/17:00/18:00 example and its units.

**Smallest useful change:** Correct line 259; label the equation a simplified planning model. Distinguish an assumed backup from a target boundary without claiming the existing backup timestamp is intrinsically invalid.

**Constraints:** Do not present RTO+WRT as a universal sequential law; use explicitly defined intervals. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** [3.2.1, business impact/tolerances](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf); Domain 2 screenshot 183410 and DOMAIN 2.txt redundancy segment; compare Reading lines 197–201; [Section 3.2.1, printed pp.16–17, BIA recovery priorities and MTD/RTO/RPO](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf)

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

**Exact current claim** (`content/isc2-cc-2026/reading/domain-2.md:256`):

```text
- **Maximum Tolerable Downtime (MTD — ระยะเวลาหยุดชะงักสูงสุดที่ยอมรับได้):** คือระยะเวลารวมสูงสุดตั้งแต่ระบบเริ่มล่ม จนกระทั่งกระบวนการทางธุรกิจกลับมาเปิดดำเนินงานได้ตามปกติ หากหยุดชะงักนานเกิน MTD องค์กรอาจเกิดความเสียหายอย่างถาวร (Irreparable Harm)
- **สูตรความสัมพันธ์แม่บทสำหรับห้องสอบ:**
  **MTD &ge; RTO + WRT**
  *(หาก RTO + WRT &gt; MTD หมายความว่าธุรกิจจะได้รับความเสียหายวิกฤตเกินระดับที่องค์กรจะอยู่รอดได้)*
```

### ACC-D2-02 — APPROVE

Domain 2; objective 2.4; severity P1. Target: `content/isc2-cc-2026/reading/domain-2.md:555` — `topic-2-4-memory-aid`; `js/core/diagram-generator.js:1775` — `security-measurement-hierarchy / Quantifiable Raw Value`; `js/core/diagram-generator.js:1716` — `effectivenessHierarchy / dashboard refresh claim`.

**Current coverage:** The notes explicitly allow count, rate, ratio and mean; the embedded graphic calls METRIC a Quantifiable Raw Value.

**Gap / judgment:** This is a prose/graphic inconsistency, not a missing metrics chapter. The correction is ready and supported both by the notes and NIST measurement examples.

**Smallest useful change:** Replace the raw-only graphic label with defined measurable value; qualify dashboard update time in the existing diagram and cues.

**Constraints:** Do not create a second measurement hierarchy or assume every dashboard is real time. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** [3.3, quantitative measures](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-55v1.pdf); js/core/diagram-generator.js:1775 — exact contradictory label; Domain 2 metric screenshot 223240 includes percentages and means; diagram-generator.js:1775 effectivenessHierarchy raw-value label; [Sections 3.3.1–3.3.4: implementation, effectiveness, efficiency and impact measures](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-55v1.pdf)

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

**Exact current claim** (`js/core/diagram-generator.js:1775`):

```text
Quantifiable Raw Value
```

### ACC-D3-01 — APPROVE WITH REVISION

Domain 3; objective 3.1; severity P0. Target: `content/isc2-cc-2026/reading/domain-3.md:9` — `topic-3-1-jml-lifecycle`.

**Current coverage:** The mover case uses Domain Admin for Helpdesk and mandates removal of all old rights before every new grant.

**Gap / judgment:** Universal removal order and automatic SoD violation are not established; the privileged grant may be an intentionally bad example. AC-6 and PS-5 support justified task access and policy-defined transitions. Do not recast every combined permission set as an SoD violation.

**Smallest useful change:** Use task-scoped helpdesk rights, or explicitly label Domain Admin excessive under the example policy. Remove obsolete/conflicting rights, retain justified common rights and verify the controlled transition.

**Constraints:** State the example policy; distinguish an insecure scenario from a recommendation to grant Domain Admin. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** [AC-6 and PS-5](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf); Domain 3 D3 Example.md:86–94; screenshot 040655 shows review after transfer, not universal revoke-all ordering; [AC-6 pp.36–38; PS-5 p.225 (PDF pages 63–65 and 252)](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf)

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

**Exact current claim** (`content/isc2-cc-2026/reading/domain-3.md:35`):

```text
  <strong>กรณีศึกษาข้อสอบ (Finance-to-IT Transfer):</strong> นายสมคิด ย้ายตำแหน่งจากแผนกบัญชี (Finance) ไปเป็นผู้ดูแลระบบฝ่ายไอที (IT Helpdesk) ฝ่ายไอทีได้สร้างสิทธิ์ Domain Admin ให้เขา แต่ไม่มีการเพิกถอนสิทธิ์การอนุมัติการจ่ายเงินในระบบ ERP เดิม ทำให้สมคิดมีทั้งสิทธิ์เข้าถึงระบบหลังบ้านและสิทธิ์อนุมัติเงิน ซึ่งเป็นความเสี่ยง <strong>Privilege Creep</strong> และละเมิดหลักการ <strong>Segregation of Duties (SoD)</strong> อย่างร้ายแรง วิธีแก้ที่ถูกต้องคือต้องมีขั้นตอนทบทวนและเพิกถอนสิทธิ์เดิมทั้งหมดก่อนมอบสิทธิ์ใหม่เสมอ
```

### ACC-D4-02 — APPROVE WITH REVISION

Domain 4; objective 4.1; severity P1. Target: `content/isc2-cc-2026/reading/domain-4.md:324` — `topic-4-1-tcp-vs-udp`.

**Current coverage:** TCP is correctly described as reliable, sequenced and retransmitting, but its complete-data wording and speed comparison read as unconditional.

**Gap / judgment:** The missing boundary is connection failure and application completion, not an absence of TCP reliability. RFC 9293 supports both reliability and connection failure. This is an overstatement correction, not rejection of the core transport definition.

**Smallest useful change:** Retain reliable ordered byte-stream terminology. Add a concise failure/application boundary and qualify speed comparisons; do not rewrite TCP as unreliable.

**Constraints:** TCP reliability is not cryptographic integrity, secrecy or business-transaction confirmation. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** [reliable service and connection failure](https://www.rfc-editor.org/rfc/rfc9293.html#section-3.8.3); Domain 4 source TCP/IP screenshots 145229/145505; published lesson-d4-01 reliable-transport explanation; [Sections 2.2 and 3.8.3](https://www.rfc-editor.org/rfc/rfc9293.html#section-3.8.3)

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

**Exact current claim** (`content/isc2-cc-2026/reading/domain-4.md:332`):

```text
- **Reliable Delivery:** รับประกันความสมบูรณ์ของข้อมูล มีการตรวจสอบลำดับแพ็กเก็ต (Sequencing) และมีการส่งซ้ำหากข้อมูลสูญหาย (Retransmission)
- **Flow &amp; Congestion Control:** มีกลไกปรับความเร็วในการส่งข้อมูลเพื่อป้องกันไม่ให้ฝั่งรับล้น (Sliding Window)
- เหมาะสำหรับงานที่ห้ามข้อมูลผิดพลาดหรือสูญหาย: Web Browsing (HTTP/HTTPS), File Transfer (FTP/SFTP), Remote Terminal (SSH), อีเมล (SMTP/IMAP)
```

### ACC-D4-03 — APPROVE WITH REVISION

Domain 4; objective 4.2; severity P0. Target: `content/isc2-cc-2026/reading/domain-4.md:626` — `topic-4-2-segmentation-blast-radius`.

**Current coverage:** Segmentation is defined with enforcement, but benefit bullets promise containment and automatic compliance-scope reduction.

**Gap / judgment:** Allowed paths, compromised control points and policy effectiveness are missing conditions. CISA and NIST support limiting exposure rather than an unconditional containment guarantee.

**Smallest useful change:** Replace certainty with risk/reachability reduction; retain the architecture and state compliance scoping requires validated applicable conditions.

**Constraints:** A flat network does not alone prove every host is compromised; a VLAN name alone is not an enforcement policy. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** [scope and lateral-movement purpose](https://www.cisa.gov/sites/default/files/2025-07/ZT-Microsegmentation-Guidance-Part-One_508c.pdf); Domain 4 screenshot 182644; published lesson-d4-05 allowed/denied paths; [Sections 2.3 firewall inspection limitations and 4 firewall policy](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-41r1.pdf)

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

**Exact current claim** (`content/isc2-cc-2026/reading/domain-4.md:635`):

```text
- **Reduce Blast Radius (จำกัดรัศมีความเสียหาย):** เมื่อเกิดเหตุการณ์ความมั่นคงปลอดภัย ความเสียหายจะถูกจำกัดอยู่เฉพาะภายในเซกเมนต์นั้น ๆ ไม่ลุกลามไปยังระบบอื่น
- **Prevent Lateral Movement (หยุดยั้งการเคลื่อนที่ในแนวราบ):** ผู้โจมตีไม่สามารถสแกนหรือส่งมัลแวร์ข้ามไปยังเซิร์ฟเวอร์สำคัญได้โดยตรง
- **Traffic Isolation &amp; Performance:** ลดปริมาณการแพร่กระจายของ Broadcast ทำให้เครือข่ายมีประสิทธิภาพสูงขึ้น
- **Compliance &amp; Audit Scope:** ช่วยลดขอบเขตการตรวจสอบมาตรฐานความปลอดภัย (เช่น PCI DSS สำหรับข้อมูลบัตรเครดิต) โดยจำกัดให้ตรวจเฉพาะเซกเมนต์ที่เกี่ยวข้องเท่านั้น
```

### ACC-D5-01 — APPROVE

Domain 5; objective 5.1; severity P0. Target: `content/isc2-cc-2026/reading/domain-5.md:269` — `topic-5-1-hashing-digital-signatures`.

**Current coverage:** The generic signature recipe encrypts a digest using the sender private key and decrypts it using the public key.

**Gap / judgment:** That is not a scheme-independent signature model. FIPS 186-5 sections 3.2–3.3 directly distinguish generation and verification.

**Smallest useful change:** Replace those two operation descriptions with signing/verification, using trusted key association and signed content. Retain hashing and password-storage sections; do not add algorithm mathematics.

**Constraints:** Do not promise proof of human intent or harmless software; preserve identity/key-custody conditions. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** [3.2–3.3, signature generation/verification](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-5.pdf); Domain 5 D5 Example.md:121–133 and E.10; DOMAIN 5.txt:55 uses sign/validate rather than a universal encryption recipe; [Section 3, pp.9–15; sections 3.2/3.3 generation and verification](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-5.pdf)

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

**Exact current claim** (`content/isc2-cc-2026/reading/domain-5.md:303`):

```text
กลไกที่ผสานการทำงานของ **Hashing** และ **Asymmetric Encryption** เข้าด้วยกัน เพื่อให้ได้คุณสมบัติความมั่นคงปลอดภัย 3 ประการ:
1. **Integrity (ความสมบูรณ์):** ข้อมูลไม่ถูกดัดแปลง
2. **Authentication (การยืนยันตัวตน):** ยืนยันว่าผู้ส่งเป็นตัวจริง
3. **Non-repudiation (การปฏิเสธความรับผิดชอบไม่ได้):** ผู้ส่งไม่สามารถอ้างได้ว่าตนไม่ได้เป็นผู้ส่งข้อความ

**กระบวนการทำงานของลายมือชื่อดิจิทัล:**
- **ผู้ส่ง (Sender):** นำเอกสารไปคำนวณค่าแฮช &rarr; นำค่าแฮชไปเข้ารหัสด้วย **Private Key ของผู้ส่งเอง** ได้ผลลัพธ์เป็น "ลายมือชื่อดิจิทัล" &rarr; แนบลายมือชื่อไปพร้อมกับเอกสาร
- **ผู้รับ (Recipient):** นำลายมือชื่อดิจิทัลไปถอดรหัสด้วย **Public Key ของผู้ส่ง** จะได้ค่าแฮชเดิม &rarr; คำนวณค่าแฮชของเอกสารที่ได้รับมาเทียบเคียง &rarr; หากค่าแฮชตรงกัน แสดงว่าเอกสารมาจากผู้ส่งจริงและไม่ถูกดัดแปลงแก้ไข
```

### ACC-D5-02 — APPROVE WITH REVISION

Domain 5; objective 5.1; severity P0. Target: `content/isc2-cc-2026/reading/domain-5.md:318` — `topic-5-1-tpm-vs-hsm`.

**Current coverage:** The HSM/TPM section gives universal validation, throughput and zeroization claims and defines TPM as soldered hardware.

**Gap / judgment:** Capabilities vary by module/model/version/mode; TPM measurement and boot enforcement are conflated. The Yubico model/mode distinction and Microsoft TPM guidance provide direct counterexamples to universal claims.

**Smallest useful change:** Qualify validation/capabilities and remove generic throughput figures. Describe TPM implementations broadly and separate measurement from enforcement. Use an application request as a configured example, not a universal ban on wrapped export.

**Constraints:** Do not add detailed FIPS levels or purchasing benchmarks as required CC knowledge; do not imply every HSM is a rack appliance. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** [model/firmware/mode](https://docs.yubico.com/hardware/yubihsm-2/hsm-2-user-guide/hsm2-intro-overview.html); [implementation paragraph](https://learn.microsoft.com/en-my/windows/security/hardware-security/tpm/tpm-recommendations); Domain 5 screenshot 235638 says often used for FIPS compliance, not every device certified at one level; E.11 illustrates key custody; [Overview and FIPS Validation/Mode; also Microsoft TPM recommendations, TPM 2.0 implementation paragraph](https://docs.yubico.com/hardware/yubihsm-2/hsm-2-user-guide/hsm2-intro-overview.html)

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

**Exact current claim** (`content/isc2-cc-2026/reading/domain-5.md:325`):

```text
ไมโครชิปความปลอดภัยเฉพาะทางที่ถูกบัดกรีติดอยู่บนเมนบอร์ดของคอมพิวเตอร์หรืออุปกรณ์ปลายทาง:
- ทำหน้าที่เป็น **Hardware Root of Trust (รากฐานความน่าเชื่อถือระดับฮาร์ดแวร์)** ของคอมพิวเตอร์แต่ละเครื่อง
- สนับสนุนฟีเจอร์ **Measured Boot และ Secure Boot** โดยวัดค่าแฮชของเฟิร์มแวร์ UEFI, บูตโหลดเดอร์, และเคอร์เนลระบบปฏิบัติการก่อนอนุญาตให้เปิดเครื่อง เพื่อป้องกันไม่ให้ Rootkit หรือมัลแวร์บูตแทรกแซงระบบ
- จัดเก็บกุญแจเข้ารหัสลับของเครื่องเฉพาะ เช่น กุญแจ BitLocker โดยกุญแจจะไม่หลุดออกไปยังระบบปฏิบัติการ

</section>

<section class="reading-definition-unit">
<h5>HSM (Hardware Security Module):</h5>

อุปกรณ์ฮาร์ดแวร์ความปลอดภัยระดับองค์กร (Enterprise Appliance) อาจเป็นการ์ด PCIe ภายในเซิร์ฟเวอร์ หรือเป็นตู้ฮาร์ดแวร์ภายนอกที่เชื่อมต่อผ่านระบบเครือข่าย:
- ออกแบบมาเพื่อสร้าง ปกป้อง และบริหารวงจรกุญแจเข้ารหัสลับระดับองค์กร (Root Certificate Authority Keys, กุญแจธุรกรรมทางการเงิน, กุญแจเซิร์ฟเวอร์คลาวด์)
- มีประสิทธิภาพในการประมวลผลทางคณิตศาสตร์สูงมาก รองรับการถอดรหัสและเซ็นลายมือชื่อดิจิทัลพร้อมกันนับหมื่นรายการต่อวินาที
- ผ่านการรับรองความปลอดภัยระดับสูงตามมาตรฐาน **FIPS 140-2 Level 3 หรือ Level 4**
- มีคุณสมบัติต่อต้านการงัดแงะทางกายภาพ (Tamper-Resistant & Tamper-Evident) หากตรวจพบการพยายามเปิดฝาเครื่องหรือเจาะทะลุ อุปกรณ์จะทำลายกุญแจทิ้งทันที (Zeroization) เพื่อป้องกันข้อมูลรั่วไหล

</section>

<div class="reading-table-wrapper">

| มิติการเปรียบเทียบ | TPM (Trusted Platform Module) | HSM (Hardware Security Module) |
| :--- | :--- | :--- |
| **ตำแหน่งติดตั้ง** | ชิปบนเมนบอร์ดคอมพิวเตอร์ปลายทาง (PC/Laptop) | อุปกรณ์ฮาร์ดแวร์แยกต่างหากในศูนย์ข้อมูล / เครือข่าย |
| **ขอบเขตการใช้งาน** | ประจำเครื่องคอมพิวเตอร์เครื่องเดียว | ให้บริการส่วนกลางแก่องค์กรหรือเซิร์ฟเวอร์ทั้งระบบ |
| **หน้าที่หลัก** | Platform Integrity, Secure Boot, BitLocker Keys | จัดการวงจรกุญแจ, Root CA, ทำธุรกรรมทางการเงิน |
| **มาตรฐานความปลอดภัย** | ISO/IEC 11889 | **FIPS 140-2 / FIPS 140-3 (Level 3/4)** |
| **การป้องกันการงัดแงะ** | พื้นฐานในตัวชิป | มีเซนเซอร์ตรวจจับและทำลายกุญแจอัตโนมัติ (Zeroization) |
```

### ACC-D5-03 — APPROVE WITH REVISION

Domain 5; objective 5.1; severity P0. Target: `content/isc2-cc-2026/reading/domain-5.md:132` — `topic-5-1-data-sanitization-destruction`.

**Current coverage:** The section cites Rev.1 as current, treats commands/CE as blanket purge success and says destruction protects 100%.

**Gap / judgment:** Revision currency, media/implementation conditions and outcome validation are conflated. NIST Rev.2 supersedes Rev.1 and separates verification from validation. A reference-date edit alone would leave incorrect blanket claims.

**Smallest useful change:** Update the reference and conditional method explanation; retain Clear/Purge/Destroy. Replace certainty with defined recovery infeasibility and verified/validated outcomes; no device-command tutorial.

**Constraints:** A drill hole or named erase command does not itself prove successful sanitization; CE needs appropriate key/data conditions. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** [4.5.1–4.5.2, verification/validation](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-88r2.pdf); Domain 5 screenshot 204222 gives methods; source does not establish 100% future-proof recovery impossibility; [Sections 2.4, 4.5.1–4.5.2 and glossary infeasible/destroy](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-88r2.pdf)

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

**Exact current claim** (`content/isc2-cc-2026/reading/domain-5.md:134`):

```text
เมื่ออุปกรณ์จัดเก็บข้อมูล (Hard Drive, SSD, เทปสำรองข้อมูล, แฟลชไดรฟ์) สิ้นสุดการใช้งานหรือต้องโอนย้ายไปให้ผู้อื่น องค์กรต้องทำลายข้อมูลที่ค้างอยู่ไม่ให้สามารถกู้คืนได้ ตามมาตรฐานสากล **NIST SP 800-88 Rev. 1 (Guidelines for Media Sanitization)** ได้กำหนดระดับการทำลายข้อมูลไว้ 3 ระดับหลัก:

<section class="reading-definition-unit">
<h5>1. Clear (การเขียนทับระดับผู้ใช้):</h5>

การเขียนทับพื้นที่จัดเก็บข้อมูลทั้งหมดด้วยข้อมูลที่ไม่มีความหมาย (เช่น เขียนทับด้วยเลข 0 ทั้งหมด หรือบิตสุ่ม) โดยใช้คำสั่งมาตรฐานระดับผู้ใช้ (Logical Interface Commands) สามารถป้องกันการกู้คืนข้อมูลด้วยซอฟต์แวร์กู้ข้อมูลทั่วไปได้ แต่ไม่สามารถป้องกันการกู้ข้อมูลด้วยเครื่องมือวิเคราะห์ในห้องปฏิบัติการขั้นสูงได้ เหมาะสำหรับอุปกรณ์ที่จะนำกลับมาหมุนเวียนใช้ใหม่ภายในองค์กรเดียวกัน

</section>

<section class="reading-definition-unit">
<h5>2. Purge (การล้างข้อมูลระดับลึก):</h5>

การใช้เทคนิคระดับฮาร์ดแวร์หรือทางกายภาพเพื่อทำให้ข้อมูลไม่สามารถกู้คืนได้ แม้จะใช้เครื่องมือทางห้องปฏิบัติการขั้นสูง (Laboratory Attack Techniques) ก็ตาม:
- **ATA Secure Erase / Cryptographic Erase (CE):** สั่งการผ่านคอนโทรลเลอร์ของอุปกรณ์โซลิดสเตตไดรฟ์ (SSD) เพื่อล้างบล็อกหน่วยความจำแฟลชทั้งหมด รวมถึงพื้นที่สำรอง (Over-provisioned areas)
- **Degaussing (การลบล้างสนามแม่เหล็ก):** การใช้เครื่องสร้างสนามแม่เหล็กความเข้มสูงทำลายโดเมนแม่เหล็กบนสื่อบันทึกประเภทจานแม่เหล็ก (HDD และเทป) ทำให้ข้อมูลหายไปอย่างสิ้นเชิง (ข้อควรระวัง: Degaussing จะทำลายฮาร์ดดิสก์จนไม่สามารถนำกลับมาใช้ใหม่ได้ และไม่สามารถใช้กับ SSD ได้)
- สื่อบันทึกที่ผ่านการ Purge ด้วย Secure Erase สามารถนำไปใช้งานต่อนอกองค์กรหรือบริจาคได้อย่างปลอดภัย

</section>

<section class="reading-definition-unit">
<h5>3. Destroy (การทำลายสื่อทางกายภาพ):</h5>

การทำลายชิ้นส่วนทางกายภาพของสื่อบันทึกข้อมูลจนไม่สามารถนำมาเชื่อมต่อหรือใช้งานได้อีกตลอดไป ได้แก่ การบดละเอียด (Shredding), การเผาทำลายที่อุณหภูมิสูง (Incineration), การย่อยสลายด้วยสารเคมี (Disintegration), การหลอมละลาย (Melting), หรือการเจาะทะลุจานบันทึก (Deforming/Drilling) นิยมใช้กับสื่อบันทึกที่มีข้อมูลความลับระดับสูงสุด หรืออุปกรณ์ที่ชำรุดเสียหายจนไม่สามารถสั่งรันคำสั่ง Clear/Purge ได้

</section>

<section class="reading-definition-unit">
<h5>Crypto-shredding (การทำลายกุญแจเข้ารหัส):</h5>

เทคนิคพิเศษสำหรับการทำลายข้อมูลบนระบบคลาวด์หรือไดรฟ์เสมือน (Virtual Disks) ที่ผู้ใช้งานไม่มีสิทธิ์เข้าถึงอุปกรณ์ฮาร์ดแวร์ทางกายภาพ: ทำได้โดยการเข้ารหัสข้อมูลทั้งหมดด้วยอัลกอริทึมที่แข็งแกร่ง (AES-256) ตั้งแต่ต้น จากนั้นเมื่อต้องการทำลายข้อมูล ให้ทำการลบและทำลายกุญแจถอดรหัส (Decryption Key) ทิ้งอย่างถาวร ส่งผลให้ข้อมูลที่เหลืออยู่กลายเป็นขยะดิจิทัลที่ไม่สามารถถอดรหัสกลับมาได้อีกเลย

</section>

<div class="reading-table-wrapper">

| วิธีการตาม NIST SP 800-88 | กลไกการดำเนินการ | ป้องกันการโจมตีระดับแล็บได้หรือไม่ | อุปกรณ์นำกลับมาใช้ใหม่ได้หรือไม่ |
| :--- | :--- | :--- | :--- |
| **Clear** | เขียนทับแบบลอจิคัล (Overwriting) | ไม่ได้ (แล็บขั้นสูงอาจกู้ได้) | ได้ (นำกลับมาใช้ซ้ำได้) |
| **Purge** | Secure Erase, Degaussing, CE | **ได้ (แล็บขั้นสูงก็กู้คืนไม่ได้)** | ได้สำหรับ SSD/CE, ไม่ได้สำหรับ HDD ที่โดน Degauss |
| **Destroy** | บดย่อย, เผาทำลาย, หลอมละลาย | **ได้ 100% (สื่อถูกทำลายถาวร)** | ไม่ได้ (อุปกรณ์พังทลายสิ้นเชิง) |
```

### ACC-D5-04 — APPROVE WITH REVISION

Domain 5; objective 5.3; severity P0. Target: `content/isc2-cc-2026/reading/domain-5.md:757` — `topic-5-3-irp-lifecycle-phases`.

**Current coverage:** The existing six activities and ransomware example are useful, but the introduction attributes that exact ordered sequence to NIST/ISO/ISC2.

**Gap / judgment:** Current NIST Rev.3 is a CSF-based model; exact ISO equivalence has not been established. This is an attribution/version correction, not evidence that the six activities are wrong or need wholesale replacement.

**Smallest useful change:** Relabel the six activities as the course teaching breakdown, clarify iteration and current NIST context. Keep the diagram/activities and case; fix the nonsensical long-term-containment Thai word in the same bounded edit.

**Constraints:** Do not merely replace six course activities with the six CSF functions as a new mandatory sequence; no unverified ISO quotation. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** [Figure 2 and surrounding explanation](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r3.pdf); Domain 5 screenshot 224716 is a six-activity teaching breakdown; its existence does not make it the current NIST model; [Section 2.1; Figure 2, printed p.5 (PDF page 13)](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r3.pdf)

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

**Exact current claim** (`content/isc2-cc-2026/reading/domain-5.md:757`):

```text
<h3 id="topic-5-3-irp-lifecycle-phases">5.3.3 The 6-Phase Incident Response Lifecycle: 6 ขั้นตอนวงจรการตอบสนองต่อเหตุการณ์</h3>

ตามมาตรฐาน **NIST SP 800-61 / ISO 27035** และหลักสูตร ISC2 CC วงจรการตอบสนองต่อเหตุการณ์แบ่งออกเป็น 6 ขั้นตอนต่อเนื่องกันอย่างเป็นระบบ:
```

### ACC-D5-05 — APPROVE

Domain 5; objective 5.2; severity P1. Target: `content/isc2-cc-2026/reading/domain-5.md:674` — `topic-5-2-mitre-attack-framework`; `js/core/diagram-generator.js:2939` — `mitre-attack-framework`.

**Current coverage:** PowerShell is labelled T1059 and the graphic uses T1566 for named Spearphishing Link and an unversioned count of 14 tactics.

**Gap / judgment:** Named sub-technique IDs and an undated count are inaccurate against the inspected current list. Current MITRE pages support the IDs; generic Phishing T1566 and Pass the Hash T1550.002 remain correct.

**Smallest useful change:** Use T1059.001 for PowerShell and T1566.002 for Spearphishing Link, or use parent names consistently. Remove the count rather than introduce count memorization.

**Constraints:** Keep Why/How distinctions; do not turn ATT&CK into a mandatory linear sequence or require exhaustive IDs. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** [Primary reference](https://attack.mitre.org/techniques/T1059/001/); [Primary reference](https://attack.mitre.org/techniques/T1566/); [Primary reference](https://attack.mitre.org/tactics/enterprise/); Domain 5 screenshots 201553/201613 teach tactic/technique distinction; current diagram-generator.js:2939/2952/2954 adds stale count and parent IDs for named sub-techniques; [PowerShell ID/tactic; also https://attack.mitre.org/tactics/enterprise/ and https://attack.mitre.org/techniques/T1566/](https://attack.mitre.org/techniques/T1059/001/); [Primary reference](https://attack.mitre.org/tactics/enterprise/); [Primary reference](https://attack.mitre.org/techniques/T1566/)

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

**Exact current claim** (`content/isc2-cc-2026/reading/domain-5.md:698`):

```text
- ใน Tactic *Initial Access* อาจใช้เทคนิค **Phishing (T1566)**
- ใน Tactic *Lateral Movement* อาจใช้เทคนิค **Pass the Hash (T1550.002)**
- ใน Tactic *Execution* อาจใช้เทคนิค **Command and Scripting: PowerShell (T1059)**
```

### Related clarification leads

These are reviewed separately from the eleven confirmed correction groups.

### ACC-D4-01 — APPROVE WITH REVISION

Domain 4; objective 4.1; severity P2. Target: `content/isc2-cc-2026/reading/domain-4.md:293` — `topic-4-1-ipv6-architecture`.

**Current coverage:** The current sentence says supports IPsec; the heading says built-in security.

**Gap / judgment:** A beginner could infer automatic protection, but that stronger claim is not actually written. RFC 8504 sections 13–13.1 support the distinction; this resolves the clarification without inventing a defect.

**Smallest useful change:** Add one use/configuration qualification and adjust the heading if necessary. Do not label the entire paragraph a confirmed automatic-encryption error.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** IPv6 can use IPsec, but IPv6 addressing alone does not encrypt or authenticate traffic.

**TH sample:** IPv6 ใช้ IPsec ได้ แต่การใช้ที่อยู่ IPv6 เพียงอย่างเดียวไม่ได้เข้ารหัสหรือยืนยันความถูกต้องของทราฟฟิก

**Evidence:** [Primary reference](https://www.rfc-editor.org/rfc/rfc8504.html#section-13.1); Domain 4 screenshot 151830; DOMAIN 4.txt IPv6 benefit narration; [Sections 13 and 13.1](https://www.rfc-editor.org/rfc/rfc8504.html#section-13.1)

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

### VER-D1-01 — APPROVE WITH REVISION

Domain 1; objective 1.5; severity P1. Target: `content/isc2-cc-2026/reading/domain-1.md:977` — `topic-1-5-isc2-ethics`.

**Current coverage:** Line 989 calls for judgment, while line 1057 gives an exceptionless exam conclusion.

**Gap / judgment:** The internal contradiction and unsupported certainty are established; an official mechanical canon-conflict algorithm is not. The official Code explicitly requires judgment. No new priority algorithm or disclosure instruction is approved.

**Smallest useful change:** Replace only the exceptionless/exam-certainty assertion with the existing professional-judgment principle and authorized escalation. Do not assert the opposite hierarchy.

**Constraints:** Keep the four canons; do not infer permission for public disclosure, illegal action or concealment. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** Protect public welfare, preserve relevant evidence and seek appropriate authorized guidance while considering the professional duties in context.

**TH sample:** คำนึงถึงสวัสดิภาพสาธารณะ เก็บรักษาหลักฐานที่เกี่ยวข้อง และขอคำแนะนำผ่านช่องทางที่มีอำนาจ โดยพิจารณาหน้าที่ทางวิชาชีพร่วมกับบริบท

**Evidence:** [Code introduction and canons](https://www.isc2.org/ethics); Script - DOMAIN 1.txt ethics segment and screenshot 003325; compare existing caution at Reading line 989; [Code of Ethics Canons; current page does not establish the claimed exceptionless conflict algorithm](https://www.isc2.org/ethics)

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

### VER-D2-01 — HOLD

Domain 2; objective 2.4; severity P1. Target: `content/isc2-cc-2026/reading/domain-2.md:532` — `topic-2-4-scorecards`.

**Current coverage:** The fourth scorecard row shows <10 and 12 without units; narration says <10%.

**Gap / judgment:** The original unit, denominator and period are not recoverable from the screenshot. External standards cannot reconstruct missing source units; no silent conversion to count or percent is justified.

**Smallest useful change:** Hold the interpretation of that row. Obtain author clarification or separately approve replacing it with an explicitly hypothetical metric.

**Constraints:** The other three percentage rows are usable; preserve them. **Preserve:** Keep 95% versus 91%, including the four-percentage-point gap.

**EN sample:** The source does not define this row well enough to evaluate it reliably.

**TH sample:** ต้นฉบับยังนิยามแถวนี้ไม่เพียงพอให้ประเมินผลได้อย่างเชื่อถือได้

**Evidence:** Screenshot 2026-09-20 223508.png native resolution; DOMAIN 2.txt:111 says <10%; [Objective 2.4 defines scope but cannot resolve source example units](https://www.isc2.org/certifications/cc/cc-certification-exam-outline)

**Dependencies:** None. **Effort:** Blocked on source clarification; safe replacement is a separate human choice.

## C. Explanation Improvement Decisions

All 19 packages follow. Samples are review drafts; the rejected item illustrates existing meaning and is not an insertion instruction. Current-coverage paragraphs record same-lesson and published-lesson deduplication.

### ENR-D1-02 — APPROVE WITH REVISION

Domain 1; objective 1.2; severity P1. Target: `content/isc2-cc-2026/reading/domain-1.md:436` — `topic-1-2-quantitative-risk`.

**Current coverage:** Worked SLE/ARO/ALE calculations and model limitations already exist; the introduction says formulas must be memorized precisely.

**Gap / judgment:** Unsupported exam certainty, not missing arithmetic. The outline establishes conceptual risk scope without proving a memorization or frequency claim.

**Smallest useful change:** Replace the memorization claim with model/assumption context; retain calculations and add no calculator.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** These calculations illustrate a risk estimate using stated assumptions; the result is not a precise prediction of future loss.

**TH sample:** การคำนวณนี้แสดงประมาณการความเสี่ยงตามสมมติฐานที่ระบุ ผลลัพธ์ไม่ใช่คำทำนายความเสียหายในอนาคตอย่างแม่นยำ

**Evidence:** domain-1-2-review.md:48; content/isc2-cc-2026/reading/domain-1.md:436

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

### ENR-D1-03 — APPROVE WITH REVISION

Domain 1; objective 1.1; severity P1. Target: `content/isc2-cc-2026/reading/domain-1.md:165` — `topic-1-1-identification-authentication`; `content/isc2-cc-2026/reading/domain-1.md:224` — `topic-1-1-authorization-accounting`; `js/core/diagram-generator.js:405` — `aaaLifecycle`.

**Current coverage:** Identification, authentication and all four rows are already explained; Accounting has allowed/denied activity fields nearby.

**Gap / judgment:** The fixed four-stage wording can make three AAA functions appear to be four A functions or logging only the final step. This corrects the relationship without another flow or a universal fixed ordering.

**Smallest useful change:** Clarify the preliminary identity claim and logging throughout relevant attempts; preserve the useful four-row login example.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** Identification states a claim. AAA refers to authentication, authorization and accounting; logs may also record failed or denied attempts.

**TH sample:** Identification คือการกล่าวอ้างตัวตน ส่วน AAA หมายถึง Authentication, Authorization และ Accounting โดย Log อาจบันทึกความพยายามที่ล้มเหลวหรือถูกปฏิเสธด้วย

**Evidence:** domain-1-2-review.md:39; content/isc2-cc-2026/reading/domain-1.md:165

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

### ENR-D1-04 — APPROVE

Domain 1; objective 1.4; severity P1. Target: `content/isc2-cc-2026/reading/domain-1.md:782` — `topic-1-4-control-categories`.

**Current coverage:** The course lists Technical, Managerial, Operational and Physical without relating its labels to official category wording.

**Gap / judgment:** Learners need one taxonomy note, not replacement definitions. Useful for terminology alignment; preserve the contextual examples and overlapping functions.

**Smallest useful change:** Add a short note relating the course subdivision to the outline Technical/Administrative/Physical vocabulary.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** The outline names technical, administrative and physical controls; this course also separates managerial and operational activities for explanation.

**TH sample:** โครงร่างสอบใช้หมวด Technical, Administrative และ Physical ส่วนบทเรียนนี้แยกกิจกรรม Managerial และ Operational เพิ่มเพื่อช่วยอธิบาย

**Evidence:** [1.4](https://www.isc2.org/certifications/cc/cc-certification-exam-outline); domain-1-2-review.md:60; content/isc2-cc-2026/reading/domain-1.md:782

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

### ENR-D1-06 — APPROVE WITH REVISION

Domain 1; objective 1.2; severity P2. Target: `content/isc2-cc-2026/reading/domain-1.md:559` — `topic-1-2-risk-treatment`.

**Current coverage:** Risk treatment lists four responses and explains insurance; later risk/conduct sections already supply related context.

**Gap / judgment:** Acceptance authority and review conditions are not concrete at the canonical treatment paragraph. This adds decision authority, not another treatment taxonomy.

**Smallest useful change:** Add two sentences about documented authorized acceptance and review; cross-reference existing criteria and patch/change material rather than repeat it.

**Constraints:** Do not make the patch installer the risk-acceptance authority or assume a single numeric appetite threshold. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** Risk acceptance is an informed decision by an authorized owner. Record the remaining risk, reason and conditions for review.

**TH sample:** การยอมรับความเสี่ยงเป็นการตัดสินใจโดยผู้มีอำนาจที่ได้รับข้อมูลเพียงพอ ต้องบันทึกความเสี่ยงที่เหลือ เหตุผล และเงื่อนไขทบทวน

**Evidence:** domain-1-2-review.md:53; content/isc2-cc-2026/reading/domain-1.md:559

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

### ENR-D2-03 — APPROVE

Domain 2; objective 2.3; severity P1. Target: `content/isc2-cc-2026/reading/domain-2.md:445` — `topic-2-3-password-protection`.

**Current coverage:** The section covers organizational password policy/storage and phishing-resistant authentication but gives few daily user actions.

**Gap / judgment:** A beginner needs the action to take, not more authenticator mechanics. Makes the existing organizational controls actionable without another MFA lesson.

**Smallest useful change:** Add a concise unique-password/password-manager/no-sharing/reporting paragraph; preserve scoped NIST numerical context.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** Use a unique password for each account, protect it with an approved password manager and report suspected credential exposure through the organization’s route.

**TH sample:** ใช้รหัสผ่านไม่ซ้ำกันในแต่ละบัญชี เก็บด้วย Password Manager ที่องค์กรอนุมัติ และรายงานเมื่อสงสัยว่าข้อมูลยืนยันตัวตนรั่วไหลผ่านช่องทางขององค์กร

**Evidence:** domain-1-2-review.md:96; content/isc2-cc-2026/reading/domain-2.md:445

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

### ENR-D3-03 — APPROVE WITH REVISION

Domain 3; objective 3.1; severity P1. Target: `content/isc2-cc-2026/reading/domain-3.md:138` — `topic-3-1-access-review`.

**Current coverage:** Review findings include a departed-user orphan example and a repeated Finance mover case.

**Gap / judgment:** Activity, ownership and applied revocation are different questions. The existing ownership matrix in the published lesson is a strong reuse source; add no new matrix.

**Smallest useful change:** Clarify that accounts with no accountable owner also need investigation, then distinguish decision, applied change and verification; avoid prescribing a universal definition or idle-day limit.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** Recent activity does not prove an account still has an accountable owner. After the review decision, apply the authorized change and verify effective access.

**TH sample:** การมีการใช้งานล่าสุดไม่ได้พิสูจน์ว่าบัญชียังมีผู้รับผิดชอบ หลังตัดสินใจทบทวน ต้องปรับตามอำนาจและตรวจสิทธิ์ที่ใช้งานได้จริง

**Evidence:** domain-3-4-review.md:52; content/isc2-cc-2026/reading/domain-3.md:138

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

### ENR-D3-05 — REJECT

Domain 3; objective 3.1; severity P1. Target: `content/isc2-cc-2026/reading/domain-3.md:264` — `topic-3-1-iam-frameworks`.

**Current coverage:** The prose already names three related functions and contrasts SP 800-63 with CSF. The diagram explicitly says it is not a rigid sequential pipeline.

**Gap / judgment:** The claimed sequence gap is already addressed. Rejects a redundant expansion. The sample restates existing meaning and is not approved for insertion.

**Smallest useful change:** Do not append another function explanation or redraw the diagram. Treat the authenticator-control wording precision as a small separately scoped label check, not evidence the diagram needs a new pipeline explanation.

**Constraints:** Do not infer that real-world identity proofing is required for every service. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** These are related identity functions, not mandatory consecutive stages. (Already conveyed by the current diagram.)

**TH sample:** สิ่งเหล่านี้เป็นหน้าที่ด้านตัวตนที่สัมพันธ์กัน ไม่ใช่ขั้นตอนต่อเนื่องที่ทุกระบบต้องทำตามลำดับ (ภาพปัจจุบันสื่อไว้แล้ว)

**Evidence:** js/core/diagram-generator.js:1937–1984 — three interrelated facets and explicit non-sequential caption; domain-3-4-review.md:54; content/isc2-cc-2026/reading/domain-3.md:264

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

### ENR-D3-06 — APPROVE

Domain 3; objective 3.1; severity P2. Target: `content/isc2-cc-2026/reading/domain-3.md:287` — `topic-3-1-iam-tools`.

**Current coverage:** OAuth versus OIDC purposes are already correctly separated, but the OAuth Data Format cell reads JSON / Access Token.

**Gap / judgment:** The cell can confuse the JSON token response with the access-token representation. RFC 6749 section 1.4 is sufficient for this precise correction.

**Smallest useful change:** Change that cell to Access token; format varies. Keep the existing authorization/OIDC contrast and no token internals.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** OAuth access tokens can have different formats; a JSON response does not mean the token itself must be JSON or a JWT.

**TH sample:** Access Token ของ OAuth มีได้หลายรูปแบบ การตอบกลับเป็น JSON ไม่ได้หมายความว่า Token ต้องเป็น JSON หรือ JWT

**Evidence:** [Primary reference](https://www.rfc-editor.org/rfc/rfc6749.html#section-1.4); domain-3-4-review.md:55; content/isc2-cc-2026/reading/domain-3.md:287; [Primary reference](https://www.rfc-editor.org/rfc/rfc6749.html#section-1.4)

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

### ENR-D3-08 — APPROVE WITH REVISION

Domain 3; objective 3.2; severity P1. Target: `content/isc2-cc-2026/reading/domain-3.md:426` — `topic-3-2-sod`.

**Current coverage:** The current SoD rule already requires more than one person and gives a three-person payment workflow.

**Gap / judgment:** One boundary example can prevent confusing account count with actor independence. A short counterexample clarifies the existing rule without duplicating its scenario.

**Smallest useful change:** Add one sentence about a person controlling two accounts; do not add another payment table or mandate exactly three people.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** Two accounts controlled by one person do not provide independent approval.

**TH sample:** บัญชีสองบัญชีที่คนเดียวควบคุมไม่ได้ทำให้การอนุมัติเป็นอิสระจากกัน

**Evidence:** domain-3-4-review.md:58; content/isc2-cc-2026/reading/domain-3.md:426

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

### ENR-D4-02 — APPROVE WITH REVISION

Domain 4; objective 4.1; severity P1. Target: `content/isc2-cc-2026/reading/domain-4.md:97` — `topic-4-1-osi-model`.

**Current coverage:** The notes already call OSI conceptual and show Data→transport→IP→frame; the published lesson draws nested envelopes.

**Gap / judgment:** The phrase headers in each layer and fixed TLS placement need qualification. Preserves the useful mapping while limiting an over-literal reading.

**Smallest useful change:** Tighten the existing encapsulation caption and approximate-mapping language; reuse the published envelope explanation, not a second ladder.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** This is a simplified protocol nesting example; it does not mean every OSI layer adds a separate header.

**TH sample:** นี่คือตัวอย่างการซ้อนข้อมูลของโพรโทคอลอย่างย่อ ไม่ได้หมายความว่าทุกชั้น OSI เพิ่ม Header แยกของตนเอง

**Evidence:** js/ui/learning/domain4-presentations.js:17–19 — envelope composition; domain-3-4-review.md:75; content/isc2-cc-2026/reading/domain-4.md:97

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

### ENR-D4-03 — APPROVE WITH REVISION

Domain 4; objective 4.1; severity P1. Target: `content/isc2-cc-2026/reading/domain-4.md:358` — `topic-4-1-ports-multiplexing`.

**Current coverage:** The section has a single IP:port example and common-default service table.

**Gap / judgment:** A one-way endpoint alone does not show the two transport endpoints; a port number is not proof of a secure session. Documentation-only addresses and a named transport keep the illustration unambiguous.

**Smallest useful change:** Add one declared TCP source/destination flow and a common-defaults caveat. Do not append another ports table or a protocol configuration guide.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** Example TCP flow: 192.0.2.10:51514 → 198.51.100.20:443. The port is a service clue; verify the actual protocol and protection.

**TH sample:** ตัวอย่าง TCP: 192.0.2.10:51514 → 198.51.100.20:443 หมายเลขพอร์ตเป็นเบาะแสของบริการ ต้องตรวจโพรโทคอลและการป้องกันที่ใช้จริง

**Evidence:** domain-3-4-review.md:80; content/isc2-cc-2026/reading/domain-4.md:358

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

### ENR-D4-06 — APPROVE WITH REVISION

Domain 4; objective 4.3; severity P1. Target: `content/isc2-cc-2026/reading/domain-4.md:897` — `topic-4-3-shared-responsibility`.

**Current coverage:** Adjacent paragraphs already qualify customer-controlled data/IAM decisions, but table row labels name the whole Data and IAM layers.

**Gap / judgment:** The table can be read independently without the necessary service boundary. Moves the already-correct prose caveat into the misleading compact representation.

**Smallest useful change:** Rename the two customer rows to customer-controlled data decisions/settings and IAM decisions/settings; add a service-specific caption. Do not add another responsibility explanation.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** This matrix summarizes customer-controlled decisions. The provider remains responsible for the parts of the service it operates; check the selected service and agreement.

**TH sample:** ตารางนี้สรุปการตัดสินใจที่ลูกค้าควบคุม ผู้ให้บริการยังรับผิดชอบส่วนบริการที่ตนดำเนินการ ต้องตรวจบริการและข้อตกลงที่เลือก

**Evidence:** [service-dependent customer/provider responsibilities](https://aws.amazon.com/compliance/shared-responsibility-model/); [applying the model in practice](https://aws.amazon.com/compliance/shared-responsibility-model/); domain-3-4-review.md:93; content/isc2-cc-2026/reading/domain-4.md:897

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

### ENR-D4-07 — APPROVE WITH REVISION

Domain 4; objective 4.3; severity P2. Target: `content/isc2-cc-2026/reading/domain-4.md:821` — `topic-4-3-cloud-characteristics`.

**Current coverage:** Elasticity already explicitly includes increasing and decreasing resources; measured service is tied directly to pay-as-you-go billing.

**Gap / judgment:** Only the mandatory-tariff implication needs a change; a new two-direction scaling example would repeat the text. NIST’s definition supports the metering distinction; reject the redundant elasticity expansion.

**Smallest useful change:** Qualify billing as a common use of metering, not the definition of measured service. Preserve the existing scale-up/down explanation.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** Measured service means resource use is metered and can be monitored and controlled; the billing arrangement depends on the service.

**TH sample:** Measured Service หมายถึงการวัด ติดตาม และควบคุมการใช้ทรัพยากรได้ ส่วนรูปแบบคิดค่าบริการขึ้นกับบริการนั้น

**Evidence:** [essential characteristics](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf); [essential characteristics](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf); domain-3-4-review.md:91; content/isc2-cc-2026/reading/domain-4.md:821

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

### ENR-D5-08 — APPROVE WITH REVISION

Domain 5; objective 5.2; severity P1. Target: `content/isc2-cc-2026/reading/domain-5.md:491` — `topic-5-2-alert-triage-prioritization`.

**Current coverage:** The triage text already defines FP/FN and lists context factors, yet says every false negative is most harmful and a suspicious DC login is always P1.

**Gap / judgment:** Two absolute study shortcuts override the better contextual explanation. This is correction of overgeneralized examples rather than a new triage syllabus.

**Smallest useful change:** Replace those absolutes and label the priority matrix illustrative. Reuse existing examples; add no second classifier or matrix.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** A missed threat can be serious, but priority depends on the affected asset, evidence, impact and urgency.

**TH sample:** ภัยที่ตรวจไม่พบอาจร้ายแรง แต่ลำดับความสำคัญขึ้นกับทรัพย์สินที่ได้รับผล หลักฐาน ผลกระทบ และความเร่งด่วน

**Evidence:** domain-5-review.md:40; content/isc2-cc-2026/reading/domain-5.md:491

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

### ENR-D5-12 — APPROVE WITH REVISION

Domain 5; objective 5.4; severity P1. Target: `content/isc2-cc-2026/reading/domain-5.md:962` — `topic-5-4-eol-eos-compensating-controls`.

**Current coverage:** The notes list legacy mitigations and categorical EOL/EOS definitions.

**Gap / judgment:** The missing piece is an owned, temporary risk decision with a migration/review endpoint. Adds a decision boundary to the existing control list, not a new asset-lifecycle wheel.

**Smallest useful change:** Add owner, review date and migration decision to the current legacy example; qualify vendor terms and avoid implying isolation restores support.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** Temporary controls can reduce exposure while an owner plans replacement; they do not restore vendor support or eliminate the remaining risk.

**TH sample:** มาตรการชั่วคราวอาจลดการเผชิญภัยระหว่างที่ผู้รับผิดชอบวางแผนเปลี่ยนระบบ แต่ไม่ได้ทำให้ผู้ผลิตกลับมาสนับสนุนหรือขจัดความเสี่ยงที่เหลือ

**Evidence:** domain-5-review.md:50; content/isc2-cc-2026/reading/domain-5.md:962

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

### ENR-D5-13 — APPROVE WITH REVISION

Domain 5; objective 5.4; severity P1. Target: `content/isc2-cc-2026/reading/domain-5.md:1023` — `topic-5-4-change-management-process`.

**Current coverage:** The seven-step example already includes testing and post-implementation validation/documentation; CAB approval is stated universally.

**Gap / judgment:** Authority and workflow variation need qualification; verification/documentation are not missing wholesale. Avoids the audit’s potential over-expansion of functions the current notes already include.

**Smallest useful change:** Label the seven steps illustrative and CAB one possible authority; retain PIR verification/documentation. Cross-reference the existing baseline/drift section rather than append another process.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** Changes need the authority and controls defined by policy. A CAB is one possible review arrangement, not a mandatory committee for every change.

**TH sample:** การเปลี่ยนแปลงต้องมีผู้มีอำนาจและมาตรการตามนโยบาย CAB เป็นรูปแบบทบทวนหนึ่ง ไม่ใช่คณะกรรมการบังคับสำหรับทุกการเปลี่ยนแปลง

**Evidence:** domain-5-review.md:53; content/isc2-cc-2026/reading/domain-5.md:1023

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

### ENR-D5-14 — APPROVE WITH REVISION

Domain 5; objective 5.5; severity P1. Target: `content/isc2-cc-2026/reading/domain-5.md:1155` — `topic-5-5-appsec-sast-dast`.

**Current coverage:** Static versus running testing is clear; the table pins each method to a fixed lifecycle phase and calls syntax errors the SAST strength.

**Gap / judgment:** Method, timing and findings are conflated. Clarifies the defining distinction without a new SDLC graphic.

**Smallest useful change:** Keep the existing comparison; state typical early use rather than an exclusive stage, and replace syntax-error wording with security weaknesses in code.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** SAST analyzes code without running it; DAST tests a running application. Both can be repeated during development and release work.

**TH sample:** SAST วิเคราะห์โค้ดโดยไม่ต้องรัน ส่วน DAST ทดสอบแอปที่กำลังทำงาน ทั้งสองวิธีทำซ้ำได้ระหว่างการพัฒนาและเตรียมเผยแพร่

**Evidence:** domain-5-review.md:56; content/isc2-cc-2026/reading/domain-5.md:1155

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

### ENR-X-01 — APPROVE WITH REVISION

Domain 0; objective Cross-domain editorial acceptance; severity P1. Target: `content/isc2-cc-2026/reading/domain-1.md:section` — `approved changed passages only`; `content/isc2-cc-2026/reading/domain-2.md:section` — `approved changed passages only`; `content/isc2-cc-2026/reading/domain-3.md:section` — `approved changed passages only`; `content/isc2-cc-2026/reading/domain-4.md:section` — `approved changed passages only`; `content/isc2-cc-2026/reading/domain-5.md:section` — `approved changed passages only`.

**Current coverage:** The notes are mainly Thai explanations with English terminology; published lessons have fuller bilingual explanations.

**Gap / judgment:** Approval of a few edits must not silently authorize translation of all five books. Approve bounded bilingual review, not an uncontrolled full-course rewrite.

**Smallest useful change:** Make semantic EN/TH parity an acceptance criterion for approved changed passages only; scope a full English edition separately.

**Constraints:** No blanket translation or restructuring of unchanged chapters is authorized by this proposal. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** For each approved edit, both languages must preserve the same actor, condition, quantity and limitation.

**TH sample:** ในการแก้ไขที่อนุมัติ แต่ละภาษาต้องคงผู้กระทำ เงื่อนไข ปริมาณ และข้อจำกัดเดียวกัน

**Evidence:** all three domain review appendices; Current ISC2 dated outline and published lesson catalog

**Dependencies:** None. **Effort:** 15–30 minutes per approved passage; full translation is not estimated or approved.

### ENR-X-02 — APPROVE WITH REVISION

Domain 5; objective 5.1; severity P1. Target: `content/isc2-cc-2026/reading/domain-5.md:227` — `topic-5-1-cryptography-symmetric-asymmetric`; `content/isc2-cc-2026/reading/domain-5.md:182` — `topic-5-1-data-states-controls`.

**Current coverage:** Published AI/PQC examples are richer than the notes; the current outline includes foundational applications.

**Gap / judgment:** Reading learners need a compact application, not a repeated AI mini-course or crypto mathematics. Use the applicable outline and already-reviewed slide examples. Distinguish essential concepts from optional implementation detail.

**Smallest useful change:** Place one short PQC paragraph in D5 cryptography and selectively adapt existing AI examples at their canonical concepts; no per-domain quota or new asset suite.

**Constraints:** No quantum deadline, algorithm-parameter memorization or AI-vendor safety promise. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** Some public-key methods face quantum-computing threats. A KEM establishes a shared secret for later use; it is not the same operation as bulk-data encryption.

**TH sample:** วิธีกุญแจสาธารณะบางชนิดเผชิญภัยจากคอมพิวเตอร์ควอนตัม KEM ใช้สร้างความลับร่วมสำหรับนำไปใช้ต่อ ไม่ใช่การเข้ารหัสข้อมูลจำนวนมากโดยตัวมันเอง

**Evidence:** [KEM purpose](https://csrc.nist.gov/pubs/fips/203/final); all three domain review appendices; Current ISC2 dated outline and published lesson catalog; [Primary reference](https://www.isc2.org/certifications/cc/cc-certification-exam-outline); [Primary reference](https://csrc.nist.gov/pubs/fips/203/final)

**Dependencies:** None. **Effort:** 1–2 hours for compact scoped applications and bilingual/source checks.

## D. Practical Example Decisions

All 13 packages follow. The learning outcome is the stated gap/change; each bounded synthetic case belongs at its exact listed subsection. Prefer short text or a single filled record/table; no scenario quota and no additional image unless separately approved.

### ENR-D1-05 — APPROVE WITH REVISION

Domain 1; objective 1.1; severity P2. Target: `content/isc2-cc-2026/reading/domain-1.md:224` — `topic-1-1-authorization-accounting`.

**Current coverage:** The same subsection already allows reading and denies deleting, then lists Who/What/When/Where/outcome fields.

**Gap / judgment:** It has no visible log record joining that decision to the evidence. One record makes accounting tangible without another AAA definition.

**Smallest useful change:** Add one log row for the existing denied-delete action; reuse its actor/resource rather than introduce a separate order-approval story.

**Constraints:** Fictional account/resource, explicit example time zone if timestamps are compared; a log does not alone identify the physical person. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** 10:04 | account A | delete system file | denied — this records the attempt, not permission to delete.

**TH sample:** 10:04 | บัญชี A | ลบไฟล์ระบบ | ปฏิเสธ — บันทึกนี้แสดงความพยายาม ไม่ใช่สิทธิ์ให้ลบ

**Evidence:** domain-1-2-review.md:41; content/isc2-cc-2026/reading/domain-1.md:224

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

**Format / realism:** Short text example; use one compact record/table only when named in the required change. No new image. Synthetic bounded case in the listed subsection; state the case policy/assumptions, not a universal operational instruction.

### ENR-D2-04 — APPROVE WITH REVISION

Domain 2; objective 2.1; severity P2. Target: `content/isc2-cc-2026/reading/domain-2.md:89` — `topic-2-1-grc-tools`.

**Current coverage:** Five GRC platform capabilities are listed; the next subsection already has a substantial risk register.

**Gap / judgment:** The relationship among requirement, control, evidence and responsible owner is not shown as a linked record. Demonstrates evidence linkage rather than repeating the existing ransomware register.

**Smallest useful change:** Use one compact authored record, not another risk register: policy requirement→MFA control→dated evidence→owner/review.

**Constraints:** Illustrative organizational requirement, not a universal regulation; do not promise a GRC tool makes compliance automatic. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** Requirement: protect privileged access. Control: approved MFA policy. Evidence: dated assessment. Owner: IAM lead; review due on the stated date.

**TH sample:** ข้อกำหนด: ปกป้องสิทธิ์ระดับสูง มาตรการ: นโยบาย MFA ที่อนุมัติ หลักฐาน: ผลประเมินที่ลงวันที่ ผู้รับผิดชอบ: หัวหน้า IAM พร้อมวันทบทวนที่ระบุ

**Evidence:** domain-1-2-review.md:80; content/isc2-cc-2026/reading/domain-2.md:89

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

**Format / realism:** Short text example; use one compact record/table only when named in the required change. No new image. Synthetic bounded case in the listed subsection; state the case policy/assumptions, not a universal operational instruction.

### ENR-D2-05 — APPROVE WITH REVISION

Domain 2; objective 2.2; severity P2. Target: `content/isc2-cc-2026/reading/domain-2.md:180` — `topic-2-2-bcp-components`.

**Current coverage:** BCP lists critical processes, roles, communications and alternates; BC/DR comparisons elsewhere are already present.

**Gap / judgment:** The learner has not seen those fields form a miniature operational continuity plan. Adds recognition of a plan rather than another definition of continuity.

**Smallest useful change:** Adapt a two-to-four-line hypothetical plan showing minimum service, approved workaround, owner and contact route; no full corporate template.

**Constraints:** No unsafe medical/industrial instructions or real contact details; state the scenario is illustrative. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** During a site outage, the designated service lead uses the approved alternate process to maintain the defined minimum service and informs staff through the agreed channel.

**TH sample:** เมื่อสถานที่หลักหยุดใช้งาน ผู้รับผิดชอบบริการใช้กระบวนการสำรองที่อนุมัติเพื่อคงบริการขั้นต่ำที่กำหนด และแจ้งทีมผ่านช่องทางที่ตกลงไว้

**Evidence:** domain-1-2-review.md:83; content/isc2-cc-2026/reading/domain-2.md:180

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

**Format / realism:** Short text example; use one compact record/table only when named in the required change. No new image. Synthetic bounded case in the listed subsection; state the case policy/assumptions, not a universal operational instruction.

### ENR-D2-06 — APPROVE

Domain 2; objective 2.4; severity P2. Target: `content/isc2-cc-2026/reading/domain-2.md:485` — `topic-2-4-mttd-mttr`.

**Current coverage:** MTTR endpoints and alternative expansions are already qualified; no worked average appears in the target subsection.

**Gap / judgment:** A beginner needs to connect defined intervals with a numerical mean. The arithmetic is simple and the outcome teaches measurement boundaries, not memorized thresholds.

**Smallest useful change:** Add a single three-case calculation and the same-population/time-boundary caveat; no timing widget.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** For three incidents measured using the same detection endpoints, 10, 20 and 30 minutes average to 20 minutes. This mean does not describe incidents that were never detected.

**TH sample:** เหตุการณ์สามกรณีที่ใช้จุดเริ่มและจุดสิ้นสุดการตรวจพบเดียวกัน ใช้เวลา 10, 20 และ 30 นาที จึงเฉลี่ย 20 นาที ค่าเฉลี่ยนี้ไม่ได้อธิบายเหตุการณ์ที่ยังตรวจไม่พบ

**Evidence:** domain-1-2-review.md:99; content/isc2-cc-2026/reading/domain-2.md:485

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

**Format / realism:** Short text example; use one compact record/table only when named in the required change. No new image. Synthetic bounded case in the listed subsection; state the case policy/assumptions, not a universal operational instruction.

### ENR-D3-02 — APPROVE

Domain 3; objective 3.1; severity P1. Target: `content/isc2-cc-2026/reading/domain-3.md:89` — `topic-3-1-provisioning`.

**Current coverage:** Provisioning already requires role need and approval, then lists six illustrative activities.

**Gap / judgment:** Approval and effective enforcement can still differ; there is no observed-versus-approved test result. The example adds verification, not another onboarding sequence.

**Smallest useful change:** Adapt the existing published three-action check as one compact comparison: report read allowed, payroll change denied, unrelated administration denied; correct the observed mismatch.

**Constraints:** Use synthetic roles and explicitly approved actions; do not infer HR alone approves every resource permission. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** Approved: read the report. Observed: payroll modification also succeeds. Correct the unintended grant and verify both allowed and denied actions again.

**TH sample:** สิทธิ์ที่อนุมัติคืออ่านรายงาน แต่ผลตรวจพบว่าแก้ Payroll ได้ด้วย ต้องแก้สิทธิ์ที่เกินและตรวจซ้ำทั้งงานที่อนุญาตและงานที่ต้องปฏิเสธ

**Evidence:** domain-3-4-review.md:51; content/isc2-cc-2026/reading/domain-3.md:89

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

**Format / realism:** Short text example; use one compact record/table only when named in the required change. No new image. Synthetic bounded case in the listed subsection; state the case policy/assumptions, not a universal operational instruction.

### ENR-D3-04 — APPROVE

Domain 3; objective 3.1; severity P1. Target: `content/isc2-cc-2026/reading/domain-3.md:193` — `topic-3-1-deprovisioning`.

**Current coverage:** The notes separately list central disable, app revocation and group/privileged removal, with a careful retention caveat.

**Gap / judgment:** A concrete surviving session explains why these are separate actions. A realistic bounded observation explains coordinated withdrawal without claiming every application behaves identically.

**Smallest useful change:** Adapt the published observed-session case and one denial check; no token/configuration tutorial.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** The central account is disabled, but an existing application session still works in this example. Use the supported revocation process and verify the application denies access.

**TH sample:** ในตัวอย่างนี้บัญชีกลางถูกระงับแล้ว แต่ Session เดิมในแอปยังใช้ได้ จึงต้องใช้กระบวนการเพิกถอนที่ระบบรองรับและตรวจว่าแอปปฏิเสธการเข้าถึง

**Evidence:** domain-3-4-review.md:53; content/isc2-cc-2026/reading/domain-3.md:193

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

**Format / realism:** Short text example; use one compact record/table only when named in the required change. No new image. Synthetic bounded case in the listed subsection; state the case policy/assumptions, not a universal operational instruction.

### ENR-D3-07 — APPROVE WITH REVISION

Domain 3; objective 3.1; severity P1. Target: `content/isc2-cc-2026/reading/domain-3.md:345` — `topic-3-1-least-privilege`.

**Current coverage:** Least privilege already explicitly includes service accounts and programs, with role-scoped access and reviews.

**Gap / judgment:** Non-human identity ownership and retirement are not concrete in the reading example. The gap is lifecycle accountability, not whether least privilege applies to software.

**Smallest useful change:** Adapt one read-only reporting workload case and name its accountable team/review trigger; no separate bot chapter or human MFA rule.

**Constraints:** Do not prescribe interactive human authentication for unattended workloads. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** The reporting workload may read only the approved report source. Its owner reviews the purpose and retires the identity when the job ends.

**TH sample:** ระบบงานรายงานอ่านได้เฉพาะแหล่งข้อมูลที่อนุมัติ ผู้รับผิดชอบทบทวนวัตถุประสงค์และเลิกใช้ Identity เมื่องานสิ้นสุด

**Evidence:** domain-3-4-review.md:56; content/isc2-cc-2026/reading/domain-3.md:345

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

**Format / realism:** Short text example; use one compact record/table only when named in the required change. No new image. Synthetic bounded case in the listed subsection; state the case policy/assumptions, not a universal operational instruction.

### ENR-D4-05 — APPROVE WITH REVISION

Domain 4; objective 4.2; severity P1. Target: `content/isc2-cc-2026/reading/domain-4.md:700` — `topic-4-2-vlans-routing`.

**Current coverage:** VLAN separation and inter-VLAN Layer 3 enforcement are already explained; review scenarios already discuss IoT separation.

**Gap / judgment:** The allowed legitimate flow versus denied sensitive flow is the useful addition. Adds enforcement reasoning while preserving the current VLAN definition and existing segmentation picture.

**Smallest useful change:** Add a two-row camera→recorder allow / camera→database deny policy test at the existing VLAN paragraph, or replace a generic IoT example rather than append another scenario.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** Permit the camera to send its required stream to the recorder; deny the camera’s unrelated path to the finance database and verify both results.

**TH sample:** อนุญาตให้กล้องส่งสตรีมที่จำเป็นไปยังเครื่องบันทึก ปฏิเสธเส้นทางที่ไม่เกี่ยวข้องไปฐานข้อมูลการเงิน และตรวจผลทั้งสองกรณี

**Evidence:** domain-3-4-review.md:87; content/isc2-cc-2026/reading/domain-4.md:700

**Dependencies:** ACC-D4-03. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

**Format / realism:** Short text example; use one compact record/table only when named in the required change. No new image. Synthetic bounded case in the listed subsection; state the case policy/assumptions, not a universal operational instruction.

### ENR-D5-06 — APPROVE WITH REVISION

Domain 5; objective 5.1; severity P1. Target: `content/isc2-cc-2026/reading/domain-5.md:182` — `topic-5-1-data-states-controls`.

**Current coverage:** Three data states already have definitions, threats, controls and a summary table; a lost-laptop scenario appears later.

**Gap / judgment:** The transitions of the same record and authorized export boundary are not connected. The same record connects mechanisms with use authority; another three-state definition would be redundant.

**Smallest useful change:** Use one short record journey through storage, TLS and authorized display/export. Select one AI/DLP extension if it replaces repetition; no extra state cards.

**Constraints:** Do not promise FDE/TLS protects against every authorized-session exposure or that DLP sees every encrypted channel. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** A customer record is stored encrypted, sent through TLS and displayed by an authorized application. These controls do not authorize copying it into an unapproved external service.

**TH sample:** ข้อมูลลูกค้าถูกเก็บแบบเข้ารหัส ส่งผ่าน TLS และแสดงในแอปที่ได้รับอนุญาต มาตรการเหล่านี้ไม่ได้อนุญาตให้นำข้อมูลไปใส่บริการภายนอกที่ไม่ได้รับอนุมัติ

**Evidence:** domain-5-review.md:31; content/isc2-cc-2026/reading/domain-5.md:182

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

**Format / realism:** Short text example; use one compact record/table only when named in the required change. No new image. Synthetic bounded case in the listed subsection; state the case policy/assumptions, not a universal operational instruction.

### ENR-D5-07 — APPROVE WITH REVISION

Domain 5; objective 5.2; severity P1. Target: `content/isc2-cc-2026/reading/domain-5.md:411` — `topic-5-2-monitoring-siem-correlation`.

**Current coverage:** An existing four-event chain immediately concludes successful brute force and code compromise; the chapter already has a logging-field list.

**Gap / judgment:** The chain lacks explicit identity/time linkage and alternative explanations; certainty is too strong. This package is partly a confidence/overstatement correction, not just an additional example.

**Smallest useful change:** Replace the conclusion and add minimal timestamps/account/host linkage to the existing chain, not another chain. State that analysts validate the hypothesis and response priority.

**Constraints:** An alert/correlation is not proof; preserve originals and do not invent a mandatory severity from one signal. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** Related failed logins, a later success and a script alert warrant investigation. Confirm the account, host, time zone and authorized activity before concluding compromise.

**TH sample:** การล็อกอินล้มเหลวที่สัมพันธ์กัน ตามด้วยการสำเร็จและ Alert สคริปต์ควรได้รับการตรวจสอบ ต้องยืนยันบัญชี โฮสต์ เขตเวลา และกิจกรรมที่ได้รับอนุญาตก่อนสรุปว่าถูกบุกรุก

**Evidence:** domain-5-review.md:36; content/isc2-cc-2026/reading/domain-5.md:411

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

**Format / realism:** Short text example; use one compact record/table only when named in the required change. No new image. Synthetic bounded case in the listed subsection; state the case policy/assumptions, not a universal operational instruction.

### ENR-D5-10 — APPROVE WITH REVISION

Domain 5; objective 5.3; severity P1. Target: `content/isc2-cc-2026/reading/domain-5.md:860` — `topic-5-3-evidence-handling-chain-of-custody`.

**Current coverage:** Custody prose already names collector, place, time, recipient and purpose; hash/image explanations are present.

**Gap / judgment:** A single filled handoff demonstrates the fields; the surrounding court/power/volatility absolutes need restraint. Teaches a record with a clear purpose; no forensic tutorial or admissibility guarantee is needed.

**Smallest useful change:** Add a synthetic one-line handoff and a hash-versus-custody distinction; qualify operational/legal statements rather than prescribe evidence collection steps.

**Constraints:** Follow trained authorized procedures and safety/active-harm priorities; no universal shutdown or court-rejection instruction. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** Evidence E-17: transferred from examiner A to custodian B at 10:00 UTC for secured storage; both acknowledge the transfer. A matching hash alone does not supply this custody history.

**TH sample:** หลักฐาน E-17 ส่งจากผู้ตรวจ A ให้ผู้ดูแล B เวลา 10:00 UTC เพื่อเก็บอย่างปลอดภัย โดยทั้งคู่รับทราบ การมี Hash ตรงกันเพียงอย่างเดียวไม่ได้ให้ประวัติการส่งมอบนี้

**Evidence:** domain-5-review.md:47; content/isc2-cc-2026/reading/domain-5.md:860

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

**Format / realism:** Short text example; use one compact record/table only when named in the required change. No new image. Synthetic bounded case in the listed subsection; state the case policy/assumptions, not a universal operational instruction.

### ENR-D5-11 — APPROVE WITH REVISION

Domain 5; objective 5.3; severity P2. Target: `content/isc2-cc-2026/reading/domain-5.md:895` — `topic-5-3-ir-exercises-tabletop-simulation`.

**Current coverage:** Exercise comparison and the earlier IR recovery example already describe testing and restoration.

**Gap / judgment:** The distinct missing artifact is an observed exercise result and owned follow-up. This tests usable recovery rather than repeating backup-job completion.

**Smallest useful change:** Use one compact restore-test result with expected outcome, actual application result, gap owner and retest. Do not add another tabletop/technical comparison or fixed exercise frequency.

**Constraints:** Fictional result, approved isolated environment and defined scope; no zero-risk promise. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** The isolated restore completed, but the application could not read two expected records. Assign an owner to resolve the gap and repeat the defined test.

**TH sample:** การกู้คืนในระบบแยกเสร็จแล้ว แต่แอปอ่านข้อมูลที่คาดไว้สองรายการไม่ได้ ต้องมอบหมายผู้รับผิดชอบแก้ช่องว่างและทดสอบตามเกณฑ์เดิมอีกครั้ง

**Evidence:** domain-5-review.md:48; content/isc2-cc-2026/reading/domain-5.md:895

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

**Format / realism:** Short text example; use one compact record/table only when named in the required change. No new image. Synthetic bounded case in the listed subsection; state the case policy/assumptions, not a universal operational instruction.

### ENR-D5-15 — APPROVE

Domain 5; objective 5.5; severity P2. Target: `content/isc2-cc-2026/reading/domain-5.md:1197` — `topic-5-5-threat-modeling-design`.

**Current coverage:** Threat modeling is defined and STRIDE categories are listed, but there is no single evaluated boundary/control/test example.

**Gap / judgment:** A concrete request path can connect the abstract analysis to a design decision. The example follows the existing published threat-modeling goal while adding one evaluated request boundary.

**Smallest useful change:** Add one account-recovery request case with the untrusted request, server-side verification, limited reset action and a denial test; no exploit instructions or six-category tour.

**Constraints:** Do not claim MFA alone solves recovery design or that threat modeling ends when coding starts. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**EN sample:** An untrusted recovery request must not reset another account. Verify the authorized recovery evidence server-side, limit the reset action, and test that an invalid request is denied.

**TH sample:** คำขอกู้บัญชีที่ไม่น่าเชื่อถือต้องรีเซ็ตบัญชีผู้อื่นไม่ได้ ให้ตรวจหลักฐานกู้บัญชีที่อนุญาตบนเซิร์ฟเวอร์ จำกัดการรีเซ็ต และทดสอบว่าคำขอไม่ถูกต้องถูกปฏิเสธ

**Evidence:** domain-5-review.md:57; content/isc2-cc-2026/reading/domain-5.md:1197

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

**Format / realism:** Short text example; use one compact record/table only when named in the required change. No new image. Synthetic bounded case in the listed subsection; state the case policy/assumptions, not a universal operational instruction.

## E. Visual and Media Decisions

All 13 media-manifest assets, including three previously rejected duplicates, are listed below. Two HSM asset rows share one package decision. `phase-2/media-decisions.json` retains individual objectives, components, localized alt/captions, responsive requirements and rights fields. No asset exists as a result of this review.

### VIS-01 — APPROVE WITH REVISION (package VIS-01)

**Target:** `content/isc2-cc-2026/reading/domain-4.md:406` — `topic-4-1-network-devices`

**Existing coverage / learning problem:** Reading Notes have IDS/IPS text; the published lesson has a function/limitation comparison, not paired physical traffic paths. Traffic-copy observation versus in-path enforcement remains a distinct visual relationship.

**Format / required relationships:** Code-native SVG/HTML; selectable localized text. Use one compact paired static topology with client/server, switch mirror/TAP→IDS→alert, and client→IPS→server with prevention enabled. Reuse existing wording; no product UI.

**Benefit / complexity:** A placement picture can teach what a function table cannot. It should not grow into another device taxonomy. 2–3 hours for one static bilingual responsive diagram and targeted QA

**Technical limits:** Label traffic versus copied traffic and alert; a passive sensor does not directly block that path, and a configured IPS can miss/allow traffic.

**Accessibility:** Equivalent adjacent prose/table; non-color labels, meaningful figure caption, readable Thai/English and contrast; keyboard and announced state for any interaction. Stack at 360–390 px; do not shrink labels into illegibility; preserve aspect ratio and intrinsic dimensions. Static default; if approved interaction, user steps only, no autoplay, instant transitions for reduced-motion; complete no-JS equivalent

### VIS-02 — APPROVE WITH REVISION (package VIS-02)

**Target:** `content/isc2-cc-2026/reading/domain-5.md:318` — `topic-5-1-tpm-vs-hsm`

**Existing coverage / learning problem:** The TPM/HSM table and published signature-custody comparison explain functions; neither shows the requested application/HSM protection boundary. A learner cannot yet see that a request/output crosses the boundary while the configured private key stays inside.

**Format / required relationships:** Code-native SVG/HTML; selectable localized text. Use one static application→authorized signing request→HSM boundary/private key→signature response, with concise verifier text outside. Do not combine an extra generic encryption track.

**Benefit / complexity:** Different from a physical photo: it teaches key custody and operation flow. 2–3 hours after crypto/hardware corrections

**Technical limits:** Explicit non-exportable-key example; wrapped backup/export policies vary. No private-key movement, generic public-key decryption or signed-means-safe promise.

**Accessibility:** Equivalent adjacent prose/table; non-color labels, meaningful figure caption, readable Thai/English and contrast; keyboard and announced state for any interaction. Stack at 360–390 px; do not shrink labels into illegibility; preserve aspect ratio and intrinsic dimensions. Static default; if approved interaction, user steps only, no autoplay, instant transitions for reduced-motion; complete no-JS equivalent

### D2-A01 — APPROVE WITH REVISION (package D2-A01)

**Target:** `content/isc2-cc-2026/reading/domain-2.md:273` — `topic-2-2-drp-sites`

**Existing coverage / learning problem:** The target already has a full/differential/incremental table and Thursday failure/Sunday full worked set; the slide shows copy/verify/restore/test. A compact set-dependency picture can make the restore-chain dependency visible without new arithmetic.

**Format / required relationships:** Code-native SVG/HTML; selectable localized text. Adapt the existing Sunday/Wednesday/Thursday example. State the incident occurs before Thursday’s next backup; highlight full+latest differential versus full+all required incrementals.

**Benefit / complexity:** Distinct visual encoding of existing set relationships, not another recovery timeline. 1.5–2.5 hours for the compact diagram and bilingual equivalent

**Technical limits:** Conventional simplified backup model; label valid accessible restore sets and no universal speed/storage guarantee.

**Accessibility:** Equivalent adjacent prose/table; non-color labels, meaningful figure caption, readable Thai/English and contrast; keyboard and announced state for any interaction. Stack at 360–390 px; do not shrink labels into illegibility; preserve aspect ratio and intrinsic dimensions. Static default; if approved interaction, user steps only, no autoplay, instant transitions for reduced-motion; complete no-JS equivalent

### D2-A02 — APPROVE WITH REVISION (package D2-A02)

**Target:** `content/isc2-cc-2026/reading/domain-2.md:420` — `topic-2-3-social-engineering-techniques`

**Existing coverage / learning problem:** The notes and published lesson teach pressure, request and independent verification, but no inspectable message interface is present. Message-interface recognition can add value if it demonstrates the requested action and safe verification route.

**Format / required relationships:** Original labelled simulated HTML message; accessible text and annotations. No real screenshot acquisition.. Choose an original clearly labelled simulated HTML message with adjacent annotations, rather than a licensed-real screenshot dependency or rasterized text.

**Benefit / complexity:** An authored interface avoids unresolved third-party image rights and supports readable responsive text. 1.5–2.5 hours; real external-photo variant is not approved

**Technical limits:** No live links, real PII, copied trademarks or grammar-as-proof heuristic; report and independently verify. Original raster/AI illustration is optional only if it adds value beyond accessible HTML.

**Accessibility:** Equivalent adjacent prose/table; non-color labels, meaningful figure caption, readable Thai/English and contrast; keyboard and announced state for any interaction. Stack at 360–390 px; do not shrink labels into illegibility; preserve aspect ratio and intrinsic dimensions. Static default; if approved interaction, user steps only, no autoplay, instant transitions for reduced-motion; complete no-JS equivalent

### D2-A03 — REJECT (package D2-A03)

**Target:** `content/isc2-cc-2026/reading/domain-2.md:525` — `topic-2-4-dashboards`

**Existing coverage / learning problem:** Current reporting renderer already draws trend bars, actual versus target, and evidence-to-action views. The stated concept is already taught; interaction/duplication benefit is unproven.

**Format / required relationships:** Code-native SVG/HTML; selectable localized text. Reuse existing content; create no new tool or asset.

**Benefit / complexity:** A new three-view reporting asset duplicates the actual custom-rendered lesson. No new media implementation

**Technical limits:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees.

**Accessibility:** Equivalent adjacent prose/table; non-color labels, meaningful figure caption, readable Thai/English and contrast; keyboard and announced state for any interaction. Stack at 360–390 px; do not shrink labels into illegibility; preserve aspect ratio and intrinsic dimensions. Static default; if approved interaction, user steps only, no autoplay, instant transitions for reduced-motion; complete no-JS equivalent

### D4-M01 — REJECT (package D4-M01)

**Target:** `content/isc2-cc-2026/reading/domain-4.md:97` — `topic-4-1-osi-model`

**Existing coverage / learning problem:** Published slide-d4-01-05-encapsulation already renders nested frame/IP/transport envelopes through the custom envelope branch. A new diagram would duplicate an existing code-native visual.

**Format / required relationships:** Code-native SVG/HTML; selectable localized text. Link/adapt the existing learning explanation within ENR-D4-02; do not create a second asset.

**Benefit / complexity:** The reuse gate is satisfied by actual renderer source, not merely a title or keyword match. No new asset work

**Technical limits:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees.

**Accessibility:** Equivalent adjacent prose/table; non-color labels, meaningful figure caption, readable Thai/English and contrast; keyboard and announced state for any interaction. Stack at 360–390 px; do not shrink labels into illegibility; preserve aspect ratio and intrinsic dimensions. Static default; if approved interaction, user steps only, no autoplay, instant transitions for reduced-motion; complete no-JS equivalent

### D5-M16 — HOLD (package D5-M16)

**Target:** `content/isc2-cc-2026/reading/domain-5.md:1197` — `topic-5-5-threat-modeling-design`

**Existing coverage / learning problem:** The notes have no concrete boundary case, but ENR-D5-15 is proposed to add one and the published lesson already explains the analysis. It is not established that a second visual is needed after the bounded practical example.

**Format / required relationships:** Code-native SVG/HTML; selectable localized text. Evaluate the approved prose/table example first. Approve a small three-node boundary diagram only if a distinct comprehension problem remains.

**Benefit / complexity:** Conditional learning need is unresolved; this is not an instruction to build a diagram automatically. No implementation until need review; possible 1.5–2.5 hours later

**Technical limits:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees.

**Accessibility:** Equivalent adjacent prose/table; non-color labels, meaningful figure caption, readable Thai/English and contrast; keyboard and announced state for any interaction. Stack at 360–390 px; do not shrink labels into illegibility; preserve aspect ratio and intrinsic dimensions. Static default; if approved interaction, user steps only, no autoplay, instant transitions for reduced-motion; complete no-JS equivalent

### IMG-HSM-NET — HOLD (package IMG-HSM-PAIR)

**Target:** `content/isc2-cc-2026/reading/domain-5.md:318` — `topic-5-1-tpm-vs-hsm`

**Existing coverage / learning problem:** The current HSM source slide is text-only and the table lacks physical recognition; network and USB products are documented. A two-form comparison is educationally plausible, but no exact image/crop/rightsholder permission is cleared.

**Format / required relationships:** Optimized WebP/AVIF with compatible fallback. Retain link-only product references and hold locally hosted photos until each selected binary has permission, required attribution and intended-use evidence.

**Benefit / complexity:** Product identity is verified; image redistribution is not. The generic operation diagram can proceed independently. Rights-dependent; no image acquisition authorized

**Technical limits:** Do not infer certification or throughput from appearance. A third PCIe photo is unnecessary; a generated product lookalike is not documentary evidence.

**Accessibility:** Equivalent adjacent prose/table; non-color labels, meaningful figure caption, readable Thai/English and contrast; keyboard and announced state for any interaction. Stack at 360–390 px; do not shrink labels into illegibility; preserve aspect ratio and intrinsic dimensions. Static default; if approved interaction, user steps only, no autoplay, instant transitions for reduced-motion; complete no-JS equivalent

**External-image research:** Thales — Luna network HSM; [original product source](https://cpl.thalesgroup.com/encryption/hardware-security-modules/network-hsms); [publisher terms](https://cpl.thalesgroup.com/legal). No specific binary/crop or redistribution license established; public product availability is not reuse permission. Attribution: Unestablished until an exact image/license is selected; publisher name and product link alone do not clear rights. Local storage: **not approved**. For operation/placement use the approved original diagram. An invented product lookalike is not documentary hardware evidence.

### IMG-HSM-USB — HOLD (package IMG-HSM-PAIR)

**Target:** `content/isc2-cc-2026/reading/domain-5.md:318` — `topic-5-1-tpm-vs-hsm`

**Existing coverage / learning problem:** The current HSM source slide is text-only and the table lacks physical recognition; network and USB products are documented. A two-form comparison is educationally plausible, but no exact image/crop/rightsholder permission is cleared.

**Format / required relationships:** Optimized WebP/AVIF with compatible fallback. Retain link-only product references and hold locally hosted photos until each selected binary has permission, required attribution and intended-use evidence.

**Benefit / complexity:** Product identity is verified; image redistribution is not. The generic operation diagram can proceed independently. Rights-dependent; no image acquisition authorized

**Technical limits:** Do not infer certification or throughput from appearance. A third PCIe photo is unnecessary; a generated product lookalike is not documentary evidence.

**Accessibility:** Equivalent adjacent prose/table; non-color labels, meaningful figure caption, readable Thai/English and contrast; keyboard and announced state for any interaction. Stack at 360–390 px; do not shrink labels into illegibility; preserve aspect ratio and intrinsic dimensions. Static default; if approved interaction, user steps only, no autoplay, instant transitions for reduced-motion; complete no-JS equivalent

**External-image research:** Yubico — YubiHSM 2 USB device; [original product source](https://www.yubico.com/product/yubihsm-2/); [publisher terms](https://www.yubico.com/support/terms-conditions/yubico-website-terms-conditions/). No specific binary/crop or redistribution license established; public product availability is not reuse permission. Attribution: Unestablished until an exact image/license is selected; publisher name and product link alone do not clear rights. Local storage: **not approved**. For operation/placement use the approved original diagram. An invented product lookalike is not documentary hardware evidence.

### IMG-FW — REJECT (package IMG-FW)

**Target:** `content/isc2-cc-2026/reading/domain-4.md:406` — `topic-4-1-network-devices`

**Existing coverage / learning problem:** The notes already distinguish appliance/software functions and the source screenshot shows host/network placement. The proposal lacks evidence of a remaining physical-recognition problem.

**Format / required relationships:** Optimized WebP/AVIF with compatible fallback. Keep the existing explanations and prioritize VIS-01 placement relationships; no firewall product photo now.

**Benefit / complexity:** A chassis photograph adds little to understanding filtering and the rights are unresolved. No photo work

**Technical limits:** Device shape and Ethernet connectors do not establish filtering features or a secure configuration.

**Accessibility:** Equivalent adjacent prose/table; non-color labels, meaningful figure caption, readable Thai/English and contrast; keyboard and announced state for any interaction. Stack at 360–390 px; do not shrink labels into illegibility; preserve aspect ratio and intrinsic dimensions. Static default; if approved interaction, user steps only, no autoplay, instant transitions for reduced-motion; complete no-JS equivalent

**External-image research:** Fortinet — FortiGate appliance; [original product source](https://www.fortinet.com/products/next-generation-firewall); [publisher terms](https://www.fortinet.com/corporate/about-us/legal). No specific binary/crop or redistribution license established; public product availability is not reuse permission. Attribution: Unestablished until an exact image/license is selected; publisher name and product link alone do not clear rights. Local storage: **not approved**. For operation/placement use the approved original diagram. An invented product lookalike is not documentary hardware evidence.

### INT-IDS — HOLD (package INT-IDS)

**Target:** `content/isc2-cc-2026/reading/domain-4.md:406` — `topic-4-1-network-devices`

**Existing coverage / learning problem:** Static VIS-01 is still a proposal; existing IDS/IPS functions are already explained. There is no observed evidence that stepping a request improves learning beyond the static paired topology.

**Format / required relationships:** Code-native SVG/HTML; selectable localized text. Review static VIS-01 with learners first. Only then consider send/next/previous/reset states for the same request and text-equivalent result.

**Benefit / complexity:** Motion has a plausible purpose but an unmet need has not been demonstrated. Deferred; 3–5 hours plus interaction accessibility testing if later justified

**Technical limits:** Default paused; no autoplay/flashing/timer; keyboard/touch and announced state; reduced-motion instant transitions and complete no-JS/static equivalent.

**Accessibility:** Equivalent adjacent prose/table; non-color labels, meaningful figure caption, readable Thai/English and contrast; keyboard and announced state for any interaction. Stack at 360–390 px; do not shrink labels into illegibility; preserve aspect ratio and intrinsic dimensions. Static default; if approved interaction, user steps only, no autoplay, instant transitions for reduced-motion; complete no-JS equivalent

### INT-ABAC — REJECT (package INT-ABAC)

**Target:** `content/isc2-cc-2026/reading/domain-3.md:594` — `topic-3-2-abac`

**Existing coverage / learning problem:** The notes already have the ABAC request rule/scenario and a published request-evaluation explanation. The stated concept is already taught; interaction/duplication benefit is unproven.

**Format / required relationships:** Code-native SVG/HTML; selectable localized text. Reuse existing content; create no new tool or asset.

**Benefit / complexity:** No demonstrated gap warrants a second attribute-control tool. This does not claim the existing ABAC slide is itself an interactive form. No new media implementation

**Technical limits:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees.

**Accessibility:** Equivalent adjacent prose/table; non-color labels, meaningful figure caption, readable Thai/English and contrast; keyboard and announced state for any interaction. Stack at 360–390 px; do not shrink labels into illegibility; preserve aspect ratio and intrinsic dimensions. Static default; if approved interaction, user steps only, no autoplay, instant transitions for reduced-motion; complete no-JS equivalent

### INT-TRIAGE — REJECT (package INT-TRIAGE)

**Target:** `content/isc2-cc-2026/reading/domain-5.md:491` — `topic-5-2-alert-triage-prioritization`

**Existing coverage / learning problem:** The notes already contain FP/FN examples and the published detection-errors slide distinguishes detector output from reality. The stated concept is already taught; interaction/duplication benefit is unproven.

**Format / required relationships:** Code-native SVG/HTML; selectable localized text. Reuse existing content; create no new tool or asset.

**Benefit / complexity:** Correct existing misleading absolutes before adding a second classifier; no net-new learning requirement is established. No new media implementation

**Technical limits:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees.

**Accessibility:** Equivalent adjacent prose/table; non-color labels, meaningful figure caption, readable Thai/English and contrast; keyboard and announced state for any interaction. Stack at 360–390 px; do not shrink labels into illegibility; preserve aspect ratio and intrinsic dimensions. Static default; if approved interaction, user steps only, no autoplay, instant transitions for reduced-motion; complete no-JS equivalent

### Preservation checks

CIA: preserve its security-objective distinction; no new triangle. JML: preserve the lifecycle graphic, correct the specific mover policy/order only. OSI: actual custom envelope renderer already provides nesting, so D4-M01 is rejected. Reporting: the renderer already has trend, actual/target and evidence-to-action views, so D2-A03 is rejected. NIST identity diagram explicitly rejects a rigid sequence; ENR-D3-05 expansion is rejected. The HSM operation boundary and paired IDS/IPS paths remain distinct from existing comparison tables. No browser-render or learner study was performed in this review; source inspection establishes composition, not tested usability.

## F. Duplicate / Rejection Register

### ENR-D3-05 — REJECT

Domain 3; objective 3.1; severity P1. Target: `content/isc2-cc-2026/reading/domain-3.md:264` — `topic-3-1-iam-frameworks`.

**Current coverage:** The prose already names three related functions and contrasts SP 800-63 with CSF. The diagram explicitly says it is not a rigid sequential pipeline.

**Gap / judgment:** The claimed sequence gap is already addressed. Rejects a redundant expansion. The sample restates existing meaning and is not approved for insertion.

**Smallest useful change:** Do not append another function explanation or redraw the diagram. Treat the authenticator-control wording precision as a small separately scoped label check, not evidence the diagram needs a new pipeline explanation.

**Constraints:** Do not infer that real-world identity proofing is required for every service. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** js/core/diagram-generator.js:1937–1984 — three interrelated facets and explicit non-sequential caption; domain-3-4-review.md:54; content/isc2-cc-2026/reading/domain-3.md:264

**Dependencies:** None. **Effort:** 30–60 minutes including bilingual and summary reconciliation.

### D4-M01 — REJECT

Domain 4; objective 4.1; severity P3. Target: `content/isc2-cc-2026/reading/domain-4.md:97` — `topic-4-1-osi-model`.

**Current coverage:** Published slide-d4-01-05-encapsulation already renders nested frame/IP/transport envelopes through the custom envelope branch.

**Gap / judgment:** A new diagram would duplicate an existing code-native visual. The reuse gate is satisfied by actual renderer source, not merely a title or keyword match.

**Smallest useful change:** Link/adapt the existing learning explanation within ENR-D4-02; do not create a second asset.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** js/ui/learning/domain4-presentations.js:17–19; content/isc2-cc-2026/learning/published/lessons/lesson-d4-01-network-request.json#slide-d4-01-05-encapsulation; Original educational authorship proposed; Prefer existing slide-d4-01-05-encapsulation; reject a second OSI ladder

**Dependencies:** None. **Effort:** No new asset work.

### IMG-FW — REJECT

Domain 4; objective 4.1; severity P3. Target: `content/isc2-cc-2026/reading/domain-4.md:406` — `topic-4-1-network-devices`.

**Current coverage:** The notes already distinguish appliance/software functions and the source screenshot shows host/network placement.

**Gap / judgment:** The proposal lacks evidence of a remaining physical-recognition problem. A chassis photograph adds little to understanding filtering and the rights are unresolved.

**Smallest useful change:** Keep the existing explanations and prioritize VIS-01 placement relationships; no firewall product photo now.

**Constraints:** Device shape and Ethernet connectors do not establish filtering features or a secure configuration. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** [Primary reference](https://www.fortinet.com/products/next-generation-firewall); Source screenshot 152505 already shows host/network placement; photo may add little

**Dependencies:** None. **Effort:** No photo work.

### D2-A03 — REJECT

Domain 2; objective 2.4; severity P3. Target: `content/isc2-cc-2026/reading/domain-2.md:525` — `topic-2-4-dashboards`.

**Current coverage:** Current reporting renderer already draws trend bars, actual versus target, and evidence-to-action views.

**Gap / judgment:** The stated concept is already taught; interaction/duplication benefit is unproven. A new three-view reporting asset duplicates the actual custom-rendered lesson.

**Smallest useful change:** Reuse existing content; create no new tool or asset.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** Actual target passage; instructional design judgment, not a new external factual assertion

**Dependencies:** None. **Effort:** No new media implementation.

### INT-ABAC — REJECT

Domain 3; objective 3.2; severity P3. Target: `content/isc2-cc-2026/reading/domain-3.md:594` — `topic-3-2-abac`.

**Current coverage:** The notes already have the ABAC request rule/scenario and a published request-evaluation explanation.

**Gap / judgment:** The stated concept is already taught; interaction/duplication benefit is unproven. No demonstrated gap warrants a second attribute-control tool. This does not claim the existing ABAC slide is itself an interactive form.

**Smallest useful change:** Reuse existing content; create no new tool or asset.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** Actual target passage; instructional design judgment, not a new external factual assertion

**Dependencies:** None. **Effort:** No new media implementation.

### INT-TRIAGE — REJECT

Domain 5; objective 5.2; severity P3. Target: `content/isc2-cc-2026/reading/domain-5.md:491` — `topic-5-2-alert-triage-prioritization`.

**Current coverage:** The notes already contain FP/FN examples and the published detection-errors slide distinguishes detector output from reality.

**Gap / judgment:** The stated concept is already taught; interaction/duplication benefit is unproven. Correct existing misleading absolutes before adding a second classifier; no net-new learning requirement is established.

**Smallest useful change:** Reuse existing content; create no new tool or asset.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** Actual target passage; instructional design judgment, not a new external factual assertion

**Dependencies:** None. **Effort:** No new media implementation.

### IMG-HSM-PCIE — REJECT

Domain 5; objective 5.1; severity P3. Target: `content/isc2-cc-2026/reading/domain-5.md:318` — `topic-5-1-tpm-vs-hsm`.

**Current coverage:** The proposed network/USB pair already demonstrates different HSM forms.

**Gap / judgment:** A third form teaches the same recognition point. Duplicate recognition value and additional rights overhead.

**Smallest useful change:** Do not add a third PCIe image gallery.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** Existing target excerpt and published lesson comparison; no new external media evidence

**Dependencies:** None. **Effort:** No asset work.

### IMG-KEY — REJECT

Domain 1; objective 1.1; severity P3. Target: `content/isc2-cc-2026/reading/domain-1.md:192` — `topic-1-1-mfa`.

**Current coverage:** The MFA section already distinguishes possession from a second knowledge secret, with existing factor examples.

**Gap / judgment:** No learner evidence establishes an additional physical-key photo need. Do not add a product photo solely because one is available.

**Smallest useful change:** Retain the current factor explanation and optional publisher link.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** Existing target excerpt and published lesson comparison; no new external media evidence

**Dependencies:** None. **Effort:** No asset work.

### D2-I01 — REJECT

Domain 2; objective 2.4; severity P3. Target: `content/isc2-cc-2026/reading/domain-2.md:485` — `topic-2-4-mttd-mttr`.

**Current coverage:** The proposed mean-time example and existing published metric decision exercise address the intended distinction.

**Gap / judgment:** No evidence supports a new timestamp/mean widget for this beginner reading task. Adds interface/maintenance cost without a distinct demonstrated learning outcome.

**Smallest useful change:** Use ENR-D2-06 and the existing lesson; no additional calculator.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** Existing target excerpt and published lesson comparison; no new external media evidence

**Dependencies:** None. **Effort:** No widget work.

### LEG-D4-AWS — REJECT

Domain 4; objective 4.3; severity P2. Target: `content/isc2-cc-2026/reading/domain-4.md:1005` — `topic-4-3-cloud-network-controls`.

**Current coverage:** The current section already labels AWS SG/NACL specifics and contrasts Azure behavior.

**Gap / judgment:** A proposed multi-provider console/network tutorial exceeds the distinct beginner outcome. A separate explicit disposition prevents the consolidated work package from silently approving finer legacy recommendations.

**Smallest useful change:** Do not expand provider configuration. Preserve the existing scope caveat; any exact reachability correction needs separate bounded evidence.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** Retained domain review appendix and actual current target excerpt; crosswalk records exact legacy IDs

**Dependencies:** None. **Effort:** Not approved while on HOLD; otherwise 20–45 minutes for the stated narrow edit.

### Legacy detail register and alias control

The thirteen finer proposal groups below receive independent decisions so a broad parent decision cannot approve them accidentally. `legacy-proposal-crosswalk.json` maps repeated old IDs to exact decision records; `subsection-review-crosswalk.json` preserves all 128 anchor observations. An unchanged subsection is preservation, not a new feature approval.

`legacy-observation-decisions.json` explicitly dispositions all 67 numbered D1/D2 appendix observations. Mixed observations remain HOLD for unverified residual detail while the specifically approved component keeps its own bounded decision. These repeated observations are not additional independent implementation packages. The two residual legacy groups explain why their unverified detail cannot inherit approval.

### LEG-D1-LEGAL — HOLD

Domain 1; objective 1.1; severity P2. Target: `content/isc2-cc-2026/reading/domain-1.md:251` — `topic-1-1-privacy-data-protection`.

**Current coverage:** The source also proposes retention/HIPAA scope repairs beyond consent.

**Gap / judgment:** Jurisdiction and applicable entity/data facts are not established for all those examples. A separate explicit disposition prevents the consolidated work package from silently approving finer legacy recommendations.

**Smallest useful change:** Hold numerical retention or jurisdiction-specific legal authoring; ACC-D1-01 approves only the bounded lawful-basis correction.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** Retained domain review appendix and actual current target excerpt; crosswalk records exact legacy IDs

**Dependencies:** None. **Effort:** Not approved while on HOLD; otherwise 20–45 minutes for the stated narrow edit.

### LEG-D3-MODELS — HOLD

Domain 3; objective 3.2; severity P2. Target: `content/isc2-cc-2026/reading/domain-3.md:636` — `topic-3-2-models-matrix`.

**Current coverage:** The four-model matrix and scenario set already exist; older review E09 proposes several universal-ranking/owner-authority qualifications.

**Gap / judgment:** The separate model-specific statements and primary policy references need a scoped verification pass. A separate explicit disposition prevents the consolidated work package from silently approving finer legacy recommendations.

**Smallest useful change:** Preserve the matrix and explicit MAC clearance caveat; do not add another comparison or silently approve every E09 detail.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** Retained domain review appendix and actual current target excerpt; crosswalk records exact legacy IDs

**Dependencies:** None. **Effort:** Not approved while on HOLD; otherwise 20–45 minutes for the stated narrow edit.

### LEG-D4-FOUNDATIONS — APPROVE WITH REVISION

Domain 4; objective 4.1; severity P2. Target: `content/isc2-cc-2026/reading/domain-4.md:11` — `topic-4-1-fundamentals-topologies`.

**Current coverage:** VPN is listed under geographic scope; collision domains are discussed with shared-medium conventions.

**Gap / judgment:** A short category/history qualifier is useful, not a new topology taxonomy. A separate explicit disposition prevents the consolidated work package from silently approving finer legacy recommendations.

**Smallest useful change:** Label VPN as an overlay rather than a geographic size and shared-medium collision discussion as contextual; do not add ring/bus/mesh lessons.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** Retained domain review appendix and actual current target excerpt; crosswalk records exact legacy IDs

**Dependencies:** None. **Effort:** Not approved while on HOLD; otherwise 20–45 minutes for the stated narrow edit.

### LEG-D4-IPV4 — APPROVE WITH REVISION

Domain 4; objective 4.1; severity P2. Target: `content/isc2-cc-2026/reading/domain-4.md:194` — `topic-4-1-ipv4-cidr-nat`.

**Current coverage:** Classful ranges precede CIDR and NAT is described as using one or two public addresses.

**Gap / judgment:** Current-prefix interpretation and a non-fixed mapping count need clearer labels. A separate explicit disposition prevents the consolidated work package from silently approving finer legacy recommendations.

**Smallest useful change:** Mark classes historical, retain the ordinary /24 example, and remove the arbitrary one-or-two NAT restriction. No subnet calculator or exhaustive prefix exceptions.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** [2–3, classful history and classless prefixes; also RFC 2663 NAT terminology](https://www.rfc-editor.org/rfc/rfc4632.html); Retained domain review appendix and actual current target excerpt; crosswalk records exact legacy IDs; [2–3, static/dynamic mapping and NAT variants; no universal one-or-two address count](https://www.rfc-editor.org/rfc/rfc2663.html)

**Dependencies:** None. **Effort:** Not approved while on HOLD; otherwise 20–45 minutes for the stated narrow edit.

### LEG-D4-WIRELESS — HOLD

Domain 4; objective 4.1; severity P2. Target: `content/isc2-cc-2026/reading/domain-4.md:462` — `topic-4-1-wireless-security`.

**Current coverage:** The notes give universal channel/maximum-security wording alongside already-useful hidden-SSID and MFA caveats.

**Gap / judgment:** Region, channel width, mode and the exact current Wi-Fi standard statements are not verified by the present evidence. A separate explicit disposition prevents the consolidated work package from silently approving finer legacy recommendations.

**Smallest useful change:** Hold detailed radio/channel/product claims for a primary-reference pass; retain core secure configuration/pairing lessons and add no attack animation.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** Retained domain review appendix and actual current target excerpt; crosswalk records exact legacy IDs

**Dependencies:** None. **Effort:** Not approved while on HOLD; otherwise 20–45 minutes for the stated narrow edit.

### LEG-D4-LAYERS — APPROVE WITH REVISION

Domain 4; objective 4.2; severity P2. Target: `content/isc2-cc-2026/reading/domain-4.md:737` — `topic-4-2-defense-in-depth`.

**Current coverage:** The current five groups explicitly reject a fixed path/count, but the opening can imply the next group remains effective regardless of dependencies.

**Gap / judgment:** Shared administrative/power/identity dependencies deserve one qualifier; no new onion is needed. A separate explicit disposition prevents the consolidated work package from silently approving finer legacy recommendations.

**Smallest useful change:** Add one sentence that complementary controls may share failures. The nearby Zero Trust context already rejects location-based trust; avoid repeating its whole definition.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** [5.1, policy engine/administrator attack-surface dependencies](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-207.pdf); Retained domain review appendix and actual current target excerpt; crosswalk records exact legacy IDs

**Dependencies:** None. **Effort:** Not approved while on HOLD; otherwise 20–45 minutes for the stated narrow edit.

### LEG-D4-HYBRID — APPROVE WITH REVISION

Domain 4; objective 4.3; severity P2. Target: `content/isc2-cc-2026/reading/domain-4.md:979` — `topic-4-3-hybrid-vs-multicloud`.

**Current coverage:** The comparison table treats public+private as the entire hybrid definition and multiple providers as a resilience benefit.

**Gap / judgment:** Examples must not replace the broader composition definition or imply tested failover. A separate explicit disposition prevents the consolidated work package from silently approving finer legacy recommendations.

**Smallest useful change:** Retain public/private as an example, align with the preceding deployment definition and qualify portability/recovery as designs that need validation.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** [deployment models](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf); Retained domain review appendix and actual current target excerpt; crosswalk records exact legacy IDs

**Dependencies:** None. **Effort:** Not approved while on HOLD; otherwise 20–45 minutes for the stated narrow edit.

### LEG-D5-VA — HOLD

Domain 5; objective 5.5; severity P2. Target: `content/isc2-cc-2026/reading/domain-5.md:1115` — `topic-5-5-vulnerability-assessment-pentest`.

**Current coverage:** The older appendix proposes qualifiers to automated/manual and risk comparisons beyond the SAST/DAST package.

**Gap / judgment:** The exact assessment/pentest claims and standards locators need their own review. A separate explicit disposition prevents the consolidated work package from silently approving finer legacy recommendations.

**Smallest useful change:** Hold those finer distinctions; ENR-D5-14 does not approve changes to every application-testing subsection.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** Retained domain review appendix and actual current target excerpt; crosswalk records exact legacy IDs

**Dependencies:** None. **Effort:** Not approved while on HOLD; otherwise 20–45 minutes for the stated narrow edit.

### LEG-D5-CRYPTO-DETAILS — HOLD

Domain 5; objective 5.1; severity P2. Target: `content/isc2-cc-2026/reading/domain-5.md:269` — `topic-5-1-hashing-digital-signatures`.

**Current coverage:** The old review also flags avalanche percentages, password-algorithm rankings and checksum-trust conditions.

**Gap / judgment:** These are separate from the specifically verified sign/verify mechanism; a blanket crypto cleanup is not approved. A separate explicit disposition prevents the consolidated work package from silently approving finer legacy recommendations.

**Smallest useful change:** Hold the extra quantified/algorithm claims for explicit verification; ACC-D5-01 approves the signature correction and its immediate identity/custody limitations only.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** Retained domain review appendix and actual current target excerpt; crosswalk records exact legacy IDs

**Dependencies:** None. **Effort:** Not approved while on HOLD; otherwise 20–45 minutes for the stated narrow edit.

### LEG-STUDY-CUES — APPROVE WITH REVISION

Domain 0; objective Cross-domain editorial acceptance; severity P2. Target: `content/isc2-cc-2026/reading/domain-1.md:1060` — `topic-1-5-distinctions-scenarios`; `content/isc2-cc-2026/reading/domain-2.md:579` — `topic-2-review-scenarios`; `content/isc2-cc-2026/reading/domain-3.md:656` — `topic-3-review-scenarios`; `content/isc2-cc-2026/reading/domain-4.md:1039` — `topic-4-review-scenarios`; `content/isc2-cc-2026/reading/domain-5.md:1272` — `topic-5-review-scenarios`.

**Current coverage:** Review cards and headings across domains use absolute exam-frequency or keyword language.

**Gap / judgment:** Learners may confuse a course mnemonic with verified official exam intelligence. A separate explicit disposition prevents the consolidated work package from silently approving finer legacy recommendations.

**Smallest useful change:** Qualify such phrases at their existing locations as contextual study cues. No new recap deck, actual-exam assertion or change to Question Banks.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** Retained domain review appendix and actual current target excerpt; crosswalk records exact legacy IDs

**Dependencies:** None. **Effort:** Not approved while on HOLD; otherwise 20–45 minutes for the stated narrow edit.

### LEG-D1-RESIDUAL — HOLD

Domain 1; objective 1.1; severity P2. Target: `content/isc2-cc-2026/reading/domain-1.md:9` — `topic-1-1-core-concepts`; `content/isc2-cc-2026/reading/domain-1.md:251` — `topic-1-1-privacy-data-protection`; `content/isc2-cc-2026/reading/domain-1.md:353` — `topic-1-1-zero-trust-defense-in-depth`; `content/isc2-cc-2026/reading/domain-1.md:589` — `topic-1-2-inherent-residual-risk`; `content/isc2-cc-2026/reading/domain-1.md:795` — `topic-1-4-control-types`; `content/isc2-cc-2026/reading/domain-1.md:927` — `topic-1-5-due-care-due-diligence`.

**Current coverage:** The older subsection rows also propose checksum-trust, availability/failover, non-repudiation evidence, shared-account attribution, contextual Zero Trust, residual-risk criteria, control-function and reasonable-patching refinements.

**Gap / judgment:** These are not all part of the 56 consolidated packages. Their complete cross-location wording and separate supporting references have not been verified sufficiently to authorize them together. Explicit hold prevents unverified appendix detail from inheriting approval from a related main package.

**Smallest useful change:** Hold residual detail beyond the exact accepted packages. Review each listed legacy observation separately against its actual passage and primary source; reuse existing published explanations and add no duplicate diagram.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** Actual target passage; instructional design judgment, not a new external factual assertion

**Dependencies:** None. **Effort:** Evidence-dependent; not queued for implementation.

### LEG-D2-RESIDUAL — HOLD

Domain 2; objective 2.1; severity P2. Target: `content/isc2-cc-2026/reading/domain-2.md:62` — `topic-2-1-importance-of-grc`; `content/isc2-cc-2026/reading/domain-2.md:127` — `topic-2-1-risk-register`; `content/isc2-cc-2026/reading/domain-2.md:192` — `topic-2-2-bia`; `content/isc2-cc-2026/reading/domain-2.md:202` — `topic-2-2-dr-it-scope`; `content/isc2-cc-2026/reading/domain-2.md:273` — `topic-2-2-drp-sites`; `content/isc2-cc-2026/reading/domain-2.md:334` — `topic-2-2-dr-testing`; `content/isc2-cc-2026/reading/domain-2.md:384` — `topic-2-3-awareness-programs`; `content/isc2-cc-2026/reading/domain-2.md:475` — `topic-2-4-metrics-characteristics`; `content/isc2-cc-2026/reading/domain-2.md:504` — `topic-2-4-kpi-vs-kri`; `content/isc2-cc-2026/reading/domain-2.md:548` — `topic-2-4-reports`.

**Current coverage:** The older subsection rows also propose qualified GRC outcomes, a register row, BIA service priorities, offsite failure conditions, exercise-risk qualifiers, awareness overlap, metric denominators and KPI/report interpretations.

**Gap / judgment:** These smaller proposals were not separate canonical packages. Source/context checks do not establish that every proposed insertion is needed or that all compressed statements are wrong. Explicit hold prevents unverified appendix detail from inheriting approval from a related main package.

**Smallest useful change:** Hold the residual additions/qualifiers until a focused actual-passage/source/deduplication check. Existing linked lessons may already meet the need; no new reporting asset, calculator or recovery procedure is approved.

**Constraints:** Stay at the stated CC concept; label hypothetical conditions and avoid unconditional guarantees. **Preserve:** Retain current definitions, useful comparisons, anchors and existing lesson visuals; change only the identified claim/example.

**Evidence:** Actual target passage; instructional design judgment, not a new external factual assertion

**Dependencies:** None. **Effort:** Evidence-dependent; not queued for implementation.

### Rejected expansion patterns

These are constraints on the decisions above, not fourteen additional work packages: duplicate CIA/AAA definitions; second JML chart; second OSI ladder; repeated control/model tables; duplicate reporting dashboards; scenario quotas; decorative product galleries; unlicensed real screenshots; generic AI-per-domain quotas; PQC algorithm mathematics; provider-console tutorials; subnet calculators; autoplay demonstrations; extra recap/exam-prediction decks. **REJECT** each as proposed expansion. Preserve correct existing material.

## G. Evidence and Verification Gaps

Eleven HOLD decisions are explicitly excluded from the implementation plan:

- **VER-D2-01** — The original unit, denominator and period are not recoverable from the screenshot. Next: Hold the interpretation of that row. Obtain author clarification or separately approve replacing it with an explicitly hypothetical metric.

- **D5-M16** — It is not established that a second visual is needed after the bounded practical example. Next: Evaluate the approved prose/table example first. Approve a small three-node boundary diagram only if a distinct comprehension problem remains.

- **IMG-HSM-PAIR** — A two-form comparison is educationally plausible, but no exact image/crop/rightsholder permission is cleared. Next: Retain link-only product references and hold locally hosted photos until each selected binary has permission, required attribution and intended-use evidence.

- **INT-IDS** — There is no observed evidence that stepping a request improves learning beyond the static paired topology. Next: Review static VIS-01 with learners first. Only then consider send/next/previous/reset states for the same request and text-equivalent result.

- **LEG-D1-LEGAL** — Jurisdiction and applicable entity/data facts are not established for all those examples. Next: Hold numerical retention or jurisdiction-specific legal authoring; ACC-D1-01 approves only the bounded lawful-basis correction.

- **LEG-D3-MODELS** — The separate model-specific statements and primary policy references need a scoped verification pass. Next: Preserve the matrix and explicit MAC clearance caveat; do not add another comparison or silently approve every E09 detail.

- **LEG-D4-WIRELESS** — Region, channel width, mode and the exact current Wi-Fi standard statements are not verified by the present evidence. Next: Hold detailed radio/channel/product claims for a primary-reference pass; retain core secure configuration/pairing lessons and add no attack animation.

- **LEG-D5-VA** — The exact assessment/pentest claims and standards locators need their own review. Next: Hold those finer distinctions; ENR-D5-14 does not approve changes to every application-testing subsection.

- **LEG-D5-CRYPTO-DETAILS** — These are separate from the specifically verified sign/verify mechanism; a blanket crypto cleanup is not approved. Next: Hold the extra quantified/algorithm claims for explicit verification; ACC-D5-01 approves the signature correction and its immediate identity/custody limitations only.

- **LEG-D1-RESIDUAL** — These are not all part of the 56 consolidated packages. Their complete cross-location wording and separate supporting references have not been verified sufficiently to authorize them together. Next: Hold residual detail beyond the exact accepted packages. Review each listed legacy observation separately against its actual passage and primary source; reuse existing published explanations and add no duplicate diagram.

- **LEG-D2-RESIDUAL** — These smaller proposals were not separate canonical packages. Source/context checks do not establish that every proposed insertion is needed or that all compressed statements are wrong. Next: Hold the residual additions/qualifiers until a focused actual-passage/source/deduplication check. Existing linked lessons may already meet the need; no new reporting asset, calculator or recovery procedure is approved.

Additional limits: no blanket legal opinion on all privacy/retention cases; no exact ISO incident-response equivalence asserted; no claim all HSM devices share a validation level; current ATT&CK identifiers are source-dated rather than an exam-memory list; no learner-outcome proof for proposed media. Publisher terms were inspected but no specific third-party image license was established. Full-resolution screenshot transcription and every sentence of the course were not independently re-certified here. These limits restrict scope rather than block the verified minimal corrections.

## H. Proposed Implementation Sequence

**Recommended first batch: D5-A — ACC-D5-01 and ACC-D5-02 (2–3 hours).** Follow with D5-B sanitization/IR attribution as a separate batch (2–3 hours). Correct facts before images. All future edits require explicit authorization for named IDs; revised proposals require their stated narrowing. Estimates are planning ranges, not measured execution times.

| Batch | Domain | Findings | Effort |
|---|---|---|---|
| D5-A — First: signature and hardware accuracy | 5 | ACC-D5-01, ACC-D5-02 | 2–3 hours |
| D5-B — Sanitization and incident-response attribution | 5 | ACC-D5-03, ACC-D5-04 | 2–3 hours |
| D1-A — Privacy, ethics and control taxonomy | 1 | ACC-D1-01, VER-D1-01, ENR-D1-04 | 1.5–2.5 hours |
| D2-A — Recovery and measurement consistency | 2 | ACC-D2-01, ACC-D2-02 | 1.5–2.5 hours |
| D3-A — Mover policy and access lifecycle | 3 | ACC-D3-01, ENR-D3-02, ENR-D3-03, ENR-D3-04 | 2–3 hours |
| D4-A — Transport and enforced segmentation | 4 | ACC-D4-01, ACC-D4-02, ACC-D4-03, ENR-D4-04 | 2–3 hours |
| D5-C — ATT&CK labels and operational interpretation | 5 | ACC-D5-05, ENR-D5-07, ENR-D5-08 | 1.5–2.5 hours |
| D1-B — Bounded risk, AAA and activity examples | 1 | ENR-D1-02, ENR-D1-03, ENR-D1-05, ENR-D1-06 | 1.5–2.5 hours |
| D2-B — Awareness, GRC, continuity and mean-time examples | 2 | ENR-D2-03, ENR-D2-04, ENR-D2-05, ENR-D2-06 | 1.5–2.5 hours |
| D3-B — Tokens, workload accounts and independent approval | 3 | ENR-D3-06, ENR-D3-07, ENR-D3-08 | 1–2 hours |
| D4-B — Protocol and addressing labels | 4 | ENR-D4-02, ENR-D4-03, LEG-D4-FOUNDATIONS, LEG-D4-IPV4 | 1.5–2.5 hours |
| D4-C — Cloud, layers and one IoT policy case | 4 | ENR-D4-05, ENR-D4-06, ENR-D4-07, LEG-D4-LAYERS, LEG-D4-HYBRID | 2–3 hours |
| D5-D — Data use, custody and usable restore results | 5 | ENR-D5-06, ENR-D5-10, ENR-D5-11 | 1.5–2.5 hours |
| D5-E — Lifecycle, testing and threat-model example | 5 | ENR-D5-12, ENR-D5-13, ENR-D5-14, ENR-D5-15 | 2–3 hours |
| D5-F — One bounded current-outline addition | 5 | ENR-X-02 | 1–2 hours |
| D2-V — Restore sets and simulated message | 2 | D2-A01, D2-A02 | 3–5 hours |
| D4-V — Passive versus inline paths | 4 | VIS-01 | 2–3 hours |
| D5-V — Configured signing-key boundary | 5 | VIS-02 | 2–3 hours |
| QUALITY — Apply within each approved domain batch | 0 | ENR-X-01, LEG-STUDY-CUES | Included per changed passage; no independent all-domain rewrite |

The QUALITY row is an acceptance gate applied inside each authorized domain batch, not an uncontrolled five-domain rewrite. `phase-2/implementation-plan.json` contains all 54 approved/conditionally approved item specifications: exact target paths/anchors and entry lines, required change, media recommendation, sources, constraints, preservation, acceptance, dependencies and effort. Shared renderer edits are future label-only work for the named defects; no JavaScript changes were made now. Locate repeated exact labels at implementation time and verify no accidental global replacement.

Each batch must retain anchors and correct definitions/examples; reconcile repeated Reading summaries; verify Thai/English actor, condition, quantity and limitation; check primary citations; run targeted content/render checks. New visuals need a readable 360–390px layout, adjacent equivalent text, non-color semantics and localized labels. Any later interaction needs keyboard/touch, announced state, paused default, reduced-motion and static/no-JS fallback. HOLD/REJECT items are excluded and must not be pulled in via dependencies.

## I. Human Approval Checklist

- [ ] Select explicit batch IDs and finding IDs; reviewer dispositions alone authorize no production work.

- [ ] Accept the revised boundaries and bilingual samples, including preserved TCP/recovery/IR teaching content.

- [ ] Keep the eleven HOLD items outside scope until their named evidence gaps are resolved.

- [ ] Accept code-native static diagrams and original simulated HTML as the proposed media direction; external photos remain uncleared.

- [ ] Apply per-domain acceptance checks, protect entry uncommitted changes and review the resulting diff before any separate commit/push instruction.

### Persistent records and preservation

Progress: `reading-notes-enrichment-progress.md`. Handoff: `reading-notes-enrichment-handoff.md`. Structured decisions, plans, aliases, media reviews, current excerpts, evidence inspection and final verification are under `artifacts/qa/reading-notes-educational-enrichment-audit/phase-2/`. The entry baseline covers 30,800 pre-existing files, including all 29 uncommitted Phase 1 deliverables. Final byte comparison is recorded in `phase-2/verification.json`. No implementation, download, image generation, commit or push is authorized by this report.

**Phase 2 Review Complete — Awaiting Explicit Human Approval for Implementation.**
