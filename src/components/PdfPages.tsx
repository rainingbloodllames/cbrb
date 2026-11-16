/* eslint-disable @next/next/no-img-element -- snapshots del visor PDF son bitmaps (data/blob), Next Image no aplica */
"use client";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { AnimationEvent, FormEvent, TouchEvent as ReactTouchEvent } from "react";
import { Document, Page, Thumbnail, pdfjs } from "react-pdf";
import type { PDFDocumentProxy } from "pdfjs-dist";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();

const ZOOMS = [0.7, 0.9, 1.1, 1.4, 1.8] as const;
const TURN_TIMEOUT_MS = 1050; // fallback (la hoja dura 800ms)
const WARM_TIMEOUT_MS = 900; // si el raster no llega, girar igual

type Turn = { from: number; to: number; dir: 1 | -1; kind: "flip" | "jump"; snapshot: string | null };
type TurnReq = { from: number; to: number };
type Hit = { page: number; count: number; snippet: string };
type Size = { w: number; h: number };

/** Insensible a mayúsculas y acentos (documentos oficiales en español). */
function normalizeText(s: string): string {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Normaliza conservando un mapa folded→original para resaltar sin perder acentos. */
function fold(s: string): { f: string; map: number[] } {
  let f = "";
  const map: number[] = [];
  for (let i = 0; i < s.length; i += 1) {
    const nfd = s[i].normalize("NFD");
    if (nfd.length === 0) {
      f += s[i].toLowerCase();
      map.push(i);
      continue;
    }
    const base = nfd.replace(/[\u0300-\u036f]/g, "");
    for (let k = 0; k < base.length; k += 1) {
      f += base[k].toLowerCase();
      map.push(i);
    }
  }
  return { f, map };
}

function makeTextRenderer(rawQuery: string): (item: { str: string }) => string {
  const fq = fold(rawQuery.trim()).f;
  return ({ str }: { str: string }) => {
    if (!fq) return escapeHtml(str);
    const { f, map } = fold(str);
    if (!f.includes(fq)) return escapeHtml(str);
    let html = "";
    let last = 0;
    let idx = f.indexOf(fq);
    while (idx !== -1) {
      const oStart = map[idx];
      const oEnd = map[idx + fq.length - 1] + 1;
      html += escapeHtml(str.slice(last, oStart));
      html += `<mark>${escapeHtml(str.slice(oStart, oEnd))}</mark>`;
      last = oEnd;
      idx = f.indexOf(fq, idx + fq.length);
    }
    html += escapeHtml(str.slice(last));
    return html;
  };
}

function closestZoomIndex(s: number): number {
  let best = 0;
  let bestDist = Math.abs(ZOOMS[0] - s);
  for (let i = 1; i < ZOOMS.length; i += 1) {
    const d = Math.abs(ZOOMS[i] - s);
    if (d < bestDist) {
      bestDist = d;
      best = i;
    }
  }
  return best;
}

const LazyPage = memo(function LazyPage({
  pageNumber,
  scale,
  rotate,
  renderer,
  onSize,
  onCenter,
  ratio,
}: {
  pageNumber: number;
  scale: number;
  rotate: number;
  renderer: (item: { str: string }) => string;
  onSize: (viewport: { width: number; height: number }) => void;
  onCenter: (p: number) => void;
  ratio: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.intersectionRatio >= 0.5) onCenter(pageNumber);
          if (entry.isIntersecting) setVisible(true);
        }
      },
      { threshold: [0, 0.5] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [pageNumber, onCenter]);

  return (
    <div id={`pdf-page-${pageNumber}`} ref={ref} className="mx-auto w-fit max-w-full scroll-mt-24">
      {visible ? (
        <div className="overflow-hidden rounded-[18px] bg-white p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <div className="bg-white">
            <Page
              pageNumber={pageNumber}
              scale={scale}
              rotate={rotate}
              renderTextLayer
              renderAnnotationLayer
              customTextRenderer={renderer}
              onRenderSuccess={onSize}
              loading={<div className="aspect-[3/4] w-full animate-pulse bg-slate-200" aria-hidden="true" />}
            />
          </div>
        </div>
      ) : (
        <div
          className="aspect-[3/4] w-full max-w-xl animate-pulse rounded-[18px] bg-white/15"
          style={{ aspectRatio: `${ratio}` }}
          aria-label={`Página ${pageNumber}`}
        />
      )}
    </div>
  );
});

