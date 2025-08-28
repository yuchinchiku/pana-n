'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '@/styles/component/breadcrumbs.scss';

// ページマッピング
const labelMap: Record<string, string | Record<string, string>> = {
  story: {
    '': 'パナ・ンの物語',
    beginning: 'パナ・ンの始まり',
    okinawa: '沖縄、そして恩返し',
    therapist: 'パナ・ンを作る人々',
    future: 'パナ・ンの夢',
  },
  healing: {
    '': 'パナ・ンの癒し',
    signature: 'パナ・ンシグネチャー',
  },
  salon: {
    '': 'パナ・ンの店舗',
    'hogushigatten-nahakume': 'ほぐしガッテン那覇久米店',
    'hogushigatten-maezato': 'ほぐしガッテン真栄里店',
    'hogushigatten-omori': 'ほぐしガッテン大森東口店',
    'hoshino-okinawa': '星のや沖縄スパ',
    'hoshino-taketomi': '星のや竹富島スパ',
    'hoshino-iriomote': '西表スパ',
    'hoshino-kohama': '小浜島琉球スパ',
    painushima: 'パナ・ン南ぬ島',
    fusaki: '琉球足つぼ',
  },
  company: '会社概要',
  news: 'お知らせ',
  faq: 'よくあるご質問',
  contact: 'お問い合わせ',
};

function getLabel(segments: string[], index: number) {
  const current = segments[index];

  // 親セグメントのラベルマップ
  if (index === 0 && typeof labelMap[current] === 'string') {
    return labelMap[current] as string;
  }

  if (index === 0 && typeof labelMap[current] === 'object') {
    return (labelMap[current] as Record<string, string>)[''] || current;
  }

  // 子セグメントのラベルマップ
  const parent = segments[0];
  if (typeof labelMap[parent] === 'object') {
    return (
      (labelMap[parent] as Record<string, string>)[current] || current
    );
  }

  return current;
}

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean)
  .map((seg) => decodeURIComponent(seg));

  if (segments.length === 0) return null;

  const breadcrumbs = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const label = getLabel(segments, index);

    return { href, label };
  });

  return (
    <nav className="shippori font-medium text-sm mt-10 md:mt-20 md:mr-20 px-5 md:px-0" aria-label="Breadcrumb">
      <ol className="flex items-center justify-end space-x-2 md:pr-6">
        <li>
          <Link href="/" className="underline">
            トップページ
          </Link>
        </li>
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center">
            <span className="mx-1">/</span>
            {index === breadcrumbs.length - 1 ? (
              <span>{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="underline">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
