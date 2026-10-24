# Domain 3 - Source review and coverage analysis

Reviewed: 2026-10-23 (Asia/Bangkok). Scope: source analysis only; no questions, vocabulary, or production changes.

**Original source-only readiness:** sufficient to begin carefully scoped question development after applying the corrections below; insufficient as the sole basis for comprehensive Domain 3 coverage. Both numbered objectives are represented, but frameworks/tools lack depth, ABAC is only named, and the official AI integration guidance is unsupported by the supplied course.

**Knowledge completion update - 2026-10-23:** the [verified bilingual knowledge map](domain-3-knowledge-map.md) supplements these gaps and records explicit issue dispositions. Its combined course/external baseline is **READY for comprehensive foundational question development** across all eight numbered-outline bullets and the additional official AI context. The six-explicit/two-partial counts below still describe the original course, not the supplemented map. The financial diagram's intended workflow and original course provenance remain unresolved and excluded from accepted reasoning. Question generation, item-level QA and later integration have not been performed.

## 1. Source inventory

Recursively inspected `D:\_Coding\SEC-CERT-TEST\ISC2 Update 2026\Domain 3`, including hidden entries: **18 input files, no subdirectories: 17 PNG images and one TXT transcript**. No PDFs, editable slides, audio/video, additional transcripts, or other documents were supplied. This report is an additional output, excluded from that count.

Read all 101 transcript lines / 34 timestamp blocks and visually inspected every PNG individually. Titles/content below come from inspection, not filename inference. Paths in the table are relative to this directory. `T` and `S01-S17` are evidence identifiers used throughout this report. Transcript references identify the supplied timestamp blocks, which overlap and should not be treated as precise independent clip boundaries.

| ID | File | Type / image dimensions | Inspected content and limitations |
| --- | --- | --- | --- |
| T | [DOMAIN 3.txt](DOMAIN%203.txt) | TXT, 17,748 bytes | Complete supplied transcript: introductory promotion, lifecycle, frameworks/tools, PoLP, SoD, models through RBAC, closing promotion. ABAC named only. |
| S01 | [Screenshot 2026-09-27 040241.png](Screenshot%202026-09-27%20040241.png) | PNG, 1914 x 1079 | Domain title and objective 3.1; fingerprint illustration is decorative, not a biometrics lesson. |
| S02 | [Screenshot 2026-09-27 040320.png](Screenshot%202026-09-27%20040320.png) | PNG, 994 x 1071 | Roles/responsibilities, five job-role examples, finance access versus network administration. |
| S03 | [Screenshot 2026-09-27 040530.png](Screenshot%202026-09-27%20040530.png) | PNG, 970 x 939 | Provisioning: account, unique identity, role, permissions, application access, credentials. |
| S04 | [Screenshot 2026-09-27 040655.png](Screenshot%202026-09-27%20040655.png) | PNG, 971 x 1014 | Periodic access review, excess privileges, unused/orphaned accounts, transfer example. Viewer overlays at margins; teaching text readable. |
| S05 | [Screenshot 2026-09-27 040713.png](Screenshot%202026-09-27%20040713.png) | PNG, 960 x 977 | Deprovisioning definition, four triggers and four actions; repeated in S06 with additional checkmarks. |
| S06 | [Screenshot 2026-09-27 040856.png](Screenshot%202026-09-27%20040856.png) | PNG, 974 x 1057 | Same deprovisioning content as S05; fuller bottom margin. Prefer this capture for reference. |
| S07 | [Screenshot 2026-09-27 041008.png](Screenshot%202026-09-27%20041008.png) | PNG, 971 x 928 | NIST SP 800-63 and NIST CSF purposes. Right end of CSF sentence clipped; T corroborates the explanation. |
| S08 | [Screenshot 2026-09-27 041224.png](Screenshot%202026-09-27%20041224.png) | PNG, 975 x 1079 | IAM capabilities and categories: directory services, identity providers, access management platforms. |
| S09 | [Screenshot 2026-09-27 041241.png](Screenshot%202026-09-27%20041241.png) | PNG, 964 x 1079 | PoLP definition, purpose, role assignment/reviews, benefits. Officially maps to 3.2 despite appearing before S10. |
| S10 | [Screenshot 2026-09-27 041405.png](Screenshot%202026-09-27%20041405.png) | PNG, 1908 x 692 | Objective 3.2 title; decorative image cropped. No additional instructional detail lost. |
| S11 | [Screenshot 2026-09-27 041553.png](Screenshot%202026-09-27%20041553.png) | PNG, 968 x 869 | SoD purpose, division of requests/approval/execution, enforcement, benefits. |
| S12 | [Screenshot 2026-09-27 041654.png](Screenshot%202026-09-27%20041654.png) | PNG, 889 x 998 | Financial SoD: purchasing, payment processing, reconciliation. Repeated text in S13. |
| S13 | [Screenshot 2026-09-27 041701.png](Screenshot%202026-09-27%20041701.png) | PNG, 1914 x 1013 | S12 text plus three-person request/approval/payment illustration; compare diagram and text ambiguity below. |
| S14 | [Screenshot 2026-09-27 041821.png](Screenshot%202026-09-27%20041821.png) | PNG, 874 x 1079 | Purpose of access models; lists DAC, MAC, RBAC, ABAC. Bottom close to edge, but ABAC name readable. |
| S15 | [Screenshot 2026-09-27 042014.png](Screenshot%202026-09-27%20042014.png) | PNG, 1891 x 1073 | DAC definition, tradeoffs, file-sharing example, owner-to-users/groups/object diagram. |
| S16 | [Screenshot 2026-09-27 042143.png](Screenshot%202026-09-27%20042143.png) | PNG, 927 x 1037 | MAC policy/labels/clearance, military example, tradeoffs; readable despite narrow crop. |
| S17 | [Screenshot 2026-09-27 042415.png](Screenshot%202026-09-27%20042415.png) | PNG, 890 x 1053 | RBAC definition, scalability/consistency, overbroad-role risk, HR/IT example. Right end of scalability line clipped; T corroborates. |

