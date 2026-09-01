import {
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

      <ol className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {automation.map((step, index) => {
          const Icon = icons[step.icon];

          return (
            <li
              key={`${step.title}-${step.icon}-${index}`}
              className="min-w-0 rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {index + 1}
                </span>

                <div className="min-w-0">
                  <Icon className="mb-4 size-8 text-primary" />

                  <h3 className="break-words font-semibold">{step.title}</h3>

                  <p className="mt-2 break-words text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
