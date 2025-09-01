import Link from 'next/link';
import { Pana } from '@/assets/icons/Pana';
import '@/styles/critical/footer.scss';

const navItems = [
  {
    href: '/story',
    ja: 'パナ・ンの物語',
    subMenu: [
      { href: '/story/beginning', ja: 'パナ・ンの始まり' },
      { href: '/story/okinawa', ja: '沖縄、そして恩返し ' },
      { href: '/story/therapist', ja: 'パナ・ンを作る人々' },
      { href: '/story/future', ja: 'パナ・ンの夢' }
    ]
  },
  {
    href: '/healing',
    ja: 'パナ・ンの癒し',
    subMenu: [{ href: '/healing/original', ja: 'パナ・ンの独自メニュー' }]
  },
  {
    href: '/salon',
    ja: 'パナ・ンの店舗',
    subMenu: [
      { href: '/salon/hogushigatten-nahakume', ja: 'ほぐしガッテン那覇久米店' },
      { href: '/salon/hogushigatten-maezato', ja: 'ほぐしガッテン真栄里店 ' },
      { href: '/salon/hogushigatten-omori', ja: 'ほぐしガッテン大森東口店' },
      { href: '/salon/hoshino-okinawa', ja: '星のや沖縄スパ ' },
      { href: '/salon/hoshino-taketomi', ja: '星のや竹富島スパ' },
      { href: '/salon/hoshino-iriomote', ja: '西表スパ ' },
      { href: '/salon/hoshino-kohama', ja: '小浜島琉球スパ' },
      { href: '/salon/painushima', ja: 'パナ・ン南ぬ島 ' },
      { href: '/salon/fusaki', ja: '琉球足つぼ' }
    ]
  },
  { href: '/company', ja: '会社概要' },
  { href: '/news', ja: 'お知らせ' },
  { href: '/faq', ja: 'よくあるご質問' },
  { href: '/contact', ja: 'お問い合わせ' }
];

type FooterProps = {
  variant?: 'pages' | 'default'; // どちらのデザインを使うか
};

export default function Footer({ variant = 'default' }: FooterProps) {
  const wrapperClass =
    variant === 'pages'
      ? 'u-footer-pages sec-black z-10 mt-4 px-5 pt-10 pb-10 md:ml-[185px] md:pt-32 md:pr-[14.5%] md:pl-0'
      : 'u-footer sec-black z-10 mt-[147px] px-5 pt-10 pb-10 md:mt-[250px] md:pt-[55vh] md:pr-[14.5%] md:pl-0';

  return (
    <div className={wrapperClass} data-header-color="#fff">
      <nav className='u-Fnav-wrapper'>
        <ul className='u-Fnav md:flex justify-start md:flex-row-reverse gap-8'>
          {navItems.map((item) => (
            <li key={item.href} className='u-Fnav-item md:flex justify-start md:flex-row-reverse gap-4 mb-4 md:mb-0'>
              <Link href={item.href} className='u-Fnav-link text-white md:writing-vertical flex md:block items-center justify-start gap-2'>
                <i className='block w-2 h-2 md:mb-2 md:mx-auto md:ml-[-18px]'>
                  <Pana color={'#ffffff'} className="w-2 h-2" />
                </i>
                <p className="shippori font-medium md:pt-4">{item.ja}</p>
              </Link>
              {item.subMenu && item.subMenu.length > 0 && (
                <ul className='u-submenu md:flex justify-start md:flex-row-reverse gap-4 pt-2 md:pt-6'>
                  {item.subMenu.map((subItem) => (
                    <li key={subItem.href} className='u-submenu-item mb-2 md:mb-0'>
                      <Link href={subItem.href} className='u-submenu-link text-white md:writing-vertical'>
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
        <div className='flex justify-start md:justify-end gap-10 mt-8 md:mt-32'>
          <Link href='privacy-policy'className='block text-white'>
            <p className="shippori text-sm">プライバシーポリシー</p>
          </Link>
          <small className='u-copyright garamond text-sm text-white'>&copy;pana-n LLC .</small>
        </div>
      </div>
    </div>
  );
}
