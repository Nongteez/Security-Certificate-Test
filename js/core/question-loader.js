/**
 * Question and certification loader.
 * Responsible for loading certification configs and domain question banks.
 */

import isc2CcCertConfig from '../../data/certs/isc2/cc/cert.config.js';
import certifications from '../../data/certifications.js';
import { getExamVersions, resolveExamVersion, versionReferenceURL } from '../../data/exam-versions.js';
import { resolveSessionVersion } from './storage.js';

const questionOrigins = new WeakMap();

function registeredCertification(vendorId, certId) {
  return certifications.find(c => c.vendorId === vendorId && c.certId === certId && getExamVersions(c.id).length);
}

/** Used by the engine to reject overlapping IDs from a different bank. */
export function questionsMatchVersion(questions, certificationId, versionId) {
  return questions.length > 0 && questions.every(q => questionOrigins.get(q) === `${certificationId}/${versionId}`);
}

function validateExamConfig(config, version) {
  if (!config || config.version !== version.id || !Array.isArray(config.domains) || !config.domains.length) return false;
  const ids = config.domains.map(d => d.id);
  if (new Set(ids).size !== ids.length) return false;
  if (!config.domains.every(d => Number.isInteger(d.id) && d.id > 0 && d.name?.en && Number.isInteger(d.questionCount) && d.questionCount >= 0 && (d.questionCount === 0 || /^\.\/questions\/[^/]+\.js$/.test(d.questionFile)))) return false;
  const total = config.domains.reduce((sum, d) => sum + d.questionCount, 0);
  return total === config.totalQuestions && (version.questionCount === undefined || total === version.questionCount);
}

/**
 * Loads exam version configuration for a given certification.
 * @param {string} vendorId - e.g. "isc2"
 * @param {string} certId - e.g. "cc"
 * @param {string} version - e.g. "2026"
 * @returns {Promise<Object>} Exam configuration object
 */
export async function loadExamConfig(vendorId, certId, version = "2026") {
  const cert = registeredCertification(vendorId, certId);
  if (cert) {
    const entry = resolveExamVersion(cert.id, version);
    if (!entry) return null;
    try {
      const config = (await import(versionReferenceURL(entry.examConfigReference).href)).default;
      const domainConfig = entry.domainMetadataReference === entry.examConfigReference
        ? config : (await import(versionReferenceURL(entry.domainMetadataReference).href)).default;
      const resolved = domainConfig === config ? config : { ...config, domains: domainConfig.domains };
      return validateExamConfig(resolved, entry) ? resolved : null;
    } catch (err) {
      console.warn('Could not load registered exam configuration:', err);
      return null;
    }
  }
  
  try {
    const mod = await import(`../../data/certs/${vendorId}/${certId}/versions/${version}/exam.config.js`);
    return mod.default;
  } catch (err) {
    console.warn(`Could not dynamically load exam config for ${vendorId}/${certId}/${version}:`, err);
    return null;
  }
}

/**
 * Loads certification-level metadata configuration.
 * @param {string} vendorId 
 * @param {string} certId 
 * @returns {Promise<Object>}
 */
export async function loadCertConfig(vendorId, certId) {
  if (vendorId === 'isc2' && certId === 'cc') {
    return isc2CcCertConfig;
  }
  
  try {
    const mod = await import(`../../data/certs/${vendorId}/${certId}/cert.config.js`);
    return mod.default;
  } catch (err) {
    console.warn(`Could not dynamically load cert config for ${vendorId}/${certId}:`, err);
    return null;
  }
}

/**
 * Loads questions for a single domain.
 * @param {Object} params
 * @param {string} params.vendorId - e.g. "isc2"
 * @param {string} params.certId - e.g. "cc"
 * @param {string} params.version - e.g. "2026"
 * @param {number|string} params.domainId - e.g. 1
 * @returns {Promise<Array>} Array of question objects for that domain
 */
export async function loadDomainQuestions({ vendorId, certId, version = "2026", domainId }) {
  try {
    const cert = registeredCertification(vendorId, certId);
    if (cert) {
      const entry = resolveExamVersion(cert.id, version);
      const config = await loadExamConfig(vendorId, certId, version);
      const domain = config?.domains.find(d => String(d.id) === String(domainId));
      if (!entry || !domain) return [];
      const file = domain.questionFile.slice('./questions/'.length);
      const mod = await import(new URL(file, versionReferenceURL(entry.questionBankReference)).href);
      const questions = mod.default;
      if (!Array.isArray(questions) || questions.length !== domain.questionCount ||
          !questions.every(q => q && q.id != null && String(q.dom) === String(domain.id)) ||
          new Set(questions.map(q => q.id)).size !== questions.length) return [];
      questions.forEach(q => questionOrigins.set(q, `${cert.id}/${entry.id}`));
      return questions;
    }
    const mod = await import(`../../data/certs/${vendorId}/${certId}/versions/${version}/questions/domain-${domainId}.js`);
    return Array.isArray(mod.default) ? mod.default : [];
  } catch (err) {
    console.error(`Failed to load domain ${domainId} questions for ${vendorId}/${certId}/${version}:`, err);
    return [];
  }
}

/**
 * Loads questions for multiple specified domains.
 * @param {Object} params
 * @param {string} params.vendorId - e.g. "isc2"
 * @param {string} params.certId - e.g. "cc"
 * @param {string} params.version - e.g. "2026"
 * @param {Array<number|string>} params.domainIds - Array of domain IDs e.g. [1, 2, 3, 4, 5]
 * @returns {Promise<Record<number|string, Array>>} Map of domainId -> question array
 */
export async function loadQuestionsForDomains({ vendorId, certId, version = "2026", domainIds = [] }) {
  const cert = registeredCertification(vendorId, certId);
  const config = cert ? await loadExamConfig(vendorId, certId, version) : null;
  if (cert && !config) throw new Error('Exam version is unavailable or invalid.');
  const results = {};
  const promises = [...new Set(domainIds)].map(async (domainId) => {
    const questions = await loadDomainQuestions({ vendorId, certId, version, domainId });
    if (cert && (!config.domains.some(d => String(d.id) === String(domainId)) || (!questions.length && (config.domains.find(d => String(d.id) === String(domainId))?.questionCount || 0) > 0))) {
      throw new Error(`Could not load domain ${domainId} for exam version ${version}.`);
    }
    results[domainId] = questions;
  });

  await Promise.all(promises);
  const all = Object.values(results).flat();
  if (cert && new Set(all.map(q => q.id)).size !== all.length) throw new Error('Duplicate question IDs across domains.');
  return results;
}

/** Resume from the saved bank, loading all outline domains (exam/practice can differ). */
export async function loadQuestionsForSession(session) {
  const version = resolveSessionVersion(session);
  if (!version) throw new Error('The saved exam version is unavailable or invalid. Saved progress has been kept.');
  const cert = certifications.find(c => c.id === version.certificationId);
  const config = await loadExamConfig(cert.vendorId, cert.certId, version.id);
  if (!config) throw new Error('The saved exam configuration could not be loaded. Saved progress has been kept.');
  return loadQuestionsForDomains({ vendorId: cert.vendorId, certId: cert.certId, version: version.id, domainIds: config.domains.map(d => d.id) });
}
