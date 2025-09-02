'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import HeroSection from './HeroSection';
import '@/styles/pages/contact/contact.scss';
import '@/styles/component/button.scss';

export default function ContactPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    subject: 'ご予約について',
    company: '',
    name: '',
    email: '',
    emailConfirm: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<any>({});
  const [touched, setTouched] = useState<any>({});

  // sessionStorage から復元
  useEffect(() => {
    const saved = sessionStorage.getItem('contactData');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  // メールアドレス確認 一致チェック（自動入力でも対応）
  useEffect(() => {
    if (!formData.emailConfirm) {
      setErrors(prev => {
        const { emailConfirm, ...rest } = prev;
        return rest;
      });
      return;
    }
    if (formData.email !== formData.emailConfirm) {
      setErrors(prev => ({ ...prev, emailConfirm: 'メールアドレスが一致しません' }));
    } else {
      setErrors(prev => {
        const { emailConfirm, ...rest } = prev;
        return rest;
      });
    }
  }, [formData.email, formData.emailConfirm]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // メール確認は入力中にリアルタイムチェック
    if (name === 'email' || name === 'emailConfirm') {
      if (!formData.email || !formData.emailConfirm) {
        setErrors((prev: any) => {
          const { emailConfirm, ...rest } = prev;
          return rest;
        });
        return;
      }
      if (name === 'emailConfirm' || name === 'email') {
        if (formData.emailConfirm !== formData.email) {
          setErrors((prev: any) => ({ ...prev, emailConfirm: 'メールアドレスが一致しません' }));
        } else {
          setErrors((prev: any) => {
            const { emailConfirm, ...rest } = prev;
            return rest;
          });
        }
      }
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });

    // 必須・形式チェックはフォーカスアウト時に実行
    validateField(name as keyof typeof formData);
  };

  const validateField = (key: keyof typeof formData) => {
    let message = '';
    const value = formData[key];

    // 必須チェック
    if (['subject','name','email','emailConfirm','phone','message'].includes(key) && !value) {
      message = '必須項目です';
    }

    // メール形式
    if (key === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      message = '正しいメールアドレスを入力してください';
    }

    // 電話番号形式
    if (key === 'phone' && value && !/^[0-9\-+() ]+$/.test(value)) {
      message = '正しい電話番号を入力してください';
    }

    setErrors((prev: any) => ({ ...prev, [key]: message }));
  };

  const validateAll = () => {
    const newErrors: any = {};

    ['subject','name','email','emailConfirm','phone','message'].forEach((key) => {
      const value = formData[key as keyof typeof formData];
      // 必須
      if (!value) newErrors[key] = '必須項目です';

      // メール形式
      if (key === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        newErrors.email = '正しいメールアドレスを入力してください';
      }

      // メール確認一致
      if (key === 'emailConfirm' && value && value !== formData.email) {
        newErrors.emailConfirm = 'メールアドレスが一致しません';
      }

      // 電話番号
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
  };

  return (
    <div className="u-pageContact md:ml-[185px] md:mr-20">
      <HeroSection />

      <div className="u-pageContact-Desc md:text-center max-w-4xl md:w-[82.3%] mx-auto mt-10 md:mt-20 px-10">
        <div className="u-pageContact-desc shippori md:text-lg leading-[180%]">
          <p>パナ・ンへのお問い合わせは、下記フォームより承ります。</p>
          <p>ご用件に沿って必要事項をご入力ください。<br className='hidden md:block'/>確認画面で内容をご確認の上、送信いただけます。</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-4 max-w-4xl mx-auto my-10 md:my-20 space-y-8 px-5 md:px-0">
        {/* ご用件 */}
        <fieldset className="relative mb-6 md:flex gap-6 border-b border-pana-gray02 pb-6 md:border-none md:pb-0">
          <div className="w-full md:w-[220px] shippori text-lg font-medium flex-shrink-0 md:flex justify-end mb-4 md:mb-0">
            ご用件 <span className="text-sm h-[30px] inline-block text-pana-red border border-pana-red px-2 py-1 mr-0 ml-6 md:ml-auto">必須</span>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-6 items-center">
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
        <div className="relative md:flex items-center gap-6 border-b border-pana-gray02 pb-8 md:border-none md:pb-0">
          <label htmlFor="name" className="w-full md:w-[220px] shippori text-lg font-medium md:flex justify-end">
            お名前 <span className="text-sm inline-block text-pana-red border border-pana-red px-2 py-1 mr-0 ml-6 md:ml-auto">必須</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="shippori w-full md:w-auto flex-1 border border-gray-300 px-4 py-3 placeholder-gray-400 focus:border-pana-blueLagoon sm:text-sm mt-2 md:mt-0"
          />
          {errors.name && touched.name && <p className="absolute bottom-[-20px] left-[250px] text-pana-red text-xs">{errors.name}</p>}
        </div>

        {/* メールアドレス */}
        <div className="relative md:flex items-center gap-6 border-b border-pana-gray02 pb-8 md:border-none md:pb-0">
          <label htmlFor="email" className="w-full md:w-[220px] shippori text-lg font-medium md:flex justify-end">
            メールアドレス <span className="text-sm inline-block text-pana-red border border-pana-red px-2 py-1 mr-0 ml-6 md:ml-auto">必須</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="shippori w-full md:w-auto flex-1 border border-gray-300 px-4 py-3 placeholder-gray-400 focus:border-pana-blueLagoon sm:text-sm mt-2 md:mt-0"
          />
          {errors.email && touched.email && <p className="absolute bottom-[-20px] left-[250px] text-pana-red text-xs">{errors.email}</p>}
        </div>

        {/* メールアドレス確認 */}
        <div className="relative md:flex items-center gap-6 border-b border-pana-gray02 pb-8 md:border-none md:pb-0">
          <label htmlFor="emailConfirm" className="w-full md:w-[220px] shippori text-lg font-medium">
            メールアドレス確認
          </label>
          <input
            id="emailConfirm"
            type="email"
            name="emailConfirm"
            value={formData.emailConfirm}
            onChange={handleChange}
            onBlur={handleBlur}
            className="shippori w-full md:w-auto flex-1 border border-gray-300 px-4 py-3 placeholder-gray-400 focus:border-pana-blueLagoon sm:text-sm mt-2 md:mt-0"
          />
          {errors.emailConfirm && touched.emailConfirm && <p className="absolute bottom-[-20px] left-[250px] text-pana-red text-xs">{errors.emailConfirm}</p>}
        </div>

        {/* 電話番号 */}
        <div className="relative md:flex items-center gap-6 border-b border-pana-gray02 pb-8 md:border-none md:pb-0">
          <label htmlFor="phone" className="w-full md:w-[220px] shippori text-lg font-medium md:flex justify-end">
            電話番号 <span className="text-sm inline-block text-pana-red border border-pana-red px-2 py-1 mr-0 ml-6 md:ml-auto">必須</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className="shippori w-full md:w-auto flex-1 border border-gray-300 px-4 py-3 placeholder-gray-400 focus:border-pana-blueLagoon sm:text-sm mt-2 md:mt-0"
          />
          {errors.phone && touched.phone && <p className="absolute bottom-[-20px] left-[250px] text-pana-red text-xs">{errors.phone}</p>}
        </div>

        {/* お問い合わせ内容 */}
        <div className="relative md:flex items-start gap-6">
          <label htmlFor="message" className="w-full md:w-[220px] shippori text-lg font-medium flex">
            お問い合わせ内容 <span className="text-sm inline-block text-pana-red border border-pana-red px-2 py-1 mr-0 ml-6 md:ml-auto">必須</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={10}
            className="shippori w-full md:w-auto flex-1 border border-gray-300 px-4 py-3 placeholder-gray-400 focus:border-pana-blueLagoon sm:text-sm resize-none mt-2 md:mt-0"
          />
          {errors.message && touched.message && <p className="absolute bottom-[-20px] left-[250px] text-pana-red text-xs">{errors.message}</p>}
        </div>

        {/* 送信ボタン */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="u-button u-button-submit block w-[244px] h-12 border border-pana py-1 pl-6"
          >
            <span className='u-button-text shippori font-medium text-lg md:text-22px text-left pt-1 pr-20'>確認画面へ</span>
          </button>
        </div>
      </form>
    </div>
  );
}
