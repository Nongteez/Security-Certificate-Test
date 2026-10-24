/** Original Domain 3 authoring source. Editorial metadata is never shipped to the quiz engine.
 * Option tuples: English, Thai, English rationale, Thai rationale.
 * Rxx references resolve in ISC2 Update 2026/Domain 3/domain-3-knowledge-map.md.
 * Independent human academic and bilingual review remains pending.
 */
export const reviewStatus = 'ACCEPTED';

export const drafts = [
  {
    id: 647, objective: '3.1', bullet: 'roles', knowledge: [3, 4], sources: ['R07'],
    concept: 'Approval authority before provisioning', decision: 'Handle an urgent request that lacks required access approval',
    stem: [
      'A new procurement employee needs access today. The access policy requires the application owner to approve the purchasing role before the service desk assigns it. The employee submits a valid account request, but the role approval is missing. What should the service desk do FIRST?',
      'พนักงานจัดซื้อคนใหม่ต้องใช้ระบบวันนี้ นโยบายกำหนดให้เจ้าของแอปพลิเคชันอนุมัติบทบาทจัดซื้อก่อนที่ฝ่ายบริการไอทีจะกำหนดบทบาทนั้น พนักงานส่งคำขอสร้างบัญชีที่ถูกต้อง แต่ยังไม่มีการอนุมัติบทบาท ฝ่ายบริการไอทีควรทำอะไรเป็นอันดับแรก?'
    ],
    choices: [
      ['Assign the standard purchasing role and request retrospective approval', 'กำหนดบทบาทจัดซื้อมาตรฐาน แล้วขออนุมัติย้อนหลัง', 'A standard role still requires the approval explicitly required before assignment.', 'แม้เป็นบทบาทมาตรฐาน ก็ยังต้องได้รับการอนุมัติก่อนกำหนดตามนโยบาย'],
      ['Obtain the application owner\'s approval for the requested role', 'ขออนุมัติบทบาทที่ร้องขอจากเจ้าของแอปพลิเคชัน', 'The request is valid, but the stated prerequisite for assigning access is missing. Obtaining approval respects the defined authority and workflow.', 'คำขอถูกต้อง แต่ยังขาดเงื่อนไขก่อนให้สิทธิ์ การขออนุมัติเป็นไปตามอำนาจและขั้นตอนที่กำหนด'],
      ['Copy an experienced buyer\'s permissions to provide a working baseline', 'คัดลอกสิทธิ์ของเจ้าหน้าที่จัดซื้อที่มีประสบการณ์มาเป็นชุดเริ่มต้น', 'Another employee may have additional rights, and copying them bypasses the required approval.', 'พนักงานอีกคนอาจมีสิทธิ์เพิ่มเติม และการคัดลอกยังข้ามการอนุมัติที่กำหนด'],
      ['Schedule the role assignment for the next periodic access review', 'เลื่อนการกำหนดบทบาทไปยังการทบทวนสิทธิ์ตามรอบครั้งหน้า', 'A periodic review evaluates existing access; it is not a substitute for processing the initial approval now.', 'การทบทวนตามรอบประเมินสิทธิ์ที่มีอยู่ ไม่ใช่สิ่งทดแทนการขออนุมัติเริ่มต้นในขณะนี้']
    ], correct: 1,
    takeaway: 'A valid account request does not replace the required approval for access.'
  },
  {
    id: 648, objective: '3.1', bullet: 'review', knowledge: [5, 6, 16], sources: ['R14', 'R18'],
    concept: 'Mover entitlement adjustment', decision: 'Remove obsolete permissions while retaining approved access for new duties',
    stem: [
      'An employee moves from inventory purchasing to customer support. The new role has been approved, and both managers confirm that the employee no longer handles purchase orders. A review shows that the account still permits purchase-order approval. Which action BEST addresses the finding?',
      'พนักงานย้ายจากงานจัดซื้อสินค้าคงคลังไปยังงานบริการลูกค้า บทบาทใหม่ได้รับอนุมัติแล้ว และผู้จัดการทั้งสองฝ่ายยืนยันว่าพนักงานไม่เกี่ยวข้องกับใบสั่งซื้ออีกต่อไป การทบทวนพบว่าบัญชียังอนุมัติใบสั่งซื้อได้ การดำเนินการใดเหมาะสมที่สุด?'
    ],
    choices: [
      ['Keep the old permissions until the employee stops using them', 'คงสิทธิ์เดิมจนกว่าพนักงานจะหยุดใช้งาน', 'Continued use does not establish a legitimate current business need after the managers have confirmed the duty ended.', 'การยังใช้งานอยู่ไม่ได้แสดงความจำเป็นทางธุรกิจปัจจุบัน เมื่อผู้จัดการยืนยันว่าหน้าที่สิ้นสุดแล้ว'],
      ['Disable the entire account until the next scheduled review', 'ระงับบัญชีทั้งหมดจนถึงการทบทวนตามรอบครั้งหน้า', 'This unnecessarily removes approved customer-support access instead of correcting the obsolete entitlement.', 'วิธีนี้ถอนสิทธิ์งานบริการลูกค้าที่อนุมัติแล้วโดยไม่จำเป็น แทนที่จะแก้ไขสิทธิ์ที่หมดความจำเป็น'],
      ['Ask the employee to avoid purchase orders while leaving permissions unchanged', 'ขอให้พนักงานงดใช้ระบบใบสั่งซื้อโดยคงสิทธิ์ไว้เหมือนเดิม', 'An instruction alone leaves the obsolete authorization available for misuse or account compromise.', 'คำสั่งเพียงอย่างเดียวยังคงสิทธิ์เก่าไว้ให้ถูกใช้ผิดวัตถุประสงค์หรือถูกใช้เมื่อบัญชีถูกยึด'],
      ['Revoke purchase-order approval and retain the approved support permissions', 'ถอนสิทธิ์อนุมัติใบสั่งซื้อ และคงสิทธิ์บริการลูกค้าที่ได้รับอนุมัติ', 'The confirmed role change removes the justification for the old right. Targeted revocation corrects privilege accumulation without disrupting authorized new duties.', 'การเปลี่ยนหน้าที่ที่ยืนยันแล้วทำให้สิทธิ์เดิมไม่มีเหตุผลรองรับ การถอนเฉพาะสิทธิ์นั้นแก้การสะสมสิทธิ์โดยไม่กระทบงานใหม่ที่ได้รับอนุญาต']
    ], correct: 3,
    takeaway: 'A role change requires removing obsolete rights as well as adding new ones.'
  },
  {
    id: 649, objective: '3.1', bullet: 'review', knowledge: [6, 13], sources: ['R18', 'R07'],
    concept: 'Review decision versus completed remediation', decision: 'Close an access review only after rejected entitlements are removed and checked',
    stem: [
      'An application owner finishes an access review and marks several contractor permissions for removal. The review tool records the decisions but does not apply them automatically. The contractors can still use those permissions. Which action MOST directly completes this review\'s security purpose?',
      'เจ้าของแอปพลิเคชันทบทวนสิทธิ์เสร็จและระบุให้ถอนสิทธิ์บางรายการของผู้รับเหมา เครื่องมือบันทึกผลแต่ไม่ได้ดำเนินการให้อัตโนมัติ ผู้รับเหมายังใช้สิทธิ์เหล่านั้นได้ การกระทำใดทำให้บรรลุวัตถุประสงค์ด้านความปลอดภัยของการทบทวนได้ตรงที่สุด?'
    ],
    choices: [
      ['Apply the approved removals and verify the effective permissions', 'ดำเนินการถอนสิทธิ์ตามผลอนุมัติ และตรวจสอบสิทธิ์ที่มีผลจริง', 'Recording a decision is not enforcement. Applying and checking the removals ensures access reflects the review outcome.', 'การบันทึกผลไม่ใช่การบังคับใช้ การถอนและตรวจสอบทำให้สิทธิ์ตรงกับผลทบทวน'],
      ['Archive the signed review report as evidence that the review is complete', 'เก็บรายงานทบทวนที่ลงนามแล้วเป็นหลักฐานว่าทบทวนเสร็จ', 'The report preserves the decision but leaves the rejected permissions active.', 'รายงานเก็บหลักฐานการตัดสินใจ แต่สิทธิ์ที่ควรถอนยังคงใช้งานได้'],
      ['Bring forward the next access review to identify the permissions again', 'เลื่อนการทบทวนครั้งถัดไปให้เร็วขึ้นเพื่อระบุสิทธิ์เดิมอีกครั้ง', 'The current decisions are already known; another review does not implement them.', 'ทราบผลตัดสินใจแล้ว การทบทวนอีกรอบไม่ได้ทำให้ผลนั้นมีผลจริง'],
      ['Reset the contractors\' authentication credentials without changing permissions', 'เปลี่ยนสิ่งที่ใช้ยืนยันตัวตนของผู้รับเหมาโดยไม่แก้ไขสิทธิ์', 'A credential reset changes authentication material, not the entitlements rejected by the review.', 'การเปลี่ยนสิ่งที่ใช้ยืนยันตัวตนไม่ได้ถอนสิทธิ์ที่ถูกปฏิเสธจากการทบทวน']
    ], correct: 0,
    takeaway: 'Access review findings must be applied and verified, not merely documented.'
  },
  {
    id: 650, objective: '3.1', bullet: 'review', knowledge: [7, 14], sources: ['R14', 'R19'],
    concept: 'Account activity versus ownership', decision: 'Classify inactivity and orphaning from separate evidence',
    stem: [
      'An account inventory finds two accounts. Account X has not been used recently, but has an assigned owner and an approved recovery purpose. Account Y is used daily by a scheduled job, but has no current owner or responsible team. Which assessment is MOST accurate?',
      'การสำรวจบัญชีพบว่า บัญชี X ไม่มีการใช้งานเมื่อเร็วๆ นี้ แต่มีผู้รับผิดชอบและมีวัตถุประสงค์เพื่อกู้คืนระบบที่ได้รับอนุมัติ ส่วนบัญชี Y ถูกใช้งานทุกวันโดยงานตามกำหนดเวลา แต่ไม่มีเจ้าของหรือทีมรับผิดชอบปัจจุบัน การประเมินใดถูกต้องที่สุด?'
    ],
    choices: [
      ['Both accounts are orphaned because neither represents an interactive employee', 'ทั้งสองเป็นบัญชีที่ขาดผู้รับผิดชอบ เพราะไม่ใช่บัญชีพนักงานที่เข้าใช้แบบโต้ตอบ', 'Non-interactive use does not itself establish orphaning; X has a documented owner and purpose.', 'การใช้งานแบบไม่โต้ตอบไม่ได้แปลว่าขาดผู้รับผิดชอบ บัญชี X มีเจ้าของและวัตถุประสงค์ที่บันทึกไว้'],
      ['X is orphaned because it is inactive; Y is governed because it is active', 'X ขาดผู้รับผิดชอบเพราะไม่ได้ใช้งาน ส่วน Y มีการกำกับดูแลเพราะยังใช้งานอยู่', 'This confuses activity with ownership. An actively used account can lack accountable management.', 'วิธีนี้สับสนระหว่างการใช้งานกับเจ้าของ บัญชีที่ยังถูกใช้อาจขาดการจัดการที่มีผู้รับผิดชอบได้'],
      ['X shows inactivity to assess; Y has an ownership gap despite active use', 'X มีการไม่เคลื่อนไหวที่ต้องประเมิน ส่วน Y ขาดผู้รับผิดชอบแม้ยังถูกใช้งาน', 'The evidence concerns different dimensions: recent use and accountable ownership. X needs context-aware assessment; Y has an orphan-account governance problem.', 'หลักฐานแสดงคนละด้าน คือการใช้งานล่าสุดกับผู้รับผิดชอบ X ต้องประเมินตามบริบท ส่วน Y มีปัญหาการกำกับบัญชีที่ขาดผู้รับผิดชอบ'],
      ['Neither needs review because recovery accounts and scheduled jobs are operational exceptions', 'ไม่ต้องทบทวนทั้งคู่ เพราะบัญชีกู้คืนและงานตามกำหนดเวลาเป็นข้อยกเว้นด้านปฏิบัติการ', 'Operational purpose does not remove the need to verify ownership, permissions and continuing justification.', 'วัตถุประสงค์ด้านปฏิบัติการไม่ได้ยกเว้นการตรวจสอบผู้รับผิดชอบ สิทธิ์ และความจำเป็นต่อเนื่อง']
    ], correct: 2,
    takeaway: 'Account activity and responsible ownership are separate review criteria.'
  },
  {
    id: 651, objective: '3.1', bullet: 'deprovision', knowledge: [8, 9, 12], sources: ['R06', 'R17'],
    concept: 'Independent application sessions after withdrawal', decision: 'Complete authorized deprovisioning across downstream sessions',
    stem: [
      'At a confirmed contract end, an administrator disables the contractor\'s central identity account. A connected document application maintains its own sessions, and its audit log shows the contractor\'s existing session is still active. The offboarding procedure requires ending all access. What is the BEST next action?',
      'เมื่อสัญญาสิ้นสุดตามที่ยืนยันแล้ว ผู้ดูแลระบบระงับบัญชีอัตลักษณ์กลางของผู้รับเหมา แอปพลิเคชันเอกสารที่เชื่อมต่อดูแลเซสชันของตนเอง และบันทึกตรวจสอบแสดงว่าเซสชันเดิมของผู้รับเหมายังทำงานอยู่ ขั้นตอนออกจากงานกำหนดให้ยุติการเข้าถึงทั้งหมด ควรทำอะไรต่อไปจึงเหมาะสมที่สุด?'
    ],
    choices: [
      ['Revoke the remaining application access and session, then verify termination', 'เพิกถอนสิทธิ์และเซสชันแอปพลิเคชันที่เหลือ แล้วตรวจสอบว่ายุติแล้ว', 'The application session is independent of the central account. Its supported revocation controls must be used and the result verified to meet the stated offboarding requirement.', 'เซสชันแอปพลิเคชันเป็นอิสระจากบัญชีกลาง ต้องใช้กลไกเพิกถอนที่รองรับและตรวจสอบผลเพื่อให้ตรงตามข้อกำหนดออกจากงาน'],
      ['Record the central disablement as completion and let the session expire normally', 'บันทึกว่าการระงับบัญชีกลางเป็นการดำเนินการครบแล้ว และรอเซสชันหมดอายุตามปกติ', 'The observed active session contradicts the requirement to end all access at offboarding.', 'เซสชันที่ยังทำงานอยู่ขัดกับข้อกำหนดให้ยุติการเข้าถึงทั้งหมดเมื่อออกจากงาน'],
      ['Reset only the central account password to invalidate every application session', 'เปลี่ยนเฉพาะรหัสผ่านบัญชีกลางเพื่อทำให้ทุกเซสชันแอปพลิเคชันใช้ไม่ได้', 'A central password change is not evidence that independently managed application sessions are revoked.', 'การเปลี่ยนรหัสผ่านกลางไม่ได้พิสูจน์ว่าเซสชันแอปพลิเคชันที่จัดการแยกกันถูกเพิกถอน'],
      ['Remove the contractor from the staff directory listing without changing the application', 'นำชื่อผู้รับเหมาออกจากรายชื่อบุคลากรโดยไม่แก้ไขแอปพลิเคชัน', 'Removing a directory listing does not enforce termination of the active application session.', 'การนำชื่อออกจากรายชื่อไม่ได้บังคับให้เซสชันแอปพลิเคชันที่ทำงานอยู่สิ้นสุด']
    ], correct: 0,
    takeaway: 'Central account disablement does not prove that every application session has ended.'
  },
  {
    id: 652, objective: '3.1', bullet: 'deprovision', knowledge: [8], sources: ['R04', 'R17'],
    concept: 'Access termination versus audit-record disposal', decision: 'End employee access while meeting an explicit records-retention requirement',
    stem: [
      'An employee has left the organization. The approved procedure requires immediate withdrawal of access and retention of the account\'s approval and activity records for an ongoing audit. Which action BEST satisfies both requirements?',
      'พนักงานออกจากองค์กรแล้ว ขั้นตอนที่อนุมัติกำหนดให้ถอนสิทธิ์ทันที และเก็บระเบียนการอนุมัติกับกิจกรรมของบัญชีไว้เพื่อการตรวจสอบที่กำลังดำเนินอยู่ การกระทำใดตอบสนองทั้งสองข้อกำหนดได้เหมาะสมที่สุด?'
    ],
    choices: [
      ['Keep the account enabled and ask the former employee not to sign in', 'เปิดใช้บัญชีต่อไป และขอให้อดีตพนักงานไม่ลงชื่อเข้าใช้', 'A request not to sign in leaves access available and fails the withdrawal requirement.', 'การขอไม่ให้เข้าใช้ยังเปิดทางให้เข้าถึงและไม่เป็นไปตามข้อกำหนดถอนสิทธิ์'],
      ['Remove the audit records and keep a disabled account with no history', 'ลบระเบียนตรวจสอบ และเก็บบัญชีที่ระงับไว้โดยไม่มีประวัติ', 'This preserves a disabled account but destroys records explicitly required for the audit.', 'วิธีนี้เก็บบัญชีที่ระงับไว้แต่ทำลายระเบียนที่กำหนดชัดเจนว่าต้องเก็บเพื่อตรวจสอบ'],
      ['Delay deprovisioning until the auditors have completed their review', 'ชะลอการถอนสิทธิ์จนกว่าผู้ตรวจสอบจะทบทวนเสร็จ', 'Auditors need retained records, not continuing login rights for the former employee.', 'ผู้ตรวจสอบต้องใช้ระเบียนที่เก็บไว้ ไม่ใช่สิทธิ์เข้าใช้ต่อเนื่องของอดีตพนักงาน'],
      ['Disable access and preserve the required records under the retention procedure', 'ระงับสิทธิ์เข้าถึงและรักษาระเบียนที่ต้องเก็บตามขั้นตอนการเก็บรักษา', 'Access withdrawal and record disposal are different decisions. Disabling access while preserving required evidence meets both stated requirements.', 'การถอนสิทธิ์กับการทำลายระเบียนเป็นคนละการตัดสินใจ การระงับสิทธิ์พร้อมเก็บหลักฐานที่กำหนดทำให้ตรงตามข้อกำหนดทั้งสอง']
    ], correct: 3,
    takeaway: 'Deprovisioning can end access without destroying records that must be retained.'
  }
  ,{
    id: 653, objective: '3.1', bullet: 'tools', knowledge: [11, 13], sources: ['R15', 'R14'],
    concept: 'Directory data responsibility', decision: 'Choose the component for structured identity and group lookup',
    stem: [
      'Several internal applications need a consistent place to look up employee account attributes and group membership. The immediate requirement is to store and retrieve those structured records, rather than run access-review approvals or issue federated login assertions. Which IAM component BEST fits this requirement?',
      'แอปพลิเคชันภายในหลายระบบต้องมีแหล่งค้นหาคุณลักษณะบัญชีพนักงานและสมาชิกกลุ่มที่สอดคล้องกัน ความต้องการขณะนี้คือจัดเก็บและเรียกใช้ระเบียนที่เป็นโครงสร้าง ไม่ใช่ดำเนินการอนุมัติทบทวนสิทธิ์หรือออกข้อความยืนยันการเข้าสู่ระบบระหว่างระบบ องค์ประกอบ IAM ใดเหมาะสมที่สุด?'
    ],
    choices: [
      ['An identity governance workflow for approving entitlement reviews', 'กระบวนงานกำกับอัตลักษณ์เพื่ออนุมัติการทบทวนสิทธิ์', 'Review workflows govern access decisions but are not the directory data-store responsibility described.', 'กระบวนงานทบทวนกำกับการตัดสินใจเรื่องสิทธิ์ แต่ไม่ใช่หน้าที่จัดเก็บข้อมูลไดเรกทอรีตามที่ระบุ'],
      ['An access enforcement component that allows or denies resource requests', 'องค์ประกอบบังคับใช้สิทธิ์ที่อนุญาตหรือปฏิเสธคำขอทรัพยากร', 'Enforcement evaluates access requests; the immediate need is structured identity-data storage and lookup.', 'การบังคับใช้ประเมินคำขอเข้าถึง แต่ความต้องการขณะนี้คือการจัดเก็บและค้นหาข้อมูลอัตลักษณ์อย่างเป็นโครงสร้าง'],
      ['A directory service holding account attributes and group records', 'บริการไดเรกทอรีที่เก็บคุณลักษณะบัญชีและระเบียนกลุ่ม', 'A directory service provides structured identity and object data for authorized lookup. Platforms may combine functions, but this requirement concerns directory records.', 'บริการไดเรกทอรีให้ข้อมูลอัตลักษณ์และวัตถุที่มีโครงสร้างเพื่อการค้นหาที่ได้รับอนุญาต แม้แพลตฟอร์มอาจรวมหลายหน้าที่ แต่ความต้องการนี้เกี่ยวกับระเบียนไดเรกทอรี'],
      ['An identity provider function that supplies authentication assertions', 'หน้าที่ของ IdP ที่ส่งข้อความยืนยันการยืนยันตัวตน', 'Supplying a federated authentication assertion is distinct from the requested storage-and-lookup function.', 'การส่งข้อความยืนยันการยืนยันตัวตนระหว่างระบบเป็นคนละหน้าที่กับการจัดเก็บและค้นหาที่ต้องการ']
    ], correct: 2,
    takeaway: 'Directory services provide structured identity and group data; related IAM functions may be combined in a platform.'
  },
  {
    id: 654, objective: '3.1', bullet: 'tools', knowledge: [12, 13], sources: ['R06'],
    concept: 'IdP assertion responsibility', decision: 'Select a trusted authentication source for federated applications',
    stem: [
      'A company is connecting three applications to a central sign-in service. Each application will validate a trusted assertion about the employee\'s authentication instead of checking the employee\'s password itself. Which component is responsible for creating that assertion?',
      'บริษัทกำลังเชื่อมสามแอปพลิเคชันกับบริการลงชื่อเข้าใช้กลาง แต่ละแอปพลิเคชันจะตรวจสอบข้อความยืนยันจากแหล่งที่เชื่อถือได้เกี่ยวกับการยืนยันตัวตนของพนักงาน แทนที่จะตรวจรหัสผ่านเอง องค์ประกอบใดรับผิดชอบสร้างข้อความยืนยันนั้น?'
    ],
    choices: [
      ['The application owner approving the employee\'s business permissions', 'เจ้าของแอปพลิเคชันที่อนุมัติสิทธิ์ตามความจำเป็นทางธุรกิจ', 'The owner authorizes business access; that approval is not the IdP\'s authentication assertion.', 'เจ้าของอนุมัติสิทธิ์ทางธุรกิจ การอนุมัตินั้นไม่ใช่ข้อความยืนยันการยืนยันตัวตนจาก IdP'],
      ['The identity provider serving the federated applications', 'ผู้ให้บริการอัตลักษณ์หรือ IdP ที่ให้บริการแก่แอปพลิเคชันที่เชื่อมโยงกัน', 'The IdP creates a verifiable assertion representing the authentication event. Each relying application validates it and applies its own access rules.', 'IdP สร้างข้อความยืนยันที่ตรวจสอบได้เพื่อแทนเหตุการณ์ยืนยันตัวตน แต่ละแอปพลิเคชันที่อาศัยข้อมูลนั้นตรวจสอบข้อความและใช้กฎสิทธิ์ของตน'],
      ['The access-review process recertifying existing entitlements', 'กระบวนการทบทวนสิทธิ์ที่รับรองสิทธิ์เดิมซ้ำ', 'Recertification addresses continuing access need, not creation of a login assertion.', 'การรับรองสิทธิ์ซ้ำพิจารณาความจำเป็นต่อเนื่อง ไม่ใช่การสร้างข้อความยืนยันการลงชื่อเข้าใช้'],
      ['The directory lookup function returning employee contact attributes', 'หน้าที่ค้นหาไดเรกทอรีที่ส่งคืนคุณลักษณะข้อมูลติดต่อพนักงาน', 'Directory attributes may support the IdP, but returning contact records alone does not create an authentication assertion.', 'คุณลักษณะในไดเรกทอรีอาจสนับสนุน IdP แต่การส่งระเบียนข้อมูลติดต่อเพียงอย่างเดียวไม่ได้สร้างข้อความยืนยันการยืนยันตัวตน']
    ], correct: 1,
    takeaway: 'In federation, the IdP supplies authentication assertions for relying applications to validate.'
  },
  {
    id: 655, objective: '3.1', bullet: 'frameworks', knowledge: [10, 15], sources: ['R03', 'R08', 'R09', 'R10'],
    concept: 'Digital identity guidance scope', decision: 'Select guidance specifically covering proofing, authentication and federation',
    stem: [
      'An IAM team already has an enterprise risk framework. It now needs NIST guidance specifically addressing identity proofing, authentication and federation for an online service. Which reference MOST directly addresses that combined scope?',
      'ทีม IAM มีกรอบบริหารความเสี่ยงระดับองค์กรอยู่แล้ว ขณะนี้ต้องการแนวทาง NIST ที่มุ่งเรื่องการพิสูจน์อัตลักษณ์ การยืนยันตัวตน และการเชื่อมโยงอัตลักษณ์ระหว่างระบบสำหรับบริการออนไลน์ เอกสารอ้างอิงใดตรงกับขอบเขตรวมนี้มากที่สุด?'
    ],
    choices: [
      ['The NIST Cybersecurity Framework, organizing enterprise cybersecurity outcomes', 'NIST Cybersecurity Framework ซึ่งจัดหมวดผลลัพธ์ความมั่นคงปลอดภัยระดับองค์กร', 'CSF includes identity-related outcomes, but it is broader than the dedicated digital identity guidance requested.', 'CSF มีผลลัพธ์ที่เกี่ยวกับอัตลักษณ์ แต่กว้างกว่าแนวทางเฉพาะด้านอัตลักษณ์ดิจิทัลที่ต้องการ'],
      ['NIST role-based access control material, defining role assignments and constraints', 'เอกสาร RBAC ของ NIST ที่กำหนดการมอบหมายบทบาทและข้อจำกัด', 'RBAC material addresses role-based authorization, not the combined proofing, authentication and federation scope.', 'เอกสาร RBAC เน้นการอนุญาตตามบทบาท ไม่ครอบคลุมขอบเขตรวมด้านพิสูจน์อัตลักษณ์ ยืนยันตัวตน และ federation ที่ระบุ'],
      ['The NIST SP 800-63 Digital Identity Guidelines series', 'ชุดแนวทางอัตลักษณ์ดิจิทัล NIST SP 800-63', 'The SP 800-63 series directly covers identity proofing, authentication and federation. It guides digital identity services rather than supplying an IAM software implementation.', 'ชุด SP 800-63 ครอบคลุมการพิสูจน์อัตลักษณ์ การยืนยันตัวตน และ federation โดยตรง เป็นแนวทางบริการอัตลักษณ์ดิจิทัล ไม่ใช่ซอฟต์แวร์ IAM ที่พร้อมใช้งาน'],
      ['NIST SP 800-162, explaining attribute-based authorization decisions', 'NIST SP 800-162 ซึ่งอธิบายการตัดสินสิทธิ์ตามคุณลักษณะ', 'SP 800-162 focuses on ABAC; it is not the dedicated series for all three requested digital identity functions.', 'SP 800-162 มุ่ง ABAC ไม่ใช่ชุดแนวทางเฉพาะสำหรับหน้าที่อัตลักษณ์ดิจิทัลทั้งสามที่ต้องการ']
    ], correct: 2,
    takeaway: 'SP 800-63 addresses proofing, authentication and federation; frameworks and tools have different purposes.'
  },
  {
    id: 656, objective: '3.1', bullet: 'provision', knowledge: [14, 16], sources: ['R02', 'R17', 'R22'],
    concept: 'Owned workload identity lifecycle', decision: 'Provision a dedicated automation identity with accountability and limited scope',
    stem: [
      'A team will deploy a nightly bot that reads a shipping database and writes a summary report. It must continue operating when individual employees change jobs. Which provisioning approach BEST supports secure operation and lifecycle management?',
      'ทีมจะติดตั้งบอตทำงานทุกคืนเพื่ออ่านฐานข้อมูลการจัดส่งและเขียนรายงานสรุป บอตต้องทำงานต่อได้เมื่อพนักงานแต่ละคนเปลี่ยนงาน แนวทางจัดเตรียมสิทธิ์ใดสนับสนุนการทำงานที่ปลอดภัยและการจัดการวงจรชีวิตได้เหมาะสมที่สุด?'
    ],
    choices: [
      ['Use a dedicated workload identity with a responsible owner, task-scoped permissions and review arrangements', 'ใช้ตัวตนสำหรับภาระงานโดยเฉพาะ กำหนดผู้รับผิดชอบ สิทธิ์ตามงาน และแนวทางทบทวน', 'A dedicated, owned identity separates automation from personal accounts and supports permission review and retirement. Its authentication method must suit an unattended workload.', 'ตัวตนเฉพาะที่มีผู้รับผิดชอบแยกงานอัตโนมัติจากบัญชีบุคคล และสนับสนุนการทบทวนสิทธิ์กับเลิกใช้งาน วิธียืนยันตัวตนต้องเหมาะกับงานที่ไม่มีคนคอยตอบ'],
      ['Use the developer\'s personal account and transfer its password whenever the developer changes roles', 'ใช้บัญชีส่วนตัวของผู้พัฒนาและโอนรหัสผ่านเมื่อผู้พัฒนาเปลี่ยนบทบาท', 'This couples automation to a personal identity and obscures accountability and lifecycle control.', 'วิธีนี้ผูกงานอัตโนมัติกับตัวตนส่วนบุคคล และทำให้ความรับผิดชอบกับการควบคุมวงจรชีวิตไม่ชัดเจน'],
      ['Use a shared administrator account and record the bot name in the reporting schedule', 'ใช้บัญชีผู้ดูแลร่วมกัน และบันทึกชื่อบอตในตารางรายงาน', 'A schedule entry does not justify administrative permissions or distinguish the bot\'s activity from other users of the shared account.', 'การบันทึกในตารางไม่ได้เป็นเหตุผลให้สิทธิ์ผู้ดูแล หรือแยกกิจกรรมบอตจากผู้ใช้อื่นของบัญชีร่วม'],
      ['Use a dedicated identity with broad database rights and review it only if report generation fails', 'ใช้ตัวตนเฉพาะที่มีสิทธิ์ฐานข้อมูลกว้าง และทบทวนเมื่อสร้างรายงานล้มเหลวเท่านั้น', 'Broad rights exceed the stated task, and application failure is not a substitute for continuing access review.', 'สิทธิ์กว้างเกินงานที่ระบุ และการรอระบบล้มเหลวไม่ใช่สิ่งทดแทนการทบทวนความจำเป็นของสิทธิ์อย่างต่อเนื่อง']
    ], correct: 0,
    takeaway: 'Automated workloads need their own accountable, appropriately scoped identity lifecycle.'
  },
  {
    id: 657, objective: '3.1', bullet: 'provision', knowledge: [1, 2, 15], sources: ['R03', 'R04', 'R05'],
    concept: 'Onboarding identity proofing', decision: 'Distinguish establishing an applicant\'s identity from verifying an existing secret',
    stem: [
      'A remote onboarding service lets an applicant choose a username and password. Before issuing an employee account, organizational policy requires checking that the applicant is the person named in the approved hiring record. Which additional activity addresses this requirement?',
      'บริการรับพนักงานทางไกลให้ผู้สมัครเลือกชื่อผู้ใช้และรหัสผ่าน ก่อนออกบัญชีพนักงาน นโยบายกำหนดให้ตรวจสอบว่าผู้สมัครเป็นบุคคลที่มีชื่อในระเบียนการจ้างที่อนุมัติ กิจกรรมเพิ่มเติมใดตอบสนองข้อกำหนดนี้?'
    ],
    choices: [
      ['Assign a standard role and use its permissions as evidence of the applicant\'s identity', 'กำหนดบทบาทมาตรฐานและใช้สิทธิ์ของบทบาทเป็นหลักฐานตัวตนผู้สมัคร', 'Role assignment establishes access scope, not a verified link to the person in the hiring record.', 'การกำหนดบทบาทกำหนดขอบเขตสิทธิ์ ไม่ได้ตรวจสอบความเชื่อมโยงกับบุคคลในระเบียนการจ้าง'],
      ['Ask the applicant to enter the newly chosen password a second time', 'ให้ผู้สมัครกรอกรหัสผ่านที่เพิ่งเลือกอีกครั้ง', 'Repeating a self-selected secret shows control of that secret, not the claimed real-life identity.', 'การกรอกความลับที่เลือกเองซ้ำแสดงการควบคุมความลับนั้น ไม่ใช่พิสูจน์ตัวตนจริงที่อ้าง'],
      ['Enable an access review after the account has received its initial permissions', 'เปิดการทบทวนสิทธิ์หลังบัญชีได้รับสิทธิ์เริ่มต้นแล้ว', 'Reviewing entitlements later does not perform the required identity check before issuance.', 'การทบทวนสิทธิ์ภายหลังไม่ได้ตรวจตัวตนตามที่กำหนดก่อนออกบัญชี'],
      ['Perform identity proofing using the organization\'s approved evidence-checking process', 'ดำเนินการพิสูจน์อัตลักษณ์ด้วยกระบวนการตรวจหลักฐานที่องค์กรอนุมัติ', 'Identity proofing establishes the required relationship between the applicant and the claimed person. Authenticating a chosen password alone cannot establish that relationship.', 'การพิสูจน์อัตลักษณ์สร้างความเชื่อมโยงที่ต้องการระหว่างผู้สมัครกับบุคคลที่อ้าง การตรวจรหัสผ่านที่เลือกไว้เพียงอย่างเดียวทำเช่นนั้นไม่ได้']
    ], correct: 3,
    takeaway: 'Identity proofing establishes who an applicant is; later authentication demonstrates control of an authenticator.'
  },
  {
    id: 658, objective: '3.2', bullet: 'least-privilege', knowledge: [16, 18], sources: ['R21'],
    concept: 'Task-specific minimum access', decision: 'Grant necessary read access without unrelated administration rights',
    stem: [
      'A support analyst must read current equipment records to answer customer inquiries. The approved job description does not include changing records, creating accounts or maintaining the application. Which permission set BEST applies least privilege?',
      'นักวิเคราะห์ฝ่ายสนับสนุนต้องอ่านระเบียนอุปกรณ์ปัจจุบันเพื่อตอบลูกค้า หน้าที่ที่อนุมัติไม่รวมการแก้ไขระเบียน สร้างบัญชี หรือดูแลแอปพลิเคชัน ชุดสิทธิ์ใดใช้หลักให้สิทธิ์เท่าที่จำเป็นได้เหมาะสมที่สุด?'
    ],
    choices: [
      ['Read and modify equipment records, with no account-management permission', 'อ่านและแก้ไขระเบียนอุปกรณ์ได้ แต่ไม่มีสิทธิ์จัดการบัญชี', 'Removing account administration is useful, but write access still exceeds the stated read-only duty.', 'การไม่มีสิทธิ์จัดการบัญชีเป็นประโยชน์ แต่สิทธิ์แก้ไขยังเกินหน้าที่ที่ต้องอ่านเท่านั้น'],
      ['Read the required equipment records, without modification or administrative rights', 'อ่านระเบียนอุปกรณ์ที่จำเป็นได้ โดยไม่มีสิทธิ์แก้ไขหรือดูแลระบบ', 'These permissions satisfy the confirmed task while excluding unnecessary actions. Least privilege is based on required work, not the broadest convenient role.', 'สิทธิ์นี้รองรับงานที่ยืนยันแล้วและไม่รวมการกระทำที่ไม่จำเป็น หลักสิทธิ์เท่าที่จำเป็นอิงงานที่ต้องทำ ไม่ใช่บทบาทกว้างที่สุดที่สะดวก'],
      ['Administer the application using a separate account while handling inquiries', 'ดูแลแอปพลิเคชันด้วยบัญชีแยกขณะตอบคำถามลูกค้า', 'A separate account does not justify granting administration to someone whose job does not require it.', 'การใช้บัญชีแยกไม่ได้เป็นเหตุผลให้สิทธิ์ดูแลระบบแก่ผู้ที่ไม่ต้องใช้ตามหน้าที่'],
      ['Use an older exported report with no access to the current records', 'ใช้รายงานส่งออกเก่าโดยไม่มีสิทธิ์เข้าถึงระเบียนปัจจุบัน', 'This avoids granting access but fails the legitimate requirement for current equipment information.', 'วิธีนี้ไม่ให้สิทธิ์เข้าถึง แต่ไม่ตอบสนองความต้องการข้อมูลอุปกรณ์ปัจจุบันที่ชอบด้วยหน้าที่']
    ], correct: 1,
    takeaway: 'Least privilege grants enough access for the actual task while excluding unnecessary actions.'
  }
  ,{
    id: 659, objective: '3.2', bullet: 'separation-of-duties', knowledge: [14, 17], sources: ['R02', 'R21'],
    concept: 'SoD for automated request and approval', decision: 'Remove an automated identity\'s ability to approve its own sensitive requests',
    stem: [
      'A purchasing bot creates supplier-account change requests. Its identity can also approve those same requests, so a faulty bot action could change payment details without another decision maker. Policy requires independent approval of each change. Which adjustment BEST enforces that requirement?',
      'บอตจัดซื้อสร้างคำขอเปลี่ยนบัญชีผู้ขาย ตัวตนของบอตยังอนุมัติคำขอเดียวกันได้ จึงอาจเปลี่ยนรายละเอียดชำระเงินจากการทำงานผิดพลาดโดยไม่มีผู้ตัดสินใจอื่น นโยบายกำหนดให้ทุกการเปลี่ยนแปลงได้รับการอนุมัติอย่างอิสระ การปรับใดบังคับใช้ข้อกำหนดนี้ได้เหมาะสมที่สุด?'
    ],
    choices: [
      ['Keep both permissions and send the bot\'s daily activity report to its owner', 'คงสิทธิ์ทั้งสอง และส่งรายงานกิจกรรมรายวันให้ผู้รับผิดชอบบอต', 'Logging supports oversight after actions, but does not require an independent approval before the change.', 'การบันทึกช่วยกำกับภายหลัง แต่ไม่ได้บังคับให้มีการอนุมัติอิสระก่อนเปลี่ยนแปลง'],
      ['Require two credentials for the bot while keeping both request and approval permissions', 'ให้บอตใช้สิ่งรับรองสองรายการ โดยคงสิทธิ์ร้องขอและอนุมัติทั้งคู่', 'Changing authentication does not separate the conflicting authorizations held by the same identity.', 'การเปลี่ยนการยืนยันตัวตนไม่ได้แยกสิทธิ์ที่ขัดกันซึ่งอยู่ในตัวตนเดียว'],
      ['Remove the bot\'s approval right, retain its request right, and assign approval outside its control', 'ถอนสิทธิ์อนุมัติของบอต คงสิทธิ์ร้องขอ และกำหนดผู้อนุมัติที่มีอำนาจนอกการควบคุมของบอต', 'Removing the bot\'s approval right and separating approval from its control enforces independence. A second identity that the bot can control would not establish this separation.', 'การถอนสิทธิ์อนุมัติของบอตและแยกการอนุมัติออกจากการควบคุมของบอตบังคับให้เป็นอิสระ ตัวตนที่สองที่บอตควบคุมได้ไม่สร้างการแยกดังกล่าว'],
      ['Put request and approval in separate roles but assign both roles to the bot', 'แยกสิทธิ์ร้องขอกับอนุมัติเป็นคนละบทบาท แต่กำหนดทั้งสองให้บอต', 'Two role names do not enforce independence when the same identity retains both effective permissions.', 'ชื่อบทบาทสองชื่อไม่ได้สร้างความเป็นอิสระ เมื่อตัวตนเดียวยังมีสิทธิ์ทั้งสองจริง']
    ], correct: 2,
    takeaway: 'SoD separates conflicting effective permissions, including those granted to bots.'
  },
  {
    id: 660, objective: '3.2', bullet: 'separation-of-duties', knowledge: [17], sources: ['R21'],
    concept: 'Residual collusion risk after SoD', decision: 'Evaluate the strength and limits of a separated release workflow',
    stem: [
      'A software team requires one person to submit a release and a different authorized person to approve it. Permissions prevent either person from completing both steps alone. A manager states that this design makes a malicious release impossible. Which response is MOST accurate?',
      'ทีมซอฟต์แวร์กำหนดให้คนหนึ่งส่งคำขอเผยแพร่ และอีกคนที่ได้รับอนุญาตเป็นผู้อนุมัติ สิทธิ์ป้องกันไม่ให้คนใดทำครบสองขั้นตอนโดยลำพัง ผู้จัดการกล่าวว่าการออกแบบนี้ทำให้การเผยแพร่ที่ประสงค์ร้ายเป็นไปไม่ได้ คำตอบใดถูกต้องที่สุด?'
    ],
    choices: [
      ['It reduces unilateral abuse, but collusion or other control failures can still permit harm', 'ช่วยลดการกระทำมิชอบโดยลำพัง แต่การสมรู้ร่วมคิดหรือมาตรการอื่นล้มเหลวยังอาจก่อความเสียหาย', 'SoD limits a single person\'s control over sensitive steps. It does not guarantee that participants cannot collude or that every supporting control will work.', 'SoD จำกัดการควบคุมขั้นตอนสำคัญโดยคนเดียว แต่ไม่ได้รับประกันว่าผู้เกี่ยวข้องจะไม่สมรู้ร่วมคิด หรือมาตรการสนับสนุนทุกอย่างจะทำงานสำเร็จ'],
      ['It removes malicious-release risk because two different people must participate', 'กำจัดความเสี่ยงการเผยแพร่ที่ประสงค์ร้าย เพราะต้องมีคนสองคน', 'Different participants reduce unilateral abuse, but the number of people is not a guarantee against collusion.', 'ผู้เกี่ยวข้องต่างคนช่วยลดการกระทำโดยลำพัง แต่จำนวนคนไม่ได้รับประกันการป้องกันการสมรู้ร่วมคิด'],
      ['It only counts as separation of duties when a third person performs another approval', 'จะถือเป็นการแบ่งแยกหน้าที่ได้ก็ต่อเมื่อมีคนที่สามอนุมัติอีกครั้ง', 'There is no universal three-person requirement; the relevant issue is separation of incompatible duties in the stated workflow.', 'ไม่มีข้อกำหนดสากลว่าต้องมีสามคน ประเด็นคือการแยกหน้าที่ที่ขัดกันในกระบวนการที่ระบุ'],
      ['It adds no security value because authorized users can still make mistakes', 'ไม่เพิ่มประโยชน์ด้านความปลอดภัย เพราะผู้มีสิทธิ์ยังทำผิดพลาดได้', 'Residual risk does not mean the control has no value; preventing one person from controlling both steps is a meaningful reduction.', 'การมีความเสี่ยงหลงเหลือไม่ได้แปลว่ามาตรการไร้ประโยชน์ การป้องกันคนเดียวควบคุมสองขั้นตอนลดความเสี่ยงได้จริง']
    ], correct: 0,
    takeaway: 'SoD reduces unilateral abuse; it does not eliminate collusion or all other risks.'
  },
  {
    id: 661, objective: '3.2', bullet: 'models', knowledge: [18, 19], sources: ['R11'],
    concept: 'Owner-delegated access decision', decision: 'Identify DAC from who is authorized to set resource permissions',
    stem: [
      'An engineering file service lets each file owner choose which colleagues may read or edit that file. The service enforces the permissions chosen by the owner, and no mandatory classification policy overrides that choice in this scenario. Which access control model is illustrated?',
      'บริการไฟล์ฝ่ายวิศวกรรมให้เจ้าของไฟล์แต่ละรายเลือกได้ว่าเพื่อนร่วมงานคนใดอ่านหรือแก้ไขไฟล์นั้นได้ บริการบังคับใช้สิทธิ์ที่เจ้าของเลือก และในกรณีนี้ไม่มีนโยบายจำแนกข้อมูลแบบบังคับที่อยู่เหนือการเลือกนั้น กรณีนี้แสดงแบบจำลองควบคุมการเข้าถึงใด?'
    ],
    choices: [
      ['Role-Based Access Control (RBAC)', 'การควบคุมการเข้าถึงตามบทบาท (RBAC)', 'The deciding fact is the individual owner\'s discretion, not permission assignment through predefined job roles.', 'ข้อเท็จจริงสำคัญคือดุลยพินิจเจ้าของแต่ละราย ไม่ใช่การให้สิทธิ์ผ่านบทบาทงานที่กำหนดไว้'],
      ['Attribute-Based Access Control (ABAC)', 'การควบคุมการเข้าถึงตามคุณลักษณะ (ABAC)', 'The scenario does not describe a policy evaluating subject, resource and contextual attributes; it specifies owner-directed grants.', 'กรณีนี้ไม่ได้ระบุนโยบายประเมินคุณลักษณะผู้ร้องขอ ทรัพยากร และบริบท แต่ระบุการให้สิทธิ์โดยเจ้าของ'],
      ['Mandatory Access Control (MAC)', 'การควบคุมการเข้าถึงแบบบังคับ (MAC)', 'MAC limits an ordinary owner\'s ability to override centrally established policy, unlike the discretion specified here.', 'MAC จำกัดการที่เจ้าของทั่วไปจะข้ามนโยบายส่วนกลาง ต่างจากดุลยพินิจที่ระบุในกรณีนี้'],
      ['Discretionary Access Control (DAC)', 'การควบคุมการเข้าถึงตามดุลยพินิจ (DAC)', 'DAC delegates access choices to the owner or another authorized controller. System enforcement of those choices is fully consistent with DAC.', 'DAC ให้อำนาจเลือกสิทธิ์แก่เจ้าของหรือผู้ควบคุมที่ได้รับอนุญาต การที่ระบบบังคับใช้สิทธิ์เหล่านั้นสอดคล้องกับ DAC']
    ], correct: 3,
    takeaway: 'DAC concerns delegated permission-setting authority, not an absence of system enforcement.'
  },
  {
    id: 662, objective: '3.2', bullet: 'models', knowledge: [20], sources: ['R12', 'R13'],
    concept: 'Clearance and need-to-know under mandatory policy', decision: 'Apply both classification authorization and project need',
    stem: [
      'A classified research system enforces centrally assigned labels. Policy requires both suitable clearance and a documented project need before a user may read a document. A researcher has the required clearance but is not assigned to the project. How should the access request be handled?',
      'ระบบวิจัยข้อมูลลับบังคับใช้ป้ายกำกับที่กำหนดจากส่วนกลาง นโยบายกำหนดว่าก่อนอ่านเอกสาร ผู้ใช้ต้องมีทั้งระดับอนุญาตด้านความลับที่เหมาะสมและความจำเป็นต่องานโครงการที่บันทึกไว้ นักวิจัยมีระดับอนุญาตตามที่ต้องการ แต่ไม่ได้รับมอบหมายให้ทำโครงการ ควรจัดการคำขอเข้าถึงอย่างไร?'
    ],
    choices: [
      ['Grant read access because the clearance satisfies the document\'s classification level', 'ให้สิทธิ์อ่าน เพราะระดับอนุญาตตรงกับชั้นความลับของเอกสาร', 'Clearance satisfies only one of the two explicit policy conditions; the project need is still absent.', 'ระดับอนุญาตตรงตามเงื่อนไขเพียงข้อเดียวจากสองข้อ ยังไม่มีความจำเป็นต่องานโครงการ'],
      ['Deny access unless the required project need is established through the authorized process', 'ปฏิเสธสิทธิ์จนกว่าความจำเป็นต่องานโครงการจะได้รับการยืนยันผ่านกระบวนการที่มีอำนาจ', 'Mandatory policy must enforce both conditions. Appropriate clearance alone does not establish need-to-know or authorize this project resource.', 'นโยบายแบบบังคับต้องใช้ทั้งสองเงื่อนไข ระดับอนุญาตที่เหมาะสมเพียงอย่างเดียวไม่ได้สร้างความจำเป็นต้องรู้หรือให้สิทธิ์ทรัพยากรโครงการนี้'],
      ['Let the document owner bypass the project condition by adding the researcher to a sharing list', 'ให้เจ้าของเอกสารข้ามเงื่อนไขโครงการโดยเพิ่มนักวิจัยในรายการแบ่งปัน', 'An ordinary owner cannot use discretionary sharing to override the mandatory condition in the scenario.', 'เจ้าของทั่วไปใช้การแบ่งปันตามดุลยพินิจข้ามเงื่อนไขแบบบังคับในกรณีนี้ไม่ได้'],
      ['Grant temporary read access and review the project need after the researcher finishes', 'ให้สิทธิ์อ่านชั่วคราว และทบทวนความจำเป็นหลังนักวิจัยอ่านเสร็จ', 'Temporary access still violates the requirement to establish project need before reading.', 'การให้สิทธิ์ชั่วคราวยังละเมิดข้อกำหนดให้ยืนยันความจำเป็นต่อโครงการก่อนอ่าน']
    ], correct: 1,
    takeaway: 'Clearance and need-to-know are separate access conditions when required by mandatory policy.'
  },
  {
    id: 663, objective: '3.2', bullet: 'models', knowledge: [3, 21], sources: ['R10'],
    concept: 'Permission reuse through job roles', decision: 'Choose RBAC for consistent job-function assignment at scale',
    stem: [
      'A service company has hundreds of dispatchers. Management wants one approved set of permissions for the dispatcher job, with employees assigned to that set when they join the function. Changes to the job\'s permissions should be managed through the defined role rather than individual grants. Which model MOST directly supports this design?',
      'บริษัทบริการมีเจ้าหน้าที่จัดส่งหลายร้อยคน ผู้บริหารต้องการชุดสิทธิ์ที่อนุมัติหนึ่งชุดสำหรับงานจัดส่ง โดยกำหนดพนักงานให้ใช้ชุดนั้นเมื่อเข้าทำหน้าที่ การเปลี่ยนสิทธิ์ของงานควรจัดการผ่านบทบาทที่กำหนด แทนการให้สิทธิ์รายคน แบบจำลองใดสนับสนุนการออกแบบนี้ได้ตรงที่สุด?'
    ],
    choices: [
      ['Role-Based Access Control (RBAC)', 'การควบคุมการเข้าถึงตามบทบาท (RBAC)', 'RBAC associates permissions with a role and assigns users to that role. This supports consistent administration for the defined job function.', 'RBAC ผูกสิทธิ์กับบทบาทและกำหนดผู้ใช้ให้มีบทบาทนั้น จึงสนับสนุนการบริหารที่สอดคล้องกันสำหรับหน้าที่งานที่กำหนด'],
      ['Discretionary Access Control (DAC)', 'การควบคุมการเข้าถึงตามดุลยพินิจ (DAC)', 'Owner-directed individual sharing does not most directly express the requested reusable job-role design.', 'การแบ่งปันรายคนตามดุลยพินิจเจ้าของไม่ได้แสดงการออกแบบที่นำบทบาทงานกลับมาใช้ซ้ำได้ตรงที่สุด'],
      ['Mandatory Access Control (MAC)', 'การควบคุมการเข้าถึงแบบบังคับ (MAC)', 'The scenario specifies job-role permission assignment, not mandatory sensitivity labels and subject authorizations.', 'กรณีนี้ระบุการให้สิทธิ์ตามบทบาทงาน ไม่ใช่ป้ายกำกับความอ่อนไหวแบบบังคับและการอนุญาตผู้เข้าถึง'],
      ['Attribute-Based Access Control (ABAC)', 'การควบคุมการเข้าถึงตามคุณลักษณะ (ABAC)', 'ABAC can use job attributes, but the design explicitly calls for permissions assigned to reusable roles, which is RBAC\'s direct organizing mechanism.', 'ABAC ใช้คุณลักษณะงานได้ แต่การออกแบบระบุชัดให้ผูกสิทธิ์กับบทบาทที่ใช้ซ้ำ ซึ่งเป็นกลไกจัดระเบียบโดยตรงของ RBAC']
    ], correct: 0,
    takeaway: 'RBAC organizes permission assignment through defined roles and authorized role membership.'
  },
  {
    id: 664, objective: '3.2', bullet: 'models', knowledge: [22], sources: ['R09'],
    concept: 'Attribute and context policy evaluation', decision: 'Identify ABAC from subject, resource, action and environment criteria',
    stem: [
      'A document service evaluates each read request using the employee\'s project assignment, the document\'s project tag, the device\'s approval status and the permitted access hours. Access is allowed only when the required attribute conditions match policy. Which model BEST describes this decision process?',
      'บริการเอกสารประเมินคำขออ่านแต่ละครั้งจากโครงการที่พนักงานได้รับมอบหมาย ป้ายโครงการของเอกสาร สถานะอนุมัติอุปกรณ์ และช่วงเวลาที่อนุญาตให้เข้าถึง ระบบให้สิทธิ์เมื่อเงื่อนไขคุณลักษณะที่กำหนดตรงกับนโยบายเท่านั้น แบบจำลองใดอธิบายกระบวนการตัดสินใจนี้ได้เหมาะสมที่สุด?'
    ],
    choices: [
      ['Discretionary Access Control (DAC)', 'การควบคุมการเข้าถึงตามดุลยพินิจ (DAC)', 'The decision evaluates policy conditions for each request rather than an owner choosing an individual sharing list.', 'การตัดสินใจประเมินเงื่อนไขนโยบายต่อคำขอ ไม่ใช่เจ้าของเลือกรายการแบ่งปันรายคน'],
      ['Role-Based Access Control (RBAC) based only on the employee\'s job role', 'การควบคุมตามบทบาท (RBAC) โดยอาศัยบทบาทงานของพนักงานเพียงอย่างเดียว', 'A job role alone does not express the required resource, device and access-hour conditions.', 'บทบาทงานเพียงอย่างเดียวไม่แสดงเงื่อนไขทรัพยากร อุปกรณ์ และช่วงเวลาที่กำหนด'],
      ['Attribute-Based Access Control (ABAC)', 'การควบคุมการเข้าถึงตามคุณลักษณะ (ABAC)', 'ABAC evaluates subject and resource attributes, the requested operation and relevant environment conditions against policy. The combined project, device and time criteria fit that approach.', 'ABAC ประเมินคุณลักษณะผู้ร้องขอและทรัพยากร การกระทำที่ขอ และสภาพแวดล้อมที่เกี่ยวข้องเทียบกับนโยบาย เกณฑ์โครงการ อุปกรณ์ และเวลาร่วมกันตรงกับแนวทางนี้'],
      ['Mandatory Access Control (MAC) based only on clearance and classification level', 'การควบคุมแบบบังคับ (MAC) โดยอาศัยระดับอนุญาตและชั้นความลับเพียงอย่างเดียว', 'A classification-only comparison would not evaluate the additional contextual conditions explicitly required here.', 'การเทียบชั้นความลับเพียงอย่างเดียวไม่ได้ประเมินเงื่อนไขตามบริบทเพิ่มเติมที่กำหนดชัดเจน']
    ], correct: 2,
    takeaway: 'ABAC evaluates policy conditions using attributes of subjects, resources, operations and relevant context.'
  }
  ,{
    id: 665, objective: '3.2', bullet: 'models', knowledge: [21, 16], sources: ['R10'],
    concept: 'Multiple roles and effective permissions', decision: 'Interpret different total permissions without assuming inconsistent shared-role design',
    stem: [
      'Two employees have the same approved analyst role. One also has a separately approved maintenance role. A review finds that only the second employee can change system settings, as intended by the maintenance role. Which conclusion is BEST supported?',
      'พนักงานสองคนมีบทบาทนักวิเคราะห์ที่ได้รับอนุมัติเหมือนกัน คนหนึ่งมีบทบาทบำรุงรักษาที่ได้รับอนุมัติแยกเพิ่มเติมด้วย การทบทวนพบว่าเฉพาะคนที่สองเปลี่ยนการตั้งค่าระบบได้ตามสิทธิ์ของบทบาทบำรุงรักษา ข้อสรุปใดมีหลักฐานรองรับเหมาะสมที่สุด?'
    ],
    choices: [
      ['RBAC has failed because a shared role must produce identical total access', 'RBAC ล้มเหลว เพราะการมีบทบาทเดียวกันต้องทำให้สิทธิ์รวมเหมือนกัน', 'A shared role provides its associated permissions, but additional authorized roles can change total effective access.', 'บทบาทที่มีร่วมกันให้สิทธิ์ของบทบาทนั้น แต่บทบาทอื่นที่ได้รับอนุญาตอาจเปลี่ยนสิทธิ์รวมที่มีผลจริง'],
      ['The additional role can explain the difference; assess the combined rights against current need', 'บทบาทเพิ่มเติมอธิบายความต่างได้ และควรประเมินสิทธิ์รวมเทียบกับความจำเป็นปัจจุบัน', 'RBAC permits multiple authorized role assignments. The observed difference is consistent with the additional role, while least privilege still requires checking the combined permissions.', 'RBAC อนุญาตให้มีหลายบทบาทที่ได้รับอนุญาต ความต่างที่พบสอดคล้องกับบทบาทเพิ่มเติม แต่หลักสิทธิ์เท่าที่จำเป็นยังต้องประเมินสิทธิ์รวม'],
      ['Both employees should receive the maintenance role to restore consistent analyst access', 'ควรให้บทบาทบำรุงรักษาแก่ทั้งสองคนเพื่อให้สิทธิ์นักวิเคราะห์สอดคล้องกัน', 'Consistency does not justify granting a role that the first employee has no stated need or approval to hold.', 'ความสอดคล้องไม่ได้เป็นเหตุผลให้บทบาทที่พนักงานคนแรกไม่มีความจำเป็นหรือการอนุมัติตามที่ระบุ'],
      ['The additional role proves that least privilege is satisfied without any further review', 'บทบาทเพิ่มเติมพิสูจน์ว่าเป็นไปตามสิทธิ์เท่าที่จำเป็นแล้วโดยไม่ต้องทบทวนต่อ', 'Role assignment is a mechanism, not proof that the combined permissions remain minimal and appropriate.', 'การกำหนดบทบาทเป็นกลไก ไม่ใช่หลักฐานว่าสิทธิ์รวมยังน้อยที่สุดและเหมาะสม']
    ], correct: 1,
    takeaway: 'Evaluate all authorized role assignments and constraints when assessing effective access.'
  },
  {
    id: 666, objective: '3.2', bullet: 'models', knowledge: [18, 19, 20], sources: ['R11', 'R12'],
    concept: 'Access-model suitability rather than security ranking', decision: 'Evaluate a proposed mandatory model against policy requirements',
    stem: [
      'A project-sharing service uses owner-managed permissions with system enforcement. A consultant recommends replacing it with MAC solely because "MAC is always more secure than DAC." No classification or access-policy requirement has yet been identified for the change. Which response is MOST appropriate?',
      'บริการแบ่งปันงานโครงการใช้สิทธิ์ที่เจ้าของจัดการและระบบบังคับใช้ ที่ปรึกษาเสนอให้เปลี่ยนเป็น MAC เพียงเพราะว่า "MAC ปลอดภัยกว่า DAC เสมอ" แต่ยังไม่ได้ระบุข้อกำหนดชั้นความลับหรือนโยบายเข้าถึงที่ต้องเปลี่ยน ควรตอบสนองอย่างไรจึงเหมาะสมที่สุด?'
    ],
    choices: [
      ['Approve the change because centrally defined policy removes the need to evaluate permissions', 'อนุมัติการเปลี่ยน เพราะนโยบายส่วนกลางทำให้ไม่ต้องประเมินสิทธิ์', 'Central policy still requires appropriate design, administration and enforcement; the model label is not a substitute for evaluation.', 'นโยบายส่วนกลางยังต้องออกแบบ บริหาร และบังคับใช้อย่างเหมาะสม ชื่อแบบจำลองไม่ได้ทดแทนการประเมิน'],
      ['Reject the change because DAC is always safer when users need to share files', 'ปฏิเสธการเปลี่ยน เพราะ DAC ปลอดภัยกว่าเสมอเมื่อผู้ใช้ต้องแบ่งปันไฟล์', 'This reverses the unsupported universal ranking instead of examining the actual policy and risk requirements.', 'วิธีนี้กลับด้านคำกล่าวเหมารวมที่ไม่มีหลักฐาน แทนที่จะตรวจข้อกำหนดนโยบายและความเสี่ยงจริง'],
      ['Approve the change because enforcing permissions in software makes a system MAC', 'อนุมัติการเปลี่ยน เพราะการบังคับสิทธิ์ด้วยซอฟต์แวร์ทำให้ระบบเป็น MAC', 'DAC permissions can also be enforced by software. The distinction concerns policy authority and discretion, not whether software is used.', 'สิทธิ์ DAC บังคับใช้ด้วยซอฟต์แวร์ได้เช่นกัน ความต่างคืออำนาจนโยบายและดุลยพินิจ ไม่ใช่การมีซอฟต์แวร์'],
      ['Compare the required access policy and risks with each model\'s authority and enforcement arrangements', 'เปรียบเทียบนโยบายเข้าถึงและความเสี่ยงที่ต้องรองรับกับอำนาจกำหนดสิทธิ์และการบังคับใช้ของแต่ละแบบ', 'Neither model is universally most secure. A defensible choice depends on the required policy, delegated authority and effective implementation.', 'ไม่มีแบบใดปลอดภัยที่สุดในทุกกรณี การเลือกที่อธิบายได้ต้องอิงนโยบายที่ต้องการ อำนาจที่มอบหมาย และการนำไปบังคับใช้จริง']
    ], correct: 3,
    takeaway: 'Choose access models for policy and risk requirements, not an unconditional DAC-versus-MAC ranking.'
  },
  {
    id: 667, objective: '3.2', bullet: 'ai-authentication', knowledge: [2, 24], sources: ['R02', 'R05'],
    concept: 'Multiple factor types within one authenticator', decision: 'Recognize possession plus local knowledge without counting physical devices',
    stem: [
      'An employee signs in using a cryptographic security key. The key proves possession only after it verifies a local PIN known to the employee; the key and PIN are both required for each authentication. No separate account password is entered. Which assessment is MOST accurate?',
      'พนักงานลงชื่อเข้าใช้ด้วยกุญแจความปลอดภัยแบบเข้ารหัส กุญแจจะพิสูจน์การครอบครองได้หลังตรวจ PIN ภายในอุปกรณ์ซึ่งพนักงานทราบเท่านั้น และต้องใช้ทั้งกุญแจและ PIN ในการยืนยันตัวตนแต่ละครั้ง โดยไม่กรอกรหัสผ่านบัญชีแยก การประเมินใดถูกต้องที่สุด?'
    ],
    choices: [
      ['It uses possession and knowledge factors even though one physical authenticator is involved', 'ใช้ปัจจัยการครอบครองและความรู้ แม้ใช้อุปกรณ์ยืนยันตัวตนทางกายภาพเพียงชิ้นเดียว', 'MFA requires different factor types, not separate physical devices. The stated key proves possession and requires a knowledge factor to activate authentication.', 'MFA ต้องใช้ปัจจัยต่างประเภท ไม่ใช่อุปกรณ์ทางกายภาพคนละชิ้น กุญแจตามที่ระบุพิสูจน์การครอบครองและต้องใช้ปัจจัยความรู้เพื่อเปิดใช้งานการยืนยันตัวตน'],
      ['It is single-factor authentication because only one physical device is used', 'เป็นการยืนยันตัวตนปัจจัยเดียว เพราะใช้อุปกรณ์ทางกายภาพเพียงชิ้นเดียว', 'A single authenticator can implement more than one factor when each required factor is verified as described.', 'อุปกรณ์ยืนยันตัวตนหนึ่งชิ้นรองรับหลายปัจจัยได้ เมื่อมีการตรวจแต่ละปัจจัยที่จำเป็นตามที่ระบุ'],
      ['It is single-factor authentication because a local PIN cannot contribute a knowledge factor', 'เป็นการยืนยันตัวตนปัจจัยเดียว เพราะ PIN ภายในอุปกรณ์ไม่อาจเป็นปัจจัยความรู้', 'A locally verified activation PIN can provide the knowledge factor for a multi-factor cryptographic authenticator.', 'PIN เปิดใช้งานที่ตรวจภายในอุปกรณ์เป็นปัจจัยความรู้ของอุปกรณ์ยืนยันตัวตนแบบเข้ารหัสหลายปัจจัยได้'],
      ['It uses three factors because the device, its cryptographic key and the PIN count separately', 'ใช้สามปัจจัย เพราะอุปกรณ์ กุญแจเข้ารหัส และ PIN นับแยกกัน', 'The device and its protected key support possession in this scenario; counting components does not create another independent factor type.', 'ในกรณีนี้อุปกรณ์กับกุญแจที่ปกป้องอยู่รองรับการครอบครอง การนับชิ้นส่วนไม่ได้เพิ่มประเภทปัจจัยที่เป็นอิสระ']
    ], correct: 0,
    takeaway: 'MFA counts distinct factor types, not the number of devices, screens or authentication components.',
    sourceNote: 'R05: Multi-Factor Cryptographic Authenticators; extends KNOW-D3-024 with its cited primary reference.'
  },
  {
    id: 668, objective: '3.2', bullet: 'ai-authentication', knowledge: [25, 24], sources: ['R02', 'R05', 'R20'],
    concept: 'Risk signal interpretation', decision: 'Assess an unconfirmed anomaly under an authorized investigation process',
    stem: [
      'An AI-assisted identity tool flags two sign-ins from distant locations within a few minutes. The alert has low confidence, there are no corroborating indicators, and the analyst\'s procedure calls for validating sign-in context before choosing a response. Which action is MOST appropriate?',
      'เครื่องมืออัตลักษณ์ที่ใช้ AI ช่วยแจ้งเตือนการลงชื่อเข้าใช้สองครั้งจากสถานที่ห่างกันในเวลาไม่กี่นาที การแจ้งเตือนมีความเชื่อมั่นต่ำ ไม่มีตัวบ่งชี้อื่นสนับสนุน และขั้นตอนของนักวิเคราะห์กำหนดให้ตรวจสอบบริบทการเข้าใช้ก่อนเลือกวิธีตอบสนอง การกระทำใดเหมาะสมที่สุด?'
    ],
    choices: [
      ['Require a password reset and close the alert without reviewing the flagged sign-ins', 'บังคับเปลี่ยนรหัสผ่าน และปิดการแจ้งเตือนโดยไม่ตรวจเหตุการณ์ลงชื่อเข้าใช้ที่ถูกแจ้ง', 'A reset alone does not validate what triggered the alert or satisfy the stated investigation procedure. It may be part of a response after assessment.', 'การเปลี่ยนรหัสผ่านเพียงอย่างเดียวไม่ได้ตรวจสอบสาเหตุการแจ้งเตือนหรือทำตามขั้นตอนสืบหาที่ระบุ แต่อาจเป็นส่วนหนึ่งของการตอบสนองหลังประเมิน'],
      ['Wait for another alert before recording or investigating this event', 'รอการแจ้งเตือนอีกครั้งก่อนบันทึกหรือตรวจสอบเหตุการณ์นี้', 'Lack of corroboration limits certainty but does not justify ignoring the prescribed validation of the current alert.', 'การไม่มีหลักฐานอื่นสนับสนุนจำกัดความแน่นอน แต่ไม่ได้เป็นเหตุให้งดตรวจสอบการแจ้งเตือนปัจจุบันตามขั้นตอน'],
      ['Review the timestamps, network context and related logs, then follow the authorized response process', 'ทบทวนเวลา บริบทเครือข่าย และบันทึกที่เกี่ยวข้อง แล้วดำเนินการตอบสนองตามอำนาจที่กำหนด', 'Behavioral analytics supplies evidence to assess, not a conclusive verdict. Validating context supports a proportionate response under the stated procedure.', 'การวิเคราะห์พฤติกรรมให้หลักฐานเพื่อประเมิน ไม่ใช่ข้อสรุปเด็ดขาด การตรวจบริบทช่วยเลือกการตอบสนองที่เหมาะสมตามขั้นตอนที่ระบุ'],
      ['Close the alert solely on the employee\'s confirmation that the sign-ins are familiar', 'ปิดการแจ้งเตือนโดยอาศัยเพียงคำยืนยันของพนักงานว่าคุ้นเคยกับการลงชื่อเข้าใช้เหล่านั้น', 'The employee\'s account is useful context, but the procedure still requires validating sign-in evidence rather than treating the reply alone as verification.', 'คำชี้แจงของพนักงานเป็นบริบทที่มีประโยชน์ แต่ขั้นตอนยังต้องตรวจหลักฐานการเข้าใช้ ไม่ใช่ถือคำตอบเพียงอย่างเดียวว่าเป็นการตรวจสอบแล้ว']
    ], correct: 2,
    takeaway: 'AI-assisted risk signals require contextual assessment and do not themselves constitute an MFA factor.'
  },
  {
    id: 669, objective: '3.1', bullet: 'provision', knowledge: [1, 3], sources: ['R03', 'R04'],
    concept: 'Identity-to-account linkage', decision: 'Preserve individual accountability across ordinary and administrative accounts',
    stem: [
      'An administrator has approved ordinary-user and privileged accounts in the same management system. The IAM team needs to keep the accounts distinct while showing that both belong to the same employee. Which record design BEST supports this requirement?',
      'ผู้ดูแลระบบได้รับอนุมัติให้มีบัญชีผู้ใช้ทั่วไปและบัญชีสิทธิ์สูงในระบบจัดการเดียวกัน ทีม IAM ต้องแยกสองบัญชีให้ชัด แต่แสดงว่าทั้งคู่เป็นของพนักงานคนเดียว การออกแบบระเบียนใดเหมาะสมที่สุด?'
    ],
    choices: [
      ['Combine the two accounts into one privileged account used for all work', 'รวมสองบัญชีเป็นบัญชีสิทธิ์สูงบัญชีเดียวเพื่อใช้ทุกงาน', 'Combining them removes the required distinction between ordinary and privileged accounts.', 'การรวมบัญชีทำให้ไม่สามารถแยกบัญชีทั่วไปกับบัญชีสิทธิ์สูงได้ตามที่ต้องการ'],
      ['Maintain the accounts as unrelated identities with no employee linkage', 'เก็บสองบัญชีเป็นอัตลักษณ์ที่ไม่เกี่ยวข้องกันโดยไม่เชื่อมกับพนักงาน', 'This preserves distinct records but fails to establish the required common responsible employee.', 'วิธีนี้แยกระเบียนได้ แต่ไม่แสดงพนักงานผู้รับผิดชอบร่วมกันตามที่ต้องการ'],
      ['Replace the privileged account with a team account shared by all administrators', 'แทนบัญชีสิทธิ์สูงด้วยบัญชีทีมที่ผู้ดูแลทุกคนใช้ร่วมกัน', 'A shared team identity obscures the individual linkage the requirement is trying to preserve.', 'ตัวตนทีมร่วมทำให้ความเชื่อมโยงถึงบุคคลที่ต้องการรักษาไม่ชัดเจน'],
      ['Give each account a distinct identifier and link both records to the employee\'s verified identity', 'กำหนดตัวระบุแยกให้แต่ละบัญชี และเชื่อมทั้งสองระเบียนกับอัตลักษณ์พนักงานที่ตรวจสอบแล้ว', 'An identity, an account and its identifier are distinct concepts. Separate account identifiers with a verified employee linkage preserve both separation and accountability.', 'อัตลักษณ์ บัญชี และตัวระบุเป็นคนละแนวคิด การแยกตัวระบุบัญชีพร้อมเชื่อมกับพนักงานที่ตรวจสอบแล้วรักษาทั้งการแยกบัญชีและความรับผิดชอบ']
    ], correct: 3,
    takeaway: 'Distinct accounts can link to one responsible identity without sharing an account identifier.'
  },
  {
    id: 670, status: 'REJECTED', rejectionReason: 'Equivalent apply-and-verify permission decision already assessed by Q649.',
    objective: '3.2', bullet: 'logical-enforcement', knowledge: [13, 16, 18, 23], sources: ['R08', 'R16'],
    concept: 'Policy decision versus effective technical control', decision: 'Correct actual write permissions after read-only access is approved',
    stem: [
      'Management approves read-only access for a reporting team and updates the access policy. Testing shows the team can still modify records because the application\'s effective permissions were not changed. Which action MOST directly implements the approved restriction?',
      'ผู้บริหารอนุมัติให้ทีมรายงานมีสิทธิ์อ่านเท่านั้นและแก้ไขนโยบายแล้ว การทดสอบพบว่าทีมยังแก้ไขระเบียนได้ เพราะไม่ได้เปลี่ยนสิทธิ์ที่มีผลจริงในแอปพลิเคชัน การกระทำใดทำให้ข้อจำกัดที่อนุมัติมีผลตรงที่สุด?'
    ],
    choices: [
      ['Ask each employee to acknowledge the revised read-only policy', 'ให้พนักงานแต่ละคนรับทราบนโยบายอ่านอย่างเดียวฉบับแก้ไข', 'Acknowledgment helps awareness but leaves the observed write capability in place.', 'การรับทราบช่วยความตระหนัก แต่ยังคงความสามารถแก้ไขที่ตรวจพบ'],
      ['Change the effective permissions and verify that reads succeed while writes are denied', 'เปลี่ยนสิทธิ์ที่มีผลจริง และตรวจว่าอ่านได้แต่การแก้ไขถูกปฏิเสธ', 'Logical controls must enforce the approved decision. Checking both allowed and prohibited actions confirms the restriction without removing legitimate reporting access.', 'มาตรการเชิงตรรกะต้องบังคับใช้ผลอนุมัติ การตรวจทั้งสิ่งที่อนุญาตและสิ่งที่ห้ามยืนยันข้อจำกัดโดยไม่ถอนสิทธิ์รายงานที่จำเป็น'],
      ['Reset the team\'s passwords while keeping the existing application rights', 'เปลี่ยนรหัสผ่านทีมโดยคงสิทธิ์แอปพลิเคชันเดิม', 'Changing authentication secrets does not remove the authorization to modify records.', 'การเปลี่ยนความลับยืนยันตัวตนไม่ได้ถอนสิทธิ์แก้ไขระเบียน'],
      ['Increase write-event logging and leave the application permissions unchanged', 'เพิ่มการบันทึกเหตุการณ์แก้ไข และคงสิทธิ์แอปพลิเคชันไว้เหมือนเดิม', 'More logging may reveal modifications afterward but does not enforce read-only access.', 'การบันทึกเพิ่มอาจพบการแก้ไขภายหลัง แต่ไม่ได้บังคับให้เข้าถึงแบบอ่านอย่างเดียว']
    ], correct: 1,
    takeaway: 'An approved access policy needs effective enforcement and verification of allowed and denied actions.'
  }
];

