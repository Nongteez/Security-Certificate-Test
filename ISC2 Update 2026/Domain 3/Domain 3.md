# ISC2 CC 2026 — Domain 3: Identity and Access Management (IAM) Concepts

> **Study Notes (ภาษาไทย + English Keywords)**  
> ขอบเขต: เนื้อหาที่เรียนจริงจากสไลด์และการอธิบายในบทสนทนา ตั้งแต่ Objective 3.1 ถึงหัวข้อ ABAC ใน Objective 3.2 ไม่ใช่การยืนยันว่าครบ Domain 3 ทั้ง Exam Outline

## 1. ภาพรวม IAM

**Identity and Access Management (IAM)** คือการจัดการตัวตนดิจิทัล (Digital Identity) และสิทธิ์ในการเข้าถึงทรัพยากรขององค์กร โดยตอบคำถามว่าใครเป็นใคร ควรมีสิทธิ์อะไร ใช้สิทธิ์อะไรได้บ้าง สิทธิ์ยังเหมาะสมหรือไม่ และเมื่อใดควรถอนสิทธิ์

ภาพรวม: **Define Roles → Provisioning → Apply Access Controls → Access Review → Deprovisioning** (เป็นภาพช่วยจำ ไม่ใช่ลำดับตายตัว)

---

# Objective 3.1 — Understand Identity Life Cycle Management

## 2. Identity Life Cycle Management

จัดการ Identity และ Access ตลอดช่วงเวลาที่ผู้ใช้เกี่ยวข้องกับองค์กร

- **Joiner:** ผู้ใช้เข้ามาใหม่ → Create Identity / Provision Access
- **Mover:** เปลี่ยนงานหรือบทบาท → Review / Modify Access
- **Leaver:** ออกจากองค์กร → Deprovision Access

**ตัวอย่าง:** พนักงาน Finance ได้สิทธิ์ Accounting เมื่อเข้าทำงาน ย้ายไป IT ต้องปรับสิทธิ์ และเมื่อลาออกต้องถอนสิทธิ์ที่ไม่ควรใช้ต่อ

## 3. Roles Definition

ก่อนให้ Access องค์กรควรกำหนด **Roles and Responsibilities** ก่อน เพราะ Role ระบุว่าผู้ใช้ทำหน้าที่อะไรและต้องใช้ Access อะไร

| Role | Access ที่เกี่ยวข้อง |
|---|---|
| Human Resources Manager | HR Systems / Employee Records |
| Network Administrator | Network Management |
| Database Administrator | Database Management |
| Security Analyst | Security Systems |
| Finance Employee | Accounting / Finance Systems |

Finance Employee อาจต้องใช้ Accounting System แต่ไม่ควรได้ Network Administrative Access โดยอัตโนมัติ

- **Role:** บทบาท เช่น Finance Employee
- **Permission:** สิทธิ์การกระทำ เช่น Read / Write / Modify
- **Access:** ความสามารถในการเข้าถึงทรัพยากรตามสิทธิ์

**จำสอบ:** `Role → Job Function → Required Access`

## 4. Provisioning

**Provisioning = การสร้าง Identity และให้ Access ที่จำเป็นต่อการทำงาน**

กิจกรรมที่อาจรวมอยู่ในกระบวนการ:

1. **Creating a User Account** — สร้างบัญชีผู้ใช้
2. **Assigning a Unique Identity** — กำหนดตัวตนที่ไม่ซ้ำ
3. **Assigning Roles** — มอบบทบาท
4. **Granting Permissions** — มอบสิทธิ์
5. **Providing Access to Applications** — ให้เข้าถึงแอปที่จำเป็น
6. **Issuing Authentication Credentials** — ออก Credential เพื่อใช้ยืนยันตัวตน

**ตัวอย่าง:** พนักงาน Finance ใหม่ → สร้าง Account → Assign Finance Role → Grant Accounting Permission → ออก Credential

