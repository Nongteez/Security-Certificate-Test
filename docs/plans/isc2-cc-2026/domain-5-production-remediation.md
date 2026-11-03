# Domain 5 academic remediation ledger

Date2026-11-03. All21 historical findings retained below. Source locations/wording are in the immutable audit and originals. Resolutions apply to the new curated foundation, not retroactive repairs to course material. Confidence high for the limited claim or exclusion. F19 provenance/cropping limitations remain disclosed, nonblocking because no unseen text is relied upon.

## F01 High

**Affected objective:** 5.1. **Original evidence:** I07 purpose; T:27–29 instructor; N:59–70 and S:59 summary corrections.

**Problematic claim / historical technical issue:** Slide attributes confidentiality, integrity and authenticity to encryption generally; transcript partially qualifies this. Bare encryption does not establish integrity/authenticity.

**Historical required treatment:** Teach confidentiality separately; authenticated encryption/MAC/signature mechanisms supply additional assurances. R17. **Verified correction; curating required.**

**Selected interpretation:** Symmetric encryption is efficient for bulk protection. In public-key encryption the recipient’s public key protects content for the recipient’s private key; a signature is generated with the signer’s private key and verified with the matching trusted public key.

**Mandatory qualifiers:** Encryption alone does not imply integrity/authenticity. Signing is not generically private-key encryption. TLS versions differ.

**Authoritative evidence:** R04, R05, R17, detailed locations in knowledge reference register. **Resolution/status:** RESOLVED by corrected/qualified curated claim. **Confidence:** high for limited use. **Question impact:** AT04; all items inherit these conditions; no unsupported related enrichment is assessed.

## F02 High

**Affected objective:** 5.1. **Original evidence:** T:49–53 signing explanation versus I12; N:104–108; S:142–156.

**Problematic claim / historical technical issue:** Signing described as private-key encryption followed by public-key decryption. This is not a general digital-signature model and invites wrong key-role answers.

**Historical required treatment:** Use sign with private key / verify with corresponding trusted public key; signature does not hide content. R04. Preserve the distinction between accurate slide and simplified narrative. **Verified correction.**

**Selected interpretation:** Symmetric encryption is efficient for bulk protection. In public-key encryption the recipient’s public key protects content for the recipient’s private key; a signature is generated with the signer’s private key and verified with the matching trusted public key.

**Mandatory qualifiers:** Encryption alone does not imply integrity/authenticity. Signing is not generically private-key encryption. TLS versions differ.

**Authoritative evidence:** R04, R05, R17, detailed locations in knowledge reference register. **Resolution/status:** RESOLVED by corrected/qualified curated claim. **Confidence:** high for limited use. **Question impact:** AT04; all items inherit these conditions; no unsupported related enrichment is assessed.

## F03 High

**Affected objective:** 5.1. **Original evidence:** I19–I22; T:65–79; N:90–102; S:101–128.

**Problematic claim / historical technical issue:** MD5 presented alongside SHA-256; fast hash requirements placed beside password storage. Learners may select a fast unsalted digest for passwords.

**Historical required treatment:** Password storage needs a dedicated salted, costed password-hashing scheme (R07). Do not teach MD5 as a secure collision-resistant option. N/S already improve the lecture. No parameter memorization target. R18 independently confirms MD5 is unsuitable where collision resistance is required. **Verified correction.**

**Selected interpretation:** A digest comparison can show whether a file matches a trusted reference; it does not by itself identify the person who changed it. Collision resistance means finding distinct matching inputs is infeasible, not that collisions cannot exist.

**Mandatory qualifiers:** Reference digest must be authenticated; MD5 unsuitable when collision resistance is required; passwords need dedicated salted costed hashing.

**Authoritative evidence:** R19, R18, R07, detailed locations in knowledge reference register. **Resolution/status:** RESOLVED by corrected/qualified curated claim. **Confidence:** high for limited use. **Question impact:** AT05; all items inherit these conditions; no unsupported related enrichment is assessed.

## F04 High

**Affected objective:** 5.1. **Original evidence:** I22 collision bullet; T:75–79 versus N:97 and S:120–124.

**Problematic claim / historical technical issue:** “No two different inputs” confuses impossibility with computational collision resistance; avalanche is also conflated with collision resistance.

**Historical required treatment:** A finite digest space permits collisions; security means finding them is computationally infeasible. Avalanche describes output change. N/S correct this. R19 supplies the primary hash definition. **Verified correction; claim-level curation still required before drafting.**

**Selected interpretation:** A digest comparison can show whether a file matches a trusted reference; it does not by itself identify the person who changed it. Collision resistance means finding distinct matching inputs is infeasible, not that collisions cannot exist.

**Mandatory qualifiers:** Reference digest must be authenticated; MD5 unsuitable when collision resistance is required; passwords need dedicated salted costed hashing.

**Authoritative evidence:** R19, R18, R07, detailed locations in knowledge reference register. **Resolution/status:** RESOLVED by corrected/qualified curated claim. **Confidence:** high for limited use. **Question impact:** AT05; all items inherit these conditions; no unsupported related enrichment is assessed.

## F05 High

**Affected objective:** 5.1. **Original evidence:** I06 methods; T:23–27.

