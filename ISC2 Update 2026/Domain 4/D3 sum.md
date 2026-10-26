# ISC2 CC 2026 — Domain 4: Network & Cloud Security Concepts

## สรุปเนื้อหาทั้งหมดอย่างละเอียด (Complete Study Notes)

สรุปนี้รวบรวมเนื้อหา Domain 4 ที่เราเรียนร่วมกันจากสไลด์ โดยครอบคลุม Network Security, Network Security Architecture และ Cloud Security รวมทั้งคำศัพท์สำคัญ ตัวอย่างสถานการณ์ และจุดที่ควรเข้าใจสำหรับการสอบ ISC2 Certified in Cybersecurity (CC)

เนื้อหาจะแบ่งเป็น 3 ส่วนหลัก:

| Objective | หัวข้อ                        | เนื้อหาสำคัญ                                                                                      |
| --------- | ----------------------------- | ------------------------------------------------------------------------------------------------- |
| 4.1       | Computer Networking           | Network Basics, Network Devices, Protocols และ Network Threats                                    |
| 4.2       | Network Security Architecture | Segmentation, Firewall Zones, DMZ, VLAN, Micro-Segmentation, Defense in Depth, IoT และ Zero Trust |
| 4.3       | Cloud Security                | Cloud Characteristics, Service Models, Shared Responsibility และ Deployment Models                |

หมายเหตุเกี่ยวกับขอบเขต: สไลด์ที่มองเห็นในบริบทนี้ครอบคลุม Objective 4.2 และ 4.3 เป็นหลัก ส่วน Objective 4.1 ไม่มีสไลด์ครบชุดให้ตรวจสอบ ดังนั้นส่วน 4.1 ด้านล่างเป็นความรู้พื้นฐานประกอบการทบทวน ไม่ใช่การยืนยันว่าเราเรียนทุกหัวข้อนี้จากสไลด์แล้ว

# Part 1 — Objective 4.1: Computer Networking

## 1. Computer Network คืออะไร?

Computer Network คือระบบที่เชื่อมต่ออุปกรณ์ตั้งแต่สองเครื่องขึ้นไป เพื่อให้สามารถสื่อสาร แลกเปลี่ยนข้อมูล และใช้ทรัพยากรร่วมกันได้

ตัวอย่างอุปกรณ์ที่อยู่ใน Network ได้แก่ Computers, Servers, Printers, Smartphones และ IoT Devices

### ประเภทของ Network

| ประเภท                        | ความหมาย                                          | ตัวอย่าง             |
| ----------------------------- | ------------------------------------------------- | -------------------- |
| LAN (Local Area Network)      | เครือข่ายในพื้นที่จำกัด                           | เครือข่ายสำนักงาน    |
| WAN (Wide Area Network)       | เครือข่ายครอบคลุมพื้นที่กว้าง                     | เครือข่ายระหว่างสาขา |
| WLAN (Wireless LAN)           | เครือข่าย LAN แบบไร้สาย                           | Office Wi-Fi         |
| PAN (Personal Area Network)   | เครือข่ายระยะใกล้ส่วนบุคคล                        | Bluetooth            |
| VPN (Virtual Private Network) | การเชื่อมต่อเครือข่ายแบบเข้ารหัสผ่านเครือข่ายอื่น | Remote Access VPN    |

สิ่งสำคัญ: Internet เป็นเครือข่ายสาธารณะขนาดใหญ่ ส่วน Intranet เป็นเครือข่ายส่วนตัวขององค์กรที่ใช้เทคโนโลยีเครือข่ายในลักษณะเดียวกัน

## 2. Network Devices

อุปกรณ์เครือข่ายมีหน้าที่แตกต่างกัน และเป็นพื้นฐานในการทำความเข้าใจ Network Security

| Device       | หน้าที่หลัก                                      |
| ------------ | ------------------------------------------------ |
| Hub          | ส่งข้อมูลออกทุกพอร์ตใน Collision Domain เดียวกัน |
| Switch       | ส่ง Ethernet Frames ตาม MAC Address              |
| Router       | ส่ง IP Packets ระหว่าง Networks                  |
| Firewall     | ควบคุม Traffic ตาม Security Rules                |
| Access Point | เชื่อมต่อ Wireless Clients เข้ากับ Network       |
| IDS          | ตรวจจับกิจกรรมหรือ Traffic ที่น่าสงสัย           |
| IPS          | ตรวจจับและสามารถบล็อก Traffic ที่เป็นอันตราย     |
| Proxy Server | ทำหน้าที่เป็นตัวกลางในการรับส่ง Requests         |

### Switch vs Router

Switch ใช้เชื่อมต่ออุปกรณ์ภายใน LAN และส่งต่อ Frames ตาม MAC Address เป็นหลัก

Router ใช้เชื่อมต่อเครือข่าย IP ที่แตกต่างกัน และเลือกเส้นทางส่ง Packets ตาม IP Address

ตัวอย่าง:

- PC1 ติดต่อ PC2 ใน VLAN เดียวกัน → โดยทั่วไปใช้ Switching
- VLAN 10 ติดต่อ VLAN 20 → ต้องมี Inter-VLAN Routing
- เครื่องภายในองค์กรติดต่อ Internet → ผ่าน Router หรือ Layer 3 Gateway

## 3. OSI Model

OSI Model เป็นแบบจำลองการสื่อสารเครือข่าย 7 Layers

7

Application

บริการเครือข่ายที่ Application ใช้

HTTP, DNS

6

Presentation

การแปลงรูปแบบข้อมูลและการเข้ารหัส

Encoding, Encryption

5

Session

การจัดการ Sessions

Session Management

4

Transport

การสื่อสารระหว่าง Processes

TCP, UDP

3

Network

IP Addressing และ Routing

IP, Routers

2

Data Link

MAC Addressing และ Frames

Ethernet, Switches

1

Physical

ส่งสัญญาณและ Bits

Cables, Radio Signals

สำหรับการทบทวน ควรจำให้ได้ว่า Switch ทำงานหลักที่ Layer 2, Router ที่ Layer 3 และ TCP/UDP อยู่ที่ Layer 4

## 4. TCP/IP และ Network Protocols

### TCP vs UDP

| TCP                                      | UDP                                        |
| ---------------------------------------- | ------------------------------------------ |
| Connection-oriented                      | Connectionless                             |
| มีการยืนยันและส่งซ้ำเพื่อความน่าเชื่อถือ | ไม่มีการรับประกันการส่งถึงในระดับ Protocol |
| รักษาลำดับข้อมูล                         | ไม่รับประกันลำดับข้อมูล                    |
| ใช้กับงานที่ต้องการ Reliability          | เหมาะกับงานที่ต้องการลด Overhead           |

### Protocols และ Ports สำคัญ

| Protocol | Port ทั่วไป  | Purpose                      |
| -------- | ------------ | ---------------------------- |
| HTTP     | TCP 80       | Web Traffic                  |
| HTTPS    | TCP 443      | Encrypted Web Traffic        |
| DNS      | UDP/TCP 53   | Name Resolution              |
| SSH      | TCP 22       | Secure Remote Administration |
| FTP      | TCP 21       | File Transfer Control        |
| SMTP     | TCP 25       | Email Transfer               |
| DHCP     | UDP 67/68    | Dynamic IP Configuration     |
| RDP      | TCP/UDP 3389 | Remote Desktop               |
| SNMP     | UDP 161/162  | Network Monitoring           |

หมายเหตุ: Ports เหล่านี้เป็นค่าเริ่มต้นหรือค่าที่ใช้กันทั่วไป ไม่ใช่ข้อจำกัดว่าบริการต้องใช้ Port นี้เสมอไป

## 5. Network Security Threats

ภัยคุกคามที่เกี่ยวข้องกับ Network ได้แก่:

- DoS (Denial of Service): ทำให้บริการไม่พร้อมใช้งาน
- DDoS (Distributed DoS): ใช้หลายแหล่งโจมตีเป้าหมายเดียวกัน
- Man-in-the-Middle (MITM): ผู้โจมตีแทรกกลางการสื่อสาร
- Spoofing: ปลอมแปลงตัวตนหรือข้อมูล เช่น IP/MAC
- Sniffing: ดักจับ Network Traffic
- Malware: ซอฟต์แวร์อันตรายที่อาจแพร่กระจายผ่านเครือข่าย
- Lateral Movement: ผู้โจมตีเคลื่อนจากระบบที่ถูกยึดไปยังระบบอื่น

ตัวอย่างเช่น เมื่อเครื่องพนักงานติด Malware ผู้โจมตีอาจพยายามเข้าถึง File Server หรือ Database ภายในองค์กรต่อไป

แนวคิด Network Segmentation ใน Objective 4.2 จึงมีบทบาทสำคัญในการจำกัดการเคลื่อนที่ของผู้โจมตี

# Part 2 — Objective 4.2: Network Security Architecture

## 6. Network Segmentation

Network Segmentation คือการแบ่ง Network ขนาดใหญ่ออกเป็นเครือข่ายย่อยหรือ Segments เพื่อควบคุมการสื่อสารและแยกส่วนของระบบออกจากกัน

### วัตถุประสงค์

1. Limit the Spread of Attacks — จำกัดการแพร่กระจายของการโจมตี
2. Improve Network Performance — ลด Traffic ที่ไม่จำเป็นในบางส่วนของเครือข่าย
3. Control Traffic Flow — ควบคุมการสื่อสารระหว่าง Segments
4. Contain Security Breaches — จำกัดผลกระทบเมื่อเกิดการบุกรุก
5. Prevent Lateral Movement — ลดโอกาสที่ผู้โจมตีจะเคลื่อนที่ไปยังระบบอื่น

### ตัวอย่าง

