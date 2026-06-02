import Image from "next/image";
import { SiteChrome } from "./SiteChrome";

type ArticlePageProps = {
  title: string;
  date: string;
  image: string;
  imageAlt: string;
  description: string;
};

export function ArticlePage({ title, date, image, imageAlt, description }: ArticlePageProps) {
  return (
    <SiteChrome>
      <main className="article-page">
        <article className="article-shell">
          <div className="about-badge">Article</div>
          <h1>{title}</h1>
          <p className="article-date">{date}</p>
          <Image
            className="article-image"
            src={image}
            alt={imageAlt}
            width={1024}
            height={640}
            sizes="(max-width: 900px) 100vw, 900px"
          />
          <div className="article-body">
            <h2>Introduction</h2>
            <p>{description}</p>
          </div>
        </article>
      </main>
    </SiteChrome>
  );
}
