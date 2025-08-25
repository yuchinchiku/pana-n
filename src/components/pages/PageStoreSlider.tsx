'use client';
import StoreSlider from '@/components/StoreSlider';
import '@/styles/pages/top/store.scss';
import '@/styles/component/lineTitle.scss';

export default function PageStoreSlider() {

  return (
    <div className="u-pageSlider mx-auto my-20 md:mt-0 md:mb-40 px-5 md:px-0">
      <div className="u-lineTitle flex items-center gap-2 md:gap-4 mb-10 md:mx-[11%]">
        <div className="u-pageSlider-title flex items-center gap-2 flex-shrink-0">
          <h3 className="shippori text-2xl md:text-[28px]">パナ・ンの店舗</h3>
          <p className="garamond text-lg md:text-xl leading-tight">store line-up</p>
        </div>
      </div>
      <StoreSlider isTopPage={false} />
    </div>
  );
}
