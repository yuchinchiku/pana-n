'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { LogoIcon } from '@/assets/icons/LogoIcon';
import { Pana } from '@/assets/icons/Pana';
import '@/styles/critical/header.scss';

const navItems = [
  { href: '/story', ja: 'パナ・ンの物語', en: "pana-n's story" },
  { href: '/healing', ja: 'パナ・ンの癒し', en: "pana-n's healing" },
  { href: '/salon', ja: 'パナ・ンの店舗', en: 'salon line-up' },
  { href: '/company', ja: '会社概要', en: 'company' },
  { href: '/news', ja: 'お知らせ', en: 'news' },
  { href: '/faq', ja: 'よくあるご質問', en: 'faq' },
  { href: '/contact', ja: 'お問い合わせ', en: 'contact' },
];

export default function Header() {
  const [color, setColor] = useState('#fff'); // 初期のロゴとテキストの色を白に設定
  const [textColor, setTextColor] = useState('#fff'); // 初期のテキストカラーを白に設定

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('sec-white')) {
            setColor('#1D1112');
            setTextColor('#1D1112');
          } else if (entry.target.classList.contains('sec-black')) {
            setColor('#fff');
            setTextColor('#fff');
          }
        }
      });
    });

    const sections = document.querySelectorAll('section.sec-white, section.sec-black, .u-footer.sec-black');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className='u-header fixed top-0 left-0 h-fit min-h-screen w-[185px] border-r border-pana-gray01 z-20'>
      <div className='u-header-logo md:pt-10 md:pb-16'>
        <Link href="/" className='text-center'>
          <LogoIcon className='mx-auto' pathColor={color} /> {/* ロゴの色を変更 */}
        </Link>
      </div>
      <nav>
        <ul className='u-nav'>
          {navItems.map((item) => (
            <li key={item.href} className='u-nav-item pb-6'>
              <Link href={item.href} className='u-nav-link block text-center' style={{ color: textColor }}>
                <i className='inline-block mx-auto'>
                  <Pana color={color} /> {/* アイコンの色を変更 */}
                </i>
                <p className="shippori font-medium leading-none">{item.ja}</p>
                <p className="garamond text-pana-gray01 text-sm leading-none pt-2">{item.en}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}