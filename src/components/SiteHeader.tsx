import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="site-logo" href="/">
          Klaudium Studio
        </Link>
        <nav className="site-links" aria-label="Primary">
          <Link className="site-course" href="/coursedemo">
            Course
          </Link>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <a
          className="site-call"
          href="https://tidycal.com/denizzzai/45-minute-meeting"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a call
        </a>
      </div>
    </header>
  );
}
