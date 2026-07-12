import Link from "next/link";
import { hero, nav } from "./data";

export function Hero() {
  return (
    <header className="home-hero">
      <a className="home-skip" href="#main-content">
        Skip to content
      </a>
      <nav className="home-nav" aria-label="Main">
        <Link className="home-nav-brand" href="/">
          {nav.brand}
        </Link>
        <div className="home-nav-links">
          {nav.links.map((link) =>
            link.href.startsWith("#") ? (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            )
          )}
        </div>
        <a className="home-nav-cta" href={nav.cta.href} target="_blank" rel="noopener">
          {nav.cta.label}
        </a>
      </nav>

      <div className="home-hero-inner" id="main-content">
        <p className="home-hero-eyebrow">{hero.eyebrow}</p>
        <h1 className="home-hero-heading">
          {hero.heading.before}
          <span className="home-hero-highlight">{hero.heading.highlight}</span>
          {hero.heading.after}
        </h1>
        <p className="home-hero-subcopy">{hero.subcopy}</p>
        <div className="home-hero-actions">
          <a
            className="home-cta home-cta-primary"
            href={hero.primaryCta.href}
            target="_blank"
            rel="noopener"
          >
            {hero.primaryCta.label}
          </a>
          <a className="home-cta home-cta-secondary" href={hero.secondaryCta.href}>
            {hero.secondaryCta.label}
          </a>
        </div>
        <ul className="home-hero-industries" aria-label="Industries we work in">
          {hero.industries.map((industry) => (
            <li key={industry}>{industry}</li>
          ))}
        </ul>
      </div>
    </header>
  );
}
