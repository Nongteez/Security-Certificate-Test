# Domain 3 Learning Slides — Instructional Roadmap and Storyboard

Date:2026-10-30. **Proposed plan for human approval; no slides implemented.**

**Goal:** teach the verified IAM lifecycle and logical-access outcomes through source-grounded decisions, readable white-canvas compositions and complete natural TH/EN supporting explanations.

**Architecture:** existing static JSON/ES-module Learning Center→Domain→objective→lesson→Viewer, semantic Reading/Info, trusted native compositions and independent V1 progress. Exact feasibility/change boundaries are in [implementation readiness](domain-3-implementation-readiness.md).

**Tech stack for a later authorized implementation:** native JS/CSS/JSON/DOM/SVG, current schema/loader/Viewer and Node fixtures. No new framework, bundler, schema or dependency is proposed. Follow the repository single-flow workflow; future implementation must be separately authorized. No commits/pushes are assumed.

Evidence codes below resolve through the [inventory](domain-3-source-inventory.md). Scope keys resolve through the [coverage matrix](domain-3-2026-coverage-matrix.md); corrections/additions through the [academic audit](domain-3-academic-audit.md). Source references are authoring evidence, not arbitrary learner-facing slide numbers. `K014` abbreviates `KNOW-D3-014`.

## Course structure and alternatives

**Recommend 6 focused lessons / approximately 42 slides**, with 21 slides under each objective. Counts arise from the specific teaching units below, not a quota:7+8+6+7+8+6. A production storyboard may merge/split a unit if meaning or bilingual readability warrants it; record the reason before publishing stable IDs.

| Order / proposed stable lesson ID | Objective | EN / TH title | Estimate | Main learning goal |
|---|---|---|---:|---|
|L01 `lesson-d3-01-roles-provisioning`|3.1|Roles & Authorized Provisioning / บทบาทและการจัดเตรียมสิทธิ์ที่ได้รับอนุมัติ|7|Turn a defined job or workload into justified, approved, verified access.|
|L02 `lesson-d3-02-review-deprovisioning`|3.1|Access Reviews, Changes & Deprovisioning / ทบทวน ปรับ และถอนสิทธิ์ตลอดวงจรชีวิต|8|Detect stale/unmanaged access and verify authorized changes or removal.|
|L03 `lesson-d3-03-iam-frameworks-tools`|3.1|IAM Frameworks & Tool Responsibilities / กรอบแนวทางและหน้าที่ของเครื่องมือ IAM|6|Distinguish guidance, identity data, authentication, governance and enforcement.|
|L04 `lesson-d3-04-least-privilege-sod`|3.2|Least Privilege & Separation of Duties / สิทธิ์เท่าที่จำเป็นและการแบ่งแยกหน้าที่|7|Limit access scope and incompatible authority, including automated work.|
|L05 `lesson-d3-05-access-control-models`|3.2|Choosing and Applying Access-Control Models / เลือกและใช้แบบจำลองควบคุมการเข้าถึง|8|Explain the decision basis of DAC/MAC/RBAC/ABAC and choose by stated requirements.|
|L06 `lesson-d3-06-mfa-authentication-signals`|3.2 + official application guidance|MFA & Authentication Risk Signals / MFA และสัญญาณความเสี่ยงในการยืนยันตัวตน|6|Distinguish stronger authentication, authorization and contextual risk evidence.|

Considered alternatives: two large objective-wide lessons would reduce chooser entries but mix too many distinct learner decisions into long sessions; eight or more micro-lessons would split closely related comparisons and repeat introductions/scenarios. Six keeps each unit coherent and gives adequate room to tool depth and official authentication context. This is a recommendation for review, not an implementation authorization.

No dedicated physical-access lesson or invented 3.3 is planned. No repeated CIA, risk formulas, password-policy or full AAA course is added. D1L02 Identification/AAA/MFA and D1L03 trustworthy evidence are recommended read-only prerequisites; summarize only the immediate bridge needed for the current task. Domain 2's GRC/awareness lessons remain links/prior knowledge, not replacement material.

## Shared teaching and supporting-content contract

- Each canvas has one primary message and one meaningful relationship/decision, not a sequence of decorated cards. Keep the established white background and generous desktop area. Avoid ceremonial title-only slides.
- Presentation text contains the essential condition, actors and conclusion. Reading carries complete definitions, original source lists, examples, qualifications and counterexamples; Info exposes that same semantic explanation plus lesson goals/prerequisites/references. Do not maintain contradictory parallel prose copies.
- In the per-slide entries below, **Reading** and **Info** requirements are explicit. Info's “same explanation” means the complete reviewed semantic Reading content, not a summary or only a source label. Additional Info notes identify the authority/caveat to expose.
- Teaching text and scenario reasons are equivalent in TH/EN. Controls/navigation remain English. Keep technical terms naturally in Thai; explain them without forced Thai-only translations. Test long Thai lines as actual rendered text.
- Repeated source lists belong in structured Reading/Info. Do not hide material by replacing it with vague “learn more” text or forcing tiny labels into fixed geometry.
- Native scenario controls should retain focus and selection across language/mode/fullscreen changes within a Viewer visit, provide all choice-specific reasons and clean up listeners on disposal. Saved learning position uses existing progress; transient scenario answers are not promised to survive a full reload.
- Each lesson ends with one proposed decision scenario. It is authored teaching, not a Quiz-bank item. Four alternatives are useful if all are plausible; no mandated answer-letter distribution. Preserve one defensible recommended action under the declared policy and actor authority.

## L01 — Roles & Authorized Provisioning

