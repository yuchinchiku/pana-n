'use client'
import { Pana } from '@/assets/icons/Pana';
import { useEffect, useState } from 'react';

interface SectionTitleProps {
  mainTitle: string;
  subTitle: string;
  color?: 'black' | 'white';
  className?: string;
  subTitleTop?: string;
  subTitleRight?: string;
  subTitleTopSP?: string;
  subTitleRightSP?: string;
}

export default function SectionTitle({
  mainTitle,
  subTitle,
  color = 'black',
  className = '',
  subTitleTop = '80px',
  subTitleRight = '-45px',
  subTitleTopSP = '40px',
  subTitleRightSP = '-7px',
}: SectionTitleProps) {
  const isWhite = color === 'white';
  const textColor = isWhite ? 'text-white' : 'text-pana';
  const borderColor = isWhite ? 'border-white' : 'border-pana';
  const iconColor = isWhite ? '#fff' : '#1D1112';

  // null 初期値にして SSR とクライアントの描画を合わせる
  const [isMobile, setIsMobile] = useState<null | boolean>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // 初回チェック
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // SSR時（isMobile === null）はPC用値を使う
  const topValue = isMobile === null ? subTitleTop : isMobile ? subTitleTopSP : subTitleTop;
  const rightValue = isMobile === null ? subTitleRight : isMobile ? subTitleRightSP : subTitleRight;

  return (
    <h2
      className={`u-sec-title relative w-16 flex-shrink-0 lg:w-20 h-fit pr-4 lg:pr-12 border-r ${borderColor} ${className}`}
    >
      <i className="block mx-auto mb-2 w-3 h-3 lg:w-5 lg:h-5">
        <Pana color={iconColor} className="w-3 h-3 lg:w-5 lg:h-5" />
      </i>
      <span
        className={`shippori text-[28px] lg:text-32px font-medium leading-none writing-vertical ${textColor} pl-2 lg:pl-0`}
      >
        {mainTitle}
      </span>
      <span
        className={`garamond text-base lg:text-xl tracking-wider rotate-90 whitespace-nowrap absolute ${textColor}`}
        style={{ top: topValue, right: rightValue }}
      >
        {subTitle}
      </span>
    </h2>
  );
}
