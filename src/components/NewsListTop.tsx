// components/NewsListTop.tsx
import Link from 'next/link';

type WPNews = {
  id: number;
  date: string;
  title: { rendered: string };
  slug: string;
};

async function fetchLatestNews(limit: number = 5): Promise<WPNews[]> {
  const res = await fetch(
    `https://pn.konety.jp/wp-json/wp/v2/news?_embed&per_page=${limit}&orderby=date&order=desc`,
    { cache: 'no-store' }
  );
  if (!res.ok) return [];
  return res.json();
}

export default async function NewsListTop() {
  const newsList = await fetchLatestNews(5);

  if (newsList.length === 0) return <p className="text-white">お知らせはありません。</p>;

  return (
    <ul className="u-newsList u-fade-in pt-4 max-w-[603px]">
      {newsList.map(news => (
        <li key={news.id} className="u-news-item py-2 md:py-3">
          <Link href={`/news/${news.slug}`} className="u-news-link text-white block md:flex md:gap-6">
            <p className="shippori text-sm font-medium leading-relaxed md:leading-none md:flex-shrink-0">
              {news.date ? new Date(news.date).toLocaleDateString('ja-JP') : ''}
            </p>
            <p className="shippori font-medium leading-relaxed md:leading-none">
              {news.title?.rendered || ''}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
