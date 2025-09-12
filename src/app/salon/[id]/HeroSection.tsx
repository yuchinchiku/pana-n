'use client';
import PageHeroHor from '@/components/pages/PageHeroHor';

type HeroSectionProps = {
  title: string;
  subTitle?: string;
  buttonHref?: string;
};

export default function HeroSection({ title, subTitle,buttonHref }: HeroSectionProps) {

  return (
    <>
      <PageHeroHor title={title} subTitle={subTitle} buttonHref={buttonHref} animate={true} />
    </>
  );
}
