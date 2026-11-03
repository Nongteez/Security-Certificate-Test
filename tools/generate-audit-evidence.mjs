import fs from 'node:fs';
import path from 'node:path';

const ARTIFACT_DIR = 'artifacts/qa/reading-notes-content-depth-audit';
if (!fs.existsSync(ARTIFACT_DIR)) {
  fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
}

// 1. Load the previously generated depth data
const subsections = JSON.parse(fs.readFileSync(path.join(ARTIFACT_DIR, 'all-domain-subsections-depth.json'), 'utf8'));
const disposition = JSON.parse(fs.readFileSync(path.join(ARTIFACT_DIR, 'supplementary-disposition-register.json'), 'utf8'));

// 2. Refine the Coverage & Depth Matrix
const refinedMatrix = subsections.map(s => {
  const missingCriteria = [];
  if (!s.criteria.hasWhat) missingCriteria.push('What (Definition)');
  if (!s.criteria.hasWhy) missingCriteria.push('Why (Objective/Rationale)');
  if (!s.criteria.hasHow) missingCriteria.push('How (Process/Lifecycle)');
  if (!s.criteria.hasWhen) missingCriteria.push('When (Triggers/Conditions)');
  if (!s.criteria.hasExample) missingCriteria.push('Realistic Example');
  if (!s.criteria.hasDistinction) missingCriteria.push('Distinction / Edge Case');
  if (!s.criteria.hasLimitations) missingCriteria.push('Limitations / Tradeoffs');
  if (!s.criteria.hasExamTerms) missingCriteria.push('Exam Terms / Traps');

  let recommendation = 'MAINTAIN';
  if (s.depthScore <= 3) {
    recommendation = 'MAJOR_ENRICHMENT';
  } else if (s.depthScore <= 5) {
    recommendation = 'TARGETED_EXPANSION';
  } else {
    recommendation = 'PRESERVE_EXCELLENT';
  }

  return {
    domain: s.domain,
    id: s.id,
    title: s.title,
    objective: s.obj,
    depthScore: s.depthScore,
    scorePercent: Math.round((s.depthScore / 8) * 100),
    hasTable: s.hasTable,
    hasDiagram: s.hasDiagram,
    diagramId: s.diagramId,
    hasScenario: s.hasScenario,
    coverageStatus: s.coverageStatus,
    missingCriteria,
    recommendation
  };
});

