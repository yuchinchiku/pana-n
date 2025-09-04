import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  if (!url) return new Response('URL is required', { status: 400 });

  const WP_USER = process.env.WP_USER;
  const WP_PASS = process.env.WP_PASS;

  try {
    const res = await fetch(url, {
      headers: {
        'Authorization': 'Basic ' + Buffer.from(`${WP_USER}:${WP_PASS}`).toString('base64'),
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      return new Response('Failed to fetch image', { status: res.status });
    }

    const blob = await res.arrayBuffer();

    return new Response(Buffer.from(blob), {
      status: 200,
      headers: {
        'Content-Type': res.headers.get('Content-Type') || 'image/jpeg',
      },
    });
  } catch (err) {
    console.error('画像取得失敗:', err);
    return new Response('Internal Server Error', { status: 500 });
  }
}
