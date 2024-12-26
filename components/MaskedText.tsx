// components/MaskedText.tsx
'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'

interface MaskedTextProps {
  text: string
  imageSrc: string
  className?: string
}

export function MaskedText({ text, imageSrc, className }: MaskedTextProps) {
  return (
    <motion.div
      className={clsx(
        'relative font-bold uppercase inline-block bg-clip-text text-transparent',
        className
      )}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {text}
    </motion.div>
  )
}
