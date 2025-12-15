"use client";

import { useLocale } from "next-intl";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "@/i18n/navigation";

export const LocaleToggleBtn = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const targetLocale = locale === "ko" ? "en" : "ko";
  const toggleLocale = () => {
    router.replace(pathname, { locale: targetLocale });
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleLocale}>
      <span className="text-sm font-bold">{targetLocale.toUpperCase()}</span>
      <span className="sr-only">
        Switch to {locale === "ko" ? "English" : "Korean"}
      </span>
    </Button>
  );
};
