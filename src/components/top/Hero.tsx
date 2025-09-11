'use client';

import { useEffect, useRef, useState } from 'react';
import LoadingOverlay from './LoadingOverlay';
import '@/styles/pages/top/hero.scss';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [fade, setFade] = useState<'in' | 'out'>('in');
  const [ready, setReady] = useState(false); // ローディング完了フラグ

  // ローディング完了後に動画再生
  useEffect(() => {
    if (ready && videoRef.current) {
      videoRef.current.play();
    }
  }, [ready]);

  // 再生・停止の切り替え
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (ready) {
      video.play();
    } else {
      video.pause();
    }
  }, [ready]);

  // フェード制御（ループ時の処理含む）
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration - video.currentTime < 0.5 && fade !== 'out') {
        setFade('out');
      }
    };

    const handleEnded = () => {
      setFade('out');
      setTimeout(() => {
        video.currentTime = 0;
        video.play();
        setFade('in');
      }, 500);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, [fade]);

  return (
    <>
      {/* ローディング */}
      {!ready && <LoadingOverlay onFinishAction={() => setReady(true)} />}

      <section
        className="u-hero sec-black relative w-full h-screen"
        data-header-color="#fff"
      >
        <video
          ref={videoRef}
          className={`u-video fixed inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            fade === 'out' ? 'opacity-0' : 'opacity-100'
          }`}
          autoPlay
          playsInline
          muted
          preload="auto"
          poster="/images/top/img_hero.jpg"
        >
          <source
            src="https://pana-n.jp/video/panan-01.mp4"
            type="video/mp4"
          />
        </video>

        {/* スマホ用のGIF */}
        <div className="block md:hidden">
          <img
            className="u-video fixed inset-0 w-full h-full object-cover"
            src="https://pana-n.jp/video/panan-01.gif"
            alt="Hero Animation"
          />
        </div>

        <div className="u-overlay fixed inset-0 pointer-events-none"></div>
        <h1 className="u-hero-lead absolute shippori text-xl text-white lg:text-4xl">
          <span className="block">琉球の想いと癒しをあなたへ。</span>
          <span className="block pl-6 pt-2 lg:pl-16">心のひだに触れ、魂をほぐす</span>
          <span className="block pl-12 pt-2 lg:pl-32">
            元祖琉球マッサージ、パナ・ン。
          </span>
        </h1>
        <div className="u-scroll absolute bottom-24 left-1/2 -translate-x-1/2">
          <p className="u-scroll-text garamond text-base text-white text-center">
            scroll down
          </p>
        </div>
      </section>
    </>
  );
}
