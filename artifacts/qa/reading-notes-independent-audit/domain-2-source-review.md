# Domain 2 independent source and educational review

Reviewed 2026-10-31. Scope: source content and semantic correctness; no browser or screenshot acceptance is claimed. No production files, tests, or prior audit artifacts were changed. Prior reports were not used as proof.

## Coverage and method

Inspected **29/29 subsections**: 6 under 2.1, 8 under 2.2, 6 under 2.3, 8 under 2.4, and the domain review subsection. Read the complete 777-line `content/isc2-cc-2026/reading/domain-2.md`, `domain-2.js` metadata/objectives, all 12 scenarios in both Markdown and `domain-2-scenarios.js`, and the four relevant `js/core/diagram-generator.js` templates (`grcAlignment`, `bcVsDrScope`, `rtoRpoTimeline`, `effectivenessHierarchy`, lines 1405–1874), including desktop and mobile text. Read all 12 concept distinction cards and all 17 exam-trap rules. English/Thai meaning, examples, scope, exam authority claims, and diagram relationships were checked.

The official September 1, 2026 PDF confirms the Domain 2 title, 17.3% weight, four objective names, and high-level topics. The detailed 2.x.x subdivision is local teaching organization, not official ISC2 objective numbering. All four official objective families are covered. [Official ISC2 PDF, pp. 3 and 5](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf).

Severity: P0 critical, P1 major, P2 substantive educational correction, P3 minor clarity/terminology improvement. Confidence describes evidence strength, not impact. “Nuance” does not mean the entire lesson or scenario answer is false. No P0/P1 was found in this source review.

## Findings

### D2-01 — P2 — RTO mnemonic needs a clearer boundary from MTD (nuance; high confidence)

Locations: `domain-2.md:164–168, 203–207, 537, 639, 672–674`; `domain-2-scenarios.js:28–30`; `diagram-generator.js:1622, 1640–1642, 1676`.

Excerpts: “**Maximum Acceptable Downtime**”; “**RTO ≤ MTD**”; “ระยะเวลาสูงสุดที่ระบบยอมให้หยุดทำงานได้”.

