import type { Metadata } from "next";
import ScrollAnimation from '@/components/ScrollAnimation';
import StoryScroller from '@/components/pages/StoryScroller';
import ButtonBack from '@/components/ButtonBack';
import '@/styles/pages/story/story.scss';
import '@/styles/component/link.scss';

export const metadata: Metadata = {
  title: "パナ・ンの夢  | パナ・ンの物語 | 元祖琉球マッサージ | パナ・ン",
  description: "未来へと続くパナ・ンの挑戦。沖縄発の癒しを世界へ広げ、人々の心と身体を豊かにするビジョンを描きます。",
};


type Story = {
  num: string;
  title: string;
  desc: string;
  pageName: string;
};

const introData = {
  pageName: 'future',
  num: '4',
  title: 'パナ・ンの夢 ',
  subTitle: "pana-n’s dream",
  text: "想いは巡りて花ひらく。",
  text2: "未来へと続くパナ・ンの挑戦。"
};

const StoryList: Story[] = [
  {
    pageName: 'future',
    num: '01',
    title: 'パナ・ンが描く未来——沖縄全島に「癒しのオアシス」を広げていくということ',
    desc: `<p>「疲れていても、ふっと軽くなれる」</p>
    <p>「ここに来たら、なんか元気になれる」</p>
    <p>そんなふうに思ってもらえる場所——</p>
    <p>つまり、地域の人々にとっての“癒しのオアシス”のような存在を、沖縄全土に広げていきたい。</p>
    <p> それが、パナ・ンの夢です。</p>
    <p class='pt-6'>沖縄の祖先から恩を受け、心と体を整える場所づくりをさせて頂きたい。</p>
    <p>セラピーという形を超えて、人が集まり、人が癒され、人が繋がる場所をパナ・ンは育てていきたいと思っております。</p>`,
  },
  {
    pageName: 'future',
    num: '02',
    title: '恩返しにゴールはない——ただ毎日が恩返しの繰り返し',
    desc: `<p><a class="u-textLink underline" href="/storybeginning">パナ・ンの始まり</a>で語りましたように、パナ・ンが始まった、その原点には「恩返し」の気持ちがあります。</p>
    <p>私たちパナ・ンは、「祖先から繋がってきた想いに対する恩返しをしたい」ただその一念で想いを形にしてきました。</p>
    <p>つまり、恩返しにゴールはない——</p>
    <p>ただ毎日が恩返しの繰り返しであり前進であると考えております</p>
    <p class='pt-6'>ゴールを決め、前進する。</p>
    <p>一度ゴールを決めてしまったら、その次にはまた新たなゴールを設定してしまう。</p>
    <p>これは資本主義経済における思考であり、常に右上がり曲線を更新していくことになります。</p>
    <p class='pt-6'>しかし、私たちパナ・ンが大切に守りたい価値は「恩返し」といった原点に戻り、毎日の恩返しの繰り返しであり、それが前進なのです。</p>`,
  },
  {
    pageName: 'future',
    num: '03',
    title: '「元祖琉球マッサージ」を世界へ',
    desc: `<p>世界には様々なマッサージ文化があり、各国でその国を代表するようなマッサージがあります。﻿</p>
    <p>ハワイの「ロミロミマッサージ」、</p>
    <p>バリ島の「バリニーズマッサージ」、</p>
    <p>タイの「タイ式マッサージ」</p>
    <p>スウェーデンの「スウェディッシュマッサージ」<br>などがあります。</p>
    <p>このようにマッサージのブランドが定着している国では、それぞれの想いを込めたマッサージを通して地域の恩恵を受けるわけです。</p>
    <p class='pt-6'>しかし、沖縄には独自のマッサージ文化が定着していません。</p>
    <p>この現状にパナ・ンはとても悲しく思いました。</p>
    <p class='pt-6'>そこでパナ・ンは、琉球にちなんだ「技」を「元祖琉球マッサージ」といった独自の技術の中に落とし込み、日々研究してきました。</p>
    <p>元祖琉球マッサージとは、琉球空手の技と琉球舞踊（宮廷舞踊）、琉球・八重山舞踊（生活に密着した農耕舞踊）の手の舞を取り入れた秘伝のマッサージです。</p>
    <p class='pt-6'>沖縄の土地に訪ねる人々が元祖琉球マッサージの恩恵を受け、笑顔と共に幸せなひと時を過ごす——</p>
    <p>それがパナ・ンが思う恩返しです。</p>
    <p>未来を作っていくことをパナ・ンは夢がっています。</p>`,
  },
];

export default function StoryLayout() {
  return (
    <div className='lg:ml-[185px] lg:mr-20'>
      <ScrollAnimation />
      <StoryScroller stories={StoryList} intro={introData} />
      <ButtonBack
        href="/story"
        text="物語一覧へ"
        className="u-bottun-md mt-10 lg:mt-16 mb-40 lg:mb-60 mx-auto"
      />
      </div>
  );
}
