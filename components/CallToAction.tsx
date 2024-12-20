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

  // Track scroll progress within this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Horizontal translation for entire content
  const translateX = useTransform(scrollYProgress, [0, 1], [0, -500])

  // Motion variants for text container (glassmorphism)
  const textContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  // Motion variants for images (hover effects)
  const imageVariants = {
    rest: { scale: 1, rotate: 0, filter: 'brightness(1)' },
    hover: {
      scale: 1.05,
      rotate: 2,
      filter: 'brightness(1.1)',
      transition: { duration: 0.3 }
    }
  }

  return (
    <section
      id="get-started"
      ref={sectionRef}
      className="relative overflow-hidden py-10 min-h-[150vh]"
      style={{
        backgroundColor: 'gray-50',
        position: 'relative'
      }}
    >
      {/* Rotating circle background for visual interest */}
      <div className="pointer-events-none absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#b64b29" className="animate-spin-slower" />
      </div>

      <Container className="relative flex items-center justify-center min-h-screen">
        <motion.div
          className="mx-auto max-w-4xl flex flex-col items-center sm:text-center space-y-12"
          style={{ x: translateX }}
        >
          {/* Large masked text */}
          <MaskedText
            text="Eat Better"
            imageSrc="/images/fresh-veggies.jpeg"
            className="text-6xl sm:text-8xl font-bold"
          />

          <div className="relative flex flex-col items-center space-y-8 max-w-xl">
            {/* First parallax image with hover effect */}
            <motion.div
              variants={imageVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="w-80 h-80"
            >
              <ParallaxImage
                src="/images/dish-1.jpg"
                alt="Healthy dish"
                speedFactor={0.5}
                className="w-full h-full rounded-full object-cover shadow-lg"
              />
            </motion.div>

            {/* Glassmorphism text container */}
            <motion.div
              className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-gray-900 shadow-lg"
              variants={textContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
                Your Personalized Culinary Journey
              </h2>
              <p className="mt-4 text-lg">
                Scroll through to uncover a world of personalized, nutritionist-approved recipes.
                Optimize your meal planning, elevate your grocery shopping, and discover how effortless
                it is to cook smarter, eat healthier, and feel better every day.
              </p>
            </motion.div>

            {/* Second parallax image with hover effect */}
            <motion.div
              variants={imageVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="w-80 h-80"
            >
              <ParallaxImage
                src="/images/dish-2.jpg"
                alt="Another healthy dish"
                speedFactor={0.3}
                className="w-full h-full rounded-full object-cover shadow-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
