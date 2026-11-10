"""Original English authoring, staged separately from translation and integration."""
import json,pathlib,random
OUT=pathlib.Path(__file__).resolve().parent
items=[]
def add(i,q,c,reason,*wrong):
 assert len(wrong)==3
 items.append(dict(id=i,question=q,choices=[dict(text=c,reason=reason)]+[dict(text=t,reason=r) for t,r in wrong]))

add(1041,"An administrator is authorized to change a payroll configuration. Investigators later need to establish which account changed a specific value and when. Which evidence most directly supports the accounting function of AAA?",
 'A protected activity record linking the account, change and timestamp', 'Accounting records attributable actions. A protected account/action/time record addresses the investigation; authentication and permission records alone do not show the change.',
 ('A successful login record for the administrator that morning','A login shows authentication at that time, not which later configuration action occurred.'),
 ('An approved role definition permitting configuration changes','The role establishes authorization, not evidence that a particular account performed this change.'),
 ('A current inventory listing the payroll server and its owner','Inventory identifies the asset and owner, not the actor and time of the configuration change.'))
add(1042,"A supplier disputes having approved a particular purchase order. The customer has a verifiable digital signature covering that order, with trustworthy evidence of the signing-key binding and its control at signing. Which security property is this evidence primarily intended to support?",
 'Non-repudiation of the recorded approval','Non-repudiation concerns evidence of a past action. The stated signature and supporting key evidence address the disputed approval; they are not an unconditional legal guarantee.',
 ('Authentication of a new login session','Authentication of a current session does not by itself establish approval of a particular past order.'),
 ('Confidentiality of the stored purchase order','A signature does not hide the signed order from readers.'),
 ('Availability of the purchase-order service','Signature evidence does not demonstrate service uptime or recoverability.'))
add(1043,"A training provider needs to send joining instructions to registered attendees. Its proposed form asks for an email address, date of birth, home address and passport number. Only the email address is needed for the stated purpose, and no other collection requirement applies. Which change best applies data minimization?",
 'Collect the email address and omit the three unnecessary fields','Minimization limits collection to information needed for the stated purpose. Protecting or later deleting unnecessary data does not remove the unnecessary collection.',
 ('Collect every field but encrypt the stored form','Encryption can protect confidentiality but still collects unnecessary personal data.'),
 ('Collect every field but restrict staff access','Access restrictions do not justify collecting fields unnecessary for joining instructions.'),
 ('Collect every field but delete it after the course','A deletion schedule limits duration but does not minimize initial collection.'))
add(1044,"An approved schedule requires visitor contact records to be deleted 30 days after the visit ends. It applies to every record in this case, with no preservation exception. A record was created 40 days ago for a visit that ended 12 days ago. Which action follows the schedule?",
 'Retain it for now and schedule deletion 30 days after the visit ended','The specified trigger is the end of the visit. Only 12 days have elapsed from that trigger, regardless of when the record was created.',
 ('Delete it now because its creation was more than 30 days ago','Creation time is not the trigger defined in this schedule.'),
 ('Restart the 30-day period whenever an employee reads it','Reading a record does not reset the supplied visit-end trigger.'),
 ('Keep it for 30 more days starting from this review','The review date is not the retention trigger, so this would extend the defined period.'))
add(1045,"A verified customer requests erasure of two record categories. The approved disposition rule permits deletion of obsolete marketing preferences but requires the related invoice records to be retained for two more years. These are the only applicable requirements. Which response follows the supplied rule?",
 'Delete the obsolete preferences and retain the invoices for the required period','The request must be applied by record category. The supplied retention requirement covers invoices, not the obsolete preferences.',
 ('Delete both categories because a verified request overrides retention','Verification establishes who requested erasure, not an override of the stated retention requirement.'),
 ('Retain both categories until the invoice period ends','The invoice requirement does not extend to preferences whose deletion is permitted.'),
 ('Replace both categories with encrypted copies and close the request','Encryption is not erasure and does not implement the category-specific disposition.'))
