import type { NewsItem } from "@/lib/content";

/**
 * Puente solo-lectura con la página de Facebook.
 * - Token y Page ID solo en servidor (nunca `NEXT_PUBLIC_`).
 * - Requiere `pages_read_engagement` en el token de Página.
 * - Sin token o con error, devuelve [] y la web sigue con `content.ts`.
 */

type FbAttachment = {
  media?: { image?: { src?: string } };
  url?: string;
  type?: string;
};

type FbPost = {
  id: string;
  message?: string;
  created_time?: string;
  permalink?: string;
  attachments?: { data?: FbAttachment[] };
};

function toNewsItem(post: FbPost): NewsItem | null {
  const message = (post.message ?? "").trim();
  if (!message) return null;
  const lines = message.split("\n").map((l) => l.trim()).filter(Boolean);
  const title = (lines[0] ?? "Publicación de Facebook").slice(0, 120);
  const excerpt = lines.slice(1).join(" ").slice(0, 240) || message.slice(0, 240);
  const date = (post.created_time ?? "").slice(0, 10);
  if (!date) return null;
  const image = post.attachments?.data?.find((a) => a.media?.image?.src)?.media?.image?.src;
  const lower = message.toLowerCase();
  const category: NewsItem["category"] = /sae|matr[ií]cula|admisi|postula/.test(lower) ? "Admisión" : "Comunidad";
  return {
    slug: `fb-${post.id}`,
    title,
    date,
    category,
    excerpt,
    body: message,
    image,
    imageCredit: image ? "Foto: Facebook del colegio" : undefined,
    source: "Facebook · Colegio",
    sourceUrl: post.permalink ?? `https://www.facebook.com/${post.id}`,
  };
}

async function resolvePageId(token: string, fallback: string) {
  if (fallback) return fallback;
  const res = await fetch(`https://graph.facebook.com/v21.0/me/accounts?fields=id,name&access_token=${token}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return "";
  const json = (await res.json()) as { data?: { id: string }[] };
  return json.data?.[0]?.id ?? "";
}

export async function getFacebookPosts(limit = 9): Promise<NewsItem[]> {
  const token = process.env.FB_PAGE_ACCESS_TOKEN;
  if (!token) return [];
  const pageId = await resolvePageId(token, process.env.FACEBOOK_PAGE_ID ?? "");
  if (!pageId) return [];
  const url =
    `https://graph.facebook.com/v21.0/${pageId}/posts` +
    `?fields=id,message,created_time,permalink,attachments{media,url,type}` +
    `&limit=${limit}&access_token=${encodeURIComponent(token)}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  const json = (await res.json()) as { data?: FbPost[] };
  return (json.data ?? []).map(toNewsItem).filter((n): n is NewsItem => n !== null);
}
