// app/story/StoryHeroSection.tsx (クライアント)
'use client';
import PageHero from '@/components/pages/PageHero';

export default function StoryHeroSection() {

  return (
    <>
      <PageHero
        title="パナ・ンの物語"
        subTitle="pana-n’s story"
        animate={true}
      />
    </>
  );
}
