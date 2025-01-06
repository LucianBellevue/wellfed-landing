// components/Articles.tsx
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'

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
    title: 'Meal Planning for Busy People',
    description: 'Learn how to efficiently plan weekly meals, save time, and reduce food waste.',
    image: '/images/articles/meal-planning.jpg',
    url: '/articles/article2',
  },
  {
    title: 'Understanding Macros: Protein, Carbs, and Fats',
    description: 'A beginner’s guide to macronutrients and how to balance them for optimal health.',
    image: '/images/articles/macros-guide.jpg',
    url: '/articles/article3',
  },
]

export function Articles() {
  return (
    <section id="articles" aria-labelledby="articles-title" className="py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl lg:mx-0">
          <h2 id="articles-title" className="text-3xl font-medium tracking-tight text-gray-900">
            Latest Articles
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Explore our collection of insightful articles that will help you eat healthier,
            plan better meals, and understand nutrition more deeply.
          </p>
        </div>

        <div className="mt-10 grid gap-10 sm:gap-12 lg:grid-cols-2 xl:grid-cols-3 xl:gap-16">
          {articles.map((article, index) => (
            <div key={index} className="group overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-gray-700 line-clamp-3">
                  {article.description}
                </p>
                <div className="mt-4">
                  <Link
                    href={article.url}
                    className="text-primary font-medium hover:underline"
                  >
                    See more →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
