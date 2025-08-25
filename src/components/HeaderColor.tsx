'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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


export default function HeaderColor() {
  const [isOpen, setIsOpen] = useState(false);

  // メニュー開閉でhtmlタグにクラス付与（SPのみ）
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const htmlEl = document.documentElement;
    const isSP = window.innerWidth < 768;
    if (isSP) {
      htmlEl.classList.toggle('js-open', isOpen);
    }
  }, [isOpen]);

  return(
    <header className="u-top u-header fixed top-0 left-0 md:h-fit md:min-h-screen md:w-[185px] md:border-r md:border-pana-gray01 z-20">
       {/* ロゴ */}
      <div className="u-header-logo fixed top-3 left-5 md:static md:pt-10 md:pb-16 z-20">
        <Link href="/" className='text-center'>
          <Image
            src="/images/common/logo-c.svg"
            alt="琉球の想いと癒しをあなたへ。心のひだに触れ、魂をほぐす琉球パナ・ン"
            width={120}
            height={40}
            priority
            className="md:mx-auto w-[60px] h-[61px] md:w-[100px] md:h-[104px]"
          />
        </Link>
      </div>

      {/* ハンバーガーアイコン（SP） */}
      <div
        className={`u-navIcon fixed top-7 right-5 block z-20 md:hidden cursor-pointer transition-all duration-300 ${isOpen ? 'js-open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block w-[45px] h-[1px] bg-pana"></span>
        <span className="block w-[45px] h-[1px] mt-2 bg-pana"></span>
        <span className="block w-[45px] h-[1px] mt-2 bg-pana"></span>
      </div>

      {/* ナビゲーション */}
      <nav
        className={`md:opacity-100 md:visible transition-opacity duration-500 ease-in-out
          ${isOpen
            ? 'fixed inset-0 bg-black bg-opacity-90 md:static md:bg-transparent opacity-100 visible'
            : 'fixed inset-0 bg-black bg-opacity-90 md:static md:bg-transparent opacity-0 invisible'
          }`}
      >
        <ul className='u-nav'>
          {navItems.map((item) => (
            <li key={item.href} className='u-nav-item pb-6'>
              <Link href={item.href}  className='u-nav-link block text-center'>
              <i className='inline-block mx-auto'>
                <Pana color='#00B0C7' />
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
