"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/animations/fade-in";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectSearch } from "@/components/projects/project-search";
import { ProjectFilter } from "@/components/projects/project-filter";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    const normalizedQuery = search.trim().toLowerCase();
    const normalizedCategory = category.toLowerCase();

    return projects.filter((project) => {
      const searchableContent = [
        project.title,
        project.description,
        project.category,
        project.type,
        project.status ?? "",
        ...(project.platforms ?? []),
        project.problem,
        project.solution,
        ...project.overview,
        ...project.architecture,
        ...project.workflow,
        ...project.results,
        ...project.metrics,
        ...project.before,
        ...project.after,
        ...project.automation.flatMap((step) => [step.title, step.description]),
        ...project.technologies.map((tech) => tech.name),
      ]
        .join(" ")
        .toLowerCase();

      const matchesCategory =
        category === "All" || searchableContent.includes(normalizedCategory);

      const matchesSearch =
        normalizedQuery.length === 0 || searchableContent.includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <main>
      <Section className="pt-28 pb-20">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Portfolio Evidence"
              title="Projects & Case Studies"
              description="Self-directed business systems projects across Revenue Operations, CRM, project delivery, reporting, data quality and workflow automation — documented from business problem through implementation and verified evidence."
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-12 space-y-6">
              <ProjectSearch value={search} onChange={setSearch} />
              <ProjectFilter selected={category} onSelect={setCategory} />
              <p className="text-sm font-medium text-muted-foreground" aria-live="polite">
                Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
              </p>
            </div>
          </FadeIn>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <FadeIn key={project.slug} delay={index * 0.08}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <FadeIn>
              <div className="mt-16 rounded-3xl border border-dashed bg-card p-12 text-center">
                <h3 className="text-2xl font-semibold">No projects found</h3>
                <p className="mt-3 text-muted-foreground">
                  Try another keyword or choose a different capability.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setCategory("All");
                  }}
                  className="mt-6 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
                >
                  Clear filters
                </button>
              </div>
            </FadeIn>
          )}
        </Container>
      </Section>
    </main>
  );
}
