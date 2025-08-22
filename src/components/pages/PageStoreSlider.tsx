'use client';
import StoreSlider from '@/components/StoreSlider';
import '@/styles/pages/top/store.scss';
import '@/styles/component/lineTitle.scss';

export default function PageStoreSlider() {

  return (
    <div className="u-pageSlider mx-auto md:mb-40">
      <div className="u-lineTitle flex items-center gap-4 mb-10 md:mx-[21.8%]">
        <div className="u-pageSlider-title flex items-center gap-2 flex-shrink-0">
          <h3 className="shippori text-[28px]">パナ・ンの店舗</h3>
          <p className="garamond text-xl leading-tight">store line-up</p>
        </div>
      </div>
      <StoreSlider isTopPage={false} />
    </div>
  );
}
