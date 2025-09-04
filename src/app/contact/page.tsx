// src/app/contact/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import HeroSection from './HeroSection';
import { ContactFormData, ContactFormErrors, ContactFormTouched } from './types';
import '@/styles/pages/contact/contact.scss';
import '@/styles/component/button.scss';

export default function ContactPage() {
  const router = useRouter();

  const [formData, setFormData] = useState<ContactFormData>({
    subject: 'ご予約について',
    company: '',
    name: '',
    email: '',
    emailConfirm: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<ContactFormTouched>({});

  // sessionStorage から復元
  useEffect(() => {
    const saved = sessionStorage.getItem('contactData');
    if (saved) setFormData(JSON.parse(saved) as ContactFormData);
  }, []);

  // メール確認 一致チェック
  useEffect(() => {
    setErrors(prev => {
      if (formData.emailConfirm && formData.email !== formData.emailConfirm) {
        return { ...prev, emailConfirm: 'メールアドレスが一致しません' };
      } else {
        const newErrors = { ...prev };
        delete newErrors.emailConfirm;
        return newErrors;
      }
    });
  }, [formData.email, formData.emailConfirm]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    validateField(name as keyof ContactFormData);
  };

  const validateField = (key: keyof ContactFormData) => {
    let message = '';
    const value = formData[key];

    if (['subject','name','email','emailConfirm','phone','message'].includes(key) && !value) {
      message = '必須項目です';
    }

    if (key === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      message = '正しいメールアドレスを入力してください';
    }

    if (key === 'phone' && value && !/^[0-9\-+() ]+$/.test(value)) {
      message = '正しい電話番号を入力してください';
    }

    setErrors(prev => ({ ...prev, [key]: message }));
  };

  const validateAll = () => {
    const newErrors: ContactFormErrors = {};

    (['subject','name','email','emailConfirm','phone','message'] as (keyof ContactFormData)[]).forEach((key) => {
      const value = formData[key];
      if (!value) newErrors[key] = '必須項目です';

      if (key === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        newErrors.email = '正しいメールアドレスを入力してください';
      }

      if (key === 'emailConfirm' && value && value !== formData.email) {
        newErrors.emailConfirm = 'メールアドレスが一致しません';
      }

      if (key === 'phone' && value && !/^[0-9\-+() ]+$/.test(value)) {
        newErrors.phone = '正しい電話番号を入力してください';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAll()) return;

    sessionStorage.setItem('contactData', JSON.stringify(formData));
    router.push('/contact/confirm');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div className="u-pageContact lg:ml-[185px] lg:mr-20">
      <HeroSection />

      <div className="u-pageContact-Desc lg:text-center max-w-4xl lg:w-[82.3%] mx-auto mt-10 lg:mt-20 px-10">
        <div className="u-pageContact-desc shippori lg:text-lg leading-[180%]">
          <p>パナ・ンへのお問い合わせは、下記フォームより承ります。</p>
          <p>ご用件に沿って必要事項をご入力ください。<br className='hidden lg:block'/>確認画面で内容をご確認の上、送信いただけます。</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-4 max-w-4xl mx-auto my-10 lg:my-20 space-y-8 px-5 lg:px-0">
        {/* ご用件 */}
        <fieldset className="relative mb-6 lg:flex gap-6 border-b border-pana-gray02 pb-6 lg:border-none lg:pb-0">
          <div className="w-full lg:w-[220px] shippori text-lg font-medium flex-shrink-0 lg:flex justify-end mb-4 lg:mb-0">
            ご用件 <span className="text-sm h-[30px] inline-block text-pana-red border border-pana-red px-2 py-1 mr-0 ml-6 lg:ml-auto">必須</span>
          </div>
          <div className="flex flex-wrap gap-4 lg:gap-6 items-center">
            {['ご予約について', 'サロン業務内容について', '採用情報について', 'その他'].map((item) => (
              <label key={item} className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="subject"
                  value={item}
                  checked={formData.subject === item}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="shippori h-4 w-4 text-gray-600 border-gray-300"
                  required
                />
                <span className="shippori">{item}</span>
              </label>
            ))}
          </div>
          {errors.subject && touched.subject && <p className="absolute bottom-[-20px] left-[250px] text-pana-red text-xs">{errors.subject}</p>}
        </fieldset>

        {/* お名前 */}
        <div className="relative lg:flex items-center gap-6 border-b border-pana-gray02 pb-8 lg:border-none lg:pb-0">
          <label htmlFor="name" className="w-full lg:w-[220px] shippori text-lg font-medium lg:flex justify-end">
            お名前 <span className="text-sm inline-block text-pana-red border border-pana-red px-2 py-1 mr-0 ml-6 lg:ml-auto">必須</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="shippori w-full lg:w-auto flex-1 border border-gray-300 px-4 py-3 placeholder-gray-400 focus:border-pana-blueLagoon sm:text-sm mt-2 lg:mt-0"
          />
          {errors.name && touched.name && <p className="absolute bottom-[-20px] left-[250px] text-pana-red text-xs">{errors.name}</p>}
        </div>

        {/* メールアドレス */}
        <div className="relative lg:flex items-center gap-6 border-b border-pana-gray02 pb-8 lg:border-none lg:pb-0">
          <label htmlFor="email" className="w-full lg:w-[220px] shippori text-lg font-medium lg:flex justify-end">
            メールアドレス <span className="text-sm inline-block text-pana-red border border-pana-red px-2 py-1 mr-0 ml-6 lg:ml-auto">必須</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="shippori w-full lg:w-auto flex-1 border border-gray-300 px-4 py-3 placeholder-gray-400 focus:border-pana-blueLagoon sm:text-sm mt-2 lg:mt-0"
          />
          {errors.email && touched.email && <p className="absolute bottom-[-20px] left-[250px] text-pana-red text-xs">{errors.email}</p>}
        </div>

        {/* メールアドレス確認 */}
        <div className="relative lg:flex items-center gap-6 border-b border-pana-gray02 pb-8 lg:border-none lg:pb-0">
          <label htmlFor="emailConfirm" className="w-full lg:w-[220px] shippori text-lg font-medium">
            メールアドレス確認
          </label>
          <input
            id="emailConfirm"
            type="email"
            name="emailConfirm"
            value={formData.emailConfirm}
            onChange={handleChange}
            onBlur={handleBlur}
            className="shippori w-full lg:w-auto flex-1 border border-gray-300 px-4 py-3 placeholder-gray-400 focus:border-pana-blueLagoon sm:text-sm mt-2 lg:mt-0"
          />
          {errors.emailConfirm && touched.emailConfirm && <p className="absolute bottom-[-20px] left-[250px] text-pana-red text-xs">{errors.emailConfirm}</p>}
        </div>

        {/* 電話番号 */}
        <div className="relative lg:flex items-center gap-6 border-b border-pana-gray02 pb-8 lg:border-none lg:pb-0">
          <label htmlFor="phone" className="w-full lg:w-[220px] shippori text-lg font-medium lg:flex justify-end">
            電話番号 <span className="text-sm inline-block text-pana-red border border-pana-red px-2 py-1 mr-0 ml-6 lg:ml-auto">必須</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className="shippori w-full lg:w-auto flex-1 border border-gray-300 px-4 py-3 placeholder-gray-400 focus:border-pana-blueLagoon sm:text-sm mt-2 lg:mt-0"
          />
          {errors.phone && touched.phone && <p className="absolute bottom-[-20px] left-[250px] text-pana-red text-xs">{errors.phone}</p>}
        </div>

        {/* お問い合わせ内容 */}
        <div className="relative lg:flex items-start gap-6">
          <label htmlFor="message" className="w-full lg:w-[220px] shippori text-lg font-medium flex">
            お問い合わせ内容 <span className="text-sm inline-block text-pana-red border border-pana-red px-2 py-1 mr-0 ml-6 lg:ml-auto">必須</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={10}
            className="shippori w-full lg:w-auto flex-1 border border-gray-300 px-4 py-3 placeholder-gray-400 focus:border-pana-blueLagoon sm:text-sm resize-none mt-2 lg:mt-0"
          />
          {errors.message && touched.message && <p className="absolute bottom-[-20px] left-[250px] text-pana-red text-xs">{errors.message}</p>}
        </div>

        {/* 送信ボタン */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="u-button u-button-submit block w-[244px] h-12 border border-pana py-1 pl-6"
          >
            <span className='u-button-text shippori font-medium text-lg lg:text-22px text-left pt-1 pr-20'>確認画面へ</span>
          </button>
        </div>
      </form>
    </div>
  );
}
