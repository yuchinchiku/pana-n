// src/components/pages/StoreInfo.tsx
"use client";
import { StoreDetail } from "@/data/storeDetails";
import PageSecTitleHor from "@/components/pages/PageSecTitleHor";
import '@/styles/component/button.scss';

type Props = { store: StoreDetail };

export default function StoreInfo({ store }: Props) {
  return (
    <section className="max-w-[1020px] lg:w-[82.3%] lg:ml-[15%] lg:mr-[9%]">
      <PageSecTitleHor mainTitle="店舗情報" subTitle="salon info" />
      <div className="lg:ml-[8%] px-5 lg:px-0">
        <div className="u-fade-in w-full h-[250px] lg:h-[450px]">
          <iframe
            src={store.mapUrl}
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <ol className="w-full mt-10">
          {store.table.map((row, idx) => (
            <li key={idx} className="u-fade-in lg:flex gap-4 lg:gap-6 border-b border-pana-gray02 py-4">
              <p className="shippori text-white text-center font-medium w-[140px] h-8 lg:h-10 flex-shrink-0 bg-pana pt-[1px] lg:py-1 mb-2 lg:mb-0">
                {row.label}
              </p>
              <div className="px-1 lg:px-0 flex flex-col gap-2">
                {row.items.map((item, i) => (
                  <div key={i}>
                    <div className="lg:flex items-center gap-10">
                      <p className="shippori text-base py-1" dangerouslySetInnerHTML={{ __html: item.value }} />
                      {row.label === "住所" && store.mapUrl && (
                        <a
                          href={store.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="u-button u-button-map block w-[150px] h-[45px] border border-pana py-1 pl-2 mt-2 lg:mt-0"
                        >
                          <p className='u-button-text shippori'>Google Maps</p>
                        </a>
                      )}
                    </div>
                    {item.note && <p className="shippori text-sm py-1">{item.note}</p>}
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}
