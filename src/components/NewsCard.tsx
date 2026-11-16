import { memo } from "react";
import Image from "next/image";
import type { NewsItem } from "@/lib/content";

export const NewsCard = memo(function NewsCard({ item, featured = false }: { item: NewsItem; featured?: boolean }) {
  const meta = (
    <p className="t-meta flex items-center gap-3">
      <span className="t-name !text-xs">{item.category}</span>
      <span>{item.date}</span>
    </p>
  );
  const body = (
    <>
      {meta}
      <h3 className="t-h3 mt-2 text-pretty">
        {item.title}
      </h3>
      <p className={`mt-2 ${featured ? "t-body" : "t-small line-clamp-3"}`}>{item.excerpt}</p>
      {item.source ? (
        <p className="t-meta mt-3">
          {item.sourceUrl ? (
            <a href={item.sourceUrl} target="_blank" rel="noreferrer" className="link-inline">
              {item.source} ↗
            </a>
          ) : (
            item.source
          )}
        </p>
      ) : null}
    </>
  );

  if (featured) {
    return (
      <article className="group grid gap-6 md:grid-cols-[512px_1fr] md:items-start">
        {item.image ? (
          <figure className="w-full max-w-[512px] overflow-hidden rounded-lg">
            <Image
              src={item.image}
              alt={item.imageAlt ?? item.title}
              width={512}
              height={288}
              quality={90}
              sizes="(min-width: 768px) 512px, 90vw"
              className="media-zoom aspect-[16/9] w-full object-cover"
            />
            {item.imageCredit ? (
              <figcaption className="t-meta pt-2">{item.imageCredit}</figcaption>
            ) : null}
          </figure>
        ) : null}
        <div className="border-t-2 border-slate-900 pt-4">{body}</div>
      </article>
    );
  }

  return (
    <article className="group border-t-2 border-slate-900 pt-4">
      {body}
      {item.image ? (
        <figure className="mt-4 max-w-[512px] overflow-hidden rounded-lg">
          <Image
            src={item.image}
            alt={item.imageAlt ?? item.title}
            width={512}
            height={288}
            quality={90}
            sizes="(min-width: 768px) 400px, 90vw"
            className="media-zoom aspect-[16/9] w-full object-cover"
          />
          {item.imageCredit ? (
            <figcaption className="t-meta pt-2">{item.imageCredit}</figcaption>
          ) : null}
        </figure>
      ) : null}
    </article>
  );
});
