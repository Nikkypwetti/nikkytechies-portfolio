import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { education } from "@/data/education";

export function ResumeEducation() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Credentials
            </p>
            <h2 className="text-3xl font-bold">
              Education, Certifications & Learning
            </h2>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {education.map((item, index) => (
            <FadeIn key={`${item.school}-${item.degree}`} delay={index * 0.06}>
              <div className="h-full rounded-2xl border bg-card p-8">
                <h3 className="text-xl font-semibold">{item.degree}</h3>

                <p className="mt-2 text-primary">{item.school}</p>

                <p className="mt-1 text-sm text-muted-foreground">
                  {item.period}
                </p>

                <p className="mt-4 leading-7 text-muted-foreground">
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
