// app/page.tsx
import { Articles } from '@/components/Articles';
import { BannerSection } from '@/components/BannerSection';
import { Faqs } from '@/components/Faqs'
import { Features } from '@/components/Features';
import { Hero } from '@/components/Hero'
import { Reviews } from '@/components/Reviews'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <BannerSection />
      <Articles />
      <Reviews />
      <Faqs />
    </>
  );
}
