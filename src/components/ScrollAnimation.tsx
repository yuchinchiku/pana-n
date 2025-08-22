'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/styles/component/scrollAnim.scss';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation() {
  useEffect(() => {
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
            start: 'top 100%', // 要素が画面の80%に来たときにアニメーション開始
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}