import { aboutIntro, credibility } from "./data";

export function Credibility() {
  return (
    <section className="home-credibility" id="about" aria-labelledby="home-credibility-title">
      <header className="home-section-header">
        <p className="home-section-badge">{aboutIntro.badge}</p>
        <h2 id="home-credibility-title" className="home-section-heading">
          {aboutIntro.heading}
        </h2>
        <p className="home-section-intro">{aboutIntro.text}</p>
      </header>

      <div className="home-credibility-grid">
        {credibility.map((item) => (
          <article key={item.org} className="home-credibility-card">
            <h3>{item.org}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
