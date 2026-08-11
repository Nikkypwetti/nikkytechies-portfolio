const operationsSkills = [
  "Project Coordination",
  "Client Onboarding",
  "Task & Deadline Tracking",
  "SOP Documentation",
  "Client Communication",
  "Meeting Follow-up",
  "CRM Operations",
  "Process Improvement",
];

export function OperationsSkills() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Operations Skills
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Supporting Organized Client & Project Delivery
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Alongside automation, I build and manage structured workflows
            for client onboarding, project coordination, task tracking,
            documentation, follow-ups and day-to-day operations.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {operationsSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}