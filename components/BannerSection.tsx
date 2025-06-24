// components/BannerSection.tsx
'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import Link from 'next/link'

// Button animation variants

// Button animation variants
const buttonVariants = {
  initial: { 
    opacity: 0,
    y: 20,
    scale: 0.9
  },
  animate: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  },
  tap: {
    scale: 0.95
  }
}

// Gradient animation for background
const gradientVariants = {
  initial: { 
    opacity: 0,
    backgroundPosition: '0% 50%',
  },
  animate: { 
    opacity: 0.8, // Slightly reduced opacity for subtler effect
    backgroundPosition: '100% 50%',
    transition: {
      duration: 20, // Slower, more subtle movement
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse' as const,
    }
  }
}

const floatingElementVariants = {
  initial: { y: 0 },
  animate: { y: [-10, 10, -10], transition: { repeat: Infinity, duration: 5, ease: 'easeInOut' } }
}

const pulseVariants = {
  initial: { scale: 1 },
  animate: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 3, ease: 'easeInOut' } }
}

export function BannerSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()
  
  // Words that will flip in the heading
  const [wordIndex, setWordIndex] = useState(0)
  const flipWords = ['Healthier', 'Happier', 'Stronger', 'Energized', 'Balanced']
  
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setWordIndex((prev) => (prev + 1) % flipWords.length)
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [isInView, flipWords.length])

  useEffect(() => {
    if (isInView) {
      controls.start('animate')
    }
  }, [isInView, controls])

  return (
    <section className="w-full bg-white py-8">
      <div
        ref={ref}
        className="relative overflow-hidden rounded-3xl mx-auto w-[95%] max-w-[1200px] min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] bg-white shadow-2xl border border-gray-100 py-8 sm:py-12"
      >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 z-0"
        variants={gradientVariants}
        initial="initial"
        animate="animate"
        style={{
          background: 'linear-gradient(120deg, rgba(255,255,255,1) 0%, rgba(245,250,255,1) 25%, rgba(240,255,248,1) 50%, rgba(255,253,240,1) 75%, rgba(255,255,255,1) 100%)',
          backgroundSize: '400% 400%',
        }}
      />
      
      {/* Decorative circles - keeping these for modern subtle background */}
      <motion.div
        className="absolute top-[10%] left-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-green-50/20 to-blue-50/20 blur-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.1, 1],
          x: [0, 10, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 8, 
          delay: 0.2,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[10%] w-80 h-80 rounded-full bg-gradient-to-tr from-amber-50/20 to-emerald-50/20 blur-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.1, 1],
          x: [0, -10, 0],
          y: [0, 10, 0]
        }}
        transition={{ 
          duration: 10, 
          delay: 0.5,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />
      <motion.div
        className="absolute top-[40%] right-[20%] w-48 h-48 rounded-full bg-gradient-to-tl from-blue-50/20 to-purple-50/20 blur-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.2, 1],
          x: [0, 15, 0],
          y: [0, 15, 0]
        }}
        transition={{ 
          duration: 12, 
          delay: 1,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-12 max-w-6xl mx-auto">
        {/* Main heading with modern animation */}
        <div className="overflow-hidden">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#b64b29] to-[#d86a45] text-center mb-6 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block mb-2 sm:mb-0 sm:inline">Eat Better,</span>{' '}
            <span className="block sm:inline">Live{' '}
              <span 
                className="relative inline-block overflow-visible min-w-[140px] sm:min-w-[180px] md:min-w-[220px] mx-1" 
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', perspective: '800px' }}
              >
                <motion.span
                  key={wordIndex}
                  className="inline-block text-[#e67d5c] font-bold"
                  style={{ lineHeight: 'inherit', display: 'inline-block', transformStyle: 'preserve-3d' }}
                  initial={{ opacity: 0, x: -30, rotateY: 90 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: 30, rotateY: -90 }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                >
                  {flipWords[wordIndex]}
                </motion.span>
              </span>
            </span>
          </motion.h1>
        </div>
        
        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-600 text-center max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Transform your relationship with food through personalized meal plans and expert guidance
        </motion.p>
        
        {/* Visual Animation Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-10 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-[#b64b29] to-[#d86a45] opacity-30"
            variants={floatingElementVariants}
            initial="initial"
            animate="animate"
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-gradient-to-r from-[#b64b29] to-[#c85a37] opacity-30"
            variants={floatingElementVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 1 }}
          />
          <motion.div 
            className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-gradient-to-r from-[#b64b29] to-white opacity-20"
            variants={floatingElementVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.5 }}
          />
        </div>
        
        {/* Main CTA Button */}
        <motion.div
          className="mt-8 w-full max-w-md mx-auto relative z-10"
          variants={buttonVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          whileHover="hover"
          whileTap="tap"
          transition={{ delay: 0.7 }}
        >
          <motion.div 
            className="absolute -inset-1 bg-gradient-to-r from-white via-[#b64b29] to-white rounded-full opacity-75 blur-sm"
            animate={{ 
              background: [
                'linear-gradient(45deg, rgba(255,255,255,0.8), #b64b29, rgba(255,255,255,0.8))', 
                'linear-gradient(90deg, rgba(255,255,255,0.8), #b64b29, rgba(255,255,255,0.8))',
                'linear-gradient(135deg, rgba(255,255,255,0.8), #b64b29, rgba(255,255,255,0.8))',
                'linear-gradient(180deg, rgba(255,255,255,0.8), #b64b29, rgba(255,255,255,0.8))',
                'linear-gradient(225deg, rgba(255,255,255,0.8), #b64b29, rgba(255,255,255,0.8))',
                'linear-gradient(270deg, rgba(255,255,255,0.8), #b64b29, rgba(255,255,255,0.8))',
                'linear-gradient(315deg, rgba(255,255,255,0.8), #b64b29, rgba(255,255,255,0.8))'
              ] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            variants={pulseVariants}
            initial="initial"
            animate="animate"
            className="relative"
          >
            <Link 
              href="/download" 
              className="flex items-center justify-center bg-gradient-to-r from-[#b64b29] to-[#c85a37] text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl w-full relative z-10"
            >
              <span className="mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="white"/>
                </svg>
              </span>
              <span className="relative">
                <span className="absolute -inset-0.5 rounded-lg blur opacity-20 bg-white animate-[pulse_2s_ease-in-out_infinite]"></span>
                <span className="relative">Download Our App</span>
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
    </section>
  )
}
