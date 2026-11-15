import type { Metadata } from "next";
import { TransparenciaClientWrapper } from "@/components/TransparenciaClientWrapper";
import { documents } from "@/lib/content";

export const metadata: Metadata = { title: "Transparencia" };

export default function TransparenciaPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-10 pt-6 sm:px-5">
      <header className="hero-mesh rounded-[36px] p-8 text-white sm:p-10">
        <p className="text-xs font-bold text-white/75">Documentos oficiales</p>
        <h1 className="mt-2 font-heading text-4xl font-bold text-pretty sm:text-5xl">Transparencia</h1>
        <p className="mt-3 max-w-prose leading-relaxed text-white/85">
          Lee los documentos aquí mismo, como un libro: pasa páginas, acerca y descarga el PDF. Todo en nombres claros.
        </p>
        <p className="mt-4 inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold">PEI · RIE · Planes · Evaluación · Seguridad</p>
      </header>

      <TransparenciaClientWrapper docs={documents} />

      <p className="mt-5 text-xs text-slate-600">PEI, reglamento y planes RBD 4564 · SLEP Andalién Sur. Si un archivo no abre, escribe a <a href="mailto:contacto@cbrb.cl" className="underline">contacto@cbrb.cl</a>.</p>
    </div>
  );
}
