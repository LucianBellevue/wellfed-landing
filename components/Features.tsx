// components/Features.tsx
'use client'

import { Container } from '@/components/Container'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function Features() {
  return (
    <section id="features" className="py-20">
      <Container>
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-primary"
          >
            AI-Powered Personalization
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto"
          >
            Our state-of-the-art AI learns your taste and flavor profile with every interaction, delivering
            personalized recipes and meal plans tailored just for you.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-xl">
              <Image
                src="/images/healthy-person-1.jpeg"
                alt="Person enjoying a healthy meal"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-primary">
              AI Taste Profiling
            </h3>
            <p className="mt-4 text-center text-gray-600">
              Our AI learns your unique flavor profile to deliver recipes that perfectly match your palate.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-xl">
              <Image
                src="/images/healthy-person-2.jpeg"
                alt="Group of friends enjoying healthy food"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-primary">
              Personalized Recipes
            </h3>
            <p className="mt-4 text-center text-gray-600">
              Enjoy a curated selection of recipes that evolve with your feedback and preferences.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-xl">
              <Image
                src="/images/healthy-person-3.jpeg"
                alt="Individual cooking healthy food"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-primary">
              Smart Meal Planning
            </h3>
            <p className="mt-4 text-center text-gray-600">
              Let our AI help you effortlessly plan your meals, saving time and ensuring balanced nutrition.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
