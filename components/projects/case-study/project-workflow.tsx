import { Bot, Database, MessageSquare, Workflow } from "lucide-react";

type Props = {
  workflow: string[];
};

const icons = [
  <MessageSquare key="form" className="size-8" />,
  <Workflow key="make" className="size-8" />,
  <Bot key="ai" className="size-8" />,
  <Database key="db" className="size-8" />,
  <MessageSquare key="slack" className="size-8" />,
];

export function ProjectWorkflow({
  workflow,
}: Props) {
  return (
    <section className="space-y-10">
      <h2 className="text-3xl font-bold">
        Workflow Architecture
      </h2>

      <ol className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {workflow.map((step, index) => (
          <li
            key={step}
            className="relative min-w-0 overflow-hidden rounded-2xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
          >
            <div className="flex items-start gap-4">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {index + 1}
              </span>

              <div className="min-w-0">
                <div className="mb-3 text-primary">
                {icons[index] ?? (
                    <Workflow className="size-7" />
                )}
                </div>

                <p className="break-words font-medium leading-6">{step}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