องค์กรแบ่ง Network ออกเป็นสามส่วน:

Employee

VLAN 10

PC พนักงาน

Guest

VLAN 20

ผู้มาติดต่อ

Server

VLAN 30

ระบบสำคัญ

Firewall / ACL Policies

ควบคุมการเข้าถึงระหว่าง Segments

ตัวอย่าง Security Policy:

- Guest Network เข้าถึง Internet ได้
- Guest Network ไม่สามารถเข้าถึง Internal Servers
- Employee Network เข้าถึง Application Servers เฉพาะบริการที่จำเป็น
- Management Access อนุญาตเฉพาะ Administrators

### Blast Radius

Blast Radius คือขอบเขตผลกระทบจากเหตุการณ์ด้านความปลอดภัย

Network Segmentation ช่วยลด Blast Radius โดยจำกัดจำนวนระบบที่ผู้โจมตีสามารถเข้าถึงได้หลังจากบุกรุกสำเร็จ

ข้อควรจำ: Segmentation เพียงอย่างเดียวไม่รับประกันความปลอดภัย ต้องมีการบังคับใช้ Access Controls ที่เหมาะสมด้วย

## 7. Firewall Zones

Firewall Zone คือการจัดกลุ่ม Network Interfaces, Systems หรือ Traffic ตามระดับความน่าเชื่อถือและข้อกำหนดด้าน Security

### Common Firewall Zones

| Zone               | Trust Level           | จุดประสงค์             |
| ------------------ | --------------------- | ---------------------- |
| Outside / Internet | Untrusted             | เครือข่ายภายนอก        |
| Inside / Internal  | Trusted ภายใต้ Policy | ระบบภายในองค์กร        |
| DMZ                | Limited Trust         | Public-Facing Services |
| Management         | Restricted            | การบริหารจัดการระบบ    |

Firewall ใช้ Security Policies เพื่อกำหนดว่าการสื่อสารระหว่าง Zones ใดได้รับอนุญาต

ตัวอย่าง:

- Internet → Public Web Server ใน DMZ: อนุญาต HTTPS
- Internet → Internal Database: ปฏิเสธ
- Management Zone → Network Devices: อนุญาตเฉพาะผู้ดูแลที่ได้รับสิทธิ์

สำคัญ: Inside Zone ไม่ได้หมายความว่าทุกอุปกรณ์ภายในจะได้รับความไว้วางใจโดยอัตโนมัติ

## 8. DMZ (Demilitarized Zone)

DMZ คือ Network Segment ที่ใช้แยกบริการซึ่งต้องเปิดให้ผู้ใช้ภายนอกเข้าถึงออกจาก Internal Network

ตัวอย่างบริการใน DMZ:

- Public Web Servers
- Email Gateways
- Reverse Proxies

### โครงสร้างแนวคิด

Internet / Outside

Untrusted Network

External Firewall

DMZ

Public Web Server / Email Gateway

Internal Firewall

Internal Network

Internal Systems / Sensitive Data

ภาพนี้แสดงแนวคิด DMZ แบบใช้สอง Firewall Layers ซึ่งเป็นหนึ่งในรูปแบบการออกแบบ ไม่ใช่ข้อกำหนดว่าทุก DMZ ต้องใช้ Firewall สองตัว

### ประโยชน์ของ DMZ

เมื่อ Public Web Server ถูกโจมตีสำเร็จ ผู้โจมตีจะไม่ควรสามารถเข้าถึง Internal Database ได้โดยตรง เพราะมี Security Boundary และ Access Policies ควบคุมอยู่

จำ: DMZ = Isolate Public-Facing Services from Internal Systems

## 9. VLAN (Virtual Local Area Network)

VLAN คือการแบ่ง Network เชิง Logical ภายใน Physical Network เดียวกัน

VLAN ช่วยสร้าง Broadcast Domains แยกจากกัน โดยไม่จำเป็นต้องมี Physical Switch แยกทุกกลุ่ม

### Benefits

- Reduce Broadcast Traffic
- Improve Logical Isolation
- Flexible Network Management

### ตัวอย่าง

| VLAN    | กลุ่มอุปกรณ์ |
| ------- | ------------ |
| VLAN 10 | Employees    |
| VLAN 20 | Guests       |
| VLAN 30 | Servers      |

อุปกรณ์ใน VLAN ต่างกันจะไม่สามารถสื่อสารกันผ่าน Layer 2 โดยตรง ต้องอาศัย Inter-VLAN Routing หากต้องการติดต่อกัน

### VLAN Routing

Inter-VLAN Routing คือการส่งข้อมูลระหว่าง VLANs ผ่าน Layer 3 Device เช่น Router หรือ Layer 3 Switch

จุดสำคัญด้าน Security: VLAN แบ่ง Broadcast Domains แต่การป้องกันการเข้าถึงระหว่าง VLAN ต้องอาศัย ACL หรือ Firewall Policies ที่เหมาะสม

## 10. Micro-Segmentation

