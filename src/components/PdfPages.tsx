"use client";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { memo, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();

export const PdfPages = memo(function PdfPages({ href }: { href: string }) {
  const [numPages, setNumPages] = useState(0);
  const [page, setPage] = useState(1);
  const [scale, setScale] = useState(1.2);
  const [spread, setSpread] = useState(false);

  function onLoad(doc: { numPages: number }) {
    setNumPages(doc.numPages);
    setPage(1);
  }

  const pages: number[] = spread
    ? [page, page + 1].filter((p) => p <= numPages)
    : [page];

  return (
    <div className="mx-auto max-w-3xl">
      <div className="sticky top-0 z-10 mb-4 flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/20 bg-[#0b1e44] p-2 shadow-lg">
        <button type="button" onClick={() => setPage((p) => Math.max(1, p - (spread ? 2 : 1)))} disabled={page <= 1} className="flex min-h-[44px] items-center rounded-full bg-white/15 px-4 text-sm font-bold text-white hover:bg-white/25 disabled:opacity-40">
          Anterior
        </button>
        <span className="min-w-[90px] text-center text-sm font-bold tabular-nums text-white" aria-live="polite">
          {spread ? `${page}–${Math.min(page + 1, numPages)}` : `${page}`} de {numPages || "…"}
        </span>
        <button type="button" onClick={() => setPage((p) => Math.min(numPages || 1, p + (spread ? 2 : 1)))} disabled={page >= numPages} className="flex min-h-[44px] items-center rounded-full bg-white/15 px-4 text-sm font-bold text-white hover:bg-white/25 disabled:opacity-40">
          Siguiente
        </button>
        <span className="hidden h-6 w-px bg-white/20 sm:block" aria-hidden="true" />
        <button type="button" onClick={() => setScale((s) => Math.max(0.6, +(s - 0.2).toFixed(1)))} className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/15 px-3 text-sm font-bold text-white hover:bg-white/25" aria-label="Alejar">−</button>
        <span className="min-w-[48px] text-center text-sm font-bold tabular-nums text-white">{Math.round(scale * 100)}%</span>
        <button type="button" onClick={() => setScale((s) => Math.min(2.5, +(s + 0.2).toFixed(1)))} className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/15 px-3 text-sm font-bold text-white hover:bg-white/25" aria-label="Acercar">+</button>
        <button type="button" onClick={() => setSpread((v) => !v)} aria-pressed={spread} className={`flex min-h-[44px] items-center rounded-full px-4 text-sm font-bold ${spread ? "bg-[#ffd60a] text-slate-900" : "bg-white/15 text-white hover:bg-white/25"}`}>
          {spread ? "Libro: 2 pág" : "Página simple"}
        </button>
      </div>

      <Document file={href} onLoadSuccess={onLoad} loading={<p className="py-10 text-center font-semibold text-white">Cargando PDF…</p>} error={<p className="py-10 text-center text-white">No pudimos cargar el PDF. <a className="underline font-bold" href={href} download>Descargar</a></p>}>
        <div key={`${page}-${scale}-${spread}`} className={`page-fade ${spread ? "flex flex-wrap justify-center gap-3" : "flex justify-center"}`}>
          {pages.map((p) => (
            <div key={p} className="overflow-hidden rounded-[16px] bg-white p-1.5 shadow-2xl">
              <Page pageNumber={p} scale={scale} renderTextLayer renderAnnotationLayer />
            </div>
          ))}
        </div>
      </Document>
      <p className="mt-4 text-center text-xs font-medium text-slate-200">Usa Anterior/Siguiente, zoom y vista libro de 2 páginas. Esc para cerrar.</p>
    </div>
  );
});
