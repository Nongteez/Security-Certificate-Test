# ISC2 CC 2026 — Domain 4: Network & Cloud Security Concepts

> สรุปสำหรับทบทวนจากเนื้อหาที่เรียนร่วมกัน โดยเน้น Objective 4.2 และ 4.3 ตามสไลด์ที่ส่งมา ส่วน Objective 4.1 เป็นความรู้พื้นฐานประกอบที่เพิ่มจากสรุปก่อนหน้า ไม่ได้ยืนยันว่าครบตามสไลด์ที่เรียน

## Objective 4.1 — Computer Networking (ความรู้พื้นฐานประกอบ)

### Network คืออะไร
เครือข่ายคือการเชื่อมต่ออุปกรณ์เพื่อสื่อสารและใช้ทรัพยากรร่วมกัน

- **LAN**: เครือข่ายในพื้นที่จำกัด เช่น สำนักงาน
- **WAN**: เครือข่ายข้ามพื้นที่ เช่น ระหว่างสาขา
- **WLAN**: LAN แบบไร้สาย
- **PAN**: เครือข่ายส่วนบุคคลระยะใกล้
- **VPN**: การเชื่อมต่อเครือข่ายส่วนตัวผ่านเครือข่ายอื่นโดยใช้กลไกป้องกัน เช่น การเข้ารหัส

### อุปกรณ์เครือข่าย
| อุปกรณ์ | หน้าที่ |
|---|---|
| Hub | กระจายสัญญาณไปยังพอร์ตอื่นใน Collision Domain เดียวกัน |
| Switch | ส่ง Ethernet Frames ตาม MAC Address |
| Router | ส่ง IP Packets ระหว่าง Networks |
| Firewall | ควบคุม Traffic ตาม Security Rules |
| Access Point | เชื่อมต่ออุปกรณ์ไร้สาย |
| IDS | ตรวจจับและแจ้งเตือนเหตุการณ์น่าสงสัย |
| IPS | ตรวจจับและสามารถบล็อก Traffic ที่เป็นอันตราย |
| Proxy | ตัวกลางในการรับส่ง Requests |

### OSI Model
| Layer | ชื่อ | แนวคิดหลัก |
|---|---|---|
| 7 | Application | บริการเครือข่ายที่แอปพลิเคชันใช้ |
| 6 | Presentation | รูปแบบข้อมูล การแปลงและเข้ารหัส |
| 5 | Session | จัดการ Sessions |
| 4 | Transport | TCP/UDP, การสื่อสารระหว่าง Processes |
| 3 | Network | IP Addressing และ Routing |
| 2 | Data Link | MAC Address และ Ethernet Frames |
| 1 | Physical | Bits, สายและสัญญาณ |

**TCP** เน้นการส่งข้อมูลที่เชื่อถือได้และเรียงลำดับ; **UDP** ลด Overhead แต่ไม่รับประกันการส่งถึงในระดับ Protocol

### Protocols และ Ports ที่ใช้ทั่วไป
| Protocol | Port | การใช้งาน |
|---|---|---|
| HTTP | TCP 80 | Web |
| HTTPS | TCP 443 | Encrypted Web |
| DNS | UDP/TCP 53 | Name Resolution |
| SSH | TCP 22 | Secure Remote Administration |
| FTP | TCP 21 | File Transfer Control |
| SMTP | TCP 25 | Email Transfer |
| DHCP | UDP 67/68 | Dynamic IP |
| RDP | TCP/UDP 3389 | Remote Desktop |
| SNMP | UDP 161/162 | Monitoring |

### Network Threats
- **DoS/DDoS**: ทำให้บริการไม่พร้อมใช้งาน; DDoS ใช้หลายแหล่งโจมตี
- **MITM**: แทรกกลางการสื่อสาร
- **Spoofing**: ปลอมตัวตนหรือข้อมูล
- **Sniffing**: ดักจับ Traffic
- **Malware**: ซอฟต์แวร์อันตราย
- **Lateral Movement**: เคลื่อนจากระบบที่ถูกยึดไปยังระบบอื่น

---

## Objective 4.2 — Network Security Architecture

### 1. Network Segmentation
**ความหมาย:** แบ่ง Network ใหญ่เป็น Segments ย่อย เพื่อควบคุม Traffic และแยกส่วนระบบ

