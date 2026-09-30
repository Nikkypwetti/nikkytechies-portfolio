type RecruiterSummary = {
  headline: string;
  valueProposition: string;
  ownership: string[];
  liveProof: string[];
  roleFit?: string[];
};

type Props = {
  summary?: RecruiterSummary;
};

export function ProjectRecruiterSummary({ summary }: Props) {
  if (!summary) return null;

  return (
    <section className="space-y-8 rounded-3xl border bg-card p-7 md:p-10">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          Recruiter Summary
        </p>
        <h2 className="max-w-4xl text-3xl font-bold">{summary.headline}</h2>
        <p className="max-w-4xl text-lg leading-8 text-muted-foreground">
          {summary.valueProposition}
        </p>
      </div>

      {summary.roleFit && summary.roleFit.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {summary.roleFit.map((role) => (
            <span
              key={role}
              className="rounded-full border bg-background px-3 py-1.5 text-sm font-medium"
            >
              {role}
            </span>
          ))}
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border bg-background p-6">
          <h3 className="text-xl font-semibold">What I Owned</h3>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            {summary.ownership.map((item) => (
              <li key={item} className="flex gap-3 leading-7">
                <span className="mt-1 font-bold text-primary">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border bg-background p-6">
          <h3 className="text-xl font-semibold">Live Proof</h3>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            {summary.liveProof.map((item) => (
              <li key={item} className="flex gap-3 leading-7">
                <span className="mt-1 font-bold text-primary">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
