import { useTranslations } from "next-intl";

import Hero from "@/components/main/Hero";

const Home = () => {
  const t = useTranslations("HomePage");
  return (
    <main>
      <Hero />
      <p className="h-[9999px] p-0">zz</p>
      <hr />
    </main>
  );
};
export default Home;

