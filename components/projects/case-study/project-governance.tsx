type GovernanceItem = {
  title: string;
  description: string;
};

type Props = {
  governance?: GovernanceItem[];
};

export function ProjectGovernance({ governance }: Props) {
  if (!governance || governance.length === 0) return null;

  return (
    <section className="space-y-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          Revenue Systems Governance
        </p>
        <h2 className="mt-2 text-3xl font-bold">
          Systems Governance & GTM Controls
        </h2>
        <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
          Business requirements translated into explicit decision rules, controls,
          exception paths, testing evidence and user-facing operating guidance.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {governance.map((item) => (
          <article key={item.title} className="rounded-2xl border bg-card p-6">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-3 leading-7 text-muted-foreground">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
