/**
 * Domain 5: Security Operations — Reading Notes Data Module
 *
 * Contains:
 * - Domain metadata (Official ISC2 CC 2026 Outline, Weight: 17.3%)
 * - Authoritative 2026 Objectives (5.1, 5.2, 5.3, 5.4 & 5.5) with 33 granular topic anchors
 * - Asynchronous loader for consolidated Markdown content
 * - Reusable scenario dataset export
 */

export const domain5Metadata = {
  id: 5,
  title: 'Domain 5: Security Operations',
  shortTitle: 'Security Operations',
  weight: '17.3%',
  published: true
};

export const domain5Objectives = [
  {
    id: '5.1',
    title: '5.1 Understand data security',
    anchorId: 'obj-5-1',
    topics: [
      { id: 'topic-5-1-data-handling-classification', title: '5.1.1 Data Handling, Governance & Classification' },
      { id: 'topic-5-1-data-labeling-tagging', title: '5.1.2 Data Labeling & Metadata Tagging' },
      { id: 'topic-5-1-data-masking-obfuscation', title: '5.1.3 Data Masking & Obfuscation' },
      { id: 'topic-5-1-data-sanitization-destruction', title: '5.1.4 Data Sanitization & NIST SP 800-88' },
      { id: 'topic-5-1-data-states-controls', title: '5.1.5 Data States & Protection Controls' },
      { id: 'topic-5-1-cryptography-symmetric-asymmetric', title: '5.1.6 Cryptography Foundations: Symmetric vs. Asymmetric' },
      { id: 'topic-5-1-hashing-digital-signatures', title: '5.1.7 Hashing, Integrity & Digital Signatures' },
      { id: 'topic-5-1-tpm-vs-hsm', title: '5.1.8 Hardware Security: TPM vs. HSM' }
    ]
  },
  {
    id: '5.2',
    title: '5.2 Understand security operations',
    anchorId: 'obj-5-2',
    topics: [
      { id: 'topic-5-2-logging-telemetry-audit', title: '5.2.1 Logging, Telemetry & Audit Trails' },
      { id: 'topic-5-2-monitoring-siem-correlation', title: '5.2.2 Security Monitoring, SIEM & Telemetry Correlation' },
      { id: 'topic-5-2-edr-antivirus', title: '5.2.3 Endpoint Detection & Response (EDR) and Antivirus' },
      { id: 'topic-5-2-dlp-controls', title: '5.2.4 Data Loss Prevention (DLP) Across Environments' },
      { id: 'topic-5-2-snmp-traps-network-monitoring', title: '5.2.5 Network Monitoring & Protocol Traps' },
      { id: 'topic-5-2-alert-triage-prioritization', title: '5.2.6 Alert Triage & Risk Matrix Prioritization' },
      { id: 'topic-5-2-threat-actors-motivations', title: '5.2.7 Threat Actors & Motivations' },
      { id: 'topic-5-2-cti-iocs-pyramid', title: '5.2.8 Cyber Threat Intelligence (CTI) & Indicators of Compromise' },
      { id: 'topic-5-2-mitre-attack-framework', title: '5.2.9 MITRE ATT&CK Framework: Tactics, Techniques & Procedures' }
    ]
  },
  {
    id: '5.3',
    title: '5.3 Understand Incident Response (IR)',
    anchorId: 'obj-5-3',
    topics: [
      { id: 'topic-5-3-ir-goals-terminology', title: '5.3.1 Incident Response Goals, Terminology & Event vs. Incident' },
      { id: 'topic-5-3-irp-roles-csirt', title: '5.3.2 Incident Response Plan (IRP) & Roles' },
      { id: 'topic-5-3-irp-lifecycle-phases', title: '5.3.3 The 6-Phase Incident Response Lifecycle' },
      { id: 'topic-5-3-evidence-handling-chain-of-custody', title: '5.3.4 Evidence Handling, Chain of Custody & Forensic Readiness' },
      { id: 'topic-5-3-ir-exercises-tabletop-simulation', title: '5.3.5 Incident Response Exercises: Tabletop vs. Technical Simulation' }
    ]
  },
  {
    id: '5.4',
    title: '5.4 Understand asset protection',
    anchorId: 'obj-5-4',
    topics: [
      { id: 'topic-5-4-asset-lifecycle-management', title: '5.4.1 Asset Lifecycle Management (ALM)' },
      { id: 'topic-5-4-eol-eos-compensating-controls', title: '5.4.2 End of Life (EOL) / End of Support (EOS) Risks & Compensating Controls' },
      { id: 'topic-5-4-configuration-management-baselines', title: '5.4.3 Configuration Management, Baselines & Drift' },
      { id: 'topic-5-4-patch-management-process', title: '5.4.4 The 5-Step Patch Management Process' },
      { id: 'topic-5-4-change-management-process', title: '5.4.5 The 7-Step Change Management Process & CAB' }
    ]
  },
  {
    id: '5.5',
    title: '5.5 Understand security testing',
    anchorId: 'obj-5-5',
    topics: [
      { id: 'topic-5-5-security-teaming', title: '5.5.1 Security Assessment Strategies & Teaming: Blue, Red & Purple' },
      { id: 'topic-5-5-vulnerability-assessment-pentest', title: '5.5.2 Vulnerability Assessment vs. Penetration Testing' },
      { id: 'topic-5-5-appsec-sast-dast', title: '5.5.3 Application Security Testing: SAST vs. DAST' },
      { id: 'topic-5-5-threat-modeling-design', title: '5.5.4 Threat Modeling in Secure System Design & STRIDE' },
      { id: 'topic-5-5-physical-penetration-testing', title: '5.5.5 Physical Penetration Testing & Facility Controls' },
      { id: 'topic-5-5-social-engineering-testing', title: '5.5.6 Social Engineering Testing & Awareness' }
    ]
  }
];

export const domain5Review = {
  id: 'domain-5-review',
  title: 'Domain 5 Summary & Review',
  anchorId: 'domain-5-review',
  topics: [
    { id: 'topic-5-review-scenarios', title: 'Review, Distinctions & Scenarios' }
  ]
};

export async function getDomain5Markdown() {
  if (typeof window === 'undefined' && typeof process !== 'undefined' && process.versions?.node) {
    const fs = await import('node:fs');
    const path = await import('node:path');
    const { fileURLToPath } = await import('node:url');
    const dir = path.dirname(fileURLToPath(import.meta.url));
    return fs.readFileSync(path.join(dir, 'domain-5.md'), 'utf8');
  }

  // Browser environment
  const mdUrl = new URL('./domain-5.md', import.meta.url).href;
  const res = await fetch(mdUrl);
  if (!res.ok) {
    throw new Error(`Failed to load Domain 5 notes: ${res.status} ${res.statusText}`);
  }
  return await res.text();
}

export { domain5Scenarios } from './domain-5-scenarios.js';