**Scope:**C01/C02 plus initial AI01 application. **Prerequisites:** D1 AAA basics, ordinary account/file concepts. **Topic coverage:** job function→required access; identity/account/identifier; designated approver/implementer; all six source provisioning activities; verified assignment; owned workload identity. **Scenario:** a new payroll assistant needs a defined reporting task; an urgent request proposes copying a senior administrator's entire rights. State that the requester lacks approval authority and the established role/access approval has not yet been completed.

**Academic risks:** username-as-identity/factor, universal FIRST, overbroad role copying, unattended human-MFA fiction. **Lesson acceptance:** learner justifies access by task and authority, identifies each source activity in Reading/Info, and can reject unjustified elevation for either a person or a bot. All scenario reasons preserve approval/context limits in both languages.

### L01-S01 — `slide-d3-01-01-role-to-task`

**Concept/message:** a role describes work and the access needed to perform it. **Presentation/visual:** Finance task→accounting report→read permission, with network administration shown as outside this declared task; use a permission relationship, not five decorative job cards.

**Reading:** retain all five S02 job examples and distinguish role, permission and effective access. **Info:** same explanation; original Finance example and C01 source context. **TH/EN:** use “บทบาทหน้าที่” and `Role/Permission`; avoid equating a job title with automatic authority. **Evidence:**N§3,U topic 1,S02,T@00:01:23/00:03:33,K003. **Misconception/check:** “Every finance employee can never need admin access.” This example states this task's needs; other authorized duties may differ.

### L01-S02 — `slide-d3-01-02-identity-account-identifier`

**Concept/message:** an identifier names an account; it is not the whole identity or proof of control. **Presentation/visual:** one employee linked to an ordinary account and an administrative account, each with its own identifier; separate the authenticator from the label.

**Reading:** explain identity/account/identifier/authenticator and risk-based onboarding proofing versus later login; do not imply separate accounts held by one person establish independent SoD. **Info:** same explanation and R63 qualification of transcript shorthand. **TH/EN:** `Digital identity`,บัญชี,ตัวระบุ,สิ่งที่ใช้ยืนยันตัวตน; distinguish proofing/การพิสูจน์อัตลักษณ์ from authentication/การยืนยันตัวตน. **Evidence:**N§§1/4,S03,T@00:04:11/00:04:51,K001/002/015,R63. **Misconception/check:** username+password is two factors; two accounts imply two independent people.

### L01-S03 — `slide-d3-01-03-authorize-before-assignment`

**Concept/message:** authorization responsibility and account administration are different responsibilities. **Presentation/visual:** request stating task/scope→designated approval→administrator implements; annotate that policy defines responsibility and allowed automation.

**Reading:** role owner/approver/implementer/reviewer roles can be combined in products or workflows; job title alone does not authorize every grant. **Info:** same explanation, declared workflow and prerequisite conditions. **TH/EN:** “ผู้มีอำนาจตามนโยบาย” rather than always “เจ้าของ” for every approver. **Evidence:**N§§3–4,S02–03,K003/004,R-171§03.01.01. **Misconception/check:** all provisioning requires a newly signed manual owner form, or urgency authorizes bypass.

### L01-S04 — `slide-d3-01-04-provision-approved-access`

**Concept/message:** provisioning establishes the account and the approved ability to work. **Presentation/visual:** account→approved role/permissions→required application→issued authenticator; make identity linkage visible and label this as one illustrative workflow, not a universal sequence.

**Reading:** retain S03's complete six activities: account, unique identity, role, permissions, application access, authentication credentials. Explain preconditions and verification. **Info:** same full list with source and qualification. **TH/EN:** natural `Provisioning`/“จัดเตรียมบัญชีและสิทธิ์”; no awkward literal “ให้กำเนิดตัวตน”. **Evidence:**N§4,U topic 2,S03,T@00:04:11/00:04:51,K004. **Misconception/check:** merely creating a login grants every needed app right, or provisioning is always the first IAM action.

### L01-S05 — `slide-d3-01-05-verify-the-grant`

**Concept/message:** compare approved scope with effective access before calling assignment complete. **Presentation/visual:** small approved-versus-observed permissions table for read report/write payroll/admin settings; show one mismatch to correct, with textual allowed/denied status.

**Reading:** use a clearly authored grant-verification example, explain evidence and organizational responsibility; do not assume a specific OS permission-precedence rule. **Info:** same explanation plus “authored example” designation. **TH/EN:** “สิทธิ์ที่อนุมัติ” versus “สิทธิ์ที่มีผลจริง”; keep action/resource explicit. **Evidence:**N§§3–4/8,K003/004/018,R-171§03.01.01/02. **Misconception/check:** a role label or approval ticket proves actual configuration is correct.

### L01-S06 — `slide-d3-01-06-own-the-reporting-bot`

**Concept/message:** a reporting bot needs an owner, purpose and justified access too. **Presentation/visual:** bot identity→named responsible team→read-only report source; a separate review/retirement note, with no person-shaped login/MFA prompt.

**Reading:** protect workload-appropriate authentication material and record purpose/scope/dependencies; initial provisioning here, ongoing review/removal in L02. **Info:** same explanation; explicit official-web supplement, not S03 lecture content. **TH/EN:** `Bot/Service account` with “ผู้รับผิดชอบ” rather than implying the bot owns itself. **Evidence:**O-AI,K014,R-SVC;N§4 as human lifecycle analogy. **Misconception/check:** automated accounts can share any departing employee's credentials or need no review.

### L01-S07 — `slide-d3-01-07-urgent-access-decision`

