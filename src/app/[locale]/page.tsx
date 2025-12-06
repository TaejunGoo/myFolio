import { Button } from "@/components/ui/button";
import MSWtest from "@/shared/components/test/MSWtest";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Button>버튼~~</Button>
      <hr />
      <MSWtest />
    </div>
  );
}
