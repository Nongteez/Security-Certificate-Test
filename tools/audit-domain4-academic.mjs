import fs from 'node:fs';
import path from 'node:path';
import { domain4Metadata, domain4Objectives, domain4Review } from '../content/isc2-cc-2026/reading/domain-4.js';
import { domain4Scenarios } from '../content/isc2-cc-2026/reading/domain-4-scenarios.js';

const mdPath = path.resolve('content/isc2-cc-2026/reading/domain-4.md');
const mdContent = fs.readFileSync(mdPath, 'utf8');

const sourceD4Sum = fs.readFileSync('ISC2 Update 2026/Domain 4/D4 sum.md', 'utf8');
const sourceD4Md = fs.readFileSync('ISC2 Update 2026/Domain 4/Domain 4.md', 'utf8');
const sourceD4Txt = fs.readFileSync('ISC2 Update 2026/Domain 4/DOMAIN 4.txt', 'utf8');

console.log('=== DOMAIN 4 ACADEMIC & STATIC ANALYSIS AUDIT ===\n');

// 1. Objectives and Subsections Verification
console.log('--- 1. Objectives and Topics Structure ---');
let totalTopics = 0;
domain4Objectives.forEach(obj => {
  console.log(`Objective ${obj.id}: ${obj.title} (${obj.topics.length} topics)`);
  totalTopics += obj.topics.length;
  obj.topics.forEach(t => {
    const hasAnchor = mdContent.includes(`id="${t.id}"`);
    console.log(`  [${hasAnchor ? 'PASS' : 'FAIL'}] ${t.id} -> ${t.title}`);
  });
});
console.log(`Total Subsections: ${totalTopics} (Expected: 23)`);

