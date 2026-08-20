import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";

export function AboutCTA() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="rounded-3xl border bg-card px-8 py-16 text-center shadow-sm">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Next Opportunity
            </p>
            <h2 className="text-4xl font-bold md:text-5xl">
              Open to Remote Worldwide Operations & RevOps Roles
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              I am interested in roles across Operations, Revenue Operations,
              Sales Operations, CRM, Business Systems, Project Coordination,
              Customer Operations and AI-enabled workflow improvement.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/resume"><Button size="lg">View Resume</Button></Link>
              <Link href="/projects"><Button variant="outline" size="lg">View Case Studies</Button></Link>
              <Link href="/contact"><Button variant="outline" size="lg">Contact Me</Button></Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
