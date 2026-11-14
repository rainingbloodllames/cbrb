import Link from "next/link";
import { NewsCard } from "@/components/NewsCard";
import { news } from "@/lib/content";
import { site } from "@/lib/site";

const NIVELES = [
  { n: "01", t: "Educación Parvularia", d: "Jardín y transición. Juego, lenguaje y socialización para empezar bien.", href: "/admision" },
  { n: "02", t: "Educación Básica", d: "1° a 8° Básico. Lectura, matemática, ciencias y convivencia en el centro de Concepción.", href: "/admision" },
  { n: "03", t: "Educación Media", d: "I a IV Medio. Preparación universitaria y técnica, talleres y resultados SIMCE.", href: "/admision" },
];

export default function Home() {
  const [first, ...rest] = news.slice(0, 3);
  return (
    <div>
      {/* HERO editorial */}
      <section className="mx-auto max-w-6xl px-4 pb-14 pt-10 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div className="min-w-0">
            <p className="font-heading text-sm font-bold text-[#0039a6] dark:text-blue-300">
              Colegio público y laico desde 1843
            </p>
            <h1 className="mt-3 font-heading text-[clamp(2.4rem,6vw,4.2rem)] font-bold text-pretty">
              Educación pública de excelencia en Concepción
            </h1>
            <p className="mt-5 max-w-prose text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              De Educación Parvularia a 4° Año Medio en San Martín 1580, SLEP Andalién Sur. Una escuela bicentenaria que forma estudiantes íntegros y comprometidos con su comunidad.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={site.saeUrl} target="_blank" rel="noreferrer" className="pressable flex min-h-[48px] items-center rounded-full bg-[#fedf00] px-6 font-bold text-slate-900 transition-colors duration-150 hover:bg-[#f5d000]">
                Postula por SAE
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="ml-1"><path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <Link href="/admision" className="pressable flex min-h-[48px] items-center rounded-full bg-[#0f2a5c] px-6 font-bold text-white transition-colors duration-150 hover:bg-[#1a3f7a]">
                Cómo postular
              </Link>
              <Link href="/contacto" className="pressable flex min-h-[48px] items-center rounded-full border border-slate-300 px-6 font-medium transition-colors duration-150 hover:border-[#0039a6] hover:text-[#0039a6] dark:border-slate-700/50">
                Contacto
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-200 pt-5 dark:border-slate-700/50" aria-label="Datos del colegio">
              <div><p className="font-heading text-2xl font-bold tabular-nums">1843</p><p className="text-xs text-slate-500">Año de fundación</p></div>
              <div><p className="font-heading text-2xl font-bold tabular-nums">4564</p><p className="text-xs text-slate-500">RBD</p></div>
              <div><p className="font-heading text-2xl font-bold tabular-nums">3</p><p className="text-xs text-slate-500">Niveles</p></div>
            </div>
          </div>

          <aside className="min-w-0" aria-label="Identidad del colegio">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-700/50 dark:bg-slate-900">
              <img src="/logos/cbrb.png" alt="Escudo del Colegio República del Brasil" width={184} height={250} className="mx-auto h-44 w-auto" />
              <img src="/logos/slep-andalien-sur.png" alt="Servicio Local de Educación Pública Andalién Sur" width={220} height={119} className="mx-auto mt-4 h-14 w-auto" />
              <p className="mt-4 text-center text-sm font-medium text-slate-600 dark:text-slate-400">
                Escuela N°2 de 1843 · Colegio Bicentenario República del Brasil
              </p>
              <div className="mt-4 flex justify-center gap-2">
                <span className="rounded-full bg-[#0039a6] px-3 py-1 text-xs font-bold text-white">Chile</span>
                <span className="rounded-full bg-[#009739] px-3 py-1 text-xs font-bold text-white">Brasil</span>
                <span className="rounded-full bg-[#f1f5f9] px-3 py-1 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200">Concepción</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* SAE strip */}
      <section className="bg-[#0f2a5c] text-white" aria-label="Admisión SAE">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-4 py-5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fedf00] text-slate-900" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 8v5m0 3.5v.5M10.3 3.9 2.6 17a2 2 0 0 0 1.7 3h15.4a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <p className="min-w-0 flex-1 text-base">
            <strong>Admisión SAE abierta.</strong> Revisa fechas y requisitos en{" "}
            <a href={site.saeUrl} target="_blank" rel="noreferrer" className="font-bold text-[#fedf00] underline decoration-[#fedf00]/50 underline-offset-4 transition-colors duration-150 hover:decoration-[#fedf00]">
              admision.mineduc.cl
            </a>
          </p>
          <Link href="/admision" className="pressable flex min-h-[44px] items-center rounded-full bg-white px-5 text-sm font-bold text-[#0f2a5c] transition-colors duration-150 hover:bg-slate-100">
            Ver pasos
          </Link>
        </div>
      </section>

      {/* NIVELES — secuencia real, números justificados */}
      <section id="niveles" className="mx-auto max-w-6xl px-4 py-14" aria-labelledby="niveles-titulo">
        <h2 id="niveles-titulo" className="font-heading text-3xl font-bold text-pretty">Niveles que impartimos</h2>
        <p className="mt-2 max-w-prose text-slate-600 dark:text-slate-400">Trayectoria completa en un mismo establecimiento, del jardín a IV Medio.</p>
        <ol className="stagger mt-6">
          {NIVELES.map((n) => (
            <li key={n.n}>
              <Link href={n.href} className="animate-enter-up group flex min-h-[72px] items-center gap-5 border-t border-slate-200 py-5 transition-colors duration-150 hover:bg-white dark:border-slate-700/50 dark:hover:bg-slate-900">
                <span className="font-heading text-2xl font-bold tabular-nums text-slate-300 transition-colors duration-150 group-hover:text-[#0039a6]">{n.n}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-heading text-xl font-bold">{n.t}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-slate-600 dark:text-slate-400">{n.d}</span>
                </span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="shrink-0 text-slate-400 transition-colors duration-150 group-hover:text-[#0039a6]"><path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* NOTICIAS — destacada + lista */}
      <section className="border-y border-slate-200 bg-white dark:border-slate-700/50 dark:bg-slate-900" aria-labelledby="noticias-titulo">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 lg:grid-cols-2">
          <div className="min-w-0">
            <h2 id="noticias-titulo" className="font-heading text-3xl font-bold text-pretty">Noticias</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">Actividad oficial de la comunidad educativa.</p>
            <Link href="/comunidad" className="pressable mt-4 inline-flex min-h-[44px] items-center rounded-full border border-slate-300 px-5 text-sm font-bold transition-colors duration-150 hover:border-[#0039a6] hover:text-[#0039a6] dark:border-slate-700/50">
              Toda la comunidad
            </Link>
            <div className="mt-8">
              {first ? <NewsCard item={first} featured /> : null}
            </div>
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-slate-500">Últimas publicaciones</p>
            <div>
              {rest.map((n) => (
                <NewsCard key={n.slug} item={n} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PLATAFORMAS — dos destinos distintos */}
      <section className="mx-auto max-w-6xl px-4 py-14" aria-labelledby="plataformas-titulo">
        <h2 id="plataformas-titulo" className="font-heading text-3xl font-bold text-pretty">Plataformas</h2>
        <p className="mt-2 max-w-prose text-slate-600 dark:text-slate-400">La web es pública. Los servicios con clave viven en tus cuentas oficiales.</p>
        <div className="stagger mt-6 grid gap-4 sm:grid-cols-2">
          <a href={site.workspaceUrl} target="_blank" rel="noreferrer" className="animate-enter-up group rounded-3xl bg-[#0039a6] p-6 text-white transition-colors duration-150 hover:bg-[#0050c8]">
            <p className="font-heading text-xl font-bold">Google Workspace</p>
            <p className="mt-1 text-sm text-white/85">Gmail, Classroom y Drive con tu correo @cbrb.cl vía MINEDUC.</p>
            <p className="mt-4 flex min-h-[44px] items-center text-sm font-bold">Acceder
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="ml-1"><path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </p>
          </a>
          <a href={site.sigceUrl} target="_blank" rel="noreferrer" className="animate-enter-up group rounded-3xl bg-[#0f2a5c] p-6 text-white transition-colors duration-150 hover:bg-[#1a3f7a]">
            <p className="font-heading text-xl font-bold">SIGCE</p>
            <p className="mt-1 text-sm text-white/85">Sistema Integral de Gestión de Convivencia Educativa para funcionarios.</p>
            <p className="mt-4 flex min-h-[44px] items-center text-sm font-bold">Acceder
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="ml-1"><path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}
