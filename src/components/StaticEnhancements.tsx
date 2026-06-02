"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type StaticEnhancementsProps = {
  contact?: boolean;
};

type ModalSection = {
  heading: string;
  text?: string;
  bullets?: string[];
};

type ModalContent = {
  title: string;
  description: string;
  sections: ModalSection[];
};

const faqItems = [
  {
    question: "What is your pricing?",
    answer:
      "We don't use one-size-fits-all pricing because every client has different goals, scope, and technical needs. We start with a free consultation to understand your business, then give you a clear custom quote before any work begins."
  },
  {
    question: "How are you different from other agencies?",
    answer:
      "We build with a specialist team across strategy, design, development, and AI automation. We don't hand your project off to random VAs or templates; every deliverable is built intentionally, reviewed carefully, and held to a high quality bar."
  },
  {
    question: "Do you offer a guarantee?",
    answer:
      "Yes. We stand by the work. If the final deliverable doesn't meet the agreed quality or functionality standards, we keep refining it until it does. The goal is not just to ship fast; it's to ship it right."
  },
  {
    question: "What kind of support do you provide after launch?",
    answer:
      "You get ongoing optimization support, performance check-ins, AI model improvements when needed, and access to our team for updates or new automations. We don't disappear after launch; we help the system grow with you."
  },
  {
    question: "How long does it take to launch my website or AI agent?",
    answer:
      "Timeline depends on scope. A focused landing page or simple automation can move quickly, while a full website or custom AI agent takes more planning and build time. On the free strategy call, we'll map the fastest realistic path for your goals and budget."
  }
];

const honeypotNames = [
  "website",
  "company",
  "message",
  "subject",
  "title",
  "description",
  "feedback",
  "notes",
  "details",
  "remarks",
  "comments"
];

function visibleInput(input: HTMLInputElement) {
  return (
    input.type !== "hidden" &&
    input.type !== "submit" &&
    input.getAttribute("aria-hidden") !== "true" &&
    input.tabIndex !== -1
  );
}

const modalData: ModalContent[] = [
  {
    title: "Built From The Vibe",
    description: "We don't use page builders or bloated frameworks. We hand-code every web app from the ground up using VIBE Coding methodology. Custom architecture, zero bloat, built exactly how your product needs it. Your app loads instantly, performs beautifully, and scales without technical debt.",
    sections: [
      {
        heading: "Why It Matters",
        bullets: [
          "Faster Performance = Better Conversions: When your app loads in milliseconds, users stay and convert.",
          "Zero Bloat Code: We write only what your app needs. The result is instant load times and interactions.",
          "Scalable From Day One: Architecture that grows with you. Handle 10x more users without refactoring.",
          "More Secure: Custom code means no database vulnerabilities or plugin exploits. Secure by design.",
          "Better SEO Rankings: Google rewards fast-loading sites. Custom apps rank higher and cost less to advertise."
        ]
      },
      {
        heading: "What You Get",
        text: "Custom React/Next.js frontend built for speed. Node.js backend that scales. Clean database architecture. Real-time features. Everything hand-coded, nothing off-the-shelf."
      },
      {
        heading: "Perfect For",
        text: "Startups and businesses that need a high-performance web app. You need something that loads instantly and scales without constant tweaking."
      }
    ]
  },
  {
    title: "Native Mobile Apps",
    description: "We build native iOS & Android apps from scratch using VIBE Coding principles. No cross-platform frameworks that compromise performance. Real native code—Swift for iOS, Kotlin for Android. Every interaction is optimized. Every animation is smooth. Your app feels premium because it is.",
    sections: [
      {
        heading: "WHY IT MATTERS",
        bullets: [
          "Native Means Fast & Responsive: Cross-platform apps feel sluggish. Native apps feel instant.",
          "Optimized for Real Devices: We build specifically for iOS and Android hardware.",
          "Offline-First, Always Ready: Your app works even without internet connection.",
          "Better App Store Performance: Native apps rank higher and get featured more often.",
          "Instant Responses: Every tap happens instantly with zero delay."
        ]
      },
      {
        heading: "WHAT YOU GET",
        text: "Custom iOS and Android apps built in Swift/Kotlin. Beautiful native UI. Push notifications that drive engagement. Smooth 60fps animations. Everything hand-coded for maximum performance."
      },
      {
        heading: "PERFECT FOR",
        text: "Founders who want a premium app that users actually keep. You need flawless performance, not a web app in a wrapper. Real native code."
      }
    ]
  },
  {
    title: "Pages That Convert",
    description: "We hand-code high-converting landing pages using VIBE Coding. No page builders, no templates, no bloat. Just custom-coded pages built specifically to capture leads. Instant load times. Perfect conversions. Built to perform from day one.",
    sections: [
      {
        heading: "Why It Matters",
        bullets: [
          "Speed Drives Conversions: If your page takes >3s to load, you lose 50% of traffic. Ours load instantly.",
          "Better Ads Performance: Faster pages cut ad costs in half. Google rewards speed with lower CPC.",
          "Custom-Built for Offer: No templates. We place headlines and CTAs exactly where they convert best.",
          "Mobile-First Machine: Most leads are mobile. We design for thumbs first, ensuring every tap works.",
          "Google Loves Speed: Better speed scores mean higher organic rankings and more free traffic.",
          "Analytics Built-In: Tracking set up from day one. Know exactly where every lead comes from."
        ]
      },
      {
        heading: "What You Get",
        text: "Custom HTML/CSS landing page. Zero bloat. Mobile-optimized. Google Analytics setup. Conversion tracking for your CTA. A fast-loading page built to convert."
      },
      {
        heading: "Perfect For",
        text: "Anyone launching a product or campaign who needs leads fast. You want a page that doesn't waste attention and converts visitors into customers."
      }
    ]
  },
  {
    title: "Complex Service Case",
    description: "We dive deep into your market, analyze your competition, and build a brand identity that actually works. Market research, strategic positioning, and visual systems that make your business impossible to ignore. Everything hand-crafted using VIBE methodology—no generic templates, no cookie-cutter branding.",
    sections: [
      {
        heading: "Why It Matters",
        bullets: [
          "Stand Out in a Crowded Market: Everyone's competing for attention. A generic logo and brand won't cut it. We identify untapped emotional triggers, market gaps, and positioning angles that make your business different.",
          "Strategic Positioning Drives Sales: Positioning isn't just a tagline. It's how your entire market perceives you.",
          "Visual System That Converts: A cohesive visual identity—logo, color palette, typography, imagery style—builds trust instantly.",
          "Know Your Customer Deeply: We don't guess. We research. Every branding decision is backed by real data, not assumptions.",
          "Brand Consistency Across Everything: Once we build your identity, it works everywhere. Consistency builds recognition.",
          "Lasting Emotional Connection: The best brands aren't just remembered—they're loved. We build visual systems and messaging that create emotional connections."
        ]
      },
      {
        heading: "What You Get",
        text: "Deep market research and competitive analysis. Brand positioning strategy and messaging framework. Logo design and visual identity system. Color palette and typography guidelines. Brand guidelines document."
      },
      {
        heading: "Perfect For",
        text: "Founders launching a new business or rebranding an existing one. You need a brand that stands out, converts customers, and feels intentional."
      }
    ]
  }
];

