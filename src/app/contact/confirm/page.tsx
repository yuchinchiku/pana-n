'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PageHero from '@/components/pages/PageHero';
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
    <div className="u-pageContact md:ml-[185px] md:mr-20">
      <PageHero title="お問い合わせ確認" subTitle="contact" />
      <div className="u-pageContact-Desc md:text-center max-w-4xl md:w-[82.3%] mx-auto mt-10 md:mt-20 px-10">
        <div className="u-pageContact-desc shippori md:text-lg leading-[180%]">
          <p>下記内容でお間違えなければ「送信」ボタンを押してください。</p>
          <p>修正する場合は「戻る」ボタンで入力画面へ戻れます。</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto my-10 md:my-20 space-y-6 pb-20 px-5 md:px-0">
        {['subject','company','name','email','emailConfirm','phone','message'].map((key) => (
          <div key={key} className="md:flex gap-6 border-b border-pana-gray02 pb-6">
            <div className="w-full md:w-[220px] flex-shrink-0 text-lg font-medium shippori pb-3 md:pb-0">
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

        <div className="md:flex gap-10 justify-center pt-10">
          <button
            type="button"
            onClick={() => router.back()} // sessionStorage から復元されるので安全
            className="u-button u-button-back block w-[244px] h-12 border border-pana py-1 pl-6 mx-auto md:mx-0"
          >
            <span className='u-button-text shippori font-medium text-lg text-left pt-1 md:pl-10'>戻る</span>
          </button>
          <button
            type="button"
            onClick={handleSend}
            disabled={isSending}
            className="u-button u-button-submit u-button-white text-white bg-pana block w-[244px] h-12 border border-pana py-1 pl-6 mx-auto md:mx-0 mt-6 md:mt-0"
          >
            <span className='u-button-text shippori font-medium text-lg text-left pt-1 md:pr-20'>
              {isSending ? '送信中…' : '送信する'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
