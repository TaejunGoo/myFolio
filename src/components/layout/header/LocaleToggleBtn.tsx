"use client";

import { useLocale } from "next-intl";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "@/i18n/navigation";

export const LocaleToggleBtn = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === "ko" ? "en" : "ko";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleLocale}>
      <span className="text-sm font-bold">{locale === "ko" ? "KO" : "EN"}</span>
      <span className="sr-only">
        Switch to {locale === "ko" ? "English" : "Korean"}
      </span>
    </Button>
  );
};