The prose distinguishes system recovery from business tolerance, which is useful. However, repetitive maximum-downtime answer triggers and the inequality risk teaching RTO and MTD as interchangeable limits. The inequality alone is a necessary planning bound, not sufficient proof of a viable recovery plan. NIST explains that RTO normally needs to be shorter than MTD to leave time for business reprocessing. [NIST SP 800-34r1, §3.2.1, printed p.17](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf#page=31), [NIST RTO glossary](https://csrc.nist.gov/glossary/term/recovery_time_objective).

Recommended teaching: RTO = “เป้าหมายระยะเวลาที่ต้องกู้คืนระบบหรือบริการให้พร้อมใช้งาน”; MTD = business disruption tolerance. Explain that technical restoration and restoring the business process can require different amounts of time. Preserve the 17:00→18:00 arithmetic. Scenario 2 still has RTO as its best answer because its situation explicitly sets a restoration target; amend its reasoning and the universal exam-trap rule. Do not replace this with another unsupported absolute that equality is mathematically impossible in every model.

### D2-02 — P2 — MTD is overstated as irreversible damage/organizational collapse (confirmed error; high confidence)

Locations: `domain-2.md:164, 167`.

Excerpts: “ก่อนจะเกิดความเสียหายที่ไม่อาจฟื้นคืนได้”; “องค์กรจะล่มสลายก่อนที่ระบบ IT จะกู้คืนเสร็จสิ้น”.

MTD is a tolerance threshold for significant mission/business harm; it does not require irrecoverable damage or organizational collapse. These categorical Thai statements make the definition unnecessarily extreme. Use “ก่อนเกิดผลกระทบเกินระดับที่องค์กรยอมรับได้” and explain the consequence of missing a recovery target without predicting certain collapse. [NIST MTD glossary](https://csrc.nist.gov/glossary/term/maximum_tolerable_downtime).

### D2-03 — P2 — Modern password baseline should be qualified and refreshed (outdated recommendation; high confidence)

Location: `domain-2.md:327`.

Excerpt: “Passphrase ที่มีความยาว ≥ 14 ตัวอักษร”.

An organization can select a 14-character policy in a particular context, so this is not universally an invalid password. But as unqualified modern guidance in 2026, it misses the current NIST distinction: at least 15 characters for single-factor passwords; at least 8 may be permitted when the password is only part of MFA. Label the governing standard and context. [NIST SP 800-63B-4, §3.1.1.2](https://pages.nist.gov/800-63-4/sp800-63b.html#passwordver).

### D2-04 — P2 — “Metric = raw value” hierarchy misclassifies KPI/KRI (confirmed conceptual error; high confidence)

Locations: `domain-2.md:441`; `diagram-generator.js:1704, 1789–1792, 1864–1869`.

Excerpts: “Raw measurable value”; “ค่าดิบเชิงปริมาณ”; “Quantifiable Raw Value”.

The earlier definition at line 357 is broader and better. A metric need not be raw data; a calculated rate, ratio, or average is also a metric. KPIs and KRIs are types of metrics, not a separate ontological stage above metrics. Redraw the memory aid as measurements/data feeding metrics (including KPI/KRI), then communication formats. Explicitly label it a teaching aid rather than a canonical six-step framework. [NIST SP 800-55v1, §2.4, printed pp.9–11](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-55v1.pdf#page=16).

### D2-05 — P2 — MTTR exam-specific definition is unsupported and its endpoint ambiguous (authority/definition nuance; high confidence)

Locations: `domain-2.md:374–376`.

Excerpts: heading “Mean Time to Respond / Remediate”; “ตามบริบทในสไลด์และเนื้อหาการสอบ ISC2 CC”; “เริ่มดำเนินการตอบสนอง”.

The body correctly acknowledges multiple expansions. The problem is asserting an ISC2-specific answer convention without a traceable official source, and grouping response initiation with remediation. The public outline does not define MTTR. A primary operational example explicitly separates acknowledgement from remediation and uses different timestamps. Define the expansion, start event, and end event used in an example; avoid claiming the exam universally prefers the initiation-only interpretation. This review does **not** establish that “Mean Time to Respond” is always wrong. [Official outline](https://www.isc2.org/certifications/cc/cc-certification-exam-outline), [Microsoft incident-response overview](https://learn.microsoft.com/en-us/security/operations/incident-response-overview).

### D2-06 — P2 — BC/DR diagram translates DR as a plan (confirmed bilingual mismatch; high confidence)

Locations: `diagram-generator.js:1542, 1577`; contrast `domain-2.md:508–513`.

Excerpts: “DISASTER RECOVERY (DR) — แผนกู้คืนระบบเทคโนโลยีสารสนเทศ”; “แผนกู้คืนระบบ IT โครงสร้างพื้นฐาน และข้อมูล”.

“แผน” changes DR into DRP, undermining the explicit distinction taught in the review. Use “การกู้คืนระบบ…” for DR; reserve “แผนการกู้คืน…” for DRP. BC as the wider organizational concern and IT recovery supporting it is a reasonable introductory teaching model; no wholesale rejection of the nested diagram is warranted. [NIST SP 800-34r1, §2.2.1 and §2.2.6](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf#page=22).

### D2-07 — P2 — Phishing comparison implies mutually exclusive categories (misleading taxonomy; high confidence)

Locations: `domain-2.md:308–310, 564–583`; `domain-2-scenarios.js:70`.

Excerpts: “Phishing … ไม่เจาะจงเป้าหมายในวงกว้าง”; “Spear Phishing … บุคคลทั่วไป”; “ซึ่งต่างจาก Spear Phishing”.

The individual target/channel examples are sound. Clarify the nesting: phishing is the broader family; spear phishing is targeted phishing; whaling is spear phishing against senior/high-profile targets. Use “bulk/generic phishing” for the non-targeted column. Scenario 7 remains correctly answered by the most specific term, whaling, but should not imply that executive attacks cease to be spear phishing. [CISA phishing types](https://www.cisa.gov/sites/default/files/2024-02/Update%20to%20Phishing%20General%20Security%20Postcard_01.01.2024.pdf), [Canadian Centre for Cyber Security, threat-environment introduction](https://www.cyber.gc.ca/en/guidance/introduction-cyber-threat-environment).

### D2-08 — P3 — Thai “เมทริกซ์” repeatedly means matrix rather than metric (confirmed terminology defect; high confidence)

Locations: `domain-2.md:359, 402, 731–734, 764`; `domain-2-scenarios.js:75–78, 102`.

Excerpts: “ลักษณะของเมทริกซ์ความปลอดภัย”; “KRI คือเมทริกซ์”.

Use “ตัวชี้วัด” consistently, or “เมตริก” if a transliteration is needed. “เมทริกซ์” suggests a matrix, creating needless collision with actual risk/keyword matrices. The English concept under review is metric, as the source itself identifies at line 357. This is a bilingual editorial conclusion, not a claim that an external source mandates one exclusive Thai spelling. NIST’s definitions provide the English semantic reference. [NIST SP 800-55v1 glossary](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-55v1.pdf#page=34).

### D2-09 — P2 — Current ISC2 supplemental AI guidance is only partly represented (verified coverage gap; high confidence)

Locations: `domain-2.md:320` is the sole explicit AI teaching; relevant insertion points are §§2.2.7, 2.3.3, 2.4.4 and review scenarios.

The official live outline page supplements the PDF with Domain 2 AI guidance covering AI service configuration/dataset backups, model drift as a BC/DR risk, AI-specific KRIs, and practitioners following playbooks for initial triage. The notes cover deepfake voice but omit these other applications. Add a compact example of each, with an explicit source date. This is a gap against the current **supplemental web guidance**, not a claim that the numbered PDF contains extra mandatory objectives. [ISC2, “How is AI Security Incorporated into the CC Domains?”, Domain 2](https://www.isc2.org/certifications/cc/cc-certification-exam-outline).

### D2-10 — P3 — Checklist review and tabletop exercise are collapsed (nuance; high confidence)

Location: `domain-2.md:252`.

Excerpt: “การตรวจทานเอกสาร (Checklist / Tabletop Exercise)”.

A checklist/document review and a scenario-led tabletop discussion are related but different activities. Give each its own short description; a tabletop exercises decisions and roles without requiring live failover. The rest of the testing rationale is sound. [NIST SP 800-84](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-84.pdf).

### D2-11 — P3 — Hot-site attributes and recovery times should be examples, not guarantees (nuance; high confidence)

Locations: `domain-2.md:233–242`.

Excerpts: “ข้อมูลที่ซิงโครไนซ์แบบเกือบ Real-time พร้อมใช้งานทันที”; “หลายชั่วโมงถึง 1–2 วัน”.

Near-real-time synchronization is a possible hot-site implementation, not a universal guarantee. Site readiness labels alone cannot guarantee the listed recovery windows. Add “โดยทั่วไป/ตัวอย่าง” and state that tested design and dependencies establish actual recovery capability. The relative readiness/cost ordering is suitable for introductory study. [NIST SP 800-34r1, §§3.4.3 and 5.1.5](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf#page=36).

### D2-12 — P3 — Password verifier storage wording mixes encryption with hashing (nuance; high confidence)

Location: `domain-2.md:328`.

Excerpt: “รหัสผ่านที่จัดเก็บด้วยการเข้ารหัสและการแฮชร่วมกับ Salt”.

For login verifiers, say salted password hashing with an appropriate cost factor; describe encryption as transport protection or an additional layer if intended. The present wording is ambiguous, not proof that the author advocates reversible encryption alone. Also qualify line 333’s “ไม่สามารถถูกดักขโมย” as resistance to phishing of the authentication exchange, rather than an unlimited claim that all endpoint/session compromise is impossible. [NIST SP 800-63B-4, §§3.1.1.2 and 3.2.5](https://pages.nist.gov/800-63-4/sp800-63b.html).

## Per-subsection review ledger — 29 inspected

Each line range refers to `content/isc2-cc-2026/reading/domain-2.md`. “Sound” means no substantive source defect identified in that subsection; it is not browser acceptance.

| # | Subsection / lines | Review status and observations |
|---|---|---|
| 1 | 2.1.1 GRC foundations, 9–38 | Sound. Governance direction/oversight/accountability, risk assessment/treatment, and legal/contractual/internal-policy compliance are differentiated. Thai meaning tracks English. Diagram’s three pillars support business objectives; arrows are acceptable as coordination but should not imply a compulsory one-way lifecycle. |
| 2 | 2.1.2 GRC purpose, 40–50 | Sound. Seven practical benefits explain why coordination helps. “Centralize” is a tool/organizational option, not the universal definition of GRC; optional editorial refinement. |
| 3 | 2.1.3 GRC importance, 52–59 | Sound. CIA, resilience, assets and penalties supply appropriate motivation. “Prevent” should be read as reducing exposure, not a guarantee of no incidents. |
| 4 | 2.1.4 Frameworks/standards, 61–79 | Sound with provenance recommendation. CSF’s six functions include Govern; ISO 27001 is correctly an ISMS requirements standard; COBIT correctly concerns enterprise I&T governance/management. Do not report the expansion at line 71 as a confirmed error: current ISACA page title itself uses that wording. Examples of GDPR/HIPAA/PCI DSS/SOX/CMMC are high-level context, not jurisdiction-specific implementation advice. “ออกสอบบ่อยที่สุด” at line 65 lacks public evidence; say “ตัวอย่างสำคัญ”. |
| 5 | 2.1.5 GRC tools, 81–89 | Sound. Risk registers, policies, compliance, controls and audit evidence are realistic capability categories. Real-time status depends on integration/freshness; optional wording qualification. |
| 6 | 2.1.6 Risk register, 91–118 | Sound. Threat/vulnerability, likelihood/impact, response, owner and residual risk are separated. Ownership callout correctly distinguishes accountability from implementation. The IT Manager/CISO example is possible, not a requirement that IT always owns business risk. Optional addition: due dates and review cadence. |
| 7 | 2.2.1 BC foundations, 128–144 | Sound. Broad people/process/facility/supplier/technology scope and disruption examples are appropriate. “Keep running” is a memory aid; BC can continue at a predefined acceptable reduced level rather than zero interruption in all services. |
| 8 | 2.2.2 BCP, 146–157 | Sound. Plan is distinguished from capability; dependencies, communications and alternatives are concrete. Optional inclusion of activation/escalation criteria, exercises and maintenance; list does not claim exhaustive standard compliance. |
| 9 | 2.2.3 BIA, 159–168 | Correction: D2-01 and D2-02. BIA connects business impacts/priorities to recovery requirements. RPO should primarily express business data-loss tolerance; line 168’s technical change rate/backup capability are feasibility/design factors, not substitutes for the business requirement. |
| 10 | 2.2.4 DR/IT scope, 170–179 | Sound introductory IT-focused distinction. Recovery should be safe, not merely fast; text explicitly says safe. Line 179’s absolute claim that modern business cannot operate without IT can be softened since manual workarounds are subsequently taught. AI service restoration example would address D2-09. |
| 11 | 2.2.5 BC versus DR, 181–195 | Mostly sound; diagram bilingual correction D2-06. Wider BC and supporting IT recovery are suitable educational scope distinctions. Table contrasts are emphases, not strict timing partitions: DR can be activated during an ongoing disruption. |
| 12 | 2.2.6 RTO/RPO, 197–224 | Correction/nuance D2-01. Recovery deadline and data-loss look-back arithmetic are correct. RPO is a target, while latest usable backup is evidence of achievable recovery; the two are not inherently identical. Replication/log replay can also satisfy the target. |
| 13 | 2.2.7 DRP/backups/sites, 226–243 | Nuance D2-11 and coverage D2-09. Hot/warm/cold comparative readiness is useful. Off-site/cloud placement does not alone ensure safe usable backups; optional restore verification, independent/immutable copies and dependency examples would improve practice. |
| 14 | 2.2.8 Tests/exercises, 245–252 | Nuance D2-10. Clear motivation for testing roles, feasibility and maintenance. Add testing actual restoration against RTO/RPO and recording lessons learned as educational enrichment. |
| 15 | 2.3.1 Security culture, 262–269 | Sound. Shared responsibility and reporting suspicious mail are concrete and constructive. Reporting route can follow local policy rather than assuming every organization has a SOC. |
| 16 | 2.3.2 Leadership/accountability, 271–279 | Sound. Resources, participation, example-setting and good-faith reporting encourage usable culture. No punitive or unsafe recommendation found. |
| 17 | 2.3.3 Awareness/training/education, 281–287 | Sound. Recognition, role-specific skills and deeper conceptual study are distinguished. Optional example of repeated campaigns/feedback, plus the new AI threat training/playbook context in D2-09. |
| 18 | 2.3.4 Social engineering psychology, 289–300 | Sound. Human manipulation and plausible trust/fear/urgency/authority/greed/helpfulness examples. Six mechanisms are a teaching selection, not an exhaustive psychological taxonomy. |
| 19 | 2.3.5 Social engineering techniques, 302–320 | Clarify taxonomy D2-07. Vishing, smishing and pretexting definitions are good; pretext/channel overlap is explicitly acknowledged. AI voice example is relevant. Recommend an actionable response: verify through a known channel and report, never disclose a password/OTP. |
| 20 | 2.3.6 Password/authentication, 323–333 | Refresh D2-03 and qualify D2-12. Least privilege, monitoring and phishing-resistant public-key authentication are useful. Optional password manager, reuse avoidance and compromise-driven changes would strengthen everyday awareness. Avoid presenting 14 as a universal current standard. |
| 21 | 2.4.1 Measurement rationale, 343–353 | Sound. Controls, trends, investment decisions and communications are connected. Line 341’s maxim is rhetorical: some judgments can be qualitative rather than numeric. |
| 22 | 2.4.2 Metric characteristics, 355–364 | Sound main definition; Thai defect D2-08. Relevance, clarity, consistency and audience are appropriate. Diagram line 1792 should mean repeatable method, not identical results every time; real security values can change. |
| 23 | 2.4.3 MTTD/MTTR, 366–376 | Nuance D2-05. MTTD start/end description is reasonable; lower detection time is useful but not alone evidence of detection quality. Add a defined sample population and interval example; no arithmetic exercise currently verifies the average. |
| 24 | 2.4.4 KPI/KRI, 378–398 | Core purpose distinction sound. Patch/training performance examples and unprotected privileged-account exposure examples are plausible. KRIs can track current/lagging exposure as well as leading warnings; same underlying measure may serve both roles depending on purpose. Avoid a rigid mutually exclusive classification. AI-specific example would address D2-09. |
| 25 | 2.4.5 Dashboard, 400–406 | Sound prose, Thai defect D2-08. Rapid visual interpretation is appropriate; dashboards need not always refresh in real time. Treat real-time as a common operational implementation, not the defining criterion. |
| 26 | 2.4.6 Scorecard, 408–423 | Sound. Actual/target/status examples are internally consistent: 91<95, 97<100, 98≥95, 12 is not <10. Numbers are instructional targets, not universal security thresholds. A dashboard can embed a scorecard, so the formats are not exclusive. |
| 27 | 2.4.7 Report, 425–431 | Sound. Findings/recommendations and audience linkage are useful. Reports can also be short, operational or automated; “formal detailed executive document” is an example rather than an exhaustive definition. |
| 28 | 2.4.8 Six-part memory aid, 433–446 | Correction D2-04. Metric/raw-data narrowing contradicts the broader earlier definition. Diagram must show type membership and presentation options rather than imply a mandated hierarchy. KPI/KRI example purposes otherwise work; mark triggers as clues, not unconditional answers. |
| 29 | Domain review/practical analysis, 456–777 | Fully inspected all distinction cards, 17 exam rules and 12 scenarios. Repeats D2-01/D2-07/D2-08. Good coverage of GRC, BC/DR and measurement formats; lacks a direct MTTD/MTTR exercise despite scenario module header and lacks AI continuity/KRI practice. Scenario-specific ledger follows. |

## Scenario review — 12/12 in both representations

| Scenario | Markdown lines / JS ID | Assessment |
|---|---|---|
| 01 BC | 657–665 / 1 | Correct best answer: alternate work location preserves business operations. No evidence that activity should primarily be called IT disaster recovery. Optional reduced-service qualification. |
| 02 RTO | 667–675 / 2 | Correct target identification; fix maximum-downtime reasoning using D2-01. Restore-within-2h situation is sufficient to select RTO. |
| 03 RPO | 677–685 / 3 | Correct 15-minute data-loss tolerance and required recovery point. Backup/replication must be demonstrably recoverable, not merely frequent. |
| 04 Register | 687–695 / 4 | Correct register identification from fields. Risk owner/treatment explanation is suitable. |
| 05 ISO 27001 | 697–705 / 5 | Correct ISMS requirements/certification distinction from CSF and COBIT; no framework mix-up found. |
| 06 Vishing | 707–715 / 6 | Correct channel classification; also involves pretext/authority/urgency. Add safe handling as a practice recommendation. JS’s generic-email contrast should not define all phishing as email-only. |
| 07 Whaling | 717–725 / 7 | Correct most-specific label because CFO is target; JS reasoning’s exclusionary spear-phishing contrast needs D2-07. |
| 08 KRI | 727–735 / 8 | Correct exposure-warning use. Increasing count needs population context in a real dashboard; that does not invalidate the stated learning scenario. Fix Thai metric term. |
| 09 KPI | 737–745 / 9 | Correct performance-target use. 95%/15 days are illustrative organization goals. Prefer Thai “ตัวชี้วัดผลการดำเนินงานสำคัญ” over “ประสิทธิภาพ” if avoiding efficiency/effectiveness confusion. |
| 10 Scorecard | 747–755 / 10 | Correct actual-versus-target comparison; 91% versus 95% justifies needs improvement. |
| 11 Dashboard | 757–765 / 11 | Correct visual operational screen example. Real-time is appropriate here; do not infer all dashboards must be real-time. Fix Thai metric term. |
| 12 Report | 767–775 / 12 | Correct annual narrative/recommendations format. Executive report can incorporate dashboard and scorecard material. |

The two scenario representations have minor wording/topic-label differences but no additional answer disagreement was identified. Header at `domain-2-scenarios.js:11` advertises MTTD/MTTR coverage that the 12 actual scenarios do not contain; this is a P3 documentation/coverage recommendation, not evidence of a wrong scenario answer. Scenario answers contain no cited assertion of real leaked exam questions.

## Source validation and non-findings

References below were checked during this review, not inferred from old reports. All were directly opened successfully except the CISA PDF: indexed text was returned by search, but direct retrieval returned HTTP 403. The directly opened Canadian government page independently verifies the taxonomy finding. The NIST 800-84 PDF's scenario-led, discussion-only tabletop definition was verified directly. Links are primary publishers or government security agencies.

- [Official ISC2 outline PDF, effective September 1, 2026](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf): authoritative high-level scope/weight. Does not publicly prescribe one MTTR expansion or prove that a particular framework is most frequently examined.
- [ISC2 live exam outline and AI integration guidance](https://www.isc2.org/certifications/cc/cc-certification-exam-outline): distinct supplemental context for D2-09. Its top introductory legacy domain list conflicts with its detailed current table; this review used the detailed table and current PDF.
- [NIST SP 800-34r1](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf): recovery objectives, planning and site nuances. Relative site descriptions are accepted; literal universal time promises are not established.
- [NIST MTD glossary](https://csrc.nist.gov/glossary/term/maximum_tolerable_downtime), [NIST RTO glossary](https://csrc.nist.gov/glossary/term/recovery_time_objective): checked directly to keep business harm and system recovery distinct.
- [NIST SP 800-63B-4](https://pages.nist.gov/800-63-4/sp800-63b.html): current password length, verifier storage and phishing resistance. This is a scoped standard, not a universal legal mandate for all organizations.
- [NIST SP 800-55v1, final December 2024](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-55v1.pdf): metric/type relationships and indicators. Used the final publication, not the draft search result. KPI/KRI purposes are broadly sound, but the raw-data restriction is not.
- [NIST SP 800-84](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-84.pdf): review/tabletop/exercise distinction.
- [ISO 27001 publisher page](https://www.iso.org/standard/27001): confirms ISMS requirements/continual improvement. No false claim that ISO itself must be the certifying body appears in the notes.
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework), [CSF 2.0 publication, §2.1](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf#page=8): purpose and six function names checked directly; the notes' function list is accepted.
- [ISACA COBIT](https://www.isaca.org/resources/cobit): enterprise information/technology governance and management confirmed. Historical acronym variants were deliberately **not** promoted to a finding because current official publisher wording matches the note’s expansion.
- [CISA phishing postcard](https://www.cisa.gov/sites/default/files/2024-02/Update%20to%20Phishing%20General%20Security%20Postcard_01.01.2024.pdf): indexed text only; direct fetch blocked by HTTP 403. [Canadian Centre for Cyber Security](https://www.cyber.gc.ca/en/guidance/introduction-cyber-threat-environment): directly retrieved; independently supports targeted taxonomy and the nesting of whaling within spear phishing.
- [Microsoft incident-response overview](https://learn.microsoft.com/en-us/security/operations/incident-response-overview): primary product/operational documentation demonstrates explicitly named acknowledgement/remediation intervals. It does not establish ISC2 exam terminology.

## Limits and conclusion

This is a complete independent source review of the 29-subsection Domain 2 reading artifact, not a visual/browser sign-off or a full question-bank audit. No live rendering, translation-toggle behavior, navigation, accessibility interaction, or responsive clipping was tested here. Thai/English terminology judgments are stated as editorial semantic conclusions where no official Thai glossary was consulted. External publisher pages were validated for the concerns described; detailed jurisdiction-specific GDPR/HIPAA/SOX/CMMC obligations were not assessed because the notes present no implementation rules or legal thresholds.

The core 2026 domain alignment and most explanations are sound. The clearest corrections concern the MTD catastrophe wording, metric/raw-data taxonomy, DR/DRP diagram translation and Thai metric terminology. RTO, MTTR, site timings, password storage and current AI additions require the scoped qualifications above. Recommendations are not all equivalent to confirmed factual errors, and no claim of perfect completeness or visual acceptance follows from this report.
