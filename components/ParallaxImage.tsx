// components/ParallaxImage.tsx
'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

interface ParallaxImageProps {
  src: string
  alt: string
  speedFactor?: number
  className?: string
}

/**
 * ParallaxImage:
 * Uses scroll progress via Framer Motion to smoothly translate the image vertically.
 * speedFactor determines how fast it moves relative to scroll.
 */
export function ParallaxImage({ src, alt, speedFactor = 0.5, className }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)

  // Track scroll on entire page
  const { scrollYProgress } = useScroll()

  // Map scroll progress [0, 1] to a vertical translation range.
  // For instance, at 0% scroll, translateY = 0, at 100% scroll, translateY = -100 * speedFactor
  const translateY = useTransform(scrollYProgress, [0, 1], [0, speedFactor * -100])

  return (
    <motion.div
      ref={ref}
      className={clsx('relative', className)}
      style={{ y: translateY }}
    >
      <Image src={src} alt={alt} fill className="object-cover rounded-full" />
    </motion.div>
  )
}
