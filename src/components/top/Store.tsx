'use client';
import SectionTitle from '@/components/SectionTitle';
import StoreSlider from '@/components/StoreSlider';
import Button from '@/components/Button';
import News from '@/components/top/News';
import '@/styles/pages/top/store.scss';

export default function Store() {
  return (
    <section className='u-store-wrapper relative z-10 md:pb-24'>
      <div className='flex md:block'>
        <div className='u-store-titleArea pl-[80px]'>
          <SectionTitle
            mainTitle="パナ・ンの店舗"
            subTitle="store line-up"
            color="white"
            className='mx-auto'
            subTitleTop="75px"
            subTitleRight="-38px"
          />
        </div>
        <div className="u-story-intro flex justify-center gap-6 shippori text-base text-white md:text-lg font-medium tracking-[2px] mx-auto mb-5 md:mb-10 pt-10">
          <div className="u-story-textBlock writing-vertical">
            <p className='px-1'>パナ・ンの店舗は、</p>
            <p className='px-1'>ただ癒しを提供する</p>
            <p className='px-1'>場所ではありません。</p>
          </div>
          <div className="u-story-textBlock writing-vertical">
            <p className='px-1'>島々の豊かな自然と、</p>
            <p className='px-1'>琉球に息づく先人たちの</p>
            <p className='px-1'>知恵と祈りに包まれた、</p>
            <p className='px-1'>静かであたたかな空間です。</p>
          </div>
          <div className="u-story-textBlock writing-vertical">
            <p className='px-1'>訪れる人の心がふとほどけ、</p>
            <p className='px-1'>深い呼吸を取り戻せるように。</p>
          </div>
          <div className="u-story-textBlock writing-vertical">
            <p className='px-1'>この土地ならではの</p>
            <p className='px-1'>エネルギーとともに、</p>
            <p className='px-1'>あなたの内なる輝きを</p>
            <p className='px-1'>そっと呼び覚まします。</p>
          </div>
        </div>
      </div>
      <StoreSlider />
      <Button
        href="/salon"
        text="店舗一覧へ"
        className="u-button-white text-white border-white mx-auto mt-16 md:mt-20"
      />
      <News/>
    </section>
  );
}