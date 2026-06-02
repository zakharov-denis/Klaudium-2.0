import { ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import { COMMUNITY_URL } from "./links";

export function CommunitySection() {
  return (
    <section className="bg-black py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-red-500/20 bg-white/[0.04] shadow-[0_0_80px_rgba(225,6,0,0.08)]">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-red-500/30 bg-red-950/30 px-4 py-2">
                <Star className="h-4 w-4 fill-klaudium-red text-klaudium-red" />
                <span className="text-sm font-medium text-white">Community & Tools</span>
              </div>

              <h2 className="mb-6 text-balance text-3xl font-bold text-white lg:text-4xl">
                Join Vibe Coding Community Everything Here
              </h2>

              <p className="mb-8 leading-relaxed text-white/70">
                Explore our thriving builder community, AI agent templates, and essential tools
                designed to accelerate your vibe coding journey. Build anywhere, collaborate with
                peers, get expert feedback, and keep shipping at your own pace.
              </p>

              <div className="flex">
                <a
                  className="group inline-flex items-center gap-0"
                  href={COMMUNITY_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="rounded-l-xl bg-klaudium-red px-6 py-3.5 font-medium text-white transition-colors hover:bg-bright-red">
                    Explore Community
                  </span>
                  <span className="rounded-r-xl border-l border-white/10 bg-ink-black p-3.5 text-white transition-colors group-hover:bg-soft-black">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] min-h-[300px] lg:aspect-auto">
              <Image
                alt="Community of developers working together"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
