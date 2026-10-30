/**
 * Domain 4: Network Security — Reading Notes Data Module
 *
 * Contains:
 * - Domain metadata (Official ISC2 CC 2026 Outline, Weight: 21.3%)
 * - Authoritative 2026 Objectives (4.1, 4.2 & 4.3) with granular topic anchors (23 subsections)
 * - Asynchronous loader for consolidated Markdown content
 * - Reusable scenario dataset export
 */

export const domain4Metadata = {
  id: 4,
  title: 'Domain 4: Network Security',
  shortTitle: 'Network Security',
  weight: '21.3%',
  published: true
};

export const domain4Objectives = [
  {
    id: '4.1',
    title: '4.1 Understand network security',
    anchorId: 'obj-4-1',
    topics: [
      { id: 'topic-4-1-fundamentals-topologies', title: '4.1.1 Network Fundamentals & Topologies' },
      { id: 'topic-4-1-osi-model', title: '4.1.2 OSI 7-Layer Reference Model' },
      { id: 'topic-4-1-tcp-ip-mapping', title: '4.1.3 TCP/IP 4-Layer Architecture Mapping' },
      { id: 'topic-4-1-ipv4-cidr-nat', title: '4.1.4 IPv4 Addressing, Subnetting, Classes & NAT' },
      { id: 'topic-4-1-ipv6-architecture', title: '4.1.5 IPv6 Architecture, SLAAC & Dual-Stack' },
      { id: 'topic-4-1-tcp-vs-udp', title: '4.1.6 Transport Layer Protocols (TCP vs. UDP)' },
      { id: 'topic-4-1-ports-multiplexing', title: '4.1.7 Network Ports, Multiplexing & Core Services' },
      { id: 'topic-4-1-network-devices', title: '4.1.8 Network Devices & Security Filtering' },
      { id: 'topic-4-1-wireless-security', title: '4.1.9 Wireless Security: Wi-Fi, Bluetooth & VPN' },
      { id: 'topic-4-1-network-threats-iot', title: '4.1.10 Network Threats, Embedded Systems & IoT Security' }
    ]
  },
  {
    id: '4.2',
    title: '4.2 Understand network security architecture',
    anchorId: 'obj-4-2',
    topics: [
      { id: 'topic-4-2-segmentation-blast-radius', title: '4.2.1 Network Segmentation & Blast Radius Reduction' },
      { id: 'topic-4-2-firewall-zones', title: '4.2.2 Firewall Security Zones & Trust Boundaries' },
      { id: 'topic-4-2-dmz-architecture', title: '4.2.3 Demilitarized Zone (DMZ) Architecture' },
      { id: 'topic-4-2-vlans-routing', title: '4.2.4 Virtual Local Area Networks (VLANs) & Routing' },
      { id: 'topic-4-2-microsegmentation', title: '4.2.5 Micro-Segmentation & East-West Traffic Control' },
      { id: 'topic-4-2-defense-in-depth', title: '4.2.6 Defense in Depth Layered Strategy' },
      { id: 'topic-4-2-zero-trust', title: '4.2.7 Zero Trust Architecture (ZTA) in Networking' }
    ]
  },
  {
    id: '4.3',
    title: '4.3 Understand cloud security',
    anchorId: 'obj-4-3',
    topics: [
      { id: 'topic-4-3-cloud-characteristics', title: '4.3.1 Cloud Computing Foundations & 5 Characteristics' },
      { id: 'topic-4-3-service-models', title: '4.3.2 Cloud Service Models (IaaS, PaaS, SaaS, FaaS)' },
      { id: 'topic-4-3-shared-responsibility', title: '4.3.3 The Shared Responsibility Model' },
      { id: 'topic-4-3-deployment-models', title: '4.3.4 Cloud Deployment Models' },
      { id: 'topic-4-3-hybrid-vs-multicloud', title: '4.3.5 Critical Deployment Distinction (Hybrid vs. Multi-Cloud)' },
      { id: 'topic-4-3-cloud-network-controls', title: '4.3.6 Cloud Network Architecture & Security Controls' }
    ]
  }
];

export const domain4Review = {
  id: 'domain-4-review',
  title: 'Domain 4 Summary & Review',
  anchorId: 'domain-4-review',
  topics: [
    { id: 'topic-4-review-scenarios', title: 'Review, Distinctions & Scenarios' }
  ]
};

export async function getDomain4Markdown() {
  if (typeof window === 'undefined' && typeof process !== 'undefined' && process.versions?.node) {
    const fs = await import('node:fs');
    const path = await import('node:path');
    const { fileURLToPath } = await import('node:url');
    const dir = path.dirname(fileURLToPath(import.meta.url));
    return fs.readFileSync(path.join(dir, 'domain-4.md'), 'utf8');
  }

  // Browser environment
  const mdUrl = new URL('./domain-4.md', import.meta.url).href;
  const res = await fetch(mdUrl);
  if (!res.ok) {
    throw new Error(`Failed to load Domain 4 notes: ${res.status} ${res.statusText}`);
  }
  return await res.text();
}

export { domain4Scenarios } from './domain-4-scenarios.js';

