'use client';
import SectionTitle from '@/components/SectionTitle';
import StoreSlider from '@/components/StoreSlider';
import Button from '@/components/Button';
import News from '@/components/top/News';
import '@/styles/pages/top/store.scss';

export default function Store() {
  return (
    <section className='u-store-wrapper sec-black relative z-10 md:pb-24' data-header-color="#fff">
      <div className='u-store-head flex flex-row-reverse md:block px-5 md:px-0'>
        <div className='u-store-titleArea pl-[80px]'>
          <SectionTitle
            mainTitle="パナ・ンの店舗"
            subTitle="store line-up"
            color="white"
            className='u-fade-in mx-auto'
            subTitleTop="75px"
            subTitleRight="-37px"
            subTitleTopSP="57px"
            subTitleRightSP="-33px"
          />
        </div>
        <div className="u-store-intro u-fade-in flex justify-center flex-row-reverse gap-3 md:gap-6 shippori text-base text-white md:text-lg font-medium tracking-[2px] mx-auto mb-5 md:mb-10 pt-24 md:pt-10">
          <div className="u-store-textBlock writing-vertical">
            <p className='px-1'>パナ・ンの店舗は、</p>
            <p className='px-0'>
              <span className='px-1 md:block'>ただ癒しを提供する</span>
              <span className='px-1 md:block'>場所ではありません。</span>
            </p>
          </div>
          <div className="u-store-textBlock writing-vertical">
            <p className='px-0'>
              <span className='px-1 md:block'>島々の豊かな自然と、</span>
              <span className='px-1 md:block'>琉球に息づく先人たちの</span>
            </p>
            <p className='px-0'>
              <span className='px-1 md:block'>知恵と祈りに包まれた、</span>
              <span className='px-1 md:block'>静かであたたかな空間です。</span>
            </p>
          </div>
          <div className="u-store-textBlock writing-vertical">
            <p className='px-1'>訪れる人の心がふとほどけ、</p>
            <p className='px-1'>深い呼吸を取り戻せるように。</p>
          </div>
          <div className="u-store-textBlock writing-vertical">
            <p className='px-0'>
              <span className='px-1 md:block'>この土地ならではの</span>
              <span className='px-1 md:block'>エネルギーとともに、</span>
            </p>
            <p className='px-0'>
              <span className='px-1 md:block'>あなたの内なる輝きを</span>
              <span className='px-1 md:block'>そっと呼び覚まします。</span>
            </p>
          </div>
        </div>
      </div>
      <StoreSlider isTopPage={true} />
      <Button
        href="/salon"
        text="店舗一覧へ"
        className="u-fade-in u-button-white text-white border-white mx-auto mt-16 md:mt-20"
      />
      <News/>
    </section>
  );
}