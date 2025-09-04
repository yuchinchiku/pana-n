import type { Metadata } from "next";
import { Suspense } from "react"; // ← 追加
import ScrollAnimation from '@/components/ScrollAnimation';
import HeroSection from './HeroSection';
import NewsListPage from '@/components/NewsListPage';
import '@/styles/pages/news/news.scss';
import '@/styles/component/button.scss';

export const metadata: Metadata = {
  title: "お知らせ | 琉球の想いと癒しをあなたへ。心のひだに触れ、魂をほぐす琉球パナ・ン",
  description:
    "心と身体を整えるパナ・ン独自の癒しのメソッド。伝統と最新技術を融合させた施術で、深いリラックスを体験してください。",
};

export default function NewsPage() {
  return (
    <div className="u-pageNews lg:ml-[185px] lg:mr-20">
      <ScrollAnimation />
      <HeroSection />

      {/* Suspense でラップ */}
      <Suspense fallback={<p className="text-text-pana">読み込み中...</p>}>
        <NewsListPage />
      </Suspense>
    </div>
  );
}
