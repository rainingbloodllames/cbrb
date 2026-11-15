import Link from "next/link";
import Image from "next/image";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { NewsCard } from "@/components/NewsCard";
import { Reveal } from "@/components/Reveal";
import { SchoolGallery } from "@/components/SchoolGallery";
import { news } from "@/lib/content";
import { site } from "@/lib/site";

const NIVELES = [
  { n: "Parvularia", edad: "3 a 5 años", t: "Educación Parvularia", d: "Jardín y transición. Juego, lenguaje y socialización para empezar bien." },
  { n: "Básica", edad: "1° a 8° Básico", t: "Educación Básica", d: "Lectura, matemática, ciencias y convivencia en el centro de Concepción." },
  { n: "Media", edad: "I a IV Medio", t: "Educación Media", d: "Preparación universitaria y técnica, talleres y resultados SIMCE." },
];

const PILARES = [
  { tag: "Desde 1843", title: "183 años de historia", text: "Escuela N°2 de Concepción. Un colegio bicentenario que sigue formando generaciones." },
  { tag: "Público", title: "Laico y gratuito", text: "Educación pública de calidad, sin pago, abierta a todas las familias." },
  { tag: "SLEP", title: "Andalién Sur", text: "Parte del Servicio Local de Educación Pública de Concepción, Chiguayante, Florida y Hualqui." },
  { tag: "RBD 4564", title: "Comunidad activa", text: "1.342 estudiantes, 132 docentes. Convivencia, deportes, artes y talleres en San Martín 1580." },
];

const TIMELINE = [
  { year: "1843", title: "Escuela N°2", text: "Nace en Concepción, en el corazón del Biobío." },
  { year: "1900s", title: "República del Brasil", text: "Crece como escuela pública central de la ciudad." },
  { year: "2010", title: "Bicentenario", text: "Sello de excelencia y renovación del proyecto educativo." },
  { year: "Hoy", title: "SLEP Andalién Sur", text: "Parvularia a IV Medio. Obras de conservación al 62,88%, entrega proyectada mayo 2027." },
];

