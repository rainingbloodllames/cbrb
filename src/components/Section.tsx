import type { ReactNode } from "react";

/**
 * Sistema de definición para páginas interiores.
 * Profundidad por capas: banda (fondo) > hoja blanca elevada > fila con reglas.
 * Tipo único: t-h1 / t-h2 / t-lead / t-meta. Links únicos: link / link-inline / link-mail.
 * Sin folios ni eyebrows: el título nombra la sección.
 * El hero de portada no usa esto: tiene su propio panel navy.
 */

export const CONTAINER_NARROW = "mx-auto max-w-4xl px-4 sm:px-6";
export const CONTAINER_WIDE = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export function PageIntro({
  kicker,
  title,
  lead,
  meta,
  wide = false,
  children,
}: {
  kicker: string;
  title: string;
  lead: string;
  meta?: string;
  wide?: boolean;
  children?: ReactNode;
}) {
  return (
    <header className={wide ? `${CONTAINER_WIDE} pt-10 sm:pt-14` : `${CONTAINER_NARROW} pt-10 sm:pt-14`}>
      <div className="sheet border-l-4 !border-l-[#0b1e44] p-6 sm:p-10">
        <p className="t-small font-medium">{kicker}</p>
        <h1 className="t-h1 mt-2">{title}</h1>
        <p className="t-lead mt-4 max-w-prose">{lead}</p>
        {meta ? <p className="mt-5 inline-flex rounded-full bg-[#eef3f9] px-4 py-2 t-meta !text-[#0b1e44] ring-1 ring-slate-200">{meta}</p> : null}
        {children ? <div className="mt-6">{children}</div> : null}
      </div>
    </header>
  );
}

export function Band({
  tone = "band",
  labelledBy,
  wide = false,
  children,
}: {
  tone?: "band" | "navy" | "white";
  labelledBy?: string;
  wide?: boolean;
  children: ReactNode;
}) {
  const toneCls =
    tone === "navy"
      ? "band-navy-texture text-white"
      : tone === "band"
        ? "bg-[var(--band)]"
        : "bg-white";
  const pad = tone === "white" ? "py-[var(--sec-y)]" : "py-[var(--band-y)]";
  const container = wide ? CONTAINER_WIDE : CONTAINER_NARROW;
  return (
    <section aria-labelledby={labelledBy} className={`mt-12 sm:mt-16 ${pad} ${toneCls}`}>
      <div className={container}>{children}</div>
    </section>
  );
}

export function SectionHead({
  titleId,
  title,
  lead,
  action,
  light = false,
}: {
  titleId: string;
  title: string;
  lead?: string;
  action?: ReactNode;
  light?: boolean;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div className={`min-w-0 max-w-3xl border-l-4 pl-5 ${light ? "border-[#ffd60a]" : "border-[#0b1e44]"}`}>
        <h2 id={titleId} className={`t-h2 ${light ? "!text-white" : ""}`}>
          {title}
        </h2>
        {lead ? <p className={`t-lead mt-3 max-w-xl ${light ? "!text-slate-300" : ""}`}>{lead}</p> : null}
      </div>
      {action}
    </div>
  );
}

export function RuleList({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div className="sheet mt-8 overflow-hidden px-5 sm:px-8">
      <ul aria-label={label}>{children}</ul>
    </div>
  );
}