**จำสอบ:** `Provisioning = Create Identity + Grant Required Access`

## 5. Access Review

**Access Review = ตรวจสอบสิทธิ์ของผู้ใช้เป็นระยะว่ายังเหมาะสมหรือไม่**

| สิ่งที่ตรวจพบได้ | ความหมาย |
|---|---|
| Excessive Permissions | สิทธิ์มากเกินความจำเป็น |
| Unused Accounts | บัญชีที่ไม่ได้ใช้งาน |
| Inappropriate Access | สิทธิ์ไม่เหมาะกับหน้าที่ |
| Role Changes | หน้าที่เปลี่ยนแต่สิทธิ์ยังไม่ปรับ |
| Privilege Accumulation | สิทธิ์เก่าสะสมเมื่อเปลี่ยนหน้าที่ |
| Orphaned Accounts | บัญชีที่ไม่มีเจ้าของ/ผู้รับผิดชอบที่เหมาะสม |

**ตัวอย่างจากสไลด์:** พนักงานย้ายจาก Finance ไป IT มา 6 เดือน แต่ยังเข้า Financial Reporting System ได้ → ต้อง Review และถอนสิทธิ์ที่ไม่จำเป็น

**Privilege Accumulation:** ได้สิทธิ์ใหม่โดยไม่ถอนสิทธิ์เก่า ทำให้ Permission สะสม

**จำสอบ:** `Access Review = Periodically verify appropriate access`

## 6. Deprovisioning

**Deprovisioning = Remove / Disable Access เมื่อไม่จำเป็นแล้ว** ไม่ได้แปลว่าต้องลบ Account เสมอไป

**Triggers:**
- Employee Termination — ถูกเลิกจ้าง
- Employee Resignation — ลาออก
- Role Change — เปลี่ยนบทบาท
- Contract Expiration — หมดสัญญา

**Activities:**
- Disabling User Account
- Revoking Application Access
- Removing Group Memberships
- Revoking Privileged Access

**ตัวอย่าง:** Network Administrator ย้ายฝ่าย → ถอน Network Admin Privileges ที่ไม่จำเป็น

| Provisioning | Deprovisioning |
|---|---|
| Create / Grant | Remove / Disable |
| ให้สิทธิ์ | ถอนสิทธิ์ |

## 7. IAM Management Frameworks

องค์กรใช้ Frameworks/Standards เป็นแนวทางจัดการ Identity และ Access

### NIST SP 800-63
เน้น **Digital Identity** และเกี่ยวข้องกับ:
- **Identity Proofing:** ตรวจสอบว่าบุคคลเป็นผู้ที่อ้างว่าเป็นจริง
- **Authentication:** พิสูจน์ตัวตน
- **Federation:** ใช้ Identity / Authentication ร่วมกันระหว่างระบบหรือองค์กร

### NIST Cybersecurity Framework (CSF)
เน้น **Cybersecurity Risk Management** ในภาพรวม และรวมแนวปฏิบัติที่เกี่ยวกับ IAM ด้วย

**จำสอบ:** `NIST SP 800-63 → Digital Identity` / `NIST CSF → Broader Cybersecurity Risk Management`

## 8. IAM Tools

IAM Tools ช่วยจัดการ **Identities + Access** เช่น:
- User Account Management
- Authentication
- Authorization
- Role Management
- Access Provisioning
- Access Reviews
- Deprovisioning

**Common IAM Technologies:**

| Technology | หน้าที่หลัก |
|---|---|
| Directory Services | จัดเก็บและจัดการ User/Account |
| Identity Providers (IdPs) | บริการด้าน Identity และ Authentication |
| Access Management Platforms | จัดการและควบคุม Access |

**Authentication:** ตรวจสอบว่าคุณเป็นใคร  
**Authorization:** ตรวจสอบว่าคุณมีสิทธิ์ทำอะไร

