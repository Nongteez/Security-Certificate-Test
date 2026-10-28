# Domain 4 Vocabulary — Academic Review and Integration

Task 58 | 2026-10-28 (Asia/Bangkok) | **Integrated: 90 bilingual entries; 403 vocabulary entries overall.**

## Result and scope

The existing [domain-4.json](domain-4.json) contains VOC-CC26-D4-001 through VOC-CC26-D4-090. All entries use the existing [schema](schema.md), with complete English/Thai definitions/explanations, examples and exam guidance, applicable acronym/full form, objective/category metadata, confusion links, keywords and source locators. No separate acronym-only clones or arbitrary quota were introduced. This is independent preparation material, not official ISC2 wording or actual exam content.

| Official objective | Entries | Main teaching scope |
| --- | --- | --- |
| 4.1 Understand network security | 55 | Models, transport, IP/coexistence, VPN boundaries, devices/services, firewall/detection interpretation, Wi-Fi, Bluetooth, embedded/ICS/IoT, bounded AI network monitoring |
| 4.2 Understand network security architecture | 15 | Segmentation, zones/DMZ, VLAN/routed enforcement, workload granularity, Zero Trust, dependencies, development isolation, layered defense versus availability |
| 4.3 Understand cloud security | 20 | Five characteristics, service/deployment models, component responsibilities/configuration, supporting FaaS/multi-provider context, AI cloud duties |
| Total | 90 | All 24 accepted KNOW-D4 records represented |

| Category | New D4 | D1-D4 total |
| --- | --- | --- |
| core_term | 38 | 227 |
| acronym | 36 | 86 |
| confusing_term | 9 | 35 |
| scenario_vocabulary | 7 | 37 |
| exam_language | 0 | 18 |
| Total | 90 | 403 |

