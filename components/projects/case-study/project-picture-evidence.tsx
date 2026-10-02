import Image from "next/image";

type PictureEvidenceItem = {
  image: string;
  title: string;
  description: string;
};

type Props = {
  evidence?: PictureEvidenceItem[];
};

export function ProjectPictureEvidence({ evidence }: Props) {
  if (!evidence || evidence.length === 0) return null;

  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          Picture Evidence
        </p>
        <h2 className="text-3xl font-bold">Implementation evidence</h2>
        <p className="max-w-4xl text-lg leading-8 text-muted-foreground">
          Actual implementation screenshots from the validated GrowAgency workflow,
          kept separate from the written evidence map so each visual is traceable
          to a concrete CRM, handoff or delivery outcome.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {evidence.map((item) => (
          <figure key={item.image} className="overflow-hidden rounded-2xl border bg-card">
            <div className="border-b bg-muted/20">
              <Image
                src={item.image}
                alt={item.title}
                width={1600}
                height={1000}
                className="h-auto w-full object-contain"
              />
            </div>
            <figcaption className="space-y-2 p-5">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="leading-7 text-muted-foreground">{item.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
