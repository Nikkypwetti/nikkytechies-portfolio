import {
  SiAirtable,
  SiNotion,
  SiHubspot,
  SiZapier,
  SiSlack,
  SiGooglesheets,
  SiJavascript,
  SiOpenai,
} from "@icons-pack/react-simple-icons";

type Props = {
  id: string;
};

export function TechnologyIcon({ id }: Props) {
  switch (id) {
    case "airtable":
      return <SiAirtable size={16} />;

    case "notion":
      return <SiNotion size={16} />;

    case "hubspot":
      return <SiHubspot size={16} />;

    case "zapier":
      return <SiZapier size={16} />;

    case "slack":
      return <SiSlack size={16} />;

    case "googleSheets":
      return <SiGooglesheets size={16} />;

    case "javascript":
      return <SiJavascript size={16} />;

    case "openai":
      return <SiOpenai size={16} />;

    default:
      return null;
  }
}