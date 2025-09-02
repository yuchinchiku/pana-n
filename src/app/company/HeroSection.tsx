'use client';
import { useState } from 'react';
import PageTransitionFog from '@/components/PageTransitionFog';
import PageHero from '@/components/pages/PageHero';

export default function HeroSection() {
  const [showHeroText, setShowHeroText] = useState(false);

  return (
    <>
      <PageTransitionFog setShowHeroText={setShowHeroText} />
      <PageHero title="会社概要" subTitle="company"
        animate={showHeroText} />
    </>
  );
}
