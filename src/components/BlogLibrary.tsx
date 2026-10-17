import Image from "next/image";
import Link from "next/link";
import { SiteChrome } from "./SiteChrome";
import "./blog-editorial.css";

const posts = [
  {
    href: "/blog/5-mistakes-to-avoid-when-building-an-ai-service",
    category: "Article",
    title: "5 Mistakes to Avoid When Building an AI Service",
    image: "",
    alt: "",
    readingTime: "6 min read"
  },
  {
    href: "/blog/the-future-of-ai-automation-how-it-s-changing-business-operations",
    category: "Article",
    title: "The Future of AI Automation: How It’s Changing Business Operations",
    image: "/assets/framer/UP5MBuAKMmwm1lH2TSmMzhDVs-d9cc4f0cb1af.png",
    alt: "Abstract silver metallic knot",
    readingTime: ""
  },
  {
    href: "/blog/5-must-have-ai-tools-to-streamline-your-business",
    category: "Resources",
    title: "5 Must-Have AI Tools to Streamline Your Business Tasks",
    image: "/assets/framer/hhCTgvMvhY3Bw921AqhothtYY2k-29720c19fc85.png",
    alt: "Abstract metallic AI-themed sculpture",
    readingTime: ""
  },
  {
    href: "/blog/ai-vs-manual-work-which-one-saves-more-time-money",
    category: "Article",
    title: "AI vs. Manual Work: Which One Saves More Time & Money?",
    image: "/assets/framer/MpdVjcPBQi5ssk8t2M4pZ8TQDk-cd6279c35ac1.png",
    alt: "Abstract glass and metallic sculpture",
    readingTime: ""
  },
  {
    href: "/blog/how-ai-is-transforming-workflow-automation-for-businesses",
    category: "Article",
    title: "How AI Is Transforming Workflow Automation for Businesses",
    image: "/assets/framer/Q74WtJuuMM5qrE7n8pkecEiFqU-8faa00557de9.png",
    alt: "Blue metallic abstract sphere",
    readingTime: ""
  }
];

export function BlogLibrary() {
  return (
    <SiteChrome>
      <main className="br-page br-library">
        <header className="br-library-heading">
          <span className="br-pill">Blog</span>
          <h1>Unlock AI Insights with Us</h1>
          <p>
            Stay informed with the latest AI trends, insights, and strategies
            to drive innovation and business growth.
          </p>
        </header>
        <section className="br-grid" aria-label="Articles and resources">
          {posts.map((post) => (
            <Link className="br-card" href={post.href} key={post.href}>
              <div className="br-card-art">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 680px) 100vw, 420px"
                  />
                ) : (
                  <div className="br-number-art" aria-hidden="true">
                    <span>05</span>
                  </div>
                )}
              </div>
              <div className="br-card-info">
                <span className="br-pill br-card-pill">{post.category}</span>
                <h2>{post.title}</h2>
                {post.readingTime && <span className="br-reading-time">{post.readingTime}</span>}
              </div>
            </Link>
          ))}
        </section>
      </main>
    </SiteChrome>
  );
}
