'use client';
import { Pana } from '@/assets/icons/Pana';
import ButtonBack from '@/components/ButtonBack';
import '@/styles/pages/contact/contact.scss';
import '@/styles/component/button.scss';

export default function ContactThanksPage() {
  return (
    <div className="u-pageContact lg:ml-[185px] lg:mr-20">
      <div className="u-pageHero relative flex justify-center w-full h-[350px] lg:h-[450px] pt-10">
        <h1 className="u-page-title relative text-white lg:w-[76px] h-fit">
          <i className="block mx-auto mb-2 w-3 h-3 lg:w-5 lg:h-5 pl-2 lg:pl-0">
            <Pana color="white" className="w-3 h-3 lg:w-5 lg:h-5" />
          </i>
          <span className="shippori text-[32px] lg:text-[40px] font-medium leading-none writing-vertical pl-[18px] block">
            お問い合わせ完了
          </span>
          <span className="u-page-subTitle garamond text-base lg:text-xl tracking-widest rotate-90 whitespace-nowrap absolute">
            contact</span>
          </h1>
        </div>
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
