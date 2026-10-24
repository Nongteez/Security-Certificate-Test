/**
 * Exam version configuration for ISC2 CC (2026 Outline - next-bank).
 * Contains Domain 1-3 practice questions. Domains 4-5 are pending.
 * Domain 3 independent human academic and bilingual approval remains pending.
 */
const config = {
  version: "next-bank",
  effectiveDate: "September 1, 2026",
  supportedLanguages: ["en", "th", "both"],
  defaultLanguage: "en",
  passingPercentage: 70,
  secondsPerQuestion: 90,
  defaultQuestionCount: 86,
  totalQuestions: 86,
  domains: [
    {
      id: 1,
      code: "D1",
      name: {
        en: "Security Principles",
        th: "หลักการความปลอดภัย"
      },
      shortName: {
        en: "Security Principles",
        th: "หลักการความปลอดภัย"
      },
      weight: 0.24,
      weightPercentage: 24,
      questionCount: 24,
      questionThCount: 24,
      questionFile: "./questions/domain-1.js",
      available: true
    },
    {
      id: 2,
      code: "D2",
      name: {
        en: "Security Governance",
        th: "การกำกับดูแลด้านความปลอดภัย"
      },
      shortName: {
        en: "Security Governance",
        th: "การกำกับดูแล"
      },
      weight: 0.173,
      weightPercentage: 17.3,
      questionCount: 39,
      questionThCount: 39,
      questionFile: "./questions/domain-2.js",
      available: true
    },
    {
      id: 3,
      code: "D3",
      name: {
        en: "Identity and Access Management (IAM) Concepts",
        th: "แนวคิดการจัดการตัวตนและการเข้าถึง (IAM)"
      },
      shortName: {
        en: "IAM Concepts",
        th: "IAM"
      },
      weight: 0.20,
      weightPercentage: 20,
      questionCount: 23,
      questionThCount: 23,
      questionFile: "./questions/domain-3.js",
      available: true
    },
    {
      id: 4,
      code: "D4",
      name: {
        en: "Networking and Cloud Security Concepts",
        th: "แนวคิดความปลอดภัยของเครือข่ายและคลาวด์"
      },
      shortName: {
        en: "Network & Cloud Security",
        th: "เครือข่ายและคลาวด์"
      },
      weight: 0.213,
      weightPercentage: 21.3,
      questionCount: 0,
      questionThCount: 0,
      questionFile: "./questions/domain-4.js",
      available: false
    },
    {
      id: 5,
      code: "D5",
      name: {
        en: "Security Operations and Incident Response",
        th: "การปฏิบัติการด้านความปลอดภัยและการตอบสนองต่อเหตุการณ์"
      },
      shortName: {
        en: "SecOps & Incident Response",
        th: "SecOps & IR"
      },
      weight: 0.173,
      weightPercentage: 17.3,
      questionCount: 0,
      questionThCount: 0,
      questionFile: "./questions/domain-5.js",
      available: false
    }
  ]
};

export default config;
