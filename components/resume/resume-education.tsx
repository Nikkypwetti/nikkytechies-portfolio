import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";

import { education } from "@/data/education";

export function ResumeEducation() {
  return (
    <Section>
      <Container>

        <FadeIn>
          <h2 className="text-3xl font-bold">
            Education & Learning
          </h2>
        </FadeIn>

        <div className="mt-10 space-y-6">
          {education.map((item, index) => (
            <FadeIn
              key={item.school}
              delay={index * 0.08}
            >
              <div className="rounded-2xl border bg-card p-8">

                <h3 className="text-xl font-semibold">
                  {item.degree}
                </h3>

                <p className="mt-2 text-primary">
                  {item.school}
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  {item.period}
                </p>

                <p className="mt-4 text-muted-foreground">
                  {item.description}
                </p>

              </div>
            </FadeIn>
          ))}
        </div>

      </Container>
    </Section>
  );
}