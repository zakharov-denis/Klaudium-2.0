import { ArrowUpRight, ExternalLink, Star } from "lucide-react";
import Image from "next/image";
import { COURSE_ENROLL_URL, DENIS_LINKEDIN_URL } from "./links";

export function InstructorSection() {
  return (
    <section className="bg-black py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-red-500/20 bg-white/[0.04] shadow-[0_0_80px_rgba(225,6,0,0.08)] backdrop-blur-sm">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="relative aspect-square lg:aspect-auto">
              <div className="absolute right-8 top-8 z-10 h-32 w-32 lg:h-48 lg:w-48">
                <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 100 100">
                  <path
                    d="M20 30 Q30 10, 50 20 Q70 30, 80 15 Q90 25, 85 40 Q80 55, 90 70 Q85 85, 70 80 Q55 90, 40 85 Q25 80, 20 65 Q15 50, 20 30"
                    fill="#E10600"
                    opacity="0.8"
                  />
                </svg>
              </div>

              <Image
                alt="Denis - Course Instructor"
                className="object-cover object-top"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop"
              />
            </div>

            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/30 px-4 py-2">
                  <Star className="h-4 w-4 fill-klaudium-red text-klaudium-red" />
                  <span className="text-sm font-medium text-white">Meet Your Instructor</span>
                </div>

                <a
                  aria-label="Denis on LinkedIn"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 text-white/60 transition-colors hover:border-white/40 hover:text-white"
                  href={DENIS_LINKEDIN_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <h2 className="mb-6 text-balance text-3xl font-bold text-white lg:text-4xl">
                Why You Should Learn From Denis
              </h2>

              <p className="mb-8 leading-relaxed text-white/70">
                {
                  "Denis is a vibe coding expert with 7 years in software engineering. He's built 30+ production apps with AI agents and helped over 500 learners ship real projects. Having escaped slow, complex coding himself, he now proves anyone can build scalable apps by talking clearly to AI."
                }
              </p>

              <div className="flex">
                <a className="group inline-flex items-center gap-0" href={COURSE_ENROLL_URL}>
                  <span className="rounded-l-xl bg-klaudium-red px-6 py-3.5 font-medium text-white transition-colors hover:bg-bright-red">
                    Enroll Now
                  </span>
                  <span className="rounded-r-xl border-l border-white/10 bg-ink-black p-3.5 text-white transition-colors group-hover:bg-soft-black">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
