"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { profile } from "@/data/profile";

export const NameCard = () => {
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  const CardContent = (
    <>
      <Avatar className="size-10">
        <AvatarImage src={profile.avatarUrl} alt={profile.avatarAlt} sizes="40px" loading="eager" />
        <AvatarFallback className="bg-linear-to-br from-blue-500 to-purple-600 text-sm font-bold text-white">
          {profile.name}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="text-base leading-tight font-bold text-foreground">
          {profile.name}
        </span>
        <span className="text-xs leading-tight text-muted-foreground">
          {profile.title}
        </span>
      </div>
    </>
  );

  if (isMainPage) {
    return (
      <a
        href="#about"
        className="flex items-center gap-3 transition-all hover:opacity-80"
      >
        {CardContent}
      </a>
    );
  }

  return (
    <Link
      href="/"
      className="flex items-center gap-3 transition-all hover:opacity-80"
    >
      {CardContent}
    </Link>
  );
};

export default NameCard;
