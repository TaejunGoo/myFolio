import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";
import { SiVelog } from "react-icons/si";

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  ariaLabel: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: FiGithub,
    ariaLabel: "GitHub 프로필 방문",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: FiLinkedin,
    ariaLabel: "LinkedIn 프로필 방문",
  },
  {
    name: "Velog",
    href: "https://velog.io/@yourusername",
    icon: SiVelog,
    ariaLabel: "Velog 블로그 방문",
  },
  {
    name: "Email",
    href: "mailto:your.email@example.com",
    icon: FiMail,
    ariaLabel: "이메일 보내기",
  },
];
