import type { Metadata } from "next";
import ScrollAnimation from '@/components/ScrollAnimation';
import NewsListPage from '@/components/NewsListPage';
import HeroSection from './HeroSection';
import '@/styles/pages/news/news.scss';
import '@/styles/component/button.scss';

export const metadata: Metadata = {
  title: "お知らせ | 琉球の想いと癒しをあなたへ。心のひだに触れ、魂をほぐす琉球パナ・ン",
  description: "心と身体を整えるパナ・ン独自の癒しのメソッド。伝統と最新技術を融合させた施術で、深いリラックスを体験してください。",
};

export default function NewsPage() {
  return (
    <div className='u-pageNews lg:ml-[185px] lg:mr-20'>
      <ScrollAnimation />
      <HeroSection />
      <NewsListPage />
      {/* <ButtonBack
        href="/"
        text="トップページへ"
        className="u-bottun-md mt-10 lg:mt-16 mb-40 lg:mb-60 mx-auto"
      /> */}
    </div>
  );
}
