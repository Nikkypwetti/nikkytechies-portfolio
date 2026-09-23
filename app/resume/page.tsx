import type { Metadata } from "next";

import { ResumeHero } from "@/components/resume/resume-hero";
import { ResumeSummary } from "@/components/resume/resume-summary";
import { ResumeImpact } from "@/components/resume/resume-impact";
import { ResumeExperience } from "@/components/resume/resume-experience";
import { ResumeSkills } from "@/components/resume/resume-skills";
import { ResumeTechnical } from "@/components/resume/resume-technical";
import { ResumeProjects } from "@/components/resume/resume-projects";
import { ResumeEducation } from "@/components/resume/resume-education";
import { ResumeCTA } from "@/components/resume/resume-cta";

export const metadata: Metadata = {
  title: "Master Resume",
  description:
    "Master resume of Ganiyu Basirat Olanike — Operations, Revenue Operations and Business Systems professional with Salesforce and HubSpot CRM, Revenue Systems, Sales Operations, Power BI forecasting, SQL/data analysis, project coordination and workflow automation experience.",
};

export default function ResumePage() {
  return (
    <main className="pt-24">
      <ResumeHero />
      <ResumeSummary />
      <ResumeImpact />
      <ResumeExperience />
      <ResumeSkills />
      <ResumeProjects />
      <ResumeTechnical />
      <ResumeEducation />
      <ResumeCTA />
    </main>
  );
}
