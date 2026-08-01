import { Hero } from "@/components/home/hero";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Services } from "@/components/home/services/services";

export default function Home() {
  return (
    <>
      <Hero />

      <FeaturedProjects />

      <Services />
    </>
  );
}