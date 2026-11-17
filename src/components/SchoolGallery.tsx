import { memo } from "react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { gallery } from "@/lib/content";
import { site } from "@/lib/site";

export const SchoolGallery = memo(function SchoolGallery({ headingId = "galeria-titulo", compact = false }: { headingId?: string; compact?: boolean }) {
  const items = compact ? gallery.slice(0, 4) : gallery;
  return (
    <section aria-labelledby={headingId} className="mt-20 bg-[var(--band)] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="min-w-0 max-w-2xl">

            <h2 id={headingId} className="t-h2 mt-2 text-pretty">
              Vida escolar en imágenes
            </h2>
            <p className="t-lead mt-3 max-w-xl">
              Fotos oficiales de la vitrina SAE en MINEDUC. El día a día está en nuestras redes.
            </p>
          </div>
          <p className="t-body flex flex-wrap gap-5">
            <a href={site.instagram} target="_blank" rel="noreferrer" className="link">Instagram</a>
            <a href={site.facebook} target="_blank" rel="noreferrer" className="link">Facebook</a>
          </p>
        </div>

        <ul className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3" aria-label="Galería de vida escolar">
          {items.map((g, idx) => (
            <Reveal key={g.title} delay={idx * 40}>
              <figure className="group">
                <div className="overflow-hidden rounded-xl bg-white shadow-[0_1px_2px_rgba(15,23,42,0.08)] ring-1 ring-slate-900/5">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    width={512}
                    height={384}
                    quality={90}
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 90vw"
                    className="media-zoom aspect-[4/3] w-full object-cover"
                  />
                </div>
                <figcaption className="pt-3">
                  <p className="t-name leading-tight">{g.title} <span className="t-caption ml-2">{g.credit}</span></p>
                  <p className="t-small mt-1">{g.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
});