add(1046,"A clinic permits an analyst to read appointment contact details for scheduling. A stated purpose rule prohibits using these details for product promotion. The analyst exports them for a promotional campaign; no unauthorized reader receives them, no values change and access is logged. Which concern is most directly demonstrated?",
 'Personal data is being used outside its permitted purpose','Privacy includes appropriate use of personal data. Authorized reading, accurate values and an audit trail do not make the prohibited promotional purpose permissible.',
 ('The data values have lost integrity during storage','The scenario states that values did not change; it demonstrates improper use rather than altered data.'),
 ('The scheduling service has lost availability','No service interruption or inability to access scheduling is stated.'),
 ('The analyst cannot be held accountable for the export','The export is logged and attributed. Accountability evidence does not itself authorize the purpose.'))
add(1047,"At a staff kiosk, a person enters an employee identifier. The kiosk has not yet checked a password, device or biometric evidence. Which statement best describes what has occurred?",
 'An identity has been claimed, but the claim has not been authenticated','Identification presents a claimed identity. The stated process has not yet checked evidence that supports the claim.',
 ('The person has been authenticated by naming an existing account','Knowing or entering an identifier is not the stated verification of the claimant.'),
 ('The person has been authorized to use all staff services','No resource-permission decision has been made.'),
 ('The person has completed identity proofing for enrollment','Entering an identifier at a kiosk does not establish enrollment identity-proofing evidence.'))
add(1048,"A risk assessment estimates exposure to unauthorized transfers before considering any controls. It then estimates the exposure remaining after a transaction-approval control operates. Which pair correctly names these estimates?",
 'Inherent risk before controls; residual risk after controls','Inherent risk excludes the effect of controls; residual risk is the exposure remaining after them. The latter need not be zero or accepted.',
 ('Residual risk before controls; inherent risk after controls','This reverses the before-control and remaining-risk meanings.'),
 ('Risk appetite before controls; risk tolerance after controls','Appetite and tolerance express organizational boundaries, not these two exposure estimates.'),
 ('Transferred risk before controls; avoided risk after controls','Neither insurance/transfer nor ending the risky activity is stated.'))
add(1049,"For a simple loss estimate, an equipment asset is valued at USD60,000. One specified incident is expected to destroy 30% of that value. Using SLE = asset value × exposure fraction, what is the estimated loss for one such incident?",
 'USD18,000 per incident','60,000 × 0.30 = 18,000 dollars for one incident. No annual occurrence rate is supplied, so this is not an annualized estimate.',
 ('USD6,000 per incident','6,000 is 10% of 60,000, not the supplied 30% exposure.'),
 ('USD42,000 per incident','42,000 is the value remaining after a 30% loss, not the expected loss.'),
 ('USD60,000 per incident','The full asset value assumes 100% loss rather than the stated exposure fraction.'))
add(1050,"A risk model estimates a loss of USD12,000 for each specified event and an average occurrence rate of 0.25 events per year. Using ALE = single-event loss × annual occurrence rate, what is the annualized loss estimate?",
 'USD3,000 per year','12,000 × 0.25 = 3,000 dollars per year. It is a model-based annual expectation, not a guarantee of spending or loss in any one year.',
 ('USD12,000 per year','This ignores the occurrence rate and treats the single-event loss as an annual amount.'),
 ('USD48,000 per year','Dividing by 0.25 reverses the required annualization; the given rate must be multiplied.'),
 ('USD3,000 per event','The amount is annualized; the supplied loss per event remains 12,000 dollars.'))
