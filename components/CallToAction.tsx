// components/CallToAction.tsx
'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { ParallaxImage } from '@/components/ParallaxImage'
import { MaskedText } from '@/components/MaskedText'

export function CallToAction() {
  const sectionRef = useRef<HTMLDivElement>(null)

  // useScroll hooks from framer-motion to track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // We define a horizontal translation based on vertical scroll progress.
  // For example, at scroll progress 0, translateX = 0.
  // At scroll progress 1, translateX = -200px (or more for a more dramatic swipe).
  // Increase the second value (-500, etc.) to require more scrolling before the section ends.
  const translateX = useTransform(scrollYProgress, [0, 1], [0, -500])

  return (
    <section
      id="get-started"
      ref={sectionRef}
      className="py-10 relative overflow-hidden bg-gradient-to-t from-secondary to-slate-100"
      style={{
        // Increase the section height so that the user has space to scroll and push the horizontal content
        height: '100vh',
        position: 'relative'
      }}
    >
      {/* Rotating circle background for visual interest */}
      <div className="pointer-events-none absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>

      <Container className="relative h-screen flex items-center justify-center">
        {/* We wrap our horizontally-moving content in a motion.div so we can apply transforms */}
        <motion.div
          className="mx-auto max-w-4xl flex flex-col items-center sm:text-center space-y-12"
          style={{ x: translateX }}
        >
          {/* Masked text bigger */}
          <MaskedText
            text="Eat Better"
            imageSrc="/images/fresh-veggies.jpeg"
            className="text-6xl sm:text-8xl font-bold"
          />

          <div className="relative flex flex-col items-center space-y-8">
            {/* First parallax image - moves at a different rate */}
            <ParallaxImage
              src="/images/dish-1.jpg"
              alt="Healthy dish"
              speedFactor={0.5}
              className="w-64 h-64 rounded-full object-cover"
            />

            {/* Heading and description */}
            <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Your Personalized Culinary Journey
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-xl">
              Scroll through to uncover a world of personalized, nutritionist-approved recipes.
              Optimize your meal planning, elevate your grocery shopping, and discover how effortless
              it is to cook smarter, eat healthier, and feel better every day.
            </p>

            {/* Removed the call to action button */}

            {/* Second parallax image */}
            <ParallaxImage
              src="/images/dish-2.jpg"
              alt="Another healthy dish"
              speedFactor={0.3}
              className="w-64 h-64 rounded-full object-cover"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
