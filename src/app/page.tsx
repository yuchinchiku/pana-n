import ScrollAnimation from '@/components/ScrollAnimation';
import Hero from '@/components/top/Hero';
import Intro from '@/components/top/Intro';
import Story from '@/components/top/Story';
import Store from '@/components/top/Store';
import Faq from '@/components/top/Faq';
import News from '@/components/top/News';

export default function Home() {
  return (
    <>
      <ScrollAnimation />
      <Hero/>
      <Intro/>
      <Story/>
      <section className='u-store-wrapper sec-black relative z-10 md:pb-24' data-header-color="#fff">
        <Store/>
        <News/>
      </section>
      <Faq/>
    </>
  );
}
