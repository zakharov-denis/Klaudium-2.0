import { CommunitySection } from "./CommunitySection";
import { CourseLessonsSection } from "./CourseLessonsSection";
import { Footer } from "./Footer";
import { HeroSection } from "./HeroSection";
import { InstructorSection } from "./InstructorSection";
import { Navigation } from "./Navigation";
import { ResultsSection } from "./ResultsSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { VideoSection } from "./VideoSection";

export function CoursePage() {
  return (
    <main className="course-page min-h-screen bg-black font-sans text-white">
      <Navigation />
      <HeroSection />
      <VideoSection />
      <CourseLessonsSection />
      <ResultsSection />
      <InstructorSection />
      <TestimonialsSection />
      <CommunitySection />
      <Footer />
    </main>
  );
}
