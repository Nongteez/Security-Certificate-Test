# Domain 3 — 2026 Coverage and Scope Matrix

Date:2026-10-30. **Planning only.** “Supported” below means source material is available for reviewed authoring, not that a lesson exists or human acceptance is complete. Current catalog:Domain 3 has two empty objectives and no published/staged lessons. [Inventory and reference register](domain-3-source-inventory.md) defines N/U/T/S/K/O/R codes. [Roadmap](domain-3-learning-roadmap.md) supplies every proposed slide.

## Verified scope

Official title: **Identity And Access Management (IAM) Concepts**;20% weight. Objective titles: **3.1 Understand identity life cycle management**; **3.2 Understand logical access controls**. Authority:[ISC2 2026 PDF, printed 3/5](https://edge.sitecorecloud.io/internationf173-xmc4e73-prodbc0f-9660/media/Project/ISC2/Main/Media/documents/exam-outlines/2026/EXAMS-CC_Exam_Outline-English-Revised-01-2026-Final.pdf), verified against the [dated official webpage](https://www.isc2.org/certifications/cc/cc-certification-exam-outline).

Eight bullet requirements are represented below in paraphrase. `C01–C08` are **local coverage keys**, never official 3.1.x/3.2.x numbers. The official PDF does not enumerate the four individual model names, particular NIST documents or vendor products under its broad bullets.

| Key / official objective | Required outcome, paraphrased | Primary teaching evidence | Source sufficiency and correction | Proposed lesson / slide ownership | Implementation |
|---|---|---|---|---|---|
|C01 /3.1|Relate role definitions to work and responsibilities|N§3;U topic 1;S02;T@00:01:23/00:03:33|Good foundation; clarify designated approval versus administration, K003/R-171|L01 S01/S03/S07;L05 applies role assignment without reteaching role definition|Planned|
|C02 /3.1|Establish identities and approved access|N§4;U topic 2;S03;T@00:04:11/00:04:51|Retain all six activities; identity/identifier/credential shorthand corrected using K001/002/004/015,R63|L01 S02/S04–S07|Planned|
|C03 /3.1|Review continuing access and changing need|N§5;U topic 3;S04;T@00:05:36–00:07:38|Good core; add evidence→decision→applied/verified remediation and activity/ownership distinction, K005–007,R-ILM|L02 S01–S04/S08|Planned|
|C04 /3.1|Withdraw access when no longer justified|N§6;U topic 4;S05/06;T@00:07:38/00:08:15|Retain all four triggers/four actions; qualify deletion/retention and independent sessions, K008/009,R63C|L02 S05–S08|Planned|
|C05 /3.1|Explain purposes of IAM guidance and tools|N§§7–8;U topics 5–6;S07/08;T@00:08:56–00:10:22|Original lists need practical depth; K010–013 plus R63/R-CSF/R63C distinguish guidance, directory,IdP,enforcement/governance|L03 S01–S06|Planned|
|C06 /3.2|Grant only access needed for assigned tasks|N§9;U topic 7;S09;T@00:10:22–00:13:21|Correct false guarantee/attribution inference; minimum necessary is sufficient to do the task, K016,R-171|L04 S01–S03/S06–S07;L01 applies approved scope|Planned|
|C07 /3.2|Separate incompatible responsibilities|N§11;U topic 8;S11–13;T@00:13:21–00:16:12|Retain no-self-approval principle; replace dependence on disputed headcount; constrain collusion claim, K017,R-171|L04 S04–S07|Planned|
|C08 /3.2|Use models as bases for logical access decisions|N§§10,12–17;U topics 9–13;S14–17;T@00:16:12 onward|DAC/MAC/RBAC/ABAC are course-backed elaborations. ABAC detail exists in N/U; add requested-action input from R-ABAC. No universal model ranking, K018–022|L05 S01–S08|Planned|

Combined corpus provides a basis for **all 8/8 bullets**; original raw lecture alone had partial tools/model depth. This is not an exam-readiness percentage. Required numbered bullets do not have an unresolvable source blocker once the expressly logged technical clarifications are used. Some details still require authored examples and human review.

## Additional official AI/application context

The [official webpage's separate Domain 3 AI explanation](https://www.isc2.org/certifications/cc/cc-certification-exam-outline) adds two application clusters, not extra objective numbers. They must not be silently dropped merely because the PDF bullet list is shorter.

| Local key | Context to teach, paraphrased | Existing user materials | Evidence to add / limits | Planned owner |
|---|---|---|---|---|
|AI01|Apply lifecycle and access-policy principles to automated identities|S09 mentions systems generally; no dedicated bot lifecycle in N/U|O-AI,K014,R-SVC; owner/purpose/permissions/review/retirement. SoD applies to bot self-approval too; do not invent a person answering unattended MFA|L01 S06;L02 S07;L04 S06|
|AI02|Understand MFA foundations and behavioral login-risk signals|Authentication named in N§8/S08; no full AI/MFA instruction|O-AI,K023–025,R63B; anomalous locations warrant assessment, not an automatic breach verdict or a new factor|L06 S01–S06; prerequisite D1L02 referenced rather than rebuilt|

## Discovery checklist disposition

“Mandatory” here describes verified requirements/application context. Supporting concepts may be necessary to explain them without becoming additional literal outline bullets.

| Candidate concept | Scope disposition | Planned treatment / boundary |
|---|---|---|
|Physical entry controls, locks/guards/layered building safeguards|No separate numbered 2026 Domain 3 requirement|One Reading contrast under L05 S01 if useful; physical controls already D1. No dedicated physical-access lesson.|
|Logical access|Explicit 3.2 objective|Digital subject/action/resource/policy examples in L04/L05.|
|Identification|Supporting prerequisite|L01 S02 claim/identifier bridge; no repeat of full D1 AAA course.|
|Authentication|Source/tool support; official AI application context|L03 responsibility flow and L06 assurance versus access boundary.|
|Authorization|Core meaning of logical access, supporting terminology|L05 S01 request decision; L06 authenticated-but-denied example.|
|Accountability/accounting|Supporting explanation, overlaps D1|Approval/review records in Reading/Info; not a new Domain 3 audit/logging lesson. No “permission list proves who acted.”|
|PoLP|Explicit 3.2 bullet|L04; includes systems and privileged rights.|
|Need-to-know|Course/technical support for classified example, not separate bullet|L04 S03 and L05 S03 supporting context; overlaps PoLP rather than opposing it.|
|SoD|Explicit 3.2 bullet|L04; actual permissions must enforce incompatible responsibilities.|
|Privileged access|Application of PoLP/lifecycle|L04 S02 and L01/L02; vendor PAM/JIT administration remains optional/excluded.|
|Access models|Explicit broad 3.2 bullet|L05; four source models selected for teaching, not asserted as an official enumerated list.|
|RBAC/DAC/MAC|Named in N/U/T/captures; supported elaboration|L05 S02–S04 and comparison. Choose by stated policy needs.|
|ABAC|Named in raw lecture; substantively explained in current N/U|L05 S05–S06,R-ABAC; not a missing user-note topic.|
|Provisioning/deprovisioning|Explicit 3.1 outcomes|L01/L02; risk/policy dependent steps, no universal FIRST/deletion rule.|
|Access reviews|Explicit 3.1 outcome|L02; both routine and event-driven reassessment; no arbitrary day count.|
|MFA|Official webpage application context; D1 prerequisite|L06 applied examples; factor categories and boundaries, not a password-policy lesson.|
|Frameworks/tools|Explicit 3.1 broad bullet|L03; namedNIST examples come from user's sources. No prescribed commercial products.|
|Proofing/federation/SSO|Source-backed supporting depth|L01 Reading;L03 basic flow; omit protocol internals/assurance-level memorization.|
|Break-glass/JIT/PAM,LDAP/SAML/OIDC mechanics|Optional technical enrichment, not literal mandatory bullets|Names only where a simple explanation needs them; no extra slides or memorization quota by default.|
|AI bots/service accounts and login analytics|Additional official application guidance|AI01/AI02 above; no specialist machine-learning implementation.|

## No-duplication and unresolved-source rules

- L01 owns creating approved access;L02 owns reassessing/removing it;L03 owns the responsibilities of guidance/tools. They apply common identity terminology, not three new definition lectures.
- L04 owns minimum access/conflicting authority;L05 owns model decision bases;L06 owns authentication assurance/risk signals. Authorization remains distinct from successful authentication.
- Retain D1L02/D1L03 as read-only prerequisites for AAA/MFA/evidence. Do not reproduce CIA, ethics, password-policy or incident-response curricula in this Domain.
- C07 financial-diagram provenance and C14 original-course completeness in K remain unresolved; their disputed claims are quarantined, not prerequisites to coverage. Use a clearly authored no-self-approval example with declared policy.
- No existing source, lecture screenshot, vocabulary entry or practice question is claimed to be an actual ISC2 exam item. Future assessment checks reasoning from taught content.

Planning verification must confirm each C/AI key maps to concrete proposed slides and all slide references resolve. Publication/browser acceptance are future implementation gates, not accomplished by this matrix.
