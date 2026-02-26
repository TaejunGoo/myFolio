import { FiGithub, FiMail } from "react-icons/fi";

import { profile } from "@/data/profile";

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  ariaLabel: string;
}

// 소셜 링크 이름 → 아이콘 매핑
const SOCIAL_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: FiGithub,
  Email: FiMail,
};

// profile에서 소셜 링크를 가져오고 아이콘을 매핑
export const socialLinks: SocialLink[] = profile.socialLinks.map((link) => ({
  ...link,
  icon: SOCIAL_ICON_MAP[link.name] ?? FiMail,
}));
