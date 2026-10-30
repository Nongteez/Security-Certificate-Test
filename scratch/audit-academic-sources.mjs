import fs from 'node:fs';
import path from 'node:path';

// Load source texts
const d1Sum = fs.readFileSync('ISC2 Update 2026/Domain 1/D1 sum.md', 'utf8');
const d1Doc = fs.readFileSync('ISC2 Update 2026/Domain 1/Domain 1.md', 'utf8');
const d1Md  = fs.readFileSync('content/isc2-cc-2026/reading/domain-1.md', 'utf8');

const d2Sum = fs.readFileSync('ISC2 Update 2026/Domain 2/D2 sum.md', 'utf8');
const d2Doc = fs.readFileSync('ISC2 Update 2026/Domain 2/Domain 2.md', 'utf8');
const d2Md  = fs.readFileSync('content/isc2-cc-2026/reading/domain-2.md', 'utf8');

const d3Sum = fs.readFileSync('ISC2 Update 2026/Domain 3/D3 sum.md', 'utf8');
const d3Doc = fs.readFileSync('ISC2 Update 2026/Domain 3/Domain 3.md', 'utf8');
const d3Md  = fs.readFileSync('content/isc2-cc-2026/reading/domain-3.md', 'utf8');

const d4Sum = fs.readFileSync('ISC2 Update 2026/Domain 4/D4 sum.md', 'utf8');
const d4Doc = fs.readFileSync('ISC2 Update 2026/Domain 4/Domain 4.md', 'utf8');
const d4Txt = fs.readFileSync('ISC2 Update 2026/Domain 4/DOMAIN 4.txt', 'utf8');
const d4Md  = fs.readFileSync('content/isc2-cc-2026/reading/domain-4.md', 'utf8');

console.log('=== ACADEMIC SOURCE VERIFICATION AUDIT ===\n');

// 1. Domain 1 Checkpoints
console.log('--- Domain 1 Checkpoints ---');
const d1Checks = [
  { term: 'Confidentiality', re: /Confidentiality/i },
  { term: 'Integrity', re: /Integrity/i },
  { term: 'Availability', re: /Availability/i },
  { term: 'Authentication', re: /Authentication/i },
  { term: 'Authorization', re: /Authorization/i },
  { term: 'Accounting', re: /Accounting/i },
  { term: 'Non-repudiation', re: /Non-repudiation|ปฏิเสธความรับผิดไม่ได้/i },
  { term: 'Privacy', re: /Privacy|ความเป็นส่วนตัว/i },
  { term: 'Zero Trust', re: /Zero Trust/i },
  { term: 'Defense in Depth', re: /Defense in Depth|การป้องกันหลายชั้น/i },
  { term: 'SLE = AV x EF', re: /SLE\s*=\s*AV\s*[x×*]\s*EF/i },
  { term: 'ALE = SLE x ARO', re: /ALE\s*=\s*SLE\s*[x×*]\s*ARO/i },
  { term: 'Risk Treatment (4 responses)', re: /Mitigation.*Transfer.*Avoidance.*Acceptance|Avoidance.*Mitigation.*Transfer.*Acceptance/is },
  { term: 'Due Care vs Due Diligence', re: /Due Care.*Due Diligence/is },
  { term: 'ISC2 Code of Ethics Canons (S-A-P-P)', re: /Society.*Act honorably.*Principals.*Profession|S\s*-\s*A\s*-\s*P\s*-\s*P/is },
  { term: 'Technical vs Admin vs Physical', re: /Technical.*Administrative.*Physical/is },
  { term: 'Security Control Functions (Preventive, Detective, Corrective)', re: /Preventive.*Detective.*Corrective/is }
];

for (const c of d1Checks) {
  const inMd = c.re.test(d1Md);
  const inSrc = c.re.test(d1Sum) || c.re.test(d1Doc);
  console.log(`  [D1] ${c.term.padEnd(45)}: Source=${inSrc ? 'YES' : 'NO '} | Rendered=${inMd ? 'PASS' : 'FAIL'}`);
}

// 2. Domain 2 Checkpoints
console.log('\n--- Domain 2 Checkpoints ---');
const d2Checks = [
  { term: 'GRC Pillars (Governance, Risk, Compliance)', re: /Governance.*Risk.*Compliance/is },
  { term: 'Business Continuity (BC) vs DR', re: /Business Continuity.*Disaster Recovery/is },
  { term: 'DR subset of BC (DR ⊂ BC)', re: /DR\s*[⊂⊆]\s*BC|DR เป็นส่วนหนึ่งของ BC/i },
  { term: 'BIA (Business Impact Analysis)', re: /Business Impact Analysis|BIA/i },
  { term: 'RTO (Recovery Time Objective)', re: /Recovery Time Objective|RTO/i },
  { term: 'RPO (Recovery Point Objective)', re: /Recovery Point Objective|RPO/i },
  { term: 'MTD / MAO (Max Tolerable Downtime)', re: /Maximum Tolerable Downtime|MTD/i },
  { term: 'RTO <= MTD inequality', re: /RTO\s*[≤<=]\s*MTD/i },
  { term: 'Hot, Warm, Cold Sites', re: /Hot Site.*Warm Site.*Cold Site/is },
  { term: 'DR Testing Types (Tabletop, Parallel, Full)', re: /Tabletop.*Simulation.*Parallel.*Full/is },
  { term: 'Security Awareness & Culture', re: /Security Awareness|วัฒนธรรมความปลอดภัย/i },
  { term: 'Social Engineering Techniques', re: /Phishing.*Spear Phishing.*Whaling.*Vishing.*Smishing/is },
  { term: 'Password Protection & Modern Auth', re: /Password.*Passphrase.*MFA/is },
  { term: 'MTTD & MTTR', re: /Mean Time to Detect.*Mean Time to Remediate|MTTD.*MTTR/is },
  { term: 'KPI vs KRI', re: /Key Performance Indicator.*Key Risk Indicator|KPI.*KRI/is },
  { term: 'Dashboards vs Scorecards vs Reports', re: /Dashboard.*Scorecard.*Report/is }
];

