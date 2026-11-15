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
  { tag: "Desde 1843", title: "183 años de historia", stat: "1843", text: "Escuela N°2 de Concepción. Un colegio bicentenario que sigue formando generaciones.", tint: "bg-[#EFF6FF] ring-[#0066cc]/15", num: "text-[#0066cc]", icon: "M12 8v4l3 2" },
  { tag: "Público", title: "Laico y gratuito", stat: "100%", text: "Educación pública de calidad, sin pago, abierta a todas las familias.", tint: "bg-[#ECFDF5] ring-[#0b7a3e]/15", num: "text-[#0b7a3e]", icon: "M12 3l9 5-9 5-9-5 9-5Z" },
  { tag: "SLEP", title: "Andalién Sur", stat: "80+", text: "Establecimientos en Concepción, Chiguayante, Florida y Hualqui.", tint: "bg-[#FFFBEB] ring-[#b45309]/15", num: "text-[#b45309]", icon: "M4 21V10l8-6 8 6v11" },
  { tag: "RBD 4564", title: "Comunidad activa", stat: "1.342", text: "Estudiantes, 132 docentes. Convivencia, deportes y artes en San Martín 1580.", tint: "bg-[#FEF2F2] ring-[#c81e1e]/15", num: "text-[#c81e1e]", icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" },
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
              <article className={`group relative h-full overflow-hidden border border-slate-900/[0.08] p-6 ${p.tint} shadow-[0_2px_8px_rgba(11,30,68,0.06),inset_0_1px_0_rgba(255,255,255,0.7)] ring-1 transition-transform duration-200 ease-out hover:-translate-y-0.5`}>
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/80 shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b1e44" strokeWidth="1.8" aria-hidden="true"><path d={p.icon} strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className={`font-heading text-[13px] font-medium tabular-nums ${p.num}`}>{p.stat}</span>
                </div>
                <p className="mt-5 text-[13px] font-medium text-slate-600">{p.tag}</p>
                <h3 className="mt-1 font-heading text-[20px] font-medium leading-tight text-slate-900">{p.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-700">{p.text}</p>
                <span className="pointer-events-none absolute -bottom-10 -right-6 h-28 w-28 rounded-full bg-white/50 blur-2xl" aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SEDES TEMPORALES — por obras de conservación */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20" aria-labelledby="sedes-titulo">
        <p className="text-[13px] font-medium text-slate-500">Mientras duran las obras</p>
        <h2 id="sedes-titulo" className="mt-2 font-heading text-[32px] font-bold leading-[1.05] tracking-tight sm:text-[40px]">Dónde estamos <span className="text-[#0066cc]">ahora</span></h2>
        <p className="mt-2 max-w-xl text-[15px] font-medium text-slate-600">Por las obras de conservación 2025-2027, el colegio funciona en dos sedes cercanas, jornada tarde.</p>
        <div className="mt-7 grid gap-4 lg:grid-cols-2">
          <article className="border border-slate-900/10 bg-white p-6">
            <p className="text-[13px] font-medium text-slate-500">Prekínder a 6° Básico</p>
            <h3 className="mt-1 font-heading text-[22px] font-bold leading-tight text-slate-900">Colegio Bicentenario España</h3>
            <p className="mt-1 text-[14px] text-slate-600">Av. Roosevelt 1596, Concepción — a pasos del colegio.</p>
            <p className="mt-3 text-[14px] font-semibold text-slate-900"><span className="tabular-nums">13:30–18:45</span> · Clases <span className="tabular-nums">14:00–18:35</span></p>
            <a href="https://www.google.com/maps/search/?api=1&query=Colegio+Bicentenario+Espa%C3%B1a+Roosevelt+1596+Concepci%C3%B3n" target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-[44px] items-center rounded-full bg-slate-900 px-5 text-sm font-bold text-white transition-colors hover:bg-slate-800">Cómo llegar</a>
          </article>
          <article className="border border-slate-900/10 bg-white p-6">
            <p className="text-[13px] font-medium text-slate-500">7° Básico a IV Medio</p>
            <h3 className="mt-1 font-heading text-[22px] font-bold leading-tight text-slate-900">Liceo Fiscal de Niñas</h3>
            <p className="mt-1 text-[14px] text-slate-600">Rengo 249, Concepción — centro, SLEP Andalién Sur.</p>
            <p className="mt-3 text-[14px] font-semibold text-slate-900"><span className="tabular-nums">13:30–18:45</span> · Clases <span className="tabular-nums">14:00–18:35</span></p>
            <a href="https://www.google.com/maps/search/?api=1&query=Liceo+de+Ni%C3%B1as+Rengo+249+Concepci%C3%B3n" target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-[44px] items-center rounded-full bg-slate-900 px-5 text-sm font-bold text-white transition-colors hover:bg-slate-800">Cómo llegar</a>
          </article>
        </div>
      </section>

      {/* MAPA */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20" aria-labelledby="mapa-titulo">
        <h2 id="mapa-titulo" className="font-heading text-[32px] font-bold leading-[1.05] tracking-tight sm:text-[40px]">Encuéntranos en <span className="text-[#0066cc]">Concepción</span></h2>
        <p className="mt-2 max-w-xl text-[15px] font-medium text-slate-600">San Martín 1580 — centro. Las clases se dictan en las 2 sedes de arriba.</p>
        <div className="mt-6 overflow-hidden border border-slate-200 bg-white">
          <iframe
            title="Mapa Colegio República del Brasil, San Martín 1580, Concepción"
            src="https://www.google.com/maps?q=Colegio%20Rep%C3%BAblica%20del%20Brasil%20San%20Mart%C3%ADn%201580%20Concepci%C3%B3n&output=embed"
            className="h-80 w-full"
            loading="lazy"
          />
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
            <p className="text-[14px] font-semibold text-slate-900">San Martín 1580 · (41) 222 4711</p>
            <a href={site.mapUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center rounded-full bg-[#0066cc] px-5 text-sm font-bold text-white transition-colors hover:bg-[#0058af]">Abrir en Google Maps</a>
          </div>
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

      {/* SITIOS DE INTERÉS Y AYUDA */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20" aria-labelledby="ayuda-titulo">
        <p className="text-[13px] font-medium text-slate-500">Enlaces oficiales</p>
        <h2 id="ayuda-titulo" className="mt-2 font-heading text-[32px] font-bold leading-[1.05] tracking-tight sm:text-[40px]">Sitios de <span className="text-[#0066cc]">interés y ayuda</span></h2>
        <p className="mt-2 max-w-xl text-[15px] font-medium text-slate-600">Trámites, beneficios y líneas de ayuda verificadas. En situación urgente, llama al 133 (Carabineros) o 131 (SAMU).</p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "MINEDUC", desc: "Ministerio de Educación: noticias, becas, SAE y políticas.", url: "https://www.mineduc.cl/", tel: null },
            { name: "Ayuda Mineduc", desc: "Portal ciudadano: trámites y beneficios. Lun a vie 8:00–18:00.", url: "https://www.ayudamineduc.cl/", tel: "600 600 2626" },
            { name: "SLEP Andalién Sur", desc: "Educación pública de Concepción, Chiguayante, Florida y Hualqui.", url: "https://andaliensur.gob.cl/", tel: "412524415" },
            { name: "Salud Responde", desc: "Orientación en salud y salud mental, 24/7.", url: "https://saludresponde.minsal.cl/", tel: "600 360 7777" },
            { name: "SENDA 1412", desc: "Fono Drogas y Alcohol. Gratis, anónimo, 24 horas.", url: "https://www.senda.gob.cl/orientacion/", tel: "1412" },
            { name: "Chile Atiende", desc: "Todos los trámites del Estado en un solo sitio.", url: "https://www.chileatiende.gob.cl/", tel: null },
            { name: "JUNAEB", desc: "Alimentación escolar, becas y apoyo a estudiantes.", url: "https://www.junaeb.gob.cl/", tel: null },
            { name: "Beneficios Estudiantiles", desc: "FUAS: gratuidad, becas y créditos para educación superior.", url: "https://www.beneficiosestudiantiles.cl/", tel: null },
         ].map((s) => (
            <article key={s.name} className="flex h-full flex-col border border-slate-900/10 bg-white p-6">
              <h3 className="font-heading text-[18px] font-bold leading-tight text-slate-900">{s.name}</h3>
              <p className="mt-1.5 flex-1 text-[14px] leading-relaxed text-slate-600">{s.desc}</p>
              {s.tel ? <p className="mt-3 text-[14px] font-bold text-slate-900"><a href={`tel:${s.tel.replace(/\s/g, "")}`} className="underline decoration-[#0066cc] decoration-2 underline-offset-4">{s.tel}</a></p> : null}
              <a href={s.url} target="_blank" rel="noreferrer" className="mt-3 inline-flex min-h-[44px] items-center gap-1.5 text-[15px] font-bold text-[#0066cc]">Visitar sitio
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* SÍGUENOS */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20" aria-labelledby="social-titulo">
        <h2 id="social-titulo" className="font-heading text-[32px] font-bold leading-[1.05] tracking-tight sm:text-[40px]">Síguenos <span className="text-[#0066cc]">en redes</span></h2>
        <p className="mt-2 max-w-xl text-[15px] font-medium text-slate-600">El día a día — actos, desfiles, deportes y avisos — lo publicamos en nuestras redes oficiales.</p>
        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          <a href={site.instagram} target="_blank" rel="noreferrer" className="group flex items-center gap-4 border border-slate-900/10 bg-white p-6">
            <Image src="/icons/instagram-black.svg" alt="" width={28} height={28} className="h-7 w-7 shrink-0" />
            <span>
              <span className="block font-heading text-[20px] font-medium leading-tight text-slate-900">Instagram</span>
              <span className="mt-0.5 block text-[14px] text-slate-600">@colegio_brasil</span>
              <span className="mt-2 block text-[15px] font-medium text-[#0066cc]">Seguir</span>
            </span>
          </a>
          <a href={site.facebook} target="_blank" rel="noreferrer" className="group flex items-center gap-4 border border-slate-900/10 bg-white p-6">
            <Image src="/icons/facebook-black.svg" alt="" width={28} height={28} className="h-7 w-7 shrink-0" />
            <span>
              <span className="block font-heading text-[20px] font-medium leading-tight text-slate-900">Facebook</span>
              <span className="mt-0.5 block text-[14px] text-slate-600">Colegio Bicentenario</span>
              <span className="mt-2 block text-[15px] font-medium text-[#0066cc]">Seguir</span>
            </span>
          </a>
          <Link href="/contacto" className="group flex items-center gap-4 border border-slate-900/10 bg-white p-6">
            <span className="grid h-7 w-7 shrink-0 place-items-center">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0b1e44" strokeWidth="1.8" aria-hidden="true"><path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>
            </span>
            <span>
              <span className="block font-heading text-[20px] font-medium leading-tight text-slate-900">Contacto</span>
              <span className="mt-0.5 block text-[14px] text-slate-600">San Martín 1580</span>
              <span className="mt-2 block text-[15px] font-medium text-[#0066cc]">Cómo llegar</span>
            </span>
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
