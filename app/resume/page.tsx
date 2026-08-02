import type { Metadata } from "next";

import { ResumeHero } from "@/components/resume/resume-hero";
import { ResumeSummary } from "@/components/resume/resume-summary";
import { ResumeSkills } from "@/components/resume/resume-skills";
import { ResumeProjects } from "@/components/resume/resume-projects";
import { ResumeEducation } from "@/components/resume/resume-education";
import { ResumeCTA } from "@/components/resume/resume-cta";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Nikky Techies — Automation Systems Builder specializing in Airtable, Notion, Make.com, n8n and AI workflows.",
};

export default function ResumePage() {
  return (
    <main className="pt-24">
      <ResumeHero />
      <ResumeSummary />
      <ResumeSkills />
      <ResumeProjects />
      <ResumeEducation />
      <ResumeCTA />
    </main>
  );
}