**Purpose:**
1. จำกัดการแพร่กระจายของการโจมตี (Limit Spread of Attacks)
2. ปรับปรุง Network Performance
3. ควบคุม Traffic Flow
4. จำกัด Breach ให้อยู่ในพื้นที่หนึ่ง
5. ลด Lateral Movement

**Mitigation:** จำกัดการเข้าถึง Sensitive Data/Systems, ลด **Blast Radius** (ขอบเขตผลกระทบเมื่อถูกโจมตี), และใช้ Security Policies เฉพาะแต่ละ Segment

**ตัวอย่าง:** Employee, Guest, Server Networks ถูกแยกจากกัน; Guest ออก Internet ได้ แต่ไม่ควรเข้าถึง Internal Database

> การแบ่ง Segment อย่างเดียวไม่เพียงพอ ต้องมี ACL/Firewall Policies บังคับใช้ด้วย

### 2. Firewall Zones
**ความหมาย:** การจัดกลุ่ม Network Interfaces, Systems หรือ Traffic ตาม Security Requirements และ Trust Levels เพื่อใช้ Policies ต่างกันระหว่าง Zones

| Zone | บทบาท |
|---|---|
| Outside / Internet | Untrusted/Public |
| Inside / Internal | Private/Internal; ไม่ได้แปลว่า Trusted โดยอัตโนมัติในแนวคิด Zero Trust |
| DMZ | Public-facing services ที่แยกจาก Internal Systems |
| Management | จำกัดสำหรับผู้ดูแลระบบ |

**ตัวอย่าง Policy:** Internet → DMZ Web Server เปิด HTTPS; Internet → Internal Database ปฏิเสธ

### 3. DMZ (Demilitarized Zone)
**Purpose:** แยก Public-Facing Services ออกจาก Internal Systems

**Components ในตัวอย่างสไลด์:**
- External Firewall: ป้องกัน Internet-based Threats
- Internal Firewall: จำกัดการเข้าถึง Sensitive/Internal Resources
- DMZ Servers: Web Servers, Email Gateways, Proxies

**Benefit:** ลดความเสี่ยงที่การโจมตี Public Service จะกระทบ Internal Network โดยตรง

**แนวคิดเส้นทาง:** Internet → External Firewall → DMZ → Internal Firewall → Internal Network

> โครงสร้างสอง Firewall เป็นตัวอย่างหนึ่งของ DMZ ไม่ใช่รูปแบบเดียวที่เป็นไปได้

### 4. VLAN (Virtual Local Area Network)
**ความหมาย:** Logical Segmentation ภายใน Physical Network เดียวกัน

**Benefits:** ลด Broadcast Traffic, แยกกลุ่มอุปกรณ์, จัดการเครือข่ายได้ยืดหยุ่น

**ตัวอย่างจากสไลด์:**
- VLAN 10: Employees
- VLAN 20: Guests
- VLAN 30: Servers

อุปกรณ์คนละ VLAN ต้องใช้ **Inter-VLAN Routing** ผ่าน Layer 3 Device หากต้องสื่อสารข้าม VLAN; ต้องใช้ ACL/Firewall เพื่อควบคุมสิทธิ์ระหว่าง VLAN

### 5. Micro-Segmentation
**ความหมาย:** Segmentation ที่ละเอียดระดับ Workload หรือ Device

**ใช้สำหรับ:** Zero Trust Architecture และปกป้อง Critical Assets แม้ Perimeter ถูกเจาะ

**Tools:** Software-Defined Networking (SDN), Next-Generation Firewalls และ Host-Based Controls

**ตัวอย่าง:** Web Server ติดต่อ Application Server ได้เฉพาะ Port ที่กำหนด; Application Server ติดต่อ Database ได้เฉพาะ Database Port; Web Server ไม่ควรติดต่อ Database โดยตรง

**เปรียบเทียบ:** Network Segmentation แบ่งเป็นกลุ่มใหญ่; Micro-Segmentation คุมการสื่อสารเป็นราย Workload/Device

### 6. Defense in Depth
**Concept:** ใช้ Security หลาย Layers เพื่อไม่พึ่งพาการป้องกันชั้นเดียว

