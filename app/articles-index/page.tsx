// articles-index/page.tsx
"use client";

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Article {
  title: string
  description: string
  slug: string
  image: string
  readTime?: string
  category?: string
}

const articles: Article[] = [
  {
    title: 'Paleo Vs. Keto: Spot the Difference',
    description: 'The Paleolithic and Ketogenic diets are two popular lifestyle choices for those looking to improve their health. Learn the key differences and which might be right for you.',
    slug: 'article1',
    image: '/images/articles/breakfast-ideas.jpg',
    readTime: '5 min read',
    category: 'Diet Comparison'
  },
  {
    title: 'How to Make a Balanced Dinner Plate (Keto Edition)',
    description: 'The Keto diet includes foods that are high in fat and low in carbohydrates like seafood, unprocessed cheese, meat and poultry and leafy vegetables. Master the perfect balance.',
    slug: 'article2',
    image: '/images/articles/meal-planning.jpeg',
    readTime: '7 min read',
    category: 'Meal Planning'
  },
  {
    title: 'Five Best Foods to Eat When You are Sick',
    description: 'In this article, we discuss the five best foods to eat whether you have nausea, cold-like symptoms, dehydration, or the flu. Boost your recovery with these nutritional choices.',
    slug: 'article3',
    image: '/images/articles/macros-guide.jpeg',
    readTime: '4 min read',
    category: 'Wellness'
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function ArticlesIndex() {
  return (
    <div className="mt-24 min-h-screen text-primary py-16 px-4 sm:px-6 lg:px-8">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl opacity-70"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Latest Articles
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our latest insights on nutrition, wellness, and healthy eating habits
          </p>
        </motion.div>
        
        <motion.ul 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8">
          {articles.map((article, index) => (
            <motion.li 
              key={article.slug} 
              variants={itemVariants}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="md:flex">
                <div className="md:w-1/3 relative overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 md:h-full">
                    <Image 
                      src={article.image} 
                      alt={article.title} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                      width={600} 
                      height={400}
                      priority={index === 0}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 md:p-8 md:w-2/3">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 mt-3 line-clamp-2 md:line-clamp-3">
                    {article.description}
                  </p>
                  
                  <div className="mt-5 flex items-center">
                    <Link 
                      href={`/articles/${article.slug}`}
                      className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-200"
                    >
                      Read full article
                      <svg 
                        className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary bg-slate-50 hover:bg-slate-100 transition-colors duration-200"
          >
            <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
