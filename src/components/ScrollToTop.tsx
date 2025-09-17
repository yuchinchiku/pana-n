'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prevPath = useRef<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash;

    // アンカー遷移の場合はスキップ（同じページ + hash がある）
    if (prevPath.current === pathname && hash) {
      prevPath.current = pathname; // hash付きでも記録は更新
      return;
    }

    // ページ遷移 or クエリ変更時はトップへ
    window.scrollTo({ top: 0, behavior: 'smooth' }); // ←「スーッと」にしてる

    prevPath.current = pathname;
  }, [pathname, searchParams]);

  return null;
}
