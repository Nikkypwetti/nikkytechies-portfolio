import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { TechStack } from "./tech-stack";
import { FadeIn } from "@/components/animations/fade-in";

export function Hero() {
  return (
    <Section className="pt-28">
      <Container>
        <div className="max-w-4xl">
          <FadeIn>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Operations • Project Coordination • Automation
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              I Build Organized Client Operations, Project Workflows & Automation Systems
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="mt-8 max-w-3xl text-xl leading-8 text-muted-foreground">
              I design systems that help teams manage client onboarding,
              projects, tasks, documentation, follow-ups, CRM workflows and
              repetitive operations using Airtable, Notion, HubSpot, Make.com,
              n8n and AI.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/projects">
                <Button size="lg">
                  View Projects
                </Button>
              </Link>

              <Link href="/resume">
                <Button variant="outline" size="lg">
                  View Resume
                </Button>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.8}>
            <TechStack />
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}