add(1051,"For the next year, two controls have comparable all-in annual costs and expected loss-reduction estimates. A costs USD3,000 and reduces expected loss by USD8,000; B costs USD6,000 and reduces it by USD7,000. A binding internal requirement also mandates privileged-action logging. B provides that logging; A does not, and no separate logging control is available. Which recommendation best uses the supplied evidence?",
 'Recommend B because it meets the binding requirement and has a positive net expected benefit','B meets the stated constraint and its estimated reduction exceeds its cost by 1,000 dollars over the same year. A has a larger net estimate but fails the binding requirement.',
 ('Recommend A because its larger net benefit overrides the logging requirement','A favorable estimate does not authorize ignoring a binding internal requirement.'),
 ('Accept the risk because neither control removes every possible loss','Complete risk elimination is not a prerequisite for a defensible treatment choice.'),
 ('Reject B because a control cost above A cannot be justified','Relative price alone ignores mandatory capabilities and the positive supplied benefit of B.'))
add(1052,"A team\'s approved matrix rates high-likelihood/high-impact risks as Critical and high-likelihood/low-impact risks as Medium. Issue A has 40 findings, high likelihood and low business impact. Issue B has two findings, high likelihood and high business impact. Policy treats Critical risks before Medium risks. Which priority follows this assessment?",
 'Treat B first because its likelihood and impact place it in the Critical category','The supplied matrix and treatment policy prioritize B. Finding counts alone do not determine the assessed business risk.',
 ('Treat A first because its larger finding count establishes greater risk','The policy uses likelihood and impact, not the raw number of findings.'),
 ('Treat both as equal because their likelihood ratings are the same','Equal likelihood does not erase the stated difference in business impact.'),
 ('Postpone both because no monetary loss estimates are available','The approved qualitative matrix supports this priority without monetary estimates.'))
add(1053,"A team closes a risk-treatment action after installing a required second-approver control. A subsequent controlled test shows that one user can still authorize the transaction alone. The asset and business use have not changed. Which response best completes risk monitoring and review?",
 'Reassess remaining exposure and revise the treatment using the failed test evidence','Observed control ineffectiveness challenges the assumed reduction. Monitoring should update residual-risk assessment and treatment, not equate installation with effectiveness.',
 ('Keep the risk closed because installation completed the approved action','Installation alone does not demonstrate that the intended risk-reduction objective is met.'),
 ('Record a new asset owner without revisiting the control assessment','Changing an ownership entry does not address the observed failure of the control.'),
 ('Reclassify the test as an accepted exception without authorization','Acceptance requires appropriate authority; the failed test does not itself grant an exception.'))
add(1054,"A mandatory standard says that every new service account must have an assigned owner. Administrators need a document specifying the sequence for recording that owner, creating the account and verifying the assignment. Which document best meets this need?",
 'A procedure implementing the account-ownership requirement','A procedure specifies operational steps. It implements the standard rather than replacing the mandatory requirement.',
 ('A policy explaining why account ownership matters','A policy supplies direction and purpose rather than the requested operational sequence.'),
 ('A standard restating that an owner is mandatory','The requirement already exists; repeating it does not provide the implementation steps.'),
 ('A guideline suggesting optional ownership practices','Optional recommendations do not supply the required operational procedure.'))
add(1055,"An organization\'s mandatory password standard requires at least 14 characters. A nonbinding usability guideline recommends an easier-to-type 10-character pattern. No exception has been approved. An administrator must configure a new system. Which choice follows the document roles stated here?",
 'Enforce at least 14 characters and raise the conflicting recommendation for review','The mandatory standard governs this configuration. A nonbinding guideline does not create an exception.',
 ('Enforce 10 characters because the guideline addresses usability','The guideline\'s subject does not override the mandatory length requirement.'),
 ('Let each user choose which document to follow','Users are not given authority to waive the mandatory standard.'),
 ('Enforce 12 characters as a compromise between the documents','An arbitrary midpoint still fails the stated 14-character minimum.'))
