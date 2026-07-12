import { faqIntro, faqItems } from "./data";

export function Faq() {
  return (
    <section className="home-faq" aria-labelledby="home-faq-title">
      <header className="home-section-header">
        <p className="home-section-badge">{faqIntro.badge}</p>
        <h2 id="home-faq-title" className="home-section-heading">
          {faqIntro.heading}
        </h2>
      </header>

      <dl className="home-faq-list">
        {faqItems.map((item) => (
          <div key={item.question} className="home-faq-item">
            <dt>{item.question}</dt>
            <dd>{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
