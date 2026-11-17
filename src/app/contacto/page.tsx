"use client";

import { memo, useState } from "react";
import { Band, PageIntro, RuleList, SectionHead } from "@/components/Section";
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
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.08)]" role="status">
        <p className="t-name border-l-4 border-slate-900 pl-4">Mensaje enviado. Te responderemos a {site.email}.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="form-section space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.08)] sm:p-8">
      <div>
        <label htmlFor="nombre" className="t-label block">Nombre</label>
        <input id="nombre" name="nombre" required autoComplete="name" spellCheck={false} className="field" />
      </div>
      <div>
        <label htmlFor="email" className="t-label block">Email</label>
        <input id="email" name="email" type="email" inputMode="email" required autoComplete="email" spellCheck={false} className="field" />
      </div>
      <div>
        <label htmlFor="mensaje" className="t-label block">Mensaje</label>
        <textarea id="mensaje" name="mensaje" required rows={5} className="field" />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="pressable btn btn-dark w-full sm:w-auto"
      >
        {sending ? "Enviando…" : "Enviar mensaje"}
      </button>
      <p className="t-caption">Respuesta en días hábiles. Para matrícula usa SAE, no este formulario.</p>
    </form>
  );
});

export default function ContactPage() {
  return (
    <div className="pb-20">
      <PageIntro
        kicker="San Martín 1580, Concepción"
        title="Contacto"
        lead="Escríbenos por el formulario o por correo institucional. Para matrícula usa SAE en admision.mineduc.cl."
        meta={`${site.phone} · ${site.email}`}
      />

      <div className="mx-auto max-w-4xl px-4 pt-12 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <ContactForm />
          <div className="space-y-8">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.08)]">
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <h2 className="t-h3">Ubicación</h2>
                <a href={site.mapUrl} target="_blank" rel="noreferrer" className="pressable flex h-11 items-center link">
                  Cómo llegar
                </a>
              </div>
              <iframe
                title="Mapa Colegio República del Brasil"
                src="https://www.google.com/maps?q=Colegio%20Rep%C3%BAblica%20del%20Brasil%20San%20Mart%C3%ADn%201580%20Concepci%C3%B3n&output=embed"
                className="h-64 w-full border-t border-slate-200"
                loading="lazy"
              />
              <p className="sr-only">Mapa de San Martín 1580, Concepción</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6">
              <h2 className="t-h3">Horario secretaría</h2>
              <p className="t-body mt-2 tabular-nums">Lunes a viernes 8:30–17:30.</p>
              <p className="mt-3"><a href="mailto:brasil@andaliensur.cl" className="link-mail">brasil@andaliensur.cl</a></p>
              <p className="mt-1"><a href={site.phoneHref} className="link-mail">{site.phone}</a></p>
            </div>
          </div>
        </div>
      </div>

      <Band tone="band" labelledBy="correos-titulo">
        <SectionHead titleId="correos-titulo" title="Correos directivos" lead="Correos institucionales (SLEP Andalién Sur). Para matrícula usa SAE en admision.mineduc.cl." />
        <RuleList label="Correos directivos">
          {[
            ["Dirección", "Dino Fauricio Olivieri Díaz", "dino.olivieri@andaliensur.cl"],
            ["Inspectora General Enseñanza Media", "Rebeca Pinto Espinoza", "rebeca.pinto@andaliensur.cl"],
            ["Inspector General Enseñanza Básica", "Alejandro Olave Parra", "alejandro.olave@andaliensur.cl"],
            ["Encargada de Convivencia Educativa", "María Lourdes Alid Lagos", "maria.alid@andaliensur.cl"],
            ["Jefe de UTP", "César Pizarro Hidalgo", "cesar.pizarro@andaliensur.cl"],
            ["Secretaría general", "Colegio", "brasil@andaliensur.cl"],
          ].map(([role, name, email]) => (
            <li key={email} className="grid gap-1 border-b border-slate-200 py-4 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6">
              <span>
                <span className="t-role block">{role}</span>
                <span className="t-name block">{name}</span>
              </span>
              <a href={`mailto:${email}`} className="link-mail">{email}</a>
            </li>
          ))}
        </RuleList>
      </Band>
    </div>
  );
}
