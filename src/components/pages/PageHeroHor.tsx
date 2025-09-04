'use client';
import { motion } from 'framer-motion';
import { Pana } from '@/assets/icons/Pana';

type PageHeroProps = {
  title: string;          // <br>, <span class="..."> を含む文字列OK
  titleSmall?: string;
  subTitle?: string;
  animate?: boolean;
};

// アニメーション variants
const letterVariants = {
  hidden: { opacity: 0, y: -20, scale: 1.2, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96], delay: i * 0.03 },
  }),
};

export default function PageHeroHor({ title, titleSmall, subTitle, animate = false }: PageHeroProps) {
  // <br> と <span> を解析して JSX に変換
  const titleLetters = title
    .split(/(<br\s*[^>]*>|<span[^>]*>.*?<\/span>)/gi)
    .flatMap((chunk, chunkIndex) => {
      if (/^<br/i.test(chunk)) {
        // <br>
        const classMatch = chunk.match(/class=['"]([^'"]+)['"]/i);
        return [<br key={`br-${chunkIndex}`} className={classMatch ? classMatch[1] : undefined} />];
      } else if (/^<span/i.test(chunk)) {
        // <span> ... </span>
        const classMatch = chunk.match(/class=['"]([^'"]+)['"]/i);
        const innerText = chunk.replace(/<span[^>]*>|<\/span>/gi, '');
        return [
          <span key={`span-${chunkIndex}`} className={classMatch ? classMatch[1] : undefined}>
            {innerText.split('').map((char, i) => (
              <motion.span
                key={`${chunkIndex}-${i}`}
                custom={i + 1}
                variants={letterVariants}
                initial="hidden"
                animate={animate ? 'visible' : 'hidden'}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>,
        ];
      }
      // 通常文字
      return chunk.split('').map((char, i) => (
        <motion.span
          key={`${chunkIndex}-${i}`}
          custom={i + 1}
          variants={letterVariants}
          initial="hidden"
          animate={animate ? 'visible' : 'hidden'}
          className="inline-block"
        >
          {char}
        </motion.span>
      ));
    });

  return (
    <div className="u-pageHero relative flex justify-start items-center w-full h-[350px] lg:h-[450px] pt-10">
      <div className="relative lg:ml-[12%] lg:mr-[9%] px-5 lg:px-0">
        <h1 className="u-page-title u-page-title-hor text-white flex items-start lg:items-center gap-4">
          <i className="block w-3 h-3 lg:w-5 lg:h-5 mt-7 lg:mt-2">
            <Pana color="white" className="w-3 h-3 lg:w-5 lg:h-5" />
          </i>

          <span className="shippori text-[32px] lg:text-[40px] font-medium leading-[160%] lg:leading-[180%]">
            {titleLetters}
          </span>

          {titleSmall && (
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={animate ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="block text-[20px] lg:text-[24px] ml-3"
            >
              {titleSmall}
            </motion.span>
          )}
        </h1>

        {subTitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={animate ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            className="u-page-subTitle garamond text-base lg:text-xl text-white tracking-wider pl-8 lg:pl-10"
          >
            {subTitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
