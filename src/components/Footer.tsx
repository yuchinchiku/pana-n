
'use client';
import Link from 'next/link';
import { Pana } from '@/assets/icons/Pana';
import '@/styles/critical/footer.scss';

const navItems = [
  { href: '/story', ja: 'パナ・ンの物語',
    subMenu: [
      { href: '/story/beginning', ja: 'パナ・ンの始まり',},
      { href: '/story/okinawa', ja: '沖縄、そして恩返し ',},
      { href: '/story/therapist', ja: 'パナ・ンを作る人々',},
      { href: '/story/future', ja: 'パナ・ンの夢',}
    ]
  },
  { href: '/healing', ja: 'パナ・ンの癒し',
    subMenu: [
      { href: '/healing/signature', ja: 'パナ・ンシグネチャー',}
    ]
  },
  { href: '/salon', ja: 'パナ・ンの店舗',
    subMenu: [
      { href: '/salon/hogushigatten-nahakume', ja: 'ほぐしガッテン那覇久米店',},
      { href: '/salon/hogushigatten-maezato', ja: 'ほぐしガッテン真栄里店 ',},
      { href: '/salon/hogushigatten-omori', ja: 'ほぐしガッテン大森東口店',},
      { href: '/salon/hoshino-okinawa', ja: '星のや沖縄スパ ',},
      { href: '/salon/hoshino-taketomi', ja: '星のや竹富島スパ',},
      { href: '/salon/hoshino-iriomote', ja: '西表スパ ',},
      { href: '/salon/hoshino-kohama', ja: '小浜島琉球スパ',},
      { href: '/salon/painushima', ja: 'パナ・ン南ぬ島 ',},
      { href: '/salon/fusaki', ja: '琉球足つぼ',}
    ]
  },
  { href: '/company', ja: '会社概要' },
  { href: '/news', ja: 'お知らせ' },
  { href: '/faq', ja: 'よくあるご質問' },
  { href: '/contact', ja: 'お問い合わせ' },
];

export default function Footer() {
  return (
    <div className='u-footer z-10 md:mt-[250px] md:pt-[80vh] md:pb-10 md:pr-[14.5%]'>
      <nav className='u-Fnav-wrapper'>
        <ul className='u-Fnav flex justify-start flex-row-reverse gap-8'>
          {navItems.map((item) => (
            <li key={item.href} className='u-Fnav-item flex justify-start flex-row-reverse gap-4'>
              <Link href={item.href} className='u-Fnav-link block text-white writing-vertical'>
                <i className='block mx-auto mb-2 w-2 h-2 ml-[-18px]'>
                  <Pana color={'#ffffff'} className="w-2 h-2" />
                </i>
                <p className="shippori font-medium pt-4">{item.ja}</p>
              </Link>
              {/* サブメニューの表示 */}
              {item.subMenu && item.subMenu.length > 0 && (
                <ul className='u-submenu flex justify-start flex-row-reverse gap-4 md:pt-6'>
                  {item.subMenu.map((subItem) => (
                    <li key={subItem.href} className='u-submenu-item'>
                      <Link href={subItem.href} className='u-submenu-link text-white writing-vertical'>
                        <p className="shippori text-sm">{subItem.ja}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <div className='flex justify-end gap-10 md:mt-20'>
          <Link href='privacy-policy'className='block text-white'>
            <p className="shippori text-sm">プライバシーポリシー</p>
          </Link>
          <small className='u-copyright garamond text-sm text-white'>&copy;pana-n LLC .</small>
        </div>
      </div>
    </div>
  );
}
