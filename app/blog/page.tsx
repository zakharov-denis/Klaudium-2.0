import type { Metadata } from "next";
import { BlogLibrary } from "@/components/BlogLibrary";

export const metadata: Metadata = {
  title: "Articles | Klaudium Studio",
  description: "Practical startup and AI articles, resources, and product-building guides."
};

export const dynamic = "force-static";

export default function BlogPage() {
  return <BlogLibrary />;
}
