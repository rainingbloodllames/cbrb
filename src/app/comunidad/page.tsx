import type { Metadata } from "next";
import { NewsCard } from "@/components/NewsCard";
import { SchoolGallery } from "@/components/SchoolGallery";
import { news } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Comunidad" };

export default function ComunidadPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-10 pt-6 sm:px-5">
      <header className="hero-mesh rounded-[36px] p-8 text-white sm:p-10">
        <p className="text-xs font-bold text-white/75">Vida escolar</p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-pretty sm:text-5xl">Comunidad</h1>
        <p className="mt-3 max-w-prose leading-relaxed text-white/85">
          Noticias con fuente, vida escolar y galería. Todo con crédito y enlace a la cobertura original.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <a href={site.instagram} target="_blank" rel="noreferrer" className="pressable flex min-h-[44px] items-center rounded-full bg-white px-5 text-sm font-bold text-[#0b1e44]">Instagram @colegio_brasil</a>
          <a href={site.facebook} target="_blank" rel="noreferrer" className="pressable flex min-h-[44px] items-center rounded-full bg-white/15 px-5 text-sm font-bold text-white">Facebook</a>
        </div>
      </header>

      <div className="stagger grid gap-3 pt-8 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((n, i) => (
          <div key={n.slug} className="animate-enter-up">
            <NewsCard item={n} featured={i === 0} />
          </div>
        ))}
      </div>

      <SchoolGallery headingId="galeria-titulo" />

      <section className="ios-card mt-8 p-6" aria-labelledby="calendario-titulo">
        <h2 id="calendario-titulo" className="font-heading text-xl font-bold">Calendario escolar</h2>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          Actos, reuniones y fechas oficiales. En época SAE y matrícula, revisa también{" "}
          <a href={site.saeUrl} target="_blank" rel="noreferrer" className="font-bold text-[#0066cc] underline underline-offset-4">admisión SAE</a>.
        </p>
      </section>
    </div>
  );
}
