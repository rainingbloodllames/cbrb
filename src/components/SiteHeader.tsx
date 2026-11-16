"use client";

import Link from "next/link";
import Image from "next/image";
import { memo, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";

export const SiteHeader = memo(function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-200 ${scrolled ? "shadow-[0_4px_24px_rgba(11,30,68,0.1)]" : "shadow-none"}`}>
      <div className="grid h-1 grid-cols-4" aria-hidden="true">
        <span className="bg-[#0066cc]" /><span className="bg-white" /><span className="bg-[#c81e1e]" /><span className="bg-[#0b7a3e]" />
      </div>
      <div className={`border-b transition-colors duration-200 ${scrolled ? "border-slate-200 bg-white/95" : "border-slate-200 bg-white"}`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-3 rounded-xl py-1 pr-2 outline-none focus-visible:ring-2 focus-visible:ring-[#0066cc] focus-visible:ring-offset-2" aria-label="Colegio Bicentenario República del Brasil — ir al inicio">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white ring-1 ring-slate-200">
              <Image src="/logos/cbrb.png" alt="" width={32} height={44} priority className="h-9 w-auto" />
            </span>
            <span className="min-w-0 leading-none">
              <span className="block truncate font-heading text-base font-semibold tracking-tight text-slate-900">Colegio Bicentenario</span>
              <span className="mt-1 block truncate text-xs font-medium text-slate-500">República del Brasil · Concepción</span>
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex h-10 items-center rounded-lg px-3 text-sm transition-colors duration-150 ${active ? "bg-slate-100 font-semibold text-slate-900" : "font-medium text-slate-600 hover:text-slate-900"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-2">
            <a
              href={site.saeUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden h-11 items-center gap-2 rounded-xl bg-[#ffd60a] px-5 text-sm font-semibold text-slate-900 transition-colors duration-150 hover:bg-[#ffdd2e] sm:inline-flex"
            >
              Postula SAE
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="grid h-11 w-11 place-items-center rounded-xl bg-slate-900 text-white transition-colors duration-150 hover:bg-slate-800 lg:hidden"
            >
              <span className="space-y-[6px]" aria-hidden="true">
                <span className={`block h-[2px] w-5 rounded-full bg-current transition-transform duration-200 ${open ? "translate-y-[4px] rotate-45" : ""}`} />
                <span className={`block h-[2px] w-5 rounded-full bg-current transition-transform duration-200 ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>

        <div
          id="menu-movil"
          data-open={open}
          className={`overflow-hidden lg:hidden ${open ? "max-h-[480px] opacity-100 border-t border-slate-200" : "max-h-0 opacity-0"}`}
          style={{ transitionProperty: "max-height, opacity", transitionDuration: "220ms", transitionTimingFunction: "var(--ease-out)" }}
        >
          <nav className="mx-auto max-w-7xl px-4 pb-4 pt-2 sm:px-6" aria-label="Menú móvil">
            <ul className="grid gap-1">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`flex h-11 items-center justify-between rounded-lg px-3 text-sm ${active ? "bg-slate-100 font-semibold text-slate-900" : "font-medium text-slate-700 hover:bg-slate-50"}`}
                    >
                      {item.label}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-40" aria-hidden="true"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <a href={site.saeUrl} target="_blank" rel="noreferrer" className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#ffd60a] px-4 text-sm font-semibold text-slate-900">
                  Postula por SAE — Admisión 2027
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
});
