'use client';
import StoreSlider from '@/components/StoreSlider';
import '@/styles/pages/top/store.scss';
import '@/styles/component/lineTitle.scss';

export default function PageStoreSlider() {

  return (
    <div className="u-pageSlider mx-auto my-20 lg:mt-0 lg:mb-40 pl-5 lg:px-0">
      <div className="u-lineTitle u-fade-in flex items-center gap-2 lg:gap-4 mb-10 lg:mx-[11%] pr-5 lg:pr-0 ">
        <div className="u-pageSlider-title flex items-center gap-2 flex-shrink-0">
          <h3 className="shippori text-2xl lg:text-[28px]">パナ・ンの店舗</h3>
          <p className="garamond text-lg lg:text-xl leading-tight">store line-up</p>
        </div>
      </div>
      <StoreSlider isTopPage={false} />
    </div>
  );
}
