import { lstatSync, readFileSync, realpathSync } from 'node:fs';
import { resolve, sep } from 'node:path';
import certifications from '../data/certifications.js';
import { publishedLessons, safeAssetPath, validateCatalog } from '../js/core/learning-schema.js';

const content = 'content/isc2-cc-2026';
const published = `${content}/learning/published`;

// Reviewed runtime paths. Add new modules, styles and static media here when
// wiring them into the site. Files elsewhere in these directories stay private.
const staticPaths = [
  'assets/images/reading/datacenter-biometric-scanner.jpg',
  'assets/images/reading/fiber-optic-connectors.jpg',
  'assets/images/reading/optical-access-turnstiles.jpg',
  'assets/images/reading/physically-destroyed-hard-drive.jpg',
  'assets/images/reading/piv-smart-card-features.jpg',
  'assets/images/reading/yubikey-5-nfc-token.png',
  'assets/learning/cia-editorial-document.svg',
  'assets/logos/LOGO.png',
  'css/base.css',
  'css/components.css',
  'css/learning-aaa-presentations.css',
  'css/learning-assessment.css',
  'css/learning-business-continuity-bcp.css',
  'css/learning-cia-presentations.css',
  'css/learning-control-categories.css',
  'css/learning-control-functions.css',
  'css/learning-disaster-recovery-drp.css',
  'css/learning-domain2-lesson-shell.css',
  'css/learning-domain3-lesson-shell.css',
  'css/learning-domain4-presentations.css',
  'css/learning-domain5-presentations.css',
  'css/learning-editorial-intro.css',
  'css/learning-frameworks.css',
  'css/learning-governance.css',
  'css/learning-grc-foundations.css',
  'css/learning-grc-tools-risk-register.css',
  'css/learning-iam-frameworks-tools.css',
  'css/learning-iam-review-deprovisioning.css',
  'css/learning-iam-roles-provisioning.css',
  'css/learning-non-repudiation.css',
  'css/learning-presentation.css',
  'css/learning-privacy.css',
  'css/learning-professional-conduct.css',
  'css/learning-risk-foundations.css',
  'css/learning-risk-response.css',
  'css/learning-security-awareness.css',
  'css/learning-security-metrics.css',
  'css/learning-security-reporting.css',
  'css/learning-social-passwords.css',
  'css/learning.css',
  'css/quiz.css',
  'css/reading.css',
  'css/results.css',
  'css/versions.css',
  'css/vocabulary.css',
  'data/certifications.js',
  'data/certs/isc2/cc/cert.config.js',
  'data/certs/isc2/cc/versions/2026/exam.config.js',
  'data/certs/isc2/cc/versions/2026/questions/domain-1.js',
  'data/certs/isc2/cc/versions/2026/questions/domain-2.js',
  'data/certs/isc2/cc/versions/2026/questions/domain-3.js',
  'data/certs/isc2/cc/versions/2026/questions/domain-4.js',
  'data/certs/isc2/cc/versions/2026/questions/domain-5.js',
  'data/certs/isc2/cc/versions/next-bank/exam.config.js',
  'data/certs/isc2/cc/versions/next-bank/questions/domain-1.js',
  'data/certs/isc2/cc/versions/next-bank/questions/domain-2.js',
  'data/certs/isc2/cc/versions/next-bank/questions/domain-3.js',
  'data/certs/isc2/cc/versions/next-bank/questions/domain-4.js',
  'data/certs/isc2/cc/versions/next-bank/questions/domain-5.js',
  'data/exam-version-info.js',
  'data/exam-versions.js',
  'data/vocabulary-count.js',
  'index.html',
  'js/app.js',
  'js/core/content-components.js',
  'js/core/diagram-generator.js',
  'js/core/i18n.js',
  'js/core/learning-course.js',
  'js/core/learning-loader.js',
  'js/core/learning-progress.js',
  'js/core/learning-schema.js',
  'js/core/learning-visuals.js',
  'js/core/markdown-parser.js',
  'js/core/math-renderer.js',
  'js/core/question-loader.js',
  'js/core/quiz-engine.js',
  'js/core/reading-loader.js',
  'js/core/reading-progress.js',
  'js/core/scenario-component.js',
  'js/core/state.js',
  'js/core/storage.js',
  'js/core/study-answers.js',
  'js/core/theme.js',
  'js/core/vocabulary-loader.js',
  'js/ui/components/explanation-2026.js',
  'js/ui/components/theme-toggle.js',
  'js/ui/learning/aaa-presentations.js',
  'js/ui/learning/assessment-presentations.js',
  'js/ui/learning/business-continuity-bcp-presentations.js',
  'js/ui/learning/cia-presentations/availability.js',
  'js/ui/learning/cia-presentations/confidentiality.js',
  'js/ui/learning/cia-presentations/incident.js',
  'js/ui/learning/cia-presentations/index.js',
  'js/ui/learning/cia-presentations/integrity.js',
  'js/ui/learning/cia-presentations/investigation.js',
  'js/ui/learning/cia-presentations/overview.js',
  'js/ui/learning/cia-presentations/recap.js',
  'js/ui/learning/cia-presentations/shared.js',
  'js/ui/learning/control-categories-presentations.js',
  'js/ui/learning/control-functions-presentations.js',
  'js/ui/learning/disaster-recovery-drp-presentations.js',
  'js/ui/learning/dom.js',
  'js/ui/learning/domain2-lesson-shell.js',
  'js/ui/learning/domain3-lesson-shell.js',
  'js/ui/learning/domain3-logical-presentations.js',
  'js/ui/learning/domain4-presentations.js',
  'js/ui/learning/domain4-storyboard.js',
  'js/ui/learning/domain5-presentations.js',
  'js/ui/learning/domain5-storyboard.js',
  'js/ui/learning/editorial-intro.js',
  'js/ui/learning/frameworks-presentations.js',
  'js/ui/learning/fullscreen.js',
  'js/ui/learning/governance-presentations.js',
  'js/ui/learning/grc-foundations-presentations.js',
  'js/ui/learning/grc-tools-risk-register-presentations.js',
  'js/ui/learning/iam-access-control-models-presentations.js',
  'js/ui/learning/iam-frameworks-tools-presentations.js',
  'js/ui/learning/iam-least-privilege-sod-presentations.js',
  'js/ui/learning/iam-mfa-authentication-signals-presentations.js',
  'js/ui/learning/iam-review-deprovisioning-presentations.js',
  'js/ui/learning/iam-roles-provisioning-presentations.js',
  'js/ui/learning/keyboard-help.js',
  'js/ui/learning/lesson-info.js',
  'js/ui/learning/non-repudiation-presentations.js',
  'js/ui/learning/presentation-stage.js',
  'js/ui/learning/privacy-presentations.js',
  'js/ui/learning/professional-conduct-presentations.js',
  'js/ui/learning/renderers.js',
  'js/ui/learning/risk-foundations-presentations.js',
  'js/ui/learning/risk-response-presentations.js',
  'js/ui/learning/routes.js',
  'js/ui/learning/security-awareness-presentations.js',
  'js/ui/learning/security-metrics-presentations.js',
  'js/ui/learning/security-reporting-presentations.js',
  'js/ui/learning/slide-overview.js',
  'js/ui/learning/social-engineering-passwords-presentations.js',
  'js/ui/learning/viewer-controls.js',
  'js/ui/learning/viewer.js',
  'js/ui/learning/visual-components.js',
  'js/ui/renderer.js',
  'js/ui/screen-home.js',
  'js/ui/screen-learning-center.js',
  'js/ui/screen-learning-domain.js',
  'js/ui/screen-quiz.js',
  'js/ui/screen-reading.js',
  'js/ui/screen-results.js',
  'js/ui/screen-start.js',
  'js/ui/screen-study-answers.js',
  'js/ui/screen-versions.js',
  'js/ui/screen-vocabulary.js',
];

