import Link from "next/link";
import { NewsCard } from "@/components/NewsCard";
import { news } from "@/lib/content";
import { site } from "@/lib/site";

const NIVELES = [
  { n: "Parvularia", edad: "3 a 5 años", t: "Educación Parvularia", d: "Jardín y transición. Juego, lenguaje y socialización para empezar bien." },
  { n: "Básica", edad: "1° a 8° Básico", t: "Educación Básica", d: "Lectura, matemática, ciencias y convivencia en el centro de Concepción." },
  { n: "Media", edad: "I a IV Medio", t: "Educación Media", d: "Preparación universitaria y técnica, talleres y resultados SIMCE." },
];

const PILARES = [
  { tag: "1843", title: "182 años de historia", text: "Escuela N°2 de Concepción. Un colegio bicentenario que sigue formando generaciones.", tone: "bg-[#0a84ff]" },
  { tag: "Público", title: "Laico y gratuito", text: "Educación pública de calidad, sin pago, abierta a todas las familias.", tone: "bg-[#30d158]" },
  { tag: "SLEP", title: "Andalién Sur", text: "Parte del Servicio Local de Educación Pública de Concepción, Chiguayante, Florida y Hualqui.", tone: "bg-[#ffd60a]" },
  { tag: "RBD 4564", title: "Comunidad activa", text: "Convivencia, deportes, artes y talleres en San Martín 1580, a pasos del centro.", tone: "bg-[#ff453a]" },
];

const TIMELINE = [
  { year: "1843", title: "Escuela N°2", text: "Nace en Concepción, en el corazón del Biobío." },
  { year: "1900s", title: "República del Brasil", text: "Crece como escuela pública central de la ciudad." },
  { year: "2010", title: "Bicentenario", text: "Sello de excelencia y renovación del proyecto educativo." },
  { year: "Hoy", title: "SLEP Andalién Sur", text: "Parvularia a IV Medio, tecnología y convivencia moderna." },
];

