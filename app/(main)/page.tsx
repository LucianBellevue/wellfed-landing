// app/page.tsx
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Reviews } from '@/components/Reviews'

export default function HomePage() {
  return (
    <>
      <Hero />
      <CallToAction />
      <Reviews />
      <Faqs />
    </>
  );
}
