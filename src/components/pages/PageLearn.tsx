'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import '@/styles/component/lineTitle.scss';
import '@/styles/component/button.scss';
import '@/styles/component/pageLearn.scss';

type PageLearnItem = {
  href: string;
  img: string;
  title: string;
  titleEn?: string;
};

type PageLearnProps = {
  lead: string;
  subLead?: string;
  desc?: string;
  items: PageLearnItem[]; // ここでページごとのリストを渡す
};

export default function PageLearn({ lead, subLead, desc, items }: PageLearnProps) {
  const pathname = usePathname(); // 現在のパスを取得
  // 現在のページのhrefを除外
  const filteredItems = items.filter(item => pathname !== `/story/${item.href}`);

  if (filteredItems.length === 0) return null;

  return (
    <div className="u-pageLearn mx-auto md:mx-[11%] mt-20 md:mb-40 px-5 md:px-0">
      <div className="u-lineTitle u-fade-in flex items-center gap-2 md:gap-4 mb-10">
        <div className="u-pageLearn-title md:flex items-center gap-2 flex-shrink-0">
          <h3 className="shippori text-2xl md:text-[28px]">{lead}</h3>
          {subLead && <p className="garamond text-lg md:text-xl leading-tight">{subLead}</p>}
        </div>
      </div>
      {desc && <div dangerouslySetInnerHTML={{ __html: desc }} />}
      <ul className="md:flex gap-4">
        {filteredItems.map((item, index) => (
        <li
            key={item.href}
            className={`u-fade-in flex-shrink-0 md:w-[calc(50%-0.5rem)]
              ${index == 1 ? 'mt-10 md:mt-0' : ''}
              `}
          >
            <Link href={item.href} className='u-pageLearn-link block'>
              <div className="u-pageLearn-thumb relative w-full h-[200px] md:h-[250px] pb-[57%] overflow-hidden">
                <Image
                  src={`/images/story/thumb_${item.img}.jpg`}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="u-pageLearn-img object-cover"
                />
              </div>
              <div className='flex items-center justify-end pt-2 md:pt-4 px-2 md:pl-6'>
                <div>
                  <h4 className='shippori font-medium text-lg md:text-[22px] leading-tight'>{item.title}</h4>
                  {item.titleEn && <p className='garamond'>{item.titleEn}</p>}
                </div>
                <div className='u-button u-button-small block w-[120px] md:w-[150px] h-[36px] border border-pana pt-[5px] md:pt-[2px] pl-2 md:pl-4 ml-auto'>
                  <p className='u-button-text shippori font-medium text-sm md:text-lg'>もっと読む</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