**Problematic claim / historical technical issue:** CE described as encrypt/delete data and key; SSD/cloud associations risk becoming universal method rules. Physical destruction called fail-proof. Keys, prior plaintext, other copies, media method and validation conditions are missing.

**Historical required treatment:** R03 §§3.1–3.2 and 4.5: choose an appropriate method, address all recoverable target keys/copies, verify outcome and validate effectiveness. CE is not exclusive to cloud; arbitrary damage is not assured destruction. **Verified correction.**

**Selected interpretation:** Choose sanitization for the medium, sensitivity and reuse plan; ordinary deletion is not equivalent. Cryptographic erase depends on sound prior encryption and eliminating recoverable relevant key copies, followed by verification/validation.

**Mandatory qualifiers:** Do not equate SSD with one mandatory method or physical damage with assured destruction; consider backups and escrow.

**Authoritative evidence:** R03, detailed locations in knowledge reference register. **Resolution/status:** RESOLVED by corrected/qualified curated claim. **Confidence:** high for limited use. **Question impact:** AT03; all items inherit these conditions; no unsupported related enrichment is assessed.

## F06 High

**Affected objective:** 5.1. **Original evidence:** I09; T:35–37; I13/T:53–55.

**Problematic claim / historical technical issue:** SSL is presented as a current protective protocol; RSA key exchange in TLS generalized without version context.

**Historical required treatment:** R06 deprecates SSLv3; use TLS terminology. R05 §1.2 removes static RSA key exchange in TLS 1.3; RSA signatures differ from RSA key transport. Avoid making protocol-version trivia an assessment goal. **Verified correction.**

**Selected interpretation:** Symmetric encryption is efficient for bulk protection. In public-key encryption the recipient’s public key protects content for the recipient’s private key; a signature is generated with the signer’s private key and verified with the matching trusted public key.

**Mandatory qualifiers:** Encryption alone does not imply integrity/authenticity. Signing is not generically private-key encryption. TLS versions differ.

**Authoritative evidence:** R04, R05, R17, detailed locations in knowledge reference register. **Resolution/status:** RESOLVED by corrected/qualified curated claim. **Confidence:** high for limited use. **Question impact:** AT04; all items inherit these conditions; no unsupported related enrichment is assessed.

## F07 High

**Affected objective:** 5.1. **Original evidence:** T/N/S and I01–I22 compared with R01 p7.

**Problematic claim / historical technical issue:** Quantum-resistant cryptography is explicitly in the outline but absent in local teaching. Abundant classical material cannot substitute.

**Historical required treatment:** Curate purpose, quantum threat to traditional public-key systems, PQC versus quantum communication, and cautious migration awareness with R08. Algorithm names may explain context, not become rote quotas. **MISSING local knowledge; HOLD blueprint AT06.**

**Selected interpretation:** Quantum-resistant cryptography addresses attacks from quantum-capable adversaries against vulnerable cryptographic schemes. It includes key establishment and signature approaches usable on conventional computers.

**Mandatory qualifiers:** Inventory vulnerable public-key dependencies, evaluate approved replacements and test migration; no prediction of quantum arrival or universal deadline.

**Authoritative evidence:** R08, R01, detailed locations in knowledge reference register. **Resolution/status:** RESOLVED by corrected/qualified curated claim. **Confidence:** high for limited use. **Question impact:** AT06; all items inherit these conditions; no unsupported related enrichment is assessed.

## F08 High

**Affected objective:** 5.3. **Original evidence:** T:145–147; I48; N:406,414,426,471; S:529–558 versus R01 p7.

**Problematic claim / historical technical issue:** Data-handling-policy implementation is much thinner than phase labels. A responder needs rules for sensitive incident evidence and authorized communication, not just a phase mnemonic.

**Historical required treatment:** Curate access, secure storage/transfer, evidence integrity, retention/holds and sharing under a supplied policy using R10 and supporting control guidance. These are reviewer operationalizations of the terse official bullet, not extra official subobjectives. **PARTIAL; HOLD AT14 pending a knowledge record.**

**Selected interpretation:** Protect incident records’ confidentiality, integrity and provenance; restrict access to authorized personnel. Collect/retain data under evidence procedures and retention policy; share via designated channels with approved recipients.

**Mandatory qualifiers:** Apply the policy supplied in the item; respect an explicit preservation hold. Formal forensic chain of custody is not claimed mandatory for every incident.

**Authoritative evidence:** R21, R22, detailed locations in knowledge reference register. **Resolution/status:** RESOLVED by corrected/qualified curated claim. **Confidence:** high for limited use. **Question impact:** AT14; all items inherit these conditions; no unsupported related enrichment is assessed.

## F09 High

**Affected objective:** 5.1. **Original evidence:** S:13–20 overview and N:51–124; T:5–27; I02–I06.

**Problematic claim / historical technical issue:** S merges testing into 5.4 and renames 5.1 as cryptography. Both summaries omit substantive classification/labeling/masking/sanitization teaching already present in original sources.

**Historical required treatment:** Use five official objectives; restore handling to the future knowledge map from T/slides. Do not count summary sections or repeated crypto screenshots as full coverage. **Verified mapping correction; no source edit made.**

