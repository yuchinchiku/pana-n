'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const sectionsData = [
  {
    id: 1,
    title: '地域社会への「恩返し」の精神',
    subtitle: 'a deep sense of gratitude — ongaeshi to our community',
    number: '一つ目',
    pc: '/images/healing/img_kodawari-1_pc.jpg',
    sp: '/images/healing/img_kodawari-1_sp.jpg',
    texts: [
      'パナ・ンが最も大切にしているこだわりは、常に「恩返し」であることです。沖縄は琉球王国時代から文化や伝統を育み、自然と共生し祈りや感謝を大切にしてきた祖先の想いが今も息づいています。',
      ' パナ・ンが石垣島で事業を営むのは、この世界観や生きざまを「ほぐす」という形で現代に伝え、沖縄に住む人々、訪れる人々に恩返しをするため',
      '私たちは大きく咲く花のように多くの想いを包み込み、セラピストもお客様も幸せに咲ける場所でありたい。',
      '集うすべての人々の人生に優しく寄り添い、笑顔の輪が広がっていく。それこそが、パナ・ンにとっての「恩返しの形」なのです。',
      '「みんなで幸せになろう」—— この想いが、パナ・ンの空間づくりやサービスの根底に、いつも流れています。'
    ],
  },
  {
    id: 2,
    title: '人々の人生に「心から触れる」',
    subtitle: 'a deep sense of gratitude — ongaeshi to our community',
    number: '二つ目',
    pc: '/images/healing/img_kodawari-2_pc.jpg',
    sp: '/images/healing/img_kodawari-2_sp.jpg',
    texts: [
      'パナ・ンの癒しは、お体だけでなく、「魂」にも働きかける「本質的な癒し」です。',
      '単なる技術的な施術にとどまらず、お客様の人生に深く寄り添い、心から触れることを大切にしています。',
      'お客様一人一人のその時の心と体の状態を感じ、共鳴し、その人にとって最適なケアを提供させていただいております。',
      '施術は一瞬の出来事かもしれません。しかし、その時間、セラピストとお客様との間に生まれる深い繋がりこそが大切です。',
      'お客様が心身を預けるその特別な瞬間、セラピストの心がけや在り方次第で、その時間はただのリラクゼーションを超え、人生を軽くし、深い癒しへと繋がります。',
      'パナ・ンの癒しは、お客様とセラピストの共鳴によって深まります。',
      '心からの触れ合いを通じて、心と体、そして魂に新たな活力を与える、そんな深い癒しの時間を提供することが私たちの使命であり、こだわりです。'
    ],
  },
  {
    id: 3,
    title: '琉球の祖先の想いを形に',
    subtitle: 'honoring the spirit of ryukyuan ancestors',
    number: '三つ目',
    pc: '/images/healing/img_kodawari-3_pc.jpg',
    sp: '/images/healing/img_kodawari-3_sp.jpg',
    texts:[
      '「沖縄」という地には、琉球時代からの文化や伝統を何百年もかけて築き上げてきた祖先たちがいます。',
      '彼らがいたからこそ、今の沖縄があり、今の私たちパナ・ンがいます。',
      'パナ・ンでは、“祖先の想いに触れ、受け継ぎ、形にしていくこと”にこだわり続けています。',
      '長年のノウハウや祖先を大事にする想いで開発された独自の施術、「元祖琉球マッサージ」をはじめ、珊瑚、ゴーヤー、黒糖、モズク、クチャ、こだわりの琉球粧材を使用したメニューなど、パナ・ンでしか味わえない特別な体験をお届けします。'
    ],
  },
];

export default function Story() {
  const wrapperRef = useRef<HTMLElement>(null);
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    if (!wrapperRef.current || sectionRefs.current.length === 0) return;

    const isPC = window.innerWidth >= 768;
    if (!isPC) return;

    const ctx = gsap.context(() => {
      sectionRefs.current.forEach((sec, i) => {
        if (!sec) return;

        const endTrigger = sectionRefs.current[i + 1] || sec;

        ScrollTrigger.create({
          trigger: sec,
          start: 'middle top',
          endTrigger,
          end: 'bottom top',
          pin: sec,
          pinSpacing: i === sectionRefs.current.length - 1, // 最後だけspacing true
          scrub: true,
        });
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="u-kodawari-wrapper sec-white relative z-10 bg-white pb-10 md:pb-40 md:pr-32 md:pt-0"
      data-header-color="#1D1112"
      ref={wrapperRef}
    >
      {sectionsData.map((section, i) => (
        <section
          key={section.id}
          ref={el => { sectionRefs.current[i] = el; }}
          className="w-full md:w-auto md:h-screen md:flex md:justify-start md:gap-12"
        >
          <div className="hidden md:block w-full h-full relative">
            <Image
              src={section.pc}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
          <div className="block md:hidden w-full h-[250px] relative">
            <Image
              src={section.sp}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="u-kodawari-textArea w-full bg-white px-10 py-10 md:flex-shrink-0 md:w-[55.5%] md:pt-20 md:py-0">
            <div className="u-kodawariHead u-fade-in">
              <p className="shippori font-medium md:text-lg">#{section.number}のこだわり</p>
              <h3 className="shippori font-medium text-xl md:text-2xl py-2">{section.title}</h3>
              <p className="garamond md:text-lg">{section.subtitle}</p>
            </div>
            <div className="u-fade-in shippori font-medium text-base leading-[180%] pt-2 md:pt-8 md:pr-[20%]">
              {section.texts.map((text, idx) => (
                <p key={idx} className='pb-4'>{text}</p>
              ))}
            </div>
          </div>
        </section>
      ))}
    </section>
  );
}
