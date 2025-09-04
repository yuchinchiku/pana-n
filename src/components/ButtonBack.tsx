'use client'
import Link from 'next/link';
import clsx from 'clsx';
import '@/styles/component/button.scss';

interface ButtonProps {
  href: string;
  text: string;
  className: string;
}

export default function ButtonBack({ href, text, className }: ButtonProps) {
  return (
    <Link href={href}
      className={clsx(
        'u-button u-button-back block w-[244px] h-12 border border-pana py-1 pr-5',
        className
      )}
    >
      <p className='u-button-text shippori font-medium text-lg lg:text-22px text-right pt-1 mt-1 mr-0 ml-auto'>{text}</p>
    </Link>
  );
}