**Concept/message:** establish authorized task scope rather than copy convenient excessive rights. **Presentation/visual:** short payroll-reporting request and four stable action choices; recommended path seeks the policy-authorized approval/role assignment and verifies it.

**Reading:** explain why copying admin rights, granting all apps or treating a successful login as approval is insufficient; state previous steps and actor authority. **Info:** all four reasons and relevant N§20Q1/Q2 concepts, without copying bank stems or answer letters. **TH/EN:** preserve “not yet approved” and exact read-only task in both versions. **Evidence:**N§§3–4/20,U topics 1–2,K003/004;C01/C02. **Misconception/check:** speed or a colleague's existing rights proves legitimate need. Scenario is proposed editorial content.

## L02 — Access Reviews, Changes & Deprovisioning

**Scope:**C03/C04, ongoing AI01. **Prerequisites:**L01; ordinary group/application access. **Topics:** mover adjustment, evidence/decision/remediation, account activity/ownership, cadence and change triggers, four removal triggers/actions, independent sessions, workload dependencies. **Scenario:** a contractor's authorized end date has passed and central disablement is recorded, but the specified application still accepts an existing session; an authorized administrator must verify and complete removal under the given policy.

**Academic risks:** orphan=inactive, “delete everything”, next-review delay, automatic global revocation, universal deadlines. **Acceptance:** retain all six review findings and four triggers/four actions in full TH/EN explanations; distinguish decision from applied change and account disablement from complete access withdrawal; explain service continuity dependencies without retaining unjustified access indefinitely.

### L02-S01 — `slide-d3-02-01-mover-before-after`

**Concept/message:** a changed job requires reassessing old access as well as adding new access. **Presentation/visual:** Finance→IT transfer with before/required/remaining entitlements; highlight stale Financial Reporting access from the source example.

**Reading:** all six S04 review findings, privilege accumulation versus justified retained duties, six months as elapsed story time. **Info:** same explanation, not a six-month review recommendation. **TH/EN:** “สิทธิ์เดิมที่หมดความจำเป็น” rather than remove all old rights indiscriminately. **Evidence:**N§5,U topic 3,S04,T@00:06:53/00:07:38,K005,R-ILM. **Misconception/check:** promotion automatically justifies cumulative access or proves orphaning.

### L02-S02 — `slide-d3-02-02-review-apply-verify`

**Concept/message:** a review decision must lead to an applied and checked access change. **Presentation/visual:** evidence/current need→retain/remove decision→effective permission change→verification; mark the distinction between a signed review and actual denied access.

**Reading:** designated reviewer, records and responsible remediation; allow “retain” when justified. **Info:** same complete explanation and organizational-policy caveat. **TH/EN:** `Access review`/ทบทวน versus `Remediation`/ลงมือแก้ไขสิทธิ์. **Evidence:**N§5/8,S04,K006/013,R-CSF PR.AA-05,R-ILM. **Misconception/check:** a spreadsheet rejection automatically revokes an application's rights.

### L02-S03 — `slide-d3-02-03-activity-and-ownership`

**Concept/message:** usage and accountable ownership are independent questions. **Presentation/visual:** a readable two-axis comparison with four simple account examples: used/unused × managed/unmanaged; axes are real evidence dimensions, not an invented risk-scoring framework.

**Reading:** inactivity threshold depends on policy; approved rarely used recovery access can be legitimate; an active orphan can still run jobs. **Info:** same explanation with source correction. **TH/EN:** “บัญชีไม่เคลื่อนไหว” versus “บัญชีที่ขาดผู้รับผิดชอบ”; avoid defining inactive as necessarily owned. **Evidence:**N§5,S04,T@00:06:53,K007,R-ILM. **Misconception/check:** inactivity proves an account is orphaned or active usage proves governance.

### L02-S04 — `slide-d3-02-04-review-at-the-change`

**Concept/message:** routine reviews complement reassessment when duties or need change. **Presentation/visual:** job-change event feeding an immediate authorized reassessment alongside a separate policy-defined review calendar; no arbitrary numeric deadline.

**Reading:** review evidence, organization/risk-dependent cadence and changes to role/project/contract need. **Info:** same explanation and clarification of source's six-month transfer. **TH/EN:** “ตามรอบที่นโยบายกำหนด” and “เมื่อมีเหตุเปลี่ยนแปลง”; no invented “ทุก90วัน”. **Evidence:**N§§5–6,U topics 3–4,K005/006,R-ILM. **Misconception/check:** leave excessive rights until the next scheduled review.

### L02-S05 — `slide-d3-02-05-withdraw-without-erasing-history`

**Concept/message:** removing access and destroying historical records are different decisions. **Presentation/visual:** end-of-contract trigger→disabled account/app/group/privileged access; separate preserved audit-history record labelled “under retention policy”.

**Reading:** all four S06 triggers and four actions, authorized timing and role-change partial removals; no blanket deletion rule. **Info:** same explanation plus record-retention boundary. **TH/EN:** `Disable`,ถอนสิทธิ์,ลบบัญชี/ระเบียน are distinct actions. **Evidence:**N§6,U topic 4,S05/06,T@00:08:15,K008,R-ILM. **Misconception/check:** every leaver requires immediate destruction of all identity records.

### L02-S06 — `slide-d3-02-06-central-and-application-sessions`

**Concept/message:** central disablement is not proof every existing application session has ended. **Presentation/visual:** central account disabled while a separately managed application-session path remains; show explicit revocation/check at the relevant application.