add(1056,"An organization confirms that a regulator\'s access-review requirement applies to its service. A vendor brochure suggests a different review approach, and an industry framework offers voluntary outcomes. Neither has been adopted as an internal obligation. Which statement correctly identifies the binding requirement in this case?",
 'The applicable regulatory requirement must be met','Applicability is explicitly supplied. Voluntary framework outcomes and a vendor suggestion do not displace that requirement.',
 ('The vendor recommendation takes precedence for its product','A product recommendation does not override the stated applicable regulation.'),
 ('The voluntary framework becomes binding because it is widely used','Popularity does not itself create the obligation excluded by the scenario.'),
 ('The three sources have equal mandatory force','The scenario distinguishes an applicable requirement from two nonbinding sources.'))
add(1057,"An assessment confirms compliance with a defined checklist for an existing service. A separate risk assessment finds an exposed data-sharing path outside that checklist\'s scope. What is the most defensible conclusion?",
 'The compliance result can stand within its scope while the additional risk still needs assessment and treatment','A scoped compliance result does not establish complete security. The new evidence must be evaluated on its own merits.',
 ('The compliance result proves that the data-sharing path is acceptable','A finding outside the checklist is not accepted merely by passing that checklist.'),
 ('The new finding automatically invalidates every completed checklist test','Additional risk does not by itself disprove tests that were valid within their stated scope.'),
 ('The risk can be deferred until a checklist requirement explicitly names it','Risk management is not limited to risks already enumerated in a compliance checklist.'))
add(1058,"A records room already has a functioning door lock. A new sensor records after-hours entry and sends an alert to the duty officer, but it does not block the door or change access rights. What is the new sensor\'s primary security function in this use?",
 'Detective','The specified purpose is discovering and reporting entry. The separate lock performs the described access prevention.',
 ('Preventive','The sensor does not block entry or change permission in this scenario.'),
 ('Corrective','The sensor reports an event rather than restoring a damaged state.'),
 ('Directive','The sensor detects activity rather than instructing people how to behave.'))
add(1059,"A badge reader at a restricted archive is temporarily unavailable. An approved exception permits an attendant to verify each person\'s identity and authorization, control entry and record access until repair. The objective remains admitting only authorized people. How is this temporary arrangement best described?",
 'A compensating control for the unavailable reader','The approved alternative addresses the same entry-control objective while the preferred mechanism is unavailable; effectiveness still requires monitoring.',
 ('Acceptance of unrestricted archive access','Entry remains controlled; the organization has not simply accepted unrestricted access.'),
 ('A replacement of the access objective with visitor logging','The attendant also verifies authorization and controls entry, so logging is not the only objective.'),
 ('A permanent elimination of the need to repair the reader','The exception is temporary and does not establish that the repair requirement has ended.'))
add(1060,"One access-control platform denies unapproved badge entry at a door. The same platform also supplies historical entry records for an officer to identify unauthorized attempts during review. Which classification best describes these two uses?",
 'Preventive for the entry decision; detective for the record review','Control functions depend on use. Denying entry prevents the specified access, while reviewing records discovers attempted violations.',
 ('Detective for the entry decision; preventive for the record review','This reverses enforcement at entry and later discovery from records.'),
 ('Corrective for both because one platform performs both tasks','Neither stated task restores damage, and one product can perform different functions.'),
 ('Directive for both because access policy governs the platform','Being governed by policy does not make every implemented function directive.'))
add(1061,"An engineer finds credible evidence that a deployment defect could interrupt a public emergency-call service. The engineer is authorized to escalate urgent safety risks to the on-call incident lead, who can coordinate a safe response. Which action best supports the ISC2 duty to protect society and infrastructure?",
 'Escalate promptly through the authorized urgent-safety channel with the supporting evidence','Prompt authorized escalation addresses potential public harm while enabling coordinated action. The canon does not grant unrestricted disclosure or unsafe operational authority.',
 ('Wait for the next routine report because no outage has occurred','The credible urgent safety risk warrants the available escalation rather than routine delay.'),
 ('Publish the defect details immediately to demonstrate transparency','Public disclosure is not the stated authorized response and may increase risk before coordination.'),
 ('Disable the service immediately without involving its operators','Uncoordinated disabling could itself harm emergency access and exceeds the stated escalation role.'))
