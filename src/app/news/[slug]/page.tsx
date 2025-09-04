export const dynamic = 'force-dynamic';

import { notFound } from 'next/navigation';
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
  featured_media_url?: string;
};

type WPNewsListItem = {
  id: number;
  title: { rendered: string };
  slug: string;
  date: string;
};

async function fetchNewsDetail(slug: string): Promise<WPNews | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news/${slug}`, { cache: 'no-store' });
  if (!res.ok) return null;
  return await res.json();
}

async function fetchAllNews(): Promise<WPNewsListItem[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news`, { cache: 'no-store' });
  if (!res.ok) return [];
  return await res.json();
}

function findPrevNext(slug: string, list: WPNewsListItem[]) {
  const index = list.findIndex(item => item.slug === slug);
  return {
    prev: index > 0 ? list[index - 1] : null,
    next: index >= 0 && index < list.length - 1 ? list[index + 1] : null,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function NewsDetailPage(props: any) {
  const slug: string = props?.params?.slug;
  if (!slug) notFound();

  const news = await fetchNewsDetail(slug);
  if (!news) notFound();

  const allNews = await fetchAllNews();
  const { prev, next } = findPrevNext(slug, allNews);

  return (
    <div className="u-news-detail px-5 lg:pr-20 lg:pl-[185px]">
      <div className="lg:w-[90%] mx-auto mt-24 lg:mt-20 mb-10 lg:mb-20 px-5 lg:px-20 py-8 lg:py-20 u-bgPaper">
        <div className="u-news-detail-head border-b border-pana-gray01 mb-10">
          <p className="garamond text-lg mb-1 lg:mb-2 ml-2">
            {new Date(news.date).toLocaleDateString('ja-JP')}
          </p>
          <h1 className="shippori font-medium text-2xl lg:text-4xl mb-8 lg:mb-10">{news.title.rendered}</h1>
        </div>

        <div className="u-news-content max-w-2xl prose prose-invert shippori mx-auto" dangerouslySetInnerHTML={{ __html: news.content.rendered }} />

        <div className="lg:flex justify-between mt-12 gap-10">
          {prev ? <Link href={`/news/${prev.slug}`} className="u-button">← {prev.title.rendered}</Link> : <div />}
          {next ? <Link href={`/news/${next.slug}`} className="u-button">{next.title.rendered} →</Link> : <div />}
        </div>
      </div>
      <ButtonBack href="/news" text="お知らせ一覧へ" className="u-bottun-newslist w-[250px] u-fade-in mt-10 lg:mt-16 mb-40 lg:mb-60 mx-auto" />
    </div>
  );
}
