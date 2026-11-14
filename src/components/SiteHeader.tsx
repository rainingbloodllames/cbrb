"use client";

import Link from "next/link";
import { memo } from "react";
import { nav, site } from "@/lib/site";

export const SiteHeader = memo(function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95">
      <div className="tricolor-rule" aria-hidden="true">
        <span className="bg-[#0039a6]" /><span className="bg-white" /><span className="bg-[#d52b1e]" /><span className="bg-white" /><span className="bg-[#009739]" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-2 px-4 pb-3 pt-3">
        <Link href="/" className="pressable flex min-h-[44px] items-center gap-3 rounded-xl px-1" aria-label="Ir al inicio">
          <img src="/logos/cbrb.png" alt="Escudo Colegio República del Brasil" width={46} height={62} className="h-12 w-auto" />
          <span className="leading-tight">
            <span className="block font-heading text-base font-bold">Colegio Bicentenario</span>
            <span className="block text-xs text-slate-600 dark:text-slate-400">República del Brasil · Concepción</span>
          </span>
          <span className="ml-1 hidden items-center gap-2 sm:flex" aria-hidden="true">
            <span className="h-8 w-px bg-slate-200 dark:bg-slate-700/50" />
            <img src="/logos/slep-andalien-sur.png" alt="SLEP Andalién Sur" width={72} height={39} className="h-9 w-auto" />
          </span>
        </Link>

        <nav className="order-3 w-full sm:order-none sm:w-auto sm:flex-1" aria-label="Navegación principal">
          <ul className="flex flex-wrap items-center gap-1 sm:justify-center">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="pressable flex min-h-[44px] items-center rounded-full px-3 text-sm font-medium text-slate-700 transition-colors duration-150 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex flex-wrap items-center gap-2 sm:ml-0">
          <a
            href={site.saeUrl}
            target="_blank"
            rel="noreferrer"
            className="pressable flex min-h-[44px] items-center rounded-full bg-[#fedf00] px-4 text-sm font-bold text-slate-900 transition-colors duration-150 hover:bg-[#f5d000]"
          >
            Postula SAE
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="ml-1"><path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a
            href={site.workspaceUrl}
            target="_blank"
            rel="noreferrer"
            className="pressable hidden min-h-[44px] items-center rounded-full border border-slate-300 px-4 text-sm font-medium transition-colors duration-150 hover:border-[#0039a6] hover:text-[#0039a6] md:flex dark:border-slate-700/50 dark:hover:text-white"
          >
            Workspace
          </a>
          <a
            href={site.sigceUrl}
            target="_blank"
            rel="noreferrer"
            className="pressable hidden min-h-[44px] items-center rounded-full bg-[#0f2a5c] px-4 text-sm font-bold text-white transition-colors duration-150 hover:bg-[#1a3f7a] md:flex"
          >
            SIGCE
          </a>
        </div>
      </div>
    </header>
  );
});