const LazyThumb = memo(function LazyThumb({
  pageNumber,
  current,
  onGo,
  onRegister,
}: {
  pageNumber: number;
  current: boolean;
  onGo: () => void;
  onRegister: (el: HTMLButtonElement | null) => void;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "480px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={hostRef} className="shrink-0">
      <button
        ref={onRegister}
        type="button"
        onClick={onGo}
        aria-label={`Ir a página ${pageNumber}`}
        aria-current={current}
        className={`pressable shrink-0 overflow-hidden rounded-[14px] p-1 ${
          current ? "bg-white ring-2 ring-[#ffd60a]" : "bg-white/85 ring-1 ring-white/20 hover:bg-white"
        }`}
      >
        {visible ? (
          <Thumbnail pageNumber={pageNumber} height={96} />
        ) : (
          <span className="block h-24 w-16 animate-pulse rounded-md bg-slate-200" aria-hidden="true" />
        )}
        <span className="mt-1 block text-center text-[10px] font-bold tabular-nums text-slate-900">
          {pageNumber}
        </span>
      </button>
    </div>
  );
});

export const PdfPages = memo(function PdfPages({ href }: { href: string }) {
  const [numPages, setNumPages] = useState(0);
  const [page, setPage] = useState(1);
  const [turn, setTurn] = useState<Turn | null>(null);
  const [turnReq, setTurnReq] = useState<TurnReq | null>(null);
  const [zoomIdx, setZoomIdx] = useState(2);
  const [fit, setFit] = useState(false);
  const [spread, setSpread] = useState(false);
  const [showThumbs, setShowThumbs] = useState(false);
  const [rotate, setRotate] = useState(0);
  const [mode, setMode] = useState<"libro" | "continuo">("libro");
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [hits, setHits] = useState<Hit[]>([]);
  const [matchIdx, setMatchIdx] = useState(0);
  const [scanning, setScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [baseSize, setBaseSize] = useState<Size | null>(null);
  const [containerW, setContainerW] = useState(0);
  const [isFs, setIsFs] = useState(false);
  const [pageInput, setPageInput] = useState("1");

  const rootRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pageInputRef = useRef<HTMLInputElement>(null);
  const pdfRef = useRef<PDFDocumentProxy | null>(null);
  const pendingRef = useRef<number | null>(null);
  const turnRef = useRef<Turn | null>(null);
  const turnReqRef = useRef<TurnReq | null>(null);
  const pageRef = useRef(page);
  /** Páginas ya rasterizadas a la escala/rotación actual (clave: nº de página). */
  const armedRef = useRef<Set<string>>(new Set());
  /** L0: snapshots (0.6×) de la página visible, LRU de 6 — el giro no espera un encode. */
  const snapRef = useRef<Map<string, string>>(new Map());
  const searchSeqRef = useRef(0);
  const textCacheRef = useRef<Map<number, string>>(new Map());
  const thumbRefs = useRef<Map<number, HTMLButtonElement>>(new Map());
  const touchRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    turnRef.current = turn;
  }, [turn]);
  useEffect(() => {
    turnReqRef.current = turnReq;
  }, [turnReq]);
  useEffect(() => {
    pageRef.current = page;
  }, [page]);

  const spreadOn = spread && mode === "libro";
  const step = mode === "continuo" ? 1 : spreadOn ? 2 : 1;
  const sideways = rotate % 180 !== 0;
  const pagesShown = spreadOn && containerW >= 560 ? 2 : 1;
  const fitScale =
    baseSize && containerW > 0
      ? Math.min(3, Math.max(0.3, (containerW - 24) / ((sideways ? baseSize.h : baseSize.w) * pagesShown)))
      : null;
  const scale = fit && fitScale ? fitScale : (ZOOMS[zoomIdx] ?? 1.1);
  const progress = numPages ? Math.round((page / numPages) * 100) : 0;
  const totalHits = useMemo(() => hits.reduce((acc, h) => acc + h.count, 0), [hits]);
  const textRenderer = useMemo(() => makeTextRenderer(query), [query]);

  const preload = useMemo(
    () =>
      numPages > 0
        ? [page - 1, page + 1].filter((n) => n >= 1 && n <= numPages && n !== page)
        : [],
    [page, numPages],
  );

  // escala en ref para callbacks estables (onRenderSuccess de todas las páginas)
  const scaleRef = useRef(scale);
  scaleRef.current = scale;
  const handleRenderSuccess = useCallback((viewport: { width: number; height: number }) => {
    const s = scaleRef.current || 1;
    const w = viewport.width / s;
    const h = viewport.height / s;
    setBaseSize((prev) =>
      prev && Math.abs(prev.w - w) < 1 && Math.abs(prev.h - h) < 1 ? prev : { w, h },
    );
  }, []);

  const scrollToReaderTop = useCallback(() => {
    viewportRef.current?.scrollIntoView({ block: "start", behavior: "auto" });
  }, []);

  const startTurn = useCallback(
    (from: number, to: number) => {
      if (from === to) return;
      const dir = (to > from ? 1 : -1) as 1 | -1;
      const wantLeaf = Math.abs(to - from) === 1 && !spreadOn;
      let snapshot: string | null = null;
      if (wantLeaf) {
        snapshot = snapRef.current.get(String(from)) ?? null;
        if (!snapshot) {
          try {
            const canvas = stageRef.current?.querySelector("canvas") as HTMLCanvasElement | null;
            snapshot = canvas ? canvas.toDataURL("image/jpeg", 0.92) : null;
          } catch {
            snapshot = null;
          }
        }
      }
      scrollToReaderTop();
      setTurn({ from, to, dir, kind: wantLeaf && snapshot ? "flip" : "jump", snapshot });
    },
    [scrollToReaderTop, spreadOn],
  );

  // L0: pre-captura el snapshot de la página visible cuando el hilo está libre
  const captureIdle = useCallback((p: number) => {
    const doCapture = () => {
      try {
        const canvas = stageRef.current?.querySelector("canvas") as HTMLCanvasElement | null;
        if (!canvas || canvas.width < 2) return;
        const k = 0.6;
        const c = document.createElement("canvas");
        c.width = Math.max(1, Math.round(canvas.width * k));
        c.height = Math.max(1, Math.round(canvas.height * k));
        const ctx = c.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(canvas, 0, 0, c.width, c.height);
        const url = c.toDataURL("image/jpeg", 0.85);
        const key = String(p);
        snapRef.current.delete(key);
        snapRef.current.set(key, url);
        while (snapRef.current.size > 6) {
          const oldest = snapRef.current.keys().next().value;
          if (oldest) snapRef.current.delete(oldest);
          else break;
        }
      } catch {
        /* sin snapshot: startTurn lo captura sincrónico */
      }
    };
    if (typeof requestIdleCallback !== "undefined") {
      requestIdleCallback(doCapture, { timeout: 800 });
    } else {
      window.setTimeout(doCapture, 60);
    }
  }, []);

  // Una página quedó rasterizada: arma + si era el destino esperado, gira ya
  // L1: el armed-set espeja la caché de páginas del worker pdf.js
  const onPageRendered = useCallback(
    (p: number, viewport: { width: number; height: number }) => {
      handleRenderSuccess(viewport);
      armedRef.current.add(String(p));
      if (p === pageRef.current) captureIdle(p);
      const req = turnReqRef.current;
      if (req && req.to === p) {
        turnReqRef.current = null;
        setTurnReq(null);
        startTurn(req.from, req.to);
      }
    },
    [captureIdle, handleRenderSuccess, startTurn],
  );

  const finishTurn = useCallback(() => {
    const cur = turnRef.current;
    if (!cur) return;
    turnRef.current = null;
    setPage(cur.to);
    setTurn(null);
    const pending = pendingRef.current;
    pendingRef.current = null;
    if (pending !== null && pending !== cur.to) {
      requestAnimationFrame(() => startTurn(cur.to, pending));
    }
  }, [startTurn]);

  const goTo = useCallback(
    (target: number) => {
      if (!numPages) return;
      const t = Math.min(numPages, Math.max(1, Math.round(target)));
      if (mode === "continuo") {
        setPage(t);
        document.getElementById(`pdf-page-${t}`)?.scrollIntoView({ block: "start", behavior: "smooth" });
        return;
      }
      if (turnRef.current) {
        pendingRef.current = t;
        return;
      }
      if (t === page) return;
      // Si el destino ya está rasterizado a esta escala, girar ya.
      // Si no, se monta tibia (invisible) y onPageRendered gira al quedar armada.
      if (armedRef.current.has(String(t))) {
        startTurn(page, t);
      } else {
        setTurnReq({ from: page, to: t });
      }
    },
    [numPages, mode, page, startTurn],
  );

  const go = useCallback((delta: number) => goTo(page + delta), [goTo, page]);

  const zoomIn = useCallback(() => {
    if (fit) {
      setFit(false);
      setZoomIdx(closestZoomIndex(scale));
      return;
    }
    setZoomIdx((i) => Math.min(ZOOMS.length - 1, i + 1));
  }, [fit, scale]);

  const zoomOut = useCallback(() => {
    if (fit) {
      setFit(false);
      setZoomIdx(closestZoomIndex(scale));
      return;
    }
    setZoomIdx((i) => Math.max(0, i - 1));
  }, [fit, scale]);

  useEffect(() => {
    if (!turn) return;
    const t = window.setTimeout(finishTurn, TURN_TIMEOUT_MS);
    return () => window.clearTimeout(t);
  }, [turn, finishTurn]);

  // Si el destino tarda en rasterizar, girar igual tras el fallback
  useEffect(() => {
    if (!turnReq) return;
    const t = window.setTimeout(() => {
      const req = turnReqRef.current;
      if (req) {
        turnReqRef.current = null;
        setTurnReq(null);
        startTurn(req.from, req.to);
      }
    }, WARM_TIMEOUT_MS);
    return () => window.clearTimeout(t);
  }, [turnReq, startTurn]);

  // Escala/rotación cambian: los armados dejan de valer y el turno se asienta
  useEffect(() => {
    armedRef.current.clear();
    snapRef.current.clear();
    if (turnRef.current) finishTurn();
    setTurnReq(null);
  }, [scale, rotate, finishTurn]);

  // NOTA: no hay efecto de reset por href. react-pdf <Document> usa Suspense:
  // el commit ocurre tras resolver y el efecto hijo (onLoadSuccess) corre antes
  // que los efectos padre en ese mismo commit — un reset por [href] ejecutaría
  // DESPUÉS y borraría numPages. El padre remonta con key={href} y
  // onLoadSuccess deja el estado del documento listo.

  useEffect(() => {
    const el = viewportRef.current;
    if (!el || !numPages) return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width ?? 0;
      if (w > 0) setContainerW(w);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [numPages]);

  useEffect(() => {
    if (document.activeElement !== pageInputRef.current) setPageInput(String(page));
  }, [page]);

  useEffect(() => {
    if (!showThumbs) return;
    thumbRefs.current.get(page)?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [page, showThumbs]);

  useEffect(() => {
    const onFs = () => setIsFs(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  // Búsqueda en todo el documento (texto en caché) + resaltado en página
  useEffect(() => {
    const q = query.trim();
    if (!q || !numPages) {
      setHits([]);
      setScanning(false);
      return;
    }
    const seq = (searchSeqRef.current += 1);
    setScanning(true);
    const timer = window.setTimeout(() => {
      void (async () => {
        const pdf = pdfRef.current;
        if (!pdf) {
          if (searchSeqRef.current === seq) setScanning(false);
          return;
        }
        const needle = normalizeText(q);
        const out: Hit[] = [];
        for (let n = 1; n <= pdf.numPages; n += 1) {
          if (searchSeqRef.current !== seq) return;
          let txt = textCacheRef.current.get(n);
          if (txt === undefined) {
            try {
              const pg = await pdf.getPage(n);
              const tc = await pg.getTextContent();
              txt = (tc.items as Array<{ str?: string }>).map((i) => i.str ?? "").join(" ");
            } catch {
              txt = "";
            }
            textCacheRef.current.set(n, txt);
          }
          const hay = normalizeText(txt);
          let idx = hay.indexOf(needle);
          let first = -1;
          let count = 0;
          while (idx !== -1) {
            if (first < 0) first = idx;
            count += 1;
            idx = hay.indexOf(needle, idx + Math.max(1, needle.length));
          }
          if (count > 0 && first >= 0) {
            const s = Math.max(0, first - 45);
            const e2 = Math.min(txt.length, first + needle.length + 65);
            out.push({
              page: n,
              count,
              snippet: `${s > 0 ? "…" : ""}${txt.slice(s, e2).replace(/\s+/g, " ").trim()}${e2 < txt.length ? "…" : ""}`,
            });
          }
          if (n % 4 === 0) {
            setScanProgress(n);
            await new Promise((r) => setTimeout(r, 0));
          }
        }
        if (searchSeqRef.current !== seq) return;
        setHits(out);
        setMatchIdx(0);
        setScanning(false);
        setScanProgress(0);
      })();
    }, 250);
    return () => {
      window.clearTimeout(timer);
      searchSeqRef.current += 1;
    };
  }, [query, numPages]);

  // Atajos (captura: Esc con búsqueda abierta no llega al diálogo padre)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const typing =
        !!target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);
      if ((e.key === "f" || e.key === "F") && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        e.stopPropagation();
        setSearchOpen(true);
        requestAnimationFrame(() => searchInputRef.current?.focus());
        return;
      }
      if (e.key === "Escape" && searchOpen) {
        e.preventDefault();
        e.stopPropagation();
        setSearchOpen(false);
        setQuery("");
        setHits([]);
        searchInputRef.current?.blur();
        return;
      }
      if (typing) return;
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          go(-step);
          break;
        case "ArrowRight":
          e.preventDefault();
          go(step);
          break;
        case "PageDown":
          e.preventDefault();
          go(step);
          break;
        case "PageUp":
          e.preventDefault();
          go(-step);
          break;
        case "Home":
          e.preventDefault();
          goTo(1);
          break;
        case "End":
          e.preventDefault();
          goTo(numPages);
          break;
        case "+":
        case "=":
          zoomIn();
          break;
        case "-":
        case "_":
          zoomOut();
          break;
        case "0":
          setFit(false);
          setZoomIdx(2);
          break;
        default:
          break;
      }
    };
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  });

  function goMatch(delta: number) {
    if (!hits.length) return;
    const next = (matchIdx + delta + hits.length) % hits.length;
    setMatchIdx(next);
    goTo(hits[next].page);
  }

  function openSearch() {
    setSearchOpen(true);
    requestAnimationFrame(() => searchInputRef.current?.focus());
  }

  function submitPage(e: FormEvent) {
    e.preventDefault();
    const n = Number(pageInput);
    if (Number.isFinite(n) && n > 0) {
      goTo(n);
      pageInputRef.current?.blur();
    }
  }

  function toggleFullscreen() {
    if (document.fullscreenElement) {
      void document.exitFullscreen().catch(() => {});
    } else {
      void rootRef.current?.requestFullscreen?.().catch(() => {});
    }
  }

  function onTouchStart(e: ReactTouchEvent<HTMLDivElement>) {
    const t = e.touches[0];
    touchRef.current = { x: t.clientX, y: t.clientY };
  }

  function onTouchEnd(e: ReactTouchEvent<HTMLDivElement>) {
    const start = touchRef.current;
    touchRef.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) > 64 && Math.abs(dy) < 48 && scale <= 1.4) go(dx < 0 ? step : -step);
  }

  function onTurnEnd(e: AnimationEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) finishTurn();
  }

  function pageCard(p: number, opts?: { spine?: boolean; preload?: boolean; warm?: boolean }) {
    return (
      <div className="overflow-hidden rounded-[18px] bg-white p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
        <div className={opts?.spine ? "bg-white shadow-[inset_-16px_0_24px_-16px_rgba(0,0,0,0.45)]" : "bg-white"}>
          {/* preload/tiburón: solo el canvas (L0 tibio); el text layer lo construye la instancia aterrizada */}
          {opts?.preload || opts?.warm ? (
            <Page
              pageNumber={p}
              scale={scale}
              rotate={rotate}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              onRenderSuccess={(v) => onPageRendered(p, v)}
            />
          ) : (
            <Page
              pageNumber={p}
              scale={scale}
              rotate={rotate}
              renderTextLayer
              renderAnnotationLayer
              customTextRenderer={textRenderer}
              onRenderSuccess={(v) => onPageRendered(p, v)}
              loading={<div className="aspect-[3/4] w-full animate-pulse bg-slate-200" aria-hidden="true" />}
            />
          )}
        </div>
      </div>
    );
  }

  function spreadPages(p: number, warm = false) {
    if (!spreadOn || numPages <= 1)
      return (
        <div className="flex justify-center">
          {pageCard(p, { warm })}
        </div>
      );
    const list = [p, p + 1 <= numPages ? p + 1 : null].filter((x): x is number => x !== null);
    return (
      <div className="flex flex-wrap justify-center gap-3">
        {list.map((x, i) => (
          <div key={x}>{pageCard(x, { spine: i === 0, warm })}</div>
        ))}
      </div>
    );
  }

  const toolBtn = (active: boolean) =>
    `pressable grid h-11 w-11 shrink-0 place-items-center rounded-full transition-colors ${
      active ? "bg-[#ffd60a] text-slate-900" : "text-white hover:bg-white/15"
    }`;

  return (
    <div ref={rootRef} className="pdf-reader relative mx-auto flex min-h-0 max-w-3xl flex-1 flex-col">
      {/* Toolbar */}
      <div className="sticky top-0 z-20 mb-4 rounded-[24px] border border-white/25 bg-[#081430] p-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
        <div className="no-scrollbar flex items-center gap-1.5 overflow-x-auto">
          <button type="button" onClick={() => go(-step)} disabled={page <= 1} aria-label="Página anterior" className="pressable grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/20 transition-colors hover:bg-white/25 disabled:opacity-35">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>

          <form onSubmit={submitPage} className="flex shrink-0 items-center justify-center gap-1" aria-label="Ir a página">
            <input
              ref={pageInputRef}
              value={pageInput}
              onChange={(e) => setPageInput(e.target.value)}
              onFocus={(e) => e.currentTarget.select()}
              inputMode="numeric"
              aria-label="Número de página"
              className="h-10 w-12 rounded-full bg-black/40 text-center text-sm font-bold tabular-nums text-white ring-1 ring-white/20"
            />
            <span className="text-sm font-semibold tabular-nums text-white/70">/ {numPages || "…"}</span>
          </form>

          <button type="button" onClick={() => go(step)} disabled={page >= numPages} aria-label="Página siguiente" className="pressable grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/20 transition-colors hover:bg-white/25 disabled:opacity-35">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>

          <span className="mx-1 h-6 w-px shrink-0 bg-white/25" aria-hidden="true" />

          <div className="flex shrink-0 items-center rounded-full bg-black/40 p-0.5 ring-1 ring-white/20" role="group" aria-label="Zoom">
            <button type="button" onClick={zoomOut} aria-label="Alejar" className="pressable grid h-9 w-9 place-items-center rounded-full text-white hover:bg-white/20">−</button>
            <span className="min-w-[48px] text-center text-xs font-bold tabular-nums text-white">{Math.round(scale * 100)}%</span>
            <button type="button" onClick={zoomIn} aria-label="Acercar" className="pressable grid h-9 w-9 place-items-center rounded-full text-white hover:bg-white/20">+</button>
          </div>

          <button type="button" onClick={() => setFit((v) => !v)} aria-pressed={fit} aria-label="Ajustar a ancho" className={toolBtn(fit)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M8 8l-4 4 4 4" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 12h20" strokeLinecap="round" /></svg>
          </button>

          <button type="button" onClick={() => setSpread((v) => !v)} disabled={mode !== "libro"} aria-pressed={spreadOn} aria-label="Dos páginas por vista" className={`${toolBtn(spreadOn)} disabled:opacity-35`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M2 6a2 2 0 0 1 2-2h6v16H4a2 2 0 0 1-2-2V6Z" /><path d="M22 6a2 2 0 0 0-2-2h-6v16h6a2 2 0 0 0 2-2V6Z" /></svg>
          </button>

          <button type="button" onClick={() => { setMode((m) => (m === "libro" ? "continuo" : "libro")); setTurn(null); turnRef.current = null; }} aria-pressed={mode === "continuo"} aria-label="Vista continua (desliza por todas las páginas)" className={toolBtn(mode === "continuo")}>
            {mode === "continuo" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><rect x="6" y="3" width="12" height="18" rx="2" /></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M4 6h16" strokeLinecap="round" /><path d="M4 10h16" strokeLinecap="round" /><path d="M4 14h16" strokeLinecap="round" /><path d="M4 18h16" strokeLinecap="round" /></svg>
            )}
          </button>

          <button type="button" onClick={() => setShowThumbs((v) => !v)} aria-pressed={showThumbs} aria-label="Mostrar miniaturas" className={toolBtn(showThumbs)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>
          </button>

          <button type="button" onClick={() => (searchOpen ? setSearchOpen(false) : openSearch())} aria-pressed={searchOpen} aria-label="Abrir búsqueda en el documento" className={toolBtn(searchOpen)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" strokeLinecap="round" /></svg>
          </button>

          <button type="button" onClick={() => setRotate((r) => (r + 90) % 360)} aria-label="Girar página" className={toolBtn(rotate !== 0)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M21 12a9 9 0 1 1-2.64-6.36" strokeLinecap="round" /><path d="M21 3v6h-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>

          <button type="button" onClick={toggleFullscreen} aria-pressed={isFs} aria-label={isFs ? "Salir de pantalla completa" : "Pantalla completa"} className={toolBtn(isFs)}>
            {isFs ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M8 3v3a2 2 0 0 1-2 2H3" strokeLinecap="round" /><path d="M21 8h-3a2 2 0 0 1-2-2V3" strokeLinecap="round" /><path d="M3 16h3a2 2 0 0 1 2 2v3" strokeLinecap="round" /><path d="M16 21v-3a2 2 0 0 1 2-2h3" strokeLinecap="round" /></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M8 3H5a2 2 0 0 0-2 2v3" strokeLinecap="round" /><path d="M16 3h3a2 2 0 0 1 2 2v3" strokeLinecap="round" /><path d="M8 21H5a2 2 0 0 1-2-2v-3" strokeLinecap="round" /><path d="M16 21h3a2 2 0 0 0 2-2v-3" strokeLinecap="round" /></svg>
            )}
          </button>
        </div>

        {searchOpen ? (
          <div data-pdf-search className="mt-1.5 rounded-[18px] bg-black/40 p-2 ring-1 ring-white/20">
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true" className="ml-2 shrink-0 text-white/60"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" strokeLinecap="round" /></svg>
              <input
                ref={searchInputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    goMatch(e.shiftKey ? -1 : 1);
                  }
                }}
                placeholder="Buscar en el documento…"
                aria-label="Buscar en el documento"
                className="min-h-[44px] min-w-0 flex-1 rounded-full bg-white px-4 text-sm font-semibold text-slate-900 placeholder:text-slate-500"
              />
              <button type="button" onClick={() => goMatch(-1)} disabled={!hits.length || scanning} aria-label="Coincidencia anterior" className="pressable grid h-11 w-11 shrink-0 place-items-center rounded-full text-white hover:bg-white/15 disabled:opacity-35">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><path d="M6 15l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              <button type="button" onClick={() => goMatch(1)} disabled={!hits.length || scanning} aria-label="Coincidencia siguiente" className="pressable grid h-11 w-11 shrink-0 place-items-center rounded-full text-white hover:bg-white/15 disabled:opacity-35">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              <span aria-live="polite" className="min-w-[76px] shrink-0 text-center text-xs font-bold tabular-nums text-white/80">
                {scanning
                  ? `Buscando ${scanProgress}/${numPages}…`
                  : hits.length
                    ? `${matchIdx + 1}/${hits.length} · ${totalHits}`
                    : query.trim()
                      ? "Sin resultados"
                      : ""}
              </span>
              <button type="button" onClick={() => { setSearchOpen(false); setQuery(""); setHits([]); }} aria-label="Cerrar búsqueda" className="pressable grid h-11 w-11 shrink-0 place-items-center rounded-full text-white hover:bg-white/15">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" /></svg>
              </button>
            </div>
            {hits.length > 0 && !scanning ? (
              <ul className="mt-2 max-h-44 overflow-auto rounded-[14px] bg-white/10 p-1" aria-label="Resultados de búsqueda">
                {hits.slice(0, 40).map((h, i) => (
                  <li key={h.page}>
                    <button
                      type="button"
                      onClick={() => {
                        setMatchIdx(i);
                        goTo(h.page);
                      }}
                      aria-current={h.page === page}
                      className="pressable flex min-h-[44px] w-full items-center gap-3 rounded-[10px] px-2 text-left text-white hover:bg-white/10"
                    >
                      <span className="shrink-0 rounded-full bg-[#ffd60a] px-2 py-0.5 text-[11px] font-bold tabular-nums text-slate-900">p. {h.page}</span>
                      <span className="min-w-0 flex-1 truncate text-xs text-white/85">{h.snippet}</span>
                      {h.count > 1 ? (
                        <span className="shrink-0 text-[11px] font-bold tabular-nums text-white/60">×{h.count}</span>
                      ) : null}
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
            {hits.length > 40 ? (
              <p className="mt-1 px-2 text-[11px] text-white/60">Mostrando las primeras 40 páginas con coincidencias.</p>
            ) : null}
          </div>
        ) : null}

        <div className="flex items-center gap-2 px-2 pb-1 pt-1.5">
          <input
            type="range"
            min={1}
            max={Math.max(1, numPages)}
            value={page}
            disabled={!numPages}
            aria-label="Progreso de lectura"
            className="h-2 min-w-0 flex-1 accent-[#ffd60a]"
            onChange={(e) => {
              const v = Number(e.target.value);
              if (mode === "continuo") {
                goTo(v);
              } else {
                pendingRef.current = null;
                turnRef.current = null;
                setTurn(null);
                setPage(v);
                scrollToReaderTop();
              }
            }}
          />
          <span className="min-w-[42px] shrink-0 text-right text-xs font-bold tabular-nums text-white/70">{progress}%</span>
        </div>
      </div>

      <Document
        file={href}
        onLoadSuccess={(d: PDFDocumentProxy) => {
          pdfRef.current = d;
          setNumPages(d.numPages);
          setPage(1);
          setPageInput("1");
          setTurn(null);
          turnRef.current = null;
          turnReqRef.current = null;
          setTurnReq(null);
          pendingRef.current = null;
          setQuery("");
          setHits([]);
          setScanning(false);
          setScanProgress(0);
          setBaseSize(null);
          armedRef.current.clear();
          snapRef.current.clear();
          textCacheRef.current.clear();
          searchSeqRef.current += 1;
        }}
        loading={
          <div className="space-y-3 py-8" aria-label="Cargando PDF">
            <div className="mx-auto aspect-[4/5] max-w-md animate-pulse rounded-[20px] bg-white/15" />
            <p className="text-center text-sm font-semibold text-white/80">Abriendo documento…</p>
          </div>
        }
        error={
          <div className="mx-auto max-w-md rounded-[24px] border border-white/20 bg-[#081430] p-8 text-center text-white">
            <p className="font-heading font-bold">No pudimos abrir este PDF.</p>
            <a href={href} download className="pressable mt-4 inline-flex min-h-[44px] items-center rounded-full bg-[#ffd60a] px-5 text-sm font-bold text-slate-900">Descargar PDF</a>
          </div>
        }
      >
        {/* Vista libro: giro direccional sin remontar desde cero */}
        <div
          ref={viewportRef}
          className="scroll-mt-24"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onDoubleClick={() => setFit((v) => !v)}
        >
          {mode === "libro" ? (
            turn?.kind === "flip" ? (
              /* Hoja real: destino ya renderizado debajo, snapshot girando encima */
              <div ref={stageRef} className="pdf-stage">
                <div className="flex justify-center">
                  <div className="relative w-fit">
                    {pageCard(turn.to)}
                    <div className={`pdf-dest-shadow pdf-dest-shadow-${turn.dir > 0 ? "next" : "prev"}`} aria-hidden="true" />
                    <div
                      className={`pdf-leaf pdf-leaf-${turn.dir > 0 ? "next" : "prev"}`}
                      onAnimationEnd={onTurnEnd}
                      aria-hidden="true"
                    >
                      {turn.dir > 0 ? (
                        <>
                          <div className="pdf-leaf-face">
                            {turn.snapshot ? <img src={turn.snapshot} alt="" draggable={false} /> : null}
                            <div className="pdf-leaf-curl pdf-leaf-curl-next" />
                          </div>
                          <div className="pdf-leaf-face pdf-leaf-backface">
                            {turn.snapshot ? (
                              <div className="pdf-leaf-back-lift">
                                <img src={turn.snapshot} alt="" draggable={false} />
                              </div>
                            ) : null}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="pdf-leaf-face">
                            {turn.snapshot ? (
                              <div className="pdf-leaf-back-lift">
                                <img src={turn.snapshot} alt="" draggable={false} />
                              </div>
                            ) : null}
                          </div>
                          <div className="pdf-leaf-face pdf-leaf-backface">
                            {turn.snapshot ? <img src={turn.snapshot} alt="" draggable={false} /> : null}
                            <div className="pdf-leaf-curl pdf-leaf-curl-prev" />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : turn ? (
              /* Salto largo: fade sobre página ya renderizada */
              <div ref={stageRef} className="pdf-stack">
                <div className="pdf-layer pdf-fade-out" aria-hidden="true">
                  {spreadPages(turn.from)}
                </div>
                <div className="pdf-layer pdf-fade-in" onAnimationEnd={onTurnEnd}>
                  {spreadPages(turn.to)}
                </div>
              </div>
            ) : turnReq ? (
              /* Esperando el raster: destino tibio invisible, saliente intacta */
              <div ref={stageRef} className="pdf-stack">
                <div className="pdf-layer">{spreadPages(turnReq.from)}</div>
                <div className="pdf-layer pdf-warm" aria-hidden="true">
                  {spreadPages(turnReq.to, true)}
                </div>
              </div>
            ) : (
              <div ref={stageRef} className="pdf-stack">
                <div className="pdf-layer">{spreadPages(page)}</div>
              </div>
            )
          ) : null}

          {mode === "continuo" && numPages > 0 ? (
            <div className="space-y-4">
              {Array.from({ length: numPages }, (_, i) => i + 1).map((p) => (
                <LazyPage
                  key={p}
                  pageNumber={p}
                  scale={scale}
                  rotate={rotate}
                  renderer={textRenderer}
                  onSize={handleRenderSuccess}
                  onCenter={setPage}
                  ratio={baseSize ? baseSize.w / baseSize.h : 0.75}
                />
              ))}
            </div>
          ) : null}
        </div>

        {/* Precarga silenciosa de páginas vecinas (canvas tibio, sin parpadeo) */}
        {mode === "libro" && !turn && preload.length > 0 ? (
          <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 h-px w-px overflow-hidden opacity-0">
            {preload.map((p) => (
              <div key={p}>{pageCard(p, { preload: true })}</div>
            ))}
          </div>
        ) : null}

        {showThumbs && numPages > 0 ? (
          <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto rounded-[24px] border border-white/20 bg-[#081430] p-3 shadow-xl" aria-label="Miniaturas de páginas">
            {Array.from({ length: numPages }, (_, i) => i + 1).map((p) => (
              <LazyThumb
                key={p}
                pageNumber={p}
                current={p === page}
                onGo={() => goTo(p)}
                onRegister={(el) => {
                  if (el) thumbRefs.current.set(p, el);
                  else thumbRefs.current.delete(p);
                }}
              />
            ))}
          </div>
        ) : null}
      </Document>

      <p className="mt-3 text-center text-xs font-medium text-white/60">
        ←/→ cambia de página · Ctrl+F busca · Desliza para pasar · Doble clic ajusta · 0 restablece zoom
      </p>
      <span className="sr-only" aria-live="polite">
        {`Página ${page} de ${numPages || "…"}`}
      </span>
    </div>
  );
});
