// app/news/[slug]/page.tsx
import { notFound } from 'next/navigation';
import PageTransitionFog from '@/components/PageTransitionFog';
import '@/styles/pages/news/news.scss';

type WPNews = {
  id: number;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  slug: string;
};

interface Props {
  params: { slug: string };
}

async function fetchNewsDetail(slug: string): Promise<WPNews | null> {
  const res = await fetch(
    `https://puputito.jp/pana-n/wp-json/wp/v2/news?slug=${slug}&_embed`,
    { cache: 'no-store' }
  );
  if (!res.ok) return null;

  const data = await res.json();
  return data.length > 0 ? data[0] : null;
}

export default async function NewsDetailPage({ params }: Props) {
  const news = await fetchNewsDetail(params.slug);

  if (!news) {
    notFound();
  }

  return (
    <div className="u-news-detail md:ml-[185px] md:mr-10">
      <PageTransitionFog />
      <div className="max-w-2xl mx-auto mt-24 md:mt-20 mb-20 px-5 md:px-0">
        <p className="garamond text-lg mb-1 md:mb-2">
          {new Date(news.date).toLocaleDateString('ja-JP')}
        </p>
        <h1 className="shippori font-medium text-2xl md:text-3xl mb-6">{news.title.rendered}</h1>
        <div
          className="u-news-content prose prose-invert shippori px-5 md:px-0"
          dangerouslySetInnerHTML={{ __html: news.content.rendered }}
        />
      </div>
    </div>
  );
}
