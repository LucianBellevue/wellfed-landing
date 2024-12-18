// components/ParallaxImage.tsx
'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface ParallaxImageProps {
  src: string
  alt: string
  speedFactor?: number
  className?: string
}

export function ParallaxImage({ src, alt, speedFactor = 0.5, className }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // For a more refined approach, you’d calculate the image’s offset and size,
  // but here we just shift based on global scroll for demonstration.
  const translateY = scrollY * speedFactor * -0.1 // Adjust factor as needed

  return (
    <div
      ref={ref}
      className={clsx('relative', className)}
      style={{ transform: `translateY(${translateY}px)`, transition: 'transform 0.1s linear' }}
    >
      <Image src={src} alt={alt} fill className="object-cover rounded-full" />
    </div>
  )
}
