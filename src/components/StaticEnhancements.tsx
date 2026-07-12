"use client";

import { useEffect } from "react";

type StaticEnhancementsProps = {
  contact?: boolean;
};

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

export function StaticEnhancements({ contact = false }: StaticEnhancementsProps) {
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

  return null;
}
