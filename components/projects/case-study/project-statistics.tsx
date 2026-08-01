"use client";

import CountUp from "react-countup";

type Props = {
  stats: {
    value: number;
    suffix?: string;
    label: string;
  }[];
};

export function ProjectStatistics({ stats }: Props) {
  return (
    <section className="space-y-10">
      <h2 className="text-3xl font-bold">
        Project Impact
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border bg-card p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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
    </section>
  );
}