import { Suspense } from "react";
import HeaderSwitcher from '@/components/HeaderSwitcher';
import CV from '@/components/CV';
import FooterSwitcher from '@/components/FooterSwitcher';
import FooterCV from '@/components/FooterCV';
import Breadcrumb from '@/components/Breadcrumb';
import ScrollToTop from "@/components/ScrollToTop";
import type { Metadata } from "next";
import { EB_Garamond, Shippori_Mincho_B1 } from 'next/font/google';
import '@/styles/globals.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Script from 'next/script';

const garamond = EB_Garamond({ subsets: ['latin'], variable: '--font-garamond', display: 'swap' });
const shippori = Shippori_Mincho_B1({ subsets: ['latin'], weight: ['400','700'], variable: '--font-shippori', display: 'swap' });

export const metadata: Metadata = {
  title: "琉球の想いと癒しをあなたへ。",
  description: "琉球の想いと癒しをあなたへ。",
  icons: {
    icon: [
      { url: '/images/meta/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/images/meta/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/images/meta/favicon/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/images/meta/favicon/apple-touch-icon.png',
  },
  manifest: '/images/meta/favicon/site.webmanifest',
  appleWebApp: {
    title: '琉球の想いと癒しをあなたへ。心のひだに触れ、魂をほぐす琉球パナ・ン',
  },
  openGraph: {
    title: "琉球の想いと癒しをあなたへ。心のひだに触れ、魂をほぐす琉球パナ・ン",
    description: "琉球の想いと癒しをあなたへ。",
    url: "https://pana-n.jp",
    siteName: "琉球の想いと癒しをあなたへ。元祖琉球マッサージ、パナ・ン。",
    images: [
      {
        url: "https://pana-n.jp/images/meta/ogp.png",
        width: 1200,
        height: 630,
        alt: "琉球の想いと癒しをあなたへ。心のひだに触れ、魂をほぐす琉球パナ・ン",
      }
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "琉球の想いと癒しをあなたへ。心のひだに触れ、魂をほぐす琉球パナ・ン",
    description: "琉球の想いと癒しをあなたへ。元祖琉球マッサージ、パナ・ン。",
    images: ["https://pana-n.jp/images/meta/ogp.png"],
  },
};

gsap.registerPlugin(ScrollTrigger);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="overflow-x-hidden">
      <head>
        {/* Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-184NT41R46"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-184NT41R46');
          `}
        </Script>
      </head>
      <body
        suppressHydrationWarning
        className={`${garamond.variable} ${shippori.variable} overflow-x-hidden`}>
        
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
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
