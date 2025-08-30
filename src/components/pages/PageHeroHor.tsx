import { Pana } from '@/assets/icons/Pana';

type PageHeroProps = {
  title: string;
  titleSmall?: string;
  subTitle?: string;
};


export default function PageHeroHor({ title,titleSmall, subTitle }: PageHeroProps) {
  return (
    <div className="u-pageHero relative flex justify-start items-center w-full h-[350px] md:h-[450px] pt-10">
      <div className='relative md:ml-[12%] md:mr-[9%] px-5 md:px-0'>
        <h1 className="u-page-title u-page-title-hor text-white flex items-start md:items-center gap-4">
          <i className="block w-3 h-3 md:w-5 md:h-5 mt-7 md:mt-2">
            <Pana color="white" className="w-3 h-3 md:w-5 md:h-5" />
          </i>
          <span
            className='shippori text-[32px] md:text-[40px] font-medium leading-[160%] md:leading-[180%]'
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {titleSmall && (
            <span className="block text-[20px] md:text-[24px] ml-3">
              {titleSmall}
            </span>
          )}

        </h1>
        <p
          className='u-page-subTitle garamond text-base md:text-xl text-white tracking-wider pl-8 md:pl-10'
        >
          {subTitle}
        </p>
      </div>
    </div>
  );
}
