import type { NextRequest } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } } // ← destructuring で直接取得
) {
  const slug = params.slug; // そのまま取得
  const res = await fetch(
    `https://pn.konety.jp/wp-json/wp/v2/news?slug=${encodeURIComponent(slug)}&_embed`,
    { headers: { Authorization: 'Basic ' + Buffer.from(`${process.env.WP_USER}:${process.env.WP_PASS}`).toString('base64') }, cache: 'no-store' }
  );

  try {
    const res = await fetch(
      `https://pn.konety.jp/wp-json/wp/v2/news?slug=${encodeURIComponent(slug)}&_embed`,
      {
        headers: {
          Authorization:
            'Basic ' +
            Buffer.from(`${process.env.WP_USER}:${process.env.WP_PASS}`).toString('base64'),
        },
        cache: 'no-store',
      }
    );

    if (!res.ok) {
      return new Response(JSON.stringify(null), {
        status: res.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await res.json();
    const news = data.length > 0 ? data[0] : null;

    return new Response(JSON.stringify(news), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('ニュース詳細取得失敗:', err);
    return new Response(JSON.stringify(null), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