// 3. Educational Enrichment Backlog (P0 to P3)
const enrichmentBacklog = [
  // --- P0: Critical Exam Gaps ---
  {
    id: 'ENRICH-D1-001',
    domain: 1,
    priority: 'P0',
    targetObjective: 'Objective 1.1',
    targetSubsection: '1.1.6 Non-repudiation, Privacy & Data Protection',
    title: 'Privacy vs. Confidentiality Master Distinction Table',
    essence: 'Explicit comparison between Privacy (data subject rights, personal control, legal mandates) and Confidentiality (access restriction to unauthorized parties, technical control). Common ISC2 trap where candidates confuse encryption with privacy compliance.',
    bilingualTerms: ['Privacy (ความเป็นส่วนตัว)', 'Confidentiality (การรักษาความลับ)', 'Data Subject (เจ้าของข้อมูล)', 'Unauthorized Disclosure (การเปิดเผยโดยไม่ได้รับอนุญาต)'],
    pedagogicalBenefit: 'Directly resolves the #1 conceptual confusion in Domain 1 exam questions.',
    riskAssessment: 'Low risk. Text and comparison table insertion without modifying existing structure.'
  },
  {
    id: 'ENRICH-D1-002',
    domain: 1,
    priority: 'P0',
    targetObjective: 'Objective 1.5',
    targetSubsection: '1.5.3 ISC2 Code of Ethics (The 4 Canons)',
    title: 'Code of Ethics Precedence & Ethical Dilemmas',
    essence: 'Deepen the strict priority order of the 4 Canons (Canon 1: Society > Canon 2: Law > Canon 3: Client > Canon 4: Profession). Add realistic dilemma: "What if client orders you to conceal a critical public water safety flaw?" (Canon 1 overrides Canon 3).',
    bilingualTerms: ['Order of Precedence (ลำดับความสำคัญ)', 'Ethical Dilemma (ภาวะกลืนไม่เข้าคายไม่ออกทางจริยธรรม)', 'Public Safety (ความปลอดภัยสาธารณะ)'],
    pedagogicalBenefit: 'Crucial for ISC2 scenario questions where two canons conflict.',
    riskAssessment: 'Low risk. Enhances existing ethical conduct section.'
  },
  {
    id: 'ENRICH-D2-001',
    domain: 2,
    priority: 'P0',
    targetObjective: 'Objective 2.2',
    targetSubsection: '2.2.6 RTO and RPO Recovery Metrics',
    title: 'MTD, RTO, RPO & WRT Relationship & Visual Timeline',
    essence: 'Clarify the mathematical relationship: MTD (Maximum Tolerable Downtime) >= RTO (Recovery Time Objective) + WRT (Work Recovery Time). Clarify that RPO measures data loss window in the past, while RTO measures recovery downtime window into the future.',
    bilingualTerms: ['MTD (ระยะเวลาหยุดทำงานสูงสุดที่รับได้)', 'RTO (เป้าหมายเวลาการกู้คืนระบบ)', 'RPO (เป้าหมายจุดเวลาการสูญเสียข้อมูล)', 'WRT (เวลาทดสอบและกู้คืนงาน)'],
    pedagogicalBenefit: 'Eliminates frequent exam errors confusing RTO with MTD and RPO directionality.',
    riskAssessment: 'Low risk. High educational value.'
  },
  {
    id: 'ENRICH-D3-001',
    domain: 3,
    priority: 'P0',
    targetObjective: 'Objective 3.2',
    targetSubsection: '3.2.2 Access Control Models: DAC, MAC, RBAC, ABAC',
    title: 'Access Control Models Decision Matrix & Exam Triggers',
    essence: 'Comprehensive comparison matrix of DAC (Owner decides, NTFS), MAC (System labels, clearance vs classification, military), RBAC (Job role, enterprise standard), and ABAC (Dynamic attributes, environment/context, Zero Trust). Include specific exam trigger words.',
    bilingualTerms: ['Discretionary (ตามดุลยพินิจของเจ้าของ)', 'Mandatory (ตามข้อบังคับระดับชั้นความลับ)', 'Role-Based (ตามบทบาทหน้าที่)', 'Attribute-Based (ตามแอตทริบิวต์และบริบท)'],
    pedagogicalBenefit: 'Mastery of access control models represents 15-20% of Domain 3 questions.',
    riskAssessment: 'Low risk. Replaces fragmented descriptions with an authoritative table.'
  },
  {
    id: 'ENRICH-D3-002',
    domain: 3,
    priority: 'P0',
    targetObjective: 'Objective 3.1',
    targetSubsection: '3.1.2 Privilege Creep & Principle of Least Privilege',
    title: 'Least Privilege vs. Need to Know vs. Separation of Duties Triad',
    essence: 'Clear side-by-side contrast of the three core authorization doctrines. Least Privilege = what tools/rights you get; Need to Know = which specific data files you can see; SoD = splitting critical tasks so no single person can commit fraud undetected.',
    bilingualTerms: ['Least Privilege (สิทธิ์ต่ำสุดที่จำเป็น)', 'Need to Know (ความจำเป็นต้องทราบ)', 'Separation of Duties (การแบ่งแยกหน้าที่)', 'Privilege Creep (การสะสมสิทธิ์ค้างสะสม)'],
    pedagogicalBenefit: 'Prevents confusing three closely related access governance terms.',
    riskAssessment: 'Low risk.'
  },
  {
    id: 'ENRICH-D4-001',
    domain: 4,
    priority: 'P0',
    targetObjective: 'Objective 4.1',
    targetSubsection: '4.1.3 TCP/IP 4-Layer Architecture Mapping',
    title: 'Comprehensive OSI 7-Layer vs. TCP/IP 4-Layer Mapping Table with PDUs & Protocols',
    essence: 'Authoritative mapping table uniting Layer #, OSI Layer Name, TCP/IP Layer Name, Protocol Data Unit (Bits, Frames, Packets, Segments, Data), Core Protocols, and Security Hardware (Hubs, Switches, Routers, Firewalls, NGFW). Re-establishes direct many-to-one correspondence broken in Phase 3E.',
    bilingualTerms: ['Protocol Data Unit (หน่วยข้อมูลโพรโทคอล)', 'Bit / Frame / Packet / Segment', 'Encapsulation (การห่อหุ้มข้อมูล)', 'Decapsulation (การถอดหุ้มข้อมูล)'],
    pedagogicalBenefit: 'Directly reinforces foundational networking tested across 24% of exam.',
    riskAssessment: 'Zero code churn. Pure markdown table addition.'
  },
  {
    id: 'ENRICH-D4-002',
    domain: 4,
    priority: 'P0',
    targetObjective: 'Objective 4.3',
    targetSubsection: '4.3.3 Shared Responsibility Model by Cloud Service Type',
    title: 'Shared Responsibility Matrix: On-Prem vs IaaS vs PaaS vs SaaS',
    essence: 'Detailed responsibilities breakdown across 8 layers: Physical Facilities, Physical Network/Hardware, Hypervisor/Virtualization, OS, Runtime/Middleware, Applications, Identity & Access, and Customer Data. Highlight that Customer ALWAYS retains Data & IAM responsibility in all models.',
    bilingualTerms: ['Shared Responsibility Model (โมเดลความรับผิดชอบร่วม)', 'On-Premises', 'IaaS / PaaS / SaaS', 'Customer Responsibility (ความรับผิดชอบของลูกค้า)'],
    pedagogicalBenefit: 'High exam weight. ISC2 heavily tests what the customer vs CSP manages in each tier.',
    riskAssessment: 'Low risk. Authoritative table.'
  },

  // --- P1: High-Yield Pedagogical Deepening ---
  {
    id: 'ENRICH-D1-003',
    domain: 1,
    priority: 'P1',
    targetObjective: 'Objective 1.1',
    targetSubsection: '1.1.2 The CIA Triad — Confidentiality, Integrity, Availability',
    title: 'CIA Triad Real-World Incident Analysis Table',
    essence: 'Map classic security incidents to the primary CIA pillar violated: Ransomware (Availability + Confidentiality if exfiltrated), Wiretapping/Sniffing (Confidentiality), Data Tampering/SQL Injection (Integrity), DDoS (Availability), Unauthorized Credential Theft (Confidentiality).',
    bilingualTerms: ['Exfiltration (การลักลอบส่งข้อมูลออก)', 'Tampering (การดัดแปลงแก้ไข)', 'DDoS (การโจมตีให้ระบบปฏิเสธการให้บริการ)'],
    pedagogicalBenefit: 'Helps students instantly map ambiguous scenario questions to the core CIA impact.',
    riskAssessment: 'Low risk.'
  },
  {
    id: 'ENRICH-D1-004',
    domain: 1,
    priority: 'P1',
    targetObjective: 'Objective 1.2',
    targetSubsection: '1.2.5 Inherent Risk, Residual Risk, Risk Appetite & Tolerance',
    title: 'Inherent Risk, Residual Risk & Risk Appetite Operational Decision Flow',
    essence: 'Step-by-step logic: Inherent Risk (Raw risk) - Control Effectiveness = Residual Risk. If Residual Risk <= Risk Appetite: Accept. If Residual Risk > Risk Appetite: Further Treat (Mitigate, Transfer, or Avoid) until within appetite.',
    bilingualTerms: ['Inherent Risk (ความเสี่ยงที่มีอยู่แต่เดิม)', 'Residual Risk (ความเสี่ยงที่เหลืออยู่)', 'Risk Appetite (ระดับความเสี่ยงที่ยอมรับได้)'],
    pedagogicalBenefit: 'Clarifies abstract risk concepts with an operational decision sequence.',
    riskAssessment: 'Low risk.'
  },
  {
    id: 'ENRICH-D2-002',
    domain: 2,
    priority: 'P1',
    targetObjective: 'Objective 2.2',
    targetSubsection: '2.2.7 DRP, Backup & Recovery Sites',
    title: 'Backup Strategies Tradeoff Matrix: Full vs. Differential vs. Incremental',
    essence: 'Detailed comparison table analyzing: Backup Duration, Storage Space Required, Restore Speed, Number of Media/Sets Needed to Restore, and Complexity. Include Day 1 to Day 5 enterprise scenario showing exact restore chain for Differential vs Incremental.',
    bilingualTerms: ['Full Backup (การสำรองข้อมูลเต็มรูปแบบ)', 'Differential Backup (การสำรองข้อมูลส่วนต่าง)', 'Incremental Backup (การสำรองข้อมูลส่วนเพิ่ม)', 'Restore Chain (ลำดับชุดการกู้คืน)'],
    pedagogicalBenefit: 'Frequently tested on CC and CISSP exams with mathematical and sequence traps.',
    riskAssessment: 'Low risk.'
  },
  {
    id: 'ENRICH-D2-003',
    domain: 2,
    priority: 'P1',
    targetObjective: 'Objective 2.1',
    targetSubsection: '2.1.6 The Risk Register: Structure, Ownership, and Tracking',
    title: 'Practical Enterprise Risk Register Walkthrough (RSK-001 Case Study)',
    essence: 'Full tabular illustration of a realistic Risk Register row for an e-commerce company facing ransomware: Risk ID, Asset, Threat, Vulnerability, Inherent Risk Score (5x4=20), Existing Controls, Residual Risk Score (2x2=4), Risk Owner, Action Plan, Target Date.',
    bilingualTerms: ['Risk Register (ทะเบียนความเสี่ยง)', 'Risk Owner (เจ้าของความเสี่ยง)', 'Action Plan (แผนปฏิบัติการลดความเสี่ยง)'],
    pedagogicalBenefit: 'Bridges theoretical GRC definitions to real-world security practice.',
    riskAssessment: 'Low risk.'
  },
  {
    id: 'ENRICH-D3-003',
    domain: 3,
    priority: 'P1',
    targetObjective: 'Objective 3.2',
    targetSubsection: '3.2.4 Modern Identity Federation & SSO Protocols (SAML, OAuth, OIDC)',
    title: 'Federation Protocols Guide: SAML 2.0 vs. OAuth 2.0 vs. OpenID Connect',
    essence: 'Clear explanation of modern web identity protocols from D3 surm.md: SAML 2.0 (Enterprise XML SSO between IdP and SP), OAuth 2.0 (Authorization framework with access tokens / scoped API access), OpenID Connect (OIDC) (Authentication layer on top of OAuth 2.0 using JWT ID tokens).',
    bilingualTerms: ['Identity Provider (ผู้ให้บริการยืนยันตัวตน)', 'Service Provider (ผู้ให้บริการแอปพลิเคชัน)', 'Federation (การเชื่อมโยงระบบยืนยันตัวตน)', 'Access Token vs ID Token'],
    pedagogicalBenefit: 'Modernizes Domain 3 content to 2026 exam realities where cloud identity is ubiquitous.',
    riskAssessment: 'Medium value, low risk.'
  },
  {
    id: 'ENRICH-D4-003',
    domain: 4,
    priority: 'P1',
    targetObjective: 'Objective 4.1',
    targetSubsection: '4.1.4 IPv4 Addressing, Subnetting, Classes & NAT',
    title: 'IPv4 RFC 1918 Private Ranges, APIPA & NAT/PAT Operational Guide',
    essence: 'Quick-reference table of Class A (10.0.0.0/8), Class B (172.16.0.0/12), Class C (192.168.0.0/16), APIPA (169.254.0.0/16 - indicates DHCP failure!), Loopback (127.0.0.1). Clear operational distinction between Static NAT (1:1), Dynamic NAT (pool), and PAT / NAT Overload (many:1 via ports).',
    bilingualTerms: ['Private IP (ไอพีแอดเดรสส่วนตัว)', 'APIPA (การกำหนดไอพีอัตโนมัติเมื่อต่อ DHCP ไม่ได้)', 'Port Address Translation (PAT / NAT Overload)'],
    pedagogicalBenefit: 'Directly addresses network troubleshooting and addressing questions on exam.',
    riskAssessment: 'Low risk.'
  },
  {
    id: 'ENRICH-D4-004',
    domain: 4,
    priority: 'P1',
    targetObjective: 'Objective 4.1',
    targetSubsection: '4.1.6 Essential Network Protocols & Port Security Reference',
    title: 'Master Port & Protocol Security Table (Insecure vs. Secure Equivalents)',
    essence: 'Tabular guide pairing insecure legacy protocols with secure encrypted replacements: HTTP (80) -> HTTPS (443), Telnet (23) -> SSH (22), FTP (20/21) -> SFTP (22) / FTPS (989/990), SMTP (25) -> SMTPS (465/587), SNMP v1/v2 -> SNMP v3 (auth/priv), DNS (53) -> DNSSEC/DoH.',
    bilingualTerms: ['Plaintext Protocol (โพรโทคอลส่งข้อมูลแบบไม่เข้ารหัส)', 'Encrypted Transport (การรับส่งข้อมูลแบบเข้ารหัส)', 'Secure Replacement (ทางเลือกที่ปลอดภัยกว่า)'],
    pedagogicalBenefit: 'Extremely high yield: ISC2 repeatedly tests "which protocol should replace an unencrypted service".',
    riskAssessment: 'Low risk.'
  },

  // --- P2: Clarity & Context Refinements ---
  {
    id: 'ENRICH-D1-005',
    domain: 1,
    priority: 'P2',
    targetObjective: 'Objective 1.1',
    targetSubsection: '1.1.3 Identification & Authentication (AAA)',
    title: 'AAA Memory Pipeline & Stage Distinction Table',
    essence: 'Reinforce the 4-stage pipeline: Identification (Claiming identity - username, badge) -> Authentication (Proving identity - password, fingerprint) -> Authorization (Granting access permissions) -> Accounting (Logging and tracking actions for auditability).',
    bilingualTerms: ['Identification (การระบุตัวตน)', 'Authentication (การพิสูจน์ตัวตน)', 'Authorization (การอนุญาตสิทธิ์)', 'Accounting / Auditing (การบันทึกและตรวจสอบย้อนหลัง)'],
    pedagogicalBenefit: 'Prevents confusing Authentication with Authorization.',
    riskAssessment: 'Low risk.'
  },
  {
    id: 'ENRICH-D2-004',
    domain: 2,
    priority: 'P2',
    targetObjective: 'Objective 2.2',
    targetSubsection: '2.2.8 DR Testing, Exercises & Drills',
    title: 'Disaster Recovery Testing Progression Matrix',
    essence: 'Comparison of 5 DR test types: 1. Checklist/Read-Through (individual review), 2. Structured Walkthrough / Tabletop (team discussion around a table), 3. Simulation (simulated drill with real teams without shutting prod), 4. Parallel Test (stand up backup site and run alongside prod), 5. Full Interruption / Cutover (switch off prod and run on backup).',
    bilingualTerms: ['Tabletop Exercise (การซ้อมบนโต๊ะ)', 'Structured Walkthrough (การซักซ้อมตามโครงสร้าง)', 'Parallel Test (การทดสอบคู่ขนาน)', 'Full Interruption (การทดสอบหยุดระบบจริง)'],
    pedagogicalBenefit: 'Clear escalation scale showing risk vs realism trade-off.',
    riskAssessment: 'Low risk.'
  },
  {
    id: 'ENRICH-D2-005',
    domain: 2,
    priority: 'P2',
    targetObjective: 'Objective 2.3',
    targetSubsection: '2.3.5 Common Social Engineering Techniques',
    title: 'Social Engineering Techniques & Psychological Triggers Matrix',
    essence: 'Systematic catalog of Phishing, Spear Phishing, Whaling, Vishing, Smishing, Tailgating (unauthorized following), Piggybacking (authorized/consensual following via courtesy), Shoulder Surfing, Dumpster Diving, Baiting, Pretexting, and Waterholing. Highlight underlying psychological levers: Urgency, Authority, Fear, Greed, Scarcity, Social Proof.',
    bilingualTerms: ['Social Engineering (วิศวกรรมสังคม)', 'Tailgating vs Piggybacking', 'Psychological Trigger (สิ่งกระตุ้นทางจิตวิทยา)'],
    pedagogicalBenefit: 'Bridges social engineering tactics to human psychology questions.',
    riskAssessment: 'Low risk.'
  },
  {
    id: 'ENRICH-D4-005',
    domain: 4,
    priority: 'P2',
    targetObjective: 'Objective 4.2',
    targetSubsection: '4.2.8 Embedded Systems, IoT & ICS/SCADA Security Architecture',
    title: 'Purdue Model Levels & ICS/SCADA vs. IT Security Priorities',
    essence: 'Contrast IT priorities (CIA - Confidentiality first) with ICS/SCADA priorities (AIC - Availability and Human Safety first!). Introduce simplified Purdue Model (Level 0 Sensors, Level 1 Controllers/PLCs, Level 2 Supervisory/SCADA, Level 3 Operations DMZ, Level 4 Enterprise IT) and why strict segmentation/air-gapping is mandatory.',
    bilingualTerms: ['Industrial Control Systems (ICS)', 'Supervisory Control and Data Acquisition (SCADA)', 'Purdue Model (โมเดลเพอร์ดู)', 'Safety & Availability First'],
    pedagogicalBenefit: 'Enriches emerging 2026 ICS/IoT exam scope.',
    riskAssessment: 'Low risk.'
  },

  // --- P3: Polish & Advanced Nuance ---
  {
    id: 'ENRICH-D1-006',
    domain: 1,
    priority: 'P3',
    targetObjective: 'Objective 1.3',
    targetSubsection: '1.3.4 Security Document Hierarchy',
    title: 'Security Document Hierarchy Quick Mnemonic Table',
    essence: 'Summary table of Policy (What & Why - Executive, Mandatory, High-level), Standard (What specific tool/setting - Mandatory, Measurable), Procedure (Step-by-step How-to - Mandatory), Guideline (Recommendations - Optional/Discretionary).',
    bilingualTerms: ['Policy (นโยบาย)', 'Standard (มาตรฐาน)', 'Procedure (ขั้นตอนปฏิบัติ)', 'Guideline (แนวทางปฏิบัติ)'],
    pedagogicalBenefit: 'Reinforces document hierarchy questions.',
    riskAssessment: 'Low risk.'
  },
  {
    id: 'ENRICH-D2-006',
    domain: 2,
    priority: 'P3',
    targetObjective: 'Objective 2.4',
    targetSubsection: '2.4.4 Key Performance (KPI) vs. Risk (KRI) Indicators',
    title: 'KPI vs. KRI Concrete Enterprise Examples',
    essence: 'Side-by-side examples: KPI (Lagging indicator measuring past performance, e.g. % of workstations patched within 14 days, MTTR) vs KRI (Leading indicator forecasting emerging risk, e.g. number of failed privileged logins, employee turnover in finance, unpatched critical CVE count).',
    bilingualTerms: ['Key Performance Indicator (KPI)', 'Key Risk Indicator (KRI)', 'Leading vs Lagging Indicator'],
    pedagogicalBenefit: 'Clarifies difference between performance tracking and risk warning.',
    riskAssessment: 'Low risk.'
  },
  {
    id: 'ENRICH-D3-004',
    domain: 3,
    priority: 'P3',
    targetObjective: 'Objective 3.1',
    targetSubsection: '3.1.1 IAM Overview & The JML Lifecycle',
    title: 'Joiner-Mover-Leaver (JML) Privilege Creep Scenario (Finance to IT Transfer)',
    essence: 'Detailed step-by-step scenario: Bob transfers from Accounts Payable to IT Helpdesk. Flawed process leaves SAP payment approval intact while adding Active Directory admin rights. Explains why Mover process must explicitly audit and revoke existing entitlements before granting new role rights.',
    bilingualTerms: ['Privilege Creep (การสะสมสิทธิ์)', 'Internal Transfer (การย้ายแผนกภายใน)', 'Revocation before Granting'],
    pedagogicalBenefit: 'Illustrates realistic corporate risk scenario tested on exam.',
    riskAssessment: 'Low risk.'
  },
  {
    id: 'ENRICH-D5-001',
    domain: 5,
    priority: 'P3',
    targetObjective: 'Objective 5.2',
    targetSubsection: '5.2.1 Logging, Telemetry & Audit Trails',
    title: 'NTP Security & Time Synchronization Vulnerabilities',
    essence: 'Add brief technical note on Network Time Protocol (NTP) authentication and vulnerability to amplification/reflection attacks, reinforcing why SIEM event correlation fails without cryptographically authenticated, synchronized timestamps.',
    bilingualTerms: ['Network Time Protocol (NTP)', 'Time Synchronization (การซิงโครไนซ์เวลา)', 'Forensic Timestamp Integrity'],
    pedagogicalBenefit: 'Refines operational logging depth.',
    riskAssessment: 'Low risk.'
  }
];

