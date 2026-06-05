import { ArrowUpRight, Layers, Monitor, Smartphone, Star, Users } from "lucide-react";
import Image from "next/image";
import { EnrollButton } from "./EnrollButton";
import { COURSE_ENROLL_URL } from "./links";

const stats = [
  {
    value: "50+",
    label: "Students shipped working apps on Replit",
    icon: Monitor
  },
  {
    value: "4.9/5",
    label: "Course rating based on real student reviews",
    icon: Users
  },
  {
    value: "90%",
    label: "Builders continue after their first project",
    icon: Layers
  },
  {
    value: "50",
    label: "Apps built and deployed worldwide",
    icon: Smartphone
  }
];

const avatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
];

export function ResultsSection() {
  return (
    <section className="course-red-grid py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/30 px-4 py-2">
            <Star className="h-4 w-4 fill-bright-red text-bright-red" />
            <span className="text-sm font-medium text-white">Results</span>
          </div>

          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Helping Every Learner
            <br />
            Achieve Their Goals
          </h2>

          <p className="text-lg text-white/60">
            Real progress, real outcomes - because your growth matters.
          </p>
        </div>

        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {stats.map((stat) => (
            <div
              className="flex items-start justify-between rounded-2xl border border-red-500/20 bg-white/[0.04] p-6 shadow-[0_0_60px_rgba(225,6,0,0.08)] backdrop-blur-sm"
              key={stat.label}
            >
              <div>
                <div className="mb-2 text-4xl font-bold text-white lg:text-5xl">{stat.value}</div>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
              <stat.icon className="h-8 w-8 text-bright-red/70" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-red-500/20 bg-white/[0.04] p-6">
            <div className="relative aspect-[4/3]">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg aria-hidden="true" className="h-full w-full opacity-30" viewBox="0 0 400 200">
                  <pattern height="8" id="course-results-dots" patternUnits="userSpaceOnUse" width="8" x="0" y="0">
                    <circle cx="2" cy="2" fill="#E10600" r="1" />
                  </pattern>
                  <ellipse cx="200" cy="100" fill="url(#course-results-dots)" rx="180" ry="90" />
                </svg>
              </div>

              {[
                "left-1/4 top-1/4",
                "right-1/3 top-1/3",
                "bottom-1/3 left-1/3",
                "right-1/4 top-1/2"
              ].map((position, index) => (
                <div className={`absolute ${position}`} key={position}>
                  <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-white shadow-lg">
                    <Image
                      alt="Student"
                      className="object-cover"
                      height={32}
                      src={avatars[index]}
                      width={32}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-end justify-between gap-6">
              <div>
                <div className="text-4xl font-bold text-white">500+</div>
                <p className="text-sm text-white/60">
                  Learners trusted worldwide for real app results.
                </p>
              </div>
              <div className="flex -space-x-2">
                {avatars.map((avatar) => (
                  <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-white" key={avatar}>
                    <Image alt="Student" className="object-cover" height={32} src={avatar} width={32} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              alt="Students learning together"
              className="object-cover"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <div className="text-4xl font-bold text-white">98%</div>
              <p className="text-sm text-white/70">Students continue after their first lesson.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
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
    </section>
  );
}
