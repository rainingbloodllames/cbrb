import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SaeCarousel } from "@/components/SaeCarousel";
import { Band, PageIntro, RuleList, SectionHead } from "@/components/Section";
import { saeCarousel } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Admisión SAE" };

const steps = [
  { t: "Infórmate", d: "Revisa vacantes y requisitos en admision.mineduc.cl" },
  { t: "Postula", d: "Completa el formulario con RUN del estudiante y apoderado" },
  { t: "Resultados", d: "Revisa las listas de selección en las fechas de MINEDUC" },
  { t: "Matrícula", d: "Confirma la matrícula en San Martín 1580" },
];

const faqs = [
  { q: "¿La postulación es en esta web?", a: "No. La postulación es solo en admision.mineduc.cl (Sistema de Admisión Escolar del MINEDUC). Esta página enlaza y guía." },
  { q: "¿Dónde hay más cupos?", a: "En parvularia y en básica. Ahí es donde hoy suele quedar vacante, así que es buen momento para postular a los más chicos." },
  { q: "¿Y en segundo ciclo y media?", a: "Puede quedar algo según el año, pero son menos. Si te interesa esos niveles, revisa igual la vacante en el sitio SAE antes de ordenar tus preferencias." },
  { q: "¿Por qué ahora poner el acento en los primeros años?", a: "Porque el aprendizaje que más pesa se hace ahí: lenguaje, lectura y hábitos de escuela a los 3, 4 y 5. El PEI lo dice claro: desarrollar habilidades desde chicos para entrar mejor a la educación superior, con formación valórica y cívica." },
  { q: "¿El colegio es pagado?", a: "No. Es público, laico y gratuito." },
];

export default function AdmisionPage() {
  return (
    <div className="pb-20">
      <PageIntro
        kicker="Matrícula 2027 por SAE"
        title="Postula al CBRB por SAE"
        lead="Colegio público desde 1843 en Concepción. Hoy hay más cupos en parvularia y básica. La postulación es solo por el sistema oficial, en 4 pasos."
      >
        <div className="flex flex-wrap items-center gap-5">
          <a href={site.saeUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
            Ir a admision.mineduc.cl
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <p className="t-meta">RBD 4564 · Busca “República del Brasil”</p>
        </div>
      </PageIntro>

      <Band tone="band" labelledBy="pasos">
        <SectionHead titleId="pasos" title="4 pasos, sin salir de casa" />
        <RuleList label="Pasos de postulación SAE">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 40}>
              <li className="grid gap-1 border-b border-slate-200 py-5 sm:grid-cols-[80px_220px_1fr] sm:items-baseline sm:gap-6">
                <span className="t-meta">Paso {i + 1}</span>
                <span className="t-h3">{s.t}</span>
                <span className="t-body">{s.d}</span>
              </li>
            </Reveal>
          ))}
        </RuleList>
      </Band>

      <Band tone="white" labelledBy="fechas">
        <SectionHead titleId="fechas" title="Fechas SAE 2027" lead="Periodo complementario e instrucciones de matrícula en el Biobío. La asignación la hace el sistema: postular no garantiza una vacante." />
        <RuleList label="Fechas postulación complementaria 2027">
          <li className="grid gap-1 border-b border-slate-200 py-4 sm:grid-cols-[220px_1fr] sm:items-baseline sm:gap-6">
            <span className="t-meta">10 al 17 nov 2026</span>
            <span className="t-body">Periodo complementario de postulación 2027.</span>
          </li>
          <li className="grid gap-1 border-b border-slate-200 py-4 sm:grid-cols-[220px_1fr] sm:items-baseline sm:gap-6">
            <span className="t-meta">1 dic 2026</span>
            <span className="t-body">Publicación de resultados del periodo complementario.</span>
          </li>
          <li className="grid gap-1 py-4 sm:grid-cols-[220px_1fr] sm:items-baseline sm:gap-6">
            <span className="t-meta">9 al 22 dic 2026</span>
            <span className="t-body">Matrícula en la Región del Biobío. Recibir una asignación no reemplaza la matrícula presencial.</span>
          </li>
        </RuleList>
        <p className="t-body mt-4">Consultas de matrícula: <a href="mailto:brasil@andaliensur.cl" className="link-mail">brasil@andaliensur.cl</a></p>
      </Band>

      <Band tone="band" labelledBy="carrusel">
        <SectionHead titleId="carrusel" title="Cómo postular, en imágenes" lead="Carrusel oficial SAE 2027. Avanza solo cada 5 segundos y se pausa si pasas el cursor o el foco." />
        <div className="mt-8">
          <SaeCarousel items={saeCarousel} />
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[360px_1fr] lg:items-start">
          <figure className="w-full max-w-[360px] overflow-hidden rounded-xl bg-white shadow-[0_4px_24px_rgba(11,30,68,0.1)] ring-1 ring-slate-900/5">
            <Image
              src="/fotos/864001339_3231840203673207_4040936791658699064_n.jpeg"
              alt="Afiche Matrículas Abiertas: ven a crecer y aprender con nosotros. Apoyo en lenguaje, fonoaudiología, psicología, terapia ocupacional y educadora diferencial"
              width={1024}
              height={1536}
              quality={90}
              sizes="360px"
              className="aspect-[2/3] w-full object-cover"
            />
            <figcaption className="border-t border-slate-200 px-4 py-3">
              <p className="t-name">Matrículas abiertas</p>
              <p className="t-small mt-1">Infórmate en SAE. Consultas: <a href="mailto:brasil@andaliensur.cl" className="link-mail">brasil@andaliensur.cl</a></p>
            </figcaption>
          </figure>
          <Reveal>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.08)] sm:p-8">
              <h3 className="t-h3">Apoyo especializado en el desarrollo del lenguaje</h3>
              <p className="t-body mt-3">Acompañamos el aprendizaje integral con equipo multidisciplinario.</p>
              <ul className="mt-4 space-y-2">
                <li className="t-body flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0b1e44]" aria-hidden="true" /><span><strong className="t-name">Fonoaudiología:</strong> lenguaje, comunicación y habilidades comunicativas.</span></li>
                <li className="t-body flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0b1e44]" aria-hidden="true" /><span><strong className="t-name">Psicología:</strong> desarrollo socioemocional y bienestar.</span></li>
                <li className="t-body flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0b1e44]" aria-hidden="true" /><span><strong className="t-name">Terapia ocupacional:</strong> autonomía y participación escolar.</span></li>
                <li className="t-body flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0b1e44]" aria-hidden="true" /><span><strong className="t-name">Educadora diferencial:</strong> adecuaciones curriculares para cada ritmo.</span></li>
              </ul>
              <p className="t-small mt-5">San Martín 1580 · <a href="mailto:brasil@andaliensur.cl" className="link-mail">brasil@andaliensur.cl</a> · @colegio_brasil</p>
            </div>
          </Reveal>
        </div>
      </Band>

      <Band tone="white" labelledBy="faq">
        <SectionHead titleId="faq" title="Preguntas frecuentes" />
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.08)]">
          {faqs.map((f, i) => (
            <details key={f.q} className={i !== faqs.length - 1 ? "border-b border-slate-200 px-6 py-4" : "px-6 py-4"}>
              <summary className="t-h3 flex min-h-[44px] cursor-pointer items-center justify-between gap-4">
                {f.q}
                <span className="t-h3" aria-hidden="true">+</span>
              </summary>
              <p className="t-body mt-2 max-w-prose">{f.a}</p>
            </details>
          ))}
        </div>
      </Band>
    </div>
  );
}
