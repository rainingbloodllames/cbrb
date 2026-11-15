import type { Metadata } from "next";
import { TransparenciaClientWrapper } from "@/components/TransparenciaClientWrapper";
import { documents } from "@/lib/content";

export const metadata: Metadata = { title: "Transparencia" };

export default function TransparenciaPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-16 pt-8 sm:px-6">
      <header className="hero-mesh relative overflow-hidden rounded-[32px] p-8 text-white sm:rounded-[40px] sm:p-10">
        <p className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-white/90">Documentos oficiales</p>
        <h1 className="mt-3 font-heading text-[42px] font-extrabold leading-[0.95] tracking-tight text-white sm:text-[56px]">Transparencia</h1>
        <p className="mt-4 max-w-prose text-[17px] font-medium leading-relaxed text-slate-100">
          Lee los documentos aquí mismo, como un libro: pasa páginas, acerca y descarga el PDF. Todo en nombres claros.
        </p>
        <p className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-[13px] font-extrabold text-slate-900">PEI · RIE · Planes · Evaluación · Seguridad</p>
      </header>

      <TransparenciaClientWrapper docs={documents} />

      <p className="mt-5 text-[13px] font-semibold text-slate-700 dark:text-slate-200">PEI, reglamento y planes RBD 4564 · SLEP Andalién Sur. Si un archivo no abre, escribe a <a href="mailto:contacto@cbrb.cl" className="underline font-extrabold text-slate-900">contacto@cbrb.cl</a>.</p>
    </div>
  );
}
