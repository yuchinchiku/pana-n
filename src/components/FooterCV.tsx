'use client';
import { Arrow } from '@/assets/icons/Arrow';
import Link from 'next/link';
import '@/styles/critical/footerCv.scss';
import '@/styles/component/link.scss';

export default function FooterCV() {
  return (
    <div className='u-footerCv relative w-full h-[250px] bg-white z-10 md:h-[377px] md:pr-20 md:pl-[185px]'>
      <Link href="/" className='u-footerCv-link u-link-blank flex items-center h-[250px] md:h-[377px]'>
        <p className="shippori font-medium text-3xl w-full flex items-center justify-end gap-1">
          採用サイト
          <Arrow />
          <span className='u-footerCv-line w-9/12 h-[1px] bg-pana md:ml-10'></span>
        </p>
      </Link>
    </div>
  );
}