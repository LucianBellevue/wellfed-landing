// components/Review.tsx
'use client'

import { useMemo } from 'react'
import clsx from 'clsx'
import { motion, HTMLMotionProps } from 'framer-motion'
import type { Review as ReviewType } from '@/types/review'

interface ReviewProps extends ReviewType, Omit<HTMLMotionProps<'figure'>, keyof ReviewType> {
  className?: string
}

export function Review({
  title,
  body,
  author,
  className,
  ...props
}: ReviewProps) {
  // Memoize the animation delay to prevent recalculation on re-renders
  const animationDelay = useMemo(() => Math.random() * 0.5, [])

  return (
    <motion.figure
      className={clsx(
        'rounded-3xl bg-white/20 p-6 backdrop-blur-md shadow-lg',
        className
      )}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: animationDelay }}
      viewport={{ once: true, amount: 0.3 }}
      {...props}
    >
      <blockquote className="text-white">
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['\u201C'] after:content-['\u201D']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-4 text-sm text-gray-200 before:content-['–_']">
        {author}
      </figcaption>
    </motion.figure>
  )
}
