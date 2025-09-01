import { Pana } from '@/assets/icons/Pana';
import '@/styles/component/pageSecTitle.scss';

interface PageSecTitleHorProps {
  mainTitleSmall?: string;
  mainTitle: string;
  subTitle?: string;
}

export default function PageSecTitleHor({ mainTitleSmall, mainTitle, subTitle }: PageSecTitleHorProps) {
  return (
    <div className='u-PageSecTitleHor-section u-fade-in mb-10 px-5 md:px-0'>
      <div className='u-PageSecTitleHor-wrapper flex items-center gap-4 md:gap-6'>
        <div className='flex items-center gap-2 md:gap-4 flex-shrink-0'>
          <i className="block w-3 h-3 md:w-4 md:h-5">
            <Pana color='#1D1112' className="w-3 h-3 md:w-5 md:h-5" />
          </i>
          <h2 className='u-PageSecTitleHor shippori font-medium'>
            {mainTitleSmall && (
              <span className='text-lg md:text-2xl block'>{mainTitleSmall}</span>
            )}
            <span
              className='text-[28px] md:text-[32px] block'
              dangerouslySetInnerHTML={{ __html: mainTitle }}
            ></span>

          </h2>
        </div>
        {subTitle && (
          <p className='garamond text-lg md:text-xl flex-shrink-0 leading-[100%] md:leading-[180%]'
              dangerouslySetInnerHTML={{ __html: subTitle }}
          ></p>
          )}
      </div>
    </div>
  );
}
