"use client";

import { memo, useState } from "react";
import { site } from "@/lib/site";

const ContactForm = memo(function ContactForm() {
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Fase 1: Formspree free (50/mes) o Google Form. Reemplaza action.
    const form = e.currentTarget;
    const data = new FormData(form);
    const res = await fetch("https://formspree.io/f/xpzvkxxx", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (res.ok) setSent(true);
  }

  if (sent) {
    return (
      <p className="glass-panel rounded-2xl p-6 font-medium" role="status">
        ✅ Gracias, tu mensaje fue enviado. Te responderemos a {site.email}.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="form-section solid-panel space-y-4 rounded-2xl p-6">
      <div>
        <label htmlFor="nombre" className="block text-sm font-bold">Nombre</label>
        <input id="nombre" name="nombre" required autoComplete="name" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 dark:border-slate-700/50 dark:bg-slate-900" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-bold">Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 dark:border-slate-700/50 dark:bg-slate-900" />
      </div>
      <div>
        <label htmlFor="mensaje" className="block text-sm font-bold">Mensaje</label>
        <textarea id="mensaje" name="mensaje" required rows={5} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 dark:border-slate-700/50 dark:bg-slate-900" />
      </div>
      <button type="submit" className="rounded-full bg-blue-700 px-6 py-3 font-bold text-white transition-colors duration-150 hover:bg-blue-600">
        Enviar mensaje
      </button>
    </form>
  );
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-12">
      <header>
        <h1 className="text-4xl font-bold">Contacto</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          {site.address} · <a className="underline" href={site.phoneHref}>{site.phone}</a> · {site.email}
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <ContactForm />
        <div className="space-y-4">
          <div className="solid-panel rounded-2xl p-6">
            <h2 className="font-heading font-bold">Ubicación</h2>
            <a href={site.mapUrl} target="_blank" rel="noreferrer" className="mt-1 inline-block text-sm font-bold text-blue-700 underline dark:text-blue-300">
              Abrir en Google Maps ↗
            </a>
            <div className="mt-3 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700/50">
              <iframe
                title="Mapa Colegio República del Brasil"
                src="https://www.google.com/maps?q=Colegio%20Rep%C3%BAblica%20del%20Brasil%20San%20Mart%C3%ADn%201580%20Concepci%C3%B3n&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
              <p className="sr-only">Mapa de San Martín 1580, Concepción</p>
            </div>
          </div>
          <div className="solid-panel rounded-2xl p-6">
            <h2 className="font-heading font-bold">Horario secretaría</h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Lunes a viernes 8:30–17:30 (ajustar).</p>
          </div>
        </div>
      </div>
    </div>
  );
}
