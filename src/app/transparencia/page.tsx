import type { Metadata } from "next";
import { documents } from "@/lib/content";

export const metadata: Metadata = { title: "Transparencia" };

export default function TransparenciaPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-10 pt-6 sm:px-5">
      <header className="hero-mesh rounded-[36px] p-8 text-white sm:p-10">
        <p className="text-xs font-bold text-white/75">Documentos oficiales</p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-pretty sm:text-5xl">Transparencia</h1>
        <p className="mt-3 max-w-prose leading-relaxed text-white/85">
          Documentos del establecimiento público según Ley de Transparencia y MINEDUC. Descarga directa en PDF.
        </p>
      </header>

      <ul className="stagger mt-6 space-y-2">
        {documents.map((d) => (
          <li key={d.title} className="animate-enter-up">
            <a
              href={d.href}
              className="pressable group ios-card flex min-h-[64px] items-center gap-4 p-4"
              download
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0a84ff]/10 text-[#0a84ff]" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M7 3h7l4 4v14H7V3Z" strokeLinejoin="round"/><path d="M14 3v4h4" strokeLinejoin="round"/></svg>
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate font-heading font-bold">{d.title}</span>
                <span className="mt-0.5 block text-xs text-slate-500">{d.category} · <span className="tabular-nums">{d.year}</span></span>
              </span>
              <span className="shrink-0 rounded-full bg-[#0f2a5c] px-4 py-2 text-xs font-bold text-white transition-colors duration-150 group-hover:bg-[#1a3f7a]">
                PDF
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-xs text-slate-500">PEI, reglamento y planes RBD 4564 · SLEP Andalién Sur. Si un archivo no abre, escribe a <a href="mailto:contacto@cbrb.cl" className="underline">contacto@cbrb.cl</a>.</p>
    </div>
  );
}
