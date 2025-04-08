// components/BackgroundIllustration.tsx
import clsx from 'clsx'
import React from 'react'
import Image from 'next/image'

interface BackgroundIllustrationProps extends React.ComponentPropsWithoutRef<'div'> {
  src: string
  alt?: string
  gradient?: boolean
  gradientFrom?: string
  gradientTo?: string
}

export function BackgroundIllustration({
  className,
  src,
  alt = '',
  gradient = true,
  gradientFrom = 'from-white/60',
  gradientTo = 'to-transparent',
  ...props
}: BackgroundIllustrationProps) {
  return (
    <div {...props} className={clsx('relative', className)}>
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        priority
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        className="absolute inset-0"
        aria-hidden="true"
      />
      {gradient && (
        <div
          className={clsx('absolute inset-0 bg-gradient-to-b', gradientFrom, gradientTo)}
          aria-hidden="true"
        />
      )}
    </div>
  )
}
