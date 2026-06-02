import { ArrowUpRight, Star } from "lucide-react";
import { COURSE_ENROLL_URL } from "./links";

const lessons = [
  {
    title: "Conversational Coding",
    description:
      "Build apps by describing your ideas in natural language. Collaborate with an AI agent as you solve real problems and see your code come to life, instantly."
  },
  {
    title: "Business Automation and AI Apps",
    description:
      "Learn how to automate workflows, build business tools, and create production-grade apps for real-world use without traditional programming barriers."
  },
  {
    title: "Project-Based Challenges & Assessments",
    description:
      "Apply your new skills by building and deploying live projects. Complete hands-on challenges that prepare you for client work, freelancing, or launching your own product."
  },
  {
    title: "Debugging and Best Practices",
    description:
      "Master the art of debugging with AI assistants. Learn practical techniques for refining, improving, and maintaining high-quality applications."
  },
  {
    title: "Beginner-Friendly Modules",
    description:
      "Start with zero experience. Every lesson is designed to be step-by-step, so anyone can build amazing things with vibe coding and Replit."
  },
  {
    title: "Special Topics: APIs, Security, and Advanced Skills",
    description:
      "Dive into advanced features: connect to APIs, understand security best practices, audit apps for bias, and unlock powerful new skills that set you apart."
  }
];

export function CourseLessonsSection() {
  return (
    <section className="bg-black py-20 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/30 px-4 py-2 shadow-[0_0_40px_rgba(225,6,0,0.18)]">
            <Star className="h-4 w-4 fill-klaudium-red text-klaudium-red" />
            <span className="text-sm font-medium text-white">Build Real Apps Instantly</span>
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Tailored Vibe Coding
            <br />
            Lessons for Every Builder
          </h2>
        </div>

        <div>
          {lessons.map((lesson) => (
            <a
              className="group -mx-4 flex flex-col justify-between border-b border-white/10 px-4 py-8 transition-colors first:border-t hover:bg-red-950/20 lg:flex-row lg:items-center"
              href={COURSE_ENROLL_URL}
              key={lesson.title}
            >
              <div className="mb-4 lg:mb-0 lg:w-2/5">
                <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-bright-red lg:text-2xl">
                  {lesson.title}
                </h3>
              </div>

              <div className="flex items-start gap-6 lg:w-1/2">
                <p className="flex-1 leading-relaxed text-white/60">{lesson.description}</p>

                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-red-500/30 bg-white/5 text-white transition-colors group-hover:border-bright-red group-hover:bg-klaudium-red group-hover:text-white">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
