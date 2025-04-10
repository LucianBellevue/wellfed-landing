// components/Faqs.tsx
'use client'

import { Container } from '@/components/Container'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

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
  // State to track which FAQ is expanded (for accordion-style interaction)
  const [expandedFaqs, setExpandedFaqs] = useState<{[key: string]: boolean}>({})

  // Toggle FAQ expansion
  const toggleFaq = (columnIndex: number, faqIndex: number) => {
    const key = `${columnIndex}-${faqIndex}`
    setExpandedFaqs(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  // Check if a specific FAQ is expanded
  const isExpanded = (columnIndex: number, faqIndex: number) => {
    const key = `${columnIndex}-${faqIndex}`
    return expandedFaqs[key] || false
  }

  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="py-20 sm:py-32 relative overflow-hidden bg-white"
    >
      
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0, 0, 0, 0.03) 1px, transparent 1px), 
                         radial-gradient(circle at 75% 75%, rgba(0, 0, 0, 0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div>
        <h2 id="faqs-title" className="flex justify-center items-center text-3xl sm:text-4xl font-bold text-primary">
          Frequently Asked Questions
        </h2>
      </div>
      <Container className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >

          
          <h2
            id="faqs-title"
            className="text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center">
            Find answers to common questions about WellFed. If you need more help, please{' '}
            <Link href="mailto:info@wellfed.us" className="text-primary-600 hover:text-primary-700 transition-colors duration-200 underline underline-offset-2">
              reach out to our support team
            </Link>.
          </p>
        </motion.div>
        
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-6">
              {column.map((faq, faqIndex) => {
                const isOpen = isExpanded(columnIndex, faqIndex);
                return (
                <motion.div
                  key={faqIndex}
                  className="rounded-3xl bg-white p-6 shadow-md relative overflow-hidden group hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (faqIndex * 0.1 + columnIndex * 0.2) }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.06), 0 10px 10px -5px rgba(0, 0, 0, 0.03)' }}
                  onClick={() => toggleFaq(columnIndex, faqIndex)}
                >
                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 bg-primary/5 rounded-full blur-2xl opacity-70 transition-opacity group-hover:opacity-100"></div>
                  
                  <div className="flex justify-between items-start cursor-pointer">
                    <motion.h3 
                      className="text-lg font-semibold text-gray-800 group-hover:text-primary-600 transition-colors duration-300"
                      initial={{ opacity: 0.9 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {faq.question}
                    </motion.h3>
                    <motion.div 
                      className="text-primary-600 ml-4 flex-shrink-0 mt-1"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                      </svg>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    className="overflow-hidden"
                    animate={{
                      height: isOpen ? 'auto' : 0,
                      opacity: isOpen ? 1 : 0,
                      marginTop: isOpen ? 16 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.p 
                      className="text-gray-600"
                      initial={{ opacity: 0.9 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                  
                  {/* Bottom decorative line */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary/40 to-secondary/40"
                    initial={{ width: '30%' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              )})}
            </div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link 
            href="mailto:info@wellfed.us" 
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            <span>Still have questions?</span>
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
