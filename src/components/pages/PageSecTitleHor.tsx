import { Pana } from '@/assets/icons/Pana';
import '@/styles/component/pageSecTitle.scss';

interface PageSecTitleHorProps {
  mainTitleSmall?: string;
  mainTitle: string;
  subTitle?: string;
}

export default function PageSecTitleHor({ mainTitleSmall, mainTitle, subTitle }: PageSecTitleHorProps) {
  return (
    <div className='u-PageSecTitleHor-section u-fade-in mb-10 px-5 lg:px-0'>
      <div className='u-PageSecTitleHor-wrapper flex items-center gap-4 lg:gap-6'>
        <div className='flex items-center gap-2 lg:gap-4 flex-shrink-0'>
          <i className="block w-3 h-3 lg:w-4 lg:h-5">
            <Pana color='#1D1112' className="w-3 h-3 lg:w-5 lg:h-5" />
          </i>
          <h2 className='u-PageSecTitleHor shippori font-medium'>
            {mainTitleSmall && (
              <span className='text-lg lg:text-2xl block'>{mainTitleSmall}</span>
            )}
            <span
              className='text-[28px] lg:text-[32px] block'
              dangerouslySetInnerHTML={{ __html: mainTitle }}
            ></span>

          </h2>
        </div>
        {subTitle && (
          <p className='garamond text-lg lg:text-xl flex-shrink-0 leading-[100%] lg:leading-[180%]'
              dangerouslySetInnerHTML={{ __html: subTitle }}
          ></p>
          )}
      </div>
    </div>
  );
}
