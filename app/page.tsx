import { HomeHero } from "@/components/HomeHero";
import { StaticHtmlPage } from "@/components/StaticHtmlPage";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <StaticHtmlPage
      name="home"
      beforeContent={<HomeHero />}
      hideHeader
      pageClassName="home-static-rest"
    />
  );
}
