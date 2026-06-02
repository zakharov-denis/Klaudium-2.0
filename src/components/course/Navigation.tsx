"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BOOK_CALL_URL } from "./links";

const navLinks = [
  { label: "Course", href: "/coursedemo", active: true },
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-red-500/20 bg-black/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link className="text-lg font-semibold tracking-tight text-white" href="/">
            Klaudium Studio
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  link.active
                    ? "bg-red-950/50 text-white hover:bg-klaudium-red"
                    : "text-white/80 hover:text-white"
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              className="rounded-full border border-red-500/30 bg-red-950/30 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-klaudium-red hover:bg-klaudium-red"
              href={BOOK_CALL_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              Book a call
            </a>
          </div>

          <button
            aria-controls="course-mobile-menu"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
            className="p-2 text-white lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
            type="button"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-red-500/20 bg-black lg:hidden" id="course-mobile-menu">
          <div className="space-y-2 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                className={`block rounded-lg px-4 py-2 text-sm font-medium ${
                  link.active ? "bg-red-950/50 text-white" : "text-white/80 hover:text-white"
                }`}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              className="mt-4 block rounded-lg bg-klaudium-red px-4 py-3 text-center text-sm font-medium text-white"
              href={BOOK_CALL_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              Book a call
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
