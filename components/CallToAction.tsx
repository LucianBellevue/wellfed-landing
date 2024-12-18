// components/CallToAction.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { ParallaxImage } from '@/components/ParallaxImage'
import { MaskedText } from '@/components/MaskedText'

export function CallToAction() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    function handleScroll() {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      // The idea: As the section enters the viewport, we calculate how far it's been scrolled vertically
      // and translate horizontally based on that value.

      const offsetTop = rect.top
      const windowHeight = window.innerHeight
      // When the top of the section hits the top of the viewport, offsetTop = 0
      // We can map vertical scroll to horizontal translation.
      const scrollDist = Math.max(0, windowHeight - offsetTop)
      setScrollPosition(scrollDist)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Calculate a horizontal translation based on scroll position
  // Adjust multiplier for desired speed/distance
  const translateX = -scrollPosition * 0.2

  return (
    <section
      id="get-started"
      ref={sectionRef}
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
      style={{ height: '150vh', position: 'relative' }}
      // Height extended to show parallax effect more clearly
    >
      {/* Background Circle */}
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2 pointer-events-none">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>

      <Container className="relative">
        <div
          className="mx-auto max-w-4xl flex flex-col sm:text-center"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: 'transform 0.1s linear',
          }}
        >
          {/* Masked text overlay */}
          <div className="relative mb-10">
            <MaskedText text="Eat Better" imageSrc="/images/fresh-veggies.jpg" />
          </div>

          {/* Parallax images layered behind or between text */}
          <div className="relative flex flex-col items-center space-y-8">
            <ParallaxImage
              src="/images/dish-1.jpg"
              alt="Healthy dish"
              speedFactor={0.5}
              className="w-64 h-64 rounded-full object-cover"
            />
            <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Start your personalized journey with WellFed
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-xl">
              Sign up now and receive your first personalized, nutritionist-approved recipe.
              Optimize your meal planning and grocery shopping, and discover how easy it is
              to cook smarter, eat healthier, and feel better every day.
            </p>
            <div className="mt-8 flex justify-center">
              <AppStoreLink color="white" />
            </div>

            <ParallaxImage
              src="/images/dish-2.jpg"
              alt="Another healthy dish"
              speedFactor={0.3}
              className="w-64 h-64 rounded-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
