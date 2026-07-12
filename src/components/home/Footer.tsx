import Link from "next/link";
import { footerData } from "./data";

export function Footer() {
  return (
    <footer className="home-footer">
      <div className="home-footer-main">
        <div className="home-footer-brand">
          <p className="home-footer-logo">{footerData.brand}</p>
          <p className="home-footer-tagline">{footerData.tagline}</p>
        </div>
        <nav className="home-footer-columns" aria-label="Footer">
          {footerData.columns.map((column) => (
            <div key={column.title} className="home-footer-column">
              <p>{column.title}</p>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a href={link.href} target="_blank" rel="noopener">
                        {link.label}
                      </a>
                    ) : link.href.startsWith("#") ? (
                      <a href={link.href}>{link.label}</a>
                    ) : (
                      <Link href={link.href}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="home-footer-legal">
        <p>
          © {new Date().getFullYear()} {footerData.legalName}
        </p>
        <div className="home-footer-legal-links">
          {footerData.legal.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
