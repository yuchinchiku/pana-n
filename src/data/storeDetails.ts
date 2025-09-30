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
  buttonHref?: string;
  lead: string;
  subLead: string;
  desc: string;
  mapUrl: string;
  table: { label: string; items: { value: string, note?: string, mapUrl?:string }[] }[];
  notify?: { title: string; desc: string };
  menu?: MenuItem[];
  gallery?: GalleryImage[];
  metaTitle: string;
  metaDesc: string;
};

export const storeDetails: StoreDetail[] = [
  //=====ほぐしガッテン真栄里店 & パナ・ン琉球スパ===============================
  {
    id: "hogushigatten-maezato",
    metaTitle: "ほぐしガッテン真栄里店 & パナ・ン琉球スパ",
    metaDesc: "石垣島・真栄里エリアにある癒しの空間。ほぐしガッテンと琉球スパの融合で、心と身体を芯から癒します。",
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
      { label: "SNS", items: [{ value: '<a href="https://www.instagram.com/hogushigatten_ishigakijima/" target="_blank" class="u-link-blank underline">Instagram</a>' }] },
      { label: "ご予約", items: [{ value: '<a href="https://yoyaku-beauty.jp/reserve/top?CODE=625f9cf1705998d8f8057107166a788ff1cc1893ee6085b3989a1234a305161a" target="_blank" class="u-link-blank underline">ご予約はこちらから</a>' }] },
    ],
    buttonHref: "https://yoyaku-beauty.jp/reserve/top?CODE=625f9cf1705998d8f8057107166a788ff1cc1893ee6085b3989a1234a305161a",
    // menu: [
    //   {
    //     name: "頭爽快の秘技「頭のもみほぐしコース」",
    //     description: [
    //       "頭頂部～側頭部、首・肩をしっかりほぐすことで深い眠りに誘います。",
    //       "パソコン・スマホの疲れが溜まっている方、睡眠不足でお悩みの方へおすすめです。満足度100％に自信有り。",
    //       "極上な頭の秘技ほぐし技術を是非ご勘能ください。",
    //     ],
    //     image: "img_head-massage2",
    //     options: [
    //       {
    //         items: [
    //           { duration: "40分", price: "XXX円（税込XXX円）" },
    //           { duration: "60分", price: "XXX円（税込XXX円）" },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     name: "歩き疲れた足を軽やかに「足ツボほぐしコース」",
    //     description: [
    //       "膝下～足裏までしっかりとほぐします。",
    //       "足ツボを押すことで全身の筋肉が緩み、疲れた足を軽やかに癒します。",
    //     ],
    //     image: "img_ashitsubo",
    //     options: [
    //       {
    //         items: [
    //           { duration: "40分", price: "XXX円（税込XXX円）" },
    //           { duration: "60分", price: "XXX円（税込XXX円）" },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     name: "究極こねり技「全身もみほぐしコース」",
    //     description: [
    //       "筋肉をこねりながらほぐすることにより、つらいコリもすばやくほぐれます。",
    //       "ほぐれた状態が通常より長く持続し、ほぐしも快適にお過ごしいただけます。",
    //     ],
    //     image: "img_momihogushi",
    //     options: [
    //       {
    //         items: [
    //           { duration: "40分", price: "XXX円（税込XXX円）" },
    //           { duration: "60分", price: "XXX円（税込XXX円）" },
    //           { duration: "80分", price: "XXX円（税込XXX円）" },
    //           { duration: "100分", price: "XXX円（税込XXX円）" },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     name: "満足度No1「全身＆頭のもみほぐしコース」",
    //     description: [
    //       "お客様満足度No1ほぐしメニューです。",
    //       "100分以上のロングほぐしコースは特にオススメ！至極の癒しを是非ご体感ください。",
    //     ],
    //     image: "img_fullmassage",
    //     options: [
    //       {
    //         items: [
    //           { duration: "60分", price: "XXX円（税込XXX円）" },
    //           { duration: "80分", price: "XXX円（税込XXX円）" },
    //           { duration: "100分", price: "XXX円（税込XXX円）" },
    //         ],
    //       },
    //     ],
    //   },
    // ],
    gallery: [
      { src: "gallery-1.jpg", type: "portrait", className: "u-gallery-1 lg:mr-20 lg:ml-10" },
      { src: "gallery-2.jpg", type: "landscape", className: "u-gallery-2 lg:mt-60 lg:mr-0 lg:ml-auto" },
      { src: "gallery-3.jpg", type: "landscape", className: "u-gallery-3 mt-20" },
      { src: "gallery-4.jpg", type: "portrait", className: "u-gallery-4 lg:mt-52 lg:mr-10 lg:ml-auto" },
      { src: "gallery-5.jpg", type: "portrait", className: "u-gallery-5 lg:-mt-40 lg:mr-20 lg:ml-10" },
      { src: "gallery-6.jpg", type: "landscape", className: "u-gallery-6 lg:mt-20 lg:mr-0 lg:ml-auto" },
    ],
  },
  //=====ほぐしガッテン那覇久米店===============================
  {
    id: "hogushigatten-nahakume",
    metaTitle: " ほぐしガッテン那覇久米店",
    metaDesc: "沖縄・那覇の中心地で極上のリラクゼーションを提供するほぐしガッテン那覇久米店。お仕事帰りや観光の合間にもおすすめです。",
    title: "ほぐしガッテン<br class='lg:hidden'>那覇久米店",
    name: "ほぐしガッテン那覇久米店",
    subTitle: "hogushigatten-nahakume",
    lead: "歴史が息づく那覇久米で、訪れる人の内なる輝きを呼び覚ます",
    subLead: "Rediscover your inner light in historic Naha Kume.",
    desc: `
      <p>1985年に石垣島で鍼灸リラクゼーションマッサージ治療院を開院の後、<br class='hidden lg:block'>以上地元企業として県内多数リゾートホテルや空港内のリラクゼーション業に携わる中、地域の皆様に感謝の気持ちで恩返しをしたいという想いで直営店の「ほぐしガッテン」が誕生しました。</p>
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
      { label: "SNS", items: [{ value: '<a href="https://www.instagram.com/hogushigatten_nahakumeten/" target="_blank" class="u-link-blank underline">Instagram</a>' }] },
      { label: "ご予約", items: [{ value: '<a href="https://yoyaku-beauty.jp/reserve/top?CODE=eef61cc209f842f3c0912c87d80e66e8d0d4422d8be80b6b8c0d3e5abc5a3667" target="_blank" class="u-link-blank underline">ご予約はこちらから</a>' }] },
    ],
    buttonHref: "https://yoyaku-beauty.jp/reserve/top?CODE=eef61cc209f842f3c0912c87d80e66e8d0d4422d8be80b6b8c0d3e5abc5a3667",
    gallery: [
      { src: "gallery-2.jpg", type: "landscape", className: "u-gallery-1 lg:mt-20 lg:mr-20 lg:ml-10" },
      { src: "gallery-5.jpg", type: "portrait", className: "u-gallery-2 lg:mr-10 lg:ml-auto" },
    ],

  },



  //=====ほぐしガッテン大森東口店（東京品川）===============================
  {
    id: "hogushigatten-omori",
    metaTitle: " ほぐしガッテン大森東口店（東京品川）",
    metaDesc: "東京・品川エリアにあるほぐしガッテン大森東口店。沖縄の癒しを都心でも体験できるリラクゼーション空間です。",
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
    // menu: [
    //   {
    //     name: "頭爽快の秘技「頭のもみほぐしコース」",
    //     description: [
    //       "頭頂部～側頭部、首・肩をしっかりほぐすることで深い眠りに誘います。",
    //       "パソコン・スマホの疲れが溜まっている方、睡眠不足でお悩みの方へおすすめです。満足度100％に自信有り。",
    //       "極上な頭の秘技ほぐし技術を是非ご勘能ください。",
    //     ],
    //     image: "img_head-massage2",
    //     options: [
    //       {
    //         items: [
    //           { duration: "40分", price: "XXX円（税込XXX円）" },
    //           { duration: "60分", price: "XXX円（税込XXX円）" },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     name: "究極こねり技「全身もみほぐしコース」",
    //     description: [
    //       "筋肉をこねりながらほぐすことにより、つらいコリもすばやくほぐれます。",
    //       "ほぐれた状態が通常より長く持続し、ほぐしも快適にお過ごしいただけます。",
    //     ],
    //     image: "img_momihogushi",
    //     options: [
    //       {
    //         items: [
    //           { duration: "40分", price: "XXX円（税込XXX円）" },
    //           { duration: "60分", price: "XXX円（税込XXX円）" },
    //           { duration: "80分", price: "XXX円（税込XXX円）" },
    //           { duration: "100分", price: "XXX円（税込XXX円）" },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     name: "満足度No1「全身＆頭のもみほぐしコース」",
    //     description: [
    //       "お客様満足度No1ほぐしメニューです。",
    //       "100分以上のロングほぐしコースは特にオススメ！至極の癒しを是非ご体感ください。",
    //     ],
    //     image: "img_fullmassage",
    //     options: [
    //       {
    //         items: [
    //           { duration: "60分", price: "XXX円（税込XXX円）" },
    //           { duration: "80分", price: "XXX円（税込XXX円）" },
    //           { duration: "100分", price: "XXX円（税込XXX円）" },
    //         ],
    //       },
    //     ],
    //   },
    // ],
  },

  //=====パナ・ン石垣空港店===============================
  {
    id: "painushima",
    metaTitle: " パナ・ン石垣空港店",
    metaDesc: "石垣島空港内にあるパナ・ン石垣空港店。旅の疲れを癒すリラックス施術で、沖縄の旅をより特別なものに。",
    title: "パナ・ン石垣空港店",
    name: "パナ・ン石垣空港店",
    subTitle: "painushima",
    lead: "空の玄関で出会う、唯一無二の「元祖琉球マッサージ」体験",
    subLead: "Rediscover your inner light in historic Naha Kume.",
    desc: `
      <p>「旅のはじまりも、終わりも、特別な癒しで彩りたい。」</p>
      <p>パナ・ン石垣空港店は、空港内にあるとは思えない静けさと、本格的な技術で、琉球の想いを伝える“癒しの拠点”です。</p>
      <p>パナ・ン石垣空港店で体験できる「元祖琉球マッサージ」は、琉球空手や琉球・八重山舞踊の所作を取り入れた秘伝の技法。</p>
      <p>旅の疲れをしっかりと解きほぐしながら、心までそっと包み込みます。</p>
      <p>石垣にいらっしゃる際は、是非お立ち寄りください。</p>
    `,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58137.218204395445!2d124.2044884!3d24.3960443!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345fe3e0e4031c0d%3A0x6cc37913104ccac!2z44OR44OK44O744Oz5Y2X44Gs5bO255-z5Z6j56m65riv5bqX!5e0!3m2!1sja!2sjp!4v1756561037620!5m2!1sja!2sjp",
    table: [
      { label: "住所", items: [{ value: "〒907-0242 沖縄県石垣市白保1960−104−1 石垣空港2F", mapUrl: 'https://maps.app.goo.gl/4KtuHdkzpD4ScF9z7' }] },
      { label: "電話番号", items: [{ value: "098-087-0381" }] },
      { label: "営業時間", items: [{ value: "09:00 AM～20:00 PM" }] },
      { label: "駐車場", items: [{ value: "空港内駐車場をご利用ください。" }] },
      { label: "アクセス", items: [{ value: "パナ・ン石垣空港店（石垣空港）の中央2階" }] },
      { label: "お支払い方法", items: [{ value: "現金 / 各クレジットカード / 各電子マネー" }] },
    ],
    menu: [
      {
        name: "「元祖琉球マッサージ」",
        description: [
          "琉球空手と沖縄伝統舞踊の手の技を取り入れた沖縄らしさを追求した秘伝の秘技ほぐし技術です。",
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

  //=====星のや竹富島スパ（星野リゾート星のや竹富島）===============================
  {
    id: "hoshino-taketomi",
    metaTitle: " 星のや竹富島スパ（星野リゾート星のや竹富島）",
    metaDesc: "竹富島の豊かな自然に包まれたスパで、琉球の伝統施術を体験。非日常の空間で心身ともにリフレッシュ。",
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
      { label: "ご予約詳細", items: [{ value: '<a href="https://hoshinoresorts.com/ja/hotels/hoshinoyataketomijima/activities/13939/" target="_blank" class="u-link-blank underline">星のや竹富島スパ</a><br><p>※宿泊者の方限定のご利用となります。</p>' }] },
    ]
  },
  //=====星のや沖縄スパ（星野リゾート星のや沖縄）===============================
  {
    id: "hoshino-okinawa",
    metaTitle: " 星のや沖縄スパ（星野リゾート星のや沖縄）",
    metaDesc: "沖縄本島の高級リゾート「星のや沖縄」で提供する極上スパ体験。琉球の伝統を活かした施術で深い癒しをお届けします。",
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
      { label: "ご予約詳細", items: [{ value: '<a href="https://hoshinoresorts.com/ja/hotels/hoshinoyaokinawa/activities/13933/" target="_blank" class="u-link-blank underline">星のや沖縄スパ</a><br><p>※宿泊者の方限定のご利用となります。</p>' }] },
    ]
  },

  //=====小浜島琉球スパ（星野リゾートリゾナーレ小浜島） ===============================
  {
    id: "hoshino-kohama",
    metaTitle: " 小浜島琉球スパ（星野リゾートリゾナーレ小浜島）",
    metaDesc: "小浜島の静かな楽園で受ける琉球スパ。極上のリラクゼーションと癒しの時間をお楽しみください。",
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
      { label: "ご予約詳細", items: [{ value: '<a href="https://hoshinoresorts.com/ja/hotels/risonarekohamajima/sp/newspa/" target="_blank" class="u-link-blank underline">リゾナーレ小浜島スパ</a><br><p>※宿泊者の方限定のご利用となります。</p>' }] },
    ]
  },


  //=====西表スパ（星野リゾート西表島ホテル）===============================
  {
    id: "hoshino-iriomote",
    metaTitle: " 西表スパ（星野リゾート西表島ホテル）",
    metaDesc: "大自然に囲まれた西表島で、贅沢なリラックスタイムを。琉球の技法を用いた施術で心と身体のバランスを整えます。",
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
      { label: "ご予約詳細", items: [{ value: '<a href="https://hoshinoresorts.com/ja/hotels/iriomote/sp/iriomotespa_/" target="_blank" class="u-link-blank underline">西表スパ</a><br><p>※宿泊者の方限定のご利用となります。</p>' }] },
    ]
  },

  //=====琉球足つぼ（フサキビーチリゾートホテル＆ヴィラズ）  ===============================
  {
    id: "fusaki",
    metaTitle: " 琉球足つぼ（フサキビーチリゾートホテル＆ヴィラズ）",
    metaDesc: "フサキビーチリゾートで体験できる琉球足つぼマッサージ。旅先での疲れを癒し、心地よい時間をお過ごしください。",
    title: "琉球足つぼ<span class='text-base lg:text-xl block lg:inline'>（フサキビーチリゾートホテル＆ヴィラズ）</span>",
    name: "琉球足つぼ（フサキビーチリゾートホテル＆ヴィラズ）",
    subTitle: "fusaki",
    lead: "月桃のアロマに包まれ、足から心と体を整える贅沢なスパ体験。",
    subLead: "Balancing body and mind with soothing Getto (shell ginger) foot care.",
    desc: `
      <p>沖縄で親しまれてきた月桃（ゲットウ）のアロマオイルを使用し、膝下から足裏まで丁寧にほぐすリフレクソロジーです。</p>
      <p>ウェルネスセンター内で、旅の疲れや日々の疲労をやさしく癒し、血行やリンパの流れを整えます。</p>
    `,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.273574941975!2d124.1160224!3d24.3717847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345fdf9b52360989%3A0x61c51062f79ebdfa!2z44OV44K144Kt44OT44O844OB44Oq44K-44O844OIIOODm-ODhuODq--8huODtOOCo-ODqeOCug!5e0!3m2!1sja!2sjp!4v1756560786640!5m2!1sja!2sjp",
    table: [
      { label: "住所", items: [{ value: "〒907-0024 沖縄県石垣市新川1625", mapUrl: 'https://maps.app.goo.gl/MUyaoznP6kL2uTNo8' }] },
      { label: "電話番号", items: [{ value: "090-9785-1838" }] },
      { label: "営業時間", items: [{ value: "15:00 PM～23:00 PM<br>※最終受付 22:00 PM" }] },
      { label: "お支払い方法", items: [{ value: "現金 / 各クレジットカード / 各電子マネー" }] },
      { label: "ご予約詳細", items: [{ value: '<a href="https://www.fusaki.com/spa_wellness" target="_blank" class="u-link-blank underline">フサキビーチリゾートホテル＆ヴィラズ</a>' }] },
    ]
  },
];
