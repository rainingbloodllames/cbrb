import { memo } from "react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { gallery } from "@/lib/content";
import { site } from "@/lib/site";

export const SchoolGallery = memo(function SchoolGallery({ headingId = "galeria-titulo", compact = false }: { headingId?: string; compact?: boolean }) {
  const items = compact ? gallery.slice(0, 4) : gallery;
  return (
    <section aria-labelledby={headingId} className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="min-w-0 max-w-2xl">
          <p className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-slate-500">Galería</p>
          <h2 id={headingId} className="mt-2 font-heading text-[32px] font-extrabold leading-[1.05] tracking-tight text-pretty sm:text-[40px]">
            Vida escolar <span className="text-[#0066cc]">en imágenes</span>
          </h2>
          <p className="mt-3 text-[16px] font-medium leading-relaxed text-slate-600">
            Fotos oficiales de la vitrina SAE (MINEDUC). Día a día en nuestras redes.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="pressable flex min-h-[48px] items-center rounded-full bg-slate-900 px-6 text-sm font-bold text-white transition-colors duration-150 hover:bg-slate-800 dark:bg-white dark:text-slate-900"
          >
            Instagram
          </a>
          <a
            href={site.facebook}
            target="_blank"
            rel="noreferrer"
            className="pressable flex min-h-[48px] items-center rounded-full border border-slate-300 px-6 text-sm font-bold text-slate-900 transition-colors duration-150 hover:bg-slate-100 dark:border-slate-600 dark:text-white dark:hover:bg-slate-800"
          >
            Facebook
          </a>
        </div>
      </div>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Galería de vida escolar">
        {items.map((g, idx) => (
          <Reveal key={g.title} delay={idx * 50} className={idx === 0 ? "sm:col-span-2 lg:col-span-2" : ""}>
            <figure className="group relative h-full min-w-0 overflow-hidden rounded-[24px] bg-slate-100 shadow-sm ring-1 ring-slate-900/5">
              <Image
                src={g.src}
                alt={g.alt}
                width={1200}
                height={800}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw"
                className={`media-zoom w-full object-cover ${idx === 0 ? "aspect-[16/10]" : "aspect-[4/3]"}`}
              />
              <figcaption className="absolute inset-x-4 bottom-4 rounded-[18px] border border-white/60 bg-white/95 p-4 shadow-lg backdrop-blur">
                <p className="font-heading text-[14px] font-extrabold leading-tight text-slate-900">{g.title}</p>
                <p className="mt-1 text-[13px] font-medium leading-snug text-slate-600">{g.caption}</p>
                <p className="mt-1.5 text-[11px] font-bold uppercase tracking-wide text-slate-500">{g.credit}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>

      <p className="mt-5 text-[13px] font-medium leading-relaxed text-slate-500">
        Fotos: vitrina SAE · MINEDUC (RBD 4564) y prensa (Resumen.cl, Diario Concepción, DEP). <span className="font-semibold text-slate-700">Para sumar fotos:</span> <code className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[12px]">public/fotos/</code> + <code className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[12px]">src/lib/content.ts</code>
      </p>
    </section>
  );
});
