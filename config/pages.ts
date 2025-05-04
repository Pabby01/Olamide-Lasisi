import { Certifications } from './certifications';
import { ValidPages } from "./constants";

export const pagesConfig = {
  home: {
    title: "Olamide Lasisi",
    description: "Welcome to the Legal world.",
    metadata: {
      title: "Home",
      description: "Olamide Lasisi's portfolio.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Olamide Lasisi's key skills that define his professional identity.",
    },
  },
  experience: {
    title: "Experience",
    description: "Highlighting career journey and impactful projects.",
    metadata: {
      title: "Experience",
      description: "Olamide Lasisi's experience in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Olamide Lasisi.",
    },
  },
  certifications: {
    title: "Certifications",
    description: "Professional certifications and achievements across legal, technology, and professional development domains.",
    metadata: {
      title: "Certifications | Olamide Lasisi",
      description: "View my professional certifications and achievements in legal, technology, and professional development.",
    },
  },
  resume: {
    title: "Resume",
    description: "Olamide Lasisi's resume.",
    metadata: {
      title: "Resume",
      description: "Olamide Lasisi's resume.",
    },
  },
  contributions: {
    title: "contributions",
    description: "Olamide Lasisi's resume.",
    metadata: {
      title: "contributions",
      description: "Olamide Lasisi's resume.",
    },
  },
};

// Update the type definition if it exists
export interface PagesConfig {
  home: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  },
  skills: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  },
  experience: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  },
  contact: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  },
  certifications: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
}
