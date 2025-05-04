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
    username: "@namanbarkiya",
    icon: Icons.gitHub,
    link: "https://github.com/namanbarkiya",
  },
  {
    name: "LinkedIn",
    username: "Olamide Lasisi",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/olamidelasisi/",
  },
  {
    name: "Twitter",
    username: "@namanbarkiya",
    icon: Icons.twitter,
    link: "https://twitter.com/namanbarkiya",
  },
  {
    name: "Gmail",
    username: "Olamide Lasisi",
    icon: Icons.gmail,
    link: "mailto:olamihero@gmail.com",
  },
];
