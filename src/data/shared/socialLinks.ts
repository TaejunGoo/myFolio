import { FiGithub, FiMail } from "react-icons/fi";

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  ariaLabel: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/TaejunGoo",
    icon: FiGithub,
    ariaLabel: "GitHub 프로필 방문",
  },
  {
    name: "Email",
    href: "mailto:gtxggle2@gmail.com",
    icon: FiMail,
    ariaLabel: "이메일 보내기",
  },
];
