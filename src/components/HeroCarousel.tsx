"use client";

import Image from "next/image";
import { memo, useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import { saeCarousel } from "@/lib/content";

/**
 * Slideshow del hero: crossfade suave entre láminas SAE 2027.
 * Avance cada 6 s, pausa en hover/foco, respeta prefers-reduced-motion.
 */
export const HeroCarousel = memo(function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useRef(false);

  const go = useCallback((delta: number) => {
    setIndex((i) => (i + delta + saeCarousel.length) % saeCarousel.length);
  }, []);

  const touchX = useRef<number | null>(null);
  const onTouchStart = useCallback((e: TouchEvent) => {
    touchX.current = e.touches[0]?.clientX ?? null;
  }, []);
  const onTouchEnd = useCallback((e: TouchEvent) => {
    if (touchX.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchX.current;
    const dx = endX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) < 40) return;
    go(dx < 0 ? 1 : -1);
  }, [go]);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) setPaused(true);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
  }, [paused, go]);

  const slide = saeCarousel[index];

  return (
    <figure
      aria-roledescription="carrusel"
      aria-label="Cómo postular al SAE 2027, paso a paso"
      className="group w-full max-w-[400px] overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/30 ring-1 ring-white/20 lg:justify-self-end"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => !reduced.current && setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => !reduced.current && setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-100" style={{ touchAction: "pan-y" }}>
        {saeCarousel.map((s, i) => (
          <Image
            key={s.src}
            src={s.src}
            alt={s.alt}
            width={720}
            height={900}
            quality={90}
            sizes="400px"
            priority={i === 0}
            aria-hidden={i !== index}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out"
            style={{ opacity: i === index ? 1 : 0 }}
          />
        ))}
        <span className="t-badge absolute left-3 top-3 rounded-md bg-slate-900/70 px-2.5 py-1">
          Cómo postular
        </span>
        {!paused ? (
          <span key={`bar-${index}`} className="hero-progress absolute inset-x-0 bottom-0 h-0.5 origin-left bg-[#ffd60a]" aria-hidden="true" />
        ) : null}
      </div>

      <div className="border-t border-slate-100 px-4 py-3">
        <p key={`cap-${index}`} className="t-small animate-enter-in">{slide.caption}</p>
        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-0.5" role="tablist" aria-label="Elegir lámina">
            {saeCarousel.map((s, i) => (
              <button
                key={s.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`${s.title}: lámina ${i + 1} de ${saeCarousel.length}`}
                onClick={() => setIndex(i)}
                className="flex h-11 items-center px-1"
              >
                <span className={`block h-2.5 rounded-full transition-colors duration-200 ${i === index ? "w-7 bg-[#0b1e44]" : "w-2.5 bg-slate-300"}`} aria-hidden="true" />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="t-meta">{index + 1} / {saeCarousel.length}</span>
            <button type="button" onClick={() => go(-1)} aria-label="Lámina anterior" className="pressable grid h-11 w-11 place-items-center rounded-lg border border-slate-200 text-slate-600 transition-colors duration-150 hover:border-slate-900 hover:bg-slate-900 hover:text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Lámina siguiente" className="pressable grid h-11 w-11 place-items-center rounded-lg border border-slate-200 text-slate-600 transition-colors duration-150 hover:border-slate-900 hover:bg-slate-900 hover:text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>
    </figure>
  );
});
