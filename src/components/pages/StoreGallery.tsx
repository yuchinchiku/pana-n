// src/components/pages/StoreGallery.tsx
"use client";
import Image from "next/image";
import { StoreDetail } from "@/data/storeDetails";

type Props = { store: StoreDetail };

export default function StoreGallery({ store }: Props) {
  if (!store.gallery || store.gallery.length === 0) return null;

  return (
    <section className="mx-auto my-32">
      <div className="flex flex-wrap gap-4">
        {store.gallery.map((img, idx) => {
          // 縦長・横長で幅を変える
          const widthClass = img.type === "portrait" ? "w-[34%]" : "w-[51%]";
          const heightClass = img.type === "portrait" ? "h-[587px]" : "h-[418px]";

          return (
            <div key={idx} className={`relative ${widthClass} ${heightClass} ${img.className}`}>
              <Image
                src={`/images/salon/${store.id}/${img.src}`}
                alt={`gallery-${idx}`}
                fill
                className="object-cover rounded"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
