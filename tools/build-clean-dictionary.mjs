import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT_DIR = process.cwd();
const QUESTIONS_DIR = path.join(ROOT_DIR, 'data', 'certs', 'isc2', 'cc', 'versions', '2026', 'questions');

const DOMAIN_FILES = [
  { dom: 1, file: 'domain-1.js' },
  { dom: 2, file: 'domain-2.js' },
  { dom: 3, file: 'domain-3.js' },
  { dom: 4, file: 'domain-4.js' },
  { dom: 5, file: 'domain-5.js' }
];

// Exact bespoke replacements for complex sentences
const EXPLANATION_REPLACEMENTS = {
  192: "Risk transfer is a risk management strategy that contractually shifts a pure risk from one party to another (in this case, to an insurance company). Risk avoidance consists in stopping activities and exposures that can negatively affect an organization and its assets. Risk mitigation consists of mechanisms to reduce the risk. Finally, risk tolerance is the degree of risk that an investor is willing to endure.",
  211: "Policies are high-level documents that frame all ongoing activities of an organization to ensure that it complies with industry standards and regulations. Regulations are usually devised by governments. Standards are created by governing or professional bodies to support regulations. Both regulations and standards are created outside of the organization (see ISC2 Study Guide Chapter 1, Module 4).",
  264: "Confidentiality is the most distinctive property of personally identifiable information (see ISC2 Study Guide, Module 1, under CIA Deep Dive). The remaining options apply to all types of data. All data requires integrity to be usable. Non-repudiation refers to the inability to deny the production, approval, or transmission of information. Authentication refers to the access to information.",
  265: "The direction for applying the ethical principles of ISC2 states that avoiding conflicts of interest or the appearance thereof is a consequence of providing diligent and competent service to principals (see ISC2 Code of Ethics). The other options are consequences of the remaining three ethical principles.",
  277: "The correct answer is B. Confidentiality is the most distinctive property of protected health information (see ISC2 Study Guide, Module 1, under CIA Deep Dive). The remaining options apply to all types of data. All data requires integrity to be usable. Non-repudiation refers to the inability to deny the production, approval, or transmission of information. Authentication refers to guaranteeing that systems and information are accessed by persons and systems that are who they claim to be.",
  281: "The code of ethics requires security professionals to be honest, but not necessarily \"law enforcers\". A violation of a company's security policy should be reported and handled within the company itself (usually involving the human resources, legal, or management departments). Only individuals can be reported to the ISC2 ethics committee (i.e. not companies). National authorities only deal with violations of laws and regulations.",
  287: "The “Trust but verify” model is a method of threat protection wherein privileged accounts are trusted (but always verified) and allowed access to the network and other resources. Over time, the “Trust but verify” model has been found to expose organizations to multiple security threats, and is therefore being progressively abandoned in favor of the Zero Trust model. The remaining options are all good practices of access management.",
  304: "Security in Depth (SID) is not a security principle, but a security model that involves implementing multiple layers of security controls, so as to protect against threats and reduce the risk of a successful attack. In Security in Depth, the idea is to create a multi-layered defense system that includes both technical controls (such as firewalls and intrusion detection systems) and administrative controls (such as policies and procedures).",
  319: "The four canons of ISC2 are (see ISC2 Study Guide, chapter 1, module 5): Advance and protect the profession; Act honorably, honestly, justly, responsibly and legally; Provide diligent and competent service to principals; Protect society, the common good, necessary public trust and confidence and the infrastructure. Although some options seem right, only 'Advance and protect the profession' is correct.",
  338: "ISO 27002 is a supplementary standard aimed at guiding implementation controls in order to maintain security controls for Information Security Management Systems (ISMS), as defined in ISO 27001. Among many other aspects, these security controls comprise application security. Risk management is an activity that is touched on in this standard, but is not its primary focus (it is the focus of the ISO 31000 standard). HIPAA is the United States law that governs the privacy of health information.",
  237: "The components commonly found in an incident response plan are (in this order): Preparation; Detection and Analysis; Containment, Eradication and Recovery; Post-Incident Activity (see the ISC2 Chapter 2, Module 1, under Components of an Incident Response Plan).",
  260: "Incident responses are prioritized in the Detection and Analysis phase (see the ISC2 Study Guide, Chapter 2, Module 1, under Components of Incident Response).",
  323: "A Business Continuity Plan (BCP) is a predetermined set of instructions describing how the mission and business processes of an organization will be sustained during and after a significant disruption (see Chapter 2 ISC2 Study Guide, module 4, under Terms and Definitions). Restoring a business to its last-known reliable state of operations is the goal of a Disaster Recovery Plan (see Chapter 2 ISC2 Study Guide, module 4, under The Goal of Disaster Recovery).",
  325: "While communicating with top management about the circumstances of the cybersecurity event is always important, it is not a primary responsibility of the response team. Indeed, the primary responsibility of the response team is to address the immediate impact of the incident and to restore security as quickly as possible.",
  285: "Role-Based Access Control (RBAC) restricts access to the resources of a computer or network, according to the roles of individual users within your organization. Attribute-Based Access Control (ABAC) is based on complex attribute rules. In Discretionary Access Control (DAC), users may grant privileges to other subjects, as well as change the security attributes of the objects they have access to.",
  342: "Attributes such as a person's name, age, location, job title, and even characteristics such as height or hair color, may all be associated with their identity. None of these describe biometric factors used for authentication. Identity factors are something you know, are or have. Account permissions determine what an authenticated person (a user) can do, and not attributes related to the user's identity.",
  190: "Trojans and Rootkits are often used to install backdoors. A backdoor is a malicious feature that listens for commands on a specific logical port (TCP or UDP) and executes them on the attacked system or device, thereby giving direct control of the system or device to a malicious outside entity (or program). Cross-Site Scripting can execute code with the same permissions as the scripts generated by the target website, compromising the confidentiality and integrity of data.",
  207: "A denial of service attack (DoS) consists in compromising the availability of a system or service through a malicious overload of requests, which causes the activation of safety mechanisms that delay or limit the availability of that system or service. Due to this, systems or services are rendered inaccessible to their intended users. Trojans, phishing, and cross-site scripting attacks try to covertly gain access to the system or data, and therefore do not primarily aim at denying availability.",
  209: "Wireshark is the world's most widely-used and complete network protocol analyzer that, informally speaking, is the \"microscope\" of network traffic. John the Ripper is a famous Open Source password security auditing and password recovery tool. Nslookup is a network administration command-line tool for querying the Domain Name System that obtains the mapping between the domain name, IP address, or other DNS records. Finally, Burp Suite is a set of well-known vulnerability scanning tools.",
  222: "Cross-Site Scripting (XSS) is a type of attack where malicious executable scripts are injected into the code of an otherwise benign website (or web application). Websites are vulnerable to XSS when they display data originating from requests or forms without validating it (and further sanitizing it, so that it is not executable). Trojans and phishing are attacks where software applications and messages try to appear legitimate but have hidden malicious functions.",
  291: "A router is a networking device whose primary objective is to determine the most efficient path for traffic to flow across a network. Routers connect two or more networks and forward data packets between them according to their destination address (see ISC2 Study Guide, chapter 4, module 1). When a router receives a data packet, it checks the destination address and determines the best route on which to forward the packet, based on its routing table.",
  356: "All network devices have a 48-bit Media Access Control (MAC) address, represented as six groups of 8 bits values in hexadecimal (see ISC2 Study Guide, chapter 4, module 1 - Understand Computer Networking). An example of a MAC address would be 00-51-02-1F-58-F6. An IPv4 address is a 32-bit address represented as a sequence of four 8-bit integers, an example of which would be 10.23.19.49.",
  364: "The characteristics of the cloud, also known as the \"five essential characteristics\" of cloud computing, are (see ISC2 Study Guide, chapter 4, module 3): Broad network access: Cloud resources, such as the internet, can be accessed over a network; Rapid elasticity: Cloud resources can be scaled up or down quickly and automatically to meet changing demand; Measured service: Cloud providers track and measure the use of resources, and users are typically charged based on usage.",
  368: "A hybrid cloud deployment model combines public and private cloud storage. For example: an organization might use private cloud storage for sensitive or proprietary data that needs to be kept confidential, while at the same time using public cloud storage for less sensitive data or workloads, which are more suited to a shared infrastructure. This allows the organization to tailor its cloud storage strategy to meet the specific needs of its workloads.",
  205: "Security baselines are used to guarantee that network devices, software, hardware and endpoints are configured consistently. Baselines ensure that all such devices comply with the security baseline set by the organization. Whenever a device is found not compliant with the security baseline, it may be disabled or isolated into a quarantine area until it can be checked and updated (see ISC2 Study Guide, chapter 5, module 2, under Configuration Management Overview)."
};

