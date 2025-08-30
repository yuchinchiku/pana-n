// src/components/pages/StoreMenu.tsx
"use client";
import Image from "next/image";
import PageSecTitleHor from "@/components/pages/PageSecTitleHor";
import { StoreDetail, MenuItem } from "@/data/storeDetails";
import '@/styles/pages/salon/salonDetails.scss';

type Props = {
  store: StoreDetail;
};

export default function StoreMenu({ store }: Props) {
  if (!store.menu || store.menu.length === 0) return null;

  return (
    <section className="max-w-[1020px] md:w-[82.3%] md:ml-[12%] md:mr-[9%] mt-8">
      <PageSecTitleHor mainTitle="メニュー・料金" subTitle="menu / price" />

      <div className="u-menuWrapper">
        {store.menu.map((item, idx) => (
          <div key={idx} className="u-menuItem pt-8 px-8 pb-10 mb-10">
            <div className="u-menuHead flex justify-between items-start">
              <div className="md:max-w-[471px]">
                {/* メニュー名 */}
                <h3 className="shippori text-lg md:text-xl font-medium mb-6">{item.name}</h3>

                {/* 説明 */}
                {item.description && (
                  Array.isArray(item.description)
                    ? item.description.map((text, idx) => (
                        <p key={idx} className="shippori">{text}</p>
                      ))
                    : <p className="shippori">{item.description}</p>
                )}

              </div>

              {/* 画像 */}
              {item.image && (
                <div className="w-full md:max-w-[250px] h-[150px] relative">
                  <Image
                    src={`/images/salon/menu/${item.image}.jpg`}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded"
                  />
                </div>
              )}
            </div>
            {/* オプション */}
            <div className="u-menuPrice mt-8">
              <h4 className="shippori text-white text-lg w-[145px] h-[35px] bg-pana flex items-center justify-center px-6">
                料金・時間
              </h4>
              <div className="u-menuPriceItem flex flex-col md:flex-row items-start justify-center gap-8 border border-pana bg-white py-6 px-10">
                {item.options.map((opt, i) => (
                  <div key={i} className="u-priceList shippori">
                    {opt.label && (
                      <p className="w-32 h-[35px] rounded-full border border-pana text-center flex justify-center items-center mx-auto mb-2">
                        {opt.label}
                      </p>
                    )}

                    {/* 単一パターン */}
                    {opt.price && (
                      <div className="u-priceListText flex items-center gap-2">
                        {opt.duration && <p>{opt.duration}</p>}
                        <p>{opt.price}</p>
                      </div>
                    )}

                    {/* 複数パターン */}
                    {opt.items && opt.items.map((sub, j) => (
                      <div key={j} className="u-priceListText flex items-center gap-2 mb-1">
                        {sub.duration && <p>{sub.duration}</p>}
                        <p>{sub.price}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
