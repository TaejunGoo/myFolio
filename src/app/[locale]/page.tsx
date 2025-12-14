import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

const Home = () => {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Button>버튼~~</Button>
      <p className="font-normal">font-weight 400</p>
      <p className="font-medium">font-weight 500</p>
      <p className="font-semibold">font-weight 600</p>
      <p className="font-bold">font-weight 700</p>
      <p className="h-[9999px] p-0">zz</p>
      <hr />
    </div>
  );
};
export default Home;