## 9. Principle of Least Privilege (PoLP)

**Least Privilege = ให้สิทธิ์น้อยที่สุดเท่าที่จำเป็นเพื่อให้ทำงานได้** ไม่ใช่ให้น้อยจนทำงานไม่ได้

**Purpose:** จำกัดความเสียหายจากความผิดพลาดหรือการกระทำที่เป็นอันตราย โดยลด Unnecessary Privileges

**Implementation ตามสไลด์:**
1. Assign Permissions Based on Roles
2. Regularly Review Access Rights
3. Enforce Strict Access Controls

**Benefits:**
- ลดความเสี่ยงจาก Compromised Accounts
- จำกัดความเสียหายจาก Insider Threats
- ช่วย Auditing / Compliance
- ช่วย Overall System Stability

**ตัวอย่าง:** Finance Employee ได้ Accounting Access แต่ไม่ได้ Network Admin Access ที่ไม่จำเป็น

**จำสอบ:** `Least Privilege = Minimum Necessary Access`

---

# Objective 3.2 — Understand Logical Access Controls

## 10. Logical Access Controls

การควบคุมการเข้าถึง **Systems, Applications, Data และ Digital Resources** ว่าใครเข้าถึงอะไรได้ ภายใต้เงื่อนไขใด ต่างจาก Physical Access Control ที่เน้นการเข้าถึงพื้นที่จริง

## 11. Segregation of Duties (SoD)

**SoD = แบ่ง Critical Tasks ให้หลายคนรับผิดชอบ เพื่อไม่ให้คนเดียวควบคุม Sensitive Operation ทั้งหมด**

**Purpose:** ลด Fraud, Errors, Unauthorized Actions และ Insider Threats

**Implementation:** แยก Request, Approval และ Execution และจำกัด Privileges ที่ทับซ้อน

**ตัวอย่าง Financial Transactions จากสไลด์:**
1. **Purchasing — Employee A:** สร้างและส่ง Purchase Order
2. **Payment Processing — Employee B:** อนุมัติ Purchase Order และดำเนินการจ่ายเงิน
3. **Record Keeping — Employee C หรือ System:** ตรวจสอบ Bank Statements และบันทึก Transactions

ผู้สร้างรายการไม่ควรอนุมัติรายการของตัวเองได้

**Benefits:** Accountability, Deter Insider Threats, Stronger Security

| Least Privilege | SoD |
|---|---|
| จำกัดจำนวน/ขอบเขตสิทธิ์ | แบ่งหน้าที่และอำนาจ |
| Minimum Access | Multiple People |

**จำสอบ:** `SoD = One Critical Process → Multiple Responsible Parties`

## 12. Access Control Models — Overview

Access Control Model กำหนด **Who can access which resources and under what conditions** เพื่อควบคุม Access อย่างสม่ำเสมอ บังคับ Security Policies ใช้ Least Privilege และปกป้อง Sensitive Information

| Model | ตัดสินจาก | จำสั้น ๆ |
|---|---|---|
| DAC | Resource Owner | Owner |
| MAC | Security Classification / Label | Label |
| RBAC | User Role | Role |
| ABAC | Attributes / Conditions | Attribute |

## 13. Discretionary Access Control (DAC)

**Definition:** โมเดลยืดหยุ่นที่ Resource Owner กำหนดว่าใครเข้าถึง Resource และทำอะไรได้

**Key Feature:** Permission ขึ้นกับดุลยพินิจของ Owner ไม่ใช่ Central Authority ทั้งหมด

**ตัวอย่าง:** เจ้าของไฟล์ให้ User A = Read, User B = Read/Write, User C = No Access

- **Advantage:** Flexible / User-Friendly
- **Drawback:** Owner อาจ Grant Excessive Access เพิ่มความเสี่ยง

**คำใบ้สอบ:** Resource Owner, Owner Grants Permissions, File Owner Controls Access

