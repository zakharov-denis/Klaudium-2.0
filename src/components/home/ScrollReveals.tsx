"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = [
  ".home-section-header",
  ".home-solution-card",
  ".home-process-step",
  ".home-product-card",
  ".home-credibility-card",
  ".home-faq-item",
  ".home-final-cta"
].join(", ");

export function ScrollReveals() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Only elements still below the fold get hidden — above-fold content
    // must never flash out after hydration.
    const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)).filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight * 0.85
    );
    if (elements.length === 0) return;

    elements.forEach((el) => el.classList.add("home-reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
