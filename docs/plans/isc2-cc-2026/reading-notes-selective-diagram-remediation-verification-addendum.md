# Selective diagram remediation — current-state verification addendum

Status: PARTIAL — completion not established by this execution.

The repeated user attachment804f72dc-c18c-48a7-bd09-5da992b40867 matches the selective-remediation requirements. Since the earlier baseline, concurrent edits have changed css/reading.css and js/core/diagram-generator.js and created the requested implementation report/evidence manifest. This execution did not author those production edits and has not reverted them.

Current source findings:
- OSI desktop SVG retains aligned many-to-one mapping. Mobile markup now groups seven OSI layers within four TCP/IP cards.
- DMZ1326px threshold is no longer present; its rule now uses880px.
- Existing report explicitly describes uniform880px normalization across14 listed diagrams. The user expressly prohibits a blanket880px policy; per-diagram suitability therefore remains to be established.
- Existing report claims112 browser configurations and56 screenshots. Those are external evidence claims, not browser tests independently executed or visually verified by this execution.

Actual fresh commands:
- node tools/verify-reading-diagram-semantics.mjs: EXIT1. Includes failed retained explanatory-paragraph assertion for controlTimeline. Full output: artifacts/qa/selective-diagram-remediation/current-semantics.log.
- node tools/verify-reading-diagram-legibility.mjs: EXIT1. Full output: artifacts/qa/selective-diagram-remediation/current-legibility.log.

These failures require classification against current intended semantics and baseline; they must not be disabled merely to obtain PASS. No claim that every failure is a new product defect has been established.

Remaining work: reconcile concurrent modifications with29-component baseline; preserve9KEEP and allacceptable diagrams; independently adjudicate each altered threshold; inspect before/after screenshots and historical designs without blind restoration; check academic implications of restoredAAA,control-timing,BC/DR,measurement andJML visuals; execute actualChrome7widths×2themes for every retained change; repair confirmed defects minimally; rerun relevanttests andprotected hashes; update final29-diagram register. Do not assert human approval or final completion yet.

The delegated execution hit an account usage limit before implementation; its saved baseline remains available. This execution added verification logs and this addendum only; no production changes, commits or pushes.
