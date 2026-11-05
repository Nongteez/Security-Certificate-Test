# Phase 3A Domain 5 Batch 2 — Academic corrections

Date: 2026-11-04 (Asia/Bangkok). **ACC-D5-03 and ACC-D5-04 implemented and verified — awaiting human acceptance.**

## Authorization and protected scope

The Batch 2 request explicitly authorizes only ACC-D5-03 and ACC-D5-04. Both are APPROVE WITH REVISION in the Phase 2 implementation plan. Its historical implementationAuthorized=false field records the earlier approval gate; the new request supplies authorization for these two IDs. Neither finding is HOLD/REJECT. No other recommendation is authorized.

Targets confirmed against actual current content: `topic-5-1-data-sanitization-destruction` (5.1.4) and `topic-5-3-irp-lifecycle-phases` (5.3.3) in `content/isc2-cc-2026/reading/domain-5.md`. Entry lines, rather than stale Phase 2 coordinates, govern the exact-change register. The audit/review decisions, implementation plan, progress/handoff and Batch 1 report were revisited before production edits. The old Settapon absolute source path is unavailable; repository-local original screenshots were checked directly.

Batch 1 ACC-D5-01/02 is protected: both complete source units, their review cues and scenario 04 remain identical. Its report, all evidence and previous review dispositions remain unchanged. Human acceptance is not inferred from the request to continue.

## Implemented academic corrections

### ACC-D5-03 — Media sanitization

Updated the current reference to Rev. 2. Clear now concerns user-addressable logical clearing against simple recovery, rather than a promise to overwrite every physical SSD location. Purge and Destroy use bounded recovery goals; destruction also makes the media unusable. Retained the existing three-method structure and comparison table, with Crypto-shredding/CE identified as a conditional purge technique rather than a fourth method. Qualified command-name, degaussing, reuse/donation and physical-damage assertions. Added one concise verification-versus-validation distinction. Updated matching review wording and the existing hospital SSD-donation scenario 01 in both Reading representations; no additional scenario was added.

CE now depends on appropriate encryption before storage and sanitization of all target-key copies, with separate consideration for plaintext/backup/escrow material. It is not a guarantee against all future recovery capabilities. Thai uses practical infeasibility under stated effort, rather than treating the issue solely as economic cost. No device command sequence or advanced cryptographic tutorial was added.

### ACC-D5-04 — Incident-response attribution

Replaced the unverified joint NIST/ISO/ISC2 mandatory-sequence attribution with an explicit course teaching model. Explained current NIST Rev. 3/CSF 2.0 context and continuous improvement, without substituting another mandatory six-step pipeline. Corrected the long-term-containment Thai typo and paired its meaning in English. Qualified the post-incident timing as an organizational/example schedule and clarified that useful improvements need not wait for recovery. Updated only the directly matching final review cue.

All six activity headings and the original verb table, ransomware worked case and IR diagram remain intact. The diagram contains no NIST/ISO attribution; adjacent explanation supplies the corrected context, so no shared/global JavaScript or diagram edit was needed. Valid operational detail elsewhere was not re-certified or expanded under this finding.

## Authoritative verification

### ACC-D5-03 — NIST SP 800-88 Rev. 2 (September 2025)

[NIST SP 800-88 Rev. 2 (September 2025)](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-88r2.pdf). Locations: 2.4: media, data sensitivity and disposal factors; 3.1.1–3.1.3: Clear, Purge and Destroy; 3.2.2–3.2.3: CE applicability and all target-key copies; 4.5.1–4.5.2: verification versus validation. Verified 2026-11-04. Use media-specific techniques and accepted outcomes. CE depends on prior encryption and key management; a named erase command, drilled hole or failed device does not establish sanitization. Preserve the three-method distinction without timeless 100% guarantees.

### ACC-D5-03 — NIST sanitization publication record

