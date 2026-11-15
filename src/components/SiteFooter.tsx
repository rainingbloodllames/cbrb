import Link from "next/link";
import Image from "next/image";
import { memo } from "react";
import { site } from "@/lib/site";

export const SiteFooter = memo(function SiteFooter() {
  return (
    <footer className="mx-3 mb-3 mt-14 overflow-hidden rounded-[32px] bg-[#0b1e44] text-white sm:mx-5">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-[1.3fr_1fr_1fr]">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-3 rounded-[22px] bg-white p-3">
            <Image src="/logos/cbrb.png" alt="Escudo CBRB" width={40} height={54} className="h-12 w-auto" />
            <Image src="/logos/slep-andalien-sur.png" alt="SLEP Andalién Sur" width={110} height={60} className="h-12 w-auto" />
          </div>
          <p className="mt-4 font-heading text-xl font-bold leading-snug">{site.name}</p>
          <p className="mt-1 text-sm text-white/85">{site.tagline}</p>
          <p className="mt-2 text-sm text-white/85">{site.address} · {site.phone}</p>
        </div>
        <nav aria-label="Enlaces del pie">
          <p className="font-heading font-bold">Explora</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {[["Admisión SAE","/admision"],["Transparencia","/transparencia"],["Nosotros","/nosotros"],["Comunidad","/comunidad"],["Contacto","/contacto"]].map(([l,h]) => (
              <li key={h}><Link className="link-slide text-white/95 underline decoration-white/30 underline-offset-4 transition-colors duration-150 hover:text-white" href={h}>{l}</Link></li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            <a href={site.workspaceUrl} target="_blank" rel="noreferrer" className="pressable flex min-h-[44px] items-center rounded-full bg-white/10 px-4 text-sm font-semibold transition-colors duration-150 hover:bg-white/20">Workspace</a>
            <a href={site.sigceUrl} target="_blank" rel="noreferrer" className="pressable flex min-h-[44px] items-center rounded-full bg-white px-4 text-sm font-bold text-[#0b1e44] transition-colors duration-150 hover:bg-slate-100">SIGCE</a>
          </div>
        </nav>
        <div>
          <p className="font-heading font-bold">Contacto</p>
          <p className="mt-3 text-sm leading-loose text-white/95">
            <a className="underline decoration-white/30 underline-offset-4 hover:text-white" href={site.phoneHref}>{site.phone}</a><br />
            <a className="underline decoration-white/30 underline-offset-4 hover:text-white" href={`mailto:${site.email}`}>{site.email}</a><br />
            <a className="underline decoration-white/30 underline-offset-4 hover:text-white" href={site.facebook} target="_blank" rel="noreferrer">Facebook</a> · <a className="underline decoration-white/30 underline-offset-4 hover:text-white" href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
          </p>
          <p className="mt-4 text-xs text-white/75">RBD 4564 · SLEP Andalién Sur · Copyright 2026</p>
        </div>
      </div>
    </footer>
  );
});
