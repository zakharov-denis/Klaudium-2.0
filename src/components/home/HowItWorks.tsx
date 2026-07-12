import { processIntro, processSteps } from "./data";

export function HowItWorks() {
  return (
    <section className="home-process" id="process" aria-labelledby="home-process-title">
      <header className="home-section-header">
        <p className="home-section-badge">{processIntro.badge}</p>
        <h2 id="home-process-title" className="home-section-heading">
          {processIntro.heading}
        </h2>
        <p className="home-section-intro">{processIntro.text}</p>
      </header>

      <ol className="home-process-steps">
        {processSteps.map((step) => (
          <li key={step.title} className="home-process-step">
            <p className="home-card-index">{step.index}</p>
            <div className="home-process-main">
              <h3>{step.title}</h3>
              <p className="home-process-description">{step.description}</p>
            </div>
            <ul className="home-process-points">
              {step.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
