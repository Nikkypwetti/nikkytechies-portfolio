import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

export function AboutStory() {
  return (
    <Section>
      <Container>

        <FadeIn>
          <div className="max-w-5xl">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              My Story
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              From Manual Processes to Intelligent Business Systems
            </h2>

          </div>
        </FadeIn>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">

          <FadeIn delay={0.15}>
            <div className="space-y-6 text-lg leading-8 text-muted-foreground">

              <p>
                I enjoy solving business problems by designing systems that
                automate repetitive work and keep teams organized. My focus is
                on building workflows that are reliable, scalable, and easy to
                maintain.
              </p>

              <p>
                Using tools like Airtable, Notion, Make.com, n8n, AI models,
                and modern APIs, I create solutions that connect different
                platforms into one seamless workflow. Instead of switching
                between spreadsheets, emails, and disconnected apps,
                businesses can manage everything from a single system.
              </p>

            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="space-y-6 text-lg leading-8 text-muted-foreground">

              <p>
                Every project begins by understanding how work currently flows,
                identifying repetitive tasks, and designing an automation that
                saves time while improving accuracy.
              </p>

              <p>
                Whether it's an AI-powered CRM, a client onboarding workflow,
                or an automated meeting assistant, my goal is always the same:
                help businesses spend less time on manual operations and more
                time serving their customers.
              </p>

            </div>
          </FadeIn>

        </div>

      </Container>
    </Section>
  );
}