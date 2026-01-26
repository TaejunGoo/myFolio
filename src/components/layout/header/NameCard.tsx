"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const NameCard = () => {
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  const CardContent = (
    <>
      <Avatar className="size-10">
        <AvatarImage src="/images/profile/cat.jpg" alt="우리집 고양이 감자" sizes="40px" />
        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-bold text-white">
          구태준
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="text-base leading-tight font-bold text-foreground">
          구태준
        </span>
        <span className="text-xs leading-tight text-muted-foreground">
          퍼블리셔 &middot; UI Engineer
        </span>
      </div>
    </>
  );

  if (isMainPage) {
    return (
      <a
        href="#about"
        className="flex items-center gap-3 transition-all hover:opacity-80"
        onClick={(e) => {
          e.preventDefault();
          const element = document.getElementById("about");
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }}
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
