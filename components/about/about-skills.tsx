import {
  Bot,
  Database,
  Workflow,
  BrainCircuit,
  LayoutDashboard,
  Boxes,
} from "lucide-react";

import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

const skills = [
  {
    title: "Automation Systems",
    description:
      "Designing workflows that eliminate repetitive tasks and connect business tools.",
    icon: Workflow,
  },
  {
    title: "CRM Development",
    description:
      "Building Airtable-based CRM systems for sales, operations, and project management.",
    icon: Database,
  },
  {
    title: "AI Integrations",
    description:
      "Using AI to qualify leads, summarize meetings, generate content, and automate decisions.",
    icon: BrainCircuit,
  },
  {
    title: "Notion Workspaces",
    description:
      "Creating structured workspaces for documentation, projects, and knowledge management.",
    icon: LayoutDashboard,
  },
  {
    title: "Business Systems",
    description:
      "Combining multiple tools into one centralized operating system.",
    icon: Boxes,
  },
  {
  title: "Workflow Optimization",
  description:
    "Building end-to-end automations with Make.com, n8n, and Zapier to connect business applications.",
  icon: Bot,
},
];

export function AboutSkills() {
  return (
    <Section>
      <Container>

        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Core Skills
            </p>

            <h2 className="text-4xl font-bold">
              What I Build
            </h2>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <FadeIn
                key={skill.title}
                delay={index * 0.08}
              >
                <div className="rounded-2xl border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl">

                  <Icon className="mb-6 size-10 text-primary" />

                  <h3 className="text-xl font-semibold">
                    {skill.title}
                  </h3>

                  <p className="mt-4 text-muted-foreground">
                    {skill.description}
                  </p>

                </div>
              </FadeIn>
            );
          })}
        </div>

      </Container>
    </Section>
  );
}