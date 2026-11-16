"use client";

import Image from "next/image";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import type { GalleryItem } from "@/lib/content";

/**
 * Carrusel SAE 2027: una lámina a la vez, auto-avance cada 5 s,
 * pausa en hover/foco, respeta prefers-reduced-motion.
 */
export const SaeCarousel = memo(function SaeCarousel({ items }: { items: GalleryItem[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useRef(false);

  const go = useCallback((delta: number) => {
    setIndex((i) => (i + delta + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) setPaused(true);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), 5000);
    return () => clearInterval(id);
  }, [paused, go]);

  const current = items[index];

  return (
    <div
      className="grid gap-6 lg:grid-cols-[480px_1fr] lg:items-start"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(reduced.current ? true : false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => !reduced.current && setPaused(false)}
    >
      <figure className="w-full max-w-[480px] overflow-hidden rounded-xl bg-white shadow-[0_4px_24px_rgba(11,30,68,0.1)] ring-1 ring-slate-900/5">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          width={720}
          height={900}
          quality={90}
          sizes="(min-width: 1024px) 480px, 90vw"
          className="animate-enter-in aspect-[4/5] w-full object-cover"
        />
        <figcaption className="border-t border-slate-200 px-4 py-3">
          <p className="t-name !text-sm">{current.title} <span className="t-meta ml-2">{current.credit}</span></p>
          <p className="t-small mt-1">{current.caption}</p>
        </figcaption>
        <div className="flex items-center justify-between gap-3 border-t border-slate-200 px-4 py-3">
          <div className="flex gap-2">
            <button type="button" onClick={() => go(-1)} aria-label="Lámina anterior" className="pressable grid h-10 w-10 place-items-center rounded-lg border border-slate-300 text-slate-900 transition-colors duration-150 hover:border-slate-900 hover:bg-slate-900 hover:text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Lámina siguiente" className="pressable grid h-10 w-10 place-items-center rounded-lg border border-slate-300 text-slate-900 transition-colors duration-150 hover:border-slate-900 hover:bg-slate-900 hover:text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
          <p className="t-meta tabular-nums">{index + 1} / {items.length}{paused ? " · Pausado" : ""}</p>
          <div className="flex gap-1.5" role="tablist" aria-label="Elegir lámina">
            {items.map((g, i) => (
              <button
                key={g.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`${g.title}: lámina ${i + 1} de ${items.length}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-colors duration-150 ${i === index ? "w-7 bg-[#0b1e44]" : "w-2.5 bg-slate-300"}`}
              />
            ))}
          </div>
        </div>
      </figure>

      <div className="grid content-start gap-4">
        <p className="t-body max-w-prose">
          Ocho láminas del carrusel oficial: qué es el SAE, cómo entrar, cómo buscar al colegio, cómo ordenar y enviar, qué pasa después y las fechas.
        </p>
        <ol className="grid gap-2">
          {items.map((g, i) => (
            <li key={g.src}>
              <button type="button" onClick={() => setIndex(i)} aria-current={i === index ? "true" : undefined} className={`flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left transition-colors duration-150 ${i === index ? "border-[#0b1e44] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.08)]" : "border-transparent hover:bg-white/70"}`}>
                <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full font-mono text-xs tabular-nums ${i === index ? "bg-[#0b1e44] text-white" : "bg-white text-slate-500 ring-1 ring-slate-300"}`}>{i + 1}</span>
                <span className="t-name !text-sm">{g.title}</span>
                <span className="t-small hidden sm:block">{g.caption}</span>
              </button>
            </li>
          ))}
        </ol>
        <p className="t-small">Solo plataforma oficial: <a href="https://www.sistemadeadmisionescolar.cl" target="_blank" rel="noreferrer" className="link-inline">sistemadeadmisionescolar.cl</a></p>
      </div>
    </div>
  );
});
