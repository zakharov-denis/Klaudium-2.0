import { ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import { EnrollButton } from "./EnrollButton";
import { COURSE_ENROLL_URL } from "./links";

const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black pt-16 lg:pt-20">
      <div className="mx-auto w-full max-w-[1792px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Klaudium Course"
          className="block h-auto w-full"
          height={929}
          src="/course-hero.png"
          width={1692}
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-16 lg:top-20">
        <div className="mx-auto flex min-h-[calc(100vw*0.55)] max-w-[1792px] items-center px-5 py-12 sm:min-h-[520px] sm:px-8 lg:min-h-[640px] lg:px-14">
          <div className="pointer-events-auto max-w-xl">
            <div className="mb-6 flex flex-wrap items-center gap-2">
              {["#0 to 1", "#product management", "#first-hand mentorship"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-950/30 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-red-400 shadow-[0_0_18px_rgba(225,6,0,0.15)] backdrop-blur-sm transition-colors hover:border-red-500/60 hover:text-red-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Make agents built for you,
              <span className="mt-2 block">not instead of you.</span>
            </h1>

            <p className="mb-10 max-w-lg text-balance text-lg leading-relaxed text-white/74 lg:text-xl">
              {
                "At Google, AI already generates more than 25% of new code. At Microsoft, it is up to 30%.* Design custom AI agents that support your vision, help you research, plan, build, test, and confidently launch your next project and features."
              }
            </p>

            <div className="mb-12 flex">
              <EnrollButton className="enroll-glass-button group">
                <span className="enroll-glass-label">Enroll Now</span>
                <span className="enroll-glass-arrow">
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </EnrollButton>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex -space-x-3">
                {avatars.map((avatar, index) => (
                  <div
                    className="h-10 w-10 overflow-hidden rounded-full border-2 border-black bg-soft-black"
                    key={avatar}
                  >
                    <Image
                      alt={`Student ${index + 1}`}
                      className="h-full w-full object-cover"
                      height={40}
                      src={avatar}
                      width={40}
                    />
                  </div>
                ))}
              </div>

              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      className="h-4 w-4 fill-bright-red text-bright-red"
                      key={index}
                    />
                  ))}
                  <span className="ml-1 font-semibold text-white">4.8/5</span>
                </div>
                <span className="text-sm text-white/58">500+ Satisfied Students</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
