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
    <section id="features" className="pt-40 pb-32 relative overflow-hidden bg-white" ref={sectionRef}>
      {/* Simple white background */}
      
      {/* Decorative Elements - React to activeFeature */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-40 right-1/4 w-24 h-24 rounded-full border-4 border-primary/20"
          animate={{ 
            rotate: 360,
            borderWidth: activeFeature === 1 ? 6 : 4,
            borderColor: activeFeature === 1 ? "rgba(var(--color-primary), 0.3)" : "rgba(var(--color-primary), 0.2)"
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/3 w-16 h-16 rounded-full border-4 border-secondary/20"
          animate={{ 
            rotate: -360,
            borderWidth: activeFeature === 0 ? 6 : 4,
            borderColor: activeFeature === 0 ? "rgba(var(--color-secondary), 0.3)" : "rgba(var(--color-secondary), 0.2)"
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <Container className="relative z-10">
        <div className="text-center px-4 sm:px-6 md:px-8 lg:px-10 pt-10 lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            className="relative z-30"
          >
            <motion.div
              className="absolute -inset-10 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg -z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            />
            <motion.h2
              style={{ opacity: titleOpacity, y: titleY }}
              className="text-4xl sm:text-5xl font-bold relative inline-block"
            >
              <span className="text-primary drop-shadow-sm">AI-Powered Personalization</span>
            </motion.h2>
            <motion.p
              style={{ opacity: titleOpacity, y: titleY }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-xl text-gray-700 max-w-2xl mx-auto font-medium leading-relaxed"
            >
              Our state-of-the-art AI learns your taste and flavor profile with every interaction, delivering
              personalized recipes and meal plans tailored just for you.
            </motion.p>
          </motion.div>
        </div>

        {/* Enhanced Floating Phone with App Screenshots */}
        <motion.div 
          className="mt-24 mb-32"
          style={{ 
            opacity: phoneOpacity, 
            scale: phoneScale,
            rotateY: phoneRotateY
          }}
          whileInView={{ 
            x: [20, 0],
            transition: { 
              duration: 1, 
              type: "spring", 
              stiffness: 50 
            } 
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <PhoneSlideshow activeFeature={activeFeature} />
        </motion.div>
        
        {/* Features Grid with Cards - Enhanced with more prominent images */}
        <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 relative z-20">
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
                  alt="Person enjoying a healthy meal"
                  width={600}
                  height={400}
                  priority
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </motion.div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  AI Taste Profiling
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed flex-1">
                  Our AI learns your unique flavor profile to deliver recipes that perfectly match your palate, adapting to your preferences over time.
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
                  alt="Group of friends enjoying healthy food"
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
