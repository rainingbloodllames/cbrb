import type { Metadata } from "next";
import Image from "next/image";
import { NewsCard } from "@/components/NewsCard";
import { Reveal } from "@/components/Reveal";
import { SchoolGallery } from "@/components/SchoolGallery";
import { Band, PageIntro } from "@/components/Section";
import { news } from "@/lib/content";
import { getFacebookPosts } from "@/lib/facebook";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Comunidad" };

export default async function ComunidadPage() {
  const fbPosts = await getFacebookPosts(9);
  const featured = fbPosts[0] ?? news[0];
  const restCurated = fbPosts.length ? news : news.slice(1);
  const rest = [...fbPosts.slice(1), ...restCurated];
  return (
    <div className="pb-20">
      <PageIntro
        kicker="Vida escolar"
        title="Comunidad"
        lead="Noticias con fuente y galería. La vida diaria — Congreso Explora, Admisión 2027 y actos — también está en Instagram @colegio_brasil y Facebook."
        wide
      >
        <p className="flex flex-wrap gap-5 text-base font-semibold">
          <a href={site.instagram} target="_blank" rel="noreferrer" className="link">Instagram @colegio_brasil</a>
          <a href={site.facebook} target="_blank" rel="noreferrer" className="link">Facebook</a>
        </p>
      </PageIntro>

      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <a href={site.instagram} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-2xl shadow-[0_4px_24px_rgba(11,30,68,0.12)] ring-1 ring-slate-900/5">
          <Image
            src="/fotos/858319963_1611210279846921_4356698573315485571_n.jpeg"
            alt="Banner del Colegio Bicentenario República del Brasil con escudo, Instagram @colegio_brasil y lema Desarrollando habilidades para lograr la Excelencia Académica"
            width={1671}
            height={941}
            quality={90}
            sizes="(min-width: 1024px) 1200px, 90vw"
            className="aspect-[1671/941] w-full object-cover"
          />
        </a>
        <p className="t-meta mt-2">Banner oficial · Síguenos en @colegio_brasil</p>
      </div>

      <Band tone="band" labelledBy="noticias-titulo" wide>

        <h2 id="noticias-titulo" className="mt-2 font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">Noticias con fuente</h2>
        <div className="mt-8">
          <Reveal>
            <NewsCard item={featured} featured />
          </Reveal>
        </div>
        <div className="grid gap-x-6 gap-y-10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((n, i) => (
            <Reveal key={n.slug} delay={Math.min(i, 5) * 40}>
              <NewsCard item={n} />
            </Reveal>
          ))}
        </div>
      </Band>

      <SchoolGallery headingId="galeria-titulo" />

      {/* Calendario como ficha con definición */}
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <section aria-labelledby="calendario-titulo" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.08)] sm:p-8">
          <h2 id="calendario-titulo" className="font-heading text-2xl font-semibold text-slate-900">Calendario escolar</h2>
          <p className="mt-2 max-w-prose text-base leading-relaxed text-slate-600">
            Actos, reuniones y fechas oficiales. En época SAE y matrícula, revisa también{" "}
            <a href={site.saeUrl} target="_blank" rel="noreferrer" className="link-inline">admisión SAE</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
