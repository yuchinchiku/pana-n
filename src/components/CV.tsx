
'use client';
import { Pana } from '@/assets/icons/Pana';
import Link from 'next/link';
import '@/styles/critical/cv.scss';

export default function CV() {
  return (
    <div className='u-cv fixed top-0 right-0 bg-white w-[80px] h-fit min-h-screen z-20'>
      <Link href="/" className='u-cv-link block h-fit min-h-screen py-10 px-8'>
        <p className="u-cv-text shippori font-medium tracking-[6px] writing-vertical mx-auto">
          <i className='inline-block mx-auto'>
            <Pana color="#1D1112" className='w-5 h-5' />
          </i>
          <span className='pt-4'>採用サイト</span>
        </p>
        <div className='u-cv-line'></div>
        <p className="garamond text-sm tracking-wider rotate-90 whitespace-nowrap absolute bottom-20 right-[-14px]">
          Work With Heart
        </p>
      </Link>
    </div>
  );
}