export default function Home() {
  return (
    <div className="pb-24 sm:pb-16">
      {/* HERO — editorial con identidad bicentenaria */}
      <section className="hero-mesh relative mx-3 mt-3 overflow-hidden rounded-2xl text-white sm:mx-5 sm:rounded-3xl">
        <span className="pointer-events-none absolute -right-4 -top-6 select-none font-heading text-[180px] font-bold leading-none tracking-tighter text-white/[0.04]">1843</span>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-12 pt-14 sm:px-10 sm:pt-20 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div className="min-w-0">
            <p className="text-[15px] font-medium text-slate-100">
              Matrícula 2027 por SAE
            </p>
            <h1 className="mt-6 font-heading text-[clamp(2.3rem,5vw,4.5rem)] font-medium leading-[1.02] tracking-tight text-white">
              Tu futuro se escribe<br />
              en <span className="text-[#ffd60a]">Concepción</span>
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed font-medium text-slate-100">
              Colegio Bicentenario República del Brasil. Escuela pública, laica y gratuita desde <strong>1843</strong>. Parvularia a IV Medio en San Martín 1580.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.saeUrl} target="_blank" rel="noreferrer" className="group inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-[#ffd60a] px-7 font-heading text-[16px] font-bold text-slate-900 shadow-lg shadow-black/20 transition-all hover:bg-[#ffdd2e] hover:shadow-xl">
                Postula por SAE
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="arrow-nudge"><path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <Link href="/admision" className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-white px-7 font-heading text-[16px] font-bold text-[#0b1e44] transition-colors hover:bg-slate-100">
                Ver 3 pasos
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 divide-x divide-white/15 border-y border-white/15" aria-label="Datos del colegio">
              <div className="py-5 pr-4">
                <p className="font-heading text-[28px] font-bold leading-none tabular-nums"><AnimatedNumber value={183} /></p>
                <p className="mt-1.5 text-[13px] font-semibold text-slate-200">años de historia</p>
              </div>
              <div className="px-4 py-5">
                <p className="font-heading text-[28px] font-bold leading-none tabular-nums"><AnimatedNumber value={1342} /></p>
                <p className="mt-1.5 text-[13px] font-semibold text-slate-200">estudiantes</p>
              </div>
              <div className="pl-4 py-5">
                <p className="font-heading text-[28px] font-bold leading-none">RBD 4564</p>
                <p className="mt-1.5 text-[13px] font-semibold text-slate-200">SLEP Andalién Sur</p>
              </div>
            </div>
          </div>

          <aside aria-label="Identidad del colegio" className="self-start">
            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/30">
              <div className="relative">
                <Image src="/fotos/estandarte-media.jpg" alt="Estudiantes de enseñanza media con estandarte del colegio en desfile" width={1200} height={900} priority sizes="(min-width: 1024px) 40vw, 90vw" className="aspect-[4/3] w-full object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-slate-900/70 px-3 py-1 text-[11px] font-bold text-white backdrop-blur">Foto oficial · SAE MINEDUC</span>
                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl bg-white/90 p-3 backdrop-blur">
                  <Image src="/logos/cbrb.png" alt="" width={80} height={109} className="h-14 w-auto" />
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold  text-slate-500">Escuela N°2 de 1843</p>
                    <p className="font-heading text-[14px] font-bold leading-tight text-slate-900">Concepción · Biobío</p>
                    <div className="mt-1.5 flex flex-wrap gap-1">
                      <span className="rounded-full bg-[#0066cc] px-2 py-0.5 text-[10px] font-bold text-white">Chile</span>
                      <span className="rounded-full bg-[#30d158] px-2 py-0.5 text-[10px] font-bold text-[#052e16]">Brasil</span>
                    </div>
                  </div>
                </div>
              </div>
              <Image src="/logos/slep-andalien-sur.png" alt="SLEP Andalién Sur" width={240} height={130} className="mx-auto h-12 w-auto py-3" />
            </div>
          </aside>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 sm:pb-10">
          <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-white/10 px-5 py-4 text-[14px] font-semibold text-white ring-1 ring-white/20 backdrop-blur">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[#ffd60a] text-slate-900" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 8v5m0 3.5v.5M10.3 3.9 2.6 17a2 2 0 0 0 1.7 3h15.4a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span><strong className="font-bold">SAE abierto.</strong> Admisión 2027 vía <a href={site.saeUrl} target="_blank" rel="noreferrer" className="font-bold text-[#ffd60a] underline decoration-[#ffd60a]/60 underline-offset-4 hover:text-white">admision.mineduc.cl</a></span>
          </div>
        </div>
      </section>

      {/* POR QUÉ — bento de color */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20" aria-labelledby="porque-titulo">
        <div className="max-w-2xl">
          <p className="text-[13px] font-bold  text-[#0066cc]">Por qué CBRB</p>
          <h2 id="porque-titulo" className="mt-2 font-heading text-[32px] font-bold leading-[1.05] tracking-tight text-pretty sm:text-[40px]">Una escuela bicentenaria, un proyecto <span className="text-[#0066cc]">vigente</span></h2>
          <p className="mt-3 text-[16px] font-medium leading-relaxed text-slate-600">1843 años formando generaciones penquistas — pública, laica y gratuita en el centro de Concepción.</p>
        </div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PILARES.map((p, i) => (
            <Reveal key={p.title} delay={i * 40}>
              <article className="h-full border border-slate-900/10 bg-white p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-[13px] font-medium text-slate-500">{p.tag}</span>
                  <span className="font-heading text-[13px] font-medium tabular-nums text-slate-400">0{i+1}</span>
                </div>
                <div className="mt-8">
                  <h3 className="font-heading text-[20px] font-medium leading-tight text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{p.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GALERÍA */}
      <SchoolGallery headingId="galeria-titulo" />

      {/* NIVELES — lista editorial */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20" aria-labelledby="niveles-titulo">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[13px] font-bold  text-slate-500">Niveles</p>
            <h2 id="niveles-titulo" className="mt-2 font-heading text-[32px] font-bold leading-[1.05] tracking-tight sm:text-[40px]">De los 3 a los 18, <span className="text-[#0066cc]">sin cambiar de colegio</span></h2>
          </div>
          <Link href="/admision" className="hidden sm:inline-flex min-h-[48px] items-center rounded-full bg-slate-900 px-6 text-sm font-bold text-white transition-colors hover:bg-slate-800">Ver admisión →</Link>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {NIVELES.map((n, i) => (
            <Reveal key={n.n} delay={i * 60}>
              <Link href="/admision" className={`group flex items-center gap-5 px-6 py-6 transition-colors hover:bg-slate-50 sm:px-8 ${i !== NIVELES.length - 1 ? "border-b border-slate-100" : ""}`}>
                <span className="hidden sm:grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-slate-900 font-heading text-[16px] font-bold text-white">{n.n === "Parvularia" ? "PK" : n.n === "Básica" ? "B" : "M"}</span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[12px] font-bold uppercase tracking-wide text-slate-700">{n.edad}</span>
                    <span className="font-heading text-[18px] font-bold text-slate-900">{n.t}</span>
                  </span>
                  <span className="mt-1 block text-[15px] leading-relaxed text-slate-600">{n.d}</span>
                </span>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-slate-400 transition-all group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HISTORIA — timeline vertical */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20" aria-labelledby="historia-titulo">
        <p className="text-[13px] font-bold  text-slate-500">Historia</p>
        <h2 id="historia-titulo" className="mt-2 font-heading text-[32px] font-bold leading-[1.05] tracking-tight sm:text-[40px]">1843 <span className="text-slate-400">→</span> hoy</h2>
        <ol className="relative mt-8 space-y-0 border-l-2 border-slate-200 pl-8 ml-2">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.year} delay={i * 60}>
              <li className="relative pb-8 last:pb-0 group">
                <span className={`absolute -left-[43px] top-1 grid h-8 w-8 place-items-center rounded-full border-4 border-white shadow-sm ${i === TIMELINE.length-1 ? "bg-[#ffd60a]" : i === 0 ? "bg-[#0066cc]" : "bg-slate-900"}`} aria-hidden="true">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                  <p className="font-heading text-[28px] font-bold tabular-nums tracking-tight text-[#0b1e44]">{t.year}</p>
                  <div className="flex-1">
                    <h3 className="font-heading text-[18px] font-bold text-slate-900">{t.title}</h3>
                    <p className="mt-1 max-w-xl text-[15px] leading-relaxed text-slate-600">{t.text}</p>
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* NOTICIAS */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20" aria-labelledby="noticias-titulo">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[13px] font-bold  text-slate-500">Actualidad</p>
            <h2 id="noticias-titulo" className="mt-2 font-heading text-[32px] font-bold leading-[1.05] tracking-tight sm:text-[40px]">Noticias con <span className="text-[#0066cc]">fuente</span></h2>
            <p className="mt-2 max-w-xl text-[15px] font-medium text-slate-600">Cobertura de Resumen.cl, Diario Concepción, SLEP y MINEDUC — con crédito siempre visible.</p>
          </div>
          <Link href="/comunidad" className="inline-flex min-h-[48px] items-center rounded-full bg-slate-900 px-6 text-sm font-bold text-white transition-colors hover:bg-slate-800">Ver todas →</Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {news.slice(0, 3).map((n, i) => (
            <Reveal key={n.slug} delay={i * 60}>
              <NewsCard item={n} featured={i === 0} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* SÍGUENOS */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20" aria-labelledby="social-titulo">
        <h2 id="social-titulo" className="font-heading text-[32px] font-bold leading-[1.05] tracking-tight sm:text-[40px]">Síguenos <span className="text-[#0066cc]">en redes</span></h2>
        <p className="mt-2 max-w-xl text-[15px] font-medium text-slate-600">El día a día — actos, desfiles, deportes y avisos — lo publicamos en nuestras redes oficiales.</p>
        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          <a href={site.instagram} target="_blank" rel="noreferrer" className="group block h-full border border-slate-900/10 bg-white p-6">
            <p className="text-[13px] font-medium text-slate-500">Instagram</p>
            <p className="mt-1 font-heading text-[20px] font-medium leading-tight text-slate-900">@colegio_brasil</p>
            <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">Fotos y videos del colegio.</p>
            <p className="mt-4 text-[15px] font-medium text-[#0066cc]">Seguir</p>
          </a>
          <a href={site.facebook} target="_blank" rel="noreferrer" className="group block h-full border border-slate-900/10 bg-white p-6">
            <p className="text-[13px] font-medium text-slate-500">Facebook</p>
            <p className="mt-1 font-heading text-[20px] font-medium leading-tight text-slate-900">Colegio Bicentenario</p>
            <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">Noticias y transmisiones.</p>
            <p className="mt-4 text-[15px] font-medium text-[#0066cc]">Seguir</p>
          </a>
          <Link href="/contacto" className="group block h-full border border-slate-900/10 bg-white p-6">
            <p className="text-[13px] font-medium text-slate-500">Contacto</p>
            <p className="mt-1 font-heading text-[20px] font-medium leading-tight text-slate-900">San Martín 1580</p>
            <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">(41) 222 4711 · Concepción</p>
            <p className="mt-4 text-[15px] font-medium text-[#0066cc]">Cómo llegar</p>
          </Link>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed inset-x-4 bottom-4 z-50 sm:hidden" aria-label="Postulación rápida">
        <a href={site.saeUrl} target="_blank" rel="noreferrer" className="flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full bg-[#ffd60a] px-6 font-heading text-[16px] font-bold text-slate-900 shadow-xl ring-4 ring-slate-900/10">
          Postula por SAE — Admisión abierta
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17 17 7M8 7h9v9" strokeLinecap="round"/></svg>
        </a>
      </div>
    </div>
  );
}
