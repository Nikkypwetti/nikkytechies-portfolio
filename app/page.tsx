import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about/about";
import { Services } from "@/components/home/services/services";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Contact } from "@/components/home/contact/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FeaturedProjects />
      <Contact />
    </>
  );
}