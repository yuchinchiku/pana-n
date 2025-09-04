'use client';
import { useRouter } from 'next/navigation'; // ← 追加
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import '@/styles/component/button.scss';
import '@/styles/pages/top/store.scss';
import { stores } from "@/data/stores";

type StoreSliderProps = {
  isTopPage?: boolean;
};

export default function StoreSlider({ isTopPage = true }: StoreSliderProps) {
  const router = useRouter(); // ← ここで取得

  return (
    <div className={isTopPage ? 'lg:ml-[185px] lg:mr-24' : 'lg:ml-[11%] lg:mr-0'}>
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
            <Link href={`/salon/${store.href}`} className='u-store-link'>
              <div className='u-store-thumb relative w-full aspect-[16/10] overflow-hidden'>
                <Image
                  src={`/images/salon/thumb_${store.image}.jpg`}
                  alt={store.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, 384px"
                />
              </div>
              <div className={`u-store-text shippori font-medium text-left mt-4 ${isTopPage ? 'text-white' : 'text-black'}`}>
                <div className='u-store-textHead flex justify-between pl-2 lg:pl-4 relative'>
                  <h3
                    className="text-base lg:text-lg"
                    dangerouslySetInnerHTML={{ __html: store.cat }}
                  />
                  {store.hasButton && (
                    <button
                      onClick={(e) => {
                        e.preventDefault(); 
                        router.push(`/salon/${store.href}`);
                      }}
                      className={`u-button u-button-store absolute top-0 right-0 text-left block w-[80px] lg:w-[104px] h-[29px] border flex-shrink-0 pt-[2px] pl-[4px] ${isTopPage ? 'text-white border-white' : 'u-button-store-pages text-black border-pana' }`}
                    >
                      <p className="u-button-text shippori font-medium text-sm">
                        店舗詳細
                      </p>
                    </button>
                  )}
                </div>
                <p className='text-sm block mt-[6px] lg:mt-2 pl-2 lg:pl-4'>{store.name}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