| Layer | ตัวอย่าง Controls |
|---|---|
| Perimeter Security | Firewalls, IDS/IPS |
| Network Security | VLAN, DMZ, ACL |
| Endpoint Security | Anti-Malware, Patch Management |
| Application Security | Secure Coding, WAF |
| Data Security | Encryption, Backups, Access Control |

**Benefit:** หากชั้นหนึ่งล้มเหลว ยังมีชั้นอื่นจำกัดการโจมตี ลด Single Point of Failure ในเชิงการป้องกัน

### 7. Segmentation for Embedded Systems and IoT
**Challenge:** IoT/Embedded Devices มักมี Security Controls จำกัด

**Best Practices ตามสไลด์:**
- Separate IoT Networks from Enterprise Networks
- ใช้ VLANs หรือ Micro-Segmentation แยกอุปกรณ์
- Apply Strict Access Controls and Monitoring
- Disable Unnecessary Device Communication

**ตัวอย่าง:** Smart Cameras ไม่ควรสื่อสารกับ Financial Systems โดยไม่มีความจำเป็น

### 8. Network Segmentation and Zero Trust
**Zero Trust:** ไม่ให้ความไว้วางใจจาก Network Location เพียงอย่างเดียว; ต้องตรวจสอบก่อนอนุญาตเข้าถึง

การตัดสินใจ Access พิจารณา:
- Identity
- Device Security
- Application
- Resource
- Network Location
- Context

**ตัวอย่าง:** พนักงานอยู่ใน Office Network แต่ Device ไม่ผ่าน Security Requirements จึงอาจถูกปฏิเสธการเข้าถึง Sensitive Application

**ความสัมพันธ์:** Segmentation ลดเส้นทางเข้าถึง Resources; Zero Trust เพิ่มการตรวจสอบและการอนุญาตตามบริบท

---

## Objective 4.3 — Cloud Security

### 9. Cloud Computing
**ความหมาย:** การให้บริการ Computing Resources และ Services ผ่าน Network (มักเป็น Internet) ตามเวลาหรือสถานที่ที่ต้องการ

**Five Essential Characteristics:**
| Characteristic | ความหมาย | ตัวอย่าง |
|---|---|---|
| On-Demand Self-Service | ผู้ใช้ Provision Resources ได้เอง | สร้าง VM ผ่าน Portal |
| Broad Network Access | เข้าถึงผ่านเครือข่ายจากหลายอุปกรณ์ | Laptop/Smartphone ใช้ Cloud App |
| Resource Pooling | Provider แชร์ทรัพยากรหลาย Customers โดยแยกกันเชิง Logical | VM หลายลูกค้าบน Physical Hosts |
| Rapid Elasticity | เพิ่ม/ลด Resources ตาม Demand | เพิ่ม Servers ช่วง Traffic Spike |
| Measured Service | วัดการใช้ทรัพยากรเพื่อ Monitoring/Billing | จ่ายตาม Storage/Compute Usage |

### 10. Cloud Service Models

#### IaaS — Infrastructure as a Service
ให้ Virtualized Servers, Storage, Networking
- Examples: Amazon EC2, Microsoft Azure Virtual Machines
- **Provider:** Physical Hardware, Networking, Virtualization
- **Customer:** Guest OS, Middleware, Applications, Data, User Access และ Configurations
- **จำ:** เช่า Infrastructure แล้วบริหาร OS/Apps เอง

#### PaaS — Platform as a Service
ให้ Platform เพื่อ Develop, Test, Deploy Applications โดยไม่ต้องจัดการ Underlying Infrastructure
- Examples: Google App Engine, Microsoft Azure App Service
- รวม Tools, Frameworks และ Runtime Environments
- **Provider:** Infrastructure, OS, Runtime, Middleware, Platform Updates
- **Customer:** Application Code/Deployment และ Data Security
- **จำ:** เน้นสร้างและ Deploy App

#### SaaS — Software as a Service
ให้ Fully Managed Applications ผ่าน Internet
- Examples: Gmail, Microsoft 365, Salesforce
- **Provider:** Application, Platform, Infrastructure และ Maintenance/Updates
- **Customer:** Data, User Access, Settings และ Compliance ที่เกี่ยวข้อง
- **จำ:** ใช้ Software ที่พร้อมใช้งาน

