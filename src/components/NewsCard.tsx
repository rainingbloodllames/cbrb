import { memo } from "react";
import type { NewsItem } from "@/lib/content";

export const NewsCard = memo(function NewsCard({ item, featured = false }: { item: NewsItem; featured?: boolean }) {
  if (featured) {
    return (
      <article className="group min-w-0">
        <p className="text-xs font-bold text-[#0039a6] dark:text-blue-300">
          <span className="tabular-nums">{item.date}</span> · {item.category}
        </p>
        <h3 className="mt-2 font-heading text-2xl font-bold leading-snug text-pretty transition-colors duration-150 group-hover:text-[#0039a6]">
          {item.title}
        </h3>
        <p className="mt-2 max-w-prose text-base leading-relaxed text-slate-600 dark:text-slate-400">{item.excerpt}</p>
      </article>
    );
  }
  return (
    <article className="group min-w-0 border-t border-slate-200 py-5 transition-colors duration-150 hover:bg-slate-50 dark:border-slate-700/50 dark:hover:bg-slate-800/50">
      <p className="text-xs font-bold text-slate-500">
        <span className="tabular-nums">{item.date}</span> · {item.category}
      </p>
      <h3 className="mt-1 font-heading text-lg font-bold leading-snug transition-colors duration-150 group-hover:text-[#0039a6]">{item.title}</h3>
      <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.excerpt}</p>
    </article>
  );
});