for (const c of d2Checks) {
  const inMd = c.re.test(d2Md);
  const inSrc = c.re.test(d2Sum) || c.re.test(d2Doc);
  console.log(`  [D2] ${c.term.padEnd(45)}: Source=${inSrc ? 'YES' : 'NO '} | Rendered=${inMd ? 'PASS' : 'FAIL'}`);
}

// 3. Domain 3 Checkpoints
console.log('\n--- Domain 3 Checkpoints ---');
const d3Checks = [
  { term: 'JML Lifecycle (Joiner, Mover, Leaver)', re: /Joiner.*Mover.*Leaver|JML/is },
  { term: 'Identity Provisioning & Deprovisioning', re: /Provisioning.*Deprovisioning/is },
  { term: 'Access Reviews & Audit Findings', re: /Access Review|Privilege Creep|Dormant/i },
  { term: 'NIST SP 800-63 (IAL, AAL, FAL)', re: /NIST SP 800-63|IAL.*AAL.*FAL/is },
  { term: 'Principle of Least Privilege (PoLP)', re: /Least Privilege|PoLP/i },
  { term: 'Separation of Duties (SoD)', re: /Separation of Duties|Segregation of Duties|SoD/i },
  { term: 'PoLP vs SoD Distinction', re: /Least Privilege.*Separation of Duties/is },
  { term: 'DAC (Discretionary Access Control)', re: /Discretionary Access Control|DAC/i },
  { term: 'MAC (Mandatory Access Control)', re: /Mandatory Access Control|MAC/i },
  { term: 'RBAC (Role-Based Access Control)', re: /Role-Based Access Control|RBAC/i },
  { term: 'ABAC (Attribute-Based Access Control)', re: /Attribute-Based Access Control|ABAC/i },
  { term: 'Need-to-Know vs Security Clearance', re: /Need-to-Know.*Security Clearance|Clearance.*Need-to-Know/is }
];

for (const c of d3Checks) {
  const inMd = c.re.test(d3Md);
  const inSrc = c.re.test(d3Sum) || c.re.test(d3Doc);
  console.log(`  [D3] ${c.term.padEnd(45)}: Source=${inSrc ? 'YES' : 'NO '} | Rendered=${inMd ? 'PASS' : 'FAIL'}`);
}

// 4. Domain 4 Checkpoints
console.log('\n--- Domain 4 Checkpoints ---');
const d4Checks = [
  { term: 'OSI 7 Layers', re: /Physical.*Data Link.*Network.*Transport.*Session.*Presentation.*Application/is },
  { term: 'TCP/IP 4 Layers', re: /Network Access.*Internet.*Transport.*Application/is },
  { term: 'OSI to TCP/IP Mapping', re: /osiVsTcpIpModel|แบบจำลอง TCP\/IP ในทางปฏิบัติ/i },
  { term: 'IPv4 Address Classes (A, B, C, D, E)', re: /Class A.*Class B.*Class C/is },
  { term: 'RFC 1918 Private IP Ranges', re: /10\.0\.0\.0|172\.16\.0\.0|192\.168\.0\.0/i },
  { term: 'CIDR Notation & Subnetting', re: /CIDR|\/24|\/16/i },
  { term: 'NAT (Network Address Translation)', re: /NAT|Network Address Translation/i },
  { term: 'IPv6 128-bit & Hexadecimal', re: /IPv6.*128.*hexadecimal/is },
  { term: 'TCP 3-Way Handshake (SYN, SYN-ACK, ACK)', re: /SYN.*SYN-ACK.*ACK/is },
  { term: 'TCP vs UDP Characteristics', re: /Connection-oriented.*Connectionless/is },
  { term: 'Common Ports (20/21, 22, 25, 53, 80, 443)', re: /Port 22.*Port 53.*Port 80.*Port 443/is },
  { term: 'Network Devices (Hub, Switch, Router, Firewall)', re: /Switch.*Router.*Firewall/is },
  { term: 'Wireless Security (WEP, WPA, WPA2, WPA3)', re: /WPA2.*WPA3/is },
  { term: 'Network Segmentation & DMZ', re: /Segmentation.*DMZ/is },
  { term: 'VLAN & East-West Micro-segmentation', re: /VLAN.*Micro-segmentation|East-West/is },
  { term: 'Zero Trust Network Architecture', re: /Zero Trust|Never Trust, Always Verify/i },
  { term: 'Cloud Characteristics (5 NIST)', re: /On-demand self-service.*Broad network access.*Resource pooling.*Rapid elasticity.*Measured service/is },
  { term: 'Cloud Service Models (IaaS, PaaS, SaaS)', re: /IaaS.*PaaS.*SaaS/is },
  { term: 'Shared Responsibility Model', re: /Shared Responsibility/i },
  { term: 'Cloud Deployment (Public, Private, Hybrid, Community)', re: /Public.*Private.*Hybrid.*Community/is },
  { term: 'Hybrid vs Multi-Cloud Distinction', re: /Hybrid.*Multi-Cloud/is }
];

for (const c of d4Checks) {
  const inMd = c.re.test(d4Md);
  const inSrc = c.re.test(d4Sum) || c.re.test(d4Doc) || c.re.test(d4Txt);
  console.log(`  [D4] ${c.term.padEnd(45)}: Source=${inSrc ? 'YES' : 'NO '} | Rendered=${inMd ? 'PASS' : 'FAIL'}`);
}

