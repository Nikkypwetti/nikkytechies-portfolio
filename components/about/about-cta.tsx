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
              Let's Work Together
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Ready to Automate Your Business?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Whether you need an Airtable CRM, a Notion workspace,
              or an AI-powered automation workflow, I'd love to help
              build a solution that saves time and scales with your business.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg">
                  Contact Me
                </Button>
              </Link>

              <Link href="/projects">
                <Button
                  variant="outline"
                  size="lg"
                >
                  View Projects
                </Button>
              </Link>
            </div>

          </div>
        </FadeIn>

      </Container>
    </Section>
  );
}