import type { NextRequest } from 'next/server';

type WPNewsItem = {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      media_details?: {
        sizes?: {
          medium?: { source_url: string };
        };
      };
    }>;
  };
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get('page') || '1';
  const perPage = searchParams.get('perPage') || '10';

  const WP_USER = process.env.WP_USER;
  const WP_PASS = process.env.WP_PASS;

  if (!WP_USER || !WP_PASS) {
    return new Response(
      JSON.stringify({ data: [], totalPages: 1, error: 'WP credentials not set' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const res = await fetch(
      `https://pn.konety.jp/wp-json/wp/v2/news?per_page=${perPage}&page=${page}&orderby=date&order=desc&_embed`,
      {
        headers: {
          Authorization: 'Basic ' + Buffer.from(`${WP_USER}:${WP_PASS}`).toString('base64'),
        },
        cache: 'no-store',
      }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error('WP API Error:', res.status, text);
      return new Response(
        JSON.stringify({ data: [], totalPages: 1 }),
        { status: res.status, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data: WPNewsItem[] = await res.json();
    const totalPages = Number(res.headers.get('X-WP-TotalPages') || 1);

    const dataWithThumb = data.map(item => {
      const thumbUrl = item._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.medium?.source_url;
      return {
        ...item,
        thumbnailUrl: thumbUrl ? `/api/news-thumbnail?url=${encodeURIComponent(thumbUrl)}` : null,
      };
    });

    return new Response(JSON.stringify({ data: dataWithThumb, totalPages }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('ニュース取得失敗:', err);
    return new Response(JSON.stringify({ data: [], totalPages: 1 }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
