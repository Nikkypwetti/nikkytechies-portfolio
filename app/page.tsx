import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about/about";
import { OperationsSkills } from "@/components/home/operations-skills";
import { Services } from "@/components/home/services/services";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Contact } from "@/components/home/contact/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <OperationsSkills />
      <Services />
      <FeaturedProjects />
      <Contact />
    </main>
  );
}
