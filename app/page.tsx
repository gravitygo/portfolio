import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Skills } from "@/components/skills";
import portfolioData from "@/data/portfolio.json";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero data={portfolioData.hero} />
      <About data={portfolioData.about} />
      <Skills data={portfolioData.skills} />
      <Projects data={portfolioData.projects} />
      <Contact data={portfolioData.contact} />
    </main>
  );
}
