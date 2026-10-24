ได้ครับ ผมสรุป **ทั้งหมดที่เราเรียนใน Domain 3 จนถึงตอนนี้** ให้เป็นชุดเดียว โดยยึดตามสไลด์ที่คุณส่งและไม่ขยายเกินเนื้อหาที่จำเป็น

# 🔵 ISC2 CC 2026 — Domain 3: Identity and Access Management (IAM) Concepts

Domain นี้พูดถึงการจัดการ **Identity และ Access** ของผู้ใช้ ตั้งแต่เริ่มเข้ามาในองค์กร จัดสรรสิทธิ์ ตรวจสอบสิทธิ์ ไปจนถึงถอนสิทธิ์ รวมถึงวิธีที่ระบบใช้ควบคุมว่าใครเข้าถึง Resource อะไรได้บ้าง

ภาพใหญ่จำว่า:

> **Identity → Access → Control → Review → Remove**

---

# 3.1 Understand Identity Life Cycle Management

## 1. Roles Definition

ก่อนที่จะ Grant Access องค์กรควรกำหนด **Roles and Responsibilities** ก่อน

**Role** อธิบายว่า User มีหน้าที่อะไร และต้องใช้ Access อะไรเพื่อทำหน้าที่นั้น

ตัวอย่าง:

> Finance Employee → Accounting System ✅  
> Finance Employee → Network Administrative Access ❌

### 🧠 จำ

> **Role → Function → Required Access**

สิทธิ์ที่ได้รับควรสัมพันธ์กับงานที่ต้องทำ

---

# 2. Provisioning

**Provisioning** คือ:

> **การสร้าง Identity และมอบ Access ที่จำเป็นสำหรับการทำงาน**

อาจประกอบด้วย:

- Creating User Account
- Assigning Unique Identity
- Assigning Roles
- Granting Permissions
- Providing Access to Applications
- Issuing Authentication Credentials

### 🧠 จำ

> **Provisioning = Create Identity + Provide Required Access ➕**

---

# 3. Access Review

เมื่อให้ Access แล้ว ไม่ได้หมายความว่าจะปล่อยไว้ตลอด ต้องมีการ:

> **Periodically Review Access**

เพื่อตรวจว่าสิทธิ์ของ User **ยังเหมาะสมอยู่หรือไม่**

Access Review สามารถตรวจพบ:

- **Excessive Permissions** → สิทธิ์มากเกินไป
- **Unused Accounts** → Account ไม่ได้ใช้งาน
- **Inappropriate Access** → สิทธิ์ไม่เหมาะสม
- **Role Changes** → เปลี่ยน Role แต่สิทธิ์ยังไม่เปลี่ยน
- **Privilege Accumulation** → สิทธิ์เก่าสะสมเรื่อย ๆ
- **Orphaned Accounts** → Account ที่ไม่มีเจ้าของ/ผู้ใช้ที่เหมาะสมแล้ว

ตัวอย่างจากสไลด์:

> Finance → ย้ายไป IT  
> แต่ 6 เดือนต่อมายังเข้า Financial Reporting System ได้ ❌

### 🧠 จำ

> **Access Review = ตรวจเป็นระยะว่าสิทธิ์ยังเหมาะสมหรือไม่**

---

# 4. Deprovisioning

**Deprovisioning** คือ:

> **Removing or Disabling Access เมื่อไม่จำเป็นต้องใช้อีก**

เหตุการณ์ที่อาจ Trigger:

- Employee Termination
- Employee Resignation
- Role Change
- Contract Expiration

สิ่งที่อาจทำ:

- Disable User Account
- Revoke Application Access
- Remove Group Memberships
- Revoke Privileged Access

### 🧠 จำเป็นคู่

> **Provisioning → Give Access ➕**  
> **Deprovisioning → Remove Access ➖**

---

# 5. IAM Management Frameworks

องค์กรสามารถใช้ Framework/Standard ที่มีอยู่แล้วเป็นแนวทางในการจัดการ IAM

### NIST SP 800-63

เกี่ยวข้องกับ:

> **Digital Identity**

รวมถึง:

> Identity Proofing  
> Authentication  
> Federation

### NIST Cybersecurity Framework

เป็น Framework ที่กว้างกว่าเกี่ยวกับ:

> **Cybersecurity Risk Management**

และภายในก็มี Practices ที่เกี่ยวข้องกับ Identity และ Access

### 🧠 จำ

