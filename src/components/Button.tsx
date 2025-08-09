'use client';
import Link from 'next/link';
import clsx from 'clsx';
import '@/styles/component/button.scss';

interface ButtonProps {
  href: string;
  text: string;
  className: string;
}

export default function Button({ href, text, className }: ButtonProps) {
  return (
    <Link href={href}
      className={clsx(
        'u-button block w-[244px] border border-pana py-1 pl-6',
        className
      )}
    >
      <p className='u-button-text shippori font-medium text-22px'>{text}</p>
    </Link>
  );
}