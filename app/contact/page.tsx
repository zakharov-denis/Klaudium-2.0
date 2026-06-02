import { StaticHtmlPage } from "@/components/StaticHtmlPage";

export const dynamic = "force-static";

export default function ContactPage() {
  return <StaticHtmlPage name="contact" contact />;
}
