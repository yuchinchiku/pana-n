import { Pana } from '@/assets/icons/Pana';
import '@/styles/component/pageSecTitle.scss';

interface PageSecTitleProps {
  mainTitleSmall: string;
  mainTitle: string;
  subTitle: string;
  desc?: string;
}

export default function PageSecTitle({ mainTitleSmall, mainTitle, subTitle, desc }: PageSecTitleProps) {
  return (
    <div className='u-pageSecTitle-section mb-10 md:mb-20'>
      <div className='u-pageSecTitle-wrapper text-center'>
        <i className="block mx-auto mb-2 w-3 h-3 md:w-4 md:h-5">
          <Pana color='#00B0C7' className="w-3 h-3 md:w-5 md:h-5" />
        </i>
        <h2 className='u-pageSecTitle shippori font-medium'>
          <span className='text-lg md:text-2xl block'>{mainTitleSmall}</span>
          <span className='text-[28px] md:text-[32px] block'>{mainTitle}</span>
        </h2>
        <p className='garamond text-lg md:text-xl pb-6'>{subTitle}</p>
      </div>
      {desc && (
        <div
          className="u-pageSecTitle-desc shippori md:text-lg leading-[180%] md:text-center mt-7 px-8 md:px-0"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      )}
    </div>
  );
}
