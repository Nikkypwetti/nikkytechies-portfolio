import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/layout/theme-provider";
import { siteConfig } from "@/data/site";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const socialPreviewImage =
  "https://nikkytechies-portfolio.vercel.app/og-revops-operations.png?v=20260906";

export const metadata: Metadata = {
  metadataBase: new URL("https://nikkytechies-portfolio.vercel.app"),
  title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: [
    "Ganiyu Basirat Olanike",
    "Operations",
    "Business Operations",
    "Revenue Operations",
    "RevOps",
    "Sales Operations",
    "Revenue Systems",
    "CRM Administration",
    "CRM Operations",
    "Customer Operations",
    "Account Management",
    "Project Coordination",
    "Business Systems",
    "Client Onboarding",
    "Pipeline Management",
    "CRM Data Quality",
    "Reporting",
    "Dashboards",
    "Process Improvement",
    "SOP Documentation",
    "Executive Support",
    "HubSpot",
    "Airtable",
    "Notion",
    "ClickUp",
    "Make.com",
    "n8n",
    "Workflow Automation",
    "AI Workflow Automation",
  ],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: socialPreviewImage,
        width: 1731,
        height: 909,
        alt: "Ganiyu Basirat Olanike — Operations, RevOps and Business Systems Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [socialPreviewImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
