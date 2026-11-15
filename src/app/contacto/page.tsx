"use client";

import { memo, useState } from "react";
import { site } from "@/lib/site";

const ContactForm = memo(function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const res = await fetch("https://formspree.io/f/xpzvkxxx", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    setSending(false);
    if (res.ok) setSent(true);
  }

  if (sent) {
    return (
      <p className="ios-card p-6 font-medium" role="status">
        Gracias, tu mensaje fue enviado. Te responderemos a {site.email}.
      </p>
    );
  }

  const inputCls =
    "mt-1.5 min-h-[52px] w-full rounded-[18px] border border-slate-300 bg-white px-4 text-base text-slate-900 placeholder:text-slate-500";
  return (
    <form onSubmit={onSubmit} className="form-section ios-card space-y-4 p-6">
      <div>
        <label htmlFor="nombre" className="block text-sm font-bold">Nombre</label>
        <input id="nombre" name="nombre" required autoComplete="name" spellCheck={false} className={inputCls} />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-bold">Email</label>
        <input id="email" name="email" type="email" inputMode="email" required autoComplete="email" spellCheck={false} className={inputCls} />
      </div>
      <div>
        <label htmlFor="mensaje" className="block text-sm font-bold">Mensaje</label>
        <textarea id="mensaje" name="mensaje" required rows={5} className={`${inputCls} min-h-[120px] py-3`} />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="pressable flex min-h-[52px] w-full items-center justify-center rounded-full bg-[#0f2a5c] px-6 font-heading text-base font-bold text-white transition-colors duration-150 hover:bg-[#1a3f7a] disabled:opacity-60 sm:w-auto"
      >
        {sending ? "Enviando…" : "Enviar mensaje"}
      </button>
      <p className="text-xs text-slate-700">Respuesta en días hábiles. Para matrícula usa SAE, no este formulario.</p>
    </form>
  );
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-16 pt-8 sm:px-6">
      <header className="hero-mesh relative overflow-hidden rounded-2xl p-8 text-white sm:rounded-3xl sm:p-10">
        <h1 className="font-heading text-[42px] font-bold leading-[0.95] tracking-tight text-white sm:text-[56px]">Contacto</h1>
        <p className="mt-4 text-[17px] font-medium leading-relaxed text-slate-100">
          {site.address} · <a className="font-bold underline decoration-[#ffd60a] decoration-2 underline-offset-4" href={site.phoneHref}>{site.phone}</a> · {site.email}
        </p>
      </header>

      <div className="grid gap-3 pt-8 lg:grid-cols-2">
        <ContactForm />
        <div className="space-y-3">
          <div className="ios-card overflow-hidden">
            <div className="flex items-center justify-between gap-4 p-5">
              <h2 className="font-heading text-lg font-bold text-slate-900">Ubicación</h2>
              <a href={site.mapUrl} target="_blank" rel="noreferrer" className="pressable flex min-h-[44px] items-center rounded-full bg-[#0066cc] px-4 text-sm font-bold text-white">
                Cómo llegar
              </a>
            </div>
            <iframe
              title="Mapa Colegio República del Brasil"
              src="https://www.google.com/maps?q=Colegio%20Rep%C3%BAblica%20del%20Brasil%20San%20Mart%C3%ADn%201580%20Concepci%C3%B3n&output=embed"
              className="h-64 w-full border-t border-slate-100 dark:border-slate-800"
              loading="lazy"
            />
            <p className="sr-only">Mapa de San Martín 1580, Concepción</p>
          </div>
          <div className="ios-card p-5">
            <h2 className="font-heading text-lg font-bold text-slate-900">Horario secretaría</h2>
            <p className="mt-1 text-sm font-semibold text-slate-700">Lunes a viernes 8:30–17:30.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
