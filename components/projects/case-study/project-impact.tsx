"use client";

import CountUp from "react-countup";

type Props = {
  stats: {
    value: number;
    suffix?: string;
    label: string;
  }[];

  metrics: string[];
};

export function ProjectImpact({
  stats,
  metrics,
}: Props) {
  return (
    <section className="space-y-10">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold">
          Project Impact
        </h2>

        <p className="text-muted-foreground">
          The measurable business improvements achieved
          after implementing the automation workflow.
        </p>
      </div>

      {/* Statistics */}

      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-5xl font-bold text-primary">
              <CountUp
                end={stat.value}
                duration={2}
              />

              {stat.suffix}
            </div>

            <p className="mt-3 text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Key Metrics */}

      <div className="rounded-2xl border bg-card p-8">
        <h3 className="mb-6 text-xl font-semibold">
          Key Business Outcomes
        </h3>

        <div className="grid gap-4 md:grid-cols-2">
          {metrics.map((metric) => (
            <div
              key={metric}
              className="flex items-center gap-3 rounded-lg border p-4"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                ✓
              </div>

              <p>{metric}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}