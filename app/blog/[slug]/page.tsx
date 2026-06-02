import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/ArticlePage";
import { StaticHtmlPage } from "@/components/StaticHtmlPage";

export const dynamic = "force-static";

const postPages: Record<string, string> = {
  "the-future-of-ai-automation-how-it-s-changing-business-operations":
    "blog-the-future-of-ai-automation-how-it-s-changing-business-operations",
  "how-ai-is-transforming-workflow-automation-for-businesses":
    "blog-how-ai-is-transforming-workflow-automation-for-businesses"
};

type ArticleFallback = {
  title: string;
  date: string;
  image: string;
  imageAlt: string;
  description: string;
};

const postFallbacks: Record<string, ArticleFallback> = {
  "5-must-have-ai-tools-to-streamline-your-business": {
    title: "5 Must-Have AI Tools to Streamline Your Business tasks",
    date: "Jan 25, 2025",
    image: "/assets/framer/hhCTgvMvhY3Bw921AqhothtYY2k-29720c19fc85.png",
    imageAlt: "long orb",
    description:
      "Want to automate your workflows and boost productivity? We’ve compiled a list of five powerful AI tools that can help you optimize operations, enhance customer interactions, and improve overall business efficiency."
  },
  "ai-vs-manual-work-which-one-saves-more-time-money": {
    title: "AI vs. Manual Work: Which One Saves More Time & Money?",
    date: "Feb 4, 2025",
    image: "/assets/framer/MpdVjcPBQi5ssk8t2M4pZ8TQDk-cd6279c35ac1.png",
    imageAlt: "orange silver orb",
    description:
      "Is AI automation really more efficient than manual work? We break down the costs, time savings, and long-term benefits of AI-driven processes compared to traditional methods to help you make an informed decision."
  }
};

export function generateStaticParams() {
  return [...Object.keys(postPages), ...Object.keys(postFallbacks)].map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = postPages[slug];
  const fallback = postFallbacks[slug];
  if (fallback) return <ArticlePage {...fallback} />;
  if (!page) notFound();
  return <StaticHtmlPage name={page} />;
}
