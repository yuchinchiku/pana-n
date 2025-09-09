
'use client';
import { usePathname } from 'next/navigation';
import { Pana } from '@/assets/icons/Pana';
import Link from 'next/link';
import '@/styles/critical/cv.scss';

export default function CV() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <div
      className={`
        u-cv fixed lg:top-0 right-0 bottom-0 bg-white 
        w-[54px] h-[164px] lg:w-[80px] lg:h-fit lg:min-h-screen z-20
        ${!isHome ? 'lg:border-l border-[#1d11124d]' : ''}
      `}
    >
      <Link href="https://recruit.pana-n.jp/" className='u-cv-link block h-fit min-h-screen pt-4 px-5 lg:py-10 lg:px-8' target='_blank'>
        <p className="u-cv-text shippori text-sm lg:text-base font-medium tracking-[4px] lg:tracking-[6px] writing-vertical ml-[-2px] lg:ml-[-6px]">
          <i className='inline-block mx-auto'>
            <Pana color="#1D1112" className='w-[14px] h-[14px] lg:w-5 lg:h-5' />
          </i>
          <span className='pt-[6px] lg:pt-4'>採用サイト</span>
        </p>
        <div className='u-cv-line'></div>
        <p className="garamond text-sm tracking-wider rotate-90 whitespace-nowrap absolute bottom-20 right-[-14px] hidden lg:block">
          Work With Heart
        </p>
      </Link>
    </div>
  );
}