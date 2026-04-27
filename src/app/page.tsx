import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ContactForm } from "@/components/ContactForm";
import { ExpertiseExplorer } from "@/components/ExpertiseExplorer";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <ProjectGallery />
      <ContactForm />
      <Footer />
      <ExpertiseExplorer />
    </main>
  );
}
