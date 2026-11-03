# ISC2 CC 2026 — Domain 3: Identity and Access Management (IAM) Concepts

> **Complete Extended Study Guide | ภาษาไทย + English Terms | ฉบับละเอียดพร้อมตัวอย่างและข้อสอบ**  
> **ขอบเขต:** ครอบคลุมทุกหัวข้อที่เราเรียนจากสไลด์จนถึง ABAC และเพิ่มเนื้อหาประกอบเพื่อความเข้าใจ ไม่ได้อ้างว่าเป็นรายการหัวข้อสอบอย่างเป็นทางการทั้งหมดของ ISC2 CC 2026  
> **การอ่าน:** ป้าย **[เรียนจากสไลด์]** หมายถึงประเด็นที่อยู่ในสไลด์/บทสนทนาการเรียน; **[เสริม]** คือความรู้ขยายความ ไม่ควรสับสนว่าเป็นข้อความจากสไลด์หรือข้อกำหนดของข้อสอบ

---

## สารบัญ

1. [ภาพรวม IAM และแผนที่ความรู้](#1-ภาพรวม-iam-และแผนที่ความรู้)
2. [Objective 3.1 — Identity Life Cycle Management](#2-objective-31--identity-life-cycle-management)
3. [Roles Definition และ Responsibilities](#3-roles-definition-และ-responsibilities)
4. [Provisioning และ Identity Creation](#4-provisioning-และ-identity-creation)
5. [Access Review และ Privilege Accumulation](#5-access-review-และ-privilege-accumulation)
6. [Deprovisioning](#6-deprovisioning)
7. [IAM Management Frameworks](#7-iam-management-frameworks)
8. [IAM Tools และ Technologies](#8-iam-tools-และ-technologies)
9. [Principle of Least Privilege](#9-principle-of-least-privilege)
10. [Objective 3.2 — Logical Access Controls](#10-objective-32--logical-access-controls)
11. [Segregation of Duties (SoD)](#11-segregation-of-duties-sod)
12. [Access Control Models — DAC, MAC, RBAC, ABAC](#12-access-control-models--dac-mac-rbac-abac)
13. [Authentication, Authorization และ Accounting — เนื้อหาเสริม](#13-authentication-authorization-และ-accounting--เนื้อหาเสริม)
14. [MFA, SSO, Federation และ Identity Protocols — เนื้อหาเสริม](#14-mfa-sso-federation-และ-identity-protocols--เนื้อหาเสริม)
15. [Access Control Mechanisms และ Privileged Access — เนื้อหาเสริม](#15-access-control-mechanisms-และ-privileged-access--เนื้อหาเสริม)
16. [สถานการณ์บูรณาการ IAM](#16-สถานการณ์บูรณาการ-iam)
17. [ตารางเปรียบเทียบสำคัญ](#17-ตารางเปรียบเทียบสำคัญ)
18. [Practice Questions พร้อมเฉลย](#18-practice-questions-พร้อมเฉลย)
19. [Glossary และ Final Revision Sheet](#19-glossary-และ-final-revision-sheet)

---

# 1. ภาพรวม IAM และแผนที่ความรู้

**[เรียนจากสไลด์ + เรียบเรียง]** Identity and Access Management (IAM) คือการบริหารตัวตนของผู้ใช้และสิทธิ์เข้าถึงทรัพยากรขององค์กรอย่างเหมาะสมตลอดวงจรชีวิตของตัวตนนั้น

คำถามหลักที่ IAM ต้องตอบ:

- **Who are you?** — คุณคือใคร (Identity)
- **How do we verify you?** — ยืนยันว่าเป็นคุณจริงอย่างไร (Authentication)
- **What can you access/do?** — เข้าถึงอะไรและทำอะไรได้ (Authorization)
- **Who should approve access?** — ใครมีหน้าที่อนุมัติสิทธิ์ (Governance)
- **Does access remain necessary?** — สิทธิ์ยังจำเป็นหรือไม่ (Access Review)
- **When must it be removed?** — เมื่อใดต้องถอนสิทธิ์ (Deprovisioning)

**แผนที่ภาพรวม:**

```text
Define Roles / Responsibilities
             |
             v
Create Identity + Provision Access
             |
             v
Authenticate + Authorize + Apply Controls
   (Least Privilege, SoD, DAC/MAC/RBAC/ABAC)
             |
             v
Periodic Access Review / Role Changes
             |
             v
Deprovision Access When No Longer Needed
```

> แผนภาพเป็นกรอบช่วยจำ ไม่ใช่ขั้นตอนตายตัว: การตรวจสอบสิทธิ์ การเปลี่ยนสิทธิ์ และการเพิกถอนอาจเกิดขึ้นตลอดวงจรชีวิต

**[เสริม]** แยกคำพื้นฐาน:

| คำ | ความหมาย | ตัวอย่าง |
|---|---|---|
| Identity | ตัวตนที่ระบบใช้ระบุผู้ใช้ | Employee ID, username |
| Account | บัญชีที่ใช้กับระบบ | `alice@company.example` |
| Credential | สิ่งที่ใช้พิสูจน์ตัวตน | Password, passkey, certificate |
| Role | บทบาทหรือหน้าที่ | HR Manager |
| Permission | สิทธิ์ในการกระทำ | Read, Write, Delete |
| Resource / Object | สิ่งที่ถูกเข้าถึง | File, database, application |
| Subject | ผู้ใช้หรือ process ที่ขอเข้าถึง | Alice, service process |
| Policy | กฎการอนุญาตหรือปฏิเสธ | Finance-only, company-device-only |

---

# 2. Objective 3.1 — Identity Life Cycle Management

**[เรียนจากสไลด์]** วงจรชีวิตของ Identity ครอบคลุมการสร้าง จัดการ ตรวจสอบ ปรับเปลี่ยน และยกเลิกการเข้าถึงเมื่อไม่จำเป็น

## Joiner — Mover — Leaver (JML)

| ระยะ | เหตุการณ์ | IAM Action | ความเสี่ยงถ้าทำไม่ดี |
|---|---|---|---|
| **Joiner** | เข้าทำงานใหม่ | Create identity, provision role-based access | ได้สิทธิ์เกินงานตั้งแต่ต้น |
| **Mover** | ย้ายแผนก/เลื่อนตำแหน่ง | Review, add needed access, remove old access | Privilege accumulation |
| **Leaver** | ลาออก/สิ้นสุดสัญญา | Disable/revoke access | อดีตพนักงานยังล็อกอินได้ |

**ตัวอย่างต่อเนื่อง:** Bob เริ่มงาน Finance → ได้ Accounting Access; ย้ายไป IT → เพิ่มสิทธิ์ IT ที่จำเป็นและถอน Finance Access ที่ไม่จำเป็น; ลาออก → ปิดบัญชีและถอนสิทธิ์ทั้งหมดตามกระบวนการองค์กร

**[เสริม]** Identity Lifecycle ไม่ได้มีแค่คน: service accounts, bots, contractors และ machine identities ก็ต้องมีเจ้าของ ระยะเวลาใช้งาน การทบทวน และการยกเลิกที่เหมาะสม

---

# 3. Roles Definition และ Responsibilities

**[เรียนจากสไลด์]** ก่อนให้ Access องค์กรควรกำหนด Roles and Responsibilities ว่าผู้ใช้ทำงานอะไรและต้องมีสิทธิ์อะไร

## ความสัมพันธ์ที่ควรจำ

**Role → Job Function → Required Access**

| Role | หน้าที่ | Access ตัวอย่าง | สิทธิ์ที่ไม่ควรได้โดยอัตโนมัติ |
|---|---|---|---|
| HR Manager | จัดการข้อมูลพนักงาน | HR/employee records | Network Admin |
| Network Administrator | บริหารอุปกรณ์เครือข่าย | Network management | Payroll approval |
| Database Administrator | บริหารฐานข้อมูล | DB administration | ทุกไฟล์ HR โดยไม่มีเหตุผล |
| Security Analyst | ตรวจสอบเหตุการณ์ Security | Monitoring/SIEM ตามงาน | Full financial approval |
| Finance Employee | ทำบัญชี/การเงิน | Accounting system | Administrative access to network devices |

## Role ไม่เท่ากับ Permission

- **Role** บอกตำแหน่ง/หน้าที่ เช่น Finance Employee
- **Permission** บอกการกระทำ เช่น `read:invoice`, `approve:payment`
- **Group** อาจใช้รวมผู้ใช้และผูก Permission เพื่อให้บริหารสะดวก แต่ Group ไม่ได้เท่ากับ Role เสมอไป **[เสริม]**

**[เสริม] Role Engineering:** ก่อนสร้าง Role ควรระบุหน้าที่จริง แยกงานที่ขัดแย้งกัน ออกแบบ Permission ให้พอดี และทบทวนเมื่อหน้าที่เปลี่ยน หากสร้าง Role มากเกินจำเป็นอาจเกิด **Role Explosion** (จำนวน Role มากจนดูแลยาก)

**Exam clue:** “Before granting access” → Define roles/responsibilities; “Permissions assigned based on job function” → RBAC

---

# 4. Provisioning และ Identity Creation

**[เรียนจากสไลด์]** Provisioning = สร้าง Identity และจัดสรร Access ที่จำเป็นเพื่อให้ทำงานได้

## หกกิจกรรมตามสไลด์

1. **Creating a User Account** — สร้างบัญชีในระบบ
2. **Assigning a Unique Identity** — ระบุผู้ใช้ไม่ซ้ำกับผู้อื่น
3. **Assigning Roles** — ผูก Role ที่เหมาะสม
4. **Granting Permissions** — กำหนดสิทธิ์ เช่น Read/Write
5. **Providing Access to Applications** — เปิดให้ใช้ Application ที่จำเป็น
6. **Issuing Authentication Credentials** — จัดเตรียมวิธีพิสูจน์ตัวตน

## ตัวอย่าง Finance Joiner

```text
HR แจ้งรับพนักงานใหม่
 -> สร้าง Identity และ Account
 -> กำหนด Finance Role
 -> อนุมัติ Accounting Access ตามงาน
 -> จัดเตรียม Credential และ MFA (เสริม)
 -> ตรวจสอบว่าเข้าระบบที่จำเป็นได้
```

**[เสริม]** ขั้นตอนที่ควรควบคุม: มีผู้อนุมัติที่เหมาะสม, บันทึกหลักฐาน, ไม่แชร์บัญชีส่วนบุคคล, ให้สิทธิ์ตาม Least Privilege และกำหนดวันหมดอายุเมื่อเป็นการเข้าถึงชั่วคราว

**[เสริม]** **Provisioning vs Registration vs Authentication**: Registration/Enrollment คือเริ่มบันทึกข้อมูลตัวตน; Provisioning คือจัดสรรบัญชี/สิทธิ์; Authentication คือพิสูจน์ตัวตนในขณะใช้งาน — อาจเชื่อมโยงกันแต่ไม่ใช่สิ่งเดียวกัน

---

# 5. Access Review และ Privilege Accumulation

**[เรียนจากสไลด์]** Access Review คือการตรวจสิทธิ์เป็นระยะว่า **ยังเหมาะสม** กับงานและสถานะปัจจุบันหรือไม่

| สิ่งที่ตรวจพบ | อธิบาย | การตอบสนองที่เหมาะสม |
|---|---|---|
| Excessive permissions | สิทธิ์มากกว่าที่จำเป็น | ลดสิทธิ์ |
| Unused accounts | บัญชีไม่ได้ใช้งาน | ตรวจสอบและปิดตาม Policy |
| Inappropriate access | Access ไม่ตรงหน้าที่ | ถอน/ปรับสิทธิ์ |
| Role changes | ย้ายตำแหน่งแล้วสิทธิ์ไม่อัปเดต | Reconcile Role/Permissions |
| Privilege accumulation | สิทธิ์เก่าสะสมจากหลายตำแหน่ง | Remove unnecessary legacy privileges |
| Orphaned accounts | บัญชีไม่มีเจ้าของ/ผู้รับผิดชอบที่เหมาะสม | ระบุเจ้าของหรือยกเลิก |

## ตัวอย่างหลักในสไลด์

พนักงานย้ายจาก **Finance → IT** มาแล้ว 6 เดือน แต่ยังเข้าถึง **Financial Reporting System** ได้ นี่เป็นตัวอย่างของ Access ที่ต้องถูก Review และอาจเป็น Privilege Accumulation

## แยกคำที่คล้ายกัน

- **Privilege Accumulation / Privilege Creep** — สิทธิ์สะสมเกินงานที่ต้องทำ
- **Orphaned Account** — Account ไม่มีเจ้าของ/ผู้รับผิดชอบที่เหมาะสมหรือยังคงอยู่หลังผู้ใช้จากไป
- **Dormant/Unused Account** — Account ไม่ได้ใช้งานช่วงหนึ่ง ไม่จำเป็นต้องเป็น orphaned
- **Access Recertification** **[เสริม]** — การให้ผู้รับผิดชอบยืนยันสิทธิ์อีกครั้งอย่างเป็นทางการ

**[เสริม]** การทำ Review ที่ดีควรมีขอบเขตผู้ใช้/ระบบ, ผู้รับผิดชอบตรวจ, หลักฐานการอนุมัติ, การจัดการข้อผิดพลาด และการติดตามว่าถอนสิทธิ์จริง ไม่ใช่เพียงเซ็นรับทราบ

**Exam clue:** “Periodically verify access” → Access Review; “Old access retained after transfer” → Privilege accumulation

---

# 6. Deprovisioning

**[เรียนจากสไลด์]** Deprovisioning คือการ **Remove หรือ Disable Access** เมื่อไม่มีความจำเป็นอีกต่อไป

## Triggers จากสไลด์

- Employee termination — ถูกเลิกจ้าง
- Employee resignation — ลาออก
- Role change — เปลี่ยนตำแหน่ง
- Contract expiration — หมดสัญญา

## Actions จากสไลด์

- Disabling user account
- Revoking application access
- Removing group memberships
- Revoking privileged access

## ความเข้าใจที่ต้องแม่น

**Deprovisioning ไม่ได้แปลว่าลบ Account เสมอ** อาจ Disable, Revoke หรือ Remove Membership เฉพาะส่วน ขึ้นกับเหตุการณ์และ Policy

**[เสริม]** องค์กรอาจต้องยุติ Sessions, revoke tokens, rotate shared secrets ที่บุคคลเคยเข้าถึง, ตรวจบัญชีบน SaaS/Cloud และคง Audit Records ตามข้อกำหนด การเก็บหลักฐานไม่จำเป็นต้องคงสิทธิ์ล็อกอิน

**Provisioning = Create/Grant**; **Deprovisioning = Remove/Disable**

---

# 7. IAM Management Frameworks

**[เรียนจากสไลด์]** องค์กรสามารถใช้ Frameworks/Standards เป็นแนวทางจัดการ Identity และ Access

## NIST SP 800-63

เน้น **Digital Identity** รวมถึง:

- **Identity Proofing** — ตรวจสอบว่าบุคคลเป็นผู้ที่อ้างว่าเป็นจริง
- **Authentication** — พิสูจน์ตัวตนเมื่อใช้งาน
- **Federation** — การใช้ผลการพิสูจน์ตัวตน/ข้อมูล Identity ข้าม Trust Boundary ตามความสัมพันธ์ที่กำหนด

**[เสริม]** คำว่า Identity Proofing ไม่เหมือน Authentication: Proofing เน้นการยืนยันความสัมพันธ์กับตัวตนจริงตอนสร้าง/ยืนยัน Identity ส่วน Authentication เน้นการพิสูจน์ว่าเป็นผู้ครอบครอง Credential ที่ผูกกับ Identity ขณะใช้งาน

## NIST Cybersecurity Framework (CSF)

เป็นกรอบ **Cybersecurity Risk Management** ภาพกว้าง มีการปฏิบัติที่เกี่ยวข้องกับ IAM แต่ไม่ได้เป็นเอกสารเฉพาะเรื่อง Digital Identity

| Framework | จุดจำ |
|---|---|
| NIST SP 800-63 | Digital Identity / Proofing / Authentication / Federation |
| NIST CSF | Broader Cybersecurity Risk Management |

> **หมายเหตุ:** ส่วนนี้สรุปตามกรอบในสไลด์ ไม่ใช่การถอดเนื้อหาหรือข้อกำหนดเชิงลึกของ NIST ฉบับเต็ม

---

# 8. IAM Tools และ Technologies

**[เรียนจากสไลด์]** IAM Tools ช่วยจัดการ Identity และ Access โดยมีความสามารถ:

1. User Account Management
2. Authentication
3. Authorization
4. Role Management
5. Access Provisioning
6. Access Reviews
7. Deprovisioning

## เทคโนโลยี 3 กลุ่มจากสไลด์

| Technology | ความหมาย | ตัวอย่างเชิงแนวคิด |
|---|---|---|
| Directory Services | เก็บ/จัดการข้อมูล Users, Groups, Accounts | Directory ขององค์กร |
| Identity Providers (IdPs) | ให้บริการ Identity/Authentication | Login ผ่านศูนย์กลาง |
| Access Management Platforms | ควบคุม/บังคับใช้การเข้าถึง | Policy-based access gateway |

**[เสริม]** Directory อาจเป็นที่เก็บข้อมูลผู้ใช้ แต่ไม่จำเป็นต้องทำหน้าที่เหมือน IdP ทุกกรณี; IdP ทำหน้าที่รับรอง/ยืนยันตัวตนและอาจส่ง Claims ให้ Application; Access Management Platform ใช้บังคับใช้ Policy ตามบริบท

**[เสริม]** ตัวอย่างผลิตภัณฑ์เพื่อให้เห็นภาพ: Microsoft Active Directory เป็น directory service, Microsoft Entra ID/Okta ใช้ในงาน Identity และ SSO; ชื่อผลิตภัณฑ์ไม่ใช่สาระสำคัญของสไลด์นี้

---

# 9. Principle of Least Privilege

**[เรียนจากสไลด์]** Least Privilege (PoLP) = ผู้ใช้และระบบได้รับ **minimum access necessary to perform tasks**

## สิ่งที่ไม่ใช่ Least Privilege

- ไม่ใช่ “ให้สิทธิ์น้อยจนทำงานไม่ได้”
- ไม่ใช่ “ให้ Admin ไว้เผื่อ”
- ไม่ใช่ “ทุกคนในแผนกต้องได้สิทธิ์เท่ากันโดยไม่ดูหน้าที่”

## Purpose

จำกัดความเสียหายจาก **accidental actions** และ **malicious actions** โดยไม่เปิดเผยสิทธิ์เกินจำเป็น

## Implementation จากสไลด์

- Assign permissions based on roles
- Regularly review access rights
- Enforce strict access controls

## Benefits จากสไลด์

- ลดความเสี่ยงจาก compromised accounts
- จำกัดความเสียหายจาก insider threats
- ช่วย auditing และ compliance
- เพิ่ม system stability

## ตัวอย่าง

Finance Employee ควรเข้า Accounting System เพื่อทำงาน แต่ไม่ควรได้รับ Network Admin Access โดยไม่มีหน้าที่รองรับ

**[เสริม]** หลักการใกล้เคียงที่ควรรู้:

- **Need to Know** — เข้าถึงข้อมูลเท่าที่จำเป็นต้องรู้ แม้อาจมี Clearance ระดับเหมาะสม
- **Just-in-Time (JIT) Access** — มอบสิทธิ์ระดับสูงเฉพาะช่วงเวลาที่ต้องใช้
- **Just-Enough Administration (JEA)** — จำกัดชุดคำสั่ง/หน้าที่ Admin ให้เท่าที่จำเป็น
- **Default Deny** — ปฏิเสธโดยปริยายเมื่อไม่มี Rule อนุญาต

**Exam clue:** “Minimum necessary permissions” → Least Privilege

---

# 10. Objective 3.2 — Logical Access Controls

**[เรียนจากสไลด์ + เรียบเรียง]** Logical Access Controls คือการกำหนดและบังคับใช้กฎเข้าถึง **digital systems, applications, files, databases, resources**

| Logical Access | Physical Access |
|---|---|
| Login, permissions, access policies | Locks, doors, guards |
| ควบคุม Digital Resource | ควบคุมพื้นที่ทางกายภาพ |

**[เสริม]** สามารถมอง Access Decision ผ่าน 3 องค์ประกอบ:

- **Subject** — ใครขอ เช่น User/Process
- **Object** — ขอเข้าถึงอะไร เช่น File/Database
- **Action** — จะทำอะไร เช่น Read/Write/Delete

บาง Model ยังพิจารณา **Environment/Context** เช่น เวลาและอุปกรณ์

---

# 11. Segregation of Duties (SoD)

**[เรียนจากสไลด์]** SoD = แบ่ง Critical Tasks ให้หลายคน เพื่อป้องกัน Fraud, Errors, Unauthorized Actions และลด Insider Threats

## หลักการ

**No single individual has complete control over a sensitive operation.**

## Implementation จากสไลด์

แยกหน้าที่ **Request → Approval → Execution** และจำกัด Overlapping Privileges

## ตัวอย่าง Financial Transaction จากสไลด์

1. **Purchasing:** Employee A สร้าง/ส่ง Purchase Order
2. **Payment Processing:** Employee B อนุมัติ Order และดำเนินการจ่ายเงิน
3. **Record Keeping:** Employee C หรือระบบตรวจ Bank Statements และบันทึก Transactions

```text
Employee A              Employee B             Employee C / System
REQUEST / PURCHASE ---> APPROVE + PAY -------> RECORD / RECONCILE
```

**ข้อสังเกต:** ในตัวอย่างสไลด์คนที่สองทำทั้ง Approve และ Pay แต่หลัก SoD ที่สำคัญคือ **ผู้เริ่มรายการไม่อนุมัติรายการของตนเอง**; องค์กรที่ต้องการควบคุมเข้มขึ้นอาจแยก Approve และ Pay เพิ่มเติม **[เสริม]**

## Benefits

- Accountability
- Deterrence of insider threats
- Reduction of fraud and errors
- Stronger overall security

## Least Privilege vs SoD

| Least Privilege | SoD |
|---|---|
| จำกัด **จำนวน/ขอบเขต** สิทธิ์ | แยก **หน้าที่ที่ขัดแย้งกัน** |
| “How much access?” | “Who performs/approves each step?” |
| ตัวอย่าง: Finance ไม่มี Network Admin | ตัวอย่าง: Requester ไม่ Approve เอง |

**[เสริม]** **Dual Control / Two-Person Rule** คือกิจกรรมบางอย่างต้องมีคนสองคนร่วมกัน; ไม่ใช่คำพ้องของ SoD ทุกกรณี เพราะ SoD อาจแยกขั้นตอนต่างเวลากัน

---

# 12. Access Control Models — DAC, MAC, RBAC, ABAC

**[เรียนจากสไลด์]** Model ตอบว่า **Who can access which resources under what conditions** และช่วย Enforce Policies, Least Privilege และปกป้อง Sensitive Information

## 12.1 DAC — Discretionary Access Control

**หลักจำ: OWNER DECIDES**

- **Definition:** เจ้าของ Resource กำหนดว่าใครเข้าได้และทำอะไรได้
- **Key Feature:** Owner มีดุลยพินิจในการ Grant/Restrict Permissions ไม่ใช่ Central Authority เป็นผู้ตัดสินทั้งหมด
- **Advantage:** Flexible, user-friendly
- **Drawback:** Owner อาจ Grant Excessive Access; ความเสี่ยง Misuse เพิ่มขึ้น
- **Example:** เจ้าของไฟล์กำหนด Read/Write ให้ Users/Groups

| User | File Permission |
|---|---|
| Owner | Read/Write |
| Colleague A | Read |
| Colleague B | Read/Write |
| Other | No Access |

**[เสริม]** DAC ไม่ได้หมายความว่าไม่มี Policy ระดับองค์กรเลย ระบบปฏิบัติการยังอาจกำหนดข้อจำกัดเพิ่มเติมได้ จุดจำคือ **Owner สามารถควบคุมการให้สิทธิ์แก่ผู้อื่นในขอบเขตที่ระบบอนุญาต**

## 12.2 MAC — Mandatory Access Control

**หลักจำ: CENTRAL POLICY + SECURITY LABELS**

- **Definition:** Central Authority/System Policy บังคับใช้ Permissions ตาม Security Classifications
- **Key Feature:** Users ไม่สามารถเปลี่ยน Permission ตามใจได้
- **Advantage:** Highly secure, ลด Unauthorized Access
- **Drawback:** Inflexible, complex to manage
- **Example:** Military documents — Confidential, Secret, Top Secret; ผู้ใช้ต้องมี Appropriate Clearance

**[เสริม]** ระดับ Clearance อย่างเดียวไม่จำเป็นต้องพอเสมอไป อาจมี Need-to-Know, Compartments หรือ Policy อื่นกำกับ ดังนั้นอย่าจำว่า “Secret clearance = เปิดเอกสาร Secret ได้ทุกฉบับ”

## 12.3 RBAC — Role-Based Access Control

**หลักจำ: ROLE DECIDES**

- **Definition:** Access Permissions มอบตาม Role ในองค์กร
- **Key Feature:** Users inherit permissions from predefined roles
- **Advantage:** ง่ายต่อ Management, Scalability และ Consistency
- **Drawback:** ต้องออกแบบ Roles อย่างระวัง ไม่เช่นนั้นเกิด Excessive Permissions
- **Example:** HR Manager เข้า Employee Records; IT Staff จัดการ System Configurations

```text
User Alice ----> HR Manager Role ----> Read Employee Records
User Bob ------> IT Staff Role -------> Manage System Settings
```

**[เสริม]** Role สามารถมีหลาย Permissions และผู้ใช้บางคนอาจได้รับหลาย Roles; ต้องทบทวน SoD conflicts และการสะสมสิทธิ์

## 12.4 ABAC — Attribute-Based Access Control

**หลักจำ: ATTRIBUTES / CONDITIONS DECIDE**

**[เรียนจากบทสนทนา]** ABAC ตัดสิน Access จาก Attributes ของ User, Resource, Environment และ Device

| Attribute Category | Examples |
|---|---|
| User | Department, Job Title |
| Resource | Classification, Resource Type |
| Environment | Time, Location |
| Device | Company Device, Device Type |

**ตัวอย่าง Policy:**

```text
ALLOW access to Finance System IF:
  user.department == "Finance"
  AND device.managed == true
  AND time within working hours
ELSE DENY
```

> เป็นตัวอย่างเชิงแนวคิด ไม่ใช่ Policy Language จริงของผลิตภัณฑ์ใด

**[เสริม]** จุดแข็งของ ABAC คือ Policy สามารถปรับตาม Context ได้ละเอียด; จุดท้าทายคือ Attributes ต้องถูกต้องและ Policy อาจซับซ้อน โดย **ABAC ไม่ได้บังคับว่าต้องมีหลาย Attributes ทุกครั้ง** เพียงแต่รองรับการใช้ Attributes ในการตัดสินใจ

## 12.5 ตารางเปรียบเทียบหลัก

| Model | Who decides / Basis | Typical Clue | Strength | Limitation |
|---|---|---|---|---|
| DAC | Resource Owner | Owner grants file access | Flexible | Excessive sharing |
| MAC | Central Policy + Labels | Clearance, classification | Strict | Complex / inflexible |
| RBAC | Predefined Role | Job title, department role | Scalable | Poor role design |
| ABAC | Attributes/Conditions | Time, location, device, user/resource attributes | Context-sensitive | Policy complexity |

## 12.6 ตัวอย่างข้อสอบจำแนก

- “File owner grants read access to colleague” → **DAC**
- “Classified document with Top Secret label” → **MAC**
- “All HR Managers inherit a predefined set of permissions” → **RBAC**
- “Access allowed only on managed device during working hours” → **ABAC**

---

# 13. Authentication, Authorization และ Accounting — เนื้อหาเสริม

> **[เสริม]** หัวข้อนี้ขยายจากคำ Authentication และ Authorization ที่ปรากฏในสไลด์ IAM Tools; ไม่ใช่สไลด์แยกที่เราเรียนในชุดนี้

## 13.1 Identification vs Authentication vs Authorization

| Term | คำถาม | Example |
|---|---|---|
| Identification | อ้างว่าตัวเองเป็นใคร | กรอก Username |
| Authentication | พิสูจน์ว่าเป็นคนนั้นจริง | Password / Passkey / MFA |
| Authorization | อนุญาตให้ทำอะไร | Read report แต่ Delete ไม่ได้ |
| Accounting / Auditing | บันทึกว่าเกิดอะไรขึ้น | Access logs |

**ลำดับช่วยจำ:** Identify → Authenticate → Authorize → Record/Audit

## 13.2 Authentication Factors

1. **Something you know** — Password, PIN
2. **Something you have** — Security key, authenticator device
3. **Something you are** — Fingerprint, facial biometric

**[เสริม]** บางกรอบอาจพูดถึง location/behavior เป็น context หรือ signals เพิ่มเติม แต่ไม่ควรสับสนกับสาม factor หลัก

## 13.3 MFA vs 2-Step Verification

- **MFA:** ใช้ปัจจัยการพิสูจน์ตัวตนอย่างน้อยสองประเภทที่แตกต่างกัน เช่น Password + Security Key
- **Two-step:** มีสองขั้นตอน แต่ไม่รับประกันว่าเป็นคนละ Factor เสมอไป
- **Password + PIN:** โดยทั่วไปยังเป็น “something you know” ทั้งคู่ ไม่ใช่ MFA ที่ใช้ต่างประเภท

## 13.4 Authentication vs Authorization ตัวอย่าง

Bob ล็อกอินผ่าน Password + Security Key สำเร็จ (**Authentication**) แต่ถูกปฏิเสธเมื่อพยายาม Delete Payroll File เพราะ Role ไม่อนุญาต (**Authorization**)

## 13.5 Accountability และ Logging

**[เสริม]** Log ควรช่วยระบุผู้ใช้ เวลา การกระทำ ผลลัพธ์ และ Resource ตามความเหมาะสม เพื่อสนับสนุน Incident Investigation และ Audit; การเก็บ Log ไม่ได้แทนที่การควบคุมสิทธิ์

---

# 14. MFA, SSO, Federation และ Identity Protocols — เนื้อหาเสริม

> **[เสริม]** ส่วนนี้เพิ่มเพื่อให้เข้าใจ IdP และ Federation ที่ปรากฏในสไลด์ ไม่ใช่การยืนยันว่าต้องจำรายละเอียด Protocol ทุกตัวสำหรับการสอบ CC

## 14.1 MFA

**Multi-Factor Authentication** ลดโอกาสที่ผู้โจมตีจะใช้ Credential เพียงอย่างเดียวเข้าระบบได้ อย่างไรก็ตาม MFA ไม่ได้ทำให้ Account ปลอดภัยจาก Phishing หรือ Session Theft ทุกกรณี

## 14.2 Single Sign-On (SSO)

SSO คือการเข้าสู่ระบบครั้งหนึ่งแล้วเข้าถึงหลาย Application ที่เชื่อถือการยืนยันตัวตนเดียวกันได้ตามการกำหนดของระบบ

- **Benefit:** ลดการ Login ซ้ำและช่วยจัดการ Identity แบบรวมศูนย์
- **Risk:** หาก Identity กลางถูกยึด อาจกระทบหลาย Application จึงต้องปกป้อง IdP และ Sessions

## 14.3 Federation

Federation คือการเชื่อมความเชื่อถือระหว่าง Identity Provider กับระบบ/องค์กรอื่น เพื่อให้ระบบปลายทางใช้ Identity Assertion/Claims ที่เชื่อถือได้

**ตัวอย่าง:** พนักงานล็อกอินที่องค์กร A แล้วใช้บริการ SaaS ที่เชื่อถือ IdP ขององค์กร A โดยไม่ต้องสร้างรหัสผ่านแยกในทุกบริการ

## 14.4 SAML, OAuth 2.0, OpenID Connect (OIDC)

| Technology | จุดประสงค์หลักแบบย่อ | คำจำ |
|---|---|---|
| SAML | แลกเปลี่ยนข้อมูลยืนยันตัวตน/Assertions โดยเฉพาะ Enterprise SSO | Federation/SSO |
| OAuth 2.0 | Framework สำหรับ Delegated Authorization | Delegated access |
| OpenID Connect | ชั้น Identity บน OAuth 2.0 เพื่อ Authentication | Login/Identity |

**ข้อควรระวัง:** OAuth 2.0 เพียงอย่างเดียว **ไม่ใช่ Authentication Protocol**; OIDC เพิ่มกลไก Identity/Authentication และต้องตรวจสอบ Token อย่างถูกต้อง

## 14.5 Passwordless / Passkeys

**[เสริม]** Passkeys มักใช้ Public-Key Cryptography และสามารถลดความเสี่ยงจากการขโมยรหัสผ่านหรือ Phishing เมื่อออกแบบและใช้งานถูกต้อง แต่ยังต้องมี Account Recovery ที่ปลอดภัย

---

# 15. Access Control Mechanisms และ Privileged Access — เนื้อหาเสริม

> **[เสริม]** เชื่อมโยง Access Control Models กับการนำไปใช้จริง

## 15.1 ACL — Access Control List

ACL เป็นรายการกำหนดว่า Subject ใดทำ Action ใดกับ Object ได้ เช่น:

```text
report.csv:
  Alice: read, write
  Bob:   read
  Guest: deny
```

ACL เป็น **mechanism** ที่อาจใช้ในระบบหลายรูปแบบ อย่าสับสนว่า ACL = DAC เสมอไป

## 15.2 Group-Based Access

ใช้ Groups เพื่อจัดการ Membership แล้วมอบ Permission ให้ Group; ช่วยลดการตั้งค่าทีละ User แต่ต้องระวังการเข้ากลุ่มผิดและการสะสม Membership

## 15.3 Privileged Accounts

Privileged Account คือบัญชีที่มีสิทธิ์สูง เช่น System Administrator, Database Administrator, Cloud Administrator

ความเสี่ยง: เมื่อถูกยึด ผู้โจมตีอาจแก้ Configuration, อ่าน Sensitive Data หรือขยายการโจมตีได้

แนวปฏิบัติที่เกี่ยวข้อง:

- ใช้บัญชี Admin เฉพาะเมื่อจำเป็น
- ใช้ Least Privilege และ Access Review
- ปกป้องด้วย MFA ที่เหมาะสม
- บันทึกและตรวจสอบกิจกรรมที่สำคัญ
- ถอนสิทธิ์ Admin เมื่อหมดหน้าที่

## 15.4 PAM — Privileged Access Management

PAM เป็นแนวทาง/เครื่องมือบริหารสิทธิ์ระดับสูง เช่น การอนุมัติ, จำกัดระยะเวลา, ควบคุม Secrets และติดตาม Sessions

## 15.5 Separation of Environments

**[เสริม]** องค์กรอาจแยก Dev/Test/Production Access เพื่อลดความเสี่ยงที่ผู้ใช้คนเดียวแก้โค้ด อนุมัติ และนำขึ้น Production โดยไม่มีการตรวจสอบ ซึ่งเชื่อมกับ SoD

---

# 16. สถานการณ์บูรณาการ IAM

## Scenario A — New Finance Employee

**เหตุการณ์:** Alice เข้าทำงาน Finance

1. กำหนด Role และ Responsibilities
2. Provision Identity และ Accounting Access
3. Assign Permission เท่าที่จำเป็น (Least Privilege)
4. Authenticate เมื่อ Login และ Authorize ตาม Role
5. Review Access ตามรอบ

**Key concepts:** Roles Definition, Provisioning, RBAC, Least Privilege, Access Review

## Scenario B — Transfer from Finance to IT

**เหตุการณ์:** Bob ย้าย Finance → IT

1. Review สิทธิ์ปัจจุบัน
2. Remove Finance Access ที่ไม่จำเป็น
3. Provision IT Access ที่จำเป็น
4. ตรวจว่าไม่มี Privilege Accumulation

**Key concepts:** Mover, Access Review, Deprovisioning, Privilege Creep

## Scenario C — Payment Fraud Prevention

**เหตุการณ์:** พนักงานสร้าง Purchase Order และพยายามอนุมัติเอง

**Control:** SoD — แยก Requester จาก Approver และมี Record/Reconciliation ตามสไลด์

## Scenario D — Classified Document

**เหตุการณ์:** ผู้ใช้ต้องการเปิดเอกสาร Top Secret แต่มี Clearance ไม่ถึง

**Control:** MAC — Central Policy + Security Labels/Classification; Deny ตาม Policy

## Scenario E — Remote Finance Access

**เหตุการณ์:** Finance Employee เข้า Financial System จากอุปกรณ์ส่วนตัวนอกเวลางาน

**Control:** ABAC อาจปฏิเสธเพราะ Device/Time ไม่ตรง Policy แม้ User จะอยู่ Finance

## Scenario F — Employee Resignation

**เหตุการณ์:** Contractor สิ้นสุดสัญญา

**Control:** Deprovisioning — Disable Account, Revoke Application Access, Remove Groups และ Privileged Access ตามที่มี

---

# 17. ตารางเปรียบเทียบสำคัญ

## 17.1 Identity Lifecycle

| Concept | What it does | Trigger/Clue |
|---|---|---|
| Role Definition | กำหนดหน้าที่และ Access | Before grant |
| Provisioning | Create + Grant | Joiner / new access |
| Access Review | Check appropriateness | Periodic review |
| Deprovisioning | Remove/Disable | Leaver / role change |

## 17.2 Least Privilege vs SoD vs Need to Know

| Principle | Focus | Example |
|---|---|---|
| Least Privilege | Minimum necessary permissions | Finance ไม่ได้ Network Admin |
| SoD | Separate conflicting duties | Requester ≠ Approver |
| Need to Know **[เสริม]** | Access information only when necessary | Clearance พอแต่ไม่เกี่ยวกับภารกิจ → ไม่ควรอ่าน |

## 17.3 Authentication vs Authorization

| Authentication | Authorization |
|---|---|
| Verify identity | Determine allowed actions |
| Password / MFA | Roles / Policies / Permissions |
| “Are you Bob?” | “May Bob read payroll?” |

## 17.4 Models

| DAC | MAC | RBAC | ABAC |
|---|---|---|---|
| Owner | Label/Policy | Role | Attribute |
| File owner shares | Classified docs | HR Manager role | Managed device + time |

---

# 18. Practice Questions พร้อมเฉลย

> **แบบฝึกหัดที่สร้างขึ้นเพื่อทบทวน** ไม่ใช่ข้อสอบจริงหรือข้อสอบทางการของ ISC2

## Questions

**Q1.** Before granting access to a new employee, what should an organization define?  
A. Backup schedule  B. Roles and responsibilities  C. Firewall brand  D. Password expiration only

**Q2.** Creating an account and assigning required application access is:  
A. Deprovisioning  B. Provisioning  C. Auditing  D. Federation

**Q3.** A user moves departments but keeps unnecessary old permissions. What is this?  
A. Privilege accumulation  B. MFA  C. SSO  D. Proofing

**Q4.** Periodically checking whether users still need permissions is:  
A. Access review  B. Encryption  C. Identification  D. Hashing

**Q5.** A contractor’s agreement ends. Which action best removes unnecessary access?  
A. Provisioning  B. Deprovisioning  C. Replication  D. Classification

**Q6.** Which framework in the studied slide focuses on digital identity, identity proofing, authentication and federation?  
A. NIST CSF  B. NIST SP 800-63  C. ITIL  D. PCI only

**Q7.** Giving only the access necessary to do the job is:  
A. SoD  B. Least Privilege  C. DAC  D. SSO

**Q8.** One employee requests a payment and another approves it. This is:  
A. Segregation of Duties  B. Provisioning  C. MAC  D. Federation

**Q9.** A file owner grants read access to a colleague. Which model?  
A. MAC  B. RBAC  C. DAC  D. ABAC

**Q10.** Classified information uses Secret and Top Secret labels controlled by central policy. Which model?  
A. DAC  B. MAC  C. RBAC  D. ABAC

**Q11.** Permissions are assigned according to HR Manager and IT Staff roles. Which model?  
A. ABAC  B. MAC  C. RBAC  D. DAC

**Q12.** Access depends on department, managed device and working hours. Which model?  
A. ABAC  B. DAC  C. MAC  D. RBAC

**Q13. [เสริม]** Which is an authentication action?  
A. Checking read permission  B. Verifying password/passkey  C. Granting Admin role  D. Removing Group membership

**Q14. [เสริม]** Password + PIN are generally which factor category?  
A. Two different MFA factors  B. Two knowledge-based secrets  C. Biometric  D. Possession

**Q15. [เสริม]** Which is primarily a delegated authorization framework, not an authentication protocol by itself?  
A. OAuth 2.0  B. OIDC  C. SAML  D. Password

**Q16.** Which is a drawback of RBAC?  
A. Owners can never grant files  B. Poorly designed roles may carry excessive permissions  C. It always requires classified labels  D. It cannot assign permissions

**Q17.** Which describes an orphaned account?  
A. Account with no appropriate owner/accountability  B. Account with MFA  C. Active employee account  D. Account with a role

**Q18.** Which is NOT necessarily the same as deleting an account?  
A. Deprovisioning  B. Printing  C. Encryption  D. Authentication

**Q19. [เสริม]** A user authenticates successfully but cannot delete a report. What stopped the deletion?  
A. Authorization  B. Identification  C. Proofing  D. Federation

**Q20.** Which pairing is correct?  
A. DAC–Labels, MAC–Owner  B. RBAC–Time, ABAC–Owner  C. DAC–Owner, MAC–Labels, RBAC–Role, ABAC–Attributes  D. MAC–Job Role only

## Answer Key + Reasoning

| Q | Answer | Reason |
|---|---|---|
| 1 | B | กำหนด Role และ Responsibilities ก่อน Grant |
| 2 | B | Provisioning = Create Identity + Required Access |
| 3 | A | สิทธิ์เก่าค้างสะสมจาก Role Change |
| 4 | A | Access Review ตรวจความเหมาะสมเป็นระยะ |
| 5 | B | Deprovisioning ถอน/ปิด Access เมื่อไม่จำเป็น |
| 6 | B | NIST SP 800-63 เน้น Digital Identity |
| 7 | B | Least Privilege = Minimum Necessary Access |
| 8 | A | SoD แบ่งหน้าที่ Critical Process |
| 9 | C | DAC = Owner decides |
| 10 | B | MAC = Central Policy + Security Labels |
| 11 | C | RBAC = Role-based permissions |
| 12 | A | ABAC = Attributes / Conditions |
| 13 | B | Authentication พิสูจน์ตัวตน |
| 14 | B | Password และ PIN เป็น knowledge factor เหมือนกัน |
| 15 | A | OAuth 2.0 เป็น Delegated Authorization Framework |
| 16 | B | Role Design ไม่ดี → Excessive Permissions |
| 17 | A | Orphaned Account ขาดเจ้าของ/ผู้รับผิดชอบที่เหมาะสม |
| 18 | A | Deprovision อาจ Disable/Revoke โดยไม่ลบ Account |
| 19 | A | Authorization ตัดสิน Allowed Actions |
| 20 | C | Owner / Label / Role / Attribute |

---

# 19. Glossary และ Final Revision Sheet

## 19.1 Glossary

| Term | ความหมายแบบจำง่าย |
|---|---|
| IAM | จัดการ Identity + Access |
| Identity | ตัวตนดิจิทัล |
| Role | หน้าที่/บทบาท |
| Permission | สิทธิ์กระทำกับ Resource |
| Provisioning | Create / Grant Access |
| Access Review | ตรวจสิทธิ์เป็นระยะ |
| Deprovisioning | Remove / Disable Access |
| Privilege Accumulation | สิทธิ์สะสมเกินงาน |
| Orphaned Account | บัญชีไม่มีเจ้าของ/ผู้รับผิดชอบเหมาะสม |
| Least Privilege | Minimum Necessary Access |
| SoD | แบ่งหน้าที่สำคัญให้หลายคน |
| DAC | Owner decides |
| MAC | Classification/Policy decides |
| RBAC | Role decides |
| ABAC | Attributes/Conditions decide |
| Authentication | พิสูจน์ตัวตน |
| Authorization | ตัดสินสิทธิ์ |
| Identity Proofing | ตรวจสอบตัวตนที่อ้าง |
| Federation | เชื่อมความเชื่อถือ Identity ข้ามระบบ/องค์กร |
| IdP | Identity Provider |
| SSO | เข้าสู่ระบบครั้งเดียวเพื่อใช้หลายบริการที่เชื่อถือกัน |
| MFA | พิสูจน์ตัวตนหลายประเภท Factor |
| ACL | รายการสิทธิ์เข้าถึง |
| PAM | จัดการ Privileged Access |
| JML | Joiner–Mover–Leaver |

## 19.2 One-Page Memory Sheet

```text
DOMAIN 3 — IAM

IDENTITY LIFECYCLE:
  Define Role -> Provision -> Review -> Deprovision
  Joiner -> Mover -> Leaver

ROLE:
  Job Function -> Required Access

PROVISIONING:
  Create Account + Unique Identity + Role + Permission
  + Application Access + Credential

ACCESS REVIEW:
  Excessive / Unused / Inappropriate / Role Changes
  Privilege Accumulation / Orphaned Accounts

DEPROVISIONING:
  Disable Account / Revoke App / Remove Group / Revoke Privilege

FRAMEWORKS:
  NIST SP 800-63 = Digital Identity
  NIST CSF = Broad Cybersecurity Risk

IAM TOOLS:
  Directory Services / IdPs / Access Management Platforms

LEAST PRIVILEGE:
  Minimum Necessary Access

SoD:
  Critical Process -> Multiple People
  Requester != Approver

ACCESS CONTROL MODELS:
  DAC  = OWNER
  MAC  = LABEL / CLASSIFICATION
  RBAC = ROLE
  ABAC = ATTRIBUTE / CONDITION

SUPPLEMENTARY:
  Authentication = Verify Identity
  Authorization = Check Allowed Actions
  MFA = Different Factor Categories
  SSO = One Sign-On Across Trusted Apps
  OAuth 2.0 = Delegated Authorization
  OIDC = Identity Layer
```

## 19.3 สถานะความครอบคลุม

- **เนื้อหาที่เรียนจริง:** Objective 3.1 (Roles Definition, Provisioning, Access Review, Deprovisioning, IAM Frameworks, IAM Tools, Least Privilege) และ Objective 3.2 เท่าที่เรียน (SoD, Access Control Models, DAC, MAC, RBAC, ABAC)
- **เนื้อหาเสริมที่เพิ่ม:** Authentication, Authorization, Accounting, Factors/MFA, SSO/Federation, SAML/OAuth/OIDC, ACL, PAM, Need to Know, JIT/JEA และสถานการณ์เพิ่มเติม
- **ไม่ยืนยัน:** เอกสารนี้ไม่ได้รับรองว่าครอบคลุมทุกหัวข้อของ Exam Outline อย่างเป็นทางการหรือแทนการอ่านเอกสาร ISC2 ต้นฉบับ

---

**End of Extended Domain 3 Study Guide**
