# Phase 3A Domain 4 Batch A — evidence-based academic corrections

Date: **2026-11-04 (Asia/Bangkok)**. Implemented; human acceptance pending.

## Findings and authorization

Only **ACC-D4-01, ACC-D4-02, ACC-D4-03, ENR-D4-04** are implemented. All are **APPROVE WITH REVISION**, with no dependencies. The current explicit user authorization supersedes the historical implementation gate for these four records only. Full criteria/revisions are preserved in `approved-findings.json`. Units: `topic-4-1-ipv6-architecture`, `topic-4-1-tcp-vs-udp`, `topic-4-2-segmentation-blast-radius`, `topic-4-1-network-threats-iot`; objectives4.1/4.2. Only these units and directly related review summaries change. All four existing diagram labels already fit the bounded corrections and remain unchanged.

## Academic evidence

- [RFC 8504 §13/13.1](https://www.rfc-editor.org/rfc/rfc8504.html#section-13.1): IPsec support SHOULD does not mean automatic encryption/authentication; actual supported/configured use is distinct.
- [RFC 9293 §2.2, §3.8.3](https://www.rfc-editor.org/rfc/rfc9293.html): Reliable ordered byte stream, sequencing/retransmission and possible connection failure; no application transaction completion or cryptographic secrecy guarantee.
- [RFC 768](https://www.rfc-editor.org/rfc/rfc768.html): UDP eight-byte header and absence of built-in delivery/order guarantee.
- [RFC 8085 §3.1](https://www.rfc-editor.org/rfc/rfc8085.html): Application/network congestion context; no unconditional UDP speed ranking.
- [NIST SP 800-41r1 §2.3, §4](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-41r1.pdf): September 2009; inspection limits and risk-based policy enforcement, not guaranteed containment.
- [NIST SP 800-82r3 §4.2.2, §5.2.3.1, §5.3.1](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-82r3.pdf): September 2023; process-specific safety/reliability, optional organizing models and controlled required communications. Network architecture printed pp.71–73 (PDF87–89); safety printed79/PDF95.
- [PCI SSC FAQ 1115](https://www.pcisecuritystandards.org/faqs/1115/): Audit scope reduction depends on applicable requirements and verified effective segmentation, not VLAN names alone.
- [ISC2 CC outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline): Effective 1 September 2026; objectives4.1 and4.2 map foundational protocols, connected systems and segmentation, not exact exam questions.

References independently reopened on2026-11-04. The current IPv6 passage did not explicitly claim automatic encryption: this is a clarification of support versus actual use. Older local IPv6 slide151830 says IPsec mandatory; current RFC8504 takes precedence. Transport slide145505 supplies introductory TCP reliability/UDP speed context, which is qualified rather than copied categorically. Slides145229 and182644 retain model/segmentation context. The supplied Settapon directory is absent; matching `ISC2 Update 2026/Domain 4` text/transcript and four native screenshots were used. Existing published network-request and segmentation-paths lessons support controlled allowed/denied-path teaching and remain unchanged. CISA PDF access returned403 and is not represented as inspected evidence. Source hashes/depth and limitations are recorded in `handoff-inspection.json` and `academic-verification.json`.

## Implemented corrections and bilingual review

IPv6 now separates supported/configured IPsec from automatic traffic protection, including its review summary. TCP retains reliable ordered-stream sequencing/retransmission while acknowledging failure, application transaction boundaries and absence of cryptographic protection. Header-size teaching remains; speed/latency are context dependent. Both comparison rows and related TCP/UDP summaries align. Segmentation reduces unwanted reachability and potential blast radius only through enforced, tested boundaries; flat reachability is not proof every host is compromised, VLAN labels alone are insufficient, performance depends on design/workload and audit scope needs applicable requirements and verification. OT safety/reliability and priorities are process-specific; Purdue is optional architecture context, IDMZ/data diodes are possible controls rather than the only universal path. Necessary communications remain controlled and monitored. Thai/English conditions and limitations were reviewed together. No new operational procedure or visual was introduced.

## Original and corrected wording

Exactly **19 spans** in one production Markdown file. Entry line coordinates below refer to immutable baseline; full original file and unified diff accompany structured pairs.

### ACC-D4-01 — entry line 299

Original:

```text
- **ความปลอดภัยในตัว:** รองรับมาตรฐานความมั่นคงปลอดภัย **IPsec (IP Security)** ในระดับสถาปัตยกรรมมาตั้งแต่ต้น
```

Corrected:

```text
- **การใช้ IPsec (IP Security):** IPv6 ใช้ IPsec ได้เมื่อรองรับและกำหนดค่าการใช้งานอย่างเหมาะสม แต่ที่อยู่ IPv6 เพียงอย่างเดียวไม่ได้เข้ารหัสหรือยืนยันความถูกต้องของทราฟฟิก / IPv6 can use properly supported and configured IPsec; IPv6 addressing alone does not encrypt or authenticate traffic.
```

### ACC-D4-01 — entry line 1084

Original:

```text
รองรับ IPsec ในตัว
```

Corrected:

```text
ใช้ IPsec ได้เมื่อรองรับและกำหนดค่า; IPv6 ไม่ได้ป้องกันทราฟฟิกโดยอัตโนมัติ (IPsec requires actual use/configuration)
```

### ACC-D4-02 — entry line 332

Original:

```text
- **Reliable Delivery:** รับประกันความสมบูรณ์ของข้อมูล มีการตรวจสอบลำดับแพ็กเก็ต (Sequencing) และมีการส่งซ้ำหากข้อมูลสูญหาย (Retransmission)
```

Corrected:

```text
- **Reliable Delivery:** ให้บริการข้อมูลไบต์แบบเรียงลำดับและเชื่อถือได้ ด้วยลำดับหมายเลขและการส่งซ้ำ แต่การเชื่อมต่ออาจล้มเหลว ความเชื่อถือได้ของ TCP ไม่ได้รับรองว่าธุรกรรมในแอปสำเร็จ หรือให้ความลับและการตรวจความถูกต้องเชิงคริปโต / TCP provides a reliable, in-order byte stream with sequencing and retransmission, but connections can fail. Transport reliability alone does not provide cryptographic protection or confirm application transaction completion.
```

### ACC-D4-02 — entry line 334

Original:

```text
- เหมาะสำหรับงานที่ห้ามข้อมูลผิดพลาดหรือสูญหาย: Web Browsing (HTTP/HTTPS), File Transfer (FTP/SFTP), Remote Terminal (SSH), อีเมล (SMTP/IMAP)
```

Corrected:

```text
- มักใช้กับงานที่ต้องการข้อมูลเรียงลำดับและการส่งซ้ำ เช่น Web Browsing (HTTP/HTTPS), File Transfer (FTP/SFTP), Remote Terminal (SSH), อีเมล (SMTP/IMAP) / Common uses needing ordered delivery and retransmission.
```

### ACC-D4-02 — entry line 343

Original:

```text
- **Low Overhead &amp; High Speed:** ขนาด Header สั้นมาก (เพียง 8 ไบต์ เมื่อเทียบกับ 20 ไบต์ของ TCP) ทำให้ประมวลผลได้รวดเร็วมาก
```

Corrected:

```text
- **Low Overhead:** UDP มี Header 8 ไบต์ เทียบกับ TCP อย่างน้อย 20 ไบต์ แต่ไม่ได้รับประกันว่าจะเร็วกว่า; ความเร็วและความหน่วงขึ้นกับเครือข่ายและแอป / UDP has an 8-byte header versus TCP’s minimum 20 bytes; actual speed and latency depend on the network and application.
```

### ACC-D4-02 — entry line 354

Original:

```text
| **Data Reliability** | สูง รับประกันข้อมูลครบถ้วน มีการส่งซ้ำ | ต่ำ แบบ Best-Effort ไม่มีการส่งซ้ำ |
```

Corrected:

```text
| **Data Reliability** | ข้อมูลไบต์เรียงลำดับและส่งซ้ำ แต่การเชื่อมต่ออาจล้มเหลว (Reliable ordered stream; connection failure possible) | Best-Effort; UDP เองไม่รับประกันลำดับหรือส่งซ้ำ (No built-in ordering/retransmission) |
```

### ACC-D4-02 — entry line 356

Original:

```text
| **Speed &amp; Latency** | ช้ากว่า มีภาระในการตรวจสอบ | รวดเร็ว มีค่าหน่วงเวลา (Latency) ต่ำ |
```

Corrected:

```text
| **Speed &amp; Latency** | มีภาระจากกลไกความเชื่อถือได้; ผลจริงขึ้นกับสภาพใช้งาน (Context-dependent) | มีภาระพื้นฐานน้อยกว่า แต่ไม่รับประกันความเร็วหรือความหน่วง (No universal speed/latency guarantee) |
```

### ACC-D4-02 — entry line 1066

Original:

```text
Connection-oriented, 3-way handshake, รับประกันความสมบูรณ์ของข้อมูล เหมาะกับเว็บ (HTTP/S), อีเมล, และการโอนย้ายไฟล์
```

Corrected:

```text
Connection-oriented, 3-way handshake, reliable ordered byte stream; การเชื่อมต่ออาจล้มเหลว และไม่ยืนยันว่าธุรกรรมในแอปสำเร็จ (Connection failure possible; no application-completion guarantee)
```

### ACC-D4-02 — entry line 1070

Original:

```text
Connectionless, ไม่มีการจับมือ, ส่งข้อมูลรวดเร็วแบบ Best-effort ยอมรับข้อมูลสูญหายได้ เหมาะกับสตรีมมิง, VoIP, DNS, และ DHCP
```

Corrected:

```text
Connectionless, ไม่มีการจับมือ, Best-effort โดยไม่มีการเรียงลำดับหรือส่งซ้ำใน UDP เอง; ความเร็วขึ้นกับเครือข่ายและแอป (Speed depends on network/application)
```

### ENR-D4-04 — entry line 603

Original:

```text
- **ความแตกต่างสำคัญ:** ในขณะที่ระบบสารสนเทศทั่วไป (IT) ให้ความสำคัญสูงสุดกับความลับ (Confidentiality) แต่ระบบอุตสาหกรรม (OT/ICS) ให้ความสำคัญสูงสุดกับ **ความพร้อมใช้งาน (Availability) และความปลอดภัยต่อชีวิตมนุษย์ (Safety)**
```

Corrected:

```text
- **ความแตกต่างสำคัญ:** OT/ICS ต้องประเมิน Safety, ความเชื่อถือได้ ความพร้อมใช้งาน และผลต่อกระบวนการก่อนเปลี่ยนระบบ ลำดับความสำคัญขึ้นกับความเสี่ยงของงาน; IT ก็ไม่ได้ให้ Confidentiality สูงสุดทุกกรณี / Assess OT safety, reliability, availability and process impact before changes. Priorities depend on the process and risk; IT does not universally prioritize confidentiality.
```

### ENR-D4-04 — entry line 605

Original:

```text
- **Purdue Model for Industrial Control Systems (สถาปัตยกรรมแบ่งชั้นความปลอดภัย Purdue Model):**
```

Corrected:

```text
- **Purdue Model — บริบทเสริมทางเลือก (Optional architecture context):** ตัวอย่างการจัดกลุ่มระบบตามหน้าที่ ไม่ใช่สถาปัตยกรรมบังคับสำหรับ OT ทุกระบบ / An example functional grouping, not a universal OT architecture:
```

### ENR-D4-04 — entry line 610

Original:

```text
  - **Level 3.5 (Industrial DMZ — IDMZ):** **เขตกันชนความปลอดภัยที่สำคัญที่สุด** ทำหน้าที่คั่นกลางและตัดขาดการเชื่อมต่อโดยตรงระหว่างเครือข่ายอุตสาหกรรม (OT) และเครือข่ายสำนักงาน (IT)
```

Corrected:

```text
  - **Level 3.5 (Industrial DMZ — IDMZ):** ตัวอย่างเขตกันชนสำหรับควบคุมการสื่อสาร IT/OT ตามสถาปัตยกรรมและนโยบายที่เลือก (Example IT/OT communication boundary under the selected architecture/policy)
```

### ENR-D4-04 — entry line 612

Original:

```text
- **กฎเหล็กด้านความปลอดภัยของ ICS/SCADA:** ห้ามเชื่อมต่อเครือข่าย Level 4/5 (IT สำนักงาน หรือ อินเทอร์เน็ต) ตรงเข้าสู่ Level 0–2 (เครื่องจักรอุตสาหกรรม) โดยเด็ดขาด การส่งผ่านข้อมูลต้องทำผ่าน Industrial DMZ (IDMZ) หรือ Data Diode แบบสื่อสารทางเดียวเท่านั้น
```

Corrected:

```text
- **การสื่อสารที่จำเป็นของ ICS/SCADA:** แยก IT/OT และอนุญาตเฉพาะเส้นทางที่จำเป็นซึ่งควบคุมและตรวจสอบได้ตามความเสี่ยง/ผลต่อกระบวนการ ใช้สถาปัตยกรรมที่เหมาะสม เช่น Firewall/DMZ; Data Diode เป็นทางเลือกสำหรับความต้องการสื่อสารทางเดียว ไม่ใช่กฎเส้นทางเดียวสำหรับทุกระบบ / Separate IT/OT and permit only necessary, controlled and monitored paths suited to process risk. Firewalls/DMZs and, where one-way communication fits, data diodes are architectural options rather than a universal sole path.
```

### ACC-D4-03 — entry line 629

Original:

```text
คือเครือข่ายที่อุปกรณ์ทุกเครื่องเชื่อมต่อถึงกันโดยตรงโดยไม่มีการกั้นส่วน หากเครื่องใดเครื่องหนึ่งติดมัลแวร์หรือถูกแฮก ผู้โจมตีจะสามารถเข้าถึงเครื่องอื่น ๆ ในเครือข่ายได้ทันที
```

Corrected:

```text
เครือข่ายที่ไม่มีการแบ่งเขตควบคุมภายในอาจเปิดเส้นทางให้ผู้โจมตีเข้าถึงระบบอื่นได้กว้างขึ้น แต่ไม่ได้แปลว่าทุกเครื่องถูกเจาะแล้ว; ผลขึ้นกับการเข้าถึงและมาตรการที่มี / A flat network can expose more reachable systems, but does not prove every host is compromised; reachability and other controls matter.
```

### ACC-D4-03 — entry line 635

Original:

```text
- **Reduce Blast Radius (จำกัดรัศมีความเสียหาย):** เมื่อเกิดเหตุการณ์ความมั่นคงปลอดภัย ความเสียหายจะถูกจำกัดอยู่เฉพาะภายในเซกเมนต์นั้น ๆ ไม่ลุกลามไปยังระบบอื่น
```

Corrected:

```text
- **Reduce Blast Radius (จำกัดรัศมีความเสียหาย):** ช่วยลดขอบเขตผลกระทบเมื่อขอบเขตถูกบังคับใช้และทดสอบ แต่ไม่รับประกันว่าจะอยู่ในเซกเมนต์เดียว / Enforced, tested boundaries can reduce impact; they do not guarantee single-segment containment.
```

### ACC-D4-03 — entry line 636

Original:

```text
- **Prevent Lateral Movement (หยุดยั้งการเคลื่อนที่ในแนวราบ):** ผู้โจมตีไม่สามารถสแกนหรือส่งมัลแวร์ข้ามไปยังเซิร์ฟเวอร์สำคัญได้โดยตรง
```

Corrected:

```text
- **Limit Lateral Movement (จำกัดการเคลื่อนที่ในแนวราบ):** จำกัดเส้นทางตามนโยบายที่บังคับใช้จริง; เส้นทางที่ยังอนุญาตหรือจุดควบคุมที่ถูกเจาะอาจเปิดทางได้ ชื่อ VLAN อย่างเดียวไม่ใช่นโยบายบังคับใช้ / Enforcement limits reachable paths; allowed paths or compromised controls can still permit movement. A VLAN label alone is not enforcement.
```

### ACC-D4-03 — entry line 637

Original:

```text
- **Traffic Isolation &amp; Performance:** ลดปริมาณการแพร่กระจายของ Broadcast ทำให้เครือข่ายมีประสิทธิภาพสูงขึ้น
```

Corrected:

```text
- **Traffic Isolation &amp; Performance:** การแยก Broadcast Domain เช่น VLAN อาจลด Broadcast ในแต่ละส่วน แต่ผลด้านประสิทธิภาพขึ้นกับการออกแบบและปริมาณงาน / Separating broadcast domains can reduce local broadcast traffic; performance depends on design and workload.
```

### ACC-D4-03 — entry line 638

Original:

```text
- **Compliance &amp; Audit Scope:** ช่วยลดขอบเขตการตรวจสอบมาตรฐานความปลอดภัย (เช่น PCI DSS สำหรับข้อมูลบัตรเครดิต) โดยจำกัดให้ตรวจเฉพาะเซกเมนต์ที่เกี่ยวข้องเท่านั้น
```

Corrected:

```text
- **Compliance &amp; Audit Scope:** การลดขอบเขต เช่น PCI DSS ต้องเป็นไปตามเงื่อนไขของมาตรฐานที่ใช้และตรวจยืนยันประสิทธิผลของการแยก ไม่ได้ลดขอบเขตโดยอัตโนมัติ / Scope reduction depends on applicable requirements and validated segmentation effectiveness; it is not automatic.
```

### ACC-D4-03 — entry line 1239

Original:

```text
| **Segmentation** | "Blast radius", "Lateral movement", "Divide network" | กักบริเวณความเสียหายและหยุดยั้งการแพร่กระจายของภัยคุกคาม | แยกแผนกการเงินออกจากแผนกต้อนรับ |
```

Corrected:

```text
| **Segmentation** | "Blast radius", "Lateral movement", "Divide network" | ช่วยลดผลกระทบและจำกัดเส้นทางเมื่อบังคับใช้/ทดสอบนโยบาย (Risk reduction with enforced/tested policy) | แยกแผนกการเงินออกจากแผนกต้อนรับและตรวจเส้นทางที่อนุญาต/ปฏิเสธ |
```

## Modified files

Existing changes: `content/isc2-cc-2026/reading/domain-4.md` (19 spans); `docs/plans/isc2-cc-2026/reading-notes-enrichment-progress.md` and `reading-notes-enrichment-handoff.md` (appended checkpoints); `docs/plans/task.md` (one new task row). New report: this file. All new QA/scripts/screenshots are confined to `artifacts/qa/reading-notes-phase-3a-domain-4-batch-a/`; `new-files.json` is the complete inventory. No other production file changes.

## Content checks

**12/12 PASS**. Exact reversal reproduces original Markdown; anchors/progress/order, six table shapes, original table rows except the three authorized rows, heading/wrapper sequences and LF bytes are retained. All content outside four approved units and related review unit is identical. IPv6 addresses/SLAAC/transition examples and numerical superscripts retained; original Purdue levels except one qualified IDMZ line retained. All12 scenarios/answers/reasoning and reusable scenario JS, all4 diagrams/global diagram JS, CSS/parser, navigation/persistence and earlier-domain corrections are byte-identical.

## Regression results

Twelve unchanged suites: **8 PASS / 4 FAIL before and after**. Failures: D1 bank count (existing157 versus historical119); diagram semantics (same7failed names); cross-domain structure; D5 integration (same historical D1 hash assertion). Cross-domain baseline **365/391 pass,26fail** becomes **361/391 pass,30fail**. Exactly four added failed assertions require old complete subsection text: IPv6, TCP-vs-UDP, segmentation and `topic-4-review-scenarios`. The last is triggered by authorized summary edits, not changed scenarios. OT/whole-domain text assertions already failed. Prior D1 taxonomy1, D2 memory/review2 and D3 provisioning/review/deprovisioning3 mismatches remain baseline failures. No other failed name added/removed; no fixture/test/snapshot changed. Raw logs and comparison JSON retain full evidence.

| Suite | Before | After |
|---|---|---|
| verify-reading-notes-domain1 | FAIL | FAIL |
| verify-reading-notes-domain2 | PASS | PASS |
| verify-reading-notes-domain3 | PASS | PASS |
| verify-reading-notes-domain4 | PASS | PASS |
| verify-reading-notes-domain5 | PASS | PASS |
| verify-reading-notes-dom-integrity | PASS | PASS |
| verify-reading-persistence | PASS | PASS |
| verify-reading-navigation | PASS | PASS |
| verify-reading-diagram-semantics | FAIL | FAIL |
| verify-reading-notes-rendering-quality | PASS | PASS |
| verify-reading-cross-domain-structure | FAIL | FAIL |
| verify-domain5-integration | FAIL | FAIL |

## Real Chrome QA

Real `Chrome/156.0.8078.80` at `C:\Program Files\Google\Chrome\Application\chrome.exe`, local CDP server and isolated temporary profile. Main **12/12 before +12/12 after PASS**:1920×1080,1440×900,1366×768,768×1024,390×844,360×800, each light/dark. Supplemental speed-row views repeat12states per stage and both mobile table edges. **320 viewport PNGs** total; dimensions and hashes are checked in the final manifest. Baseline main captures precede edits; supplemental baseline uses immutable before-Markdown through QA server override, without reverting production.

All states retain6tables,4diagrams,12scenarios; zero page overflow, nested wrappers or measured paragraph clipping; Task157 bottom-aligned headers and Space Grotesk/Noto Sans Thai retained. Normal vertical document and contained table scrolling remain available. Sidebar navigation to all4anchors passes across main matrix; cold direct links/reload/domain return pass at final phone state. Sixteen protected D1/D2/D3/D5 states (1366/360, both themes) pass with earlier correction text and counts. Existing DMZ rendered text matches before/after. Zero runtime exceptions/console errors. Representative desktop/phone PNGs were inspected natively; no screen-reader or learner-outcome study claimed.

| State | Representative before | After |
|---|---|
| 1920x1080-light | [TCP](../../../artifacts/qa/reading-notes-phase-3a-domain-4-batch-a/screenshots/before/1920x1080-light-tcp.png) | [TCP](../../../artifacts/qa/reading-notes-phase-3a-domain-4-batch-a/screenshots/after/1920x1080-light-tcp.png) |
| 1920x1080-dark | [TCP](../../../artifacts/qa/reading-notes-phase-3a-domain-4-batch-a/screenshots/before/1920x1080-dark-tcp.png) | [TCP](../../../artifacts/qa/reading-notes-phase-3a-domain-4-batch-a/screenshots/after/1920x1080-dark-tcp.png) |
| 1440x900-light | [TCP](../../../artifacts/qa/reading-notes-phase-3a-domain-4-batch-a/screenshots/before/1440x900-light-tcp.png) | [TCP](../../../artifacts/qa/reading-notes-phase-3a-domain-4-batch-a/screenshots/after/1440x900-light-tcp.png) |
| 1440x900-dark | [TCP](../../../artifacts/qa/reading-notes-phase-3a-domain-4-batch-a/screenshots/before/1440x900-dark-tcp.png) | [TCP](../../../artifacts/qa/reading-notes-phase-3a-domain-4-batch-a/screenshots/after/1440x900-dark-tcp.png) |
| 1366x768-light | [TCP](../../../artifacts/qa/reading-notes-phase-3a-domain-4-batch-a/screenshots/before/1366x768-light-tcp.png) | [TCP](../../../artifacts/qa/reading-notes-phase-3a-domain-4-batch-a/screenshots/after/1366x768-light-tcp.png) |
| 1366x768-dark | [TCP](../../../artifacts/qa/reading-notes-phase-3a-domain-4-batch-a/screenshots/before/1366x768-dark-tcp.png) | [TCP](../../../artifacts/qa/reading-notes-phase-3a-domain-4-batch-a/screenshots/after/1366x768-dark-tcp.png) |
| 768x1024-light | [TCP](../../../artifacts/qa/reading-notes-phase-3a-domain-4-batch-a/screenshots/before/768x1024-light-tcp.png) | [TCP](../../../artifacts/qa/reading-notes-phase-3a-domain-4-batch-a/screenshots/after/768x1024-light-tcp.png) |
| 768x1024-dark | [TCP](../../../artifacts/qa/reading-notes-phase-3a-domain-4-batch-a/screenshots/before/768x1024-dark-tcp.png) | [TCP](../../../artifacts/qa/reading-notes-phase-3a-domain-4-batch-a/screenshots/after/768x1024-dark-tcp.png) |
| 390x844-light | [TCP](../../../artifacts/qa/reading-notes-phase-3a-domain-4-batch-a/screenshots/before/390x844-light-tcp.png) | [TCP](../../../artifacts/qa/reading-notes-phase-3a-domain-4-batch-a/screenshots/after/390x844-light-tcp.png) |
| 390x844-dark | [TCP](../../../artifacts/qa/reading-notes-phase-3a-domain-4-batch-a/screenshots/before/390x844-dark-tcp.png) | [TCP](../../../artifacts/qa/reading-notes-phase-3a-domain-4-batch-a/screenshots/after/390x844-dark-tcp.png) |
| 360x800-light | [TCP](../../../artifacts/qa/reading-notes-phase-3a-domain-4-batch-a/screenshots/before/360x800-light-tcp.png) | [TCP](../../../artifacts/qa/reading-notes-phase-3a-domain-4-batch-a/screenshots/after/360x800-light-tcp.png) |
| 360x800-dark | [TCP](../../../artifacts/qa/reading-notes-phase-3a-domain-4-batch-a/screenshots/before/360x800-dark-tcp.png) | [TCP](../../../artifacts/qa/reading-notes-phase-3a-domain-4-batch-a/screenshots/after/360x800-dark-tcp.png) |

## Preservation and remaining issues

Entry inventory: **32,334 files**; final verification allows only4existing paths to differ, leaving32,330byte-identical. Earlier dirty/untracked work, D1-A/D2-A/D3-A, D5 ACC01–05, Task157, their reports/QA, all diagram templates/scenario data, Slides/Vocabulary/banks/Quiz/navigation/progress are protected. Original historical task/progress/handoff bytes remain exact prefixes. No destructive Git, branch switch, commit or push occurred.

**Deferred scenario01 consistency follow-up:** its existing reasoning still says segmentation prevents lateral movement without the new qualifications. The permitted subsection/summary/necessary-diagram scope does not explicitly authorize scenario edits; all12scenario blocks and reusable JS remain unchanged. This residual inconsistency is disclosed rather than claimed resolved. It requires separate authorization. The four approved target corrections are implemented; failing legacy/exact-text tests remain disclosed. No other finding, HOLD/REJECT recommendation or visual enrichment was started.

## Resumable checkpoint and next step

Run `python -X utf8 artifacts/qa/reading-notes-phase-3a-domain-4-batch-a/verify-final.py`; read fresh `final-verification.json`, not historical finalizers. Human acceptance is pending for this batch and is not inferred for earlier ones. Eighteen named finding groups are now implemented across seven bounded academic batches. Recommended next main-plan work, only after separate authorization: D5-C remaining **ENR-D5-07/ENR-D5-08**; **ACC-D5-05 already completed**, do not redo it. Consider separately authorizing the documented scenario01 consistency follow-up. Begin neither now.


Final preservation verification: **30/30 PASS**; 32,334 entry files, exactly four authorized existing paths changed, 32,330 unchanged. Content12/12; main and supplemental Chrome states PASS; 320 valid PNGs.

**Phase 3A Domain 4 Batch A Complete — Awaiting Human Acceptance.**
