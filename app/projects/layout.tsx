import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ProjectScrollManager } from "@/components/projects/project-scroll-manager";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Explore self-directed Operations, RevOps, CRM, client onboarding, project delivery and AI workflow case studies by Ganiyu Basirat Olanike.",
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ProjectScrollManager />
      {children}
    </>
  );
}
