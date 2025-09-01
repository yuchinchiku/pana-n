'use client';
import SectionTitle from '@/components/SectionTitle';
import FaqList from '@/components/FaqList';
import Button from '@/components/Button';
import '@/styles/pages/top/faq.scss';

export default function Faq() {
  return (
    <section className='u-faq sec-white relative'>
      <div className='flex justify-center z-10 py-32 px-5 md:pt-64 md:pr-52 md:pl-80 md:pb-40' data-header-color="#1D1112">
        <SectionTitle
          mainTitle="よくあるご質問"
          subTitle="faq"
          className="u-fade-in mr-6 md:mr-32"
          subTitleTop="29px"
          subTitleRight="1px"
          subTitleTopSP="29px"
          subTitleRightSP="-1px"
        />
        <div>
          <FaqList variant="top" />
          <Button
            href="/faq"
            text="ご質問一覧へ"
            className="u-fade-in u-bottun-md mt-10 md:mt-16"
          />
        </div>
      </div>
    </section>
  );
}