**Duplicates and quality:** all 18 inputs have distinct SHA-256 hashes. S05/S06 and S12/S13 are two content-repeat pairs, not additional lessons: 17 captures represent 15 distinct slide topics, including two title slides. Red annotations do not make any instructional slide wholly unreadable. No unrelated standalone file was found; the transcript's opening/closing promotional material is not instructional evidence. No dedicated ABAC explanation exists in either medium. No manifest or original recording is available to establish whether more course material originally existed. The penultimate transcript block ends at 00:23:37 while the closing block ends at 00:23:10; timing is internally inconsistent, not proof of missing content.

## 2. Official objective coverage matrix

Authority: the [ISC2 English outline effective September 1, 2026](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf), printed pp. 3 and 5, verified against the [official outline webpage](https://www.isc2.org/certifications/cc/cc-certification-exam-outline). The official domain name is **Identity And Access Management (IAM) Concepts**, weight **20%**; the task's alternate wording identifies the same domain. The webpage's introductory domain list retains older names, so use its dated numbered section and PDF.

Official objective titles are retained below; subtopic descriptions are paraphrased. The PDF provides eight bullets across two objectives, with no numbered 3.1.x/3.2.x subdivisions. Named models, frameworks, products and recertification terminology in the existing [project mapping](../../docs/plans/isc2-cc-2026/domain-mapping.md) are local elaborations, not additional literal ISC2 bullets.

Status: **Explicit** = substantively taught, not necessarily exhaustive or error-free; **Partial** = limited explanation; **Missing** = no instructional support. Academic corrections are a separate assessment in section 4.

| Official objective | Subtopic scope | Supplied evidence | Coverage assessment |
| --- | --- | --- | --- |
| **3.1 Understand identity life cycle management** | Define roles and associated responsibilities | S02; T blocks starting 00:01:23-00:03:33 | **Explicit.** Job functions and corresponding permissions; approval/administration/review ownership not developed. |
| 3.1 | Establish identities and grant initial access | S03; T 00:04:11, 00:04:51 | **Explicit.** Creation, assignment, applications, credentials; authorization workflow not explained. |
| 3.1 | Reassess existing access | S04; T 00:05:36-00:07:38 | **Explicit.** Periodic review, inappropriate/excess rights, privilege accumulation after transfers; reviewer, evidence and remediation verification unspecified. |
| 3.1 | Withdraw unnecessary access | S05-S06; T 00:07:38-00:08:56 | **Explicit.** Departures, role changes, contract expiry, account/app/group/privileged-access removal; completeness/timing unaddressed. |
| 3.1 | Supporting guidance and technologies | S07-S08; T 00:08:56-00:10:22 | **Partial.** Two guidance sources, capability list and three tool categories; little explanation of how categories differ or work together. |
| **3.2 Understand logical access controls** | Minimize granted privileges | S09; T 00:10:22-00:13:21 | **Explicit**, with an incorrect attribution inference in T. Definition includes systems as well as users. |
| 3.2 | Divide incompatible responsibilities | S11-S13; T 00:13:21-00:16:12 | **Explicit**, with overstatement about collusion and an inconsistent financial illustration. |
| 3.2 | Models for authorization decisions | S14-S17; T 00:16:12-00:22:20 | **Partial overall.** DAC, MAC and RBAC explained; ABAC only listed. Comparative selection needs qualification. |

**Result:** six of eight official bullets have explicit foundational teaching; two are partial; none is wholly absent at bullet level. Neither objective is fully covered in depth. These counts describe supplied teaching, not a measured percentage of exam readiness. The PDF does not enumerate DAC/MAC/RBAC/ABAC individually; the four-model breakdown is course/request scope within the broader models bullet.

The official webpage additionally has a Domain 3 AI integration explanation, distinct from the numbered PDF bullets:

| Additional official guidance | Source support | Assessment |
| --- | --- | --- |
| Lifecycle, least privilege and SoD applied to bots and service accounts | S09 mentions systems generically; other examples are employees | **Missing specific application**; generic PoLP is insufficient evidence of taught non-human lifecycle management. |
| AI-assisted authentication monitoring, MFA foundations, anomalous login/impossible-travel recognition | Authentication named in S08; decorative fingerprints in S01/S10 | **Missing explanation**; neither a capability name nor an illustration establishes coverage. |

These expectations come from the [webpage's Domain 3 AI section](https://www.isc2.org/certifications/cc/cc-certification-exam-outline), not invented numbered sub-objectives. The eight-page PDF has no corresponding AI teaching section.

## 3. Extracted knowledge summary

The following summarizes what the course actually teaches; it is not a vocabulary list. Apply section 4 before reuse.

- **Roles and responsibilities:** define job functions before granting access; reuse permission bundles for HR, network/database administration, security analysis and finance. A finance role does not automatically justify network administration. Roles support efficient, consistent assignment (S02, S17).
- **Lifecycle decisions:** create an account/identity, assign needed access, use and periodically review it, then remove unnecessary access. Transfers/promotions can require removing old entitlements while adding new ones. The finance-to-IT example illustrates privilege accumulation rather than a legitimate need to preserve all previous access (S03-S06).
- **Review targets and exit triggers:** excessive or inappropriate permissions, unused/orphaned accounts and role changes; termination, resignation and contract expiry trigger removal. Account disabling, application revocation, group cleanup and privileged-access removal are separate actions listed by the course (S04-S06).
- **Guidance and tooling:** NIST SP 800-63 is associated with identity proofing, authentication and federation; CSF with broader risk management. Directory services, IdPs and access platforms are named. Authentication, authorization, role/account management and lifecycle automation are capabilities, not interchangeable product names. Proofing and federation receive no actual mechanics lesson (S07-S08).
- **Least privilege:** give users and systems the access needed for their tasks, limit consequences of compromise/mistakes/insiders, and reassess permissions. Role assignment supports this only when role permissions are appropriately designed (S09, S17).
- **SoD:** split sensitive work and restrict conflicting privileges; requesting, approval, execution and reconciliation provide course examples. The rationale is limiting unilateral abuse and improving accountability (S11-S13).
- **Models:** DAC delegates resource-access choices to an owner; MAC applies centrally controlled policy/labels; RBAC connects permissions to organizational roles and users to those roles. The course links DAC to owner-controlled read/write sharing, MAC to classified documents, and RBAC to HR/IT functions and scalability. RBAC role design can itself be overpermissive (S14-S17).
- **Additional present themes:** confidentiality/sensitive-resource protection, insider and compromised-account risk, auditing/compliance and system stability as claimed benefits, consistent enforcement, and administrative tradeoffs. These are supporting rationales, not separately numbered Domain 3 requirements. ABAC has no taught decision rule or scenario (S09, S11, S14-S17).

## 4. Academic accuracy findings

References verify or qualify the source; externally supported additions remain supplements, not retroactive claims of course coverage. **Correction** indicates a materially misleading claim; **Qualification** indicates a useful explanation with important limits; **Unresolved** requires author clarification or replacement.

| Finding / supplied evidence | Assessment and disposition |
| --- | --- |
| **Orphaned equals unused** - T 00:06:53; S04 lists both separately | **Correction.** Inactivity concerns usage; orphaning concerns missing ownership/identity linkage or management. A transferred employee retaining finance access demonstrates stale entitlements, not necessarily an orphaned identity. Verified against the [federal ILM playbook](https://www.idmanagement.gov/playbooks/ilm/) and [Microsoft's inactivity guidance](https://learn.microsoft.com/en-us/entra/identity/monitoring-health/howto-manage-inactive-user-accounts). |
| **Provisioning is the first IAM step** - T 00:04:11 | **Qualification.** The course itself places role definition first. [NIST SP 800-53, AC-2](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf) specifies account managers, criteria and approval. Avoid universal FIRST answers. |
| **Identity is a username; credentials are username plus password** - T 00:04:11, 00:04:51 | **Correction.** A username identifies an account; it is not the complete digital identity or an authentication factor. Password login is one example, not the definition of every credential/authenticator. The [SP 800-63-4 series](https://pages.nist.gov/800-63-4/sp800-63.html) distinguishes identities, accounts and authenticators; [SP 800-63B-4](https://pages.nist.gov/800-63-4/sp800-63b.html) covers multiple authenticator types. Username plus password is not MFA. |
| **Review unused accounts and delete/disable them** - T 00:06:16 | **Qualification.** Check ownership and continuing need first. [AC-2](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf) recognizes infrequently used accounts of last resort. Disabling and deleting differ; the [ILM playbook](https://www.idmanagement.gov/playbooks/ilm/) addresses retaining records during deprovisioning. |
| **PoLP proves actions beyond privileges were not attributable to the account** - T 00:12:40, 00:13:21; S09 only claims easier auditing | **Correction.** Intended permissions do not prove actual behavior. Attribution requires activity evidence. This is an audit inference from [AC-6 and the AU control family](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf); PoLP alone cannot establish innocence or prevent every compromise. |
| **SoD prevents fraud; all three must collaborate** - S11-S13; T 00:16:12 | **Correction.** [AC-5](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf) describes reduced unilateral abuse, not elimination of fraud. The number of necessary colluders depends on the workflow and effective authorizations. |
| **Financial SoD illustration** - S12/S13 | **Unresolved instructional ambiguity.** Text gives approval and payment issuance to employee two and reconciliation to employee three; the diagram instead depicts request, approval and payment across three people. Neither proves a universally correct accounting design. Use only the explicit initiator/approver conflict until the workflow is clarified; do not infer that all financial implementations require three or four people. |
| **DAC lacks central enforcement; DAC is less secure / MAC highly secure** - S15-S16; T 00:17:42-00:19:06 | **Qualification/correction.** DAC's delegated permission-setting authority still requires system enforcement. MAC's policy authority restricts ordinary owners' discretion. Security suitability depends on requirements, policy and implementation; the definitions do not establish an unconditional ranking. See NIST's [DAC](https://csrc.nist.gov/glossary/term/discretionary_access_control) and [MAC](https://csrc.nist.gov/glossary/term/mandatory_access_control) definitions. Linux file permissions are a DAC example, not proof that Linux cannot also use MAC. |
| **Clearance alone permits classified access; users cannot change permissions** - S16; T 00:19:06-00:19:42 | **Qualification.** Ordinary users cannot override mandatory policy; authorized policy administration still exists. In the US classified example, clearance alone is insufficient: need-to-know also matters ([Executive Order 13526, section 4.1](https://www.archives.gov/isoo/policy-documents/cnsi-eo.html)). Do not generalize a military illustration into every MAC implementation. |
| **Same role guarantees identical total access; RBAC ensures least privilege** - T 00:21:43; S09/S17 | **Qualification.** Shared role permissions are consistent, but total effective access can vary through other assigned/activated roles and constraints. Poor role design can overgrant. NIST's [RBAC FAQ](https://csrc.nist.gov/projects/role-based-access-control/faqs) distinguishes role assignment, session activation and constraints. Treat role-based assignment as a mechanism, not automatic proof of PoLP or SoD. |
| **NIST SP 800-63 and CSF described as IAM frameworks** - S07 | **Verified scope, with qualification.** SP 800-63-4 is digital identity guidance on proofing/authentication/federation, not a comprehensive enterprise authorization or IGA standard. Revision 4 was finalized in July 2025; the course gives no revision. [CSF 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf) is a broader outcome framework; PR.AA-01/05 connect identity/access management with review, PoLP and SoD. These references are guidance, not IAM software. |
| **ABAC named but unexplained** - S14; T 00:16:59 | **Coverage gap, externally verifiable.** [NIST SP 800-162](https://csrc.nist.gov/pubs/sp/800/162/upd2/final) evaluates subject/resource/action attributes and, where relevant, environmental conditions against policy. This is supplemental verification, not a recovered course lesson. |
| **Transcript reliability** - throughout T | **Editorial finding.** Examples include “that is that” for DAC, “a back” for ABAC, “are” where “or” is intended, and repeated “database.” S14-S17 resolve model names. Overlapping/inconsistent timestamps and missing audio prevent exact spoken-word verification; preserve original T and use concept-level citations. |

## 5. Coverage gaps and unresolved issues

- **Required supplementation:** substantive ABAC instruction and comparison; practical distinctions among IAM tools; the official AI/service-account/MFA/anomalous-login context described in section 2. An anomaly is a signal requiring assessment, not automatic proof of compromise; [SP 800-63B-4, section 5.3](https://pages.nist.gov/800-63-4/sp800-63b.html) supports monitoring and possible responses. AI is not itself an additional authentication factor.
- **Insufficient lifecycle depth for detailed decisions:** who authorizes versus implements access, who reviews it, what authoritative change triggers a review, documenting decisions and checking remediation. Immediate role-change adjustment versus a later periodic review needs explicit treatment. Review intervals and revocation deadlines are organization/risk dependent; no universal numeric values are supplied.
- **Deprovisioning completeness:** application-local access, active sessions, tokens/keys and non-human dependencies are not explained. Do not assume disabling a directory account automatically revokes every downstream session. [SP 800-63B-4, section 5.2](https://pages.nist.gov/800-63-4/sp800-63b.html) explicitly distinguishes independently managed federated sessions.
- **Names without sufficient teaching:** authentication versus authorization; proofing; federation; directories versus IdPs. SSO appears in the project mapping but is not taught in these inputs. These may support later supplementation; their absence does not create extra official numbered objectives.
- **Unresolved provenance/completeness:** no instructor identity, course URL, original audio/video, source manifest or editable deck. Cannot determine whether an ABAC slide was omitted from capture or never produced. The financial SoD diagram/text conflict remains unresolved. Several source assertions need correction before reuse.
- **Scope boundary:** the 2026 numbered Domain 3 outline does not retain a separate physical-access objective. Missing locks, guards and physical-entry lessons are not a numbered Domain 3 gap. Cross-domain prerequisites may be referenced later without modifying Domains 1 or 2. Advanced federation protocols, product configuration and formal access-control model mathematics are not justified as mandatory additions by this source set.

## 6. Question-development opportunities

No questions, answer choices or vocabulary are generated here. These are assessment targets for later independent educational items, not claims about actual ISC2 exam items.

| Target / evidence | Suitable reasoning and misconception to assess | Authoring condition |
| --- | --- | --- |
| Joiner setup / S02-S03 | BEST role-aligned access; distinguish business need, authorization and technical account creation | Clarify approval responsibilities before procedural FIRST items. |
| Transfer/promotion / S04-S06 | Identify privilege accumulation; select entitlement removal and appropriate new access rather than retaining every prior permission | Do not label every transfer an orphaned account or disable all legitimate access. |
| Departure/contract expiry / S05-S06 | Select prompt authorized deprovisioning; distinguish account, app, group and privileged-access actions | State policy/timing; avoid universal deletion or guaranteed downstream revocation. |
| Access review / S04 | MOST appropriate response to unjustified access; distinguish investigation, approval and actual remediation | Supply reviewer authority and current business need; avoid arbitrary review intervals. |
| Least privilege versus SoD / S09, S11-S13 | Distinguish reducing one identity's access from preventing the same person initiating and approving sensitive work | Resolve the financial workflow; recognize that both principles can apply together. |
| DAC/MAC/RBAC selection / S14-S17 | Owner delegation, mandatory labels/policy, or job-function permissions; choose based on stated requirements | Use defining decision criteria, not “military,” “admin,” or “most secure” as shortcuts. |
| Model/permission design / S09, S17 | Recognize an overbroad role despite consistent assignment; distinguish role membership from total effective privileges | Avoid implying RBAC alone guarantees minimal access. |
| Framework/tool purpose / S07-S08 | Distinguish guidance, directory, IdP and access platform according to purpose | Supplemental explanation needed before multi-step tool-selection scenarios. |
| ABAC and automated identities / source gaps | Attribute/context decisions; bot/service-account ownership, reviews and revocation; anomalous-login/MFA interpretation | Hold until authoritative supplementary teaching is added and reviewed. |

Plausible distractor concepts include retaining old access after promotion, treating a username as a second factor, equating inactivity with orphaning, assuming authentication grants authorization, choosing MAC solely because it sounds stricter, and assuming three people eliminate fraud. They require clearly stated scenario constraints so that one answer is defensible. FIRST items especially need a known trigger, actor authority and process stage; do not invent a universal operational sequence from this brief course.

## 7. Recommended next actions

1. Use this report's correction findings to curate the taught concepts; retain the original sources unchanged. Resolve or replace the ambiguous financial workflow and annotate transcript errors in later authored explanations.
2. Supplement the identified gaps from the linked official ISC2/NIST guidance, clearly labeling external support. Keep the explanation at CC depth; prioritize ABAC, tool responsibilities, non-human identity lifecycle and foundational authentication monitoring.
3. Begin later question development with supported lifecycle, PoLP, SoD and DAC/MAC/RBAC scenarios, using the qualifications above. Expand to gap topics only after supplemental teaching is reviewed. Keep claim-level evidence for answer rationales and review distractors for technical ambiguity; set no arbitrary question quota.
4. Before any future bank integration, inspect repository IDs and conventions. No next question ID was selected in this review. Vocabulary remains a separate task after question creation.

**Change boundary:** the original source-review task created this report only. The subsequent knowledge-completion task adds the linked knowledge map and updates this readiness note. Existing legacy questions, Domain 1/2 content, production banks, vocabulary, quiz engine and UI are outside scope. External references were read for verification; browser automation was not used.
