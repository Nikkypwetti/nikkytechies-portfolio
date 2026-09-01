type Props = {
  architecture: string[];
};

export function ProjectArchitecture({
  architecture,
}: Props) {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold">
        Implementation Steps
      </h2>

      <div className="space-y-4">
        {architecture.map((step, index) => (
          <div
            key={step}
            className="flex min-w-0 items-start gap-4"
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
              {index + 1}
            </div>

            <div className="min-w-0 flex-1 break-words rounded-xl border bg-card p-5 leading-7">
              {step}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
