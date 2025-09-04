// app/news/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import '@/styles/pages/news/news.scss';
import '@/styles/component/button.scss';
import { Metadata } from 'next';
import ButtonBack from '@/components/ButtonBack';

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

interface Props {
  params: { slug: string };
}

// API からニュース詳細を取得
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

// API から全ニュース一覧を取得
async function fetchAllNews(): Promise<WPNewsListItem[]> {
  try {
    const res = await fetch(`http://localhost:3000/api/news`, { cache: 'no-store' });
    if (!res.ok) return [];
    const json = await res.json();
    console.log('Server allNews raw:', json);

    // json が { data: [...] } の場合は json.data を返す
    return Array.isArray(json) ? json : json.data || [];
  } catch (err) {
    console.error(err);
    return [];
  }
}


// HTMLからテキスト抽出
function extractText(html: string): string {
  if (!html) return '';
  const tmp = html.replace(/<[^>]+>/g, ' ');
  return tmp.replace(/\s+/g, ' ').trim();
}

// 前後記事を取得
function findPrevNext(slug: string, list: WPNewsListItem[]) {
  if (!Array.isArray(list)) return { prev: null, next: null };
  const index = list.findIndex(item => item.slug === slug);
  return {
    prev: index > 0 ? list[index - 1] : null,
    next: index >= 0 && index < list.length - 1 ? list[index + 1] : null,
  };
}

// メタ情報生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const news = await fetchNewsDetail(params.slug);
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

// ⚠ params は await 不要
export default async function NewsDetailPage(props: Props) {
  const slug = props.params.slug;
  const news = await fetchNewsDetail(slug);

  if (!news) notFound();

  const allNews = await fetchAllNews();
  const { prev, next } = findPrevNext(news.slug, allNews);

  return (
    <div className="u-news-detail px-5 md:pr-20 md:pl-[185px]">
      <div className="md:w-[90%] mx-auto mt-24 md:mt-20 mb-10 md:mb-20 px-5 md:px-20 py-8 md:py-20 u-bgPaper">
        {/* ニュース本文 */}
        <div className='u-news-detail-head border-b border-pana-gray01 mb-10'>
          <p className="garamond text-lg mb-1 md:mb-2 ml-2">
            {new Date(news.date).toLocaleDateString('ja-JP')}
          </p>
          <h1 className="shippori font-medium text-2xl md:text-4xl mb-8 md:mb-10">{news.title.rendered}</h1>
        </div>

        <div
          className="u-news-content max-w-2xl prose prose-invert shippori mx-auto"
          dangerouslySetInnerHTML={{ __html: news.content.rendered }}
        />

        {/* 前後記事ナビ（サムネなし） */}
        <div className="md:flex justify-between mt-12 gap-10">
          {prev ? (
            <Link
              href={`/news/${encodeURIComponent(prev.slug)}`}
              className="u-button u-button-back block md:w-[40%] shippori px-4 py-2 md:pr-10 bg-white border border-pana flex-1 text-right mb-5 md:mb-0"
            >
              <p className="u-button-text garamond text-sm mt-1 mr-0 ml-auto">{prev.date ? new Date(prev.date).toLocaleDateString('ja-JP') : ''}</p>
              <p className="u-button-text mr-0 ml-auto">{prev.title?.rendered || '前の記事'}</p>
            </Link>
          ) : <div className="flex-1" />}

          {next ? (
            <Link
              href={`/news/${encodeURIComponent(next.slug)}`}
              className="u-button block md:w-[40%] shippori px-4 py-2 md:pl-10 bg-white border border-pana flex-1 text-left"
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
        className="u-bottun-newslist w-[250px] u-fade-in mt-10 md:mt-16 mb-40 md:mb-60 mx-auto"
      />
    </div>
  );
}
