import type { Metadata } from "next";

import { ResumeHero } from "@/components/resume/resume-hero";
import { ResumeSummary } from "@/components/resume/resume-summary";
import { ResumeSkills } from "@/components/resume/resume-skills";
import { ResumeProjects } from "@/components/resume/resume-projects";
import { ResumeEducation } from "@/components/resume/resume-education";
import { ResumeCTA } from "@/components/resume/resume-cta";
import { ApplicationNote } from "@/components/resume/application-note";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Ganiyu Basirat Olanike — Operations & Project Coordination professional with experience in client onboarding, CRM systems, documentation, task management and workflow automation.",
};

export default function ResumePage() {
  return (
    <main className="pt-24">
      <ResumeHero />
      <ResumeSummary />
      <ResumeSkills />
      <ResumeProjects />
      <ResumeEducation />
      <ApplicationNote />
      <ResumeCTA />
    </main>
  );
}