import type { Metadata } from "next";
import { Lexend, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} · Concepción`,
    template: `%s | ${site.name}`,
  },
  description:
    "Colegio Bicentenario República del Brasil, Concepción. Educación pública de excelencia desde 1843. Parvularia a 4° Medio. Admisión SAE, transparencia, comunidad.",
  openGraph: {
    title: site.name,
    description: site.tagline,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.tagline,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${jakarta.variable} ${lexend.variable} h-full antialiased`}>
      <head>
        <meta name="theme-color" content="#0f2a5c" />
      </head>
      <body className="flex min-h-full flex-col">
        <a href="#contenido" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[#0f2a5c] focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-white">
          Saltar al contenido
        </a>
        <SiteHeader />
        <main id="contenido" className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
