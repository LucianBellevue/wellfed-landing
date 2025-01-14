// components/Review.tsx
'use client'

import clsx from 'clsx'
import { motion, HTMLMotionProps } from 'framer-motion'

interface Review {
  title: string
  body: string
  author: string
}

export function Review({
  title,
  body,
  author,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'figure'>, keyof Review> & Review & HTMLMotionProps<'figure'>) {
  const animationDelay = Math.random() * 0.5 // Random delay up to 0.5s

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
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
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