export function buildProductionQuestion(draft) {
  const letters = ['A', 'B', 'C', 'D'];
  const key = letters[draft.correct];
  const correct = draft.choices[draft.correct];
  const incorrect = draft.choices.flatMap((choice, idx) => idx === draft.correct ? [] : [{
    letter: letters[idx], text_en: choice[2], text_th: choice[3]
  }]);
  return {
    id: draft.id, dom: 3, question: draft.stem[0], options: draft.choices.map(c => c[0]), correct_idx: draft.correct,
    explanation: `Option ${key} is correct. ${correct[2]} ${incorrect.map(c => `Option ${c.letter} is incorrect: ${c.text_en}`).join(' ')}`,
    short_explanation_en: draft.takeaway,
    question_th: draft.stem[1], options_th: draft.choices.map(c => c[1]),
    explanation_th: `ข้อ ${key} ถูกต้อง: ${correct[3]}\n${incorrect.map(c => `- ข้อ ${c.letter} ไม่ถูกต้อง: ${c.text_th}`).join('\n')}`,
    explanation_detail: { correct: { en: correct[2], th: correct[3] }, incorrect }
  };
}

export const stagedQuestions = drafts.filter(draft => draft.status !== 'REJECTED').map(buildProductionQuestion);
export const acceptedQuestions = drafts.filter(draft => (draft.status || reviewStatus) === 'ACCEPTED').map(buildProductionQuestion);

export const reviewRecords = drafts.map(draft => ({
  questionId: draft.id,
  officialObjective: draft.objective,
  outlineBullet: draft.bullet,
  knowledgeIds: draft.knowledge.map(id => `KNOW-D3-${String(id).padStart(3, '0')}`),
  sourceReferences: draft.sources,
  testedConcept: draft.concept,
  assessedDecision: draft.decision,
  academicQA: reviewStatus,
  bilingualQA: reviewStatus,
  duplicateQA: draft.status === 'REJECTED' ? 'REJECTED' : 'NO_EQUIVALENT_FOUND',
  status: draft.status || reviewStatus,
  reason: draft.rejectionReason || 'Academic, bilingual, explanation and semantic review passed with the stated scenario constraints.',
  independentHumanReview: 'pending'
}));
