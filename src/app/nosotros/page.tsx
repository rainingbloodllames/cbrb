import type { Metadata } from "next";
import { team } from "@/lib/content";
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
      <header className="hero-mesh rounded-[36px] p-8 text-white sm:p-10">
        <p className="text-xs font-bold text-white/75">Desde 1843 · Concepción, Biobío</p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-pretty sm:text-5xl">Nosotros</h1>
        <p className="mt-3 max-w-prose leading-relaxed text-white/85">
          En 1843 nacimos como Escuela N°2. Hoy somos colegio público, laico y bicentenario del SLEP Andalién Sur.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#0b1e44]">RBD 4564</span>
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold">San Martín 1580</span>
        </div>
      </header>

      <section className="pt-10" aria-labelledby="historia-titulo">
        <h2 id="historia-titulo" className="font-heading text-2xl font-bold">Historia</h2>
        <ol className="stagger mt-4 grid gap-3 sm:grid-cols-2">
          {HISTORIA.map((h) => (
            <li key={h.y} className="animate-enter-up ios-card p-5">
              <p className="font-heading text-2xl font-bold tabular-nums text-[#0f2a5c] dark:text-white">{h.y}</p>
              <p className="mt-1 font-heading font-bold">{h.t}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{h.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid gap-3 pt-8 sm:grid-cols-2" aria-label="Misión y sellos">
        <div className="ios-card p-6">
          <h2 className="font-heading text-xl font-bold">Misión</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Formar estudiantes íntegros, críticos y comprometidos con su comunidad, en un ambiente público, laico y de excelencia.
          </p>
        </div>
        <div className="ios-card p-6">
          <h2 className="font-heading text-xl font-bold">Sellos</h2>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
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
              <span className="text-sm text-slate-500">{m.role}</span>
              <span className="text-right text-sm font-semibold">{m.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
