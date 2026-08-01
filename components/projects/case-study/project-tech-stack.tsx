import { TechBadge } from "../tech-badge";
import type { Technology } from "@/types/technology";

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

      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <TechBadge
            key={tech.id}
            tech={tech}
          />
        ))}
      </div>
    </section>
  );
}