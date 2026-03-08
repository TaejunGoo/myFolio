import { Mail } from "lucide-react";
import Link from "next/link";
import { FiGithub, FiMail } from "react-icons/fi";

import { profile } from "@/data/profile";
import { cn } from "@/shared/utils/cn";

interface SocialLinksProps {
  className?: string;
}

export const SocialLinks = ({ className }: SocialLinksProps) => {
  const socialLinks = [
    {
      name: "GitHub",
      href: profile.githubUrl,
      icon: FiGithub,
      ariaLabel: "GitHub 프로필 방문",
    },
    {
      name: "Email",
      href: `mailto:${profile.email}`,
      icon: FiMail,
      ariaLabel: "이메일 보내기",
    },
  ];

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.ariaLabel}
            className="group relative"
          >
            <Icon
              className="size-5 text-foreground/60 transition-all duration-300 group-hover:scale-110 hover:text-foreground dark:text-foreground/70 dark:hover:text-foreground"
            />
            <span className="sr-only">{social.ariaLabel}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default SocialLinks;
