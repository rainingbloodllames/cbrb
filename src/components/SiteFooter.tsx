import Link from "next/link";
import Image from "next/image";
import { memo } from "react";
import { site } from "@/lib/site";

export const SiteFooter = memo(function SiteFooter() {
  return (
    <footer className="mx-3 mb-3 mt-16 overflow-hidden rounded-2xl bg-[#0b1e44] text-white sm:mx-5 sm:rounded-3xl">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-4 rounded-[20px] bg-white px-4 py-3 shadow-sm">
              <Image src="/logos/cbrb.png" alt="Escudo CBRB" width={40} height={54} className="h-12 w-auto" />
              <span className="h-10 w-px bg-slate-200" aria-hidden="true" />
              <Image src="/logos/slep-andalien-sur.png" alt="SLEP Andalién Sur" width={110} height={60} className="h-12 w-auto" />
            </div>
            <p className="mt-6 font-heading text-[22px] font-bold leading-tight tracking-tight">{site.name}</p>
            <p className="mt-2 text-[15px] font-medium text-slate-200">{site.tagline}</p>
            <p className="mt-3 text-[14px] font-medium text-slate-200">{site.address} · <a href={site.phoneHref} className="font-bold text-white hover:text-[#ffd60a]">{site.phone}</a></p>
          </div>
          <nav aria-label="Enlaces del pie">
            <p className="text-[13px] font-bold  text-slate-300">Explora</p>
            <ul className="mt-4 grid gap-2.5 text-[15px] font-semibold">
              {[["Admisión SAE","/admision"],["Transparencia","/transparencia"],["Nosotros","/nosotros"],["Comunidad","/comunidad"],["Contacto","/contacto"]].map(([l,h]) => (
                <li key={h}><Link className="text-white underline decoration-white/20 underline-offset-4 hover:text-[#ffd60a] hover:decoration-[#ffd60a]" href={h}>{l}</Link></li>
              ))}
            </ul>
            <p className="mt-8 border-t border-white/10 pt-6 text-[12px] font-medium text-white/50">RBD 4564 · SLEP Andalién Sur · © 2026</p>
            <p className="mt-2 text-[12px] text-white/35">
              <a href={site.sigceUrl} target="_blank" rel="noreferrer" className="hover:text-white/70">SIGCE — uso interno</a>
            </p>
          </nav>
          <div>
            <p className="text-[13px] font-bold  text-slate-300">Contacto</p>
            <div className="mt-4 space-y-2.5 text-[15px] font-medium">
              <a className="block text-white hover:text-[#ffd60a]" href={site.phoneHref}>{site.phone}</a>
              <a className="block text-white hover:text-[#ffd60a]" href={`mailto:${site.email}`}>{site.email}</a>
              <p className="pt-2 flex items-center gap-4">
                <a className="flex items-center gap-2 text-white hover:text-[#ffd60a]" href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook del colegio">
                  <Image src="/icons/facebook-white.svg" alt="" width={20} height={20} className="h-5 w-5" />
                  Facebook
                </a>
                <a className="flex items-center gap-2 text-white hover:text-[#ffd60a]" href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram del colegio">
                  <Image src="/icons/instagram-white.svg" alt="" width={20} height={20} className="h-5 w-5" />
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