#### FaaS — Function as a Service
รัน Code ตาม Events โดยไม่ต้องจัดการ Servers โดยตรง (Serverless Computing)
- Examples: AWS Lambda, Azure Functions
- **Provider:** Serverless Infrastructure, Runtime, Scaling
- **Customer:** Function Code, Triggers, Data Access
- **จำ:** รัน Functions ตาม Event; ค่าใช้จ่ายมักผูกกับการใช้งานจริงตามรูปแบบ Pricing ของบริการ

### 11. Shared Responsibility Model
**หลักการ:** Cloud Security เป็นความรับผิดชอบร่วมกันของ **Cloud Service Provider (CSP)** และ **Customer**; ขอบเขตเปลี่ยนตาม Service Model

| Model | CSP Responsibilities | Customer Responsibilities | ประเด็นที่ต้องประสานร่วมกันตามสไลด์ |
|---|---|---|---|
| IaaS | Hardware, Networking, Virtualization, Data Center Security | OS, Apps, Middleware, Data, Configurations | Network Security, Storage Encryption |
| PaaS | Infrastructure, OS, Runtime, Middleware, Platform Updates | Application Development, Deployment, App/Data Security | IAM, Data Protection |
| SaaS | Application, Platform, Infrastructure | Data Management, User Access, Regulatory Compliance | Data Security, Authentication, Access Control |
| FaaS | Serverless Infrastructure, Runtime, Scaling | Code, Triggers, Data Access | Application Logic Security, API Integration |

**สำคัญ:** ช่อง 'Shared' ในสไลด์สื่อถึงประเด็นที่ทั้งสองฝ่ายมีบทบาท แต่ไม่ได้หมายความว่าแบ่งหน้าที่เท่ากันทุกบริการ ต้องตรวจเอกสารและข้อตกลงของ Provider

**ตัวอย่างข้อสอบ:**
- IaaS VM ไม่ได้ Patch OS → โดยทั่วไป Customer
- PaaS App มี Insecure Code → Customer
- SaaS ผู้ใช้แชร์ Sensitive Data ผิดสิทธิ์ → Customer ต้องจัดการ Access Settings
- FaaS Function Code มี Vulnerability → Customer

### 12. Cloud Deployment Models

#### Public Cloud
- **Definition:** Cloud Resources ให้บริการโดย Third-Party Provider และใช้ร่วมกันระหว่าง Tenants
- **Features:** Scalability, Cost-Efficiency, ไม่ต้องดูแล Physical Hardware เอง
- **Use Cases:** Websites, App Development, Backups
- **Examples:** AWS, Azure, Google Cloud
- **Considerations:** จำกัดการควบคุม Physical Infrastructure; ต้องบริหาร Sensitive Data อย่างเหมาะสม

#### Private Cloud
- **Definition:** Cloud Environment สำหรับองค์กรเดียว อาจ On-Premises หรือ Third-Party Hosted
- **Features:** Greater Control, Customization, Dedicated Environment
- **Use Cases:** Workloads ที่มี Security/Regulatory Requirements สูง เช่น Finance, Healthcare
- **Examples ตามสไลด์:** VMware Private Cloud, Microsoft Azure Stack
- **Considerations:** Higher Cost และ Maintenance Responsibility

#### Hybrid Cloud
- **Definition:** ผสาน Public และ Private Cloud เพื่อให้ Workloads/Data ทำงานร่วมกันได้
- **Features:** Flexibility, Workload Balance, Public Scalability + Private Control
- **Use Cases:** เก็บ Sensitive Workloads ใน Private และขยายส่วนอื่นบน Public
- **Examples ตามสไลด์:** Azure Hybrid, AWS Outposts, Google Anthos
- **Considerations:** Integration และ Management Complexity

#### Community Cloud
- **Definition:** Cloud Environment ที่หลายองค์กรมี Common Interests/Requirements ใช้ร่วมกัน
- **Features:** Collaboration, Cost-Sharing, Tailored Requirements
- **Use Cases:** Government, Healthcare, Research หรือ Shared Compliance
- **Examples:** Government Cloud Services, Healthcare Data-Sharing Platforms
- **Considerations:** ต้องประสาน Governance/Security ระหว่างสมาชิก

#### Multi-Cloud
- **Definition:** ใช้ Cloud Services จาก Providers หลายราย
- **Features:** Flexibility, Risk Mitigation, ลด Vendor Lock-in, เลือกบริการตาม Workload
- **Use Cases:** AWS สำหรับ Compute, Azure สำหรับ AI, Google Cloud สำหรับ Analytics
- **Considerations:** Complexity ในการจัดการและ Integration หลาย Platforms

