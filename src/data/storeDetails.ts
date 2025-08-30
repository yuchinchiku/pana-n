// src/data/storeDetails.ts
export type MenuOptionItem = {
  price: string;
  duration?: string;
};

export type MenuOption = {
  label?: string;          // 「おすすめ」「お急ぎの方」など任意
  items?: MenuOptionItem[]; // 複数パターンを入れる場合
  price?: string;           // 単一パターンの場合
  duration?: string;        // 単一パターンの場合
};


export type MenuItem = {
  name: string;           // メニュー名
  description?: string | string[];  // 説明文
  image?: string;         // 画像ファイル名（public/images/menu/～に置く）
  options: MenuOption[];  // 金額・時間・ラベルなどのバリエーション
};

export type GalleryImage = {
  src: string;
  type?: "portrait" | "landscape";
  className: string;
};

export type StoreDetail = {
  id: string;
  name: string;
  subTitle: string;
  lead: string;
  subLead: string;
  desc: string;
  mapUrl: string;
  table: { label: string; items: { value: string, note?: string, mapUrl?:string }[] }[];
  notify?: { title: string; desc: string };
  menu?: MenuItem[];
  gallery?: GalleryImage[];
};

export const storeDetails: StoreDetail[] = [
  {
    id: "hogushigatten-nahakume",
    name: "ほぐしガッテン那覇久米店",
    subTitle: "hogushigatten-nahakume",
    lead: "歴史が息づく那覇久米で、訪れる人の内なる輝きを呼び覚ます",
    subLead: "Rediscover your inner light in historic Naha Kume.",
    desc: `
      <p>1985年に石垣島で鍼灸マッサージ治療院を開院の後、<br class='hidden md:block'>以上地元企業として県内多数リゾートホテルや空港内のリラクゼーション業に携わる中、地域の皆様に感謝の気持ちで恩返しをしたいという想いで直営店の「ほぐしガッテン」が誕生しました。</p>
      <p>本島第1号店となる「ほぐしガッテン那覇久米店」で出逢う皆様に「確かな高い技術力と最高品質の癒し」をご提供し、明日への活力へのお手伝いをして参ります。</p>
      <p>是非、至福のひとときをご堪能ください。</p>
    `,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9245.034947781278!2d127.67193033061632!3d26.213161379175247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e569e5117a20cb%3A0x883d6d847a299fde!2z44G744GQ44GX44Ks44OD44OG44Oz6YKj6KaH5LmF57Gz5bqX!5e0!3m2!1sja!2sjp!4v1756470146782!5m2!1sja!2sjp",
    table: [
      { label: "住所", items: [{ value: "〒900-0033 沖縄県那覇市久米1-14-8-1階", mapUrl: 'https://maps.app.goo.gl/m6PgXBtFBaDfzrU77' }] },
      { label: "電話番号", items: [{ value: "098-943-1213" }] },
      { label: "営業時間", items: [{ value: "11:00 AM～ 19:00 PM", note:"※当日の営業時間はInstagram のストーリーズで確認、またはお電話にてお問い合わせください" }] },
      { label: "駐車場", items: [{ value: "専用駐車場はございません。<br>近隣の有料コインパーキングのご利用をお願いいたします。" }] },
      { label: "アクセス", items: [{ value: "ゆいレール「旭橋駅」より徒歩10分" }] },
      { label: "お支払い方法", items: [{ value: "現金 / 各クレジットカード / 各電子マネー" }] },
      { label: "SNS", items: [{ value: "<a href='https://www.instagram.com/hogushigatten_nahakumeten/' target='_blank' class='u-link-blank underline'>https://www.instagram.com/hogushigatten_nahakumeten/</a>" }] },
    ],
    notify: {
      title: "【改定のお知らせ】",
      desc: "2025年7月1日よりメニュー及び価格の見直しをさせていただきます。",
    },
    menu: [
      {
        name: "元祖琉球マッサージ「琉球ほぐし手（てぃ）」",
        description: [
          "琉球空手と沖縄伝統舞踊の手の技を取り入れた沖縄らしさを追求した秘伝のマッサージです。",
          "凝り・むくみ・慢性疲労など日頃のたまった疲れを琉球ほぐしの達人が首下から足裏までしっかりともみほぐします。",
        ],
        image: "img_ganso",
        options: [
          {
            label: "お急ぎの方",
            items: [
              { duration: "20分", price: "2,300円（税込2,530円）" },
              { duration: "30分", price: "3,500円（税込3,850円）" },
            ],
          },
          {
            label: "オススメ",
            items: [
              { duration: "40分", price: "4,600円（税込5,060円）" },
              { duration: "50分", price: "5,750円（税込6,325円）" },
            ],
          },
          {
            label: "満足度No,1",
            items: [
              { duration: "60分", price: "6,900円（税込7,590円）" },
            ],
          },
        ],
      },
      {
        name: "足つぼ",
        description: "足裏から全身の血流を促進",
        image: "foot.jpg",
        options: [
          {
            label: "お急ぎの方",
            items: [
              { duration: "20分", price: "2,300円（税込2,530円）" },
              { duration: "30分", price: "3,500円（税込3,850円）" },
            ],
          },
        ],
      },
    ],
    gallery: [
      { src: "gallery-1.jpg", type: "portrait", className: "md:mr-20 md:ml-10" },
      { src: "gallery-2.jpg", type: "landscape", className: "md:mt-60 md:mr-0 md:ml-auto" },
      { src: "gallery-3.jpg", type: "landscape", className: "mt-20" },
      { src: "gallery-4.jpg", type: "portrait", className: "md:mt-52 md:mr-10 md:ml-auto" },
      { src: "gallery-5.jpg", type: "portrait", className: "md:-mt-40 md:mr-20 md:ml-10" },
      { src: "gallery-6.jpg", type: "landscape", className: "md:mt-20 md:mr-0 md:ml-auto" },
    ],

  },
  // 他の店舗も同じ形式で追加
];
