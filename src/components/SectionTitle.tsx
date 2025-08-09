import { Pana } from '@/assets/icons/Pana';

interface SectionTitleProps {
  mainTitle: string;
  subTitle: string;
  color?: 'black' | 'white';
  className?: string;
  subTitleTop?: string; // subTitleのtop位置
  subTitleRight?: string; // subTitleのright位置
}

export default function SectionTitle({
  mainTitle,
  subTitle,
  color = 'black',
  className = '',
  subTitleTop = '80px',
  subTitleRight = '-45px',
}: SectionTitleProps) {
  const isWhite = color === 'white';
  const textColor = isWhite ? 'text-white' : 'text-pana';
  const borderColor = isWhite ? 'border-white' : 'border-pana';
  const iconColor = isWhite ? '#fff' : '#1D1112';

  return (
    <h2 className={`u-sec-title relative w-20 h-fit pr-12 border-r ${borderColor} ${className}`}>
      <i className="block mx-auto mb-2 w-5 h-5">
        <Pana color={iconColor} className="w-5 h-5" />
      </i>
      <span className={`shippori text-32px font-medium leading-none writing-vertical ${textColor}`}>
        {mainTitle}
      </span>
      <span
        className={`garamond text-xl tracking-wider rotate-90 whitespace-nowrap absolute ${textColor}`}
        style={{ top: subTitleTop, right: subTitleRight }}
      >
        {subTitle}
      </span>
    </h2>
  );
}