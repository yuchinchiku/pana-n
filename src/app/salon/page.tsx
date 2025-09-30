// src/app/salon/page.tsx (Server Component)
import type { Metadata } from "next";
import ScrollAnimation from '@/components/ScrollAnimation';
import PageIntro from '@/components/pages/PageIntro';
import PageSecTitle from '@/components/pages/PageSecTitle';
import StoreList from "@/app/salon/StoreList";
import { stores } from "@/data/stores";
import StoryHeroSection from './HeroSection';
import '@/styles/pages/salon/salon.scss';
import '@/styles/component/button.scss';

export const metadata: Metadata = {
  title: "パナ・ンの店舗 | 琉球の想いと癒しをあなたへ。心のひだに触れ、魂をほぐす琉球パナ・ン",
  description: "沖縄を中心に展開するパナ・ンのサロン一覧。各店舗の特徴や施術内容をご紹介し、お客様に最適な癒しの場をご案内します。",
};

export default function SalonPage() {
  const hogushiStores = stores.filter(store => store.value === "ほぐしガッテン");
  const hoshinoyaStores = stores.filter(store => store.value === "星のや");
  const footStores = stores.filter(store => store.value === "琉球足つぼ");

  return (
    <div className='u-pageSalon lg:ml-[185px] lg:mr-20'>
      <ScrollAnimation />
      <StoryHeroSection />
      <PageIntro
        lead="琉球の息吹が満ちる、<br class='hidden lg:block'>癒しの場所"
        subLead="Ryukyu’s Spirit, a Place of Healing."
        desc={
          `<p>パナ・ンの店舗は、ただ癒しを提供する場所ではありません。</p>
          <p>島々の豊かな自然と、琉球に息づく先人たちの知恵と祈りに包まれた、静かであたたかな空間です。</p>
          <p>訪れる人の心がふとほどけ、 深い呼吸を取り戻せるように。</p>
          <p>この土地ならではの エネルギーとともに、あなたの内なる輝きを そっと呼び覚まします。</p>`
        }
      />
      <section className="mt-20 lg:mt-0 mb-20 lg:mb-40 px-5 lg:px-0">
        <PageSecTitle mainTitle="ほぐしガッテン / <br class='lg:hidden'>パナ・ン直営店" subTitle="hogushi gatten & pana-n original salon"/>
        <StoreList stores={hogushiStores} />
      </section>
      <section className="mb-20 lg:mb-40 px-5 lg:px-0">
        <PageSecTitle mainTitleSmall="HOSHINOYA" mainTitle="星のやリゾート内スパ" subTitle="spa at HOSHINOYA resort"/>
        <StoreList stores={hoshinoyaStores} />
      </section>
      <section className="mb-20 lg:mb-40 px-5 lg:px-0">
        <PageSecTitle mainTitleSmall="フサキビーチリゾートホテル＆ヴィラズ"  mainTitle="琉球足つぼ" subTitle="Ryukyu foot massage at Fusaki Beach Resort Hotel & Villas"/>
        <StoreList stores={footStores} />
      </section>
    </div>
  );
}