**จำสอบ:** `DAC = Owner Decides`

## 14. Mandatory Access Control (MAC)

**Definition:** โมเดลเข้มงวดที่ Central Authority / System Policies บังคับ Permissions ตาม Security Classifications

**Key Feature:** User ไม่สามารถเปลี่ยน Access Permissions เองได้ ระบบใช้ Security Labels / Policies

**ตัวอย่าง Military System:** เอกสารถูกจัดระดับ Confidential, Secret, Top Secret และ User ต้องมี Appropriate Clearance และผ่านเงื่อนไขของ Policy จึงจะเข้าถึงได้

- **Advantage:** Highly Secure / ลด Unauthorized Access
- **Drawback:** Inflexible / Complex to Manage

**คำใบ้สอบ:** Security Classification, Clearance, Confidential, Secret, Top Secret, Central Authority

**จำสอบ:** `MAC = Security Labels + Central Policy`

### DAC vs MAC

| DAC | MAC |
|---|---|
| Owner Decides | Central Authority / Policy Decides |
| Flexible | Strict |
| Owner จัดการ Permission | User เปลี่ยน Permission ตามใจไม่ได้ |

## 15. Role-Based Access Control (RBAC)

**Definition:** Permissions ถูกกำหนดตาม **Role** ของ User ภายในองค์กร

**Key Feature:** User ได้ Permissions จาก Predefined Roles เช่น Admin, Manager, Employee

**ตัวอย่าง:**
- HR Manager → Employee Records
- IT Staff → System Configurations
- Finance Employee → Accounting System

ถ้ามี Finance Employees ใหม่ 20 คน สามารถ Assign Finance Role แทนการตั้งสิทธิ์ทีละคน

- **Advantage:** Simplifies Management / Scalability / Consistent Access Rights
- **Drawback:** ต้องออกแบบ Role ให้เหมาะสม มิฉะนั้นเกิด Excessive Permissions

**คำใบ้สอบ:** Job Role, Job Function, Predefined Roles, Role-Based Permissions

**จำสอบ:** `RBAC = Role Decides`

## 16. Attribute-Based Access Control (ABAC)

**Definition:** โมเดลที่ตัดสิน Access จาก **Attributes / Conditions** ของ User, Resource, Environment หรือ Device

| Attribute Category | ตัวอย่าง |
|---|---|
| User | Department, Job Title |
| Resource | Resource Type, Sensitivity |
| Environment | Time, Location |
| Device | Device Type, Company Device |

**ตัวอย่าง Policy:** Department = Finance **และ** Device = Company Device **และ** Time = Working Hours → Allow Access; หากไม่ผ่านเงื่อนไข → Deny Access

**Key Feature:** ใช้หลาย Attributes ร่วมกัน ไม่จำกัดเฉพาะ Role

**คำใบ้สอบ:** Department, Device, Location, Time, Multiple Conditions

**จำสอบ:** `ABAC = Attributes / Conditions`

> หมายเหตุ: ABAC ในบทเรียนนี้ไม่มีสไลด์รายละเอียดข้อดี–ข้อเสีย จึงไม่ระบุเป็นเนื้อหาจากสไลด์

## 17. ตารางเปรียบเทียบ Access Control Models

| Model | ใคร/อะไรตัดสิน Access | ตัวอย่าง | ข้อดี/ข้อจำกัดที่เรียน |
|---|---|---|---|
| DAC | Owner | เจ้าของไฟล์ให้ Read/Write | ยืดหยุ่น / เสี่ยงให้สิทธิ์เกิน |
| MAC | Central Policy + Label | Confidential / Secret / Top Secret | เข้มงวด / จัดการซับซ้อน |
| RBAC | Role | Finance Role | จัดการง่าย / ต้องออกแบบ Role ดี |
| ABAC | Attributes / Conditions | Department + Device + Time | เน้นการใช้หลายเงื่อนไข (ไม่ได้เรียนข้อดี–ข้อเสียจากสไลด์) |