export function StaticEnhancements({ contact = false }: StaticEnhancementsProps) {
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  useEffect(() => {
    const nestedLinks = Array.from(
      document.querySelectorAll<HTMLElement>("[data-nested-link][href]")
    );

    const onNestedClick = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      const href = target.getAttribute("href");
      if (!href) return;
      event.preventDefault();
      window.location.href = href;
    };

    nestedLinks.forEach((link) => {
      link.addEventListener("click", onNestedClick);
      link.addEventListener("keydown", (event) => {
        const keyboardEvent = event as KeyboardEvent;
        if (keyboardEvent.key === "Enter") onNestedClick(event);
      });
    });

    const toggles = Array.from(
      document.querySelectorAll<HTMLElement>('[data-framer-name="closed"]')
    );

    const cleanups: Array<() => void> = [];

    toggles.forEach((toggle) => {
      const nav = toggle.closest("nav");
      const expanded = nav?.querySelector<HTMLElement>(
        '[data-framer-name="Mobile Expanded"]'
      );
      if (!expanded) return;

      let open = false;
      expanded.style.display = "none";
      toggle.setAttribute("role", "button");
      toggle.setAttribute("aria-expanded", "false");

      const onToggle = () => {
        open = !open;
        expanded.style.display = open ? "" : "none";
        toggle.setAttribute("aria-expanded", String(open));
      };

      toggle.addEventListener("click", onToggle);
      cleanups.push(() => toggle.removeEventListener("click", onToggle));
    });

    const allTextNodes = Array.from(document.querySelectorAll('.framer-text'));
    const seeMoreButtons = allTextNodes.filter(el => el.textContent?.trim() === "See more");

    seeMoreButtons.forEach((node, index) => {
      const wrapper = node.closest('.framer-4el2p') || node.parentElement;
      if (wrapper && modalData[index]) {
        (wrapper as HTMLElement).style.cursor = 'pointer';
        const onSeeMoreClick = (e: Event) => {
          e.preventDefault();
          e.stopPropagation();
          setModalContent(modalData[index]);
          document.body.style.overflow = 'hidden';
        };
        wrapper.addEventListener('click', onSeeMoreClick);
        cleanups.push(() => wrapper.removeEventListener('click', onSeeMoreClick));
      }
    });

    const faqSection = document.querySelector<HTMLElement>(
      '.static-page [data-framer-name="FAQs and CTA"]'
    );

    if (faqSection && !faqSection.querySelector("[data-klaudium-faqs]")) {
      const framerFaqVariants = Array.from(
        faqSection.querySelectorAll<HTMLElement>('[data-framer-name="Faqs"]')
      );

      framerFaqVariants.forEach((faqVariant) => {
        const wrapper = faqVariant.closest<HTMLElement>(".ssr-variant") || faqVariant;
        wrapper.style.display = "none";
      });

      const faqList = document.createElement("div");
      faqList.className = "klaudium-faq-list";
      faqList.dataset.klaudiumFaqs = "true";

      faqItems.forEach((item, index) => {
        const card = document.createElement("article");
        card.className = "klaudium-faq-card";
        card.dataset.open = "false";

        const heading = document.createElement("h3");

        const header = document.createElement("button");
        header.type = "button";
        header.className = "klaudium-faq-question-row";
        header.setAttribute("aria-expanded", "false");
        header.setAttribute("aria-controls", `klaudium-faq-answer-${index}`);

        const question = document.createElement("span");
        question.textContent = item.question;

        const icon = document.createElement("span");
        icon.className = "klaudium-faq-icon";
        icon.setAttribute("aria-hidden", "true");

        const answerPanel = document.createElement("div");
        answerPanel.className = "klaudium-faq-answer";
        answerPanel.id = `klaudium-faq-answer-${index}`;

        const answer = document.createElement("p");
        answer.textContent = item.answer;

        const setOpen = (open: boolean) => {
          card.dataset.open = String(open);
          header.setAttribute("aria-expanded", String(open));
          answerPanel.style.maxHeight = open ? `${answerPanel.scrollHeight}px` : "0px";
        };

        const onFaqToggle = () => {
          setOpen(card.dataset.open !== "true");
        };

        header.append(question, icon);
        heading.append(header);
        answerPanel.append(answer);
        card.append(heading, answerPanel);
        faqList.append(card);
        header.addEventListener("click", onFaqToggle);
        cleanups.push(() => header.removeEventListener("click", onFaqToggle));
      });

      const cta = faqSection.querySelector<HTMLElement>('[data-framer-name="CTA"]');
      faqSection.insertBefore(faqList, cta);
    }

    return () => {
      nestedLinks.forEach((link) => link.removeEventListener("click", onNestedClick));
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  useEffect(() => {
    if (!contact) return;

    const form = document.querySelector<HTMLFormElement>(".static-page form");
    if (!form) return;

    let status = form.querySelector<HTMLElement>("[data-contact-status]");
    if (!status) {
      status = document.createElement("p");
      status.dataset.contactStatus = "true";
      status.setAttribute("role", "status");
      status.style.color = "rgba(255,255,255,.82)";
      status.style.fontFamily = "Figtree, Arial, sans-serif";
      status.style.fontSize = "14px";
      status.style.marginTop = "14px";
      form.appendChild(status);
    }

    const onSubmit = async (event: SubmitEvent) => {
      event.preventDefault();

      const inputs = Array.from(form.querySelectorAll("input")).filter(visibleInput);
      const textInputs = inputs.filter((input) => input.type === "text");
      const emailInput = inputs.find((input) => input.type === "email");
      const phoneInput = inputs.find((input) => input.type === "tel");
      const textarea = form.querySelector<HTMLTextAreaElement>("textarea");
      const honeypot: Record<string, string> = {};

      honeypotNames.forEach((name) => {
        const field = form.querySelector<HTMLInputElement>(
          `input[name="${name}"][aria-hidden="true"]`
        );
        honeypot[name] = field?.value || "";
      });

      const payload = {
        firstName: textInputs[0]?.value?.trim() || "",
        lastName: textInputs[1]?.value?.trim() || "",
        email: emailInput?.value?.trim() || "",
        phone: phoneInput?.value?.trim() || "",
        message: textarea?.value?.trim() || "",
        honeypot
      };

      status.textContent = "Sending...";

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error("Contact request failed");

        form.reset();
        status.textContent = "Thanks. We received your message and will be in touch.";
      } catch {
        status.textContent = "Something went wrong. Please try again or message us directly.";
      }
    };

    form.addEventListener("submit", onSubmit);
    return () => form.removeEventListener("submit", onSubmit);
  }, [contact]);

  const closeModal = () => {
    setModalContent(null);
    document.body.style.overflow = '';
  };

  if (!modalContent && typeof document === 'undefined') return null;

  return (
    <>
      {modalContent && createPortal(
        <div className="service-modal-overlay" onClick={closeModal}>
          <div className="service-modal" onClick={(e) => e.stopPropagation()}>
            <button className="service-modal-close" onClick={closeModal}>&times;</button>
            <h2>{modalContent.title}</h2>
            <p className="modal-desc">{modalContent.description}</p>
            {modalContent.sections.map((section, idx) => (
              <div key={idx} className="service-modal-section">
                <h3>{section.heading}</h3>
                {section.text && <p>{section.text}</p>}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet: string, bIdx: number) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
