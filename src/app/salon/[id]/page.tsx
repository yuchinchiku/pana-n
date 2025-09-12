// src/app/salon/[id]/page.tsx
import type { Metadata } from "next";
import { storeDetails } from "@/data/storeDetails";
import PageSecTitleHor from "@/components/pages/PageSecTitleHor";
import PageIntro from "@/components/pages/PageIntro";
import Notify from "@/components/pages/Notify";
import StoreInfo from "@/components/pages/StoreInfo";
import StoreMenu from "@/components/pages/StoreMenu";
import StoreGallery from "@/components/pages/StoreGallery";
import StoreList from "@/app/salon/StoreList";
import ButtonBack from '@/components/ButtonBack';
import { stores } from "@/data/stores";
import ScrollAnimation from "@/components/ScrollAnimation";
import HeroSection from './HeroSection';


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
    <div className={`u-${id} u-pageSalonDetails lg:ml-[185px] lg:mr-20`}>
      <ScrollAnimation />
      <HeroSection title={store.title} subTitle={store.subTitle} buttonHref={store.buttonHref} />
      <PageIntro lead={store.lead} subLead={store.subLead} desc={store.desc} />
      {store.notify && <Notify title={store.notify.title} desc={store.notify.desc} />}
      <StoreInfo store={store} />
      {store.menu && store.menu.length > 0 && <StoreMenu store={store} />}
      {store.gallery && store.gallery.length > 0 && <StoreGallery store={store} />}


      {otherStores.length > 0 && (
        <section className="u-pageSalonDetails-salonList max-w-[1020px] lg:w-[82.3%] mt-20 lg:mt-40 lg:ml-[15%] lg:mr-[9%] mb-20">
          <PageSecTitleHor mainTitle="その他の店舗" subTitle="others salons" />
          <div className="px-5 lg:px-0">
            <StoreList stores={otherStores} />
          </div>
        </section>
      )}
      <ButtonBack
        href="/salon"
        text="店舗一覧へ"
        className="u-bottun-md u-fade-in mt-10 lg:mt-16 mb-32 lg:mb-60 mx-auto"
      />
    </div>
  );
}