**Selected interpretation:** Classification assigns a category under the organization’s sensitivity scheme. Labeling communicates that category through a marking or metadata; neither operation by itself enforces access.

**Mandatory qualifiers:** Supply the scheme and handling rule; category names are not universal.

**Authoritative evidence:** R01, R22, detailed locations in knowledge reference register. **Resolution/status:** RESOLVED by corrected/qualified curated claim. **Confidence:** high for limited use. **Question impact:** AT01; all items inherit these conditions; no unsupported related enrichment is assessed.

## F10 Medium

**Affected objective:** 5.2. **Original evidence:** I38 intentional actor definition versus I39 accidental-insider row; T:125–129; N:304–315; S:417–434.

**Problematic claim / historical technical issue:** Malicious actor categories and broader insider risk are mixed. A careless employee should not automatically be classified as a deliberate attacker.

**Historical required treatment:** State intent in actor questions; explicitly distinguish accidental insider risk. Typical motivation is not unique attribution evidence. **Unresolved terminology choice for human review; no ambiguous item may proceed.**

**Selected interpretation:** Actor categories suggest typical motivations, not certain identity from one technique. Insider threats can be intentional or unintentional; a deliberate theft should be distinguished from an accidental disclosure.

**Mandatory qualifiers:** State intent and observed motivation explicitly; avoid assigning a nation-state from one indicator.

**Authoritative evidence:** R24, R15, detailed locations in knowledge reference register. **Resolution/status:** RESOLVED by corrected/qualified curated claim. **Confidence:** high for limited use. **Question impact:** AT11; all items inherit these conditions; no unsupported related enrichment is assessed.

## F11 Medium

**Affected objective:** 5.2. **Original evidence:** I36 priority graphic; T:121–125; N:259–269; S:392–400.

**Problematic claim / historical technical issue:** Matrix numbering could be mistaken for an ISC2 priority standard; severity/likelihood/impact overlap.

**Historical required treatment:** Supply an organizational matrix only when needed; prioritize based on stated business impact, active exploitation and urgency. Do not assert universal P1 mapping. **Reviewer qualification.**

**Selected interpretation:** Triage validates reports and prioritizes investigation or action using scope, likely impact, time sensitivity and resources. Organizational escalation and response authority determine permitted next actions.

**Mandatory qualifiers:** State stage, evidence, impact and procedure; no universal P1 matrix or first action.

**Authoritative evidence:** R21, detailed locations in knowledge reference register. **Resolution/status:** RESOLVED by corrected/qualified curated claim. **Confidence:** high for limited use. **Question impact:** AT08; all items inherit these conditions; no unsupported related enrichment is assessed.

## F12 Medium

**Affected objective:** 5.2. **Original evidence:** I32; T:97–103; N:189–197; S:263–285.

**Problematic claim / historical technical issue:** SIEM correlation/respond wording may imply autonomous prevention or confirmed compromise from correlation.

**Historical required treatment:** Explain collection/analysis supports decisions; blocking/response depends on configured integrations and authority. An alert is not proof; retain confidence and corroboration. **Local notes already qualify; verify per future tool-neutral scenario.**

**Selected interpretation:** Logging records occurrences; aggregation collects records from multiple sources; monitoring evaluates observations. A central repository without usable data or analysis is not assurance of detection.

**Mandatory qualifiers:** Choose sources relevant to the question; protect timestamp/context and records; retain under policy, not an invented universal duration.

**Authoritative evidence:** R23, R22, detailed locations in knowledge reference register. **Resolution/status:** RESOLVED by corrected/qualified curated claim. **Confidence:** high for limited use. **Question impact:** AT07; all items inherit these conditions; no unsupported related enrichment is assessed.

## F13 Medium

**Affected objective:** 5.2. **Original evidence:** I41; T:131–133; N:334–346; S:453–465.

**Problematic claim / historical technical issue:** IOC match might be treated as conclusive evidence or an unconditional block order.

**Historical required treatment:** R15 supports contextual use of threat information. Timestamp, relevance and source confidence matter. Specify corroboration before high-impact action. **Qualification supported.**

**Selected interpretation:** CTI is analyzed threat information useful to a decision. Indicators such as addresses/hashes guide searches, but require time, relevance and confidence checks before disruptive action.

**Mandatory qualifiers:** A shared or reassigned address can reduce confidence; preserve information-sharing constraints.

**Authoritative evidence:** R15, R21, detailed locations in knowledge reference register. **Resolution/status:** RESOLVED by corrected/qualified curated claim. **Confidence:** high for limited use. **Question impact:** AT12; all items inherit these conditions; no unsupported related enrichment is assessed.

## F14 Medium

**Affected objective:** 5.3. **Original evidence:** I48 diagram versus prose; N:400–450,1198; S:531–550; T:145–147.

**Problematic claim / historical technical issue:** Six phases are useful teaching, but are neither exact official objectives nor a universal current NIST taxonomy. Identification/detection labels vary.

**Historical required treatment:** R10 supersedes Rev.2 and integrates IR with CSF2.0. Test operational purpose or name the supplied model; do not claim latest NIST mandates six sequential stages. **Verified qualification.**

**Selected interpretation:** Eradication addresses malicious components and causes. Recovery restores verified safe operation against recovery criteria; lessons learned feed improvements into controls, plans and training.

