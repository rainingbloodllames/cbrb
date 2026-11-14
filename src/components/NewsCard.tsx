import { memo } from "react";
import type { NewsItem } from "@/lib/content";

export const NewsCard = memo(function NewsCard({ item, featured = false }: { item: NewsItem; featured?: boolean }) {
  return (
    <article className={`group pressable min-w-0 overflow-hidden rounded-[28px] bg-white dark:bg-[#1c1c1e] ${featured ? "shadow-glass-light" : "ios-card"}`}>
      {item.image ? (
        <figure className="m-0">
          <img
            src={item.image}
            alt={item.imageAlt ?? item.title}
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
            className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
          {item.imageCredit ? (
            <figcaption className="px-6 pt-2 text-[11px] leading-snug text-slate-500 dark:text-slate-400">
              {item.imageCredit}
            </figcaption>
          ) : null}
        </figure>
      ) : null}
      <div className="p-6">
        <p className="flex flex-wrap items-center gap-2 text-xs font-bold">
          <span className="rounded-full bg-[#0a84ff]/10 px-2.5 py-1 text-[#0a84ff]">{item.category}</span>
          <time className="tabular-nums text-slate-500" dateTime={item.date}>
            {item.date}
          </time>
        </p>
        <h3 className={`mt-3 font-heading font-bold leading-snug text-pretty transition-colors duration-150 group-hover:text-[#0a84ff] ${featured ? "text-2xl" : "text-lg"}`}>
          {item.title}
        </h3>
        <p className={`mt-2 leading-relaxed text-slate-600 dark:text-slate-400 ${featured ? "text-base" : "line-clamp-2 text-sm"}`}>{item.excerpt}</p>
        {item.sourceUrl && item.source ? (
          <p className="mt-4">
            <a
              href={item.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-[#0a84ff]/10 px-4 py-2 text-sm font-bold text-[#0a84ff] transition-colors duration-150 hover:bg-[#0a84ff]/20"
            >
              Leer cobertura original
              <span aria-hidden="true">↗</span>
            </a>
          </p>
        ) : null}
        {item.source ? (
          <p className="mt-3 text-[11px] font-medium text-slate-500 dark:text-slate-400">
            Fuente: {item.source}
          </p>
        ) : null}
      </div>
    </article>
  );
});
