'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';

type WPNews = {
  id: number;
  date: string;
  title: { rendered: string };
  slug: string;
  thumbnailUrl?: string | null;
};

const DEFAULT_THUMBNAIL = '/images/news/default-news.jpg'; // public/images/ に置く

export default function NewsListClient({ perPage = 10 }: { perPage?: number }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [newsList, setNewsList] = useState<WPNews[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [fade, setFade] = useState(false);

  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

  useEffect(() => {
    async function fetchNews() {
      setFade(false);
      try {
        const res = await fetch(`/api/news?page=${page}&perPage=${perPage}`);
        const json = await res.json();
        setTimeout(() => {
          setNewsList(json.data);
          setTotalPages(json.totalPages);
          setFade(true);
        }, 100);
      } catch (err) {
        console.error('ニュース取得失敗:', err);
        setNewsList([]);
        setTotalPages(1);
        setFade(true);
      }
    }
    fetchNews();
  }, [page, perPage]);

  return (
    <div className="news-list-page mx-auto mt-10 lg:mt-20 mb-20 px-5 lg:px-20">
      <ul
        className={`u-newsList lg:flex items-start justify-center flex-wrap gap-5 transition-opacity duration-500 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {newsList.length === 0 ? (
          <li className="text-text-pana">お知らせはありません。</li>
        ) : (
          newsList.map((news) => (
            <li
              key={news.id}
              className="u-news-item py-3 w-full lg:w-[45%] border-t border-pana-gray01"
            >
              <Link
                href={`/news/${news.slug}`}
                className="u-news-link u-textLink relative text-text-pana flex gap-2 lg:gap-4 py-2"
              >
                <p className="u-news-date h-[76px] lg:h-[114px] shippori text-sm lg:text-xl font-medium leading-relaxed lg:leading-none py-1 lg:py-4">
                  {news.date ? new Date(news.date).toLocaleDateString('ja-JP') : ''}
                </p>

                <div className="u-news-thumb relative w-[124px] h-[76px] lg:w-[185px] lg:h-[114px] overflow-hidden flex-shrink-0">
                  <Image
                    src={news.thumbnailUrl || DEFAULT_THUMBNAIL}
                    alt={news.title.rendered}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 124px, 185px"
                  />
                </div>

                <div>
                  <p className="shippori lg:text-lg font-medium leading-relaxed pr-2 lg:pr-0 lg:pt-4">
                    {news.title?.rendered || ''}
                  </p>
                </div>
              </Link>
            </li>
          ))
        )}
      </ul>

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
