import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { EnhancedSkillsSection } from "@/components/EnhancedSkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ArticlesSection } from "@/components/ArticlesSection";
import { AchievementsGame } from "@/components/AchievementsGame";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="relative">
      <CustomCursor />
      <ParticleBackground />
      <ScrollProgress />
      <Navigation />
      <Hero />
      <AboutSection />
      <EnhancedSkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ArticlesSection />
      <AchievementsGame />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}