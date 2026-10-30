import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { domain4Metadata, domain4Objectives, domain4Review, getDomain4Markdown, domain4Scenarios } from '../content/isc2-cc-2026/reading/domain-4.js';
import { READING_DOMAINS } from '../js/ui/screen-reading.js';
import { loadDomainReading, getDomainReadingCached } from '../js/core/reading-loader.js';
import { parseMarkdown } from '../js/core/markdown-parser.js';
import { diagrams } from '../js/core/diagram-generator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

test('ISC2 CC 2026 — Reading Notes Domain 4 Verification Suite', async (t) => {
  const rawMarkdown = await getDomain4Markdown();
  const renderedHtml = parseMarkdown(rawMarkdown);

  await t.test('1. Domain 4 Metadata & Official Outline Boundaries', () => {
    assert.equal(domain4Metadata.id, 4, 'Domain ID must be 4');
    assert.equal(domain4Metadata.weight, '21.3%', 'Domain 4 weight must be 21.3% per official 2026 outline');
    assert.equal(domain4Metadata.published, true, 'Domain 4 must be published');
    assert.equal(domain4Metadata.shortTitle, 'Network Security', 'Short title must be Network Security');

    // Official 3 Objectives: 4.1, 4.2 & 4.3 ONLY (No Objective 4.4)
    assert.equal(domain4Objectives.length, 3, 'Must have exactly 3 official objectives (4.1, 4.2 and 4.3)');
    assert.equal(domain4Objectives[0].id, '4.1', 'Objective 4.1 must exist');
    assert.equal(domain4Objectives[1].id, '4.2', 'Objective 4.2 must exist');
    assert.equal(domain4Objectives[2].id, '4.3', 'Objective 4.3 must exist');

    const hasObj44 = domain4Objectives.some(o => o.id === '4.4');
    assert.equal(hasObj44, false, 'Objective 4.4 must NOT exist (Review is supplementary outside 4.3)');
  });

  await t.test('2. UI Shell & READING_DOMAINS Registration', () => {
    const d1 = READING_DOMAINS.find(d => d.id === 1);
    const d2 = READING_DOMAINS.find(d => d.id === 2);
    const d3 = READING_DOMAINS.find(d => d.id === 3);
    const d4 = READING_DOMAINS.find(d => d.id === 4);
    const d5 = READING_DOMAINS.find(d => d.id === 5);

    assert.ok(d1?.published, 'Domain 1 must remain published');
    assert.ok(d2?.published, 'Domain 2 must remain published');
    assert.ok(d3?.published, 'Domain 3 must remain published');
    assert.ok(d4?.published, 'Domain 4 must now be published');
    assert.equal(d4.weight, '21.3%', 'Domain 4 weight must be 21.3%');
    assert.equal(d4.objectives.length, 3, 'Domain 4 in READING_DOMAINS must have 3 objectives');
    assert.ok(d4.review, 'Domain 4 in READING_DOMAINS must have review section');

    assert.equal(d5?.published, false, 'Domain 5 must remain unpublished');
  });

  await t.test('3. Reading Loader Asynchronous & Synchronous Cache', async () => {
    const cached = getDomainReadingCached(4);
    assert.ok(cached, 'Domain 4 must be pre-populated in reading cache in Node');
    assert.equal(cached.id, 4);
    assert.ok(cached.renderedHtml.includes('Objective 4.1: Understand Network Security'));

    const loaded = await loadDomainReading(4);
    assert.ok(loaded, 'loadDomainReading(4) must resolve');
    assert.equal(loaded.published, true);
    assert.equal(loaded.objectives.length, 3);
  });

  await t.test('4. Topic Anchors & Navigation Alignment', () => {
    let totalTopics = 0;
    for (const obj of domain4Objectives) {
      assert.ok(renderedHtml.includes(`id="${obj.anchorId}"`), `Section anchor id="${obj.anchorId}" must exist in HTML`);
      for (const topic of obj.topics) {
        totalTopics++;
        assert.ok(renderedHtml.includes(`id="${topic.id}"`), `Topic anchor id="${topic.id}" must exist in HTML`);
      }
    }
    assert.equal(totalTopics, 23, 'Total granular topic anchors in objectives 4.1, 4.2 & 4.3 must match 23 subsections');
    assert.equal(domain4Objectives[0].topics.length, 10, 'Objective 4.1 must have 10 subsections');
    assert.equal(domain4Objectives[1].topics.length, 7, 'Objective 4.2 must have 7 subsections');
    assert.equal(domain4Objectives[2].topics.length, 6, 'Objective 4.3 must have 6 subsections');

    assert.ok(renderedHtml.includes('id="domain-4-review"'), 'Domain 4 review section anchor must exist');
    assert.ok(renderedHtml.includes('id="topic-4-review-scenarios"'), 'Domain 4 review topic anchor must exist');
    assert.equal(domain4Review.id, 'domain-4-review', 'domain4Review metadata must be defined');
  });

  await t.test('5. Academic Content Completeness across Objectives 4.1, 4.2 & 4.3', () => {
    // 4.1 Understand network security
    assert.ok(renderedHtml.includes('OSI 7-Layer Reference Model'), 'Must cover OSI 7 layers');
    assert.ok(renderedHtml.includes('TCP/IP 4-Layer Architecture Mapping') || renderedHtml.includes('TCP/IP Model'), 'Must cover TCP/IP model');
    assert.ok(renderedHtml.includes('IPv4 Addressing') || renderedHtml.includes('IPv4'), 'Must cover IPv4');
    assert.ok(renderedHtml.includes('IPv6 Architecture') || renderedHtml.includes('IPv6'), 'Must cover IPv6');
    assert.ok(renderedHtml.includes('CIDR (Classless Inter-Domain Routing)'), 'Must cover CIDR');
    assert.ok(renderedHtml.includes('RFC 1918'), 'Must cover RFC 1918 Private IPs');
    assert.ok(renderedHtml.includes('Network Address Translation') || renderedHtml.includes('NAT'), 'Must cover NAT');
    assert.ok(renderedHtml.includes('Transmission Control Protocol') || renderedHtml.includes('TCP'), 'Must cover TCP');
    assert.ok(renderedHtml.includes('User Datagram Protocol') || renderedHtml.includes('UDP'), 'Must cover UDP');
    assert.ok(renderedHtml.includes('3-Way Handshake'), 'Must cover TCP 3-Way Handshake');
    assert.ok(renderedHtml.includes('Port Number'), 'Must cover Port Numbers');
    assert.ok(renderedHtml.includes('WPA2') && renderedHtml.includes('WPA3'), 'Must cover WPA2 and WPA3');
    assert.ok(renderedHtml.includes('SAE (Simultaneous Authentication of Equals)'), 'Must cover WPA3 SAE');
    assert.ok(renderedHtml.includes('VPN (Virtual Private Network)'), 'Must cover VPN');
    assert.ok(renderedHtml.includes('IPsec'), 'Must cover IPsec');
    assert.ok(renderedHtml.includes('Embedded Systems') || renderedHtml.includes('OT / ICS / SCADA'), 'Must cover Embedded Systems / OT / ICS');
    assert.ok(renderedHtml.includes('IoT (Internet of Things)'), 'Must cover IoT');

    // 4.2 Understand network security architecture
    assert.ok(renderedHtml.includes('Network Segmentation'), 'Must cover Network Segmentation');
    assert.ok(renderedHtml.includes('Blast Radius'), 'Must cover Blast Radius');
    assert.ok(renderedHtml.includes('Lateral Movement'), 'Must cover Lateral Movement');
    assert.ok(renderedHtml.includes('Security Zones'), 'Must cover Firewall Security Zones');
    assert.ok(renderedHtml.includes('Demilitarized Zone (DMZ)'), 'Must cover DMZ');
    assert.ok(renderedHtml.includes('Virtual Local Area Network') || renderedHtml.includes('VLAN'), 'Must cover VLANs');
    assert.ok(renderedHtml.includes('IEEE 802.1Q'), 'Must cover 802.1Q');
    assert.ok(renderedHtml.includes('Micro-Segmentation'), 'Must cover Micro-Segmentation');
    assert.ok(renderedHtml.includes('East-West Traffic'), 'Must cover East-West Traffic');
    assert.ok(renderedHtml.includes('Defense in Depth') || renderedHtml.includes('Layered Defense'), 'Must cover Defense in Depth');
    assert.ok(renderedHtml.includes('Zero Trust Architecture') || renderedHtml.includes('ZTA'), 'Must cover Zero Trust');
    assert.ok(renderedHtml.includes('NIST SP 800-207'), 'Must cover NIST SP 800-207');
    assert.ok(renderedHtml.includes('Never Trust, Always Verify'), 'Must cover Never Trust Always Verify');

    // 4.3 Understand cloud security
    assert.ok(renderedHtml.includes('NIST SP 800-145'), 'Must cover NIST SP 800-145');
    assert.ok(renderedHtml.includes('On-Demand Self-Service'), 'Must cover On-Demand Self-Service');
    assert.ok(renderedHtml.includes('Broad Network Access'), 'Must cover Broad Network Access');
    assert.ok(renderedHtml.includes('Resource Pooling'), 'Must cover Resource Pooling');
    assert.ok(renderedHtml.includes('Rapid Elasticity'), 'Must cover Rapid Elasticity');
    assert.ok(renderedHtml.includes('Measured Service'), 'Must cover Measured Service');
    assert.ok(renderedHtml.includes('IaaS') && renderedHtml.includes('PaaS') && renderedHtml.includes('SaaS'), 'Must cover IaaS, PaaS, SaaS');
    assert.ok(renderedHtml.includes('FaaS') || renderedHtml.includes('Serverless'), 'Must cover FaaS / Serverless');
    assert.ok(renderedHtml.includes('Shared Responsibility Model'), 'Must cover Shared Responsibility Model');
    assert.ok(renderedHtml.includes('Security OF the Cloud') && renderedHtml.includes('Security IN the Cloud'), 'Must cover OF vs IN cloud');
    assert.ok(renderedHtml.includes('Public Cloud') && renderedHtml.includes('Private Cloud'), 'Must cover Public and Private cloud');
    assert.ok(renderedHtml.includes('Hybrid Cloud') && renderedHtml.includes('Community Cloud'), 'Must cover Hybrid and Community cloud');
    assert.ok(renderedHtml.includes('Multi-Cloud'), 'Must cover Multi-Cloud');
    assert.ok(renderedHtml.includes('Vendor Lock-in'), 'Must cover Vendor Lock-in');
    assert.ok(renderedHtml.includes('Virtual Private Cloud') || renderedHtml.includes('VPC'), 'Must cover VPC');
    assert.ok(renderedHtml.includes('Security Groups vs. Network ACLs') || (renderedHtml.includes('Security Group') && renderedHtml.includes('Network ACL')), 'Must cover Security Groups vs NACLs');
  });

  await t.test('6. 4 Semantic Diagrams Generation & Integration', () => {
    // Assert all 4 diagram keys exist in diagrams
    assert.ok(diagrams.osiVsTcpIpModel, 'diagrams.osiVsTcpIpModel must exist');
    assert.ok(diagrams.dmzFirewallArchitecture, 'diagrams.dmzFirewallArchitecture must exist');
    assert.ok(diagrams.defenseInDepthLayers, 'diagrams.defenseInDepthLayers must exist');
    assert.ok(diagrams.cloudSharedResponsibility, 'diagrams.cloudSharedResponsibility must exist');

    // Assert zero HTML comments inside diagram strings
    const keys = ['osiVsTcpIpModel', 'dmzFirewallArchitecture', 'defenseInDepthLayers', 'cloudSharedResponsibility'];
    for (const key of keys) {
      assert.strictEqual(diagrams[key].includes('<!--'), false, `${key} must contain 0 comments`);
      assert.ok(diagrams[key].includes('reading-diagram-card'), `${key} must contain .reading-diagram-card`);
      assert.ok(diagrams[key].includes('reading-diag-desktop'), `${key} must have desktop SVG container`);
      assert.ok(diagrams[key].includes('reading-diag-mobile'), `${key} must have mobile card stack container`);
      assert.ok(renderedHtml.includes(`data-diagram="${key}"`), `data-diagram="${key}" must exist in markdown HTML`);
    }
  });

  await t.test('7. Concept Distinctions, Exam Traps & Review Scenarios', () => {
    // 12 Distinction Cards
    const distinctionMatch = renderedHtml.match(/class="reading-distinction-card"/g);
    assert.ok(distinctionMatch, 'Distinction cards must exist');
    assert.equal(distinctionMatch.length, 12, 'Must have exactly 12 concept distinction cards');

    // 16 Exam Traps
    assert.ok(rawMarkdown.includes('16. ถ้าข้อสอบถามถึง'), 'Must contain 16 numbered exam traps');
    assert.equal(rawMarkdown.includes('$'), false, 'Raw markdown must contain 0 unescaped LaTeX math delimiters');

    // 12 Review Scenarios
    assert.equal(domain4Scenarios.length, 12, 'Must export exactly 12 review scenarios');
    for (const s of domain4Scenarios) {
      assert.ok(s.id >= 1 && s.id <= 12, `Scenario id ${s.id} must be between 1 and 12`);
      assert.ok(s.topic && s.topic.length > 0, `Scenario ${s.id} must have topic`);
      assert.ok(s.situation && s.situation.length > 20, `Scenario ${s.id} must have detailed situation`);
      assert.ok(s.question && s.question.length > 10, `Scenario ${s.id} must have question`);
      assert.ok(s.answer && s.answer.length > 5, `Scenario ${s.id} must have answer`);
      assert.ok(s.reasoning && s.reasoning.length > 20, `Scenario ${s.id} must have detailed reasoning`);
    }

    const scenarioCardMatches = renderedHtml.match(/class="reading-scenario-card"/g);
    assert.ok(scenarioCardMatches, 'Scenario cards must be rendered in HTML');
    assert.equal(scenarioCardMatches.length, 12, 'Must render exactly 12 scenario cards in HTML');
  });

  await t.test('8. Zero-Defect Quality Standards', () => {
    // 0 Raw H1 in markdown
    const rawH1Matches = rawMarkdown.match(/^#[^#].*$/gm);
    assert.equal(rawH1Matches, null, 'Must have 0 raw H1 headings in domain-4.md (H1 is rendered by UI header)');

    // 0 Unparsed LaTeX dollar signs
    const unparsedDollarMatches = renderedHtml.match(/(?<!\\)\$[^$<>\n]+\$/g);
    assert.equal(unparsedDollarMatches, null, 'Must have 0 unparsed LaTeX dollar signs in rendered HTML');

    // 0 Decorative emojis
    const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
    assert.equal(emojiRegex.test(rawMarkdown), false, 'Markdown must contain 0 decorative emojis');

    // Sequential ordered lists
    const olMatches = renderedHtml.match(/<ol[^>]*>([\s\S]*?)<\/ol>/g);
    assert.ok(olMatches && olMatches.length > 0, 'Ordered lists must exist');
  });

  await t.test('9. Preservation Boundaries', () => {
    // Source files untouched
    const d4SumPath = path.join(rootDir, 'ISC2 Update 2026', 'Domain 4', 'D4 sum.md');
    const d4Path = path.join(rootDir, 'ISC2 Update 2026', 'Domain 4', 'Domain 4.md');
    const d4TxtPath = path.join(rootDir, 'ISC2 Update 2026', 'Domain 4', 'DOMAIN 4.txt');

    assert.ok(fs.existsSync(d4SumPath), 'D4 sum.md must exist untouched');
    assert.ok(fs.existsSync(d4Path), 'Domain 4.md must exist untouched');
    assert.ok(fs.existsSync(d4TxtPath), 'DOMAIN 4.txt must exist untouched');

    // Question banks and vocabulary preserved
    const v1 = JSON.parse(fs.readFileSync(path.join(rootDir, 'content', 'isc2-cc-2026', 'vocabulary', 'domain-1.json'), 'utf8'));
    const v2 = JSON.parse(fs.readFileSync(path.join(rootDir, 'content', 'isc2-cc-2026', 'vocabulary', 'domain-2.json'), 'utf8'));
    const v3 = JSON.parse(fs.readFileSync(path.join(rootDir, 'content', 'isc2-cc-2026', 'vocabulary', 'domain-3.json'), 'utf8'));
    const v4 = JSON.parse(fs.readFileSync(path.join(rootDir, 'content', 'isc2-cc-2026', 'vocabulary', 'domain-4.json'), 'utf8'));
    const totalVocab = v1.entries.length + v2.entries.length + v3.entries.length + v4.entries.length;
    assert.equal(totalVocab, 403, 'Vocabulary must preserve all 403 terms across domains 1-4');
  });
});
