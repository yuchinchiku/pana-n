'use client';
import { Arrow } from '@/assets/icons/Arrow';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '@/styles/critical/footerCv.scss';
import '@/styles/component/link.scss';

export default function FooterCV() {
  const pathname = usePathname();
  const isTop = pathname === '/';

  return (
    <div
      className={`u-footerCv relative h-[250px] lg:h-[377px] bg-white z-10 px-5 lg:pr-20 lg:pl-[185px] 
        ${isTop ? 'w-full' : 'mx-auto'}`}
    >
      <Link href="/" className={`u-footerCv-link u-link-blank flex items-center h-[250px] lg:h-[377px]
        ${isTop ? '' : 'lg:w-[90%] mx-auto'}`}
      >
        <p className="shippori font-medium text-[22px] lg:text-3xl w-full flex items-center justify-end gap-1 flex-shrink-0 lg:pl-5">
          <span className='flex-shrink-0'>採用サイト</span>
          <Arrow />
          <span className='u-footerCv-line w-6/12 lg:w-9/12 h-[1px] bg-pana lg:ml-10'></span>
        </p>
      </Link>
    </div>
  );
}