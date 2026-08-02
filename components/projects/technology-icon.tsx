import {
  Database,
  Workflow,
  Bot,
  Sheet,
  MessageSquare,
  BrainCircuit,
  Mail,
} from "lucide-react";



type Props = {
  id: string;
};

export function TechnologyIcon({ id }: Props) {
  switch (id) {
    case "airtable":
      return <Database className="h-4 w-4 text-amber-500" />;

    case "notion":
      return <Database className="h-4 w-4" />;

    case "hubspot":
      return <Workflow className="h-4 w-4 text-orange-500" />;

    case "make":
      return <Workflow className="h-4 w-4 text-blue-500" />;

    case "n8n":
      return <Workflow className="h-4 w-4 text-orange-600" />;

    case "zapier":
      return <Workflow className="h-4 w-4 text-orange-500" />;

    case "googleSheets":
      return <Sheet className="h-4 w-4 text-green-500" />;

    case "groq":
      return <BrainCircuit className="h-4 w-4 text-purple-500" />;

    case "claude":
      return <Bot className="h-4 w-4" />;

    case "gemini":
      return <Bot className="h-4 w-4 text-blue-500" />;

    case "openai":
      return <Bot className="h-4 w-4 text-green-500" />;

    case "slack":
      return <MessageSquare className="h-4 w-4 text-pink-500" />;

    case "gmail":
      return <Mail className="h-4 w-4 text-red-500" />;

    default:
      return null;
  }
}