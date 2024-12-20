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
 * Uses the scroll position of its own element to create a parallax effect.
 * Only applies the effect when the image is in view, by adjusting the offset in useScroll.
 */
export function ParallaxImage({ src, alt, speedFactor = 0.5, className }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)

  // Track scroll relative to this element. The offset "start center" and "end center"
  // means scrollYProgress = 0 when the element's start is at the center of the viewport
  // and scrollYProgress = 1 when the element's end is at the center.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  })

  // Map scroll progress [0,1] to a translate range. Adjust as desired.
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -100 * speedFactor])

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

