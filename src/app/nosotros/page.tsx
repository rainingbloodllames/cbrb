import type { Metadata } from "next";
import { team } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Nosotros" };

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 py-12">
      <header>
        <p className="text-sm font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300">Desde 1843</p>
        <h1 className="mt-2 text-4xl font-bold">Nosotros</h1>
        <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
          El Colegio Bicentenario República del Brasil nace en 1843 como Escuela N°2 en el corazón de Concepción. Hoy es un establecimiento público, laico y bicentenario del SLEP Andalién Sur.
        </p>
      </header>

      <section className="glass-panel rounded-2xl p-6">
        <h2 className="font-heading text-xl font-bold">Historia</h2>
        <ol className="mt-3 space-y-3 text-sm leading-relaxed">
          <li><strong>1843:</strong> Fundación como Escuela N°2 de Concepción.</li>
          <li><strong>Siglo XX:</strong> Crecimiento como escuela pública central del Biobío.</li>
          <li><strong>Bicentenario:</strong> Sello de excelencia, infraestructura renovada y comunidad activa.</li>
          <li><strong>Hoy:</strong> Parvularia a 4° Medio, San Martín 1580, Director {site.director}.</li>
        </ol>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="solid-panel rounded-2xl p-6">
          <h2 className="font-heading font-bold">Misión (resumen PEI)</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Formar estudiantes íntegros, críticos y comprometidos con su comunidad, en un ambiente público, laico y de excelencia académica.
          </p>
        </div>
        <div className="solid-panel rounded-2xl p-6">
          <h2 className="font-heading font-bold">Sellos</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-400">
            <li>Educación pública de calidad</li>
            <li>Convivencia y respeto</li>
            <li>Tradición bicentenaria penquista</li>
          </ul>
        </div>
      </section>

      <section className="solid-panel rounded-2xl p-6">
        <h2 className="font-heading text-xl font-bold">Equipo directivo</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {team.map((m) => (
            <li key={m.role} className="flex justify-between gap-4 border-b border-slate-100 pb-2 dark:border-slate-700/50">
              <span className="text-slate-500">{m.role}</span><span className="font-medium">{m.name}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-slate-500">Actualiza aquí el equipo oficial cuando haya cambios.</p>
      </section>
    </div>
  );
}
