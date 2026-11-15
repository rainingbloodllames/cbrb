"use client";

import { memo, useEffect, useState } from "react";
import type { DocItem } from "@/lib/content";
import { PdfPages } from "./PdfPages";
import { Reveal } from "./Reveal";

export const TransparenciaClient = memo(function TransparenciaClient({ docs }: { docs: DocItem[] }) {
  const [selected, setSelected] = useState<DocItem | null>(null);

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
      <ul className="mt-6 space-y-2">
        {docs.map((d, i) => (
          <Reveal key={d.href} delay={Math.min(i, 8) * 40}>
            <div className="card-lift ios-card flex min-h-[72px] items-center gap-4 p-4">
              <button
                type="button"
                onClick={() => setSelected(d)}
                className="pressable flex min-w-0 flex-1 items-center gap-4 text-left"
                aria-haspopup="dialog"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-[#0066cc] text-white" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 3h7l4 4v14H7V3Z" strokeLinejoin="round"/><path d="M14 3v4h4" strokeLinejoin="round"/></svg>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-heading font-bold text-slate-900">{d.title}</span>
                  <span className="mt-1 block text-[13px] font-semibold text-slate-600">{d.category} · <span className="tabular-nums">{d.year}</span> · PDF</span>
                </span>
              </button>
              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelected(d)}
                  className="pressable flex min-h-[44px] items-center rounded-full bg-[#0066cc] px-5 text-sm font-bold text-white transition-colors duration-150 hover:bg-[#0058af]"
                >
                  Leer
                </button>
                <a
                  href={d.href}
                  download
                  className="pressable hidden min-h-[44px] items-center rounded-full bg-slate-100 px-4 text-sm font-bold text-slate-900 ring-1 ring-slate-200 sm:flex hover:bg-slate-200"
                >
                  Descargar
                </a>
              </div>
            </div>
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
              className="pressable flex min-h-[44px] items-center rounded-full bg-white/10 px-4 text-sm font-bold hover:bg-white/20"
            >
              Cerrar
            </button>
            <p className="min-w-0 flex-1 truncate font-heading font-bold">{selected.title}</p>
            <a
              href={selected.href}
              download
              className="pressable flex min-h-[44px] items-center rounded-full bg-white px-4 text-sm font-bold text-[#0b1e44] hover:bg-slate-100"
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
