import { memo } from "react";
import type { NewsItem } from "@/lib/content";

export const NewsCard = memo(function NewsCard({ item, featured = false }: { item: NewsItem; featured?: boolean }) {
  const inner = (
    <>
      {item.image ? (
        <figure className="overflow-hidden rounded-[20px]">
          <img
            src={item.image}
            alt={item.imageAlt ?? item.title}
            width={1200}
            height={400}
            loading="lazy"
            decoding="async"
            className="aspect-[16/7] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
          {item.imageCredit ? (
            <figcaption className="mt-1.5 text-[11px] text-slate-500">{item.imageCredit}</figcaption>
          ) : null}
        </figure>
      ) : null}
      <p className="mt-3 flex flex-wrap items-center gap-2 text-xs font-bold">
        <span className="rounded-full bg-[#0a84ff]/10 px-2.5 py-1 text-[#0a84ff]">{item.category}</span>
        <span className="tabular-nums text-slate-500">{item.date}</span>
      </p>
      <h3 className={`mt-2 font-heading font-bold leading-snug text-pretty transition-colors duration-150 group-hover:text-[#0a84ff] ${featured ? "text-2xl" : "text-lg"}`}>
        {item.title}
      </h3>
      <p className={`mt-2 leading-relaxed text-slate-600 dark:text-slate-400 ${featured ? "text-base" : "line-clamp-3 text-sm"}`}>{item.excerpt}</p>
      {item.source ? (
        <p className="mt-3 text-xs font-semibold text-slate-500">
          {item.sourceUrl ? (
            <a href={item.sourceUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-[#0a84ff]">
              {item.source}
            </a>
          ) : (
            item.source
          )}
        </p>
      ) : null}
    </>
  );
  return (
    <article className={`group pressable min-w-0 rounded-[28px] bg-white p-4 dark:bg-[#1c1c1e] ${featured ? "shadow-glass-light" : "ios-card"}`}>
      {inner}
    </article>
  );
});