> **NIST SP 800-63 → Digital Identity**  
> **NIST CSF → Broader Cybersecurity Risk Management**

---

# 6. IAM Tools

IAM Technologies ใช้สำหรับ:

> **Manage Identities + Manage Access**

ความสามารถที่พบบ่อยตามสไลด์:

- User Account Management
- Authentication
- Authorization
- Role Management
- Access Provisioning
- Access Reviews
- Deprovisioning

Common IAM Technologies ที่สไลด์ระบุ:

> **Directory Services**  
> **Identity Providers (IdPs)**  
> **Access Management Platforms**

---

# 7. Principle of Least Privilege — PoLP ⭐

หลักสำคัญมาก:

> **Users and systems should receive only the minimum access necessary to perform their tasks.**

พูดง่าย ๆ:

> 🔑 **ให้สิทธิ์เท่าที่จำเป็นต่อการทำงาน**

ไม่ใช่ให้น้อยจนทำงานไม่ได้ และไม่ใช่ให้เผื่อไว้เยอะ ๆ

ตัวอย่าง:

> Finance → Accounting Access ✅  
> Finance → Network Admin Access ❌

การนำไปใช้ตามสไลด์:

> Assign permissions based on Roles  
> Regularly Review Access  
> Enforce strict Access Controls

ประโยชน์คือช่วยลดความเสี่ยงจาก Compromised Accounts และ Insider Threats รวมถึงช่วยเรื่อง Audit/Compliance และ System Stability

### 🧠 จำ

> **Least Privilege = Minimum Necessary Access**

---

# 🔵 3.2 Understand Logical Access Controls

Logical Access Controls คือการควบคุมการเข้าถึง **ระบบ ข้อมูล และ Digital Resources**

คำถามหลักคือ:

> **Who can access What?**

---

# 8. Segregation of Duties — SoD ⭐

**Segregation of Duties** คือ:

> **แบ่ง Critical Tasks ให้หลายคนรับผิดชอบ**

เพื่อไม่ให้บุคคลคนเดียวควบคุม Sensitive Operation ทั้งหมด

ช่วยป้องกัน:

> Fraud  
> Errors  
> Unauthorized Actions  
> Insider Threats

ตัวอย่างจาก Financial Transaction:

> 👤 คนที่ 1 → **Request / Purchasing**  
> ↓  
> 👤 คนที่ 2 → **Approve / Payment Processing**  
> ↓  
> 👤 คนที่ 3 หรือ System → **Record Keeping**

คนสร้าง Transaction ไม่ควรสามารถสร้างและอนุมัติ Transaction ของตัวเองได้ทั้งหมด

### 🧠 จำ

> **SoD = Critical Process → Multiple People**

---

## Least Privilege vs SoD

สองตัวนี้ต้องแยกให้ออก:

> 🔑 **Least Privilege** = จำกัดว่า User **ควรมีสิทธิ์แค่ไหน**

> 👥 **Segregation of Duties** = แบ่ง **หน้าที่สำคัญให้หลายคน**

---

# 9. Access Control Models ⭐⭐⭐

Access Control Model กำหนดว่า:

> **Who can access which resources and under what conditions**

ช่วยให้องค์กรควบคุม Access อย่างสม่ำเสมอ, Enforce Security Policies, ใช้ Least Privilege และปกป้อง Sensitive Information

เราเรียนทั้งหมด **4 Models**

| Model | Access ขึ้นอยู่กับ | คำจำ |
|---|---|---|
| **DAC** | Resource Owner | **Owner** |
| **MAC** | Security Classification/Label | **Label** |
| **RBAC** | User Role | **Role** |
| **ABAC** | Attributes/Conditions | **Attribute** |

---

# 10. DAC — Discretionary Access Control

หัวใจคือ:

> 👤 **Owner decides**

เจ้าของ Resource เป็นผู้กำหนดว่า:

> ใครเข้าถึงได้  
> และทำอะไรกับ Resource ได้

เช่นเจ้าของ File กำหนด:

> User A → Read  
> User B → Read + Write  
> User C → No Access

Permission อยู่ที่ **Discretion of the Data Owner** ไม่ใช่ Central Authority

**Advantage:** Flexible / User-friendly

**Drawback:** Owner อาจ Grant Excessive Access ทำให้ Security Risk เพิ่มขึ้น

### 🧠 จำ

> **DAC = Owner Controls Access**

---

# 11. MAC — Mandatory Access Control

MAC เข้มงวดกว่า DAC

