'use client';
import { usePathname } from 'next/navigation';
import Header from './Header';
import HeaderColor from './HeaderColor';

export default function HeaderSwitcher() {
  const pathname = usePathname();
  const isTop = pathname === '/';

  return isTop ? <Header /> : <HeaderColor />;
}
