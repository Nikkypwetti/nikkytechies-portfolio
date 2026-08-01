export type Technology = {
  id: string;
  name: string;
  color: string;
};

export const technologies = {
  airtable: {
    id: "airtable",
    name: "Airtable",
    color: "#FCB400",
    category: "Database",
  },

  notion: {
    id: "notion",
    name: "Notion",
    color: "#111111",
    category: "Workflow",
  },

  hubspot: {
    id: "hubspot",
    name: "HubSpot",
    color: "#FF7A59",
    category: "CRM",
  },

  make: {
    id: "make",
    name: "Make.com",
    color: "#6D5DFB",
    category: "Automation",
  },

  n8n: {
    id: "n8n",
    name: "n8n",
    color: "#EF6C00",
    category: "Automation",
  },

  zapier: {
    id: "zapier",
    name: "Zapier",
    color: "#FF4F00",
    category: "Automation",
  },

  googleSheets: {
    id: "googleSheets",
    name: "Google Sheets",
    color: "#34A853",
    category: "Database",
  },

  claude: {
    id: "claude",
    name: "Claude API",
    color: "#A56EFF",
    category: "AI",
  },

  groq: {
    id: "groq",
    name: "Groq",
    color: "#7A5AF8",
    category: "AI",
  },

  gemini: {
    id: "gemini",
    name: "Gemini",
    color: "#4285F4",
    category: "AI",
  },

  openai: {
    id: "openai",
    name: "OpenAI API",
    color: "#10A37F",
    category: "AI",
  },

  slack: {
    id: "slack",
    name: "Slack",
    color: "#611F69",
    category: "Communication",
  },
};