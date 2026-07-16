"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { profile } from "@/data/profile";

export const NameCard = () => {
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  const CardContent = (
    <>
      <div
        aria-hidden="true"
        className="flex size-10 shrink-0 items-center justify-center rounded-xl ring-1 ring-foreground/20"
      >
        <span className="font-mono text-sm font-black tracking-tight text-foreground">
          TJ
        </span>
      </div>
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
