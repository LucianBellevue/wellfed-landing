// components/Features.tsx
'use client'

import { Container } from '@/components/Container'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion';
import { PhoneSlideshow } from '@/components/PhoneSlideshow';
import { useRef, useState } from 'react'

export function Features() {
  // State for active feature - used for enhanced interactions and animations
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  
  // Enhanced parallax and scroll-based animations
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])
  const titleY = useTransform(scrollYProgress, [0, 0.15], [50, 0])
  const phoneScale = useTransform(scrollYProgress, [0.1, 0.25], [0.8, 1])
  const phoneOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1])
  const phoneRotateY = useTransform(scrollYProgress, [0.1, 0.3, 0.5], [0, 0, 5])
  
  return (
    <section id="features" className="pt-40 pb-20 relative overflow-hidden bg-white" ref={sectionRef}>
      {/* Simple white background */}
      
      {/* Background is kept clean without decorative elements */}
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-x-12 lg:gap-y-24 pt-10 lg:pt-20">
          {/* Text Content - Positioned to overlap with phone */}
          <motion.div 
            className="lg:col-span-6 xl:col-span-5 z-20 relative px-1 sm:px-0 lg:mt-28"
            style={{ opacity: titleOpacity, y: titleY }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary [text-shadow:_0_4px_8px_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="block">Simplify Your</span>
              <span className="block mt-1">Healthy Eating</span>
              <motion.span 
                className="inline-block text-secondary"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                Journey
              </motion.span>
            </motion.h2>
            
            <motion.div 
              className="mt-6 rounded-md bg-white/90 p-6 backdrop-blur-sm shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p className="text-lg text-gray-800 leading-relaxed">
                WellFed combines AI-powered meal planning, personalized recipes, and smart grocery lists to make healthy eating effortless and enjoyable.
              </p>
            </motion.div>
          </motion.div>

          {/* Phone display - Enhanced with animations and positioned to overlap with text on larger screens */}
          <motion.div
            className="relative z-10 mx-auto max-w-[366px] lg:col-span-6 xl:col-span-7 lg:ml-auto mt-8 lg:mt-0"
            style={{ 
              scale: phoneScale, 
              opacity: phoneOpacity,
              rotateY: phoneRotateY
            }}
          >
            <PhoneSlideshow activeFeature={activeFeature} />
          </motion.div>
        </div>
        
        {/* Features grid - Enhanced with better spacing and animations */}
        <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 relative z-20 mt-24 lg:mt-36">
          {/* Feature 1 - Enhanced with larger image and better visibility */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative"
            onHoverStart={() => setActiveFeature(0)}
            onHoverEnd={() => setActiveFeature(null)}
          >
            {/* Card with enhanced image display */}
            <div className="relative z-10 rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 group-hover:shadow-xl overflow-hidden h-full flex flex-col">
              {/* Larger, more prominent image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/healthy-person-1.jpeg"
                  alt="Person enjoying healthy meal"
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 400px"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  quality={90}
                  className="transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Subtle gradient overlay that preserves image visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/30 group-hover:opacity-70 transition-opacity duration-300" />
                
                {/* Floating label on the image */}
                <motion.div 
                  className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-sm font-medium text-primary">AI-Powered</span>
                </motion.div>
              </div>
              
              {/* Enhanced content area */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Icon with animated background */}
                <div className="inline-flex rounded-xl bg-primary/10 p-3 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </motion.div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  AI-Powered Recommendations
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed flex-1">
                  Our advanced AI analyzes your preferences and dietary needs to suggest meals that are perfect for you and your lifestyle.
                </p>

              </div>
              
              {/* Enhanced gradient border effect */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 transition-all duration-300 group-hover:opacity-100 pointer-events-none" />
            </div>
          </motion.div>
          
          {/* Feature 2 - Enhanced with larger image and better visibility */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 50 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative"
            onHoverStart={() => setActiveFeature(1)}
            onHoverEnd={() => setActiveFeature(null)}
          >
            {/* Card with enhanced image display */}
            <div className="relative z-10 rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 group-hover:shadow-xl overflow-hidden h-full flex flex-col">
              {/* Larger, more prominent image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/healthy-person-2.jpeg"
                  alt="Person preparing healthy ingredients"
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 400px"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  quality={90}
                  className="transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Subtle gradient overlay that preserves image visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/30 group-hover:opacity-70 transition-opacity duration-300" />
                
                {/* Floating label on the image */}
                <motion.div 
                  className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-sm font-medium text-primary">Personalized</span>
                </motion.div>
              </div>
              
              {/* Enhanced content area */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Icon with animated background */}
                <div className="inline-flex rounded-xl bg-primary/10 p-3 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: "loop", delay: 0.5 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </motion.div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  Personalized Recipes
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed flex-1">
                  Enjoy a curated selection of recipes that evolve with your feedback and preferences, ensuring every meal is something you&apos;ll love.
                </p>

              </div>
              
              {/* Enhanced gradient border effect */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 transition-all duration-300 group-hover:opacity-100 pointer-events-none" />
            </div>
          </motion.div>

          {/* Feature 3 - Enhanced with larger image and better visibility */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 50 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative"
            onHoverStart={() => setActiveFeature(2)}
            onHoverEnd={() => setActiveFeature(null)}
          >
            {/* Card with enhanced image display */}
            <div className="relative z-10 rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 group-hover:shadow-xl overflow-hidden h-full flex flex-col">
              {/* Larger, more prominent image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/healthy-person-3.jpeg"
                  alt="Individual cooking healthy food"
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 400px"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  quality={90}
                  className="transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Subtle gradient overlay that preserves image visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/30 group-hover:opacity-70 transition-opacity duration-300" />
                
                {/* Floating label on the image */}
                <motion.div 
                  className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="text-sm font-medium text-primary">Smart Planning</span>
                </motion.div>
              </div>
              
              {/* Enhanced content area */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Icon with animated background */}
                <div className="inline-flex rounded-xl bg-primary/10 p-3 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: "loop", delay: 1 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </motion.div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  Smart Meal Planning
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed flex-1">
                  Let our AI help you effortlessly plan your meals, saving time and ensuring balanced nutrition throughout your week.
                </p>

              </div>
              
              {/* Enhanced gradient border effect */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 transition-all duration-300 group-hover:opacity-100 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