// 4. Visualization Opportunity Register
const visualizationOpportunities = [
  {
    id: 'VIS-OPP-001',
    domain: 1,
    type: 'Comparison Table',
    targetSubsection: '1.1.6 Non-repudiation, Privacy & Data Protection',
    concept: 'Privacy vs. Confidentiality',
    educationalPurpose: 'Disambiguate two often-confused core concepts with orthogonal focuses.',
    currentFormat: 'Prose descriptions in separate paragraphs.',
    proposedFormat: '4-column structured table (Dimension, Privacy, Confidentiality, Exam Trap).',
    responsiveNotes: 'Standard responsive markdown table with word-break rules.'
  },
  {
    id: 'VIS-OPP-002',
    domain: 1,
    type: 'Process Flow / Decision Diagram',
    targetSubsection: '1.2.5 Inherent Risk, Residual Risk, Risk Appetite & Tolerance',
    concept: 'Inherent Risk to Residual Risk Reduction & Appetite Check',
    educationalPurpose: 'Visually communicate how baseline threats + assets yield Inherent Risk, controls reduce risk, leaving Residual Risk to be compared against Risk Appetite.',
    currentFormat: 'Prose explanations and definitions.',
    proposedFormat: 'Linear relationship SVG diagram with dual-mode responsive card stack (>=880px SVG, <880px card stack).',
    responsiveNotes: 'Follow container query design established in Task 146/147.'
  },
  {
    id: 'VIS-OPP-003',
    domain: 1,
    type: 'Hierarchy Diagram',
    targetSubsection: '1.5.3 ISC2 Code of Ethics (The 4 Canons)',
    concept: 'ISC2 Code of Ethics Order of Precedence',
    educationalPurpose: 'Emphasize that Canon 1 strictly outranks Canon 2, 3, and 4 in conflict situations.',
    currentFormat: 'Numbered list with bold titles.',
    proposedFormat: 'Vertical priority ladder diagram with numbered tiers and conflict arrow.',
    responsiveNotes: 'Responsive flex cards on mobile.'
  },
  {
    id: 'VIS-OPP-004',
    domain: 2,
    type: 'Timeline / Relationship Diagram',
    targetSubsection: '2.2.6 RTO and RPO Recovery Metrics',
    concept: 'Disaster Timeline: RPO, RTO, WRT, and MTD',
    educationalPurpose: 'Clarify the temporal relationship of recovery metrics on a chronological timeline.',
    currentFormat: 'Prose and formula bullet points.',
    proposedFormat: 'Horizontal timeline diagram: Past (RPO) <- Incident Point -> Future (RTO + WRT = MTD limit).',
    responsiveNotes: 'Horizontal scrolling container on mobile or vertical timeline stack.'
  },
  {
    id: 'VIS-OPP-005',
    domain: 2,
    type: 'Comparison Table',
    targetSubsection: '2.2.7 DRP, Backup & Recovery Sites',
    concept: 'Backup Strategies Tradeoff Matrix (Full vs Differential vs Incremental)',
    educationalPurpose: 'Compare backup speed, storage usage, restore speed, and restore set composition.',
    currentFormat: 'Bullet points with descriptions.',
    proposedFormat: '6-column comprehensive comparison matrix.',
    responsiveNotes: 'Scrollable data table with sticky first column.'
  },
  {
    id: 'VIS-OPP-006',
    domain: 3,
    type: 'Process Flow Diagram',
    targetSubsection: '3.1.1 IAM Overview & The JML Lifecycle',
    concept: 'Joiner-Mover-Leaver Lifecycle & Privilege Creep Trap',
    educationalPurpose: 'Show identity transitions and highlight the Mover phase as the primary cause of privilege accumulation.',
    currentFormat: 'Text sections for Joiner, Mover, Leaver.',
    proposedFormat: 'Cyclical lifecycle diagram highlighting the Mover transition and deprovisioning exit gate.',
    responsiveNotes: 'Container query SVG with mobile step cards.'
  },
  {
    id: 'VIS-OPP-007',
    domain: 3,
    type: 'Comparison Table',
    targetSubsection: '3.2.2 Access Control Models: DAC, MAC, RBAC, ABAC',
    concept: 'Access Control Models Master Decision Matrix',
    educationalPurpose: 'Direct side-by-side evaluation of DAC, MAC, RBAC, and ABAC across 6 core criteria.',
    currentFormat: 'Separate subsections with individual descriptions.',
    proposedFormat: 'Comprehensive 7-column comparison table with exam scenario cues.',
    responsiveNotes: 'Responsive table with formatted cells.'
  },
  {
    id: 'VIS-OPP-008',
    domain: 4,
    type: 'Comprehensive Comparison Table',
    targetSubsection: '4.1.3 TCP/IP 4-Layer Architecture Mapping',
    concept: 'OSI 7-Layer vs TCP/IP 4-Layer Protocol Stack & PDU Table',
    educationalPurpose: 'Restore direct many-to-one mapping between OSI layers and TCP/IP layers with PDUs and protocols.',
    currentFormat: 'Card grid (identified as design regression in Task 148).',
    proposedFormat: 'Side-by-side unified matrix mapping 7 OSI layers to 4 TCP/IP layers with PDUs, devices, and protocols.',
    responsiveNotes: 'Two-tier table layout ensuring readability on 375px+ displays.'
  },
  {
    id: 'VIS-OPP-009',
    domain: 4,
    type: 'Comparison Table',
    targetSubsection: '4.3.3 Shared Responsibility Model by Cloud Service Type',
    concept: 'Cloud Shared Responsibility Matrix (On-Prem vs IaaS vs PaaS vs SaaS)',
    educationalPurpose: 'Visually delineate CSP vs Customer boundary across 8 infrastructure and application tiers.',
    currentFormat: 'Bullet points per model.',
    proposedFormat: 'Visual matrix table with color-coded "Customer Managed" vs "Cloud Provider Managed" badges.',
    responsiveNotes: 'Clear text badges in place of complex graphics for perfect accessibility.'
  },
  {
    id: 'VIS-OPP-010',
    domain: 5,
    type: 'Comparison Table',
    targetSubsection: '5.5.3 Application Security Testing: SAST vs. DAST',
    concept: 'Application Security Testing Matrix (SAST vs DAST vs IAST)',
    educationalPurpose: 'Compare static vs dynamic code analysis (timing, access to source code, false positive rates).',
    currentFormat: 'Prose comparison in subsection.',
    proposedFormat: '5-column comparison table detailing Methodology, Source Code Access, Phase in SDLC, Vulnerability Types, and Limitations.',
    responsiveNotes: 'Compact mobile-friendly table.'
  }
];

