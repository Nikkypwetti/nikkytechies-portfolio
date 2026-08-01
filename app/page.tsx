import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { FeaturedProjects } from "@/components/home/featured-projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProjects />
    </>
  );
}