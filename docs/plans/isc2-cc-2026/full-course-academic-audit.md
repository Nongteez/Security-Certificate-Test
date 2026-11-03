# Full-course academic and content audit

**IN PROGRESS — 107/316 slides substantively reviewed; 209 pending. These are checkpoint reports, not final course approval.**

2026-11-03. Existing inventory retained. Production content unchanged. Static reading of authored content and source code only; no browser, screenshots, UI or interaction QA. A reviewed status means substantive agent review of paired Presentation, Reading and expanded Info educational content, including shared explanations. It does not claim human acceptance or full-course coverage. English UI chrome follows existing policy.

|Domain|Reviewed|Pending|
|---|---:|---:|
|1|102|1|
|2|5|50|
|3|0|42|
|4|0|57|
|5|0|59|

Findings so far: 0 CRITICAL / 0 HIGH / 8 MEDIUM / 9 LOW. Pending slides may contain issues of any severity.

## FC-001 — LOW

lesson-d1-02-aaa-mfa / slide-05-factor-families / `blocks.2.text` in `content/isc2-cc-2026/learning/published/lessons/lesson-d1-02-aaa-mfa.json`.

Current EN: A knowledge factor uses a secret the claimant knows, such as a password or PIN. A possession factor demonstrates control of an authenticator, such as a registered hardware security key; simply carrying an unrelated object is not authentication evidence. An inherence factor uses a biometric characteristic such as a fingerprint. For NIST digital authentication, a biometric is not a standalone authenticator: it is used with a physical authenticator, for example to activate a security key. That combines possession with inherence. Possession can be compromised without physically stealing a device, and biometrics are neither unforgeable nor a guarantee of correct identification. Factor choice reduces particular risks; it does not remove all risk.

Current TH: Knowledge factor ใช้ความลับที่ผู้ร้องขอรู้ เช่น รหัสผ่านหรือ PIN ส่วน Possession factor แสดงการควบคุมเครื่องมือยืนยันตัวตน เช่น Hardware security key ที่ลงทะเบียนไว้ การพกสิ่งของที่ไม่เกี่ยวข้องไม่ใช่หลักฐานยืนยันตัวตน Inherence factor ใช้ลักษณะทางชีวมิติ เช่น ลายนิ้วมือ สำหรับการยืนยันตัวตนดิจิทัลตาม NIST ชีวมิติไม่ใช่เครื่องมือยืนยันตัวตนที่ใช้เดี่ยว ๆ แต่ใช้ร่วมกับเครื่องมือทางกายภาพ เช่น ใช้ลายนิ้วมือเปิดใช้งาน Security key จึงรวม Possession กับ Inherence เข้าด้วยกัน ปัจจัยสิ่งที่มีอาจถูกโจมตีได้โดยไม่ต้องขโมยอุปกรณ์จริง และชีวมิติไม่ได้ปลอมแปลงไม่ได้หรือรับประกันการระบุตัวตนถูกต้องเสมอ การเลือกปัจจัยช่วยลดความเสี่ยงบางแบบ ไม่ได้ขจัดความเสี่ยงทั้งหมด

Problem and learner impact: Thai uses an awkward double negative for forgeability. Meaning can be recovered but learners must parse two negatives.

Evidence: https://pages.nist.gov/800-63-4/sp800-63b.html §§2, 3.2.3

Proposed EN: A knowledge factor uses a secret the claimant knows, such as a password or PIN. A possession factor demonstrates control of an authenticator, such as a registered hardware security key; simply carrying an unrelated object is not authentication evidence. An inherence factor uses a biometric characteristic such as a fingerprint. For NIST digital authentication, a biometric is not a standalone authenticator: it is used with a physical authenticator, for example to activate a security key. That combines possession with inherence. Possession can be compromised without physically stealing a device, and biometrics are neither unforgeable nor a guarantee of correct identification. Factor choice reduces particular risks; it does not remove all risk.

Proposed TH: Knowledge factor ใช้ความลับที่ผู้ร้องขอรู้ เช่น รหัสผ่านหรือ PIN ส่วน Possession factor แสดงการควบคุมเครื่องมือยืนยันตัวตน เช่น Hardware security key ที่ลงทะเบียนไว้ การพกสิ่งของที่ไม่เกี่ยวข้องไม่ใช่หลักฐานยืนยันตัวตน Inherence factor ใช้ลักษณะทางชีวมิติ เช่น ลายนิ้วมือ สำหรับการยืนยันตัวตนดิจิทัลตาม NIST ชีวมิติไม่ใช่เครื่องมือยืนยันตัวตนที่ใช้เดี่ยว ๆ แต่ใช้ร่วมกับเครื่องมือทางกายภาพ เช่น ใช้ลายนิ้วมือเปิดใช้งาน Security key จึงรวม Possession กับ Inherence เข้าด้วยกัน ปัจจัยสิ่งที่มีอาจถูกโจมตีได้โดยไม่ต้องขโมยอุปกรณ์จริง และชีวมิติอาจถูกปลอมแปลงได้ อีกทั้งไม่รับประกันว่าการระบุตัวตนจะถูกต้องเสมอ การเลือกปัจจัยช่วยลดความเสี่ยงบางแบบ ไม่ได้ขจัดความเสี่ยงทั้งหมด

Disposition: Documented proposal only; production unchanged; human editorial review pending.

## FC-002 — MEDIUM

lesson-d1-01-cia-triad / slide-02-cia-overview / `visual.takeaway` in `content/isc2-cc-2026/learning/published/lessons/lesson-d1-01-cia-triad.json`.

Current EN: Security controls work together: strong encryption cannot help if systems are down or records are tampered with.

Current TH: มาตรการความปลอดภัยต้องทำงานร่วมกัน การเข้ารหัสที่ดีจะไร้ผลหากระบบล่ม หรือข้อมูลถูกแก้ไขทำลาย

Problem and learner impact: Encryption can still protect confidentiality during an outage. Saying it cannot help or is useless conflicts with the later correctly qualified authenticated-encryption explanation.

Evidence: https://csrc.nist.gov/glossary/term/availability; https://csrc.nist.gov/glossary/term/integrity; Domain 1.md §2.2 and D1 Surm.md §2.1

Proposed EN: Security controls work together: encryption can protect confidentiality, but it does not by itself ensure availability; integrity protection requires an appropriate mechanism.

Proposed TH: มาตรการความปลอดภัยต้องทำงานร่วมกัน การเข้ารหัสช่วยรักษาความลับ แต่เพียงอย่างเดียวไม่ได้รับประกันความพร้อมใช้งาน ส่วนการปกป้อง Integrity ต้องใช้กลไกที่เหมาะสม

Disposition: Documented proposal only; production unchanged; human editorial review pending.

## FC-003 — MEDIUM

lesson-d1-01-cia-triad / slide-02-cia-overview / `visual.pillars.1.summary` in `content/isc2-cc-2026/learning/published/lessons/lesson-d1-01-cia-triad.json`.

Current EN: Protect data from unauthorized modification, tampering, or deletion.

Current TH: ป้องกันการแก้ไข ดัดแปลง หรือทำลายข้อมูล ด้วยแฮชและลายมือชื่อดิจิทัล

Problem and learner impact: Thai adds hashes as a means of preventing modification, whereas a plain hash helps detect change against a trusted baseline. English states the goal without that causal claim. Reading and expanded Info expose this sentence.

Evidence: https://csrc.nist.gov/glossary/term/integrity; Domain 1.md §2.2; D1 Surm.md §2.2

Proposed EN: Protect data from unauthorized modification, tampering or deletion; trusted hashes help detect changes, while signatures help verify signed-data integrity and origin.

Proposed TH: ปกป้องข้อมูลจากการแก้ไข ดัดแปลง หรือลบโดยไม่ได้รับอนุญาต Hash ที่เทียบกับค่าอ้างอิงที่เชื่อถือได้ช่วยตรวจพบการเปลี่ยนแปลง ส่วนลายมือชื่อดิจิทัลช่วยตรวจสอบ Integrity และแหล่งที่มาของข้อมูลที่ลงนาม

Disposition: Documented proposal only; production unchanged; human editorial review pending.

## FC-004 — MEDIUM

lesson-d1-01-cia-triad / slide-05-availability / `blocks.0.text` in `content/isc2-cc-2026/learning/published/lessons/lesson-d1-01-cia-triad.json`.

Current EN: Definition: Availability ensures that authorized users have prompt, dependable access to vital information, business applications, and infrastructure whenever required for operations. Data that is perfectly encrypted but inaccessible when needed provides zero business value.

Current TH: คำจำกัดความ: Availability คือการรับรองว่าผู้ใช้ที่ได้รับอนุญาตจะสามารถเข้าถึงข้อมูลสำคัญ แอปพลิเคชัน และโครงสร้างพื้นฐานได้อย่างรวดเร็วและต่อเนื่องเมื่อจำเป็นต่อการทำงาน ข้อมูลที่ถูกเข้ารหัสไว้อย่างสมบูรณ์แบบแต่ไม่สามารถเปิดใช้งานได้ ย่อมไม่มีมูลค่าต่อธุรกิจเลย

Problem and learner impact: Zero business value is an unsupported absolute. Temporarily unavailable data can retain future recovery, evidentiary or regulatory value. Teach the operational harm without asserting total loss of value.

Evidence: https://csrc.nist.gov/glossary/term/availability; Domain 1.md §2.3

Proposed EN: Availability means timely, reliable access to information, applications and infrastructure by authorized users when required. Encryption alone does not ensure that access: unavailable information cannot support the immediate task, even if it retains other or future value.

Proposed TH: Availability คือการให้ผู้มีสิทธิ์เข้าถึงข้อมูล แอปพลิเคชัน และโครงสร้างพื้นฐานได้อย่างเชื่อถือได้ในเวลาที่จำเป็น การเข้ารหัสเพียงอย่างเดียวไม่ได้รับประกันการเข้าถึง ข้อมูลที่ใช้ไม่ได้ย่อมไม่ช่วยงานที่ต้องทำทันที แม้อาจยังมีคุณค่าในด้านอื่นหรือในอนาคต

Disposition: Documented proposal only; production unchanged; human editorial review pending.

## FC-005 — MEDIUM

lesson-d1-01-cia-triad / slide-08-takeaways / `blocks.1.rows.2.3` in `content/isc2-cc-2026/learning/published/lessons/lesson-d1-01-cia-triad.json`.

Current EN: Trap: Backups restore availability, but backups alone do not keep data secret.

Current TH: กับดัก: การสำรองข้อมูลช่วยกู้ความพร้อมใช้งาน แต่ไม่ได้ช่วยรักษาความลับ

Problem and learner impact: Thai omits alone and reads as a blanket assertion that backup does not help confidentiality. English and Presentation correctly distinguish backup alone from separately protecting backup secrecy.

Evidence: https://csrc.nist.gov/glossary/term/availability; Domain 1.md §2.3; this slide Presentation qualifier

Proposed EN: Backups support recovery of availability, but backups alone do not ensure secrecy; protect backup access and encryption separately.

Proposed TH: Backup ช่วยกู้คืนความพร้อมใช้งาน แต่ Backup เพียงอย่างเดียวไม่ได้รับประกันการรักษาความลับ ต้องปกป้องสิทธิ์เข้าถึงและการเข้ารหัสข้อมูลสำรองด้วย

Disposition: Documented proposal only; production unchanged; human editorial review pending.

## FC-006 — LOW

lesson-d1-01-cia-triad / slide-08-takeaways / `blocks.0.text` in `content/isc2-cc-2026/learning/published/lessons/lesson-d1-01-cia-triad.json`.

Current EN: The CIA Triad is the touchstone for cybersecurity risk analysis and control design. Master these diagnostic indicators, primary safeguards, and common exam traps.

Current TH: สามเหลี่ยม CIA คือรากฐานสำคัญที่สุดสำหรับการวิเคราะห์ความเสี่ยงและการออกแบบมาตรการความปลอดภัย จดจำคำสำคัญในข้อสอบ มาตรการหลัก และกับดักที่พบบ่อยให้แม่นยำ

Problem and learner impact: Common exam traps implies exam-frequency evidence that is not supplied. The official outline establishes scope, not frequencies or actual question patterns.

Evidence: https://www.isc2.org/certifications/cc/cc-certification-exam-outline Domain 1 §1.1

Proposed EN: The CIA Triad supports cybersecurity risk analysis and control design. Use the following learning cues and safeguard examples to distinguish the goals; these are authored study aids, not claims about exam-question frequency.

Proposed TH: CIA Triad สนับสนุนการวิเคราะห์ความเสี่ยงและการออกแบบมาตรการความปลอดภัย ใช้คำช่วยจำและตัวอย่างมาตรการต่อไปนี้เพื่อแยกแต่ละเป้าหมาย ตารางนี้เป็นสื่อช่วยเรียนที่ผู้เขียนจัดทำ ไม่ใช่ข้ออ้างเกี่ยวกับความถี่ของคำถามในข้อสอบ

Disposition: Documented proposal only; production unchanged; human editorial review pending.

## FC-007 — MEDIUM

lesson-d1-01-cia-triad / slide-06-compound-impact / `visual.lead` in `content/isc2-cc-2026/learning/published/lessons/lesson-d1-01-cia-triad.json`.

Current EN: Attacks rarely hit one pillar in isolation. A complex intrusion can cascade across all three security goals.

Current TH: การโจมตีจริงมักไม่กระทบเพียงเสาหลักเดียว เหตุบุกรุกที่ซับซ้อนมักส่งผลกระทบต่อเนื่องครบทั้งสามด้าน

Problem and learner impact: English says a complex intrusion can cascade across all three goals; Thai says it often does. Neither source establishes that frequency. The teaching need is possibility of multiple harms.

Evidence: https://www.isc2.org/certifications/cc/cc-certification-exam-outline §1.1; Domain 1.md §2.4

Proposed EN: An incident can affect more than one CIA goal. The example below illustrates distinct harms; it is not a required sequence or a claim about how often all three occur.

Proposed TH: เหตุการณ์หนึ่งอาจกระทบเป้าหมาย CIA มากกว่าหนึ่งด้าน ตัวอย่างต่อไปนี้แสดงความเสียหายที่ต่างกัน ไม่ใช่ลำดับบังคับหรือข้ออ้างว่าเหตุการณ์จะกระทบครบทั้งสามด้านบ่อยเพียงใด

Disposition: Documented proposal only; production unchanged; human editorial review pending.

## FC-008 — LOW

lesson-d1-01-cia-triad / slide-09-ai-training-integrity / `blocks.2.items.0` in `content/isc2-cc-2026/learning/published/lessons/lesson-d1-01-cia-triad.json`.

Current EN: 1. Training labels: An attacker relabels urgent tickets as routine. Impact on Data integrity: The training examples now teach the wrong priority.

Current TH: 1. Training labels: ผู้โจมตีเปลี่ยน Label ของ Ticket เร่งด่วนเป็นงานทั่วไป ผลกระทบต่อ Data integrity (Data integrity): ตัวอย่างสำหรับฝึกสอนให้จัดลำดับผิด

Problem and learner impact: Thai duplicates the identical English term Data integrity in parentheses, adding noise instead of a helpful translation. The same pattern occurs in items 1 and 2.

Evidence: https://csrc.nist.gov/glossary/term/data_poisoning; apply equivalent term cleanup to blocks.2.items.1 and .2

Proposed EN: 1. Training labels: An attacker relabels urgent tickets as routine. Impact on Data integrity: The training examples now teach the wrong priority.

Proposed TH: 1. Training labels: ผู้โจมตีเปลี่ยน Label ของ Ticket เร่งด่วนเป็นงานทั่วไป ผลกระทบต่อความถูกต้องครบถ้วนของข้อมูล (Data integrity): ตัวอย่างที่ใช้ฝึกสอนให้จัดลำดับผิด

Disposition: Documented proposal only; production unchanged; human editorial review pending.

## FC-009 — LOW

lesson-d1-03-non-repudiation / slide-06-evaluate-the-claim / `blocks.2.text` in `content/isc2-cc-2026/learning/published/lessons/lesson-d1-03-non-repudiation.json`.

Current EN: Start with the specific claim: is the question about account access, the content of a signed order, the person who acted, or receipt of the order? A login record and a verified original signature support different conclusions. If the received copy was altered, keep both versions and evaluate the original signature against the correct data and trusted public key. Then examine identity binding, key custody and supporting records before attributing the action to a person. Do not infer confidentiality, guaranteed delivery, intent or legal enforceability merely from a signature result. The original six-slide sequence develops the notes’ authentication-versus-later-evidence distinction without repeating the full AAA lesson.

Current TH: เริ่มจากคำกล่าวอ้างเฉพาะที่ต้องตรวจสอบว่าโจทย์ถามเรื่องการเข้าถึงบัญชี เนื้อหาคำสั่งซื้อที่ลงนาม บุคคลผู้กระทำ หรือการได้รับคำสั่งซื้อ บันทึกเข้าสู่ระบบกับลายเซ็นต้นฉบับที่ตรวจผ่านรองรับคนละข้อสรุป หากฉบับที่ได้รับถูกแก้ไข ให้เก็บทั้งสองฉบับและตรวจลายเซ็นเดิมกับข้อมูลที่ถูกฉบับและ Public key ที่เชื่อถือได้ จากนั้นจึงพิจารณาการผูกตัวตน การควบคุมกุญแจ และบันทึกสนับสนุนก่อนโยงการกระทำกับบุคคล อย่าสรุปว่าข้อมูลเป็นความลับ ส่งถึงแน่นอน มีเจตนาใด หรือมีผลบังคับทางกฎหมายจากผลตรวจลายเซ็นอย่างเดียว ลำดับหกสไลด์นี้พัฒนาความแตกต่างระหว่างการยืนยันตัวตนกับหลักฐานภายหลังตามบันทึก โดยไม่สอน AAA ทั้งบทซ้ำ

Problem and learner impact: Learner explanation refers to an original six-slide sequence although the published lesson now has seven slides. Remove stale authoring history and retain the evidence distinction.

Evidence: NIST FIPS 186-5 abstract and glossary non_repudiation; current published seven-slide lesson sequence

Proposed EN: Start with the specific claim: is the question about account access, the content of a signed order, the person who acted, or receipt of the order? A login record and a verified original signature support different conclusions. If the received copy was altered, keep both versions and evaluate the original signature against the correct data and trusted public key. Then examine identity binding, key custody and supporting records before attributing the action to a person. Do not infer confidentiality, guaranteed delivery, intent or legal enforceability merely from a signature result. Distinguish evidence of authentication at access time from evidence supporting a later disputed action.

Proposed TH: เริ่มจากคำกล่าวอ้างเฉพาะที่ต้องตรวจสอบว่าโจทย์ถามเรื่องการเข้าถึงบัญชี เนื้อหาคำสั่งซื้อที่ลงนาม บุคคลผู้กระทำ หรือการได้รับคำสั่งซื้อ บันทึกเข้าสู่ระบบกับลายเซ็นต้นฉบับที่ตรวจผ่านรองรับคนละข้อสรุป หากฉบับที่ได้รับถูกแก้ไข ให้เก็บทั้งสองฉบับและตรวจลายเซ็นเดิมกับข้อมูลที่ถูกฉบับและ Public key ที่เชื่อถือได้ จากนั้นจึงพิจารณาการผูกตัวตน การควบคุมกุญแจ และบันทึกสนับสนุนก่อนโยงการกระทำกับบุคคล อย่าสรุปว่าข้อมูลเป็นความลับ ส่งถึงแน่นอน มีเจตนาใด หรือมีผลบังคับทางกฎหมายจากผลตรวจลายเซ็นอย่างเดียว แยกหลักฐานการยืนยันตัวตนขณะเข้าถึงออกจากหลักฐานที่รองรับการกระทำซึ่งถูกโต้แย้งภายหลัง

Disposition: Documented proposal only; production unchanged; human editorial review pending.

## FC-010 — LOW

lesson-d1-03-non-repudiation / slide-03-sign-and-verify / `blocks.2.text` in `content/isc2-cc-2026/learning/published/lessons/lesson-d1-03-non-repudiation.json`.

Current EN: A digital signature algorithm uses the signer’s private key to generate a signature over data. A verifier uses the corresponding public key, the signed data and the signature to check the result. A successful verification supports integrity and origin under the scheme’s assumptions. It does not by itself establish that an arbitrary public key belongs to Nara; a trustworthy identity-to-key association is also needed, commonly supported by a validated certificate and its trust chain. Signing is not a generic instruction to encrypt with a private key, and a signature alone does not hide the document. Algorithm mathematics and certificate administration are outside this beginner lesson. A scanned or pasted handwritten signature is not the cryptographic digital signature described here.

Current TH: อัลกอริทึม Digital signature ใช้ Private key ของผู้ลงนามสร้างลายเซ็นเหนือข้อมูล ผู้ตรวจใช้ Public key ที่คู่กันร่วมกับข้อมูลและลายเซ็นเพื่อตรวจผล การตรวจสำเร็จสนับสนุนความถูกต้องและแหล่งที่มาภายใต้เงื่อนไขของระบบ แต่ไม่ได้ยืนยันด้วยตัวเองว่า Public key ใด ๆ เป็นของ Nara ต้องมีการผูกตัวตนกับกุญแจที่เชื่อถือได้ด้วย โดยมักอาศัย Certificate และสายความเชื่อถือที่ตรวจสอบแล้ว การลงนามไม่ใช่คำสั่งทั่วไปว่าให้เข้ารหัสด้วยกุญแจส่วนตัว และลายเซ็นเพียงอย่างเดียวไม่ได้ซ่อนเนื้อหาเอกสาร บทเรียนพื้นฐานนี้ไม่ลงรายละเอียดคณิตศาสตร์อัลกอริทึมหรือการดูแล Certificate ภาพสแกนหรือลายเซ็นลายมือที่นำมาแปะไม่ใช่ Digital signature แบบเข้ารหัสที่อธิบายในบทเรียนนี้