**Reading:** independent sessions, relevant authenticators/tokens and supported revocation mechanisms; no claim every product behaves identically or revocation always acts instantly. **Info:** same explanation and R63C§4.7; link L03 for IdP/federation meaning. **TH/EN:** keep `Session` and “ตรวจผลการเพิกถอน” distinct from clearing a local screen. **Evidence:**N§6 application action,K009,R63C. **Misconception/check:** one directory switch universally revokes every issued token.

### L02-S07 — `slide-d3-02-07-retire-a-workload-identity`

**Concept/message:** bot access needs review and retirement with known service dependencies. **Presentation/visual:** retired reporting job→owner/dependency check→remove obsolete rights/authentication material→verify no remaining justified access path.

**Reading:** reassess changed purpose and dependent services; authorized continuity planning is not permission to leave an unmanaged privileged account. **Info:** same explanation; AI01/R-SVC explicitly identified as supplement. **TH/EN:** “เลิกใช้ภาระงาน/ถอนสิทธิ์ของบัญชีระบบ” rather than dismiss a bot like a human employee. **Evidence:**O-AI,K014,R-SVC;N§§5–6 analogy. **Misconception/check:** service accounts last forever or human interactive MFA is the universal solution.

### L02-S08 — `slide-d3-02-08-complete-offboarding-decision`

**Concept/message:** verify complete authorized withdrawal across the stated access paths. **Presentation/visual:** contractor/session case, four decisions; recommended action checks and revokes the identified residual application access under established policy while retaining required records.

**Reading:** all reasons: wait for periodic review, delete all history, assume central disablement sufficient, or complete/verify removal. **Info:** same complete reasons; label authored scenario and specified administrator authority. **TH/EN:** retain confirmed contract end and observed active session in both languages. **Evidence:**N§§5–6,K006/008/009,R63C,C03/C04. **Misconception/check:** a completed account-disable ticket alone proves deprovisioning success.

## L03 — IAM Frameworks & Tool Responsibilities

**Scope:**C05. **Prerequisites:**L01/L02; D1 governance framework concept. **Topics:** NIST digital-identity guidance versus CSF outcomes; all seven S08 capabilities and three tool categories; directory records, IdP assertions, governance/enforcement and basic SSO. **Scenario:** decide which responsibility supplies verified authentication information to a relying application, without treating guidance or a directory list as an authorization approval.

**Academic risks:** stale schema/architecture assumptions, framework-as-software, LDAP-as-directory, universal federation/session behavior, forced vendor syllabus. **Acceptance:** explain each category's job with a concrete request; recognize combined platforms; retain source lists in Reading/Info; keep protocol internals out of mandatory assessment.

### L03-S01 — `slide-d3-03-01-guidance-is-not-software`

**Concept/message:** guidance defines desired practice; tools carry out configured responsibilities. **Presentation/visual:** two different questions: digital-identity design (SP 800-63) versus broader risk outcomes (CSF), then an implementation/tool boundary; no repeated generic framework cards.

**Reading:** proofing/authentication/federation purposes, CSF outcomes, named versions as checked supplementary context; neither is a complete enterprise authorization system. **Info:** same explanation with N§7/S07 and current R63/R-CSF URLs. **TH/EN:** “แนวทาง/กรอบผลลัพธ์” versus `Software/IAM tool`. **Evidence:**N§7,U topic 5,S07,T@00:08:56,K010. **Misconception/check:** adopting a framework provisions accounts or a federal publication mandates every employer's exact configuration.

### L03-S02 — `slide-d3-03-02-directory-records`

**Concept/message:** a directory provides structured account/group information. **Presentation/visual:** readable account→group membership record→lookup by an application; show that storing the record is a responsibility rather than an entire access-governance program.

**Reading:** source's directory/IdP/access-platform categories and seven capabilities; products can combine responsibilities. LDAP, if named, is a directory-access protocol and optional context. **Info:** same full list; no fabricated S08 protocol teaching. **TH/EN:** retain `Directory service`; “ระเบียนบัญชี/สมาชิกกลุ่ม”. **Evidence:**N§8,U topic 6,S08,K011,R-ILM. **Misconception/check:** a directory automatically performs every review, or LDAP itself is a directory product.

### L03-S03 — `slide-d3-03-03-idp-to-application`

**Concept/message:** the IdP supplies verifiable authentication information; the application still makes its access decision. **Presentation/visual:** user authenticates→IdP assertion→application validates→resource action evaluated; essential roles labelled, not protocol packets.

**Reading:** proof of authenticator control, relying application and assertion meaning; applicable trust/validation and authorization still matter. **Info:** same explanation, R63C introduction/K012/023. **TH/EN:** `IdP/Assertion` with concise Thai explanation; avoid calling all tokens passwords or universal resource permissions. **Evidence:**N§§7–8,S07/08,K012/023,R63C. **Misconception/check:** SSO/IdP login authorizes all files.

### L03-S04 — `slide-d3-03-04-governance-and-enforcement`

**Concept/message:** deciding who should have access and enforcing one request are complementary responsibilities. **Presentation/visual:** lifecycle approval/review loop feeding configured rights, alongside an application read/write decision; no claim these must be separate products.

**Reading:** governance/administration versus access enforcement, source's account/role/review capabilities and evidence of applied decisions. **Info:** same explanation; explicitly connect to L02 remediation without reteaching its full workflow. **TH/EN:** “กำกับและทบทวนสิทธิ์” versus “ประเมิน/บังคับใช้คำขอ”. **Evidence:**N§8,K013/018,R-CSF PR.AA-05. **Misconception/check:** policy documentation or purchasing an IdP proves enforcement/reviews are complete.

