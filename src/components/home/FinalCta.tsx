import { finalCta } from "./data";

export function FinalCta() {
  return (
    <section className="home-final-cta-wrap" aria-labelledby="home-final-cta-title">
      <div className="home-final-cta">
        <h2 id="home-final-cta-title">{finalCta.heading}</h2>
        <p>{finalCta.text}</p>
        <a
          className="home-cta home-cta-primary"
          href={finalCta.cta.href}
          target="_blank"
          rel="noopener"
        >
          {finalCta.cta.label}
        </a>
      </div>
    </section>
  );
}
