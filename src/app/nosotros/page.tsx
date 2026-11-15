import type { Metadata } from "next";
import Image from "next/image";
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
    <div className="mx-auto max-w-4xl px-4 pb-16 pt-8 sm:px-6">
      <header className="hero-mesh relative overflow-hidden rounded-2xl text-white sm:rounded-3xl">
        <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-2">
          <div className="min-w-0">
            <p className="text-[13px] font-bold  text-white/90">Desde 1843 · Concepción, Biobío</p>
            <h1 className="mt-3 font-heading text-[42px] font-bold leading-[0.95] tracking-tight text-white sm:text-[56px]">Nosotros</h1>
            <p className="mt-4 max-w-prose text-[17px] font-medium leading-relaxed text-slate-100">
              En 1843 nacimos como Escuela N°2. Hoy somos colegio público, laico y bicentenario del SLEP Andalién Sur.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#0b1e44]">RBD 4564</span>
              <span className="rounded-full bg-slate-700 px-3 py-1 text-xs font-bold text-white">San Martín 1580</span>
              <span className="rounded-full bg-slate-700 px-3 py-1 text-xs font-bold text-white">183 años</span>
            </div>
          </div>
          <figure className="min-w-0 overflow-hidden rounded-[24px]">
            <Image
              src="/fotos/bandera-brasil.jpg"
              alt="Niña con polera del colegio sosteniendo la bandera de Brasil en el aula"
              width={1200}
              height={800}
              sizes="(min-width: 1024px) 45vw, 90vw"
              priority
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="bg-[#0b1e44] px-4 py-2 text-xs font-semibold text-white">
              Foto oficial: vitrina SAE · MINEDUC. Día a día en Instagram @colegio_brasil.
            </figcaption>
          </figure>
        </div>
      </header>

      <section className="pt-10" aria-labelledby="historia-titulo">
        <h2 id="historia-titulo" className="font-heading text-2xl font-bold text-slate-900">Historia</h2>
        <ol className="mt-4 grid gap-3 sm:grid-cols-2">
          {HISTORIA.map((h, i) => (
            <Reveal key={h.y} delay={i * 40}>
              <div className="card-lift ios-card h-full p-5">
                <p className="font-heading text-2xl font-bold tabular-nums text-[#0b1e44]">{h.y}</p>
                <p className="mt-1 font-heading font-bold text-slate-900">{h.t}</p>
                <p className="mt-1 text-sm font-medium leading-relaxed text-slate-700">{h.d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="pt-10" aria-labelledby="ambiente-titulo">
        <h2 id="ambiente-titulo" className="font-heading text-[28px] font-extrabold tracking-tight text-slate-900">Ambiente escolar</h2>
        <p className="mt-2 text-[15px] font-medium leading-relaxed text-slate-600 dark:text-slate-300">Fotos oficiales de la vitrina SAE: desfile, parvularia, acto cívico y bandera de Brasil.</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2" aria-label="Imágenes de ambiente escolar">
          {gallery.slice(0, 4).map((g, i) => (
            <Reveal key={g.title} delay={i * 40}>
              <figure className="group card-lift overflow-hidden rounded-[24px] bg-white dark:bg-[#1c1c1e]">
                <Image
                  src={g.src}
                  alt={g.alt}
                  width={1200}
                  height={800}
                  sizes="(min-width: 640px) 50vw, 90vw"
                  className="media-zoom aspect-[4/3] w-full object-cover"
                />
                <figcaption className="px-4 py-3">
                  <p className="font-heading text-sm font-bold text-slate-900">{g.title}</p>
                  <p className="mt-0.5 text-xs font-medium text-slate-700">{g.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="grid gap-3 pt-8 sm:grid-cols-2" aria-label="Misión y sellos">
        <div className="ios-card p-6">
          <h2 className="font-heading text-xl font-bold text-slate-900">Misión</h2>
          <p className="mt-2 text-sm font-medium leading-relaxed text-slate-700">
            Formar estudiantes íntegros, críticos y comprometidos con su comunidad, en un ambiente público, laico y de excelencia.
          </p>
        </div>
        <div className="ios-card p-6">
          <h2 className="font-heading text-xl font-bold text-slate-900">Sellos</h2>
          <ul className="mt-2 space-y-1.5 text-sm font-semibold text-slate-700">
            <li>Educación pública de calidad</li>
            <li>Convivencia y respeto</li>
            <li>Tradición bicentenaria penquista</li>
          </ul>
        </div>
      </section>

      <section className="ios-card mt-8 p-6" aria-labelledby="equipo-titulo">
        <h2 id="equipo-titulo" className="font-heading text-2xl font-bold text-slate-900">Equipo directivo</h2>
        <ul className="mt-4">
          {team.map((m) => (
            <li key={m.role} className="flex min-h-[52px] items-center justify-between gap-4 border-b border-slate-200 py-3 last:border-0 ">
              <span className="text-sm font-semibold text-slate-700">{m.role}</span>
              <span className="text-right text-sm font-bold text-slate-900">{m.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
