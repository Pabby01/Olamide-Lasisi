import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  role?: string;
  achievements?: string[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
  {
    // Update category arrays to match ValidCategory type
    id: "cfa-ethics-challenge",
    companyName: "CFA Society Nigeria Universities Ethics Challenge",
    type: "Professional",
    category: ["Leadership", "Ethics", "Professional"],
    role: "Team Lead and Presenter",
    shortDescription: "Led the University of Ibadan team to the finals, emerging as semi-final winners.",
    startDate: new Date("2024-11-01"),
    endDate: new Date("2024-11-30"),
    companyLogoImg: "/experience/law/cfa.jpg",
    descriptionDetails: {
      paragraphs: [
        "Led the University of Ibadan team in the prestigious CFA Universities Ethics Challenge, demonstrating exceptional leadership and ethical analysis capabilities.",
        "Applied the CFA Institute's Code of Ethics and Standards of Professional Conduct to complex hypothetical scenarios, showcasing deep understanding of professional ethics."
      ],
      bullets: [
        "Led team to semi-finals victory",
        "Developed and delivered compelling presentations on ethical dilemmas",
        "Acted as Team Lead and liaison with school management",
        "Recognized as Second Overall Best Presenter",
        "Strengthened leadership and presentation skills",
        "Gained in-depth knowledge of ethical principles in finance"
      ]
    },
    pagesInfoArr: []
  },
  {
    id: "edinburgh-collaboration",
    companyName: "International Collaboration - University of Ibadan and Edinburgh University",
    type: "Professional",
    category: ["International Law", "Research", "Presentation"],
    role: "Team Lead and Presenter",
    shortDescription: "Led presentation on Surrogacy and its legal framework in Nigeria.",
    startDate: new Date("2024-11-01"),
    endDate: new Date("2024-11-30"),
    companyLogoImg: "/experience/law/surrogacy.jpg",
    descriptionDetails: {
      paragraphs: [
        "Spearheaded an international collaboration focusing on surrogacy law and its framework in Nigeria.",
        "Successfully coordinated between teams from two prestigious universities to deliver comprehensive legal analysis."
      ],
      bullets: [
        "Presented on Surrogacy legal framework in Nigeria",
        "Oversaw team presentation and coordination",
        "Liaised with Edinburgh University team",
        "Managed communication between team and faculty"
      ]
    },
    pagesInfoArr: []
  },
  {
    id: "nba-lagos",
    companyName: "Nigerian Bar Association (Lagos Branch)",
    type: "Professional",
    category: ["Legal Writing", "Documentation", "Professional"],
    role: "Rapporteur",
    shortDescription: "Served as rapporteur for multiple NBA events, documenting key legal discussions and outcomes.",
    startDate: new Date("2024-06-01"),
    endDate: new Date("2025-04-30"),
    companyLogoImg: "/experience/law/rap.jpg",
    descriptionDetails: {
      paragraphs: [
        "Served as the official rapporteur for multiple high-profile NBA events, including the branch's law week and Young Lawyers' Forum Summit.",
        "Demonstrated exceptional documentation and synthesis skills in capturing complex legal discussions."
      ],
      bullets: [
        "Documented plenary sessions and panel discussions",
        "Coordinated with team for timely report publication",
        "Authored event communiqués and final reports",
        "Maintained high standards of accuracy and clarity",
        "Met tight deadlines consistently"
      ]
    },
    pagesInfoArr: []
  },
  {
    id: "law-students-society-cj",
    companyName: "Law Students' Society Judicial Council, University of Ibadan",
    type: "Professional",
    category: ["Leadership", "Legal", "Judicial"],
    role: "Chief Justice",
    shortDescription: "Led the Judicial Council as Chief Justice, spearheading multiple initiatives and reforms.",
    startDate: new Date("2024-02-01"),
    endDate: new Date("2025-01-01"),
    companyLogoImg: "/experience/law/judicial.jpg",
    descriptionDetails: {
      paragraphs: [
        "Led the Judicial Council as Chief Justice, overseeing a comprehensive team of eight justices and support staff.",
        "Pioneered several groundbreaking initiatives including the maiden Judicial Council Conference."
      ],
      bullets: [
        "Initiated and organized maiden Judicial Council Conference",
        "Coordinated regional Judgment Writing Competition with 10 schools",
        "Organized faculty-wide Essay Writing Competition",
        "Oversaw Council administration and member training",
        "Presided over moot and mock competitions",
        "Trained judges in other judicial councils",
        "Bought six wigs and six gowns for the judicial council",
        "We drafted a new court rules which had in it the Trial Court Rules(court of first instance) and Court of Appeal Rules",
        "Created a Roll of Honour of the past Chief Justices of the Judicial Council from 20002/2003 Academic session to the 2023/2024 Academic session, and Judges and Justices of Nigerian Courts who are Alumni of University of Ibadan."
        
      ]
    },
    pagesInfoArr: []
  },

  {
    id: "clinical-legal-education",
    companyName: "International Conference on Clinical Legal Education (Bennett University & University of Ibadan )",
    type: "Professional",
    category: ["Legal Tech", "Advocacy", "International"],
    role: "Panelist and Assistant Team Lead",
    shortDescription: "Presented on technology's impact on legal aid and dispute resolution services.",
    startDate: new Date("2024-08-01"),
    endDate: new Date("2024-08-31"),
    companyLogoImg: "/experience/law/ben.jpg",
    descriptionDetails: {
      paragraphs: [
        "Participated in international collaboration between Bennett University (India) and University of Ibadan (Nigeria).",
        "Focused on technological innovation in legal services delivery."
      ],
      bullets: [
        "Discussed technology's impact on legal aid services",
        "Advocated for digital infrastructure development",
        "Emphasized user-friendly platform development",
        "Addressed security and confidentiality measures",
        "Promoted accessibility in legal services"
      ]
    },
    pagesInfoArr: []
  },

  {
    id: "world-bank-summit",
    companyName: "World Bank Group Youth Summit",
    type: "Professional",
    category: ["International", "Policy", "Development"],
    role: "Delegate",
    shortDescription: "Represented at the World Bank Group Youth Summit in Washington, DC.",
    startDate: new Date("2024-05-01"),
    endDate: new Date("2024-05-31"),
    companyLogoImg: "/experience/law/wod.png",
    descriptionDetails: {
      paragraphs: [
        "Participated as a delegate in the prestigious World Bank Group Youth Summit in Washington, DC.",
        "Engaged in global discussions on development policy and international cooperation."
      ],
      bullets: [
        "Participated in policy discussions",
        "Networked with international delegates",
        "Gained insights into global development",
        "Contributed to youth-focused initiatives"
      ]
    },
    pagesInfoArr: []
  },

  {
    id: "jessup-moot-court",
    companyName: "Philip C. Jessup International Law Moot Court Competition",
    type: "Professional",
    category: ["Advocacy", "International Law", "Leadership"],
    role: "Team Lead and Oralist",
    shortDescription: "Led team to semifinals in national rounds, demonstrating exceptional advocacy skills.",
    startDate: new Date("2024-04-01"),
    endDate: new Date("2024-04-30"),
    companyLogoImg: "/experience/law/moot.png",
    descriptionDetails: {
      paragraphs: [
        "Led a team of four oralists to the semifinals in the national rounds of the world's largest moot court competition.",
        "Demonstrated excellence in international law advocacy and team leadership."
      ],
      bullets: [
        "Led team to national semifinals",
        "Coordinated memorial drafting process",
        "Managed team communications and strategy",
        "Enhanced team performance through effective leadership"
      ]
    },
    pagesInfoArr: []
  },
  {
    id: "legal-education-platform",
    companyName: "Law Students' Digital Learning Hub",
    type: "Personal Project",
    category: ["Legal Tech", "Professional", "Leadership"],
    role: "Founder and Content Creator",
    shortDescription: "Created an online platform providing legal education resources and mock trial materials for law students.",
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-12-31"),
    companyLogoImg: "/experience/education/logo.png",
    descriptionDetails: {
      paragraphs: [
        "Developed a comprehensive digital platform to support law students with educational resources and practical materials.",
        "Created and curated content focusing on mock trials, legal research, and exam preparation strategies."
      ],
      bullets: [
        "Developed educational content for core law courses",
        "Created mock trial simulation materials",
        "Built network of contributing law students",
        "Implemented peer review system for content quality"
      ]
    },
    pagesInfoArr: []
  },

  {
    id: "legal-mentorship",
    companyName: "Legal Career Mentorship Program",
    type: "Personal Project",
    category: ["Leadership", "Professional", "Advocacy"],
    role: "Program Coordinator",
    shortDescription: "Initiated and managed mentorship program connecting law students with practicing lawyers.",
    startDate: new Date("2024-05-01"),
    endDate: new Date("2024-12-31"),
    companyLogoImg: "/experience/mentorship/logo.png",
    descriptionDetails: {
      paragraphs: [
        "Created and managed a structured mentorship program connecting aspiring lawyers with experienced practitioners.",
        "Developed comprehensive program framework including mentorship guidelines and evaluation metrics."
      ],
      bullets: [
        "Established mentorship matching criteria",
        "Organized monthly mentorship sessions",
        "Created feedback and evaluation system",
        "Facilitated networking opportunities"
      ]
    },
    pagesInfoArr: []
  },

  {
    id: "legal-blog",
    companyName: "African Legal Perspectives Blog",
    type: "Personal Project",
    category: ["Legal Writing", "Research", "International Law"],
    role: "Founder and Lead Writer",
    shortDescription: "Created and managed a blog focusing on African legal developments and international law perspectives.",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-31"),
    companyLogoImg: "/experience/blog/logo.png",
    descriptionDetails: {
      paragraphs: [
        "Founded and managed a legal blog focusing on African legal developments and their intersection with international law.",
        "Published regular analysis of landmark cases and emerging legal trends across Africa."
      ],
      bullets: [
        "Published weekly legal analysis articles",
        "Covered major African court decisions",
        "Analyzed international law implications",
        "Built network of contributing writers"
      ]
    },
    pagesInfoArr: []
  }
];

export const featuredExperiences = Experiences.slice(0, 3);
