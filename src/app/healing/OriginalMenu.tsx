'use client';
import Image from 'next/image';

const sectionsData = [
  {
    id: 1,
    subtitle: '元祖琉球マッサージ',
    title: '「琉球ほぐし手」',
    texts: [
      '琉球空手の「技」と八重山舞踊の独特な「手の舞」を取り入れた秘伝のほぐし技術です。',
      ' 凝り固まった肩や首筋、腰の筋肉にしっかりとアプローチ。空手の「正拳」「平拳」八重山舞踊の「こねり手」など手の技を使って筋肉をしっかりと刺激し、おもてなしの心で優しくほぐしていきます。',
    ],
    note: '※パナ・ン南ぬ島石垣空港店限定メニュー'
  },
  {
    id: 2,
    title: 'こだわりの琉球粧材',
    texts: [
      '珊瑚、ゴーヤー、黒糖、モズク、クチャ（琉球粘土）など、こだわりの琉球粧材を使用',
      '透明感のあるお肌、潤いのあるみずみずしいお肌、ハリのあるお肌、美白など様々な効果を与えてくれます。',
    ],
  },
  {
    id: 3,
    title: '月桃リフレクソロジー',
    texts:[
      '沖縄に咲く月桃。保湿と抗菌効果がある爽やかな香りのアロマオイルで膝下から足裏まで心地よくほぐします。',
      '島旅で疲れた足を軽やかに癒してくれます。',
      '足の疲れが気になる方にオススメのメニューです。',
    ],
  },
];

export default function OriginalMenu() {

  return (
    <ul
      className=" lg:flex lg:justify-start px-5 lg:gap-6 lg:px-6"
    >
      {sectionsData.map((section) => (
        <li
          key={section.id}
          className="u-fade-in lg:w-[33%] pb-10 lg:pb-0"
        >
          <div className="w-full h-[250px] lg:h-[450px] relative">
            <Image
              src={`/images/healing/img_menu-${section.id}.jpg`}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
          <div className="u-menu-textArea w-full bg-white lg:flex-shrink-0">
            <div className="u-menuHead pt-4 pb-2 text-center">
              <h3 className="shippori font-medium text-2xl py-2">
                {section.subtitle && <span className="shippori text-base block lg:inline">{section.subtitle}</span>}
                {section.title}
              </h3>
            </div>
            <div className="shippori font-medium text-base leading-[180%] px-4">
              {section.texts.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
              {section.note && <p className="shippori text-sm pt-2">{section.note}</p>}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
