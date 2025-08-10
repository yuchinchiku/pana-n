'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { LogoIcon } from '@/assets/icons/LogoIcon';
import { Pana } from '@/assets/icons/Pana';

const navItems = [
  { href: '/story', ja: 'パナ・ンの物語', en: 'pana-n’s story' },
  { href: '/healing', ja: 'パナ・ンの癒し', en: 'pana-n’s healing' },
  { href: '/salon', ja: 'パナ・ンの店舗', en: 'salon line-up' },
  { href: '/company', ja: '会社概要', en: 'company' },
  { href: '/news', ja: 'お知らせ', en: 'news' },
  { href: '/faq', ja: 'よくあるご質問', en: 'faq' },
  { href: '/contact', ja: 'お問い合わせ', en: 'contact' },
];


export default function Header() {
  const pathname = usePathname();
  const isTop = pathname === '/';

  return(
    <header className='u-header fixed top-0 left-0 h-fit min-h-screen w-[185px] z-20'>
      <div className='u-header-logo'>
        <Link href="/" className='text-center'>
          {isTop ? (
            <LogoIcon className='mx-auto' />
          ) : (
            <Image
              src="/images/common/logo-c.svg"
              alt="琉球の想いと癒しをあなたへ。心のひだに触れ、魂をほぐす琉球パナ・ン"
              width={120}
              height={40}
              priority
            />
          )}
        </Link>
      </div>
      <nav>
        <ul className='u-nav'>
          {navItems.map((item) => (
            <li key={item.href} className='u-nav-item pb-6'>
              <Link href={item.href}  className='u-nav-link block text-center'>
              <i className='inline-block mx-auto'>
                <Pana color={isTop ? '#1D1112' : '#00B0C7'} />
              </i>
                <p className="shippori font-medium leading-none">{item.ja}</p>
                <p className="garamond text-pana-gray01 text-sm leading-none pt-2">{item.en}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )

}
