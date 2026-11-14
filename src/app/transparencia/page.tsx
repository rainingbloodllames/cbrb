import type { Metadata } from "next";
import { documents } from "@/lib/content";

export const metadata: Metadata = { title: "Transparencia" };

export default function TransparenciaPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-12">
      <header>
        <h1 className="text-4xl font-bold">Transparencia</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Documentos oficiales del establecimiento público. Sube los PDF a <code>public/docs/</code> o enlaza Drive público.
        </p>
      </header>

      <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700/50">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              <th className="px-4 py-3 font-heading">Documento</th>
              <th className="px-4 py-3 font-heading">Categoría</th>
              <th className="px-4 py-3 font-heading">Año</th>
              <th className="px-4 py-3 font-heading">Descargar</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((d) => (
              <tr key={d.title} className="border-t border-slate-100 dark:border-slate-700/50">
                <td className="px-4 py-3">{d.title}</td>
                <td className="px-4 py-3">{d.category}</td>
                <td className="px-4 py-3">{d.year}</td>
                <td className="px-4 py-3">
                  <a href={d.href} className="font-bold text-blue-700 underline dark:text-blue-300">PDF ↓</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-slate-500">
        PEI, reglamento y protocolos exigidos por Ley de Transparencia y MINEDUC. RBD 4564 · SLEP Andalién Sur.
      </p>
    </div>
  );
}
