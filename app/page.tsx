// app/page.tsx
import { Articles } from '@/components/Articles';
import { BannerSection } from '@/components/BannerSection';
import { ChefSpotlight } from '@/components/ChefSpotlight';
import { Faqs } from '@/components/Faqs'
import { Features } from '@/components/Features';
import { FeaturedIn } from '@/components/FeaturedIn';
import { Hero } from '@/components/Hero'
import { Reviews } from '@/components/Reviews'


export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedIn />
      <BannerSection />
      <Articles />
      <Reviews />
      <ChefSpotlight />
      <Faqs />
    </>
  );
}
