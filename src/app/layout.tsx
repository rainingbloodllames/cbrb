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
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${jakarta.variable} ${lexend.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
