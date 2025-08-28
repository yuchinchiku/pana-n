'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ConfirmPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    const data = sessionStorage.getItem('contactData');
    if (!data) {
      router.push('/contact'); // 入力なしで直接アクセスしたら戻す
    } else {
      setFormData(JSON.parse(data));
    }
  }, [router]);

  if (!formData) return null;

  const handleSend = async () => {
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    sessionStorage.removeItem('contactData');
    router.push('/contact/thanks');
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">入力内容の確認</h2>
      <ul className="space-y-2 mb-6">
        <li>ご用件: {formData.subject}</li>
        <li>貴社名: {formData.company}</li>
        <li>お名前: {formData.name}</li>
        <li>メールアドレス: {formData.email}</li>
        <li>電話番号: {formData.phone}</li>
        <li>お問い合わせ内容: {formData.message}</li>
      </ul>
      <div className="flex gap-4">
        <button
          onClick={() => router.push('/contact')}
          className="px-4 py-2 rounded bg-gray-500 text-white"
        >
          修正する
        </button>
        <button
          onClick={handleSend}
          className="px-4 py-2 rounded bg-blue-500 text-white"
        >
          送信する
        </button>
      </div>
    </div>
  );
}
