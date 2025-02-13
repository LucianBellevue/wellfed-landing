// (main)/articles/index.tsx
import Link from 'next/link'
import Image from 'next/image'

interface Article {
  title: string
  description: string
  slug: string
  image: string
}

const articles: Article[] = [
  {
    title: 'Paleo Vs. Keto: Spot the Difference',
    description: 'The Paleolithic and Ketogenic diets are two popular lifestyle choices for those looking to improve their health.',
    slug: 'article-one',
    image: '/images/articles/breakfast.jpeg'
  },
  {
    title: 'How to Make a Balanced Dinner Plate (Keto Edition)',
    description: 'The Keto diet includes foods that are high in fat and low in carbohydrates like seafood, unprocessed cheese, meat and poultry and leafy vegetables',
    slug: 'article-two',
    image: '/images/articles/meal-planning.jpeg'
  },
  {
    title: 'Five Best Foods to Eat When You are Sick',
    description: 'In this article, we discuss the five best foods to eat whether you have nausea, cold-like symptoms, dehydration, or the flu.',
    slug: 'article-three',
    image: '/images/articles/macros.jpeg'
  },
]

export default function ArticlesIndex() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-semibold text-gray-900 mb-8">
        Latest Articles
      </h1>
      <ul className="space-y-8">
        {articles.map((article) => (
          <li key={article.slug} className="bg-white shadow-sm rounded-lg p-6">
            <Image src={article.image} alt={article.title} className="w-full h-40 object-cover rounded" height={300} width={300}/>
            <h2 className="text-xl font-bold mt-4">{article.title}</h2>
            <p className="text-gray-700 mt-2">{article.description}</p>
            <Link href={`/articles/${article.slug}`}
             className="inline-block mt-4 text-primary hover:underline font-medium">
                Read more →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