// 2. Headings & Markdown Structure
console.log('\n--- 2. Markdown Structure & Hygiene ---');
const h1Matches = mdContent.match(/^#\s+.+$/gm) || [];
console.log(`Raw H1 in markdown body: ${h1Matches.length} (Expected: 0)`);

const h2Matches = mdContent.match(/^##\s+.+$/gm) || [];
console.log(`H2 headings count: ${h2Matches.length} (Expected: 4 — 4.1, 4.2, 4.3, Review)`);
h2Matches.forEach(h => console.log(`  ${h}`));

const h3Matches = mdContent.match(/<h3[^>]*>.*?<\/h3>/g) || [];
console.log(`H3 headings count: ${h3Matches.length} (Expected: 24 — 23 subsections + 1 Review header)`);

const emojis = mdContent.match(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu) || [];
console.log(`Decorative emojis: ${emojis.length} (Expected: 0)`);

const comments = mdContent.match(/<!--[\s\S]*?-->/g) || [];
console.log(`HTML comments in content: ${comments.length} (Expected: 0)`);

const unparsedLatexDollars = mdContent.match(/\$[^$\n]+\$/g) || [];
console.log(`Unparsed LaTeX dollar spans: ${unparsedLatexDollars.length} (Expected: 0)`);
if (unparsedLatexDollars.length > 0) {
  unparsedLatexDollars.forEach(d => console.log('  Found dollar span:', d));
}

// 3. Technical Checkpoints (16 Checkpoints)
console.log('\n--- 3. 16 Technical Checkpoints Verification ---');
const checkpoints = [
  { id: 'CP01', name: 'OSI vs TCP/IP layer mapping & PDU (Bits, Frames, Packets, Segments, Data)', terms: ['OSI', 'TCP/IP', 'PDU', 'Segment', 'Packet', 'Frame', 'Bits'] },
  { id: 'CP02', name: 'IPv4 addressing, subnetting, RFC 1918 ranges (10/8, 172.16/12, 192.168/16), IPv6 hex (2^128)', terms: ['IPv4', 'RFC 1918', '10.0.0.0', '172.16.0.0', '192.168.0.0', 'IPv6', '128'] },
  { id: 'CP03', name: 'TCP (3-way handshake SYN-SYN/ACK-ACK, reliable) vs UDP (connectionless, best-effort)', terms: ['3-Way Handshake', 'SYN', 'SYN-ACK', 'ACK', 'Connectionless', 'Best-Effort'] },
  { id: 'CP04', name: 'Common ports (20/21 FTP, 22 SSH, 23 Telnet, 25 SMTP, 53 DNS, 80 HTTP, 443 HTTPS, 3389 RDP)', terms: ['20', '21', '22', '23', '25', '53', '80', '443', '3389'] },
  { id: 'CP05', name: 'Hub (L1 collision domain) vs Switch (L2 MAC table) vs Router (L3 IP routing)', terms: ['Hub', 'Collision Domain', 'Switch', 'MAC Address', 'Router', 'Broadcast Domain'] },
  { id: 'CP06', name: 'VLAN segmentation & broadcast domain isolation (802.1Q)', terms: ['VLAN', '802.1Q', 'Trunk', 'Broadcast Domain', 'Inter-VLAN'] },
  { id: 'CP07', name: 'Packet filtering (stateless) vs Stateful inspection vs Next-Gen Firewall (NGFW, L7 DPI)', terms: ['Packet Filtering', 'Stateless', 'Stateful Inspection', 'Next-Generation Firewall', 'Deep Packet Inspection'] },
  { id: 'CP08', name: 'DMZ architecture (screened subnet, dual firewalls, public services isolated from internal LAN)', terms: ['DMZ', 'Demilitarized Zone', 'External Firewall', 'Internal Firewall', 'Web Server'] },
  { id: 'CP09', name: 'IDS (passive detection, alert, out-of-band) vs IPS (inline, active prevention, drop)', terms: ['IDS', 'Intrusion Detection System', 'IPS', 'Intrusion Prevention System', 'In-line', 'Out-of-band'] },
  { id: 'CP10', name: 'VPN protocols (IPsec AH/ESP, SSL/TLS VPN) & remote access', terms: ['VPN', 'Virtual Private Network', 'IPsec', 'AH', 'ESP'] },
  { id: 'CP11', name: 'Wi-Fi security evolution (WEP broken RC4 -> WPA TKIP -> WPA2 CCMP/AES -> WPA3 SAE Dragonfly)', terms: ['WEP', 'RC4', 'WPA', 'TKIP', 'WPA2', 'CCMP', 'WPA3', 'SAE'] },
  { id: 'CP12', name: 'Defense in Depth (5 concentric layers: Perimeter, Network, Host/Endpoint, Application, Data)', terms: ['Defense in Depth', 'Perimeter', 'Endpoint', 'Application', 'Data Security'] },
  { id: 'CP13', name: 'Cloud service models (IaaS, PaaS, SaaS, FaaS) & Shared Responsibility Matrix', terms: ['IaaS', 'PaaS', 'SaaS', 'FaaS', 'Shared Responsibility', 'Security OF the Cloud', 'Security IN the Cloud'] },
  { id: 'CP14', name: 'Cloud deployment models (Public, Private, Hybrid, Community, Multi-Cloud)', terms: ['Public Cloud', 'Private Cloud', 'Hybrid Cloud', 'Community Cloud', 'Multi-Cloud'] },
  { id: 'CP15', name: 'Network attacks (DoS/DDoS, Botnet, MITM/ARP poisoning, Spoofing, Sniffing, Lateral movement)', terms: ['DDoS', 'Botnet', 'Man-in-the-Middle', 'Spoofing', 'Sniffing', 'Lateral Movement'] },
  { id: 'CP16', name: 'Secure operation practices (baseline configuration, patch management, disable unused services, segmentation)', terms: ['Patch Management', 'Security Patch', 'Default Credentials', 'Hardening'] }
];

checkpoints.forEach(cp => {
  const missing = cp.terms.filter(t => !mdContent.includes(t));
  const pass = missing.length === 0;
  console.log(`[${pass ? 'PASS' : 'WARN'}] ${cp.id}: ${cp.name}`);
  if (!pass) console.log(`       Missing terms: ${missing.join(', ')}`);
});

// 4. Distinction Cards, Exam Traps, Scenarios, Tables, Diagrams
console.log('\n--- 4. Component Quotas & Parity ---');
const distinctionCards = mdContent.match(/<div class="reading-distinction-card">/g) || [];
console.log(`Distinction Cards count: ${distinctionCards.length} (Expected: 12)`);

const examTraps = mdContent.match(/#### 2\. ข้อสังเกตและจุดจำสำคัญสำหรับข้อสอบ[\s\S]*?#### 3\./);
let examTrapCount = 0;
if (examTraps) {
  const trapLines = examTraps[0].split('\n').filter(l => /^\d+\.\s+/.test(l));
  examTrapCount = trapLines.length;
}
console.log(`Exam Traps count: ${examTrapCount} (Expected: 16)`);

console.log(`Scenarios count in domain4Scenarios: ${domain4Scenarios.length} (Expected: 12)`);
const mdScenarioDirectives = mdContent.match(/:::scenario/g) || [];
console.log(`Scenario directives in markdown: ${mdScenarioDirectives.length} (Expected: 12)`);

const tables = mdContent.match(/\| :?---/g) || [];
console.log(`Tables count in markdown: ${tables.length} (Expected: >= 4)`);

const diagramContainers = mdContent.match(/<div class="reading-semantic-diagram" data-diagram="([^"]+)"><\/div>/g) || [];
console.log(`Semantic diagram placeholders in markdown: ${diagramContainers.length} (Expected: 4)`);
diagramContainers.forEach(d => console.log('  ', d));

// 5. Ordered List Numbering Check (H05 regression)
console.log('\n--- 5. Ordered List Numbering Analysis ---');
const olBlocks = [];
const lines = mdContent.split('\n');
let inOl = false;
let currentOl = [];
lines.forEach((line, idx) => {
  const match = line.match(/^(\d+)\.\s+(.*)/);
  if (match) {
    if (!inOl) {
      inOl = true;
      currentOl = [];
    }
    currentOl.push({ line: idx + 1, num: parseInt(match[1], 10), text: match[2].slice(0, 30) });
  } else if (inOl && line.trim() === '') {
    // Blank line might split list if not parsed properly
  } else if (inOl && !line.startsWith('   ') && !line.startsWith('\t')) {
    inOl = false;
    if (currentOl.length > 1) {
      olBlocks.push(currentOl);
    }
    currentOl = [];
  }
});
if (inOl && currentOl.length > 1) olBlocks.push(currentOl);

console.log(`Identified ${olBlocks.length} multi-item numbered sequences:`);
olBlocks.forEach((b, idx) => {
  const nums = b.map(x => x.num);
  let isSeq = true;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) isSeq = false;
  }
  console.log(`  List ${idx + 1} (Line ${b[0].line}): [${nums.join(', ')}] -> ${isSeq ? 'SEQUENTIAL (PASS)' : 'NON-SEQUENTIAL (CHECK)'}`);
});

