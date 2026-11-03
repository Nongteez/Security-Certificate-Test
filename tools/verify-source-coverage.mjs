import fs from 'node:fs';

const md = fs.readFileSync('content/isc2-cc-2026/reading/domain-5.md', 'utf8');

const checks = [
  { name: 'Symmetric vs Asymmetric - Laptop stolen scenario', test: md.includes('Laptop') && md.includes('Ciphertext') },
  { name: 'Hashing - 5 properties (Preimage, Second-preimage, Avalanche)', test: md.includes('Preimage') && md.includes('Avalanche') },
  { name: 'Password Hashing (Argon2id, bcrypt, PBKDF2 with Salt)', test: md.includes('Argon2') || md.includes('bcrypt') },
  { name: 'Logging vs Monitoring - Firewall 10:15 example', test: md.includes('10:15') || md.includes('Logging คือการบันทึก') },
  { name: 'Log sources - 6 sources (Auth, OS, App, Network, Endpoint, Cloud)', test: md.includes('Authentication Log') && md.includes('Cloud Audit Log') },
  { name: 'Archiving - 3-month retrospective investigation example', test: md.includes('3 เดือน') || md.includes('Archive') },
  { name: 'Agent-based vs Agentless comparison', test: md.includes('Agent-Based') && md.includes('Agentless') },
  { name: 'SNMP Trap vs Polling distinction', test: md.includes('Trap') && md.includes('Poll') },
  { name: 'Event vs Alert vs Incident examples', test: md.includes('Event') && md.includes('Alert') && md.includes('Incident') },
  { name: 'Event Correlation 5-step sequence (Failed logins -> Success -> Priv Esc)', test: md.includes('Multiple Failed Logins') || md.includes('Privilege Escalation') },
  { name: '6 SOC Use Cases (Impossible Travel, Suspicious PowerShell, etc.)', test: md.includes('Impossible Travel') || md.includes('PowerShell') },
  { name: '6 Threat Actors (Nation-State, Cybercriminal, Hacktivist, Insider, Script Kiddie, Terrorist)', test: md.includes('Nation-State') && md.includes('Script Kiddie') },
  { name: 'CTI answers 6 questions (Who, What, How...)', test: md.includes('Cyber Threat Intelligence') },
  { name: 'IOCs - 5 examples (IP, Domain, URL, Hash, Registry Key)', test: md.includes('File Hash') && md.includes('Registry') },
  { name: 'IRP 6 phases with specific exam verb triggers (Stop spread = Contain, etc.)', test: md.includes('Preparation') && md.includes('Post-Incident Review') },
  { name: 'Containment vs Eradication vs Recovery comparison table', test: md.includes('หยุดลาม') || md.includes('กำจัดสาเหตุ') },
  { name: 'End-to-end Ransomware scenario across 6 phases', test: md.includes('Ransomware') && md.includes('Playbook') },
  { name: 'Tabletop vs Technical Testing comparison', test: md.includes('Tabletop') && md.includes('Discussion-based') },
  { name: 'ALM 6 stages: Plan -> Acquire -> Deploy -> Maintain -> Monitor -> Retire -> Dispose', test: md.includes('Acquire') && md.includes('Dispose') },
  { name: 'EOL vs Unpatched distinction', test: md.includes('End of Life') && md.includes('Compensating Controls') },
  { name: 'Security Baseline sources (CIS Benchmarks, NIST SP 800-128, STIGs)', test: md.includes('CIS Benchmarks') },
  { name: 'Configuration Drift remediation process', test: md.includes('Configuration Drift') },
  { name: 'Patch Management 5 steps: Identify -> Assess -> Test -> Deploy -> Verify', test: md.includes('Identify') && md.includes('Assess') && md.includes('Test') && md.includes('Deploy') && md.includes('Verify') },
  { name: 'Change Management 7 steps: Request -> Assess -> Approve -> Test -> Implement -> Verify -> Document', test: md.includes('Change Advisory Board') && md.includes('Rollback') },
  { name: 'Configuration Management vs Change Management comparison table', test: md.includes('What Configuration Should Be') || md.includes('สถานะที่ควรเป็น') },
  { name: 'Blue vs Red vs Purple Team collaborative 5-step loop', test: md.includes('Purple Team') && md.includes('Collaborative') },
  { name: 'Vulnerability Scanning vs Penetration Testing comparison', test: md.includes('Vulnerability Assessment') && md.includes('Penetration Testing') },
  { name: 'SAST vs DAST detailed comparison with code vs runtime examples', test: md.includes('SAST') && md.includes('DAST') },
  { name: 'Threat Modeling in Design phase with STRIDE', test: md.includes('Threat Modeling') && md.includes('Design') },
  { name: 'Physical Pentest & Controls (Mantraps, Security Guards, Locks)', test: md.includes('Mantrap') || md.includes('Mantraps') },
  { name: 'Social Engineering: Phishing vs Tailgating vs Impersonation', test: md.includes('Phishing') && md.includes('Tailgating') && md.includes('Impersonation') },
  { name: '5 Integrated SOC/IR Scenarios (A to E)', test: md.includes('Scenario A') || md.includes('Scenario B') || md.includes('Scenario 1') },
  { name: 'Cheat Sheet - 1-line memory cues & process sequences', test: md.includes('Cheat Sheet') || md.includes('คำจำแบบหนึ่งบรรทัด') }
];

console.log('=== Coverage Inspection ===');
checks.forEach(c => {
  console.log(`${c.test ? '✓' : '✗'} ${c.name}`);
});

