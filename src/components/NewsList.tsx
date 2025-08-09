'use client';
import Link from 'next/link';

const newsList = [
  { href: '/news/5', date: '2024.08.02', text: '2024年9月1日より、ほぐしガッテン全店舗価格改定のお知らせ。' },
  { href: '/news/4', date: '2021.11.01', text: 'リゾートスパ　セラピスト募集♪' },
  { href: '/news/3', date: '2021.10.06', text: 'ほぐしガッテン真栄里店 営業時間変更のお知らせ' },
  { href: '/news/2', date: '2021.01.01', text: '琉球足つぼのご案内' },
  { href: '/news/1', date: '2020.12.21', text: 'ほぐしガッテン年末年始休業のお知らせ' },
];

export default function NewsList() {
  return (
    <ul className='u-newsList pt-4 max-w-[603px]'>
      {newsList.map((item) => (
        <li key={item.href} className='u-news-item py-3'>
          <Link href={item.href} className='u-news-link text-center text-white block md:flex md:gap-6'>
            <p className="shippori text-sm font-medium leading-none md:flex-shrink-0">{item.date}</p>
            <p className="shippori font-medium leading-none">{item.text}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}