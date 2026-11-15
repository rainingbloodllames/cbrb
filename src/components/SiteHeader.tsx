"use client";

import Link from "next/link";
import { memo, useState } from "react";
import { nav, site } from "@/lib/site";

export const SiteHeader = memo(function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50">
      <div className="tricolor-rule" aria-hidden="true">
        <span className="bg-[#0066cc]" /><span className="bg-white" /><span className="bg-[#ff453a]" /><span className="bg-white" /><span className="bg-[#30d158] text-[#052e16]" />
      </div>
      <div className="glass-panel mx-3 mt-3 rounded-[28px] px-3 py-2 sm:mx-5 sm:px-4">
        <div className="mx-auto flex max-w-6xl items-center gap-2">
          <Link href="/" className="pressable flex min-h-[52px] min-w-0 flex-1 items-center gap-3 rounded-2xl px-1" aria-label="Ir al inicio">
            <img src="/logos/cbrb.png" alt="Escudo Colegio República del Brasil" width={42} height={57} className="h-11 w-auto shrink-0" />
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-heading text-[15px] font-bold">Colegio Bicentenario</span>
              <span className="block truncate text-[11px] text-slate-700 dark:text-slate-400">República del Brasil · Concepción</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="pressable flex min-h-[44px] items-center rounded-full px-4 text-sm font-semibold text-slate-700 transition-colors duration-150 hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={site.saeUrl}
              target="_blank"
              rel="noreferrer"
              className="pressable flex min-h-[44px] items-center rounded-full bg-[#ffd60a] px-5 text-sm font-bold text-slate-900 shadow-sm transition-colors duration-150 hover:bg-[#f5cf00]"
            >
              Postula SAE
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="pressable flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/5 lg:hidden dark:bg-white/10"
            >
              <span className="space-y-1.5" aria-hidden="true">
                <span className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${open ? "translate-y-[4px] rotate-45" : ""}`} />
                <span className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>

        <div
          data-open={open}
          className={`motion-sheet overflow-hidden transition-[max-height,opacity] lg:hidden ${open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
          style={{ transitionDuration: "220ms", transitionTimingFunction: "var(--ease-out)" }}
        >
          <nav className="pt-2" aria-label="Menú móvil">
            <ul className="grid grid-cols-2 gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="pressable flex min-h-[48px] items-center rounded-2xl bg-slate-900/5 px-4 text-sm font-semibold dark:bg-white/10"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={site.workspaceUrl} target="_blank" rel="noreferrer" className="pressable flex min-h-[48px] items-center rounded-2xl bg-slate-900/5 px-4 text-sm font-semibold dark:bg-white/10">Workspace</a>
              </li>
              <li>
                <a href={site.sigceUrl} target="_blank" rel="noreferrer" className="pressable flex min-h-[48px] items-center rounded-2xl bg-[#0f2a5c] px-4 text-sm font-bold text-white">SIGCE</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
});
