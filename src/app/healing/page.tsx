import type { Metadata } from "next";
import ScrollAnimation from '@/components/ScrollAnimation';
import Button from '@/components/Button';
import PageIntro from '@/components/pages/PageIntro';
import PageSecTitle from '@/components/pages/PageSecTitle';
import KodawariScroller from '@/app/healing/KodawariScroller';
import OriginalMenu from '@/app/healing/OriginalMenu';
import Nuchigusui from '@/app/healing/Nuchigusui';
import PageLearn from '@/components/pages/PageLearn';
import PageStoreSlider from '@/components/pages/PageStoreSlider'
import HeroSection from './HeroSection';
import '@/styles/pages/healing/healing.scss';
import '@/styles/component/button.scss';

export const metadata: Metadata = {
  title: "パナ・ンの癒し | 琉球の想いと癒しをあなたへ。心のひだに触れ、魂をほぐす琉球パナ・ン",
  description: "心と身体を整えるパナ・ン独自の癒しのメソッド。伝統と最新技術を融合させた施術で、深いリラックスを体験してください。",
};

const pageItems = [
  { href: '/story', img: 'story', title: 'パナ・ンの物語', titleEn: 'pana-n’s story' },
  { href: '/healing/original', img: 'healing', title: 'パナ・ンの独自メニュー', titleEn: 'pana-n’s original menu' }
];


export default function HealingPage() {
  return (
    <div className='u-pageHealing lg:ml-[185px] lg:mr-20'>
      <ScrollAnimation />
      <HeroSection />
      <PageIntro
        lead="本当の意味での「癒し」とは？"
        subLead="What is a “true healing”?"
        desc={
          `<p>ただ身体をほぐすだけのものではなく、<br class='hidden lg:block' />深く静かに、心や魂にふれるもの。</p>
          <p> パナ・ンでは、単なるテクニックを超えた、<br class='hidden lg:block' />
          沖縄の伝統的な知恵に根ざし、<br class='hidden lg:block' />
          より本質的な魂の回復と変容を追求しています あなたの内なる輝きを呼び覚ます深遠な癒しの旅。</p>
          <p>一人一人の物語に寄り添い、本来の自分を取り戻す<br class='hidden lg:block' />
          パナ・ンでの癒しを紹介します。</p>`}
      />
      <section className='mt-20'>
        <PageSecTitle
          mainTitleSmall="深遠なる癒しのための"
          mainTitle="三つのこだわり"
          subTitle="what makes pana-n special"
          desc={
            `<p>パナ・ンは、琉球の伝統と沖縄の自然に敬意を払い、<br class='hidden lg:block' />心と身体に深く寄り添う「本質的な癒し」を大切にしています。</p>
            <p>訪れるお客様一人一人の心と体に寄り添い、丁寧に、誠実に——。</p>
            <p>ただほぐすだけのものではなく、<br class='hidden lg:block' />
            心にふれ、魂をほぐす時間を提供することが私たちの願いです。</p>`}
        />
        <KodawariScroller />
      </section>

      <section>
        <PageSecTitle
          mainTitleSmall="パナ・ンでしか体験できない"
          mainTitle="オリジナルメニュー"
          subTitle="pana-n’s original therapy"
          desc={
            `<p>パナ・ンでは、沖縄の自然と文化を活かした<br class='hidden lg:block' />パナ・ン独自のオリジナルの癒しをご用意しています。</p>
            <p>店舗ごとに異なる手技や素材を取り入れ、<br class='hidden lg:block' />琉球空手と八重山舞踊を融合した元祖琉球マッサージ「琉球ほぐし手」や<br class='hidden lg:block' />珊瑚、ゴーヤー、黒糖、モズク、クチャなど、<br class='hidden lg:block' />こだわりの琉球粧材を使用したメニュー。</p>
            <p>パナ・ンでしか味わえない特別な体験をお届けします。</p>`}
        />
        <OriginalMenu />
        <Button
          href="/healing/original"
          text="詳しく見る"
          className="u-fade-in u-bottun-md mt-4 lg:mt-16 mx-auto"
        />
      </section>

      <section className='my-20 lg:my-40'>
        <PageSecTitle
          mainTitleSmall="沖縄の自然から生まれたこだわりの"
          mainTitle="「ぬちぐすい（命の薬）」"
          subTitle="okinawa-oriented natural skincare"
          desc={
            `<p>パナ・ンでは、施術に使用する化粧材一つ一つにも特別な想いを込めています。</p>
            <p>感謝と恩返しの心を大切にし、沖縄の自然から生まれた素材を厳選。</p>
            <p>海の恵み、島の植物、太陽のエネルギーを取り入れた「ぬちぐすい（命の薬）」で、<br class='hidden lg:block' />
            お肌の状態に寄り添いながら、お客様一人ひとりのご要望に丁寧にお応えします。</p>`}
        />
        <Nuchigusui />
      </section>

      <PageLearn
        lead="もっとパナ・ンを知る"
        subLead="Learn more about pana-n."
        items={pageItems} // このページ用のリストを渡す
      />
      <PageStoreSlider />
    </div>
  );
}
