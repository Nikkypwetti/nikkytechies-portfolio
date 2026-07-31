import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { TechStack } from "./tech-stack";

export function Hero() {
  return (
    <Section className="pt-28">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Business Systems Builder
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Building Airtable, Notion & AI Systems That Eliminate Manual Work
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-muted-foreground">
            I design CRM systems, AI-powered workflows, and scalable business
            operations using Airtable, Notion, HubSpot, Make.com, n8n, Zapier,
            and modern AI APIs.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/projects">
              <Button size="lg">View Projects</Button>
            </Link>

            <Link href="/resume">
              <Button variant="outline" size="lg">
                Download Resume
              </Button>
            </Link>
          </div>

          <TechStack />
        </div>
      </Container>
    </Section>
  );
}