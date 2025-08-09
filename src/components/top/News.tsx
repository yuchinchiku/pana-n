'use client';
import SectionTitle from '@/components/SectionTitle';
import NewsList from '@/components/NewsList';
import Button from '@/components/Button';
import '@/styles/pages/top/news.scss';

export default function News() {
  return (
    <section className='u-news relative flex justify-center z-10 md:pt-32 md:pr-52 md:pl-80'>
      <SectionTitle
        mainTitle="お知らせ"
        subTitle="news"
        color="white"
        className='mr-32'
        subTitleTop="40px"
        subTitleRight="-7px"
      />
      <div>
        <NewsList />
        <Button
          href="/news"
          text="お知らせ一覧へ"
          className="u-button-white text-white border-white mt-10 md:mt-16"
        />
      </div>
    </section>
  );
}