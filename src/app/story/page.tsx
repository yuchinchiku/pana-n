'use client';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/pages/PageHero';
import PageIntro from '@/components/pages/PageIntro';
import PageLearn from '@/components/pages/PageLearn';
import PageStoreSlider from '@/components/pages/PageStoreSlider'
import '@/styles/pages/story/story.scss';
import '@/styles/component/button.scss';

const StoryList = [
  { num: "1", href:"beginning", imageWidthPC: "498px", imageWidthSP: "335px", imageHeightPC: "450px", imageHeightSP: "450px",
    class: "u-yoko",
    title: "パナ・ンの始まり", titleEn: "pana-n’s beginning",
    desc: "<p>始まりの、その先へ。</p><p>パナ・ンが始まったその想い。</p>"
  },
  { num: "2", href:"okinawa", imageWidthPC: "393px", imageWidthSP: "325px", imageHeightPC: "560px", imageHeightSP: "560px",
    class: "u-tate",
    title: "沖縄、そして恩返し", titleEn: "okinawa and ongaeshi",
    desc: "<p>沖縄の大地に恵まれる。</p><p>全ての「命」への恩返し。</p>"
  },
  { num: "3", href:"therapist",  imageWidthPC: "393px", imageWidthSP: "325px", imageHeightPC: "560px", imageHeightSP: "560px",
    class: "u-tate",
    title: "パナ・ンを作る人々", titleEn: "pana-n’s therapist",
    desc: "<p>手のひらに宿るまごころ。</p><p>「心」に触れる癒しの本質。</p>"
  },
  { num: "4", href:"future", imageWidthPC: "498px", imageWidthSP: "335px", imageHeightPC: "450px", imageHeightSP: "450px",
    class: "u-yoko",
    title: "パナ・ンの夢", titleEn: "pana-n’s dream",
    desc: "<p>想いは巡りて花ひらく。</p><p>未来へと続くパナ・ンの挑戦。</p>"
  }
]

const pageItems = [
  { href: 'healing', img: 'healing', title: 'パナ・ンの癒し', titleEn: 'pana-n’s healing' },
  { href: 'signature', img: 'healing', title: 'パナ・ンシグネチャー', titleEn: 'pana-n’s signature menu' }
];

export default function StoryPage() {
  return (
    <div className='md:ml-[185px] md:mr-20'>
      <PageHero title="パナ・ンの物語" subTitle="pana-n’s story" />
      <PageIntro
        lead="石垣島から世界へ、恩返しの思いを込めて"
        subLead="Started from Ishigaki Island to the world— with a spirit of “ongaeshi”."
        desc={
          `<p>沖縄を拠点に事業を展開する「パナ・ン」。</p>
          <p>2006年3月に設立された当社は、<br class='hidden md:block' />
          祖先から始まった琉球の伝統・文化を大切にしながら<br class='hidden md:block' />
          独自の哲学を持ってエステやほぐしの事業を展開しています。</p>
          <p>琉球の風に包まれる、心ほどける旅のはじまりへ、ようこそ。</p>`}
      />
      <ul className='u-storyList max-w-[1124px] mx-auto md:mt-32 md:mb-20 md:px-6'>
        {StoryList.map((item, index) => (
          <li
            key={item.href}
            className={`
              u-storyList-item ${item.class}
              ${index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'}
              ${index !== 0 && index!==2 ? 'md:-mt-[320px]' : ''}
              ${index ===2 ? 'md:-mt-[240px]' : ''}
            `}
            style={{ maxWidth: item.imageWidthPC }}
          >
            <Link href={`/story/${item.href}`} className='u-storyList-link block'>
              <div className={`u-store-thumb relative w-[${item.imageWidthSP}] md:w-[${item.imageWidthPC}] h-[${item.imageHeightSP}] md:h-[${item.imageHeightPC}] overflow-hidden`}>
                <Image
                  src={`/images/story/thumb_story-${item.num}.jpg`}
                  alt={item.title}
                  width={parseInt(item.imageWidthPC)}
                  height={parseInt(item.imageHeightPC)}
                  className="u-storyList-img object-cover md:block hidden"
                  sizes={`(max-width: 768px) ${item.imageWidthPC}, ${item.imageWidthSP}`}
                />
              </div>
              <div className='flex align-top gap-4 pt-6'>
                <p className='garamond text-xl flex-shrink-0 pt-2'>{`#0${item.num}`}</p>
                <div className='u-story-text w-full '>
                  <h2 className='shippori font-medium text-[32px] leading-tight'>{item.title}</h2>
                  <p className='garamond text-xl'>{item.titleEn}</p>
                  <div
                    className='shippori font-medium text-base pt-4'
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                  <div className='u-button u-button-small block w-[80px] md:w-[150px] h-[36px] border border-pana pt-[2px] pl-4 mr-0 ml-auto md:mt-10'>
                    <p className='u-button-text shippori font-medium text-lg'>物語を読む</p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <PageLearn
        lead="もっとパナ・ンを知る"
        subLead="Learn more about pana-n."
        items={pageItems} // このページ用のリストを渡す
      />
      <PageStoreSlider />
    </div>
  );
}
