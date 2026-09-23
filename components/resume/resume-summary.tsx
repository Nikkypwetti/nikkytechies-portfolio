import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { masterResume } from "@/data/master-resume";

export function ResumeSummary() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="max-w-5xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Profile
            </p>
            <h2 className="text-3xl font-bold">Professional Summary</h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {masterResume.summary}
            </p>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
