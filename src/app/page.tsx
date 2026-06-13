import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import ProjectShowcase from "@/components/ProjectShowcase";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />

      <div id="work">
        {projects.map((project) => (
          <ProjectShowcase key={project.number} project={project} />
        ))}
      </div>

      <About />
      <Contact />
    </main>
  );
}
