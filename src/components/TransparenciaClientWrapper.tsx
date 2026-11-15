"use client";

import dynamic from "next/dynamic";
import type { DocItem } from "@/lib/content";

const TransparenciaClient = dynamic(
  () => import("./TransparenciaClient").then((m) => m.TransparenciaClient),
  { ssr: false, loading: () => <p className="mt-6 text-center text-sm text-slate-500">Cargando documentos…</p> },
);

export function TransparenciaClientWrapper({ docs }: { docs: DocItem[] }) {
  return <TransparenciaClient docs={docs} />;
}
