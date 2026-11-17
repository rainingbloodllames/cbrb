import Link from "next/link";
import Image from "next/image";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { HeroCarousel } from "@/components/HeroCarousel";
import { NewsCard } from "@/components/NewsCard";
import { Reveal } from "@/components/Reveal";
import { news } from "@/lib/content";
import { getFacebookPosts } from "@/lib/facebook";
import { site } from "@/lib/site";

export const instant = false;

const NIVELES = [
  { edad: "3 a 5 años", t: "Parvularia", d: "Jardín y transición. Nivel prioritario: más cupos.", ava: "Más cupos" },
  { edad: "1° a 8° básico", t: "Básica", d: "Lectura, matemática, ciencias y convivencia. Nivel prioritario: más cupos.", ava: "Más cupos" },
  { edad: "I a IV medio", t: "Media", d: "Formación científica y técnica, con resultados SIMCE. Vacantes según año.", ava: "Según año" },
];

const FACTS = [
  { k: "Escuela N°2", v: "Fundada en 1843. Escuela pública central del Biobío." },
  { k: "Laico y gratuito", v: "Sin pago de mensualidad. Abierto a todas las familias." },
  { k: "SLEP Andalién Sur", v: "Concepción, Chiguayante, Florida y Hualqui." },
  { k: "Matrícula 2025", v: "1.342 estudiantes y 132 docentes en San Martín 1580." },
];



const TIMELINE = [
  { year: "1843", title: "Escuela N°2", text: "Primera escuela de Concepción, con clases de lectura y aritmética." },
  { year: "Siglo XX", title: "República del Brasil", text: "Crece como escuela pública central. Guarda el Pabellón de Brasil." },
  { year: "2013", title: "Sede actual", text: "Ocupa Galvarino con San Martín y Roosevelt." },
  { year: "Hoy", title: "SLEP Andalién Sur", text: "Parvularia a IV medio. Obras al 62,88%, entrega en mayo de 2027." },
];

