import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about/about";
import { FeaturedProjects } from "@/components/home/featured-projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
    </>
  );
}