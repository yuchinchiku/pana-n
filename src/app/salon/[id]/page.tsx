// src/app/salon/[id]/page.tsx
import type { Metadata } from "next";
import { storeDetails } from "@/data/storeDetails";
import PageHeroHor from "@/components/pages/PageHeroHor";
import PageIntro from "@/components/pages/PageIntro";
import Notify from "@/components/pages/Notify";
import StoreInfo from "@/components/pages/StoreInfo";
import StoreMenu from "@/components/pages/StoreMenu";
import StoreGallery from "@/components/pages/StoreGallery";
import StoreList from "@/app/salon/StoreList";
import { Store } from "@/data/stores";
import { stores } from "@/data/stores";


import '@/styles/pages/salon/salonDetails.scss';

type Props = {
  params: Promise<{ id: string }>; // 非同期で受け取る
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params; // awaitで解決
  const store = storeDetails.find((s) => s.id === id);

  return {
    title: store ? `${store.name} | 琉球パナ・ン` : "店舗情報 | 琉球パナ・ン",
    description: store?.lead ?? "琉球パナ・ンの店舗情報をご覧ください。",
  };
}

export default async function StoreDetailPage({ params }: Props) {
  const { id } = await params;
  const store = storeDetails.find((s) => s.id === id);
  if (!store) return <p>店舗情報が見つかりません。</p>;

  // StoreList に渡すデータは stores から取得
  const otherStores = stores.filter((s) => s.href !== id);

  return (
    <div className={`u-${id} u-pageSalonDetails md:ml-[185px] md:mr-20`}>
      <PageHeroHor title={store.name} subTitle={store.subTitle} />
      <PageIntro lead={store.lead} subLead={store.subLead} desc={store.desc} />
      {store.notify && <Notify title={store.notify.title} desc={store.notify.desc} />}
      <StoreInfo store={store} />
      <StoreMenu store={store} />
      <StoreGallery store={store} />

      {otherStores.length > 0 && (
        <section className="mt-16">
          <h2 className="text-xl font-bold mb-6">その他の店舗</h2>
          <StoreList stores={otherStores} />
        </section>
      )}
    </div>
  );
}