export default async function Home() {
  const fbPosts = await getFacebookPosts(6);
  return (
    <div className="pb-20 sm:pb-16">
      {/* HERO — panel navy con foto en tamaño nativo (512 y fortiori nítida) */}
      <section className="hero-mesh hero-sheen relative mx-3 mt-3 overflow-hidden rounded-2xl text-white sm:mx-5 sm:rounded-3xl">
        <div className="relative mx-auto grid max-w-7xl gap-8 px-6 pb-10 pt-12 sm:px-10 sm:pt-16 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          <div className="min-w-0">
            <p className="flex items-center gap-3 text-sm text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ffd60a]" aria-hidden="true" />
              Admisión 2027 por SAE
            </p>
            <p className="mt-5 flex items-baseline gap-3 text-sm text-slate-400">
              <span className="font-heading text-2xl font-semibold tabular-nums text-[#ffd60a]">1843</span>
              <span className="h-px w-10 bg-[#ffd60a]/60" aria-hidden="true" />
              <span>183 años en Concepción</span>
            </p>
            <h1 className="mt-3 font-heading text-4xl font-medium leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Colegio Bicentenario República del Brasil
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-200">
              Somos parte del <strong className="font-semibold text-white">SLEP Andalién Sur</strong>. Parvularia a IV medio, en San Martín 1580, Concepción.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={site.saeUrl} target="_blank" rel="noreferrer" className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#ffd60a] px-6 font-heading text-base font-semibold text-slate-900 transition-colors duration-150 hover:bg-[#ffdd2e]">
                Postula por SAE
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="arrow-nudge"><path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <Link href="/admision" className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 font-heading text-base font-semibold text-[#0b1e44] transition-colors duration-150 hover:bg-slate-100">
                Cómo postular
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 divide-x divide-white/15 border-y border-white/15" aria-label="Datos del colegio">
              <div className="py-5 pr-4">
                <p className="font-heading text-4xl font-semibold leading-none tabular-nums text-white"><AnimatedNumber value={183} /></p>
                <p className="mt-2 border-t-2 border-[#ffd60a] pt-2 text-sm text-slate-300">años · 1843–2026</p>
              </div>
              <div className="px-4 py-5">
                <p className="font-heading text-4xl font-semibold leading-none tabular-nums text-white"><AnimatedNumber value={1342} /></p>
                <p className="mt-2 border-t-2 border-white/25 pt-2 text-sm text-slate-300">estudiantes · 2025</p>
              </div>
              <div className="pl-4 py-5">
                <p className="font-heading text-4xl font-semibold leading-none tabular-nums text-white">4564</p>
                <p className="mt-2 border-t-2 border-white/25 pt-2 text-sm text-slate-300">RBD · SLEP Andalién Sur</p>
              </div>
            </div>
            <p className="mt-4 font-mono text-xs tabular-nums text-slate-400">SAE 2027 — admision.mineduc.cl · Busca “República del Brasil”</p>
          </div>

          <aside aria-label="Fotos del colegio" className="self-start">
            <HeroCarousel />
            <div className="mx-auto mt-4 flex max-w-[512px] items-center justify-between gap-3 rounded-xl bg-white px-4 py-2.5 lg:justify-self-end">
              <Image src="/logos/cbrb.png" alt="" width={64} height={87} className="h-10 w-auto" />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-slate-500">Escuela N°2 de 1843</p>
                <p className="font-heading text-sm font-semibold leading-tight text-slate-900">Concepción · Biobío</p>
              </div>
              <Image src="/logos/slep-andalien-sur.png" alt="SLEP Andalién Sur" width={120} height={65} className="h-9 w-auto" />
            </div>
          </aside>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-10 sm:px-10">
          <div className="flex flex-wrap items-center gap-3 rounded-xl bg-white/10 px-5 py-4 text-sm text-white ring-1 ring-white/20">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#ffd60a] text-slate-900" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8v5m0 3.5v.5M10.3 3.9 2.6 17a2 2 0 0 0 1.7 3h15.4a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span><strong className="font-semibold">SAE abierto.</strong> Admisión 2027 en <a href={site.saeUrl} target="_blank" rel="noreferrer" className="font-semibold text-[#ffd60a] underline decoration-[#ffd60a]/60 underline-offset-4">admision.mineduc.cl</a></span>
          </div>
        </div>
      </section>

      {/* COLEGIO */}
      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 sm:pt-24 lg:px-8" aria-labelledby="colegio-titulo">

        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
          <h2 id="colegio-titulo" className="t-h2 text-pretty">Desde 1843<br />en Concepción</h2>
          <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 sm:p-8">
            <p className="max-w-prose text-lg leading-relaxed text-slate-600">
              Sin pago, con SAE como único sistema de admisión. La matrícula 2025 fue de {1342} estudiantes.
            </p>
            <p className="mt-3 border-l-4 border-[#0b1e44] pl-4 font-heading text-base font-semibold italic text-slate-800">“Desarrollando habilidades para lograr la excelencia académica”.</p>
            <p className="mt-1 pl-4 font-mono text-xs text-slate-500">PEI 2025–2027</p>
            <dl className="mt-4">
              {FACTS.map((f) => (
                <div key={f.k} className="grid gap-1 border-t border-slate-200 py-4 first:border-t-0 sm:grid-cols-[220px_1fr] sm:gap-6">
                  <dt className="font-heading text-base font-semibold text-slate-900">{f.k}</dt>
                  <dd className="text-base leading-relaxed text-slate-600">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* SEDES — banda navy */}
      <section className="mt-20 bg-[#0b1e44] text-white sm:mt-24" aria-labelledby="sedes-titulo">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

          <h2 id="sedes-titulo" className="t-h2 !text-white">Clases en dos sedes cercanas</h2>
          <p className="t-lead mt-3 max-w-xl !text-slate-300">Por las obras de conservación 2025–2027, el colegio funciona con jornada tarde en dos sedes.</p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl bg-white p-6 text-slate-900 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
              <p className="t-name !text-[#0b1e44]">Prekínder a 6° básico</p>
              <h3 className="t-h3 mt-2">Colegio Bicentenario España</h3>
              <p className="t-body mt-2">Av. Roosevelt 1596, Concepción — al frente del colegio.</p>
              <p className="t-name mt-3 tabular-nums">13:30–18:45 · Clases 14:00–18:35</p>
              <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-slate-200">
                <iframe
                  title="Mapa del Colegio Bicentenario España, Roosevelt 1596, Concepción"
                  src="https://www.google.com/maps?q=Colegio%20Bicentenario%20Espa%C3%B1a%20Roosevelt%201596%20Concepci%C3%B3n&output=embed"
                  className="h-56 w-full border-0"
                  loading="lazy"
                />
              </div>
              <a href="https://www.google.com/maps/search/?api=1&query=Colegio+Bicentenario+Espa%C3%B1a+Roosevelt+1596+Concepci%C3%B3n" target="_blank" rel="noreferrer" className="link mt-4 inline-flex">Cómo llegar</a>
            </article>
            <article className="rounded-2xl bg-white p-6 text-slate-900 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
              <p className="t-name !text-[#0b1e44]">7° básico a IV medio</p>
              <h3 className="t-h3 mt-2">Liceo Fiscal de Niñas</h3>
              <p className="t-body mt-2">Rengo 249, Concepción — centro (SLEP Andalién Sur).</p>
              <p className="t-name mt-3 tabular-nums">13:30–18:45 · Clases 14:00–18:35</p>
              <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-slate-200">
                <iframe
                  title="Mapa del Liceo Fiscal de Niñas, Rengo 249, Concepción"
                  src="https://www.google.com/maps?q=Liceo%20de%20Ni%C3%B1as%20Rengo%20249%20Concepci%C3%B3n&output=embed"
                  className="h-56 w-full border-0"
                  loading="lazy"
                />
              </div>
              <a href="https://www.google.com/maps/search/?api=1&query=Liceo+de+Ni%C3%B1as+Rengo+249+Concepci%C3%B3n" target="_blank" rel="noreferrer" className="link mt-4 inline-flex">Cómo llegar</a>
            </article>
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 sm:pt-24 lg:px-8" aria-labelledby="mapa-titulo">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>

            <h2 id="mapa-titulo" className="t-h2 mt-2">Dirección y mapa</h2>
            <p className="t-lead mt-3 max-w-xl">San Martín 1580, centro de Concepción. Las clases se dictan en las dos sedes anteriores.</p>
          </div>
          <p className="font-mono text-sm tabular-nums text-slate-900">San Martín 1580 · (41) 222 4711</p>
        </div>
        <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.08)]">
          <iframe
            title="Mapa Colegio República del Brasil, San Martín 1580, Concepción"
            src="https://www.google.com/maps?q=Colegio%20Rep%C3%BAblica%20del%20Brasil%20San%20Mart%C3%ADn%201580%20Concepci%C3%B3n&output=embed"
            className="h-96 w-full border-0"
            loading="lazy"
          />
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 px-5 py-4">
            <p className="text-sm font-semibold text-slate-900">San Martín 1580, Concepción</p>
            <a href={site.mapUrl} target="_blank" rel="noreferrer" className="link">Abrir en Google Maps</a>
          </div>
        </div>
      </section>

      {/* NIVELES */}
      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 sm:pt-24 lg:px-8" aria-labelledby="niveles-titulo">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>

            <h2 id="niveles-titulo" className="t-h2 mt-2">De los 3 a los 18 en un mismo colegio</h2>
          </div>
          <Link href="/admision" className="link">Ver admisión</Link>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.08)]">
          {NIVELES.map((n, i) => (
            <Link key={n.t} href="/admision" className={`group flex items-center gap-4 px-5 py-6 transition-colors duration-150 hover:bg-slate-50 sm:px-8 ${i !== NIVELES.length - 1 ? "border-b border-slate-200" : ""}`}>
              <span className="t-h3 !text-2xl">{n.t}</span>
              <span className="t-body min-w-0 flex-1">{n.d} <span className={`ml-2 inline-block rounded-full px-2.5 py-0.5 font-mono text-xs tabular-nums ${n.ava === "Más cupos" ? "bg-[#dff5e3] text-[#14532d]" : "bg-slate-100 text-slate-600"}`}>{n.ava}</span></span>
              <span className="t-meta shrink-0 rounded-full bg-slate-100 px-3 py-1 !text-slate-700">{n.edad}</span>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-500 transition-colors duration-150 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="arrow-nudge"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* HISTORIA */}
      <section className="mt-20 bg-[var(--band)] py-16 sm:mt-24 sm:py-20" aria-labelledby="historia-titulo">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mt-3 grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-12">
            <h2 id="historia-titulo" className="t-h2">1843 a hoy</h2>
            <ol className="relative ml-2 space-y-0 border-l-2 border-slate-300 pl-8">
              {TIMELINE.map((t, i) => (
                <li key={t.year} className="relative pb-8 last:pb-0">
                  <span className={`absolute -left-[43px] top-1 grid h-8 w-8 place-items-center rounded-full border-4 border-[#f8fafc] ${i === 0 ? "bg-[#0b1e44]" : "bg-slate-400"}`} aria-hidden="true">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                    <p className="w-28 shrink-0 font-heading text-2xl font-semibold tabular-nums tracking-tight text-slate-900">{t.year}</p>
                    <div className="flex-1">
                      <h3 className="font-heading text-lg font-semibold text-slate-900">{t.title}</h3>
                      <p className="mt-1 max-w-xl text-base leading-relaxed text-slate-600">{t.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* EN LAS NOTICIAS */}
      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 sm:pt-24 lg:px-8" aria-labelledby="noticias-titulo">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="noticias-titulo" className="t-h2 mt-2">El Colegio Brasil en las noticias</h2>
            <p className="t-lead mt-3 max-w-xl">Resumen.cl, Diario Concepción, SLEP y MINEDUC. Crédito visible y enlace a cada cobertura.</p>
          </div>
          <Link href="/comunidad" className="link">Ver todas</Link>
        </div>
        <div className="mt-8">
          <Reveal>
            <NewsCard item={news[0]} featured />
          </Reveal>
        </div>
        <div className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-2">
          {news.slice(1, 3).map((n, i) => (
            <Reveal key={n.slug} delay={i * 40}>
              <NewsCard item={n} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* FACEBOOK */}
      {fbPosts.length > 0 ? (
        <section className="mt-20 bg-[var(--band)] py-16 sm:mt-24 sm:py-20" aria-labelledby="facebook-titulo">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 id="facebook-titulo" className="t-h2">Publicaciones en Facebook</h2>
                <p className="t-lead mt-3 max-w-xl">Lo que el colegio publica cada día, directo de la página. Sin salir de Facebook.</p>
              </div>
              <a href={site.facebook} target="_blank" rel="noreferrer" className="link">Seguir la página</a>
            </div>
            <div className="mt-8">
              <Reveal>
                <NewsCard item={fbPosts[0]} featured />
              </Reveal>
            </div>
            <div className="grid gap-x-6 gap-y-10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
              {fbPosts.slice(1).map((n, i) => (
                <Reveal key={n.slug} delay={i * 40}>
                  <NewsCard item={n} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* PÁGINAS DE INTERÉS */}
      <section className="mt-20 bg-[var(--band)] py-16 sm:mt-24 sm:py-20" aria-labelledby="ayuda-titulo">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="ayuda-titulo" className="t-h2">Páginas de interés</h2>
          <p className="t-lead mt-3 max-w-xl">Enlaces oficiales para becas, beneficios y orientación. Todo en sitios del Estado.</p>
          <div className="mt-8 rounded-2xl bg-[#0b1e44] px-6 py-5 text-white sm:px-8">
            <p className="t-name !text-white">¿Necesitas ayuda ya?</p>
            <p className="t-body mt-1 !text-slate-300">Emergencia: <a href="tel:133" className="link-light">133 Carabineros</a> · <a href="tel:131" className="link-light">131 SAMU</a></p>
          </div>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2" aria-label="Páginas oficiales de interés">
            {[
              { name: "MINEDUC", ini: "MI", domain: "mineduc.cl", desc: "Noticias, becas, SAE y políticas del ministerio.", url: "https://www.mineduc.cl/", tel: null, icon: "/icons/servicios/mineduc.ico" },
              { name: "Ayuda Mineduc", ini: "AY", domain: "ayudamineduc.cl", desc: "Trámites y beneficios. Lun a vie 8:00–18:00.", url: "https://www.ayudamineduc.cl/", tel: "600 600 2626" },
              { name: "SLEP Andalién Sur", ini: "", domain: "andaliensur.gob.cl", desc: "Concepción, Chiguayante, Florida y Hualqui.", url: "https://andaliensur.gob.cl/", tel: "412524415", logo: "/logos/slep-andalien-sur.png" },
              { name: "Salud Responde", ini: "SR", domain: "saludresponde.minsal.cl", desc: "Orientación en salud y salud mental, 24/7.", url: "https://saludresponde.minsal.cl/", tel: "600 360 7777", icon: "/icons/servicios/saludresponde.ico" },
              { name: "SENDA 1412", ini: "SE", domain: "senda.gob.cl", desc: "Fono Drogas y Alcohol. Gratis, anónimo, 24 horas.", url: "https://www.senda.gob.cl/orientacion/", tel: "1412", icon: "/icons/servicios/senda.ico" },
              { name: "Chile Atiende", ini: "CA", domain: "chileatiende.gob.cl", desc: "Trámites del Estado en un solo sitio.", url: "https://www.chileatiende.gob.cl/", tel: null },
              { name: "JUNAEB", ini: "JU", domain: "junaeb.gob.cl", desc: "Alimentación escolar, becas y apoyo.", url: "https://www.junaeb.gob.cl/", tel: null },
              { name: "Beneficios Estudiantiles", ini: "BE", domain: "beneficiosestudiantiles.cl", desc: "FUAS: gratuidad, becas y créditos.", url: "https://www.beneficiosestudiantiles.cl/", tel: null, icon: "/icons/servicios/beneficios.ico" },
            ].map((s) => (
              <li key={s.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.08)]">
                <div className="flex items-start gap-4">
                  {s.logo ? (
                    <span className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-xl bg-white ring-1 ring-slate-200">
                      <Image src={s.logo} alt="" width={120} height={65} className="h-10 w-auto" />
                    </span>
                  ) : s.icon ? (
                    <span className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-xl bg-white ring-1 ring-slate-200">
                      <Image src={s.icon} alt="" width={40} height={40} loading="lazy" className="h-10 w-10 object-contain" />
                    </span>
                  ) : (
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-[#0b1e44] font-heading text-base font-semibold text-white" aria-hidden="true">{s.ini}</span>
                  )}
                  <div className="min-w-0">
                    <h3 className="t-name">{s.name}</h3>
                    <p className="t-meta">{s.domain}</p>
                  </div>
                </div>
                <p className="t-body mt-3">{s.desc}</p>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                  {s.tel ? <a href={`tel:${s.tel.replace(/\s/g, "")}`} className="link-mail">{s.tel}</a> : null}
                  <a href={s.url} target="_blank" rel="noreferrer" className="link">Visitar sitio</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* REDES — cierre navy con fotos */}
      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 sm:pt-24 lg:px-8" aria-labelledby="social-titulo">
        <div className="band-navy-texture rounded-3xl p-8 text-white sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 id="social-titulo" className="t-h2 !text-white">Redes y contacto</h2>
              <p className="t-lead mt-3 max-w-xl !text-slate-300">Matrícula SAE, Congreso Explora, actos cívicos y desfiles. En Instagram somos @colegio_brasil, con más de 2.200 fotos de la vida escolar.</p>
              <div className="mt-8 divide-y divide-white/15 border-y border-white/15">
                <a href={site.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-4 py-5">
                  <Image src="/icons/instagram-white.svg" alt="" width={32} height={32} className="h-8 w-8 shrink-0" />
                  <span className="min-w-0 flex-1">
                    <span className="t-h3 block !text-white">Instagram</span>
                    <span className="t-small mt-0.5 block !text-slate-300">@colegio_brasil</span>
                  </span>
                  <span className="link-light t-small">Seguir</span>
                </a>
                <a href={site.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-4 py-5">
                  <Image src="/icons/facebook-white.svg" alt="" width={32} height={32} className="h-8 w-8 shrink-0" />
                  <span className="min-w-0 flex-1">
                    <span className="t-h3 block !text-white">Facebook</span>
                    <span className="t-small mt-0.5 block !text-slate-300">Colegio Bicentenario República del Brasil</span>
                  </span>
                  <span className="link-light t-small">Seguir</span>
                </a>
                <Link href="/contacto" className="flex items-center gap-4 py-5">
                  <span className="grid h-8 w-8 shrink-0 place-items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffd60a" strokeWidth="1.5" aria-hidden="true"><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="t-h3 block !text-white">Contacto</span>
                    <span className="t-small mt-0.5 block !text-slate-300">San Martín 1580 · {site.phone}</span>
                  </span>
                  <span className="link-light t-small">Cómo llegar</span>
                </Link>
              </div>
              <p className="t-small mt-5 !text-slate-400">¿Dudas de matrícula? <a href="mailto:brasil@andaliensur.cl" className="link-yarn">brasil@andaliensur.cl</a></p>
            </div>
            <div className="grid content-start gap-4">
              <figure>
                <div className="overflow-hidden rounded-xl ring-1 ring-white/20">
                  <Image src="/fotos/estandarte-media.jpg" alt="Estudiantes de enseñanza media con estandarte del colegio en un desfile en Concepción" width={512} height={384} quality={90} sizes="(min-width: 1024px) 560px, 90vw" className="aspect-[4/3] w-full object-cover" />
                </div>
                <figcaption className="t-meta mt-2 !text-slate-400">Desfile de enseñanza media</figcaption>
              </figure>
              <figure>
                <div className="overflow-hidden rounded-xl ring-1 ring-white/20">
                  <Image src="/fotos/parvularia-acto.jpg" alt="Estudiantes de parvularia con paletas de colores en un acto escolar" width={512} height={384} quality={90} sizes="(min-width: 1024px) 560px, 90vw" className="aspect-[4/3] w-full object-cover" />
                </div>
                <figcaption className="t-meta mt-2 !text-slate-400">Parvularia en acto</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed inset-x-4 bottom-4 z-50 sm:hidden" aria-label="Postulación rápida">
        <a href={site.saeUrl} target="_blank" rel="noreferrer" className="flex h-12 w-full items-center justify-center rounded-lg bg-[#ffd60a] px-6 font-heading text-base font-semibold text-slate-900 shadow-[0_8px_24px_rgba(11,30,68,0.25)]">
          Postula por SAE
        </a>
      </div>
    </div>
  );
}
