'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/styles/component/scrollAnim.scss';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation() {
  useEffect(() => {
    const init = () => {
      const elements = document.querySelectorAll('.u-fade-in');

      elements.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, filter: 'blur(10px)' },
          {
            opacity: 1,
            filter: 'blur(0)',
            duration: 0.5,
            scrollTrigger: {
              trigger: element,
              start: 'top 90%', // 100%だと遅いので少し余裕をもたせる
              toggleActions: 'play none none none',
            },
          }
        );
      });

      ScrollTrigger.refresh();
    };

    // 2段階の requestAnimationFrame で「描画完了後」に実行
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        init();
      });
    });

    // ページ内の画像などのロード完了後にも再実行
    window.addEventListener('load', init);

    return () => {
      window.removeEventListener('load', init);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
