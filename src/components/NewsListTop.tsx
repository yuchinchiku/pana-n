import Link from 'next/link';

type WPNews = {
  id: number;
  date: string;
  title: { rendered: string };
  slug: string;
  thumbnailUrl?: string | null;
};

const DEFAULT_THUMBNAIL = '/images/news/default-news.jpg';

async function fetchLatestNews(limit: number = 5): Promise<WPNews[]> {
  try {
    const res = await fetch(`http://localhost:3000/api/news?page=1&perPage=${limit}`, { cache: 'no-store' });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data;
  } catch (err) {
    console.error('ニュース取得失敗:', err);
    return [];
  }
}

export default async function NewsListTop() {
  const newsList = await fetchLatestNews(5);

  if (newsList.length === 0) return <p className="text-white">お知らせはありません。</p>;

  return (
    <ul className="u-newsList u-fade-in pt-4 max-w-[603px]">
      {newsList.map(news => (
        <li key={news.id} className="u-news-item py-2 md:py-3">
          <Link href={`/news/${news.slug}`} className="u-news-link text-white block md:flex md:gap-6">
            <p className="shippori text-sm font-medium leading-relaxed md:leading-none md:flex-shrink-0 md:min-w-[70px]">
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
