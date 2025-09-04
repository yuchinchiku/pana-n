'use client';
import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import '@/styles/pages/story/story.scss';

gsap.registerPlugin(ScrollTrigger);

type Story = {
  num: string;
  title: string;
  desc: string;
  pageName: string;
};

type Intro = {
  num: string;
  title: string;
  subTitle?: string;
  text?: string;
  text2?: string;
  pageName: string;
};

type Props = {
  stories: Story[];
  intro?: Intro;
};

export default function StoryScroller({ stories, intro }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const fadeInImage = (index: number) => {
    imageRefs.current.forEach((img, i) => {
      if (!img) return;
      gsap.to(img, { autoAlpha: i === index ? 1 : 0, duration: 0.8, ease: 'power2.out' });
    });
  };

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  useLayoutEffect(() => {
    // すべてのPC画像がロードされてから ScrollTrigger を作る
    if (window.innerWidth >= 1024 && containerRef.current && imagesLoaded === stories.length) {
      const lastIndex = stories.length - 1;

      // 固定画像ピン留め
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: '.u-fixed-image-container',
        pinSpacing: false,
      });

      // セクションごとの画像切替
      sectionRefs.current.forEach((section, i) => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top 50%',
          end: i === lastIndex ? 'bottom bottom' : 'bottom 50%',
          onEnter: () => fadeInImage(i),
          onEnterBack: () => fadeInImage(i),
          onLeave: i === lastIndex ? undefined : () => fadeInImage(i + 1),
          onLeaveBack: i === 0 ? undefined : () => fadeInImage(i - 1),
        });
      });

      // 初期表示
      fadeInImage(0);

      // 遷移直後のクライアント遷移対策
      requestAnimationFrame(() => ScrollTrigger.refresh());
    }
  }, [imagesLoaded, stories]);

  return (
    <div ref={containerRef} className="relative lg:flex lg:mb-40">
      {/* 固定画像 PC */}
      <div className="u-fixed-image-container hidden lg:block w-[44.5%] top-0 left-0 h-screen">
        {stories.map((s, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) imageRefs.current[i] = el;
            }}
            className="absolute inset-0 opacity-0"
          >
            <Image
              src={`/images/story/${s.pageName}/img_${s.pageName}-${s.num}_pc.jpg`}
              alt={s.title}
              sizes="(min-width: 768px) 44.5vw, 100vw"
              fill
              priority
              className="object-cover"
              onLoad={handleImageLoad}
            />
          </div>
        ))}
      </div>

      {/* テキスト */}
      <div className="flex-1">
        {intro && (
          <section className="min-h-screen flex flex-col justify-center p-5 lg:p-16">
            {/* SP用画像 */}
            <div className="lg:hidden w-full">
              <div className="story-image w-full mb-6">
                <Image
                  src={`/images/story/${intro.pageName}/img_${intro.pageName}-01_sp.jpg`}
                  alt=''
                  width={800}
                  height={600}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
            <div className="max-w-[651px] px-5 lg:px-0">
              <p className="u-storyHead-num garamond text-3xl lg:text-5xl">{`#0${intro.num}`}</p>
              <div className="my-4">
                <h1 className="shippori font-medium text-3xl lg:text-5xl pb-1">{intro.title}</h1>
                {intro.subTitle && <p className="garamond text-lg lg:text-[20px]">{intro.subTitle}</p>}
              </div>
              {intro.text && (
                <p className="shippori text-lg lg:text-xl leading-[180%] lg:leading-[180%] mt-0">{intro.text}</p>
              )}
              {intro.text2 && (
                <p className="shippori text-lg lg:text-xl leading-[180%] lg:leading-[180%] mt-0">{intro.text2}</p>
              )}
            </div>
          </section>
        )}

        {stories.map((s, i) => (
          <section
            key={i}
            ref={(el) => {
              if (el) sectionRefs.current[i] = el;
            }}
            className="u-section lg:min-h-screen flex flex-col justify-start p-5 lg:p-16"
          >
            {/* SP用画像 */}
            <div className="lg:hidden w-full">
              {s.num !== '01' && (
                <div key={s.num} className="story-image w-full mb-6">
                  <Image
                    src={`/images/story/${s.pageName}/img_${s.pageName}-${s.num}_sp.jpg`}
                    alt={s.title}
                    width={800}
                    height={600}
                    className="object-cover w-full h-auto"
                  />
                </div>
              )}
            </div>
            <div className="max-w-[651px] px-5 lg:px-0">
              <h2 className="u-storyTitle u-fade-in max-w-[561px] shippori text-2xl lg:text-4xl leading-[160%] lg:leading-[160%] mb-4 lg:mb-14 mt-0">
                {s.title}
              </h2>
              <div
                className="u-storyText u-fade-in max-w-[461px] shippori lg:text-lg font-medium leading-[180%] lg:leading-[180%] lg:pl-24"
                dangerouslySetInnerHTML={{ __html: s.desc }}
              />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