**Mandatory qualifiers:** Restoring a copy is not proof persistence was removed. Stage labels are teaching aids, not a mandated NIST six-step taxonomy.

**Authoritative evidence:** R21, detailed locations in knowledge reference register. **Resolution/status:** RESOLVED by corrected/qualified curated claim. **Confidence:** high for limited use. **Question impact:** AT16; all items inherit these conditions; no unsupported related enrichment is assessed.

## F15 Medium

**Affected objective:** 5.4. **Original evidence:** I58 right-side SP800-128 bullet; T:175; N:614 and S:781 summarize differently.

**Problematic claim / historical technical issue:** Publication called network-device guidance, implying a scope narrower than its actual information-system configuration management purpose.

**Historical required treatment:** R11 describes security-focused configuration management of information systems. Distinguish general guidance from prescriptive CIS product benchmarks. **Verified correction; N improves source specificity.**

**Selected interpretation:** Configuration management maintains approved system state and evaluates deviations. A baseline provides the reference; an approved exception or unrecorded legitimate change must be considered before declaring malice.

**Mandatory qualifiers:** NIST800-128 is general system configuration guidance, not just a device benchmark. Reconcile evidence with authorization.

**Authoritative evidence:** R11, R22, detailed locations in knowledge reference register. **Resolution/status:** RESOLVED by corrected/qualified curated claim. **Confidence:** high for limited use. **Question impact:** AT20; all items inherit these conditions; no unsupported related enrichment is assessed.

## F16 Medium

**Affected objective:** 5.4. **Original evidence:** I59 circle versus right prose; T:177–179; I54 lifecycle diagram versus prose.

**Problematic claim / historical technical issue:** Patch diagram label ordering differs; asset cycle labels also differ. Memorizing arrow positions produces arbitrary FIRST/NEXT answers.

**Historical required treatment:** Use operational constraints and the explicitly supplied procedure. R11/R14 are context, not approval of a universal five-step order. **Visual conflict identified; do not assess diagram sequence.**

**Selected interpretation:** Change control evaluates risk and authorizes implementation under the organization’s process. Patches require appropriate assessment/testing and verification of intended installation and service operation.

**Mandatory qualifiers:** State completed steps and rollback/exception authority when asking NEXT; do not derive universal order from slide arrows.

**Authoritative evidence:** R11, R22, detailed locations in knowledge reference register. **Resolution/status:** RESOLVED by corrected/qualified curated claim. **Confidence:** high for limited use. **Question impact:** AT21; all items inherit these conditions; no unsupported related enrichment is assessed.

## F17 Medium

**Affected objective:** 5.4. **Original evidence:** T:161–169; I55/I56; N:567–587; S:718–756.

**Problematic claim / historical technical issue:** EOL, end of support and missing patches are treated too interchangeably. T167 names Windows 10 as a supported upgrade.

**Historical required treatment:** R16 confirms broad Windows10 support ended 2025-10-14, with edition/ESU exceptions. State vendor support facts in the stem and use generic supported platforms. Temporary controls reduce exposure, not lifecycle risk to zero. **Verified time-sensitive correction.**

**Selected interpretation:** If the vendor no longer supplies security fixes, new vulnerabilities may remain unpatched. If immediate replacement is infeasible, documented restricted access/segmentation/monitoring can reduce exposure while migration proceeds.

**Mandatory qualifiers:** Use stated support facts rather than product-name assumptions. Temporary controls neither restore vendor support nor remove the flaw.

**Authoritative evidence:** R11, R16, detailed locations in knowledge reference register. **Resolution/status:** RESOLVED by corrected/qualified curated claim. **Confidence:** high for limited use. **Question impact:** AT19; all items inherit these conditions; no unsupported related enrichment is assessed.

## F18 Medium

**Affected objective:** 5.5. **Original evidence:** I73/I74/I75–I78; T:213–225; N:811,861; S:1004–1109.

**Problematic claim / historical technical issue:** DAST is not defined by a tester's inability to access source; threat modeling is not confined to one design moment; phishing and impersonation are not inherently physical.

**Historical required treatment:** Preserve official grouping while distinguishing methods by execution/interaction and objective. R12/R13/R14/R20. State the one action being classified when techniques overlap. **Verified introductory qualification; expand references only for any additional detailed claim.**

**Selected interpretation:** SAST inspects code artifacts without executing the application; DAST interacts with a running application. Both can contribute evidence about overlapping flaw classes.

**Mandatory qualifiers:** Select by artifact/runtime access and testing objective, not an assertion that the tester cannot possess source.

**Authoritative evidence:** R12, R20, detailed locations in knowledge reference register. **Resolution/status:** RESOLVED by corrected/qualified curated claim. **Confidence:** high for limited use. **Question impact:** AT24; all items inherit these conditions; no unsupported related enrichment is assessed.

## F19 Low

**Affected objective:** 5.1. **Original evidence:** N:8,1225–1227; S:5–7,1205–1223; I24–I27.

**Problematic claim / historical technical issue:** Authorship unverified; referenced PDF absent; summary promises ten quiz items but contains one; unrelated Domain 1 screenshots mixed into folder.

