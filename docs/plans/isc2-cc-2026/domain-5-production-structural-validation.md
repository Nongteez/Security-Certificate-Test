# Domain 5 structural validation

**PASS**: `node tools/verify-domain5-integration.mjs` (final log in artifacts/qa/domain5-production).38 exports;26 curated foundations/families; exact11 runtime keys; integer IDs1001–1040 excluding1003/1025; zero-based keys;4 unique EN/TH options; complete EN/TH fields; exact correct/incorrect option-rationale mapping; EN/TH/both explanation rendering. Hand-derived key-C fixture plus negative corruptions check fractional IDs/keys, duplicate choices, missing Thai, wrong feedback letters, leaked metadata and missing knowledge.

No collision with all702 pre-existing IDs. Normalized exact-stem comparison in both languages and independent semantic screening are separate evidence. Review-input hashes bind drafts/knowledge to actual independent review; every published item hash matches accepted ledger. Both rubrics and no-hard-gate judgments enforced.

This verifier tests data/mapping/engine/rendered HTML, not browser layout or academic truth by itself. Actual browser evidence is reported separately. Test-first failure is saved as `red-integration.log`: real loader had noD5 before publication. No failing assertion was disabled.
