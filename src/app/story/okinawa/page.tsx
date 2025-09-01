import type { Metadata } from "next";
import ScrollAnimation from '@/components/ScrollAnimation';
import StoryScroller from '@/components/pages/StoryScroller';
import PageIntro from '@/components/pages/PageIntro';
import StoryNext from '@/components/pages/StoryNext';
import '@/styles/pages/story/story.scss';

export const metadata: Metadata = {
  title: "沖縄、そして恩返し | パナ・ンの物語 | 琉球の想いと癒しをあなたへ。心のひだに触れ、魂をほぐす琉球パナ・ン",
  description: "沖縄の土地・歴史・文化と深く結びついたパナ・ン。地域社会やお客様への感謝の気持ちを込めたパナ・ンの恩返し。琉球の知恵と伝統技術を受け継ぎながら、至福の癒しを提供します。",
};


type Story = {
  num: string;
  title: string;
  desc: string;
  pageName: string;
};

const introData = {
  pageName: 'okinawa',
  num: '2',
  title: '沖縄、そして恩返し',
  subTitle: "okinawa and ongaeshi",
  text: "沖縄の大地と心を結ぶもの。",
  text2: "琉球の風とともに。"
};


const StoryList: Story[] = [
  {
    pageName: 'okinawa',
    num: '01',
    title: 'イチャリバチョーデー（行き逢えば皆友達）',
    desc: `
    <p>古代琉球には「イチャリバチョーデー」という言葉があります。</p>
    <p>「一度会ったら皆兄弟」という琉球の精神を体現したこの言葉は、正しくパナ・ンが大事に守っている理念です。</p>
    <p>この「イチャリバチョーデー」の一期一会の精神で、皆様を迎える。それがパナ・ンの真髄です。</p>`,
  },
  {
    pageName: 'okinawa',
    num: '02',
    title: '沖縄を創り上げてきた先人たちの想い、その想いへの「恩返し」',
    desc: `<p>「沖縄」という地には、琉球時代からの文化や伝統を何百年もかけて築き上げてきた祖先たちがいます。</p>
    <p>その先人たちが想いを守ってきたからこそ、今のパナ・ンがあると信じています。</p>
    <p class='pt-6'>だから、パナ・ンは石垣島で事業を興し、先人たちの思いを形にすることで「恩返し」をしようと考えました。全ての命に対してする恩返し。</p>
    <p>マッサージの世界で出会う様々な命との付き合いの中、パナ・ンの恩返しを全力でしていきたいと思っております。</p>`,
  },
  {
    pageName: 'okinawa',
    num: '03',
    title: '命の修行「全ての命への感謝」',
    desc: `<p>この石垣島には深い歴史、伝統、文化があります。しかし、この石垣島や沖縄を大事にまもってきたのは私たち人間だけではありません。私たちは沖縄の自然と全ての命に恵まれて生活していることにお気づきでしょうか。</p>
    <p>沖縄の空気は、無数の植物たちが織りなす息吹で満たされています。一呼吸ごとに、私たちは彼らの贈り物を受け取っています。そして、食卓に並ぶ一片の実り、一枚の葉すら、別の命から譲り受けた貴重な生命力の結晶なのです。</p>
    <p class='pt-6'>「動物、そして植物の命」</p><p>これらの命は決して当たり前のことではありません。<br>今日、私の皿に盛られたキャベツ。風と雨を受けて育ったほうれん草。</p>
    <p>彼らには更に親があり、子孫を残す確かな意志を持って育ち、命を続けてきました。</p>
    <p>その一番先端に立っている最も大切な命を頂き、今、私たちの体内で新たな命へと形を変えていくわけです。</p>
    <p class='pt-6'>もし私たちが、その尊い献身を無にするような行いをしたならば— 他者の物に手を伸ばし、他人を傷つけ、困った人の顔から目を背けるならば—<br>今日私の体内に宿ったほうれん草の魂が嘆くのが聞こえるでしょう。</p>
    <p>「私の命をそんなことに使うの？」<br>震える声で問われれば、答えに窮するでしょう。</p><p>私たちには、その譲り受けた命を正しく用いる、厳かな責務があります。全ての命が、最後にこう囁けるように—「よかった、この人に食べられて、本当に幸せでした」と。安らかに次なる輪廻へと旅立てるように。</p>
    <p class='pt-6'>この恩返しの鎖を、私たちパナ・ンはこれからも紡ぎ続けていきたいと思います。 石垣島の太古の声に応えるように。</p>`
  },
];

export default function StoryLayout() {
  return (
    <div className='md:ml-[185px] md:mr-20'>
      <ScrollAnimation />
      <StoryScroller stories={StoryList} intro={introData} />
      <PageIntro
        lead="パナ・ンで働く人々への恩返し　ゆいまーる"
        subLead="Giving Back to the People Who Work at Pana-n – Yui Maaru."
        desc={
          `<p>『みんなが喜ぶ笑顔のために』</p>
          <p>ーこの言葉は、パナ・ンを訪れるお客様だけでなく、ここで働く仲間たちへの思いも込められています。</p>
          <p>セラピスト同士が笑顔でいることが、お互いの支えとなり、そしてお客様にも伝わっていく。それは長年パナ・ンを支えてきた人々への恩返しの形です。</p>
          <p>先人たちの思いを受け継ぎ、自分自身が何をすべきか、どう恩返しができるのかを考え、行動する人々。</p>
          <p>それが今までパナ・ンを作ってきてくれた人々です。</p>`}
      />
      <StoryNext
        storyNextClass="therapist"
        num= "3"
        title= "パナ・ンを作る人々"
        subTitle= "pana-n’s therapist"
        link= "/story/therapist"
      />
      </div>
  );
}