Micro-Segmentation คือการแบ่งและควบคุมการสื่อสารในระดับละเอียด เช่น ระดับ Device, Workload หรือ Application

แตกต่างจาก Network Segmentation ทั่วไปที่อาจแบ่งตาม Departments หรือ Subnets

### ตัวอย่าง

สมมติว่ามี Servers สามเครื่องใน Network เดียวกัน:

- Web Server
- Application Server
- Database Server

Micro-Segmentation สามารถกำหนดได้ว่า:

- Web Server ติดต่อ Application Server ได้เฉพาะ Port ที่จำเป็น
- Application Server ติดต่อ Database Server ได้เฉพาะ Database Port
- Web Server ไม่สามารถติดต่อ Database Server โดยตรง

### การนำไปใช้

- Zero Trust Architecture
- Critical Asset Protection
- Limiting Lateral Movement

### Tools

Software-Defined Networking (SDN), Host-Based Firewalls และ Next-Generation Firewalls

จำ: Micro-Segmentation = Granular Security Control per Workload or Device

## 11. Defense in Depth

Defense in Depth คือแนวคิดการใช้ Security Controls หลายชั้นร่วมกัน เพื่อให้ระบบยังมีการป้องกันเมื่อมาตรการชั้นหนึ่งล้มเหลว

### Security Layers

| Layer                | Security Controls                   |
| -------------------- | ----------------------------------- |
| Perimeter Security   | Firewalls, IDS/IPS                  |
| Network Security     | VLANs, DMZs, ACLs                   |
| Endpoint Security    | Anti-Malware, Patch Management      |
| Application Security | Secure Coding, WAF                  |
| Data Security        | Encryption, Backups, Access Control |

### ตัวอย่าง

ผู้โจมตีพยายามขโมยข้อมูลจาก Database

แม้ผู้โจมตีผ่าน Perimeter Firewall ได้ ก็อาจยังต้องผ่าน Network Segmentation, Application Authentication, Database Access Control และ Data Encryption

ประโยชน์คือช่วยลดการพึ่งพา Security Control เพียงชั้นเดียว

จำ: Defense in Depth = Multiple Layers of Security

## 12. Internet of Things (IoT)

IoT คืออุปกรณ์ Physical Devices ที่เชื่อมต่อ Network และแลกเปลี่ยนข้อมูลได้

ตัวอย่าง:

- Smart Cameras
- Smart Thermostats
- Wearable Devices
- Smart Appliances

### Common IoT Security Risks

| Risk                    | คำอธิบาย                             |
| ----------------------- | ------------------------------------ |
| Default Passwords       | ใช้รหัสผ่านจากโรงงาน                 |
| Weak Authentication     | ระบบยืนยันตัวตนไม่รัดกุม             |
| Unpatched Firmware      | Firmware มีช่องโหว่ที่ยังไม่ได้แก้ไข |
| Insecure Communications | การสื่อสารไม่มีการป้องกันที่เหมาะสม  |

### IoT Security Best Practices

- เปลี่ยน Default Credentials
- ใช้ Strong Authentication
- อัปเดต Firmware
- เข้ารหัส Communications ตามความเหมาะสม
- แยก IoT Devices ออกจาก Critical Systems
- ปิด Unnecessary Services
- จัดทำ IoT Device Inventory
- เปลี่ยนอุปกรณ์ที่ไม่ได้รับ Security Updates แล้ว

### ตัวอย่าง

Smart Camera ไม่ควรอยู่ใน Network เดียวกับ Critical Business Servers โดยไม่มีการจำกัดการเข้าถึง

หาก Camera ถูกโจมตี ผู้โจมตีอาจพยายามใช้ Camera เป็นจุดเริ่มต้นในการเข้าถึงระบบอื่น

## 13. Segmentation for Embedded Systems and IoT

Embedded Systems และ IoT Devices อาจมีข้อจำกัดด้าน Security Controls เช่น ไม่รองรับ Strong Authentication หรืออัปเดต Firmware ได้ยาก

มาตรการที่ควรใช้:

1. แยก IoT Network จาก Enterprise Network
2. ใช้ VLAN หรือ Micro-Segmentation
3. ใช้ Strict Access Controls
4. Monitor Network Traffic
5. ปิด Unnecessary Device Communications

ตัวอย่าง: Smart Camera ไม่ควรได้รับอนุญาตให้สื่อสารกับ Financial Systems หากไม่มีความจำเป็นทางธุรกิจ

## 14. Network Segmentation and Zero Trust

Zero Trust เป็นแนวคิดที่ไม่ให้ความไว้วางใจแก่ผู้ใช้หรืออุปกรณ์เพียงเพราะอยู่ภายใน Network

หลักการสำคัญคือ Never Trust, Always Verify

การตัดสินใจอนุญาตให้เข้าถึง Resources อาจพิจารณาจาก:

- Identity
- Device Security
- Application
- Resource
- Network Location
- Context

