$ErrorActionPreference = "Stop"
$checks = @(
  'tools/verify-learning-professional-conduct.mjs',
  'tools/verify-learning-control-functions.mjs',
  'tools/verify-learning-control-categories.mjs',
  'tools/verify-learning-frameworks.mjs',
  'tools/verify-learning-governance.mjs',
  'tools/verify-learning-risk-response.mjs',
  'tools/verify-learning-assessment.mjs',
  'tools/verify-learning-risk-foundations.mjs',
  'tools/verify-learning-privacy.mjs',
  'tools/verify-learning-non-repudiation.mjs',
  'tools/verify-learning-aaa-mfa.mjs',
  'tools/verify-learning-catalog.mjs',
  'tools/verify-learning-course.mjs',
  'tools/verify-learning-progress.mjs',
  'tools/verify-learning-integration.mjs',
  'tools/verify-learning-phase2.mjs',
  'tools/verify-learning-viewer.mjs',
  'tools/verify-learning-v3-stage.mjs',
  'tools/verify-learning-v3-viewer.mjs',
  'tools/verify-learning-visuals.mjs',
  'tools/verify-learning-editorial-intro.mjs',
  'tools/verify-learning-cia-presentations.mjs',
  'tools/verify-learning-academic-remediation.mjs',
  'tools/verify-learning-ai-applications.mjs',
  'tools/verify-learning-final-signoff.mjs',
  'tools/verify-ui-language-boundary.mjs',
  'tools/verify-version-selection-layout.mjs',
  'tools/verify-phase4-quiz-engine.mjs',
  'tools/verify-session-persistence.mjs'
)
node --test @checks
exit $LASTEXITCODE
