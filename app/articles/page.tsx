// pages/articles/index.tsx
import Link from 'next/link'

interface Article {
  title: string
  description: string
  slug: string
  image: string
}

const articles: Article[] = [
  {
    title: '10 Simple Breakfast Ideas',
    description: 'Start your day right with these easy, nutritious breakfast options.',
    slug: 'article-one',
    image: '/images/articles/breakfast.jpg'
  },
  {
    title: 'Meal Planning for Busy People',
    description: 'Optimize your week with simple meal planning strategies.',
    slug: 'article-two',
    image: '/images/articles/meal-planning.jpg'
  },
  {
    title: 'Understanding Macros',
    description: 'Learn about proteins, carbs, and fats for a balanced diet.',
    slug: 'article-three',
    image: '/images/articles/macros.jpg'
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
            <img src={article.image} alt={article.title} className="w-full h-40 object-cover rounded" />
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
