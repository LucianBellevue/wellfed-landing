// components/Reviews.tsx
'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'

import { Review } from '@/components/Review'

interface Review {
  title: string
  body: string
  author: string
}

const reviews: Array<Review> = [
  {
    title: 'Can’t wait to try it out!',
    body: 'Everyone I know is buzzing about WellFed. Excited to see how it transforms my meal planning!',
    author: 'FutureUser1',
  },
  {
    title: 'Looks promising!',
    body: 'The features WellFed offers seem exactly what I need to eat healthier and save time.',
    author: 'HealthEnthusiast',
  },
  {
    title: 'Excited for the launch!',
    body: 'WellFed is set to revolutionize how we approach meal planning. Can’t wait to dive in!',
    author: 'NutritionNinja',
  },
  {
    title: 'A game-changer for busy people',
    body: 'Finally, an app that understands the hustle of daily life and makes eating healthy effortless.',
    author: 'BusyBee',
  },
  {
    title: 'Looking forward to personalized recipes',
    body: 'The idea of customized meal suggestions is fantastic. WellFed is going to make my diet so much easier!',
    author: 'FitFanatic',
  },
  {
    title: 'Social and healthy',
    body: 'Love that WellFed encourages sharing meal plans with friends. Healthy eating is now a community activity!',
    author: 'SocialSpoon',
  },
]

export function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null)
  useInView(containerRef, { once: true, amount: 0.3 })

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="relative py-20 sm:py-32 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/wood-table.jpeg')", // Ensure this image exists in your public/images directory
      }}
    >
      {/* Overlay for darkening the wood background slightly */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div
        ref={containerRef}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2
          id="reviews-title"
          className="text-3xl font-semibold text-white text-center"
        >
          People Are Excited About WellFed
        </h2>
        <p className="mt-4 text-lg text-gray-200 text-center">
          Join the growing community eagerly awaiting the launch of WellFed. Discover how our app will make meal planning easier, healthier, and more enjoyable than ever before.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <Review
              key={index}
              title={review.title}
              body={review.body}
              author={review.author}
              className="text-center"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
