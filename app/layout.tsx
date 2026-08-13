import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/layout/theme-provider";
import { siteConfig } from "@/data/site";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://nikkytechies-portfolio.vercel.app"
  ),

  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [
  "Operations",
  "Revenue Operations",
  "RevOps",
  "Project Coordination",
  "Project Coordinator",
  "Operations Coordinator",
  "CRM Administration",
  "CRM Operations",
  "Sales Operations",
  "Business Systems",
  "HubSpot",
  "Airtable",
  "Notion",
  "ClickUp",
  "Make.com",
  "n8n",
  "Workflow Automation",
  "Ganiyu Basirat Olanike",
],

  authors: [
  {
    name: "Ganiyu Basirat Olanike",
  },
],

creator: "Ganiyu Basirat Olanike",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nikkytechies-portfolio.vercel.app",
    siteName: "Nikky Techies",
    title: siteConfig.name,
    description: siteConfig.description,

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ganiyu Basirat Olanike — Operations, RevOps and Business Systems Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          <main>{children}</main>

          <Footer />

          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}