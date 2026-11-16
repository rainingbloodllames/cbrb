import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Band, PageIntro, RuleList, SectionHead } from "@/components/Section";

export const metadata: Metadata = { title: "Historia" };

const HITOS = [
  { y: "1843", t: "Primera escuela", d: "Decreto de Manuel Bulnes. Lincoyán con Víctor Lamas. Madera, director y preceptores." },
  { y: "Siglo XIX", t: "Primeras Letras", d: "Lectura, elementos de aritmética y catecismo. Angol con Chacabuco y Cochrane con Serrano." },
  { y: "1939", t: "Rengo 65", d: "El terremoto derriba el adobe de la Escuela de Niñas N.º 17. Nos mudamos a Rengo 65, ex-Intendencia." },
  { y: "1948", t: "Pabellón de Brasil", d: "Guardadores del Pabellón de la República del Brasil, tras la OEA (1948). Una escuela por nación hermana." },
  { y: "1975", t: "Escuela D-519", d: "Se unen Brasil (Hombres N.º 2), Bolivia (Mujeres N.º 4) y la Nocturna de Hombres (Adultos N.º 7)." },
  { y: "1988", t: "Colegio completo", d: "Llega la enseñanza media. Continuidad de parvularia a IV medio, acreditada por resolución." },
  { y: "2010", t: "Terremoto", d: "Rengo 65 dañada. Dos años en Castellón con Chacabuco (ex Alemán); en 2012 volvemos a Rengo." },
  { y: "2012", t: "Bicentenario", d: "Uno de los 60 Liceos Bicentenario. Nuevo curso por nivel desde 7° básico." },
  { y: "2013", t: "Sede actual", d: "Galvarino con San Martín y Roosevelt, entre el Cerro de la Virgen y el Parque Ecuador." },
  { y: "Hoy", t: "SLEP Andalién Sur", d: "Parvularia a IV medio. PIE, estudiantes sordos y decenas de estudiantes migrantes." },
];

export default function HistoriaPage() {
  return (
    <div className="pb-20">
      <PageIntro
        kicker="Nosotros · Historia"
        title="1843 a hoy"
        lead="De la Escuela N.° 2 de Primeras Letras al colegio de San Martín 1580. Cada camada dejó una sala distinta."
      >
        <nav aria-label="Secciones de Nosotros" className="flex flex-wrap gap-2">
          <Link href="/nosotros" className="inline-flex h-10 items-center rounded-lg border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-900 transition-colors duration-150 hover:border-slate-900">
            Nosotros
          </Link>
          <span className="inline-flex h-10 items-center rounded-lg bg-[#0b1e44] px-4 text-sm font-semibold text-white" aria-current="page">Historia</span>
          <a href="https://www.instagram.com/colegio_brasil/" target="_blank" rel="noreferrer" className="inline-flex h-10 items-center rounded-lg border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-900 transition-colors duration-150 hover:border-slate-900">
            Fotos en Instagram
          </a>
        </nav>
      </PageIntro>

      <Band tone="navy" labelledBy="origen">
        <SectionHead titleId="origen" title="Tres escuelas en una" lead="La historia no empieza en un solo patio: suma tres escuelas y un pabellón hermano." light />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl bg-white p-6 text-slate-900">
            <p className="t-meta">Escuela de Hombres N.º 2</p>
            <h3 className="t-h3 mt-2">Brasil</h3>
            <p className="t-body mt-2">La Escuela N.º 2 de Primeras Letras: lectura, aritmética y catecismo desde 1843.</p>
          </article>
          <article className="rounded-2xl bg-white p-6 text-slate-900">
            <p className="t-meta">Escuela de Mujeres N.º 4</p>
            <h3 className="t-h3 mt-2">Bolivia</h3>
            <p className="t-body mt-2">La Escuela de Niñas N.º 17 funcionaba en la tarde, hasta el terremoto de 1939.</p>
          </article>
          <article className="rounded-2xl bg-white p-6 text-slate-900">
            <p className="t-meta">Escuela de Adultos N.º 7</p>
            <h3 className="t-h3 mt-2">Nocturna de Hombres</h3>
            <p className="t-body mt-2">Adultos en la noche. En los años 70 las tres se juntan como D-519 (1975).</p>
          </article>
        </div>
        <div className="mt-6 flex gap-1.5" aria-hidden="true">
          <span className="h-1.5 w-16 rounded-full bg-[#009739]" />
          <span className="h-1.5 w-16 rounded-full bg-[#ffd60a]" />
          <span className="h-1.5 w-16 rounded-full bg-[#0066cc]" />
          <span className="h-1.5 w-16 rounded-full bg-[#c81e1e]" />
        </div>
      </Band>

      <Band tone="white" labelledBy="linea-tiempo">
        <SectionHead titleId="linea-tiempo" title="Línea de tiempo" lead="Fuentes: reseña histórica del PEI 2025–2027 y Diario Concepción (30 oct 2022)." />
        <RuleList label="Línea de tiempo del colegio">
          {HITOS.map((h, i) => (
            <Reveal key={h.y} delay={i * 40}>
              <li className="grid gap-2 border-b border-slate-200 py-5 last:border-b-0 sm:grid-cols-[140px_1fr] sm:items-baseline sm:gap-6">
                <p className="font-heading text-2xl font-semibold tabular-nums text-slate-900">{h.y}</p>
                <div>
                  <h3 className="t-name">{h.t}</h3>
                  <p className="t-body mt-1">{h.d}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </RuleList>
      </Band>

      <Band tone="band" labelledBy="memoria">
        <SectionHead titleId="memoria" title="Memoria en fotos" lead="Archivo SAE: docentes y estudiantes del siglo XX." />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <figure>
            <div className="overflow-hidden rounded-xl bg-white shadow-[0_4px_24px_rgba(11,30,68,0.1)] ring-1 ring-slate-900/5">
              <Image src="/fotos/docentes-historicos.jpg" alt="Docentes del colegio en el siglo XX" width={512} height={384} quality={90} sizes="(min-width: 640px) 400px, 90vw" className="aspect-[4/3] w-full object-cover" />
            </div>
            <figcaption className="t-meta mt-2">Docentes, siglo XX</figcaption>
          </figure>
          <figure>
            <div className="overflow-hidden rounded-xl bg-white shadow-[0_4px_24px_rgba(11,30,68,0.1)] ring-1 ring-slate-900/5">
              <Image src="/fotos/estudiantes-historicos.jpg" alt="Estudiantes del colegio en blanco y negro en el siglo XX" width={512} height={384} quality={90} sizes="(min-width: 640px) 400px, 90vw" className="aspect-[4/3] w-full object-cover" />
            </div>
            <figcaption className="t-meta mt-2">Estudiantes, siglo XX</figcaption>
          </figure>
        </div>
        <div className="sheet mt-8 p-6 sm:p-8">
          <h3 className="t-h3">El entorno que nos forma</h3>
          <p className="t-body mt-2">Cerro de la Virgen, Hospital Guillermo Grant, Colegio España, Universidad de Concepción y Parque Ecuador. Los terrenos de la UdeC se usan para actividades culturales, ambientales, científicas y deportivas.</p>
          <p className="t-small mt-3">En 2022 éramos 48 cursos con 1.470 estudiantes de prekínder a IV medio científico-humanista, con PIE, estudiantes sordos y decenas de estudiantes migrantes.</p>
        </div>
      </Band>
    </div>
  );
}
