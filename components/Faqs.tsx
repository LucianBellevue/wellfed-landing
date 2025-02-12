// components/Faqs.tsx
'use client'

import { Container } from '@/components/Container'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[][] = [
  [
    {
      question: 'How does WellFed choose recipes for me?',
      answer:
        'WellFed tailors recipes based on your dietary preferences, favorite cuisines, and nutritional goals—ensuring you always find options you’ll love.',
    },
    {
      question: 'Can I plan my meals for the entire week?',
      answer:
        'Absolutely. With our meal-planning feature, you can schedule your breakfast, lunch, dinner, and even snacks for the entire week.',
    },
    {
      question: 'What if I have dietary restrictions or allergies?',
      answer:
        'Simply update your profile with any dietary needs or allergies, and WellFed will filter recipes to ensure you have safe, delicious options.',
    },
  ],
  [
    {
      question: 'Are nutritional facts available for each recipe?',
      answer:
        'Yes, every recipe includes detailed nutritional information to help you make informed decisions about your meals.',
    },
    {
      question: 'Can WellFed help me create a shopping list?',
      answer:
        'Certainly! Once you select your meals for the week, WellFed automatically generates a grocery list with all the required ingredients.',
    },
    {
      question: 'How do I save my favorite recipes?',
      answer:
        'Tap the “Favorite” icon on any recipe to add it to your collection, so you can easily access your bookmarks whenever you need them.',
    },
  ],
  [
    {
      question: 'Is WellFed free, or do I need a subscription?',
      answer:
        'WellFed offers a robust free version with essential features. For advanced tools and exclusive meal plans, you can upgrade to a premium subscription.',
    },
    {
      question: 'Can I share meal plans with friends or family?',
      answer:
        'Yes! WellFed allows you to share your meal plans or individual recipes via in-app sharing, email, or social media.',
    },
    {
      question: 'How does WellFed protect my data and privacy?',
      answer:
        'Your privacy is our top priority. We securely store your personal information and use it only to enhance your experience—never selling your data to third parties.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="mt-2 text-lg text-gray-600 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            If you have any questions, please{' '}
            <Link href="mailto:info@wellfed.us" className="text-primary underline">
              reach out to us
            </Link>
            .
          </motion.p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-8">
              {column.map((faq, faqIndex) => (
                <motion.div
                  key={faqIndex}
                  className="rounded-lg border border-gray-200 p-6 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (faqIndex + columnIndex * 0.2) }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