add(1062,"A manager asks an analyst to change a report so a test not yet performed appears completed before the audit deadline. The analyst is authorized to report actual test status and unresolved limitations. Which response best meets the ISC2 obligation of honest professional conduct?",
 'Report the actual status and document the unperformed test as an open limitation','Truthful reporting avoids a false assurance claim while making the remaining work visible. A deadline does not justify misrepresenting evidence.',
 ('Mark the test complete if its outcome is expected to be favorable','An expected result is not evidence that the test occurred.'),
 ('Omit the test from the report without disclosing the gap','Concealing a material unfinished test would misrepresent the report\'s coverage.'),
 ('Copy last year\'s result into the current completion field','Historical results do not establish current test completion.'))
add(1063,"A consultant is assigned to assess a safety-critical control system using a specialized method they have never applied. The engagement permits raising capability limits and bringing in a qualified specialist. Which response best provides competent service to the client?",
 'Disclose the capability limit and arrange qualified support before making the assessment','Competent service includes recognizing limits and obtaining suitable expertise within the engagement. This protects the client without pretending expertise or abandoning the work.',
 ('Complete the assessment alone using the familiar enterprise checklist','Familiarity with a different checklist does not establish competence in the required specialized method.'),
 ('Present the assessment as expert work after reading a short summary','Reading a summary does not substantiate the expert capability being claimed.'),
 ('Decline the whole engagement without discussing the permitted specialist support','The scenario provides a route to competent delivery; immediate withdrawal ignores that available option.'))
add(1064,"A professional wants to help new security practitioners learn from a completed engagement. The client permits sharing an approved, generalized lesson but prohibits disclosing its configurations and identities. Which activity best advances the profession within those constraints?",
 'Teach the approved generalized lesson and invite technical peer feedback','Authorized knowledge sharing and peer learning support professional development while respecting the client\'s confidentiality limits.',
 ('Share the original configuration because realistic details improve training','Instructional value does not override the explicit confidentiality restriction.'),
 ('Publish the client\'s identity to make the lesson more credible','Naming the client violates the supplied restriction and is unnecessary for the approved lesson.'),
 ('Delay all educational sharing until the full engagement record can be published','The client already permits a useful generalized lesson; waiting for unrestricted disclosure is unnecessary to share it responsibly.'))

add(1065,"A dashboard shows on-time remediation rising from 80% in June to 95% in July. June counted all critical findings due that month. July counted only critical findings that had already been closed, excluding overdue open findings. Before concluding performance improved, what should the analyst do?",
 'Recalculate both months using the same due-in-month inclusion rule','The changed denominator excludes failures in July. Comparable cohorts and definitions are needed before interpreting the trend.',
 ('Accept the increase because both measures are percentages','A common display unit does not make different inclusion rules comparable.'),
 ('Average 80% and 95% to obtain the improvement rate','Averaging the displayed percentages does not repair the changed populations.'),
 ('Compare only the absolute number of closed findings in each month','Closed counts alone still omit the due population and overdue open findings.'))
add(1066,"Two unrelated organizations each have a local account displayed as 'rlee'. Their directories use independent namespaces, and no verified account-linking evidence is available. Which conclusion is justified?",
 'The matching names alone do not establish that the accounts represent the same person','An identifier has meaning within a scope. Equal display strings across independent namespaces do not establish entity linkage.',
 ('The accounts represent the same person because usernames are globally unique','Local usernames are not stated to be globally unique.'),
 ('One account must be fraudulent because duplicate names cannot be legitimate','Independent namespaces can legitimately contain the same identifier string.'),
 ('Permissions can be copied between the accounts because their identifiers match','A name match establishes neither common ownership nor an approved permission assignment.'))
