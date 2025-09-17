'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function ScrollToTop() {
  const pathname = usePathname();
  const prevPath = useRef(pathname);

  useEffect(() => {
    const hash = window.location.hash;

    // アンカー遷移はスキップ
    if (prevPath.current === pathname && hash) {
      return;
    }

    // iOS WebKit 対策
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // 即時 + 少し遅延の二段構え
    requestAnimationFrame(scrollToTop);
    setTimeout(scrollToTop, 50);

    prevPath.current = pathname;
  }, [pathname]);

  return null;
}
