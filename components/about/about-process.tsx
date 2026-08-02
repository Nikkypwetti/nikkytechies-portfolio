import {
  Search,
  PencilRuler,
  Workflow,
  Rocket,
} from "lucide-react";

import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

const process = [
  {
    title: "Discover",
    description:
      "Understand the current workflow, identify bottlenecks, and define business goals.",
    icon: Search,
  },
  {
    title: "Design",
    description:
      "Plan a scalable system architecture that connects the right tools and automations.",
    icon: PencilRuler,
  },
  {
    title: "Build",
    description:
      "Develop workflows using Airtable, Notion, Make.com, n8n, AI services, and APIs.",
    icon: Workflow,
  },
  {
    title: "Optimize",
    description:
      "Test, refine, and improve the automation for reliability, performance, and growth.",
    icon: Rocket,
  },
];

export function AboutProcess() {
  return (
    <Section>
      <Container>

        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              My Process
            </p>

            <h2 className="text-4xl font-bold">
              How I Build Automation Systems
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