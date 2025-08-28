// components/NewsListClient.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';

type WPNews = {
  id: number;
  date: string;
  title: { rendered: string };
  slug: string;
};

export default function NewsListClient({ perPage = 10 }: { perPage?: number }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [newsList, setNewsList] = useState<WPNews[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [fade, setFade] = useState(false);

  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

  useEffect(() => {
    async function fetchNews() {
      setFade(false); // フェードアウト開始

      try {
        const res = await fetch(
          `https://puputito.jp/pana-n/wp-json/wp/v2/news?_embed&per_page=${perPage}&page=${page}&orderby=date&order=desc`,
          { cache: 'no-store' }
        );

        if (!res.ok) throw new Error('ニュース取得失敗');

        const total = Number(res.headers.get('X-WP-TotalPages') || 1);
        const data = await res.json();

        setTimeout(() => {
          setNewsList(data);
          setTotalPages(total);
          setFade(true); // フェードイン
        }, 100); // 少し遅延を入れると自然
      } catch (err) {
        console.error(err);
        setNewsList([]);
        setTotalPages(1);
        setFade(true);
      }
    }

    fetchNews();
  }, [page, perPage]);

  return (
    <div className="news-list-page max-w-[650px] mx-auto mt-10 md:mt-20 mb-10 px-10 md:px-0">
      <ul
        className={`u-newsList transition-opacity duration-500 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {newsList.length === 0 ? (
          <li className="text-text-pana">お知らせはありません。</li>
        ) : (
          newsList.map((news) => (
            <li key={news.id} className="u-news-item py-3">
              <Link
                href={`/news/${news.slug}`}
                className="u-news-link u-textLink text-text-pana block md:flex md:gap-6"
              >
                <p className="shippori text-sm font-medium leading-relaxed md:leading-none md:flex-shrink-0">
                  {news.date ? new Date(news.date).toLocaleDateString('ja-JP') : ''}
                </p>
                <p className="shippori font-medium leading-relaxed md:leading-none">
                  {news.title?.rendered || ''}
                </p>
              </Link>
            </li>
          ))
        )}
      </ul>

      {/* ページネーション */}
      {totalPages > 1 && (
        <div className="pagination mt-8 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => router.push(`/news?page=${p}`)}
              className={`px-3 py-1 garamond border cursor-pointer ${
                p === page
                  ? 'bg-pana text-white'
                  : 'bg-transparent text-text-pana border-text-pana'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
