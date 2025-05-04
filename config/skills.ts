import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Communication",
    description:
      "Excellent verbal and written communication skills in legal proceedings and client interactions.",
    rating: 5,
    icon: Icons.communication,
  },
  {
    name: "Legal Research",
    description:
      "Proficient in conducting comprehensive legal research and case law analysis.",
    rating: 5,
    icon: Icons.research,
  },
  {
    name: "Proof Reading",
    description:
      "Meticulous attention to detail in reviewing legal documents and contracts.",
    rating: 4,
    icon: Icons.document,
  },
  {
    name: "Leadership",
    description:
      "Demonstrated ability to lead legal teams and manage complex cases effectively.",
    rating: 4,
    icon: Icons.leadership,
  },
  {
    name: "Legal Writing",
    description:
      "Expert in drafting legal documents, contracts, briefs, and memoranda.",
    rating: 5,
    icon: Icons.writing,
  },
  {
    name: "Teamwork",
    description:
      "Strong collaboration skills with legal teams, clients, and stakeholders.",
    rating: 5,
    icon: Icons.team,
  },
  {
    name: "Public Speaking",
    description:
      "Confident public speaker with experience in court presentations and negotiations.",
    rating: 5,
    icon: Icons.presentation,
  },
  {
    name: "Capital Market Overview",
    description:
      "In-depth understanding of capital markets, securities, and financial regulations.",
    rating: 5,
    icon: Icons.chart,
  },
  {
    name: "Case Analysis",
    description:
      "Strong analytical skills in evaluating legal cases and developing strategies.",
    rating: 5,
    icon: Icons.analysis,
  },
  {
    name: "Contract Law",
    description:
      "Expertise in drafting, reviewing, and negotiating various types of contracts.",
    rating: 4,
    icon: Icons.contract,
  },
  {
    name: "Corporate Law",
    description:
      "Knowledge of corporate governance, mergers, acquisitions, and compliance.",
    rating: 4,
    icon: Icons.corporate,
  },
  {
    name: "Dispute Resolution",
    description:
      "Experience in alternative dispute resolution, mediation, and arbitration.",
    rating: 4,
    icon: Icons.dispute,
  },
  {
    name: "Legal Tech",
    description:
      "Proficient in using legal software and digital tools for case management.",
    rating: 3,
    icon: Icons.tech,
  },
  {
    name: "Regulatory Compliance",
    description:
      "Understanding of regulatory frameworks and ensuring legal compliance.",
    rating: 4,
    icon: Icons.compliance,
  },
  {
    name: "Client Relations",
    description:
      "Strong client management skills and ability to maintain professional relationships.",
    rating: 3,
    icon: Icons.client,
  },
  {
    name: "Legal Ethics",
    description:
      "Deep understanding of professional ethics and legal responsibilities.",
    rating: 4,
    icon: Icons.ethics,
  },
  {
    name: "Negotiation",
    description:
      "Skilled negotiator with experience in settling complex legal matters.",
    rating: 5,
    icon: Icons.negotiation,
  },
  {
    name: "Legal Documentation",
    description:
      "Expertise in preparing and managing comprehensive legal documentation.",
    rating: 3,
    icon: Icons.documentation,
  },
  {
    name: "Intellectual Property",
    description:
      "Knowledge of IP law, including patents, trademarks, and copyrights.",
    rating: 2,
    icon: Icons.ip,
  },
  {
    name: "Risk Assessment",
    description:
      "Ability to identify and analyze legal risks in various business contexts.",
    rating: 2,
    icon: Icons.risk,
  },
  {
    name: "Legal Advocacy",
    description:
      "Strong advocacy skills in representing clients' interests effectively.",
    rating: 4,
    icon: Icons.advocacy,
  }
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
