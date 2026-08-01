import {
  ArrowRight,
  Bot,
  Database,
  MessageSquare,
  Workflow,
} from "lucide-react";

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

      <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
        {workflow.map((step, index) => (
          <div
            key={step}
            className="flex items-center"
          >
            <div className="flex w-52 flex-col items-center rounded-2xl border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                {icons[index] ?? (
                  <Workflow className="size-8" />
                )}
              </div>

              <p className="font-medium">
                {step}
              </p>
            </div>

            {index < workflow.length - 1 && (
              <ArrowRight className="mx-6 hidden text-primary lg:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}