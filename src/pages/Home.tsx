import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Technologies from "./Technologies";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <AboutMe />
      <Technologies />
      <ContactSection />
    </>
  );
}
