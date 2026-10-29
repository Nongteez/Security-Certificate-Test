# Domain 2 visual QA evidence

Use domain-2-visual-remediation-report.md in docs/plans/isc2-cc-2026 for the review narrative and all 28 before/after links.

Final evidence:
- final-image-index.json: all 112 final presentation screenshots.
- final-L*-sheet.jpg: four-case presentation contact sheets (1366 EN/TH above 1920 EN/TH).
- surfaces-L1..4.json: all 112 actual custom-presentation / Reading / restoration checks with observed viewport geometry.
- info-L1/2/4-{1366,1920}.json and info-L3.json: all 112 opened full explanations.
- feedback-L1..4.json and matching screenshots/contact sheets: all 64 final choice/feedback states.
- reading-scroll-L1..4.json: 16 dense Reading explanations scrolled to their ends.
- resume-navigation.json: reload, Continue Learning and four independent lesson positions.
- final-preservation.json: task-entry file comparison.
- qa-summary.json and final-verification.txt: verified final counts.
- site-label-final.json: final additional four-case site-label spacing check.
- task-file-manifest.json: exact files created/modified by this task.

Intermediate evidence is deliberately retained. before-* is the entry audit. after-* is the first CSS pass and contains failures fixed later. final-cases.json is an incomplete intermediate in-memory aggregation superseded by final-image-index.json plus surfaces-L1..4.json. Do not use it as the final case count. The raw final-L*.jpg images and current surface/feedback manifests are authoritative.

The old snapshot folder name contains domain1-final-signoff because the existing production snapshot was reused. Only the four D2 CSS copies were updated there. preview-parity.json verifies that served index/JS/CSS/published-learning files match the current workspace.
