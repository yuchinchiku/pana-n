export const dynamic = 'force-dynamic';

import Link from 'next/link';
import '@/styles/component/news.scss';

type WPNews = {
  id: number;
  date: string;
  title: { rendered: string };
  slug: string;
  thumbnailUrl?: string | null;
};

async function fetchLatestNews(limit: number = 5): Promise<WPNews[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news?page=1&perPage=${limit}`, {
      cache: 'no-store',
    });
    if (!res.ok) return [];
    const json = await res.json();
    return Array.isArray(json) ? json : json.data || [];
  } catch {
    return [];
  }
}

export default async function NewsListTop() {
  // ❌ const newsList = await fetchLatestNews(limit = 5);
  // ✅ 正しくは引数を直接渡す
  const newsList = await fetchLatestNews(5);

  if (!newsList.length) return <p className="shippori text-white">お知らせはありません。</p>;

  return (
    <ul className="u-newsList u-fade-in pt-4 max-w-[603px]">
      {newsList.map(news => (
        <li key={news.id} className="u-news-item py-2 lg:py-3">
          <Link
            href={`/news/${encodeURIComponent(news.slug)}`}
            className="u-news-link text-white block lg:flex lg:gap-6"
          >
            <p className="shippori text-sm font-medium leading-relaxed lg:leading-none lg:flex-shrink-0 lg:min-w-[70px]">
              {news.date ? new Date(news.date).toLocaleDateString('ja-JP') : ''}
            </p>
            <p className="shippori font-medium leading-relaxed lg:leading-none">
              {news.title?.rendered || ''}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
