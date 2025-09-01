import Link from 'next/link';
import ButtonBack from '@/components/ButtonBack';
import '@/styles/component/lineTitle.scss';
import '@/styles/component/button.scss';
import '@/styles/pages/story/storyNext.scss';

type PageIntroProps = {
  storyNextClass: string;
  num: string;
  title: string;
  subTitle?: string;
  link?: string;
};

export default function StoryNext({ storyNextClass, num, title,subTitle,link }: PageIntroProps) {
  return (
    <>
      <div className={`u-storyNext u-storyNext-${storyNextClass} u-fade-in relative w-[90%] h-[250px] md:h-[460px] mx-auto mt-20 md:mt-0`}>
        <Link href={link || '#'} className='u-storyNext-link block w-full h-[250px] md:h-[460px] pt-6 md:pt-[100px] pl-5 md:pl-[9%]'>
          <p className="u-storyNext-num garamond text-xl md:text-[32px]">{`#0${num}`}</p>
          <div className="my-1 md:my-4">
            <h1 className="shippori font-medium text-2xl md:text-4xl pb-1">{title}</h1>
            {subTitle && <p className="garamond text-lg md:text-[20px]">{subTitle}</p>}
          </div>
          <div className='u-button u-button-small block w-[180px] md:w-[205px] h-[36px] border border-pana mt-3 md:mt-6 pt-[2px] pl-2 md:pl-4'>
            <p className='u-button-text shippori font-medium md:text-lg'>次の物語へ</p>
          </div>
        </Link>
      </div>
      <ButtonBack
        href="/story"
        text="物語一覧へ"
        className="u-bottun-md u-fade-in mt-10 md:mt-16 mb-40 md:mb-60 mx-auto"
      />
    </>
  );
}