import { AboutPage } from "@/components/AboutPage";
import { readGeneratedStyles } from "@/lib/static-page";

export const dynamic = "force-static";

export default function AboutRoute() {
  const styles = readGeneratedStyles();

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: styles }} suppressHydrationWarning />
      <AboutPage />
    </>
  );
}