**Historical required treatment:** Maintain explicit provenance, no claimed human authorship, no unseen PDF coverage and no reuse of weak embedded quizzes. **Documented limitation.**

**Selected interpretation:** Classification assigns a category under the organization’s sensitivity scheme. Labeling communicates that category through a marking or metadata; neither operation by itself enforces access.

**Mandatory qualifiers:** Supply the scheme and handling rule; category names are not universal.

**Authoritative evidence:** R01, R22, detailed locations in knowledge reference register. **Resolution/status:** DISCLOSED provenance limitation; exclude unrelated/unseen content. **Confidence:** high for limited use. **Question impact:** AT01; all items inherit these conditions; no unsupported related enrichment is assessed.

## F20 Low

**Affected objective:** 5.1. **Original evidence:** T:21–23,91–93; I03, I06, I17/I18.

**Problematic claim / historical technical issue:** Masked last-four example suggests authentication assurance; legal scope/log retention and hardware boot/compliance statements are simplified.

**Historical required treatment:** Do not use four displayed digits as strong authentication. Define classification scheme in stem. Do not assert legal deadlines or TPM/HSM compliance guarantees. Hardware-specific claims remain **unverified/enrichment, excluded from blueprint**.

**Selected interpretation:** Masking hides or replaces selected values while retaining information needed for an authorized purpose. It does not inherently anonymize a dataset or authorize disclosure to another service.

**Mandatory qualifiers:** State exactly which fields may be shared and with whom; public AI use is governed by policy.

**Authoritative evidence:** R02, R22, detailed locations in knowledge reference register. **Resolution/status:** EXCLUDED unsupported hardware/legal/authentication guarantees; retained limited masking condition. **Confidence:** high for limited use. **Question impact:** AT02; all items inherit these conditions; no unsupported related enrichment is assessed.

## F21 Low

**Affected objective:** 5.1. **Original evidence:** R02 compared with T:189–191 and all N/S; I01–I78.

**Problematic claim / historical technical issue:** Broader official AI application context is largely missing; one AI-assisted change example is insufficient. This is a supplementary-context gap, not an invented 5.6.

**Historical required treatment:** Curate public-AI data leakage and human-validated automated triage within existing slots. **External context verified; local teaching gap remains.**

**Selected interpretation:** Masking hides or replaces selected values while retaining information needed for an authorized purpose. It does not inherently anonymize a dataset or authorize disclosure to another service.

**Mandatory qualifiers:** State exactly which fields may be shared and with whom; public AI use is governed by policy.

**Authoritative evidence:** R02, R22, detailed locations in knowledge reference register. **Resolution/status:** RESOLVED by corrected/qualified curated claim. **Confidence:** high for limited use. **Question impact:** AT02; all items inherit these conditions; no unsupported related enrichment is assessed.

## Gate1 verdict

PASS for authoring from the26 curated concepts: all9 High findings have a corrected foundation, no unresolved High affects a planned item, F07/F08 supplementation is present, and medium contradictions are qualified. F19 source-identity/cropping limits and F20 excluded enrichment remain nonblocking disclosures. No original source or historical audit file changed.


## Exact original transcript evidence

Verbatim local transcript excerpts below retain its errors; these are evidence, not accepted teaching. Image-specific statements remain traceable through the immutable visual inventory and academic findings. Absence findingsF07/F21 have no missing statement to quote.

### F01: DOMAIN 5.txt lines27–29

> that is of SSD type. If the there are SSD cards that have data stored, we may use the secure araser. If the data is stored inside cloud, we may use the cryptographic eraser. Cryptographic eraser means that you encrypt the data with a secure encryption algorithm for example AES advanced encryption standard and then you delete it. So even if then you delete the data as well as the key. So if later the data is even recurred, it cannot be decrypted due to unavailability of the key. And physical disc uh destruction is of course for the
> 
> physical media drive such as flash drive or other uh storage device which is a fail uh proof method to destroy the data. Our next topic is encryption. So encryption is the process of converting plain text data into cipher text data in order to protect it from unauthorized disclosure and the purpose is to ensure confidentiality, integrity and authenticity of information. So the main purpose of encryption is of course confidentiality but together with other algorithms such as hashing uh it can also uh work in combination

### F02: DOMAIN 5.txt lines49–53

> An example of symmetric encryption is advanced encryption standard that is AES. Then we have the asymmetric encryption which uses a pair of keys known as a public key and a private key. So it is slower compared to symmetric key encryption but it supports scalability and key distribution. So key distribution is not an issue. It is built inside the algorithm and it provide secure key exchange but again it is being slower. This is basically providing an example of asymmetric encryption is RSA, Ryest,
> 
> Shamir and Adelman. So these were the three inventors of this algorithm. So that why it is known as RSA. So how are the asymmetric keys used? So key sharing is done. So the public keys are shared among communicating partner. So as the name indicates the public keys are public they can be shared with anyone and you can also say they are publicly available. So private keys are kept secret by each partner. So how is data encrypted through asymmetric uh encryption? So for encryption uh for encryption use the recipient's
> 
> public key. So for example, let's suppose this is A, this is B. So if A want to send secure message to B, then A will encrypt it with the B public key. For example, if this is key, this key will be B's public key. A will encrypt data with that and then B can decrypt it with own private key with B own private key. Anyone else even if intercept that data cannot decrypt it because the private key is only available with B. For decryption the recipients uses his or her own private key. It is also used the asymmetric uh

