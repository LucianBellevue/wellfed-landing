'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'

import { Container } from '@/components/Container'

interface Review {
  title: string
  body: string
  author: string
  rating: 1 | 2 | 3 | 4 | 5
}

const reviews: Array<Review> = [
  {
    title: 'Incredible meal planning!',
    body: 'With WellFed, I’ve completely changed how I eat. I plan a whole week of nutritious meals in minutes!',
    author: 'HealthyChef123',
    rating: 5,
  },
  {
    title: 'Delicious recipes every time',
    body: 'I never imagined I’d find so many easy and healthy recipes in one app. My kids love the meals!',
    author: 'MomOf3',
    rating: 5,
  },
  {
    title: 'Saved so much time & money',
    body: 'WellFed’s grocery list feature cuts my shopping time in half. I’m also wasting less food and saving money!',
    author: 'FrugalFoodie',
    rating: 5,
  },
  {
    title: 'Lost weight, feeling great',
    body: 'I’ve finally been able to stick to my nutrition goals. Thanks to WellFed, I lost 10lbs in a month—without feeling deprived!',
    author: 'FitAndFull',
    rating: 5,
  },
  {
    title: 'Endless variety',
    body: 'I never get bored. Each week I discover new cuisines and dietary options that keep me excited about cooking.',
    author: 'GlobalGourmet',
    rating: 5,
  },
  {
    title: 'Perfect for busy schedules',
    body: 'As a working professional, having my meals planned out is a game-changer. I feel more organized and healthier than ever.',
    author: 'TimeSaver',
    rating: 5,
  },
  {
    title: 'Family-approved',
    body: 'My picky eaters now enjoy dinner. The app’s personalized recommendations help me find meals everyone likes.',
    author: 'HappyFamily',
    rating: 5,
  },
  {
    title: 'Great for beginners',
    body: 'I never thought I’d enjoy cooking. WellFed’s step-by-step instructions made it easy to start.',
    author: 'NewCookInTown',
    rating: 5,
  },
  {
    title: 'Dietary needs met',
    body: 'I have gluten intolerance, and WellFed ensures I only see recipes that are safe for me. Such peace of mind!',
    author: 'GlutenFreeLife',
    rating: 5,
  },
  {
    title: 'Inspires creativity',
    body: 'I’ve discovered ingredients I never used before. Now I’m experimenting in the kitchen and loving it.',
    author: 'CulinaryExplorer',
    rating: 5,
  },
  {
    title: 'Keeps me on track',
    body: 'WellFed’s nutritional info and meal tracking have helped me stay consistent with my fitness goals.',
    author: 'GymGains',
    rating: 5,
  },
  {
    title: 'Perfect portions',
    body: 'No more guesswork. I can easily adjust serving sizes to match my family’s needs—no leftovers, no shortage!',
    author: 'JustRightMeals',
    rating: 5,
  },
  {
    title: 'An absolute must-have',
    body: 'If you want to cook healthier and smarter, this app is a no-brainer. I can’t imagine meal planning without it now.',
    author: 'Foodie4Life',
    rating: 5,
  },
  {
    title: 'So convenient',
    body: 'I love being able to share meal plans with friends and try out their favorites too. Cooking is now a community experience!',
    author: 'SocialEater',
    rating: 5,
  },
]

function StarIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }: { rating: Review['rating'] }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-primary' : 'fill-gray-300',
          )}
        />
      ))}
    </div>
  )
}

function Review({
  title,
  body,
  author,
  rating,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'figure'>, keyof Review> & Review) {
  const animationDelay = useMemo(() => {
    const possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray<T>(array: Array<T>, numParts: number) {
  const result: Array<Array<T>> = []
  for (let i = 0; i < array.length; i++) {
    const index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: Array<Review>
  className?: string
  reviewClassName?: (reviewIndex: number) => string
  msPerPixel?: number
}) {
  const columnRef = useRef<React.ElementRef<'div'>>(null)
  const [columnHeight, setColumnHeight] = useState(0)
  const duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  const containerRef = useRef<React.ElementRef<'div'>>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.4 })
  const columns = splitArray(reviews, 3)
  const column1 = columns[0]
  const column2 = columns[1]
  const column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                  'md:hidden',
                reviewIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          Everyone is enjoying better meals with WellFed.
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Thousands of users have transformed their eating habits, saved time, and reached their nutrition goals.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}