export function requiredSourceFile(root, path) {
  const file = resolve(root, path);
  if (!file.startsWith(root + sep)) throw new Error(`Invalid runtime path ${path}`);
  const info = lstatSync(file, { throwIfNoEntry: false });
  if (!info) throw new Error(`Missing runtime file ${path}`);
  if (!info.isFile() || realpathSync(file) !== file) {
    throw new Error(`Expected a regular project file at ${path}`);
  }
  return file;
}

export function productionPaths(root) {
  const catalogPath = `${published}/catalog.json`;
  const paths = new Set([...staticPaths, catalogPath]);
  for (const { logo } of certifications) {
    if (logo?.startsWith('./assets/logos/')) paths.add(logo.slice(2));
  }
  for (let domain = 1; domain <= 5; domain++) {
    paths.add(`${content}/reading/domain-${domain}.js`);
    paths.add(`${content}/reading/domain-${domain}.md`);
    paths.add(`${content}/reading/domain-${domain}-scenarios.js`);
    paths.add(`${content}/vocabulary/domain-${domain}.json`);
  }

  const catalog = JSON.parse(readFileSync(requiredSourceFile(root, catalogPath), 'utf8'));
  const validation = validateCatalog(catalog);
  if (!validation.valid) throw new Error(`Invalid learning catalog: ${validation.errors.join('; ')}`);
  for (const summary of publishedLessons(catalog)) {
    const path = `${published}/${summary.lessonPath}`;
    paths.add(path);
    const lesson = JSON.parse(readFileSync(requiredSourceFile(root, path), 'utf8'));
    for (const asset of lesson.assets) {
      if (!safeAssetPath(asset.path)) throw new Error(`Invalid media path in ${path}: ${asset.path}`);
      paths.add(asset.path);
    }
  }
  return paths;
}
