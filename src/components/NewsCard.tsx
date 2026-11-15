import { memo } from "react";
import Image from "next/image";
import type { NewsItem } from "@/lib/content";

export const NewsCard = memo(function NewsCard({ item, featured = false }: { item: NewsItem; featured?: boolean }) {
  const inner = (
    <>
      {item.image ? (
        <figure className="overflow-hidden rounded-[18px] bg-slate-100">
          <Image
            src={item.image}
            alt={item.imageAlt ?? item.title}
            width={1200}
            height={400}
            sizes="(min-width: 768px) 33vw, 90vw"
            className="media-zoom aspect-[16/8] w-full object-cover"
          />
          {item.imageCredit ? (
            <figcaption className="px-1 pt-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500">{item.imageCredit}</figcaption>
          ) : null}
        </figure>
      ) : null}
      <p className="mt-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-slate-900 px-3 py-1.5 text-[12px] font-bold text-white">{item.category}</span>
        <span className="text-[12px] font-bold text-slate-500 tabular-nums">{item.date}</span>
      </p>
      <h3 className={`mt-3 font-heading font-bold leading-tight tracking-tight text-pretty text-slate-900 transition-colors group-hover:text-[#0066cc] ${featured ? "text-[24px]" : "text-[19px]"}`}>
        {item.title}
      </h3>
      <p className={`mt-2.5 leading-relaxed text-slate-600 ${featured ? "text-[15px]" : "line-clamp-3 text-[14px]"}`}>{item.excerpt}</p>
      {item.source ? (
        <p className="mt-4 pt-4 border-t border-slate-100 text-[12px] font-bold uppercase tracking-wide text-slate-500">
          {item.sourceUrl ? (
            <a href={item.sourceUrl} target="_blank" rel="noreferrer" className="underline decoration-slate-300 underline-offset-4 hover:text-[#0066cc] hover:decoration-[#0066cc]">
              {item.source} ↗
            </a>
          ) : (
            item.source
          )}
        </p>
      ) : null}
    </>
  );
  return (
    <article className="group h-full min-w-0 rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      {inner}
    </article>
  );
});
