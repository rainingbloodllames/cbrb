import type { Metadata } from "next";
import { NewsCard } from "@/components/NewsCard";
import { Reveal } from "@/components/Reveal";
import { SchoolGallery } from "@/components/SchoolGallery";
import { news } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Comunidad" };

export default function ComunidadPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6">
      <header className="hero-mesh relative overflow-hidden rounded-2xl p-8 text-white sm:rounded-3xl sm:p-10">
        <p className="text-[13px] font-bold  text-white/90">Vida escolar</p>
        <h1 className="mt-3 font-heading text-[42px] font-bold leading-[0.95] tracking-tight text-white sm:text-[56px]">Comunidad</h1>
        <p className="mt-4 max-w-prose text-[17px] font-medium leading-relaxed text-slate-100">
          Noticias con fuente, vida escolar y galería. Todo con crédito y enlace a la cobertura original.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={site.instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-[48px] items-center rounded-full bg-white px-6 text-sm font-bold text-[#0b1e44]">Instagram @colegio_brasil</a>
          <a href={site.facebook} target="_blank" rel="noreferrer" className="inline-flex min-h-[48px] items-center rounded-full bg-white/10 px-6 text-sm font-bold text-white ring-1 ring-white/20">Facebook</a>
        </div>
      </header>

      <div className="grid gap-3 pt-8 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((n, i) => (
          <Reveal key={n.slug} delay={Math.min(i, 5) * 40}>
            <NewsCard item={n} featured={i === 0} />
          </Reveal>
        ))}
      </div>

      <SchoolGallery headingId="galeria-titulo" />

      <section className="ios-card mt-8 p-6" aria-labelledby="calendario-titulo">
        <h2 id="calendario-titulo" className="font-heading text-xl font-bold">Calendario escolar</h2>
        <p className="mt-1.5 text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-200">
          Actos, reuniones y fechas oficiales. En época SAE y matrícula, revisa también{" "}
          <a href={site.saeUrl} target="_blank" rel="noreferrer" className="font-bold text-[#0066cc] underline underline-offset-4">admisión SAE</a>.
        </p>
      </section>
    </div>
  );
}
