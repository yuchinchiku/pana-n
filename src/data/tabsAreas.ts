// data/tabsAreas.ts

export type TableItem = {
  value: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export type TableRow = {
  label: string;
  items: TableItem[];
};

export type Tab = {
  title: string;
  titleSub?: string;
  titleEn: string;
  lead: string;
  descriptionImages?: { src: string; text?: string }[];
  table?: TableRow[];
  rightImages: string[];
  tags: { text: string; color: string }[];
  titleSmall?: string;
  desc: string;
};

type TabAreaType = {
  areaTitle: string;
  areaTitleEn: string;
  tabs: Tab[];
};

export const tabsAreas: TabAreaType[] = [
  {
    areaTitle: '独自メニュー',
    areaTitleEn: 'pana-n’s original menu',
    tabs: [
      //元祖琉球マッサージ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
      {
        titleSmall: '元祖琉球<br class="lg:hidden">マッサージ',
        title: '「琉球ほぐし手（てぃ）」',
        titleEn: 'Experience the only one of its kind — the original Ryukyuan Massage, only at pana-n.',
        lead: '琉球の技と想いが融合したパナ・ンの独自技法',
        desc: `
          <p class='pb-4'>琉球空手の「正拳」や「平拳」の「技」と、<br class="hidden lg:block">
          琉球・八重山舞踊に伝わるしなやかな「こねり手」の“手の舞”を融合させた、<br class="hidden lg:block">
          パナ・ン独自の技法「琉球ほぐし手（てぃ）」です。</p>
          <p class='pb-4'>イチャリバチョーデー（行き逢えば皆兄弟）の精神や、出会いを大切にする「ちむぐくる」の心、そして琉球文化と伝統を守り抜いてきた先人たちの想いが込められています。</p>
          <p class='pb-4'>凝り固まった肩・首・腰の筋肉にしっかりとアプローチしながらも、おもてなしの心を大切に、優しく深くほぐしていく特別な技術を世界で雄一できるのがパナ・ンが展開するほぐし店舗です。</p>
          <p>石垣の旅の始まりやお帰りの際には、琉球の魂が宿る元祖琉球マッサージを是非ご体感ください。</p>
        `,
        descriptionImages: [
          { src: 'original-1_1', text: '平挙' },
          { src: 'original-1_2', text: '拝み手' },
          { src: 'original-1_3', text: '正挙' },
          { src: 'original-1_4', text: '一本挙' },
        ],
        table: [
          {
            label: '施術時間',
            items: [
              { value: '20分～120分' },
            ],
          },
          {
            label: '施術内容',
            items: [
              { value: '・頭、首、肩、腕、背中、腰、脚など全身のコリや疲れの解消' },
              { value: '・代謝向上' },
              { value: '・リラックス効果' },
            ],
          },
          {
            label: '対応可能店舗',
            items: [
              { value: 'ほぐしガッテン那覇久米店', buttonLabel: '店舗詳細', buttonHref: '/salon/hogushigatten-nahakume' },
              { value: 'ほぐしガッテン真栄里店', buttonLabel: '店舗詳細', buttonHref: '/salon/hogushigatten-maezato' },
              { value: 'パナ・ン南ぬ島石垣空港店（南ぬ島石垣空港2F）', buttonLabel: '店舗詳細', buttonHref: '/salon/painushima' },
            ],
          },
        ],
        rightImages: ['original-1_1', 'original-1_2', 'original-1_3'],
        tags: [
          { text: '肩こり', color: 'bg-tag-green' },
          { text: '全身の疲れ', color: 'bg-tag-green' },
          { text: '代謝', color: 'bg-tag-green' },
          { text: 'リラックス', color: 'bg-tag-blue' },
        ],
      },

      //琉球ヘッドマッサージ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
      {
        titleSmall: '（デコルテ付）',
        titleSub: '（デコルテ付）',
        title: '琉球ヘッド<br class="lg:hidden">マッサージ',
        titleEn: 'Experience the Bliss of Ryukyuan Head & Décolleté Massage',
        lead: '琉球の癒しの知恵を生かし、頭から胸元までを優しくほぐす特別な手法。深いリラクゼーションと心地よい解放感をお届けします。',
        desc: `
          <p class='pb-4'>爽やかな香りの月桃アロマオイルを使用し、頭の先からデコルテまでを独特な指技でほぐします。</p>
          <p class='pb-4'>寄せては返す波のようにゆったりとしたリズムタッチは、日頃から溜りがちなストレスを解消し、心地よい深いリラックスへと誘います。</p>
        `,
        descriptionImages: undefined,
        table: undefined,
        rightImages: ['original-2_1', 'original-2_2', 'original-2_3'],
        tags: [
          { text: '肩こり', color: 'bg-tag-green' },
          { text: '眼精疲労', color: 'bg-tag-green' },
          { text: 'ヘアケア', color: 'bg-tag-blue' },
          { text: 'リラックス', color: 'bg-tag-blue' },
        ],
      },

      //ハイビスカスジャグジー＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
      {
        title: 'ハイビスカス<br class="lg:hidden">ジャグジー',
        titleEn: 'Immerse Yourself in the Luxury of a Hibiscus Jacuzzi Experience',
        lead: '沖縄の太陽を浴びて育ったハイビスカスの香りと効能が、心と体を優しく包み込みます。南国の自然に抱かれながら、至福のスパタイムをお楽しみください。',
        desc: `
          <p class='pb-4'>南国の花ハイビスカスのエキスを贅沢に使用したルビー色にきらめくジャグジーはお肌に潤いと輝きを与えてくれます。</p>
          <p class='pb-4'>古代エジプトの女王クレオパトラが「若さ」と「美貌」を保つため、ハイビスカスティーとして愛飲したとも伝えられています。</p>
        `,
        descriptionImages: undefined,
        table: undefined,
        rightImages: ['original-3_1', 'original-3_2', 'original-3_3'],
        tags: [
          { text: 'くすみ', color: 'bg-tag-pink' },
          { text: '保湿', color: 'bg-tag-pink' },
          { text: '冷え性', color: 'bg-tag-red' },
          { text: 'リラックス', color: 'bg-tag-blue' },
        ],
      },
    ],
  },
  {
    areaTitle: '美ら島コース',
    areaTitleEn: 'chura-shima course',
    tabs: [
      {
        title: '美ら島ボディパック',
        titleEn: 'Blessed by Okinawa’s sun and sea — a treatment with island botanicals for radiant, nourished skin.',
        lead: '沖縄の大自然が育んだ素材で、お肌に潤いと透明感を。',
        desc: `<p class='pb-4'>太陽の恵みをたくさん含んだ植物と美しい珊瑚礁が広がる沖縄の海。</p>
        <p class='pb-4'>それら大自然からの贈り物がパナ・ンこだわりの化粧材。</p>
        <p>紫外線を浴びたお肌や日頃手の届きにくい箇所など、お身体全身に潤いを与え、健やかなお肌へと導きます。</p>`,
        descriptionImages: undefined,
        table: [
          {
            label: '施術時間',
            items: [
              { value: '30分' },
            ],
          },
        ],
        rightImages: ['chura-1_1', 'chura-1_2', 'chura-1_3'],
        tags: [
          { text: 'くすみ', color: 'bg-tag-pink' },
          { text: 'シミ', color: 'bg-tag-pink' },
          { text: '保湿', color: 'bg-tag-pink' },
          { text: '美白', color: 'bg-tag-pink' },
          { text: '毛穴の汚れ', color: 'bg-tag-pink' },
        ],
      },
      {
        title: '美ら島ボディスクラブ',
        titleEn: 'Polished with Okinawan sea salt and coral calcium, revealing smooth, radiant skin.',
        lead: '沖縄の海塩と珊瑚カルシウムで叶える、透明感あふれるなめらかな素肌へ。',
        desc: `<p class='pb-4'>古い角質を取り除き、透明感のあるふわふわなお肌に導きます。</p>
        <p>スクラブの程よいマッサージは血行を促進し、内側からのくすみ対策にもなります。</p>`,
        descriptionImages: undefined,
        table: [
          {
            label: '施術時間',
            items: [
              { value: '30分' },
            ],
          },
        ],
        rightImages: ['chura-2_1', 'chura-2_2', 'chura-2_3'],
        tags: [
          { text: 'くすみ', color: 'bg-tag-pink' },
          { text: '角質肥厚', color: 'bg-tag-pink' },
          { text: '老廃物', color: 'bg-tag-red' },
          { text: '引き締め', color: 'bg-tag-red' },
        ],
      },
      {
        title: '美ら島フェイシャル（デコルテ付）',
        titleEn: 'Okinawan botanicals and coral care for radiant, hydrated skin.',
        lead: '琉球の自然素材でお顔とデコルテをケア。透明感と潤いに満ちた、美しく健やかな素肌へ。',
        desc: `<p class='pb-4'>クレンジングからお顔＋デコルテのアロマオイルマッサージを行ったあと、珊瑚、ゴーヤー、黒糖、モズク、クチャ（琉球粘土）など、こだわりの琉球粧材にてパックいたします。</p>
        <p>透明感のあるお肌、潤いのあるみずみずしいお肌、ハリのあるお肌、美白など様々な効果を与えてくれます。</p>`,
        descriptionImages: undefined,
        table: [
          {
            label: '施術時間',
            items: [
              { value: '45分' },
            ],
          },
        ],
        rightImages: ['chura-3_1', 'chura-3_2', 'chura-3_3'],
        tags: [
          { text: 'くすみ', color: 'bg-tag-pink' },
          { text: 'シミ', color: 'bg-tag-pink' },
          { text: '保湿', color: 'bg-tag-pink' },
          { text: '美白', color: 'bg-tag-pink' },
          { text: '毛穴の汚れ', color: 'bg-tag-pink' },
        ],
      },
    ],
  },
  {
    areaTitle: 'フットマッサージ',
    areaTitleEn: 'foot massage',
    tabs: [
      {
        title: '月桃リフレクソロジー',
        titleEn: 'Step into lightness with shell ginger — Okinawa’s healing touch for your feet.',
        lead: '沖縄の月桃アロマで、旅の疲れを癒し足元から軽やかに。',
        desc: `<p class='pb-4'>沖縄に咲く月桃。</p>
        <p>保湿と抗菌効果がある爽やかな香りのアロマオイルで膝下から足裏まで心地よくほぐします。</p>`,
        descriptionImages: undefined,
        table: [
          {
            label: '施術時間',
            items: [
              { value: '30分' },
            ],
          },
        ],
        rightImages: ['foot-1_1', 'foot-1_2', 'foot-1_3'],
        tags: [
          { text: 'むくみ', color: 'bg-tag-red' },
          { text: '保湿', color: 'bg-tag-pink' },
          { text: '代謝', color: 'bg-tag-green' },
          { text: 'リラックス', color: 'bg-tag-blue' },
        ],
      },
      {
        title: '足浴',
        titleEn: 'A soothing foot bath with Okinawa’s herbs, awamori, and coral salt.',
        lead: '沖縄の薬草と泡盛、珊瑚の恵みで足元から整える癒しのひととき。',
        desc: `<p>古来より長寿の薬草と言われる「長命草」や「月桃」、ぬちぐすい（命の薬）とも言われる「泡盛」を入れ足元を温めたあと、珊瑚カルシウムをブレンドした沖縄の塩でやさしく塩もみし、すべすべの素足へと導きます。</p>`,
        descriptionImages: undefined,
        table: [
          {
            label: '施術時間',
            items: [
              { value: '30分' },
            ],
          },
        ],
        rightImages: ['foot-2_1', 'foot-2_2', 'foot-2_3'],
        tags: [
          { text: 'むくみ', color: 'bg-tag-red' },
          { text: '冷え性', color: 'bg-tag-red' },
          { text: 'リラックス', color: 'bg-tag-blue' },
        ],
      },
    ],
  },
  {
    areaTitle: 'アロマ・タイ式',
    areaTitleEn: 'aromatherapy / thai massage',
    tabs: [
      {
        title: 'アロマオイルマッサージ',
        titleEn: 'Relax and unwind — a gentle full-body massage with your choice of soothing oils.',
        lead: '好みの香りに包まれ、全身を優しくほぐすスタンダードメニュー',
        desc: `<p class='pb-4'>アロマオイルによる全身のマッサージで筋肉をやさしくほぐします。</p>
        <p class='pb-4'>心身共にアロマの香りに包まれて夢心地に誘います。</p>
        <p class='pb-4'>沖縄の人に昔から親しまれている月桃のアロマオイルやバリニーズオイルなど、多数のオイルからお好きな香りをお選びいただけます。</p>
        <p>のんびりリラックスしたいという方のスタンダードメニューです。</p>`,
        descriptionImages: undefined,
        table: [
          {
            label: '施術時間',
            items: [
              { value: '30分' },
              { value: '60分' },
            ],
          },
        ],
        rightImages: ['massage-1_1', 'massage-1_2', 'massage-1_3'],
        tags: [
          { text: '肩こり', color: 'bg-tag-green' },
          { text: '全身の疲れ', color: 'bg-tag-green' },
          { text: '保湿', color: 'bg-tag-pink' },
          { text: 'リラックス', color: 'bg-tag-blue' },
        ],
      },
      {
        title: 'タイ式リラクゼーションマッサージ',
        titleEn: 'Experience 2,500 years of wisdom — a dynamic blend of acupressure and stretching.',
        lead: 'エネルギーラインを整え、ストレッチで全身を解きほぐす伝統の技。',
        desc: `<p class='pb-4'>約2500年の歴史を持つタイ伝統のマッサージ。</p>
        <p>体のエネルギーライン（セン）をマッサージで刺激し、程よいストレッチにより全身の筋肉をほぐし、血液とリンパの流れをスムーズにします。</p>`,
        descriptionImages: undefined,
        table: [
          {
            label: '施術時間',
            items: [
              { value: '30分' },
              { value: '60分' },
            ],
          },
        ],
        rightImages: ['massage-2_1', 'massage-2_2', 'massage-2_3'],
        tags: [
          { text: '肩こり', color: 'bg-tag-green' },
          { text: '全身の疲れ', color: 'bg-tag-green' },
          { text: '代謝', color: 'bg-tag-green' },
          { text: 'リラックス', color: 'bg-tag-blue' },
        ],
      },
    ],
  },
];
