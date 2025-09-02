'use client';

import { useState } from 'react';
import PageTransitionFog from '@/components/PageTransitionFog';
import PageHeroHor from '@/components/pages/PageHeroHor';

type HeroSectionProps = {
  title: string;
  subTitle?: string;
};

export default function HeroSection({ title, subTitle }: HeroSectionProps) {
  const [showHeroText, setShowHeroText] = useState(false);

  return (
    <>
      <PageTransitionFog setShowHeroText={setShowHeroText} />
      <PageHeroHor title={title} subTitle={subTitle} animate={showHeroText} />
    </>
  );
}