add(1067,"In NIST digital-identity terminology, a service records a binding between a subscriber\'s identity, an identifier and an issued authenticator. The subscriber controls the authenticator to demonstrate authentication. What is the recorded binding called?",
 'A credential','NIST distinguishes the credential binding from the authenticator used to demonstrate control. It is not universally just a username/password pair.',
 ('An authenticator','The authenticator is the controlled secret or device, not the binding described here.'),
 ('An authorization policy','An authorization policy governs permitted resource actions, not this identity-to-authenticator binding.'),
 ('An audit event','An audit event records an action; it is not the identity binding being defined.'))
add(1068,"A new analyst\'s approved access consists of the standard reporting role. A peer has that role plus a separately approved payment-release exception for another duty. The new analyst does not perform that duty. Which initial provisioning choice best follows the approved scope?",
 'Assign the standard reporting role without copying the peer\'s exception','The initial grant should implement the new analyst\'s approved needs. A peer\'s legitimate additional duty does not extend this authorization.',
 ('Copy all of the peer\'s rights to ensure identical starting access','This would include an exception outside the new analyst\'s approved duties.'),
 ('Copy the exception temporarily and remove it at the next review','A later review does not authorize an unnecessary initial grant.'),
 ('Ask the new analyst to use the peer\'s account for reports','Account sharing would not implement the approved individual provisioning.'))
add(1069,"An organization\'s access-review policy requires high-risk administrative roles to be reviewed monthly and ordinary reporting roles quarterly. Role classification has been verified, and event-driven reviews remain available when duties change. Which routine schedule follows this policy?",
 'Review the administrative roles monthly and reporting roles quarterly','The supplied risk classifications determine the routine cadence. Event-driven review complements rather than cancels that schedule.',
 ('Review every role quarterly because it is a common audit interval','A familiar interval does not override the explicit monthly requirement for high-risk roles.'),
 ('Review every role annually unless an incident occurs','This ignores both stated routine review intervals.'),
 ('Review each role once at provisioning and rely solely on duty-change notices','Initial approval and event-driven updates do not replace required recurring reviews.'))
add(1070,"A file service uses a list of subjects, files and permitted operations to enforce centrally approved access decisions. An assessor sees this list but has no evidence that file owners may change permissions. Which conclusion is best supported?",
 'The list is an access-control mechanism; it alone does not establish a discretionary model','An ACL can implement policy decisions. Determining the decision model requires evidence of who may grant rights and under what rules.',
 ('The list proves the service uses discretionary access control','A list of permissions does not by itself prove owner discretion over grants.'),
 ('The list proves the service uses mandatory classification labels','No mandatory classification or clearance rule is supplied.'),
 ('The list proves the service bases access on organizational job roles','The representation alone does not show that a job-role assignment policy generated it.'))
add(1071,"A folder grants read-only access through one flat group with 12 members. Membership will remain unchanged. There are no individual grants, nested groups or other applicable rules. An administrator proposes adding write permission to that group. Whose effective folder access would change under this model?",
 'All 12 current group members would gain write access','The grant is made to the shared group and applies to every member under the explicitly limited model. It is not an individual exception.',
 ('Only the group member who requested the change','The proposed grant targets the group, not the requester alone.'),
 ('Only people who join the group after the change','Existing members also receive the group\'s changed permission.'),
 ('Only the administrator who edits the group permission','Editing a grant does not make the administrator its sole beneficiary.'))
add(1072,"A service team approves a 30-minute privileged maintenance task. Policy requires elevated permissions to end when the approved window closes; ordinary access must remain. Which arrangement most directly implements that requirement?",
 'Grant the approved elevation with enforced expiry and retain the ordinary role','Time-bounded elevation constrains the duration of privilege while preserving ordinary work. It implements the stated policy without treating all access as temporary.',
 ('Keep the elevation until the next quarterly access review','A quarterly review cannot enforce the specified 30-minute end time.'),
 ('Delete the person\'s entire account when the window ends','This would remove ordinary access that the scenario says must remain.'),
 ('Grant permanent elevation and rely on a reminder to stop using it','Stopping voluntary use does not end the elevated permission as required.'))
