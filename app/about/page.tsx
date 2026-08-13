import type { Metadata } from "next";

import { AboutHero } from "@/components/about/about-hero";
import { AboutStory } from "@/components/about/about-story";
import { AboutSkills } from "@/components/about/about-skills";
import { AboutTechStack } from "@/components/about/about-tech-stack";
import { AboutProcess } from "@/components/about/about-process";
import { AboutCTA } from "@/components/about/about-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Ganiyu Basirat Olanike and my work across operations, revenue operations, project coordination, CRM systems, client onboarding, documentation and workflow automation.",
};

export default function AboutPage() {
  return (
    <main className="pt-24">
      <AboutHero />
      <AboutStory />
      <AboutSkills />
      <AboutTechStack />
      <AboutProcess />
      <AboutCTA />
    </main>
  );
}