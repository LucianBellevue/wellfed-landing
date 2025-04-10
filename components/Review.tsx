// components/Review.tsx
'use client'

import React, { useMemo } from 'react'
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

  // No need for special text rendering since we're using HTML entities in the text

  return (
    <motion.figure
      className={clsx(
        'rounded-3xl bg-white/20 p-6 backdrop-blur-md shadow-lg border border-white/10 relative overflow-hidden group',
        className
      )}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: animationDelay }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      {...props}
    >
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 bg-primary/10 rounded-full blur-2xl opacity-70 transition-opacity group-hover:opacity-100"></div>
      
      <blockquote className="text-white">
        <motion.p 
          className="text-lg font-semibold leading-6 text-primary-50 group-hover:text-white transition-colors duration-300"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          &ldquo;{title}&rdquo;
        </motion.p>
        <motion.p 
          className="mt-3 text-base leading-7 text-gray-200"
          initial={{ opacity: 0.9 }}
          whileHover={{ opacity: 1 }}
        >
          {body}
        </motion.p>
      </blockquote>
      
      <motion.figcaption 
        className="mt-4 text-sm text-gray-300 font-medium flex items-center"
        initial={{ opacity: 0.7 }}
        whileHover={{ opacity: 1 }}
      >
        <span className="text-primary-200 mr-2">★</span>
        {author}
      </motion.figcaption>
      
      {/* Bottom decorative line */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary/40 to-secondary/40"
        initial={{ width: '30%' }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </motion.figure>
  )
}
