import type { Metadata } from "next";
import ScrollAnimation from '@/components/ScrollAnimation';
import Button from '@/components/Button';
import PageHero from '@/components/pages/PageHero';
import PageIntro from '@/components/pages/PageIntro';
import TabArea from '@/app/healing/original/TabArea';
import '@/styles/pages/originalMenu/originalMenu.scss';
import '@/styles/component/button.scss';

export const metadata: Metadata = {
  title: "パナ・ンの独自メニュー | パナ・ンの癒し | 琉球の想いと癒しをあなたへ。心のひだに触れ、魂をほぐす琉球パナ・ン",
  description: "琉球の伝統と現代の技術を融合したパナ・ンの独自メニュー。心と身体を解きほぐす特別なトリートメントをご紹介します。",
};

export default function OriginalMenuPage() {
  return (
    <div className='u-pageOriginal md:ml-[185px] md:mr-20'>
      <ScrollAnimation />
      <PageHero titleSmall="パナ・ン流" title="独自メニュー" subTitle="pana-n’s  original menu" />
      <PageIntro
        lead="パナ・ンだけの特別な「パナ・ンのオリジナルメニュー」"
        subLead="pana-n’s original treatments at each location"
        desc={
          `<p>パナ・ンでは各店舗が持つ土地の個性を大切にし、<br class='hidden md:block' />その場所でしか味わえない特別な独自メニューをご用意しています。</p>
          <p>恩返しの想いで丁寧に磨き上げられた上質で贅沢なひととき。</p>
          <p>新しい癒しの体験をお楽しみください。</p>`}
      />
      <TabArea />
    </div>
  );
}
