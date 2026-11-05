# Phase 3A — Domain 5 academic corrections

Date: 2026-11-04 (Asia/Bangkok). **ACC-D5-01 and ACC-D5-02 implemented and verified; awaiting human acceptance.** Only these two finding IDs were authorized. Phase 2 reviewer decisions remain a historical review record, not blanket authorization.

## Result and exact scope

Digital signatures now use scheme-independent Sign/Verify, trusted key association and qualified origin/non-repudiation evidence; signing is explicitly separate from confidentiality and a bare hash. TPM/HSM explanations distinguish platform trust from service-key operations, measured boot from UEFI enforcement, TPM implementation options, released BitLocker material, configured protected signing keys and policy-dependent wrapped export. Form, performance, validation and tamper response are module-specific.

Production files changed: `content/isc2-cc-2026/reading/domain-5.md` and `content/isc2-cc-2026/reading/domain-5-scenarios.js`. The JavaScript change is only the duplicated situation/reasoning of Reading scenario 04 and its stale comment. Scenario question, answer and other eleven scenarios are unchanged. No diagram, CSS, parser, navigation, persistence, slide, vocabulary, quiz or question-bank code/data changed.

The retained introductory hashing properties, file-hash example and password-storage text are byte-identical. Those contain separately held legacy claims; this batch does not certify them or implement LEG-D5-CRYPTO-DETAILS. The existing table is retained with the same three columns and five comparison rows. All subsection identifiers and diagram placements remain identical.

## Approved plan and execution rulings

The Phase 3A attachment explicitly authorized Phase 2 batch D5-A. The two decision records and exact target subsections were checked against the current content; line numbers were treated as entry references, not assumed coordinates. Previously read audit/review context was revisited at the exact records and the mandatory progress/handoff/implementation-plan files before editing.

- [x] Capture git status, HEAD, original files and SHA-256 entry inventory before production edits; run 12 existing regression suites.

- [x] Verify the claims independently against primary references and prepare minimal bilingual replacements.

- [x] Correct ACC-D5-01 in its existing unit and matching review cues; preserve hashing/password text.

- [x] Correct ACC-D5-02 in its existing unit/table and matching review/scenario representations.

- [x] Check exact changes, render integrity and unchanged regression outcomes.

- [x] Run all six required Chrome viewports in both themes; capture affected sections and mobile table edges.

- [x] Review scope/quality and prepare preservation evidence and append-only progress/handoff updates.

Ruling: work in the active checkout to preserve the ongoing uncommitted Phase 1/2 evidence. No branch, worktree, commit or push was needed. Ruling: the matching Reading scenario export is related data, not a license to modify unrelated JavaScript. Ruling: use existing tests and targeted rendered/preservation checks for educational copy; add no replacement-string tests. The initial QA scripts and report placeholder were created before the inventory; production and existing project documents were unchanged at capture. The inventory excludes this new QA directory but includes the initial report placeholder.

## Academic verification

Confirmed corrections are the generic private-encryption/public-decryption recipe; unconditional sender/non-repudiation conclusions; discrete-soldered-only TPM definition; boot measurement/enforcement conflation; all-BitLocker-keys-stay-outside-OS claim; fixed HSM throughput, certification, form and immediate tamper-response assertions. A short signing request example uses a **configured non-exportable key**, while acknowledging module-policy backup/export. This does not make all export safe or all HSM operations authorized.

The enterprise CA/payment use case and TPM/BitLocker example remain useful. Scenario 04 now states a FIPS 140-3 requirement as a condition of this hypothetical selection, not a property of every HSM. The prose/table/cues use generic FIPS 140 certificate checks to avoid unnecessary level memorization.

### FIPS186 — NIST FIPS 186-5

[NIST FIPS 186-5](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-5.pdf); 3.1–3.3; printed pp.11–15. Verified 2026-11-04. Private-key generation and public-key verification are distinct processes; accepting origin evidence requires identity/key assurances. Hash processing depends on the signature algorithm. No RSA-specific encryption recipe or human-intent guarantee is appropriate.

### TPM — Microsoft TPM recommendations

