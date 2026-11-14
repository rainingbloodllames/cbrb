import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Admisión SAE" };

const steps = [
  { n: "1", t: "Infórmate", d: "Revisa vacantes y requisitos en admision.mineduc.cl" },
  { n: "2", t: "Postula", d: "Completa el formulario SAE con RUN del estudiante y apoderado" },
  { n: "3", t: "Resultados", d: "Revisa listas de selección en las fechas de MINEDUC" },
  { n: "4", t: "Matrícula", d: "Confirma matrícula en San Martín 1580" },
];

const faqs = [
  { q: "¿La postulación es en esta web?", a: "No. Toda postulación es externa en admision.mineduc.cl (Sistema de Admisión Escolar del MINEDUC). Esta página solo te guía y enlaza." },
  { q: "¿Qué niveles tienen vacantes?", a: "Dependiendo de cada año. Revisa el aviso vigente en el sitio SAE y en nuestras redes." },
  { q: "¿El colegio es pagado?", a: "No. Somos un establecimiento público, laico y gratuito." },
];

export default function AdmisionPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-10 pt-6 sm:px-5">
      <header className="hero-mesh rounded-[36px] p-8 text-white sm:p-10">
        <p className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold">Matrícula 2027 · SAE</p>
        <h1 className="mt-4 font-heading text-4xl font-bold text-pretty sm:text-5xl">Postula al CBRB por SAE</h1>
        <p className="mt-3 max-w-prose text-white/85">Colegio público bicentenario en el centro de Concepción. Postula solo por el sistema oficial, en 4 pasos.</p>
        <a href={site.saeUrl} target="_blank" rel="noreferrer" className="pressable mt-6 flex min-h-[52px] w-full items-center justify-center rounded-full bg-[#ffd60a] px-6 font-heading text-base font-bold text-slate-900 transition-colors duration-150 hover:bg-[#f7d100] sm:w-auto sm:px-8">
          Ir a admision.mineduc.cl
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="ml-1"><path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
        <p className="mt-4 text-xs text-white/70">RBD 4564 · Busca: <strong className="text-white">Colegio Bicentenario República del Brasil</strong></p>
      </header>

      <section className="pt-10" aria-labelledby="pasos">
        <h2 id="pasos" className="font-heading text-3xl font-bold text-pretty">4 pasos, sin salir de casa</h2>
        <ol className="stagger mt-5 grid gap-3 sm:grid-cols-2">
          {steps.map((s) => (
            <li key={s.n} className="animate-enter-up ios-card flex gap-4 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0a84ff] font-heading text-lg font-bold text-white" aria-hidden="true">{s.n}</span>
              <span className="min-w-0">
                <span className="block font-heading text-lg font-bold">{s.t}</span>
                <span className="mt-1 block text-sm leading-relaxed text-slate-600 dark:text-slate-400">{s.d}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="pt-10" aria-labelledby="faq">
        <h2 id="faq" className="font-heading text-3xl font-bold text-pretty">Preguntas frecuentes</h2>
        <div className="mt-5 space-y-2">
          {faqs.map((f) => (
            <details key={f.q} className="ios-card group p-5">
              <summary className="flex min-h-[44px] cursor-pointer items-center justify-between gap-4 font-heading font-bold marker:hidden">
                {f.q}
                <span className="text-xl text-[#0a84ff] transition-transform duration-200 group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