export default function Home() {
  const [first, ...rest] = news.slice(0, 3);
  return (
    <div className="pb-10">
      {/* HERO — iOS dark mesh, funnel SAE */}
      <section className="hero-mesh mx-3 mt-3 overflow-hidden rounded-[36px] text-white sm:mx-5">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-12 pt-12 sm:pt-16 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold">
              <span className="h-2 w-2 rounded-full bg-[#30d158]" aria-hidden="true" />
              Matrícula 2027 abierta — SAE
            </p>
            <h1 className="mt-5 font-heading text-[clamp(2.7rem,7vw,4.8rem)] font-bold text-pretty">
              Tu futuro se escribe en Concepción
            </h1>
            <p className="mt-5 max-w-prose text-lg leading-relaxed text-white/80">
              Colegio Bicentenario República del Brasil. De Parvularia a IV Medio, en San Martín 1580. Escuela pública, laica y bicentenaria desde 1843.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={site.saeUrl} target="_blank" rel="noreferrer" className="pressable flex min-h-[52px] flex-1 items-center justify-center rounded-full bg-[#ffd60a] px-6 font-heading text-base font-bold text-slate-900 shadow-lg shadow-black/20 transition-colors duration-150 hover:bg-[#f7d100] sm:flex-none">
                Postula por SAE
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="ml-1"><path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <Link href="/admision" className="pressable flex min-h-[52px] items-center justify-center rounded-full bg-white px-6 font-heading text-base font-bold text-[#0b1e44] transition-colors duration-150 hover:bg-slate-100">
                Ver 3 pasos
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3" aria-label="Datos del colegio">
              {[{ v: "182", l: "años" }, { v: "1843", l: "fundación" }, { v: "RBD 4564", l: "oficial" }].map((s) => (
                <div key={s.l} className="rounded-[22px] bg-white/10 p-4">
                  <p className="font-heading text-2xl font-bold tabular-nums">{s.v}</p>
                  <p className="mt-0.5 text-xs text-white/75">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="min-w-0 self-start" aria-label="Identidad del colegio">
            <div className="glass-panel rounded-[32px] p-6 text-slate-900 dark:text-white">
              <img src="/logos/cbrb.png" alt="Escudo del Colegio República del Brasil" width={200} height={272} className="mx-auto h-48 w-auto" />
              <img src="/logos/slep-andalien-sur.png" alt="Servicio Local de Educación Pública Andalién Sur" width={240} height={130} className="mx-auto mt-4 h-16 w-auto" />
              <p className="mt-4 text-center text-sm font-semibold">Escuela N°2 de 1843 · Concepción, Biobío</p>
              <div className="mt-4 flex justify-center gap-2">
                <span className="rounded-full bg-[#0a84ff] px-3 py-1 text-xs font-bold text-white">Chile</span>
                <span className="rounded-full bg-[#30d158] px-3 py-1 text-xs font-bold text-white">Brasil</span>
                <span className="rounded-full bg-slate-900/10 px-3 py-1 text-xs font-bold dark:bg-white/15">Bicentenario</span>
              </div>
            </div>
          </aside>
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-6">
          <p className="flex flex-wrap items-center gap-2 rounded-[22px] bg-white/10 px-5 py-4 text-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true" className="shrink-0 text-[#ffd60a]"><path d="M12 8v5m0 3.5v.5M10.3 3.9 2.6 17a2 2 0 0 0 1.7 3h15.4a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span><strong>SAE abierto.</strong> Revisa fechas y requisitos en <a href={site.saeUrl} target="_blank" rel="noreferrer" className="font-bold text-[#ffd60a] underline underline-offset-4">admision.mineduc.cl</a></span>
          </p>
        </div>
      </section>

      {/* POR QUÉ — bento iOS */}
      <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-5" aria-labelledby="porque-titulo">
        <h2 id="porque-titulo" className="font-heading text-3xl font-bold text-pretty sm:text-4xl">Por qué CBRB</h2>
        <div className="stagger mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PILARES.map((p) => (
            <article key={p.title} className="animate-enter-up ios-card min-w-0 p-6">
              <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold text-white ${p.tone} ${p.tag === "SLEP" ? "text-slate-900" : ""}`}>{p.tag}</span>
              <h3 className="mt-3 font-heading text-lg font-bold leading-snug">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* NIVELES — lista agrupada iOS */}
      <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-5" aria-labelledby="niveles-titulo">
        <h2 id="niveles-titulo" className="font-heading text-3xl font-bold text-pretty sm:text-4xl">Niveles</h2>
        <p className="mt-1.5 text-slate-600 dark:text-slate-400">De los 3 a los 18 años, sin cambiar de colegio.</p>
        <div className="stagger mt-5 grid gap-3 lg:grid-cols-3">
          {NIVELES.map((n, i) => (
            <Link key={n.n} href="/admision" className="animate-enter-up group ios-card flex min-h-[120px] items-center gap-4 p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0a84ff] font-heading text-lg font-bold text-white" aria-hidden="true">
                {n.n === "Parvularia" ? "PK" : n.n === "Básica" ? "B" : "M"}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-bold text-slate-500">{n.edad}</span>
                <span className="mt-0.5 block font-heading text-lg font-bold leading-snug">{n.t}</span>
                <span className="mt-1 block text-sm leading-relaxed text-slate-600 dark:text-slate-400">{n.d}</span>
              </span>
              <span className="shrink-0 font-heading text-lg text-slate-300 transition-colors duration-150 group-hover:text-[#0a84ff]" aria-hidden="true">0{i + 1}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* HISTORIA — timeline */}
      <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-5" aria-labelledby="historia-titulo">
        <h2 id="historia-titulo" className="font-heading text-3xl font-bold text-pretty sm:text-4xl">1843 hasta hoy</h2>
        <div className="mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
          {TIMELINE.map((t) => (
            <article key={t.year} className="ios-card min-w-[250px] max-w-[250px] snap-start p-6">
              <p className="font-heading text-3xl font-bold tabular-nums text-[#0f2a5c] dark:text-white">{t.year}</p>
              <h3 className="mt-1 font-heading text-base font-bold">{t.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{t.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* NOTICIAS + PLATAFORMAS */}
      <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-5" aria-labelledby="noticias-titulo">
        <div className="flex items-end justify-between gap-4">
          <h2 id="noticias-titulo" className="font-heading text-3xl font-bold text-pretty sm:text-4xl">Noticias</h2>
          <Link href="/comunidad" className="pressable flex min-h-[44px] shrink-0 items-center rounded-full bg-slate-900/5 px-4 text-sm font-bold dark:bg-white/10">Ver todas</Link>
        </div>
        <div className="stagger mt-5 grid gap-3 md:grid-cols-3">
          {news.slice(0, 3).map((n, i) => (
            <div key={n.slug} className="animate-enter-up">
              <NewsCard item={n} featured={i === 0} />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-5" aria-labelledby="plataformas-titulo">
        <h2 id="plataformas-titulo" className="font-heading text-3xl font-bold text-pretty sm:text-4xl">Acceso rápido</h2>
        <div className="stagger mt-5 grid gap-3 sm:grid-cols-2">
          <a href={site.workspaceUrl} target="_blank" rel="noreferrer" className="animate-enter-up group rounded-[28px] bg-gradient-to-br from-[#0a84ff] to-[#0066cc] p-6 text-white">
            <p className="font-heading text-xl font-bold">Google Workspace</p>
            <p className="mt-1 text-sm text-white/85">Gmail, Classroom y Drive @cbrb.cl vía MINEDUC.</p>
            <p className="mt-4 flex min-h-[44px] items-center text-sm font-bold">Acceder</p>
          </a>
          <a href={site.sigceUrl} target="_blank" rel="noreferrer" className="animate-enter-up group rounded-[28px] bg-gradient-to-br from-[#0f2a5c] to-[#081430] p-6 text-white">
            <p className="font-heading text-xl font-bold">SIGCE</p>
            <p className="mt-1 text-sm text-white/85">Gestión de convivencia para funcionarios.</p>
            <p className="mt-4 flex min-h-[44px] items-center text-sm font-bold">Acceder</p>
          </a>
        </div>
      </section>

      {/* Sticky CTA móvil — funnel matrícula */}
      <div className="fixed inset-x-3 bottom-3 z-50 sm:hidden" aria-label="Postulación rápida">
        <a href={site.saeUrl} target="_blank" rel="noreferrer" className="pressable glass-panel flex min-h-[56px] w-full items-center justify-center rounded-full px-5 font-heading text-base font-bold text-slate-900 shadow-xl dark:text-white">
          Postula por SAE — Admisión abierta
        </a>
      </div>
    </div>
  );
}
