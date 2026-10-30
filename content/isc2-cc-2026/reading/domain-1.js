/**
 * Domain 1: Security Principles — Reading Notes Data Module
 *
 * Contains:
 * - Domain metadata
 * - Authoritative 2026 Objectives (1.1–1.5) with granular topic links
 * - Raw consolidated Markdown content
 */

export const domain1Metadata = {
  id: 1,
  title: 'Domain 1: Security Principles',
  shortTitle: 'Security Principles',
  weight: '24%',
  published: true
};

export const domain1Objectives = [
  {
    id: '1.1',
    title: '1.1 Understand cybersecurity concepts',
    anchorId: 'obj-1-1',
    topics: [
      { id: 'topic-1-1-core-concepts', title: '1.1.1 Core Security Concepts & Assets' },
      { id: 'topic-1-1-cia-triad', title: '1.1.2 The CIA Triad' },
      { id: 'topic-1-1-identification-authentication', title: '1.1.3 Identification & Authentication (AAA)' },
      { id: 'topic-1-1-mfa', title: '1.1.4 Multi-Factor Authentication (MFA)' },
      { id: 'topic-1-1-authorization-accounting', title: '1.1.5 Authorization & Accounting' },
      { id: 'topic-1-1-privacy-data-protection', title: '1.1.6 Non-repudiation, Privacy & Data Protection' },
      { id: 'topic-1-1-zero-trust-defense-in-depth', title: '1.1.7 Zero Trust & Defense in Depth' }
    ]
  },
  {
    id: '1.2',
    title: '1.2 Understand risk management concepts',
    anchorId: 'obj-1-2',
    topics: [
      { id: 'topic-1-2-risk-components', title: '1.2.1 Risk Definition & Core Components' },
      { id: 'topic-1-2-quantitative-risk', title: '1.2.2 Quantitative Risk Analysis & Formulas' },
      { id: 'topic-1-2-risk-lifecycle', title: '1.2.3 Risk Management Lifecycle' },
      { id: 'topic-1-2-risk-treatment', title: '1.2.4 Risk Treatment: The 4 Responses' },
      { id: 'topic-1-2-inherent-residual-risk', title: '1.2.5 Inherent Risk, Residual Risk, Risk Appetite & Tolerance' }
    ]
  },
  {
    id: '1.3',
    title: '1.3 Understand governance concepts',
    anchorId: 'obj-1-3',
    topics: [
      { id: 'topic-1-3-governance-fundamentals', title: '1.3.1 Security Governance Fundamentals' },
      { id: 'topic-1-3-laws-regulations', title: '1.3.2 Laws and Regulations' },
      { id: 'topic-1-3-security-frameworks', title: '1.3.3 Security Frameworks' },
      { id: 'topic-1-3-document-hierarchy', title: '1.3.4 Security Document Hierarchy' },
      { id: 'topic-1-3-grc', title: '1.3.5 Governance, Risk, and Compliance (GRC)' }
    ]
  },
  {
    id: '1.4',
    title: '1.4 Understand cybersecurity controls',
    anchorId: 'obj-1-4',
    topics: [
      { id: 'topic-1-4-control-categories', title: '1.4.1 Security Control Categories' },
      { id: 'topic-1-4-control-types', title: '1.4.2 Security Control Types / Functions' },
      { id: 'topic-1-4-overlapping-controls', title: '1.4.3 Contextual & Overlapping Controls' }
    ]
  },
  {
    id: '1.5',
    title: '1.5 Maintain professional and ethical conduct',
    anchorId: 'obj-1-5',
    topics: [
      { id: 'topic-1-5-code-of-conduct', title: '1.5.1 Professional Code of Conduct & Authority Boundaries' },
      { id: 'topic-1-5-due-care-due-diligence', title: '1.5.2 Due Care vs. Due Diligence' },
      { id: 'topic-1-5-isc2-ethics', title: '1.5.3 ISC2 Code of Ethics (The 4 Canons)' },
      { id: 'topic-1-5-distinctions-scenarios', title: '1.5.4 Concept Distinctions, Scenarios & Quick Review' }
    ]
  }
];

export async function getDomain1Markdown() {
  if (typeof window === 'undefined' && typeof process !== 'undefined' && process.versions?.node) {
    const fs = await import('node:fs');
    const path = await import('node:path');
    const { fileURLToPath } = await import('node:url');
    const dir = path.dirname(fileURLToPath(import.meta.url));
    return fs.readFileSync(path.join(dir, 'domain-1.md'), 'utf8');
  }

  // Browser environment
  const mdUrl = new URL('./domain-1.md', import.meta.url).href;
  const res = await fetch(mdUrl);
  if (!res.ok) {
    throw new Error(`Failed to load Domain 1 notes: ${res.status} ${res.statusText}`);
  }
  return await res.text();
}

export { domain1Scenarios } from './domain-1-scenarios.js';