### ตัวอย่าง

พนักงานเชื่อมต่อจาก Office Network แต่ใช้อุปกรณ์ที่ไม่ผ่าน Security Requirements

Zero Trust อาจปฏิเสธการเข้าถึง Sensitive Applications แม้ผู้ใช้จะอยู่ภายในองค์กร

Network Segmentation สนับสนุน Zero Trust โดยช่วยจำกัดการเข้าถึงระหว่าง Resources ตาม Policy

### เปรียบเทียบแนวคิดสำคัญ

| Concept              | จุดประสงค์                              |
| -------------------- | --------------------------------------- |
| Network Segmentation | แบ่ง Network ออกเป็นส่วน                |
| VLAN                 | Logical Network Separation              |
| DMZ                  | แยก Public Services                     |
| Micro-Segmentation   | ควบคุม Workload/Device อย่างละเอียด     |
| Defense in Depth     | ใช้ Security หลายชั้น                   |
| Zero Trust           | ไม่เชื่อถือโดยอัตโนมัติ ต้องตรวจสอบก่อน |

# Part 3 — Objective 4.3: Cloud Security

## 15. Cloud Computing

Cloud Computing คือการให้บริการ Computing Resources ผ่าน Network โดยทั่วไปคือ Internet เมื่อผู้ใช้ต้องการ

ตัวอย่าง Resources ได้แก่ Servers, Storage, Networking และ Applications

### Five Essential Characteristics

| Characteristic         | ความหมาย                                    |
| ---------------------- | ------------------------------------------- |
| On-Demand Self-Service | Provision Resources ด้วยตนเอง               |
| Broad Network Access   | เข้าถึงบริการผ่านเครือข่าย                  |
| Resource Pooling       | ใช้ทรัพยากรร่วมกันอย่างมี Logical Isolation |
| Rapid Elasticity       | เพิ่มและลดทรัพยากรได้รวดเร็ว                |
| Measured Service       | วัดและติดตาม Resource Usage                 |

### ตัวอย่าง

บริษัทเปิดเว็บไซต์บน Cloud และมี Traffic เพิ่มขึ้นมากในช่วงโปรโมชั่น

Cloud สามารถเพิ่ม Computing Resources เพื่อรองรับผู้ใช้งาน และลดทรัพยากรเมื่อความต้องการลดลง

นี่คือ Rapid Elasticity

## 16. Cloud Service Models

Cloud Service Models แสดงระดับการบริหารจัดการระบบระหว่าง Cloud Provider และ Customer

### 16.1 Infrastructure as a Service (IaaS)

IaaS ให้บริการ Virtualized Infrastructure เช่น Virtual Machines, Storage และ Networking

ตัวอย่าง: Amazon EC2, Azure Virtual Machines

Provider ดูแล Physical Infrastructure ส่วน Customer ดูแล Guest OS, Applications, Data และ Configurations

จำ: IaaS = Infrastructure / Virtual Machines

### 16.2 Platform as a Service (PaaS)

PaaS ให้ Platform สำหรับ Develop, Test และ Deploy Applications โดยไม่ต้องดูแล Infrastructure และ OS พื้นฐานเอง

ตัวอย่าง: Google App Engine, Azure App Service

Provider ดูแล Platform, OS, Runtime และ Middleware ส่วน Customer ดูแล Applications และ Data

จำ: PaaS = Develop and Deploy Applications

### 16.3 Software as a Service (SaaS)

SaaS ให้บริการ Applications ที่พร้อมใช้งานผ่าน Internet

ตัวอย่าง: Gmail, Microsoft 365, Salesforce

Provider ดูแล Application และ Infrastructure ส่วน Customer ยังคงต้องดูแล Data, Users และ Access Settings ที่ตนควบคุม

จำ: SaaS = Ready-to-Use Software

### 16.4 Function as a Service (FaaS)

FaaS ให้บริการ Execution Environment สำหรับ Code ที่ทำงานเมื่อเกิด Events

ตัวอย่าง: AWS Lambda, Azure Functions

Provider ดูแล Serverless Infrastructure และ Runtime ส่วน Customer ดูแล Code, Triggers และ Data Access

จำ: FaaS = Event-Driven Serverless Functions

### ตารางเปรียบเทียบ Service Models

| Model | Provider ดูแลหลัก                  | Customer ดูแลหลัก           |
| ----- | ---------------------------------- | --------------------------- |
| IaaS  | Hardware, Network, Virtualization  | OS, Apps, Data              |
| PaaS  | Infrastructure, OS, Runtime        | Apps, Data                  |
| SaaS  | Application และ Infrastructure     | Data, Users, Access         |
| FaaS  | Serverless Infrastructure, Runtime | Code, Triggers, Data Access |

## 17. Shared Responsibility Model

Shared Responsibility Model คือแนวคิดการแบ่งหน้าที่รักษาความปลอดภัยระหว่าง Cloud Service Provider (CSP) และ Customer

### Security of the Cloud

