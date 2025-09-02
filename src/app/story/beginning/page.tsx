import type { Metadata } from "next";
import ScrollAnimation from '@/components/ScrollAnimation';
import StoryScroller from '@/components/pages/StoryScroller';
import PageIntro from '@/components/pages/PageIntro';
import StoryNext from '@/components/pages/StoryNext';
import PageTransitionFog from '@/components/PageTransitionFog';
import '@/styles/pages/story/story.scss';

export const metadata: Metadata = {
  title: "パナ・ンの始まり | パナ・ンの物語 | 琉球の想いと癒しをあなたへ。心のひだに触れ、魂をほぐす琉球パナ・ン",
  description: "パナ・ンの誕生の背景や想いを紐解くストーリー。沖縄の自然と文化が生み出した、唯一無二の癒しの空間をご紹介します。",
};


type Story = {
  num: string;
  title: string;
  desc: string;
  pageName: string;
};

const introData = {
  pageName: 'beginning',
  num: '1',
  title: 'パナ・ンの始まり',
  subTitle: "pana-n's beginning",
  text: "始まりの、その先へ。",
  text2: "パナ・ンが始まったその想い。"
};


const StoryList: Story[] = [
  {
    pageName: 'beginning',
    num: '01',
    title: '「パナ・ン」という名前の由来',
    desc: `<p>「パナ」 八重山方言（ヤイマムニ）で「花」<br />「ン」 原点であり、新たな始まりを告げる言葉 </p>
    <p class='pt-6'>常に新しい可能性へと続いていくお花のように、沖縄の伝統を受け継いで、未来に渡していきたい。<br />沖縄の先祖から受け継いだ癒しを、世界に花開かせたいという、深い願いを胸に。</p>
    <p>ここに、パナ・ンの、そして私たちの物語が始まります。</p>`
  },
  {
    pageName: 'beginning',
    num: '02',
    title: '「パナ（花）」のように咲き、次の世代へ伝えていく',
    desc: `<p>人から見られて「かわいいね」と言われる花もあれば、山の奥や崖の上など、誰にも見られなくても一生懸命咲く花もあるでしょう。</p>
    <p class='pt-6'>花は、桜、ひまわり、たんぽぽ、どんな花でも皆一生懸命咲き、自分の証を残し、次の世代に種として伝えていきます。<br />この姿は人間も企業も全て同じだと考えています。</p>
    <p class='pt-6'>黄色、赤、白、それぞれ色で自分らしく咲く花のように、一人一人の人が夢を持って一生懸命咲いて、次に伝えていくこと。<br />これが私たちの哲学です。</p>`,
  },
  {
    pageName: 'beginning',
    num: '03',
    title: '大きく咲き、集う人々に幸せを分かち合う場所として',
    desc: `<p>「私たちの周りに集う全ての人々に、豊かな幸せを分かち与えたい」</p>
    <p>私たちパナ・ンは、大きく咲いて多くの命を支える花のように、様々な想いを集め、集う人々に幸せを分かち合える場所作りに心掛けています。</p>
    <p class='pt-6'>「集まる人々が自分らしく」</p><p>ここに集うすべての人が、自分らしく輝き咲くことを願っています。</p>
    <p>一生懸命に、そして自分らしく咲き誇る場所でありたい。<p/>
    <p>これが「パナ・ン」の想いです。</p>
    <p class='pt-6'>「みんなで幸せになろう」<br /> 「集う人々に幸せを分かち合う」</p>
    <p>その想いで、私たちパナ・ンは、毎日人と人との繋がりと絆を大切にしています。</p>`,
  },
];

export default function StoryLayout() {
  return (
    <div className='md:ml-[185px] md:mr-20'>
      <PageTransitionFog />
      <ScrollAnimation />
      <StoryScroller stories={StoryList} intro={introData} />
      <PageIntro
        lead="石垣から始まったパナ・ンの想い"
        subLead="Born in Ishigaki Island, Pana-n’s journey of heartfelt intentions."
        desc={
          `<p>2006年3月に石垣島で設立されたパナ・ン。</p>
          <p>尚巴志の時代から受け継がれた琉球王国の叡智と、<br class='hidden md:block' />
          沖縄の豊かな自然の恵みを活かした癒し。</p>
          <p>この場所を創り上げてきた先人たちの深い恩を受けてきています。</p>
          <p>全ての命に対してする「恩返し」として、<br class='hidden md:block' />
          エステ・ほぐしの世界で出会う様々な命との付き合いの中、<br class='hidden md:block' />
          パナ・ンの恩返しを全力でしていきたい。
          </p>`}
      />
      <StoryNext
        storyNextClass="okinawa"
        num= "2"
        title= "沖縄、そして恩返し"
        subTitle= "pana-n and okinawa"
        link= "/story/okinawa"
      />
      </div>
  );
}
