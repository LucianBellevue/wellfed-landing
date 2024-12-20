// components/MaskedText.tsx
'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'

interface MaskedTextProps {
  text: string
  imageSrc: string
  className?: string
}

/**
 * MaskedText:
 * Displays large text with a background image. Added a subtle motion
 * animation for entry (fade in and slight upward movement).
 */
export function MaskedText({ text, imageSrc, className }: MaskedTextProps) {
  return (
    <motion.div
      className={clsx(
        'relative text-6xl font-bold uppercase inline-block bg-clip-text text-transparent',
        className
      )}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      initial={{ opacity: 0, y: 20 }}      // start slightly offscreen and transparent
      animate={{ opacity: 1, y: 0 }}       // fade in and move up to original position
      transition={{ duration: 0.8, ease: 'easeOut' }} // adjust timing as needed
    >
      {text}
    </motion.div>
  )
}
