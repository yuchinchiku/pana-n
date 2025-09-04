'use client';
import PageHero from '@/components/pages/PageHero';
import ButtonBack from '@/components/ButtonBack';
import '@/styles/pages/contact/contact.scss';
import '@/styles/component/button.scss';

export default function ContactThanksPage() {
  return (
    <div className="u-pageContact lg:ml-[185px] lg:mr-20">
      <PageHero title="お問い合わせ完了" subTitle="contact" />
      <div className="u-pageContact-Desc shippori lg:text-center max-w-4xl lg:w-[82.3%] mx-auto mt-10 lg:mt-20 px-10">
          <p>このたびは、お問合せいただき、誠にありがとうございました。</p>
          <p>お送りいただきました内容を確認の上、<br className='hidden lg:block'/>担当者より折り返しご連絡させていただきます。</p>
      </div>
      <ButtonBack
        href="/"
        text="トップページへ"
        className="u-bottun-md mt-10 lg:mt-16 mb-40 lg:mb-60 mx-auto"
      />
    </div>
  );
}
