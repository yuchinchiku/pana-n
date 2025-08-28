'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    subject: '',
    company: '',
    name: '',
    email: '',
    emailConfirm: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem('contactData', JSON.stringify(formData));
    router.push('/contact/confirm');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-xl mx-auto space-y-4">
      <fieldset>
        <legend>ご用件 <span className="text-red-500">*</span></legend>
        {['ご予約について', 'サロン業務内容について', '採用情報について', 'その他'].map((item) => (
          <label key={item} className="block">
            <input
              type="radio"
              name="subject"
              value={item}
              checked={formData.subject === item}
              onChange={handleChange}
              required
            /> {item}
          </label>
        ))}
      </fieldset>

      <label>
        貴社名
        <input type="text" name="company" value={formData.company} onChange={handleChange} />
      </label>

      <label>
        お名前 <span className="text-red-500">*</span>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>

      <label>
        メールアドレス <span className="text-red-500">*</span>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>

      <label>
        メールアドレス確認 <span className="text-red-500">*</span>
        <input type="email" name="emailConfirm" value={formData.emailConfirm} onChange={handleChange} required />
      </label>

      <label>
        電話番号 <span className="text-red-500">*</span>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </label>

      <label>
        お問い合わせ内容 <span className="text-red-500">*</span>
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </label>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">確認画面へ</button>
    </form>
  );
}
