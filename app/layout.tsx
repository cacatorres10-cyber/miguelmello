import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { site } from "@/content/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.seo.url),
  title: site.seo.title,
  description: site.seo.description,
  keywords: [...site.seo.keywords],
  authors: [{ name: site.profile.fullName }],
  creator: site.profile.fullName,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.seo.url,
    siteName: site.seo.title,
    title: site.seo.title,
    description: site.seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // O cartão é sempre escuro — a classe `dark` fica fixa no <html>.
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} bg-neutral-950 font-sans`}>
        {children}
      </body>
    </html>
  );
}
