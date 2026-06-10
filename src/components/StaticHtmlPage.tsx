import { readGeneratedPage } from "@/lib/static-page";
import { SiteHeader } from "./SiteHeader";
import { StaticEnhancements } from "./StaticEnhancements";
import type { ReactNode } from "react";

type StaticHtmlPageProps = {
  name: string;
  contact?: boolean;
  beforeContent?: ReactNode;
  hideHeader?: boolean;
  pageClassName?: string;
};

export function StaticHtmlPage({
  name,
  contact = false,
  beforeContent,
  hideHeader = false,
  pageClassName = ""
}: StaticHtmlPageProps) {
  const html = readGeneratedPage(name);

  return (
    <>
      {!hideHeader && <SiteHeader />}
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
