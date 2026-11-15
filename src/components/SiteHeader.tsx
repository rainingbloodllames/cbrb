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
    <header className={`sticky top-0 z-50 transition-shadow duration-200 ${scrolled ? "shadow-[0_8px_32px_rgba(11,30,68,0.10)]" : "shadow-none"}`}>
      <div className="h-[4px] w-full" aria-hidden="true">
        <div className="grid h-full grid-cols-[3fr_1fr_2.8fr_1fr_2.6fr]">
          <span className="bg-[#0066cc]" /><span className="bg-white border-x border-slate-200" /><span className="bg-[#c81e1e]" /><span className="bg-white border-x border-slate-200" /><span className="bg-[#0b7a3e]" />
        </div>
      </div>
      <div className={`border-b transition-colors duration-200 ${scrolled ? "border-slate-200 bg-white/90 backdrop-blur-xl" : "border-transparent bg-white"}`}>
        <div className="mx-auto flex h-[76px] max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-3 rounded-2xl py-1 pr-2 outline-none focus-visible:ring-2 focus-visible:ring-[#0066cc] focus-visible:ring-offset-2" aria-label="Colegio Bicentenario República del Brasil — ir al inicio">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[14px] bg-slate-50 ring-1 ring-slate-200">
              <Image src="/logos/cbrb.png" alt="" width={42} height={57} priority className="h-11 w-auto" />
            </span>
            <span className="min-w-0 leading-none">
              <span className="block truncate font-heading text-[17px] font-extrabold tracking-tight text-slate-900 sm:text-[18px]">Colegio Bicentenario</span>
              <span className="mt-1 block truncate text-[11px] font-semibold tracking-[0.08em] text-slate-500 sm:text-[12px]">REPÚBLICA DEL BRASIL<span className="hidden sm:inline"> · CONCEPCIÓN</span></span>
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
                  className={`flex min-h-[44px] items-center rounded-full px-4 text-[15px] font-semibold transition-colors duration-150 ${active ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-900 hover:text-white"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-0">
            <a
              href={site.saeUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden min-h-[48px] items-center gap-2 rounded-full bg-[#ffd60a] px-6 text-[15px] font-extrabold text-slate-900 shadow-sm ring-1 ring-slate-900/10 transition-all hover:bg-[#ffdd2e] hover:shadow-md sm:inline-flex"
            >
              Postula SAE
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="grid h-11 w-11 place-items-center rounded-full bg-slate-900 text-white transition-colors hover:bg-slate-800 lg:hidden"
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
          className={`overflow-hidden transition-[max-height,opacity] lg:hidden ${open ? "max-h-[480px] opacity-100 border-t border-slate-100" : "max-h-0 opacity-0"}`}
          style={{ transitionDuration: "220ms", transitionTimingFunction: "var(--ease-out)" }}
        >
          <nav className="mx-auto max-w-7xl px-4 pb-5 pt-3 sm:px-6" aria-label="Menú móvil">
            <ul className="grid gap-2">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`flex min-h-[52px] items-center justify-between rounded-2xl px-4 text-[15px] font-bold ${active ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-800 ring-1 ring-slate-100 hover:bg-slate-100"}`}
                    >
                      {item.label}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-40" aria-hidden="true"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </Link>
                  </li>
                );
              })}
              <li className="pt-1">
                <a href={site.workspaceUrl} target="_blank" rel="noreferrer" className="flex min-h-[52px] items-center justify-between rounded-2xl bg-slate-50 px-4 text-[15px] font-bold text-slate-800 ring-1 ring-slate-100">Workspace <span className="text-xs font-semibold text-slate-500">Externo ↗</span></a>
              </li>
              <li>
                <a href={site.sigceUrl} target="_blank" rel="noreferrer" className="flex min-h-[52px] items-center justify-between rounded-2xl bg-[#0b1e44] px-4 text-[15px] font-extrabold text-white">SIGCE <span className="grid h-6 w-6 place-items-center rounded-full bg-[#ffd60a] text-slate-900"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17 17 7M8 7h9v9" strokeLinecap="round"/></svg></span></a>
              </li>
              <li className="pt-2">
                <a href={site.saeUrl} target="_blank" rel="noreferrer" className="flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-[#ffd60a] px-5 text-[16px] font-extrabold text-slate-900 shadow-sm">
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
