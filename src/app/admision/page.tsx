import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Admisión SAE" };

const steps = [
  { t: "1. Infórmate", d: "Revisa vacantes y requisitos en admision.mineduc.cl" },
  { t: "2. Postula", d: "Completa el formulario SAE con RUN del estudiante y apoderado" },
  { t: "3. Resultados", d: "Revisa listas de selección en las fechas publicadas por MINEDUC" },
  { t: "4. Matrícula", d: "Confirma matrícula en el colegio asignado (San Martín 1580)" },
];

const faqs = [
  { q: "¿La postulación es en esta web?", a: "No. Toda postulación es externa en admision.mineduc.cl (Sistema de Admisión Escolar del MINEDUC). Esta página solo te guía y enlaza." },
  { q: "¿Qué niveles tienen vacantes?", a: "Dependiendo de cada año. Revisa el aviso vigente en el sitio SAE y en nuestras redes." },
  { q: "¿El colegio es pagado?", a: "No. Somos un establecimiento público, laico y gratuito." },
];

export default function AdmisionPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 py-12">
      <header className="glass-panel rounded-3xl p-8">
        <p className="text-sm font-bold uppercase tracking-widest text-yellow-700">Admisión 2027 · SAE</p>
        <h1 className="mt-2 text-4xl font-bold">Postula al CBRB por SAE</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400">
          Somos colegio público bicentenario en el centro de Concepción. Postula solo por el sistema oficial.
        </p>
        <a href={site.saeUrl} target="_blank" rel="noreferrer" className="mt-5 inline-block rounded-full bg-yellow-400 px-6 py-3 font-bold text-slate-900 transition-colors duration-150 hover:bg-yellow-300">
          Ir a admision.mineduc.cl ↗
        </a>
      </header>

      <section aria-labelledby="pasos">
        <h2 id="pasos" className="font-heading text-2xl font-bold">Pasos</h2>
        <ol className="mt-4 grid gap-3 sm:grid-cols-2">
          {steps.map((s) => (
            <li key={s.t} className="solid-panel rounded-2xl p-5">
              <p className="font-heading font-bold">{s.t}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="faq">
        <h2 id="faq" className="font-heading text-2xl font-bold">Preguntas frecuentes</h2>
        <div className="mt-4 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="solid-panel rounded-2xl p-5">
              <summary className="cursor-pointer font-heading font-bold">{f.q}</summary>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="glass-bento rounded-2xl p-6">
        <h2 className="font-heading font-bold">School ID / SAE</h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          En el buscador SAE busca: <strong>Colegio Bicentenario República del Brasil</strong> (RBD 4564) · San Martín 1580, Concepción.
        </p>
      </section>
    </div>
  );
}
