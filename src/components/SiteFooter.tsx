import Link from "next/link";
import { memo } from "react";
import { site } from "@/lib/site";

export const SiteFooter = memo(function SiteFooter() {
  return (
    <footer className="mt-20 bg-[#0f2a5c] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-3">
        <div className="min-w-0">
          <div className="flex items-center gap-3 rounded-2xl bg-white p-3">
            <img src="/logos/cbrb.png" alt="Escudo CBRB" width={36} height={49} className="h-12 w-auto" />
            <img src="/logos/slep-andalien-sur.png" alt="SLEP Andalién Sur" width={96} height={52} className="h-12 w-auto" />
          </div>
          <p className="mt-4 font-heading text-lg font-bold">{site.name}</p>
          <p className="mt-1 text-sm text-white/80">{site.tagline}</p>
          <p className="mt-2 text-sm text-white/80">{site.address} · {site.phone}</p>
          <p className="mt-3 text-xs text-white/60">RBD 4564 · SLEP Andalién Sur · Establecimiento público y laico</p>
        </div>
        <nav aria-label="Enlaces del pie">
          <p className="font-heading font-bold">Accesos</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="text-white/85 underline decoration-white/40 underline-offset-4 transition-colors duration-150 hover:text-white" href="/admision">Admisión SAE</Link></li>
            <li><Link className="text-white/85 underline decoration-white/40 underline-offset-4 transition-colors duration-150 hover:text-white" href="/transparencia">Transparencia</Link></li>
            <li><Link className="text-white/85 underline decoration-white/40 underline-offset-4 transition-colors duration-150 hover:text-white" href="/nosotros">Nosotros</Link></li>
            <li><a className="text-white/85 underline decoration-white/40 underline-offset-4 transition-colors duration-150 hover:text-white" href={site.workspaceUrl} target="_blank" rel="noreferrer">Google Workspace</a></li>
            <li><a className="text-white/85 underline decoration-white/40 underline-offset-4 transition-colors duration-150 hover:text-white" href={site.sigceUrl} target="_blank" rel="noreferrer">SIGCE</a></li>
          </ul>
        </nav>
        <div>
          <p className="font-heading font-bold">Contacto</p>
          <p className="mt-3 text-sm leading-relaxed text-white/85">
            <a className="underline decoration-white/40 underline-offset-4 transition-colors duration-150 hover:text-white" href={site.phoneHref}>{site.phone}</a><br />
            <a className="underline decoration-white/40 underline-offset-4 transition-colors duration-150 hover:text-white" href={`mailto:${site.email}`}>{site.email}</a><br />
            <a className="underline decoration-white/40 underline-offset-4 transition-colors duration-150 hover:text-white" href={site.facebook} target="_blank" rel="noreferrer">Facebook</a>
            <span aria-hidden="true"> · </span>
            <a className="underline decoration-white/40 underline-offset-4 transition-colors duration-150 hover:text-white" href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
          </p>
          <p className="mt-4 text-xs text-white/60">Copyright 2026 {site.name}</p>
        </div>
      </div>
    </footer>
  );
});
