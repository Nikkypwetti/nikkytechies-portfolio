import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { FadeIn } from "@/components/animations/fade-in";

const focusAreas = [
  "Revenue Operations",
  "CRM & Sales Operations",
  "Business Systems",
  "Reporting & Data Quality",
];

export function Hero() {
  return (
    <Section className="relative overflow-hidden pt-28 md:pt-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_15%_20%,color-mix(in_oklab,var(--primary)_14%,transparent),transparent_48%)]" />

      <Container>
        <div className="max-w-6xl">
          <FadeIn>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Ganiyu Basirat Olanike • Revenue Operations • CRM • Business Systems
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h1 className="max-w-6xl text-5xl font-bold tracking-[-0.045em] md:text-7xl lg:text-8xl">
              I build the systems behind clean pipelines, reliable reporting and consistent operations.
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mt-8 max-w-4xl text-xl leading-8 text-muted-foreground">
              Operations and Revenue Operations professional working across CRM,
              sales processes, project delivery, data quality, reporting and workflow
              automation — supported by 7+ years across sales account management and
              executive administration.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-6 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border bg-card px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm"
                >
                  {area}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/projects">
                <Button size="lg" className="rounded-full px-7">
                  View Featured Case Studies
                </Button>
              </Link>

              <Link href="/resume">
                <Button variant="outline" size="lg" className="rounded-full px-7">
                  View ATS Resume
                </Button>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="mt-6 text-sm font-medium text-muted-foreground">
              Lagos, Nigeria • Open to remote worldwide opportunities
            </p>
          </FadeIn>

        </div>
      </Container>
    </Section>
  );
}
