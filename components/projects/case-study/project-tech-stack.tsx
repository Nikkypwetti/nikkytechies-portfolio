import { TechBadge } from "../tech-badge";
import type { Technology } from "@/types/technology";
import { FadeIn } from "@/components/animations/fade-in";

type Props = {
  technologies: Technology[];
};

export function ProjectTechStack({
  technologies,
}: Props) {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold">
        Technology Stack
      </h2>

      {technologies.map((tech, index) => (
  <FadeIn
    key={tech.id}
    delay={index * 0.04}
  >
    <TechBadge tech={tech} />
  </FadeIn>
))}
    </section>
  );
}