Provider รับผิดชอบความปลอดภัยของ Infrastructure ที่ใช้ให้บริการ Cloud เช่น Physical Servers, Data Centers และ Physical Networking

### Security in the Cloud

Customer รับผิดชอบการรักษาความปลอดภัยของสิ่งที่ตนควบคุม เช่น Data, User Access, Applications และ Configurations ตามประเภทบริการ

### ตัวอย่างแต่ละ Model

IaaS: หาก Guest OS ไม่ได้รับการ Patch โดยทั่วไป Customer ต้องรับผิดชอบ

PaaS: หาก Application มีช่องโหว่จาก Insecure Coding โดยทั่วไป Customer ต้องรับผิดชอบ

SaaS: หาก Customer กำหนดสิทธิ์แชร์ข้อมูลผิดพลาด Customer ต้องรับผิดชอบการตั้งค่าดังกล่าว

FaaS: หาก Function Code มีช่องโหว่หรือกำหนด Data Access กว้างเกินไป Customer ต้องแก้ไข

### หลักที่ควรจำ

Cloud Provider ดูแล Infrastructure มากขึ้นเมื่อเปลี่ยนจาก IaaS ไป PaaS และ SaaS แต่ Customer ไม่ได้หมดความรับผิดชอบด้าน Data Security หรือ Access Control

ขอบเขตความรับผิดชอบจริงขึ้นอยู่กับบริการและข้อตกลงของ Provider ด้วย

## 18. Cloud Deployment Models

Cloud Deployment Models อธิบายลักษณะการจัดสรรและใช้งาน Cloud Environment

### 18.1 Public Cloud

Public Cloud เป็น Cloud ที่ให้บริการแก่ลูกค้าหลายราย โดยทั่วไปบริหารจัดการโดย Third-Party Provider

Features: Scalability, Cost-Efficiency, Multi-Tenancy

Examples: AWS, Microsoft Azure, Google Cloud

Considerations: Customer มีข้อจำกัดในการควบคุม Physical Infrastructure และต้องบริหาร Data Security กับ Access Control ให้เหมาะสม

### 18.2 Private Cloud

Private Cloud เป็น Cloud Environment สำหรับองค์กรเดียว อาจอยู่ On-Premises หรือ Hosted โดย Third Party

Features: Greater Control, Customization, Dedicated Environment

Use Cases: Finance, Healthcare และองค์กรที่มี Strict Security Requirements

Considerations: Higher Cost และ Maintenance Responsibility

### 18.3 Hybrid Cloud

Hybrid Cloud ผสมผสาน Public และ Private Cloud ให้ทำงานร่วมกัน

Features: Flexibility, Workload Balancing, Scalability

ตัวอย่าง: เก็บ Sensitive Data ใน Private Cloud และใช้ Public Cloud รองรับ Web Applications

Considerations: Integration และ Management Complexity

### 18.4 Community Cloud

Community Cloud เป็น Cloud ที่องค์กรหลายแห่งใช้ร่วมกันเพราะมี Shared Requirements หรือ Common Interests

Features: Collaboration, Cost-Sharing, Tailored Requirements

Use Cases: Government, Healthcare, Research Organizations

Considerations: ต้องประสาน Governance และ Security Responsibilities ระหว่างสมาชิก

### 18.5 Multi-Cloud

Multi-Cloud คือการใช้ Cloud Services จาก Providers หลายราย

ตัวอย่าง: ใช้ AWS สำหรับ Compute, Azure สำหรับ AI และ Google Cloud สำหรับ Analytics

Benefits: Flexibility, Reduced Vendor Lock-in, Provider Choice

Considerations: Management และ Integration Complexity

### เปรียบเทียบ Deployment Models

| Model       | จุดสำคัญ                                       | Keyword           |
| ----------- | ---------------------------------------------- | ----------------- |
| Public      | Shared Provider Infrastructure                 | Multi-Tenancy     |
| Private     | Dedicated to One Organization                  | Control           |
| Hybrid      | Public + Private                               | Integration       |
| Community   | Several Organizations with Common Requirements | Shared Compliance |
| Multi-Cloud | Multiple Cloud Providers                       | Vendor Lock-in    |

ข้อแตกต่างสำคัญ: Hybrid Cloud เน้นการเชื่อมต่อ Public และ Private Environments ส่วน Multi-Cloud เน้นการใช้ Providers หลายราย ทั้งสองรูปแบบสามารถเกิดขึ้นพร้อมกันได้

# Part 4 — ความเชื่อมโยงของ Domain 4 ทั้งหมด

เนื้อหา Network และ Cloud Security ไม่ได้แยกขาดจากกัน แต่ใช้แนวคิดด้าน Security หลายอย่างร่วมกัน

## 19. Network Segmentation กับ Cloud Security

องค์กรสามารถใช้ Network Segmentation ทั้งใน On-Premises Networks และ Cloud Environments

