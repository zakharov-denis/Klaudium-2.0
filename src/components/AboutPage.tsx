const approach = [
  {
    title: "Discover & Dream",
    body: "We dig deep—what keeps you up at night, what gets you hyped. Only then do we sketch out the big moves."
  },
  {
    title: "Build & Break",
    body: "We code fast, test wild, and break things (on purpose). Everything gets shaped to fit your weirdest workflows."
  },
  {
    title: "Launch & Hype",
    body: "Website live. Agents launched. We watch, tweak, and make sure real change happens."
  }
];

const faqs = [
  {
    question: "Do I need technical knowledge to use AI automation?",
    answer:
      "Not at all! Our platform is user-friendly and built for all skill levels. We provide onboarding, tutorials, and customer support to ensure you can easily navigate and use the system."
  },
  {
    question: "How can AI automation help my business?",
    answer:
      "AI automation eliminates repetitive tasks, improves efficiency, and reduces errors. It allows your team to focus on high-value work while increasing productivity and lowering operational costs."
  },
  {
    question: "What industries can benefit from AI automation?",
    answer:
      "AI automation is beneficial across various industries, including marketing, sales, finance, healthcare, customer support, and operations. Any business looking to improve efficiency can leverage AI."
  },
  {
    question: "Is AI automation difficult to integrate?",
    answer:
      "No! Our AI solutions are designed for seamless integration with your existing tools and workflows. We provide step-by-step guidance to ensure a smooth and hassle-free setup."
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer comprehensive support, including onboarding assistance, troubleshooting, and ongoing updates. Our team is available to help with any questions or technical issues you may have."
  }
];

export function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-badge">About Us</div>
        <h1>Built Different. Built For You.</h1>
        <p>
          We’re just people who gets stuff done differently. Late nights, random sparks
          of ideas, and a love for building things that actually work—not just look good
          on paper.
        </p>
      </section>

      <section className="about-section">
        <div className="about-badge">Our Values</div>
        <h2>Built To Last</h2>
        <p className="about-copy">
          Not just quick fixes. We create stuff you can grow with, no headaches later.
        </p>
      </section>

      <section className="about-section">
        <div className="about-badge">Our Approach</div>
        <h2>Our Approach is simple.</h2>
        <div className="about-grid">
          {approach.map((item) => (
            <article className="about-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section about-faq">
        <div className="about-badge">FAQs</div>
        <h2>We’ve Got the Answers You’re Looking For</h2>
        <p className="about-copy">Quick answers to your AI automation questions.</p>
        <div className="about-faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <h2>Ready to Forge the Future?</h2>
        <p>Book a Call Today and Start Automating</p>
        <a
          href="https://tidycal.com/denizzzai/45-minute-meeting"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a free call
        </a>
      </section>
    </main>
  );
}
