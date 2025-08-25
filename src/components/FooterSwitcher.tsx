'use client';
import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function HeaderSwitcher() {
  const pathname = usePathname();
  const isTop = pathname === '/';

  return isTop ?　<Footer variant="default" />  : <Footer variant="pages" /> ;
}
