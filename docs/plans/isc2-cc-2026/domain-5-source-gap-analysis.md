# Domain 5 Learning Slides source gaps and resolution

Scope authority: [ISC2 effective September 1, 2026](https://www.isc2.org/certifications/cc/cc-certification-exam-outline), retrieved 2026-11-03. Domain title is Security Operations and Incident Response, weight 17.3%. Existing Reading Notes title shorthand is preserved and is not authoritative scope.

|Requirement / gap|Course evidence|Disposition|
|---|---|---|
|5.1 data handling|S02–S06 and transcript; summaries concentrate more on cryptography|L01 explains classification, labels, states, masking and media-specific sanitization; NIST SP 800-88r2 supplement|
|5.1 symmetric, asymmetric, hashing|S07–S22 and text §2|L02 corrects key roles, trusted digests, password hashes, integrity and custody limits|
|5.1 quantum-resistant cryptography|No substantive source teaching located|L02 S07 fills official requirement using NIST FIPS 203; explicitly supplementary, not attributed to user|
|5.2 logging/monitoring and triage|S28–S37, text §§3–4|L03–L04; AI grouping uncertainty and human escalation added from official AI guidance|
|5.2 actors/CTI/frameworks|S38–S44, text §5|L05; indicators require context and framework labels require tested coverage|
|5.3 policy implementing IRP|S45–S48 explain activities; data-handling link underdeveloped|L06 explicitly teaches evidence classification, custody, access and communication; NIST SP 800-61r3 supplement|
|5.3 exercises|S49–S51 and text §7|L07 separates tabletop and technical evidence, safety and retest|
|5.4 lifecycle/EOL/configuration/change|S52–S64 and text §§8–11|L08–L09; AI model/config/dataset dependencies added from official guidance|
|5.5 readiness/application/physical tests|S65–S78 and text §§12–14|L10–L11; authorized scope, limits, AI-integrated defenses and safe human procedures|

Separate official AI guidance is mapped in the coverage-matrix addendum: AI-assisted SIEM/triage and intervention; AI workspace data and assets; continuous security testing and human boundaries. Optional enrichment includes TPM/HSM detail, CTI categories, STRIDE and specialized data-in-use techniques; these are never invented separately numbered exam requirements. SCA and SOAR in the master guide are optional context and do not need their own lesson.

The old outline grouped incident-response concepts with continuity and gave Security Operations a different objective set. The retrieved 2026 outline has Security Governance in Domain 2 and five Domain 5 objectives. This implementation uses the current numbered bullets, not the old 2022/2025 mapping. No claim that every historical change has been exhaustively compared against an archived old PDF.

No remaining unsupported critical examination requirement is identified for the authored curriculum. Missing original audio/video and editorial acceptance remain provenance and human-review limitations.
