import { memo } from "react";
import type { NewsItem } from "@/lib/content";

export const NewsCard = memo(function NewsCard({ item, featured = false }: { item: NewsItem; featured?: boolean }) {
  return (
    <article className={`group pressable min-w-0 rounded-[28px] bg-white p-6 dark:bg-[#1c1c1e] ${featured ? "shadow-glass-light" : "ios-card"}`}>
      <p className="flex items-center gap-2 text-xs font-bold">
        <span className="rounded-full bg-[#0a84ff]/10 px-2.5 py-1 text-[#0a84ff]">{item.category}</span>
        <span className="tabular-nums text-slate-500">{item.date}</span>
      </p>
      <h3 className={`mt-3 font-heading font-bold leading-snug text-pretty transition-colors duration-150 group-hover:text-[#0a84ff] ${featured ? "text-2xl" : "text-lg"}`}>
        {item.title}
      </h3>
      <p className={`mt-2 leading-relaxed text-slate-600 dark:text-slate-400 ${featured ? "text-base" : "line-clamp-2 text-sm"}`}>{item.excerpt}</p>
    </article>
  );
});
