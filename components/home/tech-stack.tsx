import { technologies } from "@/data/technologies";

const techStack = Object.values(technologies);

export function TechStack() {
  return (
    <div className="mt-16">
      <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        Technologies I Work With
      </p>

      <div className="flex flex-wrap gap-3">
        {techStack.map((tech) => (
          <span
            key={tech.id}
            className="rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}