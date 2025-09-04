'use client';
import { useState } from 'react';
import PageTransitionFog from '@/components/PageTransitionFog';
import PageHero from '@/components/pages/PageHero';

export default function StoryHeroSection() {
  const [showHeroText, setShowHeroText] = useState(false);

  return (
    <>
      <PageTransitionFog setShowHeroText={setShowHeroText} />
      <PageHero titleSmall="パナ・ンの" title="独自メニュー" subTitle="pana-n’s  original menu"
        animate={showHeroText} />
    </>
  );
}