ตัวอย่างเช่น Cloud Network แบ่งเป็น Public Subnet และ Private Subnet แล้วกำหนด Security Rules เพื่อจำกัด Traffic

แนวคิดเหมือนกับ VLAN, DMZ และ Firewall Zones ที่เรียนใน Objective 4.2 แม้เทคโนโลยีที่ใช้จะต่างกัน

## 20. Zero Trust กับ Cloud IAM

Cloud Resources ไม่ควรถูกอนุญาตให้เข้าถึงเพียงเพราะ Request มาจาก Internal Network

ระบบควรพิจารณา Identity, Device Security, Resource และ Context ก่อนอนุญาตการเข้าถึง

จึงเชื่อมโยงกับ IAM, Authentication, Authorization และ Least Privilege ที่เรียนใน Domain 3

## 21. Defense in Depth ใน Cloud

Cloud Security สามารถใช้หลาย Security Layers ร่วมกัน เช่น

- Network Firewall
- Network Segmentation
- IAM
- Application Security
- Data Encryption
- Backup and Recovery

แม้ผู้โจมตีผ่าน Security Layer หนึ่งได้ ก็ยังมีมาตรการอื่นช่วยจำกัดผลกระทบ

## 22. IoT กับ Network Architecture

IoT Devices มักมี Security Limitations จึงควรแยกออกจาก Critical Business Systems

ตัวอย่าง Architecture:

- IoT Devices อยู่ใน IoT VLAN
- Employee Devices อยู่ใน Employee VLAN
- Critical Servers อยู่ใน Server VLAN
- Firewall Policies ควบคุม Traffic ระหว่าง Networks

หาก IoT Device ถูก Compromise ผู้โจมตีจะถูกจำกัดการเข้าถึงระบบอื่นตาม Security Policies ที่กำหนด

# Part 5 — ตารางจำแนก Concepts สำหรับสอบ

| Concept            | หน้าที่หลัก                      | ตัวอย่างสถานการณ์                   |
| ------------------ | -------------------------------- | ----------------------------------- |
| Firewall           | Filter Traffic                   | Block Unauthorized Access           |
| IDS                | Detect Threats                   | Alert Suspicious Traffic            |
| IPS                | Detect and Prevent               | Block Malicious Traffic             |
| VLAN               | Logical Segmentation             | Separate Guest Network              |
| DMZ                | Public Service Isolation         | Host Public Web Server              |
| Micro-Segmentation | Granular Isolation               | Restrict Server-to-Server Traffic   |
| Defense in Depth   | Multiple Security Layers         | Firewall + EDR + Encryption         |
| Zero Trust         | Verify Before Access             | Check Identity and Device           |
| IaaS               | Virtualized Infrastructure       | Deploy Virtual Machines             |
| PaaS               | Managed Development Platform     | Deploy Web Applications             |
| SaaS               | Managed Software                 | Use Microsoft 365                   |
| FaaS               | Event-Based Code Execution       | AWS Lambda                          |
| Public Cloud       | Shared Cloud Services            | AWS Public Cloud                    |
| Private Cloud      | Single Organization              | Dedicated Cloud                     |
| Hybrid Cloud       | Public and Private Integration   | Sensitive Private + Scalable Public |
| Community Cloud    | Shared Organization Requirements | Healthcare Community                |
| Multi-Cloud        | Multiple Providers               | AWS + Azure                         |

# Part 6 — ตัวอย่างข้อสอบเชิงสถานการณ์

## Question 1: Network Segmentation

An organization wants to prevent an attacker from moving between departments after compromising one workstation. Which control is most appropriate?

Answer: Network Segmentation

เหตุผล: Segmentation ช่วยจำกัด Lateral Movement และลด Blast Radius

## Question 2: DMZ

A company needs to host a public-facing web server while protecting its internal network. Which architecture should it use?

Answer: DMZ

เหตุผล: DMZ แยก Public-Facing Services ออกจาก Internal Systems

## Question 3: Micro-Segmentation

An organization wants to restrict communications between individual application workloads.

Answer: Micro-Segmentation

เหตุผล: Micro-Segmentation ให้ Granular Control ระดับ Workload

## Question 4: Defense in Depth

A company deploys Firewalls, Endpoint Protection, Application Security Controls and Encryption.

Answer: Defense in Depth

เหตุผล: ใช้ Security Controls หลาย Layers ร่วมกัน

## Question 5: Zero Trust

A user connects from an internal corporate network but is denied access because their device fails security checks.

Answer: Zero Trust

เหตุผล: Network Location เพียงอย่างเดียวไม่เพียงพอที่จะได้รับ Trust

## Question 6: IaaS

A company rents Virtual Machines and is responsible for patching their operating systems.

Answer: IaaS

เหตุผล: Customer ดูแล Guest OS และ Applications

## Question 7: PaaS

Developers deploy applications without managing operating systems or runtime infrastructure.

Answer: PaaS

เหตุผล: Provider ดูแล Platform ที่รองรับ Applications

