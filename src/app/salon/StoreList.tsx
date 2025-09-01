"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Store } from "@/data/stores";

type Props = {
  stores: Store[];
};

export default function StoreList({ stores }: Props) {
  const router = useRouter();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-6 md:gap-y-10 items-start justify-center">
      {stores.map((store, idx) => (
        <Link href={`/salon/${store.href}`} key={idx} className="u-store-link u-fade-in">
          <div className="u-store-thumb relative w-full aspect-[16/10] overflow-hidden">
            <Image
              src={`/images/salon/thumb_${store.image}.jpg`}
              alt={store.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 280px, 384px"
            />
          </div>
          <div className="u-store-text relative shippori font-medium text-left mt-2 md:mt-4 text-black">
            <div className="min-h-[70px]">
              <div className="u-store-textHead md:flex justify-between pl-2 md:pl-4 relative">
                <h3
                  className="text-base md:text-lg"
                  dangerouslySetInnerHTML={{ __html: store.cat }}
                />

              </div>
              <p className="text-sm block mt-[6px] md:mt-2 pl-2 md:pl-4">
                {store.name}
              </p>
            </div>

              {store.hasButton && (
                <div className="u-button-wrapper text-center">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(`/salon/${store.href}`);
                    }}
                    className="u-button u-button-store u-button-store-pages text-left md:absolute md:top-0 md:right-4 w-[calc(100%-0.5rem)] max-w-[104px] h-[29px] border border-pana pt-[2px] pl-[4px] mt-4 md:mt-0 mx-auto md:mx-0"
                  >
                    <p className="u-button-text shippori font-medium text-sm">
                      店舗詳細
                    </p>
                  </button>
                </div>
              )}
          </div>
        </Link>
      ))}
    </div>
  );
}
