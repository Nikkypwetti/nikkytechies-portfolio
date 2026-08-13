import {
  Search,
  ListChecks,
  Workflow,
  TrendingUp,
} from "lucide-react";

import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

const process = [
  {
    title: "Understand",
    description:
      "Review the current workflow, responsibilities, deadlines, tools and business requirements.",
    icon: Search,
  },
  {
    title: "Organize",
    description:
      "Structure tasks, processes, CRM data, documentation and ownership so the work is easier to manage.",
    icon: ListChecks,
  },
  {
    title: "Implement",
    description:
      "Build or configure the required operational system using tools such as Airtable, Notion, HubSpot, ClickUp, Make.com or n8n.",
    icon: Workflow,
  },
  {
    title: "Improve",
    description:
      "Review results, identify bottlenecks and refine the process, reporting or automation as the workflow develops.",
    icon: TrendingUp,
  },
];

export function AboutProcess() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              My Approach
            </p>

            <h2 className="text-4xl font-bold">
              How I Approach Operations & Business Systems
            </h2>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {process.map((step, index) => {
            const Icon = step.icon;

            return (
              <FadeIn
                key={step.title}
                delay={index * 0.08}
              >
                <div className="rounded-2xl border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl">
                  <Icon className="mb-6 size-10 text-primary" />

                  <h3 className="text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-muted-foreground">
                    {step.description}
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