// src/app/news/[slug]/page.tsx

import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import ButtonBack from '@/components/ButtonBack';
import '@/styles/pages/news/news.scss';
import '@/styles/component/button.scss';

// -------------------- 型定義 --------------------
type WPNews = {
  id: number;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  slug: string;
  featured_media_url?: string;
};

type WPNewsListItem = {
  id: number;
  title: { rendered: string };
  slug: string;
  date: string;
};

// -------------------- ユーティリティ --------------------
async function fetchNewsDetail(slug: string): Promise<WPNews | null> {
  try {
    const res = await fetch(`http://localhost:3000/api/news/${slug}`, { cache: 'no-store' });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function fetchAllNews(): Promise<WPNewsListItem[]> {
  try {
    const res = await fetch(`http://localhost:3000/api/news`, { cache: 'no-store' });
    if (!res.ok) return [];
    const json = await res.json();
    return Array.isArray(json) ? json : json.data || [];
  } catch (err) {
    console.error(err);
    return [];
  }
}

function extractText(html: string): string {
  if (!html) return '';
  const tmp = html.replace(/<[^>]+>/g, ' ');
  return tmp.replace(/\s+/g, ' ').trim();
}

function findPrevNext(slug: string, list: WPNewsListItem[]) {
  if (!Array.isArray(list)) return { prev: null, next: null };
  const index = list.findIndex(item => item.slug === slug);
  return {
    prev: index > 0 ? list[index - 1] : null,
    next: index >= 0 && index < list.length - 1 ? list[index + 1] : null,
  };
}

// -------------------- メタ情報 --------------------
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata(props: any): Promise<Metadata> {
  const slug = props.params.slug;
  const news = await fetchNewsDetail(slug);
  if (!news) return { title: 'ニュースが見つかりません | 琉球パナ・ン' };

  const fixedSuffix = 'お知らせ | 琉球の想いと癒しをあなたへ。心のひだに触れ、魂をほぐす琉球パナ・ン';
  const descriptionText = extractText(news.content.rendered).slice(0, 150);

  return {
    title: `${news.title.rendered} | ${fixedSuffix}`,
    description: descriptionText,
    openGraph: {
      title: `${news.title.rendered} | ${fixedSuffix}`,
      description: descriptionText,
      url: `https://pana-n.jp/news/${encodeURIComponent(news.slug)}`,
      type: 'article',
      images: [
        {
          url: news.featured_media_url || 'https://pana-n.jp/meta/ogp.png',
          width: 1200,
          height: 630,
          alt: news.title.rendered,
        },
      ],
    },
  };
}

// -------------------- Page --------------------
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function NewsDetailPage(props: any) {
  const slug = props.params.slug;
  const news = await fetchNewsDetail(slug);
  if (!news) notFound();

  const allNews = await fetchAllNews();
  const { prev, next } = findPrevNext(news.slug, allNews);

  return (
    <div className="u-news-detail px-5 lg:pr-20 lg:pl-[185px]">
      <div className="lg:w-[90%] mx-auto mt-24 lg:mt-20 mb-10 lg:mb-20 px-5 lg:px-20 py-8 lg:py-20 u-bgPaper">
        {/* ニュース本文 */}
        <div className='u-news-detail-head border-b border-pana-gray01 mb-10'>
          <p className="garamond text-lg mb-1 lg:mb-2 ml-2">
            {new Date(news.date).toLocaleDateString('ja-JP')}
          </p>
          <h1 className="shippori font-medium text-2xl lg:text-4xl mb-8 lg:mb-10">{news.title.rendered}</h1>
        </div>

        <div
          className="u-news-content max-w-2xl prose prose-invert shippori mx-auto"
          dangerouslySetInnerHTML={{ __html: news.content.rendered }}
        />

        {/* 前後記事ナビ */}
        <div className="lg:flex justify-between mt-12 gap-10">
          {prev ? (
            <Link
              href={`/news/${encodeURIComponent(prev.slug)}`}
              className="u-button u-button-back block lg:w-[40%] shippori px-4 py-2 lg:pr-10 bg-white border border-pana flex-1 text-right mb-5 lg:mb-0"
            >
              <p className="u-button-text garamond text-sm mt-1 mr-0 ml-auto">{prev.date ? new Date(prev.date).toLocaleDateString('ja-JP') : ''}</p>
              <p className="u-button-text mr-0 ml-auto">{prev.title?.rendered || '前の記事'}</p>
            </Link>
          ) : <div className="flex-1" />}

          {next ? (
            <Link
              href={`/news/${encodeURIComponent(next.slug)}`}
              className="u-button block lg:w-[40%] shippori px-4 py-2 lg:pl-10 bg-white border border-pana flex-1 text-left"
            >
              <p className="u-button-text garamond text-sm mt-1">{next.date ? new Date(next.date).toLocaleDateString('ja-JP') : ''}</p>
              <p className="u-button-text">{next.title?.rendered || '次の記事'}</p>
            </Link>
          ) : <div className="flex-1" />}
        </div>
      </div>
      <ButtonBack
        href="/news"
        text="お知らせ一覧へ"
        className="u-bottun-newslist w-[250px] u-fade-in mt-10 lg:mt-16 mb-40 lg:mb-60 mx-auto"
      />
    </div>
  );
}