Problem and learner impact: Thai uses แบบเข้ารหัส for cryptographic digital signature. This can suggest encryption despite the correct preceding distinction; use an explicit cryptography term. This is a clarity issue, not a wrong key-role explanation.

Evidence: NIST FIPS 186-5 abstract and glossary non_repudiation; current published seven-slide lesson sequence

Proposed EN: A digital signature algorithm uses the signer’s private key to generate a signature over data. A verifier uses the corresponding public key, the signed data and the signature to check the result. A successful verification supports integrity and origin under the scheme’s assumptions. It does not by itself establish that an arbitrary public key belongs to Nara; a trustworthy identity-to-key association is also needed, commonly supported by a validated certificate and its trust chain. Signing is not a generic instruction to encrypt with a private key, and a signature alone does not hide the document. Algorithm mathematics and certificate administration are outside this beginner lesson. A scanned or pasted handwritten signature is not the cryptographic digital signature described here.

Proposed TH: อัลกอริทึม Digital signature ใช้ Private key ของผู้ลงนามสร้างลายเซ็นเหนือข้อมูล ผู้ตรวจใช้ Public key ที่คู่กันร่วมกับข้อมูลและลายเซ็นเพื่อตรวจผล การตรวจสำเร็จสนับสนุนความถูกต้องและแหล่งที่มาภายใต้เงื่อนไขของระบบ แต่ไม่ได้ยืนยันด้วยตัวเองว่า Public key ใด ๆ เป็นของ Nara ต้องมีการผูกตัวตนกับกุญแจที่เชื่อถือได้ด้วย โดยมักอาศัย Certificate และสายความเชื่อถือที่ตรวจสอบแล้ว การลงนามไม่ใช่คำสั่งทั่วไปว่าให้เข้ารหัสด้วยกุญแจส่วนตัว และลายเซ็นเพียงอย่างเดียวไม่ได้ซ่อนเนื้อหาเอกสาร บทเรียนพื้นฐานนี้ไม่ลงรายละเอียดคณิตศาสตร์อัลกอริทึมหรือการดูแล Certificate ภาพสแกนหรือลายเซ็นลายมือที่นำมาแปะไม่ใช่ ลายมือชื่อดิจิทัลเชิงวิทยาการรหัสลับ (Cryptographic digital signature)ที่อธิบายในบทเรียนนี้

Disposition: Documented proposal only; production unchanged; human editorial review pending.

## FC-011 — LOW

lesson-d1-09-frameworks / slide-06-standard-requirement / `blocks.0.text` in `content/isc2-cc-2026/learning/published/lessons/lesson-d1-09-frameworks.json`.

Current EN: An adopted internal standard defines what must be met.

Current TH: Standard ภายในที่รับใช้แล้วกำหนดสิ่งที่ต้องทำตาม

Problem and learner impact: Thai translates adopted/adoption as รับใช้ (serve), an unnatural term for formally applying a requirement. The surrounding mandatory-condition reasoning is correct, but recurring wording weakens clarity of how a requirement becomes binding. Use นำมาบังคับใช้ consistently.

Evidence: User Source A §§28–32 and Source B §7.1; English adopted internal requirement and Thai context

Proposed EN: An adopted internal standard defines what must be met.

Proposed TH: Standard ภายในที่นำมาบังคับใช้แล้วกำหนดสิ่งที่ต้องทำตาม

Disposition: Bilingual editorial proposal only; production unchanged; native Thai acceptance pending.

## FC-012 — LOW

lesson-d2-01-grc-foundations / slide-02-purpose-of-grc / `blocks.1.rows.0.0` in `content/isc2-cc-2026/learning/published/lessons/lesson-d2-01-grc-foundations.json`.

Current EN: Align cybersecurity with business objectives

Current TH: Align cybersecurity with business objectives

Problem and learner impact: All seven purpose labels in the Thai Reading/Info table repeat English sentences without Thai glosses. Thai explanations mitigate impact and Presentation labels are translated, but this creates avoidable language inconsistency for Thai learners.

Evidence: Compare actual Thai Presentation labels with Reading/Info table; user D2 sum.md §2.1 and supplied S05 course image.

Proposed EN: Align cybersecurity with business objectives

Proposed TH: เชื่อมความปลอดภัยไซเบอร์กับเป้าหมายธุรกิจ

Disposition: Proposed bilingual correction only; production unchanged; human acceptance pending.

## FC-013 — MEDIUM

lesson-d2-01-grc-foundations / slide-03-importance-of-grc / `blocks.3.items.0` in `content/isc2-cc-2026/learning/published/lessons/lesson-d2-01-grc-foundations.json`.

Current EN: Financial Penalties Nuance (S06): Notice the wording 'avoid or reduce financial penalties'—effective GRC cannot guarantee zero incidents, but documented governance and compliance substantially prevent violations and mitigate regulatory enforcement exposure.

Current TH: ข้อสังเกตคำว่า Avoid or Reduce Financial Penalties (S06): สไลด์ใช้คำว่าหลีกเลี่ยงหรือลดค่าปรับ เพราะแม้ไม่มีระบบใดรับประกันว่าจะไม่เกิดเหตุเลย แต่การมี GRC และหลักฐานการดูแลตามมาตรฐานช่วยป้องกันการทำผิดกฎและลดความรุนแรงของบทลงโทษได้อย่างมาก

Problem and learner impact: Claims substantial prevention and greatly reduced penalty severity without evidence or jurisdiction-specific grounds. Learners may infer that documented GRC itself secures leniency. The source says helps avoid/reduce penalties, not a measured magnitude or assured enforcement outcome.

Evidence: Supplied S06 course image explicitly says effective GRC helps organizations; Domain 2.md §2.3; Domain 1 due-care lesson explicitly rejects legal immunity from labels/checklists.

Proposed EN: Financial penalties: Effective GRC can help identify and meet applicable obligations and reduce exposure to violations and financial loss. Actual enforcement and penalties depend on the applicable requirements and facts. Documentation alone does not establish compliance or guarantee a reduced penalty.

Proposed TH: ค่าปรับทางการเงิน: GRC ที่มีประสิทธิผลช่วยระบุและปฏิบัติตามหน้าที่ที่เกี่ยวข้อง และอาจลดโอกาสละเมิดข้อกำหนดหรือเกิดความเสียหายทางการเงิน ผลการบังคับใช้และบทลงโทษขึ้นกับข้อกำหนดและข้อเท็จจริง หลักฐานเอกสารเพียงอย่างเดียวไม่ได้ยืนยันว่าปฏิบัติตามครบหรือรับประกันว่าจะลดบทลงโทษ

Disposition: Proposed bilingual correction only; production unchanged; human acceptance pending.

## FC-014 — MEDIUM

lesson-d2-01-grc-foundations / slide-03-importance-of-grc / `blocks.2.text` in `content/isc2-cc-2026/learning/published/lessons/lesson-d2-01-grc-foundations.json`.

Current EN: Slide S06 and Domain 2.md §2.3 highlight why GRC is a strategic business enabler rather than administrative overhead. Notice on S06 how the instructor explicitly connects specific outcomes back to the GRC triad: reducing cybersecurity and business risks flows from the Risk component, meeting regulatory requirements and avoiding or reducing financial penalties flow from Compliance, and improved decision-making and clear accountability flow from Governance—together producing organizational resilience (the ability to anticipate, withstand, and recover from adverse events, bridging Objective 2.1 to Objective 2.2). Conversely, when effective GRC is absent, organizations suffer four predictable breakdowns: inconsistent security practices across teams, unidentified risks hiding in blind spots, compliance violations, and poor accountability when incidents or audit findings occur.

Current TH: สไลด์ S06 และ Domain 2.md หัวข้อ 2.3 ชี้ให้เห็นว่าทำไม GRC จึงเป็นกลไกสนับสนุนความอยู่รอดของธุรกิจ ไม่ใช่แค่ภาระงานเอกสาร ในภาพสไลด์ S06 ผู้สอนโยงลูกศรให้เห็นชัดเจนว่าการลดความเสี่ยงไซเบอร์และธุรกิจเกิดจากมิติ Risk การปฏิบัติตามกฎระเบียบและหลีกเลี่ยงหรือลดค่าปรับทางการเงินเกิดจากมิติ Compliance ส่วนการตัดสินใจที่ดีขึ้นและ Accountability ที่ชัดเจนเกิดจากมิติ Governance ซึ่งเมื่อทำงานร่วมกันจะยกระดับ Organizational Resilience หรือความสามารถขององค์กรในการรับมือและฟื้นตัวจากเหตุรบกวน (เชื่อมต่อไปยังเรื่อง BC/DR ใน Objective 2.2) ในทางตรงกันข้าม หากไม่มี GRC ที่ดี องค์กรจะเผชิญปัญหาหลัก 4 ข้อทันที ได้แก่ แนวปฏิบัติที่ไม่สอดคล้องกัน ความเสี่ยงที่ไม่ถูกค้นพบ การละเมิดข้อกำหนด และความรับผิดชอบที่คลุมเครือไร้เจ้าภาพ

Problem and learner impact: Source S06 says organizations without effective GRC may have four failure modes. Published English makes them predictable breakdowns; Thai adds immediately. This changes possible consequences into inevitable immediate outcomes and weakens causal reasoning.

Evidence: ISC2 Update 2026/Domain 2/Screenshot 2026-09-20 180141.png (existing supplied S06, academic source inspection only); Domain 2.md §2.3 uses อาจเกิด.

Proposed EN: Course slide S06 and Domain 2.md §2.3 list seven benefits that effective GRC can help achieve. Governance, risk management and compliance contribute together to risk reduction, protection of assets, meeting obligations, informed decisions, accountability and resilience. Resilience includes anticipating, withstanding and recovering from disruption. Without effective coordination, organizations may have inconsistent security practices, unidentified risks, compliance violations or unclear accountability. These are possible failure modes, not guaranteed or immediate outcomes.

Proposed TH: สไลด์คอร์ส S06 และ Domain 2.md §2.3 แสดงประโยชน์เจ็ดข้อที่ GRC ที่มีประสิทธิผลช่วยสนับสนุนได้ Governance, Risk Management และ Compliance ทำงานร่วมกันเพื่อลดความเสี่ยง ปกป้องทรัพย์สิน ทำตามหน้าที่ ตัดสินใจอย่างมีข้อมูล ระบุผู้รับผิดชอบ และเพิ่ม Resilience ซึ่งรวมการคาดการณ์ รับมือ และฟื้นตัวจากเหตุหยุดชะงัก หากขาดการประสานงานที่มีประสิทธิผล องค์กรอาจมีแนวปฏิบัติไม่สอดคล้องกัน ความเสี่ยงที่ไม่ถูกระบุ การละเมิดข้อกำหนด หรือความรับผิดชอบไม่ชัดเจน นี่คือผลเสียที่อาจเกิด ไม่ใช่สิ่งที่ต้องเกิดแน่นอนหรือทันที

Disposition: Proposed bilingual correction only; production unchanged; human acceptance pending.

## FC-015 — MEDIUM

lesson-d2-01-grc-foundations / slide-06-applied-grc-scenario / `blocks.3.items.1` in `content/isc2-cc-2026/learning/published/lessons/lesson-d2-01-grc-foundations.json`.

Current EN: Why Option B Fails: Confuses an international standard (ISO/IEC 27001) with statutory legislation and sacrifices business continuity/objectives instead of supporting them.

Current TH: เหตุผลที่ตัวเลือก B ไม่ตอบโจทย์: เข้าใจผิดว่ามาตรฐานสากล ISO/IEC 27001 เป็นกฎหมายบังคับทุกบริษัท และสั่งหยุดธุรกิจแทนที่จะจัดแนวความปลอดภัยให้เกื้อหนุนธุรกิจ

Problem and learner impact: Option B now mandates endpoint tools before governance policies. Reading/Info rationale instead criticizes a different option about treating ISO as law and stopping business. The feedback does not explain the actual distractor, even though the Presentation row-based feedback and correct C key are coherent.

Evidence: Current slide blocks.1.rows.1.0–2 and actual Presentation B label; grc-foundations-presentations.js selected-row feedback; current blocks.3.items.1 is stale.

Proposed EN: Why Option B is less suitable here: Endpoint tools may address particular technical exposures, but deploying them before shared governance policies and risk ownership does not solve NovaPay’s coordination and ISMS-assurance needs. Technical deployment can complement a coordinated GRC plan; it does not replace that plan.

Proposed TH: เหตุผลที่ตัวเลือก B เหมาะสมน้อยกว่าในกรณีนี้: เครื่องมือ Endpoint อาจจัดการความเสี่ยงทางเทคนิคบางส่วนได้ แต่การติดตั้งก่อนกำหนดนโยบายกำกับดูแลร่วมและผู้รับผิดชอบ Risk ไม่ได้แก้ปัญหาการประสานงานหรือความต้องการความเชื่อมั่นด้าน ISMS ของ NovaPay การใช้เครื่องมือเทคนิคเสริมแผน GRC ที่ประสานกันได้ แต่ไม่แทนแผนนั้น

Disposition: Proposed bilingual correction only; production unchanged; human acceptance pending.

## FC-016 — LOW

lesson-d2-01-grc-foundations / slide-05-grc-distinctions / `blocks.2.text` in `content/isc2-cc-2026/learning/published/lessons/lesson-d2-01-grc-foundations.json`.

Current EN: Two distinctions recur throughout ISC2 governance questions and COBIT/NIST principles. First, Governance vs. Management: Governance is the board and executive function that establishes direction, defines policy expectations, assigns accountability, and exercises oversight ('Governance กำหนดทิศทางและความรับผิดชอบ'), whereas Management plans, builds, runs, and monitors day-to-day activities to achieve that direction ('ส่วน Management นำแนวทางนั้นไปปฏิบัติจริง'), sending operational evidence back for oversight review. Second, Risk Management vs. Compliance: Compliance proves adherence to a defined set of external or internal rules at a given scope, whereas Risk Management evaluates actual threat and vulnerability exposure across the organization. Treating compliance as a substitute for risk management creates dangerous blind spots whenever attackers exploit systems or workflows outside the audit checklist.

Current TH: ความแตกต่าง 2 คู่สำคัญที่ออกสอบบ่อยในสาย Security Governance และสอดคล้องกับแนวคิด COBIT/NIST คือ คู่แรกระหว่าง Governance กับ Management โดย Governance กำหนดทิศทางและความรับผิดชอบ (Direction, Oversight & Accountability) ในระดับผู้บริหารเพื่อชี้ว่าองค์กรต้องการความมั่นคงปลอดภัยในระดับใด ส่วน Management นำแนวทางนั้นไปปฏิบัติจริงผ่านการจัดสรรคน งบประมาณ กระบวนการ และมาตรการควบคุมรายวัน พร้อมส่งหลักฐานผลลัพธ์กลับมาให้ทบทวน คู่ที่สองคือ Risk Management กับ Compliance โดย Compliance มุ่งพิสูจน์ว่าองค์กรทำตามกฎระเบียบ มาตรฐาน หรือสัญญาที่เกี่ยวข้องครบถ้วน แต่ Risk Management มุ่งประเมินและลดโอกาสเกิดความเสียหายจากภัยคุกคามจริง การทำเพียงให้ผ่านเกณฑ์ตรวจประเมิน (Check-the-box Compliance) จึงไม่สามารถทดแทนการบริหารความเสี่ยงได้ เพราะภัยคุกคามใหม่อาจเกิดนอกขอบเขตรายการตรวจเสมอ

Problem and learner impact: English claims recurrence throughout ISC2 governance questions and Thai says frequently examined. Official scope and course comparisons do not establish actual question frequency. Retain study distinctions without an unsupported exam-frequency claim.

Evidence: Official ISC2 outline defines Objective 2.1 scope, not actual question patterns; Domain 2.md §24 comparisons.

Proposed EN: Two useful study distinctions in the course notes and COBIT/NIST principles are outlined below. First, Governance vs. Management: Governance is the board and executive function that establishes direction, defines policy expectations, assigns accountability, and exercises oversight ('Governance กำหนดทิศทางและความรับผิดชอบ'), whereas Management plans, builds, runs, and monitors day-to-day activities to achieve that direction ('ส่วน Management นำแนวทางนั้นไปปฏิบัติจริง'), sending operational evidence back for oversight review. Second, Risk Management vs. Compliance: Compliance proves adherence to a defined set of external or internal rules at a given scope, whereas Risk Management evaluates actual threat and vulnerability exposure across the organization. Treating compliance as a substitute for risk management creates dangerous blind spots whenever attackers exploit systems or workflows outside the audit checklist.

Proposed TH: คู่ความแตกต่างสำคัญสองคู่ต่อไปนี้ใช้ทบทวนจากโน้ตและแนวคิด COBIT/NIST คือ คู่แรกระหว่าง Governance กับ Management โดย Governance กำหนดทิศทางและความรับผิดชอบ (Direction, Oversight & Accountability) ในระดับผู้บริหารเพื่อชี้ว่าองค์กรต้องการความมั่นคงปลอดภัยในระดับใด ส่วน Management นำแนวทางนั้นไปปฏิบัติจริงผ่านการจัดสรรคน งบประมาณ กระบวนการ และมาตรการควบคุมรายวัน พร้อมส่งหลักฐานผลลัพธ์กลับมาให้ทบทวน คู่ที่สองคือ Risk Management กับ Compliance โดย Compliance มุ่งพิสูจน์ว่าองค์กรทำตามกฎระเบียบ มาตรฐาน หรือสัญญาที่เกี่ยวข้องครบถ้วน แต่ Risk Management มุ่งประเมินและลดโอกาสเกิดความเสียหายจากภัยคุกคามจริง การทำเพียงให้ผ่านเกณฑ์ตรวจประเมิน (Check-the-box Compliance) จึงไม่สามารถทดแทนการบริหารความเสี่ยงได้ เพราะภัยคุกคามใหม่อาจเกิดนอกขอบเขตรายการตรวจเสมอ

Disposition: Proposed bilingual correction only; production unchanged; human acceptance pending.

## FC-017 — LOW

lesson-d2-01-grc-foundations / slide-04-grc-frameworks / `blocks.1.rows.0.2` in `content/isc2-cc-2026/learning/published/lessons/lesson-d2-01-grc-foundations.json`.

Current EN: Select when structuring risk-based cybersecurity outcomes and aligning governance with risk reduction.

Current TH: เลือกใช้เมื่อต้องการกรอบผลลัพธ์เพื่อบริหารและลดความเสี่ยงไซเบอร์อย่างเป็นลำดับขั้น

Problem and learner impact: Thai adds step-by-step sequencing where English says risk-based outcomes and governance alignment. This can be read as a fixed CSF function sequence, contrary to the concurrent-function explanation in Domain 1. Clarify structured application without implying ordered phases.

Evidence: Fresh NIST CSF FAQ: Core has concurrent and continuous functions; compare lesson-d1-09-frameworks/slide-02-nist-outcomes.

Proposed EN: Select when structuring risk-based cybersecurity outcomes and aligning governance with risk reduction; CSF functions operate concurrently rather than as mandatory sequential phases.

Proposed TH: เลือกใช้เมื่อต้องการจัดโครงสร้างผลลัพธ์ด้านความเสี่ยงไซเบอร์และเชื่อมการกำกับดูแลกับการลดความเสี่ยง โดย Functions ทำงานควบคู่กัน ไม่ใช่ขั้นตอนตายตัวที่ต้องทำเรียงลำดับ

Disposition: Proposed bilingual correction only; production unchanged; human acceptance pending.

## Per-slide substantive review record

### lesson-d1-01-cia-triad / slide-01-orientation

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-01-cia-triad.json`. All six EN/TH mode entries reviewed.

Mission framing and CIA definitions agree; read the universal control claim as an introductory security-goal framing, not an exclusion of privacy or accountability.

Evidence: ISC2 Update 2026/Domain 1/Domain 1.md — §2; ISC2 Update 2026/Domain 1/D1 Surm.md — §2; ISC2 Update 2026/Domain 1/D1 sum.md — CIA §§1–3; [CIA glossary definitions](https://csrc.nist.gov/glossary/term/availability).

Findings: No new issue identified in this review.

### lesson-d1-01-cia-triad / slide-02-cia-overview

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-01-cia-triad.json`. All six EN/TH mode entries reviewed.

Read all visual pairs, actual static Reading and Presentation, and shared expanded Info. Encryption residual usefulness and Thai hash/prevention wording need correction.