**Hybrid vs Multi-Cloud:** Hybrid เน้นผสม Private/Public Environments; Multi-Cloud เน้นใช้หลาย Providers และทั้งสองแนวคิดสามารถเกิดร่วมกันได้

---

## สรุปเปรียบเทียบเพื่อจำก่อนสอบ

| Concept | จำสั้น ๆ |
|---|---|
| Segmentation | แบ่ง Network ลด Lateral Movement/Blast Radius |
| Firewall Zones | จัดกลุ่มตาม Trust Level และ Security Policy |
| DMZ | แยก Public-Facing Services |
| VLAN | Logical Separation/Broadcast Domains |
| Micro-Segmentation | คุมระดับ Workload/Device |
| Defense in Depth | หลาย Security Layers |
| IoT Segmentation | แยก IoT จาก Critical Enterprise Systems |
| Zero Trust | ไม่ Trust ตาม Location อย่างเดียว; Verify |
| IaaS | Virtualized Infrastructure |
| PaaS | Managed Platform สำหรับ Apps |
| SaaS | Ready-to-Use Software |
| FaaS | Event-Driven Functions |
| Shared Responsibility | CSP/Customer แบ่งหน้าที่ตาม Model |
| Public | Shared Cloud Service |
| Private | Dedicated to One Organization |
| Hybrid | Private + Public |
| Community | Shared Requirements ของหลายองค์กร |
| Multi-Cloud | Multiple Providers |

## ฝึกโจทย์สถานการณ์

1. ต้องลดการเคลื่อนของผู้โจมตีระหว่างแผนก → **Network Segmentation**
2. ต้องวาง Public Web Server โดยแยกจาก Internal Network → **DMZ**
3. จำกัด Traffic ระหว่าง Application Workloads รายตัว → **Micro-Segmentation**
4. ใช้ Firewall, Endpoint Protection, WAF, Encryption พร้อมกัน → **Defense in Depth**
5. ผู้ใช้ใน Office ถูกปฏิเสธเพราะ Device ไม่ผ่าน Compliance → **Zero Trust**
6. เช่า VM และ Patch Guest OS เอง → **IaaS**
7. Deploy App โดยไม่ดูแล OS/Runtime → **PaaS**
8. ใช้ Email Application ผ่าน Browser → **SaaS**
9. เปิด Cloud Storage เป็น Public ผิดพลาด → **Customer Configuration Responsibility**
10. ใช้ Private Cloud เก็บข้อมูลอ่อนไหวร่วมกับ Public Cloud → **Hybrid Cloud**
11. หลายโรงพยาบาลแชร์ Environment ตามข้อกำหนดร่วมกัน → **Community Cloud**
12. ใช้ AWS และ Azure ลด Vendor Lock-in → **Multi-Cloud**

## Checklist ทบทวน

- [ ] เข้าใจ Network Basics, OSI, Protocols (เนื้อหาพื้นฐานประกอบ)
- [ ] อธิบาย Segmentation, Blast Radius และ Lateral Movement
- [ ] แยก Firewall Zones, DMZ และ VLAN
- [ ] อธิบาย Inter-VLAN Routing และ Security Policies
- [ ] แยก Micro-Segmentation กับ Segmentation
- [ ] จำ Layers ของ Defense in Depth
- [ ] อธิบายการแยก Embedded Systems และ IoT
- [ ] เข้าใจ Zero Trust และ Context-Based Access
- [ ] จำ Cloud Characteristics ทั้ง 5
- [ ] แยก IaaS, PaaS, SaaS, FaaS
- [ ] อธิบาย Shared Responsibility ตาม Model
- [ ] แยก Public, Private, Hybrid, Community และ Multi-Cloud

---

**หมายเหตุ:** เอกสารนี้แปลงและเรียบเรียงจากสรุป Domain 4 ในบทสนทนา โดยให้ Objective 4.2–4.3 เป็นแกนหลักตามสไลด์ที่ผู้เรียนส่งมา; Objective 4.1 เป็นข้อมูลเสริมเพื่อทบทวนภาพรวม ไม่ใช่การถอดข้อความจากสไลด์ Objective 4.1 แบบครบชุด
