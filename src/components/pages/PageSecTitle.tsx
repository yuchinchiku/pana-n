import { Pana } from '@/assets/icons/Pana';
import '@/styles/component/pageSecTitle.scss';

interface PageSecTitleProps {
  mainTitleSmall?: string;
  mainTitle: string;
  subTitle?: string;
  desc?: string;
}

export default function PageSecTitle({ mainTitleSmall, mainTitle, subTitle, desc }: PageSecTitleProps) {
  return (
    <div className='u-pageSecTitle-section u-fade-in mb-10 lg:mb-20'>
      <div className='u-pageSecTitle-wrapper text-center'>
        <i className="block mx-auto mb-2 w-3 h-3 lg:w-4 lg:h-5">
          <Pana color='#00B0C7' className="w-3 h-3 lg:w-5 lg:h-5" />
        </i>
        <h2 className='u-pageSecTitle shippori font-medium'>
          {mainTitleSmall && (
            <span className='text-lg lg:text-2xl block'>{mainTitleSmall}</span>
          )}
          <span
            className='text-[28px] lg:text-[32px] block'
            dangerouslySetInnerHTML={{ __html: mainTitle }}
          ></span>

        </h2>
        {subTitle && (
          <p className='garamond text-lg lg:text-xl pb-6'>{subTitle}</p>
          )}
      </div>
      {desc && (
        <div
          className="u-pageSecTitle-desc shippori lg:text-lg leading-[180%] lg:text-center mt-7 px-8 lg:px-0"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      )}
    </div>
  );
}
