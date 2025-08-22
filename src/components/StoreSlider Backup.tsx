'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '@/styles/component/button.scss';
import '@/styles/component/slider.scss';
import '@/styles/pages/top/store.scss';

// 店舗情報の配列
const stores = [
  { cat: "ほぐしガッテン", name: "那覇久米店", href: "/salon/hogushigatten-nahakume", image: "/images/shop/thumb_shop-nahakume.jpg" },
  { cat: "ほぐしガッテン", name: "真栄里店", href: "/salon/hogushigatten-maezato", image: "/images/shop/thumb_shop-maezato.jpg" },
  { cat: "ほぐしガッテン", name: "大森東口店（東京品川）", href: "/salon/hogushigatten-omori", image: "/images/shop/thumb_shop-taketomi.jpg" },
  { cat: "星のや竹富島スパ", name: "星野リゾート星のや竹富島内", href: "/salon/hoshino-okinawa", image: "/images/shop/thumb_shop-taketomi.jpg" },
  { cat: "星のや竹富島スパ", name: "星野リゾート星のや竹富島内", href: "/salon/hoshino-taketomi", image: "/images/shop/thumb_shop-taketomi.jpg" },
  { cat: "西表スパ", name: "星野リゾート西表島ホテル", href: "/salon/hoshino-iriomote", image: "/images/shop/thumb_shop-maezato.jpg" },
  { cat: "小浜島琉球スパ", name: "星野リゾートリゾナーレ小浜島", href: "/salon/hoshino-kohama", image: "/images/shop/thumb_shop-taketomi.jpg" },
  { cat: "パナ・ン", name: "南ぬ島石垣空港店", href: "/salon/painushima", image: "/images/shop/thumb_shop-taketomi.jpg" },
  { cat: "琉球足つぼ", name: "フサキビーチリゾートホテル＆ヴィラズ", href: "/salon/fusaki", image: "/images/shop/thumb_shop-taketomi.jpg" },
];

export default function StoreSlider() {
  return (
    <div className='md:ml-[185px] md:mr-24'>
      <Swiper
        modules={[Autoplay]}
        loop={true} // 無限ループを有効に
        speed={1000} // スライドの切り替え速度を1秒に設定
        spaceBetween={32} // スライド間のスペース
        autoplay={{
          delay: 3000, // 3秒ごとに自動再生
          disableOnInteraction: false, // ユーザー操作時にも自動再生を続ける
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.5, // SP（645px以下）で1.5個表示
          },
          645: {
            slidesPerView: 3, // 通常時は3つ表示
          },
        }}
        className="u-fade-in w-full ml-[180px]"
      >
        {stores.map((store, index) => (
          <SwiperSlide key={index} className='w-[384px]'>
            <Link href={store.href} className='u-store-link'>
              <div className='u-store-thumb relative w-full h-[182px] md:h-[250px] overflow-hidden'>
                <Image
                  src={store.image}
                  alt={store.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, 384px"
                />
              </div>
              <div className='u-store-text shippori font-medium text-white text-left mt-4'>
                <div className='u-store-textHead flex justify-between pl-2 md:pl-4'>
                  <h3 className='text-base md:text-lg'>{store.cat}</h3>
                  <div className='u-button u-button-store absolute top-0 right-0 block w-[80px] md:w-[104px] h-[29px] border border-white flex-shrink-0 pt-[2px] pl-[4px]'>
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