## Question 8: SaaS

Employees use an online email application managed by a Cloud Provider.

Answer: SaaS

เหตุผล: Provider ให้บริการ Application พร้อมใช้งาน

## Question 9: Shared Responsibility

An organization accidentally grants public access to sensitive cloud storage data.

Answer: Customer Responsibility

เหตุผล: Customer ต้องดูแล Access Configuration ของ Resources ที่ตนควบคุม

## Question 10: Hybrid Cloud

A company stores sensitive workloads in a private cloud while using a public cloud for scalable applications.

Answer: Hybrid Cloud

เหตุผล: ใช้ Public และ Private Cloud ร่วมกัน

## Question 11: Community Cloud

Several hospitals use a shared cloud environment designed for common regulatory requirements.

Answer: Community Cloud

เหตุผล: หลายองค์กรมี Shared Requirements

## Question 12: Multi-Cloud

A company uses services from AWS and Microsoft Azure to reduce dependence on a single provider.

Answer: Multi-Cloud

เหตุผล: ใช้ Multiple Providers เพื่อลด Vendor Lock-in

# Part 7 — Final Exam Revision

## 23. จุดที่ควรจำเป็นพิเศษ

Network Segmentation

แบ่ง Network เพื่อลด Lateral Movement และ Blast Radius

DMZ vs VLAN vs Micro-Segmentation

DMZ แยก Public Services, VLAN แบ่ง Logical Networks, Micro-Segmentation ควบคุมระดับ Workload

Defense in Depth

ใช้ Security Controls หลายชั้น ไม่พึ่งพามาตรการเดียว

Zero Trust

ไม่ให้ Trust โดยอัตโนมัติ ต้องตรวจสอบก่อนเข้าถึง Resources

Cloud Service Models

IaaS = Infrastructure, PaaS = Platform, SaaS = Software, FaaS = Functions

Shared Responsibility

Provider และ Customer มีหน้าที่ด้าน Security ต่างกันตาม Service Model

Cloud Deployment Models

Public, Private, Hybrid, Community และ Multi-Cloud ต้องแยกตามลักษณะการใช้งาน

## 24. Checklist ตรวจสอบความเข้าใจ

Domain 4 Readiness

0/17

Objective 4.1 — Networking

อธิบาย LAN, WAN, WLAN และ VPN ได้

แยก Switch, Router, Firewall, IDS และ IPS ได้

เข้าใจ OSI Model และ TCP/IP

รู้จัก Protocols และ Ports สำคัญ

อธิบาย Network Threats พื้นฐานได้

Objective 4.2 — Network Architecture

อธิบาย Network Segmentation และ Blast Radius ได้

แยก Firewall Zones และ DMZ ได้

เข้าใจ VLAN และ Inter-VLAN Routing

แยก Segmentation กับ Micro-Segmentation ได้

อธิบาย Defense in Depth ได้

รู้จัก IoT Risks และ Mitigations

อธิบาย Zero Trust ได้

Objective 4.3 — Cloud Security

จำ Cloud Characteristics ทั้ง 5 ได้

แยก IaaS, PaaS, SaaS และ FaaS ได้

เข้าใจ Shared Responsibility Model

แยก Public, Private, Hybrid และ Community Cloud ได้

อธิบาย Multi-Cloud และ Vendor Lock-in ได้

รีเซ็ต Checklist

## สรุปภาพรวม Domain 4

Domain 4 เชื่อมโยงหลักการสำคัญสามด้านเข้าด้วยกัน ได้แก่

Network Fundamentals — เข้าใจว่าอุปกรณ์และระบบเครือข่ายสื่อสารกันอย่างไร

Network Security Architecture — เข้าใจการออกแบบเครือข่ายให้ปลอดภัยโดยใช้ Segmentation, Firewall Zones, DMZ, VLAN, Micro-Segmentation, Defense in Depth และ Zero Trust

Cloud Security — เข้าใจรูปแบบบริการ Cloud, การแบ่งความรับผิดชอบ และวิธีเลือก Cloud Deployment Model ให้เหมาะสมกับความต้องการขององค์กร

สำหรับการสอบ ISC2 CC สิ่งที่ควรฝึกมากที่สุดคือ การอ่านสถานการณ์แล้วเลือก Security Concept ที่เหมาะสม ไม่ใช่แค่จำคำจำกัดความ เพราะแนวคิดหลายเรื่องมีความเกี่ยวข้องกันแต่แก้ปัญหาคนละลักษณะ

สรุปฉบับนี้ครอบคลุมหัวข้อ Domain 4 ที่ปรากฏในบริบทการเรียนของเรา โดย Objective 4.2 และ 4.3 อ้างอิงจากสไลด์ที่ส่งมา ส่วน Objective 4.1 เป็นเนื้อหาพื้นฐานที่เสริมไว้เพื่อให้ทบทวน Domain 4 ได้ต่อเนื่องครบทั้งสามส่วนครับ