[NIST sanitization publication record](https://csrc.nist.gov/pubs/sp/800/88/r2/final). Locations: Final publication; supersedes Rev. 1. Verified 2026-11-04. Rev. 2 is the current publication used for this correction; the old citation was not sufficient as a current reference.

### ACC-D5-04 — NIST SP 800-61 Rev. 3 (April 2025)

[NIST SP 800-61 Rev. 3 (April 2025)](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r3.pdf). Locations: 2.1; Figures 1–2; printed pp.4–6; Continuous lessons and model selection, printed p.6. Verified 2026-11-04. Current NIST frames IR through CSF 2.0 and continuous improvement; it does not establish the exact local six-step mandatory NIST/ISO/ISC2 sequence. Retain the course activities/diagram/example with explicit teaching-model context. Formal post-incident review does not postpone all improvement until recovery ends.

### ACC-D5-04 — NIST incident-response publication record

[NIST incident-response publication record](https://csrc.nist.gov/pubs/sp/800/61/r3/final). Locations: Final publication; CSF 2.0 community profile. Verified 2026-11-04. Provides current version/attribution context without claiming an unverified ISO equivalence.

## Exact original and corrected wording

The following is the complete change register. Original files are preserved under this batch’s QA directory; structured line-by-line pairs are in `exact-changes.json`. Thai and English replacements were checked for the same scope, actor, conditions and limitations.

### ACC-D5-03 — `content/isc2-cc-2026/reading/domain-5.md`; entry line 134 → final line 134

**Original:**

```text
เมื่ออุปกรณ์จัดเก็บข้อมูล (Hard Drive, SSD, เทปสำรองข้อมูล, แฟลชไดรฟ์) สิ้นสุดการใช้งานหรือต้องโอนย้ายไปให้ผู้อื่น องค์กรต้องทำลายข้อมูลที่ค้างอยู่ไม่ให้สามารถกู้คืนได้ ตามมาตรฐานสากล **NIST SP 800-88 Rev. 1 (Guidelines for Media Sanitization)** ได้กำหนดระดับการทำลายข้อมูลไว้ 3 ระดับหลัก:
```

**Corrected:**

```text
เมื่ออุปกรณ์จัดเก็บข้อมูล (Hard Drive, SSD, เทปสำรองข้อมูล, แฟลชไดรฟ์) จะถูกใช้ซ้ำ ส่งต่อ หรือกำจัด ต้องเลือกวิธีให้เหมาะกับสื่อ ความอ่อนไหวของข้อมูล และนโยบายองค์กร **NIST SP 800-88 Rev. 2 (Guidelines for Media Sanitization)** อธิบายการทำให้เข้าถึงข้อมูลเป้าหมายไม่ได้ในทางปฏิบัติภายใต้ระดับความพยายามที่กำหนด ไม่ใช่การรับประกันว่ากู้คืนไม่ได้ 100% ตลอดไป / Select a method for the media, data sensitivity and organizational policy. NIST SP 800-88 Rev. 2 defines sanitization in terms of making target-data access infeasible for a specified level of effort, using three methods:
```

### ACC-D5-03 — `content/isc2-cc-2026/reading/domain-5.md`; entry line 137 → final line 137

**Original:**

```text
<h5>1. Clear (การเขียนทับระดับผู้ใช้):</h5>
```

**Corrected:**

```text
<h5>1. Clear (การล้างข้อมูลด้วยวิธีเชิงตรรกะ):</h5>
```

### ACC-D5-03 — `content/isc2-cc-2026/reading/domain-5.md`; entry line 139 → final line 139

**Original:**

```text
การเขียนทับพื้นที่จัดเก็บข้อมูลทั้งหมดด้วยข้อมูลที่ไม่มีความหมาย (เช่น เขียนทับด้วยเลข 0 ทั้งหมด หรือบิตสุ่ม) โดยใช้คำสั่งมาตรฐานระดับผู้ใช้ (Logical Interface Commands) สามารถป้องกันการกู้คืนข้อมูลด้วยซอฟต์แวร์กู้ข้อมูลทั่วไปได้ แต่ไม่สามารถป้องกันการกู้ข้อมูลด้วยเครื่องมือวิเคราะห์ในห้องปฏิบัติการขั้นสูงได้ เหมาะสำหรับอุปกรณ์ที่จะนำกลับมาหมุนเวียนใช้ใหม่ภายในองค์กรเดียวกัน
```

**Corrected:**

```text
ใช้วิธีเชิงตรรกะกับพื้นที่ที่ผู้ใช้เข้าถึงได้ (User-addressable Storage) เพื่อต้านการกู้คืนแบบง่ายผ่านอินเทอร์เฟซปกติ เช่น การเขียนทับเมื่อเหมาะกับสื่อนั้น ไม่ได้แปลว่าครอบคลุมพื้นที่สำรองหรือข้อมูลเดิมทุกตำแหน่งของ SSD / Clear protects against simple, non-invasive recovery through the normal interface. Overwriting is one media-dependent technique; it does not necessarily reach every previous data location on an SSD.
```

### ACC-D5-03 — `content/isc2-cc-2026/reading/domain-5.md`; entry line 146 → final line 146

**Original:**

```text
การใช้เทคนิคระดับฮาร์ดแวร์หรือทางกายภาพเพื่อทำให้ข้อมูลไม่สามารถกู้คืนได้ แม้จะใช้เครื่องมือทางห้องปฏิบัติการขั้นสูง (Laboratory Attack Techniques) ก็ตาม:
- **ATA Secure Erase / Cryptographic Erase (CE):** สั่งการผ่านคอนโทรลเลอร์ของอุปกรณ์โซลิดสเตตไดรฟ์ (SSD) เพื่อล้างบล็อกหน่วยความจำแฟลชทั้งหมด รวมถึงพื้นที่สำรอง (Over-provisioned areas)
- **Degaussing (การลบล้างสนามแม่เหล็ก):** การใช้เครื่องสร้างสนามแม่เหล็กความเข้มสูงทำลายโดเมนแม่เหล็กบนสื่อบันทึกประเภทจานแม่เหล็ก (HDD และเทป) ทำให้ข้อมูลหายไปอย่างสิ้นเชิง (ข้อควรระวัง: Degaussing จะทำลายฮาร์ดดิสก์จนไม่สามารถนำกลับมาใช้ใหม่ได้ และไม่สามารถใช้กับ SSD ได้)
- สื่อบันทึกที่ผ่านการ Purge ด้วย Secure Erase สามารถนำไปใช้งานต่อนอกองค์กรหรือบริจาคได้อย่างปลอดภัย
```

**Corrected:**

```text
ใช้เทคนิคเชิงตรรกะหรือทางกายภาพเพื่อให้การกู้ข้อมูลเป้าหมายด้วยเทคนิคห้องปฏิบัติการขั้นสูงไม่อาจทำได้ในทางปฏิบัติ โดยมุ่งให้สื่อยังใช้ต่อได้หากเทคนิคและสื่อนั้นรองรับ / Purge targets infeasible recovery even with advanced laboratory techniques while aiming to retain usability where supported.
- **Secure Erase / Cryptographic Erase (CE):** ต้องตรวจเทคนิคที่อุปกรณ์รองรับและเงื่อนไขของผู้ผลิต ชื่อคำสั่งอย่างเดียวไม่ยืนยันผล และ CE ล้างกุญแจ ไม่ใช่เขียนทับบล็อกข้อมูลทุกบล็อก / A command name alone does not establish effective purge; CE sanitizes keys rather than overwriting every data block.
- **Degaussing (การลบล้างสนามแม่เหล็ก):** ใช้ได้กับสื่อแม่เหล็กที่เหมาะสม เช่น HDD หรือเทป ไม่ใช้กับ SSD และอาจทำให้สื่อใช้ต่อไม่ได้ / Degaussing applies to suitable magnetic media, not SSDs, and can leave the media unusable.
- การส่งต่อหรือบริจาคต้องยอมรับผลล้างข้อมูลตามนโยบายก่อน ไม่ใช่เห็นคำว่า Secure Erase แล้วถือว่าปลอดภัย / Reuse or donation requires an accepted sanitization outcome under policy, not just a reported command name.
```

### ACC-D5-03 — `content/isc2-cc-2026/reading/domain-5.md`; entry line 156 → final line 156

**Original:**

```text
การทำลายชิ้นส่วนทางกายภาพของสื่อบันทึกข้อมูลจนไม่สามารถนำมาเชื่อมต่อหรือใช้งานได้อีกตลอดไป ได้แก่ การบดละเอียด (Shredding), การเผาทำลายที่อุณหภูมิสูง (Incineration), การย่อยสลายด้วยสารเคมี (Disintegration), การหลอมละลาย (Melting), หรือการเจาะทะลุจานบันทึก (Deforming/Drilling) นิยมใช้กับสื่อบันทึกที่มีข้อมูลความลับระดับสูงสุด หรืออุปกรณ์ที่ชำรุดเสียหายจนไม่สามารถสั่งรันคำสั่ง Clear/Purge ได้
```

**Corrected:**

```text
ทำให้การกู้ข้อมูลเป้าหมายด้วยเทคนิคห้องปฏิบัติการขั้นสูงไม่อาจทำได้ในทางปฏิบัติ และทำให้สื่อใช้จัดเก็บข้อมูลต่อไม่ได้ เช่น บดย่อยหรือเผาด้วยกระบวนการที่เหมาะกับชนิดสื่อและได้รับอนุมัติ การเจาะรูหรือทำให้อุปกรณ์เปิดไม่ติดเพียงอย่างเดียวไม่ได้พิสูจน์ว่าข้อมูลถูกทำลายครบ / Destroy makes advanced recovery infeasible and leaves the media unusable for storage. Use an approved media-appropriate process; a drilled hole or a device that no longer starts is not proof of effective destruction.
```

### ACC-D5-03 — `content/isc2-cc-2026/reading/domain-5.md`; entry line 163 → final line 163

**Original:**

```text
เทคนิคพิเศษสำหรับการทำลายข้อมูลบนระบบคลาวด์หรือไดรฟ์เสมือน (Virtual Disks) ที่ผู้ใช้งานไม่มีสิทธิ์เข้าถึงอุปกรณ์ฮาร์ดแวร์ทางกายภาพ: ทำได้โดยการเข้ารหัสข้อมูลทั้งหมดด้วยอัลกอริทึมที่แข็งแกร่ง (AES-256) ตั้งแต่ต้น จากนั้นเมื่อต้องการทำลายข้อมูล ให้ทำการลบและทำลายกุญแจถอดรหัส (Decryption Key) ทิ้งอย่างถาวร ส่งผลให้ข้อมูลที่เหลืออยู่กลายเป็นขยะดิจิทัลที่ไม่สามารถถอดรหัสกลับมาได้อีกเลย
```

**Corrected:**

```text
การทำลายกุญแจอาจใช้เป็น **Cryptographic Erase (CE)** ซึ่งเป็นเทคนิคของ Purge ไม่ใช่วิธีหลักลำดับที่สี่ ใช้ได้เมื่อข้อมูลเป้าหมายถูกเข้ารหัสอย่างเหมาะสมก่อนจัดเก็บ และล้างกุญแจเป้าหมายที่จำเป็นรวมทุกสำเนาได้อย่างน่าเชื่อถือ ต้องพิจารณาสำรองข้อมูล กุญแจสำรอง และสำเนา Plaintext แยกต่างหากด้วย / CE is a purge technique, not a fourth sanitization method. It depends on suitable encryption before storage and reliable sanitization of all copies of the target keys. Backups, escrowed keys and plaintext copies need separate consideration; CE is not a promise against every future recovery capability.
```

### ACC-D5-03 — `content/isc2-cc-2026/reading/domain-5.md`; entry line 169 → final line 169

**Original:**

```text
| วิธีการตาม NIST SP 800-88 | กลไกการดำเนินการ | ป้องกันการโจมตีระดับแล็บได้หรือไม่ | อุปกรณ์นำกลับมาใช้ใหม่ได้หรือไม่ |
```

**Corrected:**

```text
**ตรวจผลก่อนยอมรับ (Assurance):** Verification ตรวจว่ากระบวนการเสร็จและมีข้อผิดพลาดหรือไม่ ส่วน Validation ประเมินว่าผลเพียงพอต่อสื่อ ข้อมูล และความเสี่ยงที่กำหนดหรือไม่ หากไม่เพียงพอต้องเลือกดำเนินการเพิ่มเติมก่อนปล่อยสื่อ / Verification checks completion and reported issues; validation decides whether the outcome is effective for the media, data and risk. An inadequate result must not be accepted for release.

| วิธี/เทคนิค (Method/technique) | แนวทาง (Approach) | ขอบเขตผล (Protection goal) | ใช้สื่อต่อ (Reuse) |
```

### ACC-D5-03 — `content/isc2-cc-2026/reading/domain-5.md`; entry line 171 → final line 173

**Original:**

```text
| **Clear** | เขียนทับแบบลอจิคัล (Overwriting) | ไม่ได้ (แล็บขั้นสูงอาจกู้ได้) | ได้ (นำกลับมาใช้ซ้ำได้) |
| **Purge** | Secure Erase, Degaussing, CE | **ได้ (แล็บขั้นสูงก็กู้คืนไม่ได้)** | ได้สำหรับ SSD/CE, ไม่ได้สำหรับ HDD ที่โดน Degauss |
| **Destroy** | บดย่อย, เผาทำลาย, หลอมละลาย | **ได้ 100% (สื่อถูกทำลายถาวร)** | ไม่ได้ (อุปกรณ์พังทลายสิ้นเชิง) |
| **Crypto-shredding** | ลบและทำลายกุญแจเข้ารหัสทิ้ง | **ได้ (หากกุญแจถูกทำลายสมบูรณ์)** | ได้ (เนื้อที่จัดเก็บบนคลาวด์นำมาเขียนทับใหม่ได้) |
```

**Corrected:**

```text
| **Clear** | เทคนิคเชิงตรรกะ (Logical technique) | ต้านการกู้แบบง่ายผ่านอินเทอร์เฟซปกติ (Simple recovery) | โดยทั่วไปได้ ตามสื่อ/นโยบาย (Usually; media/policy dependent) |
| **Purge** | เทคนิคที่เหมาะกับสื่อ รวม CE เมื่อครบเงื่อนไข (Media-appropriate technique) | กู้ระดับแล็บไม่ได้ในทางปฏิบัติ (Advanced recovery infeasible) | มุ่งให้ใช้ต่อได้ แต่ขึ้นกับเทคนิค (Intended; technique dependent) |
| **Destroy** | ทำลายทางกายภาพที่เหมาะสม (Appropriate physical destruction) | กู้ระดับแล็บไม่ได้ในทางปฏิบัติ (Advanced recovery infeasible) | ไม่ได้ (Unusable for storage) |
| **CE / Crypto-shredding** | เทคนิคของ Purge: ล้างกุญแจเป้าหมาย (Purge technique: key sanitization) | ขึ้นกับการเข้ารหัสและทุกสำเนากุญแจ (Encryption/key-copy conditions) | อาจได้เมื่อสื่อยังทำงานและนโยบายอนุญาต (May be reusable under policy) |
```

### ACC-D5-04 — `content/isc2-cc-2026/reading/domain-5.md`; entry line 766 → final line 768

**Original:**

```text
ตามมาตรฐาน **NIST SP 800-61 / ISO 27035** และหลักสูตร ISC2 CC วงจรการตอบสนองต่อเหตุการณ์แบ่งออกเป็น 6 ขั้นตอนต่อเนื่องกันอย่างเป็นระบบ:
```

**Corrected:**

```text
บทเรียนนี้ใช้ **6 กิจกรรมเป็นแบบจำลองเพื่อการเรียน (Teaching Model)** ตามภาพและตัวอย่างด้านล่าง กิจกรรมอาจคาบเกี่ยว ย้อนกลับ หรือทำซ้ำตามเหตุการณ์ ไม่ใช่ลำดับบังคับสากลที่ NIST, ISO หรือ ISC2 กำหนดตรงกัน / The six activities below are this course's teaching model. They can overlap, repeat or be revisited; they are not a universal sequence jointly prescribed by NIST, ISO and ISC2.

**บริบท NIST ปัจจุบัน (Current NIST context):** NIST SP 800-61 Rev. 3 เชื่อม IR กับ CSF 2.0 โดย Detect, Respond และ Recover เป็นแกนการตอบสนอง ส่วน Govern, Identify และ Protect สนับสนุนความพร้อมและการจัดการความเสี่ยง พร้อมปรับปรุงจากบทเรียนอย่างต่อเนื่อง / NIST SP 800-61 Rev. 3 places incident response within CSF 2.0: Detect, Respond and Recover address incidents, supported by broader Govern, Identify and Protect activities and continuous improvement. นี่ไม่ใช่การเปลี่ยนเป็นขั้นตอนบังคับใหม่หกข้อ / These functions are not a replacement six-step mandatory pipeline.
```

### ACC-D5-04 — `content/isc2-cc-2026/reading/domain-5.md`; entry line 796 → final line 800

**Original:**

```text
- **Long-term Containment (การควบคุมระยะยาว):** วางระบบสำรองชั่วคราวเพื่อให้อสังหาริมทรัพย์ของระบบงานยังคงให้บริการได้ในวงจำกัดในระหว่างรอการแก้ไขถาวร
```

**Corrected:**

```text
- **Long-term Containment (การควบคุมระยะยาว):** จัดสภาพแวดล้อมชั่วคราวที่ควบคุมความเสี่ยง เพื่อให้บริการที่จำเป็นทำงานได้ในวงจำกัดระหว่างรอการแก้ไขถาวร / Maintain limited essential services in a controlled temporary environment while permanent remediation is arranged.
```

### ACC-D5-04 — `content/isc2-cc-2026/reading/domain-5.md`; entry line 824 → final line 828

**Original:**

```text
ขั้นตอนสุดท้ายแต่ทรงคุณค่าที่สุดสำหรับการปรับปรุงระบบ:
- จัดประชุมถอดบทเรียนร่วมกับผู้เกี่ยวข้องทั้งหมดภายใน 1–2 สัปดาห์หลังเหตุการณ์ยุติ
```

**Corrected:**

```text
การทบทวนอย่างเป็นทางการหลังเหตุการณ์ช่วยปรับปรุงระบบ แต่ไม่ต้องรอให้กู้คืนเสร็จจึงเริ่มใช้บทเรียนที่พบ / A formal post-incident review supports improvement; useful lessons can be applied before recovery finishes.
- จัดประชุมตามกรอบเวลาที่องค์กรกำหนด เช่น ภายใน 1–2 สัปดาห์หลังเหตุการณ์ยุติในตัวอย่างนี้ ไม่ใช่กำหนดสากล / Use the organization's review schedule; one to two weeks is an example, not a universal deadline.
```

### ACC-D5-03 — `content/isc2-cc-2026/reading/domain-5.md`; entry line 1287 → final line 1291

**Original:**

```text
- **5. Clear vs. Purge vs. Destroy:** Clear ป้องกันเครื่องมือทั่วไปแต่วิธีทางแล็บอาจกู้ได้; Purge ป้องกันได้แม้ใช้เครื่องมือแล็บขั้นสูง; Destroy ทำลายสื่อทางกายภาพจนใช้งานไม่ได้ถาวร
```

**Corrected:**

```text
- **5. Clear vs. Purge vs. Destroy:** Clear มุ่งต้านการกู้แบบง่าย; Purge มุ่งให้การกู้ระดับแล็บไม่อาจทำได้ในทางปฏิบัติ; Destroy เพิ่มการทำให้สื่อใช้จัดเก็บต่อไม่ได้ ทุกวิธีต้องเหมาะกับสื่อและตรวจผล / Clear targets simple recovery; Purge targets infeasible advanced recovery; Destroy also makes the media unusable. Match the method to the media and assess the outcome.
```

### ACC-D5-03 — `content/isc2-cc-2026/reading/domain-5.md`; entry line 1298 → final line 1302

**Original:**

```text
- ถ้าข้อสอบถามถึงการทำลายข้อมูลบนระบบคลาวด์ที่เข้าไม่ถึงฮาร์ดแวร์จริง คำตอบคือ Crypto-shredding (การลบและทำลายกุญแจถอดรหัสทิ้ง)
```

**Corrected:**

```text
- บนคลาวด์หรือไดรฟ์เสมือน CE / Crypto-shredding อาจเหมาะเมื่อครบเงื่อนไขการเข้ารหัสและการล้างกุญแจรวมสำเนา ไม่ใช่คำตอบอัตโนมัติเพียงเพราะเข้าไม่ถึงฮาร์ดแวร์ / For cloud or virtual storage, consider CE only when encryption and key-sanitization conditions are met; lack of physical access alone does not make it sufficient.
```

### ACC-D5-03 — `content/isc2-cc-2026/reading/domain-5.md`; entry line 1313 → final line 1317

**Original:**

```text
situation: โรงพยาบาลแห่งหนึ่งเตรียมปลดระวางอุปกรณ์ Solid-State Drive (SSD) ที่เคยจัดเก็บประวัติข้อมูลสุขภาพของผู้ป่วย (Protected Health Information - PHI) เพื่อนำไดรฟ์ไปบริจาคต่อให้กับสถานศึกษา ฝ่ายความปลอดภัยต้องการลบข้อมูลโดยมั่นใจว่าข้อมูลจะไม่สามารถกู้คืนได้ด้วยเครื่องมือทางห้องปฏิบัติการขั้นสูง แต่ยังคงรักษาโครงสร้างของ SSD ให้สามารถนำกลับมาใช้งานซ้ำได้
question: ตามมาตรฐาน NIST SP 800-88 Rev. 1 ระดับการทำลายข้อมูล (Sanitization Level) ใดที่เหมาะสมที่สุดสำหรับสถานการณ์นี้?
answer: Purge (Sanitization via Cryptographic Erase / Secure Erase)
reasoning: NIST SP 800-88 แบ่งระดับการล้างข้อมูลเป็น 3 ระดับหลัก: Clear (การเขียนทับระดับผู้ใช้ ไม่สามารถป้องกันเครื่องมือห้องแล็บขั้นสูงได้), Purge (การล้างข้อมูลระดับลึก เช่น Secure Erase ของคอนโทรลเลอร์ SSD หรือ Degaussing บนสื่อแม่เหล็ก ทำให้ไม่สามารถกู้คืนได้แม้ใช้เครื่องมือขั้นสูงในแล็บ แต่อุปกรณ์ยังนำมาใช้ต่อได้), และ Destroy (การทำลายสื่อทางกายภาพ เช่น บด ย่อย หรือเผา ซึ่งอุปกรณ์จะไม่สามารถใช้งานได้อีก)
```

**Corrected:**

```text
situation: โรงพยาบาลจะบริจาค SSD ที่เคยเก็บข้อมูลผู้ป่วย ต้องการให้การกู้ข้อมูลระดับแล็บไม่อาจทำได้ในทางปฏิบัติและให้ไดรฟ์ยังใช้ต่อได้ โดยต้องตรวจวิธีที่รุ่นนั้นรองรับและยอมรับผลตามนโยบายก่อนส่งต่อ / A hospital plans to donate a patient-data SSD. It needs infeasible advanced recovery while retaining usability, subject to a supported technique and an accepted sanitization outcome.
question: ตาม NIST SP 800-88 Rev. 2 วิธีใดตรงกับเป้าหมายของกรณีนี้? / Which sanitization method matches this case's goal?
answer: Purge (ใช้เทคนิคที่เหมาะกับ SSD และตรวจผลแล้ว / SSD-appropriate technique with verified and validated results)
reasoning: Purge ตรงกับเป้าหมายการกู้ระดับแล็บและการใช้สื่อต่อ ต้องเลือกเทคนิคที่ SSD รองรับ โดย CE ใช้ได้เมื่อครบเงื่อนไขการเข้ารหัสและกุญแจ การ Degauss ไม่ใช้กับ SSD และชื่อ Secure Erase อย่างเดียวไม่พิสูจน์ผล ต้อง Verification และ Validation ก่อนยอมรับ / Purge matches the advanced-recovery goal while aiming to retain usability. Select a supported SSD technique; CE requires appropriate encryption and key conditions. Degaussing is unsuitable for SSDs, and a Secure Erase label alone is not proof. Verify completion and validate effectiveness.
```

### ACC-D5-04 — `content/isc2-cc-2026/reading/domain-5.md`; entry line 1550 → final line 1554

**Original:**

```text
1. **Incident Response Lifecycle (6 ขั้นตอน):** Preparation &rarr; Detection &amp; Analysis &rarr; Containment &rarr; Eradication &rarr; Recovery &rarr; Post-Incident Review
```

**Corrected:**

```text
1. **Incident Response Teaching Model (6 กิจกรรม):** Preparation &rarr; Detection &amp; Analysis &rarr; Containment &rarr; Eradication &rarr; Recovery &rarr; Post-Incident Review เป็นภาพช่วยเรียน กิจกรรมอาจคาบเกี่ยวหรือย้อนกลับ ไม่ใช่ลำดับมาตรฐานบังคับ / A learning aid; activities can overlap or be revisited, rather than a mandatory standard sequence.
```

### ACC-D5-03 — `content/isc2-cc-2026/reading/domain-5-scenarios.js`; entry line 23 → final line 23

**Original:**

```text
    situation: 'โรงพยาบาลแห่งหนึ่งเตรียมปลดระวางอุปกรณ์ Solid-State Drive (SSD) ที่เคยจัดเก็บประวัติข้อมูลสุขภาพของผู้ป่วย (Protected Health Information - PHI) เพื่อนำไดรฟ์ไปบริจาคต่อให้กับสถานศึกษา ฝ่ายความปลอดภัยต้องการลบข้อมูลโดยมั่นใจว่าข้อมูลจะไม่สามารถกู้คืนได้ด้วยเครื่องมือทางห้องปฏิบัติการขั้นสูง แต่ยังคงรักษาโครงสร้างของ SSD ให้สามารถนำกลับมาใช้งานซ้ำได้',
    question: 'ตามมาตรฐาน NIST SP 800-88 Rev. 1 ระดับการทำลายข้อมูล (Sanitization Level) ใดที่เหมาะสมที่สุดสำหรับสถานการณ์นี้?',
    answer: 'Purge (Sanitization via Cryptographic Erase / Secure Erase)',
    reasoning: 'NIST SP 800-88 แบ่งระดับการล้างข้อมูลเป็น 3 ระดับหลัก: Clear (การเขียนทับระดับผู้ใช้ ไม่สามารถป้องกันเครื่องมือห้องแล็บขั้นสูงได้), Purge (การล้างข้อมูลระดับลึก เช่น Secure Erase ของคอนโทรลเลอร์ SSD หรือ Degaussing บนสื่อแม่เหล็ก ทำให้ไม่สามารถกู้คืนได้แม้ใช้เครื่องมือขั้นสูงในแล็บ แต่อุปกรณ์ยังนำมาใช้ต่อได้), และ Destroy (การทำลายสื่อทางกายภาพ เช่น บด ย่อย หรือเผา ซึ่งอุปกรณ์จะไม่สามารถใช้งานได้อีก)'
```

**Corrected:**

```text
    situation: 'โรงพยาบาลจะบริจาค SSD ที่เคยเก็บข้อมูลผู้ป่วย ต้องการให้การกู้ข้อมูลระดับแล็บไม่อาจทำได้ในทางปฏิบัติและให้ไดรฟ์ยังใช้ต่อได้ โดยต้องตรวจวิธีที่รุ่นนั้นรองรับและยอมรับผลตามนโยบายก่อนส่งต่อ / A hospital plans to donate a patient-data SSD. It needs infeasible advanced recovery while retaining usability, subject to a supported technique and an accepted sanitization outcome.',
    question: 'ตาม NIST SP 800-88 Rev. 2 วิธีใดตรงกับเป้าหมายของกรณีนี้? / Which sanitization method matches this case\'s goal?',
    answer: 'Purge (ใช้เทคนิคที่เหมาะกับ SSD และตรวจผลแล้ว / SSD-appropriate technique with verified and validated results)',
    reasoning: 'Purge ตรงกับเป้าหมายการกู้ระดับแล็บและการใช้สื่อต่อ ต้องเลือกเทคนิคที่ SSD รองรับ โดย CE ใช้ได้เมื่อครบเงื่อนไขการเข้ารหัสและกุญแจ การ Degauss ไม่ใช้กับ SSD และชื่อ Secure Erase อย่างเดียวไม่พิสูจน์ผล ต้อง Verification และ Validation ก่อนยอมรับ / Purge matches the advanced-recovery goal while aiming to retain usability. Select a supported SSD technique; CE requires appropriate encryption and key conditions. Degaussing is unsuitable for SSDs, and a Secure Erase label alone is not proof. Verify completion and validate effectiveness.'
```

## Modified files and preservation

Production: `content/isc2-cc-2026/reading/domain-5.md` and `content/isc2-cc-2026/reading/domain-5-scenarios.js` (scenario 01 fields only). Documentation: this new report, append-only current checkpoints in `reading-notes-enrichment-progress.md` and `reading-notes-enrichment-handoff.md`, and one new Batch 2 task row in `docs/plans/task.md`. All new QA files are restricted to `artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/`.

The entry snapshot covers **30,911 pre-existing files**, including all Batch 1 artifacts and existing uncommitted work. Fresh pre-finalization comparison found no unexpected file changes. Final whole-workspace results, changed-file allowlist and all new paths are recorded in `final-verification.json`. Existing task rows and both old progress/handoff documents are retained byte-for-byte as prefixes. No branch change, destructive Git operation, commit or push occurred.

One Windows authoring step converted line endings to CRLF. The content check detected it; original LF endings were restored, and the final content check confirms Batch 1 byte equality. `line-ending-restoration.json` records the repair. No parser, CSS, navigation, progress keys, Domain 1–4, learning slides, vocabulary, quiz, question banks, media assets or shared JavaScript changed.

## Content integrity results

**13/13 PASS** in `content-integrity.json`: all original IDs/order, diagrams and wrapper counts retained; tables remain structurally valid; all 12 scenarios render; scenario 01 matches its reusable data; every other scenario, including Batch 1 scenario 04, is unchanged. Batch 1 signature/hash/password and TPM/HSM units and matching review cues are identical. The six IR activity headings, verb table and full ransomware case are preserved. Updated units have no leaked Markdown/fence/scenario syntax.

## Regression results and pre-existing failures

No root package.json/unified npm test command exists. Twelve relevant existing suites ran unchanged before and after edits. **8 pass / the same 4 fail** in both runs, with identical failed-test names/messages. Existing tests were not modified. Raw outputs are preserved in baseline/after logs; `regression-comparison.json` records the comparison.

- `verify-reading-notes-domain1`: before exit 1; after exit 1.

- `verify-reading-notes-domain2`: before exit 0; after exit 0.

- `verify-reading-notes-domain3`: before exit 0; after exit 0.

- `verify-reading-notes-domain4`: before exit 0; after exit 0.

- `verify-reading-notes-domain5`: before exit 0; after exit 0.

- `verify-reading-notes-dom-integrity`: before exit 0; after exit 0.

- `verify-reading-persistence`: before exit 0; after exit 0.

- `verify-reading-navigation`: before exit 0; after exit 0.

- `verify-reading-diagram-semantics`: before exit 1; after exit 1.

- `verify-reading-notes-rendering-quality`: before exit 0; after exit 0.

- `verify-reading-cross-domain-structure`: before exit 1; after exit 1.

- `verify-domain5-integration`: before exit 1; after exit 1.

Historical failures remain: Domain 1 preservation expects 119 updated questions but the bank has 157; diagram-semantics has seven failed tests against prior diagram expectations; cross-domain-structure has 20 failed tests against earlier content/structure; Domain 5 integration stops at a stale protected Domain 1 hash. These failures were present in Batch 1 and in the fresh Batch 2 baseline. They were not repaired, hidden or described as passing.

## Real Chrome browser QA

**12/12 configurations PASS**, using `C:\Program Files\Google\Chrome\Application\chrome.exe` (Chrome/156.0.8078.80) through CDP with an isolated temporary profile. Matrix: 1920×1080, 1440×900, 1366×768, 768×1024, 390×844 and 360×800, each light and dark. Normal viewport screenshots capture actual scrolling presentation, not misleading tall-element crops. Final evidence comprises **88 screenshots**.

All configurations show zero page-level horizontal overflow and no clipped-prose metrics, valid four-column sanitization/IR tables, 12 scenarios and all four existing diagrams in their responsive presentation. The existing narrow-screen tables scroll within their containers; both edges are reachable and captured. This does not claim four columns fit simultaneously on a phone. Direct links, reload and sidebar Domain 4→Domain 5/topic return pass for both affected anchors. There are no runtime exceptions or console errors.

Batch 1 rendered signature/HSM text matches its prior browser evidence in every matrix state; protected-unit screenshots at 1366px and 360px provide additional visual comparison. Selected native viewport screenshots were inspected for Thai glyphs, English wrapping, table readability and both themes. Automatic metrics cover all states; this is not a learner-outcome study.

QA-only issues resolved: original tall-element crops were poorly framed and replaced by settled normal viewport screenshots. Screenshot cropping via PIL was unavailable; no dependency was installed, and the final workflow does not require it. Chrome runs outside the sandbox because the previous batch established a sandbox crash-handler restriction; the isolated browser neither accesses the user profile nor modifies production.

### Screenshot index

- **1920x1080-light**: [1920x1080-light-sanitization.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1920x1080-light-sanitization.png); [1920x1080-light-incident-response.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1920x1080-light-incident-response.png); [1920x1080-light-sanitization-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1920x1080-light-sanitization-table.png); [1920x1080-light-incident-response-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1920x1080-light-incident-response-table.png); [1920x1080-light-scenario-01.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1920x1080-light-scenario-01.png); [1920x1080-light-ir-post-review.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1920x1080-light-ir-post-review.png)

- **1920x1080-dark**: [1920x1080-dark-sanitization.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1920x1080-dark-sanitization.png); [1920x1080-dark-incident-response.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1920x1080-dark-incident-response.png); [1920x1080-dark-sanitization-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1920x1080-dark-sanitization-table.png); [1920x1080-dark-incident-response-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1920x1080-dark-incident-response-table.png); [1920x1080-dark-scenario-01.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1920x1080-dark-scenario-01.png); [1920x1080-dark-ir-post-review.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1920x1080-dark-ir-post-review.png)

- **1440x900-light**: [1440x900-light-sanitization.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1440x900-light-sanitization.png); [1440x900-light-incident-response.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1440x900-light-incident-response.png); [1440x900-light-sanitization-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1440x900-light-sanitization-table.png); [1440x900-light-incident-response-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1440x900-light-incident-response-table.png); [1440x900-light-scenario-01.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1440x900-light-scenario-01.png); [1440x900-light-ir-post-review.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1440x900-light-ir-post-review.png)

- **1440x900-dark**: [1440x900-dark-sanitization.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1440x900-dark-sanitization.png); [1440x900-dark-incident-response.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1440x900-dark-incident-response.png); [1440x900-dark-sanitization-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1440x900-dark-sanitization-table.png); [1440x900-dark-incident-response-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1440x900-dark-incident-response-table.png); [1440x900-dark-scenario-01.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1440x900-dark-scenario-01.png); [1440x900-dark-ir-post-review.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1440x900-dark-ir-post-review.png)

- **1366x768-light**: [1366x768-light-sanitization.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1366x768-light-sanitization.png); [1366x768-light-incident-response.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1366x768-light-incident-response.png); [1366x768-light-sanitization-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1366x768-light-sanitization-table.png); [1366x768-light-incident-response-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1366x768-light-incident-response-table.png); [1366x768-light-scenario-01.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1366x768-light-scenario-01.png); [1366x768-light-ir-post-review.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1366x768-light-ir-post-review.png); [1366x768-light-protected-signatures.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1366x768-light-protected-signatures.png); [1366x768-light-protected-hardware.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1366x768-light-protected-hardware.png)

- **1366x768-dark**: [1366x768-dark-sanitization.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1366x768-dark-sanitization.png); [1366x768-dark-incident-response.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1366x768-dark-incident-response.png); [1366x768-dark-sanitization-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1366x768-dark-sanitization-table.png); [1366x768-dark-incident-response-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1366x768-dark-incident-response-table.png); [1366x768-dark-scenario-01.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1366x768-dark-scenario-01.png); [1366x768-dark-ir-post-review.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1366x768-dark-ir-post-review.png); [1366x768-dark-protected-signatures.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1366x768-dark-protected-signatures.png); [1366x768-dark-protected-hardware.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/1366x768-dark-protected-hardware.png)

- **768x1024-light**: [768x1024-light-sanitization.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/768x1024-light-sanitization.png); [768x1024-light-incident-response.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/768x1024-light-incident-response.png); [768x1024-light-sanitization-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/768x1024-light-sanitization-table.png); [768x1024-light-incident-response-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/768x1024-light-incident-response-table.png); [768x1024-light-scenario-01.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/768x1024-light-scenario-01.png); [768x1024-light-ir-post-review.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/768x1024-light-ir-post-review.png)

- **768x1024-dark**: [768x1024-dark-sanitization.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/768x1024-dark-sanitization.png); [768x1024-dark-incident-response.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/768x1024-dark-incident-response.png); [768x1024-dark-sanitization-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/768x1024-dark-sanitization-table.png); [768x1024-dark-incident-response-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/768x1024-dark-incident-response-table.png); [768x1024-dark-scenario-01.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/768x1024-dark-scenario-01.png); [768x1024-dark-ir-post-review.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/768x1024-dark-ir-post-review.png)

- **390x844-light**: [390x844-light-sanitization.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/390x844-light-sanitization.png); [390x844-light-incident-response.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/390x844-light-incident-response.png); [390x844-light-sanitization-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/390x844-light-sanitization-table.png); [390x844-light-sanitization-table-right.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/390x844-light-sanitization-table-right.png); [390x844-light-incident-response-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/390x844-light-incident-response-table.png); [390x844-light-incident-response-table-right.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/390x844-light-incident-response-table-right.png); [390x844-light-scenario-01.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/390x844-light-scenario-01.png); [390x844-light-ir-post-review.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/390x844-light-ir-post-review.png)

- **390x844-dark**: [390x844-dark-sanitization.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/390x844-dark-sanitization.png); [390x844-dark-incident-response.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/390x844-dark-incident-response.png); [390x844-dark-sanitization-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/390x844-dark-sanitization-table.png); [390x844-dark-sanitization-table-right.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/390x844-dark-sanitization-table-right.png); [390x844-dark-incident-response-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/390x844-dark-incident-response-table.png); [390x844-dark-incident-response-table-right.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/390x844-dark-incident-response-table-right.png); [390x844-dark-scenario-01.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/390x844-dark-scenario-01.png); [390x844-dark-ir-post-review.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/390x844-dark-ir-post-review.png)

- **360x800-light**: [360x800-light-sanitization.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/360x800-light-sanitization.png); [360x800-light-incident-response.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/360x800-light-incident-response.png); [360x800-light-sanitization-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/360x800-light-sanitization-table.png); [360x800-light-sanitization-table-right.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/360x800-light-sanitization-table-right.png); [360x800-light-incident-response-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/360x800-light-incident-response-table.png); [360x800-light-incident-response-table-right.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/360x800-light-incident-response-table-right.png); [360x800-light-scenario-01.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/360x800-light-scenario-01.png); [360x800-light-ir-post-review.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/360x800-light-ir-post-review.png); [360x800-light-protected-signatures.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/360x800-light-protected-signatures.png); [360x800-light-protected-hardware.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/360x800-light-protected-hardware.png)

- **360x800-dark**: [360x800-dark-sanitization.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/360x800-dark-sanitization.png); [360x800-dark-incident-response.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/360x800-dark-incident-response.png); [360x800-dark-sanitization-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/360x800-dark-sanitization-table.png); [360x800-dark-sanitization-table-right.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/360x800-dark-sanitization-table-right.png); [360x800-dark-incident-response-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/360x800-dark-incident-response-table.png); [360x800-dark-incident-response-table-right.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/360x800-dark-incident-response-table-right.png); [360x800-dark-scenario-01.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/360x800-dark-scenario-01.png); [360x800-dark-ir-post-review.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/360x800-dark-ir-post-review.png); [360x800-dark-protected-signatures.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/360x800-dark-protected-signatures.png); [360x800-dark-protected-hardware.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/screenshots/360x800-dark-protected-hardware.png)

## Checkpoint and review record

- [x] Confirmed exact authorization and reviewed current targets/source evidence.

- [x] Captured entry hashes/status/HEAD and ran fresh baseline suites before production edits.

- [x] Corrected ACC-D5-03 and only matching review/scenario representations.

- [x] Corrected ACC-D5-04 attribution/iteration and Thai typo while preserving diagram/case.

- [x] Verified content, Batch 1 preservation and unchanged regression outcomes.

- [x] Completed real Chrome matrix/navigation QA and inspected selected screenshots.

- [x] Reviewed scope and bilingual technical meaning; updated resumable checkpoints.

Final preservation command: `python -X utf8 artifacts/qa/reading-notes-phase-3a-domain-5-batch-2/verify-final.py`. Its fresh result is authoritative for final preservation claims; do not rerun older batch finalizers/checkers that overwrite historical evidence.

## Visual backlog and remaining limitations

No new production photograph, SVG, animation or interaction was created. The retained comparison table and six-activity IR diagram are sufficient for these corrections, so no new visual addition is justified. Existing visual enrichment proposals remain unchanged and unimplemented; the current report records the decision to reuse, rather than adding a duplicate sanitization flow or another IR lifecycle diagram.

The four historical failing suites remain outstanding. Source/version verification is limited to these bounded corrections; other unimplemented findings, legal/forensic assumptions and finer held crypto claims retain their earlier status. Mobile table scrolling remains an existing reader behavior. There is no unresolved correction-specific blocker; human acceptance is pending.

Next recommended batch: **ACC-D5-05 (ATT&CK terminology/IDs), only after separate explicit authorization**. It has not begun. No visual enrichment or other domain has begun.

## Independent workspace additions observed during final verification

The initial final scan found 22 new table-audit scripts and QA artifacts outside this batch; that independent audit continued adding screenshots during verification. Batch 2 commands did not create them; the relevant regression scripts do not write those paths. They are retained in place and separately inventoried with SHA-256 in rtifacts/qa/reading-notes-phase-3a-domain-5-batch-2/external-additions.json. All five authorized existing-path changes are still the only entry-file changes. This is a shared-workspace preservation qualification, not an additional implementation by this batch. The final verifier checks all unchanged entry files, records the current independent-addition snapshot and flags any unclassified path. Initial observations are retained in external-additions-initial.json; updates within the independent audit are disclosed rather than overwritten.

**Final Status: Phase 3A Domain 5 Batch 2 Implemented — Awaiting Human Acceptance**
