import type { Metadata } from "next";
import ScrollAnimation from '@/components/ScrollAnimation';
import StoryScroller from '@/components/pages/StoryScroller';
import PageIntro from '@/components/pages/PageIntro';
import StoryNext from '@/components/pages/StoryNext';
import '@/styles/pages/story/story.scss';

export const metadata: Metadata = {
  title: "パナ・ンを作る人々 | パナ・ンの物語 | 元祖琉球マッサージ | パナ・ン",
  description: "パナ・ンの施術を支えるセラピストやスタッフたちの想い。確かな技術とおもてなしの心で、癒しの時間をお届けします。",
};


type Story = {
  num: string;
  title: string;
  desc: string;
  pageName: string;
};

const introData = {
  pageName: 'therapist',
  num: '3',
  title: 'パナ・ンを作る人々',
  subTitle: "pana-n’s therapist",
  text: "手のひらに宿るまごころ。",
  text2: "「心」に触れる癒しの本質。"
};


const StoryList: Story[] = [
  {
    pageName: 'therapist',
    num: '01',
    title: 'パナ・ンの「セラピスト」になるとは',
    desc: `<p>人々の人生に「心から触れる」セラピスト。</p>
    <p>パナ・ンを作るセラピストは、ただほぐしの技術を持って施術する人ではありません。</p>
    <p>私たちパナ・ンが大切にしているのは、「触れる」という行為の本質に向き合い、相手の心や人生にまで寄り添うセラピストとしての“在り方”です。</p>
    <p class='pt-6'>施術はたったの数十分かもしれません。</p>
    <p>しかし、その時間、お客様にとって「身体と心を預ける」特別な時間。</p>
    <p>その瞬間に寄り添うセラピストの在り方次第で、その時間は、ただのほぐし・にも、人生を少し軽くする“癒し”にもなります。</p>`,
  },
  {
    pageName: 'therapist',
    num: '02',
    title: '謙虚であることー“癒す力”の源',
    desc: `<p>ほぐし・エステのスキルは、経験を積めば積むほど上達していきます。</p>
    <p>しかし、その一方で、初心や恩返しの気持ちが薄れてしまうこともあります。</p>
    <p>だからこそ、パナ・ンのセラピストは繰り返し伝えます。</p>
    <p>「どれだけ経験を積んでも、謙虚であることを忘れてはいけない」と。</p>
    <p class='pt-6'>お客様に対して、共にパナ・ンを作っていく仲間に対して、そして自分自身に対して。</p>
    <p>敬意を忘れず、常に謙虚で迎える心の姿勢こそが、本当の意味での人に寄り添うこと。</p>
    <p>謙虚であること——それは、セラピストの“癒す力”の根っこなのです。</p>`,
  },
  {
    pageName: 'therapist',
    num: '03',
    title: '集まってくる人々の「夢」を大切に',
    desc: `<p>パナ・ンを一緒に作っていくセラピストの仲間を採用する際、最も重視するのは「人柄」です。</p>
    <p>——その人々がどのような「感謝の気持ち」で毎日を過ごしているか、「恩返しの心」でお仕事に努めているか、そして、「自分の夢」に向けて着実に進んでいるか。</p>
    <p>これらの要素は、人々の声や言葉の端々から伝わります。</p>
    <p class='pt-6'>夢は大きくなくても構いません。</p>
    <p>例えば、「誰かを笑顔にしたい」「癒しを届けたい」——</p>
    <p>そんな想いを持っていることが、この仕事を続ける大きな支えになります。</p>`,
  },
];

export default function StoryLayout() {
  return (
    <div className='lg:ml-[185px] lg:mr-20'>
      <ScrollAnimation />
      <StoryScroller stories={StoryList} intro={introData} />
      <PageIntro
        lead="パナ・ンで、共に成長する"
        subLead="Together, We Grow at Pana-n."
        desc={
          `<p>パナ・ンでは、セラピストとしての“在り方”を日々の実践の中で大切に育てていく仲間を探しています。</p>
          <p>——「触れる」とはどういうことか</p>
          <p>——「寄り添う」とはどういうことか</p>
          <p>その答えはすぐに出ないかもしれません。</p>
          <p>ただできるようになるではなく、本質を理解するようになること。</p>
          <p>それが、パナ・ンの育成が目指す姿です。</p>
          <p>パナ・ンはこれから皆さんと共に未来を作っていきたいと思っております。</p>`}
      />
      <StoryNext
        storyNextClass="future"
        num= "4"
        title= "パナ・ンの夢"
        subTitle= "pana-n’s dream"
        link= "/story/future"
      />
      </div>
  );
}
