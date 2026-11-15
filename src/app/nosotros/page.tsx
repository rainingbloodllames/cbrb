import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { gallery, team } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Nosotros" };

const HISTORIA = [
  { y: "1843", t: "Escuela N°2", d: "Fundación en Concepción, en el corazón del Biobío." },
  { y: "Siglo XX", t: "Crecimiento", d: "Escuela pública central. Formación de generaciones penquistas." },
  { y: "Bicentenario", t: "Sello Bicentenario", d: "Excelencia, infraestructura renovada y comunidad activa." },
  { y: "2026", t: "SLEP Andalién Sur", d: `Parvularia a IV Medio, San Martín 1580. Director ${site.director}.` },
];

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-10 pt-6 sm:px-5">
      <header className="hero-mesh overflow-hidden rounded-[36px] text-white">
        <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-2">
          <div className="min-w-0">
            <p className="text-xs font-bold text-white/85">Desde 1843 · Concepción, Biobío</p>
            <h1 className="mt-2 font-heading text-4xl font-bold text-pretty sm:text-5xl">Nosotros</h1>
            <p className="mt-3 max-w-prose leading-relaxed text-white/95">
              En 1843 nacimos como Escuela N°2. Hoy somos colegio público, laico y bicentenario del SLEP Andalién Sur.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#0b1e44]">RBD 4564</span>
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold">San Martín 1580</span>
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold">183 años</span>
            </div>
          </div>
          <figure className="min-w-0 overflow-hidden rounded-[24px]">
            <img
              src="/fotos/bandera-brasil.jpg"
              alt="Niña con polera del colegio sosteniendo la bandera de Brasil en el aula"
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="bg-white/10 px-4 py-2 text-[11px] text-white/95">
              Foto oficial: vitrina SAE · MINEDUC. Día a día en Instagram @colegio_brasil.
            </figcaption>
          </figure>
        </div>
      </header>

      <section className="pt-10" aria-labelledby="historia-titulo">
        <h2 id="historia-titulo" className="font-heading text-2xl font-bold">Historia</h2>
        <ol className="mt-4 grid gap-3 sm:grid-cols-2">
          {HISTORIA.map((h, i) => (
            <Reveal key={h.y} delay={i * 40}>
              <div className="card-lift ios-card h-full p-5">
                <p className="font-heading text-2xl font-bold tabular-nums text-[#0f2a5c] dark:text-white">{h.y}</p>
                <p className="mt-1 font-heading font-bold">{h.t}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-400">{h.d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="pt-10" aria-labelledby="ambiente-titulo">
        <h2 id="ambiente-titulo" className="font-heading text-2xl font-bold">Ambiente escolar</h2>
        <p className="mt-1.5 text-sm text-slate-700 dark:text-slate-400">Fotos oficiales de la vitrina SAE: desfile, parvularia, acto cívico y bandera de Brasil.</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2" aria-label="Imágenes de ambiente escolar">
          {gallery.slice(0, 4).map((g, i) => (
            <Reveal key={g.title} delay={i * 40}>
              <figure className="group card-lift overflow-hidden rounded-[24px] bg-white dark:bg-[#1c1c1e]">
                <img
                  src={g.src}
                  alt={g.alt}
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="media-zoom aspect-[4/3] w-full object-cover"
                />
                <figcaption className="px-4 py-3">
                  <p className="font-heading text-sm font-bold">{g.title}</p>
                  <p className="mt-0.5 text-xs text-slate-700 dark:text-slate-400">{g.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="grid gap-3 pt-8 sm:grid-cols-2" aria-label="Misión y sellos">
        <div className="ios-card p-6">
          <h2 className="font-heading text-xl font-bold">Misión</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-400">
            Formar estudiantes íntegros, críticos y comprometidos con su comunidad, en un ambiente público, laico y de excelencia.
          </p>
        </div>
        <div className="ios-card p-6">
          <h2 className="font-heading text-xl font-bold">Sellos</h2>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-700 dark:text-slate-400">
            <li>Educación pública de calidad</li>
            <li>Convivencia y respeto</li>
            <li>Tradición bicentenaria penquista</li>
          </ul>
        </div>
      </section>

      <section className="ios-card mt-8 p-6" aria-labelledby="equipo-titulo">
        <h2 id="equipo-titulo" className="font-heading text-2xl font-bold">Equipo directivo</h2>
        <ul className="mt-4">
          {team.map((m) => (
            <li key={m.role} className="flex min-h-[52px] items-center justify-between gap-4 border-b border-slate-100 py-3 last:border-0 dark:border-slate-800">
              <span className="text-sm text-slate-700">{m.role}</span>
              <span className="text-right text-sm font-semibold">{m.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
