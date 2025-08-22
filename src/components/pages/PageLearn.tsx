'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import '@/styles/component/lineTitle.scss';
import '@/styles/component/button.scss';

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
    <div className="u-pageLearn mx-auto md:mb-40 md:mx-[21.8%]">
      <div className="u-lineTitle w-full flex items-center gap-4 mb-10 ">
        <div className="u-pageLearn-title flex items-center gap-2 flex-shrink-0">
          <h3 className="shippori text-[28px]">{lead}</h3>
          {subLead && <p className="garamond text-xl leading-tight">{subLead}</p>}
        </div>
      </div>
      {desc && <div dangerouslySetInnerHTML={{ __html: desc }} />}
      <ul className="flex gap-4">
        {filteredItems.map((item) => (
        <li
            key={item.href}
            className="flex-shrink-0 w-[calc(50%-0.5rem)]" // 例：2列 or 3列にレスポンシブ
          >
            <Link href={`/story/${item.href}`} className='u-pageLearn-link block'>
              <div className="u-pageLearn-thumb relative w-full h-0 pb-[57%] overflow-hidden">
                <Image
                  src={`/images/story/thumb_${item.img}.jpg`}
                  alt={item.title}
                  width={438}
                  height={250}
                  className="u-pageLearn-img object-cover"
                />
              </div>
              <div className='flex items-center justify-end pt-4 pl-6'>
                <div>
                  <h4 className='shippori font-medium text-[22px] leading-tight'>{item.title}</h4>
                  {item.titleEn && <p className='garamond'>{item.titleEn}</p>}
                </div>
                <div className='u-button u-button-small block w-[80px] md:w-[150px] h-[36px] border border-pana pt-[2px] pl-4 ml-auto'>
                  <p className='u-button-text shippori font-medium text-lg'>もっと読む</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
