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
  title: string;
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
  //=====パナ・ン南ぬ島石垣空港店===============================
  {
    id: "painushima",
    title: "パナ・ン南ぬ島石垣空港店",
    name: "パナ・ン南ぬ島石垣空港店",
    subTitle: "painushima",
    lead: "空の玄関で出会う、唯一無二の「元祖琉球マッサージ」体験",
    subLead: "Rediscover your inner light in historic Naha Kume.",
    desc: `
      <p>「旅のはじまりも、終わりも、特別な癒しで彩りたい。」</p>
      <p>パナ・ン南ぬ島石垣空港店は、空港内にあるとは思えない静けさと、本格的な技術で、琉球の想いを伝える“癒しの拠点”です。</p>
      <p>パナ・ン南ぬ島石垣空港店でしか体験できない「元祖琉球マッサージ」は、琉球空手や八重山舞踊の所作を取り入れた秘伝の技法。</p>
      <p>旅の疲れをしっかりと解きほぐしながら、心までそっと包み込みます。</p>
      <p>石垣にいらっしゃる際は、是非お立ち寄りください。</p>
    `,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58137.218204395445!2d124.2044884!3d24.3960443!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345fe3e0e4031c0d%3A0x6cc37913104ccac!2z44OR44OK44O744Oz5Y2X44Gs5bO255-z5Z6j56m65riv5bqX!5e0!3m2!1sja!2sjp!4v1756561037620!5m2!1sja!2sjp",
    table: [
      { label: "住所", items: [{ value: "〒907-0242 沖縄県石垣市白保1960−104−1 石垣空港2F", mapUrl: 'https://maps.app.goo.gl/4KtuHdkzpD4ScF9z7' }] },
      { label: "電話番号", items: [{ value: "098-087-0381" }] },
      { label: "営業時間", items: [{ value: "09:00 AM～20:00 PM" }] },
      { label: "駐車場", items: [{ value: "空港内駐車場をご利用ください。" }] },
      { label: "アクセス", items: [{ value: "パナ・ン南ぬ島石垣空港（石垣空港）の中央2階" }] },
      { label: "お支払い方法", items: [{ value: "現金 / 各クレジットカード / 各電子マネー" }] },
    ],
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
              { duration: "30分", price: "3,450円（税込3,795円）" },
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
        name: "ぬちぐすい足ツボケア",
        description: "ハイビスカスエキスの足浴でスッキリした後、オイルで足裏から膝下までをもみほぐします。旅で疲れた足のむくみをスッキリ解消！",
        image: "img_ashitsubo",
        options: [
          {
            items: [
              { duration: "20分", price: "2,300円（税込2,530円）" },
              { duration: "30分", price: "3,450円（税込3,795円）" },
            ],
          },
        ],
      },
      {
        name: "てぃんがーらヘッドマッサージ",
        description: "とにかく頭のもやもやをスッキリさせます。星空に溶け込むようにリラックスへと導きます。",
        image: "img_head-massage",
        options: [
          {
            items: [
              { duration: "20分", price: "2,300円（税込2,530円）" },
              { duration: "30分", price: "3,450円（税込3,795円）" },
            ],
          },
        ],
      },
    ],
    gallery: [
      { src: "gallery-1.jpg", type: "portrait", className: "u-gallery-1 lg:mr-20 lg:ml-10" },
      { src: "gallery-2.jpg", type: "landscape", className: "u-gallery-2 lg:mt-60 lg:mr-0 lg:ml-auto" },
      { src: "gallery-3.jpg", type: "landscape", className: "u-gallery-3 mt-20" },
    ],

  },

  //=====ほぐしガッテン那覇久米店===============================
  {
    id: "hogushigatten-nahakume",
    title: "ほぐしガッテン<br class='lg:hidden'>那覇久米店",
    name: "ほぐしガッテン那覇久米店",
    subTitle: "hogushigatten-nahakume",
    lead: "歴史が息づく那覇久米で、訪れる人の内なる輝きを呼び覚ます",
    subLead: "Rediscover your inner light in historic Naha Kume.",
    desc: `
      <p>1985年に石垣島で鍼灸マッサージ治療院を開院の後、<br class='hidden lg:block'>以上地元企業として県内多数リゾートホテルや空港内のリラクゼーション業に携わる中、地域の皆様に感謝の気持ちで恩返しをしたいという想いで直営店の「ほぐしガッテン」が誕生しました。</p>
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
      { label: "SNS", items: [{ value: "<a href='https://www.instagram.com/hogushigatten_nahakumeten/' target='_blank' class='u-link-blank underline'>Instagram</a>" }] },
    ],
    notify: {
      title: "【改定のお知らせ】",
      desc: "2025年7月1日よりメニュー及び価格の見直しをさせていただきます。",
    },
    gallery: [
      { src: "gallery-1.jpg", type: "portrait", className: "u-gallery-1 lg:mr-20 lg:ml-10" },
      { src: "gallery-2.jpg", type: "landscape", className: "u-gallery-2 lg:mt-60 lg:mr-0 lg:ml-auto" },
      { src: "gallery-3.jpg", type: "landscape", className: "u-gallery-3 mt-20" },
      { src: "gallery-4.jpg", type: "portrait", className: "u-gallery-4 lg:mt-52 lg:mr-10 lg:ml-auto" },
      { src: "gallery-5.jpg", type: "portrait", className: "u-gallery-5 lg:-mt-40 lg:mr-20 lg:ml-10" },
      { src: "gallery-6.jpg", type: "landscape", className: "u-gallery-6 lg:mt-20 lg:mr-0 lg:ml-auto" },
    ],

  },


  //=====ほぐしガッテン真栄里店 & パナ・ン琉球スパ===============================
  {
    id: "hogushigatten-maezato",
    title: "ほぐしガッテン<br class='lg:hidden'>真栄里店 & パナ・ン琉球スパ",
    name: "ほぐしガッテン真栄里店 & パナ・ン琉球スパ",
    subTitle: "hogushigatten-maezato",
    lead: "石垣島真栄里で、訪れる人の心と体に深い安らぎを届ける",
    subLead: "In Maesato, Ishigaki Island, we bring deep relaxation to body and mind.",
    desc: `
      <p> 1985年に石垣島で鍼灸治療院を開院ののち25年以上地元企業として県内多数リラクゼーション業に携わっている中で地域の皆様へ感謝と恩返しをしたいという想いから「ほぐしガッテン」「パナ・ン琉球スパ」が誕生いたしました。</p>
      <p>今では地元の方のみならず観光でご来島の方にも知っていただき大変嬉しく思っております。</p>
      <p>私たちは皆さまへ「最高品質のほぐしと癒し」を通して「心とからだの活力へのお手伝い」をさせていただきたく、確かな技術力、心から癒される環境づくりに日々取り組んで参ります、どうぞごゆっくりお過ごし下さいませ。</p>
    `,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d116302.54952720816!2d124.1303062!3d24.3654817!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34600b6e4bf99495%3A0xad008d36428e3053!2z44G744GQ44GX44Ks44OD44OG44Oz55yf5qCE6YeM5bqX77yP44OR44OK44O744Oz55CJ55CD44K544OR!5e0!3m2!1sja!2sjp!4v1756558970508!5m2!1sja!2sjp",
    table: [
      { label: "住所", items: [{ value: "〒907-0002 沖縄県石垣市真栄里309-15ハイネスコート8階", note:"※インターホンにて「802」のお呼び出しをお願いします", mapUrl: 'https://maps.app.goo.gl/yQy4qmimuPqrHDPd9' }] },
      { label: "電話番号", items: [{ value: "098-087-6387" }] },
      { label: "営業時間", items: [{ value: "09:00 AM～21:00 PM" }] },
      { label: "駐車場", items: [{ value: "駐車場有り<br>建物裏手に回って頂き、右側手前、車止めに黄色いプレート「ほぐしガッテン」とある所にお止め下さい。" }] },
      { label: "アクセス", items: [{ value: "石垣空港から車で約25分" }] },
      { label: "お支払い方法", items: [{ value: "現金 / 各クレジットカード / 各電子マネー" }] },
      { label: "SNS", items: [{ value: "<a href='https://www.instagram.com/hogushigatten_ishigakijima/' target='_blank' class='u-link-blank underline'>Instagram</a>" }] },
    ],
    notify: {
      title: "【改定のお知らせ】",
      desc: "2025年7月1日よりメニュー及び価格の見直しをさせていただきます。",
    },
    menu: [
      {
        name: "頭爽快の秘技「頭のもみほぐしコース」",
        description: [
          "頭頂部～側頭部、首・肩をしっかりマッサージすることで深い眠りに誘います。",
          "パソコン・スマホの疲れが溜まっている方、睡眠不足でお悩みの方へおすすめです。満足度100％に自信有り。",
          "極上な頭の秘技マッサージを是非ご勘能ください。",
        ],
        image: "img_head-massage2",
        options: [
          {
            items: [
              { duration: "40分", price: "XXX円（税込XXX円）" },
              { duration: "60分", price: "XXX円（税込XXX円）" },
            ],
          },
        ],
      },
      {
        name: "歩き疲れた足を軽やかに「足ツボほぐしコース」",
        description: [
          "膝下～足裏までしっかりとほぐしマッサージします。",
          "足ツボを押すことで全身の筋肉が緩み、疲れた足を軽やかに癒します。",
        ],
        image: "img_ashitsubo",
        options: [
          {
            items: [
              { duration: "40分", price: "XXX円（税込XXX円）" },
              { duration: "60分", price: "XXX円（税込XXX円）" },
            ],
          },
        ],
      },
      {
        name: "究極こねり技「全身もみほぐしコース」",
        description: [
          "筋肉をこねりながらマッサージすることにより、つらいコリもすばやくほぐれます。",
          "ほぐれた状態が通常より長く持続し、マッサージも快適にお過ごしいただけます。",
        ],
        image: "img_momihogushi",
        options: [
          {
            items: [
              { duration: "40分", price: "XXX円（税込XXX円）" },
              { duration: "60分", price: "XXX円（税込XXX円）" },
              { duration: "80分", price: "XXX円（税込XXX円）" },
              { duration: "100分", price: "XXX円（税込XXX円）" },
            ],
          },
        ],
      },
      {
        name: "満足度No1「全身＆頭のもみほぐしコース」",
        description: [
          "お客様満足度No1マッサージメニューです。",
          "100分以上のロングマッサージコースは特にオススメ！至極の癒しを是非ご体感ください。",
        ],
        image: "img_fullmassage",
        options: [
          {
            items: [
              { duration: "60分", price: "XXX円（税込XXX円）" },
              { duration: "80分", price: "XXX円（税込XXX円）" },
              { duration: "100分", price: "XXX円（税込XXX円）" },
            ],
          },
        ],
      },
    ],
    gallery: [
      { src: "gallery-1.jpg", type: "portrait", className: "u-gallery-1 lg:mr-20 lg:ml-10" },
      { src: "gallery-2.jpg", type: "landscape", className: "u-gallery-2 lg:mt-60 lg:mr-0 lg:ml-auto" },
      { src: "gallery-3.jpg", type: "landscape", className: "u-gallery-3 mt-20" },
      { src: "gallery-4.jpg", type: "portrait", className: "u-gallery-4 lg:mt-52 lg:mr-10 lg:ml-auto" },
      { src: "gallery-5.jpg", type: "portrait", className: "u-gallery-5 lg:-mt-40 lg:mr-20 lg:ml-10" },
      { src: "gallery-6.jpg", type: "landscape", className: "u-gallery-6 lg:mt-20 lg:mr-0 lg:ml-auto" },
    ],
  },

  //=====ほぐしガッテン大森東口店（東京品川）===============================
  {
    id: "hogushigatten-omori",
    title: "ほぐしガッテン<br class='lg:hidden'>大森東口店（東京品川）",
    name: "ほぐしガッテン大森東口店（東京品川）",
    subTitle: "hogushigatten-omori",
    lead: "東京・大森で、唯一無二の癒し体験を。",
    subLead: "In Omori, Tokyo—experience unparalleled relaxation.",
    desc: `
      <p> ほぐしガッテンの東京初店舗、そして唯一の東京店舗である大森東口店。</p>
      <p>肩こりや全身の疲れ、日々のストレスを解きほぐすだけでなく、心までゆったりとほぐれる贅沢なひとときをご体験いただけます。</p>
      <p>訪れるすべての方に、石垣島発の本格的な癒しを東京でお届けいたします。</p>
    `,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.5848843354306!2d139.7296273!3d35.5886365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018603281b40be3%3A0x3b399e13f107c9e4!2z44G744GQ44GX44Ks44OD44OG44OzIOWkp-ajruadseWPo-W6lw!5e0!3m2!1sja!2sjp!4v1756559508723!5m2!1sja!2sjp",
    table: [
      { label: "住所", items: [{ value: "〒140-0013 東京都品川区南大井6-28-1 MSビル4F", mapUrl: 'https://maps.app.goo.gl/Kc4tC5HrZxmv7U2k6' }] },
      { label: "電話番号", items: [{ value: "03-6404-8778" }] },
      { label: "営業時間", items: [{ value: "10:00 AM〜23:00 PM" }] },
      { label: "駐車場", items: [{ value: "専用駐車場はございません。<br>近隣の有料コインパーキングのご利用をお願いいたします。" }] },
      { label: "アクセス", items: [{ value: "大森駅から徒歩2分（140m）" }] },
      { label: "お支払い方法", items: [{ value: "現金 / 各クレジットカード / 各電子マネー" }] },
    ],
    menu: [
      {
        name: "頭爽快の秘技「頭のもみほぐしコース」",
        description: [
          "頭頂部～側頭部、首・肩をしっかりマッサージすることで深い眠りに誘います。",
          "パソコン・スマホの疲れが溜まっている方、睡眠不足でお悩みの方へおすすめです。満足度100％に自信有り。",
          "極上な頭の秘技マッサージを是非ご勘能ください。",
        ],
        image: "img_head-massage2",
        options: [
          {
            items: [
              { duration: "40分", price: "XXX円（税込XXX円）" },
              { duration: "60分", price: "XXX円（税込XXX円）" },
            ],
          },
        ],
      },
      {
        name: "究極こねり技「全身もみほぐしコース」",
        description: [
          "筋肉をこねりながらマッサージすることにより、つらいコリもすばやくほぐれます。",
          "ほぐれた状態が通常より長く持続し、マッサージも快適にお過ごしいただけます。",
        ],
        image: "img_momihogushi",
        options: [
          {
            items: [
              { duration: "40分", price: "XXX円（税込XXX円）" },
              { duration: "60分", price: "XXX円（税込XXX円）" },
              { duration: "80分", price: "XXX円（税込XXX円）" },
              { duration: "100分", price: "XXX円（税込XXX円）" },
            ],
          },
        ],
      },
      {
        name: "満足度No1「全身＆頭のもみほぐしコース」",
        description: [
          "お客様満足度No1マッサージメニューです。",
          "100分以上のロングマッサージコースは特にオススメ！至極の癒しを是非ご体感ください。",
        ],
        image: "img_fullmassage",
        options: [
          {
            items: [
              { duration: "60分", price: "XXX円（税込XXX円）" },
              { duration: "80分", price: "XXX円（税込XXX円）" },
              { duration: "100分", price: "XXX円（税込XXX円）" },
            ],
          },
        ],
      },
    ],
  },

  //=====星のや沖縄スパ（星野リゾート星のや沖縄）===============================
  {
    id: "hoshino-okinawa",
    title: "星のや沖縄スパ<span class='text-base lg:text-xl block lg:inline'>（星野リゾート星のや沖縄）</span>",
    name: "星のや沖縄スパ（星野リゾート星のや沖縄）",
    subTitle: "hoshino-okinawa",
    lead: "沖縄の自然に包まれ、心と体を整える特別なスパ体験。",
    subLead: "A unique spa experience in Okinawa, where the natural surroundings restore body and mind.",
    desc: `
      <p>星のや沖縄スパでは、透き通る海、豊かな緑、そして沖縄の気候や植物の力を活かしたトリートメントをご提供しています。</p>
      <p>自然の恵みを取り入れたメニューは、心と体にエネルギーを与え、英気を満たす時間をお届けします。</p>
      <p>訪れるすべての方に、沖縄ならではの穏やかで贅沢な癒しのひとときをお楽しみいただけます。</p>
    `,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14292.639319927574!2d127.7145061!3d26.4183183!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e517c4e4e9ef7b%3A0xebdbc928ed63c0af!2z5pif44Gu44KE5rKW57iE!5e0!3m2!1sja!2sjp!4v1756559732881!5m2!1sja!2sjp",
    table: [
      { label: "住所", items: [{ value: "〒904-0327 沖縄県中頭郡読谷村儀間474", mapUrl: 'https://maps.app.goo.gl/msqLwdfSKKWHVwnL8' }] },
      { label: "電話番号", items: [{ value: "050-3134-8091" }] },
      { label: "営業時間", items: [{ value: "14:30 PM～22:30 PM<br>※最終受付 20:00 PM" }] },
      { label: "駐車場", items: [{ value: "専用駐車場はございません。<br>近隣の有料コインパーキングのご利用をお願いいたします。" }] },
      { label: "アクセス", items: [{ value: "那覇空港より沖縄自動車道で約60分（沖縄南ICを降りて嘉手納方面へ）<br>一般道をご利用の場合は国道58号線で約70分。" }] },
      { label: "お支払い方法", items: [{ value: "現金 / 各クレジットカード / 各電子マネー" }] },
      { label: "ご予約詳細", items: [{ value: "<a href='https://hoshinoresorts.com/ja/hotels/hoshinoyaokinawa/activities/13933/' target='_blank' class='u-link-blank underline'>星のや沖縄スパ</a>" }] },
    ],
    menu: [
      {
        name: "スパメニュー「波　NAMI」",
        description: [
          "＜背中・脚・腕・デコルテ・頭皮＞",
          "水溶性のトリートメントジェルや多くの美容成分を含むオイルでお顔をのぞく全身の肌を整えながら、リラックスへと導くボディートリートメントです。",
        ],
        image: "img_hoshinoOki-spa",
        options: [
          {
            items: [
              { duration: "90分", price: "25,300円（税込）" },
            ],
          },
        ],
      },
      {
        name: "スパメニュー「陽　HARU」",
        description: [
          "＜背中・脚・腕・デコルテ・頭皮＞",
          "やさしい月桃の香りに癒されながら、琉球空手と琉球舞踊の動きを用いた手技で、全身を緩めるボディートリートメントです。",
        ],
        image: "img_hoshinoOki-spa",
        options: [
          {
            items: [
              { duration: "90分", price: "25,300円（税込）" },
            ],
          },
        ],
      },
      {
        name: "スパメニュー「渚　NAGISA」",
        description: [
          "＜背中パック・脚・背中・腕・デコルテ・頭皮＞",
          "お背中に発熱性の海藻パックを施し、お身体を温めながら行う全身のボディトリートメントです。",
          "より深いリラックスへと導き、心地よいひとときをお過ごし頂けます。",
        ],
        image: "img_hoshinoOki-spa",
        options: [
          {
            items: [
              { duration: "90分", price: "31,196円（税込）" },
            ],
          },
        ],
      },
      {
        name: "スパメニュー「汐　SHIO」",
        description: [
          "＜背中パック・脚・背中・腕・デコルテ・頭皮＞",
          "お背中に海泥ミネラルパックを施しながら行う、全身のボディトリートメントです。",
          "お肌を滑らかに整えたのちにリズミカルなストロークで軽快に仕上げます。",
        ],
        image: "img_hoshinoOki-spa",
        options: [
          {
            items: [
              { duration: "90分", price: "31,196円（税込）" },
            ],
          },
        ],
      },
      {
        name: "スパメニュー「月　TSUKI」",
        description: [
          "＜背中・脚・腕・デコルテ・頭皮＞ ",
          "沖縄の代表的なハーブ「月桃」をもち米粉と共に練って蒸しあげた「月桃玉」をお身体にあてながら行う全身のボディトリートメントです。",
          "温かく香りのよい「月桃玉」で、全身を心地よく和らげてまいります。",
          "※開始一時間前までにご予約をお願いします。",
        ],
        image: "img_hoshinoOki-spa",
        options: [
          {
            items: [
              { duration: "90分", price: "31,196円（税込）" },
            ],
          },
        ],
      },
      {
        name: "スパメニュー「凪　NAGI」",
        description: [
          "＜背中・脚・腕・デコルテ・頭皮・顔（クレンジング＋オイルトリートメント）＞ ",
          "月桃エキスやアロエエキスなどの美容成分とアルガンオイルで明るいお肌へと導きます。",
          "全身のトリートメントとともに、深くリラックスしていただけるメニューです。",
        ],
        image: "img_hoshinoOki-spa",
        options: [
          {
            items: [
              { duration: "90分", price: "26,400円（税込）" },
            ],
          },
        ],
      },
      {
        name: "スパメニュー「雫　SHIZUKU」",
        description: [
          "＜背中・脚・腕・デコルテ・頭皮・顔（クレンジング＋オイルトリートメント＋マスク）＞ ",
          "お背中から身体を丁寧にほぐし、お顔には月桃ローションとコラーゲンマスクを行い、アルガンオイルでふっくらとお肌を仕上げる、全身のトリートメントです。",
        ],
        image: "img_hoshinoOki-spa",
        options: [
          {
            items: [
              { duration: "90分", price: "32,670円（税込）" },
            ],
          },
        ],
      },
      {
        name: "日本の伝統手技「指圧マッサージ」",
        description: [
          "日本の伝統的な指圧に、琉球王家に伝わる空手と舞踊の型を組み合わせた、特徴的な手技による指圧マッサージです。",
          "※客室のみになります。",
        ],
        image: "img_hoshinoOki-hogushi",
        options: [
          {
            items: [
              { duration: "60分", price: "14,520円（税込）" },
            ],
          },
        ],
      },
      {
        name: "日本の伝統手技「マタニティ－マッサージ」",
        description: [
          "ご妊娠中のお身体の疲れを、着衣のままで丁寧にほぐすマッサージメニューです。",
          "16週目以降、27週目未満で経過順調な方は、お受けいただけます。",
        ],
        image: "img_hoshinoOki-hogushi",
        options: [
          {
            items: [
              { duration: "90分", price: "22,990円（税込）" },
            ],
          },
        ],
      },
      {
        name: "日本の伝統手技「癒　YU」",
        description: [
          "東洋医学に精通した施術師が、東洋医学の伝統的な問診や視診、脈診に基づき、お客様の体質・体調に合わせた鍼または灸による施術で、人間本来の自然治癒力を引き出し、本来の身体の調子へと導きます。",
          "※こちらのメニューは日本語でのご案内のみです。",
        ],
        image: "img_hoshinoOki-hogushi",
        options: [
          {
            items: [
              { duration: "150分", price: "42,350円（税込）" },
            ],
          },
        ],
      },
    ]
  },

  //=====星のや竹富島スパ（星野リゾート星のや竹富島）===============================
  {
    id: "hoshino-taketomi",
    title: "星のや竹富島スパ<span class='text-base lg:text-xl block lg:inline'>（星野リゾート星のや竹富島）</span>",
    name: "星のや竹富島スパ（星野リゾート星のや竹富島）",
    subTitle: "hoshino-taketomi",
    lead: "竹富島の自然に包まれ、心と体を深くほぐす特別なスパ体験。",
    subLead: "A unique spa experience on Taketomi Island, where natural island ingredients guide you to deep relaxation.",
    desc: `
      <p>星のや竹富島スパでは、島ならではの素材を用いたトリートメントをご提供しています。</p>
      <p>海や植物、地域の恵みを取り入れたメニューは、心と体をゆったりと解きほぐし、深いリラックスへと誘います。</p>
      <p>訪れるすべての方に、竹富島ならではの穏やかで贅沢な癒しの時間をお届けします。</p>
    `,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3635.7152806145587!2d124.0946726!3d24.3215645!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346075b2a614c747%3A0x1cc52c00cc08e715!2z5pif44Gu44KE56u55a-M5bO2!5e0!3m2!1sja!2sjp!4v1756560093257!5m2!1sja!2sjp",
    table: [
      { label: "住所", items: [{ value: "〒907-1101 沖縄県八重山郡竹富町竹富1955", mapUrl: 'https://maps.app.goo.gl/7XwXYR7AcpkhX8C49' }] },
      { label: "電話番号", items: [{ value: "0980-84-5888" }] },
      { label: "営業時間", items: [{ value: "9:00 AM～17:30 PM<br>※最終受付 15:00 PM" }] },
      { label: "お支払い方法", items: [{ value: "現金 / 各クレジットカード / 各電子マネー" }] },
      { label: "ご予約詳細", items: [{ value: "<a href='https://hoshinoresorts.com/ja/hotels/hoshinoyataketomijima/activities/13939/' target='_blank' class='u-link-blank underline'>星のや竹富島スパ</a>" }] },
    ],
    menu: [
      {
        name: "特別メニュー「海の恵み いんぬふぁーすん」",
        description: [
          "＜背中（海藻パック）、脚、腕、デコルテ、ヘッド＞",
          "健康の宝として重宝されてきた海の恵みである海藻を使用したメニューです。",
          "背中に発熱性の海藻パックを施すことでお身体を温め、同時に乾燥しがちな背中にも潤いを与えます。",
          "＊甲状腺トラブル、ヨードアレルギーをお持ちのお客様はご遠慮いただいております。",
        ],
        image: "img_taketomi-sp",
        options: [
          {
            items: [
              { duration: "90分（所要時間 120 分）", price: "30,500円（税込）" },
            ],
          },
        ],
      },
      {
        name: "特別メニュー「海の潤い いんぬうるい」",
        description: [
          "＜背中・脚・デコルテ・顔（海藻マスク）・ヘッド・足浴＞",
          "八重山の珊瑚礁に囲まれた島々は、海藻の宝庫と言われています。",
          "海藻成分をたっぷりと含んだマスクでお手入れすることで、お肌に潤いを与えて艶やかに整えます。",
        ],
        image: "img_taketomi-sp",
        options: [
          {
            items: [
              { duration: "90分（所要時間 120 分）", price: "30,500円（税込）" },
            ],
          },
        ],
      },
      {
        name: "特別メニュー「命ぐすい草の休息 ぶがりのーすん」",
        description: [
          "＜背中・脚・腕・デコルテ・頭皮＞",
          "長命草やフーチバー(蓬)を使用した「命ぐすい玉」でお身体を温めるメニューです。",
          "命の薬として島で重宝されてきた命ぐすいで安らぎの休息へと誘います。",
          "＊準備にお時間がかかりますため、前日までのご予約をお願いいたします。",
        ],
        image: "img_taketomi-sp",
        options: [
          {
            items: [
              { duration: "90分（所要時間 120 分）", price: "30,500円（税込）" },
            ],
          },
        ],
      },
      {
        name: "スタンダードメニュー「休 ゆくい」",
        description: [
          "＜背中・脚・腕・デコルテ・ヘッド・足浴＞",
          "離島のゆっくりと流れる島時間に身をゆだね、深いリラックスへと誘うスパのスタンダードメニューです。",
          "お顔をのぞく全身をトリートメントし、珊瑚礁の砂浜に静かに打ち寄せては返す波のようなリズムで頭皮をほぐし、心地よい安らぎへと導きます。",
        ],
        image: "img_taketomi-s",
        options: [
          {
            items: [
              { duration: "90分（所要時間 120 分）", price: "23,230円（税込）" },
            ],
          },
        ],
      },
      {
        name: "スタンダードメニュー「養 ひかのーん」",
        description: [
          "＜背中・脚・腕・デコルテ・ヘッド・足浴＞",
          "お背中、お肩周りを特に丁寧にトリートメントするメニューです。",
          "お好みの香りに包まれながら全身をトリートメントし、ゆったりとした波のようなリズムで頭皮をほぐし深いリラックスへと誘います。",
        ],
        image: "img_taketomi-s",
        options: [
          {
            items: [
              { duration: "90分（所要時間 120 分）", price: "23,230円（税込）" },
            ],
          },
        ],
      },
      {
        name: "スタンダードメニュー「美 あぱれさん 」",
        description: [
          "＜背中・脚・デコルテ・顔・ヘッド・足浴＞",
          "お顔を含む全身のトリートメントです。",
          "アロマの爽やかな香りに包まれて、ゆったりとした波のようなリズムでトリートメントを行います。",
          "お顔は丁寧にクレンジングした後にオイルトリートメントを行い、心地よいリラックスと透明感のあるお肌へと導きます。",
        ],
        image: "img_taketomi-s",
        options: [
          {
            items: [
              { duration: "90分（所要時間 120 分）", price: "23,230円（税込）" },
            ],
          },
        ],
      },
    ],
    gallery: [
      { src: "gallery-1.jpg", type: "portrait", className: "u-gallery-1 lg:mr-20 lg:ml-10" },
      { src: "gallery-2.jpg", type: "landscape", className: "u-gallery-2 lg:mt-60 lg:mr-0 lg:ml-auto" },
      { src: "gallery-3.jpg", type: "landscape", className: "u-gallery-3 mt-20" },
      { src: "gallery-4.jpg", type: "portrait", className: "u-gallery-4 lg:mt-52 lg:mr-10 lg:ml-auto" },
    ],
  },

  //=====西表スパ（星野リゾート西表島ホテル）===============================
  {
    id: "hoshino-iriomote",
    title: "西表スパ<span class='text-base lg:text-xl block lg:inline'>（星野リゾート西表島ホテル）</span>",
    name: "西表スパ（星野リゾート西表島ホテル）",
    subTitle: "hoshino-iriomote",
    lead: "西表島の自然に包まれ、心と体を潤す極上のスパ体験。",
    subLead: "An indulgent spa experience on Iriomote Island, where nature nourishes both body and mind.",
    desc: `
      <p>西表スパでは、世界自然遺産に登録された西表島の自然を守るため、環境に配慮したオーガニック植物成分配合の水溶性ジェルをトリートメントに導入しています。</p>
      <p>サトウキビエキス、ゴボウ根エキス、ハトムギエキスに加え、ローズマリー、セージ、タイム、各種柑橘類の香りが心身を包み込み、滑らかな肌触りと保湿感をもたらします。</p>
      <p>訪れるすべての方に、極上のリラクゼーションと至福のひとときをお届けします。</p>
    `,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.844601166366!2d123.77497050000001!3d24.421465700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3460806a8d3ee773%3A0x1b03351de515dbc2!2z6KW_6KGo5bO244Ob44OG44OrIGJ5IOaYn-mHjuODquOCvuODvOODiA!5e0!3m2!1sja!2sjp!4v1756560458440!5m2!1sja!2sjp",
    table: [
      { label: "住所", items: [{ value: "〒907-1541 沖縄県八重山郡竹富町上原2-2", mapUrl: 'https://maps.app.goo.gl/12troWehZB15ukb7A' }] },
      { label: "電話番号", items: [{ value: "0980-85-7111" }] },
      { label: "営業時間", items: [{ value: "14:00 PM～10:00 PM<br>※定休日あり" }] },
      { label: "お支払い方法", items: [{ value: "現金 / 各クレジットカード / 各電子マネー" }] },
      { label: "ご予約詳細", items: [{ value: "<a href='https://hoshinoresorts.com/ja/hotels/iriomote/sp/iriomotespa_/' target='_blank' class='u-link-blank underline'>西表スパ</a>" }] },
    ],
    menu: [
      {
        name: "イリムティチヒカラ（西表パワー）",
        description: [
          "＜ジェルボディトリートメント＞",
          "オーガニック植物エキスをたっぷりと含んだ水溶性ジェルでお身体全体をゆったりとほぐし、深いリラクゼーションへと導きます。",
        ],
        image: "img_iriomote-body",
        options: [
          {
            items: [
              { duration: "60分", price: "15,895円（税込）" },
            ],
          },
        ],
      },
      {
        name: "ガンジュー（元気）",
        description: [
          "＜シークワーサー足浴+フットケア＆ヘッドトリートメント＆ハンドトリートメント＞",
          "シークワーサーエキスを含む足浴でリラックスした後、美容成分を多く含む水溶性ジェルで膝下から足裏まで、肘から指先、疲労の溜まりやすい肩から頭部をスッキリとほぐします。",
          "※着衣で行います。",
        ],
        image: "img_iriomote-head",
        options: [
          {
            items: [
              { duration: "60分", price: "15,895円（税込）" },
            ],
          },
        ],
      },
      {
        name: "ティンヌカーラ（天の川）",
        description: [
          "＜シークワーサー足浴＆ジェルボディトリートメント＆ヘッドトリートメント＞",
          "シークワーサーエキスを含む足浴の後、植物由来の美容成分を含むジェルでお身体全体をゆったりとほぐします。",
          "リラックス効果の高い ヘッドトリートメントと併せて行うことで、よりいっそう深いリラクゼーションへと導きます。",
        ],
        image: "img_iriomote-full",
        options: [
          {
            items: [
              { duration: "90分", price: "18,700円（税込）" },
            ],
          },
        ],
      },
      {
        name: "ピッカル(輝く)",
        description: [
          "＜シークワーサー足浴+ジェルボディトリートメント＆フェイシャルトリートメント＋マスク＆ヘッドトリートメント＞",
          "美容成分を多く含む水溶性ジェルでお身体を丁寧にほぐした後に、月桃エキスなどを含む化粧品でお顔の肌を整え、シークワーサー特有の美容成分ノビレチンを含んだマスクで透明感のある肌に仕上げます。",
          "ヘッドトリートメントを併せることで、顔色がいっそう明るく整います。",
        ],
        image: "img_iriomote-full",
        options: [
          {
            items: [
              { duration: "90分", price: "21,000円（税込）" },
            ],
          },
        ],
      },
    ],
    gallery: [
      { src: "gallery-1.jpg", type: "portrait", className: "u-gallery-1 lg:mr-20 lg:ml-10" },
      { src: "gallery-2.jpg", type: "landscape", className: "u-gallery-2 lg:mt-60 lg:mr-0 lg:ml-auto" },
      { src: "gallery-3.jpg", type: "landscape", className: "u-gallery-3 mt-20" },
      { src: "gallery-4.jpg", type: "portrait", className: "u-gallery-4 lg:mt-52 lg:mr-10 lg:ml-auto" },
    ],
  },

  //=====小浜島琉球スパ（星野リゾートリゾナーレ小浜島） ===============================
  {
    id: "hoshino-kohama",
    title: "小浜島琉球スパ<span class='text-base lg:text-xl block lg:inline'>（星野リゾートリゾナーレ小浜島）</span>",
    name: "小浜島琉球スパ（星野リゾートリゾナーレ小浜島） ",
    subTitle: "hoshino-kohama",
    lead: "海に抱かれた小浜島で癒されて、安らぎに満ちたひととき。",
    subLead: "Embraced by the sea on Kohama Island, a moment of pure relaxation and tranquility.",
    desc: `
      <p>リゾナーレ小浜島スパでは、心地よい香りと流れるようなリズム、なめらかなタッチのトリートメントで、心と体を整える時間をご提供しています。</p>
      <p>珊瑚礁に囲まれた小浜島の自然環境を守るため、オーガニック植物成分配合の水溶性ジェルを使用。サトウキビエキス、ゴボウ根エキス、ハトムギエキスに加え、ローズマリー、セージ、タイム、各種柑橘類の香りが心身を包み込み、滑らかな肌触りと保湿感をもたらします。</p>
      <p>私たちは、イチャリバチョーデー（おもてなしの心）で、琉球とそこに訪れる人々を結びつけ、美と健康を呼び起こす案内人です。</p>
    `,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d116332.0402793197!2d123.9881226!3d24.3333827!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34607764b9b9d871%3A0x6137bf84ba76bf30!2z44Oq44K-44OK44O844Os5bCP5rWc5bO2!5e0!3m2!1sja!2sjp!4v1756560542390!5m2!1sja!2sjp",
    table: [
      { label: "住所", items: [{ value: "〒907-1221 沖縄県竹富町小浜2954", mapUrl: 'https://maps.app.goo.gl/SjL4RZ1pRXkk11uU7' }] },
      { label: "電話番号", items: [{ value: "050-3134-8093" }] },
      { label: "営業時間", items: [{ value: "14:00 PM～22:00 PM<br>※最終受付 20:00 PM" }] },
      { label: "お支払い方法", items: [{ value: "現金 / 各クレジットカード / 各電子マネー" }] },
      { label: "ご予約詳細", items: [{ value: "<a href='https://hoshinoresorts.com/ja/hotels/risonarekohamajima/sp/newspa/' target='_blank' class='u-link-blank underline'>リゾナーレ小浜島スパ</a>" }] },
    ],
    menu: [
      {
        name: "天空(てぃん)",
        description: [
          "＜ハイビスカス足浴＋ジェルボディトリートメント＆ヘッドトリートメント＞",
          "オーガニック植物抽出エキスを含んだトリートメントジェルで、全身を丁寧にほぐします。",
          "やさしい波のようなリズムで頭皮をやわらげ、深いリラックスへと導きます。",
        ],
        image: "img_kohama-body",
        options: [
          {
            items: [
              { duration: "90分", price: "21,500円（税込）" },
            ],
          },
        ],
      },
      {
        name: "珊瑚礁（ぴー）",
        description: [
          "＜ハイビスカス足浴＋ジェルボディトリートメント＆ボディパック又はボディスクラブ＞",
          "沖縄天然素材のハイビスカスやシークヮーサーなどのエキスを含むボディパックまたはスクラブで背中の肌を整えてから、美容成分を多く含む水溶性ジェルで全身を緩めるボディトリートメントです。",
        ],
        image: "img_kohama-body",
        options: [
          {
            items: [
              { duration: "90分", price: "24,300円（税込）" },
            ],
          },
        ],
      },
      {
        name: "祈(にんがい)",
        description: [
          "＜ハイビスカス足浴＋ジェルボディトリートメント＆ヘッドトリートメント＆フットトリートメント＞",
          "全身と頭をトリートメントし、お疲れの足をていねいにほぐします。",
          "小浜島のやさしい空気に身をゆだね深いリラックスへと誘います。",
        ],
        image: "img_kohama-full",
        options: [
          {
            items: [
              { duration: "90分", price: "21,500円（税込）" },
            ],
          },
        ],
      },
    ],
    gallery: [
      { src: "gallery-1.jpg", type: "portrait", className: "u-gallery-1 lg:mr-20 lg:ml-10" },
      { src: "gallery-2.jpg", type: "landscape", className: "u-gallery-2 lg:mt-60 lg:mr-0 lg:ml-auto" },
      { src: "gallery-3.jpg", type: "landscape", className: "u-gallery-3 mt-20" },
      { src: "gallery-4.jpg", type: "portrait", className: "u-gallery-4 lg:mt-52 lg:mr-10 lg:ml-auto" },
      { src: "gallery-5.jpg", type: "portrait", className: "u-gallery-5 lg:-mt-40 lg:mr-20 lg:ml-10" },
      { src: "gallery-6.jpg", type: "landscape", className: "u-gallery-6 lg:mt-20 lg:mr-0 lg:ml-auto" },
    ],
  },

  //=====琉球足つぼ（フサキビーチリゾートホテル＆ヴィラズ）  ===============================
  {
    id: "fusaki",
    title: "琉球足つぼ<span class='text-base lg:text-xl block lg:inline'>（フサキビーチリゾートホテル＆ヴィラズ）</span>",
    name: "琉球足つぼ（フサキビーチリゾートホテル＆ヴィラズ）",
    subTitle: "fusaki",
    lead: "オーガニック植物の香りに包まれ、心と体を整える贅沢なスパ体験。",
    subLead: "A luxurious spa experience with the scent of organic botanicals, restoring both body and mind.",
    desc: `
      <p>FUSAKI SPAでは、オーガニック植物成分配合で豊かな香りの「bamford」製品を使用したトリートメントメニューや、心身の快適さを高めるウェルネスプログラムをご用意しています。</p>
      <p>訪れるすべての方に、健康で自分らしい状態を取り戻す、極上のリラクゼーション体験をお届けします。</p>
    `,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.273574941975!2d124.1160224!3d24.3717847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345fdf9b52360989%3A0x61c51062f79ebdfa!2z44OV44K144Kt44OT44O844OB44Oq44K-44O844OIIOODm-ODhuODq--8huODtOOCo-ODqeOCug!5e0!3m2!1sja!2sjp!4v1756560786640!5m2!1sja!2sjp",
    table: [
      { label: "住所", items: [{ value: "〒907-0024 沖縄県石垣市新川1625", mapUrl: 'https://maps.app.goo.gl/MUyaoznP6kL2uTNo8' }] },
      { label: "電話番号", items: [{ value: "090-9785-1838" }] },
      { label: "営業時間", items: [{ value: "11:00 PM～19:30 PM<br>※最終受付 18:00 PM" }] },
      { label: "お支払い方法", items: [{ value: "現金 / 各クレジットカード / 各電子マネー" }] },
      { label: "ご予約詳細", items: [{ value: "<a href='https://www.fusaki.com/spa_wellness' target='_blank' class='u-link-blank underline'>フサキビーチリゾートホテル＆ヴィラズ</a>" }] },
    ],
    // menu: [
    //   {
    //     name: "天空(てぃん)",
    //     description: [
    //       "＜ハイビスカス足浴＋ジェルボディトリートメント＆ヘッドトリートメント＞",
    //       "オーガニック植物抽出エキスを含んだトリートメントジェルで、全身を丁寧にほぐします。",
    //       "やさしい波のようなリズムで頭皮をやわらげ、深いリラックスへと導きます。",
    //     ],
    //     image: "img_kohama-body",
    //     options: [
    //       {
    //         items: [
    //           { duration: "90分", price: "21,500円（税込）" },
    //         ],
    //       },
    //     ],
    //   },
    // ]
  },
];
