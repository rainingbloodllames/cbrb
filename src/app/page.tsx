import Link from "next/link";
import { NewsCard } from "@/components/NewsCard";
import { news, team } from "@/lib/content";
import { site } from "@/lib/site";

export default function Home() {
  const featured = news.slice(0, 3);
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-4 py-12">
      {/* HERO */}
      <section className="glass-panel shadow-glass-light animate-enter-up rounded-3xl p-8 sm:p-12">
        <div className="flex flex-wrap items-center gap-4">
          <img src="/logos/cbrb.png" alt="Escudo Colegio República del Brasil" width={92} height={125} className="h-24 w-auto sm:h-28" />
          <img src="/logos/slep-andalien-sur.png" alt="SLEP Andalién Sur" width={144} height={78} className="h-16 w-auto sm:h-20" />
          <p className="text-sm font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300">
            Bicentenario · Desde 1843
          </p>
        </div>
        <h1 className="mt-3 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
          {site.tagline}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          Colegio público y laico en San Martín 1580, Concepción. De Educación Parvularia a 4° Año Medio, en el SLEP Andalién Sur.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={site.saeUrl} target="_blank" rel="noreferrer" className="rounded-full bg-yellow-400 px-6 py-3 font-bold text-slate-900 transition-colors duration-150 hover:bg-yellow-300">
            Postula por SAE ↗
          </a>
          <Link href="/admision" className="solid-panel rounded-full px-6 py-3 font-medium transition-colors duration-150 hover:bg-slate-50 dark:hover:bg-slate-800">
            Cómo postular
          </Link>
          <Link href="/contacto" className="solid-panel rounded-full px-6 py-3 font-medium transition-colors duration-150 hover:bg-slate-50 dark:hover:bg-slate-800">
            Contacto
          </Link>
        </div>
        <p className="mt-4 rounded-xl bg-yellow-100 px-4 py-3 text-sm font-medium text-yellow-900 dark:bg-yellow-900/30 dark:text-yellow-100">
          ⚠️ Admisión SAE: revisa fechas y requisitos en{" "}
          <a className="underline" href={site.saeUrl} target="_blank" rel="noreferrer">admision.mineduc.cl</a>
        </p>
      </section>

      {/* NIVELES */}
      <section aria-labelledby="niveles">
        <h2 id="niveles" className="font-heading text-2xl font-bold">Niveles que impartimos</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {[
            { t: "Educación Parvularia", d: "Jardín y transición. Juego, lenguaje y socialización." },
            { t: "Educación Básica", d: "1° a 8° Básico. Lectura, matemática, ciencias y convivencia." },
            { t: "Educación Media", d: "I a IV Medio. Preparación universitaria y técnica, talleres y SIMCE." },
          ].map((n) => (
            <article key={n.t} className="glass-bento rounded-2xl p-5">
              <h3 className="font-heading font-bold">{n.t}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{n.d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* NOTICIAS */}
      <section aria-labelledby="noticias">
        <div className="flex items-end justify-between gap-4">
          <h2 id="noticias" className="font-heading text-2xl font-bold">Noticias</h2>
          <Link href="/comunidad" className="text-sm font-bold text-blue-700 underline dark:text-blue-300">Ver comunidad →</Link>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {featured.map((n) => (
            <NewsCard key={n.slug} item={n} />
          ))}
        </div>
      </section>

      {/* EQUIPO + ACCESOS */}
      <section className="grid gap-6 md:grid-cols-2" aria-labelledby="equipo">
        <div className="solid-panel rounded-2xl p-6">
          <h2 id="equipo" className="font-heading text-xl font-bold">Equipo directivo</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {team.map((m) => (
              <li key={m.role} className="flex justify-between gap-4 border-b border-slate-100 pb-2 dark:border-slate-700/50">
                <span className="text-slate-500">{m.role}</span>
                <span className="font-medium">{m.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="solid-panel rounded-2xl p-6">
          <h2 className="font-heading text-xl font-bold">Plataformas</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            La intranet no está en esta web. Usa tus cuentas oficiales:
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a href={site.workspaceUrl} target="_blank" rel="noreferrer" className="rounded-full bg-blue-700 px-4 py-2 text-sm font-bold text-white transition-colors duration-150 hover:bg-blue-600">Google Workspace ↗</a>
            <a href={site.sigceUrl} target="_blank" rel="noreferrer" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white transition-colors duration-150 hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900">SIGCE ↗</a>
          </div>
          <p className="mt-3 text-xs text-slate-500">Classroom · Drive · Gmail @cbrb.cl — Creado vía MINEDUC (sin costo).</p>
        </div>
      </section>
    </div>
  );
}