---

# 18. จุดที่มักสับสนในการสอบ

1. **Provisioning vs Deprovisioning:** Grant Access vs Remove/Disable Access
2. **Access Review vs Deprovisioning:** ตรวจสิทธิ์ vs ลงมือถอนสิทธิ์
3. **Least Privilege vs SoD:** จำกัดสิทธิ์ต่อคน vs แบ่งงานสำคัญให้หลายคน
4. **DAC vs RBAC:** Owner เป็นคนให้สิทธิ์ vs Role เป็นตัวกำหนดสิทธิ์
5. **MAC vs ABAC:** Security Classification/Labels ภายใต้ Central Policy vs Attributes/Conditions
6. **Authentication vs Authorization:** พิสูจน์ว่าเป็นใคร vs มีสิทธิ์ทำอะไร

# 19. Exam Memory Aid — ตารางท่องก่อนสอบ

| Keyword | Concept |
|---|---|
| Define Roles and Responsibilities | Roles Definition |
| Create Account / Grant Access | Provisioning |
| Periodic Permission Review | Access Review |
| Old Privileges Remain After Role Changes | Privilege Accumulation |
| Account Without Appropriate Owner | Orphaned Account |
| Disable Account / Revoke Access | Deprovisioning |
| Digital Identity / Identity Proofing | NIST SP 800-63 |
| Broader Cybersecurity Risk | NIST CSF |
| Minimum Necessary Access | Least Privilege |
| Separate Request and Approval | SoD |
| Resource Owner Decides | DAC |
| Classification / Clearance | MAC |
| Predefined Job Role | RBAC |
| Device / Location / Time / Department | ABAC |

# 20. Practice Questions — 10 ข้อ

1. ก่อน Grant Access ควรทำอะไร? **Answer:** Define Roles and Responsibilities
2. Create User Account และ Grant Access คืออะไร? **Answer:** Provisioning
3. สิทธิ์เก่าสะสมเมื่อเปลี่ยน Role คืออะไร? **Answer:** Privilege Accumulation
4. ผู้สร้างรายการไม่สามารถ Approve เองได้ เป็นหลักการใด? **Answer:** SoD
5. ให้ Minimum Necessary Access เป็นหลักการใด? **Answer:** Least Privilege
6. File Owner กำหนด Read/Write เป็น Model ใด? **Answer:** DAC
7. Security Classification / Clearance เป็น Model ใด? **Answer:** MAC
8. Assign Permission ตาม Finance Role เป็น Model ใด? **Answer:** RBAC
9. ตรวจ Department + Device + Time เป็น Model ใด? **Answer:** ABAC
10. Employee Resignation แล้ว Disable Account / Revoke Access คืออะไร? **Answer:** Deprovisioning

---

# 21. Final Summary

**Objective 3.1:** Define Roles → Provision Access → Review Access → Deprovision when no longer needed; IAM Frameworks/Tools ช่วยจัดการ และ Least Privilege จำกัดสิทธิ์ให้เท่าที่จำเป็น

**Objective 3.2:** SoD แบ่ง Critical Tasks ไม่ให้คนเดียวควบคุมทั้งหมด; Access Control Models กำหนดว่าใครเข้าถึง Resource อะไรได้

**สูตรจำสุดท้าย:**

- **Provisioning → Give Access**
- **Deprovisioning → Remove Access**
- **Least Privilege → Minimum Access**
- **SoD → Multiple People**
- **DAC → Owner**
- **MAC → Label**
- **RBAC → Role**
- **ABAC → Attribute**

**สถานะ:** สรุปครบตามเนื้อหาที่เรียนจริงจนถึง ABAC ใน Objective 3.2 แต่ยังไม่ยืนยันว่าเรียนครบทุกหัวข้อของ Domain 3 ตาม Exam Outline
