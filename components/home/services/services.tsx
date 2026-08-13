import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

import { services } from "@/data/services";
import { ServiceCard } from "./service-card";

export function Services() {
  return (
    <Section id="services">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Core Capabilities"
            title="Operations, RevOps & Business Systems"
            description="I support organized client delivery, CRM operations, project coordination, reporting, documentation and workflow automation."
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn
              key={service.title}
              delay={index * 0.08}
            >
              <ServiceCard {...service} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}