// 5. Summary Metrics
const summaryMetrics = {
  totalSubsections: subsections.length,
  domainSubsections: {
    domain1: subsections.filter(s => s.domain === 1).length,
    domain2: subsections.filter(s => s.domain === 2).length,
    domain3: subsections.filter(s => s.domain === 3).length,
    domain4: subsections.filter(s => s.domain === 4).length,
    domain5: subsections.filter(s => s.domain === 5).length
  },
  averageDepthScores: {
    domain1: Number((subsections.filter(s => s.domain === 1).reduce((a, b) => a + b.depthScore, 0) / subsections.filter(s => s.domain === 1).length).toFixed(2)),
    domain2: Number((subsections.filter(s => s.domain === 2).reduce((a, b) => a + b.depthScore, 0) / subsections.filter(s => s.domain === 2).length).toFixed(2)),
    domain3: Number((subsections.filter(s => s.domain === 3).reduce((a, b) => a + b.depthScore, 0) / subsections.filter(s => s.domain === 3).length).toFixed(2)),
    domain4: Number((subsections.filter(s => s.domain === 4).reduce((a, b) => a + b.depthScore, 0) / subsections.filter(s => s.domain === 4).length).toFixed(2)),
    domain5: Number((subsections.filter(s => s.domain === 5).reduce((a, b) => a + b.depthScore, 0) / subsections.filter(s => s.domain === 5).length).toFixed(2)),
    overall: Number((subsections.reduce((a, b) => a + b.depthScore, 0) / subsections.length).toFixed(2))
  },
  totalSupplementaryTopics: disposition.length,
  dispositionBreakdown: {
    ALREADY_COVERED_WELL: disposition.filter(d => d.disposition === 'ALREADY COVERED WELL').length,
    COVERED_BUT_SHALLOW: disposition.filter(d => d.disposition === 'COVERED BUT SHALLOW').length,
    PARTIALLY_COVERED: disposition.filter(d => d.disposition === 'PARTIALLY COVERED').length,
    MISSING: disposition.filter(d => d.disposition === 'MISSING').length,
    USEFUL_ENRICHMENT: disposition.filter(d => d.disposition === 'USEFUL ENRICHMENT').length,
    REDUNDANT: disposition.filter(d => d.disposition === 'REDUNDANT').length
  },
  backlogCountsByPriority: {
    P0_Critical: enrichmentBacklog.filter(b => b.priority === 'P0').length,
    P1_HighYield: enrichmentBacklog.filter(b => b.priority === 'P1').length,
    P2_Refinements: enrichmentBacklog.filter(b => b.priority === 'P2').length,
    P3_Polish: enrichmentBacklog.filter(b => b.priority === 'P3').length,
    total: enrichmentBacklog.length
  },
  visualizationOpportunitiesCount: visualizationOpportunities.length
};

fs.writeFileSync(path.join(ARTIFACT_DIR, 'all-domain-coverage-and-depth-matrix.json'), JSON.stringify(refinedMatrix, null, 2), 'utf8');
fs.writeFileSync(path.join(ARTIFACT_DIR, 'educational-enrichment-backlog.json'), JSON.stringify(enrichmentBacklog, null, 2), 'utf8');
fs.writeFileSync(path.join(ARTIFACT_DIR, 'visualization-opportunity-register.json'), JSON.stringify(visualizationOpportunities, null, 2), 'utf8');
fs.writeFileSync(path.join(ARTIFACT_DIR, 'audit-summary-metrics.json'), JSON.stringify(summaryMetrics, null, 2), 'utf8');

console.log('Successfully written all audit evidence JSON files to ' + ARTIFACT_DIR);
console.log('Summary metrics:', JSON.stringify(summaryMetrics, null, 2));

