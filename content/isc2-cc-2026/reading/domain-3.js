/**
 * Domain 3: Access Controls — Reading Notes Data Module
 *
 * Contains:
 * - Domain metadata (Official ISC2 CC 2026 Outline, Weight: 20%)
 * - Authoritative 2026 Objectives (3.1 & 3.2) with granular topic anchors
 * - Asynchronous loader for consolidated Markdown content
 * - Reusable scenario dataset export
 */

export const domain3Metadata = {
  id: 3,
  title: 'Domain 3: Access Controls',
  shortTitle: 'Access Controls',
  weight: '20%',
  published: true
};

export const domain3Objectives = [
  {
    id: '3.1',
    title: '3.1 Understand identity life cycle management',
    anchorId: 'obj-3-1',
    topics: [
      { id: 'topic-3-1-jml-lifecycle', title: '3.1.1 IAM Overview & The JML Lifecycle' },
      { id: 'topic-3-1-roles-definition', title: '3.1.2 Roles Definition & Permission Alignment' },
      { id: 'topic-3-1-provisioning', title: '3.1.3 Identity Provisioning: 6-Step Lifecycle' },
      { id: 'topic-3-1-access-review', title: '3.1.4 Access Review & 6 Core Audit Findings' },
      { id: 'topic-3-1-deprovisioning', title: '3.1.5 Deprovisioning: Triggers & Revocation' },
      { id: 'topic-3-1-iam-frameworks', title: '3.1.6 IAM Management Frameworks: NIST SP 800-63 vs CSF' },
      { id: 'topic-3-1-iam-tools', title: '3.1.7 IAM Technology Stack: Directory, IdP & Access' },
      { id: 'topic-3-1-least-privilege', title: '3.1.8 Principle of Least Privilege (PoLP)' }
    ]
  },
  {
    id: '3.2',
    title: '3.2 Understand logical access controls',
    anchorId: 'obj-3-2',
    topics: [
      { id: 'topic-3-2-logical-controls', title: '3.2.1 Logical vs. Physical Access Controls' },
      { id: 'topic-3-2-sod', title: '3.2.2 Segregation of Duties (SoD): 3-Stage Workflow' },
      { id: 'topic-3-2-polp-vs-sod', title: '3.2.3 Least Privilege vs. Segregation of Duties' },
      { id: 'topic-3-2-dac', title: '3.2.4 Discretionary Access Control (DAC)' },
      { id: 'topic-3-2-mac', title: '3.2.5 Mandatory Access Control (MAC)' },
      { id: 'topic-3-2-rbac', title: '3.2.6 Role-Based Access Control (RBAC)' },
      { id: 'topic-3-2-abac', title: '3.2.7 Attribute-Based Access Control (ABAC)' },
      { id: 'topic-3-2-models-matrix', title: '3.2.8 Master Access Control Models Comparison Matrix' }
    ]
  }
];

export const domain3Review = {
  id: 'domain-3-review',
  title: 'Domain 3 Summary & Review',
  anchorId: 'domain-3-review',
  topics: [
    { id: 'topic-3-review-scenarios', title: 'Review, Distinctions & Scenarios' }
  ]
};

export async function getDomain3Markdown() {
  if (typeof window === 'undefined' && typeof process !== 'undefined' && process.versions?.node) {
    const fs = await import('node:fs');
    const path = await import('node:path');
    const { fileURLToPath } = await import('node:url');
    const dir = path.dirname(fileURLToPath(import.meta.url));
    return fs.readFileSync(path.join(dir, 'domain-3.md'), 'utf8');
  }

  // Browser environment
  const mdUrl = new URL('./domain-3.md', import.meta.url).href;
  const res = await fetch(mdUrl);
  if (!res.ok) {
    throw new Error(`Failed to load Domain 3 notes: ${res.status} ${res.statusText}`);
  }
  return await res.text();
}

export { domain3Scenarios } from './domain-3-scenarios.js';

