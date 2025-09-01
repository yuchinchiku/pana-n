// src/components/pages/StoreGallery.tsx
"use client";
import Image from "next/image";
import { StoreDetail } from "@/data/storeDetails";

type Props = { store: StoreDetail };

export default function StoreGallery({ store }: Props) {
  if (!store.gallery || store.gallery.length === 0) return null;

  return (
    <section className="u-gallery mx-auto my-10 md:my-32">
      <div className="u-gallery-wrapper md:flex flex-wrap gap-4">
        {store.gallery.map((img, idx) => {
          // 縦長・横長で幅を変える
          const widthClass = img.type === "portrait" ? "w-[51.7%] md:w-[34%]" : "w-[76%] md:w-[51%]";
          const heightClass = img.type === "portrait" ? "h-[291px] md:h-[587px]" : "h-[190px] md:h-[418px]";

          return (
            <div key={idx} className={`relative u-fade-in ${widthClass} ${heightClass} ${img.className}`}>
              <Image
                src={`/images/salon/${store.id}/${img.src}`}
                alt={`gallery-${idx}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
