// components/Reviews.tsx
'use client'

import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import Image from 'next/image'

import { Review } from '@/components/Review'
import Link from 'next/link'

interface Review {
  title: string
  body: string
  author: string
}

const reviews: Array<Review> = [
  {
    title: 'WellFed changed my meal prep game!',
    body: 'As a working mom of two, I never had time to plan healthy meals. WellFed has literally saved our dinnertime. My kids are actually eating vegetables now! Who would have thought an app could make such a difference?',
    author: 'Sarah Johnson, Boston',
  },
  {
    title: 'Finally sticking to my diet!',
    body: "I've tried every diet app out there, but WellFed is the only one that actually understands my keto lifestyle. The personalized shopping lists alone have saved me hours each week. My doctor is amazed at my latest lab results!",
    author: 'Michael Chen, Seattle',
  },
  {
    title: 'Perfect for my fitness journey',
    body: "As a personal trainer, I'm always looking for tools to help my clients. WellFed has become my secret weapon! The macro tracking is spot-on, and the recipe suggestions keep things interesting. I've recommended it to all my clients.",
    author: 'Alicia Rodriguez, Miami',
  },
  {
    title: 'Saved my relationship with food',
    body: 'After years of struggling with my eating habits, WellFed helped me develop a healthier relationship with food. The meal planning is intuitive, and I love how it adapts to my preferences. For the first time, healthy eating feels sustainable.',
    author: 'David Williams, Chicago',
  },
  {
    title: 'Perfect for our busy household',
    body: "Between my husband's gluten intolerance and my vegetarian diet, meal planning was a nightmare. WellFed somehow manages to suggest meals we both love! The shared shopping list feature has eliminated our \"who's stopping at the grocery store\" texts.",
    author: 'Emma Thompson, Austin',
  },
  {
    title: 'From takeout addict to home chef',
    body: "I used to order takeout five nights a week because cooking felt overwhelming. WellFed's step-by-step recipes and prep instructions made cooking approachable. I've saved money, lost weight, and actually enjoy cooking now. Who am I?!",
    author: 'James Wilson, Portland',
  },
]

export function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null)
  useInView(containerRef, { once: true, amount: 0.3 })

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background image with optimized Next.js Image component */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/wood-table.jpeg"
          alt="Wood table background"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      
      {/* Enhanced overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/50 to-transparent"></div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                           radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2
            id="reviews-title"
            className="text-3xl sm:text-4xl font-bold text-white text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
          >
            Real Stories from WellFed Users
          </h2>
          <p className="mt-4 text-lg text-gray-200 text-center">
            See how WellFed is transforming the way people eat, plan, and enjoy their meals. These testimonials reflect the real impact our app is making in users&apos; daily lives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Review
                title={review.title}
                body={review.body}
                author={review.author}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-white text-lg font-medium mb-6">Join us today</p>
          <Link 
            href="/download" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Download WellFed
            <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
