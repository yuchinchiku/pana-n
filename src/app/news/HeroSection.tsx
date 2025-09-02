// app/story/StoryHeroSection.tsx (クライアント)
'use client';
import { useState } from 'react';
import PageTransitionFog from '@/components/PageTransitionFog';
import PageHero from '@/components/pages/PageHero';

export default function StoryHeroSection() {
  const [showHeroText, setShowHeroText] = useState(false);

  return (
    <>
      <PageTransitionFog setShowHeroText={setShowHeroText} />
      <PageHero title="お知らせ" subTitle="news"
        animate={showHeroText} />
    </>
  );
}
