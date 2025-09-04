import SectionTitle from '@/components/SectionTitle';
import NewsListTop from '@/components/NewsListTop';
import Button from '@/components/Button';
import '@/styles/pages/top/news.scss';

export default function News() {
  return (
    <section className='u-news relative flex justify-center z-10 py-20 px-5 lg:pt-32 lg:pr-52 lg:pl-80 lg:py-0'>
      <SectionTitle
        mainTitle="お知らせ"
        subTitle="news"
        color="white"
        className="u-fade-in mr-6 lg:mr-32"
        subTitleTop="40px"
        subTitleTopSP="33px"
        subTitleRight="-7px"
        subTitleRightSP="-7px"
      />
      <div>
        <NewsListTop />
        <Button
          href="/news"
          text="お知らせ一覧へ"
          className="u-fade-in u-button-white u-bottun-md text-white border-white mt-10 lg:mt-16"
        />
      </div>
    </section>
  );
}