// components/BannerSection.tsx
'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'

const pieceVariants = {
  hidden: (custom: number) => {
    // Define initial offsets and rotations for 6 pieces:
    switch (custom) {
      case 0:
        return { x: -200, y: -200, opacity: 0, rotate: 0 }
      case 1:
        return { x: 0, y: -200, opacity: 0, rotate: 15 }
      case 2:
        return { x: 200, y: -200, opacity: 0, rotate: 0 }
      case 3:
        return { x: -200, y: 200, opacity: 0, rotate: -15 }
      case 4:
        return { x: 0, y: 200, opacity: 0, rotate: 15 }
      case 5:
        return { x: 200, y: 200, opacity: 0, rotate: 0 }
      default:
        return { x: 0, y: 0, opacity: 0, rotate: 0 }
    }
  },
  visible: { x: 0, y: 0, opacity: 1, rotate: 0 },
}

export function BannerSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden rounded-lg mx-auto my-10 w-[95%] max-w-[1000px] h-[40vh] sm:h-[50vh] lg:h-[50vh]"
    >
      {/* Grid container for 6 puzzle pieces */}
      <motion.div
        className="relative w-full h-full grid grid-cols-3 grid-rows-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Piece 0: Top-Left */}
        <motion.div
          custom={0}
          variants={pieceVariants}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full h-full"
          style={{
            backgroundImage: "url('/images/healthy.jpeg')",
            backgroundSize: '300% 200%',
            backgroundPosition: '0% 0%',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Piece 1: Top-Center */}
        <motion.div
          custom={1}
          variants={pieceVariants}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full h-full"
          style={{
            backgroundImage: "url('/images/healthy.jpeg')",
            backgroundSize: '300% 200%',
            backgroundPosition: '50% 0%',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Piece 2: Top-Right */}
        <motion.div
          custom={2}
          variants={pieceVariants}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full h-full"
          style={{
            backgroundImage: "url('/images/healthy.jpeg')",
            backgroundSize: '300% 200%',
            backgroundPosition: '100% 0%',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Piece 3: Bottom-Left */}
        <motion.div
          custom={3}
          variants={pieceVariants}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full h-full"
          style={{
            backgroundImage: "url('/images/healthy.jpeg')",
            backgroundSize: '300% 200%',
            backgroundPosition: '0% 100%',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Piece 4: Bottom-Center */}
        <motion.div
          custom={4}
          variants={pieceVariants}
          transition={{ duration: 1, delay: 1.0 }}
          className="w-full h-full"
          style={{
            backgroundImage: "url('/images/healthy.jpeg')",
            backgroundSize: '300% 200%',
            backgroundPosition: '50% 100%',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Piece 5: Bottom-Right */}
        <motion.div
          custom={5}
          variants={pieceVariants}
          transition={{ duration: 1, delay: 1.2 }}
          className="w-full h-full"
          style={{
            backgroundImage: "url('/images/healthy.jpeg')",
            backgroundSize: '300% 200%',
            backgroundPosition: '100% 100%',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </motion.div>

      {/* Overlapping Banner Text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white drop-shadow-2xl text-center">
          Eat Better, Live Healthier
        </h1>
      </motion.div>
    </section>
  )
}
