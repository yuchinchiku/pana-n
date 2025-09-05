'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type WPNews = {
  id: number;
  date: string;
  title: { rendered: string };
  slug: string;
};

export default function NewsListTop({ perPage = 5 }: { perPage?: number }) {
  const [newsList, setNewsList] = useState<WPNews[]>([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(`/api/news?page=1&perPage=${perPage}`);
        const json = await res.json();
        setNewsList(json.data || []);
      } catch (err) {
        console.error('ニュース取得失敗:', err);
        setNewsList([]);
      }
    }
    fetchNews();
  }, [perPage]);

  if (!newsList.length) {
    return <p className="shippori text-white">お知らせはありません。</p>;
  }

  return (
    <ul className="u-newsList pt-4 max-w-[603px]">
      {newsList.map((news) => (
        <li key={news.id} className="u-news-item py-2 lg:py-3">
          <Link
            href={`/news/${encodeURIComponent(news.slug)}`}
            className="u-news-link text-white block lg:flex lg:gap-6"
          >
            <p className="shippori text-sm font-medium leading-relaxed lg:leading-none lg:flex-shrink-0 lg:min-w-[70px]">
              {news.date ? new Date(news.date).toLocaleDateString('ja-JP') : ''}
            </p>
            <p className="shippori font-medium leading-relaxed lg:leading-none">
              {news.title?.rendered ?? ''}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
