import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@olamihero",
    icon: Icons.gitHub,
    link: "https://github.com/olamihero",
  },
  {
    name: "LinkedIn",
    username: "Olamide Lasisi",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/olamidelasisi/",
  },
  {
    name: "Twitter",
    username: "@olamidelasisi",
    icon: Icons.twitter,
    link: "https://x.com/olamidelasisi",
  },
  {
    name: "Gmail",
    username: "Olamide Lasisi",
    icon: Icons.gmail,
    link: "mailto:olamihero@gmail.com",
  },
];