### F03/F04: DOMAIN 5.txt lines65–79

> but they did not share that secret or a public channel. They simply shared a mixture or a public transport. But that mixture can result in a common sacra secret from which it was originally made. So that's how it work. I hope it is understandable. So data encryption using another visualization using asymmetric encryption. So like for example, Franco sends a message to Maria requesting her public key. So Maria sends Franco her public key. Franco uses Maria's public key to encrypt the message and sends it
> 
> to her. So Maria uses her private key to decrypt that message. So even if that message is intercepted, it will be of no use because only it can be decrypted using Maria's private key which is accessible or available with Maria only. Our next topic is TPM that is trusted platform module. So it is a dedicated microchip designed to secure hardware by storing cryptographic keys and other sensitive data. So it protects against unauthorized access and tampering by securely storing encryption keys, passwords and digital
> 
> signatures. It is also used for secure boot. So it ensures that only trusted software runs on a system during startup by verifying the integrity of the boot process and use cases include full disk encryption. So it is used for full disk encryption by using the keys that are stored inside this chip and also it is used for digital right management and secure authentication. So it helps in meet the security standard like GDPR and enhances enterprise security posture. Then we have the HSM which is hardware
> 
> security module which is a physical device used to generate, store and manage cryptographic keys. So these generation of cryptographic keys and storage can also be done in software but this is the more secure method that we have a separate hardware device or module known as HSM. So it provides high level protection for sensitive data ensuring secure encryption and decryption operations and it is commonly used in industries like banking, government and cloud services for key management, digital signatures and authentication.
> 
> And the security that it provides is that it is resistant to tampering and physical attacks and it ensure data integrity and confidentiality and uh it helps in compliance by uh using it to make the different regulatory standards such as FIPS 140-2 for cryptographic security. Our next topic is the difference between hashing and encryption. So hashing basically converts data into a fixed length string using a mathematical function. So whatever the input length or the input size, the output will always be of a fixed length. It is a
> 
> oneway process. For example, you cannot be it cannot be reversed to reveal original data. So for example, when you create a hash from data, you cannot convert that hash to data. It is used for data integrity checks and password storage. An example of hashing algorithms are SH 256 and MD5. Then we have the encryption. So encryption t transform data into an unreadable format using a key allowing reversal with the correct key. It is a two-way process. So original data can be retrieved. You can convert plain text data into encrypted
> 
> or cipher text data and back to plain text data. So it is used for protecting data confidentiality during storage or during transmission. Example of encryption algorithms are AES and RSA. AES is symmetric algorithm while RSA is asymmetric algorithm. So what are some uses of different algorithms? So we already studied that symmetric encryption are used for securing uh inside for securing files or for securing file storage. For example, AES for encrypted drives encrypting database record for example credit card
> 
> details securing communication channels or the network such as VPN and Wi-Fi with WPA2 or WPA3. Asymmetric encryption is used for secure key exchange. for example TLS handshake. It is also used for digital signatures to ensure authenticity for example signing emails and to encrypt small amounts of data like password or keys. So for bulk data we use symmetric because it is efficient but for small amount of encryption we can easily use asymmetric as well. Hash function are used for storing hash password securely

### F05: DOMAIN 5.txt lines23–27

> number are not able to view it and they can only verify your authenticity by confirming the last four digit. So the common use is so data masking is often used in testing development training and reporting environments. Then we have the data sanitization. So data san sanitization is the process of securely removing data from a storage devices so that it cannot be easily recovered. So if you have a storage device like hard drive or flash drives the sanitization is the process of removing that data from that uh drive
> 
> securely when the data is no longer used. so that uh it may not be recovered by someone later. So sanitization may be required when a storage device is being disposed of, when equipment is being reused, when a device is being returned, or when sensitive information must be permanently removed from the media. Sanitization methods include secure eraser, cryptographic eraser, and physical destruction. So these method uh depend upon the type of media. For example, the secure arasure may be used for the uh data that is
> 
> that is of SSD type. If the there are SSD cards that have data stored, we may use the secure araser. If the data is stored inside cloud, we may use the cryptographic eraser. Cryptographic eraser means that you encrypt the data with a secure encryption algorithm for example AES advanced encryption standard and then you delete it. So even if then you delete the data as well as the key. So if later the data is even recurred, it cannot be decrypted due to unavailability of the key. And physical disc uh destruction is of course for the

### F06: DOMAIN 5.txt lines35–37

> want to protect it through encryption of course. So we have different methods. First one is the full disk encryption or F uh FDE which encrypts the entire content of a storage drive including the operating system and user data ensuring that data is inaccessible without proper authentication during the boot of the operating system. An example is the bit locker that is used inside Microsoft Windows and file vault. Then we have the self encrypting device or sedd. So it is a hardwarebased encryption method where the drive itself
> 
> automatically encrypts and decrypts data using a built-in encryption module providing a seamless and fast encryption. Anything that is written to that drive is automatically stored in encrypted form. An example of self enrypting drive is the Samsung T7. So another uh type of data protection address is the cloud storage encryption. So it encrypts data stored in the cloud at rest which is stored ensuring that unauthorized access is prevented. An example is AWS S3 serverside encryption. And then we have another encryption type

