type TalkingPoint = {
  question: string;
  answer: string;
};

type Props = {
  talkingPoints?: TalkingPoint[];
};

export function ProjectInterviewGuide({ talkingPoints }: Props) {
  if (!talkingPoints || talkingPoints.length === 0) return null;

  return (
    <section className="space-y-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          Interview Ready
        </p>
        <h2 className="mt-2 text-3xl font-bold">How I Explain This Project</h2>
        <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
          Concise talking points that connect the technical implementation to
          Revenue Operations, CRM governance, business systems and operational
          reliability.
        </p>
      </div>

      <div className="grid gap-5">
        {talkingPoints.map((item) => (
          <article key={item.question} className="rounded-2xl border bg-card p-6">
            <h3 className="text-lg font-semibold">{item.question}</h3>
            <p className="mt-3 leading-7 text-muted-foreground">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
