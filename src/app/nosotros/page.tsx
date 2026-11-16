import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Band, PageIntro, RuleList, SectionHead } from "@/components/Section";
import { gallery, team } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Nosotros" };

const HISTORIA = [
  { y: "1843", t: "Escuela N°2", d: "Lincoyán con Víctor Lamas. Madera, director y preceptores." },
  { y: "1975", t: "Escuela D-519", d: "Se unen Brasil, Bolivia y la Nocturna. Tres historias en una." },
  { y: "1988", t: "Colegio República del Brasil", d: "Se suma la enseñanza media. Parvularia a IV medio." },
  { y: "2012", t: "Bicentenario", d: "Ingresa al Programa de Liceos Bicentenario. Sede actual desde 2013." },
  { y: "Hoy", t: "SLEP Andalién Sur", d: `Parvularia a IV medio, San Martín 1580. Director ${site.director}.` },
];

export default function NosotrosPage() {
  return (
    <div className="pb-20">
      <PageIntro
        kicker="SLEP Andalién Sur"
        title="Nosotros"
        lead="Nacimos en 1843 como Escuela N°2. Hoy dependemos del SLEP Andalién Sur y seguimos en San Martín 1580."
        meta="RBD 4564 · San Martín 1580 · 183 años"
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <figure className="mt-8">
          <div className="max-w-[512px] overflow-hidden rounded-xl bg-white shadow-[0_1px_2px_rgba(15,23,42,0.08)] ring-1 ring-slate-900/5">
            <Image
              src="/fotos/bandera-brasil.jpg"
              alt="Niña con polera del colegio sosteniendo la bandera de Brasil en el aula"
              width={512}
              height={384}
              quality={90}
              sizes="512px"
              priority
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <figcaption className="pt-3 font-mono text-xs text-slate-500">
            Foto SAE. Día a día en @colegio_brasil.
          </figcaption>
        </figure>
      </div>

      <Band tone="band" labelledBy="historia-titulo">
        <SectionHead titleId="historia-titulo" title="Historia" />
        <RuleList label="Hitos del colegio">
          {HISTORIA.map((h, i) => (
            <Reveal key={h.y} delay={i * 40}>
              <li className="grid gap-2 border-b border-slate-300 py-5 sm:grid-cols-[140px_200px_1fr] sm:items-baseline sm:gap-6">
                <p className="font-heading text-2xl font-semibold tabular-nums text-slate-900">{h.y}</p>
                <p className="font-heading text-lg font-semibold text-slate-900">{h.t}</p>
                <p className="text-base leading-relaxed text-slate-600">{h.d}</p>
              </li>
            </Reveal>
          ))}
        </RuleList>
      </Band>

      <Band tone="white" labelledBy="ambiente-titulo">
        <SectionHead titleId="ambiente-titulo" title="Ambiente escolar" lead="Desfile, parvularia, acto cívico y bandera de Brasil." />
        <ul className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2" aria-label="Imágenes de ambiente escolar">
          {gallery.slice(0, 4).map((g, i) => (
            <Reveal key={g.title} delay={i * 40}>
              <figure>
                <div className="max-w-[512px] overflow-hidden rounded-xl bg-white shadow-[0_1px_2px_rgba(15,23,42,0.08)] ring-1 ring-slate-900/5">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    width={512}
                    height={384}
                    quality={90}
                    sizes="(min-width: 640px) 400px, 90vw"
                    className="media-zoom aspect-[4/3] w-full object-cover"
                  />
                </div>
                <figcaption className="pt-3">
                  <p className="font-heading text-sm font-semibold text-slate-900">{g.title} <span className="ml-2 font-mono text-xs font-normal text-slate-500">{g.credit}</span></p>
                  <p className="mt-1 text-sm text-slate-600">{g.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </Band>

      <Band tone="white" labelledBy="uniforme-titulo">
        <SectionHead titleId="uniforme-titulo" title="Uniforme escolar 2026" lead="Dos conjuntos según el nivel. Consulta el afiche oficial antes de comprar." />
        <div className="mt-8 grid gap-10 lg:grid-cols-[480px_1fr] lg:items-start">
          <figure>
            <div className="overflow-hidden rounded-xl bg-white shadow-[0_4px_24px_rgba(11,30,68,0.1)] ring-1 ring-slate-900/5">
              <Image
                src="/fotos/images.jpeg"
                alt="Afiche Uniformes escolares 2026: conjunto deportivo azul para Prekínder a 6° básico y camisa con corbata y pantalón para 7° básico a IV medio"
                width={605}
                height={507}
                quality={90}
                sizes="480px"
                className="aspect-[605/507] w-full object-cover"
              />
            </div>
            <figcaption className="t-meta mt-2">Afiche del colegio · Uniformes 2026</figcaption>
          </figure>
          <ul className="space-y-4">
            <li className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.08)]">
              <h3 className="t-h3">Prekínder a 6° básico</h3>
              <p className="t-body mt-2">Buzo deportivo azul con franjas amarillas, polera y pantalón del conjunto.</p>
            </li>
            <li className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.08)]">
              <h3 className="t-h3">7° básico a IV medio</h3>
              <p className="t-body mt-2">Camisa, corbata y pantalón gris para diario. Consulta el afiche completo para medidas y venta.</p>
            </li>
          </ul>
        </div>
      </Band>

      <Band tone="band" labelledBy="mision-titulo">
        <SectionHead titleId="mision-titulo" title="Misión y visión" lead="PEI 2025–2027, en palabras del colegio." />
        <div className="mt-8 grid gap-10 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.08)] sm:p-8">
            <h3 className="t-h3">Misión</h3>
            <blockquote className="t-body mt-3 border-l-4 border-[#0b1e44] pl-4">
              Somos una comunidad educativa que otorga una educación centrada en desarrollar habilidades y competencias para la educación superior, con formación valórica, ciudadana y académica, compromiso ambiental, pensamiento crítico y proyecto de vida.
            </blockquote>
            <h3 className="t-h3 mt-6">Visión</h3>
            <blockquote className="t-body mt-3 border-l-4 border-[#0b1e44] pl-4">
              Otorgar una educación integral con formación valórica y cívica para el proyecto de vida, basada en el prestigio institucional.
            </blockquote>
            <p className="t-meta mt-4">PEI 2025–2027</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.08)] sm:p-8">
            <h3 className="t-h3">Sellos</h3>
            <ul className="mt-3 space-y-3">
              <li className="t-body flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0b1e44]" aria-hidden="true" />Talentos artísticos, deportivos y culturales</li>
              <li className="t-body flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0b1e44]" aria-hidden="true" />Habilidades para continuar a la educación superior</li>
              <li className="t-body flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0b1e44]" aria-hidden="true" />Ciudadanos responsables en lo personal, familiar, social y ambiental</li>
            </ul>
            <h3 className="t-h3 mt-6">Valores</h3>
            <p className="t-body mt-2">Compromiso, empatía, excelencia y respeto.</p>
            <p className="t-meta mt-4">RIE / PEI</p>
          </div>
        </div>
      </Band>

      <Band tone="white" labelledBy="convivencia-titulo">
        <SectionHead titleId="convivencia-titulo" title="Cómo convivimos" lead="Del RIE: convivencia positiva, preventiva y mediadora. La hacemos todos." />
        <RuleList label="Cuatro marcas de convivencia">
          <li className="grid gap-1 border-b border-slate-200 py-4 sm:grid-cols-[240px_1fr] sm:items-baseline sm:gap-6">
            <span className="t-name">Trato respetuoso</span>
            <span className="t-body">Confianza, verdad y justicia. Cuidar al otro como persona con dignidad y derechos.</span>
          </li>
          <li className="grid gap-1 border-b border-slate-200 py-4 sm:grid-cols-[240px_1fr] sm:items-baseline sm:gap-6">
            <span className="t-name">Inclusión y diversidad</span>
            <span className="t-body">Reconocer identidades distintas como riqueza, no como obstáculo.</span>
          </li>
          <li className="grid gap-1 border-b border-slate-200 py-4 sm:grid-cols-[240px_1fr] sm:items-baseline sm:gap-6">
            <span className="t-name">Participación democrática</span>
            <span className="t-body">Pertenecer importa: cada uno aporta según su rol, con derechos y responsabilidades.</span>
          </li>
          <li className="grid gap-1 py-4 sm:grid-cols-[240px_1fr] sm:items-baseline sm:gap-6">
            <span className="t-name">Diálogo para resolver</span>
            <span className="t-body">Cuando hay desacuerdo, resolvemos conversando, no con violencia.</span>
          </li>
        </RuleList>
        <p className="t-small mt-4">El RIE se entrega en la matrícula («acuso recibo y tomo conocimiento»). Respaldo: Ley 21.040 y Política Nacional de Convivencia.</p>
      </Band>

      <Band tone="white" labelledBy="equipo-titulo">
        <SectionHead titleId="equipo-titulo" title="Equipo directivo" lead="Correos institucionales (SLEP Andalién Sur). Para matrícula usa SAE." />
        <RuleList label="Equipo directivo y correos">
          {[...team, { role: "Secretaría general", name: "Colegio", email: "brasil@andaliensur.cl" }].map((m) => (
            <li key={m.email} className="grid gap-1 border-b border-slate-300 py-4 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6">
              <span>
                <span className="block text-sm text-slate-500">{m.role}</span>
                <span className="block text-base font-semibold text-slate-900">{m.name}</span>
              </span>
              <a href={`mailto:${m.email}`} className="link-mail">{m.email}</a>
            </li>
          ))}
        </RuleList>
      </Band>
    </div>
  );
}
