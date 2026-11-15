"use client";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { memo, useEffect, useRef, useState } from "react";
import { Document, Page, Thumbnail, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();

const ZOOMS = [0.7, 0.9, 1.1, 1.4, 1.8] as const;

export const PdfPages = memo(function PdfPages({ href }: { href: string }) {
  const [numPages, setNumPages] = useState(0);
  const [page, setPage] = useState(1);
  const [zoomIdx, setZoomIdx] = useState(2);
  const [spread, setSpread] = useState(false);
  const [showThumbs, setShowThumbs] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);

  const scale = ZOOMS[zoomIdx] ?? 1.1;
  const step = spread ? 2 : 1;
  const pages: number[] =
    spread && numPages > 1 ? [...new Set([page, page + 1].filter((p) => p <= numPages))] : [page];
  const progress = numPages ? Math.round((page / numPages) * 100) : 0;

  function go(delta: number) {
    setPage((p) => Math.min(numPages || 1, Math.max(1, p + delta)));
  }

  // Mantener vista estable al cambiar: scroll suave al inicio del viewport
  useEffect(() => {
    viewportRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, spread]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-step);
      if (e.key === "ArrowRight") go(step);
      if (e.key === "+" || e.key === "=") setZoomIdx((i) => Math.min(ZOOMS.length - 1, i + 1));
      if (e.key === "-" || e.key === "_") setZoomIdx((i) => Math.max(0, i - 1));
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  });

  return (
    <div className="mx-auto flex min-h-0 max-w-3xl flex-1 flex-col">
      {/* Progreso */}
      <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-white/20" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label={`Progreso de lectura ${progress}%`}>
        <div className="h-full rounded-full bg-[#ffd60a] transition-[width] duration-300 ease-out" style={{ width: `${progress}%` }} />
      </div>

      {/* Toolbar iOS — sólida oscura, alto contraste */}
      <div className="sticky top-0 z-20 mb-4 flex items-center gap-1.5 rounded-[24px] border border-white/25 bg-[#081430] p-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
        <button type="button" onClick={() => go(-step)} disabled={page <= 1} aria-label="Página anterior" className="pressable grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/20 transition-colors hover:bg-white/25 disabled:opacity-35">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className="min-w-[78px] text-center" aria-live="polite">
          <p className="text-sm font-bold tabular-nums leading-none text-white">{spread ? `${page}–${Math.min(page + 1, numPages)}` : page}<span className="text-white/70"> / {numPages || "…"}</span></p>
        </div>
        <button type="button" onClick={() => go(step)} disabled={page >= numPages} aria-label="Página siguiente" className="pressable grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/20 transition-colors hover:bg-white/25 disabled:opacity-35">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>

        <span className="mx-1 h-6 w-px bg-white/25" aria-hidden="true" />

        <div className="flex items-center rounded-full bg-black/40 p-0.5 ring-1 ring-white/20" role="group" aria-label="Zoom">
          <button type="button" onClick={() => setZoomIdx((i) => Math.max(0, i - 1))} aria-label="Alejar" className="pressable grid h-9 w-9 place-items-center rounded-full text-white hover:bg-white/20">−</button>
          <span className="min-w-[48px] text-center text-xs font-bold tabular-nums text-white">{Math.round(scale * 100)}%</span>
          <button type="button" onClick={() => setZoomIdx((i) => Math.min(ZOOMS.length - 1, i + 1))} aria-label="Acercar" className="pressable grid h-9 w-9 place-items-center rounded-full text-white hover:bg-white/20">+</button>
        </div>

        <span className="mx-1 hidden h-6 w-px bg-white/25 sm:block" aria-hidden="true" />

        <button type="button" onClick={() => setSpread((v) => !v)} aria-pressed={spread} className={`pressable hidden min-h-[44px] items-center gap-2 rounded-full px-4 text-sm font-bold transition-colors sm:flex ${spread ? "bg-[#ffd60a] text-slate-900" : "text-white hover:bg-white/15"}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M2 6a2 2 0 0 1 2-2h6v16H4a2 2 0 0 1-2-2V6Z"/><path d="M22 6a2 2 0 0 0-2-2h-6v16h6a2 2 0 0 0 2-2V6Z"/></svg>
          Libro
        </button>
        <span className="flex-1" />
        <button type="button" onClick={() => setShowThumbs((v) => !v)} aria-pressed={showThumbs} aria-label="Mostrar miniaturas" className={`pressable grid h-11 w-11 place-items-center rounded-full transition-colors ${showThumbs ? "bg-[#ffd60a] text-slate-900" : "text-white hover:bg-white/15"}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>
        </button>
      </div>

      <Document
        file={href}
        onLoadSuccess={(d) => { setNumPages(d.numPages); setPage(1); }}
        loading={
          <div className="space-y-3 py-8" aria-label="Cargando PDF">
            <div className="mx-auto aspect-[4/5] max-w-md animate-pulse rounded-[20px] bg-white/15" />
            <p className="text-center text-sm font-semibold text-white/80">Abriendo documento…</p>
          </div>
        }
        error={
          <div className="mx-auto max-w-md rounded-[24px] border border-white/20 bg-[#081430] p-8 text-center text-white">
            <p className="font-heading font-bold">No pudimos abrir este PDF.</p>
            <a href={href} download className="pressable mt-4 inline-flex min-h-[44px] items-center rounded-full bg-[#ffd60a] px-5 text-sm font-bold text-slate-900">Descargar PDF</a>
          </div>
        }
      >
        <div ref={viewportRef} className="min-h-[50vh] scroll-smooth">
          <div className={spread ? "flex flex-wrap justify-center gap-3" : "flex justify-center"}>
            {pages.map((p, idx) => (
              <div key={p} className="overflow-hidden rounded-[18px] bg-white p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                {spread && idx === 0 ? (
                  <div className="bg-white shadow-[inset_-16px_0_24px_-16px_rgba(0,0,0,0.45)]">
                    <Page pageNumber={p} scale={scale} renderTextLayer renderAnnotationLayer />
                  </div>
                ) : (
                  <Page pageNumber={p} scale={scale} renderTextLayer renderAnnotationLayer />
                )}
              </div>
            ))}
          </div>
        </div>

        {showThumbs && numPages > 0 ? (
          <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto rounded-[24px] border border-white/20 bg-[#081430] p-3 shadow-xl" aria-label="Miniaturas de páginas">
            {Array.from({ length: numPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPage(p)}
                aria-label={`Ir a página ${p}`}
                aria-current={p === page}
                className={`pressable shrink-0 overflow-hidden rounded-[14px] p-1 transition-all ${p === page ? "bg-white ring-2 ring-[#ffd60a]" : "bg-white/85 ring-1 ring-white/20 hover:bg-white"}`}
              >
                <Thumbnail pageNumber={p} height={96} />
                <span className="mt-1 block text-center text-[10px] font-bold tabular-nums text-slate-900">{p}</span>
              </button>
            ))}
          </div>
        ) : null}
      </Document>

      <p className="mt-3 text-center text-xs font-medium text-white/60">Toca Anterior/Siguiente, acerca con +/-, vista libro para 2 páginas. Esc para cerrar.</p>
    </div>
  );
});
