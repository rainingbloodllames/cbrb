import Link from "next/link";
import Image from "next/image";
import { memo } from "react";
import { site } from "@/lib/site";

export const SiteFooter = memo(function SiteFooter() {
  return (
    <footer className="mx-3 mb-3 mt-16 overflow-hidden rounded-[32px] bg-[#0b1e44] text-white sm:mx-5 sm:rounded-[40px]">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-4 rounded-[20px] bg-white px-4 py-3 shadow-sm">
              <Image src="/logos/cbrb.png" alt="Escudo CBRB" width={40} height={54} className="h-12 w-auto" />
              <span className="h-10 w-px bg-slate-200" aria-hidden="true" />
              <Image src="/logos/slep-andalien-sur.png" alt="SLEP Andalién Sur" width={110} height={60} className="h-12 w-auto" />
            </div>
            <p className="mt-6 font-heading text-[22px] font-extrabold leading-tight tracking-tight">{site.name}</p>
            <p className="mt-2 text-[15px] font-medium text-slate-200">{site.tagline}</p>
            <p className="mt-3 text-[14px] font-medium text-slate-200">{site.address} · <a href={site.phoneHref} className="font-bold text-white hover:text-[#ffd60a]">{site.phone}</a></p>
          </div>
          <nav aria-label="Enlaces del pie">
            <p className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-slate-300">Explora</p>
            <ul className="mt-4 grid gap-2.5 text-[15px] font-semibold">
              {[["Admisión SAE","/admision"],["Transparencia","/transparencia"],["Nosotros","/nosotros"],["Comunidad","/comunidad"],["Contacto","/contacto"]].map(([l,h]) => (
                <li key={h}><Link className="text-white underline decoration-white/20 underline-offset-4 hover:text-[#ffd60a] hover:decoration-[#ffd60a]" href={h}>{l}</Link></li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={site.workspaceUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center rounded-full bg-white px-5 text-sm font-bold text-slate-900 transition-colors hover:bg-slate-100">Workspace</a>
              <a href={site.sigceUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center rounded-full bg-[#ffd60a] px-5 text-sm font-extrabold text-slate-900 transition-colors hover:bg-[#ffdd2e]">SIGCE</a>
            </div>
          </nav>
          <div>
            <p className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-slate-300">Contacto</p>
            <div className="mt-4 space-y-2.5 text-[15px] font-medium">
              <a className="block text-white hover:text-[#ffd60a]" href={site.phoneHref}>{site.phone}</a>
              <a className="block text-white hover:text-[#ffd60a]" href={`mailto:${site.email}`}>{site.email}</a>
              <p className="pt-2 text-slate-200"><a className="text-white hover:text-[#ffd60a]" href={site.facebook} target="_blank" rel="noreferrer">Facebook</a> · <a className="text-white hover:text-[#ffd60a]" href={site.instagram} target="_blank" rel="noreferrer">Instagram</a></p>
            </div>
            <p className="mt-8 border-t border-white/10 pt-6 text-[13px] font-medium text-slate-300">RBD 4564 · SLEP Andalién Sur · © 2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
});
