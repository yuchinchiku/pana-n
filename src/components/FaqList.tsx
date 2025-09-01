import '@/styles/component/faq.scss';
import '@/styles/component/list.scss';
import { faqs } from '@/data/faqs';

type Props = {
  variant?: 'top' | 'sub'; // ページの種類でクラスを変える
};

export default function FaqList({ variant = 'sub' }: Props) {
  const wrapperClass =
    variant === 'top'
      ? 'u-faqList u-fade-in pt-4 max-w-[800px]' // トップページ用
      : 'u-faqList u-fade-in  max-w-[800px]  px-10 md:px-0 mx-auto mt-10 md:mt-0 mb-20 md:mb-40'; // 下層ページ用

  // トップページなら最初の3件だけ表示
  const displayFaqs = variant === 'top' ? faqs.slice(0, 3) : faqs;

  return (
    <ul className={wrapperClass}>
      {displayFaqs.map((item) => (
        <li
          key={item.question}
          className="u-faq-item u-fade-in shippori font-medium py-6 border-b border-pana-gray01"
        >
          <div className="md:text-lg flex justify-start align-top gap-3 md:gap-4 pb-2 md:pb-6">
            <p className="text-2xl flex-shrink-0">Q</p>
            <p className='pt-1'>{item.question}</p>
          </div>
          <div className="flex justify-start align-top gap-3 md:gap-4">
            <p className="text-2xl flex-shrink-0">A</p>
            <div
              className="shippori font-medium pt-1"
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
