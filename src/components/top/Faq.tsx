'use client';
import SectionTitle from '@/components/SectionTitle';
import FaqList from '@/components/FaqList';
import Button from '@/components/Button';
import '@/styles/pages/top/faq.scss';

export default function Faq() {
  return (
    <section className='u-faq sec-white relative'>
      <div className='flex justify-center z-10 py-32 px-5 lg:pt-64 lg:pr-52 lg:pl-80 lg:pb-40' data-header-color="#1D1112">
        <SectionTitle
          mainTitle="よくあるご質問"
          subTitle="faq"
          className="u-fade-in mr-6 lg:mr-32"
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
            className="u-fade-in u-bottun-md mt-10 lg:mt-16"
          />
        </div>
      </div>
    </section>
  );
}