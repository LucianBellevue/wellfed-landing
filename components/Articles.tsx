'use client'

// components/Articles.tsx
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { motion } from 'framer-motion'

interface Article {
  title: string
  description: string
  image: string
  url: string
}

const articles: Article[] = [
  {
    title: 'Paleo Vs. Keto: Spot the Difference',
    description: 'The Paleolithic and Ketogenic diets are two popular lifestyle choices for those looking to improve their health.',
    image: '/images/articles/breakfast-ideas.jpg',
    url: '/articles/article1',
  },
  {
    title: 'How to Make a Balanced Dinner Plate (Keto Edition)',
    description: 'The Keto diet includes foods that are high in fat and low in carbohydrates like seafood, unprocessed cheese, meat and poultry and leafy vegetables',
    image: '/images/articles/meal-planning.jpeg',
    url: '/articles/article2',
  },
  {
    title: 'Five Best Foods to Eat When You are Sick',
    description: 'In this article, we discuss the five best foods to eat whether you have nausea, cold-like symptoms, dehydration, or the flu.',
    image: '/images/articles/macros-guide.jpeg',
    url: '/articles/article3',
  },
]



export function Articles() {
  return (
    <section id="articles" aria-labelledby="articles-title" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 hidden lg:block">
        <svg width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true" className="text-primary/10">
          <defs>
            <pattern id="article-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#article-pattern)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 hidden lg:block">
        <svg width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true" className="text-secondary/10">
          <defs>
            <pattern id="article-pattern-2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#article-pattern-2)" />
        </svg>
      </div>
      
      <Container>
        <motion.div 
          className="max-w-2xl lg:mx-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="articles-title" className="text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Latest Articles
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl">
            Explore our collection of insightful articles that will help you eat healthier,
            plan better meals, and understand nutrition more deeply.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-10 sm:gap-12 lg:grid-cols-2 xl:grid-cols-3 xl:gap-16">
          {articles.map((article, index) => (
            <motion.div 
              key={index} 
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-56 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                <Image
                  src={article.image}
                  alt={article.title}
                  width={600}
                  height={300}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="mt-3 text-base text-gray-600 line-clamp-3">
                  {article.description}
                </p>
                <div className="mt-6">
                  <Link
                    href={article.url}
                    className="inline-flex items-center text-primary font-medium hover:text-secondary transition duration-300 group-hover:translate-x-1 transform"
                  >
                    <span>Read article</span>
                    <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