### L03-S05 — `slide-d3-03-05-sso-with-access-boundaries`

**Concept/message:** fewer repeated sign-ins do not mean unrestricted access. **Presentation/visual:** one IdP sign-in supports separate assertions addressed to each relying app; reporting allowed, payroll administration denied under declared app rules.

**Reading:** basic federation/SSO relationship and independent application authorization; an assertion is intended for its relying party, not a universal credential to replay at other apps. Link L02 for separate-session withdrawal. No SAML/OIDC message flows or guarantee of one global logout. **Info:** same explanation and supplementary provenance. **TH/EN:** `Single Sign-On (SSO)` plus “ลดการลงชื่อเข้าใช้ซ้ำ”; no “เข้าได้ทุกระบบ”. **Evidence:**N§§7–8 names federation/IdP,K012/023,R63C. **Misconception/check:** one successful login eliminates app-level permission checks.

### L03-S06 — `slide-d3-03-06-tool-responsibility-decision`

**Concept/message:** choose a tool responsibility by the evidence or action needed. **Presentation/visual:** relying application needs verifiable authentication information; compare IdP responsibility with directory lookup, guidance and review decision as four action choices.

**Reading:** all reasons, including how a combined platform can offer multiple responsibilities; choices compare functions, not brands. **Info:** same explanation, seven capabilities/three categories accessible through preceding source notes. **TH/EN:** match `ยืนยันการ Authentication` versus `อนุมัติสิทธิ์` precisely. **Evidence:**N§§7–8,S07/08,K010–013,R63C,C05. **Misconception/check:** a framework or any database entry is a valid authentication assertion.

## L04 — Least Privilege & Separation of Duties

**Scope:**C06/C07 and constrained AI01 application. **Prerequisites:**L01 roles/permissions;L02 effective-access checking. **Topics:** task-specific rights, elevated access, need-to-know as supporting information constraint, incompatible permissions, actual independent actors, residual collusion and bot self-approval. **Scenario:** a clerk needs reporting/request authority while a declared independent approval policy prohibits self-approval.

**Academic risks:** minimum means unusably little, guaranteed no harm, all administrators forbidden, separate accounts equal SoD, universal three-person allocation. **Acceptance:** learner justifies needed rights, identifies conflicting authority even through multiple accounts/automation, and recognizes both principles can apply together. Disputed original financial diagram cannot determine a key.

### L04-S01 — `slide-d3-04-01-rights-for-the-task`

**Concept/message:** minimum necessary access still lets the assigned task be done. **Presentation/visual:** report-reading task with relevant read action and unnecessary modification/admin actions; show supported action/resource boundaries.

**Reading:** S09 definition/purpose, all three practices/four bounded benefits; actual activity evidence is needed for attribution. **Info:** same explanation with correction of T's innocence inference. **TH/EN:** “เท่าที่จำเป็นต่อหน้าที่” rather than merely “น้อยที่สุด”. **Evidence:**N§9,U topic 7,S09,K016,R-171§03.01.05. **Misconception/check:** PoLP prevents all damage or forbids legitimate elevated work.

### L04-S02 — `slide-d3-04-02-limit-privileged-work`

**Concept/message:** privileged capability should match the authorized administrative task. **Presentation/visual:** ordinary report task versus defined maintenance task, each with required actions; show bounded elevated access without a vendor PAM dashboard.

**Reading:** users and processes, legitimate admin rights, reassessment and protection; separate ordinary/admin accounts can reduce exposure but do not create independent approvers. PAM/JIT names are optional examples only. **Info:** same explanation, scope/authority conditions. **TH/EN:** `Privileged access`/สิทธิ์ระดับสูง, not every permission is admin. **Evidence:**N§9,S09,K014/016,R-171§03.01.05/06. **Misconception/check:** all administrators need unlimited access permanently, or two accounts controlled by one person solve SoD.

### L04-S03 — `slide-d3-04-03-permission-and-information-need`

**Concept/message:** both permitted actions and the information genuinely needed matter. **Presentation/visual:** analyst may read assigned project records but not unrelated projects or modify records; show related action and information constraints on the same request.

**Reading:** PoLP/need-to-know overlap; need-to-know is supporting terminology, not a new official bullet or a principle exclusive to military data. **Info:** same explanation; classified illustration details live in L05. **TH/EN:** “ความจำเป็นต้องรู้ข้อมูลเฉพาะเรื่อง” alongside “สิทธิ์เท่าที่จำเป็น”. **Evidence:**N§§9/14,K016/020,R-US scoped example,R-171. **Misconception/check:** the two principles are mutually exclusive or PoLP concerns operations only.

### L04-S04 — `slide-d3-04-04-stop-self-approval`

**Concept/message:** incompatible responsibilities need different authorized control. **Presentation/visual:** request and approval lanes with a clear prohibition on the requester approving their own transaction; actual permissions shown at the join.

**Reading:** retain S11 purpose/implementation/benefits; describe S12/13 discrepancy without copying its allocation as normative. Use a clearly authored policy example. **Info:** same explanation and quarantine record D3-A10/K-C07. **TH/EN:** `Separation of Duties` and `Segregation` as synonymous here; “หน้าที่ที่ขัดกัน”. **Evidence:**N§11,U topic 8,S11–13,K017,R-171§03.01.04. **Misconception/check:** any three role names are a universal correct financial workflow.

### L04-S05 — `slide-d3-04-05-roles-need-independent-actors`

**Concept/message:** three labels do not separate authority if one actor holds them all. **Presentation/visual:** two small permission assignments: one person controls requester+approver versus two independently authorized actors; show the conflict without implying an infallible control.

