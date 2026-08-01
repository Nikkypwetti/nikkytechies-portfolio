import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params }: Props) {
  const project = projects.find(
    (p) => p.slug === params.slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <span className="text-primary font-medium">
        {project.type}
      </span>

      <h1 className="mt-4 text-5xl font-bold">
        {project.title}
      </h1>

      <p className="mt-6 text-lg text-muted-foreground">
        {project.description}
      </p>

      <section className="mt-16 space-y-10">
        <div>
          <h2 className="text-2xl font-semibold">
            Problem
          </h2>

          <p className="mt-4">
            {project.problem}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            Solution
          </h2>

          <p className="mt-4">
            {project.solution}
          </p>
        </div>

        <section className="mt-16">
  <h2 className="text-2xl font-semibold">
    Workflow Architecture
  </h2>

  <ol className="mt-6 space-y-4">
    {project.architecture.map((step) => (
      <li
        key={step}
        className="rounded-lg border p-4"
      >
        {step}
      </li>
    ))}
  </ol>
</section>

        <div>
          <h2 className="text-2xl font-semibold">
            Results
          </h2>

          <ul className="mt-4 space-y-2">
            {project.results.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}