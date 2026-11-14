import Link from "next/link";
import { memo } from "react";
import { site } from "@/lib/site";

export const SiteFooter = memo(function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white dark:border-slate-700/50 dark:bg-slate-900">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 rounded-xl bg-white p-3">
            <img src="/logos/cbrb.png" alt="Escudo CBRB" width={36} height={49} className="h-12 w-auto" />
            <img src="/logos/slep-andalien-sur.png" alt="SLEP Andalién Sur" width={90} height={49} className="h-12 w-auto" />
          </div>
          <p className="mt-3 font-heading font-bold">{site.name}</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{site.tagline}</p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            {site.address} · {site.phone}
          </p>
        </div>
        <nav aria-label="Enlaces del pie">
          <p className="font-heading font-bold">Accesos</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link className="underline" href="/admision">Admisión SAE</Link></li>
            <li><Link className="underline" href="/transparencia">Transparencia</Link></li>
            <li><a className="underline" href={site.workspaceUrl} target="_blank" rel="noreferrer">Google Workspace</a></li>
            <li><a className="underline" href={site.sigceUrl} target="_blank" rel="noreferrer">SIGCE</a></li>
          </ul>
        </nav>
        <div>
          <p className="font-heading font-bold">Contacto</p>
          <p className="mt-2 text-sm">
            <a className="underline" href={site.phoneHref}>{site.phone}</a><br />
            <a className="underline" href={`mailto:${site.email}`}>{site.email}</a><br />
            <a className="underline" href={site.facebook} target="_blank" rel="noreferrer">Facebook</a> ·{" "}
            <a className="underline" href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
          </p>
        </div>
      </div>
      <p className="border-t border-slate-200 py-4 text-center text-xs text-slate-500 dark:border-slate-700/50">
        © 2026 {site.name} · SLEP Andalién Sur · Establecimiento público y laico
      </p>
    </footer>
  );
});
