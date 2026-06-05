"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight, Star } from "lucide-react";
import { useState } from "react";
import { EnrollButton } from "./EnrollButton";
import { COURSE_ENROLL_URL } from "./links";

const testimonials = [
  {
    title: "Perfect for Non-Traditional Developers",
    quote:
      "I don't have a CS degree or fancy job title. Most courses made me feel behind before I even started. Here, everything is built around real projects and clear thinking, not academic theory. Vibe coding finally made serious app development feel possible for someone coming from a completely different background.",
    name: "Maria Valova",
    location: "Czech Republic"
  },
  {
    title: "Landed My First Paid Client",
    quote:
      "I turned one of the course projects into a polished case study and shared it on my portfolio. Within two weeks, a local business reached out. Using the same workflow from the lessons, I scoped, built, and delivered their app, and got paid more than the course cost.",
    name: "Minseo L.",
    location: "South Korea"
  },
  {
    title: "Finally Understand How to Use AI for Code",
    quote:
      "Before this course, I was copy-pasting random prompts into AI tools and hoping for the best. Denis showed me how to brief agents properly, critique their output, and iterate. Now I use AI like a junior developer on my team instead of a gimmick that sometimes works.",
    name: "Arturo R.",
    location: "Mexico"
  },
  {
    title: "Shipped My First SaaS in 4 Weeks",
    quote:
      "I came in with a rough idea and zero experience using AI for code. Four weeks later, I had a working SaaS MVP live on the internet. The structured prompts and vibe coding flows meant I never felt lost, even when building things I'd never tried before.",
    name: "Julia K.",
    location: "Poland"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = testimonials[currentIndex];

  return (
    <section className="course-red-grid py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/30 px-4 py-2">
              <Star className="h-4 w-4 fill-bright-red text-bright-red" />
              <span className="text-sm font-medium text-white">Testimonials</span>
            </div>

            <h2 className="text-3xl font-bold text-white lg:text-4xl">What My Students Say</h2>
          </div>

          <div className="mt-4 flex items-center gap-3 sm:mt-0">
            <button
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-white/40 hover:text-white disabled:opacity-30"
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((index) => Math.max(0, index - 1))}
              type="button"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-white/40 hover:text-white disabled:opacity-30"
              disabled={currentIndex === testimonials.length - 1}
              onClick={() => setCurrentIndex((index) => Math.min(testimonials.length - 1, index + 1))}
              type="button"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative rounded-3xl border border-red-500/20 bg-white/[0.04] p-8 shadow-[0_0_80px_rgba(225,6,0,0.08)] backdrop-blur-sm lg:p-12">
          <div className="mb-6 flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <Star className="h-5 w-5 fill-strategy-amber text-strategy-amber" key={index} />
            ))}
          </div>

          <h3 className="mb-4 text-xl font-semibold text-white lg:text-2xl">
            {testimonial.title}
          </h3>

          <blockquote className="mb-8 text-lg leading-relaxed text-white/70">
            &quot;{testimonial.quote}&quot;
          </blockquote>

          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-white">{testimonial.name}</div>
              <div className="text-sm text-white/50">{testimonial.location}</div>
            </div>

            <div className="font-serif text-6xl leading-none text-white/10 lg:text-8xl">&ldquo;&rdquo;</div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 text-white/70">
            {"Ship your first AI-powered app and see what you're truly capable of building."}
          </p>

          <div className="flex justify-center">
            <EnrollButton className="group inline-flex items-center gap-0">
              <span className="rounded-l-xl bg-klaudium-red px-6 py-3.5 font-medium text-white transition-colors hover:bg-bright-red">
                Enroll Now
              </span>
              <span className="rounded-r-xl bg-soft-black p-3.5 text-white transition-colors group-hover:bg-ink-black">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </EnrollButton>
          </div>
        </div>
      </div>
    </section>
  );
}
