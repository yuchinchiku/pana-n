import { Pana } from '@/assets/icons/Pana';

type PageHeroProps = {
  title: string;
  subTitle?: string;
};

export default function PageHero({ title, subTitle }: PageHeroProps) {
  return (
    <div className="u-pageHero relative flex justify-center w-full h-[350px] md:h-[450px] pt-10">
      <h1 className="u-page-title relative text-white md:w-[76px] h-fit">
        <i className="block mx-auto mb-2 w-3 h-3 md:w-5 md:h-5 pl-2 md:pl-0">
          <Pana color="white" className="w-3 h-3 md:w-5 md:h-5" />
        </i>
        <span
          className='shippori text-[32px] md:text-[40px] font-medium leading-none writing-vertical pl-[18px]'
        >
          {title}
        </span>
        <span
          className='u-page-subTitle garamond text-base md:text-xl tracking-widest rotate-90 whitespace-nowrap absolute'
        >
          {subTitle}
        </span>
      </h1>
    </div>
  );
}