function cleanString(str) {
  if (!str || typeof str !== 'string') return str;
  return str
    .replace(/\s*github\.com\/ayemunhossain[^\s"']*/gi, '')
    .replace(/\s*github\.com\/ayemunhossai[^\s"']*/gi, '')
    .replace(/\s*github\.com\/ayemunhossa[^\s"']*/gi, '')
    .replace(/\s*github\.com\/[^\s"']*/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

async function testCleanLogic() {
  const allQuestions = [];
  const modifiedQuestions = [];

  for (const info of DOMAIN_FILES) {
    const mod = await import(pathToFileURL(path.join(QUESTIONS_DIR, info.file)).href);
    const questions = mod.default || mod.questions;

    questions.forEach((q) => {
      let isModified = false;
      const newQ = { ...q };

      // Clean question
      if (newQ.question.includes('github.com') || newQ.question.includes('http') || newQ.question.includes('ayemunhossain')) {
        const cleaned = cleanString(newQ.question);
        if (cleaned !== newQ.question) {
          newQ.question = cleaned;
          isModified = true;
        }
      }

      // Clean options
      newQ.options = newQ.options.map((opt) => {
        if (opt.includes('github.com') || opt.includes('http') || opt.includes('ayemunhossain')) {
          const cleaned = cleanString(opt);
          if (cleaned !== opt) {
            isModified = true;
            return cleaned;
          }
        }
        return opt;
      });

      // Clean explanation
      if (EXPLANATION_REPLACEMENTS[newQ.id]) {
        newQ.explanation = EXPLANATION_REPLACEMENTS[newQ.id];
        isModified = true;
      } else if (newQ.explanation.includes('github.com') || newQ.explanation.includes('http') || newQ.explanation.includes('ayemunhossain')) {
        const cleaned = cleanString(newQ.explanation);
        if (cleaned !== newQ.explanation) {
          newQ.explanation = cleaned;
          isModified = true;
        }
      }

      // Clean short_explanation_en if present
      if (newQ.short_explanation_en) {
        if (EXPLANATION_REPLACEMENTS[newQ.id]) {
          newQ.short_explanation_en = EXPLANATION_REPLACEMENTS[newQ.id];
          isModified = true;
        } else if (newQ.short_explanation_en.includes('github.com') || newQ.short_explanation_en.includes('http') || newQ.short_explanation_en.includes('ayemunhossain')) {
          const cleaned = cleanString(newQ.short_explanation_en);
          if (cleaned !== newQ.short_explanation_en) {
            newQ.short_explanation_en = cleaned;
            isModified = true;
          }
        }
      }

      allQuestions.push(newQ);
      if (isModified) modifiedQuestions.push(newQ);
    });
  }

  console.log(`Total questions processed: ${allQuestions.length}`);
  console.log(`Total questions modified: ${modifiedQuestions.length}`);

  // Test if ANY artifact remains in the cleaned questions
  let remainingArtifacts = 0;
  allQuestions.forEach((q) => {
    const str = JSON.stringify(q);
    if (str.includes('github.com') || str.includes('ayemunhossain') || str.includes('ayemunhossai') || str.includes('ayemunhossa')) {
      remainingArtifacts++;
      console.log(`REMAINING ARTIFACT in Q${q.id}: ${str}`);
    }
  });

  console.log(`Remaining artifacts after cleaning: ${remainingArtifacts}`);
}

testCleanLogic().catch(console.error);