หัวใจคือ:

> 🔒 **Central Authority / System Policy Controls Access**

Permissions ถูกกำหนดตาม:

> **Security Classifications / Security Labels**

User ไม่สามารถเปลี่ยน Permission เองได้

ตัวอย่างจากสไลด์:

> Confidential  
> Secret  
> Top Secret

User ต้องมี **Appropriate Clearance** จึงจะเข้าถึงข้อมูลได้

**Advantage:** Highly Secure

**Drawback:** Inflexible และ Complex to Manage

### 🧠 จำ

> **MAC = Classification / Label**

เห็นคำว่า:

> **Confidential / Secret / Top Secret / Clearance**

ให้นึกถึง **MAC**

---

# 12. RBAC — Role-Based Access Control

หัวใจคือ:

> 👔 **Access based on User's Role**

User จะได้รับ Permission ตาม **Predefined Role**

เช่น:

> HR Manager → Employee Records  
> IT Staff → System Configurations

แทนที่จะกำหนด Permission ให้ User ทีละคน เราสามารถกำหนด Permission ให้ Role แล้ว Assign User เข้า Role

ตัวอย่าง:

> Alice → Finance Role  
> Bob → Finance Role  
> Charlie → Finance Role

ทั้งสามได้รับ Permissions ตาม Finance Role

**Advantage:** จัดการง่าย, Scalability ดี และ Access Rights สม่ำเสมอ

**Drawback:** ต้องออกแบบ Role ให้ดี ไม่อย่างนั้นอาจเกิด Excessive Permissions

### 🧠 จำ

> **RBAC = Role**

---

# 13. ABAC — Attribute-Based Access Control

หัวใจคือ:

> 🧩 **Access based on Attributes / Conditions**

ระบบสามารถพิจารณาคุณลักษณะหลายอย่าง เช่น:

> User Department  
> Job Information  
> Resource  
> Device  
> Location  
> Time

ตัวอย่าง:

> Department = Finance  
> + Company Device  
> + Working Hours  
> → Access Allowed ✅

ดังนั้น ABAC ไม่ได้ดูเพียงว่า User มี Role อะไร แต่สามารถใช้ **หลาย Attributes/Conditions** ในการตัดสิน Access

### 🧠 จำ

> **ABAC = Attributes / Conditions**

---

# ⭐ ตารางใหญ่ที่ควรจำก่อนสอบ

| Concept | ความหมายที่ควรจำ |
|---|---|
| **Role Definition** | กำหนดหน้าที่และ Access ที่จำเป็น |
| **Provisioning** | Create Identity + Grant Access |
| **Access Review** | ตรวจ Access เป็นระยะ |
| **Deprovisioning** | Remove/Disable Access |
| **Least Privilege** | Minimum Necessary Access |
| **Segregation of Duties** | แบ่ง Critical Tasks ให้หลายคน |
| **DAC** | Owner |
| **MAC** | Classification / Label |
| **RBAC** | Role |
| **ABAC** | Attribute |

# 🧠 สูตรจำ Domain 3 ที่เราเรียนมาถึงตอนนี้

จำ Flow นี้ให้ได้:

> 👤 **Define Role**  
> ↓  
> ➕ **Provision Access**  
> ↓  
> 🔑 **Apply Least Privilege**  
> ↓  
> 🔐 **Control Access**  
> ↓  
> 🔍 **Review Access**  
> ↓  
> ➖ **Deprovision when no longer required**

ส่วน Access Control Models จำแค่:

> **DAC → Owner 👤**  
> **MAC → Label 🏷️**  
> **RBAC → Role 👔**  
> **ABAC → Attribute 🧩**

และอีกคู่ที่ควรแม่น:

> **Provisioning = ให้สิทธิ์**  
> **Deprovisioning = ถอนสิทธิ์**

> **Least Privilege = ให้สิทธิ์เท่าที่จำเป็น**  
> **Segregation of Duties = แบ่งหน้าที่ให้หลายคน**

ตอนนี้ **Objective 3.1 ที่เราเรียนจากสไลด์ชุดนี้จบแล้ว ✅** และ **Objective 3.2 เรามาถึง Access Control Models ครบ DAC / MAC / RBAC / ABAC แล้ว** ครับ ยังไม่ควรถือว่า Domain 3 จบ เพราะเรายังไม่ได้เห็นสไลด์ส่วนถัดไปของ 3.2 และ Objective ต่อ ๆ ไปจากคอร์สนี้.