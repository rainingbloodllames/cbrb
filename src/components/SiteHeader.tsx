"use client";

import Link from "next/link";
import { memo } from "react";
import { nav, site } from "@/lib/site";

export const SiteHeader = memo(function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-700/50 dark:bg-slate-900/80">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label="Ir al inicio">
          <img src="/logos/cbrb.png" alt="Escudo Colegio República del Brasil" width={46} height={62} className="h-12 w-auto" />
          <span className="leading-tight">
            <span className="block font-heading text-base font-bold">
              Colegio Bicentenario
            </span>
            <span className="block text-xs text-slate-600 dark:text-slate-400">
              República del Brasil · Concepción
            </span>
          </span>
          <span className="ml-2 hidden items-center gap-2 sm:flex" aria-hidden="true">
            <span className="h-8 w-px bg-slate-200 dark:bg-slate-700/50" />
            <img src="/logos/slep-andalien-sur.png" alt="SLEP Andalién Sur" width={72} height={39} className="h-9 w-auto" />
          </span>
        </Link>

        <nav className="order-3 w-full sm:order-none sm:w-auto sm:flex-1" aria-label="Navegación principal">
          <ul className="flex flex-wrap gap-1 sm:justify-center">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block rounded-full px-3 py-2 text-sm font-medium transition-colors duration-150 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex flex-wrap gap-2 sm:ml-0">
          <a
            href={site.saeUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-slate-900 transition-colors duration-150 hover:bg-yellow-300"
          >
            Postula SAE ↗
          </a>
          <a
            href={site.workspaceUrl}
            target="_blank"
            rel="noreferrer"
            className="solid-panel rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            Workspace ↗
          </a>
          <a
            href={site.sigceUrl}
            target="_blank"
            rel="noreferrer"
            className="solid-panel rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            SIGCE ↗
          </a>
        </div>
      </div>
    </header>
  );
});
