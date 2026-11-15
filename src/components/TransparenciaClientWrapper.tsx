"use client";

import dynamic from "next/dynamic";
import type { DocItem } from "@/lib/content";

const TransparenciaClient = dynamic(
  () => import("./TransparenciaClient").then((m) => m.TransparenciaClient),
  {
    ssr: false,
    loading: () => (
      <div className="mt-6 space-y-2" aria-label="Cargando documentos" aria-busy="true">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-[72px] animate-pulse rounded-2xl bg-slate-200/70" />
        ))}
      </div>
    ),
  },
);

export function TransparenciaClientWrapper({ docs }: { docs: DocItem[] }) {
  return <TransparenciaClient docs={docs} />;
}
