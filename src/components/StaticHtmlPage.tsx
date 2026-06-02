import { readGeneratedPage } from "@/lib/static-page";
import { SiteHeader } from "./SiteHeader";
import { StaticEnhancements } from "./StaticEnhancements";
import type { ReactNode } from "react";

type StaticHtmlPageProps = {
  name: string;
  contact?: boolean;
  beforeContent?: ReactNode;
  pageClassName?: string;
};

export function StaticHtmlPage({
  name,
  contact = false,
  beforeContent,
  pageClassName = ""
}: StaticHtmlPageProps) {
  const html = readGeneratedPage(name);

  return (
    <>
      <SiteHeader />
      {beforeContent}
      <div
        className={`static-page ${pageClassName}`.trim()}
        dangerouslySetInnerHTML={{ __html: html }}
        suppressHydrationWarning
      />
      <StaticEnhancements contact={contact} />
    </>
  );
}
