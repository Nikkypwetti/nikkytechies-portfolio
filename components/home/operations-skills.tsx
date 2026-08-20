const operationsSkills = [
  "Revenue Operations",
  "Sales Operations",
  "CRM Administration",
  "Pipeline Management",
  "Account Management",
  "Customer Operations",
  "Project Coordination",
  "Client Onboarding",
  "Task & Deadline Tracking",
  "Executive Operations",
  "Reporting & Dashboards",
  "CRM Data Quality",
  "SOP Documentation",
  "Process Improvement",
  "Workflow Automation",
];

export function OperationsSkills() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-10">
        <div className="max-w-4xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Business & Revenue Operations Skills
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Supporting the full path from customer data to project delivery
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            I can support the operational work behind sales, CRM, customers,
            projects and delivery — from clean records and follow-up to
            reporting, documentation, task coordination and automation.
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
