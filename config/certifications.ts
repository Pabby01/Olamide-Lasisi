export interface CertificationInterface {
  id: string;
  title: string;
  issuer: string;
  date: Date;
  description?: string;
  certificateLink: string;
  certificateImage: string;
}

export const Certifications: CertificationInterface[] = [
  {
    id: "world-bank-summit",
    title: "Certificate of Participation - Youth Summit",
    issuer: "World Bank Group",
    date: new Date("2024-05-01"),
    description: "Youth Leading the Digital Transformation",
    certificateLink: "https://linkedin.com/certificates/world-bank-youth-summit", // Update with actual link
    certificateImage: "/experience/law/world-bank.png"
  },
  {
    id: "jessup-moot",
    title: "Certificate of Participation and Merit",
    issuer: "Philip C. Jessup International Law Moot Court Competition",
    date: new Date("2024-04-01"),
    certificateLink: "https://drive.google.com/file/jessup-certificate", // Update with actual link
    certificateImage: "/experience/law/jesup.jpg"
  },
  {
    id: "research-design",
    title: "Research Study Design Certification",
    issuer: "Collaborative Institutional Training Initiative",
    date: new Date("2024-04-01"),
    certificateLink: "https://drive.google.com/file/research-design", // Update with actual link
    certificateImage: "/experience/law/resec.png"
  },
  {
    id: "health-research-ethics",
    title: "Nigerian National Code for Health Research Ethics",
    issuer: "Collaborative Institutional Training Initiative",
    date: new Date("2023-09-01"),
    certificateLink: "https://drive.google.com/file/health-ethics", // Update with actual link
    certificateImage: "/experience/law/nat.png"
  },
  {
    id: "swift-energy",
    title: "International Swift Energy Case Competition",
    issuer: "Swift Energy",
    date: new Date("2023-09-01"),
    certificateLink: "https://linkedin.com/certificates/swift-energy", // Update with actual link
    certificateImage:"/experience/law/swift.png"
  },
  {
    id: "jobberman-soft-skills",
    title: "Soft-Skills Training Certification",
    issuer: "Jobberman",
    date: new Date("2021-11-01"),
    certificateLink: "https://drive.google.com/file/jobberman", // Update with actual link
    certificateImage: "/experience/law/jobberman.jpg"
  },
  {
    id: "wipo-ip",
    title: "General Course on Intellectual Property",
    issuer: "World Intellectual Property Organization (WIPO)",
    date: new Date("2020-09-01"),
    certificateLink: "https://drive.google.com/file/wipo-ip", // Update with actual link
    certificateImage: "/experience/law/intelect.jpg"
  },
  {
    id: "wipo-patent",
    title: "Introduction to the Patent Cooperation Treaty",
    issuer: "World Intellectual Property Organization (WIPO)",
    date: new Date("2020-10-01"),
    certificateLink: "https://drive.google.com/file/wipo-patent", // Update with actual link
    certificateImage: "/experience/law/patent.jpg"
  },
  {
    id: "google-digital",
    title: "Fundamentals of Digital Marketing",
    issuer: "Google",
    date: new Date("2020-08-01"),
    certificateLink: "https://drive.google.com/file/google-digital", // Update with actual link
    certificateImage: "/experience/law/fund.png"
  },
  {
    id: "freedom-expression",
    title: "Freedom of Expression Certification",
    issuer: "Council of Europe HELP Programme",
    date: new Date("2020-07-01"),
    certificateLink: "https://drive.google.com/file/freedom-expression", // Update with actual link
    certificateImage: "/experience/law/help.png"
  },
  {
    id: "financial-globalisation",
    title: "Financial Globalisation, Capital Flows, and Global Financial Cycle",
    issuer: "Asian Development Bank Institute",
    date: new Date("2020-06-01"),
    certificateLink: "https://drive.google.com/file/financial-global", // Update with actual link
    certificateImage: "/experience/law/flow.png"
  },
  {
    id: "commercial-mediation",
    title: "Commercial Mediation for the 21st Century Lawyer",
    issuer: "Professional Development",
    date: new Date("2020-06-01"),
    certificateLink: "https://drive.google.com/file/mediation", // Update with actual link
    certificateImage: "/experience/law/medi.png"
  }
];

export const featuredCertifications = Certifications.slice(0, 6);