// components/CallToAction.tsx
'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { MaskedText } from '@/components/MaskedText'

export function CallToAction() {
  const sectionRef = useRef<HTMLDivElement>(null)

  // Animation variants for MaskedText
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.3, // Stagger animations by 0.3s
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <section
      id="get-started"
      ref={sectionRef}
      className="relative overflow-hidden py-20 sm:py-32 lg:py-40 bg-gray-50"
      style={{
        position: 'relative',
      }}
    >
      {/* Gradient at the bottom to blend into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-gray-50" />

      {/* Main Content without Container */}
      <div className="relative flex flex-col items-center justify-center min-h-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-12">
          {/* Masked Texts with Transition Effects */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full flex justify-center"
          >
            <MaskedText
              text="Eat Better"
              imageSrc="/images/fresh-veggies.jpeg"
              className="text-6xl sm:text-8xl lg:text-9xl font-extrabold text-primary drop-shadow-lg"
            />
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full flex justify-center"
          >
            <MaskedText
              text="Live Healthier"
              imageSrc="/images/healthy.jpeg"
              className="text-5xl sm:text-7xl lg:text-8xl font-bold text-secondary drop-shadow-md"
            />
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full flex justify-center"
          >
            <MaskedText
              text="Feel Amazing"
              imageSrc="/images/feel-amazing.jpeg"
              className="text-6xl sm:text-8xl lg:text-9xl font-extrabold text-accent drop-shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
