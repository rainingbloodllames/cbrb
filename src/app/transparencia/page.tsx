import type { Metadata } from "next";
import { TransparenciaClientWrapper } from "@/components/TransparenciaClientWrapper";
import { PageIntro } from "@/components/Section";
import { documents } from "@/lib/content";

export const metadata: Metadata = { title: "Transparencia" };

export default function TransparenciaPage() {
  return (
    <div className="pb-20">
      <PageIntro
        kicker="Documentos oficiales"
        title="Transparencia"
        lead="Lee los documentos aquí mismo: pasa páginas, acerca y descarga el PDF."
        meta="PEI · Reglamento interno · Planes · Evaluación · Seguridad — RBD 4564"
      />

      <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.08)]">
          <div className="border-b border-slate-200 bg-[#f8fafc] px-6 py-3 font-mono text-xs text-slate-500">
            Documentos PEI, reglamento y planes — RBD 4564 · SLEP Andalién Sur
          </div>
          <div className="px-2 sm:px-4">
            <TransparenciaClientWrapper docs={documents} />
          </div>
        </div>

        <p className="mt-8 max-w-prose text-sm leading-relaxed text-slate-600">PEI, reglamento y planes RBD 4564 · SLEP Andalién Sur. Si un archivo no abre, escribe a <a href="mailto:brasil@andaliensur.cl" className="link-inline">brasil@andaliensur.cl</a>.</p>
      </div>
    </div>
  );
}
