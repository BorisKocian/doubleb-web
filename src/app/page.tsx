import { BackgroundCanvas } from "@/components/BackgroundCanvas";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";

export default function Home() {
  return (
    <div className="page-root">
      <BackgroundCanvas />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}
