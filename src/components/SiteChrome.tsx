import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/vibe_founding?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  },
  { label: "Linkedin", href: "https://www.linkedin.com/in/zakharov-denis/" },
  { label: "X(Twitter)", href: "https://x.com" }
];

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div className="chrome">
      <SiteHeader />
      {children}
      <footer className="chrome-footer">
        <div>
          <Link className="chrome-footer-logo" href="/">
            Klaudium Studio
          </Link>
          <p>Klaudium Studio– Automate Smarter, Optimize Faster, and Grow Stronger.</p>
        </div>
        <div className="chrome-footer-grid">
          <div>
            <h3>Links</h3>
            <Link href="/#services">Services</Link>
            <Link href="/#benefits">Benefits</Link>
            <Link href="/#pricing">Pricing</Link>
          </div>
          <div>
            <h3>Pages</h3>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/coursedemo">Course</Link>
          </div>
          <div>
            <h3>Socials</h3>
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
      <footer className="chrome-legal">
        <Link href="/terms-of-use">Copyright 2026 Klaudium Studio</Link>
        <Link href="/terms-of-use">Terms of Use</Link>
        <Link href="/privacy-page">Privacy Policy</Link>
      </footer>
    </div>
  );
}
