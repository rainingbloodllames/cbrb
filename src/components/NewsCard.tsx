import { memo } from "react";
import type { NewsItem } from "@/lib/content";

export const NewsCard = memo(function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="glass-panel shadow-glass-light animate-enter-up rounded-2xl p-5">
      <p className="text-xs font-bold uppercase tracking-wide text-blue-700 dark:text-blue-300">
        {item.category} · {item.date}
      </p>
      <h3 className="mt-2 font-heading text-lg font-bold leading-snug">{item.title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.excerpt}</p>
    </article>
  );
});
