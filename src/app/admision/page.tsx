import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
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
    <div className="mx-auto max-w-4xl px-4 pb-16 pt-8 sm:px-6">
      <header className="hero-mesh relative overflow-hidden rounded-2xl p-8 text-white sm:rounded-3xl sm:p-10">
        <p className="inline-flex rounded-full bg-white px-4 py-2 text-[13px] font-bold uppercase tracking-wide text-slate-900 shadow-sm">Matrícula 2027 · SAE</p>
        <h1 className="mt-5 font-heading text-[42px] font-bold leading-[0.95] tracking-tight text-white sm:text-[56px]">Postula al CBRB por SAE</h1>
        <p className="mt-4 max-w-prose text-[17px] font-medium leading-relaxed text-slate-100">Colegio público bicentenario en el centro de Concepción. Postula solo por el sistema oficial, en 4 pasos.</p>
        <a href={site.saeUrl} target="_blank" rel="noreferrer" className="group mt-7 inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-[#ffd60a] px-8 font-heading text-[16px] font-bold text-slate-900 shadow-lg transition-colors hover:bg-[#ffdd2e] sm:px-9">
          Ir a admision.mineduc.cl
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="arrow-nudge"><path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
        <p className="mt-5 text-[13px] font-semibold text-slate-200">RBD 4564 · Busca: <strong className="font-bold text-white">Colegio Bicentenario República del Brasil</strong></p>
      </header>

      <section className="pt-10" aria-labelledby="pasos">
        <h2 id="pasos" className="font-heading text-[32px] font-extrabold tracking-tight text-slate-900">4 pasos, sin salir de casa</h2>
        <ol className="mt-5 grid gap-3 sm:grid-cols-2">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 40}>
              <div className="card-lift ios-card flex h-full gap-4 p-5">
                <span className="icon-pop flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0066cc] font-heading text-lg font-bold text-white" aria-hidden="true">{s.n}</span>
                <span className="min-w-0">
                  <span className="block font-heading text-lg font-bold text-slate-900">{s.t}</span>
                  <span className="mt-1 block text-sm font-medium leading-relaxed text-slate-700">{s.d}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="pt-10" aria-labelledby="faq">
        <h2 id="faq" className="font-heading text-[32px] font-extrabold tracking-tight text-slate-900">Preguntas frecuentes</h2>
        <div className="mt-5 space-y-2">
          {faqs.map((f) => (
            <details key={f.q} className="ios-card group p-5">
              <summary className="flex min-h-[44px] cursor-pointer items-center justify-between gap-4 rounded-xl px-2 py-1 font-heading font-bold text-slate-900">
                {f.q}
                <span className="chevron-spin text-xl text-[#0066cc]" aria-hidden="true">+</span>
              </summary>
              <p className="mt-2 px-2 text-sm font-medium leading-relaxed text-slate-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
