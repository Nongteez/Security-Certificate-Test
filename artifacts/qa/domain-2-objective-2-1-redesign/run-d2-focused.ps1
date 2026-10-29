$ErrorActionPreference='Stop'
$checks=@(
 'tools/verify-learning-d2-objective21-redesign.mjs',
 'tools/verify-learning-d2-grc-foundations.mjs',
 'tools/verify-learning-d2-grc-tools-risk-register.mjs',
 'tools/verify-learning-d2-business-continuity-bcp.mjs',
 'tools/verify-learning-d2-disaster-recovery-drp.mjs'
)
node --test --test-name-pattern='^[1-5]\.|^Lesson1|^All original|^All four|^Unchanged IDs|^Reading editorial' @checks
exit $LASTEXITCODE