**Reading:** system authorizations must support separation; collusion, bypass and configuration failures remain possible; required headcount depends on workflow. **Info:** same explanation; no claim all participants must collude. **TH/EN:** distinguishคน/บทบาท/บัญชี; “ช่วยลดการใช้อำนาจโดยลำพัง”. **Evidence:**N§11,S11,T@00:16:12,K017/021,R-171. **Misconception/check:** renaming accounts or dividing task titles alone enforces SoD.

### L04-S06 — `slide-d3-04-06-bot-authority-boundary`

**Concept/message:** automation must respect the same no-self-approval boundary. **Presentation/visual:** request-generating bot→independent approval authority; remove the bot's self-approval route, retain its justified request capability.

**Reading:** official AI application of PoLP/SoD, human owner and workload purpose; independent control is about authority, not simply replacing one box with “AI”. **Info:** same explanation and O-AI/R-SVC provenance. **TH/EN:** `Bot` plus “ห้ามอนุมัติคำขอของตนเอง” under the stated policy. **Evidence:**O-AI,K014/017,R-171;N§11 principle. **Misconception/check:** automated accuracy eliminates conflicting-authority risk.

### L04-S07 — `slide-d3-04-07-scope-and-conflict-decision`

**Concept/message:** grant the task's required rights while enforcing independent approval. **Presentation/visual:** four permission-set choices for a reporting/request clerk; recommended set permits the defined work and excludes self-approval/admin rights not justified by the task.

**Reading:** explain each set and distinguish the two principles; state all relevant roles and policy. **Info:** same reasons, source lists and residual-risk caveat. **TH/EN:** keep “independent approver” and the exact allowed actions equivalent. **Evidence:**N§§9/11,K016/017,R-171,C06/C07. **Misconception/check:** minimizing rights alone guarantees no conflicting authority, or SoD needs uselessly restricted users. Proposed editorial scenario.

## L05 — Choosing and Applying Access-Control Models

**Scope:**C08; selected four models are course elaborations. **Prerequisites:**L01 roles/permissions,L04 PoLP/SoD. **Topics:** subject/action/resource/policy, owner delegation, mandatory policy, role reuse, attribute evaluation, effective role combinations and requirement-based choice. **Scenario:** an explicitly centrally mandated labelled-document policy prevents ordinary owner overrides; distinguish it from owner sharing, job-role assignment and attribute/context policy.

**Academic risks:** MAC always strongest, labels immutable, clearance alone, RBAC static/ABAC dynamic as absolute, one role equals total access, model labels guarantee correct enforcement. **Acceptance:** explain and apply all four models through criteria, not industry-name keywords; keep N/U's ABAC detail and add requested action; qualify model overlap and original tradeoffs in full Reading/Info.

### L05-S01 — `slide-d3-05-01-request-policy-enforcement`

**Concept/message:** a model explains the decision basis; enforcement applies the result to a specific request. **Presentation/visual:** subject→read/write request on resource→policy decision→allowed/denied action, with one clearly stated rule.

**Reading:** full S14 purpose list, logical versus physical access contrast, policy documentation versus implemented controls. **Info:** same explanation and model-versus-mechanism distinction. **TH/EN:** `Subject/Object/Action` with naturalThai; use “ทรัพยากร” rather than literal object terminology when helpful. **Evidence:**N§§10/12,S14,K018,R-CSF. **Misconception/check:** writing a policy enforces it or physical lock coverage is a new 3.3.

### L05-S02 — `slide-d3-05-02-dac-authorized-owner`

**Concept/message:** DAC delegates access-setting discretion to an owner or authorized controller. **Presentation/visual:** file owner sets colleague read/read-write/none; system-enforcement boundary remains visible.

**Reading:** source advantage/drawback, risk of excessive grants, operating-system example without “Linux only supports DAC”. **Info:** same explanation with R-DAC definition and ranking correction. **TH/EN:** `Discretionary` explained as “ดุลยพินิจที่ได้รับมอบอำนาจ”, not unlimited freedom. **Evidence:**N§13,U topic 10,S15,T@00:17:42,K019,R-DAC. **Misconception/check:** owner discretion means no enforced policy or DAC is always inferior.

### L05-S03 — `slide-d3-05-03-mac-central-policy`

**Concept/message:** ordinary owners cannot override mandatory central access policy. **Presentation/visual:** labelled project record and subject authorization/need conditions evaluated under central policy; blocked owner-sharing bypass.

**Reading:** source classification/clearance examples and administrative limits; scoped US example additionally needs applicable eligibility,NDA and need-to-know. No universal country-independent label hierarchy. **Info:** same explanation with R-US§4.1(a)/R-MAC. **TH/EN:** `Mandatory`/นโยบายที่ต้องบังคับใช้; `Clearance` not blanket permission. **Evidence:**N§14,U topic 11,S16,K020,R-MAC/R-US. **Misconception/check:** Top Secret clearance permits every project or no authorized administrator can ever change a label.

### L05-S04 — `slide-d3-05-04-rbac-role-permission-reuse`

**Concept/message:** RBAC associates permissions with roles and assigns authorized roles to users. **Presentation/visual:** three Finance users→one role→declared report permissions; a separate HR role points to employee-record permissions.

**Reading:** all source scalability/consistency benefits and careful-role-design drawback; no automatic PoLP/SoD guarantee. **Info:** same explanation; distinguish L01 role definition from model mechanics here. **TH/EN:** “กำหนดผู้ใช้เข้าบทบาท” rather than assume job title itself authorizes everything. **Evidence:**N§15,U topic 12,S17,T@00:20:23,K021,R-RBAC. **Misconception/check:** assigning any role inherently gives minimum necessary access.

