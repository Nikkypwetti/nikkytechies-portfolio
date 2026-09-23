import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { masterResume } from "@/data/master-resume";

export function ResumeTechnical() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Toolkit
            </p>

            <h2 className="text-3xl font-bold">Technical & Business Systems</h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              CRM, reporting, operations, automation and supporting technical
              tools represented in the master resume.
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {masterResume.technicalGroups.map((group, index) => (
            <FadeIn key={group.category} delay={index * 0.06}>
              <div className="h-full rounded-2xl border bg-card p-7">
                <h3 className="text-xl font-semibold">{group.category}</h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border bg-background px-3 py-1.5 text-sm text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
