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
    "Airtable",
    "Notion",
    "Make.com",
    "n8n",
    "HubSpot",
    "Zapier",
    "Workflow Automation",
    "CRM",
    "AI Automation",
    "Business Systems",
    "Portfolio",
  ],

  authors: [
    {
      name: "Nikky Techies",
    },
  ],

  creator: "Nikky Techies",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nikkytechies.com",
    siteName: "Nikky Techies",

    title: siteConfig.name,

    description: siteConfig.description,

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nikky Techies Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: siteConfig.name,

    description: siteConfig.description,

    images: ["/og-image.png"],
  },

  icons: {
  icon: [
    { url: "/favicon.ico" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
  ],
  apple: "/apple-touch-icon.png",
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
      <body className="min-h-screen bg-background font-sans antialiased">
  <ThemeProvider>
    <Navbar />

    <main>{children}</main>

    <Footer />
    <SpeedInsights />
  </ThemeProvider>
</body>
    </html>
  );
}