### L05-S05 — `slide-d3-05-05-abac-evaluate-the-request`

**Concept/message:** ABAC evaluates request attributes against policy. **Presentation/visual:** Finance user + specified report/read action + company device + working-hours condition→policy result; use readable decision conditions, not many miniature cards.

**Reading:** N's user/resource/environment/device categories; map devices as relevant subject/context data without inventing a mandatory taxonomy; include requested action from R-ABAC and note roles can be attributes. **Info:** same full explanation; detail comes from N/U and primary support, not an imaginary ABAC screenshot. **TH/EN:** `Attributes`/คุณลักษณะ and “เทียบกับนโยบาย”; unknown/missing data handling must be stated in examples. **Evidence:**N§16,U topic 13,S14 name only,K022,R-ABAC. **Misconception/check:** any job-title condition is necessarily pure RBAC or all contextual control requires one exclusive model.

### L05-S06 — `slide-d3-05-06-effective-role-combinations`

**Concept/message:** sharing a role need not mean identical total effective access. **Presentation/visual:** two people share report-reader role, one also has an authorized maintenance role; list the resulting explicitly declared rights without assuming universal allow/deny precedence.

**Reading:** role combinations, activation and constraints; explain scope of the illustrative assignments and how poor combinations can violate SoD. **Info:** same explanation with R-RBAC's constraints qualification. **TH/EN:** “สิทธิ์จากบทบาทร่วม” versus “สิทธิ์รวมที่มีผลจริง”. **Evidence:**N§§3/15,T@00:21:43,K021,R-RBAC;L04 prerequisite. **Misconception/check:** a shared Finance role proves all users have exactly the same access in every context.

### L05-S07 — `slide-d3-05-07-choose-by-policy-requirement`

**Concept/message:** choose the decision basis that matches the requirement, not a universal security ranking. **Presentation/visual:** compact same-resource comparison of owner-delegated sharing, mandatory policy, reusable role permissions and attribute-evaluated requests; one decisive criterion per row.

**Reading:** full N§17 comparison, bounded tradeoffs and model coexistence; distinguish policy authority from enforcement mechanism. **Info:** same explanation; all four primary definitions linked. **TH/EN:** keep DAC/MAC/RBAC/ABAC expansions consistent; no forced Thai acronyms. **Evidence:**N§§12–17,U comparison,K018–022,R-DAC/R-MAC/R-RBAC/R-ABAC. **Misconception/check:** military/bank/job-title keywords or “most strict” alone decide the model.

### L05-S08 — `slide-d3-05-08-mandatory-policy-decision`

**Concept/message:** identify mandatory policy by authority and override limits. **Presentation/visual:** centrally mandated document-label rule with no ordinary owner override; four model-based choices, each with its actual reasoning rather than a slogan key.

**Reading:** explain why owner sharing/role assignment/contextual policy descriptions are different from this stated requirement; no guarantee the chosen model alone makes implementation secure. **Info:** same reasons and declared policy; authored scenario, not copied bank Q662/Q666. **TH/EN:** retain “ordinary owner cannot override” in both versions. **Evidence:**N§§13–17,K019–022,R-MAC,C08. **Misconception/check:** choosing MAC means one can ignore implementation, need or other policy conditions.

## L06 — MFA & Authentication Risk Signals

**Scope:** official AI02 application under 3.2; supporting authentication/authorization distinction. **Prerequisites:**D1L02 and L03's IdP/application roles;L04 authorization boundaries. **Topics:** applied authentication versus permission, distinct factor categories, risk context, anomalous geolocation, policy-authorized response and uncertainty. **Scenario:** a permitted analyst receives implausibly separated login observations; policy requires contextual triage and escalation rather than a conclusive breach/deletion response from the signal alone.

**Academic risks:** rebuilding D1 AAA/password content, username/location/AI as independent factors, every FIDO/key/passkey configuration automatically MFA, anomalies prove theft, instructor decorative fingerprints counted as source teaching. **Acceptance:** correctly distinguish factors from risk signals and permissions, interpret the evidence without overclaiming and choose an authorized response; clearly label the official-web/technical supplement beyond N/U.

### L06-S01 — `slide-d3-06-01-authenticated-but-not-authorized`

**Concept/message:** stronger proof at login does not expand permission scope. **Presentation/visual:** authenticated analyst reaches a permitted report but receives denied payroll-administration request under the declared role; brief application of D1 prerequisite, not a second AAA lecture.

**Reading:** claim/authenticator-control/permission/evidence boundaries; accountability relates to responsibility and activity records, not merely permission. **Info:** same explanation and D1L02/L03 prerequisite references. **TH/EN:** “ยืนยันตัวตนแล้ว” versus “ได้รับอนุญาตให้ทำรายการนี้”. **Evidence:**N§8 names functions,K023,R63B/R63C,O-AI. **Misconception/check:** MFA or a logged sign-in authorizes every requested action.

### L06-S02 — `slide-d3-06-02-factor-types-not-screens`

**Concept/message:** MFA depends on distinct factor types, not two screens or two devices. **Presentation/visual:** password+PIN contrasted with a cryptographic key requiring local PIN activation; show knowledge/possession evidence without claiming every key configuration is MFA.

