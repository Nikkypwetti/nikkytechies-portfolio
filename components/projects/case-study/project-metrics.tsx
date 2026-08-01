type Props = {
  metrics: string[];
};

export function ProjectMetrics({ metrics }: Props) {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold">
        Key Outcomes
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {metrics.map((metric) => (
          <div
            key={metric}
            className="rounded-2xl border bg-card p-8 text-center shadow-sm"
          >
            <p className="font-semibold">{metric}</p>
          </div>
        ))}
      </div>
    </section>
  );
}