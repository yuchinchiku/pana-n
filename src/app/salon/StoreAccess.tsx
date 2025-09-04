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
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-6 gap-y-6 lg:gap-y-10 items-start justify-center">
      {stores.map((store, idx) => (
        <Link href={`/salon/${store.href}`} key={idx} className="u-store-link">
          <div className="u-store-thumb relative w-full aspect-[16/10] overflow-hidden">
            <Image
              src={`/images/salon/thumb_${store.image}.jpg`}
              alt={store.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 280px, 384px"
            />
          </div>
          <div className="u-store-text relative shippori font-medium text-left mt-2 lg:mt-4 text-black">
            <div className="u-store-textHead lg:flex justify-between pl-2 lg:pl-4 relative">
              <h3
                className="text-base lg:text-lg"
                dangerouslySetInnerHTML={{ __html: store.cat }}
              />

            </div>
            <p className="text-sm block mt-[6px] lg:mt-2 pl-2 lg:pl-4">
              {store.name}
            </p>

              {store.hasButton && (
                <div className="text-center">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(`/salon/${store.href}`);
                    }}
                    className="u-button u-button-store u-button-store-pages text-left lg:absolute lg:top-0 lg:right-4 w-[calc(100%-0.5rem)] max-w-[104px] h-[29px] border border-pana pt-[2px] pl-[4px] mt-4 lg:mt-0 mx-auto lg:mx-0"
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
