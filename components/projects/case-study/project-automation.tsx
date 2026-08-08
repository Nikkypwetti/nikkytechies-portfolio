import {
  ArrowRight,
  FileSpreadsheet,
  Bot,
  Database,
  Bell,
  Mail,
  FolderKanban,
  FileText,
  Users,
} from "lucide-react";

type AutomationStep = {
  title: string;
  description: string;
  icon:
    | "form"
    | "sheet"
    | "bot"
    | "database"
    | "crm"
    | "workspace"
    | "slack"
    | "email";
};

type Props = {
  automation: AutomationStep[];
};

const icons = {
  form: FileText,
  sheet: FileSpreadsheet,
  bot: Bot,
  database: Database,
  crm: Users,
  workspace: FolderKanban,
  slack: Bell,
  email: Mail,
};

export function ProjectAutomation({
  automation,
}: Props) {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          Automation Flow
        </h2>

        <p className="mt-3 max-w-3xl text-muted-foreground">
          This automation shows how data moves through the system
          from the first trigger until the final notification.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {automation.map((step, index) => {
          const Icon = icons[step.icon];

          return (
            <div
              key={`${step.title}-${step.icon}-${index}`}
              className="flex items-center gap-4"
            >
              <div className="w-48 rounded-2xl border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl">
                <Icon className="mx-auto mb-4 size-8 text-primary" />

                <h3 className="font-semibold">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>

              {index !== automation.length - 1 && (
                <ArrowRight className="hidden text-muted-foreground lg:block" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}