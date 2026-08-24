/**
 * Question and certification loader.
 * Responsible for loading certification configs and domain question banks.
 */

import isc2CcExamConfig from '../../data/certs/isc2/cc/versions/2026/exam.config.js';
import isc2CcCertConfig from '../../data/certs/isc2/cc/cert.config.js';

/**
 * Loads exam version configuration for a given certification.
 * @param {string} vendorId - e.g. "isc2"
 * @param {string} certId - e.g. "cc"
 * @param {string} version - e.g. "2026"
 * @returns {Promise<Object>} Exam configuration object
 */
export async function loadExamConfig(vendorId, certId, version = "2026") {
  if (vendorId === 'isc2' && certId === 'cc') {
    return isc2CcExamConfig;
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
  const results = {};
  const promises = domainIds.map(async (domainId) => {
    const questions = await loadDomainQuestions({ vendorId, certId, version, domainId });
    results[domainId] = questions;
  });

  await Promise.all(promises);
  return results;
}
