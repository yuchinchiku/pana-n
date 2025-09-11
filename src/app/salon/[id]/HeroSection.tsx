'use client';
import PageHeroHor from '@/components/pages/PageHeroHor';

type HeroSectionProps = {
  title: string;
  subTitle?: string;
};

export default function HeroSection({ title, subTitle }: HeroSectionProps) {

  return (
    <>
      <PageHeroHor title={title} subTitle={subTitle} animate={true} />
    </>
  );
}