add(1073,"A resource policy permits access only when the requester is in the Research role, uses a compliant managed device and connects during the approved hours. Otherwise it denies access. Which request satisfies the policy?",
 'A Research user on a compliant managed device during approved hours','All three required conditions are true. Satisfying only some conditions is insufficient under the supplied conjunction.',
 ('A Research user on an unmanaged device during approved hours','The managed/compliant-device condition is not satisfied.'),
 ('A Finance user on a compliant managed device during approved hours','The required Research-role condition is not satisfied.'),
 ('A Research user on a compliant managed device outside approved hours','The approved-hours condition is not satisfied.'))
add(1074,"Two IP subnets must communicate according to an existing access policy. The current device is a Layer 2 switch that forwards frames within a subnet but provides no inter-subnet function. Which capability is needed to forward traffic between the subnets?",
 'IP routing between the subnets','Routing provides inter-network packet forwarding. A multilayer device could supply it, but the stated Layer 2 switch does not.',
 ('Additional MAC-based frame forwarding within the existing subnet','More within-subnet switching does not supply inter-subnet routing.'),
 ('DNS name resolution for the receiving hosts','DNS maps names to addresses; it does not forward packets between subnets.'),
 ('Address leasing for hosts on each subnet','Address assignment does not itself provide the required forwarding path.'))
add(1075,"A real-time sensor application sends independent samples. Late samples have no value, occasional loss is acceptable, and the application handles any recovery it needs. The design does not require transport-layer ordered retransmission. Which transport best matches these stated needs?",
 'UDP, which does not itself require reliable ordered delivery','UDP fits the stated datagram tradeoff. The application must provide any needed recovery and security; UDP is not a confidentiality service.',
 ('TCP, because retransmitting every missing sample is required here','The scenario explicitly does not require transport-level ordered retransmission of late samples.'),
 ('TCP, because choosing it supplies payload encryption','TCP does not by itself supply confidentiality.'),
 ('UDP, because it guarantees every sample arrives within a deadline','UDP provides no such delivery or timing guarantee.'))
add(1076,"A small office uses private IPv4 addresses and PAT to share one public address. Policy must also restrict which external services users may contact. Which assessment correctly separates these needs?",
 'PAT supplies address/port translation; access-control rules must enforce the service restrictions','Translation and authorization are different functions, even when one device implements both. The stated policy needs explicit enforcement.',
 ('PAT automatically enforces the organization\'s approved-service list','Address translation does not know the organization\'s unstated approved-service policy.'),
 ('Private addressing proves outbound destinations are authorized','An address range does not establish which services a user is permitted to contact.'),
 ('Adding more translated public addresses creates the required service policy','Changing translation capacity does not define or enforce service authorization.'))
add(1077,"An application receives the expected IP address from an authenticated DNS response for a service name. Its subsequent connection to that address times out. What does this evidence establish?",
 'Name resolution succeeded, but service connectivity has not been demonstrated','Obtaining the expected address completes the stated name lookup. Connection failure still needs separate reachability/service investigation.',
 ('The DNS lookup failed because the connection timed out','The evidence explicitly records successful resolution before the connection attempt.'),
 ('The service is reachable because its name resolved correctly','A valid address answer does not demonstrate a successful connection.'),
 ('The destination must be running an incorrect application protocol','A timeout alone does not determine the destination\'s protocol or exact cause.'))
add(1078,"A central monitoring service receives complete logs from its servers, but their clocks differ by several minutes. Forwarding is working, and an approved time source is available. Which service should be configured to address clock alignment?",
 'NTP against the approved time source','NTP supplies time synchronization. It supports correlation but alone does not establish the integrity or authenticity of every log record.',
 ('DNS against the approved name resolver','Name resolution does not synchronize the server clocks.'),
 ('SNMP polling of interface counters','Management counter collection does not by itself correct time settings.'),
 ('SFTP delivery of additional log copies','Copying logs does not fix the already-stated clock disagreement.'))
