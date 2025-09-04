'use client';
import { motion, Variants, Easing } from 'framer-motion';
import { Pana } from '@/assets/icons/Pana';

type PageHeroProps = {
  title: string;
  titleSmall?: string;
  subTitle?: string;
  animate?: boolean;
};

export default function PageHero({ title, titleSmall, subTitle, animate = false }: PageHeroProps) {
  const letters = title.split('');
  const bezierEase: Easing = [0.25, 0.1, 0.25, 1];

  // -----------------------------
  // Variants 関数でアニメーション定義
  // -----------------------------
  const letterVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: -20, 
      y: -20, 
      scale: 1.8, 
      filter: 'blur(10px)',
    },
    visible: (i: number = 0) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: bezierEase,
        delay: i * 0.05,
      },
    }),
  };

  const subTitleVariants: Variants = {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: 'easeOut' },
    },
  };

  return (
    <div className="u-pageHero relative flex justify-center w-full h-[350px] lg:h-[450px] pt-10">
      <h1 className="u-page-title relative text-white lg:w-[76px] h-fit">
        {/* Panaアイコンもタイトルと同じアニメーション */}
        <motion.i
          className="block mx-auto mb-2 w-3 h-3 lg:w-5 lg:h-5 pl-2 lg:pl-0"
          variants={letterVariants}
          custom={0}                // 最初の要素として index=0
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
        >
          <Pana color="white" className="w-3 h-3 lg:w-5 lg:h-5" />
        </motion.i>

        <span className="shippori text-[32px] lg:text-[40px] font-medium leading-none writing-vertical pl-[18px] block">
          {titleSmall && (
            <motion.span
              className="block text-[20px] lg:text-[24px] ml-3"
              variants={letterVariants}
              custom={0}
              initial="hidden"
              animate={animate ? "visible" : "hidden"}
            >
              {titleSmall}
            </motion.span>
          )}

          {letters.map((letter, index) => (
            <motion.span
              key={index}
              custom={index + 1} // Panaアイコンとタイトル小文字が0なので +1
              variants={letterVariants}
              initial="hidden"
              animate={animate ? "visible" : "hidden"}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </span>

        {subTitle && (
          <motion.span
            variants={subTitleVariants}
            initial="hidden"
            animate={animate ? "visible" : "hidden"}
            className="u-page-subTitle garamond text-base lg:text-xl tracking-widest rotate-90 whitespace-nowrap absolute"
          >
            {subTitle}
          </motion.span>
        )}
      </h1>
    </div>
  );
}
