'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Pana } from '@/assets/icons/Pana';
import '@/styles/pages/contact/contact.scss';
import '@/styles/component/button.scss';

export default function ContactConfirmPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<any>(null);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const data = sessionStorage.getItem('contactData');
    if (!data) {
      router.push('/contact'); // データがなければ入力画面に戻す
      return;
    }
    setFormData(JSON.parse(data));
  }, [router]);

  const handleSend = async () => {
    if (!formData) return;
    setIsSending(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (result.success) {
        sessionStorage.removeItem('contactData');
        router.push('/contact/thanks');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert('送信に失敗しました。');
      }
    } catch (err) {
      console.error(err);
      alert('送信に失敗しました。');
    } finally {
      setIsSending(false);
    }
  };

  if (!formData) return null;

  return (
    <div className="u-pageContact lg:ml-[185px] lg:mr-20">
      <div className="u-pageHero relative flex justify-center w-full h-[350px] lg:h-[450px] pt-10">
        <h1 className="u-page-title relative text-white lg:w-[76px] h-fit">
          <i className="block mx-auto mb-2 w-3 h-3 lg:w-5 lg:h-5 pl-2 lg:pl-0">
            <Pana color="white" className="w-3 h-3 lg:w-5 lg:h-5" />
          </i>
          <span className="shippori text-[32px] lg:text-[40px] font-medium leading-none writing-vertical pl-[18px] block">
            お問い合わせ確認
          </span>
          <span className="u-page-subTitle garamond text-base lg:text-xl tracking-widest rotate-90 whitespace-nowrap absolute">
            contact</span>
          </h1>
        </div>
      <div className="u-pageContact-Desc lg:text-center max-w-4xl lg:w-[82.3%] mx-auto mt-10 lg:mt-20 px-10">
        <div className="u-pageContact-desc shippori lg:text-lg leading-[180%]">
          <p>下記内容でお間違えなければ「送信」ボタンを押してください。</p>
          <p>修正する場合は「戻る」ボタンで入力画面へ戻れます。</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto my-10 lg:my-20 space-y-6 pb-20 px-5 lg:px-0">
        {['subject','company','name','email','emailConfirm','phone','message'].map((key) => (
          <div key={key} className="lg:flex gap-6 border-b border-pana-gray02 pb-6">
            <div className="w-full lg:w-[220px] flex-shrink-0 text-lg font-medium shippori pb-3 lg:pb-0">
              {key === 'subject' && 'ご用件'}
              {key === 'company' && '貴社名'}
              {key === 'name' && 'お名前'}
              {key === 'email' && 'メールアドレス'}
              {key === 'emailConfirm' && 'メールアドレス確認'}
              {key === 'phone' && '電話番号'}
              {key === 'message' && 'お問い合わせ内容'}
            </div>
            <div className="whitespace-pre-wrap shippori">{formData[key] || '-'}</div>
          </div>
        ))}

        <div className="lg:flex gap-10 justify-center pt-10">
          <button
            type="button"
            onClick={() => {
              router.back();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="u-button u-button-back block w-[244px] h-12 border border-pana py-1 pl-6 mx-auto lg:mx-0"
          >
            <span className='u-button-text shippori font-medium text-lg text-left pt-1 lg:pl-10'>戻る</span>
          </button>
          <button
            type="button"
            onClick={handleSend}
            disabled={isSending}
            className="u-button u-button-submit u-button-white text-white bg-pana block w-[244px] h-12 border border-pana py-1 pl-6 mx-auto lg:mx-0 mt-6 lg:mt-0"
          >
            <span className='u-button-text shippori font-medium text-lg text-left pt-1 lg:pr-20'>
              {isSending ? '送信中…' : '送信する'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
