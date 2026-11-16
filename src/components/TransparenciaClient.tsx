"use client";

import dynamic from "next/dynamic";
import { memo, useEffect, useState } from "react";
import type { DocItem } from "@/lib/content";
import { Reveal } from "./Reveal";

// El visor (react-pdf + pdf.js ≈ 1 MB) vive en su propio chunk: la lista abre
// al instante y el chunk pesado solo se baja al leer. Preload en intent.
const PdfPages = dynamic(() => import("./PdfPages").then((m) => m.PdfPages), {
  ssr: false,
  loading: () => (
    <div className="space-y-3 py-8" aria-label="Cargando visor">
      <div className="mx-auto aspect-[4/5] max-w-md animate-pulse rounded-[20px] bg-white/15" />
      <p className="text-center text-sm font-semibold text-white/80">Abriendo visor…</p>
    </div>
  ),
});

export const TransparenciaClient = memo(function TransparenciaClient({ docs }: { docs: DocItem[] }) {
  const [selected, setSelected] = useState<DocItem | null>(null);

  const preloadViewer = () => {
    void import("./PdfPages");
  };

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <ul>
        {docs.map((d, i) => (
          <Reveal key={d.href} delay={Math.min(i, 8) * 40}>
            <li className="flex min-h-[72px] items-center gap-4 border-b border-slate-200 px-4 py-4 transition-colors duration-150 hover:bg-slate-50">
              <button
                type="button"
                onClick={() => setSelected(d)}
                onMouseEnter={preloadViewer}
                onFocus={preloadViewer}
                className="pressable flex min-w-0 flex-1 items-center gap-4 text-left"
                aria-haspopup="dialog"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-slate-900 text-white" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 3h7l4 4v14H7V3Z" strokeLinejoin="round"/><path d="M14 3v4h4" strokeLinejoin="round"/></svg>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-heading text-base font-semibold text-slate-900">{d.title}</span>
                  <span className="mt-1 block font-mono text-xs tabular-nums text-slate-500">{d.category} · {d.year} · PDF</span>
                </span>
              </button>
              <div className="flex shrink-0 items-center gap-4">
                <button
                  type="button"
                  onClick={() => setSelected(d)}
                  onMouseEnter={preloadViewer}
                  onFocus={preloadViewer}
                  className="pressable flex h-11 items-center link"
                >
                  Leer
                </button>
                <a
                  href={d.href}
                  download
                  className="pressable hidden h-11 items-center link sm:flex"
                >
                  Descargar
                </a>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>

      {selected ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Visor: ${selected.title}`}
          className="dialog-enter fixed inset-0 z-[70] flex flex-col bg-[#0b1e44] text-white"
        >
          <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center gap-3 px-4 py-4">
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="pressable flex h-11 items-center rounded-xl bg-white/10 px-4 text-sm font-semibold hover:bg-white/20"
            >
              Cerrar
            </button>
            <p className="min-w-0 flex-1 truncate font-heading text-base font-semibold">{selected.title}</p>
            <a
              href={selected.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir ${selected.title} en el visor del navegador (pestaña nueva)`}
              className="pressable flex h-11 items-center gap-1.5 rounded-xl bg-white/10 px-4 text-sm font-semibold hover:bg-white/20"
            >
              Abrir
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a
              href={selected.href}
              download
              className="pressable flex h-11 items-center rounded-xl bg-white px-4 text-sm font-semibold text-[#0b1e44] hover:bg-slate-100"
            >
              Descargar
            </a>
          </div>
          <div className="min-h-0 flex-1 overflow-auto px-4 pb-6">
            <PdfPages key={selected.href} href={selected.href} />
          </div>
        </div>
      ) : null}
      <span className="hidden">{`doc-${selected?.href ?? ""}-${docs.length}`}</span>
    </>
  );
});
