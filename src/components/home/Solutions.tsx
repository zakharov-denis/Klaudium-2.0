import { solutions, solutionsIntro } from "./data";

export function Solutions() {
  return (
    <section className="home-solutions" id="solutions" aria-labelledby="home-solutions-title">
      <header className="home-section-header">
        <p className="home-section-badge">{solutionsIntro.badge}</p>
        <h2 id="home-solutions-title" className="home-section-heading">
          {solutionsIntro.heading}
        </h2>
        <p className="home-section-intro">{solutionsIntro.text}</p>
      </header>

      <div className="home-solutions-grid">
        {solutions.map((solution) => (
          <article key={solution.title} className="home-solution-card">
            <p className="home-card-index">{solution.index}</p>
            <h3>{solution.title}</h3>
            <p className="home-solution-description">{solution.description}</p>
            <ul className="home-solution-capabilities">
              {solution.capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
