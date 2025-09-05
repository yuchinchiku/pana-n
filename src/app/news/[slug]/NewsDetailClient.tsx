// src/app/news/[slug]/NewsDetailClient.tsx
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import ButtonBack from '@/components/ButtonBack';
import '@/styles/pages/news/news.scss';
import '@/styles/component/button.scss';

type WPNews = {
  id: number;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  slug: string;
};

export default function NewsDetailClient() {
  const { slug } = useParams(); // クライアント側で取得
  const [news, setNews] = useState<WPNews | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(`/api/news/${slug}`);
        const json = await res.json();
        setNews(json);
      } catch {
        setNews(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [slug]);

  if (loading) return <p className="shippori text-white text-center mt-20">読み込み中...</p>;
  if (!news) return <p className="shippori text-white text-center mt-20">お知らせが見つかりません</p>;

  return (
    <div className="u-news-detail px-5 lg:pr-20 lg:pl-[185px]">
      <div className="lg:w-[90%] mx-auto mt-24 lg:mt-20 mb-10 lg:mb-20 px-5 lg:px-20 py-8 lg:py-20 u-bgPaper">
        <div className="u-news-detail-head border-b border-pana-gray01 mb-10">
          <p className="garamond text-lg mb-1 lg:mb-2 ml-2">
            {news.date ? new Date(news.date).toLocaleDateString('ja-JP') : ''}
          </p>
          <h1 className="shippori font-medium text-2xl lg:text-4xl mb-8 lg:mb-10">{news.title.rendered}</h1>
        </div>
        <div
          className="u-news-content max-w-2xl prose prose-invert shippori mx-auto"
          dangerouslySetInnerHTML={{ __html: news.content.rendered }}
        />
      </div>

      <ButtonBack
        href="/news"
        text="お知らせ一覧へ"
        className="u-bottun-newslist w-[250px] mt-10 lg:mt-16 mb-40 lg:mb-60 mx-auto"
      />
    </div>
  );
}
