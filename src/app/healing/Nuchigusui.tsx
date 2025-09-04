'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '@/styles/component/slider.scss';

type Nuchi = {
  title: string;
  texts?: string[];
};

const nuchi: Nuchi[] = [
  { title: '月桃',
    texts:[
      '琉球の人々に昔から親しまれてきた月桃。',
      '甘くて爽やかな香りの月桃には、ポリフェノールが赤ワインの約34倍もあるといわれ、抗酸化作用や保湿作用などに優れています。',
    ],
  },
  { title: '琉球クチャ',
    texts:[
      '約500万年という長い年月をかけ、沖縄の海底に推積してできたミネラルたっぷりの琉球粘土。赤血球よりも小さい超微粒子で毛穴の奥の汚れを取り除きます。また抗酸化作用や保湿作用にも優れています。',
    ],
  },
  { title: 'ハイビスカス',
    texts:[
      '琉球を鮮やかに彩るハイビスカス。',
      '高貴な花ともいわれ、沖縄で重宝されるハイビスカスは、美白効果のあるビタミンCや疲労回復をするクエン酸などが豊富に含まれている美と健康のお花です。',
    ],
  },
  { title: '珊瑚',
    texts:[
      '沖縄の透き通った海で育った珊瑚礁。',
      'その美容珊瑚は豊富なミネラル含んでおり、吸着作用でお肌の汚れや古い角質を取り除き、海のような透明感のあるお肌に導きます。',
    ],
  },
  { title: '黒糖',
    texts:[
      '沖縄の太陽と栄養を含んだ海風で育つサトウキビから採れる黒糖は、昔から美と健康のために食されてきました。黒糖オリゴには美白や抗アレルギーといった効果があり、保湿作用でお肌に潤いを与えてくれます。',
    ],
  },
  { title: 'ゴーヤー',
    texts:[
      '沖縄の強い日差しの中で育まれたゴーヤー。',
      '琉球の土でミネラルをたっぷりと吸収したゴーヤーには、ビタミンCが豊富でお肌を紫外線から守り、みずみずしいお肌へと導きます。',
    ],
  },
  { title: '長命草',
    texts:[
      '昔から琉球では、「一株食べると一日長生きする」長寿の薬草として愛されてきました。',
      '長命草はアンチェインジングには欠かせない抗酸化作用があり、お肌の老化を防ぎます。',
    ],
  },
  { title: 'モズク',
    texts:[
      '沖縄固有の海藻であるオキナワモズクのエキスは「フコイダン」が豊富に含まれています。ぬめり成分であるフコダインの優れた保湿力でお肌を乾燥から守り、ハリのあるお肌に導きます。',
    ],
  },
  { title: 'シークヮーサー',
    texts:[
      '沖縄を代表する柑橘類のシークヮーサーの果皮には、美容と健康の両面からアプローチする「ノビレチン」が多く含まれます。',
      'しわ予防と新陳代謝アップの効果が期待でき、お肌の生まれ変わりを活性化。美肌を作り出してくれます。',
    ],
  },
];

export default function Nuchigusui() {

  return (
    <div className='u-SliderNuchigusui u-fade-in relative pl-5 lg:pl-6 overflow-visible'>
      <Swiper
        modules={[Autoplay, Pagination]}
        loop
        speed={1000}
        spaceBetween={24}
        pagination={{ clickable: true, el: '.custom-pagination',}}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1.5 },
          645: { slidesPerView: 3 },
          1024: { slidesPerView: 3.5 },
        }}
        className="u-fade-in w-full"
      >
        {nuchi.map((nuchi, index) => (
          <SwiperSlide key={index} className='flex-shrink-0 border border-pana'>
            <div className='u-store-thumb relative w-full h-[250px] lg:h-[450px] overflow-hidden'>
              <Image
                src={`/images/healing/img_nuchigusui-${index+1}.jpg`}
                alt=''
                fill
                className="object-cover"
                sizes="(max-width: 768px) 280px, 359px"
              />
            </div>
            <div className='shippori font-medium h-[295px] lg:h-[246px] px-4'>
              <h4 className='text-lg lg:text-[22px] pt-4 pb-2'>{nuchi.title}</h4>
              <div className="shippori font-medium text-sm lg:text-base leading-[180%] pb-4 lg:pb-0">
              {nuchi.texts?.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination mt-4"></div>
    </div>
  );
}
