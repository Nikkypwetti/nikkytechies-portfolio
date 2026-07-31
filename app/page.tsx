import { Navbar } from "@/components/layout/navbar";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <Section className="pt-28">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Business Systems Builder
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Building Airtable, Notion & AI Systems That Eliminate Manual Work
            </h1>

            <p className="mt-8 text-xl text-muted-foreground">
              I design CRM systems, AI-powered workflows, and business
              automations using Airtable, Notion, HubSpot, Make.com, and n8n.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/projects">
                <Button size="lg">
                  View Projects
                </Button>
              </Link>

              <Link href="/resume">
                <Button
                   variant="outline"
                   size="lg"
             >
                   Download Resume
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}