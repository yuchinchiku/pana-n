// app/story/StoryHeroSection.tsx (クライアント)
'use client';
import PageHero from '@/components/pages/PageHero';

export default function StoryHeroSection() {
  return (
    <>
      <PageHero title="お知らせ" subTitle="news" animate={true} />
    </>
  );
}
