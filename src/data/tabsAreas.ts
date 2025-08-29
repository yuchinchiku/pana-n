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
        titleSmall: '元祖琉球<br class="md:hidden">マッサージ',
        title: '「琉球ほぐし手（てぃ）」',
        titleEn: 'Experience the only one of its kind — the original Ryukyuan Massage, only at pana-n.',
        lead: '琉球の技と想いが融合したパナ・ンの独自技法',
        desc: `
          <p class='pb-4'>琉球空手の「正拳」や「平拳」の「技」と、<br class="hidden md:block">
          琉球・八重山舞踊に伝わるしなやかな「こねり手」の“手の舞”を融合させた、<br class="hidden md:block">
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
        title: '琉球ヘッド<br class="md:hidden">マッサージ',
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
        title: 'ハイビスカス<br class="md:hidden">ジャグジー',
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
    areaTitle: '街灯エリア',
    areaTitleEn: '',
    tabs: [
      {
        title: 'タブ1-1',
        titleEn: 'Tab 1-1',
        lead: 'リード文1-1',
        desc: '...', // 簡略化
        descriptionImages: undefined,
        table: [
          {
            label: '施術時間',
            items: [
              { value: '30分' },
            ],
          },
        ],
        rightImages: ['r1-1.jpg', 'r1-2.jpg', 'r1-3.jpg'],
        tags: [
          { text: 'タグA', color: 'bg-red-400' },
          { text: 'タグB', color: 'bg-green-400' },
          { text: 'タグC', color: 'bg-blue-400' },
          { text: 'タグD', color: 'bg-yellow-400' },
        ],
      },
    ],
  },
];