### F10: DOMAIN 5.txt lines125–129

> privilege escalation and then access to sensitive files. It means correlating all these events that the user account may be compromised. So what are threat actors? Threat actor is an individual or group or an organization that intentionally performs malicious activities against systems, networks or data. So we have different type of threat actor that include cyber criminals, nation state actors, he activist, insider threats, terrorist or extremist groups and script kitties. So what are these different type of
> 
> strike their motivation? So the cyber criminal motivation are basically for financial gains. Nation state actors do the criminal activities for espionage for gathering intelligence and strategic advantage over their adversary. Activists do these activity for political or social causes. Insiders are mostly for financial gain, revi revenge by a disgruntled employee or some ideology or there may be accidental action due to human errors. Then we have the script kitties which do it for curiosity, experimentation and
> 
> recognition. And the terrorist group do it for disruption to instill fear and for ideology ideological objectives. What is the cyber threat intelligence? So cyber threat intelligence CTI is information about threats and threat actor that has been collected, analyzed and transformed into useful knowledge for security decision making. So cyber threat intelligence can help organization understand who may who who may attack them, what threats they face, how attacks are conducted, which vulnerabilities are

### F11/F12: DOMAIN 5.txt lines121–125

> alert will again be a false positive. But again, this will have to be uh investigated for each case. Security event prioritization. So how do we prioritize the security event? So a security use case describe a specific type of suspicious activity or security scenario that an organization wants to detect. So security events should be prioritized based on the factors such as severity how severe the incident is. What did the impacted system user and uh impact on operation? The likelihood of this uh event of occurring uh and
> 
> impacting the organization operations. What are the affected assets? The number of user or the account involved, the evidence of active exploitation, whether there is evidence of active exploitation or otherwise and the b business criticality. So event correlation, we studied about event correlation. It is the process of analyzing multiple related events to identify a potentially meaningful security incident. An example is that there are multiple failed loginins. This is an event. Then we have a successful login. Then we have
> 
> privilege escalation and then access to sensitive files. It means correlating all these events that the user account may be compromised. So what are threat actors? Threat actor is an individual or group or an organization that intentionally performs malicious activities against systems, networks or data. So we have different type of threat actor that include cyber criminals, nation state actors, he activist, insider threats, terrorist or extremist groups and script kitties. So what are these different type of

### F13: DOMAIN 5.txt lines131–133

> being targeted and what indicators to monitor and how to improve defenses. Then we have the indicator of compromise that is I OC's. So an indicator of compromise is evidence that may indicate a security breach or malicious activity. Example of IOC's include malicious IP addresses, suspicious domains, malicious URLs, file hashes, and unusual registry changes. An example of indicator of compromise is that a threat intelligence feed identifies a malicious IP address. The security team can search its logs to
> 
> determine whether internal systems have communicated with that IP address. Then we have the threat frameworks. So a threat framework provides a structured way to understand, categorize and analyze adversary behavior. Frameworks help security professional in understanding the attack techniques to identify the security gaps to improve detection, organized threat intelligence, support incident investigation and develop security controls. So one of the most widely used framework is the MITER attack framework.

### F14/F08: DOMAIN 5.txt lines145–147

> incident response plan that is IRP. So the first phase or the component is the preparation which establishes the policies, tools and training for the IR team. Then we have the next phase that is detection and analysis which identifies and assess the scope of the incident. Then we have the containment phase which limits the spread of the incident to prevent further damage. Then we have the eradication which removes the root cause of the incident. For example, removing the mmware and patching the vulnerabilities. Then we
> 
> have the recovery phase which stores the system and operations to normal uh process or normal status. And last one is the post incident review which analyzes the incident to improve future responses and prevention. Then we have the incident response exercises. So incident response exercises test whether an organization is prepared to respond effectively to an actual incident. Exercises can identify gaps in the incident response plan. Unclear responsibility. It can uh clear the ident clear and identify the communication gaps. It can

### F15: DOMAIN 5.txt lines175–175

> that are available for all these operating system. So when you apply these uh inside your organization to all your system as a baseline, it means at least you are starting from a secure point where you have applied minimum benchmark security baselines and configuration. Then we have the NIST SP800-128 which are guide which provide guidelines for network devices. So these are these were for the endpoint operating system and this is for network devices and then vendor recommended settings. So each

### F16: DOMAIN 5.txt lines177–179

> vendor such as Microsoft, Cisco, AWS they have their separate uh settings or configuration recommended configuration for their own systems as well. Our next topic is the page management process. So this process includes or consist of multiple steps. First one is the identify. So it is in this process we monitor the vendor advisories and security bulletins. Then we have the assess we determine the page priority based on severity. So for example we if we have to apply multiple pages then we first prioritize
> 
> prioritize them based on the severity of the vulnerability and then apply them accordingly. Then we have the test. So in this phase we validate the patches in a controlled environment and then the deploy. In this uh step we apply patches to the production systems and then verify in this step we ensure that proper application and system stabil stability is in place. So what is the risk of poor configuration management process? First one is the that we may have on page vulnerabilities which can lead to

