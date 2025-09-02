
// src/app/salon/page.tsx (Server Component)
import type { Metadata } from "next";
import ScrollAnimation from '@/components/ScrollAnimation';
import PageIntro from '@/components/pages/PageIntro';
import FaqList from '@/components/FaqList';
import HeroSection from './HeroSection';
import '@/styles/pages/faq/faq.scss';
import '@/styles/component/button.scss';

export const metadata: Metadata = {
  title: "よくある質問 | 琉球の想いと癒しをあなたへ。",
  description: "パナ・ンの会社情報や理念、事業内容についてご紹介。琉球の癒しを広める私たちの想いをお伝えします。",
};

export default function FaqPage() {

  return (
    <div className='u-pageFaq md:ml-[185px] md:mr-20'>
      <ScrollAnimation />
      <HeroSection />
      <PageIntro
        lead="石垣島から始まり、琉球の癒しの知恵を日常へ。<br>よくあるご質問にお答えします。"
        subLead="From Ishigaki Island, bringing Ryukyu’s wisdom of healing to your everyday life."
        desc={
          `<p>パナ・ンでは、琉球の伝統技法と現代のスパ・リラクゼーションを融合した施術を提供しています。</p>
          <p>ここでは、初めての方からリピーターの方まで、施術内容や注意点、予約方法など、よくあるご質問にわかりやすくお答えしています。</p>
          <p>安心して施術を受けていただけるよう、心と体に寄り添う情報をご提供します。</p>`
        }
      />

      <FaqList  />
    </div>
  );
}
