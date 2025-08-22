
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
        u-cv fixed md:top-0 right-0 bottom-0 bg-white 
        w-[54px] h-[164px] md:w-[80px] md:h-fit md:min-h-screen z-20
        ${!isHome ? 'border-l border-[#1d11124d]' : ''}
      `}
    >
      <Link href="/" className='u-cv-link block h-fit min-h-screen pt-4 px-5 md:py-10 md:px-8'>
        <p className="u-cv-text shippori text-sm md:text-base font-medium tracking-[4px] md:tracking-[6px] writing-vertical ml-[-2px] md:ml-[-6px]">
          <i className='inline-block mx-auto'>
            <Pana color="#1D1112" className='w-[14px] h-[14px] md:w-5 md:h-5' />
          </i>
          <span className='pt-[6px] md:pt-4'>採用サイト</span>
        </p>
        <div className='u-cv-line'></div>
        <p className="garamond text-sm tracking-wider rotate-90 whitespace-nowrap absolute bottom-20 right-[-14px] hidden md:block">
          Work With Heart
        </p>
      </Link>
    </div>
  );
}