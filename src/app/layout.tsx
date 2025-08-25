import HeaderSwitcher from '@/components/HeaderSwitcher';
import CV from '@/components/CV';
import FooterSwitcher from '@/components/FooterSwitcher';
import FooterCV from '@/components/FooterCV';
import Breadcrumb from '@/components/Breadcrumb';
import ScrollAnimation from '@/components/ScrollAnimation';
import type { Metadata } from "next";
import { EB_Garamond, Shippori_Mincho_B1 } from 'next/font/google';
import '@/styles/globals.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const garamond = EB_Garamond({ subsets: ['latin'], variable: '--font-garamond', display: 'swap' });
const shippori = Shippori_Mincho_B1({ subsets: ['latin'], weight: ['400','700'], variable: '--font-shippori', display: 'swap' });

export const metadata: Metadata = {
  title: "琉球の想いと癒しをあなたへ。",
  description: "琉球の想いと癒しをあなたへ。",
};

gsap.registerPlugin(ScrollTrigger);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="overflow-x-hidden">
      <body className={`${garamond.variable} ${shippori.variable} overflow-x-hidden`}>
        <ScrollAnimation />
        <div className="layout relative text-pana">
          <HeaderSwitcher />
          <CV />
          <main className="overflow-hidden u-main">{children}</main>
          <FooterCV />
          <Breadcrumb />
          <FooterSwitcher />
        </div>
      </body>
    </html>
  );
}