**Reading:** knowledge/possession/inherence, device count versus factor count, biometric/cryptographic qualifications; link D1/D2 for full authentication/password material. **Info:** same explanation and R63B provenance. **TH/EN:** “ประเภทปัจจัย” rather thanจำนวนข้อมูล; PIN remains knowledge, not a separate fourth type. **Evidence:**O-AI,K024,R63B. **Misconception/check:** username+password, password+PIN, location or two prompts necessarily constitute MFA.

### L06-S03 — `slide-d3-06-03-risk-context-not-a-factor`

**Concept/message:** a contextual risk signal can inform checks without becoming an authentication factor. **Presentation/visual:** unfamiliar location/device behavior→risk assessment→possible additional verification; separate it from proof of authenticator control.

**Reading:** behavioral analytics, efficacy/privacy limits and false positives; no risk-score threshold imported as universal. **Info:** same explanation with official application/primary qualification. **TH/EN:** `Signal`/สัญญาณที่ต้องประเมิน; never translate “possible fraud” as confirmed breach. **Evidence:**O-AI,K025,R63B§5.3 and factor-substitution warning. **Misconception/check:** AI scoring or geolocation supplies an additional independent MFA factor.

### L06-S04 — `slide-d3-06-04-implausible-login-evidence`

**Concept/message:** implausible travel is evidence to investigate, not a verdict. **Presentation/visual:** two same-account observations on one normalized UTC time axis with geographically distant reported locations; label them as observed IP-geolocation data, not proof of the person's physical location.

**Reading:** contextual corroboration, routing/VPN/geolocation uncertainty and relevant session/activity records; no invented universal travel-speed formula. **Info:** same explanation and source of the authored timeline example. **TH/EN:** “ตำแหน่งที่รายงานจากข้อมูลเครือข่าย” and “อาจผิดปกติ”. **Evidence:**O-AI,K025,R63B§5.3;N/U do not teach this case. **Misconception/check:** two distant logs conclusively identify theft or a particular attacker.

### L06-S05 — `slide-d3-06-05-proportionate-authorized-response`

**Concept/message:** respond according to evidence, policy and authority. **Presentation/visual:** observe→corroborate/assess→authorized additional authentication, session restriction or escalation, with conditions labelled rather than a rigid always-first sequence.

**Reading:** state when urgent policy-authorized containment can occur; do not require delay for an investigation where immediate action is mandated. Preserve privacy and avoid unsupported permanent deletion. **Info:** same explanation and no universal threat-response playbook claimed. **TH/EN:** “ตามอำนาจและเงื่อนไขที่กำหนด” retained; separateตรวจสอบ/ยืนยันใหม่/ยุติเซสชัน/ส่งต่อ. **Evidence:**O-AI,K025,R63B§5.3. **Misconception/check:** every alert demands deletion or every alert must be ignored until certain compromise.

### L06-S06 — `slide-d3-06-06-anomalous-login-decision`

**Concept/message:** use the risk signal to support an authorized decision while respecting uncertainty. **Presentation/visual:** short analyst case with the policy/authority stated; recommended option corroborates and follows the specified response/escalation process, versus ignore, declare certainty/delete, or treat analytics as authorization.

**Reading:** full reasons and limits, link the factor/permission distinction; no copied production question or real-incident claim. **Info:** same explanations and official/technical sources. **TH/EN:** both versions retain evidence uncertainty and permitted analyst actions. **Evidence:**O-AI,K023–025,R63B;AI02. **Misconception/check:** a plausible model-generated alert can replace evidence or automatically grant broader account rights.

## Learning design lessons carried forward

Use the current Domain 1/2 compositions and final reports as design evidence, not their stale planned counts or APIs. Domains 1/2 total 12/103 and 8/55. Older D2 architecture JSON examples incorrectly name fields; current code/schema controls implementation.

- Meaningful flows show who decides, what action is requested and which boundary changes. Permission tables, declared-policy checks, before/after entitlement sets and an accurately labelled timeline have instructional jobs; repeated generic card grids do not.
- Existing D2 QA found inherited paragraph typography can shrink timeline/quote labels despite passing Node tests. Inspect computed/rendered labels and the complete viewport in both languages; class names alone do not prove readable styling.
- Avoid nested maximum widths, excessive padding, small text and accidental Reading fallback. Preserve current stage sizing/measurement ownership; resolve density in the composition, not by forcing overflow hidden.
- Reading/Info must preserve all source concepts and scenario reasons with the same caveats, without original-source editing commentary or learner-facing reference-number puzzles.
- Do not force task labels into fake groups, assign a fixed number of people to SoD, invent taxonomies from screenshots or claim “heavily tested” topics. Learning quality needs academic judgment and real visual review as well as tests.
- Use original diagrams/code-native visuals, not copied lecture pictures or AI-generated decorative diagrams. Rights and source checks precede publication. No raster/image-generation task is required for this plan.

## Future lesson-by-lesson acceptance gates — not executed

After explicit authorization: freeze the current dirty baseline, then implement **L01→L02→L03→L04→L05→L06**. For each lesson, complete source/bilingual review, targeted tests, guarded compositions, every slide in TH/EN at 1366×768/1920×1080, full Reading/Info, every scenario outcome, keyboard/overview/fullscreen state, independent progress/reload/directResume, spec compliance review and code-quality review before the next lesson. Refresh counts/IDs and resolve actual defects rather than weakening tests. A42-slide final design would entail 168 presentation cases; this is a future estimate, not completed browser QA.

Human approval must confirm six-lesson scope, correction/supplement boundaries, authored scenario policies and visual direction. Final accepted slide counts can change with an evidence-based storyboard adjustment before IDs are published. **Stop at this planning package until implementation is explicitly authorized.**
