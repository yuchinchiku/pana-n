import Hero from '@/components/top/Hero';
import Intro from '@/components/top/Intro';
import Story from '@/components/top/Story';
import Store from '@/components/top/Store';
import Faq from '@/components/top/Faq';

export default function Home() {
  return (
    <>
      <Hero/>
      <Intro/>
      <Story/>
      <Store/>
      <Faq/>
    </>
  );
}
