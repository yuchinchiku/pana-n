'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import '@/styles/pages/top/story.scss';

const sliderStory = [
  { pc: '/images/top/img_story-1_pc.jpg', sp: '/images/top/img_story-1_sp.jpg', alt: '' },
  { pc: '/images/top/img_story-2_pc.jpg', sp: '/images/top/img_story-2_sp.jpg', alt: '' },
];
const sliderHealing = [
  { pc: '/images/top/img_healing-1_pc.jpg', sp: '/images/top/img_healing-1_sp.jpg', alt: '' },
  { pc: '/images/top/img_healing-2_pc.jpg', sp: '/images/top/img_healing-2_sp.jpg', alt: '' },
];

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  const wrapperRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const healingRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || !storyRef.current || !healingRef.current) return;

    // PC（md以上）かどうかを判定（768px以上をPCとする例）
    const isPC = window.innerWidth >= 1024;

    if (!isPC) {
      // SPは何もしない（ピン固定しない）
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: 'top top',
        endTrigger: healingRef.current,
        end: 'bottom top',
        pin: storyRef.current,
        pinSpacing: false,
        scrub: true,
        onToggle: self => {
          if (self.isActive) {
            const w = wrapperRef.current?.offsetWidth || 0;
            storyRef.current!.style.width = `${w}px`;
          } else {
            storyRef.current!.style.width = '';
          }
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="u-story-wrapper sec-white relative z-10 bg-white pt-32 pb-[320px] lg:pr-32 lg:pt-0 lg:pb-[300px]"
      data-header-color="#1D1112"
      ref={wrapperRef}
    >
      <section
        ref={storyRef}
        className="u-story w-full block lg:w-auto lg:h-screen lg:flex lg:justify-start lg:ml-[185px]"
      >
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 8000 }}
          speed={6000}
          loop
          className="w-full h-[450px] lg:w-[44.5%] lg:h-screen ml-[180px]"
        >
          {sliderStory.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="hidden lg:block w-full h-full relative">
                <Image
                  src={img.pc}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
              <div className="block lg:hidden w-full h-[450px] relative">
                <Image
                  src={img.sp}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="u-fade-in w-full py-10 px-5 min-h-full lg:flex-shrink-0 lg:w-[55.5%] lg:pt-20 lg:px-0">
          <div className="relative flex flex-row-reverse gap-6 lg:gap-10">
            <SectionTitle
              mainTitle="パナ・ンの物語"
              subTitle="pana-n's story"
              subTitleTop="82px"
              subTitleRight="-44px"
              subTitleTopSP="61px"
              subTitleRightSP="-39px"
            />
            <div className="u-story-text relative flex flex-row-reverse gap-3 lg:gap-6 shippori text-base lg:text-lg font-medium tracking-[2px] pt-12 lg:pt-16 z-2">
              <div className="u-story-textBlock writing-vertical">
                <p className="pl-[2px] lg:px-1">「パナ」、八重山方言（ヤイマムニ）で「花」。</p>
                <p className="pl-[2px] lg:px-1">「ン」、原点であり、新たな始まりを告げる言葉。</p>
                <p className="pl-[2px] lg:px-1">常に新しい可能性へと続いていく 、花のように。</p>
                <p className="pl-[2px] lg:px-1">琉球の伝統を受け継いで、未来に渡していきたい。</p>
              </div>
              <div className="u-story-textBlock writing-vertical">
                <p className="pl-[2px] lg:px-1">先人たちから受け継いだ癒しを、</p>
                <p className="pl-[2px] lg:px-1">世界に花開かせたいという、深い願いを胸に。</p>
                <p className="pl-[2px] lg:px-1">ここに、パナ・ンの、そして私たちの物語が始まります。</p>
              </div>
            </div>
            <p className="absolute shippori text-120px lg:text-160px font-medium text-pana-gray04 top-[-80px] lg:top-0 left-[-20px] lg:left-10 z-0 opacity-50">
              紡
            </p>
          </div>
          <Button href="/story" text="物語の続きへ" className="mx-auto mt-10 lg:mt-16" />
        </div>
      </section>
      <section
        ref={healingRef}
        className="u-healing w-full lg:w-auto lg:h-screen lg:flex lg:justify-start lg:ml-[185px]"
      >
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 8000 }}
          speed={6000}
          loop
          className="w-full h-[450px] lg:w-[44.5%] lg:h-screen ml-[180px]"
        >
          {sliderHealing.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="hidden lg:block w-full h-full relative">
                <Image
                  src={img.pc}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
              <div className="block lg:hidden w-full h-[450px] relative">
                <Image
                  src={img.sp}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="u-story-textArea w-full px-5 py-10 lg:w-[55.5%] lg:pt-20 lg:py-0">
          <div className="relative flex flex-row-reverse gap-2 lg:gap-10 z-1">
            <SectionTitle
              mainTitle="パナ・ンの癒し"
              subTitle="pana-n's healing"
              subTitleTop="91px"
              subTitleRight="-51px"
              subTitleTopSP="70px"
              subTitleRightSP="-46px"
            />
            <div className="u-story-text relative flex flex-row-reverse gap-3 lg:gap-4 shippori text-base lg:text-lg font-medium tracking-[2px] pt-12 lg:pt-16 z-1">
              <div className="u-story-textBlock writing-vertical">
                <p className="pl-[2px] lg:px-1">本当の意味での「癒し」とは、</p>
                <p className="pl-[2px] lg:px-1">ただ身体をほぐすだけのものではなく、</p>
                <p className="pl-[2px] lg:px-1">深く静かに、心や魂にふれるもの。</p>
              </div>
              <div className="u-story-textBlock writing-vertical">
                <p className="pl-[2px] lg:px-1">パナ・ンでは、単なるテクニックを超えた、</p>
                <p className="pl-[2px] lg:px-1">琉球の伝統的な知恵に根ざし、</p>
                <p className="pl-[2px] lg:px-1">より本質的な魂の回復と変容を追求しています。</p>
              </div>
              <div className="u-story-textBlock writing-vertical">
                <p className="pl-[2px] lg:px-1">あなたの内なる輝きを呼び覚ます深遠な癒しの旅。</p>
                <p className="pl-[2px] lg:px-1">一人一人の物語に寄り添い、本来の自分を取り戻す</p>
                <p className="pl-[2px] lg:px-1">パナ・ンでの癒しを紹介します。</p>
              </div>
            </div>
            <p className="absolute shippori text-120px lg:text-160px font-medium text-pana-gray04 top-[-80px] lg:top-0 left-[-20px] lg:left-10 z-0 opacity-50">
              癒
            </p>
          </div>
          <Button href="/healing" text="癒しの続きへ" className="mx-auto mt-10 lg:mt-16" />
        </div>
      </section>
    </section>
  );
}
