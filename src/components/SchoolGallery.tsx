import { memo } from "react";
import { gallery } from "@/lib/content";
import { site } from "@/lib/site";

export const SchoolGallery = memo(function SchoolGallery({ headingId = "galeria-titulo", compact = false }: { headingId?: string; compact?: boolean }) {
  const items = compact ? gallery.slice(0, 4) : gallery;
  return (
    <section aria-labelledby={headingId} className="mx-auto max-w-6xl px-4 pt-12 sm:px-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="min-w-0">
          <h2 id={headingId} className="font-heading text-3xl font-bold text-pretty sm:text-4xl">
            Vida escolar en imágenes
          </h2>
          <p className="mt-1.5 max-w-prose text-slate-600 dark:text-slate-400">
            Fotos oficiales de la vitrina SAE (MINEDUC). Las mismas que ves en Google Imágenes. Día a día en nuestras redes.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="pressable flex min-h-[44px] items-center rounded-full bg-slate-900 px-5 text-sm font-bold text-white transition-colors duration-150 hover:bg-slate-800 dark:bg-white dark:text-slate-900"
          >
            Instagram @colegio_brasil
          </a>
          <a
            href={site.facebook}
            target="_blank"
            rel="noreferrer"
            className="pressable flex min-h-[44px] items-center rounded-full bg-slate-900/5 px-5 text-sm font-bold transition-colors duration-150 hover:bg-slate-900/10 dark:bg-white/10 dark:hover:bg-white/15"
          >
            Facebook
          </a>
        </div>
      </div>

      <ul className="stagger mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" aria-label="Galería de vida escolar">
        {items.map((g, idx) => (
          <li key={g.title} className={`animate-enter-up ${idx === 0 ? "sm:col-span-2 lg:col-span-2" : ""}`}>
            <figure className="group relative h-full min-w-0 overflow-hidden rounded-[28px] bg-white dark:bg-[#1c1c1e]">
              <img
                src={g.src}
                alt={g.alt}
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                className={`w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] ${idx === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}
              />
              <figcaption className="glass-panel absolute inset-x-3 bottom-3 rounded-[20px] px-4 py-3">
                <p className="font-heading text-sm font-bold leading-snug">{g.title}</p>
                <p className="mt-0.5 text-xs leading-snug text-slate-600 dark:text-slate-300">{g.caption}</p>
                <p className="mt-1 text-[10px] leading-snug text-slate-600 dark:text-slate-400">{g.credit}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
        Fotos: vitrina SAE · MINEDUC (RBD 4564, originales en cdnsae.mineduc.cl) y prensa (Resumen.cl, Diario Concepción, DEP).
        Google Photos privado no se puede embeber: si el colegio comparte un álbum público, enlázalo aquí.
        Para sumar fotos nuevas: súbelas a <code className="rounded bg-slate-900/5 px-1.5 py-0.5 dark:bg-white/10">public/fotos/</code> y actualiza <code className="rounded bg-slate-900/5 px-1.5 py-0.5 dark:bg-white/10">src/lib/content.ts</code>.
      </p>
    </section>
  );
});
