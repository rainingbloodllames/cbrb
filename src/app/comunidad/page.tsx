import type { Metadata } from "next";
import { NewsCard } from "@/components/NewsCard";
import { news } from "@/lib/content";

export const metadata: Metadata = { title: "Comunidad" };

export default function ComunidadPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-12">
      <header>
        <h1 className="text-4xl font-bold">Comunidad</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Noticias, actividades y vida escolar. Editable en Fase 2 con Sanity (sin código).
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {news.map((n) => (
          <NewsCard key={n.slug} item={n} />
        ))}
      </div>

      <section className="solid-panel rounded-2xl p-6">
        <h2 className="font-heading text-xl font-bold">Calendario</h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Cuando el colegio cree el Google Calendar público (@cbrb.cl), pega aquí el embed (Compartir → Incorporar calendario).
        </p>
        <div className="mt-4 rounded-xl border border-dashed border-slate-300 p-6 text-center text-sm text-slate-500 dark:border-slate-700/50">
          [ Espacio para iframe Google Calendar ]
        </div>
      </section>

      <section className="solid-panel rounded-2xl p-6">
        <h2 className="font-heading text-xl font-bold">Galería</h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Embed de Instagram @colegio_brasil (sin API paga). Sube fotos a <code>public/fotos/</code> en Fase 1.
        </p>
      </section>
    </div>
  );
}
