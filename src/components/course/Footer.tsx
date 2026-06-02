import Link from "next/link";
import { socialLinks } from "./links";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Benefits", href: "/#benefits" },
  { label: "Pricing", href: "/#pricing" }
];

const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Course", href: "/coursedemo" }
];

export function Footer() {
  return (
    <footer className="border-t border-klaudium-red/30 bg-black">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:px-8 lg:py-16">
        <div>
          <Link className="text-lg font-semibold tracking-tight text-white" href="/">
            Klaudium Studio
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/50">
            Klaudium Studio - Automate Smarter, Optimize Faster, and Grow Stronger.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-medium text-white">Links</h3>
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.label}>
                <Link className="text-sm text-white/50 transition-colors hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-medium text-white">Pages</h3>
          <ul className="space-y-3">
            {pages.map((page) => (
              <li key={page.label}>
                <Link className="text-sm text-white/50 transition-colors hover:text-white" href={page.href}>
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-medium text-white">Socials</h3>
          <ul className="space-y-3">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  className="text-sm text-white/50 transition-colors hover:text-white"
                  href={social.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
