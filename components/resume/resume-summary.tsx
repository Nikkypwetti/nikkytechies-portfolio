import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { profile } from "@/data/profile";

export function ResumeSummary() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold">
              Professional Summary
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {profile.summary}
            </p>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}