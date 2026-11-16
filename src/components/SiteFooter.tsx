import Link from "next/link";
import Image from "next/image";
import { memo } from "react";
import { site } from "@/lib/site";

export const SiteFooter = memo(function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-[#0b1e44] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-4 rounded-xl bg-white px-4 py-3">
              <Image src="/logos/cbrb.png" alt="Escudo CBRB" width={40} height={54} className="h-12 w-auto" />
              <span className="h-10 w-px bg-slate-200" aria-hidden="true" />
              <Image src="/logos/slep-andalien-sur.png" alt="SLEP Andalién Sur" width={110} height={60} className="h-12 w-auto" />
            </div>
            <p className="mt-5 font-heading text-xl font-semibold leading-tight tracking-tight">{site.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{site.tagline}</p>
            <p className="mt-3 text-sm text-slate-300">{site.address} · <a href={site.phoneHref} className="font-semibold text-white">{site.phone}</a></p>
            <p className="mt-6 border-t border-white/10 pt-4 font-mono text-xs tabular-nums text-slate-400">RBD 4564 · SLEP Andalién Sur · © 2026</p>
          </div>
          <nav aria-label="Enlaces del pie">
            <p className="text-xs font-semibold text-slate-400">Explorar</p>
            <ul className="mt-3 grid gap-2 text-sm">
              {[["Admisión SAE","/admision"],["Transparencia","/transparencia"],["Nosotros","/nosotros"],["Comunidad","/comunidad"],["Contacto","/contacto"]].map(([l,h]) => (
                <li key={h}><Link className="text-slate-200 transition-colors duration-150 hover:text-white" href={h}>{l}</Link></li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-slate-400">
              <a href={site.sigceUrl} target="_blank" rel="noreferrer" className="transition-colors duration-150 hover:text-slate-200">SIGCE — uso interno</a>
            </p>
          </nav>
          <div>
            <p className="text-xs font-semibold text-slate-400">Contacto</p>
            <div className="mt-3 space-y-2 text-sm">
              <a className="block tabular-nums text-slate-200 transition-colors duration-150 hover:text-white" href={site.phoneHref}>{site.phone}</a>
              <a className="block font-mono text-xs tabular-nums text-slate-200 transition-colors duration-150 hover:text-white" href={`mailto:${site.email}`}>{site.email}</a>
              <a className="block font-mono text-xs tabular-nums text-slate-400 transition-colors duration-150 hover:text-white" href="mailto:dino.olivieri@andaliensur.cl">dino.olivieri@andaliensur.cl</a>
              <p className="flex items-center gap-4 pt-2">
                <a className="flex items-center gap-2 text-slate-200 transition-colors duration-150 hover:text-white" href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook del colegio">
                  <Image src="/icons/facebook-white.svg" alt="" width={18} height={18} className="h-[18px] w-[18px]" />
                  Facebook
                </a>
                <a className="flex items-center gap-2 text-slate-200 transition-colors duration-150 hover:text-white" href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram del colegio">
                  <Image src="/icons/instagram-white.svg" alt="" width={18} height={18} className="h-[18px] w-[18px]" />
                  Instagram
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});
