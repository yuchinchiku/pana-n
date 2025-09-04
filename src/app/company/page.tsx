// src/app/salon/page.tsx (Server Component)
import type { Metadata } from "next";
import ScrollAnimation from '@/components/ScrollAnimation';
import PageIntro from '@/components/pages/PageIntro';
import HeroSection from './HeroSection';
import { company } from "@/data/company";
import type { Company } from "@/data/company";
import '@/styles/pages/company/company.scss';
import '@/styles/component/button.scss';

export const metadata: Metadata = {
  title: "会社概要 | 琉球の想いと癒しをあなたへ。",
  description: "パナ・ンの会社情報や理念、事業内容についてご紹介。琉球の癒しを広める私たちの想いをお伝えします。",
};

export default function CompanyPage() {

  return (
    <div className='u-pageCompany lg:ml-[185px] lg:mr-20'>
      <ScrollAnimation />
      <HeroSection />
      <PageIntro
        lead="石垣島から始まり、琉球の心と技を世界へ。<br>癒しの文化を紡ぎ続ける私たちの物語。"
        subLead="From Ishigaki Island, sharing Ryukyu’s spirit and healing art with the world."
        desc={
          `<p>私たちは、1985年に石垣島で鍼灸治療院を開院して以来、40年近くにわたり「確かな技術」と「心からの癒し」を追求してきました。</p>
          <p>琉球に受け継がれる自然の恵みと先人たちの知恵、そして感謝と恩返しの想いを大切に、リラクゼーション・スパ事業を県内外へと広げています。</p>
          <p>これからも、お客様一人ひとりの心と体に寄り添い、豊かな時間をお届けしながら、癒しの文化を未来へ紡いでまいります。 深い呼吸を取り戻せるように。</p>`
        }
            />
      <div className="u-companyWrapper max-w-[1020px] lg:w-[82.3%] px-5 lg:px-0 mx-auto mb-20 lg:mb-40">
        <ol className="w-full mt-10">
          {company.table.map((row: Company["table"][number], idx: number) => (
            <li key={idx} className="u-fade-in lg:flex gap-4 lg:gap-6 border-b border-pana-gray02 py-4">
              <p className="shippori text-white text-center font-medium w-[140px] h-8 lg:h-10 flex-shrink-0 bg-pana pt-[1px] lg:py-1 mb-2 lg:mb-0">
                {row.label}
              </p>
              <div className="px-1 lg:px-0 flex flex-col gap-2">
                {row.items.map((item: Company["table"][number]["items"][number], i: number) => (
                  <div key={i}>
                    <div className="lg:flex items-center gap-10">
                      <p
                        className="shippori text-base py-1"
                        dangerouslySetInnerHTML={{ __html: item.value }}
                      />
                      {row.label === "住所" && item.mapUrl && (
                        <a
                          href={item.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="u-button u-button-map block w-[150px] h-[45px] border border-pana py-1 pl-2 mt-2 lg:mt-0"
                        >
                          <p className='u-button-text shippori'>Google Maps</p>
                        </a>
                      )}
                    </div>
                    {item.note && <p className="shippori text-sm py-1">{item.note}</p>}
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>

      </div>
    </div>
  );
}
