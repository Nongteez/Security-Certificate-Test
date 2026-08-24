/**
 * Master certification registry.
 * Lists all certifications for the Home screen.
 */
const certifications = [
  {
    id: "isc2-cc",
    vendor: "ISC2",
    vendorId: "isc2",
    certId: "cc",
    name: "Certified in Cybersecurity",
    shortName: "CC",
    description: "Foundational cybersecurity certification covering security principles, BC/DR/IR, access controls, network security, and security operations.",
    defaultVersion: "2026",
    logo: "./assets/logos/CC-ISC2.png",
    status: "available",
    enabled: true
  },
  {
    id: "comptia-security-plus",
    vendor: "CompTIA",
    vendorId: "comptia",
    certId: "security-plus",
    name: "Security+",
    shortName: "Security+",
    description: "Industry-standard baseline cybersecurity certification covering threats, attacks, architecture, design, implementation, operations, and governance.",
    defaultVersion: "sy0-701",
    logo: "./assets/logos/SEC+-COMTIA.png",
    status: "coming-soon",
    enabled: false
  },
  {
    id: "cisco-ccna",
    vendor: "Cisco",
    vendorId: "cisco",
    certId: "ccna",
    name: "CCNA",
    shortName: "CCNA",
    description: "Core networking certification covering network fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation.",
    defaultVersion: "200-301",
    logo: "./assets/logos/CCNA-CISCO.png",
    status: "coming-soon",
    enabled: false
  },
  {
    id: "cisco-ccnp-enterprise",
    vendor: "Cisco",
    vendorId: "cisco",
    certId: "ccnp-enterprise",
    name: "CCNP Enterprise",
    shortName: "CCNP",
    description: "Professional enterprise networking certification covering dual-stack architecture, virtualization, infrastructure, network assurance, and security.",
    defaultVersion: "encor-350-401",
    logo: "./assets/logos/CCNP ENTERPRISE-CISCO.png",
    status: "coming-soon",
    enabled: false
  },
  {
    id: "isc2-cissp",
    vendor: "ISC2",
    vendorId: "isc2",
    certId: "cissp",
    name: "Certified Information Systems Security Professional",
    shortName: "CISSP",
    description: "Advanced cybersecurity leadership certification spanning all 8 information security domains.",
    defaultVersion: "2024",
    logo: "./assets/logos/CISSP-ISC2.png",
    status: "coming-soon",
    enabled: false
  },
  {
    id: "comptia-cysa-plus",
    vendor: "CompTIA",
    vendorId: "comptia",
    certId: "cysa-plus",
    name: "Cybersecurity Analyst",
    shortName: "CySA+",
    description: "Cybersecurity analytics and defensive security certification focused on threat detection, vulnerability management, incident response, and security operations.",
    defaultVersion: "cs0-003",
    logo: "./assets/logos/CySA+-COMTIA.png",
    status: "coming-soon",
    enabled: false
  },
  {
    id: "offsec-oscp-plus",
    vendor: "OffSec",
    vendorId: "offsec",
    certId: "oscp-plus",
    name: "OffSec Certified Professional",
    shortName: "OSCP+",
    description: "Hands-on offensive security certification focused on penetration testing, exploitation, privilege escalation, and practical attack methodology.",
    defaultVersion: "oscp-plus",
    logo: "./assets/logos/OSCP+-OFFSEC.png",
    status: "coming-soon",
    enabled: false
  }
];

export default certifications;
