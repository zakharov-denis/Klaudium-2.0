import { CoursePage } from "@/components/course/CoursePage";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Klaudium Course - Stop Coding. Start Building.",
  description:
    "Learn vibe coding with Replit and build production-ready apps through practical, project-based lessons."
};

export default function CourseDemoPage() {
  return <CoursePage />;
}
