'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '@/styles/component/button.scss';
import '@/styles/pages/top/store.scss';

type Store = {
  cat: string;
  name: string;
  href: string;
  image: string;
};

type StoreSliderProps = {
  isTopPage?: boolean; // トップページ用かどうか
};

// 店舗情報の配列（トップも下層も共通）
const stores: Store[] = [
  { cat: "ほぐしガッテン", name: "那覇久米店", href: "/salon/hogushigatten-nahakume", image: "/images/shop/thumb_shop-nahakume.jpg" },
  { cat: "ほぐしガッテン", name: "真栄里店", href: "/salon/hogushigatten-maezato", image: "/images/shop/thumb_shop-maezato.jpg" },
  { cat: "ほぐしガッテン", name: "大森東口店（東京品川）", href: "/salon/hogushigatten-omori", image: "/images/shop/thumb_shop-taketomi.jpg" },
  { cat: "星のや竹富島スパ", name: "星野リゾート星のや竹富島内", href: "/salon/hoshino-okinawa", image: "/images/shop/thumb_shop-taketomi.jpg" },
  { cat: "西表スパ", name: "星野リゾート西表島ホテル", href: "/salon/hoshino-iriomote", image: "/images/shop/thumb_shop-maezato.jpg" },
  { cat: "小浜島琉球スパ", name: "星野リゾートリゾナーレ小浜島", href: "/salon/hoshino-kohama", image: "/images/shop/thumb_shop-taketomi.jpg" },
  { cat: "パナ・ン", name: "南ぬ島石垣空港店", href: "/salon/painushima", image: "/images/shop/thumb_shop-taketomi.jpg" },
  { cat: "琉球足つぼ", name: "フサキビーチリゾートホテル＆ヴィラズ", href: "/salon/fusaki", image: "/images/shop/thumb_shop-taketomi.jpg" },
];

export default function StoreSlider({ isTopPage = true }: StoreSliderProps) {
  return (
    <div className={isTopPage ? 'md:ml-[185px] md:mr-24' : 'md:ml-[11%] md:mr-0'}>
      <Swiper
        modules={[Autoplay]}
        loop
        speed={1000}
        spaceBetween={24}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1.5 },
          645: { slidesPerView: 3 },
          1024: { slidesPerView: 3.5 },
        }}
        className="u-fade-in w-full"
      >
        {stores.map((store, index) => (
          <SwiperSlide key={index} className='flex-shrink-0'>
            <Link href={store.href} className='u-store-link'>
              <div className='u-store-thumb relative w-full aspect-[16/10] overflow-hidden'>
                <Image
                  src={store.image}
                  alt={store.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, 384px"
                />
              </div>
              <div className={`u-store-text shippori font-medium text-left mt-4 ${isTopPage ? 'text-white' : 'text-black'}`}>
                <div className='u-store-textHead flex justify-between pl-2 md:pl-4 relative'>
                  <h3 className='text-base md:text-lg'>{store.cat}</h3>
                  <div className='u-button u-button-store absolute top-0 right-0 block w-[80px] md:w-[104px] h-[29px] border flex-shrink-0 pt-[2px] pl-[4px]'
                       style={{ borderColor: isTopPage ? 'white' : '#333' }}>
                    <p className='u-button-text shippori font-medium text-sm'>店舗詳細</p>
                  </div>
                </div>
                <p className='text-sm block mt-[6px] md:mt-2 pl-2 md:pl-4'>{store.name}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
