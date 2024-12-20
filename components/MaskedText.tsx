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
 * Displays large masked text and animates in only when in view.
 */
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} // animate only once when it comes into view
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {text}
    </motion.div>
  )
}