[Microsoft TPM recommendations](https://learn.microsoft.com/en-us/windows/security/hardware-security/tpm/tpm-recommendations); TPM design and implementation; Discrete, Integrated, or Firmware TPM?. Verified 2026-11-04. TPM implementations include discrete, integrated and firmware designs; security properties and platform integration vary.

### BOOT — Microsoft secure Windows boot process

[Microsoft secure Windows boot process](https://learn.microsoft.com/en-us/windows/security/operating-system-security/system-security/secure-the-windows-10-boot-process); Secure Boot; Measured Boot. Verified 2026-11-04. Boot-signature policy is enforced by firmware; measurements are recorded using the TPM and may support attestation. Recording is not itself the same operation as enforcing boot acceptance.

### BITLOCKER — Microsoft BitLocker FAQ

[Microsoft BitLocker FAQ](https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/faq); Can I use BitLocker on an operating system drive without a TPM?. Verified 2026-11-04. The volume master key may be released by the TPM. A platform key protected within the TPM must not be confused with every drive-decryption key remaining forever outside OS memory.

### HSM — YubiHSM 2 product overview

[YubiHSM 2 product overview](https://docs.yubico.com/hardware/yubihsm-2/hsm-2-user-guide/hsm2-intro-overview.html); Overview; Key backup and transfer; FIPS Validation; FIPS Mode. Verified 2026-11-04. USB is a documented form factor; protected backup/transfer exists; certification and approved mode apply to named versions, not every HSM. Performance is a device/workload property, not a category constant.

### CMVP — NIST CMVP certificate 5302

[NIST CMVP certificate 5302](https://csrc.nist.gov/projects/cryptographic-module-validation-program/certificate/5302); Module name, standard, level, caveat and Security Policy. Verified 2026-11-04. The actual certificate names a module and approved configuration. This is an evidence example, not a product recommendation or a claim every HSM has that level.

### FIPS140 — NIST FIPS 140-3

[NIST FIPS 140-3](https://csrc.nist.gov/pubs/fips/140-3/final); Abstract: four qualitative security levels and covered areas. Verified 2026-11-04. Security requirements cover several areas and levels; physical/tamper and key-management properties require the selected module policy. Do not promise instant zeroization for every HSM.

### CC — ISC2 CC exam outline

[ISC2 CC exam outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline); Effective 1 September 2026; Domain 5 / 5.1 data security. Verified 2026-11-04. Use as a scope reference. Hardware/signature details here explain the existing beginner concepts, not mandatory algorithm mathematics or certified-module procurement knowledge.

## Exact original and corrected Thai-English wording

Every changed span is listed below with entry and final line references. Full originals are retained as `before-domain-5.md` and `before-domain-5-scenarios.js`; structured pairs are in `exact-changes.json`. Slashes separate matching Thai and English meaning, following the existing compact bilingual style.

### ACC-D5-01 — `content/isc2-cc-2026/reading/domain-5.md`; entry line 303 → final line 303

**Original:**

```text
กลไกที่ผสานการทำงานของ **Hashing** และ **Asymmetric Encryption** เข้าด้วยกัน เพื่อให้ได้คุณสมบัติความมั่นคงปลอดภัย 3 ประการ:
1. **Integrity (ความสมบูรณ์):** ข้อมูลไม่ถูกดัดแปลง
2. **Authentication (การยืนยันตัวตน):** ยืนยันว่าผู้ส่งเป็นตัวจริง
3. **Non-repudiation (การปฏิเสธความรับผิดชอบไม่ได้):** ผู้ส่งไม่สามารถอ้างได้ว่าตนไม่ได้เป็นผู้ส่งข้อความ
```

**Corrected:**

```text
กลไก **Public-key Cryptography (วิทยาการเข้ารหัสลับแบบกุญแจสาธารณะ)** ที่ใช้กุญแจส่วนตัวสร้างลายมือชื่อ และกุญแจสาธารณะที่สัมพันธ์กันตรวจสอบ โดยการแฮชเป็นส่วนหนึ่งของการประมวลผลข้อความตามอัลกอริทึมลายมือชื่อที่ใช้ ไม่ใช่การเข้ารหัสเพื่อซ่อนข้อความ / Digital signatures use private-key signing and corresponding public-key verification, with hashing handled as specified by the signature algorithm:
1. **Integrity (ความสมบูรณ์):** ตรวจว่าข้อมูลที่ลงนามถูกเปลี่ยนแปลงหรือไม่ / Detect changes to the signed data.
2. **Origin Authentication (การยืนยันแหล่งที่มา):** เชื่อมลายมือชื่อกับผู้ลงนามได้เมื่อเชื่อถือความสัมพันธ์ระหว่างตัวตนกับ Public Key / Authenticate the origin using a trusted identity-to-public-key association.
3. **Non-repudiation (การไม่อาจปฏิเสธความรับผิดชอบได้):** สนับสนุนหลักฐานของการลงนาม โดยต้องพิจารณาการควบคุม Private Key และหลักฐานประกอบ ไม่ใช่การรับประกันเจตนาของบุคคล / Support evidence of signing, subject to key custody and supporting evidence; a valid signature alone does not prove human intent.
```

### ACC-D5-01 — `content/isc2-cc-2026/reading/domain-5.md`; entry line 309 → final line 309

**Original:**

```text
- **ผู้ส่ง (Sender):** นำเอกสารไปคำนวณค่าแฮช &rarr; นำค่าแฮชไปเข้ารหัสด้วย **Private Key ของผู้ส่งเอง** ได้ผลลัพธ์เป็น "ลายมือชื่อดิจิทัล" &rarr; แนบลายมือชื่อไปพร้อมกับเอกสาร
- **ผู้รับ (Recipient):** นำลายมือชื่อดิจิทัลไปถอดรหัสด้วย **Public Key ของผู้ส่ง** จะได้ค่าแฮชเดิม &rarr; คำนวณค่าแฮชของเอกสารที่ได้รับมาเทียบเคียง &rarr; หากค่าแฮชตรงกัน แสดงว่าเอกสารมาจากผู้ส่งจริงและไม่ถูกดัดแปลงแก้ไข
```

**Corrected:**

```text
- **ผู้ลงนาม (Signer):** ใช้อัลกอริทึม **Sign** กับ Private Key และเอกสาร &rarr; ได้ลายมือชื่อดิจิทัลแนบกับเอกสาร / Use the private key to sign the document and attach the resulting signature.
- **ผู้ตรวจ (Verifier):** ใช้อัลกอริทึม **Verify** กับเอกสาร ลายมือชื่อ และ Public Key ที่สัมพันธ์กันและเชื่อถือได้ &rarr; ได้ผลผ่านหรือไม่ผ่าน / Verify the document and signature using the corresponding trusted public key; the result is valid or invalid. การตรวจนี้ไม่ใช่การถอดรหัสลายมือชื่อเพื่ออ่านค่าแฮชเป็นสูตรทั่วไป / Verification is not universally public-key decryption of a digest.

**แยกหน้าที่ให้ชัด (Different purposes):** Hash ใช้ตรวจเทียบข้อมูล แต่ค่าแฮชเปล่า ๆ ไม่ยืนยันผู้ส่ง; Signature เพิ่มหลักฐานแหล่งที่มา; Encryption คุ้มครองความลับ การลงนามเพียงอย่างเดียวไม่ซ่อนเอกสาร / A bare hash does not authenticate a sender. A signature adds origin evidence; encryption protects confidentiality. Signing alone does not hide the document.

**ตัวอย่าง (Example):** ผู้ผลิตลงนามไฟล์อัปเดต ผู้รับตรวจไฟล์และลายมือชื่อด้วย Public Key ของผู้ผลิตที่ตรวจสอบแหล่งที่มาแล้ว ผลผ่านสนับสนุนความสมบูรณ์และแหล่งที่มา แต่ไม่ได้รับประกันว่าโปรแกรมปราศจากมัลแวร์ / A publisher signs an update. Verification with its trusted public key supports integrity and origin, but does not establish that the software is harmless.
```

### ACC-D5-02 — `content/isc2-cc-2026/reading/domain-5.md`; entry line 320 → final line 324

**Original:**

```text
การเก็บกุญแจเข้ารหัสลับไว้บนซอฟต์แวร์หรือในระบบปฏิบัติการมีความเสี่ยงที่จะถูกมัลแวร์ขโมย องค์กรจึงใช้ฮาร์ดแวร์ความปลอดภัยเฉพาะทางในการปกป้องกุญแจ:
```

**Corrected:**

```text
การเก็บกุญแจเข้ารหัสลับไว้บนซอฟต์แวร์หรือในระบบปฏิบัติการมีความเสี่ยงที่จะถูกมัลแวร์ขโมย องค์กรจึงใช้เขตป้องกันที่มีฮาร์ดแวร์รองรับสำหรับกุญแจสำคัญ โดยยังต้องควบคุมสิทธิ์และการตั้งค่า / Hardware-backed boundaries help protect keys; they still require access control and correct configuration.
```

### ACC-D5-02 — `content/isc2-cc-2026/reading/domain-5.md`; entry line 325 → final line 329

**Original:**

```text
ไมโครชิปความปลอดภัยเฉพาะทางที่ถูกบัดกรีติดอยู่บนเมนบอร์ดของคอมพิวเตอร์หรืออุปกรณ์ปลายทาง:
- ทำหน้าที่เป็น **Hardware Root of Trust (รากฐานความน่าเชื่อถือระดับฮาร์ดแวร์)** ของคอมพิวเตอร์แต่ละเครื่อง
- สนับสนุนฟีเจอร์ **Measured Boot และ Secure Boot** โดยวัดค่าแฮชของเฟิร์มแวร์ UEFI, บูตโหลดเดอร์, และเคอร์เนลระบบปฏิบัติการก่อนอนุญาตให้เปิดเครื่อง เพื่อป้องกันไม่ให้ Rootkit หรือมัลแวร์บูตแทรกแซงระบบ
- จัดเก็บกุญแจเข้ารหัสลับของเครื่องเฉพาะ เช่น กุญแจ BitLocker โดยกุญแจจะไม่หลุดออกไปยังระบบปฏิบัติการ
```

**Corrected:**

```text
โมดูลความเชื่อถือสำหรับแพลตฟอร์ม อาจเป็นชิปแยก (Discrete), รวมในชิปอื่น (Integrated) หรือทำงานในเฟิร์มแวร์ภายในสภาพแวดล้อมประมวลผลที่เชื่อถือได้ (Firmware TPM) ไม่จำเป็นต้องเป็นชิปที่บัดกรีแยกเสมอ / A TPM may be discrete, integrated or firmware-based within a trusted execution environment.
- ทำหน้าที่สนับสนุน **Hardware Root of Trust (รากฐานความน่าเชื่อถือระดับฮาร์ดแวร์)** ของแพลตฟอร์ม / Support a platform hardware root of trust.
- **Measured Boot:** ซอฟต์แวร์บูตวัดส่วนประกอบและบันทึกค่าลง TPM เพื่อเป็นหลักฐานสภาพแพลตฟอร์ม ส่วน **Secure Boot** ใช้เฟิร์มแวร์ UEFI ตรวจลายมือชื่อและนโยบายก่อนโหลดส่วนประกอบบูต ไม่ใช่ TPM รับประกันว่าบูตแล้วไม่มีมัลแวร์ / Measured Boot records boot measurements in the TPM; Secure Boot enforces boot-signature policy through UEFI firmware. Neither is a guarantee of malware-free operation.
- สร้างและใช้กุญแจที่ป้องกันโดย TPM และช่วยปกป้องข้อมูลกุญแจของ BitLocker ได้ แต่กุญแจที่ระบบใช้ถอดรหัสไดรฟ์อาจถูกปล่อยให้ระบบปฏิบัติการใช้เมื่อผ่านเงื่อนไข / A TPM can generate and use protected keys and help protect BitLocker key material; drive-decryption key material can be released to the operating system when the configured conditions are met.
```

### ACC-D5-02 — `content/isc2-cc-2026/reading/domain-5.md`; entry line 335 → final line 339

**Original:**

```text
อุปกรณ์ฮาร์ดแวร์ความปลอดภัยระดับองค์กร (Enterprise Appliance) อาจเป็นการ์ด PCIe ภายในเซิร์ฟเวอร์ หรือเป็นตู้ฮาร์ดแวร์ภายนอกที่เชื่อมต่อผ่านระบบเครือข่าย:
- ออกแบบมาเพื่อสร้าง ปกป้อง และบริหารวงจรกุญแจเข้ารหัสลับระดับองค์กร (Root Certificate Authority Keys, กุญแจธุรกรรมทางการเงิน, กุญแจเซิร์ฟเวอร์คลาวด์)
- มีประสิทธิภาพในการประมวลผลทางคณิตศาสตร์สูงมาก รองรับการถอดรหัสและเซ็นลายมือชื่อดิจิทัลพร้อมกันนับหมื่นรายการต่อวินาที
- ผ่านการรับรองความปลอดภัยระดับสูงตามมาตรฐาน **FIPS 140-2 Level 3 หรือ Level 4**
- มีคุณสมบัติต่อต้านการงัดแงะทางกายภาพ (Tamper-Resistant & Tamper-Evident) หากตรวจพบการพยายามเปิดฝาเครื่องหรือเจาะทะลุ อุปกรณ์จะทำลายกุญแจทิ้งทันที (Zeroization) เพื่อป้องกันข้อมูลรั่วไหล
```

**Corrected:**

```text
โมดูลฮาร์ดแวร์สำหรับปกป้องกุญแจและทำงานด้านวิทยาการเข้ารหัสลับ มีได้หลายรูปแบบ เช่น การ์ด PCIe อุปกรณ์เครือข่าย หรือ USB / An HSM protects keys and performs cryptographic operations; form factors include PCIe, network appliances and USB devices.
- สร้าง ปกป้อง ใช้งาน และบริหารวงจรกุญแจ เช่น Root Certificate Authority Keys กุญแจธุรกรรมทางการเงิน และกุญแจเซิร์ฟเวอร์คลาวด์ / Generate, protect, use and manage keys, for example CA, payment and cloud-service keys.
- แอปที่ได้รับอนุญาตอาจขอให้ HSM ลงนามภายในเขตป้องกันด้วย Private Key ที่กำหนดไม่ให้ส่งออก แล้วรับเฉพาะลายมือชื่อกลับมา ส่วนการสำรองหรือส่งออกกุญแจแบบห่อหุ้ม (Wrapped Export) ขึ้นกับโมดูลและนโยบาย / An authorized application can request signing with a configured non-exportable private key and receive the signature. Protected backup or wrapped export depends on the module and policy.
- อัลกอริทึมที่รองรับและอัตราประมวลผลขึ้นกับรุ่น งาน และการตั้งค่า ไม่มีอัตรารายการต่อวินาทีที่ใช้แทน HSM ทุกตัวได้ / Supported algorithms and throughput depend on the model, workload and configuration.
- การรับรอง **FIPS 140** ต้องตรวจใบรับรองของโมดูล รุ่นฮาร์ดแวร์/เฟิร์มแวร์ และโหมดที่ใช้ ไม่ใช่ HSM ทุกตัวผ่าน Level 3/4 / Check the specific module certificate, hardware/firmware versions and operating mode; HSM does not inherently mean Level 3/4 validation.
- การป้องกันและตอบสนองต่อการงัดแงะ รวมถึง **Zeroization (การล้างข้อมูลกุญแจ)** ขึ้นกับการออกแบบและเงื่อนไขของรุ่น ไม่ใช่อุปกรณ์ทุกตัวตรวจพบแล้วทำลายกุญแจทันที / Tamper protection and responses, including zeroization, are design- and condition-dependent, not a universal instant response.
```

### ACC-D5-02 — `content/isc2-cc-2026/reading/domain-5.md`; entry line 347 → final line 352

**Original:**

```text
| **ตำแหน่งติดตั้ง** | ชิปบนเมนบอร์ดคอมพิวเตอร์ปลายทาง (PC/Laptop) | อุปกรณ์ฮาร์ดแวร์แยกต่างหากในศูนย์ข้อมูล / เครือข่าย |
| **ขอบเขตการใช้งาน** | ประจำเครื่องคอมพิวเตอร์เครื่องเดียว | ให้บริการส่วนกลางแก่องค์กรหรือเซิร์ฟเวอร์ทั้งระบบ |
| **หน้าที่หลัก** | Platform Integrity, Secure Boot, BitLocker Keys | จัดการวงจรกุญแจ, Root CA, ทำธุรกรรมทางการเงิน |
| **มาตรฐานความปลอดภัย** | ISO/IEC 11889 | **FIPS 140-2 / FIPS 140-3 (Level 3/4)** |
| **การป้องกันการงัดแงะ** | พื้นฐานในตัวชิป | มีเซนเซอร์ตรวจจับและทำลายกุญแจอัตโนมัติ (Zeroization) |
```

**Corrected:**

```text
| **รูปแบบ (Form)** | Discrete / Integrated / Firmware TPM | PCIe / Network / USB เป็นตัวอย่าง (examples) |
| **ขอบเขตทั่วไป (Typical scope)** | ความเชื่อถือและกุญแจของแพลตฟอร์ม (Platform trust and keys) | งานกุญแจ/คริปโตของแอปหรือบริการ (Application/service key operations) |
| **งานตัวอย่าง (Example use)** | Measured Boot, ปกป้องกุญแจ BitLocker (key protection) | จัดการกุญแจ (key management), Root CA, ธุรกรรมการเงิน (payments) |
| **มาตรฐาน (Standards)** | ข้อกำหนด TPM: ISO/IEC 11889 (TPM specification) | ตรวจ FIPS 140 certificate ของโมดูลและโหมด (module/mode); ไม่ใช่ทุกตัวได้รับการรับรอง (not all are validated) |
| **การป้องกัน (Protection)** | ขึ้นกับวิธีติดตั้งและแพลตฟอร์ม (Implementation/platform dependent) | การป้องกันการงัดแงะและ Zeroization ขึ้นกับรุ่น (Model-dependent tamper protection/zeroization) |

**เลือกตามหน้าที่ (Choose by purpose):** TPM เน้นความเชื่อถือของแพลตฟอร์ม ส่วน HSM เน้นงานกุญแจของแอป/บริการ จึงใช้แทนกันโดยอัตโนมัติไม่ได้ และฮาร์ดแวร์ไม่ได้รับประกันความปลอดภัยสมบูรณ์ / TPMs focus on platform trust; HSMs focus on application/service key operations. They are not automatically interchangeable, and hardware protection is not absolute security.
```

### ACC-D5-02 — `content/isc2-cc-2026/reading/domain-5.md`; entry line 1278 → final line 1285

**Original:**

```text
- **3. TPM vs. HSM:** TPM เป็นชิปบนเมนบอร์ดดูแลเครื่องเฉพาะตัว (Measured Boot / BitLocker); HSM เป็นอุปกรณ์แยกต่างหากระดับองค์กรรองรับ FIPS 140-2 Level 3/4 สำหรับกุญแจสำคัญระดับศูนย์ข้อมูล
```

**Corrected:**

```text
- **3. TPM vs. HSM:** TPM สนับสนุนความเชื่อถือของแพลตฟอร์ม (Measured Boot / BitLocker) มีได้ทั้ง Discrete, Integrated และ Firmware; HSM ปกป้องและใช้งานกุญแจของแอป/บริการ รูปแบบ การรับรอง และการป้องกันขึ้นกับโมดูล / TPM: platform trust; HSM: application/service key operations, with module-specific capabilities and validation.
```

### ACC-D5-01 — `content/isc2-cc-2026/reading/domain-5.md`; entry line 1298 → final line 1305

**Original:**

```text
- ถ้าข้อสอบถามถึงองค์ประกอบของลายมือชื่อดิจิทัล คำตอบคือ นำแฮชของข้อความไปเข้ารหัสด้วย Private Key ของผู้ส่ง
```

**Corrected:**

```text
- ลายมือชื่อดิจิทัลใช้ Private Key ลงนาม และใช้ Public Key ที่สัมพันธ์กันและเชื่อถือได้ตรวจเอกสารกับลายมือชื่อ ไม่ใช่สูตรทั่วไปว่าเข้ารหัสแฮชแล้วถอดรหัสด้วย Public Key / Sign with the private key; verify the document and signature with the corresponding trusted public key. Signing alone provides no confidentiality.
```

### ACC-D5-02 — `content/isc2-cc-2026/reading/domain-5.md`; entry line 1336 → final line 1343

**Original:**

```text
situation: ศูนย์ข้อมูลของสถาบันการเงินต้องการติดตั้งระบบสร้าง จัดเก็บ และบริหารจัดการวงจรกุญแจเข้ารหัสระดับองค์กร (Root CA Keys และ Financial Transaction Keys) ที่รองรับการประมวลผลคำขอถอดรหัสปริมาณมหาศาล และมีระบบป้องกันการงัดแงะทางกายภาพระดับสูงตามมาตรฐาน FIPS 140-2 Level 3/4
```

**Corrected:**

```text
situation: ศูนย์ข้อมูลของสถาบันการเงินต้องการระบบสร้าง ปกป้อง และบริหาร Root CA Keys และ Financial Transaction Keys สำหรับบริการหลายระบบ โดยต้องเลือกรุ่นที่รองรับภาระงานและมีใบรับรอง FIPS 140-3 ตรงตามข้อกำหนดของกรณีนี้ / A financial institution needs shared CA/payment-key operations and must select a module whose capacity and FIPS 140-3 validation meet this case's requirements.
```

### ACC-D5-02 — `content/isc2-cc-2026/reading/domain-5.md`; entry line 1339 → final line 1346

**Original:**

```text
reasoning: HSM คืออุปกรณ์ฮาร์ดแวร์ภายนอกหรือระบบเครือข่ายสำหรับองค์กรขนาดใหญ่ ออกแบบมาเฉพาะเพื่อสร้าง ปกป้อง และบริหารกุญแจเข้ารหัสลับขั้นสูงสุด มีคุณสมบัติต่อต้านการงัดแงะ (Tamper-resistant) ต่างจาก TPM ซึ่งเป็นชิปฝังอยู่บนเมนบอร์ดของคอมพิวเตอร์เฉพาะเครื่องเพื่อดูแลความสมบูรณ์ของระบบ (Platform Integrity) และบูตระบบปลอดภัย (Secure Boot)
```

**Corrected:**

```text
reasoning: HSM เหมาะกับงานกุญแจของบริการในกรณีนี้ แต่ต้องตรวจความสามารถและใบรับรองของโมดูลที่เลือก ส่วน TPM เน้นความเชื่อถือและกุญแจของแพลตฟอร์ม ไม่ได้จำกัดเฉพาะชิปแยกบนเมนบอร์ด / An HSM fits this service-key use case; verify the selected module's capabilities and certificate. A TPM focuses on platform trust and keys and need not be a discrete motherboard chip.
```

### ACC-D5-01 — `content/isc2-cc-2026/reading/domain-5.md`; entry line 1497 → final line 1504

**Original:**

```text
- **Digital Signature:** ยืนยันความสมบูรณ์และตัวตนผู้ส่ง (Integrity + Authenticity + Non-repudiation)
```

**Corrected:**

```text
- **Digital Signature:** ตรวจความสมบูรณ์และสนับสนุนหลักฐานแหล่งที่มาเมื่อเชื่อถือ Public Key และการควบคุม Private Key ไม่คุ้มครองความลับ / Integrity and origin evidence depend on trusted key association and custody; no confidentiality.
```

### ACC-D5-02 — `content/isc2-cc-2026/reading/domain-5-scenarios.js`; entry line 8 → final line 8

**Original:**

```text
 * - 04: Platform Root of Trust vs. Enterprise Appliance (Motherboard TPM vs. Dedicated HSM)
```

**Corrected:**

```text
 * - 04: Platform trust vs. service-key operations (TPM vs. selected HSM)
```

### ACC-D5-02 — `content/isc2-cc-2026/reading/domain-5-scenarios.js`; entry line 47 → final line 47

**Original:**

```text
    situation: 'ศูนย์ข้อมูลของสถาบันการเงินต้องการติดตั้งระบบสร้าง จัดเก็บ และบริหารจัดการวงจรกุญแจเข้ารหัสระดับองค์กร (Root CA Keys และ Financial Transaction Keys) ที่รองรับการประมวลผลคำขอถอดรหัสปริมาณมหาศาล และมีระบบป้องกันการงัดแงะทางกายภาพระดับสูงตามมาตรฐาน FIPS 140-2 Level 3/4',
```

**Corrected:**

```text
    situation: "ศูนย์ข้อมูลของสถาบันการเงินต้องการระบบสร้าง ปกป้อง และบริหาร Root CA Keys และ Financial Transaction Keys สำหรับบริการหลายระบบ โดยต้องเลือกรุ่นที่รองรับภาระงานและมีใบรับรอง FIPS 140-3 ตรงตามข้อกำหนดของกรณีนี้ / A financial institution needs shared CA/payment-key operations and must select a module whose capacity and FIPS 140-3 validation meet this case's requirements.",
```

### ACC-D5-02 — `content/isc2-cc-2026/reading/domain-5-scenarios.js`; entry line 50 → final line 50

**Original:**

```text
    reasoning: 'HSM คืออุปกรณ์ฮาร์ดแวร์ภายนอกหรือระบบเครือข่ายสำหรับองค์กรขนาดใหญ่ ออกแบบมาเฉพาะเพื่อสร้าง ปกป้อง และบริหารกุญแจเข้ารหัสลับขั้นสูงสุด มีคุณสมบัติต่อต้านการงัดแงะ (Tamper-resistant) ต่างจาก TPM ซึ่งเป็นชิปฝังอยู่บนเมนบอร์ดของคอมพิวเตอร์เฉพาะเครื่องเพื่อดูแลความสมบูรณ์ของระบบ (Platform Integrity) และบูตระบบปลอดภัย (Secure Boot)'
```

**Corrected:**

```text
    reasoning: 'HSM เหมาะกับงานกุญแจของบริการในกรณีนี้ แต่ต้องตรวจความสามารถและใบรับรองของโมดูลที่เลือก ส่วน TPM เน้นความเชื่อถือและกุญแจของแพลตฟอร์ม ไม่ได้จำกัดเฉพาะชิปแยกบนเมนบอร์ด / An HSM fits this service-key use case; verify the selected module\'s capabilities and certificate. A TPM focuses on platform trust and keys and need not be a discrete motherboard chip.'
```

## Content integrity and preservation

`content-integrity.json`: 10/10 checks passed. Explicit anchor sequence, all diagram placements, table counts and section-wrapper counts are unchanged. Existing hash/password content and all non-HSM scenarios are identical; scenario 04 Markdown/export fields match. Updated units render without escaped/leaked Markdown delimiters. `final-verification.json` records fresh whole-workspace preservation and exact allowed edit ranges.

## Regression results and pre-existing failures

There is no root package.json/unified npm test command. Twelve existing relevant Reading suites ran unchanged before and after production edits. Both runs: **8 suites pass; the same 4 suites fail**. No test was edited. Raw output is saved per suite for each run; `baseline-regression.json`, `after-regression.json` and `regression-comparison.json` distinguish results.

- `verify-reading-notes-domain1`: entry exit 1; after exit 1.

- `verify-reading-notes-domain2`: entry exit 0; after exit 0.

- `verify-reading-notes-domain3`: entry exit 0; after exit 0.

- `verify-reading-notes-domain4`: entry exit 0; after exit 0.

- `verify-reading-notes-domain5`: entry exit 0; after exit 0.

- `verify-reading-notes-dom-integrity`: entry exit 0; after exit 0.

- `verify-reading-persistence`: entry exit 0; after exit 0.

- `verify-reading-navigation`: entry exit 0; after exit 0.

- `verify-reading-diagram-semantics`: entry exit 1; after exit 1.

- `verify-reading-notes-rendering-quality`: entry exit 0; after exit 0.

- `verify-reading-cross-domain-structure`: entry exit 1; after exit 1.

- `verify-domain5-integration`: entry exit 1; after exit 1.

Pre-existing failures: Domain 1 preservation expects 119 updated questions but the current bank has 157; diagram-semantics has seven failed tests against earlier diagram expectations; cross-domain-structure has 20 failed tests against prior content/structure snapshots; Domain 5 integration stops on its obsolete protected Domain 1 hash before reaching later checks. Full failed-test names/messages remain in the raw logs and comparison JSON. These are not claimed as green or repaired in this scope.

## Chrome rendering and navigation QA

Actual executable: `C:\Program Files\Google\Chrome\Application\chrome.exe`; browser: **Chrome/156.0.8078.80**. Headless Chrome CDP with an isolated temporary profile, not a DOM-only browser substitute. All 12 configurations pass: 1920×1080, 1440×900, 1366×768, 768×1024, 390×844 and 360×800, each light/dark. Zero page-level horizontal overflow, zero clipped prose checks, all four existing diagrams visible in the appropriate presentation, 12 scenarios and intact three-column hardware table. No runtime exceptions or console errors.

At 390/360px the existing table scroll container intentionally scrolls horizontally. Both edges were checked, including full HSM-column reachability, and captured. This is contained table scrolling, not a claim that all columns fit simultaneously on a phone. Direct cold navigation, reload/resume and actual sidebar Domain 4→Domain 5/topic return passed for both affected anchors. Selected native screenshots were visually inspected for Thai glyphs, English wrapping, theme contrast, table and paragraph presentation; automatic metrics cover the full matrix.

The first sandbox Chrome launch failed in its crash-handler named pipe; the same isolated QA ran successfully outside the sandbox. An initial navigation diagnostic reached both anchors/reloads but its cross-domain full-hash probe failed; it is retained in `browser-qa-initial-navigation-diagnostic.json`. The final run explicitly exercises sidebar navigation and cold direct links. No production router changes were made, and no claim is made that the initial probe establishes a product defect.

### Screenshot evidence

- **1920x1080-light**: [1920x1080-light-signature.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/1920x1080-light-signature.png); [1920x1080-light-hardware.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/1920x1080-light-hardware.png); [1920x1080-light-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/1920x1080-light-table.png)

- **1920x1080-dark**: [1920x1080-dark-signature.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/1920x1080-dark-signature.png); [1920x1080-dark-hardware.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/1920x1080-dark-hardware.png); [1920x1080-dark-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/1920x1080-dark-table.png)

- **1440x900-light**: [1440x900-light-signature.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/1440x900-light-signature.png); [1440x900-light-hardware.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/1440x900-light-hardware.png); [1440x900-light-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/1440x900-light-table.png)

- **1440x900-dark**: [1440x900-dark-signature.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/1440x900-dark-signature.png); [1440x900-dark-hardware.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/1440x900-dark-hardware.png); [1440x900-dark-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/1440x900-dark-table.png)

- **1366x768-light**: [1366x768-light-signature.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/1366x768-light-signature.png); [1366x768-light-hardware.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/1366x768-light-hardware.png); [1366x768-light-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/1366x768-light-table.png)

- **1366x768-dark**: [1366x768-dark-signature.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/1366x768-dark-signature.png); [1366x768-dark-hardware.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/1366x768-dark-hardware.png); [1366x768-dark-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/1366x768-dark-table.png)

- **768x1024-light**: [768x1024-light-signature.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/768x1024-light-signature.png); [768x1024-light-hardware.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/768x1024-light-hardware.png); [768x1024-light-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/768x1024-light-table.png)

- **768x1024-dark**: [768x1024-dark-signature.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/768x1024-dark-signature.png); [768x1024-dark-hardware.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/768x1024-dark-hardware.png); [768x1024-dark-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/768x1024-dark-table.png)

- **390x844-light**: [390x844-light-signature.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/390x844-light-signature.png); [390x844-light-hardware.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/390x844-light-hardware.png); [390x844-light-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/390x844-light-table.png); [390x844-light-table-right.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/390x844-light-table-right.png)

- **390x844-dark**: [390x844-dark-signature.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/390x844-dark-signature.png); [390x844-dark-hardware.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/390x844-dark-hardware.png); [390x844-dark-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/390x844-dark-table.png); [390x844-dark-table-right.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/390x844-dark-table-right.png)

- **360x800-light**: [360x800-light-signature.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/360x800-light-signature.png); [360x800-light-hardware.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/360x800-light-hardware.png); [360x800-light-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/360x800-light-table.png); [360x800-light-table-right.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/360x800-light-table-right.png)

- **360x800-dark**: [360x800-dark-signature.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/360x800-dark-signature.png); [360x800-dark-hardware.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/360x800-dark-hardware.png); [360x800-dark-table.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/360x800-dark-table.png); [360x800-dark-table-right.png](../../../artifacts/qa/reading-notes-phase-3a-domain-5/screenshots/360x800-dark-table-right.png)

## Deferred visual opportunities

VIS-02 application→authorized signing request→configured HSM/private-key boundary→signature response remains a separate proposed static visual. IMG-HSM-PAIR (network/USB recognition) remains HOLD until exact image permissions/attribution are cleared. No new photo, AI image, SVG or animation was acquired or integrated. An extra HSM/TPM comparison visual should demonstrate a relationship the retained table does not; do not duplicate the table.

## Remaining issues and handoff

No unresolved blocker to these two bounded text corrections. The four pre-existing regression-suite failures remain visible. Other held crypto details, source-image permissions, all other academic/enrichment findings and media remain unimplemented. Human acceptance of this batch is pending.

Recommended next batch, **only after separate authorization**: D5-B, ACC-D5-03 (sanitization) and ACC-D5-04 (incident-response attribution). Stop here; no Phase 3B or other domain has begun.

**Final Status: Phase 3A Domain 5 Academic Corrections Implemented — Awaiting Human Acceptance**
