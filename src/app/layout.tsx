import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SiteEffects } from "@/components/SiteEffects";
import "./globals.css";

const siteUrl = process.env.SITE_URL || "https://ingridhovsepian.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Ingrid Hovsepian | Neurologia", template: "%s | Ingrid Hovsepian" },
  description: "Conteúdos sobre neurologia, saúde cerebral e prevenção explicados com clareza e baseados em ciência.",
  openGraph: { type: "website", locale: "pt_BR", siteName: "Ingrid Hovsepian" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;1,6..72,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <SiteEffects />
      </body>
    </html>
  );
}
