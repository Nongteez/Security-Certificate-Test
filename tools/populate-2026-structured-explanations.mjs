import fs from 'node:fs';
import path from 'node:path';

const domain1Path = path.resolve('data/certs/isc2/cc/versions/next-bank/questions/domain-1.js');
const rawContent = fs.readFileSync(domain1Path, 'utf8');

// Load current questions
const moduleUrl = new URL('../data/certs/isc2/cc/versions/next-bank/questions/domain-1.js', import.meta.url);
const currentQuestions = (await import(moduleUrl)).default;

console.log(`Loaded ${currentQuestions.length} questions from next-bank domain-1.js.`);

// Define the exact structured explanation details for all 24 questions
const structuredData = {
  584: {
    correct: {
      en: "Integrity is the security objective focused on guarding against improper information modification, alteration, or destruction. In this scenario, prescription dosage values were altered without authorization, representing a direct compromise of data integrity.",
      th: "Integrity (ความถูกต้องสมบูรณ์ของข้อมูล) คือเป้าหมายความมั่นคงปลอดภัยในการป้องกันการแก้ไข ดัดแปลง หรือทำลายข้อมูลโดยไม่ได้รับอนุญาต การที่ขนาดยาถูกเปลี่ยนแปลงถือเป็นการทำลายความถูกต้องของข้อมูลโดยตรง"
    },
    incorrect: [
      {
        letter: "A",
        text_en: "Confidentiality was not violated because data was not improperly disclosed outside the authorized environment.",
        text_th: "Confidentiality ไม่ถูกละเมิดเนื่องจากไม่มีการเปิดเผยข้อมูลแก่ผู้ไม่มีสิทธิ์"
      },
      {
        letter: "C",
        text_en: "Availability was maintained because the database remained fully online and accessible to authorized physicians.",
        text_th: "Availability ยังคงอยู่เพราะระบบยังออนไลน์และเข้าถึงได้ตามปกติ"
      },
      {
        letter: "D",
        text_en: "Non-repudiation concerns proving the identity of a sender or actor, which is secondary to the factual alteration of the clinical records.",
        text_th: "Non-repudiation เป็นเรื่องการยืนยันตัวตนผู้กระทำเพื่อไม่ให้ปฏิเสธได้ ไม่ใช่วัตถุประสงค์หลักที่ถูกทำลายในกรณีนี้"
      }
    ]
  },
  585: {
    correct: {
      en: "Data masking is a bounded confidentiality control that obscures sensitive elements of a dataset (such as displaying only the last four digits of a credit card number) while allowing authorized users to access necessary contextual information to perform their job duties.",
      th: "Data Masking (การพรางข้อมูล) คือมาตรการรักษาความลับที่ปิดบังข้อมูลส่วนที่ละเอียดอ่อน (เช่น การแสดงเฉพาะเลขท้าย 4 ตัว) ทำให้เจ้าหน้าที่สามารถตรวจสอบยืนยันกับลูกค้าได้โดยไม่ต้องเปิดเผยหมายเลขบัตรทั้งหมด"
    },
    incorrect: [
      {
        letter: "B",
        text_en: "Full-disk encryption protects data at rest against physical machine theft, but authorized active users can still see the entire decrypted number.",
        text_th: "Full-disk encryption ป้องกันข้อมูลเมื่อเครื่องถูกขโมย แต่เมื่อเจ้าหน้าที่ล็อกอินทำงาน ข้อมูลจะถูกถอดรหัสและแสดงผลเต็มจำนวนอยู่ดี"
      },
      {
        letter: "C",
        text_en: "Unrestricted read access directly violates the confidentiality mandate by exposing the full number.",
        text_th: "การให้สิทธิ์อ่านทั้งหมดละเมิดนโยบายความลับโดยตรง"
      },
      {
        letter: "D",
        text_en: "Digital signatures provide integrity and authenticity verification, not display confidentiality.",
        text_th: "Digital signatures ใช้ตรวจสอบความถูกต้องและแหล่งที่มา (Integrity/Authenticity) ไม่ได้ใช้จำกัดการมองเห็นข้อมูล"
      }
    ]
  },
  586: {
    correct: {
      en: "An auxiliary diesel generator provides continuous secondary electrical power once temporary battery-backed UPS reserves are depleted, ensuring extended operational availability during prolonged municipal power outages.",
      th: "เครื่องกำเนิดไฟฟ้าดีเซลสำรอง (Auxiliary generator) เป็นกลไกรักษา Availability ในระยะยาว ทำหน้าที่จ่ายไฟฟ้าทดแทนเมื่อแบตเตอรี่ UPS ที่จ่ายไฟได้เพียงระยะสั้น (30 นาที) หมดลง"
    },
    incorrect: [
      {
        letter: "B",
        text_en: "Redundant power supplies connected to the same electrical panel will both fail if utility power is lost.",
        text_th: "พาวเวอร์ซัพพลายคู่ที่ต่อกับแผงไฟเดียวกันจะดับพร้อมกันเมื่อไฟดับทั้งอาคาร"
      },
      {
        letter: "C",
        text_en: "RAID disk mirroring protects against individual drive failures, not power loss.",
        text_th: "RAID ป้องกันความเสียหายจากฮาร์ดดิสก์พัง ไม่ได้ป้องกันไฟฟ้าดับ"
      },
      {
        letter: "D",
        text_en: "Tape backups provide data restoration following a disaster, but cannot keep active systems running during a power interruption.",
        text_th: "เทปสำรองข้อมูลใช้สำหรับการกู้คืนข้อมูล (Recovery) ไม่สามารถทำให้ระบบออนไลน์ต่อเนื่องระหว่างไฟดับได้"
      }
    ]
  },
  587: {
    correct: {
      en: "Authorization is the phase of the AAA model that determines whether an authenticated entity is permitted to access a specific resource or execute specific actions. In this scenario, identification and authentication succeeded because the contractor presented valid credentials, but the system enforced authorization rules to deny access based on revoked privileges.",
      th: "Authorization (การกำหนดสิทธิ์) เป็นขั้นตอนในโมเดล AAA ที่ทำหน้าที่ตรวจสอบว่าผู้ใช้ที่ผ่านการยืนยันตัวตนแล้วมีสิทธิ์เข้าถึงทรัพยากรนั้นหรือไม่ ในกรณีนี้การพิสูจน์ตัวตนสำเร็จแต่ระบบบล็อกเพราะสิทธิ์ของบัญชีถูกระงับ"
    },
    incorrect: [
      {
        letter: "A",
        text_en: "Authentication succeeded when credentials were validated; it does not determine access permissions.",
        text_th: "Authentication ทำงานสำเร็จไปแล้วตอนตรวจรหัสผ่าน แต่ไม่ได้มีหน้าที่ตัดสินว่าเข้าถึงข้อมูลได้หรือไม่"
      },
      {
        letter: "C",
        text_en: "Accounting tracks and logs user activity after access occurs, but does not make access-granting decisions.",
        text_th: "Accounting เป็นการบันทึกประวัติการใช้งานหลังจากได้รับสิทธิ์แล้ว ไม่ใช่ขั้นตอนการตัดสินใจอนุญาตหรือปฏิเสธสิทธิ์"
      },
      {
        letter: "D",
        text_en: "Identification is simply claiming an identity (such as supplying a username) prior to authentication.",
        text_th: "Identification เป็นเพียงการระบุตัวตน (เช่น ป้อน Username) ซึ่งสำเร็จไปตั้งแต่ตอนล็อกอินแล้ว"
      }
    ]
  },
  588: {
    correct: {
      en: "Accounting (and auditing) is the component of the AAA model responsible for logging, tracking, recording, and monitoring user and system actions, producing audit trails that prove who performed which action and when.",
      th: "Accounting (การบันทึกและตรวจสอบกิจกรรม) คือองค์ประกอบของ AAA ที่ทำหน้าที่บันทึกเหตุการณ์ สร้าง Audit Log เพื่อให้สามารถตรวจสอบย้อนหลังได้ว่าใคร ทำอะไร ที่ไหน เมื่อใด"
    },
    incorrect: [
      {
        letter: "A",
        text_en: "Authentication verifies the truth of a claimed identity, not post-access activity logging.",
        text_th: "Authentication มีหน้าที่ตรวจสอบความถูกต้องของตัวตนตอนล็อกอิน ไม่ได้บันทึกกิจกรรมย้อนหลัง"
      },
      {
        letter: "C",
        text_en: "Authorization defines what actions an authenticated user is permitted to perform.",
        text_th: "Authorization เป็นการกำหนดสิทธิ์การเข้าถึง ไม่ใช่การบันทึกประวัติย้อนหลัง"
      },
      {
        letter: "D",
        text_en: "Identification provides an identity claim before authentication begins.",
        text_th: "Identification เป็นขั้นตอนการแสดงตนเบื้องต้นเท่านั้น"
      }
    ]
  },
  589: {
    correct: {
      en: "Non-repudiation provides indisputable proof of the origin, authenticity, and integrity of data, preventing an author or sender from falsely denying having performed an action or sent a communication. Asymmetric digital signatures combined with secure timestamps achieve non-repudiation.",
      th: "Non-repudiation (การไม่สามารถปฏิเสธความรับผิดได้) คือคุณสมบัติความปลอดภัยที่ให้หลักฐานที่ไม่อาจโต้แย้งได้ว่าใครเป็นผู้กระทำหรือส่งข้อมูล ทำให้ผู้กระทำไม่สามารถปฏิเสธความรับผิดชอบได้ การใช้ Digital Signature ร่วมกับ Timestamp เป็นตัวอย่างที่ชัดเจนที่สุด"
    },
    incorrect: [
      {
        letter: "A",
        text_en: "Symmetric encryption provides confidentiality, but because both parties share the exact same key, either party could have generated the ciphertext, failing to provide non-repudiation.",
        text_th: "Symmetric encryption ใช้กุญแจลับร่วมกัน ทำให้ไม่สามารถพิสูจน์ได้ว่าฝ่ายใดเป็นผู้ส่งอย่างแท้จริง จึงไม่รองรับ Non-repudiation"
      },
      {
        letter: "B",
        text_en: "High-availability clustering guarantees operational uptime, not message provenance or individual accountability.",
        text_th: "High-availability clustering เน้นความพร้อมใช้งาน (Availability) ไม่เกี่ยวข้องกับการพิสูจน์ตัวตนผู้ส่ง"
      },
      {
        letter: "D",
        text_en: "Shared departmental accounts prevent establishing individual accountability, destroying non-repudiation.",
        text_th: "Shared departmental accounts ทำลายหลักการ Non-repudiation โดยตรงเพราะไม่สามารถระบุตัวบุคคลผู้กระทำได้"
      }
    ]
  },
  590: {
    correct: {
      en: "In cybersecurity risk taxonomy, a Threat is any potential circumstance, event, or entity with the capability to exploit a vulnerability and cause harm or loss to an asset. The adversarial phishing group is the threat actor initiating the threat event.",
      th: "Threat (ภัยคุกคาม) คือเหตุการณ์ สภาวการณ์ หรือบุคคล/กลุ่มบุคคลที่มีศักยภาพในการแสวงหาประโยชน์จากช่องโหว่เพื่อสร้างความเสียหายต่อทรัพย์สิน ในกรณีนี้กลุ่มแฮกเกอร์และแคมเปญ Phishing ถือเป็นภัยคุกคามโดยตรง"
    },
    incorrect: [
      {
        letter: "A",
        text_en: "A Vulnerability is an inherent weakness, flaw, or gap in security procedures or systems (such as lack of employee training).",
        text_th: "Vulnerability คือจุดอ่อนหรือช่องโหว่ เช่น การที่พนักงานยังไม่ได้รับการอบรม"
      },
      {
        letter: "C",
        text_en: "An Impact is the measured magnitude of harm or loss resulting from an exploited vulnerability.",
        text_th: "Impact คือขนาดของความเสียหายที่เกิดขึ้นหากถูกโจมตีสำเร็จ"
      },
      {
        letter: "D",
        text_en: "Residual risk is the remaining risk after controls are implemented.",
        text_th: "Residual risk คือความเสี่ยงที่เหลืออยู่หลังติดตั้งมาตรการควบคุมแล้ว"
      }
    ]
  },
  591: {
    correct: {
      en: "Risk fundamentally represents the likelihood and impact of a Threat exploiting a Vulnerability to cause harm to an Asset (Risk = Threat × Vulnerability × Asset value/Impact). Without an asset to protect, a vulnerability in that asset, and a threat capable of exploiting it, risk does not exist.",
      th: "Risk (ความเสี่ยง) เกิดจากจุดตัดของ 3 องค์ประกอบหลัก ได้แก่: ภัยคุกคาม (Threat) เข้ามาแสวงหาประโยชน์จาก ช่องโหว่ (Vulnerability) ที่มีอยู่ เพื่อสร้างความเสียหายต่อ ทรัพย์สิน (Asset) ขององค์กร หากขาดองค์ประกอบใดองค์ประกอบหนึ่ง ความเสี่ยงทางความปลอดภัยจะไม่เกิดขึ้น"
    },
    incorrect: [
      {
        letter: "A",
        text_en: "Excluding threats overlooks the active source of harm.",
        text_th: "การมองข้าม Threat ทำให้ขาดปัจจัยที่จะเข้ามาโจมตี"
      },
      {
        letter: "B",
        text_en: "Excluding assets means there is nothing of value at risk.",
        text_th: "การไม่มี Asset หมายถึงไม่มีสิ่งมีค่าใดๆ ที่ต้องปกป้อง"
      },
      {
        letter: "D",
        text_en: "Treating controls as primary components confuses safeguards with the inherent risk equation.",
        text_th: "Controls เป็นมาตรการควบคุมเพื่อลดความเสี่ยง ไม่ใช่องค์ประกอบพื้นฐานที่ก่อให้เกิดความเสี่ยง"
      }
    ]
  },
  592: {
    correct: {
      en: "Qualitative Risk Analysis uses descriptive, categorical scales (such as High, Medium, Low) and expert judgment, interviews, and workshops to evaluate and prioritize risks based on relative likelihood and subjective impact. It is ideal when numerical loss history or precise financial data is unavailable.",
      th: "Qualitative Risk Analysis (การวิเคราะห์ความเสี่ยงเชิงคุณภาพ) เป็นการประเมินความเสี่ยงโดยใช้ดุลยพินิจของผู้เชี่ยวชาญ การระดมสมอง และการจัดลำดับด้วยคำอธิบายเชิงคุณภาพ เช่น สูง/กลาง/ต่ำ โดยไม่ต้องใช้ตัวเลขทางการเงินที่แน่ชัด เหมาะกับองค์กรที่ไม่มีข้อมูลสถิติตัวเลขในอดีต"
    },
    incorrect: [
      {
        letter: "A",
        text_en: "Quantitative risk analysis requires precise monetary valuations and numerical calculations (such as SLE, ARO, and ALE).",
        text_th: "Quantitative risk analysis ต้องคำนวณเป็นตัวเลขทางการเงินและความถี่ทางสถิติที่แน่นอน"
      },
      {
        letter: "C",
        text_en: "Residual risk is the risk remaining after safeguards, not an analysis methodology.",
        text_th: "Residual risk คือความเสี่ยงที่ยังคงเหลืออยู่หลังใช้มาตรการควบคุม ไม่ใช่ชื่อวิธีประเมิน"
      },
      {
        letter: "D",
        text_en: "Total cost of ownership assesses acquisition and operating costs, not risk probability or impact.",
        text_th: "Total cost of ownership เป็นการคำนวณค่าใช้จ่ายในการจัดซื้อและดูแลรักษาระบบ ไม่ใช่การประเมินความเสี่ยง"
      }
    ]
  },
  593: {
    correct: {
      en: "Risk management is a continuous lifecycle. Under the Monitor and Review phase, organizations must regularly evaluate existing risks and reassess previously accepted risks whenever significant operational, technological, or environmental changes occur. Connecting a previously isolated system to the public internet alters its threat environment and attack surface, rendering prior risk acceptance assumptions invalid.",
      th: "การบริหารความเสี่ยงเป็นกระบวนการต่อเนื่อง (Continuous process) ในขั้นตอน Monitor and Review ความเสี่ยงที่เคยยอมรับไว้ (Accepted risk) จะต้องถูกนำมาทบทวนและประเมินใหม่เสมอเมื่อมีสภาพแวดล้อม เทคโนโลยี หรือสถาปัตยกรรมระบบที่เปลี่ยนแปลงไป การนำระบบที่ไม่ลงแพตช์ไปต่ออินเทอร์เน็ตทำให้ระดับความเสี่ยงเพิ่มขึ้นอย่างมีนัยสำคัญ"
    },
    incorrect: [
      {
        letter: "A",
        text_en: "Risk acceptance is not an indefinite exemption; significant architectural changes require immediate re-evaluation.",
        text_th: "การยอมรับความเสี่ยงไม่ใช่การละเลยจนกว่าจะครบรอบปี หากมีการเปลี่ยนแปลงสำคัญต้องทบทวนทันที"
      },
      {
        letter: "C",
        text_en: "Purchasing insurance without understanding new technical exposure is negligent and ineffective.",
        text_th: "การทำประกันภัยไม่สามารถทำได้โดยไม่ประเมินความเสี่ยง และไม่ช่วยลดความเสี่ยงทางเทคนิค"
      },
      {
        letter: "D",
        text_en: "Arbitrarily halting business operations contradicts the business-enabling purpose of risk management.",
        text_th: "การบริหารความเสี่ยงมีเป้าหมายเพื่อสนับสนุนธุรกิจ การเปลี่ยนแปลงระบบสามารถทำได้หากประเมินและควบคุมความเสี่ยงอย่างเหมาะสม"
      }
    ]
  },
  594: {
    correct: {
      en: "Risk Transfer involves shifting or sharing financial loss exposure with a third party, most commonly through insurance policies, indemnification clauses, or outsourcing contracts. Purchasing an insurance policy to cover monetary losses from physical disaster is the primary example of risk transfer.",
      th: "Risk Transfer (การโอนความเสี่ยง) คือการย้ายหรือแบ่งปันภาระความสูญเสียทางการเงินไปให้บุคคลที่สาม โดยวิธีการที่พบบ่อยที่สุดคือการทำประกันภัย (Insurance) หรือการทำสัญญาจ้างภายนอก"
    },
    incorrect: [
      {
        letter: "A",
        text_en: "Risk Mitigation implements safeguards (such as fire suppression) to reduce likelihood or impact.",
        text_th: "Risk Mitigation คือการใช้มาตรการควบคุมเพื่อลดโอกาสหรือผลกระทบ เช่น ติดตั้งระบบดับเพลิงอัตโนมัติ"
      },
      {
        letter: "C",
        text_en: "Risk Avoidance eliminates exposure by discontinuing the activity (e.g., closing the datacenter).",
        text_th: "Risk Avoidance คือการยกเลิกกิจกรรมนั้นไปเลย เช่น เลิกตั้งเซิร์ฟเวอร์ในคลังสินค้า"
      },
      {
        letter: "D",
        text_en: "Risk Acceptance absorbs potential losses without additional safeguards or insurance.",
        text_th: "Risk Acceptance คือการรับรู้ความเสี่ยงและพร้อมรับผลกระทบด้วยตนเองโดยไม่ทำประกันหรือเพิ่มมาตรการใดๆ"
      }
    ]
  },
  595: {
    correct: {
      en: "Risk Avoidance is the strategy of eliminating risk exposure entirely by choosing not to engage in, or by completely discontinuing, the specific activity, service, or technology that creates the risk. Choosing not to adopt or purchase the high-risk AI platform completely avoids the associated risks.",
      th: "Risk Avoidance (การหลีกเลี่ยงความเสี่ยง) คือการตัดสินใจไม่ทำกิจกรรม ยกเลิก หรือไม่นำเทคโนโลยีที่มีความเสี่ยงสูงนั้นเข้ามาใช้เลย เพื่อตัดโอกาสการเกิดความเสี่ยงนั้นให้หมดสิ้นไป"
    },
    incorrect: [
      {
        letter: "B",
        text_en: "Risk mitigation would involve deploying controls (such as data sanitization filters) to use the technology safely.",
        text_th: "Risk Mitigation คือการเดินหน้านำ AI มาใช้แต่ติดตั้งมาตรการป้องกันเพิ่มเติมเพื่อลดความเสี่ยง"
      },
      {
        letter: "C",
        text_en: "Risk transfer would involve shifting financial exposure via insurance or contracts.",
        text_th: "Risk Transfer คือการผลักภาระความสูญเสียทางการเงินไปให้ผู้อื่น เช่น ทำประกันภัย"
      },
      {
        letter: "D",
        text_en: "Risk acceptance would proceed with adoption while tolerating the risks.",
        text_th: "Risk Acceptance คือการยอมรับความเสี่ยงและเดินหน้าติดตั้งใช้งานโดยไม่สนผลกระทบ"
      }
    ]
  },
  596: {
    correct: {
      en: "Effective risk communication matches the information needs and decision authority of the intended audience. Executive leadership and the Board of Directors require high-level, strategic risk reports that contextualize identified threats in terms of business impact, financial risk, operational objectives, and resource prioritization.",
      th: "การสื่อสารความเสี่ยงที่มีประสิทธิภาพจะต้องปรับให้เข้ากับกลุ่มเป้าหมาย สำหรับผู้บริหารระดับสูงและคณะกรรมการบริษัท ต้องนำเสนอเป็นรายงานเชิงกลยุทธ์ระดับสูง (High-level strategic report) ที่เชื่อมโยงความเสี่ยงด้านไซเบอร์เข้ากับผลกระทบทางธุรกิจ การเงิน และการจัดสรรทรัพยากร"
    },
    incorrect: [
      {
        letter: "A",
        text_en: "Raw technical packet captures, alert logs, and software revision lists overwhelm non-technical executives and obscure critical decision points.",
        text_th: "การส่งข้อมูลล็อกทางเทคนิคอย่างละเอียดจะทำให้ผู้บริหารสับสนและไม่เห็นภาพรวมเชิงธุรกิจ"
      },
      {
        letter: "C",
        text_en: "Promising 'zero risk' is unrealistic and fundamentally misrepresents the nature of risk management.",
        text_th: "การรับประกันว่าจะไม่มีความเสี่ยงหลงเหลืออยู่เลย (Zero risk) เป็นสิ่งที่เป็นไปไม่ได้ในทางปฏิบัติ"
      },
      {
        letter: "D",
        text_en: "Technical configuration parameters provide operational detail rather than strategic decision support.",
        text_th: "พารามิเตอร์การตั้งค่าทางเทคนิคเป็นเรื่องระดับปฏิบัติการ ไม่ใช่ระดับการตัดสินใจของบอร์ด"
      }
    ]
  },
  597: {
    correct: {
      en: "Governance is the strategic framework of rules, relationships, and oversight that directs and controls how an organization manages risk, ensures accountability, complies with legal requirements, and aligns information security with overall business goals.",
      th: "Governance (การกำกับดูแล) คือกรอบการทำงานเชิงกลยุทธ์ กฎเกณฑ์ และการกำกับดูแลจากฝ่ายบริหาร เพื่อให้มั่นใจว่าการบริหารจัดการความมั่นคงปลอดภัยสอดคล้องกับเป้าหมายทางธุรกิจ มีความรับผิดชอบ และปฏิบัติตามกฎหมาย"
    },
    incorrect: [
      {
        letter: "B",
        text_en: "Operational activities—such as configuring firewalls, managing user accounts, or updating antivirus definitions—are tactical and operational security administration, not governance.",
        text_th: "การคอนฟิกไฟร์วอลล์และจัดการบัญชีผู้ใช้เป็นงานระดับปฏิบัติการ (Security Administration) ไม่ใช่ Governance"
      },
      {
        letter: "C",
        text_en: "Software development and deployment constitute engineering activities rather than governance.",
        text_th: "การพัฒนาซอฟต์แวร์เป็นงานด้านวิศวกรรม ไม่ใช่การกำกับดูแลเชิงนโยบาย"
      },
      {
        letter: "D",
        text_en: "Governance cannot guarantee the complete absence of incidents, as zero risk does not exist.",
        text_th: "Governance ไม่สามารถรับประกันว่าจะไม่มีเหตุการณ์บุกรุกเกิดขึ้นได้ 100%"
      }
    ]
  },
  598: {
    correct: {
      en: "A security policy is a high-level, mandatory management document that establishes organizational security posture, expectations, and goals ('WHAT' must be done). It is authored by leadership to define rules and direction without specifying technical mechanisms.",
      th: "Security Policy (นโยบายความมั่นคงปลอดภัย) เป็นเอกสารระดับบริหารที่มีผลบังคับใช้ (Mandatory) ซึ่งระบุเป้าหมาย ทิศทาง และข้อกำหนดว่า 'ต้องทำอะไร' (WHAT) เพื่อกำหนดกรอบความปลอดภัยโดยไม่ลงลึกถึงวิธีปฏิบัติทางเทคนิค"
    },
    incorrect: [
      {
        letter: "B",
        text_en: "A standard establishes mandatory technical baselines and specific criteria.",
        text_th: "Standard (มาตรฐาน) กำหนดเกณฑ์ทางเทคนิคที่ต้องปฏิบัติอย่างสม่ำเสมอ"
      },
      {
        letter: "C",
        text_en: "A procedure provides step-by-step instructions ('HOW' to accomplish a task).",
        text_th: "Procedure (ระเบียบปฏิบัติ) ให้คำแนะนำทีละขั้นตอนว่าต้องทำอย่างไร (HOW)"
      },
      {
        letter: "D",
        text_en: "A guideline provides recommended best practices that are generally advisory and flexible.",
        text_th: "Guideline (แนวทางปฏิบัติ) เป็นข้อแนะนำที่ไม่บังคับ เพื่อให้เกิดความยืดหยุ่น"
      }
    ],
    exam_tip: {
      en: "Policies define 'WHAT' must be done; Procedures define 'HOW' to do it; Standards specify mandatory technical baselines; Guidelines offer advisory best practices.",
      th: "Policy บอกว่า 'ต้องทำอะไร' (WHAT), Procedure บอกว่า 'ทำอย่างไร' (HOW), Standard คือเกณฑ์มาตรฐานบังคับ, และ Guideline คือคำแนะนำที่ไม่บังคับ"
    }
  },
  599: {
    correct: {
      en: "A standard is a mandatory governance document that specifies uniform technical requirements, configurations, hardware/software baselines, and rules used to achieve policy compliance. The specific 10-minute screen lock and AES-256 encryption criteria are explicit technical specifications, making this a standard.",
      th: "Standard (มาตรฐาน) คือเอกสารข้อกำหนดที่มีผลบังคับใช้เพื่อระบุเกณฑ์ทางเทคนิคขั้นต่ำ (Baseline) ที่แน่นอน เช่น การกำหนดเวลาล็อกหน้าจอ 10 นาที หรือระดับการเข้ารหัส AES-256 เพื่อให้สอดคล้องกับนโยบาย"
    },
    incorrect: [
      {
        letter: "B",
        text_en: "Policies outline high-level management intent without numerical technical parameters.",
        text_th: "Policy กำหนดเพียงหลักการระดับสูงว่าต้องป้องกันข้อมูล แต่ไม่ระบุค่าตัวเลขทางเทคนิค"
      },
      {
        letter: "C",
        text_en: "Procedures provide chronological step-by-step instructions for performing tasks.",
        text_th: "Procedure ระบุขั้นตอนการคลิกหรือคำสั่งทีละขั้น ไม่ใช่เกณฑ์ข้อกำหนด"
      },
      {
        letter: "D",
        text_en: "Guidelines offer non-mandatory recommendations and advice.",
        text_th: "Guideline เป็นข้อเสนอแนะ ไม่ใช่ข้อบังคับตายตัว"
      }
    ]
  },
  600: {
    correct: {
      en: "A cybersecurity framework (such as NIST CSF or ISO/IEC 27001) provides a comprehensive, structured methodology for building, organizing, measuring, and maturing an enterprise security program. It organizes controls across domains and assists organizations in assessing their current security posture against targeted baselines.",
      th: "Cybersecurity Framework (กรอบการทำงานความมั่นคงปลอดภัยไซเบอร์ เช่น NIST CSF, ISO/IEC 27001) เป็นชุดแนวทางและโครงสร้างที่ครอบคลุม เพื่อช่วยให้องค์กรวางแผน ออกแบบ ปฏิบัติ และวัดผลระดับวุฒิภาวะของระบบความปลอดภัยได้อย่างเป็นระบบ"
    },
    incorrect: [
      {
        letter: "B",
        text_en: "Standard operating procedures outline operational keystrokes for specific tasks, not enterprise program architecture.",
        text_th: "Standard operating procedures เป็นเพียงขั้นตอนการทำงานย่อยสำหรับงานเฉพาะอย่าง"
      },
      {
        letter: "C",
        text_en: "Acceptable use policies govern end-user computer usage rules, not overall program structure.",
        text_th: "Acceptable use policy เป็นนโยบายการใช้งานอุปกรณ์ของผู้ใช้ ไม่ใช่กรอบโครงสร้างองค์กร"
      },
      {
        letter: "D",
        text_en: "Baseline guidelines provide non-mandatory technical advice rather than program architecture.",
        text_th: "Baseline guidelines เป็นเพียงคำแนะนำเบื้องต้น ไม่ครอบคลุมการบริหารจัดการระดับองค์กร"
      }
    ]
  },
  601: {
    correct: {
      en: "Cybersecurity controls are categorized by their implementation domain: Technical controls use hardware or software mechanisms (e.g., firewalls, access control lists, encryption). Managerial (or Administrative) controls focus on policies, procedures, background checks, risk assessments, and personnel training directed by management. Physical controls use real-world tangible barriers and facility defenses (e.g., fences, turnstiles, locks, lighting). Thus, firewalls are Technical, employee training and background checks are Managerial/Administrative, and fences/turnstiles are Physical.",
      th: "หมวดหมู่ของการควบคุมความมั่นคงปลอดภัยแบ่งตามลักษณะการนำไปใช้งาน ได้แก่: Technical (เทคนิค: กลไกฮาร์ดแวร์/ซอฟต์แวร์ เช่น ไฟร์วอลล์), Managerial/Administrative (การจัดการ: นโยบาย ตรวจประวัติ และการอบรม), และ Physical (กายภาพ: สิ่งกีดขวาง รั้ว ประตูล็อก)"
    },
    incorrect: [
      {
        letter: "B",
        text_en: "Option B misclassifies personnel training as technical instead of managerial/administrative.",
        text_th: "ตัวเลือก B จัดหมวดหมู่การอบรมพนักงานเป็น Technical ซึ่งไม่ถูกต้อง"
      },
      {
        letter: "C",
        text_en: "Option C misclassifies firewalls as managerial instead of technical.",
        text_th: "ตัวเลือก C จัดหมวดหมู่ไฟร์วอลล์เป็น Managerial ซึ่งไม่ถูกต้อง"
      },
      {
        letter: "D",
        text_en: "Option D misclassifies firewalls as physical and fences as technical.",
        text_th: "ตัวเลือก D สลับหมวดหมู่ไฟร์วอลล์และรั้วกั้นอาคาร"
      }
    ]
  },
  602: {
    correct: {
      en: "A Deterrent control aims to discourage would-be attackers or trespassers from attempting unauthorized actions by making them aware of the risks, consequences, and likelihood of detection. Warning signs and visible notices function primarily as deterrents.",
      th: "Deterrent Control (การควบคุมเชิงป้องปราม) มีเป้าหมายเพื่อยับยั้ง ข่มขวัญ หรือทำให้ผู้ไม่หวังดีเปลี่ยนใจล้มเลิกการกระทำความผิด โดยการแจ้งเตือนให้ทราบถึงความเสี่ยงและบทลงโทษ เช่น ป้ายเตือนทรัพย์สินส่วนบุคคล"
    },
    incorrect: [
      {
        letter: "B",
        text_en: "A preventive control physically or technically stops an action before it can occur (such as a locked security gate).",
        text_th: "Preventive control ทำหน้าที่สกัดกั้นหรือหยุดยั้งการกระทำผิดทางกายภาพ เช่น ประตูล็อก"
      },
      {
        letter: "C",
        text_en: "A detective control identifies and records an incident when it happens (such as the video camera recording footage).",
        text_th: "Detective control ทำหน้าที่ตรวจจับและบันทึกเหตุการณ์ เช่น กล้องวงจรปิด"
      },
      {
        letter: "D",
        text_en: "A corrective control restores or repairs damage after an event occurs.",
        text_th: "Corrective control ทำหน้าที่แก้ไขและฟื้นฟูหลังเกิดเหตุการณ์"
      }
    ]
  },
  603: {
    correct: {
      en: "A Corrective control functions to remedy damage, fix vulnerabilities, restore impacted assets, and return systems to a normal operational state following a security incident. Restoring data from backups, applying corrective patches, and rebuilding compromised operating systems are primary examples of corrective controls.",
      th: "Corrective Control (การควบคุมเชิงแก้ไข) ทำหน้าที่ซ่อมแซม เยียวยาความเสียหาย ฟื้นฟูระบบ และนำระบบกลับสู่สภาวะการทำงานปกติหลังเกิดเหตุการณ์ความมั่นคงปลอดภัย เช่น การกู้คืนข้อมูลจากแบ็กอัป การลงแพตช์แก้ไขช่องโหว่ หรือการติดตั้งระบบใหม่"
    },
    incorrect: [
      {
        letter: "B",
        text_en: "Preventive controls stop incidents before they occur, rather than restoring systems after an event.",
        text_th: "Preventive control ทำหน้าที่ป้องกันไม่ให้เกิดเหตุ ไม่ใช่การกู้คืนหลังเกิดเหตุ"
      },
      {
        letter: "C",
        text_en: "Detective controls identify and alert on active or past incidents without remediating the damage.",
        text_th: "Detective control ทำหน้าที่ตรวจจับและแจ้งเตือน แต่ไม่ได้ซ่อมแซมหรือกู้คืนระบบ"
      },
      {
        letter: "D",
        text_en: "Directive controls specify mandatory behavioral rules and policies.",
        text_th: "Directive control เป็นการสั่งการและออกกฎระเบียบบังคับใช้"
      }
    ]
  },
  604: {
    correct: {
      en: "A Directive control specifies, guides, or mandates specific employee behaviors and actions to ensure compliance with organizational security policies and standards. Signs instructing employees on required procedures (such as no tailgating and escorting visitors) are classic examples of directive controls.",
      th: "Directive Control (การควบคุมเชิงสั่งการ) คือการกำหนดแนวทาง ชี้แนะ หรือออกคำสั่งบังคับพฤติกรรมของบุคลากรให้ปฏิบัติตามนโยบายความมั่นคงปลอดภัย เช่น ป้ายประกาศกฎระเบียบ ข้อปฏิบัติ หรือข้อบังคับของบริษัท"
    },
    incorrect: [
      {
        letter: "B",
        text_en: "Compensating controls serve as alternative mechanisms when primary safeguards cannot be deployed.",
        text_th: "Compensating control คือมาตรการทดแทนเมื่อไม่สามารถติดตั้งมาตรการหลักได้"
      },
      {
        letter: "C",
        text_en: "Detective controls discover and log violations rather than commanding behavior.",
        text_th: "Detective control คือการตรวจสอบ เช่น มีกล้องวงจรปิดคอยดูว่ามีใครแอบเดินตามหรือไม่"
      },
      {
        letter: "D",
        text_en: "Corrective controls remediate consequences and repair damage after an event.",
        text_th: "Corrective control คือการแก้ไขหลังเกิดเหตุ เช่น การลงโทษทางวินัยหรือการยกเลิกบัตร"
      }
    ]
  },
  605: {
    correct: {
      en: "Defense in Depth (or layered security) is the defensive practice of deploying multiple complementary, overlapping security controls across technical, administrative, and physical domains. The core rationale is that no single security control is infallible; if an attacker penetrates or bypasses perimeter firewalls, subsequent layers—such as host-based protection, multi-factor authentication, and database encryption—still protect the underlying asset.",
      th: "Defense in Depth (การป้องกันแบบเชิงลึก) คือการวางมาตรการควบคุมหลายระดับที่สอดประสานกัน เพื่อให้แน่ใจว่าหากด่านป้องกันชั้นใดชั้นหนึ่งล้มเหลวหรือถูกเจาะ ด่านชั้นต่อๆ ไป (เช่น การจำกัดสิทธิ์ การเข้ารหัสข้อมูล การยืนยันตัวตน) จะยังคงทำหน้าที่ปกป้องข้อมูลสำคัญอยู่"
    },
    incorrect: [
      {
        letter: "B",
        text_en: "Defense in depth does not eliminate the need for patching or vulnerability management; regular maintenance remains essential.",
        text_th: "Defense in Depth ไม่ได้ทำให้ยกเลิกการลงแพตช์ได้ การอัปเดตระบบยังคงจำเป็นอย่างยิ่ง"
      },
      {
        letter: "C",
        text_en: "Controls across layers perform diverse and complementary functions, not identical operations.",
        text_th: "การควบคุมแต่ละชั้นมีหน้าที่หลากหลายและเสริมกัน ไม่ได้ทำงานเหมือนกันทุกประการ"
      },
      {
        letter: "D",
        text_en: "Technical controls must always align with and be driven by organizational security policies.",
        text_th: "มาตรการทางเทคนิคทั้งหมดต้องขับเคลื่อนและสอดคล้องกับนโยบายของผู้บริหารเสมอ"
      }
    ]
  },
  606: {
    correct: {
      en: "Due Care is the practice of taking reasonable, prudent, and responsible operational actions under the circumstances to protect assets, enforce security controls, and mitigate known risks ('doing the right things' to protect the organization). Routine activities like applying security patches, maintaining antivirus definitions, and changing default passwords are core examples of practicing Due Care.",
      th: "Due Care (การปฏิบัติหน้าที่ด้วยความใส่ใจตามสมควร) คือการลงมือกระทำอย่างถูกต้อง รอบคอบ และมีความรับผิดชอบในการปกป้องดูแลระบบและทรัพย์สิน เช่น การลงแพตช์อย่างสม่ำเสมอ การเปลี่ยนรหัสผ่านเริ่มต้น และการเปิดใช้งานแอนติไวรัส (เน้นการ 'ลงมือทำ' เพื่อปกป้อง)"
    },
    incorrect: [
      {
        letter: "B",
        text_en: "Due Diligence, by contrast, is the analytical and investigative process of researching, assessing, and evaluating risk and control adequacy ('knowing what needs to be done').",
        text_th: "Due Diligence คือการตรวจสอบ วิเคราะห์ และประเมินสถานการณ์ล่วงหน้าอย่างละเอียดรอบคอบ (เน้นการ 'ตรวจสอบ/ประเมิน' ก่อนและระหว่างดำเนินการ)"
      },
      {
        letter: "C",
        text_en: "Risk avoidance eliminates activities altogether to avoid risk exposure.",
        text_th: "Risk Avoidance คือการยกเลิกไม่ทำกิจกรรมเพื่อไม่ให้มีความเสี่ยง"
      },
      {
        letter: "D",
        text_en: "Separation of duties divides sensitive tasks among multiple people to prevent fraud.",
        text_th: "Separation of Duties คือการแยกหน้าที่สำคัญออกจากกันเพื่อป้องกันการทุจริต"
      }
    ],
    exam_tip: {
      en: "Due Care = Prudent Action / Implementation ('Doing the right thing'); Due Diligence = Thorough Investigation / Verification ('Knowing the right thing').",
      th: "Due Care = การลงมือปฏิบัติอย่างรอบคอบ (Doing the right thing); Due Diligence = การตรวจสอบหาข้อเท็จจริงอย่างละเอียด (Knowing the right thing)"
    }
  },
  607: {
    correct: {
      en: "Due Diligence is the practice of thoroughly investigating, assessing, evaluating, and validating risks and security postures before and during a business commitment or operational activity ('knowing the facts and assessing the risks'). Reviewing third-party audit reports, inspecting security controls, and validating vendor compliance certifications prior to signing a contract represents Due Diligence.",
      th: "Due Diligence (ความรอบคอบในการตรวจสอบ) คือการศึกษา ค้นคว้า ตรวจสอบ และประเมินความเสี่ยงและมาตรการความปลอดภัยอย่างละเอียดรอบคอบ 'ก่อนและระหว่าง' การทำธุรกรรมหรือการว่าจ้างผู้ให้บริการภายนอก เพื่อให้มีข้อมูลครบถ้วนก่อนตัดสินใจ"
    },
    incorrect: [
      {
        letter: "B",
        text_en: "Due Care is the subsequent or routine practice of taking prudent, protective operational steps.",
        text_th: "Due Care คือการลงมือปฏิบัติด้านการป้องกันดูแลระบบอย่างสม่ำเสมอตามสมควร (Duty of care)"
      },
      {
        letter: "C",
        text_en: "Strict liability is a legal standard assigning liability regardless of fault or intent, not a security evaluation practice.",
        text_th: "Strict Liability เป็นหลักการทางกฎหมายว่าด้วยความรับผิดโดยไม่ต้องพิสูจน์เจตนา ไม่ใช่หลักการประเมินความปลอดภัย"
      },
      {
        letter: "D",
        text_en: "Risk acceptance acknowledges and absorbs risk without requiring remediation or vendor investigation.",
        text_th: "Risk Acceptance คือการตัดสินใจยอมรับความเสี่ยง ไม่ใช่กระบวนการตรวจสอบข้อมูลของผู้ขาย"
      }
    ],
    example: {
      en: "Reviewing a cloud vendor's SOC 2 Type II report and ISO 27001 certificate before signing an enterprise subscription is Due Diligence.",
      th: "การขอตรวจสอบรายงาน SOC 2 Type II และใบรับรอง ISO 27001 ของผู้ให้บริการคลาวด์ก่อนลงนามในสัญญาคือตัวอย่างของ Due Diligence"
    }
  }
};

// Verify each question
const updatedQuestions = currentQuestions.map(q => {
  const detail = structuredData[q.id];
  if (!detail) {
    console.warn(`No structured data for Q${q.id}`);
    return q;
  }
  return {
    ...q,
    explanation_detail: detail
  };
});

console.log(`Successfully mapped explanation_detail for all ${updatedQuestions.length} questions.`);

// Write back to domain-1.js preserving header comments
const header = `/**
 * ISC2 Certified in Cybersecurity (CC) - 2026 Outline
 * Domain 1: Security Principles
 * Question Count: ${updatedQuestions.length}
 * Version: next-bank (ISC2 CC 2026 Exam Outline)
 */

`;

const exportStatement = `\nexport default questions;\n`;
const fullJs = header + `const questions = ` + JSON.stringify(updatedQuestions, null, 2) + `;` + exportStatement;

fs.writeFileSync(domain1Path, fullJs, 'utf8');
console.log('Successfully wrote updated domain-1.js with explanation_detail.');
