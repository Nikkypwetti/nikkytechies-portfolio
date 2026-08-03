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
  return projects.filter((project) => {
    const matchesCategory =
      category === "All" ||
      project.category === category;

    const query = search.toLowerCase();

    const matchesSearch =
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.technologies.some((tech) =>
        tech.name.toLowerCase().includes(query)
      );

    return matchesCategory && matchesSearch;
  });
  }, [search, category]);
  return (
    <Section className="pt-28 pb-20">
      <Container>

        <FadeIn>
          <SectionHeading
            eyebrow="Portfolio"
            title="Projects & Case Studies"
            description="A collection of Airtable, Notion, CRM, and AI automation systems designed to eliminate manual work, improve visibility, and streamline business operations."
          />
        </FadeIn>

         <FadeIn delay={0.1}>
  <div className="mt-12 space-y-6">

    <ProjectSearch
      value={search}
      onChange={setSearch}
    />

    <ProjectFilter
      selected={category}
      onSelect={setCategory}
    />

    <p className="text-sm text-muted-foreground">
      Showing {filteredProjects.length} project
      {filteredProjects.length !== 1 ? "s" : ""}
    </p>

  </div>
</FadeIn>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
  {filteredProjects.map((project, index) => (
    <FadeIn
      key={project.slug}
      delay={index * 0.08}
    >
      <ProjectCard project={project} />
    </FadeIn>
  ))}
</div>

        {filteredProjects.length === 0 && (
    <FadeIn>
    <div className="mt-20 rounded-2xl border bg-card p-12 text-center">

      <h3 className="text-2xl font-semibold">
        No projects found
      </h3>

      <p className="mt-3 text-muted-foreground">
        Try another keyword or choose a different category.
      </p>

    </div>
  </FadeIn>
  )}

      </Container>
    </Section>
  );
};

