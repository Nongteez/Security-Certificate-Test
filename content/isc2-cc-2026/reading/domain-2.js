/**
 * Domain 2: Security Governance — Reading Notes Data Module
 *
 * Contains:
 * - Domain metadata (Official ISC2 CC 2026 Outline, Weight: 17.3%)
 * - Authoritative 2026 Objectives (2.1–2.4) with granular topic anchors
 * - Asynchronous loader for consolidated Markdown content
 * - Reusable scenario dataset export
 */

export const domain2Metadata = {
  id: 2,
  title: 'Domain 2: Security Governance',
  shortTitle: 'Security Governance',
  weight: '17.3%',
  published: true
};

export const domain2Objectives = [
  {
    id: '2.1',
    title: '2.1 Plan Governance, Risk, and Compliance (GRC)',
    anchorId: 'obj-2-1',
    topics: [
      { id: 'topic-2-1-grc-foundations', title: '2.1.1 GRC Foundations: 3 Pillars Defined' },
      { id: 'topic-2-1-purpose-of-grc', title: '2.1.2 The Purpose of GRC' },
      { id: 'topic-2-1-importance-of-grc', title: '2.1.3 The Importance of GRC' },
      { id: 'topic-2-1-frameworks-standards', title: '2.1.4 GRC Frameworks and Standards' },
      { id: 'topic-2-1-grc-tools', title: '2.1.5 Centralized GRC Tools and Platforms' },
      { id: 'topic-2-1-risk-register', title: '2.1.6 The Risk Register & Risk Tracking' }
    ]
  },
  {
    id: '2.2',
    title: '2.2 Understand redundancy',
    anchorId: 'obj-2-2',
    topics: [
      { id: 'topic-2-2-bc-foundations', title: '2.2.1 Business Continuity (BC) Foundations' },
      { id: 'topic-2-2-bcp-components', title: '2.2.2 The Business Continuity Plan (BCP)' },
      { id: 'topic-2-2-bia', title: '2.2.3 Business Impact Analysis (BIA)' },
      { id: 'topic-2-2-dr-it-scope', title: '2.2.4 Disaster Recovery (DR) & IT Scope' },
      { id: 'topic-2-2-bc-vs-dr', title: '2.2.5 BC vs. DR: Scope & Relationship' },
      { id: 'topic-2-2-rto-rpo', title: '2.2.6 RTO and RPO Recovery Metrics' },
      { id: 'topic-2-2-drp-sites', title: '2.2.7 DRP, Backup & Recovery Sites' },
      { id: 'topic-2-2-dr-testing', title: '2.2.8 DR Testing, Exercises & Drills' }
    ]
  },
  {
    id: '2.3',
    title: '2.3 Understand security awareness',
    anchorId: 'obj-2-3',
    topics: [
      { id: 'topic-2-3-security-culture', title: '2.3.1 Security Culture as Shared Responsibility' },
      { id: 'topic-2-3-security-leadership', title: '2.3.2 Security Leadership & Accountability' },
      { id: 'topic-2-3-awareness-programs', title: '2.3.3 Security Awareness Programs' },
      { id: 'topic-2-3-social-engineering-psychology', title: '2.3.4 Social Engineering & Psychology' },
      { id: 'topic-2-3-social-engineering-techniques', title: '2.3.5 Common Social Engineering Techniques' },
      { id: 'topic-2-3-password-protection', title: '2.3.6 Password Protection & Modern Authentication' }
    ]
  },
  {
    id: '2.4',
    title: '2.4 Measure cybersecurity effectiveness',
    anchorId: 'obj-2-4',
    topics: [
      { id: 'topic-2-4-measurement-rationale', title: '2.4.1 Rationale for Security Measurement' },
      { id: 'topic-2-4-metrics-characteristics', title: '2.4.2 Security Metrics Characteristics' },
      { id: 'topic-2-4-mttd-mttr', title: '2.4.3 Incident Response Metrics: MTTD & MTTR' },
      { id: 'topic-2-4-kpi-vs-kri', title: '2.4.4 Key Performance (KPI) vs. Risk (KRI) Indicators' },
      { id: 'topic-2-4-dashboards', title: '2.4.5 Security Dashboards: Operational Visualization' },
      { id: 'topic-2-4-scorecards', title: '2.4.6 Security Scorecards: Benchmark Comparison' },
      { id: 'topic-2-4-reports', title: '2.4.7 Cybersecurity Reports: Formal Communication' },
      { id: 'topic-2-4-memory-aid', title: '2.4.8 The 6-Part Measurement Memory Aid' }
    ]
  }
];

export const domain2Review = {
  id: 'domain-2-review',
  title: 'Domain 2 Summary & Review',
  anchorId: 'domain-2-review',
  topics: [
    { id: 'topic-2-review-scenarios', title: 'Review, Distinctions & Scenarios' }
  ]
};

export async function getDomain2Markdown() {
  if (typeof window === 'undefined' && typeof process !== 'undefined' && process.versions?.node) {
    const fs = await import('node:fs');
    const path = await import('node:path');
    const { fileURLToPath } = await import('node:url');
    const dir = path.dirname(fileURLToPath(import.meta.url));
    return fs.readFileSync(path.join(dir, 'domain-2.md'), 'utf8');
  }

  // Browser environment
  const mdUrl = new URL('./domain-2.md', import.meta.url).href;
  const res = await fetch(mdUrl);
  if (!res.ok) {
    throw new Error(`Failed to load Domain 2 notes: ${res.status} ${res.statusText}`);
  }
  return await res.text();
}

export { domain2Scenarios } from './domain-2-scenarios.js';

