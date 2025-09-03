'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { tabsAreas } from '@/data/tabsAreas';
import PageSecTitle from '@/components/pages/PageSecTitle';
import '@/styles/pages/originalMenu/originalMenu.scss';
import '@/styles/component/button.scss';

export default function TabArea() {
  const [activeTabs, setActiveTabs] = useState<number[]>(tabsAreas.map(() => 0));

  // タブエリアごとの ref 配列
  const areaRefs = useRef<(HTMLDivElement | null)[]>([]);

  // タブ切り替え
  const handleTabClick = (areaIndex: number, tabIndex: number) => {
    const newActiveTabs = [...activeTabs];
    newActiveTabs[areaIndex] = tabIndex;
    setActiveTabs(newActiveTabs);
  };

  // アンカークリック時スクロール（上に80px余白）
  const scrollToArea = (index: number) => {
    const element = areaRefs.current[index];
    if (!element) return;

    const yOffset = -80; // PC/SP共通
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16">
      {/* アンカーボタン */}
      <div className="u-fade-in flex justify-center flex-wrap md:flex-nowrap gap-3 md:gap-6 mt-10 md:mt-0 px-5">
        {tabsAreas.map((area, i) => (
          <button
            key={i}
            onClick={() => scrollToArea(i)}
            className="u-button u-button-anchor shippori text-lg md:text-[22px] border border-pana w-[48%] md:w-[24%] h-12 md:h-[60px]"
          >
            <span className='u-button-text -mt-2 block'>{area.areaTitle}</span>
          </button>
        ))}
      </div>

      {/* 各タブエリア */}
      {tabsAreas.map((area, areaIndex) => {
        const activeTab = area.tabs[activeTabs[areaIndex]]; // 現在アクティブなタブ
        if (!activeTab) return null;

        return (
          <div
            key={areaIndex}
            ref={(el) => { areaRefs.current[areaIndex] = el; }}
            className="u-fade-in px-5 md:px-6 pt-10 md:pt-20"
          >
            <PageSecTitle mainTitle={area.areaTitle} subTitle={area.areaTitleEn} />

            {/* タブボタン */}
            <div className="flex gap-1 md:gap-4">
              {area.tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => handleTabClick(areaIndex, i)}
                  className={`shippori font-medium w-[33%] md:h-20 border border-pana md:px-2 py-2 ${
                    activeTabs[areaIndex] === i ? 'bg-pana text-white' : 'bg-white'
                  }`}
                >
                  {tab.titleSmall && (
                    <span
                      className="text-xs md:text-base block"
                      dangerouslySetInnerHTML={{ __html: tab.titleSmall }}
                    />
                  )}
                  <span
                    className="text-base md:text-[22px]"
                    dangerouslySetInnerHTML={{ __html: tab.title }}
                  />

                </button>
              ))}
            </div>

            {/* タブコンテンツ */}
            <div className='u-tabContent py-5 md:py-10 md:pl-10 md:pr-6 border-t-2 border-pana -mt-[1px]'>
              {/* タグ */}
              <div className="flex gap-1 md:gap-2 flex-wrap justify-end px-2">
                {activeTab.tags.map((tag, idx) => (
                  <span key={idx} className={`text-white text-sm h-7 rounded-full py-1 px-2 ${tag.color}`}>
                    {tag.text}
                  </span>
                ))}
              </div>

              {/* タイトル */}
              <div className='pt-8 md:pt-4 pb-10 px-5 md:px-0'>
                <h3 className="shippori text-2xl md:text-[28px] font-medium">
                  <span
                    className='u-tabContent-title'
                    dangerouslySetInnerHTML={{ __html: activeTab.title }}
                  />

                  {activeTab.titleSub && (
                    <span className="shippori text-base md:text-lg">{activeTab.titleSub}</span>
                  )}
                </h3>
                <p className="garamond leading-5 pt-4">{activeTab.titleEn}</p>
              </div>


              <div className="flex flex-col md:flex-row gap-10 px-5 md:px-0">
                {/* 左側テキスト */}
                <div className="flex-1">
                  <p className='u-tabLead shippori text-xl md:text-[22px] leading-[180%] font-medium'>{activeTab.lead}</p>

                  {activeTab.desc && (
                    <div
                      className="shippori font-medium text-base leading-[180%] pt-2 md:pt-6 pr-0 pl-8 md:pl-14"
                      dangerouslySetInnerHTML={{ __html: activeTab.desc }}
                    />
                  )}

                  {/* 説明画像 */}
                  {activeTab.descriptionImages?.length ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                      {activeTab.descriptionImages.map((img, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <Image
                            src={`/images/original/img_desc-${img.src}.jpg`}
                            alt={img.text || '説明画像'}
                            width={400}
                            height={300}
                            className="rounded"
                          />
                          {img.text && <p className="shippori text-sm text-center mt-1">{img.text}</p>}
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {/* テーブル */}
                  <ol className="w-full mt-4">
                    {activeTab.table?.map((row, idx) => (
                      <li key={idx} className="md:flex gap-4 md:gap-6 border-b border-pana-gray02 py-4">
                        <p className="shippori text-white text-center font-medium w-[140px] h-8 md:h-10 flex-shrink-0 bg-pana pt-[1px] md:py-1 mb-2 md:mb-0">{row.label}</p>
                        <div className="px-1 md:px-0">
                          {row.items.map((item, i) => (
                            <div key={i} className="shippori flex items-start md:items-center gap-2 md:gap-4">
                              <div>
                                <p className='text-base py-1'>{item.value}</p>
                              </div>
                              {item.buttonLabel && item.buttonHref && (
                                <Link
                                  href={item.buttonHref}
                                  className="u-button u-button-store block w-[80px] md:w-[104px] h-[29px] border border-pana flex-shrink-0 pt-[2px] pl-[4px] mr-0 ml-auto md:mx-0 mt-1 mb-4 md:my-0"
                                >
                                  <p className="u-button-text shippori font-medium text-sm">
                                    {item.buttonLabel}
                                  </p>
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ol>



                </div>

                {/* 右側画像 */}
                <div className="flex-1 grid grid-cols-1 gap-8">
                  {activeTab.rightImages.map((src, idx) => (
                    <div key={idx} className='relative h-[200px] md:h-[300px]'>
                      <Image
                        src={`/images/original/img_${src}.jpg`}
                        alt={`右側画像${idx + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 495px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
