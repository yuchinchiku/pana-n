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
  const [color, setColor] = useState('#fff');
  const [textColor, setTextColor] = useState('#fff');
  const [isOpen, setIsOpen] = useState(false);

  // セクション監視（色切り替え）
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // data-header-color 属性を優先
          const customColor = entry.target.getAttribute('data-header-color');
          if (customColor) {
            setColor(customColor);
            setTextColor(customColor);
          } else if (entry.target.classList.contains('sec-white')) {
            setColor('#1D1112');
            setTextColor('#1D1112');
          } else if (entry.target.classList.contains('sec-black')) {
            setColor('#fff');
            setTextColor('#fff');
          }
        }
      });
    }, {
      threshold: 0.2
    });

    // 監視対象（sec-white / sec-black / data-header-color持ち）
    const sections = document.querySelectorAll('.sec-white, .sec-black, [data-header-color]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // メニュー開閉でhtmlタグにクラス付与（SPのみ）
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const htmlEl = document.documentElement;
    const isSP = window.innerWidth < 768;
    if (isSP) {
      htmlEl.classList.toggle('js-open', isOpen);
    }
  }, [isOpen]);

  return (
    <header className="u-top u-header fixed top-0 left-0 md:h-fit md:min-h-screen md:w-[185px] md:border-r md:border-pana-gray01 z-20">
      {/* ロゴ */}
      <div className="u-header-logo fixed top-3 left-5 md:static md:pt-10 md:pb-16 z-20">
        <Link href="/" className="text-center">
          <LogoIcon
            className="md:mx-auto w-[60px] h-[61px] md:w-[100px] md:h-[104px]"
            pathColor={color}
          />
        </Link>
      </div>

      {/* ハンバーガーアイコン（SP） */}
      <div
        className={`u-navIcon fixed top-7 right-5 block z-20 md:hidden cursor-pointer transition-all duration-300 ${isOpen ? 'js-open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block w-[45px] h-[1px]" style={{ backgroundColor: color }}></span>
        <span className="block w-[45px] h-[1px] mt-2" style={{ backgroundColor: color }}></span>
        <span className="block w-[45px] h-[1px] mt-2" style={{ backgroundColor: color }}></span>
      </div>

      {/* ナビゲーション */}
      <nav
        className={`md:opacity-100 md:visible transition-opacity duration-500 ease-in-out
          ${isOpen
            ? 'fixed inset-0 bg-black bg-opacity-90 md:static md:bg-transparent opacity-100 visible'
            : 'fixed inset-0 bg-black bg-opacity-90 md:static md:bg-transparent opacity-0 invisible'
          }`}
      >
        <ul className="u-nav flex md:block flex-col items-start md:items-center justify-center h-full pl-12 md:pl-0">
          {navItems.map((item) => (
            <li key={item.href} className="u-nav-item pb-8 md:pb-6">
              <Link
                href={item.href}
                className="u-nav-link flex gap-2 items-center md:block text-center"
                style={{ color: textColor }}
                onClick={() => setIsOpen(false)}
              >
                <i className="inline-block mx-auto">
                  <Pana color={color} />
                </i>
                <p className="shippori font-medium leading-none">{item.ja}</p>
                <p className="garamond text-pana-gray01 text-sm leading-none pl-2 md:pl-0 md:pt-2">{item.en}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
