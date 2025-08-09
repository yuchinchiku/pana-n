import '@/styles/component/faq.scss';

const faqlist = [
  {
    question: 'パナ・ンの施術は、どのような特徴がありますか？',
    answer: 'パナ・ンでは、琉球の伝統的な癒しの技法と現代のスパテクニックを融合したオリジナルのマッサージ・エステ・もみほぐしを提供しております。<br>沖縄の自然由来の素材や伝統的な技法を取り入れ、唯一無二の癒しの体験をお届けしています。',
  },
  {
    question: '他の質問の例',
    answer: '他の回答の例です。',
  },
  {
    question: 'さらに別の質問',
    answer: 'さらに別の回答です。',
  },
];

export default function FaqList() {
  return (
    <ul className='u-faqList pt-4 max-w-[603px]'>
      {faqlist.map((item) => (
        <li key={item.question} className='u-faq-item shippori font-medium py-3 border-b border-pana-gray01'>
          <div className="text-lg flex justify-start align-top gap-4 pb-6">
            <p className="flex-shrink-0">Q</p>
            <p>{item.question}</p>
          </div>
          <div className="text-lg flex justify-start align-top gap-4">
            <p className="flex-shrink-0">A</p>
            <p className="shippori font-medium" dangerouslySetInnerHTML={{ __html: item.answer }}></p>
          </div>
        </li>
      ))}
    </ul>
  );
}