Source status is **59 source_supported, 15 editorial_synthesis and 16 supplemental**. Supplemental identifies added teaching, not an unresolved assertion; those entries are also inventoried in [supplemental-candidates.md](supplemental-candidates.md#task-58--integrated-domain-4-supplemental-provenance-2026-10-28). All 90 retain review_status=needs_human_review because the schema reserves approved for formal curriculum acceptance. Assistant technical/bilingual review and the user's explicit integration authorization are documented here; native-Thai human sign-off is not claimed.

## Resumed work and implementation steps

On resume, the repository already contained the 90-entry JSON, the focused validator and its Node DOM fixture. No existing baseline file had changed for Task 58 at that point. The external authoring script and corrected candidate still existed; the repository JSON was byte-identical to that candidate and passed staging validation. The script was inspected and was **not rerun on resume**. The existing entries were not regenerated or replaced. The missing steps were loader registration, filter enablement, registry count, regression expectation updates and documentation.

Recovery evidence is retained outside the repository in [task58-working](C:/Users/tyroc/.codex/visualizations/2026/10/28/01a18049-c380-7133-8d1b-e33782d13136/task58-working): author-domain4.py, domain-4-candidate.json, baseline.json, tests-before.json, tests-after.json and captured per-script output. The production JSON is the editable repository source; the temporary generator is retained as recovery evidence, not a second runtime data system.

- [x] Inspect preserved working-tree evidence and existing D1-D3 schemas, translations, loaders and UI.
- [x] Reuse verified Task 55-57 sources and verify the official numbered scope.
- [x] Select and author complete bilingual entries; compare all 313 existing terms, acronyms, full forms and definitions.
- [x] Complete author review and fresh assistant review; apply the minor wording correction.
- [x] Verify the existing JSON on resume without regenerating it.
- [x] Register D4 and 403 total in the established loader, domain/objective filters and version entry.
- [x] Exercise the real screen's handlers with a Node DOM double; run regressions and preservation checks.
- [x] Record exact source mappings, duplicate decisions, test failures and file scope.

## Sources, boundaries and traceability

The [official September 2026 outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline) was checked on 2026-10-28. Numbered objectives remain 4.1–4.3; separate official Domain 4 AI commentary supplies monitoring, isolation and cloud-duty context rather than advanced AI engineering requirements. The [curated knowledge base](../knowledge/domain-4.md), [gap supplements](../../../docs/plans/isc2-cc-2026/domain-4-knowledge-gap-supplements.md), [findings resolution register](../../../docs/plans/isc2-cc-2026/domain-4-findings-resolution-register.md), [original coverage matrix](../../../docs/plans/isc2-cc-2026/domain-4-objective-coverage-matrix.md) and [question-development report](../questions/domain-4.md) were consulted. Original lecture files remain unchanged; curated corrections take precedence over excluded source claims.

R01–R36 resolve to source titles, URLs, observed sections and qualifications in the register. JSON sources use real canonical KNOW-D4 identifiers and reference-catalog locators; no missing timestamp was fabricated. Additional lexical/service references checked for this task are:

| Source ID | Primary reference and bounded use |
| --- | --- |
| RFC4251 | [The Secure Shell Protocol Architecture](https://www.rfc-editor.org/rfc/rfc4251.html#section-1), Introduction/Architecture: SSH name, protected remote-login service and components. Not an algorithm-configuration recommendation. |
| RFC1034 | [Domain Names — Concepts and Facilities](https://datatracker.ietf.org/doc/html/rfc1034#section-2.4),2.4: distributed names/resource data. The initial RFC-editor fetch was rate-limited; the datatracker text was retrieved successfully. |
| SFTP-NAME | [SSH File Transfer Protocol, draft-ietf-secsh-filexfer-13](https://datatracker.ietf.org/doc/html/draft-ietf-secsh-filexfer-13), title/name only. It is an expired Internet-Draft with no normative standing. Behavior is supported by the OpenSSH manual (R20); no draft-version implementation requirement is taught. |
| MS-RDS | [Microsoft Remote Desktop Services overview](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/overview), What is Remote Desktop Services: desktops/applications and RDP naming. No OS-version or gateway deployment procedure is required. |

Only bounded claims are accepted. The set excludes uncertain PRC/RPC wording, model chronology/never-implemented claims, generic port-knocking prescriptions, exact Wi-Fi rate ordering, automatic IPv6 encryption, universal two-appliance DMZ requirements, product-exclusive micro-segmentation and blanket cloud security/cost/legal guarantees. Bluetooth Just Works is explicitly bounded to the cited NIST guide's methods; FaaS/multi-cloud remain supporting context rather than additional NIST base models. No Domain 5 or advanced AI topic was started.

## Academic and bilingual QA

The author checked every record's technical meaning, foundation-level scope, examples, acronym expansion, English/Thai actors, conditions, negation and guidance relevance. A fresh assistant read all 90 entries completely, all 313 existing alias/definition records, the five required Domain 4 documents and schema. It found **no critical or important content issue**, recommended retaining all 90, and confirmed equivalent reasoning in every EN/TH guidance pair. This was separate from schema checks and was not an academic re-audit of the existing 313 cards.

One minor concise Thai meaning was corrected: D4-017 Network Port changed from destination-service wording to **หมายเลขระบุปลายการสื่อสารระดับทรานสปอร์ต**, covering either endpoint. Its English definition and longer Thai explanation already addressed source/destination correctly. The corrected JSON is the reviewed candidate already found on resume. No other card was rewritten during resumed integration.

High-priority qualifications were checked: transport reliability versus encryption; IPsec support versus operational use; actual port/service identity; stateful replies versus new traffic; encrypted-content inspection limits; authentication versus SSID/MAC filters; pairing versus service permission; safe OT maintenance; VLAN membership versus enforced access; DMZ policy versus appliance count; layered security versus availability; service/deployment dimensions; component-specific duties and provider-managed defaults. FTPS explicitly distinguishes control and data connection protection (RFC4217 sections 7/9); the older RFC is not used to recommend obsolete TLS versions. Wi-Fi and Bluetooth have null acronym/full_form rather than invented expansions.

A separate read-only integration review found no critical or important defect in the additive loader/UI registration and count updates and independently ran the D4 verification script successfully. Formal curriculum/native-Thai human approval and psychometric evidence are not claimed.

## Duplicate and coverage decisions

Exact normalized term, acronym and full-form alias checks found no new equivalent alias, except the documented **MAC** homonym: D4-041 means Media Access Control, whereas D3-041/D3-072 mean Mandatory Access Control. Distinct expansions and the explicit guidance resolve the ambiguity; sharing letters is not a duplicate concept. All403 IDs are unique. The existing 313 records, including their prior overlaps, are preserved.

TF-IDF ranking of definitions/guidance assisted the semantic review; it did not establish uniqueness. No unnecessary equivalent card was found in the fresh assistant comparison. Opposites, specific subtypes and relationship cards are retained for their different learning purpose. For example, false positives/negatives describe different errors; SFTP/FTPS names support recognition while their comparison targets protocol compatibility; Bluetooth association, assurance and authorization distinguish separate properties.

| Existing coverage reused | D4 representation / reason no identical general card was added |
| --- | --- |
| D1-005/D3-010 Authentication; D1-006/D3-011 Authorization | Pairing/peer verification and pairing-versus-service-authorization apply those concepts to Bluetooth. |
| D1-016 Encryption | TLS/IPsec/HTTPS and the source-qualified transfer cards identify mechanisms and limits, rather than create another generic encryption definition. |
| D1-087 Firewall; D1-086/D3-048 ACL | Packet, state and application inspection; zones/default deny; inter-VLAN enforcement teach specific network meanings. |
| D1-084 Defense in Depth; D1-024 Redundancy; D1-025/D2-049 Failover | D4-066 Common Dependency and D4-070 Defense in Depth vs.High Availability explain the network-design distinction without cloning the general cards. |
| D3-025 Workload Identity; D3-052 Context-Aware Access; D3-043 ABAC | Granular workload policy, Zero Trust and development isolation address architecture and effective paths, rather than rename IAM cards. |
| D1-082 Compensating Control; D1-108 Patch Management | Embedded/ICS/IoT examples explain constrained maintenance and temporary exposure reduction without new generic patching cards. |
| D3-060 Anomalous Sign-In Detection | D4 anomaly/network-monitoring entries concern network-flow evidence, signatures, sensor visibility and reporting rather than identity sign-in analysis. |
| Existing exam-language cards | BEST/FIRST/other qualifiers remain available through existing cards; no D4 quota-driven qualifier variants were added. |

## Per-entry source and objective register

All rows passed assistant academic/bilingual review; status in JSON remains needs_human_review for the formal review distinction. This table supplies **official objective → canonical source evidence/primary reference → vocabulary** traceability without duplicating the full teaching text stored in JSON.

| Entry | English term | Objective | Category | Canonical knowledge | Primary reference IDs |
| --- | --- | --- | --- | --- | --- |
| VOC-CC26-D4-001 | OSI Model | 4.1 | acronym | KNOW-D4-001 | R03, R36 |
| VOC-CC26-D4-002 | TCP/IP Model | 4.1 | acronym | KNOW-D4-001 | R03 |
| VOC-CC26-D4-003 | Encapsulation | 4.1 | core_term | KNOW-D4-001 | R03, R36 |
| VOC-CC26-D4-004 | Transmission Control Protocol | 4.1 | acronym | KNOW-D4-002 | R04, R33 |
| VOC-CC26-D4-005 | User Datagram Protocol | 4.1 | acronym | KNOW-D4-002 | R05 |
| VOC-CC26-D4-006 | Internet Protocol Version 4 | 4.1 | acronym | KNOW-D4-003 | R09, R14 |
| VOC-CC26-D4-007 | Internet Protocol Version 6 | 4.1 | acronym | KNOW-D4-003, KNOW-D4-004 | R07, R06 |
| VOC-CC26-D4-008 | Classless Inter-Domain Routing | 4.1 | acronym | KNOW-D4-003 | R09 |
| VOC-CC26-D4-009 | Network Address Translation | 4.1 | acronym | KNOW-D4-003, KNOW-D4-004 | R14, R11 |
| VOC-CC26-D4-010 | Dual Stack | 4.1 | core_term | KNOW-D4-004 | R10, R11 |
| VOC-CC26-D4-011 | IPsec | 4.1 | acronym | KNOW-D4-004 | R06 |
| VOC-CC26-D4-012 | Virtual Private Network | 4.1 | acronym | KNOW-D4-005 | R14, R06 |
| VOC-CC26-D4-013 | Tunnel Termination | 4.1 | scenario_vocabulary | KNOW-D4-005 | R14 |
| VOC-CC26-D4-014 | Switch | 4.1 | core_term | KNOW-D4-006 | R03, R14 |
| VOC-CC26-D4-015 | Router | 4.1 | core_term | KNOW-D4-006, KNOW-D4-013 | R03, R14, R31 |
| VOC-CC26-D4-016 | Access Point | 4.1 | acronym | KNOW-D4-006, KNOW-D4-008 | R14, R17 |
| VOC-CC26-D4-017 | Network Port | 4.1 | core_term | KNOW-D4-007 | R08 |
| VOC-CC26-D4-018 | Ephemeral Port | 4.1 | core_term | KNOW-D4-007 | R08, R35, R14 |
| VOC-CC26-D4-019 | Domain Name System | 4.1 | acronym | KNOW-D4-007 | R08, RFC1034 |
| VOC-CC26-D4-020 | Hypertext Transfer Protocol | 4.1 | acronym | KNOW-D4-007 | R21 |
| VOC-CC26-D4-021 | HTTPS | 4.1 | acronym | KNOW-D4-007 | R21, R33, R08 |
| VOC-CC26-D4-022 | Transport Layer Security | 4.1 | acronym | KNOW-D4-001, KNOW-D4-002, KNOW-D4-007 | R33, R21 |
| VOC-CC26-D4-023 | Secure Shell | 4.1 | acronym | KNOW-D4-007 | RFC4251, R08, R20 |
| VOC-CC26-D4-024 | SSH File Transfer Protocol | 4.1 | acronym | KNOW-D4-007 | R20, SFTP-NAME |
| VOC-CC26-D4-025 | FTPS | 4.1 | acronym | KNOW-D4-007 | R19, R08 |
| VOC-CC26-D4-026 | Remote Desktop Protocol | 4.1 | acronym | KNOW-D4-007 | R08, MS-RDS, R14 |
| VOC-CC26-D4-027 | Packet Filtering | 4.1 | core_term | KNOW-D4-006 | R14 |
| VOC-CC26-D4-028 | Stateful Inspection | 4.1 | core_term | KNOW-D4-006, KNOW-D4-007 | R14, R08 |
| VOC-CC26-D4-029 | Application-Aware Filtering | 4.1 | core_term | KNOW-D4-006 | R14, R33 |
| VOC-CC26-D4-030 | Web Application Firewall | 4.1 | acronym | KNOW-D4-006 | R14 |
| VOC-CC26-D4-031 | Intrusion Detection System | 4.1 | acronym | KNOW-D4-006 | R32 |
| VOC-CC26-D4-032 | Intrusion Prevention System | 4.1 | acronym | KNOW-D4-006 | R32 |
| VOC-CC26-D4-033 | Signature-Based Detection | 4.1 | core_term | KNOW-D4-006, KNOW-D4-022 | R32 |
| VOC-CC26-D4-034 | Anomaly-Based Detection | 4.1 | core_term | KNOW-D4-022 | R32, R02 |
| VOC-CC26-D4-035 | False Positive | 4.1 | core_term | KNOW-D4-006 | R32 |
| VOC-CC26-D4-036 | False Negative | 4.1 | core_term | KNOW-D4-006 | R32 |
| VOC-CC26-D4-037 | Wi-Fi | 4.1 | core_term | KNOW-D4-008 | R17 |
| VOC-CC26-D4-038 | Service Set Identifier | 4.1 | acronym | KNOW-D4-008 | R17 |
| VOC-CC26-D4-039 | Wi-Fi Protected Access 2 | 4.1 | acronym | KNOW-D4-008 | R17 |
| VOC-CC26-D4-040 | Wi-Fi Protected Access 3 | 4.1 | acronym | KNOW-D4-008 | R17 |
| VOC-CC26-D4-041 | MAC Address | 4.1 | acronym | KNOW-D4-006, KNOW-D4-008 | R17, R03 |
| VOC-CC26-D4-042 | MAC Filtering | 4.1 | core_term | KNOW-D4-008 | R17 |
| VOC-CC26-D4-043 | Bluetooth | 4.1 | core_term | KNOW-D4-009 | R29, R30 |
| VOC-CC26-D4-044 | Bluetooth Pairing | 4.1 | core_term | KNOW-D4-009 | R29, R30 |
| VOC-CC26-D4-045 | Authenticated Pairing | 4.1 | core_term | KNOW-D4-009 | R29, R30 |
| VOC-CC26-D4-046 | Just Works Pairing | 4.1 | core_term | KNOW-D4-009 | R29 |
| VOC-CC26-D4-047 | Embedded System | 4.1 | core_term | KNOW-D4-010 | R31 |
| VOC-CC26-D4-048 | Industrial Control System | 4.1 | acronym | KNOW-D4-010 | R31 |
| VOC-CC26-D4-049 | Internet of Things | 4.1 | acronym | KNOW-D4-011 | R34, R31 |
| VOC-CC26-D4-050 | TCP vs. UDP | 4.1 | confusing_term | KNOW-D4-002 | R04, R05, R33 |
| VOC-CC26-D4-051 | SFTP vs. FTPS | 4.1 | confusing_term | KNOW-D4-007 | R20, R19 |
| VOC-CC26-D4-052 | IDS vs. IPS | 4.1 | confusing_term | KNOW-D4-006 | R32 |
| VOC-CC26-D4-053 | Wi-Fi Generation vs. Security Mode | 4.1 | confusing_term | KNOW-D4-008 | R17, R18 |
| VOC-CC26-D4-054 | Pairing vs. Service Authorization | 4.1 | confusing_term | KNOW-D4-009 | R29, R30 |
| VOC-CC26-D4-055 | AI-Assisted Network Monitoring | 4.1 | scenario_vocabulary | KNOW-D4-022 | R02, R32 |
| VOC-CC26-D4-056 | Network Segmentation | 4.2 | core_term | KNOW-D4-012 | R14, R31 |
| VOC-CC26-D4-057 | Firewall Zone | 4.2 | core_term | KNOW-D4-012 | R14, R15 |
| VOC-CC26-D4-058 | Demilitarized Zone | 4.2 | acronym | KNOW-D4-012 | R14 |
| VOC-CC26-D4-059 | Virtual Local Area Network | 4.2 | acronym | KNOW-D4-013 | R12, R13, R31 |
| VOC-CC26-D4-060 | Micro-Segmentation | 4.2 | core_term | KNOW-D4-014 | R15 |
| VOC-CC26-D4-061 | Zero Trust | 4.2 | acronym | KNOW-D4-016 | R15 |
| VOC-CC26-D4-062 | Trust Boundary | 4.2 | core_term | KNOW-D4-012, KNOW-D4-016 | R14, R15 |
| VOC-CC26-D4-063 | Lateral Movement | 4.2 | scenario_vocabulary | KNOW-D4-012 | R31, R14 |
| VOC-CC26-D4-064 | Default Deny | 4.2 | core_term | KNOW-D4-006, KNOW-D4-012 | R14 |
| VOC-CC26-D4-065 | Permitted Traffic Flow | 4.2 | scenario_vocabulary | KNOW-D4-012, KNOW-D4-015 | R14, R31 |
| VOC-CC26-D4-066 | Common Dependency | 4.2 | scenario_vocabulary | KNOW-D4-015 | R14 |
| VOC-CC26-D4-067 | Inter-VLAN Routing | 4.2 | core_term | KNOW-D4-013 | R31, R14 |
| VOC-CC26-D4-068 | Segmentation vs. Access Control | 4.2 | confusing_term | KNOW-D4-012, KNOW-D4-013, KNOW-D4-016 | R14, R31, R15 |
| VOC-CC26-D4-069 | Development/Production Isolation | 4.2 | scenario_vocabulary | KNOW-D4-023, KNOW-D4-024 | R02, R15, R23 |
| VOC-CC26-D4-070 | Defense in Depth vs. High Availability | 4.2 | confusing_term | KNOW-D4-015 | R14 |
| VOC-CC26-D4-071 | Cloud Computing | 4.3 | core_term | KNOW-D4-017 | R16 |
| VOC-CC26-D4-072 | On-Demand Self-Service | 4.3 | core_term | KNOW-D4-017 | R16, R23 |
| VOC-CC26-D4-073 | Broad Network Access | 4.3 | core_term | KNOW-D4-017, KNOW-D4-020 | R16, R23 |
| VOC-CC26-D4-074 | Resource Pooling | 4.3 | core_term | KNOW-D4-017, KNOW-D4-020 | R16, R22, R23 |
| VOC-CC26-D4-075 | Rapid Elasticity | 4.3 | core_term | KNOW-D4-017 | R16 |
| VOC-CC26-D4-076 | Measured Service | 4.3 | core_term | KNOW-D4-017 | R16, R27, R28 |
| VOC-CC26-D4-077 | Infrastructure as a Service | 4.3 | acronym | KNOW-D4-018, KNOW-D4-020 | R16, R22, R23 |
| VOC-CC26-D4-078 | Platform as a Service | 4.3 | acronym | KNOW-D4-018, KNOW-D4-020 | R16, R23, R24 |
| VOC-CC26-D4-079 | Software as a Service | 4.3 | acronym | KNOW-D4-018, KNOW-D4-020 | R16, R23, R24 |
| VOC-CC26-D4-080 | Public Cloud | 4.3 | core_term | KNOW-D4-019 | R16, R24 |
| VOC-CC26-D4-081 | Private Cloud | 4.3 | core_term | KNOW-D4-019 | R16, R24 |
| VOC-CC26-D4-082 | Community Cloud | 4.3 | core_term | KNOW-D4-019 | R16 |
| VOC-CC26-D4-083 | Hybrid Cloud | 4.3 | core_term | KNOW-D4-019 | R16 |
| VOC-CC26-D4-084 | Shared Responsibility Model | 4.3 | core_term | KNOW-D4-020, KNOW-D4-024 | R22, R23, R24, R02 |
| VOC-CC26-D4-085 | Cloud Service Provider | 4.3 | acronym | KNOW-D4-020 | R22, R23, R24 |
| VOC-CC26-D4-086 | Tenant Configuration | 4.3 | scenario_vocabulary | KNOW-D4-020 | R22, R23, R25 |
| VOC-CC26-D4-087 | Function as a Service | 4.3 | acronym | KNOW-D4-021 | R24, R26, R27, R28, R16 |
| VOC-CC26-D4-088 | Multi-Cloud | 4.3 | core_term | KNOW-D4-021 | R16 |
| VOC-CC26-D4-089 | Service Model vs. Deployment Model | 4.3 | confusing_term | KNOW-D4-018, KNOW-D4-019, KNOW-D4-020 | R16, R23 |
| VOC-CC26-D4-090 | Provider-Managed vs. Customer-Configured Controls | 4.3 | confusing_term | KNOW-D4-020, KNOW-D4-024 | R22, R23, R25, R02 |

## Integration and behavioral validation

The direct D4 load and all-domain load use the same URL/cache mechanisms as existing domains. The aggregate retains the original 313 entries before adding90, sums all category counts and reports 403. The vocabulary registry entry shows403; next-bank remains 119 questions and the legacy version remains 583. D4's domain option is enabled, its count/badge is present, and objectives 4.1/4.2/4.3 participate in the existing filters. D5 stays disabled. No render/filter/shuffle/modal algorithm, layout or CSS was changed.

Commands: `node tools/verify-vocabulary-domain4.mjs --staging content/isc2-cc-2026/vocabulary/domain-4.json`; the same with `--duplicates`; and `node tools/verify-vocabulary-domain4.mjs`.

The focused checks pass: valid JSON/established fields and enums; complete EN/TH explanation/example/guidance; unique contiguous IDs; all objective and knowledge mappings; correct source locators, acronym/full-form pairing and category totals; no new equivalent alias except the documented homonym; direct/all-domain loading and cache; unchanged old-entry values; registry count. Negative cases reject missing Thai guidance, an invalid objective and an invented knowledge ID.

The real screen and event handlers run in a small Node DOM double, with the loader cache populated before the double installs window. Checks cover 403 Study Cards; D4's90-card pool/count; category/objective combinations; English/acronym/full-form/Thai search; empty results; complete bilingual fields in **all 90 detail modals**; modal navigation; all 90 flashcards with flip and ordered navigation; shuffle preserving exactly the filtered deck; reset order; incompatible-objective pruning on domain changes; reset filters and back navigation. This does not establish browser fetch, visual layout, CSS rendering, native accessibility or device behavior. No browser automation was run.

## Regression results

The saved pre-edit baseline ran 54 non-browser verify-*.mjs scripts: **43 successful and 11 failing**. The final run adds the new D4 validator: **55 scripts,44 successful, the same 11 failing, no new failing script**. The initial loader test was observed failing while D4 was absent. After registration, three existing scripts showed four stale assertions:313 aggregate/registry terms,313 in the version card, and disabled D4. Their expectations were updated to the loaded/registered totals and enabled D4, preserving all D1-D3 checks. Those suites now pass (D3 vocabulary10/10; layout6/6; filter script all five checks).

There is no package.json test command. Browser-dependent verify-vocabulary-responsive.mjs is excluded under the user's no-browser-automation rule. No passing schema test is counted as academic proof.

| Pre-existing failing script | Baseline failure retained / reason |
| --- | --- |
| verify-complete-isolation.mjs | Historical next-bank count 24; baseline already119. |
| verify-domain1-activation.mjs | Expects607 questions in the intentionally583-question legacy version. |
| verify-domain3-integration.mjs | Missing original/ directory used by its preservation digest. |
| verify-exam-dialog-complete.mjs | Existing UI snapshot hash mismatch. |
| verify-exam-version-info.mjs | Old exam-title word order expectation. |
| verify-exam-versions.mjs | Expects next-bank unavailable/null and an older registry shape. |
| verify-exam-vocabulary.mjs | Older selector/config assumptions. |
| verify-isc2-question-migration.mjs | Missing original 583quiz HTML artifact. |
| verify-learning-preview.mjs | Local preview fetch EACCES at 127.0.0.1:12825. |
| verify-version-count-bar-alignment.mjs | Expects three cards; existing application has four. |
| verify-vocabulary-card-fix.mjs | Old exam-title word order expectation. |

<details>
<summary>Full before/after script inventory</summary>

| Script | Before | Final |
| --- | --- | --- |
| verify-complete-isolation.mjs | Fail | Pre-existing failure |
| verify-domain1-activation.mjs | Fail | Pre-existing failure |
| verify-domain2-integration.mjs | Pass | Pass |
| verify-domain3-integration.mjs | Fail | Pre-existing failure |
| verify-domain4-integration.mjs | Pass | Pass |
| verify-english-ui-compactness.mjs | Pass | Pass |
| verify-exam-dialog-complete.mjs | Fail | Pre-existing failure |
| verify-exam-dialog-responsive.mjs | Pass | Pass |
| verify-exam-version-info.mjs | Fail | Pre-existing failure |
| verify-exam-versions.mjs | Fail | Pre-existing failure |
| verify-exam-vocabulary.mjs | Fail | Pre-existing failure |
| verify-explanation-formatting-2026.mjs | Pass | Pass |
| verify-isc2-question-migration.mjs | Fail | Pre-existing failure |
| verify-learning-aaa-mfa.mjs | Pass | Pass |
| verify-learning-assessment.mjs | Pass | Pass |
| verify-learning-catalog.mjs | Pass | Pass |
| verify-learning-cia-presentations.mjs | Pass | Pass |
| verify-learning-control-categories.mjs | Pass | Pass |
| verify-learning-control-functions.mjs | Pass | Pass |
| verify-learning-course.mjs | Pass | Pass |
| verify-learning-editorial-intro.mjs | Pass | Pass |
| verify-learning-frameworks.mjs | Pass | Pass |
| verify-learning-governance.mjs | Pass | Pass |
| verify-learning-integration.mjs | Pass | Pass |
| verify-learning-non-repudiation.mjs | Pass | Pass |
| verify-learning-phase2.mjs | Pass | Pass |
| verify-learning-preview.mjs | Fail | Pre-existing failure |
| verify-learning-privacy.mjs | Pass | Pass |
| verify-learning-progress.mjs | Pass | Pass |
| verify-learning-risk-foundations.mjs | Pass | Pass |
| verify-learning-risk-response.mjs | Pass | Pass |
| verify-learning-v3-stage.mjs | Pass | Pass |
| verify-learning-v3-viewer.mjs | Pass | Pass |
| verify-learning-viewer.mjs | Pass | Pass |
| verify-learning-visuals.mjs | Pass | Pass |
| verify-phase1-repairs.mjs | Pass | Pass |
| verify-phase4-quiz-engine.mjs | Pass | Pass |
| verify-session-persistence.mjs | Pass | Pass |
| verify-setup-resume-spacing.mjs | Pass | Pass |
| verify-ui-language-boundary.mjs | Pass | Pass |
| verify-version-count-bar-alignment.mjs | Fail | Pre-existing failure |
| verify-version-selection-layout.mjs | Pass | Pass |
| verify-vocabulary-bilingual-guidance.mjs | Pass | Pass |
| verify-vocabulary-card-fix.mjs | Fail | Pre-existing failure |
| verify-vocabulary-domain2.mjs | Pass | Pass |
| verify-vocabulary-domain3.mjs | Pass | Pass |
| verify-vocabulary-domain4.mjs | New | Pass |
| verify-vocabulary-extraction.mjs | Pass | Pass |
| verify-vocabulary-filter.mjs | Pass | Pass |
| verify-vocabulary-flashcard-font-size.mjs | Pass | Pass |
| verify-vocabulary-mobile-readability.mjs | Pass | Pass |
| verify-vocabulary-modal-ux.mjs | Pass | Pass |
| verify-vocabulary-study-card-examples.mjs | Pass | Pass |
| verify-vocabulary-study-card-fullform.mjs | Pass | Pass |
| verify-vocabulary-title-highlight.mjs | Pass | Pass |

</details>

## Preservation and exact file scope

SHA-256 comparison against the pre-edit snapshot of **2,845 tracked/nonignored files** passed: **2,836 unchanged existing files, exactly 9 intended existing files modified, exactly 4 new repository files, none missing**. The90-entry JSON remains byte-identical to the corrected candidate found on resume. The task log and supplemental inventory preserve their saved contents as exact prefixes; their changes are append-only. Reversing only the registry vocabulary count 403→313 reproduces its saved baseline hash, confirming retention of the pre-existing 119-question metadata.

Both question-version trees (119 updated and 583 legacy questions), the three original vocabulary JSON files (313 entries), all 58 original Domain 4 source files and all unrelated changes remain byte-identical. Styles/assets/learning and all runtime/UI files except the two explicitly registered vocabulary modules are preserved. Runtime diffs were checked: loader aggregation and domain/objective/count labels are the only product changes. The styling, renderers, filtering, shuffle and modal algorithms are unchanged.

| Protected baseline group | Files | SHA-256 of sorted path/content-hash manifest |
| --- | --- | --- |
| Both question version trees, including configuration | 12 | ddeb70585eb0d5f1f9e5eb7b87c16baee7192b792ae3f5c48c82734b789f925e |
| D1-D3 vocabulary JSON | 3 | 0d598e54dc9d21900e8519ddf4485e0c0e8c5855b8a5877855cfd27c97cebb17 |
| Original Domain 4 learning sources | 58 | 2461e6b4ac5a779fd19cdf0eeb2e6b98242736cd0a126e480a17f68d7a1e05ce |
| Runtime/UI/styles/assets except the two vocabulary registration modules | 99 | 377be82122838448f4a1e13bc7dbd85e9a5ba2a71326731dad7000a560d2c74b |

Local documentation checks passed for 23 links and 10 tables across this report and the vocabulary README. Structural/static checks and preservation hashes remain separate from the academic/bilingual review above.

| Change | Repository file | Purpose |
| --- | --- | --- |
| Created | [domain-4.json](domain-4.json) | 90 complete bilingual entries using existing schema |
| Created | [domain-4-review.md](domain-4-review.md) |This academic/duplicate/integration/validation record |
| Created | [verify-vocabulary-domain4.mjs](../../../tools/verify-vocabulary-domain4.mjs) |Focused staging, schema, loader and real-screen Node behavior checks |
| Created | [vocabulary-dom.mjs](../../../tools/fixtures/vocabulary-dom.mjs) |Small Node DOM/event double, reusing the existing test fixture base; no browser/layout engine |
| Modified | [vocabulary-loader.js](../../../js/core/vocabulary-loader.js) |D4 URL/all-domain aggregation/category totals |
| Modified | [screen-vocabulary.js](../../../js/ui/screen-vocabulary.js) |D4 domain/objective registration, enabled option, counts/badge labels only |
| Modified | [exam-versions.js](../../../data/exam-versions.js) |Vocabulary count 313→403 only relative to the Task 58 baseline; pre-existing 119-question changes retained |
| Modified | [verify-vocabulary-domain3.mjs](../../../tools/verify-vocabulary-domain3.mjs) |Combined/registry vocabulary-count expectations; retain old-card and question checks |
| Modified | [verify-vocabulary-filter.mjs](../../../tools/verify-vocabulary-filter.mjs) |Expect enabled D4; existing 313-card tests remain preservation checks |
| Modified | [verify-version-selection-layout.mjs](../../../tools/verify-version-selection-layout.mjs) |Vocabulary card count follows registered total; preserve other checks |
| Modified | [README.md](README.md) |Current D1-D4 inventory/counts and review links |
| Modified | [supplemental-candidates.md](supplemental-candidates.md) |Append the 16 integrated supplemental-provenance records |
| Modified | [task.md](../../../docs/plans/task.md) |Append Task 58 completion/recovery entry |

No question bank, original source, D1-D3 vocabulary record, CSS, learning-slide file, unrelated change or Domain 5 content is edited. The only UI edits register D4 with existing controls. No reset, clean, revert, commit, dependency installation or browser automation was performed.

## Remaining issues

No unresolved technical or integration issue blocks this 90-entry set. The11 known failing scripts remain documented maintenance work. Formal curriculum/native-Thai human review is not claimed, and browser/device presentation was not verified. These limits do not authorize changes to preserved content. Future edits should use the repository JSON and rerun the focused validator; the external recovery script must not overwrite reviewed changes inadvertently.
