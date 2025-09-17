'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prevPath = useRef(pathname);

  useEffect(() => {
    const hash = window.location.hash;

    // ページ内アンカーの場合はスキップ
    if (prevPath.current === pathname && hash) {
      return;
    }

    // ページ遷移 or クエリ変更時はトップへ
    window.scrollTo({ top: 0, behavior: 'instant' });

    prevPath.current = pathname;
  }, [pathname, searchParams]);

  return null;
}