Evidence: ISC2 Update 2026/Domain 1/Domain 1.md — §2; ISC2 Update 2026/Domain 1/D1 Surm.md — §2; ISC2 Update 2026/Domain 1/D1 sum.md — CIA §§1–3; [CIA glossary definitions](https://csrc.nist.gov/glossary/term/availability).

Findings: FC-002, FC-003.

### lesson-d1-01-cia-triad / slide-03-confidentiality

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-01-cia-triad.json`. All six EN/TH mode entries reviewed.

Unauthorized insider viewing is confidentiality loss regardless of modification. AES/TLS examples are illustrative, not an exclusive mandatory algorithm policy. Encryption does not cure an already-authorized plaintext endpoint.

Evidence: ISC2 Update 2026/Domain 1/Domain 1.md — §2; ISC2 Update 2026/Domain 1/D1 Surm.md — §2; ISC2 Update 2026/Domain 1/D1 sum.md — CIA §§1–3; [CIA glossary definitions](https://csrc.nist.gov/glossary/term/availability).

Findings: No new issue identified in this review.

### lesson-d1-01-cia-triad / slide-04-integrity

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-01-cia-triad.json`. All six EN/TH mode entries reviewed.

Trusted-baseline, collision and signer-key limitations are correctly qualified. The transfer scenario identifies integrity loss; routing-number versus account-number localization is imprecise but does not change the intended CIA answer. FIM detection does not independently decide authorization.

Evidence: ISC2 Update 2026/Domain 1/Domain 1.md — §2; ISC2 Update 2026/Domain 1/D1 Surm.md — §2; ISC2 Update 2026/Domain 1/D1 sum.md — CIA §§1–3; [CIA glossary definitions](https://csrc.nist.gov/glossary/term/availability).

Findings: No new issue identified in this review.

### lesson-d1-01-cia-triad / slide-05-availability

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-01-cia-triad.json`. All six EN/TH mode entries reviewed.

Hospital outage illustrates availability without inventing disclosure. Redundancy/backup examples are plausible; zero-value assertion overreaches.

Evidence: ISC2 Update 2026/Domain 1/Domain 1.md — §2; ISC2 Update 2026/Domain 1/D1 Surm.md — §2; ISC2 Update 2026/Domain 1/D1 sum.md — CIA §§1–3; [CIA glossary definitions](https://csrc.nist.gov/glossary/term/availability).

Findings: FC-004.

### lesson-d1-01-cia-triad / slide-06-compound-impact

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-01-cia-triad.json`. All six EN/TH mode entries reviewed.

Exfiltration C, lockout A and corrupt recovery I are valid authored stages; sequence is explicitly illustrative. Thai can/often difference requires correction.

Evidence: ISC2 Update 2026/Domain 1/Domain 1.md — §2; ISC2 Update 2026/Domain 1/D1 Surm.md — §2; ISC2 Update 2026/Domain 1/D1 sum.md — CIA §§1–3; [CIA glossary definitions](https://csrc.nist.gov/glossary/term/availability).

Findings: FC-007.

### lesson-d1-01-cia-triad / slide-07-scenario-reflection

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-01-cia-triad.json`. All six EN/TH mode entries reviewed.

Integrity answer is defensible from deliberate false inventory records. C distractor correctly notes insiders can disclose. A feedback is scoped to database service, not physical laptop availability. Interactive reveal, not a four-choice exam item.

Evidence: ISC2 Update 2026/Domain 1/Domain 1.md — §2; ISC2 Update 2026/Domain 1/D1 Surm.md — §2; ISC2 Update 2026/Domain 1/D1 sum.md — CIA §§1–3; [CIA glossary definitions](https://csrc.nist.gov/glossary/term/availability).

Findings: No new issue identified in this review.

### lesson-d1-01-cia-triad / slide-08-takeaways

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-01-cia-triad.json`. All six EN/TH mode entries reviewed.

Reviewed all matrix cells, historical-reference qualification and condensed Presentation. Preserve distinction between authenticated encryption and plain encryption. Thai backup qualifier and unsupported common-exam wording need changes.

Evidence: ISC2 Update 2026/Domain 1/Domain 1.md — §2; ISC2 Update 2026/Domain 1/D1 Surm.md — §2; ISC2 Update 2026/Domain 1/D1 sum.md — CIA §§1–3; [CIA glossary definitions](https://csrc.nist.gov/glossary/term/availability).

Findings: FC-005, FC-006.

### lesson-d1-01-cia-triad / slide-09-ai-training-integrity

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-01-cia-triad.json`. All six EN/TH mode entries reviewed.

Label poisoning before retraining can degrade behavior while service stays online. Model error alone does not establish attack. Hash equality is not training quality. References to later lessons remain cross-domain follow-up checks.

Evidence: ISC2 Update 2026/Domain 1/Domain 1.md — §2; ISC2 Update 2026/Domain 1/D1 Surm.md — §2; ISC2 Update 2026/Domain 1/D1 sum.md — CIA §§1–3; [CIA glossary definitions](https://csrc.nist.gov/glossary/term/availability).

Findings: FC-008.

### lesson-d1-02-aaa-mfa / slide-01-aaa-map

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-02-aaa-mfa.json`. All six EN/TH mode entries reviewed.

Distinct functions and denial logging correctly separate AAA from CIA; no mandatory universal sequence.

Evidence: ISC2 Update 2026/Domain 1/Domain 1.md — §3; ISC2 Update 2026/Domain 1/D1 Surm.md — §3; ISC2 Update 2026/Domain 1/D1 sum.md — AAA and MFA §§4–7; [§2 AAL2; §3.2.3 biometrics](https://pages.nist.gov/800-63-4/sp800-63b.html).

Findings: No new issue identified in this review.

### lesson-d1-02-aaa-mfa / slide-02-claim-and-proof

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-02-aaa-mfa.json`. All six EN/TH mode entries reviewed.

Identifier versus evidence/control is distinguished; digital authentication is not civil identity proofing or proof of the human behind every action.

Evidence: ISC2 Update 2026/Domain 1/Domain 1.md — §3; ISC2 Update 2026/Domain 1/D1 Surm.md — §3; ISC2 Update 2026/Domain 1/D1 sum.md — AAA and MFA §§4–7; [§2 AAL2; §3.2.3 biometrics](https://pages.nist.gov/800-63-4/sp800-63b.html).

Findings: No new issue identified in this review.

### lesson-d1-02-aaa-mfa / slide-03-permission-boundary

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-02-aaa-mfa.json`. All six EN/TH mode entries reviewed.

Successful sign-in and denied purchase approval are compatible. Anonymous access exception appropriately limits a rigid sequence.

Evidence: ISC2 Update 2026/Domain 1/Domain 1.md — §3; ISC2 Update 2026/Domain 1/D1 Surm.md — §3; ISC2 Update 2026/Domain 1/D1 sum.md — AAA and MFA §§4–7; [§2 AAL2; §3.2.3 biometrics](https://pages.nist.gov/800-63-4/sp800-63b.html).

Findings: No new issue identified in this review.

### lesson-d1-02-aaa-mfa / slide-04-activity-trail

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-02-aaa-mfa.json`. All six EN/TH mode entries reviewed.

Account attribution is not human attribution; accounting records versus audit review and non-repudiation are correctly separated.

Evidence: ISC2 Update 2026/Domain 1/Domain 1.md — §3; ISC2 Update 2026/Domain 1/D1 Surm.md — §3; ISC2 Update 2026/Domain 1/D1 sum.md — AAA and MFA §§4–7; [§2 AAL2; §3.2.3 biometrics](https://pages.nist.gov/800-63-4/sp800-63b.html).

Findings: No new issue identified in this review.

### lesson-d1-02-aaa-mfa / slide-05-factor-families

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-02-aaa-mfa.json`. All six EN/TH mode entries reviewed.

Knowledge, possession and inherence examples agree with NIST; physical authenticator needed with biometric. Source transcript physical-theft-only claim is correctly rejected; Thai double negative editorial finding.

Evidence: ISC2 Update 2026/Domain 1/Domain 1.md — §3; ISC2 Update 2026/Domain 1/D1 Surm.md — §3; ISC2 Update 2026/Domain 1/D1 sum.md — AAA and MFA §§4–7; [§2 AAL2; §3.2.3 biometrics](https://pages.nist.gov/800-63-4/sp800-63b.html).

Findings: FC-001.

### lesson-d1-02-aaa-mfa / slide-06-mfa-or-more-steps

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-02-aaa-mfa.json`. All six EN/TH mode entries reviewed.

Password+PIN same type, password+verified key MFA, office IP contextual signal. One device can use two factors. Phishing/session limitations qualified.

Evidence: ISC2 Update 2026/Domain 1/Domain 1.md — §3; ISC2 Update 2026/Domain 1/D1 Surm.md — §3; ISC2 Update 2026/Domain 1/D1 sum.md — AAA and MFA §§4–7; [§2 AAL2; §3.2.3 biometrics](https://pages.nist.gov/800-63-4/sp800-63b.html).

Findings: No new issue identified in this review.

### lesson-d1-02-aaa-mfa / slide-07-access-case

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-02-aaa-mfa.json`. All six EN/TH mode entries reviewed.

Successful password/key check is Authentication, approval denial Authorization, record Accounting. Revealed reasoning is bilingual and consistent; no answer key or distractor list exists to alter.

Evidence: ISC2 Update 2026/Domain 1/Domain 1.md — §3; ISC2 Update 2026/Domain 1/D1 Surm.md — §3; ISC2 Update 2026/Domain 1/D1 sum.md — AAA and MFA §§4–7; [§2 AAL2; §3.2.3 biometrics](https://pages.nist.gov/800-63-4/sp800-63b.html).

Findings: No new issue identified in this review.

### lesson-d1-03-non-repudiation / slide-01-disputed-action

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-03-non-repudiation.json`. All six EN/TH mode entries reviewed.

Nara PO208 dispute correctly separates later evidence from delivery, access and automatic legal conclusions. EN/TH case, table and explanation agree. Expanded Info uses the same reviewed Reading explanations; lesson outcomes, prerequisites and reference scope reviewed.

Evidence: ISC2 Update 2026/Domain 1/Domain 1.md — §4.1 non-repudiation; key and evidence management; ISC2 Update 2026/Domain 1/D1 Surm.md — §4.2; [FIPS 186-5 definition: third-party-verifiable integrity and origin](https://csrc.nist.gov/glossary/term/non_repudiation); [Abstract: unauthorized modification, signatory authentication, third-party evidence](https://csrc.nist.gov/pubs/fips/186-5/final); [Abstract: key protection and management scope](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final).

Findings: No new issue identified in this review.

### lesson-d1-03-non-repudiation / slide-02-different-questions

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-03-non-repudiation.json`. All six EN/TH mode entries reviewed.

Authentication, accounting/auditing, accountability and non-repudiation answer distinct questions; shared or compromised accounts and alterable logs limit human attribution. No guarantee inferred from a log. Expanded Info uses the same reviewed Reading explanations; lesson outcomes, prerequisites and reference scope reviewed.

Evidence: ISC2 Update 2026/Domain 1/Domain 1.md — §4.1 non-repudiation; key and evidence management; ISC2 Update 2026/Domain 1/D1 Surm.md — §4.2; [FIPS 186-5 definition: third-party-verifiable integrity and origin](https://csrc.nist.gov/glossary/term/non_repudiation); [Abstract: unauthorized modification, signatory authentication, third-party evidence](https://csrc.nist.gov/pubs/fips/186-5/final); [Abstract: key protection and management scope](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final).

Findings: No new issue identified in this review.

### lesson-d1-03-non-repudiation / slide-03-sign-and-verify

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-03-non-repudiation.json`. All six EN/TH mode entries reviewed.

Private signing/public verification roles correct. Trusted identity-to-key association, certificate validation when used and no secrecy from signing are explicit. Scanned handwriting distinguished. Thai cryptography/encryption terminology clarity proposal FC-010. Expanded Info uses the same reviewed Reading explanations; lesson outcomes, prerequisites and reference scope reviewed.

Evidence: ISC2 Update 2026/Domain 1/Domain 1.md — §4.1 non-repudiation; key and evidence management; ISC2 Update 2026/Domain 1/D1 Surm.md — §4.2; [FIPS 186-5 definition: third-party-verifiable integrity and origin](https://csrc.nist.gov/glossary/term/non_repudiation); [Abstract: unauthorized modification, signatory authentication, third-party evidence](https://csrc.nist.gov/pubs/fips/186-5/final); [Abstract: key protection and management scope](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final).

Findings: FC-010.

### lesson-d1-03-non-repudiation / slide-04-altered-copy

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-03-non-repudiation.json`. All six EN/TH mode entries reviewed.

Both authored unchanged-10 and changed-20 states substantively read. Renderer selects original signature match versus mismatch from the correct rows; no actual cryptographic computation or attacker identification claimed. EN/TH result and feedback agree. Expanded Info uses the same reviewed Reading explanations; lesson outcomes, prerequisites and reference scope reviewed.

Evidence: ISC2 Update 2026/Domain 1/Domain 1.md — §4.1 non-repudiation; key and evidence management; ISC2 Update 2026/Domain 1/D1 Surm.md — §4.2; [FIPS 186-5 definition: third-party-verifiable integrity and origin](https://csrc.nist.gov/glossary/term/non_repudiation); [Abstract: unauthorized modification, signatory authentication, third-party evidence](https://csrc.nist.gov/pubs/fips/186-5/final); [Abstract: key protection and management scope](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final).

Findings: No new issue identified in this review.

### lesson-d1-03-non-repudiation / slide-05-evidence-conditions

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-03-non-repudiation.json`. All six EN/TH mode entries reviewed.

Identity binding, key custody, time evidence and protected originals are appropriate. Typed date is not automatically trusted time. Valid signature does not alone prove human actor, intent or delivery. No universal legal checklist claimed. Expanded Info uses the same reviewed Reading explanations; lesson outcomes, prerequisites and reference scope reviewed.

Evidence: ISC2 Update 2026/Domain 1/Domain 1.md — §4.1 non-repudiation; key and evidence management; ISC2 Update 2026/Domain 1/D1 Surm.md — §4.2; [FIPS 186-5 definition: third-party-verifiable integrity and origin](https://csrc.nist.gov/glossary/term/non_repudiation); [Abstract: unauthorized modification, signatory authentication, third-party evidence](https://csrc.nist.gov/pubs/fips/186-5/final); [Abstract: key protection and management scope](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final).

Findings: No new issue identified in this review.

### lesson-d1-03-non-repudiation / slide-06-evaluate-the-claim

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-03-non-repudiation.json`. All six EN/TH mode entries reviewed.

Disputed access, signed content, actor and receipt are correctly distinguished. Preserve both copies and check correct data/key; no unjustified attribution. FC-009 removes stale six-slide authoring history. Expanded Info uses the same reviewed Reading explanations; lesson outcomes, prerequisites and reference scope reviewed.

Evidence: ISC2 Update 2026/Domain 1/Domain 1.md — §4.1 non-repudiation; key and evidence management; ISC2 Update 2026/Domain 1/D1 Surm.md — §4.2; [FIPS 186-5 definition: third-party-verifiable integrity and origin](https://csrc.nist.gov/glossary/term/non_repudiation); [Abstract: unauthorized modification, signatory authentication, third-party evidence](https://csrc.nist.gov/pubs/fips/186-5/final); [Abstract: key protection and management scope](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final).

Findings: FC-009.

### lesson-d1-03-non-repudiation / slide-07-ai-action-evidence

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-03-non-repudiation.json`. All six EN/TH mode entries reviewed.

Service credential, T104 priority permission and evt204 accounting trace correctly map AAA. Human oversight remains required; model/config and approval context matter; signed record does not alone prove human intent or liability. Data-minimized protected logs are appropriate. Expanded Info uses the same reviewed Reading explanations; lesson outcomes, prerequisites and reference scope reviewed.

Evidence: ISC2 Update 2026/Domain 1/Domain 1.md — §4.1 non-repudiation; key and evidence management; ISC2 Update 2026/Domain 1/D1 Surm.md — §4.2; [FIPS 186-5 definition: third-party-verifiable integrity and origin](https://csrc.nist.gov/glossary/term/non_repudiation); [Abstract: unauthorized modification, signatory authentication, third-party evidence](https://csrc.nist.gov/pubs/fips/186-5/final); [Abstract: key protection and management scope](https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final).

Findings: No new issue identified in this review.

### lesson-d1-04-privacy / slide-01-secure-is-not-enough

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-04-privacy.json`. All six EN/TH mode entries reviewed.

Secure encrypted storage and staff authorization do not justify unrelated reuse. Confidentiality is one protection; privacy includes purpose, transparency and effects of authorized processing. EN/TH examples agree with NIST privacy-risk definition. Reading explanations reused in expanded Info; lesson outcomes, prerequisites and reference scope reviewed in both languages.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§8–14 privacy, roles, inventory, retention and conditional erasure; ISC2 Update 2026/Domain 1/Domain 1.md — §4.2 privacy; CIA distinction; [Identifiable data, pseudonymisation and controller/processor definitions](https://commission.europa.eu/law/law-topic/data-protection/data-protection-explained_en); [Purpose limitation, minimisation, storage limitation and transparency](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en); [Lawfulness of processing: multiple grounds, consent not exclusive](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/legal-grounds-processing-data_en); [Storage limitation; no specific retention periods for every type](https://dataprotection.ie/en/faqs/responsibilities-data-controllers/how-long-should-personal-data-be-held-meet-obligations-imposed-gdpr); [How do I respond to a request for erasure? exceptions and recipients](https://www.edpb.europa.eu/sme/find-practical-info/faq_en); [Authorized processing can cause privacy harms](https://csrc.nist.gov/glossary/term/info_system_related_privacy_risks).

Findings: No new issue identified in this review.

### lesson-d1-04-privacy / slide-02-recognize-personal-data

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-04-privacy.json`. All six EN/TH mode entries reviewed.

Identifiability includes linked records; removing a name or encrypting recoverable data is not anonymisation. Pseudonymisation link distinguished. EU context and jurisdiction qualification explicit. Paired direct/linked/protected examples match EC explanation. Reading explanations reused in expanded Info; lesson outcomes, prerequisites and reference scope reviewed in both languages.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§8–14 privacy, roles, inventory, retention and conditional erasure; ISC2 Update 2026/Domain 1/Domain 1.md — §4.2 privacy; CIA distinction; [Identifiable data, pseudonymisation and controller/processor definitions](https://commission.europa.eu/law/law-topic/data-protection/data-protection-explained_en); [Purpose limitation, minimisation, storage limitation and transparency](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en); [Lawfulness of processing: multiple grounds, consent not exclusive](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/legal-grounds-processing-data_en); [Storage limitation; no specific retention periods for every type](https://dataprotection.ie/en/faqs/responsibilities-data-controllers/how-long-should-personal-data-be-held-meet-obligations-imposed-gdpr); [How do I respond to a request for erasure? exceptions and recipients](https://www.edpb.europa.eu/sme/find-practical-info/faq_en); [Authorized processing can cause privacy harms](https://csrc.nist.gov/glossary/term/info_system_related_privacy_risks).

Findings: No new issue identified in this review.

### lesson-d1-04-privacy / slide-03-roles-and-responsibility

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-04-privacy.json`. All six EN/TH mode entries reviewed.

Mali data subject, shop controller of purpose/means, instructed contracted service processor: correct conditional example. Cloud provider not automatically processor for every activity; ownership does not erase individual rights. EN/TH decision criteria agree. Reading explanations reused in expanded Info; lesson outcomes, prerequisites and reference scope reviewed in both languages.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§8–14 privacy, roles, inventory, retention and conditional erasure; ISC2 Update 2026/Domain 1/Domain 1.md — §4.2 privacy; CIA distinction; [Identifiable data, pseudonymisation and controller/processor definitions](https://commission.europa.eu/law/law-topic/data-protection/data-protection-explained_en); [Purpose limitation, minimisation, storage limitation and transparency](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en); [Lawfulness of processing: multiple grounds, consent not exclusive](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/legal-grounds-processing-data_en); [Storage limitation; no specific retention periods for every type](https://dataprotection.ie/en/faqs/responsibilities-data-controllers/how-long-should-personal-data-be-held-meet-obligations-imposed-gdpr); [How do I respond to a request for erasure? exceptions and recipients](https://www.edpb.europa.eu/sme/find-practical-info/faq_en); [Authorized processing can cause privacy harms](https://csrc.nist.gov/glossary/term/info_system_related_privacy_risks).

Findings: No new issue identified in this review.

### lesson-d1-04-privacy / slide-04-purpose-and-minimization

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-04-privacy.json`. All six EN/TH mode entries reviewed.

Delivery address/order reference necessary for authored purpose, unrelated health history not necessary. Encryption cannot replace minimisation. Consent is not the sole legal basis, and existing possession does not authorize every reuse. EC principles and legal-grounds page confirm. Reading explanations reused in expanded Info; lesson outcomes, prerequisites and reference scope reviewed in both languages.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§8–14 privacy, roles, inventory, retention and conditional erasure; ISC2 Update 2026/Domain 1/Domain 1.md — §4.2 privacy; CIA distinction; [Identifiable data, pseudonymisation and controller/processor definitions](https://commission.europa.eu/law/law-topic/data-protection/data-protection-explained_en); [Purpose limitation, minimisation, storage limitation and transparency](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en); [Lawfulness of processing: multiple grounds, consent not exclusive](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/legal-grounds-processing-data_en); [Storage limitation; no specific retention periods for every type](https://dataprotection.ie/en/faqs/responsibilities-data-controllers/how-long-should-personal-data-be-held-meet-obligations-imposed-gdpr); [How do I respond to a request for erasure? exceptions and recipients](https://www.edpb.europa.eu/sme/find-practical-info/faq_en); [Authorized processing can cause privacy harms](https://csrc.nist.gov/glossary/term/info_system_related_privacy_risks).

Findings: No new issue identified in this review.

### lesson-d1-04-privacy / slide-05-inventory-and-copies

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-04-privacy.json`. All six EN/TH mode entries reviewed.

Inventory locates data, exports and contracted recipients; retention decides duration. Copies/backups require handling plan and deletion of visible account does not demonstrate removal of all relevant copies. No demand for immediate deletion of every backup implied. EN/TH map and explanation agree. Reading explanations reused in expanded Info; lesson outcomes, prerequisites and reference scope reviewed in both languages.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§8–14 privacy, roles, inventory, retention and conditional erasure; ISC2 Update 2026/Domain 1/Domain 1.md — §4.2 privacy; CIA distinction; [Identifiable data, pseudonymisation and controller/processor definitions](https://commission.europa.eu/law/law-topic/data-protection/data-protection-explained_en); [Purpose limitation, minimisation, storage limitation and transparency](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en); [Lawfulness of processing: multiple grounds, consent not exclusive](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/legal-grounds-processing-data_en); [Storage limitation; no specific retention periods for every type](https://dataprotection.ie/en/faqs/responsibilities-data-controllers/how-long-should-personal-data-be-held-meet-obligations-imposed-gdpr); [How do I respond to a request for erasure? exceptions and recipients](https://www.edpb.europa.eu/sme/find-practical-info/faq_en); [Authorized processing can cause privacy harms](https://csrc.nist.gov/glossary/term/info_system_related_privacy_risks).

Findings: No new issue identified in this review.

### lesson-d1-04-privacy / slide-06-retention-with-a-reason

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-04-privacy.json`. All six EN/TH mode entries reviewed.

Purpose, legal duties, authorized legal holds and review points appropriately govern retention. Irish DPC confirms no universal GDPR retention duration. Neither indefinite keeping nor immediate wholesale deletion is taught. EN/TH rule and outcomes match. Reading explanations reused in expanded Info; lesson outcomes, prerequisites and reference scope reviewed in both languages.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§8–14 privacy, roles, inventory, retention and conditional erasure; ISC2 Update 2026/Domain 1/Domain 1.md — §4.2 privacy; CIA distinction; [Identifiable data, pseudonymisation and controller/processor definitions](https://commission.europa.eu/law/law-topic/data-protection/data-protection-explained_en); [Purpose limitation, minimisation, storage limitation and transparency](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en); [Lawfulness of processing: multiple grounds, consent not exclusive](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/legal-grounds-processing-data_en); [Storage limitation; no specific retention periods for every type](https://dataprotection.ie/en/faqs/responsibilities-data-controllers/how-long-should-personal-data-be-held-meet-obligations-imposed-gdpr); [How do I respond to a request for erasure? exceptions and recipients](https://www.edpb.europa.eu/sme/find-practical-info/faq_en); [Authorized processing can cause privacy harms](https://csrc.nist.gov/glossary/term/info_system_related_privacy_risks).

Findings: No new issue identified in this review.

### lesson-d1-04-privacy / slide-07-conditional-erasure

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-04-privacy.json`. All six EN/TH mode entries reviewed.

Erasure has grounds and exceptions, including legal duties/claims. Necessary data may remain but not all data forever; proportional requester verification, copies/recipient coordination and communication appropriate. EU example clearly scoped; no invented universal deadline. EDPB confirms exceptions. Reading explanations reused in expanded Info; lesson outcomes, prerequisites and reference scope reviewed in both languages.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§8–14 privacy, roles, inventory, retention and conditional erasure; ISC2 Update 2026/Domain 1/Domain 1.md — §4.2 privacy; CIA distinction; [Identifiable data, pseudonymisation and controller/processor definitions](https://commission.europa.eu/law/law-topic/data-protection/data-protection-explained_en); [Purpose limitation, minimisation, storage limitation and transparency](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en); [Lawfulness of processing: multiple grounds, consent not exclusive](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/legal-grounds-processing-data_en); [Storage limitation; no specific retention periods for every type](https://dataprotection.ie/en/faqs/responsibilities-data-controllers/how-long-should-personal-data-be-held-meet-obligations-imposed-gdpr); [How do I respond to a request for erasure? exceptions and recipients](https://www.edpb.europa.eu/sme/find-practical-info/faq_en); [Authorized processing can cause privacy harms](https://csrc.nist.gov/glossary/term/info_system_related_privacy_risks).

Findings: No new issue identified in this review.

### lesson-d1-04-privacy / slide-08-evaluate-a-new-use

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-04-privacy.json`. All six EN/TH mode entries reviewed.

Support-ticket training reuse requires purpose/legal-basis/transparency/role/minimisation/retention review; authorized reading is not blanket training permission. Free text can identify people after name removal. No blanket AI prohibition or consent shortcut. Renderer reveals row 2 reasoning; no MC distractors or fabricated key. Reading explanations reused in expanded Info; lesson outcomes, prerequisites and reference scope reviewed in both languages.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§8–14 privacy, roles, inventory, retention and conditional erasure; ISC2 Update 2026/Domain 1/Domain 1.md — §4.2 privacy; CIA distinction; [Identifiable data, pseudonymisation and controller/processor definitions](https://commission.europa.eu/law/law-topic/data-protection/data-protection-explained_en); [Purpose limitation, minimisation, storage limitation and transparency](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en); [Lawfulness of processing: multiple grounds, consent not exclusive](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/legal-grounds-processing-data_en); [Storage limitation; no specific retention periods for every type](https://dataprotection.ie/en/faqs/responsibilities-data-controllers/how-long-should-personal-data-be-held-meet-obligations-imposed-gdpr); [How do I respond to a request for erasure? exceptions and recipients](https://www.edpb.europa.eu/sme/find-practical-info/faq_en); [Authorized processing can cause privacy harms](https://csrc.nist.gov/glossary/term/info_system_related_privacy_risks).

Findings: No new issue identified in this review.

### lesson-d1-05-risk-foundations / slide-01-potential-harm

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-05-risk-foundations.json`. All six EN/TH mode entries reviewed.

Risk precedes incidents; clinic dependency and possible exploitation define potential harm, not a confirmed attack. Scope/time/affected people matter. No promise of preventing all events. EN/TH agree. Paired Reading and shared expanded Info explanations, lesson outcomes/prerequisites and reference-scope qualifications reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§15–16 risk lifecycle and identification; §§23–24 monitoring/reporting; ISC2 Update 2026/Domain 1/Domain 1.md — §1 terms; §§5.1–5.2 likelihood/impact and process; [§2.3.1 threat/source, risk factors, uncertainty; PDF text archived](https://csrc.nist.gov/pubs/sp/800/30/r1/final); [Risk framing context and monitoring effectiveness/changed conditions; PDF text archived](https://csrc.nist.gov/pubs/sp/800/39/final).

Findings: No new issue identified in this review.

### lesson-d1-05-risk-foundations / slide-02-connect-the-scenario

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-05-risk-foundations.json`. All six EN/TH mode entries reviewed.

Asset, relevant vulnerability, attacker source versus exploitation event and operational impact distinguished. Missing update must actually be relevant; exposure, exploitability and controls affect plausibility. Arrow chain is not a guaranteed outcome or formula. People/services included as assets. Paired Reading and shared expanded Info explanations, lesson outcomes/prerequisites and reference-scope qualifications reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§15–16 risk lifecycle and identification; §§23–24 monitoring/reporting; ISC2 Update 2026/Domain 1/Domain 1.md — §1 terms; §§5.1–5.2 likelihood/impact and process; [§2.3.1 threat/source, risk factors, uncertainty; PDF text archived](https://csrc.nist.gov/pubs/sp/800/30/r1/final); [Risk framing context and monitoring effectiveness/changed conditions; PDF text archived](https://csrc.nist.gov/pubs/sp/800/39/final).

Findings: No new issue identified in this review.

### lesson-d1-05-risk-foundations / slide-03-separate-the-terms

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-05-risk-foundations.json`. All six EN/TH mode entries reviewed.

Flood source/event, vulnerable basement placement and service impact illustrate distinct roles. Non-malicious threats included; scan result not complete risk assessment or proof of harm. EN/TH terms and feedback agree. Paired Reading and shared expanded Info explanations, lesson outcomes/prerequisites and reference-scope qualifications reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§15–16 risk lifecycle and identification; §§23–24 monitoring/reporting; ISC2 Update 2026/Domain 1/Domain 1.md — §1 terms; §§5.1–5.2 likelihood/impact and process; [§2.3.1 threat/source, risk factors, uncertainty; PDF text archived](https://csrc.nist.gov/pubs/sp/800/30/r1/final); [Risk framing context and monitoring effectiveness/changed conditions; PDF text archived](https://csrc.nist.gov/pubs/sp/800/39/final).

Findings: No new issue identified in this review.

### lesson-d1-05-risk-foundations / slide-04-likelihood-and-impact

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-05-risk-foundations.json`. All six EN/TH mode entries reviewed.

Likelihood and impact distinct, contextual and time-bounded; low probability can still deserve attention. Severity/CVSS/patch count not total business risk. Ordinal multiplication warning and non-official diagram qualification appropriate. Paired Reading and shared expanded Info explanations, lesson outcomes/prerequisites and reference-scope qualifications reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§15–16 risk lifecycle and identification; §§23–24 monitoring/reporting; ISC2 Update 2026/Domain 1/Domain 1.md — §1 terms; §§5.1–5.2 likelihood/impact and process; [§2.3.1 threat/source, risk factors, uncertainty; PDF text archived](https://csrc.nist.gov/pubs/sp/800/30/r1/final); [Risk framing context and monitoring effectiveness/changed conditions; PDF text archived](https://csrc.nist.gov/pubs/sp/800/39/final).

Findings: No new issue identified in this review.

### lesson-d1-05-risk-foundations / slide-05-continuous-lifecycle

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-05-risk-foundations.json`. All six EN/TH mode entries reviewed.

Course identify/assess/respond/monitor loop reconciles source five-step listing by communicating throughout. NIST framing model explicitly different, not misrepresented as identical or ISC2-mandated. Response options only introduced, not falsely claimed complete coverage. Paired Reading and shared expanded Info explanations, lesson outcomes/prerequisites and reference-scope qualifications reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§15–16 risk lifecycle and identification; §§23–24 monitoring/reporting; ISC2 Update 2026/Domain 1/Domain 1.md — §1 terms; §§5.1–5.2 likelihood/impact and process; [§2.3.1 threat/source, risk factors, uncertainty; PDF text archived](https://csrc.nist.gov/pubs/sp/800/30/r1/final); [Risk framing context and monitoring effectiveness/changed conditions; PDF text archived](https://csrc.nist.gov/pubs/sp/800/39/final).

Findings: No new issue identified in this review.

### lesson-d1-05-risk-foundations / slide-06-write-a-risk-statement

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-05-risk-foundations.json`. All six EN/TH mode entries reviewed.

Finding links plausible exploit to booking disruption and follow-up ownership. Affected version/exposure require verification; unknown likelihood not zero and no invented rating. Illustrative record not universal template. EN/TH conclusions agree. Paired Reading and shared expanded Info explanations, lesson outcomes/prerequisites and reference-scope qualifications reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§15–16 risk lifecycle and identification; §§23–24 monitoring/reporting; ISC2 Update 2026/Domain 1/Domain 1.md — §1 terms; §§5.1–5.2 likelihood/impact and process; [§2.3.1 threat/source, risk factors, uncertainty; PDF text archived](https://csrc.nist.gov/pubs/sp/800/30/r1/final); [Risk framing context and monitoring effectiveness/changed conditions; PDF text archived](https://csrc.nist.gov/pubs/sp/800/39/final).

Findings: No new issue identified in this review.

### lesson-d1-05-risk-foundations / slide-07-review-after-change

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-05-risk-foundations.json`. All six EN/TH mode entries reviewed.

Both before-missing-update and after-installed states reviewed; renderer uses corresponding authored evidence row. Installing update requires effectiveness/service-effects and remaining-risk review. No automatic zero risk, acceptance or numeric reduction claimed. Static comparison not real scanning/patching. Paired Reading and shared expanded Info explanations, lesson outcomes/prerequisites and reference-scope qualifications reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§15–16 risk lifecycle and identification; §§23–24 monitoring/reporting; ISC2 Update 2026/Domain 1/Domain 1.md — §1 terms; §§5.1–5.2 likelihood/impact and process; [§2.3.1 threat/source, risk factors, uncertainty; PDF text archived](https://csrc.nist.gov/pubs/sp/800/30/r1/final); [Risk framing context and monitoring effectiveness/changed conditions; PDF text archived](https://csrc.nist.gov/pubs/sp/800/39/final).

Findings: No new issue identified in this review.

### lesson-d1-05-risk-foundations / slide-08-communicate-for-a-decision

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-05-risk-foundations.json`. All six EN/TH mode entries reviewed.

Report connects technical evidence, uncertainty and consequence to authorized decisions, owners and review triggers. Technician patching not business acceptance. Communication throughout coherent with lifecycle; does not claim eight slides complete all processes. Paired Reading and shared expanded Info explanations, lesson outcomes/prerequisites and reference-scope qualifications reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§15–16 risk lifecycle and identification; §§23–24 monitoring/reporting; ISC2 Update 2026/Domain 1/Domain 1.md — §1 terms; §§5.1–5.2 likelihood/impact and process; [§2.3.1 threat/source, risk factors, uncertainty; PDF text archived](https://csrc.nist.gov/pubs/sp/800/30/r1/final); [Risk framing context and monitoring effectiveness/changed conditions; PDF text archived](https://csrc.nist.gov/pubs/sp/800/39/final).

Findings: No new issue identified in this review.

### lesson-d1-06-assessment / slide-01-choose-the-method

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-06-assessment.json`. All six EN/TH mode entries reviewed.

Qualitative criteria, meaningful quantitative units and ordinal/semi-quantitative labels distinguished. Neither numbers nor labels automatically reliable; assumptions and uncertainty explicit. Calculation enrichment not claimed official exam mandate. EN/TH equivalent. Actual paired Presentation and Reading explanations, shared expanded Info, outcomes/prerequisites and source scope reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§17–21 AV/EF/SLE/ARO/ALE worked examples; ISC2 Update 2026/Domain 1/Domain 1.md — §§5.1–5.2 context and differing methods; [§2.3 uncertainty; §2.3.2 assessment approaches; archived PDF text](https://csrc.nist.gov/pubs/sp/800/30/r1/final); [December 2025 §2.2.4 per-occurrence versus annual loss and frequency; archived PDF text](https://csrc.nist.gov/pubs/ir/8286/a/r1/final); [Objective 1.2 scope, no explicit AV/EF formula mandate](https://www.isc2.org/certifications/cc/cc-certification-exam-outline).

Findings: No new issue identified in this review.

### lesson-d1-06-assessment / slide-02-define-the-criteria

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-06-assessment.json`. All six EN/TH mode entries reviewed.

High-impact clinic criterion explicitly authored, separate likelihood evidence/time basis required, unknown not silently low. No arbitrary multiplication or invented total rating. Agreed scales improve consistent judgments; EN/TH reasoning agree. Actual paired Presentation and Reading explanations, shared expanded Info, outcomes/prerequisites and source scope reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§17–21 AV/EF/SLE/ARO/ALE worked examples; ISC2 Update 2026/Domain 1/Domain 1.md — §§5.1–5.2 context and differing methods; [§2.3 uncertainty; §2.3.2 assessment approaches; archived PDF text](https://csrc.nist.gov/pubs/sp/800/30/r1/final); [December 2025 §2.2.4 per-occurrence versus annual loss and frequency; archived PDF text](https://csrc.nist.gov/pubs/ir/8286/a/r1/final); [Objective 1.2 scope, no explicit AV/EF formula mandate](https://www.isc2.org/certifications/cc/cc-certification-exam-outline).

Findings: No new issue identified in this review.

### lesson-d1-06-assessment / slide-03-estimate-one-loss

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-06-assessment.json`. All six EN/TH mode entries reviewed.

Verified 10000 × 0.50 = 5000 dollars/event. EF is loss fraction, not event probability. Valuation/loss scope and excluded downtime or secondary losses appropriately qualified. Ten segments represent value, not attacks. EN/TH percentages, formula and units match. Actual paired Presentation and Reading explanations, shared expanded Info, outcomes/prerequisites and source scope reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§17–21 AV/EF/SLE/ARO/ALE worked examples; ISC2 Update 2026/Domain 1/Domain 1.md — §§5.1–5.2 context and differing methods; [§2.3 uncertainty; §2.3.2 assessment approaches; archived PDF text](https://csrc.nist.gov/pubs/sp/800/30/r1/final); [December 2025 §2.2.4 per-occurrence versus annual loss and frequency; archived PDF text](https://csrc.nist.gov/pubs/ir/8286/a/r1/final); [Objective 1.2 scope, no explicit AV/EF formula mandate](https://www.isc2.org/certifications/cc/cc-certification-exam-outline).

Findings: No new issue identified in this review.

### lesson-d1-06-assessment / slide-04-annual-frequency

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-06-assessment.json`. All six EN/TH mode entries reviewed.

ARO is events/year, can exceed 1; 0.2 corresponds to long-run average one/five years, not a calendar promise or exact 20% annual probability. 0.5 and two/month→24/year conversions correct given continuing-rate assumption. Thai agrees and retains uncertainty. Actual paired Presentation and Reading explanations, shared expanded Info, outcomes/prerequisites and source scope reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§17–21 AV/EF/SLE/ARO/ALE worked examples; ISC2 Update 2026/Domain 1/Domain 1.md — §§5.1–5.2 context and differing methods; [§2.3 uncertainty; §2.3.2 assessment approaches; archived PDF text](https://csrc.nist.gov/pubs/sp/800/30/r1/final); [December 2025 §2.2.4 per-occurrence versus annual loss and frequency; archived PDF text](https://csrc.nist.gov/pubs/ir/8286/a/r1/final); [Objective 1.2 scope, no explicit AV/EF formula mandate](https://www.isc2.org/certifications/cc/cc-certification-exam-outline).

Findings: No new issue identified in this review.

### lesson-d1-06-assessment / slide-05-annualize-the-loss

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-06-assessment.json`. All six EN/TH mode entries reviewed.

Verified 5000 dollars/event × 2 events/year = 10000 dollars/year. Expected annual loss distinguished from guaranteed/maximum loss and control price. Repeat repair/replacement can exceed one asset value; scopes and double counting qualified. No official formula mandate invented. Actual paired Presentation and Reading explanations, shared expanded Info, outcomes/prerequisites and source scope reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§17–21 AV/EF/SLE/ARO/ALE worked examples; ISC2 Update 2026/Domain 1/Domain 1.md — §§5.1–5.2 context and differing methods; [§2.3 uncertainty; §2.3.2 assessment approaches; archived PDF text](https://csrc.nist.gov/pubs/sp/800/30/r1/final); [December 2025 §2.2.4 per-occurrence versus annual loss and frequency; archived PDF text](https://csrc.nist.gov/pubs/ir/8286/a/r1/final); [Objective 1.2 scope, no explicit AV/EF formula mandate](https://www.isc2.org/certifications/cc/cc-certification-exam-outline).

Findings: No new issue identified in this review.

### lesson-d1-06-assessment / slide-06-compare-like-with-like

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-06-assessment.json`. All six EN/TH mode entries reviewed.

Verified A 5000×2=10000/year; B 500×24=12000/year. Financial ordering not automatic whole-organization priority; safety/privacy/service and duties retained. Comparable currency/time/scope/controls required. Both languages consistent. Actual paired Presentation and Reading explanations, shared expanded Info, outcomes/prerequisites and source scope reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§17–21 AV/EF/SLE/ARO/ALE worked examples; ISC2 Update 2026/Domain 1/Domain 1.md — §§5.1–5.2 context and differing methods; [§2.3 uncertainty; §2.3.2 assessment approaches; archived PDF text](https://csrc.nist.gov/pubs/sp/800/30/r1/final); [December 2025 §2.2.4 per-occurrence versus annual loss and frequency; archived PDF text](https://csrc.nist.gov/pubs/ir/8286/a/r1/final); [Objective 1.2 scope, no explicit AV/EF formula mandate](https://www.isc2.org/certifications/cc/cc-certification-exam-outline).

Findings: No new issue identified in this review.

### lesson-d1-06-assessment / slide-07-test-the-estimate

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-06-assessment.json`. All six EN/TH mode entries reviewed.

Both ARO2/ALE10000 and ARO4/ALE20000 authored states read. Renderer constants AV10000 EF0.5 and selected frequency produce correct bilingual amount; exact arithmetic does not validate inputs. Sensitivity not measured risk/control outcome; sparse history not proof of zero. Actual paired Presentation and Reading explanations, shared expanded Info, outcomes/prerequisites and source scope reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§17–21 AV/EF/SLE/ARO/ALE worked examples; ISC2 Update 2026/Domain 1/Domain 1.md — §§5.1–5.2 context and differing methods; [§2.3 uncertainty; §2.3.2 assessment approaches; archived PDF text](https://csrc.nist.gov/pubs/sp/800/30/r1/final); [December 2025 §2.2.4 per-occurrence versus annual loss and frequency; archived PDF text](https://csrc.nist.gov/pubs/ir/8286/a/r1/final); [Objective 1.2 scope, no explicit AV/EF formula mandate](https://www.isc2.org/certifications/cc/cc-certification-exam-outline).

Findings: No new issue identified in this review.

### lesson-d1-06-assessment / slide-08-prioritize-with-context

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-06-assessment.json`. All six EN/TH mode entries reviewed.

Assumptions, exclusions, changing inputs and wider harms remain visible; highest ALE not universal priority, lower ALE not automatic acceptance. Responsible owner receives uncertainty/review needs. Response/acceptance deferred without pretending complete Objective 1.2 coverage. Actual paired Presentation and Reading explanations, shared expanded Info, outcomes/prerequisites and source scope reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§17–21 AV/EF/SLE/ARO/ALE worked examples; ISC2 Update 2026/Domain 1/Domain 1.md — §§5.1–5.2 context and differing methods; [§2.3 uncertainty; §2.3.2 assessment approaches; archived PDF text](https://csrc.nist.gov/pubs/sp/800/30/r1/final); [December 2025 §2.2.4 per-occurrence versus annual loss and frequency; archived PDF text](https://csrc.nist.gov/pubs/ir/8286/a/r1/final); [Objective 1.2 scope, no explicit AV/EF formula mandate](https://www.isc2.org/certifications/cc/cc-certification-exam-outline).

Findings: No new issue identified in this review.

### lesson-d1-07-risk-response / slide-01-four-response-paths

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-07-risk-response.json`. All six EN/TH mode entries reviewed.

Avoid, mitigate, share/transfer and informed acceptance correctly distinct; can combine responses. Course grouping explicitly differs from NIST separate sharing/transfer, no universal ISC2 count asserted. Authority required. EN/TH all four rows agree. Actual paired Presentation, Reading/shared expanded Info and lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§22–24 response, monitoring and communication; ISC2 Update 2026/Domain 1/Domain 1.md — §§5.3–5.5 treatment, inherent/residual and supplemental appetite/tolerance; [§§3.3–3.4; Appendix H.2–H.5 acceptance, avoidance, sharing/transfer, mitigation; PDF text archived](https://csrc.nist.gov/pubs/sp/800/39/final).

Findings: No new issue identified in this review.

### lesson-d1-07-risk-response / slide-02-stop-or-reduce

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-07-risk-response.json`. All six EN/TH mode entries reviewed.

Optional connection avoidance removes specified exposure, not all organizational risk. Needed connection with verified safeguards is mitigation; alternatives and lost utility considered. Spending money not defining distinction. Both languages keep scenario boundaries. Actual paired Presentation, Reading/shared expanded Info and lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§22–24 response, monitoring and communication; ISC2 Update 2026/Domain 1/Domain 1.md — §§5.3–5.5 treatment, inherent/residual and supplemental appetite/tolerance; [§§3.3–3.4; Appendix H.2–H.5 acceptance, avoidance, sharing/transfer, mitigation; PDF text archived](https://csrc.nist.gov/pubs/sp/800/39/final).

Findings: No new issue identified in this review.

### lesson-d1-07-risk-response / slide-03-share-the-consequences

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-07-risk-response.json`. All six EN/TH mode entries reviewed.

Insurance may share covered financial loss subject to limits/exclusions; no technical prevention or guaranteed availability. Outsourcing does not automatically transfer every duty/accountability. Retained risk and supplier performance remain. EN/TH qualified equivalently. Actual paired Presentation, Reading/shared expanded Info and lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§22–24 response, monitoring and communication; ISC2 Update 2026/Domain 1/Domain 1.md — §§5.3–5.5 treatment, inherent/residual and supplemental appetite/tolerance; [§§3.3–3.4; Appendix H.2–H.5 acceptance, avoidance, sharing/transfer, mitigation; PDF text archived](https://csrc.nist.gov/pubs/sp/800/39/final).

Findings: No new issue identified in this review.

### lesson-d1-07-risk-response / slide-04-authorize-acceptance

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-07-risk-response.json`. All six EN/TH mode entries reviewed.

Acceptance knowingly retains specified risk with appropriate authority and documented rationale/review, not silence. Low probability/cost considerations not automatic approvals or waivers of obligations. Patch installer not necessarily risk owner. Appropriate handling of severe low-frequency harm. Actual paired Presentation, Reading/shared expanded Info and lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§22–24 response, monitoring and communication; ISC2 Update 2026/Domain 1/Domain 1.md — §§5.3–5.5 treatment, inherent/residual and supplemental appetite/tolerance; [§§3.3–3.4; Appendix H.2–H.5 acceptance, avoidance, sharing/transfer, mitigation; PDF text archived](https://csrc.nist.gov/pubs/sp/800/39/final).

Findings: No new issue identified in this review.

### lesson-d1-07-risk-response / slide-05-risk-that-remains

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-07-risk-response.json`. All six EN/TH mode entries reviewed.

Inherent/control baseline and residual/current risk carefully separated. MFA only reduces some takeover paths; no percent reduction or purchase-cost subtraction. Remaining risk not automatically acceptable. EN/TH consistent with earlier authentication and risk lessons. Actual paired Presentation, Reading/shared expanded Info and lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§22–24 response, monitoring and communication; ISC2 Update 2026/Domain 1/Domain 1.md — §§5.3–5.5 treatment, inherent/residual and supplemental appetite/tolerance; [§§3.3–3.4; Appendix H.2–H.5 acceptance, avoidance, sharing/transfer, mitigation; PDF text archived](https://csrc.nist.gov/pubs/sp/800/39/final).

Findings: No new issue identified in this review.

### lesson-d1-07-risk-response / slide-06-use-organisational-limits

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-07-risk-response.json`. All six EN/TH mode entries reviewed.

Appetite broad willingness and tolerance specific limits/variation clearly scoped to organization terms. Supplemental terminology not fabricated official subtopic or universal threshold. Escalation outside authority appropriate; cannot silently enlarge tolerance. Actual paired Presentation, Reading/shared expanded Info and lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§22–24 response, monitoring and communication; ISC2 Update 2026/Domain 1/Domain 1.md — §§5.3–5.5 treatment, inherent/residual and supplemental appetite/tolerance; [§§3.3–3.4; Appendix H.2–H.5 acceptance, avoidance, sharing/transfer, mitigation; PDF text archived](https://csrc.nist.gov/pubs/sp/800/39/final).

Findings: No new issue identified in this review.

### lesson-d1-07-risk-response / slide-07-compare-treatment-value

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-07-risk-response.json`. All six EN/TH mode entries reviewed.

Verified annual loss reduction 10000−4000=6000 and net expected benefit 6000−3000=3000/year. All values explicitly authored assumptions; deployment/operation/maintenance and time consistency included. Benefit not effectiveness proof, feasibility guarantee or permission to ignore mandatory harms. Actual paired Presentation, Reading/shared expanded Info and lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§22–24 response, monitoring and communication; ISC2 Update 2026/Domain 1/Domain 1.md — §§5.3–5.5 treatment, inherent/residual and supplemental appetite/tolerance; [§§3.3–3.4; Appendix H.2–H.5 acceptance, avoidance, sharing/transfer, mitigation; PDF text archived](https://csrc.nist.gov/pubs/sp/800/39/final).

Findings: No new issue identified in this review.

### lesson-d1-07-risk-response / slide-08-clinic-decision

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-07-risk-response.json`. All six EN/TH mode entries reviewed.

All three choices, their bilingual explanations and renderer index mapping read. Recommended index1 requests effectiveness evidence, reassessment and authorized decision. Immediate closure and insurance distractors do not fill evidence/authority gaps. No predetermined final risk rating. Actual paired Presentation, Reading/shared expanded Info and lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§22–24 response, monitoring and communication; ISC2 Update 2026/Domain 1/Domain 1.md — §§5.3–5.5 treatment, inherent/residual and supplemental appetite/tolerance; [§§3.3–3.4; Appendix H.2–H.5 acceptance, avoidance, sharing/transfer, mitigation; PDF text archived](https://csrc.nist.gov/pubs/sp/800/39/final).

Findings: No new issue identified in this review.

### lesson-d1-07-risk-response / slide-09-monitor-and-reassess

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-07-risk-response.json`. All six EN/TH mode entries reviewed.

Implementation/compliance, effectiveness and changed context appropriately monitored; scheduled/event-triggered reviews include accepted risk. No invented universal interval or need to rebuild every assessment on every change. Significant changes escalated under process. Actual paired Presentation, Reading/shared expanded Info and lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§22–24 response, monitoring and communication; ISC2 Update 2026/Domain 1/Domain 1.md — §§5.3–5.5 treatment, inherent/residual and supplemental appetite/tolerance; [§§3.3–3.4; Appendix H.2–H.5 acceptance, avoidance, sharing/transfer, mitigation; PDF text archived](https://csrc.nist.gov/pubs/sp/800/39/final).

Findings: No new issue identified in this review.

### lesson-d1-07-risk-response / slide-10-communicate-the-decision

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-07-risk-response.json`. All six EN/TH mode entries reviewed.

Risk owner, action owner and acceptance authority may differ. Evidence, uncertainties, approver/rationale, due date and triggers support traceable follow-up, not proof of effectiveness/acceptance. Authorized audience/channel qualification appropriate. EN/TH equivalent. Actual paired Presentation, Reading/shared expanded Info and lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§22–24 response, monitoring and communication; ISC2 Update 2026/Domain 1/Domain 1.md — §§5.3–5.5 treatment, inherent/residual and supplemental appetite/tolerance; [§§3.3–3.4; Appendix H.2–H.5 acceptance, avoidance, sharing/transfer, mitigation; PDF text archived](https://csrc.nist.gov/pubs/sp/800/39/final).

Findings: No new issue identified in this review.

### lesson-d1-08-governance / slide-01-govern-security

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-08-governance.json`. All six EN/TH mode entries reviewed.

Governance direction, oversight and accountability align security with clinic services and data; tool counts insufficient. Accountability as answerability distinguished from technical logs. EN/TH meaningful equivalence; roles not universal. Actual Presentation, Reading/shared Info and bilingual lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§25–26 governance, applicability and examples; ISC2 Update 2026/Domain 1/Domain 1.md — §7 governance; §7.2 GRC and compliance/security distinction; [Why Govern was added: alignment, roles/responsibilities, expectations and legal obligations. Technical corroboration, not a framework lesson. Fresh HTML/text archived in governance-* files.](https://www.nist.gov/cyberframework/faqs); [Does the GDPR apply to your organisation? EU/EEA establishment, targeted services and monitoring; scope is fact-dependent. Fresh HTML/text archived in governance-* files.](https://www.edpb.europa.eu/sme/learn-the-basics/data-protection-basics_en); [HIPAA Rules apply to defined covered entities and business associates, not all health-data holders. Fresh HTML/text archived in governance-* files.](https://www.hhs.gov/hipaa/for-professionals/covered-entities/index.html); [Purpose, intended audience and compliance-program ownership. Industry standard, distinct from legislation. Fresh HTML/text archived in governance-* files.](https://www.pcisecuritystandards.org/standards/pci-dss/); [Merchant responsibilities, provider scope and shared duties; confirm requirements with compliance-accepting entity. Fresh HTML/text archived in governance-* files.](https://www.pcisecuritystandards.org/faqs/does-pci-dss-apply-to-merchants-who-outsource-all-payment-processing-operations-and-never-store-process-or-transmit-cardholder-data/).

Findings: No new issue identified in this review.

### lesson-d1-08-governance / slide-02-govern-and-manage

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-08-governance.json`. All six EN/TH mode entries reviewed.

Governance sets direction/authority/oversight; management resources implementation, operations execute and return evidence. Functional model not mandatory titles/board chain. One person can hold roles while authority stays explicit. No new segregation requirement invented. Actual Presentation, Reading/shared Info and bilingual lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§25–26 governance, applicability and examples; ISC2 Update 2026/Domain 1/Domain 1.md — §7 governance; §7.2 GRC and compliance/security distinction; [Why Govern was added: alignment, roles/responsibilities, expectations and legal obligations. Technical corroboration, not a framework lesson. Fresh HTML/text archived in governance-* files.](https://www.nist.gov/cyberframework/faqs); [Does the GDPR apply to your organisation? EU/EEA establishment, targeted services and monitoring; scope is fact-dependent. Fresh HTML/text archived in governance-* files.](https://www.edpb.europa.eu/sme/learn-the-basics/data-protection-basics_en); [HIPAA Rules apply to defined covered entities and business associates, not all health-data holders. Fresh HTML/text archived in governance-* files.](https://www.hhs.gov/hipaa/for-professionals/covered-entities/index.html); [Purpose, intended audience and compliance-program ownership. Industry standard, distinct from legislation. Fresh HTML/text archived in governance-* files.](https://www.pcisecuritystandards.org/standards/pci-dss/); [Merchant responsibilities, provider scope and shared duties; confirm requirements with compliance-accepting entity. Fresh HTML/text archived in governance-* files.](https://www.pcisecuritystandards.org/faqs/does-pci-dss-apply-to-merchants-who-outsource-all-payment-processing-operations-and-never-store-process-or-transmit-cardholder-data/).

Findings: No new issue identified in this review.

### lesson-d1-08-governance / slide-03-sources-of-obligations

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-08-governance.json`. All six EN/TH mode entries reviewed.

GDPR regulation, HIPAA US law/rules and PCI DSS industry standard not all legislation. Contracts/legislation may incorporate standards; binding basis and issuer need checking. Correctly qualifies summary notes listing all three under requirements. EN/TH consistent. Actual Presentation, Reading/shared Info and bilingual lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§25–26 governance, applicability and examples; ISC2 Update 2026/Domain 1/Domain 1.md — §7 governance; §7.2 GRC and compliance/security distinction; [Why Govern was added: alignment, roles/responsibilities, expectations and legal obligations. Technical corroboration, not a framework lesson. Fresh HTML/text archived in governance-* files.](https://www.nist.gov/cyberframework/faqs); [Does the GDPR apply to your organisation? EU/EEA establishment, targeted services and monitoring; scope is fact-dependent. Fresh HTML/text archived in governance-* files.](https://www.edpb.europa.eu/sme/learn-the-basics/data-protection-basics_en); [HIPAA Rules apply to defined covered entities and business associates, not all health-data holders. Fresh HTML/text archived in governance-* files.](https://www.hhs.gov/hipaa/for-professionals/covered-entities/index.html); [Purpose, intended audience and compliance-program ownership. Industry standard, distinct from legislation. Fresh HTML/text archived in governance-* files.](https://www.pcisecuritystandards.org/standards/pci-dss/); [Merchant responsibilities, provider scope and shared duties; confirm requirements with compliance-accepting entity. Fresh HTML/text archived in governance-* files.](https://www.pcisecuritystandards.org/faqs/does-pci-dss-apply-to-merchants-who-outsource-all-payment-processing-operations-and-never-store-process-or-transmit-cardholder-data/).

Findings: No new issue identified in this review.

### lesson-d1-08-governance / slide-04-establish-applicability

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-08-governance.json`. All six EN/TH mode entries reviewed.

Jurisdiction, entity/activity, data flow and contracts jointly determine applicability. Nationality, cloud location or vendor badge alone not universal test. Unknowns routed for specialist review; multiple duties may apply. Reassess changes, not claim actual clinic exemption/compliance. Actual Presentation, Reading/shared Info and bilingual lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§25–26 governance, applicability and examples; ISC2 Update 2026/Domain 1/Domain 1.md — §7 governance; §7.2 GRC and compliance/security distinction; [Why Govern was added: alignment, roles/responsibilities, expectations and legal obligations. Technical corroboration, not a framework lesson. Fresh HTML/text archived in governance-* files.](https://www.nist.gov/cyberframework/faqs); [Does the GDPR apply to your organisation? EU/EEA establishment, targeted services and monitoring; scope is fact-dependent. Fresh HTML/text archived in governance-* files.](https://www.edpb.europa.eu/sme/learn-the-basics/data-protection-basics_en); [HIPAA Rules apply to defined covered entities and business associates, not all health-data holders. Fresh HTML/text archived in governance-* files.](https://www.hhs.gov/hipaa/for-professionals/covered-entities/index.html); [Purpose, intended audience and compliance-program ownership. Industry standard, distinct from legislation. Fresh HTML/text archived in governance-* files.](https://www.pcisecuritystandards.org/standards/pci-dss/); [Merchant responsibilities, provider scope and shared duties; confirm requirements with compliance-accepting entity. Fresh HTML/text archived in governance-* files.](https://www.pcisecuritystandards.org/faqs/does-pci-dss-apply-to-merchants-who-outsource-all-payment-processing-operations-and-never-store-process-or-transmit-cardholder-data/).

Findings: No new issue identified in this review.

### lesson-d1-08-governance / slide-05-bound-the-legal-examples

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-08-governance.json`. All six EN/TH mode entries reviewed.

EDPB establishment/targeted goods-services/monitoring grounds and HHS covered entity/business-associate scope accurately bounded. Citizenship alone not GDPR test; merely holding health data not HIPAA coverage. Full territorial/material analysis explicitly outside short example. EN/TH agree. Actual Presentation, Reading/shared Info and bilingual lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§25–26 governance, applicability and examples; ISC2 Update 2026/Domain 1/Domain 1.md — §7 governance; §7.2 GRC and compliance/security distinction; [Why Govern was added: alignment, roles/responsibilities, expectations and legal obligations. Technical corroboration, not a framework lesson. Fresh HTML/text archived in governance-* files.](https://www.nist.gov/cyberframework/faqs); [Does the GDPR apply to your organisation? EU/EEA establishment, targeted services and monitoring; scope is fact-dependent. Fresh HTML/text archived in governance-* files.](https://www.edpb.europa.eu/sme/learn-the-basics/data-protection-basics_en); [HIPAA Rules apply to defined covered entities and business associates, not all health-data holders. Fresh HTML/text archived in governance-* files.](https://www.hhs.gov/hipaa/for-professionals/covered-entities/index.html); [Purpose, intended audience and compliance-program ownership. Industry standard, distinct from legislation. Fresh HTML/text archived in governance-* files.](https://www.pcisecuritystandards.org/standards/pci-dss/); [Merchant responsibilities, provider scope and shared duties; confirm requirements with compliance-accepting entity. Fresh HTML/text archived in governance-* files.](https://www.pcisecuritystandards.org/faqs/does-pci-dss-apply-to-merchants-who-outsource-all-payment-processing-operations-and-never-store-process-or-transmit-cardholder-data/).

Findings: No new issue identified in this review.

### lesson-d1-08-governance / slide-06-payment-card-requirements

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-08-governance.json`. All six EN/TH mode entries reviewed.

PCI SSC current audience includes CHD/SAD storage/processing/transmission and CDE-security impact. Outsourced merchants retain provider evidence/agreement/shared-responsibility duties; validation with compliance-accepting entity. No universal SAQ/certification or standard-is-optional inference. Both languages technically equivalent. Actual Presentation, Reading/shared Info and bilingual lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§25–26 governance, applicability and examples; ISC2 Update 2026/Domain 1/Domain 1.md — §7 governance; §7.2 GRC and compliance/security distinction; [Why Govern was added: alignment, roles/responsibilities, expectations and legal obligations. Technical corroboration, not a framework lesson. Fresh HTML/text archived in governance-* files.](https://www.nist.gov/cyberframework/faqs); [Does the GDPR apply to your organisation? EU/EEA establishment, targeted services and monitoring; scope is fact-dependent. Fresh HTML/text archived in governance-* files.](https://www.edpb.europa.eu/sme/learn-the-basics/data-protection-basics_en); [HIPAA Rules apply to defined covered entities and business associates, not all health-data holders. Fresh HTML/text archived in governance-* files.](https://www.hhs.gov/hipaa/for-professionals/covered-entities/index.html); [Purpose, intended audience and compliance-program ownership. Industry standard, distinct from legislation. Fresh HTML/text archived in governance-* files.](https://www.pcisecuritystandards.org/standards/pci-dss/); [Merchant responsibilities, provider scope and shared duties; confirm requirements with compliance-accepting entity. Fresh HTML/text archived in governance-* files.](https://www.pcisecuritystandards.org/faqs/does-pci-dss-apply-to-merchants-who-outsource-all-payment-processing-operations-and-never-store-process-or-transmit-cardholder-data/).

Findings: No new issue identified in this review.

### lesson-d1-08-governance / slide-07-compliance-and-security

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-08-governance.json`. All six EN/TH mode entries reviewed.

Scoped/time-bounded compliance evidence not perfect/future security; strong control not all obligations satisfied. Prior payment assessment not automatic coverage for new AI processing. No permission to ignore mandatory duties based on perceived low risk. Coherent with risk/privacy lessons. Actual Presentation, Reading/shared Info and bilingual lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§25–26 governance, applicability and examples; ISC2 Update 2026/Domain 1/Domain 1.md — §7 governance; §7.2 GRC and compliance/security distinction; [Why Govern was added: alignment, roles/responsibilities, expectations and legal obligations. Technical corroboration, not a framework lesson. Fresh HTML/text archived in governance-* files.](https://www.nist.gov/cyberframework/faqs); [Does the GDPR apply to your organisation? EU/EEA establishment, targeted services and monitoring; scope is fact-dependent. Fresh HTML/text archived in governance-* files.](https://www.edpb.europa.eu/sme/learn-the-basics/data-protection-basics_en); [HIPAA Rules apply to defined covered entities and business associates, not all health-data holders. Fresh HTML/text archived in governance-* files.](https://www.hhs.gov/hipaa/for-professionals/covered-entities/index.html); [Purpose, intended audience and compliance-program ownership. Industry standard, distinct from legislation. Fresh HTML/text archived in governance-* files.](https://www.pcisecuritystandards.org/standards/pci-dss/); [Merchant responsibilities, provider scope and shared duties; confirm requirements with compliance-accepting entity. Fresh HTML/text archived in governance-* files.](https://www.pcisecuritystandards.org/faqs/does-pci-dss-apply-to-merchants-who-outsource-all-payment-processing-operations-and-never-store-process-or-transmit-cardholder-data/).

Findings: No new issue identified in this review.

### lesson-d1-08-governance / slide-08-ai-governance-intake

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-08-governance.json`. All six EN/TH mode entries reviewed.

All three options and EN/TH feedback examined. Renderer recommends index1 facts/responsibility mapping before approval/real-data transfer. Demo success and AI exemption distractors correctly rejected. No new AI law, actual clinic status or complete governance-program claim. Actual Presentation, Reading/shared Info and bilingual lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§25–26 governance, applicability and examples; ISC2 Update 2026/Domain 1/Domain 1.md — §7 governance; §7.2 GRC and compliance/security distinction; [Why Govern was added: alignment, roles/responsibilities, expectations and legal obligations. Technical corroboration, not a framework lesson. Fresh HTML/text archived in governance-* files.](https://www.nist.gov/cyberframework/faqs); [Does the GDPR apply to your organisation? EU/EEA establishment, targeted services and monitoring; scope is fact-dependent. Fresh HTML/text archived in governance-* files.](https://www.edpb.europa.eu/sme/learn-the-basics/data-protection-basics_en); [HIPAA Rules apply to defined covered entities and business associates, not all health-data holders. Fresh HTML/text archived in governance-* files.](https://www.hhs.gov/hipaa/for-professionals/covered-entities/index.html); [Purpose, intended audience and compliance-program ownership. Industry standard, distinct from legislation. Fresh HTML/text archived in governance-* files.](https://www.pcisecuritystandards.org/standards/pci-dss/); [Merchant responsibilities, provider scope and shared duties; confirm requirements with compliance-accepting entity. Fresh HTML/text archived in governance-* files.](https://www.pcisecuritystandards.org/faqs/does-pci-dss-apply-to-merchants-who-outsource-all-payment-processing-operations-and-never-store-process-or-transmit-cardholder-data/).

Findings: No new issue identified in this review.

### lesson-d1-08-governance / slide-09-trace-requirements

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-08-governance.json`. All six EN/TH mode entries reviewed.

Current source, documented applicability, owner/actions, evidence and review support traceability. Unknown not marked compliant; implementation and review duties distinguished, significant gaps escalated. Illustrative record not official template or full Objective1.3 completion. Actual Presentation, Reading/shared Info and bilingual lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§25–26 governance, applicability and examples; ISC2 Update 2026/Domain 1/Domain 1.md — §7 governance; §7.2 GRC and compliance/security distinction; [Why Govern was added: alignment, roles/responsibilities, expectations and legal obligations. Technical corroboration, not a framework lesson. Fresh HTML/text archived in governance-* files.](https://www.nist.gov/cyberframework/faqs); [Does the GDPR apply to your organisation? EU/EEA establishment, targeted services and monitoring; scope is fact-dependent. Fresh HTML/text archived in governance-* files.](https://www.edpb.europa.eu/sme/learn-the-basics/data-protection-basics_en); [HIPAA Rules apply to defined covered entities and business associates, not all health-data holders. Fresh HTML/text archived in governance-* files.](https://www.hhs.gov/hipaa/for-professionals/covered-entities/index.html); [Purpose, intended audience and compliance-program ownership. Industry standard, distinct from legislation. Fresh HTML/text archived in governance-* files.](https://www.pcisecuritystandards.org/standards/pci-dss/); [Merchant responsibilities, provider scope and shared duties; confirm requirements with compliance-accepting entity. Fresh HTML/text archived in governance-* files.](https://www.pcisecuritystandards.org/faqs/does-pci-dss-apply-to-merchants-who-outsource-all-payment-processing-operations-and-never-store-process-or-transmit-cardholder-data/).

Findings: No new issue identified in this review.

### lesson-d1-09-frameworks / slide-01-framework-structure

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-09-frameworks.json`. All six EN/TH mode entries reviewed.

Current evidence, target outcome and owned gap actions coherently illustrate framework structure. Profiles explicitly NIST example, not universal template. Mapping/adoption not compliance or control-effectiveness proof. EN/TH agree. Paired Presentation/Reading/shared expanded Info and lesson outcomes/prerequisites/reference scope reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§27–34 framework, four document functions, ISO and CIS; ISC2 Update 2026/Domain 1/Domain 1.md — §7.1 document functions; [Core concurrent functions; outcomes; Current/Target Profiles; fresh governance-nist-govern HTML/text](https://www.nist.gov/cyberframework/faqs); [Prescriptive prioritized safeguards; fresh frameworks-ref-cis.html](https://www.cisecurity.org/controls).

Findings: No new issue identified in this review.

### lesson-d1-09-frameworks / slide-02-nist-outcomes

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-09-frameworks.json`. All six EN/TH mode entries reviewed.

NIST CSF2 six concurrent/continuous functions, nonprescriptive outcomes and Current/Target Profiles corroborated in fresh NIST FAQ. Local access workflow correctly authored, not canonical control text. No rigid sequential functions or detailed exam mandate claimed. Paired Presentation/Reading/shared expanded Info and lesson outcomes/prerequisites/reference scope reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§27–34 framework, four document functions, ISO and CIS; ISC2 Update 2026/Domain 1/Domain 1.md — §7.1 document functions; [Core concurrent functions; outcomes; Current/Target Profiles; fresh governance-nist-govern HTML/text](https://www.nist.gov/cyberframework/faqs); [Prescriptive prioritized safeguards; fresh frameworks-ref-cis.html](https://www.cisecurity.org/controls).

Findings: No new issue identified in this review.

### lesson-d1-09-frameworks / slide-04-cis-safeguards

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-09-frameworks.json`. All six EN/TH mode entries reviewed.

CIS prescriptive/prioritized practices corroborated in fresh official page. Inventory example matches purpose; three authored teaching steps explicitly not official safeguard names. CIS, ISO and NIST resources not interchangeable certificates/laws; mapping not automatic compliance. Paired Presentation/Reading/shared expanded Info and lesson outcomes/prerequisites/reference scope reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§27–34 framework, four document functions, ISO and CIS; ISC2 Update 2026/Domain 1/Domain 1.md — §7.1 document functions; [Core concurrent functions; outcomes; Current/Target Profiles; fresh governance-nist-govern HTML/text](https://www.nist.gov/cyberframework/faqs); [Prescriptive prioritized safeguards; fresh frameworks-ref-cis.html](https://www.cisecurity.org/controls).

Findings: No new issue identified in this review.

### lesson-d1-09-frameworks / slide-05-policy-direction

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-09-frameworks.json`. All six EN/TH mode entries reviewed.

Policy high-level direction, scope, accountability and approved internal authority correct. Internal can be mandatory; file title may mix functions; policy cannot override external obligations. EN/TH meaning preserved. Paired Presentation/Reading/shared expanded Info and lesson outcomes/prerequisites/reference scope reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§27–34 framework, four document functions, ISO and CIS; ISC2 Update 2026/Domain 1/Domain 1.md — §7.1 document functions; [Core concurrent functions; outcomes; Current/Target Profiles; fresh governance-nist-govern HTML/text](https://www.nist.gov/cyberframework/faqs); [Prescriptive prioritized safeguards; fresh frameworks-ref-cis.html](https://www.cisecurity.org/controls).

Findings: No new issue identified in this review.

### lesson-d1-09-frameworks / slide-06-standard-requirement

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-09-frameworks.json`. All six EN/TH mode entries reviewed.

Adopted internal mandatory condition differs from external published standard and universal law. Admin MFA example scoped, not ISC2 universal rule; exceptions require authority. FC-011 corrects repeated Thai adoption term รับใช้, not the requirement logic. Paired Presentation/Reading/shared expanded Info and lesson outcomes/prerequisites/reference scope reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§27–34 framework, four document functions, ISO and CIS; ISC2 Update 2026/Domain 1/Domain 1.md — §7.1 document functions; [Core concurrent functions; outcomes; Current/Target Profiles; fresh governance-nist-govern HTML/text](https://www.nist.gov/cyberframework/faqs); [Prescriptive prioritized safeguards; fresh frameworks-ref-cis.html](https://www.cisecurity.org/controls).

Findings: FC-011.

### lesson-d1-09-frameworks / slide-07-procedure-steps

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-09-frameworks.json`. All six EN/TH mode entries reviewed.

Procedure ordered work includes prerequisites/verification and evidence. Source A reset sketch puts verification after reset; published sequence correctly verifies identity and authority first. No fixed product/universal method claimed; obsolete steps require escalation, not bypass. Paired Presentation/Reading/shared expanded Info and lesson outcomes/prerequisites/reference scope reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§27–34 framework, four document functions, ISO and CIS; ISC2 Update 2026/Domain 1/Domain 1.md — §7.1 document functions; [Core concurrent functions; outcomes; Current/Target Profiles; fresh governance-nist-govern HTML/text](https://www.nist.gov/cyberframework/faqs); [Prescriptive prioritized safeguards; fresh frameworks-ref-cis.html](https://www.cisecurity.org/controls).

Findings: No new issue identified in this review.

### lesson-d1-09-frameworks / slide-08-guideline-advice

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-09-frameworks.json`. All six EN/TH mode entries reviewed.

Recommendations flexible within binding boundaries; adopted/contractual clause can be mandatory despite guideline filename. Four functions need not be four files. Meaning correct but Thai adoption word repeated, grouped in FC-011. Paired Presentation/Reading/shared expanded Info and lesson outcomes/prerequisites/reference scope reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§27–34 framework, four document functions, ISO and CIS; ISC2 Update 2026/Domain 1/Domain 1.md — §7.1 document functions; [Core concurrent functions; outcomes; Current/Target Profiles; fresh governance-nist-govern HTML/text](https://www.nist.gov/cyberframework/faqs); [Prescriptive prioritized safeguards; fresh frameworks-ref-cis.html](https://www.cisecurity.org/controls).

Findings: FC-011.

### lesson-d1-09-frameworks / slide-09-classify-the-purpose

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-09-frameworks.json`. All six EN/TH mode entries reviewed.

All four choices, bilingual feedback and renderer mapping examined. Standard index1 fits adopted specific admin-MFA condition; Policy direction, Procedure ordered steps, Guideline recommendation distractors accurate. Function not filename or must keyword alone. FC-011 adoption wording recurs. Paired Presentation/Reading/shared expanded Info and lesson outcomes/prerequisites/reference scope reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§27–34 framework, four document functions, ISO and CIS; ISC2 Update 2026/Domain 1/Domain 1.md — §7.1 document functions; [Core concurrent functions; outcomes; Current/Target Profiles; fresh governance-nist-govern HTML/text](https://www.nist.gov/cyberframework/faqs); [Prescriptive prioritized safeguards; fresh frameworks-ref-cis.html](https://www.cisecurity.org/controls).

Findings: FC-011.

### lesson-d1-09-frameworks / slide-10-connect-and-review

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-09-frameworks.json`. All six EN/TH mode entries reviewed.

Policy→standard→procedure chain aligned with guidance/evidence, not rigid universal hierarchy or framework above law. Versions, availability, owners and affected-document review appropriate. Introductory coverage/self-audit qualification not human approval. Paired Presentation/Reading/shared expanded Info and lesson outcomes/prerequisites/reference scope reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§27–34 framework, four document functions, ISO and CIS; ISC2 Update 2026/Domain 1/Domain 1.md — §7.1 document functions; [Core concurrent functions; outcomes; Current/Target Profiles; fresh governance-nist-govern HTML/text](https://www.nist.gov/cyberframework/faqs); [Prescriptive prioritized safeguards; fresh frameworks-ref-cis.html](https://www.cisecurity.org/controls).

Findings: No new issue identified in this review.

### lesson-d1-10-control-categories / slide-01-category-and-purpose

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-10-control-categories.json`. All six EN/TH mode entries reviewed.

Mechanism/category distinguished from function in context. Software-rule firewall technical and blocking preventive are compatible labels. Official 1.4 three headings exact; not exam prediction. Paired meaning agrees. Actual paired Presentation, Reading/shared Info and lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§35–36 category/function and four course labels; ISC2 Update 2026/Domain 1/Domain 1.md — §§6.1,6.3 categories and scenario reasoning; [Objective 1.4 exact three headings and Domain 1 AI guidance](https://www.isc2.org/certifications/cc/cc-certification-exam-outline); [§§2.4,2.6–2.7 responsibilities, integration and ongoing assessment; archived PDF text](https://csrc.nist.gov/pubs/sp/800/12/r1/final).

Findings: No new issue identified in this review.

### lesson-d1-10-control-categories / slide-02-technical-enforcement

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-10-control-categories.json`. All six EN/TH mode entries reviewed.

ACL permission enforcement distinct from authenticated identity and human policy approval. Technology needs configuration/key handling and effectiveness evidence. Technical does not mean every security property; human configuration does not change automated mechanism category. Actual paired Presentation, Reading/shared Info and lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§35–36 category/function and four course labels; ISC2 Update 2026/Domain 1/Domain 1.md — §§6.1,6.3 categories and scenario reasoning; [Objective 1.4 exact three headings and Domain 1 AI guidance](https://www.isc2.org/certifications/cc/cc-certification-exam-outline); [§§2.4,2.6–2.7 responsibilities, integration and ongoing assessment; archived PDF text](https://csrc.nist.gov/pubs/sp/800/12/r1/final).

Findings: No new issue identified in this review.

### lesson-d1-10-control-categories / slide-03-administrative-direction

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-10-control-categories.json`. All six EN/TH mode entries reviewed.

People-led policy/training/approval/risk-review processes administrative. Storing approval in software ticket not automated enforcement; policy needs implementation and evidence. Component focus prevents person-versus-computer keyword classification. Actual paired Presentation, Reading/shared Info and lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§35–36 category/function and four course labels; ISC2 Update 2026/Domain 1/Domain 1.md — §§6.1,6.3 categories and scenario reasoning; [Objective 1.4 exact three headings and Domain 1 AI guidance](https://www.isc2.org/certifications/cc/cc-certification-exam-outline); [§§2.4,2.6–2.7 responsibilities, integration and ongoing assessment; archived PDF text](https://csrc.nist.gov/pubs/sp/800/12/r1/final).

Findings: No new issue identified in this review.

### lesson-d1-10-control-categories / slide-04-physical-protection

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-10-control-categories.json`. All six EN/TH mode entries reviewed.

Guards/barriers/locks protect physical boundary; electronic lock still restricts entry, while identity processing and authorization may be separate technical/admin components. Physical does not replace logical/data protections. EN/TH distinctions correct. Actual paired Presentation, Reading/shared Info and lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§35–36 category/function and four course labels; ISC2 Update 2026/Domain 1/Domain 1.md — §§6.1,6.3 categories and scenario reasoning; [Objective 1.4 exact three headings and Domain 1 AI guidance](https://www.isc2.org/certifications/cc/cc-certification-exam-outline); [§§2.4,2.6–2.7 responsibilities, integration and ongoing assessment; archived PDF text](https://csrc.nist.gov/pubs/sp/800/12/r1/final).

Findings: No new issue identified in this review.

### lesson-d1-10-control-categories / slide-05-course-labels

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-10-control-categories.json`. All six EN/TH mode entries reviewed.

Source A four labels versus Source B and official three headings explicitly reconciled. Managerial and people-led operational processes useful supporting administrative perspective, not universal claim all operational controls administrative or fourth official requirement. Backup procedure/software distinction sound. Actual paired Presentation, Reading/shared Info and lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§35–36 category/function and four course labels; ISC2 Update 2026/Domain 1/Domain 1.md — §§6.1,6.3 categories and scenario reasoning; [Objective 1.4 exact three headings and Domain 1 AI guidance](https://www.isc2.org/certifications/cc/cc-certification-exam-outline); [§§2.4,2.6–2.7 responsibilities, integration and ongoing assessment; archived PDF text](https://csrc.nist.gov/pubs/sp/800/12/r1/final).

Findings: No new issue identified in this review.

### lesson-d1-10-control-categories / slide-06-one-goal-three-controls

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-10-control-categories.json`. All six EN/TH mode entries reviewed.

Approval/access review, technical writes/versions/logs/trusted-case evaluation and physical host/provider safeguards complement each other. No one-to-one CIA mapping or automatic safe/fair AI guarantee. Locked room not label validation, digest not source accuracy. Aligns earlier privacy/governance/AI examples and NIST integrated safeguards/AI RMF. Actual paired Presentation, Reading/shared Info and lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§35–36 category/function and four course labels; ISC2 Update 2026/Domain 1/Domain 1.md — §§6.1,6.3 categories and scenario reasoning; [Objective 1.4 exact three headings and Domain 1 AI guidance](https://www.isc2.org/certifications/cc/cc-certification-exam-outline); [§§2.4,2.6–2.7 responsibilities, integration and ongoing assessment; archived PDF text](https://csrc.nist.gov/pubs/sp/800/12/r1/final); [§3 trustworthiness, testing/monitoring; §5 continuous governance/measurement/management; archived PDF text](https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf).

Findings: No new issue identified in this review.

### lesson-d1-10-control-categories / slide-07-classify-the-mechanism

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-10-control-categories.json`. All six EN/TH mode entries reviewed.

All three category choices and bilingual feedback read; renderer index1 Administrative matches manager-led access review. Ticket only evidence store; automatic enforcement/door are distinct distractor mechanisms. No answer-key change identified. Actual paired Presentation, Reading/shared Info and lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§35–36 category/function and four course labels; ISC2 Update 2026/Domain 1/Domain 1.md — §§6.1,6.3 categories and scenario reasoning; [Objective 1.4 exact three headings and Domain 1 AI guidance](https://www.isc2.org/certifications/cc/cc-certification-exam-outline); [§§2.4,2.6–2.7 responsibilities, integration and ongoing assessment; archived PDF text](https://csrc.nist.gov/pubs/sp/800/12/r1/final).

Findings: No new issue identified in this review.

### lesson-d1-10-control-categories / slide-08-select-and-check

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-10-control-categories.json`. All six EN/TH mode entries reviewed.

Asset/risk/boundary, mechanism/owner and evidence connect classification to practical protection. Mixed categories decomposed; right label not proof of effectiveness. Recurring assessment and ownership corroborated NIST 800-12 §§2.4,2.6–2.7. EN/TH consistent. Actual paired Presentation, Reading/shared Info and lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§35–36 category/function and four course labels; ISC2 Update 2026/Domain 1/Domain 1.md — §§6.1,6.3 categories and scenario reasoning; [Objective 1.4 exact three headings and Domain 1 AI guidance](https://www.isc2.org/certifications/cc/cc-certification-exam-outline); [§§2.4,2.6–2.7 responsibilities, integration and ongoing assessment; archived PDF text](https://csrc.nist.gov/pubs/sp/800/12/r1/final).

Findings: No new issue identified in this review.

### lesson-d1-11-control-functions / slide-01-category-and-function

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-11-control-functions.json`. All six EN/TH mode entries reviewed.

Implementation category and configured outcome compatible, functions not mutually exclusive. Firewall blocks/alerts can be preventive/detective without enabling all capabilities everywhere. Directive and recovery terms reconcile note differences, not new official requirement headings. Actual paired Presentation, Reading/shared Info and lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§35,37–45 functions and contextual overlap; ISC2 Update 2026/Domain 1/Domain 1.md — §§6.1–6.3 categories, functions/recovery and reasoning; §7.1 documents; [Equivalent/comparable protection; fresh archived HTML](https://csrc.nist.gov/glossary/term/compensating_controls); [Selecting Compensating Controls, printed pp12–13; same requirements, rationale and risk acceptance; archived PDF/text](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53B.pdf); [System contingency activities restoring missions/business functions; archived HTML](https://csrc.nist.gov/glossary/term/recovery).

Findings: No new issue identified in this review.

### lesson-d1-11-control-functions / slide-02-preventive

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-11-control-functions.json`. All six EN/TH mode entries reviewed.

Stops specified unwanted action; ACL unauthorized read example valid. Preventive action can stop next harmful step during ongoing incident, not only before all incidents. Warning not enforcement, zero risk not promised. EN/TH limits equivalent. Actual paired Presentation, Reading/shared Info and lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§35,37–45 functions and contextual overlap; ISC2 Update 2026/Domain 1/Domain 1.md — §§6.1–6.3 categories, functions/recovery and reasoning; §7.1 documents; [Equivalent/comparable protection; fresh archived HTML](https://csrc.nist.gov/glossary/term/compensating_controls); [Selecting Compensating Controls, printed pp12–13; same requirements, rationale and risk acceptance; archived PDF/text](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53B.pdf); [System contingency activities restoring missions/business functions; archived HTML](https://csrc.nist.gov/glossary/term/recovery).

Findings: No new issue identified in this review.

### lesson-d1-11-control-functions / slide-03-detective

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-11-control-functions.json`. All six EN/TH mode entries reviewed.

Observation, collected evidence, rules and follow-through needed. Unusual access not proven attack; alert not automatically block. Detection may be live or retrospective. No contradiction with Accounting recording versus audit/review distinction. Actual paired Presentation, Reading/shared Info and lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§35,37–45 functions and contextual overlap; ISC2 Update 2026/Domain 1/Domain 1.md — §§6.1–6.3 categories, functions/recovery and reasoning; §7.1 documents; [Equivalent/comparable protection; fresh archived HTML](https://csrc.nist.gov/glossary/term/compensating_controls); [Selecting Compensating Controls, printed pp12–13; same requirements, rationale and risk acceptance; archived PDF/text](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53B.pdf); [System contingency activities restoring missions/business functions; archived HTML](https://csrc.nist.gov/glossary/term/recovery).

Findings: No new issue identified in this review.

### lesson-d1-11-control-functions / slide-04-corrective-and-recovery

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-11-control-functions.json`. All six EN/TH mode entries reviewed.

Corrective fixing versus recovery restoration reconciles A broad correction and B separate recovery. Validated clean data and addressed cause both may matter; patch function depends on timing/context. No rigid taxonomy or restore-success guarantee; NIST recovery definition corroborates. Actual paired Presentation, Reading/shared Info and lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§35,37–45 functions and contextual overlap; ISC2 Update 2026/Domain 1/Domain 1.md — §§6.1–6.3 categories, functions/recovery and reasoning; §7.1 documents; [Equivalent/comparable protection; fresh archived HTML](https://csrc.nist.gov/glossary/term/compensating_controls); [Selecting Compensating Controls, printed pp12–13; same requirements, rationale and risk acceptance; archived PDF/text](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53B.pdf); [System contingency activities restoring missions/business functions; archived HTML](https://csrc.nist.gov/glossary/term/recovery).

Findings: No new issue identified in this review.

### lesson-d1-11-control-functions / slide-05-deterrent

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-11-control-functions.json`. All six EN/TH mode entries reviewed.

Visible scrutiny intended to discourage, not physical blocking or proof camera records. Determined actor may proceed. Guard intervention preventive, recording review detective, rule sign directive can coexist. EN/TH explanations match. Actual paired Presentation, Reading/shared Info and lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§35,37–45 functions and contextual overlap; ISC2 Update 2026/Domain 1/Domain 1.md — §§6.1–6.3 categories, functions/recovery and reasoning; §7.1 documents; [Equivalent/comparable protection; fresh archived HTML](https://csrc.nist.gov/glossary/term/compensating_controls); [Selecting Compensating Controls, printed pp12–13; same requirements, rationale and risk acceptance; archived PDF/text](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53B.pdf); [System contingency activities restoring missions/business functions; archived HTML](https://csrc.nist.gov/glossary/term/recovery).

Findings: No new issue identified in this review.

### lesson-d1-11-control-functions / slide-06-directive

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-11-control-functions.json`. All six EN/TH mode entries reviewed.

Instruction guides expected behavior but does not enforce itself. Guideline can be directive without automatically mandatory; actual authority/adoption matter. Visitor verification before entry appropriate. Coherent with document lesson. Actual paired Presentation, Reading/shared Info and lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§35,37–45 functions and contextual overlap; ISC2 Update 2026/Domain 1/Domain 1.md — §§6.1–6.3 categories, functions/recovery and reasoning; §7.1 documents; [Equivalent/comparable protection; fresh archived HTML](https://csrc.nist.gov/glossary/term/compensating_controls); [Selecting Compensating Controls, printed pp12–13; same requirements, rationale and risk acceptance; archived PDF/text](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53B.pdf); [System contingency activities restoring missions/business functions; archived HTML](https://csrc.nist.gov/glossary/term/recovery).

Findings: No new issue identified in this review.

### lesson-d1-11-control-functions / slide-07-compensating

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-11-control-functions.json`. All six EN/TH mode entries reviewed.

Comparable protection for same original need required; gateway alternative must close direct bypass, consider privileges/monitoring, obtain approval and review. Not automatically equivalent, cheaper/additional or mere after-the-fact monitoring. NIST glossary and 800-53B tailoring rationale corroborate. No waiver of external duties. Actual paired Presentation, Reading/shared Info and lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§35,37–45 functions and contextual overlap; ISC2 Update 2026/Domain 1/Domain 1.md — §§6.1–6.3 categories, functions/recovery and reasoning; §7.1 documents; [Equivalent/comparable protection; fresh archived HTML](https://csrc.nist.gov/glossary/term/compensating_controls); [Selecting Compensating Controls, printed pp12–13; same requirements, rationale and risk acceptance; archived PDF/text](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53B.pdf); [System contingency activities restoring missions/business functions; archived HTML](https://csrc.nist.gov/glossary/term/recovery).

Findings: No new issue identified in this review.

### lesson-d1-11-control-functions / slide-08-context-changes-function

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-11-control-functions.json`. All six EN/TH mode entries reviewed.

All three context options and paired feedback read; renderer selects correct row with no invented single best key. Visible intended deterrence; reviewed recording detection; detection plus actual guard stop supports detective/preventive combined. Camera alone does not block or prove timely detection. Actual paired Presentation, Reading/shared Info and lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§35,37–45 functions and contextual overlap; ISC2 Update 2026/Domain 1/Domain 1.md — §§6.1–6.3 categories, functions/recovery and reasoning; §7.1 documents; [Equivalent/comparable protection; fresh archived HTML](https://csrc.nist.gov/glossary/term/compensating_controls); [Selecting Compensating Controls, printed pp12–13; same requirements, rationale and risk acceptance; archived PDF/text](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53B.pdf); [System contingency activities restoring missions/business functions; archived HTML](https://csrc.nist.gov/glossary/term/recovery).

Findings: No new issue identified in this review.

### lesson-d1-11-control-functions / slide-09-reason-from-effects

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-11-control-functions.json`. All six EN/TH mode entries reviewed.

Memory cues/timing only starting points; stated purpose, mechanism, evidence and limitations govern function. Patches/recovery/alternatives can overlap labels. Reassess changed configuration/use; does not present exam keyword guarantee. Actual paired Presentation, Reading/shared Info and lesson metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§35,37–45 functions and contextual overlap; ISC2 Update 2026/Domain 1/Domain 1.md — §§6.1–6.3 categories, functions/recovery and reasoning; §7.1 documents; [Equivalent/comparable protection; fresh archived HTML](https://csrc.nist.gov/glossary/term/compensating_controls); [Selecting Compensating Controls, printed pp12–13; same requirements, rationale and risk acceptance; archived PDF/text](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53B.pdf); [System contingency activities restoring missions/business functions; archived HTML](https://csrc.nist.gov/glossary/term/recovery).

Findings: No new issue identified in this review.

### lesson-d1-12-professional-conduct / slide-01-access-and-authority

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-12-professional-conduct.json`. All six EN/TH mode entries reviewed.

Payroll administrator capability not permission for curiosity access. Confirm assigned purpose/records/handling and minimum necessary use; good intentions not authority. Coherent with AAA authorization and privacy reuse. EN/TH distinctions agree. Actual paired Presentation, Reading/shared expanded Info and metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§46–51 professional boundaries, care/diligence and canons; ISC2 Update 2026/Domain 1/Domain 1.md — §7.3 care/diligence; §8 ethics/canons; [Current four mandatory canons and retained ethical judgment; fresh HTML/text archived](https://www.isc2.org/ethics); [Due care and due diligence definitions; fresh HTML/text archived](https://www.isaca.org/resources/glossary).

Findings: No new issue identified in this review.

### lesson-d1-12-professional-conduct / slide-02-professional-conduct

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-12-professional-conduct.json`. All six EN/TH mode entries reviewed.

Honesty, respect, confidentiality, conflicts and correction of mistakes expressed as actions, not signed-policy proof. Authorized but wrong-team report example requires correction, not concealment. Honest reporting with controlled disclosure compatible; manager instruction no excuse for falsification. Actual paired Presentation, Reading/shared expanded Info and metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§46–51 professional boundaries, care/diligence and canons; ISC2 Update 2026/Domain 1/Domain 1.md — §7.3 care/diligence; §8 ethics/canons; [Current four mandatory canons and retained ethical judgment; fresh HTML/text archived](https://www.isc2.org/ethics); [Due care and due diligence definitions; fresh HTML/text archived](https://www.isaca.org/resources/glossary).

Findings: No new issue identified in this review.

### lesson-d1-12-professional-conduct / slide-03-reasonable-care

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-12-professional-conduct.json`. All six EN/TH mode entries reviewed.

Reasonable protective action based on context/competence agrees with ISACA. Authorized safe patch or justified interim protection, not every control or zero incident/legal immunity guarantee. Known exposure not silently ignored. Paired qualifiers preserved. Actual paired Presentation, Reading/shared expanded Info and metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§46–51 professional boundaries, care/diligence and canons; ISC2 Update 2026/Domain 1/Domain 1.md — §7.3 care/diligence; §8 ethics/canons; [Current four mandatory canons and retained ethical judgment; fresh HTML/text archived](https://www.isc2.org/ethics); [Due care and due diligence definitions; fresh HTML/text archived](https://www.isaca.org/resources/glossary).

Findings: No new issue identified in this review.

### lesson-d1-12-professional-conduct / slide-04-investigate-and-review

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-12-professional-conduct.json`. All six EN/TH mode entries reviewed.

Diligence prudent objective inquiry before and after action, effectiveness and changing context. Tool label/install record insufficient; inquiry authorized/proportionate and uncertainty explicit. Care/diligence can overlap, not exhaustive exclusive buckets. ISACA definition corroborates. Actual paired Presentation, Reading/shared expanded Info and metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§46–51 professional boundaries, care/diligence and canons; ISC2 Update 2026/Domain 1/Domain 1.md — §7.3 care/diligence; §8 ethics/canons; [Current four mandatory canons and retained ethical judgment; fresh HTML/text archived](https://www.isc2.org/ethics); [Due care and due diligence definitions; fresh HTML/text archived](https://www.isaca.org/resources/glossary).

Findings: No new issue identified in this review.

### lesson-d1-12-professional-conduct / slide-05-scan-patch-verify

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-12-professional-conduct.json`. All six EN/TH mode entries reviewed.

Scan applicability→safe approved patch→rescan/service testing illustrates diligence/care/diligence without reducing definitions to DO/CHECK or legal test. Remaining risk, exceptions and owner/review maintained. Coherent with earlier risk-response scenario. Actual paired Presentation, Reading/shared expanded Info and metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§46–51 professional boundaries, care/diligence and canons; ISC2 Update 2026/Domain 1/Domain 1.md — §7.3 care/diligence; §8 ethics/canons; [Current four mandatory canons and retained ethical judgment; fresh HTML/text archived](https://www.isc2.org/ethics); [Due care and due diligence definitions; fresh HTML/text archived](https://www.isaca.org/resources/glossary).

Findings: No new issue identified in this review.

### lesson-d1-12-professional-conduct / slide-06-four-canons

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-12-professional-conduct.json`. All six EN/TH mode entries reviewed.

All four learning paraphrases substantively agree with fresh official ISC2 Code and user notes. Principals employer/client duty not every instruction-giver; Code four mandatory canons still requires professional judgment. No false certification claim or mechanical conflict answer from recall order. Actual paired Presentation, Reading/shared expanded Info and metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§46–51 professional boundaries, care/diligence and canons; ISC2 Update 2026/Domain 1/Domain 1.md — §7.3 care/diligence; §8 ethics/canons; [Current four mandatory canons and retained ethical judgment; fresh HTML/text archived](https://www.isc2.org/ethics); [Due care and due diligence definitions; fresh HTML/text archived](https://www.isaca.org/resources/glossary).

Findings: No new issue identified in this review.

### lesson-d1-12-professional-conduct / slide-07-public-trust-and-honesty

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-12-professional-conduct.json`. All six EN/TH mode entries reviewed.

Deadline cannot justify removing verified material weakness; distinguish possible harm from confirmed exploit. Truthful scoped evidence and responsible/urgent channels, protected details and qualified advice where duties conflict. No indiscriminate disclosure or universal legal deadline/hierarchy. Actual paired Presentation, Reading/shared expanded Info and metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§46–51 professional boundaries, care/diligence and canons; ISC2 Update 2026/Domain 1/Domain 1.md — §7.3 care/diligence; §8 ethics/canons; [Current four mandatory canons and retained ethical judgment; fresh HTML/text archived](https://www.isc2.org/ethics); [Due care and due diligence definitions; fresh HTML/text archived](https://www.isaca.org/resources/glossary).

Findings: No new issue identified in this review.

### lesson-d1-12-professional-conduct / slide-08-competent-service

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-12-professional-conduct.json`. All six EN/TH mode entries reviewed.

Disclose competence limits, seek qualified support/supervision and arrange handover rather than false expertise or abandonment. Loyalty not duty to mislead/exceed authority. Learning/mentoring preserve confidentiality. Both languages align canons III/IV. Actual paired Presentation, Reading/shared expanded Info and metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§46–51 professional boundaries, care/diligence and canons; ISC2 Update 2026/Domain 1/Domain 1.md — §7.3 care/diligence; §8 ethics/canons; [Current four mandatory canons and retained ethical judgment; fresh HTML/text archived](https://www.isc2.org/ethics); [Due care and due diligence definitions; fresh HTML/text archived](https://www.isaca.org/resources/glossary).

Findings: No new issue identified in this review.

### lesson-d1-12-professional-conduct / slide-09-reporting-decision

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-12-professional-conduct.json`. All six EN/TH mode entries reviewed.

All three choices and paired feedback reviewed; renderer index2 Report safely is supported. Concealment undermines truthful protection; uncontrolled publication adds harm without authority. Appropriate recipient/urgent duties contextual, no universal hierarchy or guaranteed result claimed. Actual paired Presentation, Reading/shared expanded Info and metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§46–51 professional boundaries, care/diligence and canons; ISC2 Update 2026/Domain 1/Domain 1.md — §7.3 care/diligence; §8 ethics/canons; [Current four mandatory canons and retained ethical judgment; fresh HTML/text archived](https://www.isc2.org/ethics); [Due care and due diligence definitions; fresh HTML/text archived](https://www.isaca.org/resources/glossary).

Findings: No new issue identified in this review.

### lesson-d1-12-professional-conduct / slide-10-defensible-decisions

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-12-professional-conduct.json`. All six EN/TH mode entries reviewed.

AI report facts, sensitive handling and qualified review remain human responsibility. Ticket AI urgent-case and subgroup/language evaluation, provenance, bounded risk-authorized use, transparency, owner/review/pause triggers coherent with NIST AI RMF. Human glance not fairness guarantee; accepted risk not waiver of law. EN/TH detailed application agrees. Actual paired Presentation, Reading/shared expanded Info and metadata reviewed.

Evidence: ISC2 Update 2026/Domain 1/D1 sum.md — §§46–51 professional boundaries, care/diligence and canons; ISC2 Update 2026/Domain 1/Domain 1.md — §7.3 care/diligence; §8 ethics/canons; [Current four mandatory canons and retained ethical judgment; fresh HTML/text archived](https://www.isc2.org/ethics); [Due care and due diligence definitions; fresh HTML/text archived](https://www.isaca.org/resources/glossary); [§3 trustworthiness and ongoing evaluation; §5 governance/map/measure/manage; archived PDF/text](https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf).

Findings: No new issue identified in this review.

### lesson-d2-01-grc-foundations / slide-01-grc-foundations

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d2-01-grc-foundations.json`. All six EN/TH mode entries reviewed.

Actual MFA-linked Governance/Risk/Compliance examples and five obligation types coherent with Domain1. Official D2 Security Governance weight17.3 and 2.1 scope verified. Governance authority, technical deployment and evidence not conflated; EN/TH substantive meaning equivalent. Paired Presentation/Reading/shared Info and lesson outcomes/prerequisites/reference scope reviewed.

Evidence: ISC2 Update 2026/Domain 2/Domain 2.md — §§1–3 definitions, seven purposes/benefits and possible failures; ISC2 Update 2026/Domain 2/D2 sum.md — §2.1 definitions, purposes and framework cues; ISC2 Update 2026/Domain 2/Screenshot 2026-09-20 180128.png — Supplied S05 purpose source read; no new screenshot or browser QA; ISC2 Update 2026/Domain 2/Screenshot 2026-09-20 180141.png — Supplied S06 importance source read; helps/may-have qualifiers; ISC2 Update 2026/Domain 2/Screenshot 2026-09-20 180209.png — Supplied S07 NIST/ISO/COBIT and example regime names read; [Concurrent functions, outcomes and Govern; archived fresh HTML/text](https://www.nist.gov/cyberframework/faqs); [Enterprise IT governance/management purpose; archived fresh HTML/text](https://www.isaca.org/resources/cobit).

Findings: No new issue identified in this review.

### lesson-d2-01-grc-foundations / slide-02-purpose-of-grc

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d2-01-grc-foundations.json`. All six EN/TH mode entries reviewed.

Seven purposes match actual supplied S05, summary and master notes. Reuse explanation correctly requires evidence relevance to each scope; ownership and common policies meaningful. FC-012 supplies missing Thai glosses for seven English-only Reading/Info labels; actual Presentation is translated. Paired Presentation/Reading/shared Info and lesson outcomes/prerequisites/reference scope reviewed.

Evidence: ISC2 Update 2026/Domain 2/Domain 2.md — §§1–3 definitions, seven purposes/benefits and possible failures; ISC2 Update 2026/Domain 2/D2 sum.md — §2.1 definitions, purposes and framework cues; ISC2 Update 2026/Domain 2/Screenshot 2026-09-20 180128.png — Supplied S05 purpose source read; no new screenshot or browser QA; ISC2 Update 2026/Domain 2/Screenshot 2026-09-20 180141.png — Supplied S06 importance source read; helps/may-have qualifiers; ISC2 Update 2026/Domain 2/Screenshot 2026-09-20 180209.png — Supplied S07 NIST/ISO/COBIT and example regime names read; [Concurrent functions, outcomes and Govern; archived fresh HTML/text](https://www.nist.gov/cyberframework/faqs); [Enterprise IT governance/management purpose; archived fresh HTML/text](https://www.isaca.org/resources/cobit).

Findings: FC-012.

### lesson-d2-01-grc-foundations / slide-03-importance-of-grc

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d2-01-grc-foundations.json`. All six EN/TH mode entries reviewed.

All seven benefits and four potential failure modes compared against actual supplied S06. Benefits/roles relevant, but FC-013 removes unsupported magnitude/penalty assurance and FC-014 restores source may-have qualifier, especially Thai immediately. Presentation already says no zero-incident guarantee. Paired Presentation/Reading/shared Info and lesson outcomes/prerequisites/reference scope reviewed.

Evidence: ISC2 Update 2026/Domain 2/Domain 2.md — §§1–3 definitions, seven purposes/benefits and possible failures; ISC2 Update 2026/Domain 2/D2 sum.md — §2.1 definitions, purposes and framework cues; ISC2 Update 2026/Domain 2/Screenshot 2026-09-20 180128.png — Supplied S05 purpose source read; no new screenshot or browser QA; ISC2 Update 2026/Domain 2/Screenshot 2026-09-20 180141.png — Supplied S06 importance source read; helps/may-have qualifiers; ISC2 Update 2026/Domain 2/Screenshot 2026-09-20 180209.png — Supplied S07 NIST/ISO/COBIT and example regime names read; [Concurrent functions, outcomes and Govern; archived fresh HTML/text](https://www.nist.gov/cyberframework/faqs); [Enterprise IT governance/management purpose; archived fresh HTML/text](https://www.isaca.org/resources/cobit).

Findings: FC-013, FC-014.

### lesson-d2-01-grc-foundations / slide-05-grc-distinctions

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d2-01-grc-foundations.json`. All six EN/TH mode entries reviewed.

Governance direction/oversight versus management implementation/evidence, and risk exposure versus scoped compliance coherent with D1. Neither compliance nor audit guarantees low/zero risk. FC-016 removes unsupported exam-frequency assertion; role labels are functional not absolute job assignments. Paired Presentation/Reading/shared Info and lesson outcomes/prerequisites/reference scope reviewed.

Evidence: ISC2 Update 2026/Domain 2/Domain 2.md — §§1–3 definitions, seven purposes/benefits and possible failures; ISC2 Update 2026/Domain 2/D2 sum.md — §2.1 definitions, purposes and framework cues; ISC2 Update 2026/Domain 2/Screenshot 2026-09-20 180128.png — Supplied S05 purpose source read; no new screenshot or browser QA; ISC2 Update 2026/Domain 2/Screenshot 2026-09-20 180141.png — Supplied S06 importance source read; helps/may-have qualifiers; ISC2 Update 2026/Domain 2/Screenshot 2026-09-20 180209.png — Supplied S07 NIST/ISO/COBIT and example regime names read; [Concurrent functions, outcomes and Govern; archived fresh HTML/text](https://www.nist.gov/cyberframework/faqs); [Enterprise IT governance/management purpose; archived fresh HTML/text](https://www.isaca.org/resources/cobit).

Findings: FC-016.

### lesson-d2-01-grc-foundations / slide-06-applied-grc-scenario

Content: `content/isc2-cc-2026/learning/published/lessons/lesson-d2-01-grc-foundations.json`. All six EN/TH mode entries reviewed.

All four candidate actions and bilingual feedback reviewed. Current correct C coherent with fragmented rules/evidence and client ISMS needs. Actual Presentation uses C index2 and row feedback (A custom rationale). FC-015 documents stale B explanation in Reading/Info. Evidence reuse must remain scope-relevant; no actual quiz/progress changes. Paired Presentation/Reading/shared Info and lesson outcomes/prerequisites/reference scope reviewed.

Evidence: ISC2 Update 2026/Domain 2/Domain 2.md — §§1–3 definitions, seven purposes/benefits and possible failures; ISC2 Update 2026/Domain 2/D2 sum.md — §2.1 definitions, purposes and framework cues; ISC2 Update 2026/Domain 2/Screenshot 2026-09-20 180128.png — Supplied S05 purpose source read; no new screenshot or browser QA; ISC2 Update 2026/Domain 2/Screenshot 2026-09-20 180141.png — Supplied S06 importance source read; helps/may-have qualifiers; ISC2 Update 2026/Domain 2/Screenshot 2026-09-20 180209.png — Supplied S07 NIST/ISO/COBIT and example regime names read; [Concurrent functions, outcomes and Govern; archived fresh HTML/text](https://www.nist.gov/cyberframework/faqs); [Enterprise IT governance/management purpose; archived fresh HTML/text](https://www.isaca.org/resources/cobit).

Findings: FC-015.

## Source conflicts and limits

The Domain 1 transcript at 00:23:02–00:24:14 overstates physical theft as necessary to compromise possession factors and biometric resistance to forgery. Current AAA slide 5 appropriately qualifies both. NIST SP 800-63B-4 §3.2.3 supports the physical-authenticator/biometric distinction. Transcript 00:20:20–00:21:38 conflates accounting and auditing; current lesson separates recording and review. Summary notes without an explicit non-repudiation definition are correctly labelled supporting context rather than the definition source. No source or production rewrite performed.

The 272-file source inventory is not a claim that all source images or transcripts have been reviewed. Evidence locators above identify the portions actually examined. Complete official coverage and cross-domain reconciliation remain pending. Human academic and native Thai acceptance is not claimed.

Next exact continuation: lesson-d1-09-frameworks / slide-03-iso-isms. Inventory and continuation.json are authoritative.

## Related exact correction fields

### FC-011 related field — lesson-d1-09-frameworks / slide-06-standard-requirement

Path: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-09-frameworks.json`; field: `blocks.2.text`.

Current EN: A §30 and B §7.1 describe an internal standard as a specific mandatory requirement supporting policy: a minimum specification or consistent criterion. The authored organisation requires MFA for all administrative accounts within its stated scope. This is a teaching example, not a universal ISC2 configuration rule or a claim that one factor type solves every access risk. A procedure then describes how to enrol, verify and support that requirement. Distinguish this internal document use of standard from an external international standard such as ISO/IEC 27001. Publishing an external standard does not automatically make it law everywhere; an applicable contract, law or internal adoption may establish an obligation. If the requirement cannot be met, the operator follows the authorised exception/escalation process rather than treating advice as permission to ignore it. An internal exception cannot waive applicable external duties.

Current TH: A §30 และ B §7.1 อธิบาย Standard ภายในเป็นข้อกำหนดเฉพาะที่ต้องทำตามเพื่อรองรับ Policy เช่น Specification ขั้นต่ำหรือเกณฑ์ร่วม ตัวอย่างองค์กรแต่งขึ้นกำหนด MFA กับบัญชีผู้ดูแลทั้งหมดในขอบเขต นี่เป็นตัวอย่างสอน ไม่ใช่กฎตั้งค่าที่ ISC2 บังคับทุกองค์กร หรืออ้างว่าปัจจัยแบบเดียวแก้ Risk การเข้าถึงได้หมด Procedure จะอธิบายวิธีลงทะเบียน ตรวจ และสนับสนุนข้อกำหนดนี้ ต้องแยกคำว่า Standard ภายในออกจากมาตรฐานสากลภายนอกอย่าง ISO/IEC 27001 การเผยแพร่มาตรฐานไม่ได้ทำให้เป็นกฎหมายทุกที่โดยอัตโนมัติ สัญญา กฎหมาย หรือการรับใช้ภายในอาจสร้างหน้าที่ ถ้าทำตามไม่ได้ต้องเข้าสู่กระบวนการข้อยกเว้นหรือยกระดับตามอำนาจ ไม่ใช่ใช้คำแนะนำเป็นสิทธิ์ละเลย ข้อยกเว้นภายในไม่ลบหน้าที่ภายนอก

Proposed EN: A §30 and B §7.1 describe an internal standard as a specific mandatory requirement supporting policy: a minimum specification or consistent criterion. The authored organisation requires MFA for all administrative accounts within its stated scope. This is a teaching example, not a universal ISC2 configuration rule or a claim that one factor type solves every access risk. A procedure then describes how to enrol, verify and support that requirement. Distinguish this internal document use of standard from an external international standard such as ISO/IEC 27001. Publishing an external standard does not automatically make it law everywhere; an applicable contract, law or internal adoption may establish an obligation. If the requirement cannot be met, the operator follows the authorised exception/escalation process rather than treating advice as permission to ignore it. An internal exception cannot waive applicable external duties.

Proposed TH: A §30 และ B §7.1 อธิบาย Standard ภายในเป็นข้อกำหนดเฉพาะที่ต้องทำตามเพื่อรองรับ Policy เช่น Specification ขั้นต่ำหรือเกณฑ์ร่วม ตัวอย่างองค์กรแต่งขึ้นกำหนด MFA กับบัญชีผู้ดูแลทั้งหมดในขอบเขต นี่เป็นตัวอย่างสอน ไม่ใช่กฎตั้งค่าที่ ISC2 บังคับทุกองค์กร หรืออ้างว่าปัจจัยแบบเดียวแก้ Risk การเข้าถึงได้หมด Procedure จะอธิบายวิธีลงทะเบียน ตรวจ และสนับสนุนข้อกำหนดนี้ ต้องแยกคำว่า Standard ภายในออกจากมาตรฐานสากลภายนอกอย่าง ISO/IEC 27001 การเผยแพร่มาตรฐานไม่ได้ทำให้เป็นกฎหมายทุกที่โดยอัตโนมัติ สัญญา กฎหมาย หรือการนำมาบังคับใช้ภายในอาจสร้างหน้าที่ ถ้าทำตามไม่ได้ต้องเข้าสู่กระบวนการข้อยกเว้นหรือยกระดับตามอำนาจ ไม่ใช่ใช้คำแนะนำเป็นสิทธิ์ละเลย ข้อยกเว้นภายในไม่ลบหน้าที่ภายนอก

### FC-011 related field — lesson-d1-09-frameworks / slide-06-standard-requirement

Path: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-09-frameworks.json`; field: `blocks.3.text`.

Current EN: Specific + required within its adopted scope.

Current TH: เฉพาะเจาะจง และต้องทำตามในขอบเขตที่รับใช้

Proposed EN: Specific + required within its adopted scope.

Proposed TH: เฉพาะเจาะจง และต้องทำตามในขอบเขตที่นำมาบังคับใช้

### FC-011 related field — lesson-d1-09-frameworks / slide-08-guideline-advice

Path: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-09-frameworks.json`; field: `blocks.1.rows.0.1`.

Current EN: Meet the adopted authentication standard.

Current TH: ทำตาม Authentication Standard ที่รับใช้

Proposed EN: Meet the adopted authentication standard.

Proposed TH: ทำตาม Authentication Standard ที่นำมาบังคับใช้

### FC-011 related field — lesson-d1-09-frameworks / slide-08-guideline-advice

Path: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-09-frameworks.json`; field: `blocks.2.text`.

Current EN: A §28 and B §7.1 describe a guideline as recommended practice or advice: generally advisory, flexible and adaptable. It helps a person choose an approach where judgement is allowed. The authored passphrase example is not a fixed password length or new authentication rule. Recommendations must fit the applicable policy and standard. A guideline does not give an operator permission to ignore an adopted requirement or law. Conversely, calling a document a guideline does not cancel a clause made mandatory by an authoritative adoption or contract; check the actual requirement and scope. Policy supplies direction, a standard sets a specific condition, a procedure sets the steps and a guideline recommends a helpful approach. These are useful functional distinctions, not proof that every organisation stores four separate files. Identify what the statement does and how it becomes applicable.

Current TH: A §28 และ B §7.1 อธิบาย Guideline เป็นแนวปฏิบัติแนะนำหรือคำปรึกษา โดยทั่วไปยืดหยุ่นและปรับใช้ได้ ช่วยเลือกวิธีเมื่อมีพื้นที่ให้ใช้ดุลยพินิจ ตัวอย่าง Passphrase แต่งขึ้นไม่ได้กำหนดความยาว Password ตายตัวหรือกฎ Authentication ใหม่ คำแนะนำต้องอยู่ภายใต้ Policy และ Standard ที่ใช้ Guideline ไม่ให้สิทธิ์ละเลยข้อกำหนดที่รับใช้หรือกฎหมาย ในทางกลับกัน การตั้งชื่อไฟล์ว่า Guideline ก็ไม่ลบข้อที่ถูกบังคับผ่านการรับใช้ตามอำนาจหรือสัญญา ต้องตรวจข้อกำหนดและขอบเขต Policy ให้ทิศทาง Standard ให้เงื่อนไขเฉพาะ Procedure ให้ขั้นตอน และ Guideline แนะนำวิธีที่ช่วยได้ นี่คือการแยกหน้าที่ ไม่ได้พิสูจน์ว่าทุกองค์กรต้องมีสี่ไฟล์เสมอ ให้ดูว่าข้อความทำอะไรและใช้บังคับอย่างไร

Proposed EN: A §28 and B §7.1 describe a guideline as recommended practice or advice: generally advisory, flexible and adaptable. It helps a person choose an approach where judgement is allowed. The authored passphrase example is not a fixed password length or new authentication rule. Recommendations must fit the applicable policy and standard. A guideline does not give an operator permission to ignore an adopted requirement or law. Conversely, calling a document a guideline does not cancel a clause made mandatory by an authoritative adoption or contract; check the actual requirement and scope. Policy supplies direction, a standard sets a specific condition, a procedure sets the steps and a guideline recommends a helpful approach. These are useful functional distinctions, not proof that every organisation stores four separate files. Identify what the statement does and how it becomes applicable.

Proposed TH: A §28 และ B §7.1 อธิบาย Guideline เป็นแนวปฏิบัติแนะนำหรือคำปรึกษา โดยทั่วไปยืดหยุ่นและปนำมาบังคับใช้ได้ ช่วยเลือกวิธีเมื่อมีพื้นที่ให้ใช้ดุลยพินิจ ตัวอย่าง Passphrase แต่งขึ้นไม่ได้กำหนดความยาว Password ตายตัวหรือกฎ Authentication ใหม่ คำแนะนำต้องอยู่ภายใต้ Policy และ Standard ที่ใช้ Guideline ไม่ให้สิทธิ์ละเลยข้อกำหนดที่นำมาบังคับใช้หรือกฎหมาย ในทางกลับกัน การตั้งชื่อไฟล์ว่า Guideline ก็ไม่ลบข้อที่ถูกบังคับผ่านการนำมาบังคับใช้ตามอำนาจหรือสัญญา ต้องตรวจข้อกำหนดและขอบเขต Policy ให้ทิศทาง Standard ให้เงื่อนไขเฉพาะ Procedure ให้ขั้นตอน และ Guideline แนะนำวิธีที่ช่วยได้ นี่คือการแยกหน้าที่ ไม่ได้พิสูจน์ว่าทุกองค์กรต้องมีสี่ไฟล์เสมอ ให้ดูว่าข้อความทำอะไรและใช้บังคับอย่างไร

### FC-011 related field — lesson-d1-09-frameworks / slide-09-classify-the-purpose

Path: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-09-frameworks.json`; field: `blocks.1.rows.1.2`.

Current EN: Correct for this adopted internal requirement.

Current TH: ตรงกับข้อกำหนดภายในที่รับใช้ในตัวอย่าง

Proposed EN: Correct for this adopted internal requirement.

Proposed TH: ตรงกับข้อกำหนดภายในที่นำมาบังคับใช้ในตัวอย่าง

### FC-011 related field — lesson-d1-09-frameworks / slide-09-classify-the-purpose

Path: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-09-frameworks.json`; field: `blocks.1.rows.3.2`.

Current EN: “Must” here expresses an adopted requirement.

Current TH: คำว่าต้องในที่นี้เป็นข้อกำหนดที่รับใช้

Proposed EN: “Must” here expresses an adopted requirement.

Proposed TH: คำว่าต้องในที่นี้เป็นข้อกำหนดที่นำมาบังคับใช้

### FC-011 related field — lesson-d1-09-frameworks / slide-09-classify-the-purpose

Path: `content/isc2-cc-2026/learning/published/lessons/lesson-d1-09-frameworks.json`; field: `blocks.2.text`.

Current EN: This original non-scored exercise applies A §32 and B §7.1. The organisation has adopted a mandatory MFA requirement for its in-scope administrative accounts. Standard is the best function because the statement specifies a condition that must be met. Policy would give the broader direction to protect privileged access. Procedure would give ordered instructions for enrolment, verification and support. Guideline would recommend an approach where choice is allowed. Do not classify by spotting one keyword alone: read what the statement does, who issued it and its scope. A document titled policy may contain a standard-like clause; this exercise asks for the clause function, not the filename. The feedback explains each choice in both languages and changes no exam score or progress schema. Real implementation requirements still depend on the organisation and applicable obligations.

Current TH: แบบฝึกแต่งขึ้นไม่มีคะแนนนี้ประยุกต์ A §32 และ B §7.1 องค์กรรับใช้ข้อกำหนด MFA กับบัญชีผู้ดูแลในขอบเขตแล้ว Standard เป็นหน้าที่ที่ตรงที่สุด เพราะระบุเงื่อนไขเฉพาะที่ต้องทำตาม Policy จะเป็นทิศทางกว้างเพื่อปกป้องสิทธิ์สูง Procedure จะบอกขั้นตอนลงทะเบียน ตรวจ และสนับสนุน ส่วน Guideline แนะนำวิธีเมื่อเลือกได้ อย่าตัดสินด้วย Keyword คำเดียว ต้องอ่านหน้าที่ ผู้กำหนด และขอบเขต เอกสารชื่อ Policy อาจมีข้อแบบ Standard อยู่ แบบฝึกถามหน้าที่ของข้อความ ไม่ใช่ชื่อไฟล์ Feedback อธิบายทุกตัวเลือกทั้งสองภาษา ไม่เปลี่ยนคะแนนสอบหรือโครงสร้าง Progress การใช้จริงยังขึ้นกับองค์กรและหน้าที่ที่เกี่ยวข้อง

Proposed EN: This original non-scored exercise applies A §32 and B §7.1. The organisation has adopted a mandatory MFA requirement for its in-scope administrative accounts. Standard is the best function because the statement specifies a condition that must be met. Policy would give the broader direction to protect privileged access. Procedure would give ordered instructions for enrolment, verification and support. Guideline would recommend an approach where choice is allowed. Do not classify by spotting one keyword alone: read what the statement does, who issued it and its scope. A document titled policy may contain a standard-like clause; this exercise asks for the clause function, not the filename. The feedback explains each choice in both languages and changes no exam score or progress schema. Real implementation requirements still depend on the organisation and applicable obligations.

Proposed TH: แบบฝึกแต่งขึ้นไม่มีคะแนนนี้ประยุกต์ A §32 และ B §7.1 องค์กรนำมาบังคับใช้ข้อกำหนด MFA กับบัญชีผู้ดูแลในขอบเขตแล้ว Standard เป็นหน้าที่ที่ตรงที่สุด เพราะระบุเงื่อนไขเฉพาะที่ต้องทำตาม Policy จะเป็นทิศทางกว้างเพื่อปกป้องสิทธิ์สูง Procedure จะบอกขั้นตอนลงทะเบียน ตรวจ และสนับสนุน ส่วน Guideline แนะนำวิธีเมื่อเลือกได้ อย่าตัดสินด้วย Keyword คำเดียว ต้องอ่านหน้าที่ ผู้กำหนด และขอบเขต เอกสารชื่อ Policy อาจมีข้อแบบ Standard อยู่ แบบฝึกถามหน้าที่ของข้อความ ไม่ใช่ชื่อไฟล์ Feedback อธิบายทุกตัวเลือกทั้งสองภาษา ไม่เปลี่ยนคะแนนสอบหรือโครงสร้าง Progress การใช้จริงยังขึ้นกับองค์กรและหน้าที่ที่เกี่ยวข้อง

### FC-012 related field — lesson-d2-01-grc-foundations / slide-02-purpose-of-grc

Path: `content/isc2-cc-2026/learning/published/lessons/lesson-d2-01-grc-foundations.json`; field: `blocks.1.rows.1.0`.

Current EN: Identify and manage risks

Current TH: Identify and manage risks

Proposed EN: Identify and manage risks

Proposed TH: ระบุและจัดการความเสี่ยง

### FC-012 related field — lesson-d2-01-grc-foundations / slide-02-purpose-of-grc

Path: `content/isc2-cc-2026/learning/published/lessons/lesson-d2-01-grc-foundations.json`; field: `blocks.1.rows.2.0`.

Current EN: Meet legal and regulatory obligations

Current TH: Meet legal and regulatory obligations

Proposed EN: Meet legal and regulatory obligations

Proposed TH: ปฏิบัติตามหน้าที่ตามกฎหมายและข้อบังคับ

### FC-012 related field — lesson-d2-01-grc-foundations / slide-02-purpose-of-grc

Path: `content/isc2-cc-2026/learning/published/lessons/lesson-d2-01-grc-foundations.json`; field: `blocks.1.rows.3.0`.

Current EN: Establish consistent policies and controls

Current TH: Establish consistent policies and controls

Proposed EN: Establish consistent policies and controls

Proposed TH: กำหนดนโยบายและมาตรการที่สอดคล้องกัน

### FC-012 related field — lesson-d2-01-grc-foundations / slide-02-purpose-of-grc

Path: `content/isc2-cc-2026/learning/published/lessons/lesson-d2-01-grc-foundations.json`; field: `blocks.1.rows.4.0`.

Current EN: Improve accountability

Current TH: Improve accountability

Proposed EN: Improve accountability

Proposed TH: ทำให้ความรับผิดชอบชัดเจน

### FC-012 related field — lesson-d2-01-grc-foundations / slide-02-purpose-of-grc

Path: `content/isc2-cc-2026/learning/published/lessons/lesson-d2-01-grc-foundations.json`; field: `blocks.1.rows.5.0`.

Current EN: Support informed decision-making

Current TH: Support informed decision-making

Proposed EN: Support informed decision-making

Proposed TH: สนับสนุนการตัดสินใจอย่างมีข้อมูล

### FC-012 related field — lesson-d2-01-grc-foundations / slide-02-purpose-of-grc

Path: `content/isc2-cc-2026/learning/published/lessons/lesson-d2-01-grc-foundations.json`; field: `blocks.1.rows.6.0`.

Current EN: Reduce duplication of security and compliance efforts

Current TH: Reduce duplication of security and compliance efforts

Proposed EN: Reduce duplication of security and compliance efforts

Proposed TH: ลดงานความปลอดภัยและการปฏิบัติตามข้อกำหนดที่ซ้ำซ้อน

## Partial reviews retained pending evidence

### lesson-d1-09-frameworks / slide-03-iso-isms — pending-source-verification

Actual EN/TH content and all modes read. ISMS establishment/implementation/maintenance/improvement agrees with user Source A §33; risk/people/process/technology scope and no guarantee appropriate. Independent source check of ISO requirement/certification assertions remains pending: ISO official pages and public PDF endpoints returned HTTP403, search connector503. Earlier implementation approval was not substituted as independent evidence. Paired Presentation/Reading/shared expanded Info and lesson outcomes/prerequisites/reference scope reviewed.

Still required: Obtain independent readable ISO primary-source evidence for ISMS requirements and certification responsibilities; official endpoints HTTP403 and search503. Semantic/bilingual reading preserved, not counted complete.

This slide remains in the pending count.

### lesson-d2-01-grc-foundations / slide-04-grc-frameworks — pending-source-verification

All paired content/modes read. Actual S07 and user notes support NIST/ISMS/COBIT purposes. Fresh NIST/ISACA corroborate outcomes/governance roles; HHS/EDPB/PCI/DoD corroborate bounded illustrative regimes. FC-017 clarifies Thai sequence ambiguity. Independent ISO certification/voluntary-model verification remains pending due official HTTP403 and search503; no prior implementation approval substituted. Paired Presentation/Reading/shared Info and lesson outcomes/prerequisites/reference scope reviewed.

Still required: Independently verify ISO voluntary certification/requirements statements from a readable primary ISO source; reuse pending D1 ISO evidence task. CMMC high-level contract context was verified against official DoD page; no detailed phase/version assertion needed.

This slide remains in the pending count.

## Preservation checkpoint

Compared 692 protected files with the recorded entry baseline. 9 hash differences observed; 0 outside CSS. The audit wrote no production content or CSS. Concurrent CSS changes are retained; the original baseline is unchanged. Exact before/after hashes are in protected-file-comparison.json. This is not a zero-delta preservation result. The earlier zero-delta checkpoint was superseded by this comparison. Tracker edits replace only the audit row and assert that all other tracker text is retained.

- css/learning-aaa-presentations.css
- css/learning-domain3-lesson-shell.css
- css/learning-domain4-presentations.css
- css/learning-domain5-presentations.css
- css/learning-iam-review-deprovisioning.css
- css/learning-iam-roles-provisioning.css
- css/learning-presentation.css
- css/learning-security-reporting.css
- css/learning.css
