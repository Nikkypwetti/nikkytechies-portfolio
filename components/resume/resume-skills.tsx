import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { masterResume } from "@/data/master-resume";

export function ResumeSkills() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Competencies
            </p>

            <h2 className="text-3xl font-bold">Core Competencies</h2>

            <p className="mt-4 text-muted-foreground">
              The same recruiter-facing competencies used in my current master resume.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mt-10 flex flex-wrap gap-3">
            {masterResume.coreCompetencies.map((skill) => (
              <span
                key={skill}
                className="rounded-full border bg-card px-4 py-2 text-sm font-medium text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
