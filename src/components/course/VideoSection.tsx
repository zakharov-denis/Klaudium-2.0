import { COURSE_VIDEO_URL } from "./links";

export function VideoSection() {
  return (
    <section className="bg-black py-12 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-red-500/20 shadow-[0_0_80px_rgba(225,6,0,0.14)]">
          <div className="aspect-video bg-soft-black">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
              src={COURSE_VIDEO_URL}
              title="Out now: safe vibe coding on Replit"
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-klaudium-red via-bright-red to-klaudium-red" />
        </div>
      </div>
    </section>
  );
}
