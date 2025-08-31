
// src/app/salon/page.tsx (Server Component)
import type { Metadata } from "next";
import ScrollAnimation from '@/components/ScrollAnimation';
import PageHero from '@/components/pages/PageHero';
import PageIntro from '@/components/pages/PageIntro';
import FaqList from '@/components/FaqList';
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
      <PageHero title="よくある質問" subTitle="faq" />
      <PageIntro
        lead="石垣島から始まり、琉球の心と技を世界へ。<br>癒しの文化を紡ぎ続ける私たちの物語。"
        subLead="From Ishigaki Island, sharing Ryukyu’s spirit and healing art with the world."
        desc={
          `<p>私たちは、1985年に石垣島で鍼灸治療院を開院して以来、40年近くにわたり「確かな技術」と「心からの癒し」を追求してきました。</p>
          <p>琉球に受け継がれる自然の恵みと先人たちの知恵、そして感謝と恩返しの想いを大切に、リラクゼーション・スパ事業を県内外へと広げています。</p>
          <p>これからも、お客様一人ひとりの心と体に寄り添い、豊かな時間をお届けしながら、癒しの文化を未来へ紡いでまいります。 深い呼吸を取り戻せるように。</p>`
        }
            />
      <FaqList  />
    </div>
  );
}
