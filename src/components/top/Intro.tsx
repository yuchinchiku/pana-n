'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/styles/pages/top/intro.scss';

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const deigo1Ref = useRef<HTMLDivElement>(null);
  const line1SpRef = useRef<HTMLDivElement>(null);
  const line1PcRef = useRef<HTMLDivElement>(null);
  const deigo2Ref = useRef<HTMLDivElement>(null);
  const line2SpRef = useRef<HTMLDivElement>(null);
  const line2PcRef = useRef<HTMLDivElement>(null);
  const deigo3SpRef = useRef<HTMLDivElement>(null);
  const deigo3PcRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animatePath = (el: HTMLDivElement | null, duration = 2) => {
      if (!el) return;
      const path = el.querySelector('path');
      if (!path) return;

      const originalDash = path.getAttribute("stroke-dasharray");
      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        stroke: "#776453",
        fill: "none",
        opacity: 1
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        duration,
        ease: "none",
        onComplete: () => {
          if (originalDash) {
            path.setAttribute("stroke-dasharray", originalDash);
          }
        },
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        }
      });
    };

    // 少し遅らせて実行（DOM準備完了後）
    requestAnimationFrame(() => {
      // deigo-1
      gsap.fromTo(deigo1Ref.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: deigo1Ref.current,
            start: "top 80%",
            once: true,
          }
        }
      );

      // line-1
      animatePath(line1SpRef.current, 1.5);
      animatePath(line1PcRef.current, 1.5);

      // deigo-2
      gsap.fromTo(deigo2Ref.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: deigo2Ref.current,
            start: "top 80%",
            once: true,
          }
        }
      );

      // line-2
      animatePath(line2SpRef.current, 1.5);
      animatePath(line2PcRef.current, 1.5);

      // deigo-3
      [deigo3SpRef, deigo3PcRef].forEach(ref => {
        gsap.fromTo(ref.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              once: true,
            }
          }
        );
      });
    });
  }, []);


  return (
    <section className="u-intro sec-white relative shippori text-base w-full md:text-lg font-medium tracking-[2px] z-10 pt-40 md:mt-[200px] md:pt-[320px] md:pb-40 md:pl-[180px] md:pr-20" data-header-color="#1D1112">
      <div className="relative md:flex md:justify-center md:gap-12 md:flex-row-reverse">
        <div className="u-intro-textBlock relative writing-vertical mr-[10.6%] ml-auto md:mx-0">
          <p className='px-1 u-fade-in'>かつて琉球王国の時代、</p>
          <p className='px-1 u-fade-in'>厳しい自然との闘い、</p>
          <p className='px-1 u-fade-in'>そして調和</p>
          <p className='px-1 u-fade-in'>その中に、先人たちの</p>
          <p className='px-1 u-fade-in'>暮らしがありました。</p>
          <div ref={deigo1Ref} className="u-ill-deigo-1 w-[70px] md:w-[115px] h-[145px] md:h-[239px] absolute -top-4 md:top-[-47px] -left-24 md:right-[-158px] md:left-auto">
            <Image src='/images/top/deigo-1.svg' alt='' fill className='object-cover' sizes="(max-width: 768px) 70px, 115px" priority />
          </div>
        </div>

        <div className="u-intro-textBlock relative writing-vertical ml-[10.6%] mr-auto mt-5 md:mx-0 md:mt-0">
          <p className='px-1 u-fade-in'>尚巴志が三山を統一し、</p>
          <p className='px-1 u-fade-in'>琉球王国を築いた後も、</p>
          <p className='px-1 u-fade-in'>島々の人々は互いを思いやり、</p>
          <p className='px-1 u-fade-in'>心身を癒す知恵を</p>
          <p className='px-1 u-fade-in'>磨き続けてきました。</p>

          <div ref={line1SpRef} className="u-ill-line-1 absolute -top-24 left-[44%] md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="181" height="177" viewBox="0 0 181 177" fill="none">
              <path d="M0.5 0.5C4.00002 34.5 47.4901 69.0487 84.5001 75.5C139 85 187 144.5 179.5 176"/>
            </svg>
          </div>
        </div>

        <div ref={line1PcRef} className="u-ill-line-1 absolute md:top-40 hidden md:block" style={{ pointerEvents: 'none' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="581" height="272" viewBox="0 0 581 272" fill="none">
            <path d="M578 1C596.5 113 481.572 236.942 354 188.5C102.5 93 27.5001 227 1 271"/>
          </svg>
        </div>
      </div>

      <div className="relative my-20 md:flex md:justify-center md:gap-12 md:flex-row-reverse md:my-36">
        <div className="u-intro-textBlock relative writing-vertical mr-[10.6%] ml-auto md:mx-0">
          <p className='px-1 u-fade-in'>琉球の大地から生まれた</p>
          <p className='px-1 u-fade-in'>「パナ・ン」では</p>
          <p className='px-1 u-fade-in'>先人たちが大切に守ってきた</p>
          <p className='px-1 u-fade-in'>歴史とその文化の中で</p>
          <p className='px-1 u-fade-in'>磨かれた癒しを提供します。</p>
          <div ref={deigo2Ref} className="u-ill-deigo-2 w-[200px] h-[157px] absolute -top-52 -right-8 md:hidden">
            <Image src='/images/top/deigo-2.svg' alt='' fill className='object-cover' sizes="200px" priority />
          </div>
          <div ref={line2SpRef} className="u-ill-line-2 absolute -top-10 -left-24 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="195" height="606" viewBox="0 0 195 606" fill="none">
              <path d="M136 0.5C91.8333 17.6667 1 67.5 1 147.5C1 247.5 185.912 288 193 380.5C203 511 101.5 560 30.5 605" stroke="#776453" strokeOpacity="0.5" strokeLinecap="round" strokeDasharray="4 4"/>
            </svg>
          </div>
        </div>

        <div className="u-intro-textBlock relative writing-vertical ml-[10.6%] mr-auto mt-5 md:mx-0 md:mt-0">
          <p className='px-1 u-fade-in'>島々の豊かな自然と調和し、</p>
          <p className='px-1 u-fade-in'>その自然から</p>
          <p className='px-1 u-fade-in'>頂いた素材を使い、</p>
          <p className='px-1 u-fade-in'>心と身体、そして魂に</p>
          <p className='px-1 u-fade-in'>深い癒しをもたらします。</p>
          <div ref={deigo3PcRef} className="u-ill-deigo-2 hidden md:block md:w-[320px] md:h-[248px] absolute md:top-4 md:left-[-320px]">
            <Image src='/images/top/deigo-2.svg' alt='' fill className='object-cover' sizes="320px" priority />
          </div>
        </div>
      </div>

      <div className="relative md:flex md:justify-center md:gap-12 md:flex-row-reverse">
        <div className="u-intro-textBlock writing-vertical mr-[10.6%] ml-auto md:mx-0">
          <p className='px-1 u-fade-in'>温かな手のひら、心地よいアロマ、</p>
          <p className='px-1 u-fade-in'>島々の海の恵み、</p>
          <p className='px-1 u-fade-in'>そして琉球の音楽に包まれ、</p>
          <p className='px-1 u-fade-in'>日々の疲れを癒し</p>
          <p className='px-1 u-fade-in'>魂をほぐさせていただきます。</p>
          <div ref={deigo3SpRef} className="u-ill-deigo-3 w-[130px] md:w-[250px] h-[135px] md:h-[263px] absolute top-10 md:top-0 left-4 md:right-20 md:left-auto">
            <Image src='/images/top/deigo-3.svg' alt='' fill className='object-cover' sizes="(max-width: 768px) 130px, 250px" priority />
          </div>
        </div>

        <div className="u-intro-textBlock writing-vertical ml-[10.6%] mr-auto -mt-4 md:mx-0 md:mt-0">
          <p className='px-1 u-fade-in'>「パナ・ン」の</p>
          <p className='px-1 u-fade-in'>エステ・ほぐしを通し、</p>
          <p className='px-1 u-fade-in'>心と身体を再生し、</p>
          <p className='px-1 u-fade-in'>深い安らぎと明日への活力を</p>
          <p className='px-1 u-fade-in'>取り戻してみませんか。</p>
        </div>

        <div ref={line2PcRef} className="u-ill-line-2 absolute md:-top-40 hidden md:block">
          <svg xmlns="http://www.w3.org/2000/svg" width="637" height="170" viewBox="0 0 637 170" fill="none">
            <path d="M0.499939 1C86 96.5 192.754 158.681 353.5 115C491.5 77.5 589 115 636.5 169"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
