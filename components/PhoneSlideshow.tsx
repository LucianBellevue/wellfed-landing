'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PhoneFrame } from '@/components/PhoneFrame'
import Image from 'next/image'

// App screenshots with placeholder images that will be replaced with actual app screenshots
const slides = [
  {
    id: 1,
    title: 'Full Recipe Library',
    image: '/images/pp-screenshot-3.png', // Path corrected to work with Next.js public directory
    alt: 'App screenshot showing personalized recipe feed'
  },
  {
    id: 2,
    title: 'Meal Planning Calendar',
    image: '/images/Mobile Calendar.png', // Path corrected to work with Next.js public directory
    alt: 'App screenshot showing meal planning calendar'
  },
  {
    id: 3,
    title: 'Complete Cooking step-by-step guide',
    image: '/images/Start Cooking_ Steps.png', // Path corrected to work with Next.js public directory
    alt: 'App screenshot showing cooking step-by-step guide'
  },
]

interface PhoneSlideshowProps {
  activeFeature: number | null;
}

export function PhoneSlideshow({ activeFeature }: PhoneSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isManualChange, setIsManualChange] = useState(false)
  
  // Change slide when activeFeature changes
  useEffect(() => {
    if (activeFeature !== null && activeFeature >= 0 && activeFeature < slides.length) {
      setCurrentSlide(activeFeature)
      setIsManualChange(true)
    }
  }, [activeFeature])
  
  // Auto-advance slides unless manually changed
  useEffect(() => {
    if (isManualChange) {
      const timer = setTimeout(() => setIsManualChange(false), 5000)
      return () => clearTimeout(timer)
    }
    
    const interval = setInterval(() => {
      if (!isManualChange) {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }
    }, 4000)
    
    return () => clearInterval(interval)
  }, [isManualChange])
  
  const handleSlideChange = (index: number) => {
    setCurrentSlide(index)
    setIsManualChange(true)
  }
  
  return (
    <div className="relative">
      {/* Floating phone with enhanced animations */}
      <motion.div
        className="relative mx-auto w-[320px]"
        initial={{ y: 0 }}
        animate={{ 
          y: [0, -15, 0],
          rotateZ: [0, 1, 0, -1, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          repeatType: "loop",
          ease: "easeInOut"
        }}
      >
        {/* Enhanced glow effect */}
        <motion.div 
          className="absolute inset-0 -bottom-10 rounded-full blur-xl opacity-70"
          animate={{ 
            background: `linear-gradient(to bottom, var(--tw-gradient-stops))`,
            backgroundImage: `linear-gradient(to bottom, rgb(var(--color-primary) / 0.3), transparent)`
          }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Phone shadow with subtle animation */}
        <motion.div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[20px] bg-black/20 rounded-full blur-md"
          animate={{ 
            width: ['70%', '65%', '70%'],
            opacity: [0.2, 0.15, 0.2]
          }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Phone frame with app screenshots */}
        <PhoneFrame priority className="relative z-10">
          <div className="relative w-full h-full bg-gray-100 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0"
              >
                {/* Placeholder for app screenshot image */}
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  style={{ objectFit: 'cover' }}
                  priority={currentSlide === 0}
                  quality={90}
                  className="rounded-lg"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </PhoneFrame>
      </motion.div>
      
      {/* Enhanced slide indicators with labels */}
      <div className="flex flex-col items-center mt-8">
        <motion.p 
          key={slides[currentSlide].title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-sm font-medium text-gray-800 mb-3"
        >
          {slides[currentSlide].title}
        </motion.p>
        
        <div className="flex justify-center space-x-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => handleSlideChange(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-primary scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