add(1079,"An assessor needs visibility into application-to-database flows between internal workload segments. The existing sensor sees only traffic entering or leaving the organization at its internet edge. Which additional observation point best addresses this gap?",
 'A monitoring point that receives the relevant internal workload-to-workload flows','The specified flows are east-west traffic inside the environment. An internet-edge-only view does not necessarily observe them.',
 ('Another sensor receiving only the same internet-edge traffic','Duplicating the existing observation scope does not expose internal-only flows.'),
 ('A report of public DNS queries made by external clients','Those queries do not show the internal application-to-database exchanges.'),
 ('An inventory of the organization\'s public IP addresses','An address inventory is not observation of the required internal traffic.'))
add(1080,"A resource policy requires reevaluation of an ongoing session when verified endpoint protection stops, and suspension of resource access until compliance is restored. During a session, that change is confirmed. The VPN remains connected. Which action follows the policy\'s Zero Trust approach?",
 'Reevaluate the session and suspend the resource access as the policy specifies','Ongoing authorization can respond to relevant verified context changes. The surviving VPN connection does not override the explicit resource policy.',
 ('Keep resource access unchanged until the VPN disconnects','Network admission is not sufficient to override the supplied reevaluation rule.'),
 ('Wait until the next login before evaluating the confirmed change','The stated rule applies during the ongoing session, not only at login.'),
 ('Require a fresh VPN login while leaving resource access available until it succeeds','VPN reauthentication does not implement the required resource suspension; continued access leaves the confirmed policy condition untreated.'))
add(1081,"Several independent research institutes need a cloud environment reserved for their consortium. They share specified security and governance concerns, and access is restricted to participating institutes rather than the general public or one institute alone. Which deployment model best matches this requirement?",
 'Community cloud','A community cloud serves a defined community of organizations with shared concerns. It need not be restricted to one organization\'s exclusive use.',
 ('Private cloud for one institute exclusively','Exclusive use by one organization does not meet the described multi-organization community scope.'),
 ('Public cloud open for general use','General public availability differs from the stated restriction to the consortium.'),
 ('Hybrid cloud merely because several institutes are members','Multiple participating organizations do not by themselves establish a composition of distinct cloud infrastructures.'))
add(1082,"Two endpoints have already established and protected a shared session key. They now need to encrypt a large stream for confidentiality. Key establishment and signing are outside this decision. Which mechanism best fits the bulk-protection role?",
 'Symmetric encryption using the established session key','Symmetric encryption is suited to bulk confidentiality using the shared key. This choice does not replace key protection or any separately needed integrity mechanism.',
 ('A hash of each block without encrypting its contents','Hashing can support content comparison but does not conceal the plaintext stream.'),
 ('A digital signature on each unencrypted block','Signatures support origin/integrity evidence, not confidentiality of exposed block contents.'),
 ('Public-key encryption of a newly generated session key','That addresses key establishment, which is already completed and outside the requested bulk-protection role.'))
add(1083,"A release team distributes a software package with a digital signature. The publisher keeps its signing private key secret, and recipients obtain an authenticated copy of the publisher\'s public key. Which key use allows recipients to check the signature?",
 'Verify with the publisher\'s public key','The corresponding authenticated public key verifies a signature made with the publisher\'s private signing key. Verification is not decryption of confidential package content.',
 ('Verify with each recipient\'s private key','A recipient\'s private key is not the public verification key corresponding to the publisher\'s signature.'),
 ('Obtain and use the publisher\'s private key','Recipients do not need the secret signing key; distributing it would compromise signing control.'),
 ('Verify with a shared encryption key selected by the recipient','An unrelated symmetric key does not verify the publisher\'s public-key signature.'))

assert [q['id'] for q in items]==list(range(1041,1084))
(OUT/'english-authoring.json').write_text(json.dumps(items,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print('Staged',len(items),'original English items; no bank edits')