### F17: DOMAIN 5.txt lines161–169

> condition and then eventually we retire it that is we remove it from the server. Dispose is that we securely sanitize or destroy data from that laptop storage before eventually disposing it off. So what are some of the scenario in which we you can say retire or dispose of the laptop. So one of them is the end of life or EOL which refers to the point at at which point a product software or device reaches the end of its supported life cycle. So an end of life product may no longer receive security pages
> 
> from the vendor, bug fixes, technical support and firmware updates. So when a vendor declares the EOL for a product or an application or a software, it no longer releases the pages, bug fixes, gives technical support or firmware update for that device or software. So that type of device then poses a security risk. So using unsupported software or hardware can increase the organization's security risk because newly discovered vulnerability may remain unpatched since we said that the vendor no longer gives security pages or
> 
> releases security pages for that EOL product. So how do we manage the EOL assets then? So organization should identify end of life assets and develop a plan to address them. Possible actions for EOL assets should include or may include to upgrade the software if possible to replace the device, migrate it, migrate the device to a supported platform. So let's suppose if the device uh a hardware device was having a window operating system let's suppose Windows XP or Windows 7 that is no longer supported.
> 
> So we can migrate it to the supported Windows such as the Windows 11, Windows 10. Isolate the system means by isolation we means to isolate the system inside network from other devices so that even if it is vulnerable or infected other organization devices are protected. Apply compensating control. So this is in fact a compensating control that you isolate the device, you configure a firewall in front of that device etc. and the best uh course of action is to actually decommission the asset. So an important point to keep in mind is
> 
> that if an UL system cannot immediately be replaced, additional controls such as network segmentation, restricted access and enhanced monitoring may reduce the risk. So these all are in fact the compensating controls. Our next topic is configuration management. So configuration management is the process of maintaining security and functionality of IT systems. So it ensures systems are configured correctly and consistently. It prevents security vulnerabilities due to misisconfigurations and it is key for

### F18: DOMAIN 5.txt lines213–225

> running web application to determine whether it is vulnerable or not. So what's the difference between SAS and DAS? Static application security testing and dynamic application security testing. So SAS is as I said static application security testing and dash is dynamic application security testing. In SAS we have access to the test uh to the source code of the application. So it tests the source or compiled code while the dash basically tests the running application. In this type of test, we don't have access to
> 
> the source code. SAS does not require the application to be running while the dash requires the application to be running. CES can identify insecure coding practices while the desk can identify runtime application behavior issues. SAS is often used during development when the code is actually written or developed by the developers while DAT is often used during testing and deployment when the application has been developed. Our next topic is threat modeling which is a structured process used to identify
> 
> and evaluate potential threats and security risk during the design of a system or application. So threat modeling can identify the assets that need protection, potential attackers, attack paths, vulnerabilities, security requirements, and appropriate security controls. An example is that before developing an online banking application, a team identifies potential threats such as account takeover, credential theft, and injection attacks. Our next topic is the physical penetration testing. So physical penetration testing
> 
> evaluates whether an attacker could gain unauthorized physical access to facilities, system or restricted areas. Testing may include authorized attempts to enter restricted areas, bypass physical controls, access unattended devices, and circumvent security procedures. Example of physical security controls include locks, security guards, access guards, biometric systems. Then we have the fishing. So fishing is the social engineering technique in which an attacker attempts to deceive a person into revealing information,
> 
> clicking a malicious link or opening an attachment or performing another unwanted action. For example, an employee receives a simulated email asking them to click a link and verify their account. The organization measures how employees respond. Key point is that fishing attacks target people rather than only technical vulnerabilities. Then we have the tailgating which is again a type of physical attack. So, tailgating occurs when an unauthorized person gains physical access to a restricted area by following an
> 
> authorized person through a controlled entrance. An example is when an employee opens a secure door using an access card, an unauthorized person follows closely behind before the door closes. So security controls to counter the tailgating is access guards, man traps, security guards, visitor badges and security awareness training. Then we have the impersonation which is a social engineering technique in which an attacker pretends to be another person to gain access information or assistance. So an attacker may pretend
> 
> to be an employee IT support staff and a delivery person. Example is a person claiming to be an IT technician asks an employee to allow access to a restricted server room. During an authorized penetration test, security testers may use controlled impersonation scenarios to evaluate whether personnel follow verification procedures. So that's all for this video and that's all for the course. I hope this has been informative and it will be of help for you to gain some knowledge and prepare

### F20: DOMAIN 5.txt lines21–23

> digit visible. So this is to ensure that this number mask data is still usable but it is at the same time masked and cannot be used for any malicious purpose. For example, when you call your bank uh reps or bank help desk for any issue or complaint, when they ask your uh credit card or debit debit card the last four digit of your credit, it is because they have the visibility of the last digit only due to the masking of that data. So even the banks employee that are not required to uh view your complete credit card
> 
> number are not able to view it and they can only verify your authenticity by confirming the last four digit. So the common use is so data masking is often used in testing development training and reporting environments. Then we have the data sanitization. So data san sanitization is the process of securely removing data from a storage devices so that it cannot be easily recovered. So if you have a storage device like hard drive or flash drives the sanitization is the process of removing that data from that uh drive
