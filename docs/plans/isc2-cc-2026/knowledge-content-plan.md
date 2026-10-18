# ISC2 CC 2026 Knowledge Repository Content Plan

## 1. Overview & Architecture

The **Knowledge Repository** is a documentation-first educational repository designed to store structured cybersecurity concepts, domain overviews, technical explanations, and bilingual terminology before question creation.

### Design Principles
1. **Documentation-First:** All educational concepts must be articulated and vetted in Markdown format before being used to construct or validate quiz questions.
2. **Strict Bilingual Parity:** Every concept entry must provide high-quality English and Thai explanations. Industry-standard acronyms and technical terms (e.g., *Confidentiality, Integrity, Availability, AAA, Zero Trust, PoLP*) must be explained clearly in both languages.
3. **Traceable Provenance:** Every concept must cite its authoritative source (e.g., official ISC2 outline, NIST special publications, ISO standards, or user-supplied study guides).
4. **Zero Runtime Overhead:** Knowledge documents are stored as version-controlled Markdown in the repository staging area ([`content/isc2-cc-2026/knowledge/`](file:///D:/_Coding/SEC-CERT-TEST/content/isc2-cc-2026/knowledge/)) and do not require a database.

---

## 2. Directory Layout & Architectural Reconciliation

> [!NOTE]
> **Architectural Reconciliation (ADR-09):**
> An earlier draft proposed distributing knowledge notes across subdirectories under `docs/knowledge/isc2-cc-2026/`. To unify content staging and prevent competing repositories, all knowledge staging now resides alongside practice questions in [`content/isc2-cc-2026/`](file:///D:/_Coding/SEC-CERT-TEST/content/isc2-cc-2026/). Engineering plans remain under `docs/plans/isc2-cc-2026/`.

Knowledge staging files are structured per domain under the `content/isc2-cc-2026/knowledge/` tree:

```
content/
└── isc2-cc-2026/
    ├── README.md                              # Staging index & editorial guide
    ├── templates/
    │   ├── knowledge-template.md              # Canonical knowledge entry template
    │   ├── question-template.md               # Canonical question staging template
    │   └── content-batch-template.md          # Batch intake & legal assessment
    ├── knowledge/
    │   ├── domain-1.md                        # Domain 1: Security Principles (24%)
    │   ├── domain-2.md                        # Domain 2: Security Governance (17.3%)
    │   ├── domain-3.md                        # Domain 3: IAM Concepts (20%)
    │   ├── domain-4.md                        # Domain 4: Networking & Cloud (21.3%)
    │   └── domain-5.md                        # Domain 5: Security Operations & IR (17.3%)
    └── questions/
        ├── domain-1.md                        # Staged D1 Practice Questions
        ├── domain-2.md                        # Staged D2 Practice Questions
        ├── domain-3.md                        # Staged D3 Practice Questions
        ├── domain-4.md                        # Staged D4 Practice Questions
        └── domain-5.md                        # Staged D5 Practice Questions
```

---

## 3. Knowledge Entry Specification

Each knowledge document represents a single sub-objective or core topic and follows a standardized template comprising YAML frontmatter and structured Markdown sections.

### Frontmatter Schema (YAML)

| Field | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `id` | `string` | **Yes** | Unique slug, e.g., `d1-obj1.1-cybersecurity-concepts` |
| `domain_id` | `integer` | **Yes** | Domain number (`1` to `5`) |
| `domain_name` | `string` | **Yes** | Official domain name |
| `objective_id` | `string` | **Yes** | Numbered code (e.g. `1.1`) or provisional code (e.g. `4.A`) |
| `objective_title` | `string` | **Yes** | Official or confirmed objective title |
| `topic_name` | `string` | **Yes** | Specific subject title |
| `source_reference` | `string` | **Yes** | Citation (book title, publication code, official link) |
| `provenance_tier` | `string` | **Yes** | `Tier 1: Official` / `Tier 2: User Reference` / `Tier 4: SEC CERT TEST` |
| `review_status` | `string` | **Yes** | `draft` \| `in-review` \| `approved` \| `needs-revision` |
| `reviewer` | `string` | No | Name or identifier of technical reviewer |
| `last_verified_date` | `string` | **Yes** | ISO date (`YYYY-MM-DD`) |

---

## 4. Reference Template & Concrete Examples

> [!NOTE]
> The following examples demonstrate the required formatting and depth for future study notes. They do not constitute active question data.

### Example 1: Domain 1 — CIA Triad & Fundamentals

```markdown
---
id: d1-obj1.1-cia-triad
domain_id: 1
domain_name: Security Principles
objective_id: "1.1"
objective_title: Understand cybersecurity concepts
topic_name: CIA Triad and Fundamental Security Goals
source_reference: "ISC2 Certified in Cybersecurity Exam Outline (Effective Sept 1, 2026); NIST SP 800-33"
provenance_tier: "Tier 1: Official ISC2 Objective / Tier 4: Educational Commentary"
review_status: approved
reviewer: Lead Cybersecurity Educator
last_verified_date: 2026-10-17
---

# CIA Triad and Fundamental Security Goals

## English Explanation
The CIA Triad forms the foundational model for information security across all modern computing environments:
- **Confidentiality:** Preserving authorized restrictions on information access and disclosure, including means for protecting personal privacy and proprietary information. A loss of confidentiality is the unauthorized disclosure of information.
- **Integrity:** Guarding against improper information modification or destruction, including ensuring information non-repudiation and authenticity. A loss of integrity is the unauthorized modification or destruction of information.
- **Availability:** Ensuring timely and reliable access to and use of information. A loss of availability is the disruption of access to or use of information or an information system.

Complementary concepts include **Non-repudiation** (inability to deny the authenticity of a signature or message) and **Privacy** (rights of individuals to control how personal data is collected and used).

## Thai Explanation (คำอธิบายภาษาไทย)
โมเดลสามเหลี่ยม CIA (CIA Triad) เป็นกรอบแนวคิดพื้นฐานด้านความมั่นคงปลอดภัยสารสนเทศ:
- **Confidentiality (การรักษาความลับ):** การจำกัดการเข้าถึงและการเปิดเผยข้อมูลเฉพาะผู้ที่ได้รับอนุญาต รวมถึงการคุ้มครองข้อมูลส่วนบุคคลและข้อมูลความลับทางธุรกิจ การสูญเสียความลับหมายถึงการมีผู้ไม่ได้รับอนุญาตล่วงรู้หรือเข้าถึงข้อมูล
- **Integrity (ความถูกต้องครบถ้วน):** การป้องกันไม่ให้ข้อมูลถูกดัดแปลง เปลี่ยนแปลง หรือทำลายโดยไม่ได้รับอนุญาต รวมถึงการรับประกันว่าข้อมูลถูกต้องตามความเป็นจริงและไม่สามารถปฏิเสธความรับผิดได้
- **Availability (ความพร้อมใช้งาน):** การทำให้ระบบและข้อมูลมีความพร้อมให้บริการแก่ผู้มีสิทธิ์ใช้งานได้ในเวลาที่ต้องการ การสูญเสียความพร้อมใช้งานหมายถึงระบบหยุดชะงัก ล่ม หรือไม่สามารถเข้าถึงได้

แนวคิดเสริมที่สำคัญได้แก่ **Non-repudiation (การปฏิเสธความรับผิดไม่ได้)** เพื่อพิสูจน์ว่าผู้ส่งเป็นผู้ทำธุรกรรมจริง และ **Privacy (ความเป็นส่วนตัว)** สิทธิของบุคคลในการควบคุมข้อมูลส่วนบุคคลของตน

## Key Terminology (ตารางคำศัพท์สำคัญ)

| Term (EN) | ความหมาย (TH) | Technical Definition |
| :--- | :--- | :--- |
| **Confidentiality** | การรักษาความลับ | Ensuring data is unreadable by unauthorized parties via access controls and encryption. |
| **Integrity** | ความถูกต้องครบถ้วน | Ensuring data has not been altered in transit or storage using hashing and digital signatures. |
| **Availability** | ความพร้อมใช้งาน | Ensuring resources are accessible when needed through redundancy, failover, and backups. |
| **Non-repudiation** | การปฏิเสธความรับผิดไม่ได้ | Cryptographic proof of origin and delivery preventing denial of actions (e.g., digital signatures). |

## Practical Scenario & Countermeasures
- *Scenario:* A hospital patient database is encrypted by ransomware, and backups are offline.
- *Security Impact:* Complete loss of **Availability** (doctors cannot view records) and potential threat to **Confidentiality** if data is exfiltrated.
- *Countermeasure:* Automated off-site immutable backups, network micro-segmentation, and endpoint behavioral detection.

## AI Security Considerations
In AI workloads, the CIA triad expands to cover machine learning pipelines:
- **Confidentiality:** Protecting proprietary training weights and sensitive training prompts.
- **Integrity:** Defending against **Model Poisoning** where malicious samples alter inference accuracy.
- **Availability:** Preventing **Denial of Service (DoS)** attacks that overload GPU inference clusters with complex token requests.
```

---

### Example 2: Domain 4 — Zero Trust Architecture

```markdown
---
id: d4-topic-c-zero-trust
domain_id: 4
domain_name: Networking and Cloud Security Concepts
objective_id: "4.C"
objective_title: Network Security Architecture
topic_name: Zero Trust Architecture (ZTA)
source_reference: "NIST SP 800-207 Zero Trust Architecture; ISC2 CC 2026 Reference Outline"
provenance_tier: "Tier 2: User Reference / Tier 4: Educational Commentary"
review_status: approved
reviewer: Lead Network Security Engineer
last_verified_date: 2026-10-17
---

# Zero Trust Architecture (ZTA)

## English Explanation
Zero Trust is an evolving cybersecurity paradigm that shifts defenses from static, network-based perimeters to users, assets, and individual resources:
- **Core Axiom:** *Never Trust, Always Verify.*
- **Assume Breach:** Security operations operate under the premise that adversaries are already inside the network perimeter.
- **Explicit Verification:** Every access request is dynamically authenticated, authorized, and encrypted based on all available data points (identity, location, device health, service classification, and anomaly detection).
- **Least Privilege:** Access is granted strictly on a just-in-time and just-enough basis (JIT/JEA), enforced through micro-segmentation rather than broad subnet access.

## Thai Explanation (คำอธิบายภาษาไทย)
สถาปัตยกรรม Zero Trust คือกรอบแนวคิดความปลอดภัยยุคใหม่ที่เปลี่ยนจากการพึ่งพาการป้องกันขอบเขตเครือข่ายภายนอก (Perimeter Security) มาเป็นการปกป้องที่ตัวผู้ใช้ อุปกรณ์ และทรัพยากรแต่ละชิ้น:
- **หลักการสำคัญ:** *ห้ามไว้วางใจ ตรวจสอบอย่างต่อเนื่องเสมอ (Never Trust, Always Verify)*
- **สมมติฐานว่าถูกโจมตีแล้ว (Assume Breach):** ปฏิบัติงานโดยตั้งสมมติฐานว่ามีผู้ไม่ประสงค์ดีแฝงตัวอยู่ในเครือข่ายภายในแล้ว
- **การตรวจสอบอย่างชัดเจน (Explicit Verification):** ทุกคำขอเข้าถึงต้องได้รับการยืนยันตัวตน กำหนดสิทธิ์ และเข้ารหัสอย่างต่อเนื่อง โดยพิจารณาบริบท เช่น ตัวตน สถานที่ สถานะความปลอดภัยของอุปกรณ์ และพฤติกรรมผิดปกติ
- **การให้สิทธิ์เท่าที่จำเป็น (Least Privilege):** ผู้ใช้จะได้รับสิทธิ์เข้าถึงเฉพาะทรัพยากรที่จำเป็นต่องานเท่านั้น ผ่านการแบ่งส่วนเครือข่ายแบบละเอียด (Micro-segmentation)

## Key Terminology (ตารางคำศัพท์สำคัญ)

| Term (EN) | ความหมาย (TH) | Technical Definition |
| :--- | :--- | :--- |
| **Micro-segmentation** | การแบ่งส่วนเครือข่ายแบบละเอียด | Isolating individual workloads in data centers and clouds to prevent lateral movement. |
| **Policy Enforcement Point (PEP)** | จุดบังคับใช้นโยบาย | The component responsible for enabling, monitoring, and terminating connections to a resource. |
| **Least Privilege** | หลักการให้สิทธิ์เท่าที่จำเป็น | Restricting user and service rights only to what is essential for authorized tasks. |
```

---

## 5. Review & Approval Workflow

```
[Draft Created]
       │
       ▼
[Technical Review] ──(Defects Found)──► [Needs Revision]
       │                                       │
  (Passes Audit)                               ▼
       │                               [Author Updates]
       ▼                                       │
[Bilingual Review]                             │
       │                                       │
  (Approved) ◄─────────────────────────────────┘
       │
       ▼
[Published to Knowledge Base]
```

### Review Stages
1. **Technical Accuracy Audit:** A senior engineer checks that definitions, protocols, algorithms, and models comply with official RFCs, NIST publications, and ISC2 guidelines.
2. **Bilingual Parity Check:** A bilingual editor ensures Thai translations accurately convey technical intent without awkward literal translations or loss of acronym context.
3. **Traceability Check:** Confirms that references and citations are recorded and valid.
4. **Sign-off:** The status is updated to `review_status: approved` and committed to version control.
